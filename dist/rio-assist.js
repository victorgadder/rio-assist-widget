(function(){"use strict";var mi;var g=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Pt=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),Nn=new WeakMap;let Qn=class{constructor(e,n,u){if(this._$cssResult$=!0,u!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Pt&&e===void 0){const u=n!==void 0&&n.length===1;u&&(e=Nn.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),u&&Nn.set(n,e))}return e}toString(){return this.cssText}};const ji=t=>new Qn(typeof t=="string"?t:t+"",void 0,Nt),je=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((u,i,r)=>u+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new Qn(n,t,Nt)},qi=(t,e)=>{if(Pt)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const u=document.createElement("style"),i=pt.litNonce;i!==void 0&&u.setAttribute("nonce",i),u.textContent=n.cssText,t.appendChild(u)}},zn=Pt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const u of e.cssRules)n+=u.cssText;return ji(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vi,defineProperty:Xi,getOwnPropertyDescriptor:Yi,getOwnPropertyNames:Gi,getOwnPropertySymbols:Wi,getPrototypeOf:Ji}=Object,Ae=globalThis,Hn=Ae.trustedTypes,Zi=Hn?Hn.emptyScript:"",Qt=Ae.reactiveElementPolyfillSupport,qe=(t,e)=>t,zt={toAttribute(t,e){switch(e){case Boolean:t=t?Zi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},jn=(t,e)=>!Vi(t,e),qn={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:jn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ae.litPropertyMetadata??(Ae.litPropertyMetadata=new WeakMap);let De=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=qn){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const u=Symbol(),i=this.getPropertyDescriptor(e,u,n);i!==void 0&&Xi(this.prototype,e,i)}}static getPropertyDescriptor(e,n,u){const{get:i,set:r}=Yi(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const s=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(e,s,u)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qn}static _$Ei(){if(this.hasOwnProperty(qe("elementProperties")))return;const e=Ji(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qe("properties"))){const n=this.properties,u=[...Gi(n),...Wi(n)];for(const i of u)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[u,i]of n)this.elementProperties.set(u,i)}this._$Eh=new Map;for(const[n,u]of this.elementProperties){const i=this._$Eu(n,u);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const u=new Set(e.flat(1/0).reverse());for(const i of u)n.unshift(zn(i))}else e!==void 0&&n.push(zn(e));return n}static _$Eu(e,n){const u=n.attribute;return u===!1?void 0:typeof u=="string"?u:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const u of n.keys())this.hasOwnProperty(u)&&(e.set(u,this[u]),delete this[u]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qi(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var u;return(u=n.hostConnected)==null?void 0:u.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var u;return(u=n.hostDisconnected)==null?void 0:u.call(n)})}attributeChangedCallback(e,n,u){this._$AK(e,u)}_$ET(e,n){var r;const u=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,u);if(i!==void 0&&u.reflect===!0){const o=(((r=u.converter)==null?void 0:r.toAttribute)!==void 0?u.converter:zt).toAttribute(n,u.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){var r,o;const u=this.constructor,i=u._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=u.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:zt;this._$Em=i;const c=a.fromAttribute(n,s.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(e,n,u){var i;if(e!==void 0){const r=this.constructor,o=this[e];if(u??(u=r.getPropertyOptions(e)),!((u.hasChanged??jn)(o,n)||u.useDefault&&u.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(r._$Eu(e,u))))return;this.C(e,n,u)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:u,reflect:i,wrapped:r},o){u&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??n??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||u||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var u;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(u=this._$EO)==null||u.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(n)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(u=>{var i;return(i=u.hostUpdated)==null?void 0:i.call(u)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};De.elementStyles=[],De.shadowRootOptions={mode:"open"},De[qe("elementProperties")]=new Map,De[qe("finalized")]=new Map,Qt==null||Qt({ReactiveElement:De}),(Ae.reactiveElementVersions??(Ae.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=globalThis,gt=Ve.trustedTypes,Vn=gt?gt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xn="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Yn="?"+pe,Ki=`<${Yn}>`,ve=document,Xe=()=>ve.createComment(""),Ye=t=>t===null||typeof t!="object"&&typeof t!="function",Ht=Array.isArray,$i=t=>Ht(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",jt=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gn=/-->/g,Wn=/>/g,we=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jn=/'/g,Zn=/"/g,Kn=/^(?:script|style|textarea|title)$/i,er=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),w=er(1),le=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),$n=new WeakMap,Ee=ve.createTreeWalker(ve,129);function eu(t,e){if(!Ht(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vn!==void 0?Vn.createHTML(e):e}const tr=(t,e)=>{const n=t.length-1,u=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=Ge;for(let s=0;s<n;s++){const a=t[s];let c,d,f=-1,p=0;for(;p<a.length&&(o.lastIndex=p,d=o.exec(a),d!==null);)p=o.lastIndex,o===Ge?d[1]==="!--"?o=Gn:d[1]!==void 0?o=Wn:d[2]!==void 0?(Kn.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=we):d[3]!==void 0&&(o=we):o===we?d[0]===">"?(o=i??Ge,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?we:d[3]==='"'?Zn:Jn):o===Zn||o===Jn?o=we:o===Gn||o===Wn?o=Ge:(o=we,i=void 0);const A=o===we&&t[s+1].startsWith("/>")?" ":"";r+=o===Ge?a+Ki:f>=0?(u.push(c),a.slice(0,f)+Xn+a.slice(f)+pe+A):a+pe+(f===-2?s:A)}return[eu(t,r+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),u]};class We{constructor({strings:e,_$litType$:n},u){let i;this.parts=[];let r=0,o=0;const s=e.length-1,a=this.parts,[c,d]=tr(e,n);if(this.el=We.createElement(c,u),Ee.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=Ee.nextNode())!==null&&a.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Xn)){const p=d[o++],A=i.getAttribute(f).split(pe),h=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:h[2],strings:A,ctor:h[1]==="."?ur:h[1]==="?"?ir:h[1]==="@"?rr:bt}),i.removeAttribute(f)}else f.startsWith(pe)&&(a.push({type:6,index:r}),i.removeAttribute(f));if(Kn.test(i.tagName)){const f=i.textContent.split(pe),p=f.length-1;if(p>0){i.textContent=gt?gt.emptyScript:"";for(let A=0;A<p;A++)i.append(f[A],Xe()),Ee.nextNode(),a.push({type:2,index:++r});i.append(f[p],Xe())}}}else if(i.nodeType===8)if(i.data===Yn)a.push({type:2,index:r});else{let f=-1;for(;(f=i.data.indexOf(pe,f+1))!==-1;)a.push({type:7,index:r}),f+=pe.length-1}r++}}static createElement(e,n){const u=ve.createElement("template");return u.innerHTML=e,u}}function Re(t,e,n=t,u){var o,s;if(e===le)return e;let i=u!==void 0?(o=n._$Co)==null?void 0:o[u]:n._$Cl;const r=Ye(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),r===void 0?i=void 0:(i=new r(t),i._$AT(t,n,u)),u!==void 0?(n._$Co??(n._$Co=[]))[u]=i:n._$Cl=i),i!==void 0&&(e=Re(t,i._$AS(t,e.values),i,u)),e}class nr{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:u}=this._$AD,i=((e==null?void 0:e.creationScope)??ve).importNode(n,!0);Ee.currentNode=i;let r=Ee.nextNode(),o=0,s=0,a=u[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new Je(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new or(r,this,e)),this._$AV.push(c),a=u[++s]}o!==(a==null?void 0:a.index)&&(r=Ee.nextNode(),o++)}return Ee.currentNode=ve,i}p(e){let n=0;for(const u of this._$AV)u!==void 0&&(u.strings!==void 0?(u._$AI(e,u,n),n+=u.strings.length-2):u._$AI(e[n])),n++}}class Je{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,u,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=u,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Re(this,e,n),Ye(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$i(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(ve.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:u}=e,i=typeof u=="number"?this._$AC(e):(u.el===void 0&&(u.el=We.createElement(eu(u.h,u.h[0]),this.options)),u);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(n);else{const o=new nr(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(e){let n=$n.get(e.strings);return n===void 0&&$n.set(e.strings,n=new We(e)),n}k(e){Ht(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let u,i=0;for(const r of e)i===n.length?n.push(u=new Je(this.O(Xe()),this.O(Xe()),this,this.options)):u=n[i],u._$AI(r),i++;i<n.length&&(this._$AR(u&&u._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var u;for((u=this._$AP)==null?void 0:u.call(this,!1,!0,n);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,u,i,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,u.length>2||u[0]!==""||u[1]!==""?(this._$AH=Array(u.length-1).fill(new String),this.strings=u):this._$AH=T}_$AI(e,n=this,u,i){const r=this.strings;let o=!1;if(r===void 0)e=Re(this,e,n,0),o=!Ye(e)||e!==this._$AH&&e!==le,o&&(this._$AH=e);else{const s=e;let a,c;for(e=r[0],a=0;a<r.length-1;a++)c=Re(this,s[u+a],n,a),c===le&&(c=this._$AH[a]),o||(o=!Ye(c)||c!==this._$AH[a]),c===T?e=T:e!==T&&(e+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ur extends bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}class ir extends bt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}}class rr extends bt{constructor(e,n,u,i,r){super(e,n,u,i,r),this.type=5}_$AI(e,n=this){if((e=Re(this,e,n,0)??T)===le)return;const u=this._$AH,i=e===T&&u!==T||e.capture!==u.capture||e.once!==u.once||e.passive!==u.passive,r=e!==T&&(u===T||i);i&&this.element.removeEventListener(this.name,this,u),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class or{constructor(e,n,u){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=u}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}}const qt=Ve.litHtmlPolyfillSupport;qt==null||qt(We,Je),(Ve.litHtmlVersions??(Ve.litHtmlVersions=[])).push("3.3.1");const sr=(t,e,n)=>{const u=(n==null?void 0:n.renderBefore)??e;let i=u._$litPart$;if(i===void 0){const r=(n==null?void 0:n.renderBefore)??null;u._$litPart$=i=new Je(e.insertBefore(Xe(),r),r,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis;let Ze=class extends De{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sr(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return le}};Ze._$litElement$=!0,Ze.finalized=!0,(mi=ye.litElementHydrateSupport)==null||mi.call(ye,{LitElement:Ze});const Vt=ye.litElementPolyfillSupport;Vt==null||Vt({LitElement:Ze}),(ye.litElementVersions??(ye.litElementVersions=[])).push("4.2.1");const ar=je`
  .floating-button {
    position: absolute;
    pointer-events: auto;
    right: 0;
    bottom: 32px;
    width: 64px;
    height: 64px;
    padding: 0;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    color: #fff;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.2px;
    border-radius: 32px 0 0 32px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    cursor: grab;
    user-select: none;
    touch-action: none;
    overflow: hidden;
    visibility: visible;
    transition: width 180ms ease, box-shadow 180ms ease, opacity 0ms linear 350ms,
      visibility 0ms linear 350ms;
  }

  .floating-button__content {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .floating-button__icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: block;
  }

  .floating-button__box-bg {
    position: absolute;
    top: 50%;
    left: 57px;
    width: 76px;
    height: 76px;
    object-fit: contain;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-50%) translateX(-6px);
    transition: opacity 160ms ease, transform 160ms ease;
    z-index: 1;
  }

  .floating-button .floating-button__label-image {
    height: 28px;
    width: auto;
    max-width: 0;
    display: block;
    object-fit: contain;
    pointer-events: none;
    opacity: 0;
    transform: translateX(-6px);
    transition: opacity 160ms ease, transform 160ms ease;
  }

  .floating-button:hover {
    width: 200px;
    padding: 0 26px 0 10px;
    justify-content: flex-start;
    gap: 8px;
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.3);
  }

  .floating-button:hover .floating-button__content {
    gap: 8px;
  }

  .floating-button:hover .floating-button__box-bg {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

  .floating-button:hover .floating-button__label-image {
    max-width: 200px;
    opacity: 1;
    transform: translateX(0);
  }

  .floating-button:active {
    cursor: grabbing;
  }

  .canvas--fullscreen .floating-button {
    opacity: 0;
    pointer-events: none;
  }

  .canvas--open .floating-button {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition-delay: 0s;
  }
`,cr=je`
  .canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .panel {
    --header-height: 115px;
    pointer-events: auto;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(600px, 100vw);
    max-width: 90vw;
    background: #fff;
    box-shadow: -24px 0 48px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.35s ease;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .panel.open {
    transform: translateX(0);
  }

  .panel-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 8px 15px 28px;
    border-bottom: 1px solid #e4eaee;
  }

  .panel-header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .panel-title {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    color: #1c2a33;
    padding-left: 0px;
  }

  .panel-header__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .conversations-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    padding-left: 0px;
    border: none;
    background: transparent;
    color: #008b9a;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .conversations-button img {
    width: 24px;
    height: 24px;
  }

  .panel-header__icons {
    display: inline-flex;
    gap: 10px;
    align-items: center;
    padding-right: 12px;
  }

  .panel-header__icon-button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: grid;
    place-items: center;
  }

  .conversations-plus-button {
    margin-right: 4px;
  }

  .panel-header__icon-button img {
    width: 28px;
    height: 28px;
  }

  .panel-body {
    flex: 1;
    padding: 48px 32px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
    min-height: 0;
    overflow: hidden;
  }

  .panel-content {
    flex: 1;
    width: 100%;
    overflow-y: auto;
  }

  .panel-content--empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .panel-content--consultant {
    display: block;
  }

  .hero-card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    color: #25323d;
    text-align: center;
    width: 100%;
    max-width: 360px;
    min-height: 280px;
  }

  .hero-card__icon {
    width: 120px;
    height: 120px;
    display: block;
    margin-bottom: 8px;
  }

  .hero-card h3 {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    white-space: nowrap;
    color: #2a3740;
    margin: 0;
  }

  .consultant-agent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .consultant-agent__button,
  .consultant-agent__option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 8px 16px;
    min-height: 34px;
    border: 1px solid #30b4c0;
    border-radius: 4px;
    background: transparent;
    color: #30b4c0;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    white-space: normal;
    text-align: left;
    word-break: break-word;
    max-width: 100%;
    box-sizing: border-box;
  }

  .consultant-agent__button:focus-visible,
  .consultant-agent__option:focus-visible {
    outline: 2px solid #30b4c0;
    outline-offset: 2px;
  }

  .consultant-agent__intro {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2a3740;
    text-align: center;
    margin-top: 4px;
  }

  .consultant-agent__options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
  }

  .consultant-prompt {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: flex-start;
  }

  .consultant-prompt__text {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2a3740;
    text-align: left;
  }

  .consultant-prompt__options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: flex-start;
  }

  .conversation {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .message {
    border-radius: 16px;
    border: 1px solid #e4eaee;
    padding: 10px 16px;
    max-width: 90%;
    background: #fff;
    color: #1f2f36;
    font-size: 15px;
  }

  .message__content {
    line-height: 1.35;
  }

  .message__actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 32px;
  }

  .message__action-button {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .message__action-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .message__action-button--liked {
    background: #1b8dd9;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--unliked {
    background: #d64b4b;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--copied {
    background: #1aa1a8;
    animation: action-pop 0.2s ease;
  }

  .message__action-button--liked img,
  .message__action-button--unliked img,
  .message__action-button--copied img {
    filter: brightness(0) invert(1);
  }

  .message__action-button img {
    width: 32px;
    height: 32px;
  }

  .message__copy-feedback {
    font-size: 12px;
    color: #1aa1a8;
    font-weight: 600;
    margin-left: 6px;
  }

  @keyframes action-pop {
    0% {
      transform: scale(0.92);
    }
    70% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }

  .consultant-follow-up {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .consultant-follow-up__text {
    margin: 0;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #1f2f36;
  }

  .consultant-follow-up__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    width: 100%;
  }

  .message__content p,
  .message__content ul,
  .message__content ol {
    margin: 4px 0;
  }

  .message__content pre {
    background: #0d161b;
    color: #f3f7fb;
    border-radius: 8px;
    padding: 10px;
    overflow-x: auto;
    margin: 6px 0;
    font-size: 14px;
  }

  .message__content code {
    background: #f1f4f7;
    padding: 2px 6px;
    border-radius: 6px;
  }

  .message__content pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    border-radius: 0;
  }

  .message__content blockquote {
    border-left: 3px solid #cfd6dc;
    margin: 6px 0;
    padding-left: 10px;
    color: #4b5a65;
  }

  .message__content ul,
  .message__content ol {
    padding-left: 20px;
  }

  .message--user {
    align-self: flex-end;
    background: #e5ebf0;
    border-color: #cfd6dc;
    color: #1f2f36;
    padding: 8px 10px;
  }

  .message time {
    display: block;
    font-size: 11px;
    color: #8a98a4;
    text-align: right;
  }

  .typing {
    font-style: italic;
    opacity: 0.75;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .typing::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--accent-color, #008B9A);
    border-radius: 50%;
    border-top-color: transparent;
    animation: typing-spin 0.8s linear infinite;
  }

  @keyframes typing-spin {
    to {
      transform: rotate(360deg);
    }
  }

  .typing__dots {
    display: inline-flex;
    gap: 2px;
    margin-left: 4px;
  }

  .typing__dots span {
    display: inline-block;
    animation: typing-bounce 1.2s infinite;
  }

  .typing__dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing__dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typing-bounce {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.25;
    }
    40% {
      transform: translateY(-4px);
      opacity: 1;
    }
  }

  .message--user time {
    margin-top: 3px;
  }

  .panel-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-top: 8px;
    margin-top: auto;
  }

  .suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .suggestions-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 6px;
  }

  .short-answer-toggle {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: none;
    background: transparent;
    color: #1f2f36;
    border-radius: 999px;
    padding: 8px 12px 8px 10px;
    font-weight: 600;
    box-shadow: none;
    transition: color 0.2s ease;
  }

  .short-answer-toggle:focus-visible {
    outline: 2px solid var(--accent-color, #008b9a);
    outline-offset: 2px;
  }

  .short-answer-toggle__track {
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background: #c7d0d9;
    position: relative;
    transition: background-color 0.2s ease;
  }

  .short-answer-toggle__track--on {
    background: #008b9a;
  }

  .short-answer-toggle__thumb {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease;
  }

  .short-answer-toggle__track--on .short-answer-toggle__thumb {
    transform: translateX(18px);
  }

  .short-answer-toggle__label {
    font-size: 14px;
    white-space: nowrap;
  }

  .short-answer-toggle--header {
    padding: 6px 10px 6px 8px;
    font-size: 13px;
  }

  .suggestions-label {
    text-align: center;
    font-size: 14px;
    color: #a7afbb;
    margin-bottom: 12px;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0;
  }

  .suggestion {
    border-radius: 999px;
    border: 1px solid #d6e2e6;
    padding: 0 16px;
    background: #fff;
    font-size: 14px;
    line-height: 24px;
    min-height: 24px;
    color: #a7afbb;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    white-space: nowrap;
  }

  .attachments {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
    padding: 0px 6px 2px;
    box-sizing: border-box;
    overflow: visible;
  }

  .attachment-card {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border: 1px solid #d6e2e6;
    border-radius: 12px;
    background: #fff;
    max-width: 100%;
    flex: 0 0 auto;
    position: relative;
  }

  .attachment-card__icon {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: inline-block;
    background-color: #1b8dd9;
    background-image: var(--file-icon);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex-shrink: 0;
  }

  .attachment-card--text .attachment-card__icon {
    background-color: #1b8dd9;
  }

  .attachment-card--sheet .attachment-card__icon {
    background-color: #2e9d63;
  }

  .attachment-card--pdf .attachment-card__icon {
    background-color: #d64b4b;
  }

  .attachment-card--audio .attachment-card__icon {
    background-color: #1aa1a8;
  }

  .attachment-card__meta {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 2px;
  }

  .attachment-card__meta strong {
    font-size: 13px;
    font-weight: 700;
    color: #1f2f36;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .attachment-card__meta span {
    font-size: 11px;
    color: #7b8b97;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .attachment-card__remove {
    width: 19.2px;
    height: 19.2px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex-shrink: 0;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  .attachment-card__remove img {
    width: 19.2px;
    height: 19.2px;
  }

  .attachment-thumb {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    flex: 0 0 auto;
    border: 1px solid #d6e2e6;
    background: #fff;
  }

  .attachment-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .attachment-thumb__remove {
    width: 19.2px;
    height: 19.2px;
    border: none;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 2px;
    right: 2px;
  }

  .attachment-thumb__remove img {
    width: 19.2px;
    height: 19.2px;
  }

  .attachment-error {
    margin: 0;
    font-size: 12px;
    color: #d64b4b;
    align-self: flex-start;
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    width: 100%;
  }

  .voice-recording-label {
    flex: 1;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 18px;
    color: #1f2f36;
  }

  .voice-recording-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a4afbb;
    border-radius: 28px;
    padding: 8px 8px 8px 16px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    min-height: 56px;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
  }

  .input-shell--has-attachments {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    height: auto;
    border-radius: 28px;
    padding: 12px;
  }

  .input-shell--has-attachments .input-row {
    padding: 0 4px 2px;
  }

  .file-input {
    display: none;
  }

  form input,
  form textarea {
    border: none;
    flex: 1;
    font: inherit;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
  }

  form textarea {
    resize: none;
    background: transparent;
    line-height: 1.35;
    overflow-y: hidden;
    min-height: 22px;
    max-height: 280px;
    padding: 0px 0;
  }

  form input::placeholder,
  form textarea::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #a7afbb;
  }

  .input-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .input-button img {
    width: 40px;
    height: 40px;
  }

  .input-button--file img {
    width: 32px;
    height: 32px;
  }

  .input-button--voice img {
    width: 32px;
    height: 32px;
  }

  .input-button--voice-action img {
    width: 32px;
    height: 32px;
  }

  .input-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .voice-transcript {
    margin: 0;
    padding: 0 6px;
    font-size: 14px;
    color: #1f2f36;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
  }

  .voice-transcript--unavailable {
    color: #8a98a4;
    font-style: italic;
  }

  .voice-input-locked {
    flex: 1;
    min-height: 22px;
    font-size: 14px;
    color: #1f2f36;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-style: italic;
    padding: 2px 0;
  }

  .voice-input-locked--error {
    color: #d64b4b;
  }

  .footnote {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 12px;
    color: #8a98a4;
    text-align: center;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .error-banner {
    width: 100%;
    padding: 10px 14px;
    border-radius: 12px;
    background: #fff4f2;
    color: #a33c3c;
    font-size: 13px;
    text-align: center;
  }

  .close-button {
    background: transparent;
    border: none;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    padding: 0;
  }

  .close-button img {
    width: 16px;
    height: 16px;
  }
`,lr=je`
  .fullscreen-shell {
    position: fixed;
    inset: 0;
    background: #f5f7fa;
    display: flex;
    flex-direction: row;
    pointer-events: auto;
    z-index: 3;
    height: 100vh;
  }

  .fullscreen-shell__rail {
    width: 50px;
    background: #0d1117;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0 12px;
  }

  .fullscreen-shell__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }

  .rail-button {
    width: 38px;
    height: 38px;
    border: none;
    background: transparent;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #fff;
    padding: 0;
  }

  .rail-button img {
    width: 22px;
    height: 22px;
  }

  .rail-button svg {
    width: 18px;
    height: 18px;
  }

  .fullscreen-header {
    padding: 0 12px 0 4px;
    display: grid;
    grid-template-columns: 300px 1fr 138px;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e0e6eb;
    height: 50px;
    column-gap: 8px;
  }

  .fullscreen-header__title {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 16px;
    align-self: stretch;
    justify-content: center;
  }

  .fullscreen-header__tabs {
    display: flex;
    align-items: stretch;
    height: 100%;
    position: relative;
    padding-left: 8px;
  }

  .fullscreen-header__brand {
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0;
  }

  .fullscreen-header__brand-row {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    justify-content: space-between;
  }

  .fullscreen-header__brand-toggle {
    border: none;
    background: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #1f2f36;
    transition: transform 0.2s ease, background-color 0.2s ease;
    margin-left: auto;
  }

  .fullscreen-header__brand-toggle--open {
    transform: rotate(180deg);
  }

  .fullscreen-header__brand-toggle svg {
    width: 18px;
    height: 18px;
  }

  .fullscreen-header__tab {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #1f2f36;
    text-transform: uppercase;
    border-bottom: 3px solid #000;
    padding: 0 0 0px;
    display: inline-flex;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    line-height: 1;
  }

  .fullscreen-header__actions {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    justify-self: end;
    height: 100%;
    justify-content: flex-end;
    padding-right: 4px;
  }

  .fullscreen-header__icon {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .fullscreen-header__icon img {
    width: 24px;
    height: 24px;
  }

  .fullscreen-exit-inline {
    position: absolute;
    top: 64px;
    right: 14px;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    padding: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 1;
  }

  .fullscreen-exit-inline img {
    width: 28px;
    height: 28px;
  }

  .fullscreen-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    min-height: 0;
    background: linear-gradient(180deg, #eef3f6 0%, #fff 100%);
  }

  .fullscreen-utility-bar {
    position: absolute;
    top: 60px;
    right: 52px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    z-index: 2;
  }

  .fullscreen-chat {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px clamp(24px, 4vw, 56px) 18px;
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-width: none;
    margin: 0;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-body {
    max-width: none;
    width: 100%;
    padding: 12px clamp(20px, 3vw, 44px) 12px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-footer {
    max-width: none;
    width: 100%;
    padding: 0 clamp(16px, 3vw, 32px);
    box-sizing: border-box;
  }

  .fullscreen-chat form {
    max-width: none;
  }

  .fullscreen-chat .panel-content {
    padding-right: clamp(12px, 2vw, 24px);
    box-sizing: border-box;
  }
`,dr=je`
  .conversations-panel {
    position: absolute;
    top: var(--header-height, 128px);
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
  }

  .conversations-panel--sidebar {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    height: 100%;
    width: 300px;
    background: #eef2f6;
    border-right: 1px solid #d4dee6;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .conversations-panel--open {
    pointer-events: auto;
  }

  .conversations-panel__surface {
    width: 100%;
    height: 100%;
    background: #d0d8de;
    padding: 12px 32px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transform: translateX(100%);
    transition: transform 0.35s ease;
  }

  .conversations-panel:not(.conversations-panel--sidebar) .conversations-panel__surface {
    padding: 12px 12px 24px 32px;
  }

  .conversations-panel--open .conversations-panel__surface {
    transform: translateX(0);
  }

  .conversations-panel__surface--sidebar {
    transform: none;
    transition: none;
    background: transparent;
    padding: 12px 0 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 0;
    overflow: hidden;
  }

  .recent-conversations-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 6px 12px 6px 16px;
    border: none;
    background: transparent;
    color: #1f2f36;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    width: calc(100% - 24px);
    cursor: pointer;
  }

  .recent-conversations-button img {
    width: 24px;
    height: 24px;
  }

  .conversation-search {
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #b7c3cd;
    padding: 0 14px;
    background: rgba(255, 255, 255, 0.8);
    gap: 10px;
    width: 530px;
    height: 34px;
    box-sizing: border-box;
  }

  .conversations-panel--sidebar .conversation-search {
    width: calc(100% - 32px);
    height: 34px;
    background: #fff;
    border-radius: 6px;
    border-color: #c8d4dc;
    box-sizing: border-box;
    margin: 0 16px;
  }

  .conversation-search input {
    border: none;
    background: transparent;
    flex: 1;
    height: 100%;
    font-size: 14px;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-style: italic;
    color: #a4afbb;
    outline: none;
  }

  .search-icon {
    width: 16px;
    height: 16px;
  }

  .conversation-list {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 0;
    box-sizing: border-box;
  }

  .conversations-panel:not(.conversations-panel--sidebar) .conversation-list {
    margin-right: -12px;
    padding-right: 12px;
  }

  .conversation-list-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
  }

  .conversation-list-wrapper--sidebar {
    padding: 8px 0 0 0;
  }

  .conversations-panel--sidebar .conversation-list {
    width: 100%;
    padding-left: 16px;
    padding-right: 14px;
    padding-top: 10px;
    overflow-y: auto;
    min-height: 0;
    scrollbar-width: none;
  }

  .conversations-panel--sidebar .conversation-list::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .conversation-scrollbar {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: calc(100% - 8px);
    border-radius: 999px;
    background: rgba(125, 143, 162, 0.15);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  .conversation-scrollbar--visible {
    opacity: 1;
    pointer-events: auto;
  }

  .conversation-list-wrapper--sidebar:hover .conversation-scrollbar {
    opacity: 1;
  }

  .conversation-scrollbar__thumb {
    position: absolute;
    width: 100%;
    border-radius: 999px;
    background: #7d8fa2;
    min-height: 12px;
    display: block;
    cursor: pointer;
  }

  .conversation-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 6px;
    border-radius: 8px;
    color: #1f2f36;
    font-size: 15px;
    position: relative;
    height: 40px;
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  .conversations-panel:not(.conversations-panel--sidebar) .conversation-item {
    padding: 0 0 0 6px;
  }

  .conversations-panel--sidebar .conversation-item {
    border-radius: 8px;
    background: transparent;
    padding: 6px 8px 6px 6px;
    height: 66px;
    align-items: center;
  }

  .conversations-panel--sidebar .conversation-item__text {
    width: 236px;
    min-height: 18px;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }

  .conversation-item__text {
    flex: 1;
    padding-right: 16px;
    transition: color 0.2s ease;
  }

  .conversation-item:hover .conversation-item__text,
  .conversation-item:focus-visible .conversation-item__text {
    color: var(--accent-color, #008b9a);
  }

  .conversation-item:hover,
  .conversation-item:focus-visible {
    background: rgba(0, 139, 154, 0.08);
  }

  .conversation-menu-button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    flex-shrink: 0;
  }

  .conversation-menu-button img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    display: block;
  }

  .conversation-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 12px;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    min-width: 140px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 3;
  }

  .conversation-menu--above {
    top: auto;
    bottom: calc(100% + 8px);
  }

  .conversation-menu button {
    background: transparent;
    border: none;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: #1f2f36;
    text-align: left;
    width: 100%;
  }

  .conversation-menu img {
    width: 16px;
    height: 16px;
  }

  .conversation-loading {
    font-size: 13px;
    color: #4b5b68;
    padding: 6px 12px 2px;
  }

  .conversation-error {
    font-size: 13px;
    color: #a33c3c;
    padding: 6px 12px 2px;
  }

  .new-conversation-cta {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-8px);
    transition: max-height 0.25s ease, opacity 0.2s ease, transform 0.25s ease;
    padding: 0 16px;
  }

  .new-conversation-cta.open {
    max-height: 96px;
    opacity: 1;
    transform: translateY(0);
    margin-bottom: 4px;
  }

  .new-conversation-cta__button {
    width: 100%;
    height: 34px;
    border-radius: 4px;
    border: 1px solid #30b4c0;
    background: #fff;
    color: #30b4c0;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  }

  .new-conversation-cta__button img {
    width: 24px;
    height: 24px;
  }

  .new-conversation-cta__button:disabled,
  .new-conversation-cta__button[aria-disabled='true'] {
    opacity: 0.45;
    cursor: not-allowed;
    border-color: #7bc1d3ff;
    color: #88c5d3ff;
  }
`,fr=[je`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

  :host {
    position: fixed;
    inset: 0;
    font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: #1c2a33;
    z-index: 2147483000;
  }

  button {
    font: inherit;
    border: none;
    cursor: pointer;
    border-radius: 999px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .dialog-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    display: grid;
    place-items: center;
    z-index: 2147484000;
    pointer-events: auto;
  }

  .dialog {
    width: auto;
    min-width: 360px;
    max-width: calc(100% - 32px);
    box-sizing: border-box;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.22);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .dialog__message {
    margin: 0;
    font-size: 16px;
    color: #1f2f36;
    text-align: center;
  }

  .dialog__message--title {
    font-weight: 700;
    text-transform: uppercase;
  }

  .dialog__message--error {
    color: #d9534f;
    white-space: pre-wrap;
  }

  .dialog__input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #c7d0d9;
    font: inherit;
    outline: none;
  }

  .dialog__input:focus {
    border-color: var(--accent-color, #008b9a);
    box-shadow: 0 0 0 2px rgba(0, 139, 154, 0.2);
  }

  .dialog__actions {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: nowrap;
    align-items: center;
  }

  .dialog__button {
    min-width: max-content;
    height: 36px;
    padding: 0 16px;
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }

  .dialog__button--ghost {
    background: #fff;
    border-color: #c7d0d9;
    color: #1f2f36;
  }

  .dialog__button--danger {
    background: #d9534f;
    color: #fff;
  }

  .dialog__button--primary {
    background: #008b9a;
    color: #fff;
  }
`,ar,cr,lr,dr];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2},Yt=t=>(...e)=>({_$litDirective$:t,values:e});let Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,u){this._$Ct=e,this._$AM=n,this._$Ci=u}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=Yt(class extends Gt{constructor(t){var e;if(super(t),t.type!==Xt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var u,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((u=this.nt)!=null&&u.has(r))&&this.st.add(r);return this.render(e)}const n=t.element.classList;for(const r of this.st)r in e||(n.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return le}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tu="important",hr=" !"+tu,nu=Yt(class extends Gt{constructor(t){var e;if(super(t),t.type!==Xt.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const u=t[n];return u==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${u};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const u of this.ft)e[u]==null&&(this.ft.delete(u),u.includes("-")?n.removeProperty(u):n[u]=null);for(const u in e){const i=e[u];if(i!=null){this.ft.add(u);const r=typeof i=="string"&&i.endsWith(hr);u.includes("-")||r?n.setProperty(u,r?i.slice(0,-11):i,r?tu:""):n[u]=i}}return le}}),Ar=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,pr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,gr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,br=t=>{const e=t.floatingButtonIconUrl.trim()||Ar,n=t.floatingButtonLabelIconUrl.trim()||pr,u=t.floatingButtonBackgroundIconUrl.trim()||gr;return w`
  <button
    class="floating-button"
    style=${nu({background:t.accentColor,bottom:`${t.floatingButtonOffset}px`})}
    @click=${i=>t.handleFloatingButtonClick(i)}
    @pointerdown=${i=>t.handleFloatingButtonPointerDown(i)}
    @pointermove=${i=>t.handleFloatingButtonPointerMove(i)}
    @pointerup=${i=>t.handleFloatingButtonPointerUp(i)}
    @pointercancel=${i=>t.handleFloatingButtonPointerCancel(i)}
    aria-expanded=${t.open}
  >
    <img
      class="floating-button__box-bg"
      src=${u}
      alt=""
      aria-hidden="true"
    />
    <span class="floating-button__content">
      <img class="floating-button__icon" src=${e} alt="" aria-hidden="true" />
      <img
        class="floating-button__label-image"
        src=${n}
        alt=${t.buttonLabel}
      />
    </span>
  </button>
`};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt extends Gt{constructor(e){if(super(e),this.it=T,e.type!==Xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===le)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Wt.directiveName="unsafeHTML",Wt.resultType=1;const mr=Yt(Wt),xr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7dx/ThNBFAfw75vdVkJI7BHqCcAT0Cb8CH/RlagpxtiewHIDegLgBCwhUhMl638omFBugDdYb1D/8A+hnXEGrAFR2BFxH+R9EhJoh6T5drq7nfdmASGEEEKIW4nAzHqSlO4NRiuGqOT+1nqQPn881wVTbAJ0wY1g7KV9QS0DlM4/a1Kt0X62MBODGRYBdpKdMhDs25dTvmLocj2aboMRBQYMgiRDeM7y1vb7FhjJfQa+2t5tKEXrWcfbj3fvG8IHzajaAwO5z0Ab3guf8fYdLxX1cQ1M5B6gDWQCnpTCJJjIPcCLZ9zbhcMM9D6WaYMvYCL/GWj0ATwRmS6YyP8yhtSq13hQuhjNvgMTuQdoL4y7xtBa1vEGgyUwwuJCevHRVCtLiPaEs8Rp9jmsFhM6yW7DptSyB7nx4WME6mmjP4VUaD2Jqodght1qjLOe7NuFhf5EANP7ikLK5VuHEEIIIYQQQog7gdV34ZOuBD3WsGtEk3YRYcIV1N1Pvz/Y4NqdwCbAzTc7lUIYJpfUSLpAv1mP5lIwwiLArbcfahSo5OqRbkYOqpxCzH1B1bV1UEAr2UZTGQgzF+H/BwZFpaCVsa1jqNKxH3cwkX9nApF3kdwo8i7G3xQOhXXvMEipcTDBoqh0mzE4BuIzPGltvP/npuQfICGGJ6WKMZjIPcBRhKt+/TEU16NqCiZyDzCyJUsDk7HbgFIgkBbfX9WjmdiAotOAfs8Yc2DDq3KafQ6zxQRXUD+u2bRqw4trOzsPiVTsemgghBBCCCGEEEJcH9Mm86RUPC6W3e9HhaO0GUVsm8xZBfhj77Db/lo5/4yJbT24za2o7rAJsJN8tPVe07hsjA238XR+agOMsAjwdbK3Yqtz2bby9/vVOqM+mdwXVDeTvUrm8JwwkM6EswKjG/BCZelMOPsCSM3Dkw4CuWfC0N9s+VeE+2BCtvxfE4cZ6L2F1c5ANtteGZQ1jed1nSt9FrpggsGW/5MbinWzjrdlzjXpTLggbF5WVP9J6/ZiNO15k4qbxaQzoZqOIHj45/smuHBNs74wuwxmGN6A8XS7vz3Vlk8eUJRKV4IQQgghxD/3HTJ2+CG9OavnAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Cr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB7ZpBTgIxFIZfjbiVmzieQGatJnoEb+ANhBPoTVwY14w36BHwBromWPujY1zQoe20M32lX0JCeDMk30cZCoGoUCgUCoeLIMZUz8spndANfVFFQpySUu/64UZe143tc7ANUL2+PWjhe313umO80rM7mxDsAmxf9YlY4u7eg4WYy8uLRechxAgn+Ral6q6VcERM8JIHQjx2jdkEoAk9kav8D1X1spyZhnwCrAkXPEk+CHM4NgHkbf1Ba1WTVwRxZprwWQHUI4JSn6YRqwDAK4IyH5tcAFztt1f8DpwjbKgxjZIK8PdRp2/BIii10MeuTONkNkI7PuclBLeibuf9R8qr2XnX+UmsAINE1XMlyN/HOxl9BVjs8HxWgtU5YNQADttbhwh6x6g3TTbyYLQAHnt761fVhVECeH+xiRBh8AA95FuCRhg0QAD5lmARBgsQUL4lSIRB9gER5IMRfQVEkufxFkhdHkQLwEEeRAnARR4ED8BJHgQNwE0eBAvAUR4ECcBVHvQOwFke9ArAXR54B8hBHngFyEUeOAfISR44BchNHlgHyFEeWAXIVR7sDZCzPOgMkLs8MAY4BHlg/k3wmOaUuTwwBxA7/4DoS5LyYIhfhZOVB7EDJC0PYgZIXh7ECsBCHsQIwEYehA7ASh6EDMBOHoQKwFIeHBsnghraKLJiY/+fnEKhUCgU0uEbh7OOhX0VxTkAAAAASUVORK5CYII=",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,vr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB7ZvPTcMwFMY/h/QMG1A2yAbQI6IH2KCMwATABrABnaAHKnFMR8gGhAkoN1TaPBzKARANeXbiPGr/pFqV6jTpp/fns+UCgUAgEPAXhRZI7tMbKLWLRlHzbHh4gYaJ0QYKp3rcR6NQrofGBYjgOUEAeI73AlR2gWSS9nWZ7IP9rWqixz00Sw6ic3BZIs/OBvmmj6u7QIyR/jGXkEFfP0sKLjFd6/Fq08ehBsBzggDwHO8F+KsL3GFJM9gQYY6FfnVHl/eWD3s5nDxoc7QS4w1+R9FtdjLI6kw1XQ6PIJkC47pT2UUwO95sK8Wg7W/dqYZdgJ4gmCrv/xNDAdQz5MKq+tsYATlnsqkRkttbiV440826AGkBGA00Gx59m51MZ1R5wRsdfM3jZJrq96reJqtykQKKF2ZOIRcpoETbSwcRUPgeAbFgAZQLAV63Z4VlJICu0HIFWLrxAZBqhjg2uMRCAJF2mB2Z2xYBOZjY7AnKqwNMG1xiLgAJbIVKPYKJuQCRQAGcRoBElMsaINEOFy67gEQ77DQCJNrhyGEEfNphWSIs3PoADb/qtonJGsVSAH7fbZEcBthGgBw7TGbPYicA/f99AdujsrUE+DhtxiFGX1/DusTEBq9vZUNph6nGvB7z4crTYD3w6CQFVoJSwHCn2k6AHUFusOiiC0SeR4CoswJRFymwRkYULMxSwP4fI0Rj3QmaPhjNRvRWfSAQCASE8g7TeaJ3NUq3zgAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,wr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Er=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,yr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB7dyxTQNBEIbR8YnAInIJhISEhC4FKqIF04kd0wAZlOAIHwSGQzRgaYBf8r2XXH5fNrs7VQAAAAAA8OcW1XR9u76qmRqXtX/dbvfVcFEN3z9/+KyXmqnLQ22mz301DEWUAGEChAkQJkCYAGEChAkQJkCYAGEChLVmQctpGPX+Vo81U4uhdgUAAAAAJ2rdjLtZr1cfh3qomToea/f8tN1UQ2saOo61mubZdzVTw88wf1MNzgPCBAgTIEyAMAHCBAgTIEyAMAHCBAgTIMwz1YbfeKYKAAAA8I/MghqsLAuzsuwMCBAmQJgAYQKECRAmQJgAYQKECRAmQJiVZQ1WlgEAAAAAAKf4Apw6ME0JptRKAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,uu=(t,e={})=>{const n=e.variant??"drawer",u=n==="sidebar",i=u||t.showConversations;return w`
    <div
      class=${P({"conversations-panel":!0,"conversations-panel--open":i,"conversations-panel--sidebar":u})}
      aria-hidden=${!i}
      @pointerdown=${r=>t.handleConversationsPanelPointer(r)}
    >
      <div
        class=${P({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":u})}
      >
        ${kr(t,n)}
      </div>
    </div>
  `},kr=(t,e)=>{const n=e==="sidebar",u=n?w`
        <div
          class=${P({"new-conversation-cta":!0,open:t.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!t.hasActiveConversation}
            aria-disabled=${!t.hasActiveConversation}
            @click=${()=>t.handleCreateConversation()}
          >
            <img src=${Er} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,i=w`
    <div
      class=${P({"conversation-list":!0,"conversation-list--sidebar":n})}
      @scroll=${n?r=>t.handleConversationListScroll(r):null}
    >
      ${t.filteredConversations.map(r=>{const o=t.conversationMenuId===r.id;return w`
            <div
              class="conversation-item"
              role="button"
              tabindex="0"
              title=${`Recuperar ${r.title}`}
              @click=${()=>t.handleConversationSelect(r.id)}
              @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),t.handleConversationSelect(r.id))}}
            >
              <div class="conversation-item__text">
                ${r.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${s=>t.handleConversationMenuToggle(s,r.id)}
              >
                <img src=${xr} alt="" aria-hidden="true" />
              </button>
              ${o?w`
                    <div
                      class=${P({"conversation-menu":!0,"conversation-menu--above":t.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>t.handleConversationAction("rename",r.id)}
                      >
                        <img src=${Cr} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>t.handleConversationAction("delete",r.id)}
                      >
                        <img src=${vr} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return w`
    ${u}

    ${n?w`
          <button class="recent-conversations-button" type="button" aria-label="Conversas recentes">
            <img src=${yr} alt="" aria-hidden="true" />
            <span>Conversas recentes</span>
          </button>
        `:null}

    <div class="conversation-search">
      <img class="search-icon" src=${wr} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${t.conversationSearch}
        @input=${r=>t.handleConversationSearch(r)}
      />
    </div>

    <div
      class=${P({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":n})}
    >
      ${t.conversationHistoryLoading?w`<div class="conversation-loading">Carregando conversas...</div>`:null}
      ${t.conversationHistoryError?w`<div class="conversation-error">${t.conversationHistoryError}</div>`:null}
      ${i}
      ${n?w`
            <div
              class=${P({"conversation-scrollbar":!0,"conversation-scrollbar--visible":t.conversationScrollbar.visible})}
              @pointerdown=${r=>t.handleConversationScrollbarPointerDown(r)}
              @pointermove=${r=>t.handleConversationScrollbarPointerMove(r)}
              @pointerup=${r=>t.handleConversationScrollbarPointerUp(r)}
              @pointercancel=${r=>t.handleConversationScrollbarPointerUp(r)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${nu({height:`${t.conversationScrollbar.height}%`,top:`${t.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},Ir=t=>{const{consultantAgentVisible:e,consultantAgentIntro:n,consultantAgentOptions:u}=t,i=t.consultantAgentButtonText.trim()||"Consulte o UptAIme Agent";return w`
    <div class="consultant-agent">
      ${t.showConsultantAgentButton?w`
            <button
              class="consultant-agent__button"
              type="button"
              @click=${()=>t.handleConsultantAgentOpen()}
            >
              ${i}
            </button>
          `:null}

      ${e?w`
            <div class="consultant-agent__intro">${n}</div>
            <div class="consultant-agent__options">
              ${u.map(r=>w`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>t.handleConsultantAgentOption(r)}
                  >
                    ${r.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},Sr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB7dzBTcNQEEXRcQCJZUqgBLeQBpDoACqiBVNBliyjdJAOaMFLNiFENADSiDxFPkdyA75ejf+fKgAAAAAA+HdDNY3b3UMt13x42szVcFsN4/v55R+Hj1qu6fy8VMOqiBIgTIAwAcIECBMgTIAwAcIECBMgTICw1iyoPmuum9NbLde+AAAAAOCPWifjxu1uXXfDay3V12l/eNxM1dCbht7Xuo71XEu1+vl+p2rwPyBMgDABwgQIEyBMgDABwgQIEyBMgDABwlxT7WlfUwUAAAC4ILOgHivLwqaysuy6CRAmQJgAYQKECRAmQJgAYQKECRAmQJiVZT1WlgEAAAAAAL/6Bj7sKlMf4mFGAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Dr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgB7d3fTdtAHMDxn2l57wbNCN6A5rEqSN2gdAM6QcMGdALoBEVqeA5MUHeCskclDl8gVkji+M6+C7/Lfb8PwEOQLD5K5PtnRIiIiIiIiIiIiMihQkjK6e1l/W0kKiqq6vjom+ur3wqJvDHn8lDMxChANA9eb6oDIak+ju/lwIzrz6N7SSwAn0sVEcClUkQEcKXUEAHcUEqIALaUCiKAW0oBEcCOtCMC6JBmRAAd04oIoEdzRFNci6IA9Ki8ufteT1aeiaIAdGyOZ8xElAWgQ1rxbAB2pBnPBuCWtOPZAGwpBTwbgBtKBc8G4Eop4dkAXCo1PBuAz6WIZwNQ0sWzZQ8YHc+YHzEnwLMG3AHeeXUyPou5ipEt4I7wJvbHmEtRWQLuEm9RLMTsAF8Db1EMxKwAXxNvUWjEbADLm1n52niLQiJmA1h9GldSmK8SIw+85noCIWb1EVojXgVH7IHXXE8AxOxuYoIiDsBrrmcgYpbDiCCIAfCa6xmAmO1AfhBiQLzmehrE4p/P72U9ldYLMQJecz0W8b9xPh9v4yEHMh9inIopLjtfGBGvbwA+14moEM8G4FKtiErxbACutIaoGI9asojl9NaUv2cToTSbz50SERERDYkbivbUz4U+bYMo/pTTuy9Ca6keyK/vYSlOq+Ojn0JNagHbNyCBuJxKwO7dYyAuUgfovvUPRJvXTUz5a/ZOIua3b9NccWPjexd6KBc14kgi1G/TLYiew4jivRwWs9CIw3ZM543YZxw4CokYZrt7voh9B/JBEMOeVcgTcchMzCDEOAdN8kMcOpXWCzHuKaEaMaO50xBzoV6IOzniZQ+yZFKoyWwnRA3n8/atkKsRWxHBi1Po5aSNiODFK8Z64AtE8OIW6/8HPiFO767rP3C8Z0yz6Tbqivwo6gPCwZuX5vEy8JrSAwTvRWkBgrdWOoDgbSwNQPBa0w8I3tZ0A4LXmV5A8JzSCQiec/oAwfMq1lxoz4qL6uTDRMg5Ze9A8znWvtN9TdtH6CjGvtN9TuNNDIgeaR1GgOiY5oE8iA5pn0oDsaMUJrNB3FIqy0kgtpTSgi6IG0ptSwWIK6W4qQnEpfzmQo35K1oejHAok/rrqRARERERERERERF19wiyXT051op+sQAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Rr=new URL("data:image/png;base64,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oWYhuTd7g0u1GpF2LnZlA5jCgoFobTqrND02VAICA9JSRB4GBklAYGAajsihNbfhEhAYoMYiclJ+EBgsAYGBunZEyvJnk7fH9wKDJSAwYNkRSRepHoW7gUETEBi4KiJf17pANXGRKqcEBKj2W5u8Od4LN8pXq92fy/Lz8HzbnKfViKOM6x3Pylfj4z4KEFxICCyYXaB6J0ANRiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkKUYPTooAwBckREIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGT5/w72Vgm/kJoZAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Br=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,_r=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZtLbtswEIZHUg10qSP4CLmCNgW69CZA0PMVAbLxskA3ukKOwCN4XzguqYEYwAFNDjkzlAB+mzzMx/yfnYgibYBGo9FoNEi8nv8cf5//PsFGeLO1uJoggx6I4ETD3EE3b0GCC/9ha3E15UjoKI3X8Lbb0f18A7jc4Db9Ov14hwqs4W0dI/7mZgCu08vpp0kdI1nAffiVWhK+hvcVGYqEJAGh8H5KZQnh8L4ikyohKiAW3k+pJCEe3ldkUiQ8FJAa3k8pLCE9vK/IxCQEBVDD+ymFJNDD+4rMIwnBy+AAw2gvdcTJFqMj9yUyP7yrpx8H+D6GHxeamOuVUBa+u/QwTM+n6T3cRrCAUgnS4bGdcCG5EjTCY1uFgqgStMJjewIaEjTDYx8ikhK0w2O/DCQk1AiPfTPhlFArPPYvgEPCwX5fKzyOUUiphB6/VgmP4zBQIiEHrvA4FhNaEjjD43iMSEvgDo9jMiMlQSI8jisAtwSp8Di2EFwSJMPj+IKUSpAO7/gGG+bDrhCu8A8k2fyfgPRG6y7+CUpK2M1lUErCrhZCEhJ2txTmlrDLmyFOCeT3B9xTuplhn4ELEOE8fCkSwLGT09tnsqaEKlti9yu8mocv6puioeVtLQmq2+KxtX0NCWoHI6k3NtoSVI7GqHd1mhLED0dzb2m1JIgej5fez2tIEHuDBNdmhrSETmJi7p0cSQnBleAVDrZjl7FC49/GerbF568YXT2HS/jxB7ye56NVMVuPR0ieTG4Pj/5K6AzYel5Okwm2gAipEjQ2MB3pEuLhl1aQQEyCVviVuIS08EtLSCQkQTv8SlhCevilNRC4l1Ar/MpXCbTwSw8gskpw9+M1w698SnBXLFr4bJyEt/P8BBsBPzLjnphGo9FoNCj8BxYA9Kv7ja2UAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,iu=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Fr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3NSURBVHgB7Z2/jxvHFcff8CjBSaTcOQ4gwZZhqohdpNAKTpFOZBnodycghU5FkHQ5+Q+IeH0QXboYKXwqkvb06+AupJIUMWBBVAAHkYJAFKIYEmAj50iJDfHHeN7sLrlc7pL7e2dm3wdYHY+k7njcL79v3pu3MwyICdZOZw32QwNG4qiJg4uDsVXxUEMca8DEgXD5fRB74jl74vG9ye0xfyy+9mEsjhXo9062ekBMYFBRpNhWoCneAQtq7BjetUBYWdOzRcnvi9tdGEKvd761BxWkMgJ03O2ccCIU3NkCxRaVnjzG/IZwYBRkHyqA0QK0bnWaUKudAM6b4tsm6EVXxPob4gx1TQ7bxglQOF0D9tcuipO3rqDLJaUvPkQ3RKjeMs0ZjRCgDK/7YF38OWdBP6eLS1eE6Wu9M61tMACtBWh9KNxuLNyO8w0AJ0OtDn1AMQ74ps6uqKUA5diOsStgvttFZVtXIWolQBLeUrQTohYClKF2xD4AEl5UtBGi0gK0k4uacDw5xiPio7wQlRWgdbsjRCfDbdWSi6zBGZdNVbNm5QRo7XbElBi7ChRus6Yv3LClmhvWQCGs3TtXhPjuAYkvDxqwjz2S77FCKOGATpKxgzeBKAJl3LB0B5RjvZF0PRJfcaAb3rPH2eVSmgNShqsKbAsG482y2sFKESCFXOUoLSQXHoLlbAaFXNXAkNyRFYiCKVSA1u07F8VUWgeotqciDaxAFD0uLEyAdvrPt4FQHHa1yFJNIWNAu77H20DoA2Pt3skTm5AzuQtQhN2rlOlqSgEizFWA1m73A+DYqUxozHbvVPMS5ERuY0A77JL4DGDdjmL5kIsAacxnGnwjr8Qk8xBM4jOYHMaEmQrQ6eHLza4JFWDrvVMnrkFGZCZAp4/vHhDmw8W03elWFzIgkzGgnNsFObdLVAHGduQCABmQWoCyq2UsptfMWYWAWM6amDvekec+JekdEFuqSHxVxLLb6dKRSoB20kGzHNVFlGdSNi8kTkKcnj5MOqizpdrswYAfT9pLmNwBx9RWRUjkeBASkkiAzjRbAwjCxrJuddqQgNgh2Am9j4Ag/DARimMuphnfAe3QSxDz8PizYLEEKGY7TFp1lMieZtysOHIItheDpIKzqrx98FvwYjiCT7/8CkoGs+KjUS/zrENURtAGIPGpxMF6HU6/eQjOHDkM73z7ADwfDOHkHz6C58MhlIhzvTdcjvLkSA5IiYdavP6NV+D0kUPw46NH4OC+WQ/5yV/uw8efK7DliO2C/WVPi+aAtvsRJfPud1bhZ2834AevBZdfMfwqIT5kn1xQtLXsaUsdkNyvXPxhdhG/uP93uPXkGShDhLat5Q5I7lcKi8JsEOh+3aefg1LY63l3Fz5l0YPkfsWzLMyGcfPJU7hy/wEoxxIXXPzRIvcrhDhhNoz3//EYlGSJC4Y6ILlf/sQNs2F0nn4G7939BJRlQUYc/leT++VG0jAbxu/7/walqcvrw9tBD4U74G73Ec16ZEcWYTYITD6w+Kw4obMjgQ5Ic77ZkVWYDeM3D/ugAc5mkrDlfyD4HeHsIhCpyDrMBqFk6SUUuZPpnADnQjAlH8nJK8yGoWzpJYyAZGTeAYewYfY+6tmTd5gNQ9nSSxgBycj8u1UTVsmBiEARYTYMLL18+v/SW6/iweTQrj1zl/cbWl5jOUWH2TCU6XqJi29mZNYBOW2RFUZZYTYIpbpe4tMEz8yI752UmQrhocwwG4YmpZdgGDsx8617g7LfKaqE2SDQ/S788W7ZXc/pGPBX3aL01AEHYKm1d2bxqBRmw8DQq7X4kBU4B7iZNngFWJN3VhIVw2wY2pVegmDTXbI8H3N2DCqEymE2DC1LL0EwmWvIyzflGNDeuZL9BypA2WHWDZ/4AYiLtqWXIJxxoP0u1M3fOFCFMIviQQc78+ZhiIvmpZd5VmQ55rr7MWyCgagSZtH13n/4GA7UV+SHIAlal16CsMeBjgCZWQ6oUjaLrnXlrw/g9BuHEotPr66XiDiac84OewsMQLVsFjNWdK6ffu+txOJDjCi9zGEnvXYScrurbfuBitnsg/++kK734IsXqcWHnOx8ZEb260ckInW7AQG0Q9Wi8e8ePZHOh+u0ZCE+Y0ovQeyHRh1G0NBpBkTVojGO07A51M1UsxAfovwFR2kYoQBr6l/7oXrR2Ot6SFbiM6704qeGAsSLjxTugEbB/erd78Pr33wFVMPvekhW4kOMK7344ShApq4D4jjvtz88pmRjgN/1kCzFZ2TpxQ9jq+LMslVQFDyhqokPyyHvffzJXGjMUnyImaUXH5wfxbOrZAsICi/JlFWedJ59JkOu1/WQrMWHGNH1sgzbAfmroOAgENc8VgV0ol/+7Z9w819P5x7LQ3xGl15mWVM6BKuAO5UWJIg8xIcYXXrxoWwIfvj8f1AmbgMBJhtB5CU+40svszTU7DsX4DgLT0QZBedFrofkJT7E+NKLD6XnQFAERWaC7lgPGz/LEF8lSi8+lBYgigDFUIQI0fUu/OluaMhF8hSf+xqML734UH4WGDtK8hYhljwWuR6St/jc11E1tGhDyEuE2DZ14c93l467ihBfhUovMwgBci0+dlmLEEMt/jz8uYsoQnxIlUovHva0uhQ9CxHiQB9/BiYb/hkNP0WJr2KlFy8oQL0ux0wjQnQ9TDSinOyixIdUrfTiQTqgdh+9uCKM43pIkeKrYullAudfaDMG9BNVhHFcDylSfEgVSy8TGDog188BXRaJEO+L43pI0eJDqlh6mcChXxMq7IPGBIkQ26Zw74w4A/syxFfV0ssEob06jIUANV+WDUWIYRZFhOMpFGAcyhAfUtHSy5QxCnBFCNCARcnRSZJsWVCW+CpcepmygiH4pd4hOA1liQ+pcOllQu9kq1ezl0rVMxNOQ5niq3TpZUoP/6l5v6kKZYoPqXTpZYJterYAeXUEWLb4kEqXXly41wErIkAVxFf50suULv5jC3AUvqW6KaggPqTypReXoccBTU9EcIUFFcRHpZcJPXefkGkJmsN1MBRcxk0FqPQyYTLkmwqwZu44EFfVKhsqvXgY8xvuzakAX5rpgM3DrymxshaVXjyMAhzQicldMIwzb6ixvgyVXhw4v+PdNb3mfxAMApOP1uHvQtlQ6cUDm420/j6YLhiEKskHlV48sFmNzQjQ3snanHKMKskHlV4m9LEBwXvHfCcgt7fR1B1Vkg8qvXjg0+zXZV6AdTMEGDX5cNeDOb57R16knmWmSqUXH0PY8t81J8Dej2SG0gWNiZp8+NeDyfridyq9ePBlvy4hzfjzVqkTy5KPRatgZSlCKr14CBnaBQtwIJ+s7ch5UfIRZRWsLERIpZcZ+r0zre2gBwIFKIvSnP8aNCQs+Yiy9p+XtCKk0ssM3bAHwq+H0zQZCUo+orheEElFSKUXHwO+GfZQqAB1TEZwawdv8hHX9YJIIkIqvcywHZR8uCy+IpiHK1dV0H2QpK4XRBwR4u+/9eQZEA6DxRpaukGIdbvbEV+aoAk4/kMnXLbuXxLeWT1gbx1WD17b3V0OJI/frSnbvVPNS4uesHxNBM1cEENtXgJwV2C4+WR+wxrXcUl8HgbLtRNpiyTdXLAI0GXdrWNxqd+oCyBViKXuh0TbJ2SFX4IRewTEBHcfEyKEQbTIGWlZIpkRa1oXJEphYebrJfq6WENog8azI0Rh9KO6HxJZgM6lm9qVZYiCGfPNqO6HxN6nlRISYgF9kXgcjfMf4i9NyfhlIIggBrwFMYktQNlSreEMCZEzPF7odUm8VboIxffwCxBEgtDrknx16BV+HigrJlADCUKvS2IB2t0yFIqJZKHXJdX6+L1TrS0qUFcYce6lBlKQfoMGu0BdqSV+CUnfOfepSJyEeLE+7DTEXDEmJWtAVAGc7WilCb0umQgQsW51msBYBwjzYfy4f4WDpGS2R5Jc1oPxpe03hO7wy1mJD8l0ky7xwrapSG0wWGxOmXT4ySwEexHhuC3C8RUgzAHFd7rVhozJRYCIEOGWEOHPgdCfnMSH5CZAxLrd2Ra/4iIQGsOvibC7DjmR60at8oXTmFBf7ELzOuRI7jsFS+smEeqHHXY3IGdyDcFeKDHRiBzHfH4KEyAixoTiE8WuAqEuY34pbCWrPChUgIi127HEr90BDg0gVAJXRDtvrxNeHIULEJFzx2MxbUciVIWemNs9n8XcblxyT0KCkL2EL/lxauVSADwHGTUWJKEUB/TijAsxOaFOmmKRl9lmPbUWl9IFiFBILpzSQq4fJQToQqWaAiiwxBIFpQSIkBvmBO4DWIONLFupskA5AbqIcs26HBuSENOixFgvDGUFiNit/njdATU0JAIz3CG0na14lURpAbqQEGOC4XYI6yokGcvQQoAuJMQl2Ps9t4uezUiDVgJ0ISH60FB4LloK0GUiRMZOVDBZ2XPGeNs6hNowtBagF5k1j2FditFk0O1w2/uBFJ72a/MYI0AX6YpD2IAaO2uOK/LHcrdJzd0uCOME6EW2fnFoiuOcds5oj+u6eOg4touK0QL0Ip1xAJaYDTgnBGkJQR4DpZAud128vh68hOsmhNcoVEaAfqydzhrU5QKbTfEuWDJcFyZKITZsCODOMRIuVxHB+amsAMOQYXskxFgThxSl/IqtYmvitvjKViG0dUwKC3cHRzGJLBX64v/siaMvEqQ+rIjjJfSrKrYgvgYdXUDtGXPNRAAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Tr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Ur=new URL("data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9197%2029.6004H25.8396C26.6348%2029.6004%2027.2796%2028.9556%2027.2796%2028.1604V15.3511C27.2796%2014.9748%2027.1322%2014.6135%2026.8692%2014.3443L23.4366%2010.8337C23.3025%2010.6965%2023.1423%2010.5876%2022.9655%2010.5131C22.7887%2010.4387%2022.5988%2010.4004%2022.407%2010.4004H18.9197V18.6804H22.6397C22.8625%2018.6804%2023.0761%2018.7689%2023.2337%2018.9264C23.3912%2019.084%2023.4797%2019.2976%2023.4797%2019.5204C23.4797%2019.7432%2023.3912%2019.9568%2023.2337%2020.1144C23.0761%2020.2719%2022.8625%2020.3604%2022.6397%2020.3604H18.9197V22.2804H20.4797C20.7025%2022.2804%2020.9161%2022.3689%2021.0737%2022.5264C21.2312%2022.684%2021.3197%2022.8976%2021.3197%2023.1204C21.3197%2023.3432%2021.2312%2023.5568%2021.0737%2023.7144C20.9161%2023.8719%2020.7025%2023.9604%2020.4797%2023.9604H18.9197V25.7004H22.6397C22.8625%2025.7004%2023.0761%2025.7889%2023.2337%2025.9464C23.3912%2026.104%2023.4797%2026.3176%2023.4797%2026.5404C23.4797%2026.7632%2023.3912%2026.9768%2023.2337%2027.1344C23.0761%2027.2919%2022.8625%2027.3804%2022.6397%2027.3804H18.9197V29.6004ZM18.9197%2010.4004H14.1197C13.3244%2010.4004%2012.6797%2011.0452%2012.6797%2011.8404V28.1604C12.6797%2028.9556%2013.3244%2029.6004%2014.1197%2029.6004H18.9197V27.3804H15.6797C15.4569%2027.3804%2015.2432%2027.2919%2015.0857%2027.1344C14.9282%2026.9768%2014.8397%2026.7632%2014.8397%2026.5404C14.8397%2026.3176%2014.9282%2026.104%2015.0857%2025.9464C15.2432%2025.7889%2015.4569%2025.7004%2015.6797%2025.7004H18.9197V23.9604H15.6797C15.4569%2023.9604%2015.2432%2023.8719%2015.0857%2023.7144C14.9282%2023.5568%2014.8397%2023.3432%2014.8397%2023.1204C14.8397%2022.8976%2014.9282%2022.684%2015.0857%2022.5264C15.2432%2022.3689%2015.4569%2022.2804%2015.6797%2022.2804H18.9197V20.3604H15.6797C15.4569%2020.3604%2015.2432%2020.2719%2015.0857%2020.1144C14.9282%2019.9568%2014.8397%2019.7432%2014.8397%2019.5204C14.8397%2019.2976%2014.9282%2019.084%2015.0857%2018.9264C15.2432%2018.7689%2015.4569%2018.6804%2015.6797%2018.6804H18.9197V10.4004Z'%20fill='white'/%3e%3c/svg%3e",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Mr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgB7d1hThtHFAfw92bXJpEqlZ6g7gkKNzBSIIr6JSZqJcOHkBOEnABzgpITQBUhq62iDZ8iQSs7JyA36PYGVGpVCt6ZzsMhaWjA9hrvzM7+fx9BthDzdubN7Nu3RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFACTPDebpLM18/rDc1qXhl9sv7dN28pcAgAq5u8bmjDmxFHjw3R/IffmNT+i/bareVtClTlA+Cn5HBBE/c+HvirJBCypXbrQUqBqXQAyJXPFB/fPPiXTHpKtcUnraUTCoiiSot64w2+4EZdn21SYCobAC+So6YM6gQfIVbqKQWmsgEQES3QhOx6Ob9vcwYKSGUDgI1uUg5qkI25ZJRDdXMA5q8JqhkAkv1Puv5fOo3vBHU4VMkA0DpqUg52x/AW28AARIpzZfPG6N8pMJULAMniTY4dgFDMrygwlQsANmaKw5xanwJTqaPgYfIX/0Y5yPq/1lpepMBUbAaIepSXzn6gAFUmALoHv27l3foJVnPBrf+iEkuA3PLNiI8pJ230wfrq/YcUoOBnAFn3M6KEpqAyvUOBCnoGGCZ9su5zg3IyxrxZW11pUqCCnQFe/Py6KcUe0wy+4CzrUMCczwBSiDmnP9tgZW68OaM1vVl/tLJHY7hI+LTu0NQ41TPI/pnUicnO+j4UnToNgG5yZK9SSsavyhldm3d7g18E97WGzpaAYT3eJIMvuGEovjahK9fgC27IwdSPB788JkecBYAxqjPZ4A/ZoFno2vX96s9lzS/X4H+QabPjqtLIWQAwqy8pJ61U8+rP4jjapZKSUjNF/D05EMQuYP/l4ca02b4HmrtJr/BysyACQCl2tobepjk6a1LBSh8AyfCqaVIAjGbMAJP6kwbBlGkrnaVUsNIHQJQVf9XMiouC09IHgGEdSADwnouC04o/G+gLTu1c5uQRdASAcxeDb4+Dl1JyAAHgkNQZnlK06GrwBQLAITnWvkuDLXIIAeCYnQU2P3VvoygIAB/EsbNZAAHgByf3AQQCwBN1Om+QAwiAikMAeOKMaik5gADwgDx44qrvAALAA4rrztrPIQBc03obJ4EVxMQn9hDoWfvR/Q45FBMUjFND5rm9B7DnQ78hzAAFs4M//w/FXgy+QAAUTErA6/rcm0fNSx8AbFT52rZxviZVs1D+AIjOS9e4UTF9Tp7wMQCkNGrJELeG1TI3kwcrjaFS9e/T2njz93q1C5Bt0Vpr+X03jiTp9U8pO7a/adz4OaY9u7Y6LayYhNK6T57wZgawg3/y38EXLZspy5Zp1GeVzaqpNDhtf/ugT54IYhcgJ2nGGO/buMnhjxSAkke8CQDZHn2qNIrJjNXX9y7XNu13eLsjkMFXDqt/r+MuBzD6D+KP48/EcbL/8vDZmcr68YAatTh+apeGxtWP2qD430DLctFNjmziSPmbQc7O9t8U7fjYadxZi5hucvFId85n+uOvrruSpvve2/cut/mCPOVsCWi3Lho+9WlSI+6eyfeOu4UsAufoglIkpznAHYpbxvDILF9McvdsrXXvlSRbPiSG8vAHecybRpHv2rlec7UM0rydtIZLgtoadZYwO/Lq2XtPyFOV6BXcTXoNY847zC46iVyfr/igYu8LKHg2kHzFccHHKJV7d3BRs4HNP56vra44q/UbV2VfHn0RCDR4yMZs3OY7BKW5tA2uTru13KcSqPzr4y/dnISOFtnDqb+olob2WjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwwr/DubvGOyIy/AAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Lr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVmSURBVHgB7d1tThtHHAbw5z+7Sd2qUukJujlByQm6lgpSvrGpWhX4AJwgyQkCJwBOQKoquC+KFj6lgki4J6hzg+0N6Ke6xd7pDCYSpATMru2Z3X1+UgTEjpR4n53X/04AIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiqgABYS9N54DWXDhAhBIGYb+3kSSnqJDGBsBe9BY+fWK+jS9+TYQGejrXu6vfLL5ABTQuAJ30daS12hRRa5gi88HufJ8sPIPnGhWA/fT4qQKem7t0DjNQhRA0IgD2rgfCPUywqR/bYNBe/vZRF55SqDl71wvCP+Di4lthMNWupqwQNXX5rtdwKobHahmAH399HZu7Pp1VX38zieCx2nUB+4dv1sIwPPHj4p9PC71eF6jVINDe+fbiwyM2AAJ9AAy3lpNHGTzjPAAXU7M180HN3/LWrhlRb31oRD3q84MTf5tcneVAspos9uARp13AT+nxtkng9hgX34ph7u6fTRN/3Yt2ccfv/lYigZy8TI/G+bfOjLMAvHx1tG4u/FPc0TDXO3vpyZX+3d79017ZmwQT9jkF2YZHnAVAiV5CAfZD/Cj/Z/3y743u/sqIO2asAk+46wJEfYaCNORKCyAiX6FCtBJvuoHKTwNHgz+JUCGi1JfwROUDMEAYoWJyjb/gicoHQOU6QsUogTdTwdruBfhLMvOxd+GJ2u8G+kZDz+X5WTwau7jHAMzY+VqAkj27arn/6rc7r4NMGgPgjFkZVMF2Jz1+DocYAPc2XS4MMQA+CENnrQAD4If4/f2NWWEAPNFCnwFotJJPJRXFAHiiH7acrA4yAB7QWv++kbSd1A4yAB4QwQs4wgA4Zu7+3eXE3YOkDIBDAjkVGe7AIQbAIbsxZPcEXG4MMQDOSWRDwIWgRpOohTMn1cIMgCc0ZMlFK1D9ACh/yqvKsHUCrUF/5tXClQ/AJ7iXoSZyFUSYMe8CYKdGdmXMTJDfjvP+ZLSC1kUNqHyYYca8CoA9YetvBA9WHi/Gy48X583PY52vY/rPXdRB2MowY14FQBAml9fEV5KFHdMa/HDbn1tJvj4YVdtWl231lpN2hhnzKAA6u+4D0Hrc5l1voMJE7q3DAY8CINF10yARHWMMy8lC13zZQiXpDRd3v+VVF/AxBldq435Jj+bv8ti3CcEmKhQC2+wHCB+63Azy6skge15AJz1aynV+GEjwxRC48yPkNgSd9Nh+W7rQ0h7vovN84gNMUerUzPt7ZrDbhWPOAmDS/1ZE4v+/IpGS4MlNR7spdfOAz4ZgP33TU9B7ZQ6Lsoszkuddnw96LMtZF2Au/gEKkWycJtPODLRpXkvPDhyWbM+CswAUGbTZRaIAQTLu+0cDq6At5Y5q8+pEj0lzfkpYJz2JtD7bNH+R+fdP/nhHoE9Nk3HQR7hTpHbOjAli86XM8XFdE9g2aqgxp4WPzgxG4S1XE77PXRVuTlNjtoPtqiJK7Bncz/91/iTvNDStHqDwGoFSqlIHUY2rgf9jyLEdC8QoZPDAx+Ney2hiRVDhVkDnUuhsQ581LgAX088uCvDpeLdJaWRNoFkdPEQxMWqmkQEQDIquQkauyrenpZEBsAM5rfEnCriPswg10uCycN1FAWowZAtQCyKFysnzMKjVamBjTwq1+/G4M8lWk4VaPIfwTmNbgELTwXx4a4Fq1TT60bAA+tn4W8WS9dV9p49yT0OjA/BdstgzawLJ7UUj9vWgzd3AGhp1BUHbPn9gC04uv3bx81YfwUNXVbvT1rjNoNvYSuTheWHKIKvbxg8RERERERERERERERERERERERERERERERERERERERFV1n8eqplfc7mFmAAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Or=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Pr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Nr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7d1PThNhGMfx3zutFQMxPUI9gXgCSyJEd44mRrqxnEA8gXIC9QTFhZKYkMEVBhfUE4A3qDfoyvB3Xmd0A6iJNCXvzPt8PwlpgV3nO+9MM0+nEgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBpwiNci2O6280VXFOO/Hh40fw5U0HasCogtgkGXtGc1lxdOuKsuPfJ6/7T2+/0aBJYrMjGb3VOmNX3IdlzRef9j8vKrAoloB3m/u9JPEDVQTXhofqnlrJV0IdjiIagUoNv4z1Uix97Wv66irgKI7BNSNz11bARGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHFNxWVNuX+nKfOJa3vvO0l5kcm524pIVAEsp4tDXbGP2c58LjcoLuTMKwIcAi7pSbq0/zRdvKNytYkAAUyoWG1eKYIIKnUIKKd5WsetTu6SoFfILjppHuz/bYSrjGAj+3JXlR9A+bdKBFBu+Buae1k87ftraldtWWpqThvZzrp0uracPhhd+He5CnRVU8Ff698zfLN7xUnVavFTqT3/PNeXGrsb2Xbn7F/LE08n7aumggcwk9x8Xs7IqRZcp1gP/hg5y73/qpoKHoDL84eql+4g2z2/Ujk3Uk0FD6CO76dbOu6c/d3nvhIz/pPgbeAEkpPTCp+rXA4BGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEYBwBGEcAxhGAcQQQmEvCDpMQQGBOraADpQQQlFtfThdGCogAAvG/RskbwT9ZFNung4NwSTL2Pv+v0XAnP/YuGfbSxeD3CS4RwBT00ntbxcOWaohDgHEEYBwBGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEMIG82ajtPYEuqkIAQ9XMka6NFIkq3CXsk2rFrYf8qtdpCx5AORnj/fTv8X8VyjGuAzVeKCKVOAfoPVrqFy/virz/pgryXt+Lh7VDNRdi2vsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA9/AQgnaBvPi1l+wAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Qr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOFSURBVHgB7d1vbhNHGMfx38zaKUJI9RHcExBOgC3xR7wiW9RWTlXVPkHNDZITACeIESqp1KLtO1qoFHMDeoPtDdIXlVpi73Q2bRAICDu8IvN8P1KkxJ68sObZ2fXMPPNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAzwMmYvaoafLI+PwrODdq/m2Zdf/PFjaWMMhMAbcef04Xv4geeB2nw+ruhbhrtfn3r2kLGmAiA/erxUCoO4scdvqfpzqS8uitDvAwIKqoOnd/aefjol7kMyX4E+P7Rk6n3bq9r+3h7OPxHvc9m5fhQBmQ/AsTO/zalfbwiBhvN0ZaMyD4AYoduKpH3uiwjsg+AN5/48SoLI0DyvbwJ+lNG5D8ChOaZEjkXljIi/6+Bzt9Nai9Xb5fXf5YR2QdAnNhZhuDudW0ftL4tQ0xMBG1/fmXeJQjiA+NtS1d/y9Ri0H71ZBp7eR5v8hdPXnNyh01ofu+5/vzLcvxcxphbDWztVQdxYWi1WSgc/qV+bWXWDwAAAAAAAABgkqm1gOOsoObCNK6BXo6LQJttQkj7s1qt71vNDjITAA9+fDzq93rVKXsEl9JqNilv1DLERAA8/OnXLVf46v0tQ/23+pcsrQ5mvyGkTQtzhbvTrbUbxmXiDoGSDwObQot5x7SwE6P9eLuQEflnBjmXnOQRvEtOJjmrLCSGJHem8/6ijDCxKRTvZuAZQH8oUdOE5P85q/IPAKeFEnm/sZAR2QfAefXupuUHusWkHNcyIvsAKOOkTlDomO3jaqngiJjcTMpriyBX/tfBbxdCeBY7f2zp6m8Zyww6GEpHo9jbWyeTQ3F0eO6cX7Q5hAIAAAAAAAAAID9GD4mqBhtHG8P29xf9F/WsLM0eEmUqAP6vHdAeHz96/Z2wkNa71pJCWmYCYL/6bS929PS0NjE4pl/dvHJfhpgIgB+qp3eC1K0UzGo1nhjKE8x+Q8iD6umoc+e3ekXn8jI5yD4AitBMlcQNyQzKiHf+phI1RUHNoFx8SMkY7/SpjKBkzFtQMiYjcQRIPgI+jgBmjo03sC08JH6vb7eO95cywkDJmOOC0Muu7YPCPTKDstObnZYU8lLT7G6XVxOLTJ1tRjKDxvU5FZfeXTeoDY4wm9y6viNjzK0GnpSLiY/6w+MXvKvJCgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOT+BTU3+TEldtBPAAAAAElFTkSuQmCC",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,zr=t=>{const e=new Date(t);if(Number.isNaN(e.getTime()))return"";const n=new Date,u=new Date(e.getFullYear(),e.getMonth(),e.getDate()),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=Math.floor((i.getTime()-u.getTime())/864e5),o=e.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});if(r===0)return o;let s="";return r===1?s="ontem":r>=2&&r<=5?s=e.toLocaleDateString("pt-BR",{weekday:"long"}):s=e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),`${s} ${o}`},Hr=(t,e)=>{const n=e.questions??[],u=t.activeConsultantFollowUpId===e.id&&n.length>0;return w`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${e.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${u?w`
            <div class="consultant-follow-up__options">
              ${n.map(i=>w`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>t.handleConsultantFollowUpQuestion(i)}
                  >
                    ${i.prompt}
                  </button>
                `)}
              <button
                class="consultant-agent__option"
                type="button"
                @click=${()=>t.handleConsultantChooseAnotherSubject()}
              >
                Escolher outro assunto.
              </button>
            </div>
          `:null}
    </div>
  `},jr=(t,e)=>{const n=t.activeConsultantPromptId===e.id;return w`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">${e.text}</p>
      ${n?w`
            <div class="consultant-follow-up__options">
              ${e.options.map(u=>w`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>t.handleConsultantAgentOption(u)}
                  >
                    ${u.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},ru=t=>{const e=t.messages.length>0,n=t.consultantAgentVisible&&t.consultantAgentOptions.length>0&&!e,u=w`
    <div class="hero-card">
      <img src=${Rr} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
      ${Ir(t)}
    </div>
  `,i=w`
    <div class="consultant-prompt">
      <div class="consultant-prompt__text">
        ${t.consultantAgentIntro}
      </div>
      <div class="consultant-prompt__options">
        ${t.consultantAgentOptions.map(o=>w`
            <button
              class="consultant-agent__option"
              type="button"
              @click=${()=>t.handleConsultantAgentOption(o)}
            >
              ${o.label}
            </button>
          `)}
      </div>
    </div>
  `,r=w`
    <div class="conversation">
      ${t.messages.filter(o=>!o.hidden).map(o=>{const s=!!o.consultantFollowUp;return w`
          <div
            class=${P({message:!0,"message--user":o.role==="user","message--assistant":o.role==="assistant"})}
          >
            <div class="message__content">
              ${s?Hr(t,o.consultantFollowUp):o.consultantPrompt?jr(t,o.consultantPrompt):mr(o.html??o.text)}
            </div>
            ${o.role==="assistant"?w`
                  <div class="message__actions" aria-label="Ações da resposta">
                    <button
                      class=${P({"message__action-button":!0,"message__action-button--liked":t.messageReactions[o.id]==="like"})}
                      type="button"
                      aria-label="Curtir"
                      aria-pressed=${t.messageReactions[o.id]==="like"}
                      @click=${()=>t.handleToggleReaction("like",o)}
                    >
                      <img src=${Mr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class=${P({"message__action-button":!0,"message__action-button--unliked":t.messageReactions[o.id]==="unlike"})}
                      type="button"
                      aria-label="Não curtir"
                      aria-pressed=${t.messageReactions[o.id]==="unlike"}
                      @click=${()=>t.handleToggleReaction("unlike",o)}
                    >
                      <img src=${Lr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Atualizar"
                      ?disabled=${t.isLoading||!o.responseTo}
                      @click=${()=>t.handleUpdateResponse(o)}
                    >
                      <img src=${Or} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Compartilhar"
                      @click=${()=>t.handleMessageAction("share",o)}
                    >
                      <img src=${Pr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class=${P({"message__action-button":!0,"message__action-button--copied":t.copiedMessageId===o.id})}
                      type="button"
                      aria-label="Copiar"
                      @click=${()=>t.handleCopyMessage(o)}
                    >
                      <img src=${Nr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Mais opções"
                      @click=${()=>t.handleMessageAction("more",o)}
                    >
                      <img src=${Qr} alt="" aria-hidden="true" />
                    </button>
                    ${t.copiedMessageId===o.id?w`<span class="message__copy-feedback" role="status">Copiado!</span>`:null}
                  </div>
                `:null}
            <time>
              ${zr(o.timestamp)}
            </time>
          </div>
        `})}
      ${t.isLoading?w`
            <div class="message message--assistant typing">
              <span>${t.loadingLabel}</span>
              <span class="typing__dots" aria-hidden="true">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          `:null}
    </div>
  `;return w`
    <div class="panel-body">
      <div
      class=${P({"panel-content":!0,"panel-content--empty":!e&&!n,"panel-content--consultant":n})}
      >
        ${e?r:n?i:u}
      </div>

      ${t.errorMessage?w`<p class="error-banner">${t.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${t.showSuggestions&&t.suggestions.length>0?w`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${t.suggestions.map(o=>w`
                      <button
                        class="suggestion"
                        type="button"
                        @click=${()=>t.onSuggestionClick(o)}
                      >
                        ${o}
                      </button>
                    `)}
                </div>
              </div>
            `:null}

        <form
          @submit=${o=>t.handleSubmit(o)}
          aria-busy=${t.isLoading}
          class=${P({"input-shell":!0,"input-shell--has-attachments":t.selectedFiles.length>0,"input-shell--recording":t.isRecording})}
        >
          ${t.selectedFiles.length>0?w`
                <div class="attachments">
                  ${t.selectedFiles.map(o=>o.kind==="image"?w`
                          <div class="attachment-thumb">
                            <img
                              src=${o.previewUrl??""}
                              alt=${o.name}
                              loading="lazy"
                            />
                            <button
                              class="attachment-thumb__remove"
                              type="button"
                              aria-label=${`Remover ${o.name}`}
                              @click=${()=>t.handleAttachmentRemove(o.id)}
                            >
                              <img src=${iu} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `:w`
                          <div class="attachment-card attachment-card--${o.kind}">
                            <span
                              class="attachment-card__icon"
                              style=${`--file-icon: url(${o.kind==="audio"?Tr:Ur});`}
                              aria-hidden="true"
                            ></span>
                            <div class="attachment-card__meta">
                              <strong>${o.name}</strong>
                              <span>${o.typeLabel}</span>
                            </div>
                            <button
                              class="attachment-card__remove"
                              type="button"
                              aria-label=${`Remover ${o.name}`}
                              @click=${()=>o.kind==="audio"?t.handleVoiceAttachmentRemove(o.id):t.handleAttachmentRemove(o.id)}
                            >
                              <img src=${iu} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `)}
                </div>
              `:null}
          ${t.hasVoiceAttachment&&!t.speechRecognitionAvailable?w`
                <p class="voice-transcript voice-transcript--unavailable">
                  A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                </p>
              `:null}
          ${t.attachmentError?w`<p class="attachment-error">${t.attachmentError}</p>`:null}
          <!-- Controles de anexo temporariamente ocultos (backend ainda sem suporte). -->
          <div class="input-row">
            <textarea
              class="composer-input"
              rows="1"
              placeholder=${t.placeholder}
              .value=${t.message}
              @input=${o=>t.handleComposerInput(o)}
              @keydown=${o=>t.handleComposerKeydown(o)}
              ?disabled=${t.isTextInputDisabled}
            ></textarea>
            <!-- Controles de audio temporariamente ocultos (backend ainda sem suporte). -->
            <button
              class="input-button submit-button"
              type="submit"
              aria-label="Enviar mensagem"
              ?disabled=${t.isLoading}
            >
              <img src=${Fr} alt="" aria-hidden="true" />
            </button>
          </div>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informações importantes.
        </p>
      </div>
    </div>
  `},qr=t=>{const e=ru(t);return w`
    <aside class=${P({panel:!0,open:t.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${t.titleText}</span>
          <button
            class="close-button"
            @click=${()=>t.handleCloseAction()}
            aria-label="Fechar UptAIme Assist"
          >
            <img src=${_r} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>t.toggleConversationsPanel()}
          >
            <img src=${Sr} alt="" aria-hidden="true" />
            Minhas Conversas
          </button>
          <div class="panel-header__icons">
            <button
              type="button"
              class="short-answer-toggle short-answer-toggle--header"
              role="switch"
              aria-checked=${t.shortAnswerEnabled}
              @click=${()=>t.toggleShortAnswers()}
            >
              <span
                class=${P({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":t.shortAnswerEnabled})}
                aria-hidden="true"
              >
                <span class="short-answer-toggle__thumb"></span>
              </span>
              <span class="short-answer-toggle__label">Respostas rápidas</span>
            </button>

            ${t.hasActiveConversation?w`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${()=>t.handleCreateConversation()}
                  >
                    <img src=${Br} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>t.enterFullscreen()}
            >
              <img src=${Dr} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${e}

      ${uu(t,{variant:"drawer"})}
    </aside>
  `},Vr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIzSURBVHgB7dzdTeNQFEXhk9EUMCWkBOhgpoOZCgYqIx1AB4gKoANSAh2EY+ErBQTh2j73bNtZn3SVFx6SvXCk/ChmAAAAWJjD4bDtjiFfP/5zf7aGPEfjF0TI8sn4RMhyYnwitFYxPhFaGTA+EaKNGJ8IUSaMT4SpAsYnwliB4xNhqAbjE6FWw/GJ8J2E8YnwlcTxifCRYHwiFMLxZxNhYyL9A7/3szWtvZ8/m81mbwKSAD7+L795NP34xd7PpUd4sWQ/LFk//hz+849t/dz39y1V6hVwNP6FzdOTvT0dpV0JaQEWMH6RGiElwILGL9IiNA+wwPGLlAhNAyx4/KJ5hGYBVjB+0TRCkwArGr9oFiE8wArHL5pEaBGge4W7tvGLJw9waYFCXwn7+De23vE7F/1jDBN2BfR37MrOw86vhGsLEBLgzMYvQiJMDnCm4xeTI0wKcObjF5MijA7A+O+MjjAqAON/alSEwQEY/6TBEQYFYPwqgyJUB2D8QaojVAXw8f/6za1hiH8e4e67P6p9KyL9w+oVqNos/VsReI8AYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHEfto87fw8WKzffv7bzMw1wIO/l76zQP6ZRnczuwA8BYkRQIwAYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHECCBGADECiBFAjABiBBAjgBgBxAggRgAxAogRQIwAYgQQI4AYAcRqv57e/Vxv9Pf1T9lbvDU8BgCI9AoWATDVE+mlOgAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Xr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Yr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Gr=new URL("data:image/png;base64,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",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Wr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Jr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB7d3BbRNBFIDhtwZzdge4BHeA9ojgQge0QAfQAR1QAhcQR1OCqQCXkDORvHg2LE6I196Zee/toPl/CQ4IJZY/RfbMOG9EiIiIiIiIqNQ2X7ebzeftWhRbCLkU8KRrtrJstpqIjZB5f/FEVn/+aS+3Xbt70+4lMwCNO4M3pIIIoGEX8IayEQE0agLeUBYigAZF4A0lIwKoXALeUBJiNcuI41v32Cc0/nuk44XWKUuMetaBS/movYi+XybeUDRiRQv55rn2InpICW8oCrG2nZi1NqIy3tDkx1njVpoaohHe0KTHWeteaDaiMd7QSp5d/vo1b2YnIzrh3UhzXFa8aneX/lPtpxHRiCXhhThOikAsDS8E4F1XEUvECwF4ahSxVLwQgA97hFgyXuip0L8NiG3/Fr5gvBCA5+sRpevhisULATjeWmzLxgvxGjhPKnghAP1TwwsB6JsqXghAv9TxQgD6ZIIXAtA+M7wQgLaZ4oUAtMscLwSgTS54IQD1c8MLAaibK14IQN1u5Nfxj2MA6qb+udNrAaifKyKANrkhAmiXCyKAtpkjAmifKSKAPpkhAuiXCSKAvqkjAuifKiKA86SGWM/nQrvuh5Q2VmUp749/vxUiIiKKLvtFffPl+yex/0WQyJrd7vWLd1JB+e9Cn3Qf5ND/KtZaSqk7VDPEL3sduHvZ7mXRtcef5b2QeyoLeRDnS20nBsR5Ut1KA9E/9b1QEH0z2cwG0S+z0wgQfTI9TgLRPvPzQBBtcznQBdEutxN5EG3y/UjFIcweMx1dVV1ugE5T/6rLBRA8u8wBwbPNFBA8+8wAwfPJBBA8v9QBwfNNFRA8/9QAwZsnFUDw5isbELx5ywL0uxSDDfCxkgE9bzThFGO8JEDv62g4ihovGnCuu4RAPF8U4NwXQYH4uMmApdziBeLDJgGWdgUbiKeuApZ6fx6Id10ELP3yQxCv/QQu+kW05Qjh7BnTtSNeBDR+ctQGhNeMePU10OjJUZ/uXivipHehyk+O2Wj+0+NsfkolTV4HKiGa36vQP87brooJFaHoaQ6bb9t14lQK90sxaihpHEcCInhGJc9TiUAEz7CsgTgTEMEzLn/U1jgieA6pjKQ6gwieU2ozxe4hrsD7TwuI/QY4ERERERERldpvO99jwLC0P3AAAAAASUVORK5CYII=",g&&g.tagName.toUpperCase()==="SCRIPT"&&g.src||new URL("rio-assist.js",document.baseURI).href).href,Zr=[{id:"status",iconUrl:Xr,ariaLabel:"Status"},{id:"info",iconUrl:Yr,ariaLabel:"Informacoes"},{id:"profile",iconUrl:Gr,ariaLabel:"Perfil de usuario"}],Kr=t=>{var u;const e=ru(t),n=(u=t.headerActions)!=null&&u.length?t.headerActions:Zr;return w`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button
          type="button"
          class="rail-button"
          aria-label="Ir para home"
          @click=${()=>t.handleHomeNavigation()}
        >
          <img src=${Vr} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="rail-button rail-button--close"
          aria-label="Fechar tela cheia"
          @click=${()=>t.exitFullscreen(!0)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M10.5 3l-5 5 5 5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="fullscreen-shell__content">
        <header class="fullscreen-header">
          <div class="fullscreen-header__title">
            <div class="fullscreen-header__brand-row">
              <span class="fullscreen-header__brand">${t.titleText}</span>
              <button
                type="button"
                class=${P({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":t.showNewConversationShortcut})}
                aria-label="Alternar ações de conversa"
                @click=${()=>t.toggleNewConversationShortcut()}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="fullscreen-header__tabs">
            ${t.activeConversationTitle?w`<span class="fullscreen-header__tab">${t.activeConversationTitle}</span>`:null}
          </div>

          <div class="fullscreen-header__actions">
            ${n.map((i,r)=>w`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label=${i.ariaLabel??"Acao do cabecalho"}
                  @click=${()=>t.handleHeaderActionClick(i,r)}
                >
                  <img src=${i.iconUrl} alt="" aria-hidden="true" />
                </button>
              `)}
          </div>
        </header>

        <button
          type="button"
          class="fullscreen-exit-inline"
          aria-label="Retornar para painel compacto"
          @click=${()=>t.exitFullscreen(!0)}
        >
          <img src=${Jr} alt="" aria-hidden="true" />
        </button>

        <div class="fullscreen-utility-bar">
          <button
            type="button"
            class="short-answer-toggle short-answer-toggle--header"
            role="switch"
            aria-checked=${t.shortAnswerEnabled}
            @click=${()=>t.toggleShortAnswers()}
          >
            <span
              class=${P({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":t.shortAnswerEnabled})}
              aria-hidden="true"
            >
              <span class="short-answer-toggle__thumb"></span>
            </span>
            <span class="short-answer-toggle__label">Respostas rápidas</span>
          </button>
          ${t.hasActiveConversation?w`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label="Iniciar nova conversa"
                  @click=${()=>t.handleCreateConversation()}
                >
                  <img src=${Wr} alt="" aria-hidden="true" />
                </button>
              `:null}
        </div>

        <div class="fullscreen-grid">
          ${uu(t,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${e}
          </div>
        </div>
      </div>
    </section>
  `},$r=t=>{const e=P({canvas:!0,"canvas--fullscreen":t.isFullscreen,"canvas--open":t.open});return w`
    <div class=${e}>
      ${br(t)}
      ${qr(t)}
      ${t.isFullscreen?Kr(t):null}
      ${t.renameConversationTarget?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Digite o novo título para a conversa:</p>
                <input
                  class="dialog__input"
                  type="text"
                  .value=${t.renameConversationTarget.draft}
                  @input=${n=>t.handleRenameDraft(n)}
                  aria-label="Novo titulo da conversa"
                />
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>t.cancelRenameConversation()}>
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>t.confirmRenameConversation()}
                  >
                    Renomear
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${t.deleteConversationTarget?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Deseja realmente excluir essa conversa?</p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>t.cancelDeleteConversation()}>
                    Cancelar
                  </button>
                  <button type="button" class="dialog__button dialog__button--danger" @click=${()=>t.confirmDeleteConversation()}>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${t.conversationActionError?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message dialog__message--title">
                  Erro ao
                  ${t.conversationActionError.action==="delete"?"excluir":"renomear"}
                  conversa:
                </p>
                <p class="dialog__message">
                  O agente retornou o seguinte erro ao tentar
                  ${t.conversationActionError.action==="delete"?"excluir":"renomear"}
                  a conversa:
                </p>
                <p class="dialog__message dialog__message--error">
                  ${t.conversationActionError.message}
                </p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>t.cancelConversationActionError()}>
                    Cancelar ação
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>t.retryConversationAction()}
                  >
                    Tentar novamente
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${t.voiceCancelDialogOpen?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Deseja cancelar a mensagem de voz?</p>
                <div class="dialog__actions">
                  <button
                    type="button"
                    class="dialog__button dialog__button--danger"
                    @click=${()=>t.handleVoiceDialogConfirm()}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>t.handleVoiceDialogContinue()}
                  >
                    ${t.voiceCancelDialogMode==="cancel"?"CONTINUAR GRAVAÇÃO":"MANTER GRAVAÇÃO"}
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${t.newConversationConfirmOpen?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message dialog__message--title">
                  DESEJA MESMO INICIAR UMA NOVA CONVERSA?
                </p>
                <p class="dialog__message">
                  Não se preocupe: a conversa atual continuará salva e você poderá acessá-la na
                  listagem de conversas recentes.
                </p>
                <div class="dialog__actions">
                  <button
                    type="button"
                    class="dialog__button dialog__button--ghost"
                    @click=${()=>t.cancelCreateConversation()}
                  >
                    CONTINUAR CONVERSA ATUAL
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>t.confirmCreateConversation()}
                  >
                    INICIAR NOVA CONVERSA
                  </button>
                </div>
              </div>
            </div>
          `:null}
    </div>
  `},eo="wss://ws.volkswagen.latam-sandbox.rio.cloud",to=5*6e4;class no{constructor(e){this.socket=null,this.connectPromise=null,this.listeners=new Set,this.heartbeatId=null,this.token=e}matchesToken(e){return this.token===e}async sendMessage(e,n,u){const i=await this.ensureConnection(),r={action:"sendMessage",message:e,conversationId:n??null,...u??{}};console.info("[RioAssist][ws] enviando payload de mensagem",r),i.send(JSON.stringify(r))}async requestHistory(e={}){const n=await this.ensureConnection(),u={action:"getHistory",limit:e.limit??50,conversationId:e.conversationId??null};n.send(JSON.stringify(u))}async renameConversation(e,n){const u=await this.ensureConnection(),i={action:"renameConversation",conversationId:e,newTitle:n};console.info("[RioAssist][ws] enviando renameConversation",i),u.send(JSON.stringify(i))}async deleteConversation(e){const n=await this.ensureConnection(),u={action:"deleteConversation",conversationId:e};console.info("[RioAssist][ws] enviando deleteConversation",u),n.send(JSON.stringify(u))}onMessage(e){return this.listeners.add(e),()=>this.listeners.delete(e)}close(){this.stopHeartbeat(),this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${eo}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",e=>this.handleMessage(e)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null,this.stopHeartbeat()}),this.connectPromise=new Promise((e,n)=>{if(!this.socket){n(new Error("Falha ao criar conexão WebSocket."));return}const u=()=>{r(),this.socket&&this.startHeartbeat(this.socket),e()},i=()=>{var o;r(),this.stopHeartbeat(),(o=this.socket)==null||o.close(),this.socket=null,this.connectPromise=null,n(new Error("Não foi possível abrir conexão com o websocket do UptAIme Assist."))},r=()=>{var o,s;(o=this.socket)==null||o.removeEventListener("open",u),(s=this.socket)==null||s.removeEventListener("error",i)};this.socket.addEventListener("open",u,{once:!0}),this.socket.addEventListener("error",i,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do UptAIme Assist não está pronta.");return this.socket}startHeartbeat(e){this.stopHeartbeat(),this.heartbeatId=window.setInterval(()=>{e.readyState===WebSocket.OPEN&&e.send(JSON.stringify({action:"ping"}))},to)}stopHeartbeat(){this.heartbeatId!==null&&(window.clearInterval(this.heartbeatId),this.heartbeatId=null)}async handleMessage(e){const n=await this.readMessage(e.data);let u=null,i=n,r;try{if(u=JSON.parse(n),typeof u=="object"&&u!==null){const o=u.action??u.type??u.event;typeof o=="string"&&(r=o);const s=u.message??u.response??u.text??u.content;typeof s=="string"&&(i=s)}}catch{u=null}this.listeners.forEach(o=>o({text:i,raw:n,data:u,action:r}))}async readMessage(e){return typeof e=="string"?e:e instanceof Blob?e.text():e instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(e)):ArrayBuffer.isView(e)?new TextDecoder().decode(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)):String(e??"")}}const ou={};function uo(t){let e=ou[t];if(e)return e;e=ou[t]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);e.push(u)}for(let n=0;n<t.length;n++){const u=t.charCodeAt(n);e[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return e}function Be(t,e){typeof e!="string"&&(e=Be.defaultChars);const n=uo(e);return t.replace(/(%[a-f0-9]{2})+/gi,function(u){let i="";for(let r=0,o=u.length;r<o;r+=3){const s=parseInt(u.slice(r+1,r+3),16);if(s<128){i+=n[s];continue}if((s&224)===192&&r+3<o){const a=parseInt(u.slice(r+4,r+6),16);if((a&192)===128){const c=s<<6&1984|a&63;c<128?i+="��":i+=String.fromCharCode(c),r+=3;continue}}if((s&240)===224&&r+6<o){const a=parseInt(u.slice(r+4,r+6),16),c=parseInt(u.slice(r+7,r+9),16);if((a&192)===128&&(c&192)===128){const d=s<<12&61440|a<<6&4032|c&63;d<2048||d>=55296&&d<=57343?i+="���":i+=String.fromCharCode(d),r+=6;continue}}if((s&248)===240&&r+9<o){const a=parseInt(u.slice(r+4,r+6),16),c=parseInt(u.slice(r+7,r+9),16),d=parseInt(u.slice(r+10,r+12),16);if((a&192)===128&&(c&192)===128&&(d&192)===128){let f=s<<18&1835008|a<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),r+=9;continue}}i+="�"}return i})}Be.defaultChars=";/?:@&=+$,#",Be.componentChars="";const su={};function io(t){let e=su[t];if(e)return e;e=su[t]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?e.push(u):e.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<t.length;n++)e[t.charCodeAt(n)]=t[n];return e}function Ke(t,e,n){typeof e!="string"&&(n=e,e=Ke.defaultChars),typeof n>"u"&&(n=!0);const u=io(e);let i="";for(let r=0,o=t.length;r<o;r++){const s=t.charCodeAt(r);if(n&&s===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3))){i+=t.slice(r,r+3),r+=2;continue}if(s<128){i+=u[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&r+1<o){const a=t.charCodeAt(r+1);if(a>=56320&&a<=57343){i+=encodeURIComponent(t[r]+t[r+1]),r++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(t[r])}return i}Ke.defaultChars=";/?:@&=+$,-_.!~*'()#",Ke.componentChars="-_.!~*'()";function Jt(t){let e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||"",e}function mt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const ro=/^([a-z0-9.+-]+:)/i,oo=/:[0-9]*$/,so=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ao=["<",">",'"',"`"," ","\r",`
`,"	"],co=["{","}","|","\\","^","`"].concat(ao),lo=["'"].concat(co),au=["%","/","?",";","#"].concat(lo),cu=["/","?","#"],fo=255,lu=/^[+a-z0-9A-Z_-]{0,63}$/,ho=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,du={javascript:!0,"javascript:":!0},fu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Zt(t,e){if(t&&t instanceof mt)return t;const n=new mt;return n.parse(t,e),n}mt.prototype.parse=function(t,e){let n,u,i,r=t;if(r=r.trim(),!e&&t.split("#").length===1){const c=so.exec(r);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=ro.exec(r);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,r=r.substr(o.length)),(e||o||r.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=r.substr(0,2)==="//",i&&!(o&&du[o])&&(r=r.substr(2),this.slashes=!0)),!du[o]&&(i||o&&!fu[o])){let c=-1;for(let h=0;h<cu.length;h++)u=r.indexOf(cu[h]),u!==-1&&(c===-1||u<c)&&(c=u);let d,f;c===-1?f=r.lastIndexOf("@"):f=r.lastIndexOf("@",c),f!==-1&&(d=r.slice(0,f),r=r.slice(f+1),this.auth=d),c=-1;for(let h=0;h<au.length;h++)u=r.indexOf(au[h]),u!==-1&&(c===-1||u<c)&&(c=u);c===-1&&(c=r.length),r[c-1]===":"&&c--;const p=r.slice(0,c);r=r.slice(c),this.parseHost(p),this.hostname=this.hostname||"";const A=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!A){const h=this.hostname.split(/\./);for(let k=0,S=h.length;k<S;k++){const R=h[k];if(R&&!R.match(lu)){let E="";for(let v=0,m=R.length;v<m;v++)R.charCodeAt(v)>127?E+="x":E+=R[v];if(!E.match(lu)){const v=h.slice(0,k),m=h.slice(k+1),y=R.match(ho);y&&(v.push(y[1]),m.unshift(y[2])),m.length&&(r=m.join(".")+r),this.hostname=v.join(".");break}}}}this.hostname.length>fo&&(this.hostname=""),A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=r.indexOf("#");s!==-1&&(this.hash=r.substr(s),r=r.slice(0,s));const a=r.indexOf("?");return a!==-1&&(this.search=r.substr(a),r=r.slice(0,a)),r&&(this.pathname=r),fu[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this},mt.prototype.parseHost=function(t){let e=oo.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};const Ao=Object.freeze(Object.defineProperty({__proto__:null,decode:Be,encode:Ke,format:Jt,parse:Zt},Symbol.toStringTag,{value:"Module"})),hu=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Au=/[\0-\x1F\x7F-\x9F]/,po=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Kt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,pu=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,gu=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,go=Object.freeze(Object.defineProperty({__proto__:null,Any:hu,Cc:Au,Cf:po,P:Kt,S:pu,Z:gu},Symbol.toStringTag,{value:"Module"})),bo=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t=>t.charCodeAt(0))),mo=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t=>t.charCodeAt(0)));var $t;const xo=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Co=($t=String.fromCodePoint)!==null&&$t!==void 0?$t:function(t){let e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|t&1023),e+=String.fromCharCode(t),e};function vo(t){var e;return t>=55296&&t<=57343||t>1114111?65533:(e=xo.get(t))!==null&&e!==void 0?e:t}var N;(function(t){t[t.NUM=35]="NUM",t[t.SEMI=59]="SEMI",t[t.EQUALS=61]="EQUALS",t[t.ZERO=48]="ZERO",t[t.NINE=57]="NINE",t[t.LOWER_A=97]="LOWER_A",t[t.LOWER_F=102]="LOWER_F",t[t.LOWER_X=120]="LOWER_X",t[t.LOWER_Z=122]="LOWER_Z",t[t.UPPER_A=65]="UPPER_A",t[t.UPPER_F=70]="UPPER_F",t[t.UPPER_Z=90]="UPPER_Z"})(N||(N={}));const wo=32;var ge;(function(t){t[t.VALUE_LENGTH=49152]="VALUE_LENGTH",t[t.BRANCH_LENGTH=16256]="BRANCH_LENGTH",t[t.JUMP_TABLE=127]="JUMP_TABLE"})(ge||(ge={}));function en(t){return t>=N.ZERO&&t<=N.NINE}function Eo(t){return t>=N.UPPER_A&&t<=N.UPPER_F||t>=N.LOWER_A&&t<=N.LOWER_F}function yo(t){return t>=N.UPPER_A&&t<=N.UPPER_Z||t>=N.LOWER_A&&t<=N.LOWER_Z||en(t)}function ko(t){return t===N.EQUALS||yo(t)}var Q;(function(t){t[t.EntityStart=0]="EntityStart",t[t.NumericStart=1]="NumericStart",t[t.NumericDecimal=2]="NumericDecimal",t[t.NumericHex=3]="NumericHex",t[t.NamedEntity=4]="NamedEntity"})(Q||(Q={}));var be;(function(t){t[t.Legacy=0]="Legacy",t[t.Strict=1]="Strict",t[t.Attribute=2]="Attribute"})(be||(be={}));class Io{constructor(e,n,u){this.decodeTree=e,this.emitCodePoint=n,this.errors=u,this.state=Q.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=be.Strict}startEntity(e){this.decodeMode=e,this.state=Q.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,n){switch(this.state){case Q.EntityStart:return e.charCodeAt(n)===N.NUM?(this.state=Q.NumericStart,this.consumed+=1,this.stateNumericStart(e,n+1)):(this.state=Q.NamedEntity,this.stateNamedEntity(e,n));case Q.NumericStart:return this.stateNumericStart(e,n);case Q.NumericDecimal:return this.stateNumericDecimal(e,n);case Q.NumericHex:return this.stateNumericHex(e,n);case Q.NamedEntity:return this.stateNamedEntity(e,n)}}stateNumericStart(e,n){return n>=e.length?-1:(e.charCodeAt(n)|wo)===N.LOWER_X?(this.state=Q.NumericHex,this.consumed+=1,this.stateNumericHex(e,n+1)):(this.state=Q.NumericDecimal,this.stateNumericDecimal(e,n))}addToNumericResult(e,n,u,i){if(n!==u){const r=u-n;this.result=this.result*Math.pow(i,r)+parseInt(e.substr(n,r),i),this.consumed+=r}}stateNumericHex(e,n){const u=n;for(;n<e.length;){const i=e.charCodeAt(n);if(en(i)||Eo(i))n+=1;else return this.addToNumericResult(e,u,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,u,n,16),-1}stateNumericDecimal(e,n){const u=n;for(;n<e.length;){const i=e.charCodeAt(n);if(en(i))n+=1;else return this.addToNumericResult(e,u,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,u,n,10),-1}emitNumericEntity(e,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===N.SEMI)this.consumed+=1;else if(this.decodeMode===be.Strict)return 0;return this.emitCodePoint(vo(this.result),this.consumed),this.errors&&(e!==N.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,n){const{decodeTree:u}=this;let i=u[this.treeIndex],r=(i&ge.VALUE_LENGTH)>>14;for(;n<e.length;n++,this.excess++){const o=e.charCodeAt(n);if(this.treeIndex=So(u,i,this.treeIndex+Math.max(1,r),o),this.treeIndex<0)return this.result===0||this.decodeMode===be.Attribute&&(r===0||ko(o))?0:this.emitNotTerminatedNamedEntity();if(i=u[this.treeIndex],r=(i&ge.VALUE_LENGTH)>>14,r!==0){if(o===N.SEMI)return this.emitNamedEntityData(this.treeIndex,r,this.consumed+this.excess);this.decodeMode!==be.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:n,decodeTree:u}=this,i=(u[n]&ge.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,n,u){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[e]&~ge.VALUE_LENGTH:i[e+1],u),n===3&&this.emitCodePoint(i[e+2],u),u}end(){var e;switch(this.state){case Q.NamedEntity:return this.result!==0&&(this.decodeMode!==be.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Q.NumericDecimal:return this.emitNumericEntity(0,2);case Q.NumericHex:return this.emitNumericEntity(0,3);case Q.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Q.EntityStart:return 0}}}function bu(t){let e="";const n=new Io(t,u=>e+=Co(u));return function(i,r){let o=0,s=0;for(;(s=i.indexOf("&",s))>=0;){e+=i.slice(o,s),n.startEntity(r);const c=n.write(i,s+1);if(c<0){o=s+n.end();break}o=s+c,s=c===0?o+1:o}const a=e+i.slice(o);return e="",a}}function So(t,e,n,u){const i=(e&ge.BRANCH_LENGTH)>>7,r=e&ge.JUMP_TABLE;if(i===0)return r!==0&&u===r?n:-1;if(r){const a=u-r;return a<0||a>=i?-1:t[n+a]-1}let o=n,s=o+i-1;for(;o<=s;){const a=o+s>>>1,c=t[a];if(c<u)o=a+1;else if(c>u)s=a-1;else return t[a+i]}return-1}const Do=bu(bo);bu(mo);function mu(t,e=be.Legacy){return Do(t,e)}function Ro(t){return Object.prototype.toString.call(t)}function tn(t){return Ro(t)==="[object String]"}const Bo=Object.prototype.hasOwnProperty;function _o(t,e){return Bo.call(t,e)}function xt(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){t[u]=n[u]})}}),t}function xu(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function nn(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Ct(t){if(t>65535){t-=65536;const e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}const Cu=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Fo=/&([a-z#][a-z0-9]{1,31});/gi,To=new RegExp(Cu.source+"|"+Fo.source,"gi"),Uo=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Mo(t,e){if(e.charCodeAt(0)===35&&Uo.test(e)){const u=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return nn(u)?Ct(u):t}const n=mu(t);return n!==t?n:t}function Lo(t){return t.indexOf("\\")<0?t:t.replace(Cu,"$1")}function _e(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(To,function(e,n,u){return n||Mo(e,u)})}const Oo=/[&<>"]/,Po=/[&<>"]/g,No={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Qo(t){return No[t]}function me(t){return Oo.test(t)?t.replace(Po,Qo):t}const zo=/[.?*+^$[\]\\(){}|-]/g;function Ho(t){return t.replace(zo,"\\$&")}function B(t){switch(t){case 9:case 32:return!0}return!1}function $e(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function et(t){return Kt.test(t)||pu.test(t)}function tt(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function vt(t){return t=t.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}const jo=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:xu,assign:xt,escapeHtml:me,escapeRE:Ho,fromCodePoint:Ct,has:_o,isMdAsciiPunct:tt,isPunctChar:et,isSpace:B,isString:tn,isValidEntityCode:nn,isWhiteSpace:$e,lib:{mdurl:Ao,ucmicro:go},normalizeReference:vt,unescapeAll:_e,unescapeMd:Lo},Symbol.toStringTag,{value:"Module"}));function qo(t,e,n){let u,i,r,o;const s=t.posMax,a=t.pos;for(t.pos=e+1,u=1;t.pos<s;){if(r=t.src.charCodeAt(t.pos),r===93&&(u--,u===0)){i=!0;break}if(o=t.pos,t.md.inline.skipToken(t),r===91){if(o===t.pos-1)u++;else if(n)return t.pos=a,-1}}let c=-1;return i&&(c=t.pos),t.pos=a,c}function Vo(t,e,n){let u,i=e;const r={ok:!1,pos:0,str:""};if(t.charCodeAt(i)===60){for(i++;i<n;){if(u=t.charCodeAt(i),u===10||u===60)return r;if(u===62)return r.pos=i+1,r.str=_e(t.slice(e+1,i)),r.ok=!0,r;if(u===92&&i+1<n){i+=2;continue}i++}return r}let o=0;for(;i<n&&(u=t.charCodeAt(i),!(u===32||u<32||u===127));){if(u===92&&i+1<n){if(t.charCodeAt(i+1)===32)break;i+=2;continue}if(u===40&&(o++,o>32))return r;if(u===41){if(o===0)break;o--}i++}return e===i||o!==0||(r.str=_e(t.slice(e,i)),r.pos=i,r.ok=!0),r}function Xo(t,e,n,u){let i,r=e;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)o.str=u.str,o.marker=u.marker;else{if(r>=n)return o;let s=t.charCodeAt(r);if(s!==34&&s!==39&&s!==40)return o;e++,r++,s===40&&(s=41),o.marker=s}for(;r<n;){if(i=t.charCodeAt(r),i===o.marker)return o.pos=r+1,o.str+=_e(t.slice(e,r)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&r+1<n&&r++,r++}return o.can_continue=!0,o.str+=_e(t.slice(e,r)),o}const Yo=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Vo,parseLinkLabel:qo,parseLinkTitle:Xo},Symbol.toStringTag,{value:"Module"})),ne={};ne.code_inline=function(t,e,n,u,i){const r=t[e];return"<code"+i.renderAttrs(r)+">"+me(r.content)+"</code>"},ne.code_block=function(t,e,n,u,i){const r=t[e];return"<pre"+i.renderAttrs(r)+"><code>"+me(t[e].content)+`</code></pre>
`},ne.fence=function(t,e,n,u,i){const r=t[e],o=r.info?_e(r.info).trim():"";let s="",a="";if(o){const d=o.split(/(\s+)/g);s=d[0],a=d.slice(2).join("")}let c;if(n.highlight?c=n.highlight(r.content,s,a)||me(r.content):c=me(r.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=r.attrIndex("class"),f=r.attrs?r.attrs.slice():[];d<0?f.push(["class",n.langPrefix+s]):(f[d]=f[d].slice(),f[d][1]+=" "+n.langPrefix+s);const p={attrs:f};return`<pre><code${i.renderAttrs(p)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(r)}>${c}</code></pre>
`},ne.image=function(t,e,n,u,i){const r=t[e];return r.attrs[r.attrIndex("alt")][1]=i.renderInlineAsText(r.children,n,u),i.renderToken(t,e,n)},ne.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`},ne.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},ne.text=function(t,e){return me(t[e].content)},ne.html_block=function(t,e){return t[e].content},ne.html_inline=function(t,e){return t[e].content};function Fe(){this.rules=xt({},ne)}Fe.prototype.renderAttrs=function(e){let n,u,i;if(!e.attrs)return"";for(i="",n=0,u=e.attrs.length;n<u;n++)i+=" "+me(e.attrs[n][0])+'="'+me(e.attrs[n][1])+'"';return i},Fe.prototype.renderToken=function(e,n,u){const i=e[n];let r="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&e[n-1].hidden&&(r+=`
`),r+=(i.nesting===-1?"</":"<")+i.tag,r+=this.renderAttrs(i),i.nesting===0&&u.xhtmlOut&&(r+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&n+1<e.length)){const s=e[n+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(o=!1)}return r+=o?`>
`:">",r},Fe.prototype.renderInline=function(t,e,n){let u="";const i=this.rules;for(let r=0,o=t.length;r<o;r++){const s=t[r].type;typeof i[s]<"u"?u+=i[s](t,r,e,n,this):u+=this.renderToken(t,r,e)}return u},Fe.prototype.renderInlineAsText=function(t,e,n){let u="";for(let i=0,r=t.length;i<r;i++)switch(t[i].type){case"text":u+=t[i].content;break;case"image":u+=this.renderInlineAsText(t[i].children,e,n);break;case"html_inline":case"html_block":u+=t[i].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u},Fe.prototype.render=function(t,e,n){let u="";const i=this.rules;for(let r=0,o=t.length;r<o;r++){const s=t[r].type;s==="inline"?u+=this.renderInline(t[r].children,e,n):typeof i[s]<"u"?u+=i[s](t,r,e,n,this):u+=this.renderToken(t,r,e,n)}return u};function G(){this.__rules__=[],this.__cache__=null}G.prototype.__find__=function(t){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1},G.prototype.__compile__=function(){const t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){e.indexOf(u)<0&&e.push(u)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||t.__cache__[n].push(u.fn))})})},G.prototype.at=function(t,e,n){const u=this.__find__(t),i=n||{};if(u===-1)throw new Error("Parser rule not found: "+t);this.__rules__[u].fn=e,this.__rules__[u].alt=i.alt||[],this.__cache__=null},G.prototype.before=function(t,e,n,u){const i=this.__find__(t),r=u||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null},G.prototype.after=function(t,e,n,u){const i=this.__find__(t),r=u||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null},G.prototype.push=function(t,e,n){const u=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:u.alt||[]}),this.__cache__=null},G.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(u){const i=this.__find__(u);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!0,n.push(u)},this),this.__cache__=null,n},G.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)},G.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);const n=[];return t.forEach(function(u){const i=this.__find__(u);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!1,n.push(u)},this),this.__cache__=null,n},G.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};function ee(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ee.prototype.attrIndex=function(e){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,i=n.length;u<i;u++)if(n[u][0]===e)return u;return-1},ee.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},ee.prototype.attrSet=function(e,n){const u=this.attrIndex(e),i=[e,n];u<0?this.attrPush(i):this.attrs[u]=i},ee.prototype.attrGet=function(e){const n=this.attrIndex(e);let u=null;return n>=0&&(u=this.attrs[n][1]),u},ee.prototype.attrJoin=function(e,n){const u=this.attrIndex(e);u<0?this.attrPush([e,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function vu(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}vu.prototype.Token=ee;const Go=/\r\n?|\n/g,Wo=/\0/g;function Jo(t){let e;e=t.src.replace(Go,`
`),e=e.replace(Wo,"�"),t.src=e}function Zo(t){let e;t.inlineMode?(e=new t.Token("inline","",0),e.content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}function Ko(t){const e=t.tokens;for(let n=0,u=e.length;n<u;n++){const i=e[n];i.type==="inline"&&t.md.inline.parse(i.content,t.md,t.env,i.children)}}function $o(t){return/^<a[>\s]/i.test(t)}function es(t){return/^<\/a\s*>/i.test(t)}function ts(t){const e=t.tokens;if(t.md.options.linkify)for(let n=0,u=e.length;n<u;n++){if(e[n].type!=="inline"||!t.md.linkify.pretest(e[n].content))continue;let i=e[n].children,r=0;for(let o=i.length-1;o>=0;o--){const s=i[o];if(s.type==="link_close"){for(o--;i[o].level!==s.level&&i[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&($o(s.content)&&r>0&&r--,es(s.content)&&r++),!(r>0)&&s.type==="text"&&t.md.linkify.test(s.content)){const a=s.content;let c=t.md.linkify.match(a);const d=[];let f=s.level,p=0;c.length>0&&c[0].index===0&&o>0&&i[o-1].type==="text_special"&&(c=c.slice(1));for(let A=0;A<c.length;A++){const h=c[A].url,k=t.md.normalizeLink(h);if(!t.md.validateLink(k))continue;let S=c[A].text;c[A].schema?c[A].schema==="mailto:"&&!/^mailto:/i.test(S)?S=t.md.normalizeLinkText("mailto:"+S).replace(/^mailto:/,""):S=t.md.normalizeLinkText(S):S=t.md.normalizeLinkText("http://"+S).replace(/^http:\/\//,"");const R=c[A].index;if(R>p){const y=new t.Token("text","",0);y.content=a.slice(p,R),y.level=f,d.push(y)}const E=new t.Token("link_open","a",1);E.attrs=[["href",k]],E.level=f++,E.markup="linkify",E.info="auto",d.push(E);const v=new t.Token("text","",0);v.content=S,v.level=f,d.push(v);const m=new t.Token("link_close","a",-1);m.level=--f,m.markup="linkify",m.info="auto",d.push(m),p=c[A].lastIndex}if(p<a.length){const A=new t.Token("text","",0);A.content=a.slice(p),A.level=f,d.push(A)}e[n].children=i=xu(i,o,d)}}}}const wu=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,ns=/\((c|tm|r)\)/i,us=/\((c|tm|r)\)/ig,is={c:"©",r:"®",tm:"™"};function rs(t,e){return is[e.toLowerCase()]}function os(t){let e=0;for(let n=t.length-1;n>=0;n--){const u=t[n];u.type==="text"&&!e&&(u.content=u.content.replace(us,rs)),u.type==="link_open"&&u.info==="auto"&&e--,u.type==="link_close"&&u.info==="auto"&&e++}}function ss(t){let e=0;for(let n=t.length-1;n>=0;n--){const u=t[n];u.type==="text"&&!e&&wu.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&e--,u.type==="link_close"&&u.info==="auto"&&e++}}function as(t){let e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)t.tokens[e].type==="inline"&&(ns.test(t.tokens[e].content)&&os(t.tokens[e].children),wu.test(t.tokens[e].content)&&ss(t.tokens[e].children))}const cs=/['"]/,Eu=/['"]/g,yu="’";function wt(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function ls(t,e){let n;const u=[];for(let i=0;i<t.length;i++){const r=t[i],o=t[i].level;for(n=u.length-1;n>=0&&!(u[n].level<=o);n--);if(u.length=n+1,r.type!=="text")continue;let s=r.content,a=0,c=s.length;e:for(;a<c;){Eu.lastIndex=a;const d=Eu.exec(s);if(!d)break;let f=!0,p=!0;a=d.index+1;const A=d[0]==="'";let h=32;if(d.index-1>=0)h=s.charCodeAt(d.index-1);else for(n=i-1;n>=0&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n--)if(t[n].content){h=t[n].content.charCodeAt(t[n].content.length-1);break}let k=32;if(a<c)k=s.charCodeAt(a);else for(n=i+1;n<t.length&&!(t[n].type==="softbreak"||t[n].type==="hardbreak");n++)if(t[n].content){k=t[n].content.charCodeAt(0);break}const S=tt(h)||et(String.fromCharCode(h)),R=tt(k)||et(String.fromCharCode(k)),E=$e(h),v=$e(k);if(v?f=!1:R&&(E||S||(f=!1)),E?p=!1:S&&(v||R||(p=!1)),k===34&&d[0]==='"'&&h>=48&&h<=57&&(p=f=!1),f&&p&&(f=S,p=R),!f&&!p){A&&(r.content=wt(r.content,d.index,yu));continue}if(p)for(n=u.length-1;n>=0;n--){let m=u[n];if(u[n].level<o)break;if(m.single===A&&u[n].level===o){m=u[n];let y,D;A?(y=e.md.options.quotes[2],D=e.md.options.quotes[3]):(y=e.md.options.quotes[0],D=e.md.options.quotes[1]),r.content=wt(r.content,d.index,D),t[m.token].content=wt(t[m.token].content,m.pos,y),a+=D.length-1,m.token===i&&(a+=y.length-1),s=r.content,c=s.length,u.length=n;continue e}}f?u.push({token:i,pos:d.index,single:A,level:o}):p&&A&&(r.content=wt(r.content,d.index,yu))}}}function ds(t){if(t.md.options.typographer)for(let e=t.tokens.length-1;e>=0;e--)t.tokens[e].type!=="inline"||!cs.test(t.tokens[e].content)||ls(t.tokens[e].children,t)}function fs(t){let e,n;const u=t.tokens,i=u.length;for(let r=0;r<i;r++){if(u[r].type!=="inline")continue;const o=u[r].children,s=o.length;for(e=0;e<s;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=n=0;e<s;e++)o[e].type==="text"&&e+1<s&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==n&&(o[n]=o[e]),n++);e!==n&&(o.length=n)}}const un=[["normalize",Jo],["block",Zo],["inline",Ko],["linkify",ts],["replacements",as],["smartquotes",ds],["text_join",fs]];function rn(){this.ruler=new G;for(let t=0;t<un.length;t++)this.ruler.push(un[t][0],un[t][1])}rn.prototype.process=function(t){const e=this.ruler.getRules("");for(let n=0,u=e.length;n<u;n++)e[n](t)},rn.prototype.State=vu;function ue(t,e,n,u){this.src=t,this.md=e,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let r=0,o=0,s=0,a=0,c=i.length,d=!1;o<c;o++){const f=i.charCodeAt(o);if(!d)if(B(f)){s++,f===9?a+=4-a%4:a++;continue}else d=!0;(f===10||o===c-1)&&(f!==10&&o++,this.bMarks.push(r),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(a),this.bsCount.push(0),d=!1,s=0,a=0,r=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ue.prototype.push=function(t,e,n){const u=new ee(t,e,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u},ue.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},ue.prototype.skipEmptyLines=function(e){for(let n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},ue.prototype.skipSpaces=function(e){for(let n=this.src.length;e<n;e++){const u=this.src.charCodeAt(e);if(!B(u))break}return e},ue.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!B(this.src.charCodeAt(--e)))return e+1;return e},ue.prototype.skipChars=function(e,n){for(let u=this.src.length;e<u&&this.src.charCodeAt(e)===n;e++);return e},ue.prototype.skipCharsBack=function(e,n,u){if(e<=u)return e;for(;e>u;)if(n!==this.src.charCodeAt(--e))return e+1;return e},ue.prototype.getLines=function(e,n,u,i){if(e>=n)return"";const r=new Array(n-e);for(let o=0,s=e;s<n;s++,o++){let a=0;const c=this.bMarks[s];let d=c,f;for(s+1<n||i?f=this.eMarks[s]+1:f=this.eMarks[s];d<f&&a<u;){const p=this.src.charCodeAt(d);if(B(p))p===9?a+=4-(a+this.bsCount[s])%4:a++;else if(d-c<this.tShift[s])a++;else break;d++}a>u?r[o]=new Array(a-u+1).join(" ")+this.src.slice(d,f):r[o]=this.src.slice(d,f)}return r.join("")},ue.prototype.Token=ee;const hs=65536;function on(t,e){const n=t.bMarks[e]+t.tShift[e],u=t.eMarks[e];return t.src.slice(n,u)}function ku(t){const e=[],n=t.length;let u=0,i=t.charCodeAt(u),r=!1,o=0,s="";for(;u<n;)i===124&&(r?(s+=t.substring(o,u-1),o=u):(e.push(s+t.substring(o,u)),s="",o=u+1)),r=i===92,u++,i=t.charCodeAt(u);return e.push(s+t.substring(o)),e}function As(t,e,n,u){if(e+2>n)return!1;let i=e+1;if(t.sCount[i]<t.blkIndent||t.sCount[i]-t.blkIndent>=4)return!1;let r=t.bMarks[i]+t.tShift[i];if(r>=t.eMarks[i])return!1;const o=t.src.charCodeAt(r++);if(o!==124&&o!==45&&o!==58||r>=t.eMarks[i])return!1;const s=t.src.charCodeAt(r++);if(s!==124&&s!==45&&s!==58&&!B(s)||o===45&&B(s))return!1;for(;r<t.eMarks[i];){const m=t.src.charCodeAt(r);if(m!==124&&m!==45&&m!==58&&!B(m))return!1;r++}let a=on(t,e+1),c=a.split("|");const d=[];for(let m=0;m<c.length;m++){const y=c[m].trim();if(!y){if(m===0||m===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(y))return!1;y.charCodeAt(y.length-1)===58?d.push(y.charCodeAt(0)===58?"center":"right"):y.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=on(t,e).trim(),a.indexOf("|")===-1||t.sCount[e]-t.blkIndent>=4)return!1;c=ku(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(u)return!0;const p=t.parentType;t.parentType="table";const A=t.md.block.ruler.getRules("blockquote"),h=t.push("table_open","table",1),k=[e,0];h.map=k;const S=t.push("thead_open","thead",1);S.map=[e,e+1];const R=t.push("tr_open","tr",1);R.map=[e,e+1];for(let m=0;m<c.length;m++){const y=t.push("th_open","th",1);d[m]&&(y.attrs=[["style","text-align:"+d[m]]]);const D=t.push("inline","",0);D.content=c[m].trim(),D.children=[],t.push("th_close","th",-1)}t.push("tr_close","tr",-1),t.push("thead_close","thead",-1);let E,v=0;for(i=e+2;i<n&&!(t.sCount[i]<t.blkIndent);i++){let m=!1;for(let D=0,M=A.length;D<M;D++)if(A[D](t,i,n,!0)){m=!0;break}if(m||(a=on(t,i).trim(),!a)||t.sCount[i]-t.blkIndent>=4||(c=ku(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),v+=f-c.length,v>hs))break;if(i===e+2){const D=t.push("tbody_open","tbody",1);D.map=E=[e+2,0]}const y=t.push("tr_open","tr",1);y.map=[i,i+1];for(let D=0;D<f;D++){const M=t.push("td_open","td",1);d[D]&&(M.attrs=[["style","text-align:"+d[D]]]);const Z=t.push("inline","",0);Z.content=c[D]?c[D].trim():"",Z.children=[],t.push("td_close","td",-1)}t.push("tr_close","tr",-1)}return E&&(t.push("tbody_close","tbody",-1),E[1]=i),t.push("table_close","table",-1),k[1]=i,t.parentType=p,t.line=i,!0}function ps(t,e,n){if(t.sCount[e]-t.blkIndent<4)return!1;let u=e+1,i=u;for(;u<n;){if(t.isEmpty(u)){u++;continue}if(t.sCount[u]-t.blkIndent>=4){u++,i=u;continue}break}t.line=i;const r=t.push("code_block","code",0);return r.content=t.getLines(e,i,4+t.blkIndent,!1)+`
`,r.map=[e,t.line],!0}function gs(t,e,n,u){let i=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||i+3>r)return!1;const o=t.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=t.skipChars(i,o);let a=i-s;if(a<3)return!1;const c=t.src.slice(s,i),d=t.src.slice(i,r);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(u)return!0;let f=e,p=!1;for(;f++,!(f>=n||(i=s=t.bMarks[f]+t.tShift[f],r=t.eMarks[f],i<r&&t.sCount[f]<t.blkIndent));)if(t.src.charCodeAt(i)===o&&!(t.sCount[f]-t.blkIndent>=4)&&(i=t.skipChars(i,o),!(i-s<a)&&(i=t.skipSpaces(i),!(i<r)))){p=!0;break}a=t.sCount[e],t.line=f+(p?1:0);const A=t.push("fence","code",0);return A.info=d,A.content=t.getLines(e+1,f,a,!0),A.markup=c,A.map=[e,t.line],!0}function bs(t,e,n,u){let i=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];const o=t.lineMax;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(i)!==62)return!1;if(u)return!0;const s=[],a=[],c=[],d=[],f=t.md.block.ruler.getRules("blockquote"),p=t.parentType;t.parentType="blockquote";let A=!1,h;for(h=e;h<n;h++){const v=t.sCount[h]<t.blkIndent;if(i=t.bMarks[h]+t.tShift[h],r=t.eMarks[h],i>=r)break;if(t.src.charCodeAt(i++)===62&&!v){let y=t.sCount[h]+1,D,M;t.src.charCodeAt(i)===32?(i++,y++,M=!1,D=!0):t.src.charCodeAt(i)===9?(D=!0,(t.bsCount[h]+y)%4===3?(i++,y++,M=!1):M=!0):D=!1;let Z=y;for(s.push(t.bMarks[h]),t.bMarks[h]=i;i<r;){const se=t.src.charCodeAt(i);if(B(se))se===9?Z+=4-(Z+t.bsCount[h]+(M?1:0))%4:Z++;else break;i++}A=i>=r,a.push(t.bsCount[h]),t.bsCount[h]=t.sCount[h]+1+(D?1:0),c.push(t.sCount[h]),t.sCount[h]=Z-y,d.push(t.tShift[h]),t.tShift[h]=i-t.bMarks[h];continue}if(A)break;let m=!1;for(let y=0,D=f.length;y<D;y++)if(f[y](t,h,n,!0)){m=!0;break}if(m){t.lineMax=h,t.blkIndent!==0&&(s.push(t.bMarks[h]),a.push(t.bsCount[h]),d.push(t.tShift[h]),c.push(t.sCount[h]),t.sCount[h]-=t.blkIndent);break}s.push(t.bMarks[h]),a.push(t.bsCount[h]),d.push(t.tShift[h]),c.push(t.sCount[h]),t.sCount[h]=-1}const k=t.blkIndent;t.blkIndent=0;const S=t.push("blockquote_open","blockquote",1);S.markup=">";const R=[e,0];S.map=R,t.md.block.tokenize(t,e,h);const E=t.push("blockquote_close","blockquote",-1);E.markup=">",t.lineMax=o,t.parentType=p,R[1]=t.line;for(let v=0;v<d.length;v++)t.bMarks[v+e]=s[v],t.tShift[v+e]=d[v],t.sCount[v+e]=c[v],t.bsCount[v+e]=a[v];return t.blkIndent=k,!0}function ms(t,e,n,u){const i=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let r=t.bMarks[e]+t.tShift[e];const o=t.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;r<i;){const c=t.src.charCodeAt(r++);if(c!==o&&!B(c))return!1;c===o&&s++}if(s<3)return!1;if(u)return!0;t.line=e+1;const a=t.push("hr","hr",0);return a.map=[e,t.line],a.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Iu(t,e){const n=t.eMarks[e];let u=t.bMarks[e]+t.tShift[e];const i=t.src.charCodeAt(u++);if(i!==42&&i!==45&&i!==43)return-1;if(u<n){const r=t.src.charCodeAt(u);if(!B(r))return-1}return u}function Su(t,e){const n=t.bMarks[e]+t.tShift[e],u=t.eMarks[e];let i=n;if(i+1>=u)return-1;let r=t.src.charCodeAt(i++);if(r<48||r>57)return-1;for(;;){if(i>=u)return-1;if(r=t.src.charCodeAt(i++),r>=48&&r<=57){if(i-n>=10)return-1;continue}if(r===41||r===46)break;return-1}return i<u&&(r=t.src.charCodeAt(i),!B(r))?-1:i}function xs(t,e){const n=t.level+2;for(let u=e+2,i=t.tokens.length-2;u<i;u++)t.tokens[u].level===n&&t.tokens[u].type==="paragraph_open"&&(t.tokens[u+2].hidden=!0,t.tokens[u].hidden=!0,u+=2)}function Cs(t,e,n,u){let i,r,o,s,a=e,c=!0;if(t.sCount[a]-t.blkIndent>=4||t.listIndent>=0&&t.sCount[a]-t.listIndent>=4&&t.sCount[a]<t.blkIndent)return!1;let d=!1;u&&t.parentType==="paragraph"&&t.sCount[a]>=t.blkIndent&&(d=!0);let f,p,A;if((A=Su(t,a))>=0){if(f=!0,o=t.bMarks[a]+t.tShift[a],p=Number(t.src.slice(o,A-1)),d&&p!==1)return!1}else if((A=Iu(t,a))>=0)f=!1;else return!1;if(d&&t.skipSpaces(A)>=t.eMarks[a])return!1;if(u)return!0;const h=t.src.charCodeAt(A-1),k=t.tokens.length;f?(s=t.push("ordered_list_open","ol",1),p!==1&&(s.attrs=[["start",p]])):s=t.push("bullet_list_open","ul",1);const S=[a,0];s.map=S,s.markup=String.fromCharCode(h);let R=!1;const E=t.md.block.ruler.getRules("list"),v=t.parentType;for(t.parentType="list";a<n;){r=A,i=t.eMarks[a];const m=t.sCount[a]+A-(t.bMarks[a]+t.tShift[a]);let y=m;for(;r<i;){const Ce=t.src.charCodeAt(r);if(Ce===9)y+=4-(y+t.bsCount[a])%4;else if(Ce===32)y++;else break;r++}const D=r;let M;D>=i?M=1:M=y-m,M>4&&(M=1);const Z=m+M;s=t.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const se=[a,0];s.map=se,f&&(s.info=t.src.slice(o,A-1));const ke=t.tight,L=t.tShift[a],lt=t.sCount[a],dt=t.listIndent;if(t.listIndent=t.blkIndent,t.blkIndent=Z,t.tight=!0,t.tShift[a]=D-t.bMarks[a],t.sCount[a]=y,D>=i&&t.isEmpty(a+1)?t.line=Math.min(t.line+2,n):t.md.block.tokenize(t,a,n,!0),(!t.tight||R)&&(c=!1),R=t.line-a>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=dt,t.tShift[a]=L,t.sCount[a]=lt,t.tight=ke,s=t.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),a=t.line,se[1]=a,a>=n||t.sCount[a]<t.blkIndent||t.sCount[a]-t.blkIndent>=4)break;let Me=!1;for(let Ce=0,In=E.length;Ce<In;Ce++)if(E[Ce](t,a,n,!0)){Me=!0;break}if(Me)break;if(f){if(A=Su(t,a),A<0)break;o=t.bMarks[a]+t.tShift[a]}else if(A=Iu(t,a),A<0)break;if(h!==t.src.charCodeAt(A-1))break}return f?s=t.push("ordered_list_close","ol",-1):s=t.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),S[1]=a,t.line=a,t.parentType=v,c&&xs(t,k),!0}function vs(t,e,n,u){let i=t.bMarks[e]+t.tShift[e],r=t.eMarks[e],o=e+1;if(t.sCount[e]-t.blkIndent>=4||t.src.charCodeAt(i)!==91)return!1;function s(E){const v=t.lineMax;if(E>=v||t.isEmpty(E))return null;let m=!1;if(t.sCount[E]-t.blkIndent>3&&(m=!0),t.sCount[E]<0&&(m=!0),!m){const M=t.md.block.ruler.getRules("reference"),Z=t.parentType;t.parentType="reference";let se=!1;for(let ke=0,L=M.length;ke<L;ke++)if(M[ke](t,E,v,!0)){se=!0;break}if(t.parentType=Z,se)return null}const y=t.bMarks[E]+t.tShift[E],D=t.eMarks[E];return t.src.slice(y,D+1)}let a=t.src.slice(i,r+1);r=a.length;let c=-1;for(i=1;i<r;i++){const E=a.charCodeAt(i);if(E===91)return!1;if(E===93){c=i;break}else if(E===10){const v=s(o);v!==null&&(a+=v,r=a.length,o++)}else if(E===92&&(i++,i<r&&a.charCodeAt(i)===10)){const v=s(o);v!==null&&(a+=v,r=a.length,o++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<r;i++){const E=a.charCodeAt(i);if(E===10){const v=s(o);v!==null&&(a+=v,r=a.length,o++)}else if(!B(E))break}const d=t.md.helpers.parseLinkDestination(a,i,r);if(!d.ok)return!1;const f=t.md.normalizeLink(d.str);if(!t.md.validateLink(f))return!1;i=d.pos;const p=i,A=o,h=i;for(;i<r;i++){const E=a.charCodeAt(i);if(E===10){const v=s(o);v!==null&&(a+=v,r=a.length,o++)}else if(!B(E))break}let k=t.md.helpers.parseLinkTitle(a,i,r);for(;k.can_continue;){const E=s(o);if(E===null)break;a+=E,i=r,r=a.length,o++,k=t.md.helpers.parseLinkTitle(a,i,r,k)}let S;for(i<r&&h!==i&&k.ok?(S=k.str,i=k.pos):(S="",i=p,o=A);i<r;){const E=a.charCodeAt(i);if(!B(E))break;i++}if(i<r&&a.charCodeAt(i)!==10&&S)for(S="",i=p,o=A;i<r;){const E=a.charCodeAt(i);if(!B(E))break;i++}if(i<r&&a.charCodeAt(i)!==10)return!1;const R=vt(a.slice(1,c));return R?(u||(typeof t.env.references>"u"&&(t.env.references={}),typeof t.env.references[R]>"u"&&(t.env.references[R]={title:S,href:f}),t.line=o),!0):!1}const ws=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Es="[a-zA-Z_:][a-zA-Z0-9:._-]*",ys="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",Du="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+Es+"(?:\\s*=\\s*"+ys+")?)")+"*\\s*\\/?>",Ru="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",ks="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Is="<[?][\\s\\S]*?[?]>",Ss="<![A-Za-z][^>]*>",Ds="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Rs=new RegExp("^(?:"+Du+"|"+Ru+"|"+ks+"|"+Is+"|"+Ss+"|"+Ds+")"),Bs=new RegExp("^(?:"+Du+"|"+Ru+")"),Te=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+ws.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Bs.source+"\\s*$"),/^$/,!1]];function _s(t,e,n,u){let i=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4||!t.md.options.html||t.src.charCodeAt(i)!==60)return!1;let o=t.src.slice(i,r),s=0;for(;s<Te.length&&!Te[s][0].test(o);s++);if(s===Te.length)return!1;if(u)return Te[s][2];let a=e+1;if(!Te[s][1].test(o)){for(;a<n&&!(t.sCount[a]<t.blkIndent);a++)if(i=t.bMarks[a]+t.tShift[a],r=t.eMarks[a],o=t.src.slice(i,r),Te[s][1].test(o)){o.length!==0&&a++;break}}t.line=a;const c=t.push("html_block","",0);return c.map=[e,a],c.content=t.getLines(e,a,t.blkIndent,!0),!0}function Fs(t,e,n,u){let i=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;let o=t.src.charCodeAt(i);if(o!==35||i>=r)return!1;let s=1;for(o=t.src.charCodeAt(++i);o===35&&i<r&&s<=6;)s++,o=t.src.charCodeAt(++i);if(s>6||i<r&&!B(o))return!1;if(u)return!0;r=t.skipSpacesBack(r,i);const a=t.skipCharsBack(r,35,i);a>i&&B(t.src.charCodeAt(a-1))&&(r=a),t.line=e+1;const c=t.push("heading_open","h"+String(s),1);c.markup="########".slice(0,s),c.map=[e,t.line];const d=t.push("inline","",0);d.content=t.src.slice(i,r).trim(),d.map=[e,t.line],d.children=[];const f=t.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function Ts(t,e,n){const u=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;const i=t.parentType;t.parentType="paragraph";let r=0,o,s=e+1;for(;s<n&&!t.isEmpty(s);s++){if(t.sCount[s]-t.blkIndent>3)continue;if(t.sCount[s]>=t.blkIndent){let A=t.bMarks[s]+t.tShift[s];const h=t.eMarks[s];if(A<h&&(o=t.src.charCodeAt(A),(o===45||o===61)&&(A=t.skipChars(A,o),A=t.skipSpaces(A),A>=h))){r=o===61?1:2;break}}if(t.sCount[s]<0)continue;let p=!1;for(let A=0,h=u.length;A<h;A++)if(u[A](t,s,n,!0)){p=!0;break}if(p)break}if(!r)return!1;const a=t.getLines(e,s,t.blkIndent,!1).trim();t.line=s+1;const c=t.push("heading_open","h"+String(r),1);c.markup=String.fromCharCode(o),c.map=[e,t.line];const d=t.push("inline","",0);d.content=a,d.map=[e,t.line-1],d.children=[];const f=t.push("heading_close","h"+String(r),-1);return f.markup=String.fromCharCode(o),t.parentType=i,!0}function Us(t,e,n){const u=t.md.block.ruler.getRules("paragraph"),i=t.parentType;let r=e+1;for(t.parentType="paragraph";r<n&&!t.isEmpty(r);r++){if(t.sCount[r]-t.blkIndent>3||t.sCount[r]<0)continue;let c=!1;for(let d=0,f=u.length;d<f;d++)if(u[d](t,r,n,!0)){c=!0;break}if(c)break}const o=t.getLines(e,r,t.blkIndent,!1).trim();t.line=r;const s=t.push("paragraph_open","p",1);s.map=[e,t.line];const a=t.push("inline","",0);return a.content=o,a.map=[e,t.line],a.children=[],t.push("paragraph_close","p",-1),t.parentType=i,!0}const Et=[["table",As,["paragraph","reference"]],["code",ps],["fence",gs,["paragraph","reference","blockquote","list"]],["blockquote",bs,["paragraph","reference","blockquote","list"]],["hr",ms,["paragraph","reference","blockquote","list"]],["list",Cs,["paragraph","reference","blockquote"]],["reference",vs],["html_block",_s,["paragraph","reference","blockquote"]],["heading",Fs,["paragraph","reference","blockquote"]],["lheading",Ts],["paragraph",Us]];function yt(){this.ruler=new G;for(let t=0;t<Et.length;t++)this.ruler.push(Et[t][0],Et[t][1],{alt:(Et[t][2]||[]).slice()})}yt.prototype.tokenize=function(t,e,n){const u=this.ruler.getRules(""),i=u.length,r=t.md.options.maxNesting;let o=e,s=!1;for(;o<n&&(t.line=o=t.skipEmptyLines(o),!(o>=n||t.sCount[o]<t.blkIndent));){if(t.level>=r){t.line=n;break}const a=t.line;let c=!1;for(let d=0;d<i;d++)if(c=u[d](t,o,n,!1),c){if(a>=t.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");t.tight=!s,t.isEmpty(t.line-1)&&(s=!0),o=t.line,o<n&&t.isEmpty(o)&&(s=!0,o++,t.line=o)}},yt.prototype.parse=function(t,e,n,u){if(!t)return;const i=new this.State(t,e,n,u);this.tokenize(i,i.line,i.lineMax)},yt.prototype.State=ue;function nt(t,e,n,u){this.src=t,this.env=n,this.md=e,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}nt.prototype.pushPending=function(){const t=new ee("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t},nt.prototype.push=function(t,e,n){this.pending&&this.pushPending();const u=new ee(t,e,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(i),u},nt.prototype.scanDelims=function(t,e){const n=this.posMax,u=this.src.charCodeAt(t),i=t>0?this.src.charCodeAt(t-1):32;let r=t;for(;r<n&&this.src.charCodeAt(r)===u;)r++;const o=r-t,s=r<n?this.src.charCodeAt(r):32,a=tt(i)||et(String.fromCharCode(i)),c=tt(s)||et(String.fromCharCode(s)),d=$e(i),f=$e(s),p=!f&&(!c||d||a),A=!d&&(!a||f||c);return{can_open:p&&(e||!A||a),can_close:A&&(e||!p||c),length:o}},nt.prototype.Token=ee;function Ms(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Ls(t,e){let n=t.pos;for(;n<t.posMax&&!Ms(t.src.charCodeAt(n));)n++;return n===t.pos?!1:(e||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}const Os=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Ps(t,e){if(!t.md.options.linkify||t.linkLevel>0)return!1;const n=t.pos,u=t.posMax;if(n+3>u||t.src.charCodeAt(n)!==58||t.src.charCodeAt(n+1)!==47||t.src.charCodeAt(n+2)!==47)return!1;const i=t.pending.match(Os);if(!i)return!1;const r=i[1],o=t.md.linkify.matchAtStart(t.src.slice(n-r.length));if(!o)return!1;let s=o.url;if(s.length<=r.length)return!1;s=s.replace(/\*+$/,"");const a=t.md.normalizeLink(s);if(!t.md.validateLink(a))return!1;if(!e){t.pending=t.pending.slice(0,-r.length);const c=t.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=t.push("text","",0);d.content=t.md.normalizeLinkText(s);const f=t.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return t.pos+=s.length-r.length,!0}function Ns(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==10)return!1;const u=t.pending.length-1,i=t.posMax;if(!e)if(u>=0&&t.pending.charCodeAt(u)===32)if(u>=1&&t.pending.charCodeAt(u-1)===32){let r=u-1;for(;r>=1&&t.pending.charCodeAt(r-1)===32;)r--;t.pending=t.pending.slice(0,r),t.push("hardbreak","br",0)}else t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0);else t.push("softbreak","br",0);for(n++;n<i&&B(t.src.charCodeAt(n));)n++;return t.pos=n,!0}const sn=[];for(let t=0;t<256;t++)sn.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){sn[t.charCodeAt(0)]=1});function Qs(t,e){let n=t.pos;const u=t.posMax;if(t.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let i=t.src.charCodeAt(n);if(i===10){for(e||t.push("hardbreak","br",0),n++;n<u&&(i=t.src.charCodeAt(n),!!B(i));)n++;return t.pos=n,!0}let r=t.src[n];if(i>=55296&&i<=56319&&n+1<u){const s=t.src.charCodeAt(n+1);s>=56320&&s<=57343&&(r+=t.src[n+1],n++)}const o="\\"+r;if(!e){const s=t.push("text_special","",0);i<256&&sn[i]!==0?s.content=r:s.content=o,s.markup=o,s.info="escape"}return t.pos=n+1,!0}function zs(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==96)return!1;const i=n;n++;const r=t.posMax;for(;n<r&&t.src.charCodeAt(n)===96;)n++;const o=t.src.slice(i,n),s=o.length;if(t.backticksScanned&&(t.backticks[s]||0)<=i)return e||(t.pending+=o),t.pos+=s,!0;let a=n,c;for(;(c=t.src.indexOf("`",a))!==-1;){for(a=c+1;a<r&&t.src.charCodeAt(a)===96;)a++;const d=a-c;if(d===s){if(!e){const f=t.push("code_inline","code",0);f.markup=o,f.content=t.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return t.pos=a,!0}t.backticks[d]=c}return t.backticksScanned=!0,e||(t.pending+=o),t.pos+=s,!0}function Hs(t,e){const n=t.pos,u=t.src.charCodeAt(n);if(e||u!==126)return!1;const i=t.scanDelims(t.pos,!0);let r=i.length;const o=String.fromCharCode(u);if(r<2)return!1;let s;r%2&&(s=t.push("text","",0),s.content=o,r--);for(let a=0;a<r;a+=2)s=t.push("text","",0),s.content=o+o,t.delimiters.push({marker:u,length:0,token:t.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return t.pos+=i.length,!0}function Bu(t,e){let n;const u=[],i=e.length;for(let r=0;r<i;r++){const o=e[r];if(o.marker!==126||o.end===-1)continue;const s=e[o.end];n=t.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=t.tokens[s.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",t.tokens[s.token-1].type==="text"&&t.tokens[s.token-1].content==="~"&&u.push(s.token-1)}for(;u.length;){const r=u.pop();let o=r+1;for(;o<t.tokens.length&&t.tokens[o].type==="s_close";)o++;o--,r!==o&&(n=t.tokens[o],t.tokens[o]=t.tokens[r],t.tokens[r]=n)}}function js(t){const e=t.tokens_meta,n=t.tokens_meta.length;Bu(t,t.delimiters);for(let u=0;u<n;u++)e[u]&&e[u].delimiters&&Bu(t,e[u].delimiters)}const _u={tokenize:Hs,postProcess:js};function qs(t,e){const n=t.pos,u=t.src.charCodeAt(n);if(e||u!==95&&u!==42)return!1;const i=t.scanDelims(t.pos,u===42);for(let r=0;r<i.length;r++){const o=t.push("text","",0);o.content=String.fromCharCode(u),t.delimiters.push({marker:u,length:i.length,token:t.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return t.pos+=i.length,!0}function Fu(t,e){const n=e.length;for(let u=n-1;u>=0;u--){const i=e[u];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const r=e[i.end],o=u>0&&e[u-1].end===i.end+1&&e[u-1].marker===i.marker&&e[u-1].token===i.token-1&&e[i.end+1].token===r.token+1,s=String.fromCharCode(i.marker),a=t.tokens[i.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?s+s:s,a.content="";const c=t.tokens[r.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?s+s:s,c.content="",o&&(t.tokens[e[u-1].token].content="",t.tokens[e[i.end+1].token].content="",u--)}}function Vs(t){const e=t.tokens_meta,n=t.tokens_meta.length;Fu(t,t.delimiters);for(let u=0;u<n;u++)e[u]&&e[u].delimiters&&Fu(t,e[u].delimiters)}const Tu={tokenize:qs,postProcess:Vs};function Xs(t,e){let n,u,i,r,o="",s="",a=t.pos,c=!0;if(t.src.charCodeAt(t.pos)!==91)return!1;const d=t.pos,f=t.posMax,p=t.pos+1,A=t.md.helpers.parseLinkLabel(t,t.pos,!0);if(A<0)return!1;let h=A+1;if(h<f&&t.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(n=t.src.charCodeAt(h),!(!B(n)&&n!==10));h++);if(h>=f)return!1;if(a=h,i=t.md.helpers.parseLinkDestination(t.src,h,t.posMax),i.ok){for(o=t.md.normalizeLink(i.str),t.md.validateLink(o)?h=i.pos:o="",a=h;h<f&&(n=t.src.charCodeAt(h),!(!B(n)&&n!==10));h++);if(i=t.md.helpers.parseLinkTitle(t.src,h,t.posMax),h<f&&a!==h&&i.ok)for(s=i.str,h=i.pos;h<f&&(n=t.src.charCodeAt(h),!(!B(n)&&n!==10));h++);}(h>=f||t.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof t.env.references>"u")return!1;if(h<f&&t.src.charCodeAt(h)===91?(a=h+1,h=t.md.helpers.parseLinkLabel(t,h),h>=0?u=t.src.slice(a,h++):h=A+1):h=A+1,u||(u=t.src.slice(p,A)),r=t.env.references[vt(u)],!r)return t.pos=d,!1;o=r.href,s=r.title}if(!e){t.pos=p,t.posMax=A;const k=t.push("link_open","a",1),S=[["href",o]];k.attrs=S,s&&S.push(["title",s]),t.linkLevel++,t.md.inline.tokenize(t),t.linkLevel--,t.push("link_close","a",-1)}return t.pos=h,t.posMax=f,!0}function Ys(t,e){let n,u,i,r,o,s,a,c,d="";const f=t.pos,p=t.posMax;if(t.src.charCodeAt(t.pos)!==33||t.src.charCodeAt(t.pos+1)!==91)return!1;const A=t.pos+2,h=t.md.helpers.parseLinkLabel(t,t.pos+1,!1);if(h<0)return!1;if(r=h+1,r<p&&t.src.charCodeAt(r)===40){for(r++;r<p&&(n=t.src.charCodeAt(r),!(!B(n)&&n!==10));r++);if(r>=p)return!1;for(c=r,s=t.md.helpers.parseLinkDestination(t.src,r,t.posMax),s.ok&&(d=t.md.normalizeLink(s.str),t.md.validateLink(d)?r=s.pos:d=""),c=r;r<p&&(n=t.src.charCodeAt(r),!(!B(n)&&n!==10));r++);if(s=t.md.helpers.parseLinkTitle(t.src,r,t.posMax),r<p&&c!==r&&s.ok)for(a=s.str,r=s.pos;r<p&&(n=t.src.charCodeAt(r),!(!B(n)&&n!==10));r++);else a="";if(r>=p||t.src.charCodeAt(r)!==41)return t.pos=f,!1;r++}else{if(typeof t.env.references>"u")return!1;if(r<p&&t.src.charCodeAt(r)===91?(c=r+1,r=t.md.helpers.parseLinkLabel(t,r),r>=0?i=t.src.slice(c,r++):r=h+1):r=h+1,i||(i=t.src.slice(A,h)),o=t.env.references[vt(i)],!o)return t.pos=f,!1;d=o.href,a=o.title}if(!e){u=t.src.slice(A,h);const k=[];t.md.inline.parse(u,t.md,t.env,k);const S=t.push("image","img",0),R=[["src",d],["alt",""]];S.attrs=R,S.children=k,S.content=u,a&&R.push(["title",a])}return t.pos=r,t.posMax=p,!0}const Gs=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Ws=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Js(t,e){let n=t.pos;if(t.src.charCodeAt(n)!==60)return!1;const u=t.pos,i=t.posMax;for(;;){if(++n>=i)return!1;const o=t.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const r=t.src.slice(u+1,n);if(Ws.test(r)){const o=t.md.normalizeLink(r);if(!t.md.validateLink(o))return!1;if(!e){const s=t.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(r);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=r.length+2,!0}if(Gs.test(r)){const o=t.md.normalizeLink("mailto:"+r);if(!t.md.validateLink(o))return!1;if(!e){const s=t.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=t.push("text","",0);a.content=t.md.normalizeLinkText(r);const c=t.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return t.pos+=r.length+2,!0}return!1}function Zs(t){return/^<a[>\s]/i.test(t)}function Ks(t){return/^<\/a\s*>/i.test(t)}function $s(t){const e=t|32;return e>=97&&e<=122}function ea(t,e){if(!t.md.options.html)return!1;const n=t.posMax,u=t.pos;if(t.src.charCodeAt(u)!==60||u+2>=n)return!1;const i=t.src.charCodeAt(u+1);if(i!==33&&i!==63&&i!==47&&!$s(i))return!1;const r=t.src.slice(u).match(Rs);if(!r)return!1;if(!e){const o=t.push("html_inline","",0);o.content=r[0],Zs(o.content)&&t.linkLevel++,Ks(o.content)&&t.linkLevel--}return t.pos+=r[0].length,!0}const ta=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,na=/^&([a-z][a-z0-9]{1,31});/i;function ua(t,e){const n=t.pos,u=t.posMax;if(t.src.charCodeAt(n)!==38||n+1>=u)return!1;if(t.src.charCodeAt(n+1)===35){const r=t.src.slice(n).match(ta);if(r){if(!e){const o=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),s=t.push("text_special","",0);s.content=nn(o)?Ct(o):Ct(65533),s.markup=r[0],s.info="entity"}return t.pos+=r[0].length,!0}}else{const r=t.src.slice(n).match(na);if(r){const o=mu(r[0]);if(o!==r[0]){if(!e){const s=t.push("text_special","",0);s.content=o,s.markup=r[0],s.info="entity"}return t.pos+=r[0].length,!0}}}return!1}function Uu(t){const e={},n=t.length;if(!n)return;let u=0,i=-2;const r=[];for(let o=0;o<n;o++){const s=t[o];if(r.push(0),(t[u].marker!==s.marker||i!==s.token-1)&&(u=o),i=s.token,s.length=s.length||0,!s.close)continue;e.hasOwnProperty(s.marker)||(e[s.marker]=[-1,-1,-1,-1,-1,-1]);const a=e[s.marker][(s.open?3:0)+s.length%3];let c=u-r[u]-1,d=c;for(;c>a;c-=r[c]+1){const f=t[c];if(f.marker===s.marker&&f.open&&f.end<0){let p=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(p=!0),!p){const A=c>0&&!t[c-1].open?r[c-1]+1:0;r[o]=o-c+A,r[c]=A,s.open=!1,f.end=o,f.close=!1,d=-1,i=-2;break}}}d!==-1&&(e[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function ia(t){const e=t.tokens_meta,n=t.tokens_meta.length;Uu(t.delimiters);for(let u=0;u<n;u++)e[u]&&e[u].delimiters&&Uu(e[u].delimiters)}function ra(t){let e,n,u=0;const i=t.tokens,r=t.tokens.length;for(e=n=0;e<r;e++)i[e].nesting<0&&u--,i[e].level=u,i[e].nesting>0&&u++,i[e].type==="text"&&e+1<r&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==n&&(i[n]=i[e]),n++);e!==n&&(i.length=n)}const an=[["text",Ls],["linkify",Ps],["newline",Ns],["escape",Qs],["backticks",zs],["strikethrough",_u.tokenize],["emphasis",Tu.tokenize],["link",Xs],["image",Ys],["autolink",Js],["html_inline",ea],["entity",ua]],cn=[["balance_pairs",ia],["strikethrough",_u.postProcess],["emphasis",Tu.postProcess],["fragments_join",ra]];function ut(){this.ruler=new G;for(let t=0;t<an.length;t++)this.ruler.push(an[t][0],an[t][1]);this.ruler2=new G;for(let t=0;t<cn.length;t++)this.ruler2.push(cn[t][0],cn[t][1])}ut.prototype.skipToken=function(t){const e=t.pos,n=this.ruler.getRules(""),u=n.length,i=t.md.options.maxNesting,r=t.cache;if(typeof r[e]<"u"){t.pos=r[e];return}let o=!1;if(t.level<i){for(let s=0;s<u;s++)if(t.level++,o=n[s](t,!0),t.level--,o){if(e>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}else t.pos=t.posMax;o||t.pos++,r[e]=t.pos},ut.prototype.tokenize=function(t){const e=this.ruler.getRules(""),n=e.length,u=t.posMax,i=t.md.options.maxNesting;for(;t.pos<u;){const r=t.pos;let o=!1;if(t.level<i){for(let s=0;s<n;s++)if(o=e[s](t,!1),o){if(r>=t.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(t.pos>=u)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()},ut.prototype.parse=function(t,e,n,u){const i=new this.State(t,e,n,u);this.tokenize(i);const r=this.ruler2.getRules(""),o=r.length;for(let s=0;s<o;s++)r[s](i)},ut.prototype.State=nt;function oa(t){const e={};t=t||{},e.src_Any=hu.source,e.src_Cc=Au.source,e.src_Z=gu.source,e.src_P=Kt.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function ln(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){t[u]=n[u]})}),t}function kt(t){return Object.prototype.toString.call(t)}function sa(t){return kt(t)==="[object String]"}function aa(t){return kt(t)==="[object Object]"}function ca(t){return kt(t)==="[object RegExp]"}function Mu(t){return kt(t)==="[object Function]"}function la(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Lu={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function da(t){return Object.keys(t||{}).reduce(function(e,n){return e||Lu.hasOwnProperty(n)},!1)}const fa={"http:":{validate:function(t,e,n){const u=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){const u=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){const u=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},ha="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Aa="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function pa(t){t.__index__=-1,t.__text_cache__=""}function ga(t){return function(e,n){const u=e.slice(n);return t.test(u)?u.match(t)[0].length:0}}function Ou(){return function(t,e){e.normalize(t)}}function It(t){const e=t.re=oa(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(ha),n.push(e.src_xn),e.src_tlds=n.join("|");function u(s){return s.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(u(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(u(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(u(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(u(e.tpl_host_fuzzy_test),"i");const i=[];t.__compiled__={};function r(s,a){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+a)}Object.keys(t.__schemas__).forEach(function(s){const a=t.__schemas__[s];if(a===null)return;const c={validate:null,link:null};if(t.__compiled__[s]=c,aa(a)){ca(a.validate)?c.validate=ga(a.validate):Mu(a.validate)?c.validate=a.validate:r(s,a),Mu(a.normalize)?c.normalize=a.normalize:a.normalize?r(s,a):c.normalize=Ou();return}if(sa(a)){i.push(s);return}r(s,a)}),i.forEach(function(s){t.__compiled__[t.__schemas__[s]]&&(t.__compiled__[s].validate=t.__compiled__[t.__schemas__[s]].validate,t.__compiled__[s].normalize=t.__compiled__[t.__schemas__[s]].normalize)}),t.__compiled__[""]={validate:null,normalize:Ou()};const o=Object.keys(t.__compiled__).filter(function(s){return s.length>0&&t.__compiled__[s]}).map(la).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),pa(t)}function ba(t,e){const n=t.__index__,u=t.__last_index__,i=t.__text_cache__.slice(n,u);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=u+e,this.raw=i,this.text=i,this.url=i}function dn(t,e){const n=new ba(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function J(t,e){if(!(this instanceof J))return new J(t,e);e||da(t)&&(e=t,t={}),this.__opts__=ln({},Lu,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ln({},fa,t),this.__compiled__={},this.__tlds__=Aa,this.__tlds_replaced__=!1,this.re={},It(this)}J.prototype.add=function(e,n){return this.__schemas__[e]=n,It(this),this},J.prototype.set=function(e){return this.__opts__=ln(this.__opts__,e),this},J.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let n,u,i,r,o,s,a,c,d;if(this.re.schema_test.test(e)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(e))!==null;)if(r=this.testSchemaAt(e,n[2],a.lastIndex),r){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(u=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=u.index+u[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=e.indexOf("@"),d>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(o=i.index+i[1].length,s=i.index+i[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0},J.prototype.pretest=function(e){return this.re.pretest.test(e)},J.prototype.testSchemaAt=function(e,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,u,this):0},J.prototype.match=function(e){const n=[];let u=0;this.__index__>=0&&this.__text_cache__===e&&(n.push(dn(this,u)),u=this.__last_index__);let i=u?e.slice(u):e;for(;this.test(i);)n.push(dn(this,u)),i=i.slice(this.__last_index__),u+=this.__last_index__;return n.length?n:null},J.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const n=this.re.schema_at_start.exec(e);if(!n)return null;const u=this.testSchemaAt(e,n[2],n[0].length);return u?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+u,dn(this,0)):null},J.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(u,i,r){return u!==r[i-1]}).reverse(),It(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,It(this),this)},J.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)},J.prototype.onCompile=function(){};const Ue=2147483647,ie=36,fn=1,it=26,ma=38,xa=700,Pu=72,Nu=128,Qu="-",Ca=/^xn--/,va=/[^\0-\x7F]/,wa=/[\x2E\u3002\uFF0E\uFF61]/g,Ea={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},hn=ie-fn,re=Math.floor,An=String.fromCharCode;function xe(t){throw new RangeError(Ea[t])}function ya(t,e){const n=[];let u=t.length;for(;u--;)n[u]=e(t[u]);return n}function zu(t,e){const n=t.split("@");let u="";n.length>1&&(u=n[0]+"@",t=n[1]),t=t.replace(wa,".");const i=t.split("."),r=ya(i,e).join(".");return u+r}function Hu(t){const e=[];let n=0;const u=t.length;for(;n<u;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<u){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}const ka=t=>String.fromCodePoint(...t),Ia=function(t){return t>=48&&t<58?26+(t-48):t>=65&&t<91?t-65:t>=97&&t<123?t-97:ie},ju=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},qu=function(t,e,n){let u=0;for(t=n?re(t/xa):t>>1,t+=re(t/e);t>hn*it>>1;u+=ie)t=re(t/hn);return re(u+(hn+1)*t/(t+ma))},Vu=function(t){const e=[],n=t.length;let u=0,i=Nu,r=Pu,o=t.lastIndexOf(Qu);o<0&&(o=0);for(let s=0;s<o;++s)t.charCodeAt(s)>=128&&xe("not-basic"),e.push(t.charCodeAt(s));for(let s=o>0?o+1:0;s<n;){const a=u;for(let d=1,f=ie;;f+=ie){s>=n&&xe("invalid-input");const p=Ia(t.charCodeAt(s++));p>=ie&&xe("invalid-input"),p>re((Ue-u)/d)&&xe("overflow"),u+=p*d;const A=f<=r?fn:f>=r+it?it:f-r;if(p<A)break;const h=ie-A;d>re(Ue/h)&&xe("overflow"),d*=h}const c=e.length+1;r=qu(u-a,c,a==0),re(u/c)>Ue-i&&xe("overflow"),i+=re(u/c),u%=c,e.splice(u++,0,i)}return String.fromCodePoint(...e)},Xu=function(t){const e=[];t=Hu(t);const n=t.length;let u=Nu,i=0,r=Pu;for(const a of t)a<128&&e.push(An(a));const o=e.length;let s=o;for(o&&e.push(Qu);s<n;){let a=Ue;for(const d of t)d>=u&&d<a&&(a=d);const c=s+1;a-u>re((Ue-i)/c)&&xe("overflow"),i+=(a-u)*c,u=a;for(const d of t)if(d<u&&++i>Ue&&xe("overflow"),d===u){let f=i;for(let p=ie;;p+=ie){const A=p<=r?fn:p>=r+it?it:p-r;if(f<A)break;const h=f-A,k=ie-A;e.push(An(ju(A+h%k,0))),f=re(h/k)}e.push(An(ju(f,0))),r=qu(i,c,s===o),i=0,++s}++i,++u}return e.join("")},Yu={version:"2.3.1",ucs2:{decode:Hu,encode:ka},decode:Vu,encode:Xu,toASCII:function(t){return zu(t,function(e){return va.test(e)?"xn--"+Xu(e):e})},toUnicode:function(t){return zu(t,function(e){return Ca.test(e)?Vu(e.slice(4).toLowerCase()):e})}},Sa={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},Da=/^(vbscript|javascript|file|data):/,Ra=/^data:image\/(gif|png|jpeg|webp);/;function Ba(t){const e=t.trim().toLowerCase();return Da.test(e)?Ra.test(e):!0}const Gu=["http:","https:","mailto:"];function _a(t){const e=Zt(t,!0);if(e.hostname&&(!e.protocol||Gu.indexOf(e.protocol)>=0))try{e.hostname=Yu.toASCII(e.hostname)}catch{}return Ke(Jt(e))}function Fa(t){const e=Zt(t,!0);if(e.hostname&&(!e.protocol||Gu.indexOf(e.protocol)>=0))try{e.hostname=Yu.toUnicode(e.hostname)}catch{}return Be(Jt(e),Be.defaultChars+"%")}function K(t,e){if(!(this instanceof K))return new K(t,e);e||tn(t)||(e=t||{},t="default"),this.inline=new ut,this.block=new yt,this.core=new rn,this.renderer=new Fe,this.linkify=new J,this.validateLink=Ba,this.normalizeLink=_a,this.normalizeLinkText=Fa,this.utils=jo,this.helpers=xt({},Yo),this.options={},this.configure(t),e&&this.set(e)}K.prototype.set=function(t){return xt(this.options,t),this},K.prototype.configure=function(t){const e=this;if(tn(t)){const n=t;if(t=Sa[n],!t)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(n){t.components[n].rules&&e[n].ruler.enableOnly(t.components[n].rules),t.components[n].rules2&&e[n].ruler2.enableOnly(t.components[n].rules2)}),this},K.prototype.enable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));const u=t.filter(function(i){return n.indexOf(i)<0});if(u.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this},K.prototype.disable=function(t,e){let n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));const u=t.filter(function(i){return n.indexOf(i)<0});if(u.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this},K.prototype.use=function(t){const e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this},K.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");const n=new this.core.State(t,this,e);return this.core.process(n),n.tokens},K.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)},K.prototype.parseInline=function(t,e){const n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens},K.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};function Ta(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pn=!0,Wu=!1,Ju=!1,Ua=function(t,e){e&&(pn=!e.enabled,Wu=!!e.label,Ju=!!e.labelAfter),t.core.ruler.after("inline","github-task-lists",function(n){for(var u=n.tokens,i=2;i<u.length;i++)La(u,i)&&(Oa(u[i],n.Token),Zu(u[i-2],"class","task-list-item"+(pn?"":" enabled")),Zu(u[Ma(u,i-2)],"class","contains-task-list"))})};function Zu(t,e,n){var u=t.attrIndex(e),i=[e,n];u<0?t.attrPush(i):t.attrs[u]=i}function Ma(t,e){for(var n=t[e].level-1,u=e-1;u>=0;u--)if(t[u].level===n)return u;return-1}function La(t,e){return Ha(t[e])&&ja(t[e-1])&&qa(t[e-2])&&Va(t[e])}function Oa(t,e){if(t.children.unshift(Pa(t,e)),t.children[1].content=t.children[1].content.slice(3),t.content=t.content.slice(3),Wu)if(Ju){t.children.pop();var n="task-item-"+Math.ceil(Math.random()*(1e4*1e3)-1e3);t.children[0].content=t.children[0].content.slice(0,-1)+' id="'+n+'">',t.children.push(za(t.content,n,e))}else t.children.unshift(Na(e)),t.children.push(Qa(e))}function Pa(t,e){var n=new e("html_inline","",0),u=pn?' disabled="" ':"";return t.content.indexOf("[ ] ")===0?n.content='<input class="task-list-item-checkbox"'+u+'type="checkbox">':(t.content.indexOf("[x] ")===0||t.content.indexOf("[X] ")===0)&&(n.content='<input class="task-list-item-checkbox" checked=""'+u+'type="checkbox">'),n}function Na(t){var e=new t("html_inline","",0);return e.content="<label>",e}function Qa(t){var e=new t("html_inline","",0);return e.content="</label>",e}function za(t,e,n){var u=new n("html_inline","",0);return u.content='<label class="task-list-item-label" for="'+e+'">'+t+"</label>",u.attrs=[{for:e}],u}function Ha(t){return t.type==="inline"}function ja(t){return t.type==="paragraph_open"}function qa(t){return t.type==="list_item_open"}function Va(t){return t.content.indexOf("[ ] ")===0||t.content.indexOf("[x] ")===0||t.content.indexOf("[X] ")===0}const Xa=Ta(Ua);/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Ku,setPrototypeOf:$u,isFrozen:Ya,getPrototypeOf:Ga,getOwnPropertyDescriptor:Wa}=Object;let{freeze:V,seal:$,create:gn}=Object,{apply:bn,construct:mn}=typeof Reflect<"u"&&Reflect;V||(V=function(e){return e}),$||($=function(e){return e}),bn||(bn=function(e,n){for(var u=arguments.length,i=new Array(u>2?u-2:0),r=2;r<u;r++)i[r-2]=arguments[r];return e.apply(n,i)}),mn||(mn=function(e){for(var n=arguments.length,u=new Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return new e(...u)});const St=Y(Array.prototype.forEach),Ja=Y(Array.prototype.lastIndexOf),ei=Y(Array.prototype.pop),rt=Y(Array.prototype.push),Za=Y(Array.prototype.splice),Dt=Y(String.prototype.toLowerCase),xn=Y(String.prototype.toString),Cn=Y(String.prototype.match),ot=Y(String.prototype.replace),Ka=Y(String.prototype.indexOf),$a=Y(String.prototype.trim),te=Y(Object.prototype.hasOwnProperty),X=Y(RegExp.prototype.test),st=ec(TypeError);function Y(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,u=new Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return bn(t,e,u)}}function ec(t){return function(){for(var e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return mn(t,n)}}function I(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Dt;$u&&$u(t,null);let u=e.length;for(;u--;){let i=e[u];if(typeof i=="string"){const r=n(i);r!==i&&(Ya(e)||(e[u]=r),i=r)}t[i]=!0}return t}function tc(t){for(let e=0;e<t.length;e++)te(t,e)||(t[e]=null);return t}function oe(t){const e=gn(null);for(const[n,u]of Ku(t))te(t,n)&&(Array.isArray(u)?e[n]=tc(u):u&&typeof u=="object"&&u.constructor===Object?e[n]=oe(u):e[n]=u);return e}function at(t,e){for(;t!==null;){const u=Wa(t,e);if(u){if(u.get)return Y(u.get);if(typeof u.value=="function")return Y(u.value)}t=Ga(t)}function n(){return null}return n}const ti=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vn=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),wn=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nc=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),En=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),uc=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ni=V(["#text"]),ui=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),yn=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ii=V(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Rt=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ic=$(/\{\{[\w\W]*|[\w\W]*\}\}/gm),rc=$(/<%[\w\W]*|[\w\W]*%>/gm),oc=$(/\$\{[\w\W]*/gm),sc=$(/^data-[\-\w.\u00B7-\uFFFF]+$/),ac=$(/^aria-[\-\w]+$/),ri=$(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),cc=$(/^(?:\w+script|data):/i),lc=$(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),oi=$(/^html$/i),dc=$(/^[a-z][.\w]*(-[.\w]+)+$/i);var si=Object.freeze({__proto__:null,ARIA_ATTR:ac,ATTR_WHITESPACE:lc,CUSTOM_ELEMENT:dc,DATA_ATTR:sc,DOCTYPE_NAME:oi,ERB_EXPR:rc,IS_ALLOWED_URI:ri,IS_SCRIPT_OR_DATA:cc,MUSTACHE_EXPR:ic,TMPLIT_EXPR:oc});const ct={element:1,text:3,progressingInstruction:7,comment:8,document:9},fc=function(){return typeof window>"u"?null:window},hc=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let u=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(u=n.getAttribute(i));const r="dompurify"+(u?"#"+u:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},ai=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function ci(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:fc();const e=C=>ci(C);if(e.version="3.3.1",e.removed=[],!t||!t.document||t.document.nodeType!==ct.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const u=n,i=u.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:s,Element:a,NodeFilter:c,NamedNodeMap:d=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:p,trustedTypes:A}=t,h=a.prototype,k=at(h,"cloneNode"),S=at(h,"remove"),R=at(h,"nextSibling"),E=at(h,"childNodes"),v=at(h,"parentNode");if(typeof o=="function"){const C=n.createElement("template");C.content&&C.content.ownerDocument&&(n=C.content.ownerDocument)}let m,y="";const{implementation:D,createNodeIterator:M,createDocumentFragment:Z,getElementsByTagName:se}=n,{importNode:ke}=u;let L=ai();e.isSupported=typeof Ku=="function"&&typeof v=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lt,ERB_EXPR:dt,TMPLIT_EXPR:Me,DATA_ATTR:Ce,ARIA_ATTR:In,IS_SCRIPT_OR_DATA:Ec,ATTR_WHITESPACE:xi,CUSTOM_ELEMENT:yc}=si;let{IS_ALLOWED_URI:Ci}=si,z=null;const vi=I({},[...ti,...vn,...wn,...En,...ni]);let H=null;const wi=I({},[...ui,...yn,...ii,...Rt]);let F=Object.seal(gn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,Sn=null;const Le=Object.seal(gn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Ei=!0,Dn=!0,yi=!1,ki=!0,Oe=!1,_t=!0,Ie=!1,Rn=!1,Bn=!1,Pe=!1,Ft=!1,Tt=!1,Ii=!0,Si=!1;const kc="user-content-";let _n=!0,ht=!1,Ne={},ae=null;const Fn=I({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Di=null;const Ri=I({},["audio","video","img","source","image","track"]);let Tn=null;const Bi=I({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ut="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xhtml";let Qe=de,Un=!1,Mn=null;const Ic=I({},[Ut,Mt,de],xn);let Lt=I({},["mi","mo","mn","ms","mtext"]),Ot=I({},["annotation-xml"]);const Sc=I({},["title","style","font","a","script"]);let At=null;const Dc=["application/xhtml+xml","text/html"],Rc="text/html";let O=null,ze=null;const Bc=n.createElement("form"),_i=function(l){return l instanceof RegExp||l instanceof Function},Ln=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ze&&ze===l)){if((!l||typeof l!="object")&&(l={}),l=oe(l),At=Dc.indexOf(l.PARSER_MEDIA_TYPE)===-1?Rc:l.PARSER_MEDIA_TYPE,O=At==="application/xhtml+xml"?xn:Dt,z=te(l,"ALLOWED_TAGS")?I({},l.ALLOWED_TAGS,O):vi,H=te(l,"ALLOWED_ATTR")?I({},l.ALLOWED_ATTR,O):wi,Mn=te(l,"ALLOWED_NAMESPACES")?I({},l.ALLOWED_NAMESPACES,xn):Ic,Tn=te(l,"ADD_URI_SAFE_ATTR")?I(oe(Bi),l.ADD_URI_SAFE_ATTR,O):Bi,Di=te(l,"ADD_DATA_URI_TAGS")?I(oe(Ri),l.ADD_DATA_URI_TAGS,O):Ri,ae=te(l,"FORBID_CONTENTS")?I({},l.FORBID_CONTENTS,O):Fn,ft=te(l,"FORBID_TAGS")?I({},l.FORBID_TAGS,O):oe({}),Sn=te(l,"FORBID_ATTR")?I({},l.FORBID_ATTR,O):oe({}),Ne=te(l,"USE_PROFILES")?l.USE_PROFILES:!1,Ei=l.ALLOW_ARIA_ATTR!==!1,Dn=l.ALLOW_DATA_ATTR!==!1,yi=l.ALLOW_UNKNOWN_PROTOCOLS||!1,ki=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Oe=l.SAFE_FOR_TEMPLATES||!1,_t=l.SAFE_FOR_XML!==!1,Ie=l.WHOLE_DOCUMENT||!1,Pe=l.RETURN_DOM||!1,Ft=l.RETURN_DOM_FRAGMENT||!1,Tt=l.RETURN_TRUSTED_TYPE||!1,Bn=l.FORCE_BODY||!1,Ii=l.SANITIZE_DOM!==!1,Si=l.SANITIZE_NAMED_PROPS||!1,_n=l.KEEP_CONTENT!==!1,ht=l.IN_PLACE||!1,Ci=l.ALLOWED_URI_REGEXP||ri,Qe=l.NAMESPACE||de,Lt=l.MATHML_TEXT_INTEGRATION_POINTS||Lt,Ot=l.HTML_INTEGRATION_POINTS||Ot,F=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&_i(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&_i(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(F.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Oe&&(Dn=!1),Ft&&(Pe=!0),Ne&&(z=I({},ni),H=[],Ne.html===!0&&(I(z,ti),I(H,ui)),Ne.svg===!0&&(I(z,vn),I(H,yn),I(H,Rt)),Ne.svgFilters===!0&&(I(z,wn),I(H,yn),I(H,Rt)),Ne.mathMl===!0&&(I(z,En),I(H,ii),I(H,Rt))),l.ADD_TAGS&&(typeof l.ADD_TAGS=="function"?Le.tagCheck=l.ADD_TAGS:(z===vi&&(z=oe(z)),I(z,l.ADD_TAGS,O))),l.ADD_ATTR&&(typeof l.ADD_ATTR=="function"?Le.attributeCheck=l.ADD_ATTR:(H===wi&&(H=oe(H)),I(H,l.ADD_ATTR,O))),l.ADD_URI_SAFE_ATTR&&I(Tn,l.ADD_URI_SAFE_ATTR,O),l.FORBID_CONTENTS&&(ae===Fn&&(ae=oe(ae)),I(ae,l.FORBID_CONTENTS,O)),l.ADD_FORBID_CONTENTS&&(ae===Fn&&(ae=oe(ae)),I(ae,l.ADD_FORBID_CONTENTS,O)),_n&&(z["#text"]=!0),Ie&&I(z,["html","head","body"]),z.table&&(I(z,["tbody"]),delete ft.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=l.TRUSTED_TYPES_POLICY,y=m.createHTML("")}else m===void 0&&(m=hc(A,i)),m!==null&&typeof y=="string"&&(y=m.createHTML(""));V&&V(l),ze=l}},Fi=I({},[...vn,...wn,...nc]),Ti=I({},[...En,...uc]),_c=function(l){let b=v(l);(!b||!b.tagName)&&(b={namespaceURI:Qe,tagName:"template"});const x=Dt(l.tagName),_=Dt(b.tagName);return Mn[l.namespaceURI]?l.namespaceURI===Mt?b.namespaceURI===de?x==="svg":b.namespaceURI===Ut?x==="svg"&&(_==="annotation-xml"||Lt[_]):!!Fi[x]:l.namespaceURI===Ut?b.namespaceURI===de?x==="math":b.namespaceURI===Mt?x==="math"&&Ot[_]:!!Ti[x]:l.namespaceURI===de?b.namespaceURI===Mt&&!Ot[_]||b.namespaceURI===Ut&&!Lt[_]?!1:!Ti[x]&&(Sc[x]||!Fi[x]):!!(At==="application/xhtml+xml"&&Mn[l.namespaceURI]):!1},ce=function(l){rt(e.removed,{element:l});try{v(l).removeChild(l)}catch{S(l)}},Se=function(l,b){try{rt(e.removed,{attribute:b.getAttributeNode(l),from:b})}catch{rt(e.removed,{attribute:null,from:b})}if(b.removeAttribute(l),l==="is")if(Pe||Ft)try{ce(b)}catch{}else try{b.setAttribute(l,"")}catch{}},Ui=function(l){let b=null,x=null;if(Bn)l="<remove></remove>"+l;else{const U=Cn(l,/^[\r\n\t ]+/);x=U&&U[0]}At==="application/xhtml+xml"&&Qe===de&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const _=m?m.createHTML(l):l;if(Qe===de)try{b=new p().parseFromString(_,At)}catch{}if(!b||!b.documentElement){b=D.createDocument(Qe,"template",null);try{b.documentElement.innerHTML=Un?y:_}catch{}}const q=b.body||b.documentElement;return l&&x&&q.insertBefore(n.createTextNode(x),q.childNodes[0]||null),Qe===de?se.call(b,Ie?"html":"body")[0]:Ie?b.documentElement:q},Mi=function(l){return M.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},On=function(l){return l instanceof f&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof d)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Li=function(l){return typeof s=="function"&&l instanceof s};function fe(C,l,b){St(C,x=>{x.call(e,l,b,ze)})}const Oi=function(l){let b=null;if(fe(L.beforeSanitizeElements,l,null),On(l))return ce(l),!0;const x=O(l.nodeName);if(fe(L.uponSanitizeElement,l,{tagName:x,allowedTags:z}),_t&&l.hasChildNodes()&&!Li(l.firstElementChild)&&X(/<[/\w!]/g,l.innerHTML)&&X(/<[/\w!]/g,l.textContent)||l.nodeType===ct.progressingInstruction||_t&&l.nodeType===ct.comment&&X(/<[/\w]/g,l.data))return ce(l),!0;if(!(Le.tagCheck instanceof Function&&Le.tagCheck(x))&&(!z[x]||ft[x])){if(!ft[x]&&Ni(x)&&(F.tagNameCheck instanceof RegExp&&X(F.tagNameCheck,x)||F.tagNameCheck instanceof Function&&F.tagNameCheck(x)))return!1;if(_n&&!ae[x]){const _=v(l)||l.parentNode,q=E(l)||l.childNodes;if(q&&_){const U=q.length;for(let W=U-1;W>=0;--W){const he=k(q[W],!0);he.__removalCount=(l.__removalCount||0)+1,_.insertBefore(he,R(l))}}}return ce(l),!0}return l instanceof a&&!_c(l)||(x==="noscript"||x==="noembed"||x==="noframes")&&X(/<\/no(script|embed|frames)/i,l.innerHTML)?(ce(l),!0):(Oe&&l.nodeType===ct.text&&(b=l.textContent,St([lt,dt,Me],_=>{b=ot(b,_," ")}),l.textContent!==b&&(rt(e.removed,{element:l.cloneNode()}),l.textContent=b)),fe(L.afterSanitizeElements,l,null),!1)},Pi=function(l,b,x){if(Ii&&(b==="id"||b==="name")&&(x in n||x in Bc))return!1;if(!(Dn&&!Sn[b]&&X(Ce,b))){if(!(Ei&&X(In,b))){if(!(Le.attributeCheck instanceof Function&&Le.attributeCheck(b,l))){if(!H[b]||Sn[b]){if(!(Ni(l)&&(F.tagNameCheck instanceof RegExp&&X(F.tagNameCheck,l)||F.tagNameCheck instanceof Function&&F.tagNameCheck(l))&&(F.attributeNameCheck instanceof RegExp&&X(F.attributeNameCheck,b)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(b,l))||b==="is"&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&X(F.tagNameCheck,x)||F.tagNameCheck instanceof Function&&F.tagNameCheck(x))))return!1}else if(!Tn[b]){if(!X(Ci,ot(x,xi,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&l!=="script"&&Ka(x,"data:")===0&&Di[l])){if(!(yi&&!X(Ec,ot(x,xi,"")))){if(x)return!1}}}}}}}return!0},Ni=function(l){return l!=="annotation-xml"&&Cn(l,yc)},Qi=function(l){fe(L.beforeSanitizeAttributes,l,null);const{attributes:b}=l;if(!b||On(l))return;const x={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let _=b.length;for(;_--;){const q=b[_],{name:U,namespaceURI:W,value:he}=q,He=O(U),Pn=he;let j=U==="value"?Pn:$a(Pn);if(x.attrName=He,x.attrValue=j,x.keepAttr=!0,x.forceKeepAttr=void 0,fe(L.uponSanitizeAttribute,l,x),j=x.attrValue,Si&&(He==="id"||He==="name")&&(Se(U,l),j=kc+j),_t&&X(/((--!?|])>)|<\/(style|title|textarea)/i,j)){Se(U,l);continue}if(He==="attributename"&&Cn(j,"href")){Se(U,l);continue}if(x.forceKeepAttr)continue;if(!x.keepAttr){Se(U,l);continue}if(!ki&&X(/\/>/i,j)){Se(U,l);continue}Oe&&St([lt,dt,Me],Hi=>{j=ot(j,Hi," ")});const zi=O(l.nodeName);if(!Pi(zi,He,j)){Se(U,l);continue}if(m&&typeof A=="object"&&typeof A.getAttributeType=="function"&&!W)switch(A.getAttributeType(zi,He)){case"TrustedHTML":{j=m.createHTML(j);break}case"TrustedScriptURL":{j=m.createScriptURL(j);break}}if(j!==Pn)try{W?l.setAttributeNS(W,U,j):l.setAttribute(U,j),On(l)?ce(l):ei(e.removed)}catch{Se(U,l)}}fe(L.afterSanitizeAttributes,l,null)},Fc=function C(l){let b=null;const x=Mi(l);for(fe(L.beforeSanitizeShadowDOM,l,null);b=x.nextNode();)fe(L.uponSanitizeShadowNode,b,null),Oi(b),Qi(b),b.content instanceof r&&C(b.content);fe(L.afterSanitizeShadowDOM,l,null)};return e.sanitize=function(C){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,x=null,_=null,q=null;if(Un=!C,Un&&(C="<!-->"),typeof C!="string"&&!Li(C))if(typeof C.toString=="function"){if(C=C.toString(),typeof C!="string")throw st("dirty is not a string, aborting")}else throw st("toString is not a function");if(!e.isSupported)return C;if(Rn||Ln(l),e.removed=[],typeof C=="string"&&(ht=!1),ht){if(C.nodeName){const he=O(C.nodeName);if(!z[he]||ft[he])throw st("root node is forbidden and cannot be sanitized in-place")}}else if(C instanceof s)b=Ui("<!---->"),x=b.ownerDocument.importNode(C,!0),x.nodeType===ct.element&&x.nodeName==="BODY"||x.nodeName==="HTML"?b=x:b.appendChild(x);else{if(!Pe&&!Oe&&!Ie&&C.indexOf("<")===-1)return m&&Tt?m.createHTML(C):C;if(b=Ui(C),!b)return Pe?null:Tt?y:""}b&&Bn&&ce(b.firstChild);const U=Mi(ht?C:b);for(;_=U.nextNode();)Oi(_),Qi(_),_.content instanceof r&&Fc(_.content);if(ht)return C;if(Pe){if(Ft)for(q=Z.call(b.ownerDocument);b.firstChild;)q.appendChild(b.firstChild);else q=b;return(H.shadowroot||H.shadowrootmode)&&(q=ke.call(u,q,!0)),q}let W=Ie?b.outerHTML:b.innerHTML;return Ie&&z["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&X(oi,b.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+W),Oe&&St([lt,dt,Me],he=>{W=ot(W,he," ")}),m&&Tt?m.createHTML(W):W},e.setConfig=function(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ln(C),Rn=!0},e.clearConfig=function(){ze=null,Rn=!1},e.isValidAttribute=function(C,l,b){ze||Ln({});const x=O(C),_=O(l);return Pi(x,_,b)},e.addHook=function(C,l){typeof l=="function"&&rt(L[C],l)},e.removeHook=function(C,l){if(l!==void 0){const b=Ja(L[C],l);return b===-1?void 0:Za(L[C],b,1)[0]}return ei(L[C])},e.removeHooks=function(C){L[C]=[]},e.removeAllHooks=function(){L=ai()},e}var Ac=ci();const pc="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Em qual assunto posso ajudar você hoje?",li=t=>`Certo! Reuni abaixo as principais dúvidas sobre ${t}. Escolha uma delas ou faça sua pergunta.`,gc="https://consultant-api.latam-sandbox.rio.cloud/consultant/api/v1";async function bc(){try{const t=await fetch(`${gc}/branches`,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Erro ao buscar branches do consultor: ${t.status}`);const e=await t.json();if(!Array.isArray(e))throw new Error("Formato inesperado da API de branches do consultor.");return e.map((u,i)=>mc(u,i)).filter(u=>!!u).sort((u,i)=>{const r=(u.order??0)-(i.order??0);return r!==0?r:u.label.localeCompare(i.label)})}catch(t){return console.error("[ConsultantAgent] Falha ao carregar branches da API.",t),[]}}function mc(t,e){if(!t||typeof t!="object")return null;const n=t;if(!(n.active!==!1))return null;const i=typeof n.branchId=="string"?n.branchId:"",r=typeof n.label=="string"?n.label:"";if(!i||!r)return null;const s=(Array.isArray(n.questions)?n.questions:[]).map(a=>xc(a)).filter(a=>!!a);return{id:typeof n.id=="string"&&n.id?n.id:i,branchId:i,label:r,businessObjective:typeof n.businessObjective=="string"?n.businessObjective:void 0,order:typeof n.order=="number"?n.order:typeof n.order=="string"?Number(n.order):e+1,active:!0,questions:s}}function xc(t){if(!t||typeof t!="object")return null;const e=t;if(!(e.active!==!1))return null;const u=typeof e.questionId=="string"?e.questionId:"",i=typeof e.prompt=="string"?e.prompt:"";return!u||!i?null:{questionId:u,prompt:i,level:typeof e.level=="string"?e.level:void 0,levelLabel:typeof e.levelLabel=="string"?e.levelLabel:void 0,expectedResponse:typeof e.expectedResponse=="string"?e.expectedResponse:void 0,order:typeof e.order=="number"?e.order:typeof e.order=="string"?Number(e.order):void 0,active:!0}}const di=280,fi=3,Cc=10*1024*1024,hi={text:["txt","doc","docx"],sheet:["xls","xlsx","csv"],pdf:["pdf"],image:["jpg","jpeg","png"],audio:["wav","mp3","m4a","ogg","webm"]},Ai={text:"Documento de Texto",sheet:"Planilha",pdf:"Documento PDF",image:"Imagem",audio:"Mensagem de audio"},vc="Consulte o UptAIme Agent",pi="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",Bt=class Bt extends Ze{constructor(){super(...arguments),this.open=!1,this.message="",this.selectedFiles=[],this.attachmentError="",this.isRecording=!1,this.isRecordingPaused=!1,this.voiceAttachmentId=null,this.voiceTranscript="",this.voiceCancelDialogOpen=!1,this.voiceCancelDialogMode="cancel",this.speechRecognitionAvailable=!1,this.titleText="UptAIme Assist",this.buttonLabel="Uptaime Assist",this.floatingButtonIconUrl="",this.floatingButtonLabelIconUrl="",this.floatingButtonBackgroundIconUrl="",this.placeholder="Pergunte alguma coisa",this.accentColor="#B23672",this.floatingButtonOffset=32,this.apiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.randomizedSuggestions=[],this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar={height:0,top:0,visible:!1},this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.deleteConversationTarget=null,this.renameConversationTarget=null,this.shortAnswerEnabled=!0,this.newConversationConfirmOpen=!1,this.conversationActionError=null,this.loadingLabelInternal="UptAIme Assist está respondendo...",this.loadingTimerSlow=null,this.loadingTimerTimeout=null,this.refreshConversationsAfterResponse=!1,this.activeConversationTitle=null,this.headerActions=[],this.homeUrl="",this.consultantAgentVisible=!1,this.consultantAgentIntro=pc,this.consultantAgentButtonText=vc,this.showConsultantAgentButton=!0,this.consultantAgentInitialMessage=pi,this.autoStartConsultantFlow=!1,this.consultantAgentOptions=[],this.showSuggestions=!0,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.activeConsultantPromptId=null,this.consultantAgentStage="idle",this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantPromptId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.pendingConversationAction=null,this.voiceRecorder=null,this.voiceRecordingStream=null,this.voiceRecordingChunks=[],this.speechRecognizer=null,this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.pendingVoiceRemovalId=null,this.microphonePermissionGranted=!1,this.conversationScrollbarRaf=null,this.rioClient=null,this.rioUnsubscribe=null,this.loadingTimer=null,this.copiedMessageId=null,this.messageReactions={},this.copiedMessageTimer=null,this.pendingResponseTo=null,this.currentConversationId=null,this.conversationCounter=0,this.conversationUserId=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.floatingButtonDragState=null,this.floatingButtonDragged=!1,this.suppressFloatingButtonClick=!1,this.markdownRenderer=new K({html:!1,linkify:!0,breaks:!0}).use(Xa),this.conversations=[]}get loadingLabel(){return this.loadingLabelInternal}inferUserIdFromToken(){const e=this.rioToken.trim();if(!e||!e.includes("."))return null;const[,n]=e.split(".");try{const u=JSON.parse(atob(n.replace(/-/g,"+").replace(/_/g,"/"))),i=(u==null?void 0:u.userId)??(u==null?void 0:u.user_id)??(u==null?void 0:u.sub)??(u==null?void 0:u.id)??(u==null?void 0:u.email)??(u==null?void 0:u.username);if(i&&typeof i=="string")return i.replace(/[^a-zA-Z0-9_:-]/g,"")}catch{return null}return null}repairConversationId(e){if(!e||e.includes(":"))return e;const n=e.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);if(!n||n.index===void 0)return e;const u=n[0],i=e.slice(0,n.index).replace(/[-:]?$/,""),r=e.slice(n.index+u.length);return`${i?`${i}:`:""}${u}${r}`}randomId(e){const n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let u="";for(let i=0;i<e;i+=1)u+=n.charAt(Math.floor(Math.random()*n.length));return u}getFileExtension(e){const n=e.split(".");return n.length<2?"":n[n.length-1].toLowerCase()}resolveAttachmentKind(e){const n=e.toLowerCase(),u=Object.entries(hi);for(const[i,r]of u)if(r.includes(n))return i;return null}buildAttachmentItem(e){if(e.size>Cc)return{error:`O arquivo ${e.name} excede 10 MB.`};const n=this.getFileExtension(e.name),u=this.resolveAttachmentKind(n);return u?{item:{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():this.randomId(12),file:e,name:e.name,typeLabel:Ai[u],kind:u,previewUrl:u==="image"?URL.createObjectURL(e):void 0}}:{error:`Formato nao suportado: ${e.name}.`}}clamp(e,n,u){return Math.min(Math.max(e,n),u)}get suggestions(){return this.randomizedSuggestions}parseSuggestions(e){return e?e.split("|").map(n=>n.trim()).filter(Boolean):[]}pickRandomSuggestions(e,n){if(e.length<=n)return[...e];const u=[...e];for(let i=u.length-1;i>0;i-=1){const r=Math.floor(Math.random()*(i+1));[u[i],u[r]]=[u[r],u[i]]}return u.slice(0,n)}willUpdate(e){super.willUpdate(e),e.has("suggestionsSource")&&(this.randomizedSuggestions=this.pickRandomSuggestions(this.parseSuggestions(this.suggestionsSource),3))}updated(e){super.updated(e),this.style.setProperty("--accent-color",this.accentColor),(e.has("isFullscreen")||e.has("showConversations")||e.has("conversations"))&&this.enqueueConversationScrollbarMeasure(),(e.has("messages")||e.has("isLoading")&&this.isLoading||e.has("open")&&this.open||e.has("isFullscreen")&&this.isFullscreen)&&this.scrollConversationToBottom(),(e.has("message")||e.has("isRecording")||e.has("selectedFiles")||e.has("isFullscreen")||e.has("showConversations")||e.has("open"))&&(this.syncComposerHeight(),requestAnimationFrame(()=>this.syncComposerHeight()))}firstUpdated(){this.enqueueConversationScrollbarMeasure(),this.syncComposerHeight(),requestAnimationFrame(()=>this.syncComposerHeight()),this.bootstrapConsultantAgent()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null),this.selectedFiles.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),this.teardownVoiceRecording(),this.teardownRioClient(),this.clearLoadingGuard()}async bootstrapConsultantAgent(){try{this.consultantAgentOptions=await bc()}catch(e){console.error("[RioAssist][consultant] erro ao carregar opções do agente consultor",e),this.consultantAgentOptions=[]}}get filteredConversations(){const e=this.conversationSearch.trim().toLowerCase();return e?this.conversations.filter(n=>n.title.toLowerCase().includes(e)):this.conversations}get hasActiveConversation(){return this.messages.length>0}get hasVoiceAttachment(){return!!this.voiceAttachmentId}get isAttachmentLimitReached(){return this.selectedFiles.length>=fi}get isVoiceButtonDisabled(){return this.isLoading||this.isRecording||this.hasVoiceAttachment||this.isAttachmentLimitReached}get isFilePickerDisabled(){return this.isLoading||this.isRecording||this.isAttachmentLimitReached}get isTextInputDisabled(){return this.autoStartConsultantFlow||this.isLoading||this.isRecording||this.hasVoiceAttachment}get filePickerAccept(){return Object.values(hi).flat().map(e=>`.${e}`).join(",")}isSpeechRecognitionSupported(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}handleFloatingButtonClick(e){if(this.suppressFloatingButtonClick){e.preventDefault();return}const n=!this.open&&!this.isFullscreen;this.togglePanel(),this.autoStartConsultantFlow&&n&&!this.hasActiveConversation&&this.handleConsultantAgentOpen()}handleFloatingButtonPointerDown(e){const n=e.currentTarget;n.setPointerCapture(e.pointerId),this.floatingButtonDragState={pointerId:e.pointerId,startY:e.clientY,startOffset:this.floatingButtonOffset,buttonHeight:n.getBoundingClientRect().height},this.floatingButtonDragged=!1}handleFloatingButtonPointerMove(e){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==e.pointerId)return;const{startY:n,startOffset:u,buttonHeight:i}=this.floatingButtonDragState,r=e.clientY-n,o=window.innerHeight||this.getBoundingClientRect().height||0,s=12,a=Math.max(s,o-i-s);this.floatingButtonOffset=this.clamp(u-r,s,a),this.floatingButtonDragged=this.floatingButtonDragged||Math.abs(r)>3,e.preventDefault()}handleFloatingButtonPointerUp(e){this.finishFloatingButtonDrag(e)}handleFloatingButtonPointerCancel(e){this.finishFloatingButtonDrag(e)}finishFloatingButtonDrag(e){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==e.pointerId)return;const n=e.currentTarget;n&&n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),this.floatingButtonDragged&&(this.suppressFloatingButtonClick=!0,window.setTimeout(()=>{this.suppressFloatingButtonClick=!1},0)),this.floatingButtonDragState=null,this.floatingButtonDragged=!1}togglePanel(){if(this.isFullscreen){this.exitFullscreen(!1);return}this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.isFullscreen=!1,this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0,this.requestConversationHistory()}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){if(this.showConversations=!this.showConversations,!this.showConversations){this.conversationMenuId=null;return}this.requestConversationHistory()}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}toggleShortAnswers(){this.shortAnswerEnabled=!this.shortAnswerEnabled}handleConsultantAgentOpen(){if(this.consultantAgentStage==="awaiting")return;this.showSuggestions=!1,this.consultantOptionsSuppressed=!1,this.consultantAgentOptions.length===0&&this.bootstrapConsultantAgent();const e=this.createMessage("assistant",this.consultantAgentInitialMessage.trim()||pi);this.messages=[...this.messages,e],this.consultantAgentStage="awaiting",this.activeConsultantPromptId=null,this.pendingConsultantFollowUpId=null,this.activeConsultantFollowUpId=null,this.processMessage("Resumo da Frota",{suppressUserMessage:!0})}handleConsultantAgentOption(e){var s;const n=e.label.trim();if(!n)return;const u=((s=e.questions)==null?void 0:s.filter(a=>a&&typeof a.prompt=="string"&&typeof a.questionId=="string"))??[];if(this.messages.length===0){const a=this.createMessage("assistant",this.consultantAgentIntro);this.messages=[...this.messages,a]}const i=this.createMessage("user",n),r=this.randomId(12),o=this.createMessage("assistant",li(n),{id:r,topicId:e.branchId??e.id,topicLabel:n,questions:u});this.messages=[...this.messages,i,o],this.consultantAgentVisible=!1,this.errorMessage="",this.showNewConversationShortcut=!0,this.showSuggestions=!1,this.activeConsultantFollowUpId=r,this.activeConsultantBranchId=e.branchId??e.id,this.activeConsultantPromptId=null,this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantFollowUpId=r,this.lastConsultantFollowUpPayload={topicId:e.branchId??e.id,topicLabel:n,questions:u},this.requestUpdate(),this.scrollConversationToBottom()}handleConsultantChooseAnotherSubject(){if(this.consultantOptionsSuppressed)return;const e=this.randomId(12),n={...this.createMessage("assistant","Em qual assunto posso ajudar você hoje?"),consultantPrompt:{id:e,text:"Em qual assunto posso ajudar você hoje?",options:[...this.consultantAgentOptions]}};this.messages=[...this.messages,n],this.lastConsultantPromptId=e,this.activeConsultantPromptId=e,this.activeConsultantFollowUpId=null,this.pendingConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.consultantAgentStage="ready",this.scrollConversationToBottom()}async handleConsultantFollowUpQuestion(e){this.pendingConsultantFollowUpId=this.activeConsultantFollowUpId??this.lastConsultantFollowUpId,this.activeConsultantFollowUpId=null;const n=this.activeConsultantBranchId,u={consultantContext:{branchId:n??null,branchLabel:this.lookupConsultantBranchLabel(n),questionId:e.questionId,questionLevel:e.level??null},isConsultantAgent:!0};await this.processMessage(e.prompt,u)}handleConversationSelect(e){e&&(this.showConversations=!1,this.conversationMenuId=null,this.errorMessage="",this.currentConversationId=e,this.activeConversationTitle=this.lookupConversationTitle(e),console.info("[RioAssist][history] carregando conversa",e),this.requestConversationHistory(e))}handleConversationSearch(e){this.conversationSearch=e.target.value}handleConversationMenuToggle(e,n){if(e.stopPropagation(),this.conversationMenuId===n){this.conversationMenuId=null;return}const u=e.currentTarget,i=this.renderRoot.querySelector(".conversations-panel__surface");if(u&&i){const r=u.getBoundingClientRect(),s=i.getBoundingClientRect().bottom-r.bottom;this.conversationMenuPlacement=s<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=n}handleConversationsPanelPointer(e){const n=e.target;!n.closest(".conversation-menu")&&!n.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(e,n){this.conversationMenuId=null;const u=this.conversations.findIndex(r=>r.id===n);if(u===-1)return;const i=this.conversations[u];if(e==="delete"){this.deleteConversationTarget={id:i.id,title:i.title,index:u};return}this.renameConversationTarget={id:i.id,title:i.title,index:u,draft:i.title}}handleHomeNavigation(){const e={url:this.homeUrl||null};this.dispatchEvent(new CustomEvent("rioassist:home",{detail:e,bubbles:!0,composed:!0,cancelable:!0}))&&this.homeUrl&&window.location.assign(this.homeUrl)}applyConversationRename(e,n){if(!e||!n)return;let u=!1;this.conversations=this.conversations.map(i=>i.id===e?(u=!0,{...i,title:n}):i),u&&this.currentConversationId===e&&(this.activeConversationTitle=n)}applyConversationDeletion(e){if(!e)return;const n=this.currentConversationId===e,u=this.conversations.filter(i=>i.id!==e);u.length!==this.conversations.length&&(this.conversations=u,n&&(this.currentConversationId=null,this.activeConversationTitle=null,this.messages=[]))}restoreConversationSnapshot(e,n){if(!e||this.conversations.some(o=>o.id===e.id))return;const i=[...this.conversations],r=n>=0&&n<=i.length?n:i.length;i.splice(r,0,e),this.conversations=i}async confirmDeleteConversation(){const e=this.deleteConversationTarget;if(!e)return;const n=this.conversations[e.index]??this.conversations.find(r=>r.id===e.id)??{id:e.id,title:e.title,updatedAt:new Date().toISOString()},u=this.currentConversationId===e.id;if(this.pendingConversationAction={action:"delete",conversationId:e.id,originalTitle:e.title,index:e.index,snapshot:n,messagesSnapshot:u?[...this.messages]:void 0,wasActive:u},await this.dispatchConversationAction("delete",{id:e.id,title:e.title},e.index)){this.deleteConversationTarget=null;return}this.pendingConversationAction=null}cancelDeleteConversation(){this.deleteConversationTarget=null}handleRenameDraft(e){this.renameConversationTarget&&(this.renameConversationTarget={...this.renameConversationTarget,draft:e.target.value})}async confirmRenameConversation(){const e=this.renameConversationTarget;if(!e)return;const n=e.draft.trim();if(!n)return;if(this.pendingConversationAction={action:"rename",conversationId:e.id,originalTitle:e.title,index:e.index,newTitle:n},await this.dispatchConversationAction("rename",{id:e.id,title:n},e.index,n)){this.renameConversationTarget=null;return}this.pendingConversationAction=null}cancelRenameConversation(){this.renameConversationTarget=null}cancelConversationActionError(){this.conversationActionError=null,this.pendingConversationAction=null}async retryConversationAction(){const e=this.conversationActionError;if(!e)return;const n=typeof e.index=="number"?e.index:this.conversations.findIndex(r=>r.id===e.conversationId),u=n>=0?n:this.conversations.length>0?this.conversations.length-1:0,i=e.snapshot??this.conversations.find(r=>r.id===e.conversationId)??{id:e.conversationId,title:e.originalTitle,updatedAt:new Date().toISOString()};this.pendingConversationAction={action:e.action,conversationId:e.conversationId,originalTitle:e.originalTitle,index:u,newTitle:e.newTitle,snapshot:i,messagesSnapshot:e.messagesSnapshot,wasActive:e.wasActive},this.conversationActionError=null,await this.dispatchConversationAction(e.action,{id:e.conversationId,title:e.newTitle??e.originalTitle},u,e.newTitle)}async dispatchConversationAction(e,n,u,i){const r=e==="rename"?"rioassist:conversation-rename":"rioassist:conversation-delete",o={id:n.id,title:n.title,index:u,action:e};return this.dispatchEvent(new CustomEvent(r,{detail:o,bubbles:!0,composed:!0,cancelable:!0}))?e==="delete"?await this.syncConversationDeleteBackend(n.id):e==="rename"&&i?await this.syncConversationRenameBackend(n.id,i):!1:!1}async syncConversationRenameBackend(e,n){try{const u=this.ensureRioClient();return console.info("[RioAssist][ws] enviando renameConversation",{conversationId:e,newTitle:n}),await u.renameConversation(e,n),this.applyConversationRename(e,n),this.conversationHistoryError="",!0}catch(u){return console.error("[RioAssist][history] erro ao renomear conversa",u),this.conversationHistoryError=u instanceof Error&&u.message?u.message:"Nao foi possivel renomear a conversa.",!1}}async syncConversationDeleteBackend(e){try{return await this.ensureRioClient().deleteConversation(e),this.applyConversationDeletion(e),this.conversationHistoryError="",!0}catch(n){return console.error("[RioAssist][history] erro ao excluir conversa",n),this.conversationHistoryError=n instanceof Error&&n.message?n.message:"Nao foi possivel excluir a conversa.",!1}}handleConversationSystemAction(e){const n=(e.action??"").toLowerCase();if(n==="conversationrenamed"){const u=e.data,i=this.repairConversationId(this.extractString(u,["conversationId","id"])??""),r=this.extractString(u,["newTitle","title"]);return i&&r&&(this.applyConversationRename(i,r),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===i&&this.pendingConversationAction.action==="rename"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}if(n==="conversationdeleted"){const u=e.data,i=this.repairConversationId(this.extractString(u,["conversationId","id"])??"");return i&&(this.applyConversationDeletion(i),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===i&&this.pendingConversationAction.action==="delete"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}return n==="processing"}handleConversationActionError(e){if((e.action??"").toLowerCase()!=="error")return!1;const u=e.data;console.error("[RioAssist][ws] erro em acao de conversa recebido do backend",{text:e.text,data:u,raw:e.raw});const i=this.extractString(u,["error","message","detail","description"])||(typeof e.text=="string"&&e.text.trim()?e.text:"O agente retornou um erro ao processar a conversa."),r=this.pendingConversationAction;return r?(r.action==="rename"&&this.applyConversationRename(r.conversationId,r.originalTitle),r.action==="delete"&&(this.restoreConversationSnapshot(r.snapshot,r.index),r.wasActive&&(this.currentConversationId=r.conversationId,this.activeConversationTitle=r.originalTitle,this.messages=r.messagesSnapshot??this.messages)),this.conversationActionError={...r,message:i},this.pendingConversationAction=null,this.clearLoadingGuard(),this.isLoading=!1,!0):(this.errorMessage=i,this.clearLoadingGuard(),this.isLoading=!1,!0)}shouldIgnoreAssistantPayload(e){if(!e)return!1;const n=e.toLowerCase();return n==="processing"||n==="conversationrenamed"||n==="conversationdeleted"}extractString(e,n){if(!e||typeof e!="object")return null;for(const u of n){const i=e[u];if(typeof i=="string"&&i.trim())return i}return null}handleHeaderActionClick(e,n){const u={index:n,id:e.id??null,ariaLabel:e.ariaLabel??null,iconUrl:e.iconUrl};this.dispatchEvent(new CustomEvent("rioassist:header-action",{detail:u,bubbles:!0,composed:!0,cancelable:!0}))&&typeof e.onClick=="function"&&e.onClick()}handleCloseAction(){if(this.isFullscreen){this.exitFullscreen(!0);return}this.showConversations?this.closeConversationsPanel():this.closePanel()}enterFullscreen(){this.isFullscreen||(this.isFullscreen=!0,this.open=!1,this.showConversations=!1,this.requestConversationHistory())}exitFullscreen(e){this.isFullscreen&&(this.isFullscreen=!1,this.conversationMenuId=null,this.showNewConversationShortcut=!1,e&&(this.open=!0))}handleCreateConversation(){if(this.hasActiveConversation){if(this.autoStartConsultantFlow){this.startNewConversation(),this.handleConsultantAgentOpen();return}this.newConversationConfirmOpen=!0}}confirmCreateConversation(){if(!this.hasActiveConversation){this.newConversationConfirmOpen=!1;return}this.newConversationConfirmOpen=!1,this.startNewConversation()}cancelCreateConversation(){this.newConversationConfirmOpen=!1}startNewConversation(){this.hasActiveConversation&&(this.clearLoadingGuard(),this.isLoading=!1,this.messages=[],this.message="",this.errorMessage="",this.showConversations=!1,this.teardownRioClient(),this.currentConversationId=null,this.activeConversationTitle=null,this.showNewConversationShortcut=!1,this.showSuggestions=!0,this.consultantAgentVisible=!1,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.activeConsultantPromptId=null,this.consultantAgentStage="idle",this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantPromptId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0})))}handleConversationListScroll(e){const n=e.currentTarget;n&&this.updateConversationScrollbar(n)}handleConversationScrollbarPointerDown(e){const n=e.currentTarget,u=this.renderRoot.querySelector(".conversation-list--sidebar");if(!n||!u)return;const i=n.getBoundingClientRect(),r=i.height*(this.conversationScrollbar.height/100),o=Math.max(i.height-r,0),s=Math.max(u.scrollHeight-u.clientHeight,1),a=u.scrollTop/s*o,c=e.clientY-i.top,d=c>=a&&c<=a+r,f=d?a:Math.min(Math.max(c-r/2,0),o);d||(u.scrollTop=f/Math.max(o,1)*(u.scrollHeight-u.clientHeight),this.updateConversationScrollbar(u)),n.setPointerCapture(e.pointerId),this.conversationScrollbarDraggingId=e.pointerId,this.conversationScrollbarDragState={startY:e.clientY,startThumbTop:f,trackHeight:i.height,thumbHeight:r,list:u},e.preventDefault()}handleConversationScrollbarPointerMove(e){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==e.pointerId||!this.conversationScrollbarDragState)return;const{startY:n,startThumbTop:u,trackHeight:i,thumbHeight:r,list:o}=this.conversationScrollbarDragState,s=Math.max(i-r,0),a=e.clientY-n,c=Math.min(Math.max(u+a,0),s),d=o.scrollHeight-o.clientHeight;d>0&&(o.scrollTop=c/Math.max(s,1)*d,this.updateConversationScrollbar(o)),e.preventDefault()}handleConversationScrollbarPointerUp(e){if(this.conversationScrollbarDraggingId!==e.pointerId)return;const n=e.currentTarget;n==null||n.releasePointerCapture(e.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.updateConversationScrollbar()}))}updateConversationScrollbar(e){const n=e??this.renderRoot.querySelector(".conversation-list--sidebar");if(!n){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const{scrollHeight:u,clientHeight:i,scrollTop:r}=n;if(u<=i+1){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const o=i/u,s=Math.max(o*100,8),a=100-s,c=r/(u-i)*(a>0?a:0);this.conversationScrollbar={height:s,top:c,visible:!0}}async onSuggestionClick(e){await this.processMessage(e)}getAudioExtension(e){const n=e.toLowerCase();return n.includes("ogg")?"ogg":n.includes("mpeg")||n.includes("mp3")?"mp3":n.includes("wav")?"wav":n.includes("mp4")||n.includes("m4a")?"m4a":(n.includes("webm"),"webm")}createAudioFile(e){const n=this.getAudioExtension(e.type||"audio/webm"),u=`mensagem-voz-${Date.now()}.${n}`;return new File([e],u,{type:e.type||"audio/webm"})}clearVoiceRecorder(){this.voiceRecordingChunks=[],this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.voiceRecorder&&(this.voiceRecorder.ondataavailable=null,this.voiceRecorder.onstop=null,this.voiceRecorder=null)}cleanupVoiceStream(){this.voiceRecordingStream&&(this.voiceRecordingStream.getTracks().forEach(e=>e.stop()),this.voiceRecordingStream=null)}teardownVoiceRecording(){this.voiceRecorder&&this.voiceRecorder.state!=="inactive"&&this.voiceRecorder.stop(),this.stopSpeechRecognition(),this.cleanupVoiceStream(),this.clearVoiceRecorder(),this.isRecording=!1,this.isRecordingPaused=!1}async requestMicrophoneStream(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return this.errorMessage="Seu navegador nao suporta gravacao de audio.",null;try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});return this.microphonePermissionGranted=!0,e}catch(e){return this.microphonePermissionGranted=!1,console.error("[RioAssist][voice] erro ao acessar microfone",e),this.errorMessage="Nao foi possivel acessar o microfone.",null}}createVoiceRecorder(e){const u=["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4"].find(i=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(i));return u?new MediaRecorder(e,{mimeType:u}):new MediaRecorder(e)}startSpeechRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(!e){this.speechRecognitionAvailable=!1;return}this.stopSpeechRecognition();const n=new e;n.lang="pt-BR",n.continuous=!0,n.interimResults=!0,n.onresult=u=>{var r;let i="";for(let o=u.resultIndex;o<u.results.length;o+=1){const s=u.results[o],a=((r=s[0])==null?void 0:r.transcript)??"";s.isFinal?this.voiceTranscriptSegments.push(a.trim()):i+=a}this.voiceTranscriptPreview=[...this.voiceTranscriptSegments,i.trim()].filter(Boolean).join(" ").trim(),this.voiceTranscriptPreview&&console.info("[RioAssist][voice] transcricao parcial",this.voiceTranscriptPreview)},n.onstart=()=>{console.info("[RioAssist][voice] reconhecimento iniciado")},n.onaudiostart=()=>{console.info("[RioAssist][voice] audio captado (inicio)")},n.onaudioend=()=>{console.info("[RioAssist][voice] audio captado (fim)")},n.onsoundstart=()=>{console.info("[RioAssist][voice] som detectado")},n.onsoundend=()=>{console.info("[RioAssist][voice] som terminou")},n.onspeechstart=()=>{console.info("[RioAssist][voice] fala detectada")},n.onspeechend=()=>{console.info("[RioAssist][voice] fala terminou")},n.onnomatch=u=>{console.warn("[RioAssist][voice] fala nao reconhecida",u)},n.onend=()=>{if(console.info("[RioAssist][voice] reconhecimento encerrado",{isRecording:this.isRecording,isRecordingPaused:this.isRecordingPaused}),this.isRecording&&!this.isRecordingPaused)try{n.start()}catch(u){console.warn("[RioAssist][voice] falha ao reiniciar reconhecimento",u)}},n.onerror=u=>{const i=u&&u.error||"";console.error("[RioAssist][voice] erro no reconhecimento de voz",{error:i,message:(u==null?void 0:u.message)??null,event:u}),(i==="not-allowed"||i==="service-not-allowed"||i==="not-supported")&&(this.speechRecognitionAvailable=!1)};try{n.start(),this.speechRecognizer=n,this.speechRecognitionAvailable=!0}catch(u){console.warn("[RioAssist][voice] nao foi possivel iniciar reconhecimento",u),this.speechRecognizer=null,this.speechRecognitionAvailable=!1}}stopSpeechRecognition(){if(this.speechRecognizer){try{this.speechRecognizer.onresult=null,this.speechRecognizer.onerror=null,this.speechRecognizer.onend=null,this.speechRecognizer.stop()}catch(e){console.warn("[RioAssist][voice] erro ao interromper reconhecimento",e)}this.speechRecognizer=null}}stopVoiceRecorder(){return new Promise(e=>{const n=this.voiceRecorder;if(!n){e(null);return}const u=()=>{n.removeEventListener("stop",u);const i=n.mimeType||"audio/webm",r=this.voiceRecordingChunks.length>0?new Blob(this.voiceRecordingChunks,{type:i}):null;e(r)};n.addEventListener("stop",u),n.state!=="inactive"?n.stop():u()})}addVoiceAttachment(e){if(!e||e.size===0)return;if(this.isAttachmentLimitReached){this.attachmentError="Voce pode anexar no maximo 3 arquivos.";return}const n=this.createAudioFile(e),u=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():this.randomId(12),i=this.voiceTranscriptSegments.join(" ").trim()||this.voiceTranscriptPreview,r={id:u,file:n,name:n.name,typeLabel:Ai.audio,kind:"audio"};this.selectedFiles=[...this.selectedFiles,r],this.voiceAttachmentId=u,this.voiceTranscript=i.trim(),this.attachmentError=""}async handleVoiceButtonClick(){if(this.isVoiceButtonDisabled)return;const e=await this.requestMicrophoneStream();if(!e)return;this.voiceRecordingStream=e,this.voiceRecordingChunks=[],this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.voiceTranscript="";const n=this.createVoiceRecorder(e);this.voiceRecorder=n,n.ondataavailable=u=>{u.data&&u.data.size>0&&this.voiceRecordingChunks.push(u.data)},n.onstop=()=>{this.cleanupVoiceStream()},n.start(),this.isRecording=!0,this.isRecordingPaused=!1,this.startSpeechRecognition()}pauseVoiceRecording(){!this.voiceRecorder||!this.isRecording||this.isRecordingPaused||(this.voiceRecorder.state==="recording"&&this.voiceRecorder.pause(),this.isRecordingPaused=!0,this.stopSpeechRecognition())}resumeVoiceRecording(){!this.voiceRecorder||!this.isRecording||!this.isRecordingPaused||(this.voiceRecorder.state==="paused"&&this.voiceRecorder.resume(),this.isRecordingPaused=!1,this.startSpeechRecognition())}handleVoiceCancelClick(){this.isRecording&&(this.pauseVoiceRecording(),this.voiceCancelDialogMode="cancel",this.pendingVoiceRemovalId=null,this.voiceCancelDialogOpen=!0)}async handleVoiceConfirmClick(){if(!this.isRecording)return;this.isRecording=!1,this.isRecordingPaused=!1,this.voiceCancelDialogOpen=!1,this.stopSpeechRecognition();const e=await this.stopVoiceRecorder();this.cleanupVoiceStream(),e&&this.addVoiceAttachment(e),this.clearVoiceRecorder()}async discardVoiceRecording(){this.isRecording=!1,this.isRecordingPaused=!1,this.voiceCancelDialogOpen=!1,this.stopSpeechRecognition(),await this.stopVoiceRecorder(),this.cleanupVoiceStream(),this.clearVoiceRecorder(),this.voiceTranscript=""}handleVoiceDialogConfirm(){if(this.voiceCancelDialogMode==="cancel"){this.discardVoiceRecording();return}const e=this.pendingVoiceRemovalId;e&&(this.selectedFiles=this.selectedFiles.filter(n=>n.id!==e),this.voiceAttachmentId===e&&(this.voiceAttachmentId=null,this.voiceTranscript=""),this.pendingVoiceRemovalId=null),this.selectedFiles.length===0&&(this.attachmentError=""),this.voiceCancelDialogOpen=!1}handleVoiceDialogContinue(){if(this.voiceCancelDialogMode==="cancel"){this.voiceCancelDialogOpen=!1,this.resumeVoiceRecording();return}this.voiceCancelDialogOpen=!1,this.pendingVoiceRemovalId=null}handleVoiceAttachmentRemove(e){this.isRecording||(this.voiceCancelDialogMode="remove",this.pendingVoiceRemovalId=e,this.voiceCancelDialogOpen=!0)}handleFilePickerClick(){if(this.isFilePickerDisabled)return;const e=this.renderRoot.querySelector(".file-input");e&&!e.disabled&&e.click()}handleFileInputChange(e){const n=e.target;if(!n)return;const u=this.selectedFiles,i=Array.from(n.files??[]);if(n.value="",i.length===0)return;const r=[...this.selectedFiles];let o="";for(const s of i){if(r.length>=fi){o="Voce pode anexar no maximo 3 arquivos.";break}const{item:a,error:c}=this.buildAttachmentItem(s);if(c){o=c;continue}a&&r.push(a)}this.selectedFiles=r,this.attachmentError=o,u.forEach(s=>{s.previewUrl&&!this.selectedFiles.find(a=>a.id===s.id)&&URL.revokeObjectURL(s.previewUrl)})}handleAttachmentRemove(e){const n=this.selectedFiles.find(u=>u.id===e);if((n==null?void 0:n.kind)==="audio"){this.handleVoiceAttachmentRemove(e);return}this.selectedFiles=this.selectedFiles.filter(u=>u.id!==e),n!=null&&n.previewUrl&&URL.revokeObjectURL(n.previewUrl),this.selectedFiles.length===0&&(this.attachmentError="")}dispatchMessageAction(e,n){this.dispatchEvent(new CustomEvent(`rioassist:message-${e}`,{detail:{messageId:n.id,role:n.role,text:n.text,conversationId:this.currentConversationId,responseTo:n.responseTo??null},bubbles:!0,composed:!0}))}setCopiedMessage(e){this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null),this.copiedMessageId=e,this.copiedMessageTimer=window.setTimeout(()=>{this.copiedMessageId=null,this.copiedMessageTimer=null},1200)}async handleCopyMessage(e){var u;const n=e.text.trim();if(n)try{if((u=navigator.clipboard)!=null&&u.writeText)await navigator.clipboard.writeText(n);else{const i=document.createElement("textarea");i.value=n,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}this.setCopiedMessage(e.id),this.dispatchMessageAction("copy",e)}catch(i){console.error("[RioAssist] falha ao copiar mensagem",i)}}handleUpdateResponse(e){this.isLoading||!e.responseTo||(this.messages=this.messages.map(n=>n.id===e.id?{...n,hidden:!0}:n),this.processMessage(e.responseTo.requestText,{suppressUserMessage:!0,responseToMessageId:e.responseTo.messageId,forcePayload:{contentToSend:e.responseTo.requestToSend,contentToDisplay:e.responseTo.requestText},consultantContext:e.responseTo.consultantContext??null,isConsultantAgent:e.responseTo.isConsultantAgent??!1}),this.dispatchMessageAction("update",e))}handleToggleReaction(e,n){const i=this.messageReactions[n.id]===e?void 0:e,r={...this.messageReactions};i?r[n.id]=i:delete r[n.id],this.messageReactions=r,this.dispatchMessageAction(e,n)}handleMessageAction(e,n){this.dispatchMessageAction(e,n)}handleComposerKeydown(e){e.key!=="Enter"||e.shiftKey||e.isComposing||(e.preventDefault(),this.submitCurrentMessage())}handleComposerInput(e){const n=e.target;n&&(this.message=n.value,this.resizeComposer(n))}async handleSubmit(e){e.preventDefault(),await this.submitCurrentMessage()}async submitCurrentMessage(){this.isRecording||(this.consultantOptionsSuppressed=!0,this.activeConsultantFollowUpId=null,this.activeConsultantPromptId=null,this.pendingConsultantFollowUpId=null,await this.processMessage(this.message,{attachments:this.selectedFiles}))}resizeComposer(e){e.style.height="auto";const n=Math.min(e.scrollHeight,di);e.style.height=`${n}px`,e.style.overflowY=e.scrollHeight>di?"auto":"hidden"}syncComposerHeight(){const e=Array.from(this.renderRoot.querySelectorAll(".composer-input"));e.length!==0&&e.forEach(n=>this.resizeComposer(n))}createMessage(e,n,u,i){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:e,text:n,html:this.renderMarkdown(n),timestamp:Date.now(),request:i==null?void 0:i.request,responseTo:i==null?void 0:i.responseTo,hidden:i==null?void 0:i.hidden,consultantFollowUp:u}}async processMessage(e,n=null){var a,c,d,f;const u=e.trim();if(!u||this.isLoading)return;const i=((a=n==null?void 0:n.forcePayload)==null?void 0:a.contentToSend)??(this.shortAnswerEnabled?`Quero uma resposta curta sobre: ${u}`:u),r=((c=n==null?void 0:n.forcePayload)==null?void 0:c.contentToDisplay)??u;this.currentConversationId||(this.currentConversationId=null,this.activeConversationTitle=null);const o=this.messages.length===0;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:u,apiBaseUrl:this.apiBaseUrl,token:this.rioToken,consultantContext:(n==null?void 0:n.consultantContext)??null,isConsultantAgent:(n==null?void 0:n.isConsultantAgent)??!1,attachments:((d=n==null?void 0:n.attachments)==null?void 0:d.map(p=>p.file))??[]},bubbles:!0,composed:!0}));const s={text:r,toSend:i,consultantContext:(n==null?void 0:n.consultantContext)??null,isConsultantAgent:(n==null?void 0:n.isConsultantAgent)??!1};if(n!=null&&n.suppressUserMessage)this.pendingResponseTo={messageId:(n==null?void 0:n.responseToMessageId)??"resend",requestText:s.text,requestToSend:s.toSend,consultantContext:s.consultantContext??null,isConsultantAgent:s.isConsultantAgent??!1};else{const p=this.createMessage("user",r,void 0,{request:s});this.messages=[...this.messages,p],this.pendingResponseTo={messageId:p.id,requestText:s.text,requestToSend:s.toSend,consultantContext:s.consultantContext??null,isConsultantAgent:s.isConsultantAgent??!1}}o&&(this.showNewConversationShortcut=!0,this.refreshConversationsAfterResponse=!0),this.message="",this.errorMessage="",this.isLoading=!0,this.startLoadingGuard();try{const p=this.ensureRioClient(),A=n&&(n.consultantContext||n.isConsultantAgent)?{isConsultantAgent:!!n.isConsultantAgent,consultantContext:n.consultantContext??null}:void 0;if(await p.sendMessage(i,this.currentConversationId,A),(f=n==null?void 0:n.attachments)!=null&&f.length){const h=this.voiceAttachmentId&&n.attachments.some(k=>k.id===this.voiceAttachmentId);this.selectedFiles.forEach(k=>{k.previewUrl&&URL.revokeObjectURL(k.previewUrl)}),this.selectedFiles=[],this.attachmentError="",h&&(this.voiceAttachmentId=null,this.voiceTranscript="")}}catch(p){this.pendingResponseTo=null,this.clearLoadingGuard(),this.isLoading=!1,this.errorMessage=p instanceof Error?p.message:"Nao foi possivel enviar a mensagem para o agente."}}ensureRioClient(){const e=this.rioToken.trim();if(!e)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");return(!this.rioClient||!this.rioClient.matchesToken(e))&&(this.teardownRioClient(),this.rioClient=new no(e),this.rioUnsubscribe=this.rioClient.onMessage(n=>{this.handleIncomingMessage(n)})),this.rioClient}async handleIncomingMessage(e){var o;if(this.isHistoryPayload(e)){this.logHistoryPayload(e),this.handleHistoryPayload(e.data);return}if(this.handleConversationSystemAction(e)||this.handleConversationActionError(e)||this.shouldIgnoreAssistantPayload(e.action))return;const n=this.extractConversationId(e.data),u=typeof((o=e.data)==null?void 0:o.conversationTitle)=="string"?e.data.conversationTitle.trim():"";if(n){const s=this.conversations.findIndex(c=>c.id===n),a=s===-1;if(u){const c=new Date().toISOString();if(a)this.conversations=[{id:n,title:u,updatedAt:c},...this.conversations];else{const d=this.conversations[s],f=[...this.conversations];f.splice(s,1),f.unshift({...d,title:u,updatedAt:c}),this.conversations=f}this.activeConversationTitle=u}a&&(this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][ws] nova conversa detectada, atualizando lista",{conversationId:n}),await this.requestConversationHistory()),this.currentConversationId=n,this.syncActiveConversationTitle()}if(console.info("[RioAssist][ws] resposta de mensagem recebida",{action:e.action??"message",text:e.text,raw:e.raw,data:e.data}),e.action==="processing"){console.info("[RioAssist][ws] processando mensagem - aguardando resposta final");return}const i=this.pendingResponseTo?{messageId:this.pendingResponseTo.messageId,requestText:this.pendingResponseTo.requestText,requestToSend:this.pendingResponseTo.requestToSend,consultantContext:this.pendingResponseTo.consultantContext??null,isConsultantAgent:this.pendingResponseTo.isConsultantAgent??!1}:void 0,r=this.createMessage("assistant",e.text,void 0,{responseTo:i});if(this.messages=[...this.messages,r],this.pendingResponseTo=null,this.clearLoadingGuard(),this.isLoading=!1,this.consultantAgentStage==="awaiting"){const s=this.randomId(12),a={...this.createMessage("assistant","Em qual assunto posso ajudar você hoje?"),consultantPrompt:{id:s,text:"Em qual assunto posso ajudar você hoje?",options:[...this.consultantAgentOptions]}};this.messages=[...this.messages,a],this.consultantAgentStage="ready",this.activeConsultantPromptId=s,this.lastConsultantPromptId=s}if(!this.consultantOptionsSuppressed&&this.lastConsultantFollowUpPayload&&(this.pendingConsultantFollowUpId||this.lastConsultantFollowUpId)){const s=this.randomId(12),a=this.createMessage("assistant",li(this.lastConsultantFollowUpPayload.topicLabel),{id:s,topicId:this.lastConsultantFollowUpPayload.topicId,topicLabel:this.lastConsultantFollowUpPayload.topicLabel,questions:this.lastConsultantFollowUpPayload.questions});this.messages=[...this.messages,a],this.activeConsultantFollowUpId=s,this.pendingConsultantFollowUpId=null,this.lastConsultantFollowUpId=s}this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1,await this.requestConversationHistory())}teardownRioClient(){this.rioUnsubscribe&&(this.rioUnsubscribe(),this.rioUnsubscribe=null),this.rioClient&&(this.rioClient.close(),this.rioClient=null)}async requestConversationHistory(e){try{const n=this.ensureRioClient(),u=50;console.info("[RioAssist][history] solicitando historico de conversas",{conversationId:e??null,limit:u}),this.conversationHistoryError="",this.conversationHistoryLoading=!0,await n.requestHistory({conversationId:e,limit:u})}catch(n){console.error("[RioAssist][history] erro ao solicitar historico",n),this.conversationHistoryError=n instanceof Error&&n.message?n.message:"Nao foi possivel carregar as conversas.",this.conversationHistoryLoading=!1}}handleHistoryPayload(e){const n=this.extractHistoryEntries(e),u=this.extractConversationId(e);if(u!=null){this.applyMessageHistory(n,u);return}if(this.isMessageHistoryEntries(n)){this.applyMessageHistory(n);return}this.applyConversationHistoryFromEntries(n),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1)}isHistoryPayload(e){if(typeof e.action=="string"&&e.action.toLowerCase().includes("history"))return!0;const n=e.data;if(n&&typeof n=="object"){const u=n.action;if(typeof u=="string"&&u.toLowerCase().includes("history")||Array.isArray(n.history)||Array.isArray(n.conversations))return!0}return!1}logHistoryPayload(e){const n="[RioAssist][history] payload recebido do websocket";if(e.data!==null&&e.data!==void 0){console.info(n,e.data);return}console.info(n,e.raw)}applyConversationHistoryFromEntries(e){if(e.length===0){console.info("[RioAssist][history] payload sem itens para montar lista de conversas"),this.conversations=[],this.conversationHistoryLoading=!1,this.conversationHistoryError="";return}const n=new Map;e.forEach((i,r)=>{if(!i||typeof i!="object")return;const o=this.normalizeConversationItem(i,r),s=i.conversationId??i.conversationUUID??i.conversationUuid??i.uuid??i.id;if(s&&console.info("[RioAssist][history] conversa recebida do backend",{rawId:s,normalizedId:(o==null?void 0:o.id)??null,entry:i}),!o)return;const a=n.get(o.id);if(!a){n.set(o.id,o);return}const c=Date.parse(a.updatedAt),d=Date.parse(o.updatedAt);Number.isFinite(d)&&d>c&&n.set(o.id,o)});const u=Array.from(n.values()).sort((i,r)=>{const o=Date.parse(r.updatedAt)-Date.parse(i.updatedAt);return Number.isFinite(o)?o:0});this.conversations=u,this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.syncActiveConversationTitle(),console.info("[RioAssist][history] conversas normalizadas",u)}applyMessageHistory(e,n){if(e.length===0){console.info("[RioAssist][history] lista de mensagens vazia",{conversationId:n}),this.messages=[],this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.conversationHistoryLoading=!1;return}const u=e.flatMap((i,r)=>this.normalizeHistoryMessages(i,r));n&&(this.currentConversationId=n),this.messages=u,this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.showNewConversationShortcut=u.length>0,this.conversationHistoryLoading=!1,this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][history] mensagens carregadas",{conversationId:n??null,total:u.length})}extractHistoryEntries(e){if(Array.isArray(e))return e;if(e&&typeof e=="object"){const n=e,u=[n.history,n.conversations,n.data,n.items,n.messages];for(const i of u)if(Array.isArray(i))return i;if(n.data&&typeof n.data=="object"&&!Array.isArray(n.data)){const i=this.extractHistoryEntries(n.data);if(i.length>0)return i}}return[]}extractConversationId(e){if(e&&typeof e=="object"){const n=e,u=[n.conversationId,n.conversationUUID,n.conversationUuid,n.uuid,n.id];for(const i of u){if(i===null)return null;if(i!==void 0)return this.repairConversationId(String(i))}}}isMessageHistoryEntries(e){return e.some(n=>this.looksLikeMessageHistoryEntry(n))}looksLikeMessageHistoryEntry(e){if(!e||typeof e!="object")return!1;const n=e,u=n.role??n.sender??n.from??n.author??n.type;return!!(typeof u=="string"&&u.trim().length>0||typeof n.content=="string"||typeof n.message=="string"||typeof n.text=="string"||typeof n.response=="string"||Array.isArray(n.parts)&&n.parts.length>0)}normalizeConversationItem(e,n){const u=e.conversationId??e.conversationUUID??e.conversationUuid??e.uuid??e.id,i=u!=null?String(u):`history-${n+1}`,r=this.repairConversationId(i),o=e.title??e.name??e.topic??e.subject??e.question??e.query??e.message,s=typeof o=="string"&&o.trim().length>0?o.trim():`Conversa ${n+1}`,a=e.updatedAt??e.updated_at??e.lastMessageAt??e.last_message_at??e.createdAt??e.created_at??e.timestamp??e.date,c=this.toIsoString(a);return{id:r,title:s,updatedAt:c}}normalizeHistoryMessages(e,n){const u=[],i=e.message??e.question??e.query??e.text??e.content,r=typeof i=="string"?i.trim():"",o=e.response??e.answer??e.reply??e.completion??e.body??e.preview,s=typeof o=="string"?o.trim():"",a=e.id??e.messageId??e.uuid??e.conversationMessageId,c=a!=null?String(a):`history-${n+1}`,d=e.timestamp??e.createdAt??e.created_at??e.date??e.time,f=e.responseTimestamp??e.responseTime??e.responseDate??e.response_at??e.updatedAt??e.updated_at,p=this.parseTimestamp(d),A=this.parseTimestamp(f,p+1);if(s)r&&u.push({id:`${c}-user`,role:"user",text:r,html:this.renderMarkdown(r),timestamp:p}),u.push({id:`${c}-assistant`,role:"assistant",text:s,html:this.renderMarkdown(s),timestamp:A});else if(r)return[];if(u.length>0)return u;const h=this.normalizeSingleHistoryMessage(e,n);return h?[h]:[]}normalizeSingleHistoryMessage(e,n){const u=e.text??e.message??e.content??e.response??e.body??e.preview,i=typeof u=="string"&&u.trim().length>0?u:"";if(!i)return null;const r=this.normalizeRole(e.role??e.sender??e.from??e.author??e.type??e.direction),o=e.id??e.messageId??e.uuid??e.conversationMessageId,s=o!=null?String(o):`history-message-${n+1}`,a=e.timestamp??e.createdAt??e.created_at??e.updatedAt??e.updated_at??e.date??e.time,c=this.parseTimestamp(a);return{id:s,role:r,text:i,html:this.renderMarkdown(i),timestamp:c}}normalizeRole(e){if(typeof e=="string"){const n=e.toLowerCase();if(n.includes("user")||n.includes("client"))return"user";if(n.includes("assistant")||n.includes("agent")||n.includes("bot"))return"assistant"}return"assistant"}parseTimestamp(e,n){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){const u=e.trim();if(u){const i=Number(u);if(Number.isFinite(i))return i;const r=Date.parse(u);if(Number.isFinite(r))return r}}return Number.isFinite(n??NaN)?n:Date.now()}lookupConversationTitle(e){if(!e)return null;const n=this.conversations.find(u=>u.id===e);return n?n.title:null}lookupConsultantBranchLabel(e){if(!e)return null;const n=this.consultantAgentOptions.find(u=>u.branchId===e||u.id===e);return n?n.label:null}syncActiveConversationTitle(){if(!this.currentConversationId)return;const e=this.lookupConversationTitle(this.currentConversationId);e&&(this.activeConversationTitle=e)}toIsoString(e){if(typeof e=="string"||typeof e=="number"){const n=new Date(e);if(!Number.isNaN(n.getTime()))return n.toISOString()}return new Date().toISOString()}startLoadingGuard(){this.clearLoadingGuard(),this.loadingLabelInternal="UptAIme Assist está respondendo",this.loadingTimerSlow=window.setTimeout(()=>{this.loadingLabelInternal="UptAIme Assist continua respondendo",this.requestUpdate()},2e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="UptAIme Assist ainda está processando sua resposta. Peço que aguarde um pouco mais",this.requestUpdate()},6e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco",this.requestUpdate()},12e4)}clearLoadingGuard(){this.loadingTimer!==null&&(window.clearTimeout(this.loadingTimer),this.loadingTimer=null),this.loadingTimerSlow!==null&&(window.clearTimeout(this.loadingTimerSlow),this.loadingTimerSlow=null),this.loadingTimerTimeout!==null&&(window.clearTimeout(this.loadingTimerTimeout),this.loadingTimerTimeout=null)}scrollConversationToBottom(){Array.from(this.renderRoot.querySelectorAll(".panel-content")).forEach(n=>{requestAnimationFrame(()=>{n.scrollTop=n.scrollHeight})})}renderMarkdown(e){const n=this.markdownRenderer.render(e),u=Ac.sanitize(n,{ALLOWED_TAGS:["a","p","ul","ol","li","code","pre","strong","em","blockquote","table","thead","tbody","tr","th","td","del","hr","br","img","span","input"],ALLOWED_ATTR:["href","title","target","rel","src","alt","class","type","checked","disabled","aria-label"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["style","script"],USE_PROFILES:{html:!0}}),i=document.createElement("div");return i.innerHTML=u,i.querySelectorAll("a").forEach(r=>{r.setAttribute("target","_blank"),r.setAttribute("rel","noopener noreferrer")}),i.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.setAttribute("disabled",""),r.setAttribute("tabindex","-1")}),i.innerHTML}render(){return $r(this)}};Bt.styles=fr,Bt.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},floatingButtonIconUrl:{type:String,attribute:"data-floating-button-icon-url"},floatingButtonLabelIconUrl:{type:String,attribute:"data-floating-button-label-icon-url"},floatingButtonBackgroundIconUrl:{type:String,attribute:"data-floating-button-background-icon-url"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},selectedFiles:{attribute:!1,state:!0},attachmentError:{type:String,state:!0},isRecording:{type:Boolean,state:!0},isRecordingPaused:{type:Boolean,state:!0},voiceAttachmentId:{type:String,state:!0},voiceTranscript:{type:String,state:!0},voiceCancelDialogOpen:{type:Boolean,state:!0},voiceCancelDialogMode:{type:String,state:!0},speechRecognitionAvailable:{type:Boolean,state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0},conversations:{state:!0},conversationHistoryLoading:{type:Boolean,state:!0},activeConversationTitle:{state:!0},conversationHistoryError:{type:String,state:!0},deleteConversationTarget:{attribute:!1},renameConversationTarget:{attribute:!1},shortAnswerEnabled:{type:Boolean,state:!0},newConversationConfirmOpen:{type:Boolean,state:!0},conversationActionError:{attribute:!1},headerActions:{attribute:!1},homeUrl:{type:String,attribute:"data-home-url"},floatingButtonOffset:{type:Number,attribute:"data-floating-offset"},consultantAgentVisible:{type:Boolean,state:!0},consultantAgentIntro:{type:String,state:!0},consultantAgentButtonText:{type:String,attribute:"data-consultant-agent-button-text"},showConsultantAgentButton:{attribute:"data-show-consultant-agent-button",converter:{fromAttribute:e=>e===null||e===""||e==="true",toAttribute:e=>e?"true":"false"}},consultantAgentInitialMessage:{type:String,attribute:"data-consultant-agent-initial-message"},autoStartConsultantFlow:{attribute:"data-auto-start-consultant-flow",converter:{fromAttribute:e=>e===""||e==="true",toAttribute:e=>e?"true":"false"}},consultantAgentOptions:{attribute:!1,state:!0},showSuggestions:{type:Boolean,state:!0},activeConsultantFollowUpId:{type:String,state:!0},activeConsultantBranchId:{type:String,state:!0},activeConsultantPromptId:{type:String,state:!0},consultantAgentStage:{type:String,state:!0},consultantOptionsSuppressed:{type:Boolean,state:!0},pendingConsultantFollowUpId:{type:String,state:!0},lastConsultantPromptId:{type:String,state:!0},lastConsultantFollowUpId:{type:String,state:!0},lastConsultantFollowUpPayload:{attribute:!1},copiedMessageId:{type:String,state:!0},messageReactions:{attribute:!1}};let kn=Bt;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",kn);const gi={title:"UptAIme Assist",buttonLabel:"Uptaime Assist",floatingButtonIconUrl:"",floatingButtonLabelIconUrl:"",floatingButtonBackgroundIconUrl:"",placeholder:"Pergunte alguma coisa",suggestions:["Resumo da Frota","Frota Disponível","Chamados Abertos","Parados + Causas","Aguardando Peças","Principais Gargalos","Tempo por Concessionária","Tempo de Ciclo","Preventiva x Corretiva"],accentColor:"#B23672",apiBaseUrl:"",rioToken:"",floatingOffset:32,consultantAgentButtonText:"Consulte o UptAIme Agent",showConsultantAgentButton:!0,consultantAgentInitialMessage:"Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",autoStartConsultantFlow:!1},bi="rio-assist-widget";function wc(t={}){const{target:e=document.body,...n}=t;let u=document.querySelector(bi);u||(u=document.createElement(bi),e.appendChild(u));const i=96,r=64,o=typeof window<"u"&&(window.innerHeight||document.documentElement.clientHeight)||0,s=n.floatingOffset??(o?Math.max(12,o-i-r):gi.floatingOffset),a={...gi,...n,floatingOffset:s};Object.entries(a).forEach(([c,d])=>{if(d===void 0)return;const f=`data-${c.replace(/[A-Z]/g,p=>`-${p.toLowerCase()}`)}`;if(typeof d=="boolean"){d?u==null||u.setAttribute(f,"true"):u==null||u.removeAttribute(f);return}u==null||u.setAttribute(f,Array.isArray(d)?d.join("|"):String(d))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:wc},window.dispatchEvent(new Event("rio-assist-ready")))})();
