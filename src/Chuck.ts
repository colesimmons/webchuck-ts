import DeferredPromise from "./DeferredPromise";
import { asyncLoadFile, defer, loadWasm, preloadFiles } from "./utils";
import type { File, Filename } from "./utils";

enum OutMessage {
  // Filesystem
  LOAD_FILE = "loadFile",

  // Run/Replace Code
  RUN_CODE = "runChuckCode",
  RUN_CODE_WITH_REPLACEMENT_DAC = "runChuckCodeWithReplacementDac",
  REPLACE_CODE = "replaceChuckCode",
  REPLACE_CODE_WITH_REPLACEMENT_DAC = "replaceChuckCodeWithReplacementDac",
  REMOVE_LAST_CODE = "removeLastCode",

  // Run/Replace File
  RUN_FILE = "runChuckFile",
  RUN_FILE_WITH_REPLACEMENT_DAC = "runChuckFileWithReplacementDac",
  RUN_FILE_WITH_ARGS = "runChuckFileWithArgs",
  REPLACE_FILE = "replaceChuckFile",
  REPLACE_FILE_WITH_REPLACEMENT_DAC = "replaceChuckFileWithReplacementDac",
  REPLACE_FILE_WITH_ARGS = "replaceChuckFileWithArgs",

  // SHRED
  REMOVE_SHRED = "removeShred",
  IS_SHRED_ACTIVE = "isShredActive",

  // Event
  SIGNAL_EVENT = "signalChuckEvent",
  BROADCAST_EVENT = "broadcastChuckEvent",
  LISTEN_FOR_EVENT_ONCE = "listenForEventOnce",
  START_LISTENING_FOR_EVENT = "startListeningForChuckEvent",
  STOP_LISTENING_FOR_EVENT = "stopListeningForChuckEvent",

  // Int, Float, String
  SET_INT = "setChuckInt",
  GET_INT = "getChuckInt",
  SET_FLOAT = "setChuckFloat",
  GET_FLOAT = "getChuckFloat",
  SET_STRING = "setChuckString",
  GET_STRING = "getChuckString",

  // Int[]
  SET_INT_ARRAY = "setGlobalIntArray",
  GET_INT_ARRAY = "getGlobalIntArray",
  SET_INT_ARRAY_VALUE = "setGlobalIntArrayValue",
  GET_INT_ARRAY_VALUE = "getGlobalIntArrayValue",
  SET_ASSOCIATIVE_INT_ARRAY_VALUE = "setGlobalAssociativeIntArrayValue",
  GET_ASSOCIATIVE_INT_ARRAY_VALUE = "getGlobalAssociativeIntArrayValue",

  // Float[]
  SET_FLOAT_ARRAY = "setGlobalFloatArray",
  GET_FLOAT_ARRAY = "getGlobalFloatArray",
  SET_FLOAT_ARRAY_VALUE = "setGlobalFloatArrayValue",
  GET_FLOAT_ARRAY_VALUE = "getGlobalFloatArrayValue",
  SET_ASSOCIATIVE_FLOAT_ARRAY_VALUE = "setGlobalAssociativeFloatArrayValue",
  GET_ASSOCIATIVE_FLOAT_ARRAY_VALUE = "getGlobalAssociativeFloatArrayValue",

  // Clear
  CLEAR_INSTANCE = "clearInstance",
  CLEAR_GLOBALS = "clearGlobals",
}

enum InMessage {
  INIT_DONE = "initCallback",
  PRINT = "console print",
  EVENT = "eventCallback",

  INT = "intCallback",
  FLOAT = "floatCallback",
  STRING = "stringCallback",
  INT_ARRAY = "intArrayCallback",
  FLOAT_ARRAY = "floatArrayCallback",

  NEW_SHRED = "newShredCallback",
  REPLACED_SHRED = "replacedShredCallback",
  REMOVED_SHRED = "removedShredCallback",
}

export default class Chuck extends window.AudioWorkletNode {
  private deferredPromises: { [key: number]: any };
  private deferredPromiseCounter: number;
  private eventCallbacks: { [key: number]: any };
  private eventCallbackCounter: number;
  private chuckID: number = 1;
  private isReady: DeferredPromise;

  constructor(
    preloadedFiles: File[],
    audioContext: AudioContext,
    wasm: ArrayBuffer
  ) {
    const chuckID = 1;
    super(audioContext, "chuck-node", {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      // important: "number of inputs / outputs" is like an aggregate source
      // most of the time, you only want one input source and one output
      // source, but each one has multiple channels
      outputChannelCount: [2],
      processorOptions: {
        chuckID: chuckID,
        srate: audioContext.sampleRate,
        preloadedFiles,
        wasm,
      },
    });
    this.deferredPromises = {};
    this.deferredPromiseCounter = 0;
    this.eventCallbacks = {};
    this.eventCallbackCounter = 0;
    this.onprocessorerror = (e) => console.error(e);
    this.chuckID = chuckID;
    this.isReady = defer();

    // Handle incoming messages
    this.port.onmessage = this.receiveMessage;
  }

  static async init(filenamesToPreload: Filename[]): Promise<Chuck> {
    const audioContext = new AudioContext();
    await audioContext.audioWorklet.addModule("./webchuck.js"); // TODO
    const wasm = await loadWasm();
    const preloadedFiles = await preloadFiles(filenamesToPreload);
    const chuck = new Chuck(preloadedFiles, audioContext, wasm);
    chuck.connect(audioContext.destination);
    await chuck.isReady;
    return chuck;
  }

  private nextDeferID(): number {
    const callbackID = this.deferredPromiseCounter++;
    this.deferredPromises[callbackID] = defer();
    return callbackID;
  }

  // ================== Filesystem ===================== //
  public createFile(directory: string, filename: string, data: string) {
    this.sendMessage(OutMessage.LOAD_FILE, {
      directory,
      filename,
      data,
    });
  }

  // ================== Run/Replace Code ================== //
  public runCode(code: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_CODE, { callback: callbackID, code });
    return this.deferredPromises[callbackID];
  }

  public runCodeWithReplacementDac(code: string, dacName: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_CODE_WITH_REPLACEMENT_DAC, {
      callback: callbackID,
      code,
      dac_name: dacName,
    });
    return this.deferredPromises[callbackID];
  }

  public replaceCode(code: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_CODE, { callback: callbackID, code });
    return this.deferredPromises[callbackID];
  }

  public replaceCodeWithReplacementDac(code: string, dacName: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_CODE_WITH_REPLACEMENT_DAC, {
      callback: callbackID,
      code,
      dac_name: dacName,
    });
    return this.deferredPromises[callbackID];
  }

  public removeLastCode() {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REMOVE_LAST_CODE, { callback: callbackID });
    return this.deferredPromises[callbackID];
  }

  // ================== Run/Replace File ================== //
  public runFile(filename: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_FILE, {
      callback: callbackID,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public runFileWithReplacementDac(filename: string, dacName: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_FILE_WITH_REPLACEMENT_DAC, {
      callback: callbackID,
      dac_name: dacName,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public runFileWithArgs(filename: string, colonSeparatedArgs: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_FILE_WITH_ARGS, {
      callback: callbackID,
      colon_separated_args: colonSeparatedArgs,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public runFileWithArgsWithReplacementDac(
    filename: string,
    colonSeparatedArgs: string,
    dacName: string
  ) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.RUN_FILE_WITH_ARGS, {
      callback: callbackID,
      colon_separated_args: colonSeparatedArgs,
      dac_name: dacName,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public replaceFile(filename: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_FILE, {
      callback: callbackID,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public replaceFileWithReplacementDac(filename: string, dacName: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_FILE_WITH_REPLACEMENT_DAC, {
      callback: callbackID,
      dac_name: dacName,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public replaceFileWithArgs(filename: string, colonSeparatedArgs: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_FILE_WITH_ARGS, {
      callback: callbackID,
      colon_separated_args: colonSeparatedArgs,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  public replaceFileWithArgsWithReplacementDac(
    filename: string,
    colonSeparatedArgs: string,
    dacName: string
  ) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REPLACE_FILE_WITH_ARGS, {
      callback: callbackID,
      colon_separated_args: colonSeparatedArgs,
      dac_name: dacName,
      filename,
    });
    return this.deferredPromises[callbackID];
  }

  // ================== Shred =================== //
  public removeShred(shred: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.REMOVE_SHRED, { shred, callback: callbackID });
    return this.deferredPromises[callbackID];
  }

  public isShredActive(shred: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.IS_SHRED_ACTIVE, {
      shred,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  // ================== Event =================== //
  public signalEvent(variable: string) {
    this.sendMessage(OutMessage.SIGNAL_EVENT, { variable });
  }

  public broadcastEvent(variable: string) {
    this.sendMessage(OutMessage.BROADCAST_EVENT, { variable });
  }

  public listenForEventOnce(variable: string, callback: Promise<any>) {
    const callbackID = this.eventCallbackCounter++;
    this.eventCallbacks[callbackID] = callback;
    this.sendMessage(OutMessage.LISTEN_FOR_EVENT_ONCE, {
      variable,
      callback: callbackID,
    });
  }

  public startListeningForEvent(variable: string, callback: Promise<any>) {
    const callbackID = this.eventCallbackCounter++;
    this.eventCallbacks[callbackID] = callback;
    this.sendMessage(OutMessage.START_LISTENING_FOR_EVENT, {
      variable,
      callback: callbackID,
    });
    return callbackID;
  }

  public stopListeningForEvent(variable: string, callbackID: number) {
    this.sendMessage(OutMessage.STOP_LISTENING_FOR_EVENT, {
      variable,
      callback: callbackID,
    });
  }

  // ================== Int, Float, String ============= //
  public setInt(variable: string, value: number) {
    this.sendMessage(OutMessage.SET_INT, { variable, value });
  }

  public getInt(variable: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_INT, { variable, callback: callbackID });
    return this.deferredPromises[callbackID];
  }

  public setFloat(variable: string, value: number) {
    this.sendMessage(OutMessage.SET_FLOAT, { variable, value });
  }

  public getFloat(variable: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_FLOAT, { variable, callback: callbackID });
    return this.deferredPromises[callbackID];
  }

  public setString(variable: string, value: string) {
    this.sendMessage(OutMessage.SET_STRING, { variable, value });
  }

  public getString(variable: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_STRING, { variable, callback: callbackID });
    return this.deferredPromises[callbackID];
  }

  // ================== Int[] =================== //
  public setIntArray(variable: string, values: number[]) {
    this.sendMessage(OutMessage.SET_INT_ARRAY, { variable, values });
  }

  public getIntArray(variable: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_INT_ARRAY, {
      variable,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  public setIntArrayValue(variable: string, index: number, value: number[]) {
    this.sendMessage(OutMessage.SET_INT_ARRAY_VALUE, {
      variable,
      index,
      value,
    });
  }

  public getIntArrayValue(variable: string, index: number) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_INT_ARRAY_VALUE, {
      variable,
      index,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  public setAssociativeIntArrayValue(
    variable: string,
    key: string,
    value: string
  ) {
    this.sendMessage(OutMessage.SET_ASSOCIATIVE_INT_ARRAY_VALUE, {
      variable,
      key,
      value,
    });
  }

  public getAssociativeIntArrayValue(variable: string, key: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_ASSOCIATIVE_INT_ARRAY_VALUE, {
      variable,
      key,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  // ================== Float[] =================== //
  public setFloatArray(variable: string, values: number[]) {
    this.sendMessage(OutMessage.SET_FLOAT_ARRAY, { variable, values });
  }

  public getFloatArray(variable: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_FLOAT_ARRAY, {
      variable,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  public setFloatArrayValue(variable: string, index: number, value: number) {
    this.sendMessage(OutMessage.SET_FLOAT_ARRAY_VALUE, {
      variable,
      index,
      value,
    });
  }

  public getFloatArrayValue(variable: string, index: number) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_FLOAT_ARRAY_VALUE, {
      variable,
      index,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  public setAssociativeFloatArrayValue(
    variable: string,
    key: string,
    value: number
  ) {
    this.sendMessage(OutMessage.SET_ASSOCIATIVE_FLOAT_ARRAY_VALUE, {
      variable,
      key,
      value,
    });
  }

  public getAssociativeFloatArrayValue(variable: string, key: string) {
    const callbackID = this.nextDeferID();
    this.sendMessage(OutMessage.GET_ASSOCIATIVE_FLOAT_ARRAY_VALUE, {
      variable,
      key,
      callback: callbackID,
    });
    return this.deferredPromises[callbackID];
  }

  // ================= Clear ====================== //
  public clearChuckInstance() {
    this.sendMessage(OutMessage.CLEAR_INSTANCE);
  }

  public clearGlobals() {
    this.sendMessage(OutMessage.CLEAR_GLOBALS);
  }

  // Private
  private sendMessage(type: OutMessage, body?: { [prop: string]: unknown }) {
    const msgBody = body ? { type, ...body } : { type };
    this.port.postMessage(msgBody);
  }

  private receiveMessage(event: MessageEvent) {
    const type: InMessage = event.data.type;

    switch (type) {
      case InMessage.INIT_DONE:
        if (typeof this.isReady !== undefined) {
          this.isReady.resolve?.();
        }
        break;
      case InMessage.PRINT:
        console.log(event.data.message);
        break;
      case InMessage.EVENT:
        if (event.data.callback in this.eventCallbacks) {
          this.eventCallbacks[event.data.callback]();
        }
        break;
      case InMessage.INT:
      case InMessage.FLOAT:
      case InMessage.STRING:
      case InMessage.INT_ARRAY:
      case InMessage.FLOAT_ARRAY:
        if (event.data.callback in this.deferredPromises) {
          this.deferredPromises[event.data.callback].resolve(event.data.result);
          delete this.deferredPromises[event.data.callback];
        }
        break;
      case InMessage.NEW_SHRED:
        if (event.data.callback in this.deferredPromises) {
          const promise = this.deferredPromises[event.data.callback];
          if (event.data.shred > 0) {
            promise.resolve(event.data.shred);
          } else {
            promise.reject("Running code failed");
          }
        }
        break;
      case InMessage.REPLACED_SHRED:
        if (event.data.callback in this.deferredPromises) {
          const promise = this.deferredPromises[event.data.callback];
          if (event.data.newShred > 0) {
            promise.resolve({
              newShred: event.data.newShred,
              oldShred: event.data.oldShred,
            });
          } else {
            promise.reject("Replacing code failed");
          }
        }
        break;
      case InMessage.REMOVED_SHRED:
        if (event.data.callback in this.deferredPromises) {
          const promise = this.deferredPromises[event.data.callback];
          if (event.data.shred > 0) {
            promise.resolve(event.data.shred);
          } else {
            promise.reject("Removing code failed");
          }
        }
        break;
      default:
        break;
    }
  }
}
