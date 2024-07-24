"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{5572:function(e,t,a){a.d(t,{Of:function(){return l}});var r=a(513),n=a(5121),i=a(5068);function o(e,t){return"object"==typeof e&&null!==e&&"name"in e&&e.name===t}function s(e,t){for(let a of e.configurations)for(let e of a.interfaces)for(let r of e.alternates)if(function(e,t){return t.some(t=>e.interfaceClass===t.classCode&&e.interfaceSubclass===t.subclassCode&&e.interfaceProtocol===t.protocolCode)}(r,t))return{configuration:a,interface_:e,alternate:r};throw Error("No matched alternate interface found")}let d={classCode:255,subclassCode:66,protocolCode:1};class c{#e;#t;get position(){return this.#t}constructor(e){this.#e=e,this.#t=0}readExactly(e){let t=this.#e.subarray(this.#t,this.#t+e);return this.#t+=e,t}}class u{#a;get readable(){return this.#a}#r;get writable(){return this.#r}constructor(e,t,a,s){let d=!1,u=new n.DuplexStreamFactory({close:async()=>{try{d=!0,await e.close()}catch{}},dispose:()=>{d=!0,s.removeEventListener("disconnect",l)}});function l(t){t.device===e&&u.dispose().catch(r.unreachable)}s.addEventListener("disconnect",l),this.#a=u.wrapReadable(new n.ReadableStream({async pull(a){try{let n=await e.transferIn(t.endpointNumber,24),o=new Uint8Array(n.data.buffer),s=new c(o),d=r.AdbPacketHeader.deserialize(s);if(0!==d.payloadLength){let a=await e.transferIn(t.endpointNumber,d.payloadLength);d.payload=new Uint8Array(a.data.buffer)}else d.payload=i.RJ;a.enqueue(d)}catch(e){throw o(e,"NetworkError")&&(await new Promise(e=>{setTimeout(()=>{e()},100)}),d&&a.close()),e}}}));let p=a.packetSize-1;this.#r=(0,n.pipeFrom)(u.createWritable(new n.ConsumableWritableStream({write:async t=>{try{await e.transferOut(a.endpointNumber,t),p&&(t.byteLength&p)==0&&await e.transferOut(a.endpointNumber,i.RJ)}catch(e){if(d)return;throw e}}})),new r.AdbPacketSerializeStream)}}class l{#n;#i;#o;get raw(){return this.#o}get serial(){return this.#o.serialNumber}get name(){return this.#o.productName}constructor(e,t=[d],a){this.#o=e,this.#n=t,this.#i=a}async connect(){this.#o.opened||await this.#o.open();let{configuration:e,interface_:t,alternate:a}=s(this.#o,this.#n);this.#o.configuration?.configurationValue!==e.configurationValue&&await this.#o.selectConfiguration(e.configurationValue),t.claimed||await this.#o.claimInterface(t.interfaceNumber),t.alternate.alternateSetting!==a.alternateSetting&&await this.#o.selectAlternateInterface(t.interfaceNumber,a.alternateSetting);let{inEndpoint:r,outEndpoint:n}=function(e){let t,a;if(0===e.length)throw Error("No endpoints given");for(let r of e)switch(r.direction){case"in":if(t=r,a)return{inEndpoint:t,outEndpoint:a};break;case"out":if(a=r,t)return{inEndpoint:t,outEndpoint:a}}if(!t)throw Error("No input endpoint found.");if(!a)throw Error("No output endpoint found.");throw Error("unreachable")}(a.endpoints);return new u(this.#o,r,n,this.#i)}}class p{static BROWSER=void 0!==globalThis.navigator&&globalThis.navigator.usb?new p(globalThis.navigator.usb):void 0;#i;constructor(e){this.#i=e}async requestDevice(e=[d]){if(0===e.length)throw TypeError("filters must not be empty");try{let t=await this.#i.requestDevice({filters:e});return new l(t,e,this.#i)}catch(e){if(o(e,"NotFoundError"))return;throw e}}async getDevices(e=[d]){if(0===e.length)throw TypeError("filters must not be empty");let t=await this.#i.getDevices();return t.filter(t=>{for(let a of e)if((!("vendorId"in a)||t.vendorId===a.vendorId)&&(!("productId"in a)||t.productId===a.productId)&&(!("serialNumber"in a)||t.serialNumber===a.serialNumber))try{return s(t,e),!0}catch{continue}return!1}).map(t=>new l(t,e,this.#i))}}},4449:function(e,t,a){var r,n,i,o,s,d;async function c(e,t){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SetAudioMode,value:t,index:0},new ArrayBuffer(0))}async function u(e,t,a){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.RegisterHid,value:t,index:a},new ArrayBuffer(0))}async function l(e,t,a){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SetHidReportDescriptor,value:t,index:0},a)}async function p(e,t){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.UnregisterHid,value:t,index:0},new ArrayBuffer(0))}async function y(e,t,a){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.SendHidEvent,value:t,index:0},a)}a.d(t,{qG:function(){return K},sm:function(){return i},XC:function(){return m},sy:function(){return f},XX:function(){return c},F7:function(){return g}}),(o=r||(r={}))[o.GetProtocol=51]="GetProtocol",o[o.SendString=52]="SendString",o[o.Start=53]="Start",o[o.RegisterHid=54]="RegisterHid",o[o.UnregisterHid=55]="UnregisterHid",o[o.SetHidReportDescriptor=56]="SetHidReportDescriptor",o[o.SendHidEvent=57]="SendHidEvent",o[o.SetAudioMode=58]="SetAudioMode",(s=n||(n={}))[s.Off=0]="Off",s[s.On=1]="On";class K{static async register(e,t,a){return await u(e,t,a.length),await l(e,t,a),new K(e,t)}#s;#d;constructor(e,t){this.#s=e,this.#d=t}async sendInputReport(e){await y(this.#s,this.#d,e)}async unregister(){await p(this.#s,this.#d)}}async function f(e){let t=await e.controlTransferIn({recipient:"device",requestType:"vendor",request:r.GetProtocol,value:0,index:0},2),a=t.data.getUint16(0,!0);return a}async function g(e){await e.controlTransferOut({recipient:"device",requestType:"vendor",request:r.Start,value:0,index:0},new ArrayBuffer(0))}(d=i||(i={}))[d.KeyA=4]="KeyA",d[d.KeyB=5]="KeyB",d[d.KeyC=6]="KeyC",d[d.KeyD=7]="KeyD",d[d.KeyE=8]="KeyE",d[d.KeyF=9]="KeyF",d[d.KeyG=10]="KeyG",d[d.KeyH=11]="KeyH",d[d.KeyI=12]="KeyI",d[d.KeyJ=13]="KeyJ",d[d.KeyK=14]="KeyK",d[d.KeyL=15]="KeyL",d[d.KeyM=16]="KeyM",d[d.KeyN=17]="KeyN",d[d.KeyO=18]="KeyO",d[d.KeyP=19]="KeyP",d[d.KeyQ=20]="KeyQ",d[d.KeyR=21]="KeyR",d[d.KeyS=22]="KeyS",d[d.KeyT=23]="KeyT",d[d.KeyU=24]="KeyU",d[d.KeyV=25]="KeyV",d[d.KeyW=26]="KeyW",d[d.KeyX=27]="KeyX",d[d.KeyY=28]="KeyY",d[d.KeyZ=29]="KeyZ",d[d.Digit1=30]="Digit1",d[d.Digit2=31]="Digit2",d[d.Digit3=32]="Digit3",d[d.Digit4=33]="Digit4",d[d.Digit5=34]="Digit5",d[d.Digit6=35]="Digit6",d[d.Digit7=36]="Digit7",d[d.Digit8=37]="Digit8",d[d.Digit9=38]="Digit9",d[d.Digit0=39]="Digit0",d[d.Enter=40]="Enter",d[d.Escape=41]="Escape",d[d.Backspace=42]="Backspace",d[d.Tab=43]="Tab",d[d.Space=44]="Space",d[d.Minus=45]="Minus",d[d.Equal=46]="Equal",d[d.BracketLeft=47]="BracketLeft",d[d.BracketRight=48]="BracketRight",d[d.Backslash=49]="Backslash",d[d.NonUsHash=50]="NonUsHash",d[d.Semicolon=51]="Semicolon",d[d.Quote=52]="Quote",d[d.Backquote=53]="Backquote",d[d.Comma=54]="Comma",d[d.Period=55]="Period",d[d.Slash=56]="Slash",d[d.CapsLock=57]="CapsLock",d[d.F1=58]="F1",d[d.F2=59]="F2",d[d.F3=60]="F3",d[d.F4=61]="F4",d[d.F5=62]="F5",d[d.F6=63]="F6",d[d.F7=64]="F7",d[d.F8=65]="F8",d[d.F9=66]="F9",d[d.F10=67]="F10",d[d.F11=68]="F11",d[d.F12=69]="F12",d[d.PrintScreen=70]="PrintScreen",d[d.ScrollLock=71]="ScrollLock",d[d.Pause=72]="Pause",d[d.Insert=73]="Insert",d[d.Home=74]="Home",d[d.PageUp=75]="PageUp",d[d.Delete=76]="Delete",d[d.End=77]="End",d[d.PageDown=78]="PageDown",d[d.ArrowRight=79]="ArrowRight",d[d.ArrowLeft=80]="ArrowLeft",d[d.ArrowDown=81]="ArrowDown",d[d.ArrowUp=82]="ArrowUp",d[d.NumLock=83]="NumLock",d[d.NumpadDivide=84]="NumpadDivide",d[d.NumpadMultiply=85]="NumpadMultiply",d[d.NumpadSubtract=86]="NumpadSubtract",d[d.NumpadAdd=87]="NumpadAdd",d[d.NumpadEnter=88]="NumpadEnter",d[d.Numpad1=89]="Numpad1",d[d.Numpad2=90]="Numpad2",d[d.Numpad3=91]="Numpad3",d[d.Numpad4=92]="Numpad4",d[d.Numpad5=93]="Numpad5",d[d.Numpad6=94]="Numpad6",d[d.Numpad7=95]="Numpad7",d[d.Numpad8=96]="Numpad8",d[d.Numpad9=97]="Numpad9",d[d.Numpad0=98]="Numpad0",d[d.NumpadDecimal=99]="NumpadDecimal",d[d.NonUsBackslash=100]="NonUsBackslash",d[d.ContextMenu=101]="ContextMenu",d[d.Power=102]="Power",d[d.NumpadEqual=103]="NumpadEqual",d[d.F13=104]="F13",d[d.F14=105]="F14",d[d.F15=106]="F15",d[d.F16=107]="F16",d[d.F17=108]="F17",d[d.F18=109]="F18",d[d.F19=110]="F19",d[d.F20=111]="F20",d[d.F21=112]="F21",d[d.F22=113]="F22",d[d.F23=114]="F23",d[d.F24=115]="F24",d[d.Execute=116]="Execute",d[d.Help=117]="Help",d[d.Menu=118]="Menu",d[d.Select=119]="Select",d[d.Stop=120]="Stop",d[d.Again=121]="Again",d[d.Undo=122]="Undo",d[d.Cut=123]="Cut",d[d.Copy=124]="Copy",d[d.Paste=125]="Paste",d[d.Find=126]="Find",d[d.Mute=127]="Mute",d[d.VolumeUp=128]="VolumeUp",d[d.VolumeDown=129]="VolumeDown",d[d.LockingCapsLock=130]="LockingCapsLock",d[d.LockingNumLock=131]="LockingNumLock",d[d.LockingScrollLock=132]="LockingScrollLock",d[d.NumpadComma=133]="NumpadComma",d[d.KeypadEqualSign=134]="KeypadEqualSign",d[d.International1=135]="International1",d[d.International2=136]="International2",d[d.International3=137]="International3",d[d.International4=138]="International4",d[d.International5=139]="International5",d[d.International6=140]="International6",d[d.International7=141]="International7",d[d.International8=142]="International8",d[d.International9=143]="International9",d[d.Lang1=144]="Lang1",d[d.Lang2=145]="Lang2",d[d.Lang3=146]="Lang3",d[d.Lang4=147]="Lang4",d[d.Lang5=148]="Lang5",d[d.Lang6=149]="Lang6",d[d.Lang7=150]="Lang7",d[d.Lang8=151]="Lang8",d[d.Lang9=152]="Lang9",d[d.AlternateErase=153]="AlternateErase",d[d.SysReq=154]="SysReq",d[d.Cancel=155]="Cancel",d[d.Clear=156]="Clear",d[d.Prior=157]="Prior",d[d.Return2=158]="Return2",d[d.Separator=159]="Separator",d[d.Out=160]="Out",d[d.Oper=161]="Oper",d[d.ClearAgain=162]="ClearAgain",d[d.CrSel=163]="CrSel",d[d.ExSel=164]="ExSel",d[d.Keypad00=176]="Keypad00",d[d.Keypad000=177]="Keypad000",d[d.ThousandsSeparator=178]="ThousandsSeparator",d[d.DecimalSeparator=179]="DecimalSeparator",d[d.CurrencyUnit=180]="CurrencyUnit",d[d.CurrencySubUnit=181]="CurrencySubUnit",d[d.KeypadLeftParen=182]="KeypadLeftParen",d[d.KeypadRightParen=183]="KeypadRightParen",d[d.KeypadLeftBrace=184]="KeypadLeftBrace",d[d.KeypadRightBrace=185]="KeypadRightBrace",d[d.KeypadTab=186]="KeypadTab",d[d.KeypadBackspace=187]="KeypadBackspace",d[d.KeypadA=188]="KeypadA",d[d.KeypadB=189]="KeypadB",d[d.KeypadC=190]="KeypadC",d[d.KeypadD=191]="KeypadD",d[d.KeypadE=192]="KeypadE",d[d.KeypadF=193]="KeypadF",d[d.KeypadXor=194]="KeypadXor",d[d.KeypadPower=195]="KeypadPower",d[d.KeypadPercent=196]="KeypadPercent",d[d.KeypadLess=197]="KeypadLess",d[d.KeypadGreater=198]="KeypadGreater",d[d.KeypadAmpersand=199]="KeypadAmpersand",d[d.KeypadDblAmpersand=200]="KeypadDblAmpersand",d[d.KeypadVerticalBar=201]="KeypadVerticalBar",d[d.KeypadDblVerticalBar=202]="KeypadDblVerticalBar",d[d.KeypadColon=203]="KeypadColon",d[d.KeypadHash=204]="KeypadHash",d[d.KeypadSpace=205]="KeypadSpace",d[d.KeypadAt=206]="KeypadAt",d[d.KeypadExclamation=207]="KeypadExclamation",d[d.KeypadMemStore=208]="KeypadMemStore",d[d.KeypadMemRecall=209]="KeypadMemRecall",d[d.KeypadMemClear=210]="KeypadMemClear",d[d.KeypadMemAdd=211]="KeypadMemAdd",d[d.KeypadMemSubtract=212]="KeypadMemSubtract",d[d.KeypadMemMultiply=213]="KeypadMemMultiply",d[d.KeypadMemDivide=214]="KeypadMemDivide",d[d.KeypadPlusMinus=215]="KeypadPlusMinus",d[d.KeypadClear=216]="KeypadClear",d[d.KeypadClearEntry=217]="KeypadClearEntry",d[d.KeypadBinary=218]="KeypadBinary",d[d.KeypadOctal=219]="KeypadOctal",d[d.KeypadDecimal=220]="KeypadDecimal",d[d.KeypadHexadecimal=221]="KeypadHexadecimal",d[d.ControlLeft=224]="ControlLeft",d[d.ShiftLeft=225]="ShiftLeft",d[d.AltLeft=226]="AltLeft",d[d.MetaLeft=227]="MetaLeft",d[d.ControlRight=228]="ControlRight",d[d.ShiftRight=229]="ShiftRight",d[d.AltRight=230]="AltRight",d[d.MetaRight=231]="MetaRight";class m{static DESCRIPTOR=new Uint8Array([5,1,9,6,161,1,5,7,25,224,41,231,21,0,37,1,117,1,149,8,129,2,117,8,149,1,129,1,5,8,25,1,41,5,117,1,149,5,145,2,117,3,149,1,145,1,5,7,25,0,41,221,21,0,37,221,117,8,149,6,129,0,192]);#c=0;#u=new Set;down(e){e>=i.ControlLeft&&e<=i.MetaRight?this.#c|=1<<e-i.ControlLeft:this.#u.add(e)}up(e){e>=i.ControlLeft&&e<=i.MetaRight?this.#c&=~(1<<e-i.ControlLeft):this.#u.delete(e)}reset(){this.#c=0,this.#u.clear()}serializeInputReport(){let e=new Uint8Array(8);e[0]=this.#c;let t=2;for(let a of this.#u)if(e[t]=a,(t+=1)>=8)break;return e}}class h{static descriptor=new Uint8Array([5,1,9,2,161,1,9,1,161,0,5,9,25,1,41,5,21,0,37,1,117,1,149,5,129,2,117,3,149,1,129,1,5,1,9,48,9,49,9,56,21,129,37,127,117,8,149,3,129,6,5,12,10,56,2,21,129,37,127,117,8,149,1,129,6,192,192]);static serializeInputReport(e,t,a,r,n){return new Uint8Array([a,e,t,n,r])}}}}]);
//# sourceMappingURL=133-1e98d4439c0437dd.js.map