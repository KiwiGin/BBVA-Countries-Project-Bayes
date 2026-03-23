(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:p}=Object,m=globalThis,ee=m.trustedTypes,te=ee?ee.emptyScript:``,ne=m.reactiveElementPolyfillSupport,h=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_=(e,t)=>!c(e,t),re={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol(`metadata`),m.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=p(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?g:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?g:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??_)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[h(`elementProperties`)]=new Map,v[h(`finalized`)]=new Map,ne?.({ReactiveElement:v}),(m.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,ie=e=>e,b=y.trustedTypes,ae=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,x=`$lit$`,S=`lit$${Math.random().toFixed(9).slice(2)}$`,C=`?`+S,oe=`<${C}>`,w=document,T=()=>w.createComment(``),E=e=>e===null||typeof e!=`object`&&typeof e!=`function`,D=Array.isArray,se=e=>D(e)||typeof e?.[Symbol.iterator]==`function`,O=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,le=/>/g,A=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ue=/'/g,de=/"/g,fe=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),M=Symbol.for(`lit-noChange`),N=Symbol.for(`lit-nothing`),pe=new WeakMap,P=w.createTreeWalker(w,129);function me(e,t){if(!D(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ae===void 0?t:ae.createHTML(t)}var he=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=k;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===k?c[1]===`!--`?o=ce:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=A):(fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=A):o=le:o===A?c[0]===`>`?(o=i??k,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?A:c[3]===`"`?de:ue):o===de||o===ue?o=A:o===ce||o===le?o=k:(o=A,i=void 0);let d=o===A&&e[t+1].startsWith(`/>`)?` `:``;a+=o===k?n+oe:l>=0?(r.push(s),n.slice(0,l)+x+n.slice(l)+S+d):n+S+(l===-2?t:d)}return[me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},F=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=he(t,n);if(this.el=e.createElement(l,r),P.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=P.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(x)){let t=u[o++],n=i.getAttribute(e).split(S),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ge:r[1]===`?`?_e:r[1]===`@`?ve:z}),i.removeAttribute(e)}else e.startsWith(S)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(fe.test(i.tagName)){let e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],T()),P.nextNode(),c.push({type:2,index:++a});i.append(e[t],T())}}}else if(i.nodeType===8)if(i.data===C)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(S,e+1))!==-1;)c.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){let n=w.createElement(`template`);return n.innerHTML=e,n}};function I(e,t,n=e,r){if(t===M)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=E(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=I(e,i._$AS(e,t.values),i,r)),t}var L=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);P.currentNode=r;let i=P.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new R(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ye(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=P.nextNode(),a++)}return P.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},R=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),E(e)?e===N||e==null||e===``?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==M&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=F.createElement(me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new L(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new F(e)),t}k(t){D(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(T()),this.O(T()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ie(e).nextSibling;ie(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=I(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=I(this,r[n+o],t,o),s===M&&(s=this._$AH[o]),a||=!E(s)||s!==this._$AH[o],s===N?e=N:e!==N&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ge=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},_e=class extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},ve=class extends z{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??N)===M)return;let n=this._$AH,r=e===N&&n!==N||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==N&&(n===N||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}},be={M:x,P:S,A:C,C:1,L:he,R:L,D:se,V:I,I:R,H:z,N:_e,U:ve,B:ge,F:ye},xe=y.litHtmlPolyfillSupport;xe?.(F,R),(y.litHtmlVersions??=[]).push(`3.3.2`);var Se=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new R(t.insertBefore(T(),e),e,void 0,n??{})}return i._$AI(e),i},B=globalThis,V=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};V._$litElement$=!0,V.finalized=!0,B.litElementHydrateSupport?.({LitElement:V});var Ce=B.litElementPolyfillSupport;Ce?.({LitElement:V}),(B.litElementVersions??=[]).push(`4.2.2`);function H(e,t,n){return e?t(e):n?.(e)}var U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},W=e=>(...t)=>({_$litDirective$:e,values:t}),G=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},we=`important`,Te=` !`+we,Ee=W(class extends G{constructor(e){if(super(e),e.type!==U.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Te);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?we:``):n[e]=r}}return M}}),De=`https://restcountries.com/v3.1`,Oe=[`name`,`capital`,`region`,`subregion`,`population`,`area`,`flags`,`languages`,`currencies`,`timezones`,`cca3`,`borders`].join(`,`),ke=new class{_controller=null;async searchByName(e){if(this._abort(),!e||e.trim().length===0)return[];this._controller=new AbortController;try{let t=await fetch(`${De}/name/${encodeURIComponent(e)}?fields=${Oe}`,{signal:this._controller.signal});if(t.status===404)return[];if(!t.ok)throw Error(`Error HTTP: ${t.status}`);return await t.json()}catch(e){if(e.name===`AbortError`)return null;throw e}finally{this._controller=null}}_abort(){this._controller&&=(this._controller.abort(),null)}cancelPending(){this._abort()}};function*K(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Ae={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},q=([e,t,n])=>{let r=document.createElementNS(`http://www.w3.org/2000/svg`,e);return Object.keys(t).forEach(e=>{r.setAttribute(e,String(t[e]))}),n?.length&&n.forEach(e=>{let t=q(e);r.appendChild(t)}),r},je=(e,t={})=>q([`svg`,{...Ae,...t},e]),Me=[[`path`,{d:`m12 19-7-7 7-7`}],[`path`,{d:`M19 12H5`}]],Ne=[[`path`,{d:`m6 9 6 6 6-6`}]],Pe=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 6v6l4 2`}]],Fe=[[`path`,{d:`M13.744 17.736a6 6 0 1 1-7.48-7.48`}],[`path`,{d:`M15 6h1v4`}],[`path`,{d:`m6.134 14.768.866-.5 2 3.464`}],[`circle`,{cx:`16`,cy:`8`,r:`6`}]],Ie=[[`circle`,{cx:`12`,cy:`12`,r:`10`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`}],[`path`,{d:`M2 12h20`}]],Le=[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}],[`path`,{d:`M3 3v5h5`}],[`path`,{d:`M12 7v5l4 2`}]],Re=[[`path`,{d:`m5 8 6 6`}],[`path`,{d:`m4 14 6-6 2-3`}],[`path`,{d:`M2 5h12`}],[`path`,{d:`M7 2h1`}],[`path`,{d:`m22 22-5-10-5 10`}],[`path`,{d:`M14 18h6`}]],ze=[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`}],[`circle`,{cx:`12`,cy:`10`,r:`3`}]],Be=[[`path`,{d:`M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`}],[`path`,{d:`m14.5 12.5 2-2`}],[`path`,{d:`m11.5 9.5 2-2`}],[`path`,{d:`m8.5 6.5 2-2`}],[`path`,{d:`m17.5 15.5 2-2`}]],Ve=[[`path`,{d:`m21 21-4.34-4.34`}],[`circle`,{cx:`11`,cy:`11`,r:`8`}]],He=[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`}],[`circle`,{cx:`9`,cy:`7`,r:`4`}]];function J(e,t={}){let{size:n=20,strokeWidth:r=2}=t,i=je(e);return i.setAttribute(`width`,n),i.setAttribute(`height`,n),i.setAttribute(`stroke-width`,r),j`${i}`}var Y=W(class extends G{constructor(e){if(super(e),e.type!==U.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return M}}),{I:Ue}=be,We=e=>e,Ge=e=>e.strings===void 0,Ke=()=>document.createComment(``),X=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Ue(r.insertBefore(Ke(),i),r.insertBefore(Ke(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=We(e).nextSibling;We(r).insertBefore(e,i),e=t}}}return n},Z=(e,t,n=e)=>(e._$AI(t,n),e),qe={},Je=(e,t=qe)=>e._$AH=t,Ye=e=>e._$AH,Q=e=>{e._$AR(),e._$AA.remove()},Xe=W(class extends G{constructor(e){if(super(e),e.type!==U.PROPERTY&&e.type!==U.ATTRIBUTE&&e.type!==U.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ge(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===N)return t;let n=e.element,r=e.name;if(e.type===U.PROPERTY){if(t===n[r])return M}else if(e.type===U.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return M}else if(e.type===U.ATTRIBUTE&&n.getAttribute(r)===t+``)return M;return Je(e),t}}),Ze=`:host{width:100%;display:block}.search-container{align-items:center;display:flex;position:relative}.search-container.searching .search-icon{color:var(--color-primary,#004481)}.search-icon{color:var(--color-text-light,#666);pointer-events:none;transition:color var(--transition-fast,.15s ease);font-size:1.2rem;position:absolute;left:16px}input{border-radius:var(--radius-md,8px);width:100%;color:var(--color-text,#333);background:var(--color-surface,#fff);transition:border-color var(--transition-fast,.15s ease), box-shadow var(--transition-fast,.15s ease);border:2px solid #ddd;outline:none;padding:14px 16px 14px 48px;font-size:1rem}input::placeholder{color:var(--color-text-light,#999)}input:focus{border-color:var(--color-primary,#004481);box-shadow:0 0 0 3px #00448126}@media (width<=480px){input{padding:12px 12px 12px 42px;font-size:.9rem}.search-icon{left:12px}}`,Qe=class extends V{static properties={value:{type:String},placeholder:{type:String},searching:{type:Boolean}};static styles=a(Ze);constructor(){super(),this.value=``,this.placeholder=`Buscar...`,this.searching=!1}render(){return j`
      <div class=${Y({"search-container":!0,searching:this.searching})}>
        <span class="search-icon" aria-hidden="true">${J(Ve)}</span>
        <input
          type="search"
          placeholder=${this.placeholder}
          .value=${Xe(this.value)}
          @input=${this._onInput}
          aria-label=${this.placeholder}
        />
      </div>
    `}_onInput(e){this.dispatchEvent(new CustomEvent(`search-input`,{detail:{value:e.target.value},bubbles:!0,composed:!0}))}};customElements.define(`search-input`,Qe);var $e=`:host{width:100%;max-width:600px;margin:0 auto;display:block}.status{color:var(--color-text-light,#666);min-height:1.2em;margin-top:8px;font-size:.85rem}.recent-searches{margin-top:12px}.recent-searches .recent-label{color:var(--color-text-light,#666);align-items:center;gap:4px;margin-bottom:8px;font-size:.8rem;display:flex}.recent-searches .recent-list{flex-wrap:wrap;gap:8px;display:flex}.recent-searches .recent-item{background:var(--color-surface,#fff);border-radius:var(--radius-lg,16px);color:var(--color-text,#333);cursor:pointer;transition:background-color var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);border:1px solid #ddd;padding:4px 12px;font-size:.85rem}.recent-searches .recent-item:hover{border-color:var(--color-primary,#004481);color:var(--color-primary,#004481);background-color:#0044810f}.recent-searches .recent-item:focus-visible{outline:2px solid var(--color-primary,#004481);outline-offset:2px}.recent-searches .recent-clear{color:var(--color-text-light,#999);cursor:pointer;background:0 0;border:none;margin-left:auto;padding:2px 6px;font-size:.75rem}.recent-searches .recent-clear:hover{color:var(--color-error,#d32f2f)}`,$=`country-explorer:recent-searches`,et=5,tt=class e extends V{static properties={_query:{type:String,state:!0},_isSearching:{type:Boolean,state:!0},_recentSearches:{type:Array,state:!0}};static styles=a($e);_debounceTimer=null;static DEBOUNCE_DELAY=300;constructor(){super(),this._query=``,this._isSearching=!1,this._recentSearches=this._loadRecent()}disconnectedCallback(){super.disconnectedCallback(),this._clearDebounce()}render(){let e=!this._isSearching&&!this._query&&this._recentSearches.length>0;return j`
      <search-input
        .value=${this._query}
        placeholder="Buscar país por nombre..."
        .searching=${this._isSearching}
        @search-input=${this._onInput}
      ></search-input>
      <div class="status" role="status" aria-live="polite">
        ${this._isSearching?`Buscando...`:``}
      </div>

      ${H(e,()=>j`
        <div class="recent-searches">
          <div class="recent-label">
            ${J(Le,{size:14})} Búsquedas recientes
            <button class="recent-clear" @click=${this._clearRecent}>Limpiar</button>
          </div>
          <div class="recent-list" role="list" aria-label="Búsquedas recientes">
            ${K(this._recentSearches,e=>j`
              <button
                class="recent-item"
                role="listitem"
                @click=${()=>this._onRecentClick(e)}
              >
                ${e}
              </button>
            `)}
          </div>
        </div>
      `)}
    `}_onInput(t){this._query=t.detail.value,this._isSearching=!0,this._clearDebounce(),this._debounceTimer=setTimeout(()=>{this._emitSearch(this._query)},e.DEBOUNCE_DELAY)}_emitSearch(e){this._isSearching=!1;let t=e.trim();t&&this._saveRecent(t),this.dispatchEvent(new CustomEvent(`country-search-change`,{detail:{query:t},bubbles:!0,composed:!0}))}_onRecentClick(e){this._query=e,this._emitSearch(e)}_loadRecent(){try{return JSON.parse(localStorage.getItem($))||[]}catch{return[]}}_saveRecent(e){let t=[e,...this._recentSearches.filter(t=>t.toLowerCase()!==e.toLowerCase())].slice(0,et);this._recentSearches=t;try{localStorage.setItem($,JSON.stringify(t))}catch{}}_clearRecent(){this._recentSearches=[];try{localStorage.removeItem($)}catch{}}_clearDebounce(){this._debounceTimer&&=(clearTimeout(this._debounceTimer),null)}};customElements.define(`country-search`,tt);var nt=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},rt=W(class extends G{constructor(e){if(super(e),e.type!==U.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ye(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=Z(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=Z(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=Z(i[d],a[m]),X(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=Z(i[f],a[p]),X(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=nt(o,p,m),u=nt(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=X(e,i[d]);Z(t,a[p]),c[p]=t}else c[p]=Z(n,a[p]),X(e,i[d],n),i[t]=null;p++}else Q(i[f]),f--;else Q(i[d]),d++;for(;p<=m;){let t=X(e,c[m+1]);Z(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Q(e)}return this.ut=o,Je(e,c),M}}),it=(e,t,n)=>{for(let n of t)if(n[0]===e)return(0,n[1])();return n?.()},at=`:host{display:block}.card{background:var(--color-surface,#fff);border-radius:var(--radius-md,8px);box-shadow:var(--shadow-sm,0 1px 3px #0000001f);transition:box-shadow var(--transition-normal,.3s ease), transform var(--transition-fast,.15s ease);overflow:hidden}.card.clickable{cursor:pointer}.card.clickable:hover{box-shadow:var(--shadow-md,0 4px 6px #0000001a);transform:translateY(-2px)}.card.clickable:active{transform:translateY(0)}.card:focus-visible{outline:2px solid var(--color-primary,#004481);outline-offset:2px}.card-header{padding:16px}.card-header ::slotted(*){margin:0}.card-body{padding:0 16px 16px}.card-footer{border-top:1px solid #eee;padding:12px 16px}@media (prefers-reduced-motion:reduce){.card{transition:none}.card.clickable:hover{transform:none}}`,ot=class extends V{static properties={clickable:{type:Boolean}};static styles=a(at);constructor(){super(),this.clickable=!1}render(){return j`
      <div
        class=${Y({card:!0,clickable:this.clickable})}
        tabindex=${this.clickable?`0`:`-1`}
        role=${this.clickable?`button`:`article`}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}_onClick(){this.clickable&&this.dispatchEvent(new CustomEvent(`card-click`,{bubbles:!0,composed:!0}))}_onKeyDown(e){this.clickable&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._onClick())}};customElements.define(`app-card`,ot);var st=`:host{display:inline-block}button{border-radius:var(--radius-md,8px);cursor:pointer;transition:background-color var(--transition-fast,.15s ease), transform var(--transition-fast,.15s ease);border:none;justify-content:center;align-items:center;gap:8px;padding:10px 20px;font-size:.95rem;font-weight:500;display:inline-flex}button:active{transform:scale(.97)}button:focus-visible{outline:2px solid var(--color-primary,#004481);outline-offset:2px}button.primary{background-color:var(--color-primary,#004481);color:#fff}button.primary:hover{background-color:var(--color-primary-dark,#002e5d)}button.secondary{color:var(--color-primary,#004481);border:2px solid var(--color-primary,#004481);background-color:#0000}button.secondary:hover{background-color:#00448114}button.text{color:var(--color-primary,#004481);background-color:#0000;padding:8px 12px}button.text:hover{background-color:#00448114}button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}`,ct=class extends V{static properties={variant:{type:String},disabled:{type:Boolean,reflect:!0}};static styles=a(st);constructor(){super(),this.variant=`primary`,this.disabled=!1}render(){return j`
      <button
        class=${Y({[this.variant]:!0})}
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `}_onClick(){this.disabled||this.dispatchEvent(new CustomEvent(`button-click`,{bubbles:!0,composed:!0}))}};customElements.define(`app-button`,ct);var lt=`:host{display:block}.skeleton{border-radius:var(--radius-md,8px);background:linear-gradient(90deg,#e0e0e0 25%,#f0f0f0 50%,#e0e0e0 75%) 0 0/200% 100%;animation:1.5s ease-in-out infinite shimmer}.skeleton--text{border-radius:var(--radius-sm,4px);width:80%;height:16px}.skeleton--title{border-radius:var(--radius-sm,4px);width:60%;height:20px}.skeleton--image{border-radius:var(--radius-md,8px) var(--radius-md,8px) 0 0;width:100%;height:160px}.skeleton--card{box-shadow:var(--shadow-sm,0 1px 3px #0000001f);overflow:hidden}.skeleton--card .skeleton-body{flex-direction:column;gap:10px;padding:14px 16px;display:flex}@keyframes shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@media (prefers-reduced-motion:reduce){.skeleton{opacity:.7;animation:none}}`,ut=class extends V{static properties={variant:{type:String}};static styles=a(lt);constructor(){super(),this.variant=`text`}render(){return this.variant===`card`?j`
        <div class="skeleton skeleton--card">
          <div class="skeleton skeleton--image"></div>
          <div class="skeleton-body">
            <div class="skeleton skeleton--title"></div>
            <div class="skeleton skeleton--text"></div>
            <div class="skeleton skeleton--text" style="width: 50%"></div>
          </div>
        </div>
      `:j`<div class="skeleton skeleton--${this.variant}"></div>`}};customElements.define(`app-skeleton`,ut);var dt=`:host{width:100%;display:block}.country-grid{grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;padding:16px 0;display:grid}@media (width<=480px){.country-grid{grid-template-columns:1fr;gap:16px}}.country-card{cursor:pointer;flex-direction:column;display:flex}.country-card .flag-container{border-radius:var(--radius-md,8px) var(--radius-md,8px) 0 0;width:100%;height:160px;overflow:hidden}.country-card .flag-container img{object-fit:cover;width:100%;height:100%;transition:transform var(--transition-normal,.3s ease)}.country-card:hover .flag-container img{transform:scale(1.05)}.country-card .info{padding:14px 16px}.country-card .info h3{color:var(--color-text,#333);margin:0 0 8px;font-size:1.05rem}.country-card .info p{color:var(--color-text-light,#666);align-items:center;gap:6px;margin:0 0 4px;font-size:.85rem;display:flex}.state-message{text-align:center;color:var(--color-text-light,#666);padding:48px 24px;font-size:1rem}.state-message p{margin-bottom:16px}.state-message--error{color:var(--color-error,#d32f2f)}.load-more{justify-content:center;padding:24px 0;display:flex}@media (prefers-reduced-motion:reduce){.country-card .flag-container img{transition:none}}`,ft=class e extends V{static properties={countries:{type:Array},loading:{type:Boolean},error:{type:String},_visibleCount:{type:Number,state:!0}};static styles=a(dt);static SKELETON_COUNT=6;static PAGE_SIZE=12;constructor(){super(),this.countries=[],this.loading=!1,this.error=``,this._visibleCount=e.PAGE_SIZE}willUpdate(t){t.has(`countries`)&&(this._visibleCount=e.PAGE_SIZE)}render(){return j`
      ${it(this._getState(),[[`loading`,()=>this._renderSkeletons()],[`error`,()=>this._renderError()],[`empty`,()=>this._renderEmpty()],[`data`,()=>this._renderGrid()]])}
    `}_getState(){return this.loading?`loading`:this.error?`error`:this.countries.length===0?`empty`:`data`}_renderSkeletons(){return j`
      <div class="country-grid" aria-busy="true" aria-label="Cargando resultados">
        ${Array.from({length:e.SKELETON_COUNT},()=>j`
          <app-skeleton variant="card"></app-skeleton>
        `)}
      </div>
    `}_renderError(){return j`
      <div class="state-message state-message--error" role="alert">
        <p>${this.error}</p>
        <app-button variant="secondary" @button-click=${this._onRetry}>
          Reintentar
        </app-button>
      </div>
    `}_renderEmpty(){return j`
      <div class="state-message">
        <p>Escribe el nombre de un pais para comenzar la busqueda</p>
      </div>
    `}_renderGrid(){let e=this.countries.slice(0,this._visibleCount),t=this.countries.length>this._visibleCount;return j`
      <div class="country-grid" role="list" aria-label="Lista de paises">
        ${rt(e,e=>e.cca3,e=>this._renderCard(e))}
      </div>
      ${t?j`
        <div class="load-more">
          <app-button variant="secondary" @button-click=${this._loadMore}>
            ${J(Ne,{size:16})} Cargar mas
            (${this.countries.length-this._visibleCount} restantes)
          </app-button>
        </div>
      `:``}
    `}_loadMore(){this._visibleCount+=e.PAGE_SIZE}_renderCard(e){let t=e.name?.common||`Sin nombre`,n=e.capital?.[0]||`N/A`,r=e.region||`N/A`;return j`
      <app-card
        clickable
        @card-click=${()=>this._onSelect(e)}
      >
        <div slot="header" class="country-card">
          <div class="flag-container">
            <img src=${e.flags?.svg||e.flags?.png||``} alt="Bandera de ${t}" loading="lazy" />
          </div>
          <div class="info">
            <h3>${t}</h3>
            <p>${J(ze,{size:14})} ${n}</p>
            <p>${J(Ie,{size:14})} ${r}</p>
          </div>
        </div>
      </app-card>
    `}_onSelect(e){this.dispatchEvent(new CustomEvent(`country-select`,{detail:{country:e},bubbles:!0,composed:!0}))}_onRetry(){this.dispatchEvent(new CustomEvent(`country-retry`,{bubbles:!0,composed:!0}))}};customElements.define(`country-list`,ft);var pt=e=>e??N,mt=`:host{display:inline-block}.badge{border-radius:var(--radius-lg,16px);padding:4px 10px;font-size:.8rem;font-weight:500;line-height:1.4;display:inline-block}.badge.default{color:var(--color-text,#333);background-color:#e8e8e8}.badge.info{color:var(--color-secondary,#1973b8);background-color:#1973b81f}.badge.success{color:var(--color-success,#388e3c);background-color:#388e3c1f}.badge.error{color:var(--color-error,#d32f2f);background-color:#d32f2f1f}`,ht=class extends V{static properties={variant:{type:String}};static styles=a(mt);constructor(){super(),this.variant=`default`}render(){return j`
      <span class=${Y({badge:!0,[this.variant]:!0})}>
        <slot></slot>
      </span>
    `}};customElements.define(`app-badge`,ht);var gt=`:host{animation:fadeIn var(--transition-normal,.3s ease);display:block}@keyframes fadeIn{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion:reduce){:host{animation:none}}.detail-header{margin-bottom:24px}.back-btn{color:var(--color-primary,#004481);cursor:pointer;border-radius:var(--radius-sm,4px);transition:color var(--transition-fast,.15s ease);background:0 0;border:none;align-items:center;gap:6px;padding:8px 4px;font-size:.95rem;display:inline-flex}.back-btn:hover{color:var(--color-primary-dark,#002e5d)}.back-btn:focus-visible{outline:2px solid var(--color-primary,#004481);outline-offset:2px}.detail-content{grid-template-columns:1fr 1fr;align-items:start;gap:32px;display:grid}.flag-section img{border-radius:var(--radius-md,8px);width:100%;box-shadow:var(--shadow-md,0 4px 6px #0000001a)}.info-section h1{color:var(--color-text,#333);margin:0 0 4px;font-size:1.8rem}.info-section .official-name{color:var(--color-text-light,#666);margin-bottom:20px;font-size:.9rem;font-style:italic}.info-grid{grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;display:grid}.info-item{flex-direction:column;gap:2px;display:flex}.info-item .label{text-transform:uppercase;letter-spacing:.5px;color:var(--color-text-light,#666);align-items:center;gap:4px;font-size:.75rem;display:flex}.info-item .value{color:var(--color-text,#333);font-size:.95rem;font-weight:500}.tags-section{margin-bottom:16px}.tags-section .tags-label{text-transform:uppercase;letter-spacing:.5px;color:var(--color-text-light,#666);margin-bottom:8px;font-size:.75rem}.tags-section .tags{flex-wrap:wrap;gap:6px;display:flex}.extra-slot{margin-top:24px}@media (width<=768px){.detail-content{grid-template-columns:1fr}.info-section h1{font-size:1.4rem}.info-grid{grid-template-columns:1fr}}`,_t=class extends V{static properties={country:{type:Object}};static styles=a(gt);constructor(){super(),this.country=null}_handleKeyDown=e=>{e.key===`Escape`&&this._onBack()};connectedCallback(){super.connectedCallback(),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,`Detalle del pais`),requestAnimationFrame(()=>this.focus()),document.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this._handleKeyDown)}render(){if(!this.country)return j``;let e=this.country,t=e.name?.common||`Sin nombre`,n=e.name?.official,r=e.capital?.[0]||`N/A`,i=e.region||`N/A`,a=e.subregion,o=e.population?.toLocaleString(`es-ES`)||`N/A`,s=e.area?`${e.area.toLocaleString(`es-ES`)} km²`:`N/A`,c=e.flags?.svg||e.flags?.png||``,l=e.timezones||[],u=e.languages?Object.values(e.languages):[],d=e.currencies?Object.values(e.currencies):[];return j`
      <div class="detail-header">
        <button
          class="back-btn"
          @click=${this._onBack}
          aria-label="Volver a la lista"
        >
          ${J(Me,{size:18})} Volver
        </button>
      </div>

      <div class="detail-content">
        <div class="flag-section">
          <img
            src=${c}
            alt=${pt(c?`Bandera de ${t}`:void 0)}
          />
        </div>

        <div class="info-section">
          <h1>${t}</h1>
          ${H(n,()=>j`
            <p class="official-name">${n}</p>
          `)}

          <div class="info-grid">
            <div class="info-item">
              <span class="label">${J(ze,{size:12})} Capital</span>
              <span class="value">${r}</span>
            </div>
            <div class="info-item">
              <span class="label">${J(Ie,{size:12})} Region</span>
              <span class="value">${i}${H(a,()=>j` / ${a}`)}</span>
            </div>
            <div class="info-item">
              <span class="label">${J(He,{size:12})} Poblacion</span>
              <span class="value">${o}</span>
            </div>
            <div class="info-item">
              <span class="label">${J(Be,{size:12})} Area</span>
              <span class="value">${s}</span>
            </div>
          </div>

          ${H(u.length,()=>j`
            <div class="tags-section">
              <div class="tags-label">${J(Re,{size:12})} Idiomas</div>
              <div class="tags">
                ${K(u,e=>j`
                  <app-badge variant="info">${e}</app-badge>
                `)}
              </div>
            </div>
          `)}

          ${H(d.length,()=>j`
            <div class="tags-section">
              <div class="tags-label">${J(Fe,{size:12})} Monedas</div>
              <div class="tags">
                ${K(d,e=>j`
                  <app-badge variant="success">${e.name} (${e.symbol||`?`})</app-badge>
                `)}
              </div>
            </div>
          `)}

          ${H(l.length,()=>j`
            <div class="tags-section">
              <div class="tags-label">${J(Pe,{size:12})} Zonas horarias</div>
              <div class="tags">
                ${K(l,e=>j`
                  <app-badge>${e}</app-badge>
                `)}
              </div>
            </div>
          `)}

          <div class="extra-slot">
            <slot name="extra"></slot>
          </div>
        </div>
      </div>
    `}_onBack(){this.dispatchEvent(new CustomEvent(`country-detail-back`,{bubbles:!0,composed:!0}))}};customElements.define(`country-detail`,_t);var vt=`:host{min-height:60vh;display:block}.explorer-search{margin-bottom:24px}.results-count{color:var(--color-text-light,#666);margin-bottom:8px;font-size:.85rem}@media (width<=480px){.explorer-search{margin-bottom:16px}}`,yt=class extends V{static properties={_countries:{type:Array,state:!0},_selectedCountry:{type:Object,state:!0},_loading:{type:Boolean,state:!0},_error:{type:String,state:!0},_lastQuery:{type:String,state:!0}};static styles=a(vt);constructor(){super(),this._countries=[],this._selectedCountry=null,this._loading=!1,this._error=``,this._lastQuery=``}disconnectedCallback(){super.disconnectedCallback(),ke.cancelPending()}render(){let e=this._selectedCountry!==null;return j`
      <div style=${Ee({display:e?`none`:`block`})} role="search" aria-label="Explorador de paises">
        <div class="explorer-search">
          <country-search
            @country-search-change=${this._onSearch}
          ></country-search>
        </div>

        <div aria-live="polite" aria-atomic="true">
          ${H(this._lastQuery&&!this._loading&&!this._error,()=>j`
            <div class="results-count">
              ${this._countries.length} resultado(s) para "${this._lastQuery}"
            </div>
          `)}
        </div>

        <country-list
          .countries=${this._countries}
          .loading=${this._loading}
          .error=${this._error}
          @country-select=${this._onCountrySelect}
          @country-retry=${this._onRetry}
        ></country-list>
      </div>

      ${H(e,()=>j`
        <country-detail
          .country=${this._selectedCountry}
          @country-detail-back=${this._onBack}
        ></country-detail>
      `)}
    `}async _onSearch(e){let t=e.detail.query;if(this._lastQuery=t,!t){this._countries=[];return}this._loading=!0,this._error=``;try{let e=await ke.searchByName(t);e!==null&&(this._countries=e)}catch{this._error=`Error al buscar paises. Intenta de nuevo.`}finally{this._loading=!1}}_onCountrySelect(e){this._selectedCountry=e.detail.country}_onBack(){this._selectedCountry=null}_onRetry(){this._lastQuery&&this._onSearch({detail:{query:this._lastQuery}})}};customElements.define(`country-explorer`,yt);