!function(){var t,e,i,r,n,s,u={3072:function(t,e,i){"use strict";var r=function(){function t(t,e){this.tinyH264Module=t,this.onPictureReady=e,this.pStorage=this.tinyH264Module._h264bsdAlloc(),this.pWidth=this.tinyH264Module._malloc(4),this.pHeight=this.tinyH264Module._malloc(4),this.pPicture=this.tinyH264Module._malloc(4),this._decBuffer=this.tinyH264Module._malloc(1048576),this.tinyH264Module._h264bsdInit(this.pStorage,0)}var e=t.prototype;return e.release=function(){var t=this.pStorage;0!==t&&(this.tinyH264Module._h264bsdShutdown(t),this.tinyH264Module._h264bsdFree(t)),this.tinyH264Module._free(this.pWidth),this.tinyH264Module._free(this.pHeight),this.tinyH264Module._free(this.pPicture),this.pStorage=0,this.pWidth=0,this.pHeight=0},e.decode=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),this.tinyH264Module.HEAPU8.set(e,this._decBuffer),this.tinyH264Module._h264bsdDecode(this.pStorage,this._decBuffer,e.byteLength,this.pPicture,this.pWidth,this.pHeight)===t.PIC_RDY){var i=this.tinyH264Module.getValue(this.pWidth,"i32"),r=this.tinyH264Module.getValue(this.pHeight,"i32"),n=this.tinyH264Module.getValue(this.pPicture,"i8*"),s=new Uint8Array(this.tinyH264Module.HEAPU8.subarray(n,n+i*r*3/2));this.onPictureReady(s,i,r)}},t}();r.RDY=0,r.PIC_RDY=1,r.HDRS_RDY=2,r.ERROR=3,r.PARAM_SET_ERROR=4,r.MEMALLOC_ERROR=5;var n=i(8832),s={};(0,n.Z)().then(function(t){self.addEventListener("message",function(e){var i=e.data,n=i.renderStateId;switch(i.type){case"decode":var u=s[n];u||(u=new r(t,function(t,e,i){postMessage({type:"pictureReady",width:e,height:i,renderStateId:n,data:t.buffer},[t.buffer])}),s[n]=u),u.decode(new Uint8Array(i.data,i.offset,i.length));break;case"release":var o=s[n];o&&(o.release(),delete s[n])}}),self.postMessage({type:"decoderReady"})})}},o={};function h(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}},r=!0;try{u[t](i,i.exports,h),r=!1}finally{r&&delete o[t]}return i.exports}h.m=u,h.x=function(){var t=h.O(void 0,[806],function(){return h(3072)});return h.O(t)},t=[],h.O=function(e,i,r,n){if(i){n=n||0;for(var s=t.length;s>0&&t[s-1][2]>n;s--)t[s]=t[s-1];t[s]=[i,r,n];return}for(var u=1/0,s=0;s<t.length;s++){for(var i=t[s][0],r=t[s][1],n=t[s][2],o=!0,a=0;a<i.length;a++)u>=n&&Object.keys(h.O).every(function(t){return h.O[t](i[a])})?i.splice(a--,1):(o=!1,n<u&&(u=n));if(o){t.splice(s--,1);var c=r();void 0!==c&&(e=c)}}return e},h.f={},h.e=function(t){return Promise.all(Object.keys(h.f).reduce(function(e,i){return h.f[i](t,e),e},[]))},h.u=function(t){return"static/chunks/ec7f8751.61b06de6bddf0d95.js"},h.miniCssF=function(t){},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.tt=function(){return void 0===e&&(e={createScriptURL:function(t){return t}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e},h.tu=function(t){return h.tt().createScriptURL(t)},h.p="/adm-emulator/_next/",i={72:1},h.f.i=function(t,e){i[t]||importScripts(h.tu(h.p+h.u(t)))},n=(r=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(r),r.push=function(t){var e=t[0],r=t[1],s=t[2];for(var u in r)h.o(r,u)&&(h.m[u]=r[u]);for(s&&s(h);e.length;)i[e.pop()]=1;n(t)},s=h.x,h.x=function(){return h.e(806).then(s)},_N_E=h.x()}();
//# sourceMappingURL=72.bfcef1a5a82fa337.js.map