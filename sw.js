if(!self.define){let e,a={};const t=(t,c)=>(t=new URL(t+".js",c).href,a[t]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=a,document.head.appendChild(e)}else e=t,importScripts(t),a()})).then((()=>{let e=a[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let s={};const r=e=>t(e,i),f={module:{uri:i},exports:s,require:r};a[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(d(...e),s)))}}define(["./workbox-01fd22c6"],(function(e){"use strict";importScripts("fallback-w6apoq8vT62_Kumev65ng.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/adm-emulator/StreamSaver/mitm.html",revision:"a2b5e7a3088071fbd9eda05828f0b650"},{url:"/adm-emulator/StreamSaver/sw.js",revision:"407f39df9acb3c1933d32191f35e28bd"},{url:"/adm-emulator/_next/static/chunks/133-1e98d4439c0437dd.js",revision:"1e98d4439c0437dd"},{url:"/adm-emulator/_next/static/chunks/133-1e98d4439c0437dd.js.map",revision:"65e11ebe29f3d87ae64e2807b04d2240"},{url:"/adm-emulator/_next/static/chunks/180.ccea66d179555509.js",revision:"ccea66d179555509"},{url:"/adm-emulator/_next/static/chunks/180.ccea66d179555509.js.map",revision:"ff6a319e0b6c55eadd9ca63156ab66dd"},{url:"/adm-emulator/_next/static/chunks/252-c5c701f18d5deb7e.js",revision:"c5c701f18d5deb7e"},{url:"/adm-emulator/_next/static/chunks/252-c5c701f18d5deb7e.js.map",revision:"8b7f3adf6b06fa71f1ce2f123e73141c"},{url:"/adm-emulator/_next/static/chunks/258-456dd8caa238b31d.js",revision:"456dd8caa238b31d"},{url:"/adm-emulator/_next/static/chunks/258-456dd8caa238b31d.js.map",revision:"d3b151f27e9fa2000291c1f24f97086e"},{url:"/adm-emulator/_next/static/chunks/338.646637f952220dc4.js",revision:"646637f952220dc4"},{url:"/adm-emulator/_next/static/chunks/338.646637f952220dc4.js.map",revision:"33dd05933ee096f1f4337852bbb89cc0"},{url:"/adm-emulator/_next/static/chunks/3ffe8190-e59c70fbaa5a4642.js",revision:"e59c70fbaa5a4642"},{url:"/adm-emulator/_next/static/chunks/458-c11ab6d22975ae6a.js",revision:"c11ab6d22975ae6a"},{url:"/adm-emulator/_next/static/chunks/458-c11ab6d22975ae6a.js.map",revision:"3376c668c9180b010405c80287643a22"},{url:"/adm-emulator/_next/static/chunks/517-f0d178ca61c48c14.js",revision:"f0d178ca61c48c14"},{url:"/adm-emulator/_next/static/chunks/517-f0d178ca61c48c14.js.map",revision:"6e898836ec2daafe93d1113127d2c736"},{url:"/adm-emulator/_next/static/chunks/707.0c041acceb941dc6.js",revision:"0c041acceb941dc6"},{url:"/adm-emulator/_next/static/chunks/707.0c041acceb941dc6.js.map",revision:"61c253ea2d46ccb2fb471555efe115f9"},{url:"/adm-emulator/_next/static/chunks/72.bfcef1a5a82fa337.js",revision:"bfcef1a5a82fa337"},{url:"/adm-emulator/_next/static/chunks/72.bfcef1a5a82fa337.js.map",revision:"b4cab07f69136948900779ceef047305"},{url:"/adm-emulator/_next/static/chunks/914-83d6896bceeed05d.js",revision:"83d6896bceeed05d"},{url:"/adm-emulator/_next/static/chunks/914-83d6896bceeed05d.js.map",revision:"55e4060b318ccdebb595719fb06a6650"},{url:"/adm-emulator/_next/static/chunks/986.cb01b9ed19cd8428.js",revision:"cb01b9ed19cd8428"},{url:"/adm-emulator/_next/static/chunks/986.cb01b9ed19cd8428.js.map",revision:"7aa2a8eb78ede8a9c33886d4df26d89d"},{url:"/adm-emulator/_next/static/chunks/ec7f8751.61b06de6bddf0d95.js",revision:"61b06de6bddf0d95"},{url:"/adm-emulator/_next/static/chunks/ec7f8751.61b06de6bddf0d95.js.map",revision:"2b8d06765d550396bf5f0ca4013c2a14"},{url:"/adm-emulator/_next/static/chunks/framework-986bc8ddb10be83d.js",revision:"986bc8ddb10be83d"},{url:"/adm-emulator/_next/static/chunks/framework-986bc8ddb10be83d.js.map",revision:"b2206a3ab32b180c6c158b2eddcf5b4c"},{url:"/adm-emulator/_next/static/chunks/main-14ba4035c548b8f4.js",revision:"14ba4035c548b8f4"},{url:"/adm-emulator/_next/static/chunks/main-14ba4035c548b8f4.js.map",revision:"a6491fdec1db5f8ac0a6b9aa9f7b9a27"},{url:"/adm-emulator/_next/static/chunks/pages/_app-f5e8c84798ac91b6.js",revision:"f5e8c84798ac91b6"},{url:"/adm-emulator/_next/static/chunks/pages/_error-cfdb8f43ab8fffc9.js",revision:"cfdb8f43ab8fffc9"},{url:"/adm-emulator/_next/static/chunks/pages/_error-cfdb8f43ab8fffc9.js.map",revision:"4f98f0876b5f0e0a9c23327214922350"},{url:"/adm-emulator/_next/static/chunks/pages/_offline-6a56373aa6ec316d.js",revision:"6a56373aa6ec316d"},{url:"/adm-emulator/_next/static/chunks/pages/_offline-6a56373aa6ec316d.js.map",revision:"673a3b71e1569994986f5dc37c0a0e5e"},{url:"/adm-emulator/_next/static/chunks/pages/audio-682c1a7ac51473e9.js",revision:"682c1a7ac51473e9"},{url:"/adm-emulator/_next/static/chunks/pages/audio-682c1a7ac51473e9.js.map",revision:"7593da31ce9a001265dd6a05e63c0e6e"},{url:"/adm-emulator/_next/static/chunks/pages/bug-report-602ac75ae42f623c.js",revision:"602ac75ae42f623c"},{url:"/adm-emulator/_next/static/chunks/pages/bug-report-602ac75ae42f623c.js.map",revision:"0fd304740873f25345aaca9e56e58c60"},{url:"/adm-emulator/_next/static/chunks/pages/chrome-devtools-6ad68c3db2697574.js",revision:"6ad68c3db2697574"},{url:"/adm-emulator/_next/static/chunks/pages/chrome-devtools-6ad68c3db2697574.js.map",revision:"40619dc94b3b18d025ad0bf0c4ca07b9"},{url:"/adm-emulator/_next/static/chunks/pages/chrome-devtools-frame-c4767002cfc9ff2e.js",revision:"c4767002cfc9ff2e"},{url:"/adm-emulator/_next/static/chunks/pages/chrome-devtools-frame-c4767002cfc9ff2e.js.map",revision:"9f2de344b5800ed91b3050a874d47221"},{url:"/adm-emulator/_next/static/chunks/pages/dev-mode-8b37cbf134f7ca99.js",revision:"8b37cbf134f7ca99"},{url:"/adm-emulator/_next/static/chunks/pages/dev-mode-8b37cbf134f7ca99.js.map",revision:"b5e93c544151796df7a6ada959b48932"},{url:"/adm-emulator/_next/static/chunks/pages/device-info-0ea6068c0bf57c50.js",revision:"0ea6068c0bf57c50"},{url:"/adm-emulator/_next/static/chunks/pages/device-info-0ea6068c0bf57c50.js.map",revision:"501193cdfa12bf42b66d3b217e3d8061"},{url:"/adm-emulator/_next/static/chunks/pages/file-manager-5237c16806e39767.js",revision:"5237c16806e39767"},{url:"/adm-emulator/_next/static/chunks/pages/file-manager-5237c16806e39767.js.map",revision:"eb9e9adfdab003d6dd0d6b47e571f923"},{url:"/adm-emulator/_next/static/chunks/pages/forward-2ee2c5d1862dd53c.js",revision:"2ee2c5d1862dd53c"},{url:"/adm-emulator/_next/static/chunks/pages/forward-2ee2c5d1862dd53c.js.map",revision:"f15d8804b28521c08c88424c7b2d1482"},{url:"/adm-emulator/_next/static/chunks/pages/framebuffer-707b9751763929a3.js",revision:"707b9751763929a3"},{url:"/adm-emulator/_next/static/chunks/pages/framebuffer-707b9751763929a3.js.map",revision:"b3df89551cd4fa5fe8e8a1ae986cbdeb"},{url:"/adm-emulator/_next/static/chunks/pages/index-c9309428f36478d2.js",revision:"c9309428f36478d2"},{url:"/adm-emulator/_next/static/chunks/pages/index-c9309428f36478d2.js.map",revision:"e8d2b63d03ebec3ddd70626b678417f9"},{url:"/adm-emulator/_next/static/chunks/pages/install-54441acd312e29c3.js",revision:"54441acd312e29c3"},{url:"/adm-emulator/_next/static/chunks/pages/install-54441acd312e29c3.js.map",revision:"e80f24065313265c9342d0e15a7d401d"},{url:"/adm-emulator/_next/static/chunks/pages/logcat-6a6cf2f67d333619.js",revision:"6a6cf2f67d333619"},{url:"/adm-emulator/_next/static/chunks/pages/logcat-6a6cf2f67d333619.js.map",revision:"76cd125f46299858c50a3c784fdb5fc5"},{url:"/adm-emulator/_next/static/chunks/pages/packet-log-5c7f8ac1ee0b2d47.js",revision:"5c7f8ac1ee0b2d47"},{url:"/adm-emulator/_next/static/chunks/pages/packet-log-5c7f8ac1ee0b2d47.js.map",revision:"101e1fb0b83b91b5027d676e332a2126"},{url:"/adm-emulator/_next/static/chunks/pages/power-d4c1ba75e2ec4768.js",revision:"d4c1ba75e2ec4768"},{url:"/adm-emulator/_next/static/chunks/pages/power-d4c1ba75e2ec4768.js.map",revision:"a2c55f49eb9e27768d8b758e26a1048a"},{url:"/adm-emulator/_next/static/chunks/pages/reverse-d90395b60304e016.js",revision:"d90395b60304e016"},{url:"/adm-emulator/_next/static/chunks/pages/reverse-d90395b60304e016.js.map",revision:"24f1bfd49c26f1a96eb272750c41fcbd"},{url:"/adm-emulator/_next/static/chunks/pages/scrcpy-453f42d7a081f588.js",revision:"453f42d7a081f588"},{url:"/adm-emulator/_next/static/chunks/pages/scrcpy-453f42d7a081f588.js.map",revision:"bfffc910a6dd885ebb3dcb18c39da96b"},{url:"/adm-emulator/_next/static/chunks/pages/shell-7a0286c84947a939.js",revision:"7a0286c84947a939"},{url:"/adm-emulator/_next/static/chunks/pages/shell-7a0286c84947a939.js.map",revision:"e84aa9599d2801f1e6c79e00ee5fba30"},{url:"/adm-emulator/_next/static/chunks/pages/tcpip-317fc7f0fb42d336.js",revision:"317fc7f0fb42d336"},{url:"/adm-emulator/_next/static/chunks/pages/tcpip-317fc7f0fb42d336.js.map",revision:"49a496048f34d97be842dfa85d64a2d4"},{url:"/adm-emulator/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/adm-emulator/_next/static/chunks/webpack-a61d000f0f50ad0f.js",revision:"a61d000f0f50ad0f"},{url:"/adm-emulator/_next/static/chunks/webpack-a61d000f0f50ad0f.js.map",revision:"944663098712497e9fca93f74e9c440b"},{url:"/adm-emulator/_next/static/css/b6853f0190ea9f57.css",revision:"b6853f0190ea9f57"},{url:"/adm-emulator/_next/static/css/b6853f0190ea9f57.css.map",revision:"ec127053c82204d0bd9cbcaa83120bea"},{url:"/adm-emulator/_next/static/media/07ed6d5fa32c1d54af0f.bd6c2137.ttf",revision:"bd6c2137"},{url:"/adm-emulator/_next/static/media/0fb0dd0fab644ec3cc0f.7b186e19.ttf",revision:"7b186e19"},{url:"/adm-emulator/_next/static/media/0ff70dcbf135d859ebf3.13428122.ttf",revision:"13428122"},{url:"/adm-emulator/_next/static/media/106decef28ab53592d15.b648a008.ttf",revision:"b648a008"},{url:"/adm-emulator/_next/static/media/1656862c40fcbb6aab38.921f7599.woff",revision:"921f7599"},{url:"/adm-emulator/_next/static/media/17a6e1aebccdbaa39e78.d151c40a.ttf",revision:"d151c40a"},{url:"/adm-emulator/_next/static/media/18626a93841302f40cd4.cbcbb1ab.ttf",revision:"cbcbb1ab"},{url:"/adm-emulator/_next/static/media/1ad4ee9ac5342aa9517b.b89888da.otf",revision:"b89888da"},{url:"/adm-emulator/_next/static/media/1e0985b2379656710502.45d743c0.ttf",revision:"45d743c0"},{url:"/adm-emulator/_next/static/media/1ef673311d0999bd0845.32a7b1f9.ttf",revision:"32a7b1f9"},{url:"/adm-emulator/_next/static/media/1f375102559ff28a260c.2ec5e7b1.woff",revision:"2ec5e7b1"},{url:"/adm-emulator/_next/static/media/22a8b6aa2704c6bc2a4e.99910057.otf",revision:"99910057"},{url:"/adm-emulator/_next/static/media/22df9e5063a397d85418.393064cf.woff2",revision:"393064cf"},{url:"/adm-emulator/_next/static/media/25b9e2c8d4bf7fb66c96.808b57a1.woff2",revision:"808b57a1"},{url:"/adm-emulator/_next/static/media/27ac247f8440c60ebd5b.c2847f05.ttf",revision:"c2847f05"},{url:"/adm-emulator/_next/static/media/2a8e5dd1b9561e93b029.73b8dbbf.ttf",revision:"73b8dbbf"},{url:"/adm-emulator/_next/static/media/2bf28c5593cdd4dfd27e.dfca5f1f.woff",revision:"dfca5f1f"},{url:"/adm-emulator/_next/static/media/30077e5bcbe0f99ce6fd.bf587806.woff",revision:"bf587806"},{url:"/adm-emulator/_next/static/media/365af7decd96084858a6.04b9e27a.otf",revision:"04b9e27a"},{url:"/adm-emulator/_next/static/media/3d8ce8a444d136a226e2.d27554e6.otf",revision:"d27554e6"},{url:"/adm-emulator/_next/static/media/3fa75838b460518713c4.024875f6.ttf",revision:"024875f6"},{url:"/adm-emulator/_next/static/media/401c6a99118ff20c7c70.90cd4a41.woff",revision:"90cd4a41"},{url:"/adm-emulator/_next/static/media/41b74324bfe1f53a495f.bea3d345.woff2",revision:"bea3d345"},{url:"/adm-emulator/_next/static/media/45a6c12e9479ab2ce2f5.0f7f058f.woff",revision:"0f7f058f"},{url:"/adm-emulator/_next/static/media/49a90b213bad86846471.c4b2fa89.otf",revision:"c4b2fa89"},{url:"/adm-emulator/_next/static/media/4a0ad4e3ea89dd9af350.6e3363f1.ttf",revision:"6e3363f1"},{url:"/adm-emulator/_next/static/media/4c6a2c7db318c13f10e9.a2485f51.ttf",revision:"a2485f51"},{url:"/adm-emulator/_next/static/media/5142ce8ec19107b657f9.ee0bec4b.ttf",revision:"ee0bec4b"},{url:"/adm-emulator/_next/static/media/519fd21aa0cf770e7f3a.49eef996.ttf",revision:"49eef996"},{url:"/adm-emulator/_next/static/media/58396b19537299d2a628.2a525d18.ttf",revision:"2a525d18"},{url:"/adm-emulator/_next/static/media/594eed08cee0747e8a14.2552c056.otf",revision:"2552c056"},{url:"/adm-emulator/_next/static/media/5a045f9f2ad411b60d44.a691338e.otf",revision:"a691338e"},{url:"/adm-emulator/_next/static/media/5d3cf303e2513a6745bc.65fd4ef5.woff",revision:"65fd4ef5"},{url:"/adm-emulator/_next/static/media/5de9284534ba6d7076c7.d552a650.woff2",revision:"d552a650"},{url:"/adm-emulator/_next/static/media/5edb0990cb43ec9bafb8.d3eb2f70.woff2",revision:"d3eb2f70"},{url:"/adm-emulator/_next/static/media/5f784100ecc582db5544.7cc50ac6.ttf",revision:"7cc50ac6"},{url:"/adm-emulator/_next/static/media/637f599a4c8ebbbafcca.d5ce640d.woff",revision:"d5ce640d"},{url:"/adm-emulator/_next/static/media/69040ef72f7672a1de84.2de5c979.otf",revision:"2de5c979"},{url:"/adm-emulator/_next/static/media/6aab4805c74d8daada2c.61fc827d.woff",revision:"61fc827d"},{url:"/adm-emulator/_next/static/media/6e9afcf5ca9ac5124040.dceb393d.woff2",revision:"dceb393d"},{url:"/adm-emulator/_next/static/media/712bbf0d6d466fa7245b.20a397db.woff2",revision:"20a397db"},{url:"/adm-emulator/_next/static/media/7294701ba6f27fd0a489.6747fa8b.woff",revision:"6747fa8b"},{url:"/adm-emulator/_next/static/media/7692fdfb2d88e22bb70f.dac5c963.ttf",revision:"dac5c963"},{url:"/adm-emulator/_next/static/media/7b9d00a3bbdf9cbd61e2.c8dbac02.woff2",revision:"c8dbac02"},{url:"/adm-emulator/_next/static/media/7cb14a9ed9ec10da7ae2.1c14a74b.ttf",revision:"1c14a74b"},{url:"/adm-emulator/_next/static/media/7d079312e0f1c11f173d.ebc5b4e2.woff",revision:"ebc5b4e2"},{url:"/adm-emulator/_next/static/media/7d14038b9f0566ca8800.47e75337.otf",revision:"47e75337"},{url:"/adm-emulator/_next/static/media/83aaa30b42f593efae5a.072b2215.woff2",revision:"072b2215"},{url:"/adm-emulator/_next/static/media/840ab830abe7ba35963b.8ff31b53.ttf",revision:"8ff31b53"},{url:"/adm-emulator/_next/static/media/8835b1108ce8188deff8.b20eec2f.woff2",revision:"b20eec2f"},{url:"/adm-emulator/_next/static/media/8b0392773e38a1168f72.3decd2e3.woff",revision:"3decd2e3"},{url:"/adm-emulator/_next/static/media/8d9d5753c196e807ad7b.71644f90.otf",revision:"71644f90"},{url:"/adm-emulator/_next/static/media/8f49426703194bc223c1.ad043973.otf",revision:"ad043973"},{url:"/adm-emulator/_next/static/media/908e2cef05212cb71b3d.b9c9b60f.woff2",revision:"b9c9b60f"},{url:"/adm-emulator/_next/static/media/92717c9fd4c0ab9b09ab.3f597dc8.ttf",revision:"3f597dc8"},{url:"/adm-emulator/_next/static/media/93737f51488de810dcc0.dd1c7d9c.ttf",revision:"dd1c7d9c"},{url:"/adm-emulator/_next/static/media/93f719f4d62bfa3e748c.cece584e.woff2",revision:"cece584e"},{url:"/adm-emulator/_next/static/media/9424ad3f683c9a5a5c75.74633253.woff2",revision:"74633253"},{url:"/adm-emulator/_next/static/media/95316d52e3669e9327d2.21c27488.woff2",revision:"21c27488"},{url:"/adm-emulator/_next/static/media/964fada96abed2b04cc9.21967822.woff2",revision:"21967822"},{url:"/adm-emulator/_next/static/media/97fe0eebfdd152f7b499.855342ce.woff2",revision:"855342ce"},{url:"/adm-emulator/_next/static/media/983e21420fc690c961e3.5ead4fb7.otf",revision:"5ead4fb7"},{url:"/adm-emulator/_next/static/media/9a2d1789d072bcb58d66.fd69729e.woff2",revision:"fd69729e"},{url:"/adm-emulator/_next/static/media/9a46e37e0a2cf5e048b1.ae00d4e8.otf",revision:"ae00d4e8"},{url:"/adm-emulator/_next/static/media/9a542e40c824951b2f0c.61c446f4.woff2",revision:"61c446f4"},{url:"/adm-emulator/_next/static/media/9ca90bd56aa2d7adc0e8.7ecb824c.otf",revision:"7ecb824c"},{url:"/adm-emulator/_next/static/media/9f9050a0c1ca64390e6f.b28cbdfa.woff",revision:"b28cbdfa"},{url:"/adm-emulator/_next/static/media/a43044d3166461762fad.19735a91.woff",revision:"19735a91"},{url:"/adm-emulator/_next/static/media/a4e747b9a12a4dd24101.8eabbc03.ttf",revision:"8eabbc03"},{url:"/adm-emulator/_next/static/media/a57305681411f183f5e5.d6987c0c.woff",revision:"d6987c0c"},{url:"/adm-emulator/_next/static/media/a865dc036728b0cb49ed.bc914ff7.otf",revision:"bc914ff7"},{url:"/adm-emulator/_next/static/media/a9a074b46b3bb0615a65.a738c428.woff2",revision:"a738c428"},{url:"/adm-emulator/_next/static/media/a9fa4663ee8128b8478b.90c6bedf.woff",revision:"90c6bedf"},{url:"/adm-emulator/_next/static/media/ac04032587d9e8e9f1b9.fa23e907.ttf",revision:"fa23e907"},{url:"/adm-emulator/_next/static/media/ac3c0d6660d55a57bacf.2116151a.woff2",revision:"2116151a"},{url:"/adm-emulator/_next/static/media/b0e68feb2f44e3886c55.584152e3.otf",revision:"584152e3"},{url:"/adm-emulator/_next/static/media/b57645f54ae71ae816e3.a3b82214.otf",revision:"a3b82214"},{url:"/adm-emulator/_next/static/media/bb58b232c4e94c8a64a5.f13b5160.otf",revision:"f13b5160"},{url:"/adm-emulator/_next/static/media/bb8d5a145e22822103fb.60e5c9d3.woff2",revision:"60e5c9d3"},{url:"/adm-emulator/_next/static/media/bc3722686635b5f86132.6f7d0aec.woff2",revision:"6f7d0aec"},{url:"/adm-emulator/_next/static/media/bda28cfdf039b0a44ab4.fa0cd9e1.otf",revision:"fa0cd9e1"},{url:"/adm-emulator/_next/static/media/c7124c5838a0bb9d0718.b782c4c7.woff2",revision:"b782c4c7"},{url:"/adm-emulator/_next/static/media/c9b042f019fd819523ab.29c7fc51.otf",revision:"29c7fc51"},{url:"/adm-emulator/_next/static/media/cabd53cde475af03a6fb.3564b89e.woff",revision:"3564b89e"},{url:"/adm-emulator/_next/static/media/ce3c2230777d7089b045.2ac19c41.otf",revision:"2ac19c41"},{url:"/adm-emulator/_next/static/media/d2a3dc0c299e305e0bad.9b02b7f9.woff2",revision:"9b02b7f9"},{url:"/adm-emulator/_next/static/media/d2b4d257658ba4562673.7b2d688e.ttf",revision:"7b2d688e"},{url:"/adm-emulator/_next/static/media/d4420e97eacc0df955b3.bace3b3f.woff2",revision:"bace3b3f"},{url:"/adm-emulator/_next/static/media/d817d3e3a593d890c8f5.5772f054.woff",revision:"5772f054"},{url:"/adm-emulator/_next/static/media/d9a4e145d3544a7a2783.0b8a1a0a.woff",revision:"0b8a1a0a"},{url:"/adm-emulator/_next/static/media/da57122c34ed6fa52a23.0e143532.woff2",revision:"0e143532"},{url:"/adm-emulator/_next/static/media/dd625a9906a10c1b3413.2a4fe377.otf",revision:"2a4fe377"},{url:"/adm-emulator/_next/static/media/de4e0fc9b0bb0ff02b2f.b265883e.woff2",revision:"b265883e"},{url:"/adm-emulator/_next/static/media/df70c3a856c8c1c52191.350e6772.woff",revision:"350e6772"},{url:"/adm-emulator/_next/static/media/e0e421f4bf0049d41f79.3a237112.ttf",revision:"3a237112"},{url:"/adm-emulator/_next/static/media/e15ee88415532a1c43d2.dfa23ab5.ttf",revision:"dfa23ab5"},{url:"/adm-emulator/_next/static/media/e6c6564831dfb20a0ed2.f0217849.woff",revision:"f0217849"},{url:"/adm-emulator/_next/static/media/e81d2ca2c3db2b47db15.11c18d74.otf",revision:"11c18d74"},{url:"/adm-emulator/_next/static/media/e971dc6d589b81462070.90cb3c06.ttf",revision:"90cb3c06"},{url:"/adm-emulator/_next/static/media/e9d58bd792b9db2ed236.5617af1a.woff",revision:"5617af1a"},{url:"/adm-emulator/_next/static/media/eab95f5575c95b9e2bb7.d7a1d9dd.woff",revision:"d7a1d9dd"},{url:"/adm-emulator/_next/static/media/f342a7ec779d4d7a2ee6.dbbdbe9e.otf",revision:"dbbdbe9e"},{url:"/adm-emulator/_next/static/media/f43111427dc2551a4949.396caab8.woff",revision:"396caab8"},{url:"/adm-emulator/_next/static/media/f6a2b0356ab13865c0a1.88eee35b.otf",revision:"88eee35b"},{url:"/adm-emulator/_next/static/media/f7d81feaf5e375cfa94d.6051446a.woff",revision:"6051446a"},{url:"/adm-emulator/_next/static/media/f93136b36638d97e57ec.3f16e821.woff",revision:"3f16e821"},{url:"/adm-emulator/_next/static/media/fadd9f2bded6c92e70b1.42e53ea6.woff2",revision:"42e53ea6"},{url:"/adm-emulator/_next/static/media/fb731c620f945b0a3be7.816746fe.woff2",revision:"816746fe"},{url:"/adm-emulator/_next/static/media/fbf7ea7c287a976450cc.4870fae1.ttf",revision:"4870fae1"},{url:"/adm-emulator/_next/static/media/ffe4954a8c837444aecb.3713f8ad.otf",revision:"3713f8ad"},{url:"/adm-emulator/_next/static/media/llhttp.a92ee3b9.wasm",revision:"a92ee3b9"},{url:"/adm-emulator/_next/static/media/llhttp_simd.920bfad7.wasm",revision:"920bfad7"},{url:"/adm-emulator/_next/static/media/server.e15da049.bin",revision:"e15da049"},{url:"/adm-emulator/_next/static/media/worker.403c83a2.js",revision:"403c83a2"},{url:"/adm-emulator/_next/static/w6apoq8vT62_Kumev65ng/_buildManifest.js",revision:"70239cebb70e04673c5b77c997b36253"},{url:"/adm-emulator/_next/static/w6apoq8vT62_Kumev65ng/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/adm-emulator/_offline",revision:"w6apoq8vT62_Kumev65ng"},{url:"/adm-emulator/favicon-256.png",revision:"476c6aafa56d0b94a9faa9b18bfc547b"},{url:"/adm-emulator/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/adm-emulator/manifest.json",revision:"bc35a2f975f9ac526d0d164141436e89"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/adm-emulator",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:t,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
//# sourceMappingURL=sw.js.map
