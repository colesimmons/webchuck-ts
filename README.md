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

#### Defined in

[src/Chuck.ts:89](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L89)

## Properties

### channelCount

• **channelCount**: `number`

#### Inherited from

window.AudioWorkletNode.channelCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2328

___

### channelCountMode

• **channelCountMode**: `ChannelCountMode`

#### Inherited from

window.AudioWorkletNode.channelCountMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2329

___

### channelInterpretation

• **channelInterpretation**: `ChannelInterpretation`

#### Inherited from

window.AudioWorkletNode.channelInterpretation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2330

___

### chuckID

• `Private` **chuckID**: `number`

#### Defined in

[src/Chuck.ts:86](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L86)

___

### context

• `Readonly` **context**: `BaseAudioContext`

#### Inherited from

window.AudioWorkletNode.context

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2331

___

### deferredPromiseCounter

• `Private` **deferredPromiseCounter**: `number` = `0`

#### Defined in

[src/Chuck.ts:82](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L82)

___

### deferredPromises

• `Private` **deferredPromises**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `any`

#### Defined in

[src/Chuck.ts:81](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L81)

___

### eventCallbackCounter

• `Private` **eventCallbackCounter**: `number` = `0`

#### Defined in

[src/Chuck.ts:84](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L84)

___

### eventCallbacks

• `Private` **eventCallbacks**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: `any`

#### Defined in

[src/Chuck.ts:83](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L83)

___

### isReady

• `Private` **isReady**: [`DeferredPromise`](DeferredPromise.md)

#### Defined in

[src/Chuck.ts:87](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L87)

___

### numberOfInputs

• `Readonly` **numberOfInputs**: `number`

#### Inherited from

window.AudioWorkletNode.numberOfInputs

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2332

___

### numberOfOutputs

• `Readonly` **numberOfOutputs**: `number`

#### Inherited from

window.AudioWorkletNode.numberOfOutputs

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2333

___

### onprocessorerror

• **onprocessorerror**: ``null`` \| (`this`: `AudioWorkletNode`, `ev`: `Event`) => `any`

#### Inherited from

window.AudioWorkletNode.onprocessorerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2433

___

### parameters

• `Readonly` **parameters**: `AudioParamMap`

#### Inherited from

window.AudioWorkletNode.parameters

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2434

___

### port

• `Readonly` **port**: `MessagePort`

#### Inherited from

window.AudioWorkletNode.port

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2435

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2436

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2437

___

### broadcastEvent

▸ **broadcastEvent**(`variable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`void`

#### Defined in

[src/Chuck.ts:293](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L293)

___

### clearChuckInstance

▸ **clearChuckInstance**(): `void`

#### Returns

`void`

#### Defined in

[src/Chuck.ts:463](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L463)

___

### clearGlobals

▸ **clearGlobals**(): `void`

#### Returns

`void`

#### Defined in

[src/Chuck.ts:467](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L467)

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2334

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2335

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

#### Defined in

[src/Chuck.ts:136](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L136)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2336

▸ **disconnect**(`output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `number` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2337

▸ **disconnect**(`destinationNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationNode` | `AudioNode` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2338

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2339

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2340

▸ **disconnect**(`destinationParam`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationParam` | `AudioParam` |

#### Returns

`void`

#### Inherited from

window.AudioWorkletNode.disconnect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2341

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2342

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

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

#### Defined in

[src/Chuck.ts:452](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L452)

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

#### Defined in

[src/Chuck.ts:398](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L398)

___

### getFloat

▸ **getFloat**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:338](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L338)

___

### getFloatArray

▸ **getFloatArray**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:413](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L413)

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

#### Defined in

[src/Chuck.ts:430](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L430)

___

### getInt

▸ **getInt**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:328](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L328)

___

### getIntArray

▸ **getIntArray**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:359](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L359)

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

#### Defined in

[src/Chuck.ts:376](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L376)

___

### getString

▸ **getString**(`variable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:348](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L348)

___

### isShredActive

▸ **isShredActive**(`shred`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shred` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:279](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L279)

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

#### Defined in

[src/Chuck.ts:297](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L297)

___

### nextDeferID

▸ `Private` **nextDeferID**(): `number`

#### Returns

`number`

#### Defined in

[src/Chuck.ts:129](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L129)

___

### receiveMessage

▸ `Private` **receiveMessage**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[src/Chuck.ts:477](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L477)

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2438

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2439

___

### removeLastCode

▸ **removeLastCode**(): `any`

#### Returns

`any`

#### Defined in

[src/Chuck.ts:177](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L177)

___

### removeShred

▸ **removeShred**(`shred`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shred` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:273](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L273)

___

### replaceCode

▸ **replaceCode**(`code`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:161](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L161)

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

#### Defined in

[src/Chuck.ts:167](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L167)

___

### replaceFile

▸ **replaceFile**(`filename`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:228](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L228)

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

#### Defined in

[src/Chuck.ts:247](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L247)

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

#### Defined in

[src/Chuck.ts:257](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L257)

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

#### Defined in

[src/Chuck.ts:237](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L237)

___

### runCode

▸ **runCode**(`code`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:145](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L145)

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

#### Defined in

[src/Chuck.ts:151](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L151)

___

### runFile

▸ **runFile**(`filename`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`any`

#### Defined in

[src/Chuck.ts:184](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L184)

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

#### Defined in

[src/Chuck.ts:203](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L203)

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

#### Defined in

[src/Chuck.ts:213](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L213)

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

#### Defined in

[src/Chuck.ts:193](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L193)

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

#### Defined in

[src/Chuck.ts:472](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L472)

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

#### Defined in

[src/Chuck.ts:440](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L440)

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

#### Defined in

[src/Chuck.ts:386](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L386)

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

#### Defined in

[src/Chuck.ts:334](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L334)

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

#### Defined in

[src/Chuck.ts:409](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L409)

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

#### Defined in

[src/Chuck.ts:422](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L422)

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

#### Defined in

[src/Chuck.ts:324](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L324)

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

#### Defined in

[src/Chuck.ts:355](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L355)

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

#### Defined in

[src/Chuck.ts:368](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L368)

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

#### Defined in

[src/Chuck.ts:344](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L344)

___

### signalEvent

▸ **signalEvent**(`variable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `string` |

#### Returns

`void`

#### Defined in

[src/Chuck.ts:289](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L289)

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

#### Defined in

[src/Chuck.ts:306](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L306)

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

#### Defined in

[src/Chuck.ts:316](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L316)

___

### init

▸ `Static` **init**(`filenamesToPreload`): `Promise`<[`Chuck`](Chuck.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filenamesToPreload` | `Filename`[] |

#### Returns

`Promise`<[`Chuck`](Chuck.md)\>

#### Defined in

[src/Chuck.ts:114](https://github.com/colesimmons/webchuck/blob/3e9361e/src/Chuck.ts#L114)

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

#### Defined in

[src/DeferredPromise.ts:19](https://github.com/colesimmons/webchuck/blob/3e9361e/src/DeferredPromise.ts#L19)

## Properties

### promise

• `Readonly` **promise**: `Promise`<`any`\>

#### Defined in

[src/DeferredPromise.ts:15](https://github.com/colesimmons/webchuck/blob/3e9361e/src/DeferredPromise.ts#L15)

___

### reject

• **reject**: `undefined` \| () => `void`

#### Defined in

[src/DeferredPromise.ts:17](https://github.com/colesimmons/webchuck/blob/3e9361e/src/DeferredPromise.ts#L17)

___

### resolve

• **resolve**: `undefined` \| (`value?`: `any`) => `void`

#### Defined in

[src/DeferredPromise.ts:16](https://github.com/colesimmons/webchuck/blob/3e9361e/src/DeferredPromise.ts#L16)
