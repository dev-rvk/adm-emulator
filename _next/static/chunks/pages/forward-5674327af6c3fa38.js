(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{3666:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forward",function(){return a(9931)}])},9931:function(e,t,a){"use strict";a.r(t);var n=a(74),r=a(7521),i=a(5195),l=a(4661),c=a(751),o=a(8340);let u=(0,l.ky)({log:[]});(0,l.U5)(()=>o.GLOBAL_STATE.adb,async e=>{if(!e)return;let t=await e.createSocket("tcp:27042");(0,l.z)(()=>{u.log.push("connected")});let a=t.writable.getWriter();await i.ConsumableWritableStream.write(a,(0,r.encodeUtf8)("Hello\n"));let n=t.readable.getReader(),c=await n.read();c.value&&(0,l.z)(()=>{u.log.push("received: ".concat((0,r.decodeUtf8)(c.value)))})},{fireImmediately:!0}),t.default=(0,c.Pi)(()=>(0,n.jsx)("div",{children:u.log.map((e,t)=>(0,n.jsx)("div",{children:e},t))}))}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3666)}),_N_E=e.O()}]);
//# sourceMappingURL=forward-5674327af6c3fa38.js.map