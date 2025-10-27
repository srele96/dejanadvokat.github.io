var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var q=([e,t,a])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{r.setAttribute(o,String(t[o]))}),a?.length&&a.forEach(o=>{let f=q(o);r.appendChild(f)}),r},b=(e,t={})=>{let r={...s,...t};return q(["svg",r,e])};var H=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),O=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",G=e=>e.flatMap(O).map(a=>a.trim()).filter(Boolean).filter((a,r,o)=>o.indexOf(a)===r).join(" "),E=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,r)=>a.toUpperCase()+r.toLowerCase()),d=(e,{nameAttr:t,icons:a,attrs:r})=>{let o=e.getAttribute(t);if(o==null)return;let f=E(o),l=a[f];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let R=H(e),y={...s,"data-lucide":o,...r,...R},T=G(["lucide",`lucide-${o}`,R,r]);T&&Object.assign(y,{class:T});let v=b(l,y);return e.parentNode?.replaceChild(v,e)};var p=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];var m=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];var x=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];var i=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];var n=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];var c=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];var C=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];var h=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];var S=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]];var g=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];var w=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];var k=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]];var u=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];var P=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];var M=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];var A=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];var B=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];var D=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];var F=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];var L=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];var U=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=r.querySelectorAll(`[${t}]`);if(Array.from(o).forEach(f=>d(f,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){let f=r.querySelectorAll("[icon-name]");f.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(f).forEach(l=>d(l,{nameAttr:"icon-name",icons:e,attrs:a})))}};U({icons:{Menu:B,MapPin:A,Mail:M,Landmark:P,Home:u,Building2:c,Shield:D,Briefcase:n,Banknote:i,CircleDollarSign:C,Users:F,Copyright:S,Factory:w,FileCheck:k,ExternalLink:g,Clock:h,ArrowLeft:m,X:L,ArrowRight:x,ArrowDown:p}});
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/icons/arrow-down.js:
lucide/dist/esm/icons/arrow-left.js:
lucide/dist/esm/icons/arrow-right.js:
lucide/dist/esm/icons/banknote.js:
lucide/dist/esm/icons/briefcase.js:
lucide/dist/esm/icons/building-2.js:
lucide/dist/esm/icons/circle-dollar-sign.js:
lucide/dist/esm/icons/clock.js:
lucide/dist/esm/icons/copyright.js:
lucide/dist/esm/icons/external-link.js:
lucide/dist/esm/icons/factory.js:
lucide/dist/esm/icons/file-check.js:
lucide/dist/esm/icons/house.js:
lucide/dist/esm/icons/landmark.js:
lucide/dist/esm/icons/mail.js:
lucide/dist/esm/icons/map-pin.js:
lucide/dist/esm/icons/menu.js:
lucide/dist/esm/icons/shield.js:
lucide/dist/esm/icons/users.js:
lucide/dist/esm/icons/x.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
