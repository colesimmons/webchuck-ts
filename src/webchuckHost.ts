class DeferredPromise {
  private promise: Promise<any>
  public resolve: undefined | ((value?: any) => void)
  public reject: undefined | (() => void)

  public constructor() {
    this.resolve = undefined
    this.reject = undefined
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

const defer = () => new DeferredPromise()

const MESSAGES = {
  // Sending
  RUN_CHUCK_FILE: "runChuckFile",
  RUN_CHUCK_FILE_WITH_REPLACEMENT_DAC: "runChuckFileWithReplacementDac",
  RUN_CHUCK_FILE_WITH_ARGS: "runChuckFileWithArgs",
  REPLACE_CHUCK_CODE: "replaceChuckCode",
  REPLACE_CHUCK_CODE_WITH_REPLACEMENT_DAC: "replaceChuckCodeWithReplacementDac",
  REPLACE_CHUCK_FILE: "replaceChuckFile",
  REPLACE_CHUCK_FILE_WITH_REPLACEMENT_DAC: "replaceChuckFileWithReplacementDac",
  REPLACE_CHUCK_FILE_WITH_Args: "replaceChuckFileWithArgs",
  REMOVE_LAST_CODE: "removeLastCode",
  REMOVE_SHRED: "removeShred",
  IS_SHRED_ACTIVE: "isShredActive",
  SET_INT: "setChuckInt",
  GET_INT: "getChuckInt",
  SET_FLOAT: "setChuckFloat",
  GET_FLOAT: "getChuckFloat",
  SET_STRING: "setChuckString",
  GET_STRING: "getChuckString",
  SIGNAL_EVENT: "signalChuckEvent",
  BROADCAST_EVENT: "broadcastChuckEvent",
  LISTEN_FOR_EVENT_ONCE: "listenForEventOnce",
  START_LISTENING_FOR_CHUCK_EVENT: "startListeningForChuckEvent",
  SET_INT_ARRAY: "setGlobalIntArray",
  GET_INT_ARRAY: "getGlobalIntArray",
  SET_INT_ARRAY_VALUE: "setGlobalIntArrayValue",
  GET_INT_ARRAY_VALUE: "getGlobalIntArrayValue",

  // Receiving
  INIT_CALLBACK: "initCallback",
  PRINT: "console print",
  EVENT_CALLBACK: "eventCallback",

  INT_CALLBACK: "intCallback",
  FLOAT_CALLBACK: "floatCallback",
  STRING_CALLBACK: "stringCallback",
  INT_ARRAY_CALLBACK: "intArrayCallback",
  FLOAT_ARRAY_CALLBACK: "floatArrayCallback",
  NEW_SHRED_CALLBACK: "newShredCallback",
  REPLACED_SHRED_CALLBACK: "replacedShredCallback",
  REMOVED_SHRED_CALLBACK: "removedShredCallback",
}

function readAsync(
  url: string,
  onload: (buffer: ArrayBuffer) => void,
  onerror: () => void,
): void {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.responseType = "arraybuffer"
  xhr.onload = function xhr_onload() {
    if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
      // file URLs can return 0
      onload(xhr.response)
      return
    }
    onerror()
  }
  xhr.onerror = onerror
  xhr.send(null)
}

function asyncLoadFile(
  url: string,
  onload: (buffer: ArrayBuffer) => void,
  onerror: () => void
): void {
  readAsync(
    url,
    (arrayBuffer: ArrayBuffer) => {
      onload(new Uint8Array(arrayBuffer))
    },
    () => {
      if (onerror) {
        onerror()
      } else {
        throw 'Loading data file "' + url + '" failed.'
      }
    }
  )
}

interface Filename {
  serverFilename: string,
  virtualFilename: string,
}

interface File {
  filename: string,
  data: ArrayBuffer,
}

async function preloadFiles(filenamesToPreload: Filename[]): Promise<File[]> {
  const promises = filenamesToPreload.map(
    (filenameToPreload) =>
      new Promise<File>((resolve, _reject) => {
      asyncLoadFile(
        filenameToPreload.serverFilename,
        (byteArray) => {
          resolve({
            filename: filenameToPreload.virtualFilename,
            data: byteArray,
          })
        },
        () => {
          console.error(
            "Error fetching file:",
            filenameToPreload.serverFilename
          )
        }
      )
    })
  )
  return await Promise.all(promises)
}

async function loadWasm(): Promise<ArrayBuffer> {
  return await new Promise((resolve, reject) => {
    asyncLoadFile("./webchuck.wasm", resolve, reject)
  })
}

async function startAudioContext() {
  const audioContext = new AudioContext()
  await audioContext.audioWorklet.addModule("./webchuck.js") // TODO
  return audioContext
}

interface IncomingMessage extends MessagePortEventMap {
  data: any,
}

// TODO: make most of this private
class Chuck extends window.AudioWorkletNode {
  private deferredPromises: { [key: number]: any }
  private deferredPromiseCounter: number
  private eventCallbacks: { [key: number]: any }
  private eventCallbackCounter: number
  private chuckID: number = 1
  private isReady: DeferredPromise

  constructor(
    preloadedFiles: File[],
    audioContext: AudioContext,
    wasm: ArrayBuffer,
  ) {
    const chuckID = 1
    super(
      audioContext,
      "chuck-node",
      {
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
      }
    )
    this.deferredPromises = {}
    this.deferredPromiseCounter = 0
    this.eventCallbacks = {}
    this.eventCallbackCounter = 0
    this.onprocessorerror = (e) => console.error(e)
    this.chuckID = chuckID
    this.isReady = defer()

    // Handle incoming messages
    this.port.onmessage = (event) => {
      console.log("Event: ", event)
      switch (event.data.type) {
        case MESSAGES.INIT_CALLBACK:
          if (typeof this.isReady !== undefined) {
            this.isReady.resolve?.()
          }
          break
        case MESSAGES.PRINT:
          console.log(event.data.message)
        break
        case MESSAGES.EVENT_CALLBACK:
          if (event.data.callback in this.eventCallbacks) {
          this.eventCallbacks[event.data.callback]()
        }
        break
        case MESSAGES.INT_CALLBACK:
          case MESSAGES.FLOAT_CALLBACK:
          case MESSAGES.STRING_CALLBACK:
          case MESSAGES.INT_ARRAY_CALLBACK:
          case MESSAGES.FLOAT_ARRAY_CALLBACK:
          if (event.data.callback in this.deferredPromises) {
          this.deferredPromises[event.data.callback].resolve(
            event.data.result
          )
          delete this.deferredPromises[event.data.callback]
        }
        break
        case MESSAGES.NEW_SHRED_CALLBACK:
          if (event.data.callback in this.deferredPromises) {
          if (event.data.shred > 0) {
            this.deferredPromises[event.data.callback].resolve(
              event.data.shred
            )
          } else {
            this.deferredPromises[event.data.callback].reject(
              "Running code failed"
            )
          }
        }
        break
        case MESSAGES.REPLACED_SHRED_CALLBACK:
          if (event.data.callback in this.deferredPromises) {
          if (event.data.newShred > 0) {
            this.deferredPromises[event.data.callback].resolve({
              newShred: event.data.newShred,
              oldShred: event.data.oldShred,
            })
          } else {
            this.deferredPromises[event.data.callback].reject(
              "Replacing code failed"
            )
          }
        }
        break
        case MESSAGES.REMOVED_SHRED_CALLBACK:
          if (event.data.callback in this.deferredPromises) {
          if (event.data.shred > 0) {
            this.deferredPromises[event.data.callback].resolve(
              event.data.shred
            )
          } else {
            this.deferredPromises[event.data.callback].reject(
              "Removing code failed"
            )
          }
        }
        break
        default:
          break
      }
    }
  }

  static async init(
    filenamesToPreload: Filename[],
  ): Promise<Chuck> {
    const audioContext = await startAudioContext()
    const wasm = await loadWasm()
    const preloadedFiles = await preloadFiles(filenamesToPreload)
    const chuck = new Chuck(
      preloadedFiles,
      audioContext,
      wasm
    )
    chuck.connect(audioContext.destination)
    await chuck.isReady
    return chuck
  }

  nextDeferID(): number {
    const callbackID = this.deferredPromiseCounter++
    console.log(callbackID, this.deferredPromiseCounter)
    this.deferredPromises[callbackID] = defer()
    return callbackID
  }

  // ================== Filesystem ===================== //
  createFile(
    directory: string,
    filename: string,
    data: string,
  ) {
    this.port.postMessage({
      type: "loadFile",
      directory,
      filename,
      data,
    })
  }

  // ================== Run / Compile ================== //
  runCode(code: string) {
    const callbackID = this.nextDeferID()
    console.log(code)
    console.log({
      type: "runChuckCode",
      code,
      callback: callbackID,
    })
    this.port.postMessage({
      type: "runChuckCode",
      code,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  runCodeWithReplacementDac(
    code: string,
    dacName: string,
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "runChuckCodeWithReplacementDac",
      code,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  runFile(filename: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: MESSAGES.RUN_CHUCK_FILE,
      filename,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  runFileWithReplacementDac(
    filename: string,
    dacName: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: MESSAGES.RUN_CHUCK_FILE_WITH_REPLACEMENT_DAC,
      filename,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  runFileWithArgs(
    filename: string,
    colonSeparatedArgs: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "runChuckFileWithArgs",
      filename,
      colon_separated_args: colonSeparatedArgs,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  runFileWithArgsWithReplacementDac(
    filename: string,
    colonSeparatedArgs: string,
    dacName: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "runChuckFileWithArgs",
      filename,
      colon_separated_args: colonSeparatedArgs,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceCode(code: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckCode",
      code,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceCodeWithReplacementDac(
    code: string,
    dacName: string,
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckCodeWithReplacementDac",
      code,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceFile(filename: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckFile",
      filename,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceFileWithReplacementDac(
    filename: string,
    dacName: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckFileWithReplacementDac",
      filename,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceFileWithArgs(
    filename: string,
    colonSeparatedArgs: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckFileWithArgs",
      filename,
      colon_separated_args: colonSeparatedArgs,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  replaceFileWithArgsWithReplacementDac(
    filename: string,
    colonSeparatedArgs: string,
    dacName: string,
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "replaceChuckFileWithArgs",
      filename,
      colon_separated_args: colonSeparatedArgs,
      dac_name: dacName,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  removeLastCode() {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "removeLastCode",
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  removeShred(shred: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "removeShred",
      shred,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  isShredActive(shred: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "isShredActive",
      shred,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  // ================== Int, Float, String ============= //
  setInt(
    variable: string,
    value: number
  ) {
    this.port.postMessage({
      type: "setChuckInt",
      variable,
      value,
    })
  }

  getInt(variable: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getChuckInt",
      variable,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setFloat(
    variable: string,
    value: number
  ) {
    this.port.postMessage({
      type: "setChuckFloat",
      variable,
      value,
    })
  }

  getFloat(variable: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getChuckFloat",
      variable,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setString(
    variable: string,
    value: string
  ) {
    this.port.postMessage({
      type: "setChuckString",
      variable: variable,
      value: value,
    })
  }

  getString(variable: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getChuckString",
      variable,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  // ================== Event =================== //
  signalEvent(variable: string) {
    this.port.postMessage({
      type: "signalChuckEvent",
      variable: variable,
    })
  }

  broadcastEvent(variable: string) {
    this.port.postMessage({
      type: "broadcastChuckEvent",
      variable,
    })
  }

  listenForEventOnce(
    variable: string,
    callback: Promise<any>
  ) {
    const callbackID = this.eventCallbackCounter++
    this.eventCallbacks[callbackID] = callback
    this.port.postMessage({
      type: "listenForChuckEventOnce",
      variable,
      callback: callbackID,
    })
  }

  startListeningForEvent(
    variable: string,
    callback: Promise<any>
  ) {
    const callbackID = this.eventCallbackCounter++
    this.eventCallbacks[callbackID] = callback
    this.port.postMessage({
      type: "startListeningForChuckEvent",
      variable,
      callback: callbackID,
    })
    return callbackID
  }

  stopListeningForEvent(
    variable: string,
    callbackID: number
  ) {
    this.port.postMessage({
      type: "stopListeningForChuckEvent",
      variable,
      callback: callbackID,
    })
  }

  // ================== Int[] =================== //
  setIntArray(
    variable: string,
    values: number[]
  ) {
    this.port.postMessage({
      type: "setGlobalIntArray",
      variable: variable,
      values: values,
    })
  }

  getIntArray(variable: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalIntArray",
      variable,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setIntArrayValue(
    variable: string,
    index: number,
    value: number[]
  ) {
    this.port.postMessage({
      type: "setGlobalIntArrayValue",
      variable,
      index,
      value,
    })
  }

  getIntArrayValue(
    variable: string,
    index: number
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalIntArrayValue",
      variable,
      index,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setAssociativeIntArrayValue(
    variable: string,
    key: string,
    value: string
  ) {
    this.port.postMessage({
      type: "setGlobalAssociativeIntArrayValue",
      variable,
      key,
      value,
    })
  }

  getAssociativeIntArrayValue(
    variable: string,
    key: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalAssociativeIntArrayValue",
      variable,
      key,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  // ================== Float[] =================== //
  setFloatArray(
    variable: string,
    values: number[]
  ) {
    this.port.postMessage({
      type: "setGlobalFloatArray",
      variable: variable,
      values: values,
    })
  }

  getFloatArray(variable: string) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalFloatArray",
      variable,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setFloatArrayValue(
    variable: string,
    index: number,
    value: number
  ) {
    this.port.postMessage({
      type: "setGlobalFloatArrayValue",
      variable,
      index,
      value,
    })
  }

  getFloatArrayValue(
    variable: string,
    index: number
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalFloatArrayValue",
      variable,
      index,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  setAssociativeFloatArrayValue(
    variable: string,
    key: string,
    value: number
  ) {
    this.port.postMessage({
      type: "setGlobalAssociativeFloatArrayValue",
      variable,
      key,
      value,
    })
  }

  getAssociativeFloatArrayValue(
    variable: string,
    key: string
  ) {
    const callbackID = this.nextDeferID()
    this.port.postMessage({
      type: "getGlobalAssociativeFloatArrayValue",
      variable,
      key,
      callback: callbackID,
    })
    return this.deferredPromises[callbackID]
  }

  // ================= Clear ====================== //
  clearChuckInstance() {
    this.port.postMessage({
      type: "clearChuckInstance",
    })
  }

  clearGlobals() {
    this.port.postMessage({
      type: "clearGlobals",
    })
  }
}

export { Chuck }
