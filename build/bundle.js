var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function n(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,r;function c(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function l(t,e,i){t.insertBefore(e,i||null)}function h(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function p(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function v(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function g(t){r=t}function y(t){(function(){if(!r)throw new Error("Function called outside component initialization");return r})().$$.on_mount.push(t)}const b=[],j=[],x=[],C=[],$=Promise.resolve();let _=!1;function w(t){x.push(t)}const S=new Set;let P=0;function k(){const t=r;do{for(;P<b.length;){const t=b[P];P++,g(t),A(t.$$)}for(g(null),b.length=0,P=0;j.length;)j.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(b.length);for(;C.length;)C.pop()();_=!1,S.clear(),g(t)}function A(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const M=new Set;function R(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,$.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(o,a,c,u,l,d,f,m=[-1]){const p=r;g(o);const v=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(p?p.$$.context:[])),callbacks:i(),dirty:m,skip_bound:!1,root:a.target||p.$$.root};f&&f(v.root);let y=!1;if(v.ctx=c?c(o,a.props||{},((t,e,...i)=>{const n=i.length?i[0]:e;return v.ctx&&l(v.ctx[t],v.ctx[t]=n)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](n),y&&R(o,t)),e})):[],v.update(),y=!0,n(v.before_update),v.fragment=!!u&&u(v.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);v.fragment&&v.fragment.l(t),t.forEach(h)}else v.fragment&&v.fragment.c();a.intro&&((b=o.$$.fragment)&&b.i&&(M.delete(b),b.i(j))),function(t,i,o,a){const{fragment:r,on_mount:c,on_destroy:u,after_update:l}=t.$$;r&&r.m(i,o),a||w((()=>{const i=c.map(e).filter(s);u?u.push(...i):n(i),t.$$.on_mount=[]})),l.forEach(w)}(o,a.target,a.anchor,a.customElement),k()}var b,j;g(p)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e,i){return e&&q(t.prototype,e),i&&q(t,i),t}function B(t){return+t.replace(/px/,"")}function F(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.random()*(e-t)+t;return Math.floor(n*Math.pow(10,i))/Math.pow(10,i)}function T(t){return t[F(0,t.length)]}var z=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function D(t){return Math.log(t)/Math.log(1920)}var O=function(){function t(e){N(this,t);var i=e.initialPosition,n=e.direction,s=e.confettiRadius,o=e.confettiColors,a=e.emojis,r=e.emojiSize,c=e.canvasWidth,u=F(.9,1.7,3)*D(c);this.confettiSpeed={x:u,y:u},this.finalConfettiSpeedX=F(.2,.6,3),this.rotationSpeed=a.length?.01:F(.03,.07,3)*D(c),this.dragForceCoefficient=F(5e-4,9e-4,6),this.radius={x:s,y:s},this.initialRadius=s,this.rotationAngle="left"===n?F(0,.2,3):F(-.2,0,3),this.emojiSize=r,this.emojiRotationAngle=F(0,2*Math.PI),this.radiusYUpdateDirection="down";var l="left"===n?F(82,15)*Math.PI/180:F(-15,-82)*Math.PI/180;this.absCos=Math.abs(Math.cos(l)),this.absSin=Math.abs(Math.sin(l));var h=F(-150,0),d={x:i.x+("left"===n?-h:h)*this.absCos,y:i.y-h*this.absSin};this.currentPosition=Object.assign({},d),this.initialPosition=Object.assign({},d),this.color=a.length?null:T(o),this.emoji=a.length?T(a):null,this.createdAt=(new Date).getTime(),this.direction=n}return E(t,[{key:"draw",value:function(t){var e=this.currentPosition,i=this.radius,n=this.color,s=this.emoji,o=this.rotationAngle,a=this.emojiRotationAngle,r=this.emojiSize,c=window.devicePixelRatio;n?(t.fillStyle=n,t.beginPath(),t.ellipse(e.x*c,e.y*c,i.x*c,i.y*c,o,0,2*Math.PI),t.fill()):s&&(t.font="".concat(r,"px serif"),t.save(),t.translate(c*e.x,c*e.y),t.rotate(a),t.textAlign="center",t.fillText(s,0,0),t.restore())}},{key:"updatePosition",value:function(t,e){var i=this.confettiSpeed,n=this.dragForceCoefficient,s=this.finalConfettiSpeedX,o=this.radiusYUpdateDirection,a=this.rotationSpeed,r=this.createdAt,c=this.direction,u=e-r;i.x>s&&(this.confettiSpeed.x-=n*t),this.currentPosition.x+=i.x*("left"===c?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*u+.00125*Math.pow(u,2)/2,this.rotationSpeed-=this.emoji?1e-4:1e-5*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji?this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI):"down"===o?(this.radius.y-=t*a,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*a,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+100}}]),t}();function U(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function Y(t){var e=t.confettiRadius,i=void 0===e?6:e,n=t.confettiNumber,s=void 0===n?t.confettiesNumber||(t.emojis?40:250):n,o=t.confettiColors,a=void 0===o?z:o,r=t.emojis,c=void 0===r?t.emojies||[]:r,u=t.emojiSize,l=void 0===u?80:u;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:i,confettiNumber:s,confettiColors:a,emojis:c,emojiSize:l}}var H=function(){function t(e){var i=this;N(this,t),this.canvasContext=e,this.shapes=[],this.promise=new Promise((function(t){return i.resolvePromise=t}))}return E(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return!this.shapes.length&&(null===(t=this.resolvePromise)||void 0===t||t.call(this),!0)}},{key:"processShapes",value:function(t,e,i){var n=this,s=t.timeDelta,o=t.currentTime;this.shapes=this.shapes.filter((function(t){return t.updatePosition(s,o),t.draw(n.canvasContext),!i||t.getIsVisibleOnCanvas(e)}))}}]),t}(),L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(this,t),this.activeConfettiBatches=[],this.canvas=e.canvas||U(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=(new Date).getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return E(t,[{key:"loop",value:function(){var t,e,i,n,s;this.requestAnimationFrameRequested=!1,t=this.canvas,e=window.devicePixelRatio,i=getComputedStyle(t),n=B(i.getPropertyValue("width")),s=B(i.getPropertyValue("height")),t.setAttribute("width",(n*e).toString()),t.setAttribute("height",(s*e).toString());var o=(new Date).getTime(),a=o-this.lastUpdated,r=this.canvas.offsetHeight,c=this.iterationIndex%10==0;this.activeConfettiBatches=this.activeConfettiBatches.filter((function(t){return t.processShapes({timeDelta:a,currentTime:o},r,c),!c||!t.complete()})),this.iterationIndex++,this.queueAnimationFrameIfNeeded(o)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||(new Date).getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Y(t),i=e.confettiRadius,n=e.confettiNumber,s=e.confettiColors,o=e.emojis,a=e.emojiSize,r=this.canvas.getBoundingClientRect(),c=r.width,u=r.height,l=5*u/7,h={x:0,y:l},d={x:c,y:l},f=new H(this.canvasContext),m=0;m<n/2;m++){var p=new O({initialPosition:h,direction:"right",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:c}),v=new O({initialPosition:d,direction:"left",confettiRadius:i,confettiColors:s,confettiNumber:n,emojis:o,emojiSize:a,canvasWidth:c});f.addShapes(p,v)}return this.activeConfettiBatches.push(f),this.queueAnimationFrameIfNeeded(),f.getBatchCompletePromise()}}]),t}();function V(e){let i,s,o,r,g,y,b,j,x,C,$,_,w,S,P,k,A,M,R,I,N,q,E,B,F,T,z;return{c(){var t,n;i=d("link"),s=d("script"),r=m(),g=d("main"),y=d("div"),b=d("p"),b.textContent="🕋 | 🕌",j=m(),x=d("h1"),x.textContent="Eid Mubarak!",C=m(),$=d("h2"),$.textContent=`${W} Hijriah`,_=m(),w=d("p"),w.textContent="Selamat Idul Fitri 1443 H",S=m(),P=d("p"),k=f("Mohon Maaf Lahir dan Batin"),M=m(),R=d("span"),I=f("🤝"),q=m(),E=d("p"),E.textContent="Klik untuk bersalaman",B=m(),F=d("footer"),F.innerHTML='<p class="svelte-16jrag0">2022 | Chrisna Adhi Pranoto - Built with <a href="https://svelte.dev/" target="_blank" class="svelte-16jrag0">Svelte</a></p>',v(i,"rel","stylesheet"),v(i,"href","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),t=s.src,n=o="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js",a||(a=document.createElement("a")),a.href=n,t!==a.href&&v(s,"src","https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"),v(b,"class","wonder svelte-16jrag0"),v(x,"class","svelte-16jrag0"),v($,"class","svelte-16jrag0"),v(w,"class","svelte-16jrag0"),v(P,"class",A=c(e[1]?"maaf animate__animated animate__heartBeat":"maaf")+" svelte-16jrag0"),v(R,"class",N=c(e[0]?"salam animate__animated animate__shakeY":"salam")+" svelte-16jrag0"),v(E,"class","salam-teks svelte-16jrag0"),v(y,"class","animate__animated animate__fadeIn svelte-16jrag0"),v(F,"class","svelte-16jrag0"),v(g,"class","svelte-16jrag0")},m(t,n){u(document.head,i),u(document.head,s),l(t,r,n),l(t,g,n),u(g,y),u(y,b),u(y,j),u(y,x),u(y,C),u(y,$),u(y,_),u(y,w),u(y,S),u(y,P),u(P,k),u(y,M),u(y,R),u(R,I),u(y,q),u(y,E),u(g,B),u(g,F),T||(z=[p(R,"click",e[2]),p(E,"click",e[2])],T=!0)},p(t,[e]){2&e&&A!==(A=c(t[1]?"maaf animate__animated animate__heartBeat":"maaf")+" svelte-16jrag0")&&v(P,"class",A),1&e&&N!==(N=c(t[0]?"salam animate__animated animate__shakeY":"salam")+" svelte-16jrag0")&&v(R,"class",N)},i:t,o:t,d(t){h(i),h(s),t&&h(r),t&&h(g),T=!1,n(z)}}}let W="1443";function X(t,e,i){const n=new L;let s=!1,o=!1;return y((()=>{n.addConfetti()})),[s,o,function(){n.addConfetti(),i(1,o=!0),i(0,s=!0),setTimeout((()=>{i(0,s=!1),i(1,o=!1)}),1e3)}]}return new class extends class{$destroy(){!function(t,e){const i=t.$$;null!==i.fragment&&(n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),I(this,t,X,V,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
