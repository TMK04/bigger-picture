var t,e;function n(){}const i=t=>t;function o(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(r)}function c(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function d(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function f(t,e){return t!=t?e==e:t!==e}function p(t,e,i){t.$$.on_destroy.push(((t,...e)=>{if(null==t)return n;const i=t.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i})(e,i))}function m(t,e,n){return t.set(n),e}function h(t){return t&&c(t.destroy)?t.destroy:n}const g="undefined"!=typeof window;let $=g?()=>window.performance.now():()=>Date.now(),y=g?t=>requestAnimationFrame(t):n;const b=new Set;function v(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&y(v)}function x(t){let e;return 0===b.size&&y(v),{promise:new Promise((n=>{b.add(e={c:t,f:n})})),abort(){b.delete(e)}}}function w(t,e){t.appendChild(e)}function _(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t){const e=E("style");return((t,e)=>{w(t.head||t,e)})(_(t),e),e.sheet}function I(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function D(t){return document.createTextNode(t)}function H(){return D(" ")}function A(){return D("")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}function M(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function T(t,e,n){t.classList[n?"add":"remove"](e)}class R{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=E(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;this.n.length>e;e+=1)I(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(C)}}const L=new Map;let O,W=0;function Y(t,e,n,i,o,r,s,l=0){const c=16.666/i;let u="{\n";for(let t=0;1>=t;t+=c){const i=e+(n-e)*r(t);u+=100*t+`%{${s(i,1-i)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${(t=>{let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0})(a)}_${l}`,f=_(t),{stylesheet:p,rules:m}=L.get(f)||((t,e)=>{const n={stylesheet:k(e),rules:{}};return L.set(t,n),n})(f,t);m[d]||(m[d]=1,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${i}ms linear ${o}ms 1 both`,W+=1,d}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>0>t.indexOf(e):t=>-1===t.indexOf("__svelte")),o=n.length-i.length;o&&(t.style.animation=i.join(", "),W-=o,W||y((()=>{W||(L.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),L.clear())})))}function j(t){O=t}const X=[],q=[],B=[],U=[],F=Promise.resolve();let J=0;function K(t){B.push(t)}const G=new Set;let Q,V=0;function Z(){const t=O;do{for(;X.length>V;){const t=X[V];V++,j(t),tt(t.$$)}for(j(null),X.length=0,V=0;q.length;)q.pop()();for(let t=0;B.length>t;t+=1){const e=B[t];G.has(e)||(G.add(e),e())}B.length=0}while(X.length);for(;U.length;)U.pop()();J=0,G.clear(),j(t)}function tt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function et(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function nt(t,e,n){t.dispatchEvent(((t,e,n=0)=>{const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,0,e),i})(`${e?"intro":"outro"}${n}`))}const it=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function st(){ot.r||l(ot.c),ot=ot.p}function lt(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ct(t,e,n,i){if(t&&t.o){if(it.has(t))return;it.add(t),ot.c.push((()=>{it.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const ut={duration:0};function at(t,e,o){let r,s,l=e(t,o),u=0,a=0;function d(){r&&P(t,r)}function f(){const{delay:e=0,duration:o=300,easing:c=i,tick:f=n,css:p}=l||ut;p&&(r=Y(t,0,1,o,e,c,p,a++)),f(0,1);const m=$()+e,h=m+o;s&&s.abort(),u=1,K((()=>nt(t,1,"start"))),s=x((e=>{if(u){if(e>=h)return f(1,0),nt(t,1,"end"),d(),u=0;if(e>=m){const t=c((e-m)/o);f(t,1-t)}}return u}))}let p=0;return{start(){p||(p=1,P(t),c(l)?(l=l(),et().then(f)):f())},invalidate(){p=0},end(){u&&(d(),u=0)}}}function dt(t,e,o){let r,s=e(t,o),u=1;const a=ot;function d(){const{delay:e=0,duration:o=300,easing:c=i,tick:d=n,css:f}=s||ut;f&&(r=Y(t,1,0,o,e,c,f));const p=$()+e,m=p+o;K((()=>nt(t,0,"start"))),x((e=>{if(u){if(e>=m)return d(0,1),nt(t,0,"end"),--a.r||l(a.c),0;if(e>=p){const t=c((e-p)/o);d(1-t,t)}}return u}))}return a.r+=1,c(s)?et().then((()=>{s=s(),d()})):d(),{end(e){e&&s.tick&&s.tick(1,0),u&&(r&&P(t,r),u=0)}}}function ft(t,e,o,r){let s=e(t,o),u=r?0:1,a=null,d=null,f=null;function p(){f&&P(t,f)}function m(t,e){const n=t.b-u;return{a:u,b:t.b,d:n,duration:e*=Math.abs(n),start:t.start,end:t.start+e,group:t.group}}function h(e){const{delay:o=0,duration:r=300,easing:c=i,tick:h=n,css:g}=s||ut,y={start:$()+o,b:e};e||(y.group=ot,ot.r+=1),a||d?d=y:(g&&(p(),f=Y(t,u,e,r,o,c,g)),e&&h(0,1),a=m(y,r),K((()=>nt(t,e,"start"))),x((e=>(d&&e>d.start&&(a=m(d,r),d=null,nt(t,a.b,"start"),g&&(p(),f=Y(t,u,a.b,a.duration,0,c,s.css))),a&&(a.end>e?a.start>e||(u=a.a+a.d*c((e-a.start)/a.duration),h(u,1-u)):(h(u=a.b,1-u),nt(t,a.b,"end"),d||(a.b?p():--a.group.r||l(a.group.c)),a=null)),!(!a&&!d)))))}return{run(t){c(s)?et().then((()=>{s=s(),h(t)})):h(t)},end(){p(),a=d=null}}}const pt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mt(t){t&&t.c()}function ht(t,e,n,i){const{fragment:o,on_mount:s,on_destroy:u,after_update:a}=t.$$;o&&o.m(e,n),i||K((()=>{const e=s.map(r).filter(c);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(K)}function gt(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e,i,o,r,c,u,a=[-1]){const d=O;j(t);const f=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:s(),dirty:a,skip_bound:0,root:e.target||d.$$.root};u&&u(f.root);let p=0;f.ctx=i?i(t,e.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&function(t,e){-1===t.$$.dirty[0]&&(X.push(t),J||(J=1,F.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],f.update(),p=1,l(f.before_update),f.fragment=o?o(f.ctx):0,e.target&&(f.fragment&&f.fragment.c(),e.intro&&lt(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Z()),j(d)}class yt{$destroy(){gt(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=1,this.$$set(t),this.$$.skip_bound=0)}}function bt(t){const e=t-1;return e*e*e+1}function vt(t,{delay:e=0,duration:n=400,easing:o=i}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:o,css:t=>"opacity: "+t*r}}function xt(t,{delay:e=0,duration:n=400,easing:i=bt,x:o=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(t),c=+l.opacity,u="none"===l.transform?"":l.transform,a=c*(1-s);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-a*e}`}}const wt=[];function _t(t,e=n){let i;const o=new Set;function r(e){if(u(t,e)&&(t=e,i)){const e=!wt.length;for(const e of o)e[1](),wt.push(e,t);if(e){for(let t=0;wt.length>t;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:r,update(e){r(e(t))},subscribe(s,l=n){const c=[s,l];return o.add(c),1===o.size&&(i=e(r)||n),s(t),()=>{o.delete(c),0===o.size&&(i(),i=null)}}}}function kt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(Array.isArray(t)){const n=e.map(((e,n)=>kt(t[n],e)));return t=>n.map((e=>e(t)))}if("number"===n){const n=e-t;return e=>t+e*n}}function It(t,e={}){const n=_t(t);let r,s=t;function l(l,c){if(null==t)return n.set(t=l),Promise.resolve();s=l;let u=r,a=0,{delay:d=0,duration:f=400,easing:p=i,interpolate:m=kt}=o(o({},e),c);if(0===f)return u&&(u.abort(),u=null),n.set(t=s),Promise.resolve();const h=$()+d;let g;return r=x((e=>{if(h>e)return 1;a||(g=m(t,l),"function"==typeof f&&(f=f(t,l)),a=1),u&&(u.abort(),u=null);const i=e-h;return i>f?(n.set(t=l),0):(n.set(t=g(p(i/f))),1)})),r.promise}return{set:l,update:(e,n)=>l(e(s,t),n),subscribe:n.subscribe}}const Ct=_t(0),Et=_t(0);function Dt(t){let e,n,i,o,r=!t[2]&&Ht();return{c(){e=E("div"),r&&r.c(),z(e,"class","bp-load"),M(e,"background-image","url("+t[0]+")")},m(t,n){I(t,e,n),r&&r.m(e,null),o=1},p(n,i){(t=n)[2]?r&&(r.d(1),r=null):r||(r=Ht(),r.c(),r.m(e,null)),(!o||1&i)&&M(e,"background-image","url("+t[0]+")")},i(r){o||(K((()=>{i&&i.end(1),n=at(e,vt,{duration:t[2]?300:0}),n.start()})),o=1)},o(t){n&&n.invalidate(),t&&(i=dt(e,vt,{duration:200})),o=0},d(t){t&&C(e),r&&r.d(),t&&i&&i.end()}}}function Ht(t){let e,n,i;return{c(){e=E("span"),n=H(),i=E("span"),z(e,"class","bp-bar"),z(i,"class","bp-o")},m(t,o){I(t,e,o),I(t,n,o),I(t,i,o)},d(t){t&&C(e),t&&C(n),t&&C(i)}}}function At(t){let e,n=(!t[1]||t[2])&&Dt(t);return{c(){n&&n.c(),e=A()},m(t,i){n&&n.m(t,i),I(t,e,i)},p(t,[i]){!t[1]||t[2]?n?(n.p(t,i),6&i&&lt(n,1)):(n=Dt(t),n.c(),lt(n,1),n.m(e.parentNode,e)):n&&(rt(),ct(n,1,1,(()=>{n=null})),st())},i(t){lt(n)},o(t){ct(n)},d(t){n&&n.d(t),t&&C(e)}}}function St(t,e,n){let i;p(t,Ct,(t=>n(2,i=t)));let{thumb:o}=e,{loaded:r}=e;return t.$$set=t=>{"thumb"in t&&n(0,o=t.thumb),"loaded"in t&&n(1,r=t.loaded)},[o,r,i]}class zt extends yt{constructor(t){super(),$t(this,t,St,At,u,{thumb:0,loaded:1})}}function Nt(t){let e,i,o,r;return{c(){e=E("img"),d(e.src,i=t[4])||z(e,"src",i),z(e,"alt",t[6])},m(t,n){I(t,e,n),r=1},p:n,i(t){r||(o&&o.end(1),r=1)},o(t){o=dt(e,vt,{}),r=0},d(t){t&&C(e),t&&o&&o.end()}}}function Mt(t){let e,n,i,o,r,s,c;i=new zt({props:{thumb:t[5],loaded:t[1]}});let u=t[1]&&Nt(t);return{c(){e=E("div"),n=E("div"),mt(i.$$.fragment),o=H(),u&&u.c(),M(n,"background-image","url("+t[5]+")"),M(n,"transform","translate3d("+t[3][0]+"px, "+t[3][1]+"px, 0px)"),z(e,"class","bp-item bp-img"),M(e,"width",t[0][0]+"px"),M(e,"height",t[0][1]+"px"),T(e,"dragging",t[2])},m(l,a){I(l,e,a),w(e,n),ht(i,n,null),w(n,o),u&&u.m(n,null),r=1,s||(c=[S(window,"resize",t[21]),S(n,"wheel",t[9]),S(n,"pointerdown",t[10]),S(n,"pointermove",t[11]),S(n,"pointerup",t[12]),S(n,"pointercancel",t[12]),h(t[14].call(null,e))],s=1)},p(t,o){const s={};2&o[0]&&(s.loaded=t[1]),i.$set(s),t[1]?u?(u.p(t,o),2&o[0]&&lt(u,1)):(u=Nt(t),u.c(),lt(u,1),u.m(n,null)):u&&(rt(),ct(u,1,1,(()=>{u=null})),st()),(!r||8&o[0])&&M(n,"transform","translate3d("+t[3][0]+"px, "+t[3][1]+"px, 0px)"),(!r||1&o[0])&&M(e,"width",t[0][0]+"px"),(!r||1&o[0])&&M(e,"height",t[0][1]+"px"),4&o[0]&&T(e,"dragging",t[2])},i(t){r||(lt(i.$$.fragment,t),lt(u),r=1)},o(t){ct(i.$$.fragment,t),ct(u),r=0},d(t){t&&C(e),gt(i),u&&u.d(),s=0,l(c)}}}function Tt(t,e,n){let i,o,r,s;p(t,Et,(t=>n(33,r=t))),p(t,Ct,(t=>n(20,s=t)));let l,c,u,a,d,f,h,g,$,y,{stuff:b}=e,{containerWidth:v}=e,{containerHeight:x}=e,{smallScreen:w}=e,{activeItem:_,calculateDimensions:k,loadImage:I,preloadNext:C,opts:E,prev:D,next:H,close:A,toggleControls:S}=b,{img:z,thumb:N,alt:M,width:T,height:R}=_,{inline:L}=E,O=+T,W=+R,Y=k(O,W),P=[],j=[],X=0;const q=It(Y,{easing:bt});p(t,q,(t=>n(0,o=t)));const B=It([0,0],{easing:bt});p(t,B,(t=>n(3,i=t)));const U=([t,e])=>{let n=(o[0]-v)/2,i=(o[1]-x)/2;return 0>n?t=0:t>n?w?(t=a?n+(t-n)/10:n)>n+20&&(u=1,D()):t=n:-1*n>t&&(w?-1*n-20>(t=a?-1*n-(-1*n-t)/10:-1*n)&&(u=1,H()):t=-1*n),0>i?e=0:e>i?e=i:-1*i>e&&(e=-1*i),[t,e]},F=(t,e=5)=>{let n=o[0]+o[0]*e,r=o[1]+o[1]*e;if(e>0&&n>O)n=O,r=W;else if(0>e){let t=k(O,W);if(t[0]>n)return m(q,o=t,o),void m(B,i=[0,0],i)}if(m(q,o=[n,r],o),1>e)return void m(B,i=U(i),i);let{x:s,y:l,width:c,height:u}=t.target.getBoundingClientRect(),a=t.clientX-s-c/2,d=t.clientY-l-u/2;s=-1*a*(n/c)+a,l=-1*d*(r/u)+d,m(B,i=U([s,l]),i)},J=t=>[t.clientX,t.clientY],K=()=>{n(19,Y=k(O,W)),w||(m(q,o=Y,o),m(B,i=[0,0],i))};return t.$$set=t=>{"stuff"in t&&n(15,b=t.stuff),"containerWidth"in t&&n(16,v=t.containerWidth),"containerHeight"in t&&n(17,x=t.containerHeight),"smallScreen"in t&&n(18,w=t.smallScreen)},t.$$.update=()=>{524289&t.$$.dirty[0]&&m(Et,r=o[0]>Y[0],r),1048576&t.$$.dirty[0]&&s&&!E.intro&&m(B,i=[0,0],i)},[o,l,a,i,z,N,M,q,B,t=>{L&&!r||(t.preventDefault(),F(t,0>t.deltaY?.2:-.2))},t=>{if(2!==t.button){t.preventDefault(),n(2,a=1),P.push(t);let[e,o]=J(t);f=e,h=o,g=i[0],$=i[1]}},t=>{if(P.length>1)return c=1,n(2,a=0),(t=>{P=P.map((e=>e.pointerId==t.pointerId?t:e));let[e,n]=P,i=Math.hypot(e.clientX-n.clientX,e.clientY-n.clientY);X||(X=i),F(t,-.02*(X-i)),X=i})(t);if(u||!a)return;let[e,i]=J(t);j.push({x:e,y:i}),e-=f,i-=h,r||(e>40&&(D(),u=1),-40>e&&(H(),u=1),-90>i&&(A(),u=1)),d=Math.hypot(e,i)>10,r&&d&&B.set(U([g+e,$+i]),{duration:0})},t=>{if(P=P.filter((e=>e.pointerId!=t.pointerId)),c)return c=P.length?1:0,void(X=0);if(!u&&a){if(n(2,a=0),w?d||(y?(clearTimeout(y),F(t,r?-5:5),y=0):y=setTimeout((()=>{S(),y=0}),250)):r?d||F(t,-5):3>j.length&&!r&&F(t),d){let t;j=j.slice(-3);let e=j[1].x-j[2].x,n=j[1].y-j[2].y;Math.hypot(e,n)>5?(e=j[0].x-j[2].x,n=j[0].y-j[2].y,t=[i[0]-5*e,i[1]-5*n]):t=i,m(B,i=U(t),i)}d=0,j=[]}},K,()=>{I(_).then((()=>{n(1,l=1),C()}))},b,v,x,w,Y,s,()=>setTimeout(K,0)]}class Rt extends yt{constructor(t){super(),$t(this,t,Tt,Mt,u,{stuff:15,containerWidth:16,containerHeight:17,smallScreen:18},null,[-1,-1])}}function Lt(t){let e,n,i,o,r,s,c,u;return r=new zt({props:{thumb:t[3],loaded:t[0]}}),{c(){e=E("div"),n=E("iframe"),o=H(),mt(r.$$.fragment),z(n,"allow","autoplay; fullscreen"),d(n.src,i=t[2])||z(n,"src",i),z(n,"title",t[4]),z(e,"class","bp-item bp-if"),M(e,"width",t[1][0]+"px"),M(e,"height",t[1][1]+"px")},m(i,l){I(i,e,l),w(e,n),w(e,o),ht(r,e,null),s=1,c||(u=[S(window,"resize",t[5]),S(n,"load",t[8])],c=1)},p(t,[n]){const i={};1&n&&(i.loaded=t[0]),r.$set(i),(!s||2&n)&&M(e,"width",t[1][0]+"px"),(!s||2&n)&&M(e,"height",t[1][1]+"px")},i(t){s||(lt(r.$$.fragment,t),s=1)},o(t){ct(r.$$.fragment,t),s=0},d(t){t&&C(e),gt(r),c=0,l(u)}}}function Ot(t,e,n){let i,o,{activeItem:r}=e,{calculateDimensions:s}=e,{iframe:l,thumb:c,title:u}=r;const a=()=>{n(1,o=s(r.width,r.height))};return a(),t.$$set=t=>{"activeItem"in t&&n(6,r=t.activeItem),"calculateDimensions"in t&&n(7,s=t.calculateDimensions)},[i,o,l,c,u,a,r,s,()=>n(0,i=1)]}class Wt extends yt{constructor(t){super(),$t(this,t,Ot,Lt,u,{activeItem:6,calculateDimensions:7})}}function Yt(t){let e,n,i,o,r,s,c,u=t[2]+t[3]+"";return o=new zt({props:{thumb:t[5],loaded:t[1]}}),{c(){e=E("div"),n=E("video"),i=H(),mt(o.$$.fragment),n.playsInline=1,n.controls=1,n.autoplay=1,M(n,"width",t[4][0]+"px"),M(n,"height",t[4][1]+"px"),z(e,"class","bp-item bp-vid")},m(l,a){I(l,e,a),w(e,n),n.innerHTML=u,w(e,i),ht(o,e,null),r=1,s||(c=[S(window,"resize",t[9]),S(n,"canplay",t[10])],s=1)},p(t,[e]){(!r||12&e)&&u!==(u=t[2]+t[3]+"")&&(n.innerHTML=u),(!r||16&e)&&M(n,"width",t[4][0]+"px"),(!r||16&e)&&M(n,"height",t[4][1]+"px");const i={};2&e&&(i.loaded=t[1]),o.$set(i)},i(t){r||(lt(o.$$.fragment,t),r=1)},o(t){ct(o.$$.fragment,t),r=0},d(t){t&&C(e),gt(o),s=0,l(c)}}}function Pt(t,e,n){let i,{activeItem:o}=e,{calculateDimensions:r}=e,{video:s,thumb:l,tracks:c=[],width:u,height:a}=o;s=Array.isArray(s)?s:s.split(", "),c=Array.isArray(c)?c:JSON.parse(c),s=s.map((t=>`<source src="${t}" type="video/${t.match(/.(\w+)$/)[1]}">`)),c=c.map((t=>`<track${Object.keys(t).reduce(((e,n)=>e+` ${n}="${t[n]}"`),"")}>`));let d=r(u,a);return t.$$set=t=>{"activeItem"in t&&n(8,o=t.activeItem),"calculateDimensions"in t&&n(0,r=t.calculateDimensions)},[r,i,s,c,d,l,u,a,o,()=>n(4,d=r(u,a)),()=>n(1,i=1)]}class jt extends yt{constructor(t){super(),$t(this,t,Pt,Yt,u,{activeItem:8,calculateDimensions:0})}}let Xt,qt,{documentElement:Bt,body:Ut}=document;const{window:Ft}=pt;function Jt(e){let i,o,r,s,c,u,a,d,p,m,g=e[7].i,$=te(e),y=(!e[11]||!e[10])&&ee(e);return{c(){i=E("div"),o=E("div"),s=H(),$.c(),c=H(),y&&y.c(),z(i,"class","bp-wrap"),T(i,"zoomed",e[14]),T(i,"bp-inline",e[12])},m(n,r){var l;I(n,i,r),w(i,o),w(i,s),$.m(i,null),w(i,c),y&&y.m(i,null),e[29](i),d=1,p||(m=[h((l=i,t||(t=new ResizeObserver((t=>{for(const e of t)e.target.dispatchEvent(new CustomEvent("fd:resize"))}))),t.observe(l),u={destroy(){t.unobserve(l)}})),S(i,"fd:resize",e[28]),h(a=e[21].call(null,i))],p=1)},p(t,o){e=t,128&o[0]&&f(g,g=e[7].i)?(rt(),ct($,1,1,n),st(),$=te(e),$.c(),lt($),$.m(i,c)):$.p(e,o),e[11]&&e[10]?y&&(rt(),ct(y,1,1,(()=>{y=null})),st()):y?(y.p(e,o),3072&o[0]&&lt(y,1)):(y=ee(e),y.c(),lt(y,1),y.m(i,null)),16384&o[0]&&T(i,"zoomed",e[14]),4096&o[0]&&T(i,"bp-inline",e[12])},i(t){d||(K((()=>{r||(r=ft(o,vt,{easing:bt,duration:480},1)),r.run(1)})),lt($),lt(y),d=1)},o(t){r||(r=ft(o,vt,{easing:bt,duration:480},0)),r.run(0),ct($),ct(y),d=0},d(t){t&&C(i),t&&r&&r.end(),$.d(t),y&&y.d(),e[29](null),p=0,l(m)}}}function Kt(t){let e,i,o=t[7].html+"";return{c(){e=new R,i=A(),e.a=i},m(t,n){e.m(o,t,n),I(t,i,n)},p(t,n){128&n[0]&&o!==(o=t[7].html+"")&&e.p(o)},i:n,o:n,d(t){t&&C(i),t&&e.d()}}}function Gt(t){let e,n;return e=new Wt({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Qt(t){let e,n;return e=new jt({props:{activeItem:t[7],calculateDimensions:t[16]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};128&n[0]&&(i.activeItem=t[7]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Vt(t){let e,n;return e=new Rt({props:{stuff:{activeItem:t[7],calculateDimensions:t[16],toggleControls:t[22],loadImage:t[17],preloadNext:t[18],next:t[4],prev:t[3],close:t[2],opts:t[5]},containerWidth:t[8],containerHeight:t[9],smallScreen:t[11]}}),{c(){mt(e.$$.fragment)},m(t,i){ht(e,t,i),n=1},p(t,n){const i={};160&n[0]&&(i.stuff={activeItem:t[7],calculateDimensions:t[16],toggleControls:t[22],loadImage:t[17],preloadNext:t[18],next:t[4],prev:t[3],close:t[2],opts:t[5]}),256&n[0]&&(i.containerWidth=t[8]),512&n[0]&&(i.containerHeight=t[9]),2048&n[0]&&(i.smallScreen=t[11]),e.$set(i)},i(t){n||(lt(e.$$.fragment,t),n=1)},o(t){ct(e.$$.fragment,t),n=0},d(t){gt(e,t)}}}function Zt(t){let e,n,i,o=t[7].caption+"";return{c(){e=E("div"),z(e,"class","bp-cap")},m(t,n){I(t,e,n),e.innerHTML=o,i=1},p(t,n){(!i||128&n[0])&&o!==(o=t[7].caption+"")&&(e.innerHTML=o)},i(t){i||(K((()=>{n||(n=ft(e,vt,{duration:200},1)),n.run(1)})),i=1)},o(t){n||(n=ft(e,vt,{duration:200},0)),n.run(0),i=0},d(t){t&&C(e),t&&n&&n.end()}}}function te(t){let e,n,i,o,r,s,c,u,a,d;const f=[Vt,Qt,Gt,Kt],p=[];function m(t,e){return t[7].img?0:t[7].video?1:t[7].iframe?2:3}n=m(t),i=p[n]=f[n](t);let h=t[7].caption&&Zt(t);return{c(){e=E("div"),i.c(),s=H(),h&&h.c(),c=A(),z(e,"class","bp-inner")},m(i,o){var r;I(i,e,o),p[n].m(e,null),I(i,s,o),h&&h.m(i,o),I(i,c,o),u=1,a||(d=[S(e,"pointerdown",t[26]),S(e,"pointerup",(r=t[27],function(t){t.target===this&&r.call(this,t)}))],a=1)},p(t,o){let r=n;n=m(t),n===r?p[n].p(t,o):(rt(),ct(p[r],1,1,(()=>{p[r]=null})),st(),i=p[n],i?i.p(t,o):(i=p[n]=f[n](t),i.c()),lt(i,1),i.m(e,null)),t[7].caption?h?(h.p(t,o),128&o[0]&&lt(h,1)):(h=Zt(t),h.c(),lt(h,1),h.m(c.parentNode,c)):h&&(rt(),ct(h,1,1,(()=>{h=null})),st())},i(n){u||(lt(i),K((()=>{r&&r.end(1),o=at(e,t[19],{}),o.start()})),lt(h),u=1)},o(n){ct(i),o&&o.invalidate(),r=dt(e,t[20],{}),ct(h),u=0},d(t){t&&C(e),p[n].d(),t&&r&&r.end(),t&&C(s),h&&h.d(t),t&&C(c),a=0,l(d)}}}function ee(t){let e,n,i,o,r=!t[5].noClose&&ne(t),s=t[0].length>1&&ie(t);return{c(){e=E("div"),r&&r.c(),n=H(),s&&s.c()},m(t,i){I(t,e,i),r&&r.m(e,null),w(e,n),s&&s.m(e,null),o=1},p(t,i){t[5].noClose?r&&(r.d(1),r=null):r?r.p(t,i):(r=ne(t),r.c(),r.m(e,n)),t[0].length>1?s?s.p(t,i):(s=ie(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(t){o||(K((()=>{i||(i=ft(e,vt,{duration:300},1)),i.run(1)})),o=1)},o(t){i||(i=ft(e,vt,{duration:300},0)),i.run(0),o=0},d(t){t&&C(e),r&&r.d(),s&&s.d(),t&&i&&i.end()}}}function ne(t){let e,i,o;return{c(){e=E("button"),z(e,"class","bp-x"),z(e,"title","Close")},m(n,r){I(n,e,r),i||(o=S(e,"click",t[2]),i=1)},p:n,d(t){t&&C(e),i=0,o()}}}function ie(t){let e,n,i,o,r,s,c,u,a,d,f=t[1]+1+"",p=t[0].length+"";return{c(){e=E("div"),n=D(f),i=D(" / "),o=D(p),r=H(),s=E("button"),c=H(),u=E("button"),z(e,"class","bp-count"),z(s,"class","bp-next"),z(s,"title","Next"),z(u,"class","bp-prev"),z(u,"title","Previous")},m(l,f){I(l,e,f),w(e,n),w(e,i),w(e,o),I(l,r,f),I(l,s,f),I(l,c,f),I(l,u,f),a||(d=[S(s,"click",t[4]),S(u,"click",t[3])],a=1)},p(t,e){2&e[0]&&f!==(f=t[1]+1+"")&&N(n,f),1&e[0]&&p!==(p=t[0].length+"")&&N(o,p)},d(t){t&&C(e),t&&C(r),t&&C(s),t&&C(c),t&&C(u),a=0,l(d)}}}function oe(t){let e,n,i,o,r=t[0]&&Jt(t);return{c(){r&&r.c(),e=A()},m(s,l){r&&r.m(s,l),I(s,e,l),n=1,i||(o=S(Ft,"keydown",t[15]),i=1)},p(t,n){t[0]?r?(r.p(t,n),1&n[0]&&lt(r,1)):(r=Jt(t),r.c(),lt(r,1),r.m(e.parentNode,e)):r&&(rt(),ct(r,1,1,(()=>{r=null})),st())},i(t){n||(lt(r),n=1)},o(t){ct(r),n=0},d(t){r&&r.d(t),t&&C(e),i=0,o()}}}function re(t,e,n){let i,o;p(t,Ct,(t=>n(33,i=t))),p(t,Et,(t=>n(14,o=t)));let r,s,l,c,u,a,d,f,h,g,$,y,{items:b}=e,{position:v}=e,{target:x}=e;const w=()=>{r.noClose||(r.onClose&&r.onClose(),m(Ct,i=1,i),n(0,b=0),a&&a.focus({preventScroll:1}))},_=()=>I(v-1),k=()=>I(v+1),I=t=>{s=t-v,n(1,v=C(t))},C=t=>(t===b.length?t=0:0>t&&(t=b.length-1),t),E=t=>{const e=new Image;return e.src=t.img,t.preload=e,e.decode()},D=t=>{let{element:e}=y,n=t.firstElementChild,{clientWidth:i,clientHeight:o}=n,{top:r,left:s,width:l,height:a}=e.getBoundingClientRect(),d=s-(c-l)/2,f=r-(u-a)/2,p=e.clientWidth/i,m=e.clientHeight/o;return{duration:480,easing:bt,css(t){let e=1-t;return`transform:translate3d(${d*e}px, ${f*e}px, 0px) scale3d(${p+t*(1-p)}, ${m+t*(1-m)}, 1)`}}},H=()=>{n(11,h=769>c),r.onResize&&r.onResize(y)};return t.$$set=t=>{"items"in t&&n(0,b=t.items),"position"in t&&n(1,v=t.position),"target"in t&&n(23,x=t.target)},t.$$.update=()=>{227&t.$$.dirty[0]&&b&&(n(7,y=b[v]),d&&r.onUpdate&&r.onUpdate(d,y))},[b,v,w,_,k,r,d,y,c,u,f,h,g,$,o,t=>{if(!l||g)return;let{key:e}=t;if("Escape"===e)w();else if("ArrowRight"===e)k();else if("ArrowLeft"===e)_();else if("Tab"===e){t.preventDefault();let e=[...(r.focusWrap||d).querySelectorAll("*")].filter((t=>t.tabIndex>=0)),n=e.indexOf(document.activeElement);n+=e.length+(t.shiftKey?-1:1),n%=e.length,e[n].focus()}},(t,e,n)=>{let i,o;n=r.scale||.99;const s=(e=e||1080)/(t=t||1920);return s>u/c?(o=Math.min(e,u*n),i=o/s):(i=Math.min(t,c*n),o=i*s),[i,o]},E,()=>{let t=b[C(1)],e=b[C(-1)];t.img&&!t.preload&&E(t),e.img&&!e.preload&&E(e)},t=>l?xt(t,{x:s>0?20:-20,easing:bt,duration:300}):(l=1,r.onOpen&&r.onOpen(d),r.intro?xt(t,{y:10,easing:bt}):D(t)),t=>b?xt(t,{x:s>0?-20:20,easing:bt,duration:300}):r.intro?xt(t,{y:-10,easing:bt}):D(t),()=>(window.addEventListener("resize",H),{destroy(){window.removeEventListener("resize",H),m(Ct,i=l=0,i),Bt.style.overflowY=Xt,Ut.style.overflowY=Xt,r.onClosed&&r.onClosed()}}),()=>n(10,f=!f),x,t=>{let e=t.items;a=document.activeElement,n(5,r=t),n(12,g=r.inline),g||Bt.scrollHeight>Bt.clientHeight&&(Xt=Xt||getComputedStyle(Bt).overflowY,qt=qt||getComputedStyle(Ut).overflowY,Bt.style.overflowY="hidden",Ut.style.overflowY="scroll"),n(8,c=x.offsetWidth),n(9,u=x===document.body?window.innerHeight:x.clientHeight),n(11,h=769>c),n(1,v=r.position||0),n(0,b=Array.isArray(e)?e.map(((t,e)=>({...t,i:e}))):[...e.length?e:[e]].map(((t,e)=>{let i={element:t,i:e};return t===r.el&&n(1,v=e),{...i,...t.dataset}})))},I,({target:t})=>n(13,$=t),({target:t})=>{t===$&&w()},t=>{n(9,u=t.target.clientHeight),n(8,c=t.target.clientWidth)},t=>{q[t?"unshift":"push"]((()=>{d=t,n(6,d)}))}]}class se extends yt{constructor(t){super(),$t(this,t,re,oe,f,{items:0,position:1,target:23,open:24,close:2,prev:3,next:4,setPosition:25},null,[-1,-1])}get items(){return this.$$.ctx[0]}set items(t){this.$$set({items:t}),Z()}get position(){return this.$$.ctx[1]}set position(t){this.$$set({position:t}),Z()}get target(){return this.$$.ctx[23]}set target(t){this.$$set({target:t}),Z()}get open(){return this.$$.ctx[24]}get close(){return this.$$.ctx[2]}get prev(){return this.$$.ctx[3]}get next(){return this.$$.ctx[4]}get setPosition(){return this.$$.ctx[25]}}e=t=>new se({...t,intro:1,props:t});export{e as default};
