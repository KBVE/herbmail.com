import{S as j,i as J,s as K,e as g,a as B,t as R,c as y,b as V,g as U,d as F,h as x,f as W,j as s,k as Y,l,m as A,n as D,I as z,o as G,p as M,r as H,u as Q,J as X,x as Z,y as $}from"./index.Bw2twfQ2.js";import{l as ee,c as te,a as se}from"./kbve.DCoFWLcH.js";import{n as q,t as ae}from"./storage.BJ8ngiY5.js";import"./index.Y0MI8VVX.js";import"./index.BH1EYZ08.js";function re(n){let i,e,h,f,w="Your KBVE Email!",_,a,L,m,u,v="Password",k,r,b,o,p,E=n[1]?"Loading":"Login",C,c,I;return{c(){i=g("section"),e=g("form"),h=g("div"),f=g("label"),f.textContent=w,_=B(),a=g("input"),L=B(),m=g("div"),u=g("label"),u.textContent=v,k=B(),r=g("input"),b=B(),o=g("button"),p=g("span"),C=R(E),this.h()},l(t){i=y(t,"SECTION",{class:!0});var d=V(i);e=y(d,"FORM",{class:!0,action:!0});var N=V(e);h=y(N,"DIV",{});var P=V(h);f=y(P,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),U(f)!=="svelte-10c0dlq"&&(f.textContent=w),_=F(P),a=y(P,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),P.forEach(x),L=F(N),m=y(N,"DIV",{});var T=V(m);u=y(T,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),U(u)!=="svelte-1hr3rpy"&&(u.textContent=v),k=F(T),r=y(T,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),T.forEach(x),b=F(N),o=y(N,"BUTTON",{type:!0,class:!0});var O=V(o);p=y(O,"SPAN",{});var S=V(p);C=W(S,E),S.forEach(x),O.forEach(x),N.forEach(x),d.forEach(x),this.h()},h(){s(f,"for","email"),s(f,"class","block mb-2 text-sm font-medium text-cyan-400"),s(a,"type","email"),s(a,"name","email"),s(a,"id","email"),s(a,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"),s(a,"placeholder","name@company.com"),a.required=!0,s(u,"for","password"),s(u,"class","block mb-2 text-sm font-medium text-cyan-400"),s(r,"type","password"),s(r,"name","password"),s(r,"id","password"),s(r,"placeholder","••••••••"),s(r,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"),r.required=!0,s(o,"type","submit"),s(o,"class","w-full bg-offset/[.75] hover:bg-offset focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"),o.disabled=n[1],s(e,"class","space-y-4 md:space-y-6"),s(e,"action","#"),s(i,"class",n[0])},m(t,d){Y(t,i,d),l(i,e),l(e,h),l(h,f),l(h,_),l(h,a),A(a,n[2]),l(e,L),l(e,m),l(m,u),l(m,k),l(m,r),A(r,n[3]),l(e,b),l(e,o),l(o,p),l(p,C),c||(I=[D(a,"input",n[11]),D(r,"input",n[12]),D(e,"submit",z(n[4]))],c=!0)},p(t,[d]){d&4&&a.value!==t[2]&&A(a,t[2]),d&8&&r.value!==t[3]&&A(r,t[3]),d&2&&E!==(E=t[1]?"Loading":"Login")&&G(C,E),d&2&&(o.disabled=t[1]),d&1&&s(i,"class",t[0])},i:M,o:M,d(t){t&&x(i),c=!1,H(I)}}}function oe(n,i,e){let h;Q(n,ae,c=>e(13,h=c));const f=X(),w=()=>{e(1,b=!1)},_=()=>{m&&u&&new Toastify({text:h,duration:3e3,destination:"#",newWindow:!1,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #FF8A4C, #8DA2FB)"}}).showToast()};let{domain:a=""}=i,{className:L=""}=i,m=!1,u=!1,v;Z(()=>{f("load"),e(9,u=!0),f("mount"),e(8,m=!0)}),$(()=>{});async function k(c,I){try{const{isValid:t,error:d}=await c(I);return t?!0:(w(),d&&(q(d),_()),!1)}catch(t){return w(),console.error(t),!1}}const r=async()=>{if(e(1,b=!0),!await k(te,o)||!await k(se,p))return;const t=await ee(a,o,p);if(t.error){w(),q(t.scope()),_();return}else q("Login was successful!"),_(),e(1,b=!1);e(1,b=!1)};let b=!1,o="",p="";function E(){o=this.value,e(2,o)}function C(){p=this.value,e(3,p)}return n.$$set=c=>{"domain"in c&&e(7,a=c.domain),"className"in c&&e(0,L=c.className)},n.$$.update=()=>{n.$$.dirty&1792&&m&&u&&(e(10,v=window.document.getElementById("skeleton")),v&&v.remove())},[L,b,o,p,r,w,_,a,m,u,v,E,C]}class de extends j{constructor(i){super(),J(this,i,oe,re,K,{reset:5,toast:6,domain:7,className:0})}get reset(){return this.$$.ctx[5]}get toast(){return this.$$.ctx[6]}}export{de as default};
