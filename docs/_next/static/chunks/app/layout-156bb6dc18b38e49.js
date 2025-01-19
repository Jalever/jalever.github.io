(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5586:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var r=n(7796);let o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},d=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:c=u,defaultTheme:d=n?"system":"light",attribute:m="data-theme",value:p,children:y,nonce:b})=>{let[g,k]=(0,r.useState)(()=>h(l,d)),[S,_]=(0,r.useState)(()=>h(l)),$=p?Object.values(p):c,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=w());let a=p?p[r]:r,i=t?v():null,l=document.documentElement;if("class"===m?(l.classList.remove(...$),a&&l.classList.add(a)):a?l.setAttribute(m,a):l.removeAttribute(m),s){let e=o.includes(d)?d:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==i||i()},[]),x=(0,r.useCallback)(e=>{k(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{let r=w(t);_(r),"system"===g&&n&&!e&&E("system")},[g,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&x(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),(0,r.useEffect)(()=>{E(null!=e?e:g)},[e,g]);let C=(0,r.useMemo)(()=>({theme:g,setTheme:x,forcedTheme:e,resolvedTheme:"system"===g?S:g,themes:n?[...c,"system"]:c,systemTheme:n?S:void 0}),[g,x,e,S,n,c]);return r.createElement(i.Provider,{value:C},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:l,themes:c,defaultTheme:d,attribute:m,value:p,children:y,attrs:$,nonce:b}),y)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:i,defaultTheme:l,value:c,attrs:d,nonce:u})=>{let m="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let a=c?c[e]:e,s=t?e+"|| ''":`'${a}'`,l="";return i&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||a?`c.add(${s})`:"null":a&&(l+=`d[s](n,${s})`),l},w=e?`!function(){${f}${v(e)}}()`:s?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(l,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(l,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:w}})},()=>!0),h=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},w=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6489:function(e,t,n){Promise.resolve().then(n.t.bind(n,6485,23)),Promise.resolve().then(n.t.bind(n,6395,23)),Promise.resolve().then(n.bind(n,9422)),Promise.resolve().then(n.bind(n,7749)),Promise.resolve().then(n.bind(n,394)),Promise.resolve().then(n.t.bind(n,4511,23))},9422:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return d}});var r=n(7382),o=n(7796),a=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function s(){return"undefined"!=typeof window}function i(){return"production"}function l(){return"development"===function(){let e=s()?window.vam:i();return e||"production"}()}function c(e){return(0,o.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,o.useEffect)(()=>{!function(e={debug:!0}){var t;if(!s())return;(function(e="auto"){if("auto"===e){window.vam=i();return}window.vam=e})(e.mode),a(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n=e.scriptSrc||(l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector(`script[src*="${n}"]`))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),r.dataset.sdkv="1.4.1",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint&&(r.dataset.endpoint=e.endpoint),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},l()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,o.useEffect)(()=>{e.route&&e.path&&function({route:e,path:t}){var n;null==(n=window.va)||n.call(window,"pageview",{route:e,path:t})}({route:e.route,path:e.path})},[e.route,e.path]),null}function d(){return(0,r.jsx)(c,{})}},7749:function(e,t,n){"use strict";n.r(t),n.d(t,{ModeToggle:function(){return a}});var r=n(7382),o=n(5586);function a(){let{setTheme:e,theme:t}=(0,o.F)();return(0,r.jsxs)("button",{onClick:()=>e("light"===t?"dark":"light"),className:"border rounded-md w-6 h-6 flex items-center justify-center",children:[(0,r.jsx)("span",{className:"sr-only",children:"Toggle mode"}),"dark"!==t?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})]})}},394:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return a}});var r=n(7382);n(7796);var o=n(5586);function a(e){let{children:t,...n}=e;return(0,r.jsx)(o.f,{...n,children:t})}},6395:function(){},4511:function(e){e.exports={style:{fontFamily:"'__Inter_a184c8', '__Inter_Fallback_a184c8'",fontStyle:"normal"},className:"__className_a184c8"}},1061:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7796),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,l={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},7382:function(e,t,n){"use strict";e.exports=n(1061)}},function(e){e.O(0,[485,508,604,744],function(){return e(e.s=6489)}),_N_E=e.O()}]);