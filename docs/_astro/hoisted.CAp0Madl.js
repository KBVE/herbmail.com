class S extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",S);const y="modulepreload",v=function(m){return"/"+m},p={},b=function(e,n,s){let u=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");u=Promise.allSettled(n.map(c=>{if(c=v(c),c in p)return;p[c]=!0;const g=c.endsWith(".css"),r=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${r}`))return;const i=document.createElement("link");if(i.rel=g?"stylesheet":y,g||(i.as="script"),i.crossOrigin="",i.href=c,a&&i.setAttribute("nonce",a),document.head.appendChild(i),g)return new Promise((t,d)=>{i.addEventListener("load",t),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return u.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return e().catch(l)})};class w extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),l=t=>{("href"in(t.target||{})||document.body.contains(t.target)&&!u.contains(t.target))&&a()},o=t=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),t?.stopPropagation(),window.addEventListener("click",l)},a=()=>s.close();e.addEventListener("click",o),e.disabled=!1,n.addEventListener("click",a),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",l)}),window.addEventListener("keydown",t=>{const d=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(t.metaKey===!0||t.ctrlKey===!0)&&t.key==="k"?(s.open?a():o(),t.preventDefault()):t.key==="/"&&!s.open&&!d&&(o(),t.preventDefault())});let c={};try{c=JSON.parse(this.dataset.translations||"{}")}catch{}const i=this.dataset.stripTrailingSlash!==void 0?t=>t.replace(/(.)\/(#.*)?$/,"$1$2"):t=>t;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(d=>setTimeout(d,1)))(async()=>{const{PagefindUI:d}=await b(async()=>{const{PagefindUI:h}=await import("./ui-core.DMkCwuYz.js");return{PagefindUI:h}},[]);new d({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:c,showSubResults:!0,processResult:h=>{h.url=i(h.url),h.sub_results=h.sub_results.map(f=>(f.url=i(f.url),f))}})})})}}customElements.define("site-search",w);class L extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#o());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#r(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#r():e,this.#s(e)}#s(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#o(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",L);class T extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",T);const k="_top";class E extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],n=r=>{if(r instanceof HTMLHeadingElement){if(r.id===k)return!0;const i=r.tagName[1];if(i){const t=parseInt(i,10);if(t>=this.minH&&t<=this.maxH)return!0}}return!1},s=r=>{if(!r)return null;const i=r;for(;r;){if(n(r))return r;for(r=r.previousElementSibling;r?.lastElementChild;)r=r.lastElementChild;const t=s(r);if(t)return t}return s(i.parentElement)},u=r=>{for(const{isIntersecting:i,target:t}of r){if(!i)continue;const d=s(t);if(!d)continue;const h=e.find(f=>f.hash==="#"+encodeURIComponent(d.id));if(h){this.current=h;break}}},l=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const a=()=>{o&&o.disconnect(),o=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),l.forEach(r=>o.observe(r))};a();const c=window.requestIdleCallback||(r=>setTimeout(r,1));let g;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(g),g=setTimeout(()=>c(a),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+n+32,u=s+53,l=document.documentElement.clientHeight;return`-${s}px 0% ${u-l}px`}}customElements.define("starlight-toc",E);class x extends E{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",n)}),window.addEventListener("click",s=>{e.contains(s.target)||n()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const u=e.contains(document.activeElement);if(n(),u){const l=e.querySelector("summary");l&&l.focus()}}})}}customElements.define("mobile-starlight-toc",x);export{b as _};
