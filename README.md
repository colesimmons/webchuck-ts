# Class: Chuck

## Hierarchy

- `AudioWorkletNode`

  ↳ **`Chuck`**

## Table of contents

### Constructors

- [constructor](Chuck.md#constructor)

### Properties

- [channelCount](Chuck.md#channelcount)
- [channelCountMode](Chuck.md#channelcountmode)
- [channelInterpretation](Chuck.md#channelinterpretation)
- [chuckID](Chuck.md#chuckid)
- [context](Chuck.md#context)
- [deferredPromiseCounter](Chuck.md#deferredpromisecounter)
- [deferredPromises](Chuck.md#deferredpromises)
- [eventCallbackCounter](Chuck.md#eventcallbackcounter)
- [eventCallbacks](Chuck.md#eventcallbacks)
- [isReady](Chuck.md#isready)
- [numberOfInputs](Chuck.md#numberofinputs)
- [numberOfOutputs](Chuck.md#numberofoutputs)
- [onprocessorerror](Chuck.md#onprocessorerror)
- [parameters](Chuck.md#parameters)
- [port](Chuck.md#port)

### Methods

- [addEventListener](Chuck.md#addeventlistener)
- [broadcastEvent](Chuck.md#broadcastevent)
- [clearChuckInstance](Chuck.md#clearchuckinstance)
- [clearGlobals](Chuck.md#clearglobals)
- [connect](Chuck.md#connect)
- [createFile](Chuck.md#createfile)
- [disconnect](Chuck.md#disconnect)
- [dispatchEvent](Chuck.md#dispatchevent)
- [getAssociativeFloatArrayValue](Chuck.md#getassociativefloatarrayvalue)
- [getAssociativeIntArrayValue](Chuck.md#getassociativeintarrayvalue)
- [getFloat](Chuck.md#getfloat)
- [getFloatArray](Chuck.md#getfloatarray)
- [getFloatArrayValue](Chuck.md#getfloatarrayvalue)
- [getInt](Chuck.md#getint)
- [getIntArray](Chuck.md#getintarray)
- [getIntArrayValue](Chuck.md#getintarrayvalue)
- [getString](Chuck.md#getstring)
- [isShredActive](Chuck.md#isshredactive)
- [listenForEventOnce](Chuck.md#listenforeventonce)
- [nextDeferID](Chuck.md#nextdeferid)
- [receiveMessage](Chuck.md#receivemessage)
- [removeEventListener](Chuck.md#removeeventlistener)
- [removeLastCode](Chuck.md#removelastcode)
- [removeShred](Chuck.md#removeshred)
- [replaceCode](Chuck.md#replacecode)
- [replaceCodeWithReplacementDac](Chuck.md#replacecodewithreplacementdac)
- [replaceFile](Chuck.md#replacefile)
- [replaceFileWithArgs](Chuck.md#replacefilewithargs)
- [replaceFileWithArgsWithReplacementDac](Chuck.md#replacefilewithargswithreplacementdac)
- [replaceFileWithReplacementDac](Chuck.md#replacefilewithreplacementdac)
- [runCode](Chuck.md#runcode)
- [runCodeWithReplacementDac](Chuck.md#runcodewithreplacementdac)
- [runFile](Chuck.md#runfile)
- [runFileWithArgs](Chuck.md#runfilewithargs)
- [runFileWithArgsWithReplacementDac](Chuck.md#runfilewithargswithreplacementdac)
- [runFileWithReplacementDac](Chuck.md#runfilewithreplacementdac)
- [sendMessage](Chuck.md#sendmessage)
- [setAssociativeFloatArrayValue](Chuck.md#setassociativefloatarrayvalue)
- [setAssociativeIntArrayValue](Chuck.md#setassociativeintarrayvalue)
- [setFloat](Chuck.md#setfloat)
- [setFloatArray](Chuck.md#setfloatarray)
- [setFloatArrayValue](Chuck.md#setfloatarrayvalue)
- [setInt](Chuck.md#setint)
- [setIntArray](Chuck.md#setintarray)
- [setIntArrayValue](Chuck.md#setintarrayvalue)
- [setString](Chuck.md#setstring)
- [signalEvent](Chuck.md#signalevent)
- [startListeningForEvent](Chuck.md#startlisteningforevent)
- [stopListeningForEvent](Chuck.md#stoplisteningforevent)
- [init](Chuck.md#init)

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

• `Private` **isReady**: [`DeferredPromise`](DeferredPromise.md)

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

▸ `Static` **init**(`filenamesToPreload`): `Promise`<[`Chuck`](Chuck.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filenamesToPreload` | `Filename`[] |

#### Returns

`Promise`<[`Chuck`](Chuck.md)\>

---

# Class: DeferredPromise

## Table of contents

### Constructors

- [constructor](DeferredPromise.md#constructor)

### Properties

- [promise](DeferredPromise.md#promise)
- [reject](DeferredPromise.md#reject)
- [resolve](DeferredPromise.md#resolve)

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
