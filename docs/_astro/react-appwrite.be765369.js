import{r as p}from"./index.ed373d49.js";var x={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=p,m=Symbol.for("react.element"),d=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function a(s,t,c){var r,n={},o=null,l=null;c!==void 0&&(o=""+c),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)f.call(t,r)&&!b.hasOwnProperty(r)&&(n[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:m,type:s,key:o,ref:l,props:n,_owner:u.current}}i.Fragment=d;i.jsx=a;i.jsxs=a;x.exports=i;var e=x.exports;function j(s){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-4 py-3",children:[e.jsx("span",{className:"block text-sm text-white",children:"Guest"}),e.jsx("span",{className:"block text-sm truncate text-zinc-400",children:"hi@kbve.com"})]}),e.jsxs("ul",{className:"py-2","aria-labelledby":"user-menu-button",children:[e.jsx("li",{children:e.jsx("a",{href:"/#",className:"block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white",children:"Dashboard"})}),e.jsx("li",{children:e.jsx("a",{href:"/#",className:"block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white",children:"Settings"})}),e.jsx("li",{children:e.jsx("a",{href:"/#",className:"block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white",children:"Earnings"})}),e.jsx("li",{children:e.jsx("a",{href:"/#",className:"block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white",children:"Sign out"})})]})]})}export{j as ReactAppwrite};
