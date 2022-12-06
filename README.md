# Usage

```
import { Chuck } from 'webchuck'
const chuck = await Chuck.init([]);

chuck.runCode(`
  SinOsc sin => dac;
  220 => sin.freq;
  1::week => now;
`);
```

Note that many browsers do not let audio run without a user interaction.
You can check for a suspended audio context and resume like this:

```
if (chuck.context.state === "suspended") {
  chuck.context.resume();
}
```

# Class: Chuck

## Hierarchy

- `AudioWorkletNode`

  ↳ **`Chuck`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [channelCount](#channelcount)
- [channelCountMode](#channelcountmode)
- [channelInterpretation](#channelinterpretation)
- [chuckID](#chuckid)
- [context](#context)
- [deferredPromiseCounter](#deferredpromisecounter)
- [deferredPromises](#deferredpromises)
- [eventCallbackCounter](#eventcallbackcounter)
- [eventCallbacks](#eventcallbacks)
- [isReady](#isready)
- [numberOfInputs](#numberofinputs)
- [numberOfOutputs](#numberofoutputs)
- [onprocessorerror](#onprocessorerror)
- [parameters](#parameters)
- [port](#port)

### Methods

- [addEventListener](#addeventlistener)
- [broadcastEvent](#broadcastevent)
- [clearChuckInstance](#clearchuckinstance)
- [clearGlobals](#clearglobals)
- [connect](#connect)
- [createFile](#createfile)
- [disconnect](#disconnect)
- [dispatchEvent](#dispatchevent)
- [getAssociativeFloatArrayValue](#getassociativefloatarrayvalue)
- [getAssociativeIntArrayValue](#getassociativeintarrayvalue)
- [getFloat](#getfloat)
- [getFloatArray](#getfloatarray)
- [getFloatArrayValue](#getfloatarrayvalue)
- [getInt](#getint)
- [getIntArray](#getintarray)
- [getIntArrayValue](#getintarrayvalue)
- [getString](#getstring)
- [isShredActive](#isshredactive)
- [listenForEventOnce](#listenforeventonce)
- [nextDeferID](#nextdeferid)
- [receiveMessage](#receivemessage)
- [removeEventListener](#removeeventlistener)
- [removeLastCode](#removelastcode)
- [removeShred](#removeshred)
- [replaceCode](#replacecode)
- [replaceCodeWithReplacementDac](#replacecodewithreplacementdac)
- [replaceFile](#replacefile)
- [replaceFileWithArgs](#replacefilewithargs)
- [replaceFileWithArgsWithReplacementDac](#replacefilewithargswithreplacementdac)
- [replaceFileWithReplacementDac](#replacefilewithreplacementdac)
- [runCode](#runcode)
- [runCodeWithReplacementDac](#runcodewithreplacementdac)
- [runFile](#runfile)
- [runFileWithArgs](#runfilewithargs)
- [runFileWithArgsWithReplacementDac](#runfilewithargswithreplacementdac)
- [runFileWithReplacementDac](#runfilewithreplacementdac)
- [sendMessage](#sendmessage)
- [setAssociativeFloatArrayValue](#setassociativefloatarrayvalue)
- [setAssociativeIntArrayValue](#setassociativeintarrayvalue)
- [setFloat](#setfloat)
- [setFloatArray](#setfloatarray)
- [setFloatArrayValue](#setfloatarrayvalue)
- [setInt](#setint)
- [setIntArray](#setintarray)
- [setIntArrayValue](#setintarrayvalue)
- [setString](#setstring)
- [signalEvent](#signalevent)
- [startListeningForEvent](#startlisteningforevent)
- [stopListeningForEvent](#stoplisteningforevent)
- [init](#init)

## Constructors

### constructor

• **new Chuck**(`preloadedFiles`, `audioContext`, `wasm`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preloadedFiles` | `File`[] |
| `audioContext` | `AudioContext` |
| `wasm` | `ArrayBuffer` |

#### Overrides

window.AudioWorkletNode.constructor

## Properties

### channelCount

• **channelCount**: `number`

#### Inherited from

window.AudioWorkletNode.channelCount

___

### channelCountMode

• **channelCountMode**: `ChannelCountMode`

#### Inherited from

window.AudioWorkletNode.channelCountMode

___

### channelInterpretation

• **channelInterpretation**: `ChannelInterpretation`

#### Inherited from

window.AudioWorkletNode.channelInterpretation

___

### chuckID

• `Private` **chuckID**: `number`

___

### context

• `Readonly` **context**: `BaseAudioContext`

#### Inherited from

window.AudioWorkletNode.context

___

### deferredPromiseCounter

• `Private` **deferredPromiseCounter**: `number` = `0`

___

### deferredPromises

• `Private` **deferredPromises**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `any`

___

### eventCallbackCounter

• `Private` **eventCallbackCounter**: `number` = `0`

___

### eventCallbacks

• `Private` **eventCallbacks**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `any`

___

### isReady

• `Private` **isReady**: [`DeferredPromise`]()

___

### numberOfInputs

• `Readonly` **numberOfInputs**: `number`

#### Inherited from

window.AudioWorkletNode.numberOfInputs

___

### numberOfOutputs

• `Readonly` **numberOfOutputs**: `number`

#### Inherited from

window.AudioWorkletNode.numberOfOutputs

___

### onprocessorerror

• **onprocessorerror**: ``null`` \| (`this`: `AudioWorkletNode`, `ev`: `Event`) => `any`

#### Inherited from

window.AudioWorkletNode.onprocessorerror

___

### parameters

• `Readonly` **parameters**: `AudioParamMap`

#### Inherited from

window.AudioWorkletNode.parameters

___

### port

• `Readonly` **port**: `MessagePort`

#### Inherited from

window.AudioWorkletNode.port

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `AudioWorkletNode`, `ev`: `AudioWorkletNodeEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.addEventListener

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.addEventListener

___

### broadcastEvent

▸ **broadcastEvent**(`variable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`void`

___

### clearChuckInstance

▸ **clearChuckInstance**(): `void`

#### Returns

`void`

___

### clearGlobals

▸ **clearGlobals**(): `void`

#### Returns

`void`

___

### connect

▸ **connect**(`destinationNode`, `output?`, `input?`): `AudioNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationNode` | `AudioNode` |
| `output?` | `number` |
| `input?` | `number` |

#### Returns

`AudioNode`

#### Inherited from

window.AudioWorkletNode.connect

▸ **connect**(`destinationParam`, `output?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationParam` | `AudioParam` |
| `output?` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.connect

___

### createFile

▸ **createFile**(`directory`, `filename`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |
| `filename` | `string` |
| `data` | `string` |

#### Returns

`void`

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`destinationNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationNode` | `AudioNode` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`destinationNode`, `output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationNode` | `AudioNode` |
| `output` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`destinationNode`, `output`, `input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationNode` | `AudioNode` |
| `output` | `number` |
| `input` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`destinationParam`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationParam` | `AudioParam` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

▸ **disconnect**(`destinationParam`, `output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationParam` | `AudioParam` |
| `output` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

window.AudioWorkletNode.dispatchEvent

___

### getAssociativeFloatArrayValue

▸ **getAssociativeFloatArrayValue**(`variable`, `key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `key` | `string` |

#### Returns

`any`

___

### getAssociativeIntArrayValue

▸ **getAssociativeIntArrayValue**(`variable`, `key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `key` | `string` |

#### Returns

`any`

___

### getFloat

▸ **getFloat**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

___

### getFloatArray

▸ **getFloatArray**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

___

### getFloatArrayValue

▸ **getFloatArrayValue**(`variable`, `index`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `index` | `number` |

#### Returns

`any`

___

### getInt

▸ **getInt**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

___

### getIntArray

▸ **getIntArray**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

___

### getIntArrayValue

▸ **getIntArrayValue**(`variable`, `index`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `index` | `number` |

#### Returns

`any`

___

### getString

▸ **getString**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

___

### isShredActive

▸ **isShredActive**(`shred`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shred` | `string` |

#### Returns

`any`

___

### listenForEventOnce

▸ **listenForEventOnce**(`variable`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `callback` | `Promise`<`any`\> |

#### Returns

`void`

___

### nextDeferID

▸ `Private` **nextDeferID**(): `number`

#### Returns

`number`

___

### receiveMessage

▸ `Private` **receiveMessage**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`<`any`\> |

#### Returns

`void`

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `AudioWorkletNode`, `ev`: `AudioWorkletNodeEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.removeEventListener

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.removeEventListener

___

### removeLastCode

▸ **removeLastCode**(): `any`

#### Returns

`any`

___

### removeShred

▸ **removeShred**(`shred`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shred` | `string` |

#### Returns

`any`

___

### replaceCode

▸ **replaceCode**(`code`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`any`

___

### replaceCodeWithReplacementDac

▸ **replaceCodeWithReplacementDac**(`code`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### replaceFile

▸ **replaceFile**(`filename`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`any`

___

### replaceFileWithArgs

▸ **replaceFileWithArgs**(`filename`, `colonSeparatedArgs`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `colonSeparatedArgs` | `string` |

#### Returns

`any`

___

### replaceFileWithArgsWithReplacementDac

▸ **replaceFileWithArgsWithReplacementDac**(`filename`, `colonSeparatedArgs`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `colonSeparatedArgs` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### replaceFileWithReplacementDac

▸ **replaceFileWithReplacementDac**(`filename`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### runCode

▸ **runCode**(`code`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`any`

___

### runCodeWithReplacementDac

▸ **runCodeWithReplacementDac**(`code`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### runFile

▸ **runFile**(`filename`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`any`

___

### runFileWithArgs

▸ **runFileWithArgs**(`filename`, `colonSeparatedArgs`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `colonSeparatedArgs` | `string` |

#### Returns

`any`

___

### runFileWithArgsWithReplacementDac

▸ **runFileWithArgsWithReplacementDac**(`filename`, `colonSeparatedArgs`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `colonSeparatedArgs` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### runFileWithReplacementDac

▸ **runFileWithReplacementDac**(`filename`, `dacName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `dacName` | `string` |

#### Returns

`any`

___

### sendMessage

▸ `Private` **sendMessage**(`type`, `body?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `OutMessage` |
| `body?` | `Object` |

#### Returns

`void`

___

### setAssociativeFloatArrayValue

▸ **setAssociativeFloatArrayValue**(`variable`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

___

### setAssociativeIntArrayValue

▸ **setAssociativeIntArrayValue**(`variable`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### setFloat

▸ **setFloat**(`variable`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `value` | `number` |

#### Returns

`void`

___

### setFloatArray

▸ **setFloatArray**(`variable`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `values` | `number`[] |

#### Returns

`void`

___

### setFloatArrayValue

▸ **setFloatArrayValue**(`variable`, `index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

___

### setInt

▸ **setInt**(`variable`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `value` | `number` |

#### Returns

`void`

___

### setIntArray

▸ **setIntArray**(`variable`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `values` | `number`[] |

#### Returns

`void`

___

### setIntArrayValue

▸ **setIntArrayValue**(`variable`, `index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `index` | `number` |
| `value` | `number`[] |

#### Returns

`void`

___

### setString

▸ **setString**(`variable`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

___

### signalEvent

▸ **signalEvent**(`variable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`void`

___

### startListeningForEvent

▸ **startListeningForEvent**(`variable`, `callback`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `callback` | `Promise`<`any`\> |

#### Returns

`number`

___

### stopListeningForEvent

▸ **stopListeningForEvent**(`variable`, `callbackID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |
| `callbackID` | `number` |

#### Returns

`void`

___

### init

▸ `Static` **init**(`filenamesToPreload`): `Promise`<[`Chuck`]()\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filenamesToPreload` | `Filename`[] |

#### Returns

`Promise`<[`Chuck`]()\>

---

# Class: DeferredPromise

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [promise](#promise)
- [reject](#reject)
- [resolve](#resolve)

## Constructors

### constructor

• **new DeferredPromise**()

## Properties

### promise

• `Readonly` **promise**: `Promise`<`any`\>

___

### reject

• **reject**: `undefined` \| () => `void`

___

### resolve

• **resolve**: `undefined` \| (`value?`: `any`) => `void`
