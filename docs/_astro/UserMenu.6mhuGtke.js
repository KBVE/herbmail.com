import{S as C,i as L,s as M,E as z,k as b,p as d,h as p,u as $,e as u,c as x,g as _,j as h,a as g,t as E,b as w,d as S,f as H,l as v,o as T}from"./index.Bw2twfQ2.js";import{k as q}from"./storage.BJ8ngiY5.js";import"./index.Y0MI8VVX.js";import"./index.BH1EYZ08.js";function N(o){let e,a='<li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Register</a></li> <li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Sign in</a></li>';return{c(){e=u("ul"),e.innerHTML=a,this.h()},l(l){e=x(l,"UL",{class:!0,"aria-labelledby":!0,"data-svelte-h":!0}),_(e)!=="svelte-qn6eth"&&(e.innerHTML=a),this.h()},h(){h(e,"class","py-2"),h(e,"aria-labelledby","user-menu-button")},m(l,s){b(l,e,s)},p:d,d(l){l&&p(e)}}}function U(o){let e,a,l="Guest",s,t,i=o[0].email+"",f,m,c,k='<li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Dashboard</a></li> <li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Settings</a></li> <li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Earnings</a></li> <li><a href="/#" class="block px-4 py-2 text-sm hover:bg-zinc-600 text-zinc-200 hover:text-white">Sign out</a></li>';return{c(){e=u("div"),a=u("span"),a.textContent=l,s=g(),t=u("span"),f=E(i),m=g(),c=u("ul"),c.innerHTML=k,this.h()},l(n){e=x(n,"DIV",{class:!0});var r=w(e);a=x(r,"SPAN",{class:!0,"data-svelte-h":!0}),_(a)!=="svelte-1w5kqlv"&&(a.textContent=l),s=S(r),t=x(r,"SPAN",{class:!0});var y=w(t);f=H(y,i),y.forEach(p),r.forEach(p),m=S(n),c=x(n,"UL",{class:!0,"aria-labelledby":!0,"data-svelte-h":!0}),_(c)!=="svelte-pv1nex"&&(c.innerHTML=k),this.h()},h(){h(a,"class","block text-sm text-white"),h(t,"class","block text-sm truncate text-zinc-400"),h(e,"class","px-4 py-3"),h(c,"class","py-2"),h(c,"aria-labelledby","user-menu-button")},m(n,r){b(n,e,r),v(e,a),v(e,s),v(e,t),v(t,f),b(n,m,r),b(n,c,r)},p(n,r){r&1&&i!==(i=n[0].email+"")&&T(f,i)},d(n){n&&(p(e),p(m),p(c))}}}function A(o){let e;function a(t,i){return t[0].email!==void 0?U:N}let l=a(o),s=l(o);return{c(){s.c(),e=z()},l(t){s.l(t),e=z()},m(t,i){s.m(t,i),b(t,e,i)},p(t,[i]){l===(l=a(t))&&s?s.p(t,i):(s.d(1),s=l(t),s&&(s.c(),s.m(e.parentNode,e)))},i:d,o:d,d(t){t&&p(e),s.d(t)}}}function D(o,e,a){let l;return $(o,q,s=>a(0,l=s)),[l]}class R extends C{constructor(e){super(),L(this,e,D,A,M,{})}}export{R as default};
