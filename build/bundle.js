var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function i(){return c(" ")}function y(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){return""===t?null:+t}function d(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function h(t,e,n){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e)return void(l.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}let $;function m(t){$=t}const g=[],x=[];let b=[];const C=[],k=Promise.resolve();let E=!1;function w(t){b.push(t)}const F=new Set;let N=0;function T(){if(0!==N)return;const t=$;do{try{for(;N<g.length;){const t=g[N];N++,m(t),A(t.$$)}}catch(t){throw g.length=0,N=0,t}for(m(null),g.length=0,N=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];F.has(e)||(F.add(e),e())}b.length=0}while(g.length);for(;C.length;)C.pop()();E=!1,F.clear(),m(t)}function A(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const L=new Set;function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];b.forEach((l=>-1===t.indexOf(l)?e.push(l):n.push(l))),n.forEach((t=>t())),b=e}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(g.push(t),E||(E=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(a,s,u,r,c,i,y,f=[-1]){const p=$;m(a);const d=a.$$={fragment:null,ctx:[],props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||p.$$.root};y&&y(d.root);let _=!1;if(d.ctx=u?u(a,s.props||{},((t,e,...n)=>{const l=n.length?n[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),_&&R(a,t)),e})):[],d.update(),_=!0,l(d.before_update),d.fragment=!!r&&r(d.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();s.intro&&((h=a.$$.fragment)&&h.i&&(L.delete(h),h.i(g))),function(t,n,a,s){const{fragment:u,after_update:v}=t.$$;u&&u.m(n,a),s||w((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):l(n),t.$$.on_mount=[]})),v.forEach(w)}(a,s.target,s.anchor,s.customElement),T()}var h,g;m(p)}class j{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const t=l.indexOf(n);-1!==t&&l.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(t,e,n){const l=t.slice();return l[16]=e[n],l[17]=e,l[18]=n,l}function M(t){let e,n,o,a,c,p;function d(){t[11].call(n,t[17],t[18])}function h(){return t[12](t[18])}return{c(){e=r("div"),n=r("input"),o=i(),a=r("button"),a.textContent="––",f(n,"type","text"),f(n,"placeholder","hours worked"),f(n,"class","svelte-vavy8y"),f(a,"class","remove-single-shift svelte-vavy8y"),f(e,"class","single-shift svelte-vavy8y")},m(l,v){u(l,e,v),s(e,n),_(n,t[16].hours),s(e,o),s(e,a),c||(p=[y(n,"blur",t[9]),y(n,"input",d),y(a,"click",h)],c=!0)},p(e,l){t=e,1&l&&n.value!==t[16].hours&&_(n,t[16].hours)},d(t){t&&v(e),c=!1,l(p)}}}function q(e){let n,o,a,$,m,g,x,b,C,k,E,F,N,T,A,L,O,R,S,j,q,P,B,I,Y,z,D,G,J,K,Q,U,V,W,X,Z,tt,et,nt,lt,ot,at,st,ut,vt,rt,ct,it,yt,ft,pt,dt,_t,ht,$t=e[3].toFixed(2)+"",mt=e[4].toFixed(2)+"",gt=e[5].toFixed(2)+"",xt=e[0],bt=[];for(let t=0;t<xt.length;t+=1)bt[t]=M(H(e,xt,t));return{c(){n=r("header"),n.innerHTML='<h1 class="svelte-vavy8y">TimeCalc 2.0</h1> \n\t<p class="svelte-vavy8y">Calc-You-Later!</p>',o=i(),a=r("main"),$=r("div");for(let t=0;t<bt.length;t+=1)bt[t].c();m=i(),g=r("button"),g.textContent="Add Shift",x=i(),b=r("div"),C=r("input"),k=i(),E=r("select"),F=r("option"),F.textContent="$",N=r("option"),N.textContent="€",T=r("option"),T.textContent="¥",A=r("option"),A.textContent="£",L=r("option"),L.textContent="₹",O=r("option"),O.textContent="₽",R=r("option"),R.textContent="₺",S=r("option"),S.textContent="₩",j=r("option"),j.textContent="฿",q=r("option"),q.textContent="₴",P=r("option"),P.textContent="Fr.",B=r("option"),B.textContent="fr.",I=r("option"),I.textContent="R",Y=r("option"),Y.textContent="kr",z=r("option"),z.textContent="Nkr",D=r("option"),D.textContent="Rp",G=i(),J=r("input"),K=i(),Q=r("div"),U=r("div"),V=r("h4"),V.textContent="Total Hours",W=i(),X=r("p"),Z=c($t),tt=i(),et=r("div"),nt=r("h4"),nt.textContent="Total Pay",lt=i(),ot=r("p"),at=c(e[6]),st=c(mt),ut=i(),vt=r("div"),rt=r("h4"),rt.textContent="After Tax",ct=i(),it=r("p"),yt=c(e[6]),ft=c(gt),pt=i(),dt=r("footer"),dt.innerHTML='made with love by Eli <em class="svelte-vavy8y">@permafriday</em>',f(n,"class","svelte-vavy8y"),f(g,"class","svelte-vavy8y"),f(C,"type","number"),f(C,"min","0"),f(C,"placeholder","hourly wage"),f(C,"class","svelte-vavy8y"),F.__value="$",F.value=F.__value,f(F,"class","svelte-vavy8y"),N.__value="€",N.value=N.__value,f(N,"class","svelte-vavy8y"),T.__value="¥",T.value=T.__value,f(T,"class","svelte-vavy8y"),A.__value="£",A.value=A.__value,f(A,"class","svelte-vavy8y"),L.__value="₹",L.value=L.__value,f(L,"class","svelte-vavy8y"),O.__value="₽",O.value=O.__value,f(O,"class","svelte-vavy8y"),R.__value="₺",R.value=R.__value,f(R,"class","svelte-vavy8y"),S.__value="₩",S.value=S.__value,f(S,"class","svelte-vavy8y"),j.__value="฿",j.value=j.__value,f(j,"class","svelte-vavy8y"),q.__value="₴",q.value=q.__value,f(q,"class","svelte-vavy8y"),P.__value="₣",P.value=P.__value,f(P,"class","svelte-vavy8y"),B.__value="₣",B.value=B.__value,f(B,"class","svelte-vavy8y"),I.__value="R",I.value=I.__value,f(I,"class","svelte-vavy8y"),Y.__value="kr",Y.value=Y.__value,f(Y,"class","svelte-vavy8y"),z.__value="kr",z.value=z.__value,f(z,"class","svelte-vavy8y"),D.__value="Rp",D.value=D.__value,f(D,"class","svelte-vavy8y"),f(E,"class","select-currency_symbol svelte-vavy8y"),void 0===e[6]&&w((()=>e[14].call(E))),f(b,"class","row-hourly_wage svelte-vavy8y"),f(J,"type","number"),f(J,"min","0"),f(J,"placeholder","taxes & fees (%)"),f(J,"class","svelte-vavy8y"),f($,"class","inputs svelte-vavy8y"),f(V,"class","svelte-vavy8y"),f(X,"class","svelte-vavy8y"),f(U,"class","svelte-vavy8y"),f(nt,"class","svelte-vavy8y"),f(ot,"class","svelte-vavy8y"),f(et,"class","svelte-vavy8y"),f(rt,"class","svelte-vavy8y"),f(it,"class","svelte-vavy8y"),f(vt,"class","svelte-vavy8y"),f(Q,"class","outputs svelte-vavy8y"),f(a,"class","app svelte-vavy8y"),f(dt,"class","svelte-vavy8y")},m(t,l){u(t,n,l),u(t,o,l),u(t,a,l),s(a,$);for(let t=0;t<bt.length;t+=1)bt[t]&&bt[t].m($,null);s($,m),s($,g),s($,x),s($,b),s(b,C),_(C,e[1]),s(b,k),s(b,E),s(E,F),s(E,N),s(E,T),s(E,A),s(E,L),s(E,O),s(E,R),s(E,S),s(E,j),s(E,q),s(E,P),s(E,B),s(E,I),s(E,Y),s(E,z),s(E,D),h(E,e[6],!0),s($,G),s($,J),_(J,e[2]),s(a,K),s(a,Q),s(Q,U),s(U,V),s(U,W),s(U,X),s(X,Z),s(Q,tt),s(Q,et),s(et,nt),s(et,lt),s(et,ot),s(ot,at),s(ot,st),s(Q,ut),s(Q,vt),s(vt,rt),s(vt,ct),s(vt,it),s(it,yt),s(it,ft),u(t,pt,l),u(t,dt,l),_t||(ht=[y(g,"click",e[7]),y(C,"input",e[13]),y(E,"change",e[14]),y(J,"input",e[15])],_t=!0)},p(t,[e]){if(769&e){let n;for(xt=t[0],n=0;n<xt.length;n+=1){const l=H(t,xt,n);bt[n]?bt[n].p(l,e):(bt[n]=M(l),bt[n].c(),bt[n].m($,m))}for(;n<bt.length;n+=1)bt[n].d(1);bt.length=xt.length}2&e&&p(C.value)!==t[1]&&_(C,t[1]),64&e&&h(E,t[6]),4&e&&p(J.value)!==t[2]&&_(J,t[2]),8&e&&$t!==($t=t[3].toFixed(2)+"")&&d(Z,$t),64&e&&d(at,t[6]),16&e&&mt!==(mt=t[4].toFixed(2)+"")&&d(st,mt),64&e&&d(yt,t[6]),32&e&&gt!==(gt=t[5].toFixed(2)+"")&&d(ft,gt)},i:t,o:t,d(t){t&&v(n),t&&v(o),t&&v(a),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(bt,t),t&&v(pt),t&&v(dt),_t=!1,l(ht)}}}function P(t){let e=t.hours;if("string"==typeof t.hours&&t.hours.includes(":"))try{let[e,n]=t.hours.split(":"),l=parseFloat(e)+parseFloat(n)/60;isNaN(l)||(t.hours=l)}catch{t.hours=e}}function B(t,e,n){let l,o=[{}],a=null,s=null,u=0,v=0,r=0;function c(t){o.splice(t,1),n(0,o)}let i=!1;return t.$$.update=()=>{1055&t.$$.dirty&&(n(3,u=o.reduce(((t,e)=>t+parseFloat(e.hours)||0),0)),i&&(o.forEach(P),n(10,i=!1)),n(4,v=u*a),n(5,r=v-v*(s/100)))},[o,a,s,u,v,r,l,function(){n(0,o=[...o,{}])},c,function(){n(10,i=!0)},i,function(t,e){t[e].hours=this.value,n(0,o)},t=>c(t),function(){a=p(this.value),n(1,a)},function(){l=function(t){const e=t.querySelector(":checked");return e&&e.__value}(this),n(6,l)},function(){s=p(this.value),n(2,s)}]}return new class extends j{constructor(t){super(),S(this,t,B,q,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
