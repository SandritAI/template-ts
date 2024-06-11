(()=>{"use strict";var n={523:(n,r,t)=>{t.d(r,{A:()=>c});var e=t(991),o=t.n(e),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    margin: 0;\r\n    background-color: #282c34;\r\n    color: white;\r\n    font-family: 'Arial', sans-serif;\r\n}\r\n\r\n.button-container {\r\n    margin-top: 20px; \r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.clock-container {\r\n    text-align: center;\r\n}\r\n\r\n.clock {\r\n    width: 200px;\r\n    height: 200px;\r\n    border: 10px solid #fff;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.clock-face {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 50%;\r\n    background-color: #3c4043;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    z-index: 1; \r\n}\r\n\r\n.clock-time {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 2rem;\r\n    z-index: 2; \r\n}\r\n\r\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,yBAAyB;IACzB,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,eAAe;IACf,UAAU;AACd",sourcesContent:["body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    margin: 0;\r\n    background-color: #282c34;\r\n    color: white;\r\n    font-family: 'Arial', sans-serif;\r\n}\r\n\r\n.button-container {\r\n    margin-top: 20px; \r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.clock-container {\r\n    text-align: center;\r\n}\r\n\r\n.clock {\r\n    width: 200px;\r\n    height: 200px;\r\n    border: 10px solid #fff;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.clock-face {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 180px;\r\n    height: 180px;\r\n    border-radius: 50%;\r\n    background-color: #3c4043;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    z-index: 1; \r\n}\r\n\r\n.clock-time {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 2rem;\r\n    z-index: 2; \r\n}\r\n\r\n"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},991:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}n.exports=function(n){var t,e,o=(e=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(e=t.next()).done)&&(a.push(e.value),!r||a.length!==r);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(t,e)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),A="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([A]).join("\n")}return[a].join("\n")}},72:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=e.base?s[0]+e.base:s[0],l=a[A]||0,u="".concat(A," ").concat(l);a[A]=l+1;var f=t(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(r[f].references++,r[f].updater(d)):r.push({identifier:u,updater:o(d,e),references:1}),i.push(u)}return i}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var s=e(n,o),A=0;A<a.length;A++){var l=t(a[A]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},659:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},56:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{var n=t(72),r=t.n(n),e=t(825),o=t.n(e),a=t(659),i=t.n(a),c=t(56),s=t.n(c),A=t(540),l=t.n(A),u=t(113),f=t.n(u),d=t(523),p={};function m(n,r){for(var t=n.toString();t.length<r;)t="0"+t;return t}p.styleTagTransform=f(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),r()(d.A,p),d.A&&d.A.locals&&d.A.locals,setInterval((function(){var n=document.getElementById("clock");if(n){var r=new Date,t=m(r.getHours(),2),e=m(r.getMinutes(),2),o=m(r.getSeconds(),2);n.textContent="".concat(t,":").concat(e,":").concat(o)}}),1e3)})()})();
//# sourceMappingURL=bundle.js.map