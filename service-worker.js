if(!self.define){let i,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,r)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let u={};const o=i=>e(i,s),c={module:{uri:s},exports:u,require:o};n[s]=Promise.all(l.map((i=>c[i]||o(i)))).then((i=>(r(...i),u)))}}define(["./workbox-79ffe3e0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"portfolio"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.f7c6145b.css",revision:null},{url:"/css/chunk-vendors.3d8ec64c.css",revision:null},{url:"/icon1.ico",revision:"043e912c59fd4d2d3eefcb3e8613c3cf"},{url:"/icon2.ico",revision:"becd573963ca49c75415746e2a5c2dc2"},{url:"/img/c.03723d2d.png",revision:null},{url:"/img/css-3.ac0ac865.png",revision:null},{url:"/img/ecommerce.fd18d14a.png",revision:null},{url:"/img/eu.ac06eb10.jpg",revision:null},{url:"/img/html5.40ce9251.png",revision:null},{url:"/img/icon-hamburger.4b0003d1.png",revision:null},{url:"/img/java.a103e180.png",revision:null},{url:"/img/javascript.95b06606.png",revision:null},{url:"/img/landing-page.e9846669.png",revision:null},{url:"/img/logo2.e56f28f8.png",revision:null},{url:"/img/logo4.5cb7217a.png",revision:null},{url:"/img/mysql.45e91e25.png",revision:null},{url:"/img/nepelin.9afb1f44.png",revision:null},{url:"/img/nucleo-impulso-site.7a918338.png",revision:null},{url:"/img/php.5f628bc2.png",revision:null},{url:"/img/sass.379826ca.png",revision:null},{url:"/img/scrum.943f4f26.png",revision:null},{url:"/img/vue-js.73223303.png",revision:null},{url:"/img/vuetify.db7a6b58.png",revision:null},{url:"/img/wordpress.98528396.png",revision:null},{url:"/index.html",revision:"de1ef46239b19340139a5c836e4ec95e"},{url:"/js/app.ca6e6d2a.js",revision:null},{url:"/js/chunk-vendors.114b4807.js",revision:null},{url:"/manifest.json",revision:"1770c2524b653c4741436956a1f7f256"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
