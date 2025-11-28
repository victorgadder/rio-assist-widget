(function(){"use strict";var ar;var y=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bu=globalThis,Ou=bu.ShadowRoot&&(bu.ShadyCSS===void 0||bu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pu=Symbol(),Nt=new WeakMap;let Ot=class{constructor(u,t,n){if(this._$cssResult$=!0,n!==Pu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=u,this.t=t}get styleSheet(){let u=this.o;const t=this.t;if(Ou&&u===void 0){const n=t!==void 0&&t.length===1;n&&(u=Nt.get(t)),u===void 0&&((this.o=u=new CSSStyleSheet).replaceSync(this.cssText),n&&Nt.set(t,u))}return u}toString(){return this.cssText}};const Lr=e=>new Ot(typeof e=="string"?e:e+"",void 0,Pu),qe=(e,...u)=>{const t=e.length===1?e[0]:u.reduce((n,r,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new Ot(t,e,Pu)},Br=(e,u)=>{if(Ou)e.adoptedStyleSheets=u.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of u){const n=document.createElement("style"),r=bu.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,e.appendChild(n)}},Pt=Ou?e=>e:e=>e instanceof CSSStyleSheet?(u=>{let t="";for(const n of u.cssRules)t+=n.cssText;return Lr(t)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ur,defineProperty:Nr,getOwnPropertyDescriptor:Or,getOwnPropertyNames:Pr,getOwnPropertySymbols:$r,getPrototypeOf:zr}=Object,he=globalThis,$t=he.trustedTypes,Hr=$t?$t.emptyScript:"",$u=he.reactiveElementPolyfillSupport,je=(e,u)=>e,zu={toAttribute(e,u){switch(u){case Boolean:e=e?Hr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,u){let t=e;switch(u){case Boolean:t=e!==null;break;case Number:t=e===null?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch{t=null}}return t}},zt=(e,u)=>!Ur(e,u),Ht={attribute:!0,type:String,converter:zu,reflect:!1,useDefault:!1,hasChanged:zt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);let De=class extends HTMLElement{static addInitializer(u){this._$Ei(),(this.l??(this.l=[])).push(u)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(u,t=Ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(u)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(u,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(u,n,t);r!==void 0&&Nr(this.prototype,u,r)}}static getPropertyDescriptor(u,t,n){const{get:r,set:i}=Or(this.prototype,u)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){const s=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(u,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(u){return this.elementProperties.get(u)??Ht}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const u=zr(this);u.finalize(),u.l!==void 0&&(this.l=[...u.l]),this.elementProperties=new Map(u.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const t=this.properties,n=[...Pr(t),...$r(t)];for(const r of n)this.createProperty(r,t[r])}const u=this[Symbol.metadata];if(u!==null){const t=litPropertyMetadata.get(u);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(u){const t=[];if(Array.isArray(u)){const n=new Set(u.flat(1/0).reverse());for(const r of n)t.unshift(Pt(r))}else u!==void 0&&t.push(Pt(u));return t}static _$Eu(u,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof u=="string"?u.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var u;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(u=this.constructor.l)==null||u.forEach(t=>t(this))}addController(u){var t;(this._$EO??(this._$EO=new Set)).add(u),this.renderRoot!==void 0&&this.isConnected&&((t=u.hostConnected)==null||t.call(u))}removeController(u){var t;(t=this._$EO)==null||t.delete(u)}_$E_(){const u=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(u.set(n,this[n]),delete this[n]);u.size>0&&(this._$Ep=u)}createRenderRoot(){const u=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Br(u,this.constructor.elementStyles),u}connectedCallback(){var u;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(u=this._$EO)==null||u.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(u){}disconnectedCallback(){var u;(u=this._$EO)==null||u.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(u,t,n){this._$AK(u,n)}_$ET(u,t){var i;const n=this.constructor.elementProperties.get(u),r=this.constructor._$Eu(u,n);if(r!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:zu).toAttribute(t,n.type);this._$Em=u,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(u,t){var i,o;const n=this.constructor,r=n._$Eh.get(u);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:zu;this._$Em=r;const c=a.fromAttribute(t,s.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(u,t,n){var r;if(u!==void 0){const i=this.constructor,o=this[u];if(n??(n=i.getPropertyOptions(u)),!((n.hasChanged??zt)(o,t)||n.useDefault&&n.reflect&&o===((r=this._$Ej)==null?void 0:r.get(u))&&!this.hasAttribute(i._$Eu(u,n))))return;this.C(u,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(u,t,{useDefault:n,reflect:r,wrapped:i},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(u)&&(this._$Ej.set(u,o??t??this[u]),i!==!0||o!==void 0)||(this._$AL.has(u)||(this.hasUpdated||n||(t=void 0),this._$AL.set(u,t)),r===!0&&this._$Em!==u&&(this._$Eq??(this._$Eq=new Set)).add(u))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const u=this.scheduleUpdate();return u!=null&&await u,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let u=!1;const t=this._$AL;try{u=this.shouldUpdate(t),u?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw u=!1,this._$EM(),r}u&&this._$AE(t)}willUpdate(u){}_$AE(u){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(u)),this.updated(u)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(u){return!0}update(u){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(u){}firstUpdated(u){}};De.elementStyles=[],De.shadowRootOptions={mode:"open"},De[je("elementProperties")]=new Map,De[je("finalized")]=new Map,$u==null||$u({ReactiveElement:De}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,mu=Ye.trustedTypes,qt=mu?mu.createPolicy("lit-html",{createHTML:e=>e}):void 0,jt="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Yt="?"+pe,qr=`<${Yt}>`,_e=document,Ge=()=>_e.createComment(""),Qe=e=>e===null||typeof e!="object"&&typeof e!="function",Hu=Array.isArray,jr=e=>Hu(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qu=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Qt=/>/g,Ce=RegExp(`>|${qu}(?:([^\\s"'>=/]+)(${qu}*=${qu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,Wt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Yr=e=>(u,...t)=>({_$litType$:e,strings:u,values:t}),I=Yr(1),ae=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Xt=new WeakMap,Ee=_e.createTreeWalker(_e,129);function Kt(e,u){if(!Hu(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qt!==void 0?qt.createHTML(u):u}const Gr=(e,u)=>{const t=e.length-1,n=[];let r,i=u===2?"<svg>":u===3?"<math>":"",o=Ve;for(let s=0;s<t;s++){const a=e[s];let c,d,f=-1,m=0;for(;m<a.length&&(o.lastIndex=m,d=o.exec(a),d!==null);)m=o.lastIndex,o===Ve?d[1]==="!--"?o=Gt:d[1]!==void 0?o=Qt:d[2]!==void 0?(Zt.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=Ce):d[3]!==void 0&&(o=Ce):o===Ce?d[0]===">"?(o=r??Ve,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Ce:d[3]==='"'?Wt:Vt):o===Wt||o===Vt?o=Ce:o===Gt||o===Qt?o=Ve:(o=Ce,r=void 0);const p=o===Ce&&e[s+1].startsWith("/>")?" ":"";i+=o===Ve?a+qr:f>=0?(n.push(c),a.slice(0,f)+jt+a.slice(f)+pe+p):a+pe+(f===-2?s:p)}return[Kt(e,i+(e[t]||"<?>")+(u===2?"</svg>":u===3?"</math>":"")),n]};class We{constructor({strings:u,_$litType$:t},n){let r;this.parts=[];let i=0,o=0;const s=u.length-1,a=this.parts,[c,d]=Gr(u,t);if(this.el=We.createElement(c,n),Ee.currentNode=this.el.content,t===2||t===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Ee.nextNode())!==null&&a.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(const f of r.getAttributeNames())if(f.endsWith(jt)){const m=d[o++],p=r.getAttribute(f).split(pe),h=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:h[2],strings:p,ctor:h[1]==="."?Vr:h[1]==="?"?Wr:h[1]==="@"?Zr:gu}),r.removeAttribute(f)}else f.startsWith(pe)&&(a.push({type:6,index:i}),r.removeAttribute(f));if(Zt.test(r.tagName)){const f=r.textContent.split(pe),m=f.length-1;if(m>0){r.textContent=mu?mu.emptyScript:"";for(let p=0;p<m;p++)r.append(f[p],Ge()),Ee.nextNode(),a.push({type:2,index:++i});r.append(f[m],Ge())}}}else if(r.nodeType===8)if(r.data===Yt)a.push({type:2,index:i});else{let f=-1;for(;(f=r.data.indexOf(pe,f+1))!==-1;)a.push({type:7,index:i}),f+=pe.length-1}i++}}static createElement(u,t){const n=_e.createElement("template");return n.innerHTML=u,n}}function Se(e,u,t=e,n){var o,s;if(u===ae)return u;let r=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const i=Qe(u)?void 0:u._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(u=Se(e,r._$AS(e,u.values),r,n)),u}class Qr{constructor(u,t){this._$AV=[],this._$AN=void 0,this._$AD=u,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(u){const{el:{content:t},parts:n}=this._$AD,r=((u==null?void 0:u.creationScope)??_e).importNode(t,!0);Ee.currentNode=r;let i=Ee.nextNode(),o=0,s=0,a=n[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new Ze(i,i.nextSibling,this,u):a.type===1?c=new a.ctor(i,a.name,a.strings,this,u):a.type===6&&(c=new Xr(i,this,u)),this._$AV.push(c),a=n[++s]}o!==(a==null?void 0:a.index)&&(i=Ee.nextNode(),o++)}return Ee.currentNode=_e,r}p(u){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(u,n,t),t+=n.strings.length-2):n._$AI(u[t])),t++}}class Ze{get _$AU(){var u;return((u=this._$AM)==null?void 0:u._$AU)??this._$Cv}constructor(u,t,n,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=u,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let u=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(u==null?void 0:u.nodeType)===11&&(u=t.parentNode),u}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(u,t=this){u=Se(this,u,t),Qe(u)?u===M||u==null||u===""?(this._$AH!==M&&this._$AR(),this._$AH=M):u!==this._$AH&&u!==ae&&this._(u):u._$litType$!==void 0?this.$(u):u.nodeType!==void 0?this.T(u):jr(u)?this.k(u):this._(u)}O(u){return this._$AA.parentNode.insertBefore(u,this._$AB)}T(u){this._$AH!==u&&(this._$AR(),this._$AH=this.O(u))}_(u){this._$AH!==M&&Qe(this._$AH)?this._$AA.nextSibling.data=u:this.T(_e.createTextNode(u)),this._$AH=u}$(u){var i;const{values:t,_$litType$:n}=u,r=typeof n=="number"?this._$AC(u):(n.el===void 0&&(n.el=We.createElement(Kt(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const o=new Qr(r,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(u){let t=Xt.get(u.strings);return t===void 0&&Xt.set(u.strings,t=new We(u)),t}k(u){Hu(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of u)r===t.length?t.push(n=new Ze(this.O(Ge()),this.O(Ge()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(u=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);u!==this._$AB;){const r=u.nextSibling;u.remove(),u=r}}setConnected(u){var t;this._$AM===void 0&&(this._$Cv=u,(t=this._$AP)==null||t.call(this,u))}}class gu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(u,t,n,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=u,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(u,t=this,n,r){const i=this.strings;let o=!1;if(i===void 0)u=Se(this,u,t,0),o=!Qe(u)||u!==this._$AH&&u!==ae,o&&(this._$AH=u);else{const s=u;let a,c;for(u=i[0],a=0;a<i.length-1;a++)c=Se(this,s[n+a],t,a),c===ae&&(c=this._$AH[a]),o||(o=!Qe(c)||c!==this._$AH[a]),c===M?u=M:u!==M&&(u+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!r&&this.j(u)}j(u){u===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,u??"")}}class Vr extends gu{constructor(){super(...arguments),this.type=3}j(u){this.element[this.name]=u===M?void 0:u}}class Wr extends gu{constructor(){super(...arguments),this.type=4}j(u){this.element.toggleAttribute(this.name,!!u&&u!==M)}}class Zr extends gu{constructor(u,t,n,r,i){super(u,t,n,r,i),this.type=5}_$AI(u,t=this){if((u=Se(this,u,t,0)??M)===ae)return;const n=this._$AH,r=u===M&&n!==M||u.capture!==n.capture||u.once!==n.once||u.passive!==n.passive,i=u!==M&&(n===M||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,u),this._$AH=u}handleEvent(u){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,u):this._$AH.handleEvent(u)}}class Xr{constructor(u,t,n){this.element=u,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(u){Se(this,u)}}const ju=Ye.litHtmlPolyfillSupport;ju==null||ju(We,Ze),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.3.1");const Kr=(e,u,t)=>{const n=(t==null?void 0:t.renderBefore)??u;let r=n._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Ze(u.insertBefore(Ge(),i),i,void 0,t??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis;let Xe=class extends De{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const u=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=u.firstChild),u}update(u){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(u),this._$Do=Kr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var u;super.connectedCallback(),(u=this._$Do)==null||u.setConnected(!0)}disconnectedCallback(){var u;super.disconnectedCallback(),(u=this._$Do)==null||u.setConnected(!1)}render(){return ae}};Xe._$litElement$=!0,Xe.finalized=!0,(ar=ye.litElementHydrateSupport)==null||ar.call(ye,{LitElement:Xe});const Yu=ye.litElementPolyfillSupport;Yu==null||Yu({LitElement:Xe}),(ye.litElementVersions??(ye.litElementVersions=[])).push("4.2.1");const Jr=qe`
  .floating-button {
    position: absolute;
    pointer-events: auto;
    right: 0;
    bottom: 32px;
    width: 160px;
    height: 64px;
    padding: 0 26px 0 10px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.2px;
    border-radius: 32px 0 0 32px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  .floating-button img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: block;
  }

  .floating-button span {
    white-space: nowrap;
    line-height: 1;
    display: inline-block;
    flex: 1;
    text-align: left;
  }

  .floating-button:hover {
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.3);
  }

  .canvas--fullscreen .floating-button {
    opacity: 0;
    pointer-events: none;
  }
`,ei=qe`
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
    gap: 16px;
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
    display: inline-flex;
    gap: 12px;
    justify-content: center;
  }

  .suggestions-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 6px;
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

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a4afbb;
    border-radius: 80px;
    padding: 10px 20px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    max-height: 56px;
  }

  form input {
    border: none;
    flex: 1;
    font: inherit;
    outline: none;
    font-size: 16px;
    font-style: normal;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-weight: 400;
  }

  form input::placeholder {
    font-style: italic;
    font-size: 16px;
    color: #a7afbb;
  }

  .input-button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-button img {
    width: 32px;
    height: 32px;
  }

  .input-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
`,ui=qe`
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

  .fullscreen-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    min-height: 0;
    background: linear-gradient(180deg, #eef3f6 0%, #fff 100%);
  }

  .fullscreen-chat {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 32px 18px;
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-width: 1400px;
    margin: 0 auto;
  }

  .fullscreen-chat .panel-body {
    max-width: 920px;
    width: 100%;
    padding: 12px 32px 12px;
    margin: 0 auto;
  }

  .fullscreen-chat .panel-footer {
    max-width: 640px;
  }

  .fullscreen-chat form {
    max-width: none;
  }
`,ti=qe`
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
    display: flex;
    flex-direction: column;
    gap: 16px;
    transform: translateX(100%);
    transition: transform 0.35s ease;
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

  .conversations-panel--sidebar .conversation-item {
    border-radius: 8px;
    background: transparent;
    padding-right: 8px;
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
`,ni=[qe`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');

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
`,Jr,ei,ui,ti];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gu={ATTRIBUTE:1,CHILD:2},Qu=e=>(...u)=>({_$litDirective$:e,values:u});let Vu=class{constructor(u){}get _$AU(){return this._$AM._$AU}_$AT(u,t,n){this._$Ct=u,this._$AM=t,this._$Ci=n}_$AS(u,t){return this.update(u,t)}update(u,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=Qu(class extends Vu{constructor(e){var u;if(super(e),e.type!==Gu.ATTRIBUTE||e.name!=="class"||((u=e.strings)==null?void 0:u.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(u=>e[u]).join(" ")+" "}update(e,[u]){var n,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in u)u[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(u)}const t=e.element.classList;for(const i of this.st)i in u||(t.remove(i),this.st.delete(i));for(const i in u){const o=!!u[i];o===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(o?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return ae}}),ri=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgB7Ze/T8JAFMcfxMVFq5OaGBsTJxccXEn/AAdGNvE/8C9QjP+AOybippuDDrpQdCT+ijpIRJowwICCMZFBk/O99iANob+urS73SV5ee717/XL37l0BkEgkklhJQAQwxhR0isPjbiKR6IIggQSiEA1dBm0BLcVFKT6HG9xIbBntBIUbEBUobptFSwctA1GAgTZZPJBIFcKCQeosPg7c3j3mQ5yG7gPtkDcZDl37+aiClaMq+EOD/4B+mN+Zd4vjuYuZVUIomVWwZmjSoSvNMu1QA02nHcqs/CqBx2xiX7FyRy9gYvlHyb/OY2henUEUFm5zkEiFxym5dXTTkHQRp8HQ0jROK/BcOB/cv93UzPtW+XFUCBKX49f3IEgySOfGWQWq+xeDexL3enwFd7tHTkP6p4zwURdIoJ1es2PO4Ex6Gb4/e+Z1HAgLbF+/mH5+bdX0Lf0B4kBYYD/vqgVryVuXTyCI6/KLz+BtDcZnp9CmYWJpDr6a76YJ4LqBhAS2Md9+MO8Ws2lY2cqannDYzV4UQQRmFemwZHisPYfneQiDV4H1oG6LU7e1UwHXmVVnw4FBFLQiCw4JUHmMnK09B3HAhY5apjwXkGHWmZtitg9Q3tYJI9Dze5CgPz0YfLgcbGB70WkMX8IShES0zLiKI/C5jm4H/gpbLuUCjsvHnoNh4SIpF1MgkUgkkkD8AgAi3WKqFnrYAAAAAElFTkSuQmCC",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,ii=e=>I`
  <button
    class="floating-button"
    style="background:${e.accentColor}"
    @click=${()=>e.togglePanel()}
    aria-expanded=${e.open}
  >
    <img src=${ri} alt="" aria-hidden="true" />
    <span>${e.buttonLabel}</span>
  </button>
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wu extends Vu{constructor(u){if(super(u),this.it=M,u.type!==Gu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(u){if(u===M||u==null)return this._t=void 0,this.it=u;if(u===ae)return u;if(typeof u!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(u===this.it)return this._t;this.it=u;const t=[u];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Wu.directiveName="unsafeHTML",Wu.resultType=1;const oi=Qu(Wu);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt="important",si=" !"+Jt,ai=Qu(class extends Vu{constructor(e){var u;if(super(e),e.type!==Gu.ATTRIBUTE||e.name!=="style"||((u=e.strings)==null?void 0:u.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((u,t)=>{const n=e[t];return n==null?u:u+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[u]){const{style:t}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(u)),this.render(u);for(const n of this.ft)u[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(const n in u){const r=u[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(si);n.includes("-")||i?t.setProperty(n,i?r.slice(0,-11):r,i?Jt:""):t[n]=r}}return ae}}),ci=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB5ZQxCsJAEEX/rsbaI3gEvYE22ppO7DyCJ1BvoCdIFSNBGFOIaBBzg1whR0gpqLsuSWHnBBKI4G+mefyB+Z8B6pBD1C7KCg7wgusCSi0Bndxh9Wb2IP3GS84wN8t2d1rqMeZw3hCIMjuIVEorQhXyKOw7dCt8x98Wm7JPl+4TYiGho4k93HA8G8oLILN1rCHW2/25fMom3U8YDbCSPKAH0CrQwHxqjw74D7n+sevRqVOEZW+4o5Ck1Yo1mrFrKlTa0ISRVcVUpw2F8oZGq3yIpLLnUOtjeAMX/z7Yit+o3QAAAABJRU5ErkJggg==",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,li=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBvZPdCcIwFIVPqvjcETpCnUDzrA86ghOIG+gGbqIv4mPjBhmhI/goFhNv2qpNQfIjeCCQhHu++0MC/CgWEpwfihQjLHCHkEteBgHyc5FBsQIaGR2vqPTYQBJfAG5k0rQapRhgajZOgMmcny5rymaycrqStEo8IJwtWGUztpWzya6eA1XgnEGv51Z6I+d8341L/M1UdoVjP5b5mzV/lf0VEGq2ADHmNyDWbNQMUdGjiDB/ALa8zUbDFiOg9Kredz7KX/QESDR2d7Kg6IcAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,di=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBpZLfDYIwEMavqImPjOAIdQP6bIw6AhM4giMYR3ACEhOegQ3qBh2hvplIOItG6NXKn/glbY6745e7DwD+FPMl+SXbwgRCkqxAybXI3d6pDwAB2wNCRJNYmCvyTsCTLIQZS+whzAmdXm2ObJ4eGMudUO8J5qa5RHudK/jFHCD1gKfFARAX0CeGJ7kSr2moB1gtTXXTC6jg/AkDp6RbGApz519xrRKUH4BtoUu1eX5AMAig6SvjpboAEvqEePsNCKzxmPUz0ZisQD/j3RRnDeHYFqzYMZoAjLuap1kMXWID1hyjJ+SZQp3ORCa/AAAAAElFTkSuQmCC",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,fi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgBxZNNTsMwEIVnnBAqVuEG6Q16A8INeoOSFXRFkEpFVqRCaquqi7CA0hXhBNATUE4ANyBHyA4aKg+OU0QgxgKExNvkx8+fx89jgD8S6gb98NK2rKcdALZFCLacwOkuYxBHQTv5FqhzMnGZCdfCYqvGOWA4DnZ7b99MZTocnTWYibcFhHoMqD4K9jBbrG8SkCcsifgXdvrnvrai7uDiUTwcYd4eBu355/GjwcThAPdEAC9ZrR6FXlqpqNufNnOIWCFWQXIN83w4nCKiba09+8qtEZJblEpXoFG2UYukH6ChBCFREe4CEh0oOvBS6V+dZjVsKgDcooYO5Iucyt8VEGcwlzxk+6CRCawlfQSxEjSWAeODCNvtDKbHKojsMXH84jUxVgtXjj+fvDJJiTBjvsQZY8uEc9NBgzcZYquo4r09UAcRmPSLzs4b0iu3B2ogvVHQDkXzuZyDK5wOEaYGoxtVf6EOAj+QDBuN5azYxu8gH5Rf1PIl/De9AhTgnL0rAocOAAAAAElFTkSuQmCC",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,hi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,en=(e,u={})=>{const t=u.variant??"drawer",n=t==="sidebar",r=n||e.showConversations;return I`
    <div
      class=${X({"conversations-panel":!0,"conversations-panel--open":r,"conversations-panel--sidebar":n})}
      aria-hidden=${!r}
      @pointerdown=${i=>e.handleConversationsPanelPointer(i)}
    >
      <div
        class=${X({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":n})}
      >
        ${pi(e,t)}
      </div>
    </div>
  `},pi=(e,u)=>{const t=u==="sidebar",n=t?I`
        <div
          class=${X({"new-conversation-cta":!0,open:e.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!e.hasActiveConversation}
            aria-disabled=${!e.hasActiveConversation}
            @click=${()=>e.handleCreateConversation()}
          >
            <img src=${hi} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,r=I`
    <div
      class=${X({"conversation-list":!0,"conversation-list--sidebar":t})}
      @scroll=${t?i=>e.handleConversationListScroll(i):null}
    >
      ${e.filteredConversations.map(i=>{const o=e.conversationMenuId===i.id;return I`
            <div
              class="conversation-item"
              role="button"
              tabindex="0"
              title=${`Recuperar ${i.title}`}
              @click=${()=>e.handleConversationSelect(i.id)}
              @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e.handleConversationSelect(i.id))}}
            >
              <div class="conversation-item__text">
                ${i.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${s=>e.handleConversationMenuToggle(s,i.id)}
              >
                <img src=${ci} alt="" aria-hidden="true" />
              </button>
              ${o?I`
                    <div
                      class=${X({"conversation-menu":!0,"conversation-menu--above":e.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("rename",i.id)}
                      >
                        <img src=${li} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("delete",i.id)}
                      >
                        <img src=${di} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return I`
    ${n}

    <div class="conversation-search">
      <img class="search-icon" src=${fi} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${e.conversationSearch}
        @input=${i=>e.handleConversationSearch(i)}
      />
    </div>

    <div
      class=${X({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":t})}
    >
      ${e.conversationHistoryLoading?I`<div class="conversation-loading">Carregando conversas...</div>`:null}
      ${r}
      ${t?I`
            <div
              class=${X({"conversation-scrollbar":!0,"conversation-scrollbar--visible":e.conversationScrollbar.visible})}
              @pointerdown=${i=>e.handleConversationScrollbarPointerDown(i)}
              @pointermove=${i=>e.handleConversationScrollbarPointerMove(i)}
              @pointerup=${i=>e.handleConversationScrollbarPointerUp(i)}
              @pointercancel=${i=>e.handleConversationScrollbarPointerUp(i)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${ai({height:`${e.conversationScrollbar.height}%`,top:`${e.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},bi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dSxDYAgEAXQf8ZF3MAN1F53cAVHcBKH0F5HYATcwN7ipEShOoMkhpdAwg/kCg6AJDZ6BuWyMeS0auvCDjIEFrxA7iQnF0gsvi6aIEaHaqvBTnLPrh5irM10KxChi5hHSBEO/I7bRfNa4wXVNZu9du+AaIWcNuPbz87zDniHFEN+NgnmAsF0G91pmpecAAAAAElFTkSuQmCC",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,mi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB5ZbBDYIwFIZfjd4dwRHqCD0aY4ybuIE6gpPghXhEJ7AbyAgMYKyPApZAkUIfMdH/QHr4838p7722AL8uBp7iYcThCdOPpgdIuRFJuhwDhRgL8NsMHSuB30u6HIGn5FJIYDowcfF7A7tCSYB51BqgpZZUQB5ed6DU3sXrDewC8wY2wpQ6YE3nYKlpbyA/RzMM3tpgciX2TY3UGygXIq4F5rC3p4COjIfmpFEsQtixDBtUPIhax+FroU411N04YXf9+zzFTGgWpgtdhZnWT9ImqHq6yOwwvWKw+OVdWOYs8wQ4Ej1VvZ4KqNBno32oj3i3xUAELKA3TAYL7ODb+u6DTwBzBxLBXIEJuk5AJBdgrXuHBpJCTZfiUy5/XTXL+6j/B70AdWmQ/S7ON+YAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,gi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAavSURBVHgB7Z1PTxtHFMDf2Cb9o6ZBoSq0ShRQK1XKpRs1Uo/Yx4pAk0+QcOg5ILVn4F4Jeu4h9BOQEqMevdx6SIWRKlVUquRWUQRVqJyStqiAJ+/N7prFWYu1PbP71p6fZO1igzHz23kz82ZmEU7ZlWBhQw4srLBCmGGFMKPQ+kT1VlGAJTFa23BbQ5hhhTDDCmGGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIMwqQEZy1yrg6KYB3lDAMeXzEoQG15nkO6vA/PgDq1TulOjAjdSGqoPPgqMJtYGELcQ0Enks6949R0KxN3NUA4Rke+pkh/3eXXXqths8pQfjAc/k7PlfH56okrzpVqkKCpCLE2ajcAynu0ik+vKucCiooONlyNEmrcOF/CF+4kgbgQkN+ByfgYq2qgUESFeKsV25DXiy3ver5UoScKFKNcTY2V6pTk0tgiMQadae8uYx/1FoGZYTBECoXsdZsNds0zSQixNlwH2D9n4P+wYEhUTEhxbgQrOILWCvuQf8xjlLWQDNGhWDj7VAVh/7FcR5VFkEjhmuI/iuIHULcx9AVbzwUA2NC8MopZrwBj8sw9lW1tY/maojoy3YjGqHGVFowGLLExzA4jOvqcZkcGNIovO6nImqYFqmrlAT4R+/cI5xrOo9cKJcl1SjfOwr/eaEuBG0xPTZ59ffWoEeMCFGNnJSl6nTJhRRwfsCrtYGjaxALCbZjWi4CI0L8LKoLKVH9TOWbVumh8mbJiumJvp8PwWztanWqOIE19hvIACzmQ+I2iL1kWjF8zmFXHNsurC2MMSZEtSMX4DbGcgcL4RKAChnDao6D6CKE+Klwj/A8hjd/gedyG8/ddnMYKGURpQBnKdqFeCJy9zFEzPm9n7PomuMIC22+pwjmMGiiaTaqU6GklN1JoJQ6Q7S2Iap3c0Fs+fmr5Luep9DMY0UlNqPIy1lgijYhXldTVFj1ZmjuIkKK6oUxbeT11ZAG05lAkkJ5tVZyqlvMDi1CvDlybMC5EtGI+w1/ogsY4qCnhnCW4VGMrCVSbgIzNIUs8TlwR6hc01ly/GpIz91e1ZifQMfcvDwM773xGhwcH4O7tx/5PcXREbhY8D7iT389h6f/HUL3RGSfKanJbFd+7+OQY7WgrWOmr47CzJUxePrvYVshX13/EN5/83V1vv5kFxa2d6BrpJyADMA2l/XJ5UtKBtUgojT6DgwCbIVQ7SHW/9hVUi4OFeDmSJpjzWRgKyQofPfPfajsPlPnxXdHoN9hKSQIV8TO8xew8/cLdT5zdQz6HZZCgnD1eL+uwtWjJ3vq60EIWyyFBIVOPSvi4OhYySH6PWyxExIOVzT2CAiE9HvYYreDqjR22r399tPTsRyFq+BINSgQ1G/wExIabwQ1pRUKW+yEiN6XABGshHz09ltNCfOPf4ZfD/458/qX1z9Qwihsff3Lb8CKYz15MVZtyPSVUXWkRpzSKZRWCT/cXS/Fwq63hVljXRtIWQkJwlW7cFTZe9Y8Z9Xbkvomu9gICYercMGHCXd/w41/ytSqM6VV0ETvbUgBG7Mu0u+UuQ1nb2k0fmPj/PmiL37chq4IryXWSUNq3QDaew05hGz0P2VEL0j2uDJGyiWdtYPoWUja63hjIyM+Y9QsYuz3QxnTpUXQjKY2RH4PvKE4//CVZ4WYhK6Q8yZkEHqEHGEvQ9PAyAgRcV5NPXe6epEWRRzJieqt0goYQsvAkMKWs1G5g5fcFnBDwMPION84VwatFaZkGg34XLrokrhZjbaROq1zQimzIMUypLuM9BR1RcMry0b9VZYLbX5mCUfdK2ndKUjrOIT2YkBe3mAQvup+o1uMLNgTWgzeZpUl9sbSvG2T9lyWv3tpQi1Mo524krYjUI0R18AcscOLU67Mcb7Nh7Hkor8VwA2+xoKodSSFFkOHF7KdhDaKnt6ErKNNPN6dJQZ0w05PGOjjO+XNu/i+1DtiPQfMT4hmGWoD0VBuISt3I+I1hWti9DtEd5TIzq2h+AgxlIpQgzipNwFoEh5CDMkIUO+dESnpCzEsIyArUtIVkpCMAO93yXlgTHJCWqc5E5YRoNoUMQC7cM9DFT4VBN3/tqH2kC9CSqgUD1MpiY5DVEEAj92v9Flw5I41VTw480LKebiBvhl/s6Z4Eur+xJMLKZKZm/GbglOtJey/q2CGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIM6wQZlghzLBCmCGcspvEPzi1xMTWEGZYIcywQpjxEna5gwxqk9eHAAAAAElFTkSuQmCC",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,Ai=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,xi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBrVNBDoIwEFya6Hv0EeqZmJgQDoaXUB6DRC4NBy+i8Qn4IalbSLUtW9DoXChlZpjtbgH+ibw8LaY4pThbHKYXh+qyZ7N5U4g69YmL6po+IGiOyNV7gXZVHwwuj8JV5oqhbbl+b0Eu43B97xLscIEPU8DNJK4Y11nca/oEL6KoFcksgQNj4Iqj7YZbJUyYgE9MGnhNCLECowwwtvxoj0owODAbg+6wUTHGhpHuWAkosa6Z6o5O0hnkOEjMHCTiwFwTa5D6oZCJT6yAf+TvcmSiB8lCKW5fX6af8QRrqoetlQGSZAAAAABJRU5ErkJggg==",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,un=e=>{const u=e.messages.length>0,t=I`
    <div class="hero-card">
      <img src=${gi} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
    </div>
  `,n=I`
    <div class="conversation">
      ${e.messages.map(r=>I`
          <div
            class=${X({message:!0,"message--user":r.role==="user","message--assistant":r.role==="assistant"})}
          >
            <div class="message__content">
              ${oi(r.html??r.text)}
            </div>
            <time>
              ${new Date(r.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}
            </time>
          </div>
        `)}
      ${e.isLoading?I`
            <div class="message message--assistant typing">
              <span>Rio Insight está respondendo...</span>
            </div>
          `:null}
    </div>
  `;return I`
    <div class="panel-body">
      <div
        class=${X({"panel-content":!0,"panel-content--empty":!u})}
      >
        ${u?n:t}
      </div>

      ${e.errorMessage?I`<p class="error-banner">${e.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${e.suggestions.length>0?I`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${e.suggestions.map(r=>I`
                      <button
                        class="suggestion"
                        type="button"
                        @click=${()=>e.onSuggestionClick(r)}
                      >
                        ${r}
                      </button>
                    `)}
                </div>
              </div>
            `:null}

        <form
          @submit=${r=>e.handleSubmit(r)}
          aria-busy=${e.isLoading}
        >
          <input
            type="text"
            placeholder=${e.placeholder}
            .value=${e.message}
            @input=${r=>{e.message=r.target.value}}
            ?disabled=${e.isLoading}
          />
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informacoes importantes.
        </p>
      </div>
    </div>
  `},_i=e=>{const u=un(e);return I`
    <aside class=${X({panel:!0,open:e.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${e.titleText}</span>
          <button
            class="close-button"
            @click=${()=>e.handleCloseAction()}
            aria-label="Fechar Rio Insight"
          >
            <img src=${xi} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>e.toggleConversationsPanel()}
          >
            <img src=${bi} alt="" aria-hidden="true" />
            Minhas Conversas
          </button>
          <div class="panel-header__icons">
            ${e.showConversations?I`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${()=>e.handleCreateConversation()}
                  >
                    <img src=${Ai} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>e.enterFullscreen()}
            >
              <img src=${mi} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${u}

      ${en(e,{variant:"drawer"})}
    </aside>
  `},Ci=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgB7ZXtCYAgEIbPaIBGsA1arU3aoJFqgxqhDa6LFPogO/UEoR44ENHn/eGpADmBiHorSIGRT6Y0SELCyogt27gCCYx8wDtDdIhDHh/CkIeHeMj9QwLk/JAI+XuIgNwdQpMdytFbb3HIkLk4FwpITDYBLVV9qZazsQQei1JqPk7QQS6cjd85gz8gHcoOqO0aeH4uRmrTU1vi/vHrh/WzbesVLQQBC6E6gyQAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,Ei=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB5ZZLTuQwEIbLjqWRRizCDcIJpvsGnQ1MNBvYoe5G5AYzV+EGRoGIXe8mYjb0nGAyJyA3ICsQUtqmKiTpPPrhZAm1ieOU63NV/bYC8NGMmTqeLk7tgy8HE8aYTe8adJJBltx5d4nJ+r2gaTT1OeOXOJxscYmVVlehF0oYAjqPzh2LWQsGbAQGRhmu9MrdluFG0PTPdMQ1f8DVNvSzVK2UG/4I470gykRw8W8ApIJlOhu3M+NtLyzXkEwARZIWQ1swsWh/b4Co8dgTB/oCNLjBSXCIz+tiekSxtoI45z+hJwQr4N54N0t610xXvSmUuvYtB3lvmHiEnhB5LONyPZW9XhHxIg7lmUwbGQkQjiGjAyGVtiFk2ddsso5fLkYnPAswBJIfBegKSClVzfGdUbHJiqsxbiLZCTFQaQXSXKfNrUNMTQ6Pw9jSlosz//tCOPBkHa4w/8G3s9fsqe6IKvJvT26v2wFMMxFaHElPJu/QwqSbq2NZd2Saydn97HIIhCpSQhqgInBn9zns9+wXjefRfGLaE6bYVZPbsvn9nO650YYdpqZXE4kn+B4c1ec6qhNKnOVB22YKIWW+iwd2gqiuiil3I8wEQsqs9WYriIwkjZlV58fQYktZ41L+nU3sW30RXfgocxLDt40OGv7ihmTgBXJXHOOfEz/yHfwZccr7jA64eBbL8tL8fPYGlj3l1qpxcVgAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,yi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIVSURBVHgB5VVBctNAEOxZiQpwEi+IfoD9A+uAKI4yVamycyC8gPwAeAGVF+AcEldR5VpuQHKweQHmBYgf+AhUvMMsthVZWkm2wynpizS7O9M7O7O9wG0DbbrwvdbB3vxhh4kCaxszT30faS95lm7i30h0Nro4UopeyG/HNc/AlA2fHD6PB9iFaKg/hQxPE6iFjcApMI+qMnQSfdAXLQMay24DbAFZP2NwdJjE00YimwnB/1ZJwvzdBiRS+2KELjLCVbuYmSpH8moz6XXjVr8bd6QZTl3zsvOA4evi+BqRLbwsDXFDCFlrEesaft7wFL3ihiDn+lIahKUWqG2SZacOcuQL2NoI7486Z2b8zBwJ+2jAL/iPXibRzP5nGV3BD/06Eilyv/skXNlnoy9vlFKva1ywhz8d+Xy0/1mNlCl3UB72uLAl2FDWVGpjJ1BwPvp8jB2RERGr2h3btiXlvcM2wUUPS0QPPG+C/w3/floiShbdManzYzbZJb2nSIpMaeVaEdteEpWJltOnqKZJ+92nRyvrQPTMGPO2arU0z0neXiPqJfFAajHFjUGpjZUfKV0d0alERNEhqhQO9eV4bUTUoagk8qyIangRSuMO7PpMWBIlJAdJVDoV5z2y5y+ZteuKXcS/lxZe20Wy2EQDhlpUmHEs4vbYScD8VXRvUKzJ1kTXhONQFDHEUqpYqdlveJOVaN49/AWuVb4JKaLcJgAAAABJRU5ErkJggg==",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,ki=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBzZZPTsJAFMbfG8A/0USO0BvQI9AFJu5sjEbiptwATgCcQG5QN1ATNeOOBEioN8Ab9Ai4MHFR5jmjxiilzNSi8dt00vfN+01m5r0W4I+EWcw+5+VivGOrcVx8mTVcd2461wikALuw3yaA5lKoU3drXZMczMS0DXvTFZA30DUfX4KBtKD+3chDQDstrhYQ3AyrkBfEkI51HmLpCzEGAbIDnYWQWTqPFkREj9okCDOtR2dAxHuNIwIohZAXJK9vKB+pV5hg0aq7TgQaGRdswEceEXgMWUUQPSGIWQG3Omeuo922/yXVFQI+tNbFwUBrt27Ax015iKr1qGShEOLh/fDVTGEzLFTkqCpPKhICuhcnh1eZQQGf+DKBBxkkk/XO3VorJbYZiA6WAKnexhj6kEdx7NRPj8KvrxJ1xBi0Ia+KxUSOb6DB7UQ2ULQgv6p9PrJTQYQLbRc2loB0kOxrFmxMZKWCflPLIOOfDW1i9lHYq0CIpd5n5edS8tORqCOfT8s7EP/4UhSA5s9Qihqus7HdyaRXhOV61M1m9WYAAAAASUVORK5CYII=",y&&y.tagName.toUpperCase()==="SCRIPT"&&y.src||new URL("rio-assist.js",document.baseURI).href).href,wi=e=>{const u=un(e);return I`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button type="button" class="rail-button" aria-label="Ir para home">
          <img src=${Ci} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="rail-button rail-button--close"
          aria-label="Fechar tela cheia"
          @click=${()=>e.exitFullscreen(!0)}
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
              <span class="fullscreen-header__brand">RIO INSIGHT</span>
              <button
                type="button"
                class=${X({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":e.showNewConversationShortcut})}
                aria-label="Alternar ações de conversa"
                @click=${()=>e.toggleNewConversationShortcut()}
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
            ${e.activeConversationTitle?I`<span class="fullscreen-header__tab">${e.activeConversationTitle}</span>`:null}
          </div>

          <div class="fullscreen-header__actions">
            <button type="button" class="fullscreen-header__icon" aria-label="Status">
              <img src=${Ei} alt="" aria-hidden="true" />
            </button>
            <button type="button" class="fullscreen-header__icon" aria-label="Informacoes">
              <img src=${yi} alt="" aria-hidden="true" />
            </button>
            <button type="button" class="fullscreen-header__icon" aria-label="Perfil de usuario">
              <img src=${ki} alt="" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div class="fullscreen-grid">
          ${en(e,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${u}
          </div>
        </div>
      </div>
    </section>
  `},vi=e=>{const u=X({canvas:!0,"canvas--fullscreen":e.isFullscreen});return I`
    <div class=${u}>
      ${ii(e)}
      ${_i(e)}
      ${e.isFullscreen?wi(e):null}
    </div>
  `},Di="wss://ws.volkswagen.latam-sandbox.rio.cloud",Si=5*6e4;class Ti{constructor(u){this.socket=null,this.connectPromise=null,this.listeners=new Set,this.heartbeatId=null,this.token=u}matchesToken(u){return this.token===u}async sendMessage(u,t){const n=await this.ensureConnection(),r={action:"sendMessage",message:u,conversationId:t??null};console.info("[RioAssist][ws] enviando payload de mensagem",r),n.send(JSON.stringify(r))}async requestHistory(u={}){const t=await this.ensureConnection(),n={action:"getHistory",limit:u.limit??50,conversationId:u.conversationId??null};t.send(JSON.stringify(n))}onMessage(u){return this.listeners.add(u),()=>this.listeners.delete(u)}close(){this.stopHeartbeat(),this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${Di}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",u=>this.handleMessage(u)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null,this.stopHeartbeat()}),this.connectPromise=new Promise((u,t)=>{if(!this.socket){t(new Error("Falha ao criar conexão WebSocket."));return}const n=()=>{i(),this.socket&&this.startHeartbeat(this.socket),u()},r=()=>{var o;i(),this.stopHeartbeat(),(o=this.socket)==null||o.close(),this.socket=null,this.connectPromise=null,t(new Error("Não foi possível abrir conexão com o websocket do Rio Insight."))},i=()=>{var o,s;(o=this.socket)==null||o.removeEventListener("open",n),(s=this.socket)==null||s.removeEventListener("error",r)};this.socket.addEventListener("open",n,{once:!0}),this.socket.addEventListener("error",r,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do Rio Insight não está pronta.");return this.socket}startHeartbeat(u){this.stopHeartbeat(),this.heartbeatId=window.setInterval(()=>{u.readyState===WebSocket.OPEN&&u.send(JSON.stringify({action:"ping"}))},Si)}stopHeartbeat(){this.heartbeatId!==null&&(window.clearInterval(this.heartbeatId),this.heartbeatId=null)}async handleMessage(u){const t=await this.readMessage(u.data);let n=null,r=t,i;try{if(n=JSON.parse(t),typeof n=="object"&&n!==null){const o=n.action??n.type??n.event;typeof o=="string"&&(i=o);const s=n.message??n.response??n.text??n.content;typeof s=="string"&&(r=s)}}catch{n=null}this.listeners.forEach(o=>o({text:r,raw:t,data:n,action:i}))}async readMessage(u){return typeof u=="string"?u:u instanceof Blob?u.text():u instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(u)):ArrayBuffer.isView(u)?new TextDecoder().decode(new Uint8Array(u.buffer,u.byteOffset,u.byteLength)):String(u??"")}}const tn={};function Fi(e){let u=tn[e];if(u)return u;u=tn[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);u.push(n)}for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);u[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return u}function Te(e,u){typeof u!="string"&&(u=Te.defaultChars);const t=Fi(u);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let r="";for(let i=0,o=n.length;i<o;i+=3){const s=parseInt(n.slice(i+1,i+3),16);if(s<128){r+=t[s];continue}if((s&224)===192&&i+3<o){const a=parseInt(n.slice(i+4,i+6),16);if((a&192)===128){const c=s<<6&1984|a&63;c<128?r+="��":r+=String.fromCharCode(c),i+=3;continue}}if((s&240)===224&&i+6<o){const a=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16);if((a&192)===128&&(c&192)===128){const d=s<<12&61440|a<<6&4032|c&63;d<2048||d>=55296&&d<=57343?r+="���":r+=String.fromCharCode(d),i+=6;continue}}if((s&248)===240&&i+9<o){const a=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16),d=parseInt(n.slice(i+10,i+12),16);if((a&192)===128&&(c&192)===128&&(d&192)===128){let f=s<<18&1835008|a<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?r+="����":(f-=65536,r+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),i+=9;continue}}r+="�"}return r})}Te.defaultChars=";/?:@&=+$,#",Te.componentChars="";const nn={};function Ii(e){let u=nn[e];if(u)return u;u=nn[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);/^[0-9a-z]$/i.test(n)?u.push(n):u.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)u[e.charCodeAt(t)]=e[t];return u}function Ke(e,u,t){typeof u!="string"&&(t=u,u=Ke.defaultChars),typeof t>"u"&&(t=!0);const n=Ii(u);let r="";for(let i=0,o=e.length;i<o;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){r+=e.slice(i,i+3),i+=2;continue}if(s<128){r+=n[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<o){const a=e.charCodeAt(i+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[i])}return r}Ke.defaultChars=";/?:@&=+$,-_.!~*'()#",Ke.componentChars="-_.!~*'()";function Zu(e){let u="";return u+=e.protocol||"",u+=e.slashes?"//":"",u+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?u+="["+e.hostname+"]":u+=e.hostname||"",u+=e.port?":"+e.port:"",u+=e.pathname||"",u+=e.search||"",u+=e.hash||"",u}function Au(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const Ri=/^([a-z0-9.+-]+:)/i,Mi=/:[0-9]*$/,Li=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Bi=["<",">",'"',"`"," ","\r",`
`,"	"],Ui=["{","}","|","\\","^","`"].concat(Bi),Ni=["'"].concat(Ui),rn=["%","/","?",";","#"].concat(Ni),on=["/","?","#"],Oi=255,sn=/^[+a-z0-9A-Z_-]{0,63}$/,Pi=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,an={javascript:!0,"javascript:":!0},cn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Xu(e,u){if(e&&e instanceof Au)return e;const t=new Au;return t.parse(e,u),t}Au.prototype.parse=function(e,u){let t,n,r,i=e;if(i=i.trim(),!u&&e.split("#").length===1){const c=Li.exec(i);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=Ri.exec(i);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(u||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(o&&an[o])&&(i=i.substr(2),this.slashes=!0)),!an[o]&&(r||o&&!cn[o])){let c=-1;for(let h=0;h<on.length;h++)n=i.indexOf(on[h]),n!==-1&&(c===-1||n<c)&&(c=n);let d,f;c===-1?f=i.lastIndexOf("@"):f=i.lastIndexOf("@",c),f!==-1&&(d=i.slice(0,f),i=i.slice(f+1),this.auth=d),c=-1;for(let h=0;h<rn.length;h++)n=i.indexOf(rn[h]),n!==-1&&(c===-1||n<c)&&(c=n);c===-1&&(c=i.length),i[c-1]===":"&&c--;const m=i.slice(0,c);i=i.slice(c),this.parseHost(m),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let k=0,v=h.length;k<v;k++){const S=h[k];if(S&&!S.match(sn)){let C="";for(let _=0,g=S.length;_<g;_++)S.charCodeAt(_)>127?C+="x":C+=S[_];if(!C.match(sn)){const _=h.slice(0,k),g=h.slice(k+1),E=S.match(Pi);E&&(_.push(E[1]),g.unshift(E[2])),g.length&&(i=g.join(".")+i),this.hostname=_.join(".");break}}}}this.hostname.length>Oi&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const a=i.indexOf("?");return a!==-1&&(this.search=i.substr(a),i=i.slice(0,a)),i&&(this.pathname=i),cn[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this},Au.prototype.parseHost=function(e){let u=Mi.exec(e);u&&(u=u[0],u!==":"&&(this.port=u.substr(1)),e=e.substr(0,e.length-u.length)),e&&(this.hostname=e)};const $i=Object.freeze(Object.defineProperty({__proto__:null,decode:Te,encode:Ke,format:Zu,parse:Xu},Symbol.toStringTag,{value:"Module"})),ln=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,dn=/[\0-\x1F\x7F-\x9F]/,zi=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Ku=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,fn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,hn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Hi=Object.freeze(Object.defineProperty({__proto__:null,Any:ln,Cc:dn,Cf:zi,P:Ku,S:fn,Z:hn},Symbol.toStringTag,{value:"Module"})),qi=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),ji=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Ju;const Yi=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Gi=(Ju=String.fromCodePoint)!==null&&Ju!==void 0?Ju:function(e){let u="";return e>65535&&(e-=65536,u+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),u+=String.fromCharCode(e),u};function Qi(e){var u;return e>=55296&&e<=57343||e>1114111?65533:(u=Yi.get(e))!==null&&u!==void 0?u:e}var N;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(N||(N={}));const Vi=32;var be;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(be||(be={}));function et(e){return e>=N.ZERO&&e<=N.NINE}function Wi(e){return e>=N.UPPER_A&&e<=N.UPPER_F||e>=N.LOWER_A&&e<=N.LOWER_F}function Zi(e){return e>=N.UPPER_A&&e<=N.UPPER_Z||e>=N.LOWER_A&&e<=N.LOWER_Z||et(e)}function Xi(e){return e===N.EQUALS||Zi(e)}var O;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(O||(O={}));var me;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(me||(me={}));class Ki{constructor(u,t,n){this.decodeTree=u,this.emitCodePoint=t,this.errors=n,this.state=O.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=me.Strict}startEntity(u){this.decodeMode=u,this.state=O.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(u,t){switch(this.state){case O.EntityStart:return u.charCodeAt(t)===N.NUM?(this.state=O.NumericStart,this.consumed+=1,this.stateNumericStart(u,t+1)):(this.state=O.NamedEntity,this.stateNamedEntity(u,t));case O.NumericStart:return this.stateNumericStart(u,t);case O.NumericDecimal:return this.stateNumericDecimal(u,t);case O.NumericHex:return this.stateNumericHex(u,t);case O.NamedEntity:return this.stateNamedEntity(u,t)}}stateNumericStart(u,t){return t>=u.length?-1:(u.charCodeAt(t)|Vi)===N.LOWER_X?(this.state=O.NumericHex,this.consumed+=1,this.stateNumericHex(u,t+1)):(this.state=O.NumericDecimal,this.stateNumericDecimal(u,t))}addToNumericResult(u,t,n,r){if(t!==n){const i=n-t;this.result=this.result*Math.pow(r,i)+parseInt(u.substr(t,i),r),this.consumed+=i}}stateNumericHex(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(et(r)||Wi(r))t+=1;else return this.addToNumericResult(u,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(u,n,t,16),-1}stateNumericDecimal(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(et(r))t+=1;else return this.addToNumericResult(u,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(u,n,t,10),-1}emitNumericEntity(u,t){var n;if(this.consumed<=t)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(u===N.SEMI)this.consumed+=1;else if(this.decodeMode===me.Strict)return 0;return this.emitCodePoint(Qi(this.result),this.consumed),this.errors&&(u!==N.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(u,t){const{decodeTree:n}=this;let r=n[this.treeIndex],i=(r&be.VALUE_LENGTH)>>14;for(;t<u.length;t++,this.excess++){const o=u.charCodeAt(t);if(this.treeIndex=Ji(n,r,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===me.Attribute&&(i===0||Xi(o))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&be.VALUE_LENGTH)>>14,i!==0){if(o===N.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==me.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var u;const{result:t,decodeTree:n}=this,r=(n[t]&be.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(u=this.errors)===null||u===void 0||u.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(u,t,n){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[u]&~be.VALUE_LENGTH:r[u+1],n),t===3&&this.emitCodePoint(r[u+2],n),n}end(){var u;switch(this.state){case O.NamedEntity:return this.result!==0&&(this.decodeMode!==me.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case O.NumericDecimal:return this.emitNumericEntity(0,2);case O.NumericHex:return this.emitNumericEntity(0,3);case O.NumericStart:return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case O.EntityStart:return 0}}}function pn(e){let u="";const t=new Ki(e,n=>u+=Gi(n));return function(r,i){let o=0,s=0;for(;(s=r.indexOf("&",s))>=0;){u+=r.slice(o,s),t.startEntity(i);const c=t.write(r,s+1);if(c<0){o=s+t.end();break}o=s+c,s=c===0?o+1:o}const a=u+r.slice(o);return u="",a}}function Ji(e,u,t,n){const r=(u&be.BRANCH_LENGTH)>>7,i=u&be.JUMP_TABLE;if(r===0)return i!==0&&n===i?t:-1;if(i){const a=n-i;return a<0||a>=r?-1:e[t+a]-1}let o=t,s=o+r-1;for(;o<=s;){const a=o+s>>>1,c=e[a];if(c<n)o=a+1;else if(c>n)s=a-1;else return e[a+r]}return-1}const eo=pn(qi);pn(ji);function bn(e,u=me.Legacy){return eo(e,u)}function uo(e){return Object.prototype.toString.call(e)}function ut(e){return uo(e)==="[object String]"}const to=Object.prototype.hasOwnProperty;function no(e,u){return to.call(e,u)}function xu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function mn(e,u,t){return[].concat(e.slice(0,u),t,e.slice(u+1))}function tt(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function _u(e){if(e>65535){e-=65536;const u=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(u,t)}return String.fromCharCode(e)}const gn=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,ro=/&([a-z#][a-z0-9]{1,31});/gi,io=new RegExp(gn.source+"|"+ro.source,"gi"),oo=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function so(e,u){if(u.charCodeAt(0)===35&&oo.test(u)){const n=u[1].toLowerCase()==="x"?parseInt(u.slice(2),16):parseInt(u.slice(1),10);return tt(n)?_u(n):e}const t=bn(e);return t!==e?t:e}function ao(e){return e.indexOf("\\")<0?e:e.replace(gn,"$1")}function Fe(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(io,function(u,t,n){return t||so(u,n)})}const co=/[&<>"]/,lo=/[&<>"]/g,fo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function ho(e){return fo[e]}function ge(e){return co.test(e)?e.replace(lo,ho):e}const po=/[.?*+^$[\]\\(){}|-]/g;function bo(e){return e.replace(po,"\\$&")}function T(e){switch(e){case 9:case 32:return!0}return!1}function Je(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function eu(e){return Ku.test(e)||fn.test(e)}function uu(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Cu(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const mo=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:mn,assign:xu,escapeHtml:ge,escapeRE:bo,fromCodePoint:_u,has:no,isMdAsciiPunct:uu,isPunctChar:eu,isSpace:T,isString:ut,isValidEntityCode:tt,isWhiteSpace:Je,lib:{mdurl:$i,ucmicro:Hi},normalizeReference:Cu,unescapeAll:Fe,unescapeMd:ao},Symbol.toStringTag,{value:"Module"}));function go(e,u,t){let n,r,i,o;const s=e.posMax,a=e.pos;for(e.pos=u+1,n=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(n--,n===0)){r=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)n++;else if(t)return e.pos=a,-1}}let c=-1;return r&&(c=e.pos),e.pos=a,c}function Ao(e,u,t){let n,r=u;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<t;){if(n=e.charCodeAt(r),n===10||n===60)return i;if(n===62)return i.pos=r+1,i.str=Fe(e.slice(u+1,r)),i.ok=!0,i;if(n===92&&r+1<t){r+=2;continue}r++}return i}let o=0;for(;r<t&&(n=e.charCodeAt(r),!(n===32||n<32||n===127));){if(n===92&&r+1<t){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(n===40&&(o++,o>32))return i;if(n===41){if(o===0)break;o--}r++}return u===r||o!==0||(i.str=Fe(e.slice(u,r)),i.pos=r,i.ok=!0),i}function xo(e,u,t,n){let r,i=u;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)o.str=n.str,o.marker=n.marker;else{if(i>=t)return o;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return o;u++,i++,s===40&&(s=41),o.marker=s}for(;i<t;){if(r=e.charCodeAt(i),r===o.marker)return o.pos=i+1,o.str+=Fe(e.slice(u,i)),o.ok=!0,o;if(r===40&&o.marker===41)return o;r===92&&i+1<t&&i++,i++}return o.can_continue=!0,o.str+=Fe(e.slice(u,i)),o}const _o=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Ao,parseLinkLabel:go,parseLinkTitle:xo},Symbol.toStringTag,{value:"Module"})),te={};te.code_inline=function(e,u,t,n,r){const i=e[u];return"<code"+r.renderAttrs(i)+">"+ge(i.content)+"</code>"},te.code_block=function(e,u,t,n,r){const i=e[u];return"<pre"+r.renderAttrs(i)+"><code>"+ge(e[u].content)+`</code></pre>
`},te.fence=function(e,u,t,n,r){const i=e[u],o=i.info?Fe(i.info).trim():"";let s="",a="";if(o){const d=o.split(/(\s+)/g);s=d[0],a=d.slice(2).join("")}let c;if(t.highlight?c=t.highlight(i.content,s,a)||ge(i.content):c=ge(i.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=i.attrIndex("class"),f=i.attrs?i.attrs.slice():[];d<0?f.push(["class",t.langPrefix+s]):(f[d]=f[d].slice(),f[d][1]+=" "+t.langPrefix+s);const m={attrs:f};return`<pre><code${r.renderAttrs(m)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${c}</code></pre>
`},te.image=function(e,u,t,n,r){const i=e[u];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,t,n),r.renderToken(e,u,t)},te.hardbreak=function(e,u,t){return t.xhtmlOut?`<br />
`:`<br>
`},te.softbreak=function(e,u,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`},te.text=function(e,u){return ge(e[u].content)},te.html_block=function(e,u){return e[u].content},te.html_inline=function(e,u){return e[u].content};function Ie(){this.rules=xu({},te)}Ie.prototype.renderAttrs=function(u){let t,n,r;if(!u.attrs)return"";for(r="",t=0,n=u.attrs.length;t<n;t++)r+=" "+ge(u.attrs[t][0])+'="'+ge(u.attrs[t][1])+'"';return r},Ie.prototype.renderToken=function(u,t,n){const r=u[t];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&u[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=" /");let o=!1;if(r.block&&(o=!0,r.nesting===1&&t+1<u.length)){const s=u[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===r.tag)&&(o=!1)}return i+=o?`>
`:">",i},Ie.prototype.renderInline=function(e,u,t){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;typeof r[s]<"u"?n+=r[s](e,i,u,t,this):n+=this.renderToken(e,i,u)}return n},Ie.prototype.renderInlineAsText=function(e,u,t){let n="";for(let r=0,i=e.length;r<i;r++)switch(e[r].type){case"text":n+=e[r].content;break;case"image":n+=this.renderInlineAsText(e[r].children,u,t);break;case"html_inline":case"html_block":n+=e[r].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n},Ie.prototype.render=function(e,u,t){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;s==="inline"?n+=this.renderInline(e[i].children,u,t):typeof r[s]<"u"?n+=r[s](e,i,u,t,this):n+=this.renderToken(e,i,u,t)}return n};function Q(){this.__rules__=[],this.__cache__=null}Q.prototype.__find__=function(e){for(let u=0;u<this.__rules__.length;u++)if(this.__rules__[u].name===e)return u;return-1},Q.prototype.__compile__=function(){const e=this,u=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(n){u.indexOf(n)<0&&u.push(n)})}),e.__cache__={},u.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},Q.prototype.at=function(e,u,t){const n=this.__find__(e),r=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=u,this.__rules__[n].alt=r.alt||[],this.__cache__=null},Q.prototype.before=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null},Q.prototype.after=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null},Q.prototype.push=function(e,u,t){const n=t||{};this.__rules__.push({name:e,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null},Q.prototype.enable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!0,t.push(n)},this),this.__cache__=null,t},Q.prototype.enableOnly=function(e,u){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,u)},Q.prototype.disable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!1,t.push(n)},this),this.__cache__=null,t},Q.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ee(e,u,t){this.type=e,this.tag=u,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ee.prototype.attrIndex=function(u){if(!this.attrs)return-1;const t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===u)return n;return-1},ee.prototype.attrPush=function(u){this.attrs?this.attrs.push(u):this.attrs=[u]},ee.prototype.attrSet=function(u,t){const n=this.attrIndex(u),r=[u,t];n<0?this.attrPush(r):this.attrs[n]=r},ee.prototype.attrGet=function(u){const t=this.attrIndex(u);let n=null;return t>=0&&(n=this.attrs[t][1]),n},ee.prototype.attrJoin=function(u,t){const n=this.attrIndex(u);n<0?this.attrPush([u,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};function An(e,u,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=u}An.prototype.Token=ee;const Co=/\r\n?|\n/g,Eo=/\0/g;function yo(e){let u;u=e.src.replace(Co,`
`),u=u.replace(Eo,"�"),e.src=u}function ko(e){let u;e.inlineMode?(u=new e.Token("inline","",0),u.content=e.src,u.map=[0,1],u.children=[],e.tokens.push(u)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function wo(e){const u=e.tokens;for(let t=0,n=u.length;t<n;t++){const r=u[t];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function vo(e){return/^<a[>\s]/i.test(e)}function Do(e){return/^<\/a\s*>/i.test(e)}function So(e){const u=e.tokens;if(e.md.options.linkify)for(let t=0,n=u.length;t<n;t++){if(u[t].type!=="inline"||!e.md.linkify.pretest(u[t].content))continue;let r=u[t].children,i=0;for(let o=r.length-1;o>=0;o--){const s=r[o];if(s.type==="link_close"){for(o--;r[o].level!==s.level&&r[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&(vo(s.content)&&i>0&&i--,Do(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const a=s.content;let c=e.md.linkify.match(a);const d=[];let f=s.level,m=0;c.length>0&&c[0].index===0&&o>0&&r[o-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const h=c[p].url,k=e.md.normalizeLink(h);if(!e.md.validateLink(k))continue;let v=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(v)?v=e.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=e.md.normalizeLinkText(v):v=e.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const S=c[p].index;if(S>m){const E=new e.Token("text","",0);E.content=a.slice(m,S),E.level=f,d.push(E)}const C=new e.Token("link_open","a",1);C.attrs=[["href",k]],C.level=f++,C.markup="linkify",C.info="auto",d.push(C);const _=new e.Token("text","",0);_.content=v,_.level=f,d.push(_);const g=new e.Token("link_close","a",-1);g.level=--f,g.markup="linkify",g.info="auto",d.push(g),m=c[p].lastIndex}if(m<a.length){const p=new e.Token("text","",0);p.content=a.slice(m),p.level=f,d.push(p)}u[t].children=r=mn(r,o,d)}}}}const xn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,To=/\((c|tm|r)\)/i,Fo=/\((c|tm|r)\)/ig,Io={c:"©",r:"®",tm:"™"};function Ro(e,u){return Io[u.toLowerCase()]}function Mo(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&(n.content=n.content.replace(Fo,Ro)),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function Lo(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&xn.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function Bo(e){let u;if(e.md.options.typographer)for(u=e.tokens.length-1;u>=0;u--)e.tokens[u].type==="inline"&&(To.test(e.tokens[u].content)&&Mo(e.tokens[u].children),xn.test(e.tokens[u].content)&&Lo(e.tokens[u].children))}const Uo=/['"]/,_n=/['"]/g,Cn="’";function Eu(e,u,t){return e.slice(0,u)+t+e.slice(u+1)}function No(e,u){let t;const n=[];for(let r=0;r<e.length;r++){const i=e[r],o=e[r].level;for(t=n.length-1;t>=0&&!(n[t].level<=o);t--);if(n.length=t+1,i.type!=="text")continue;let s=i.content,a=0,c=s.length;e:for(;a<c;){_n.lastIndex=a;const d=_n.exec(s);if(!d)break;let f=!0,m=!0;a=d.index+1;const p=d[0]==="'";let h=32;if(d.index-1>=0)h=s.charCodeAt(d.index-1);else for(t=r-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){h=e[t].content.charCodeAt(e[t].content.length-1);break}let k=32;if(a<c)k=s.charCodeAt(a);else for(t=r+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){k=e[t].content.charCodeAt(0);break}const v=uu(h)||eu(String.fromCharCode(h)),S=uu(k)||eu(String.fromCharCode(k)),C=Je(h),_=Je(k);if(_?f=!1:S&&(C||v||(f=!1)),C?m=!1:v&&(_||S||(m=!1)),k===34&&d[0]==='"'&&h>=48&&h<=57&&(m=f=!1),f&&m&&(f=v,m=S),!f&&!m){p&&(i.content=Eu(i.content,d.index,Cn));continue}if(m)for(t=n.length-1;t>=0;t--){let g=n[t];if(n[t].level<o)break;if(g.single===p&&n[t].level===o){g=n[t];let E,D;p?(E=u.md.options.quotes[2],D=u.md.options.quotes[3]):(E=u.md.options.quotes[0],D=u.md.options.quotes[1]),i.content=Eu(i.content,d.index,D),e[g.token].content=Eu(e[g.token].content,g.pos,E),a+=D.length-1,g.token===r&&(a+=E.length-1),s=i.content,c=s.length,n.length=t;continue e}}f?n.push({token:r,pos:d.index,single:p,level:o}):m&&p&&(i.content=Eu(i.content,d.index,Cn))}}}function Oo(e){if(e.md.options.typographer)for(let u=e.tokens.length-1;u>=0;u--)e.tokens[u].type!=="inline"||!Uo.test(e.tokens[u].content)||No(e.tokens[u].children,e)}function Po(e){let u,t;const n=e.tokens,r=n.length;for(let i=0;i<r;i++){if(n[i].type!=="inline")continue;const o=n[i].children,s=o.length;for(u=0;u<s;u++)o[u].type==="text_special"&&(o[u].type="text");for(u=t=0;u<s;u++)o[u].type==="text"&&u+1<s&&o[u+1].type==="text"?o[u+1].content=o[u].content+o[u+1].content:(u!==t&&(o[t]=o[u]),t++);u!==t&&(o.length=t)}}const nt=[["normalize",yo],["block",ko],["inline",wo],["linkify",So],["replacements",Bo],["smartquotes",Oo],["text_join",Po]];function rt(){this.ruler=new Q;for(let e=0;e<nt.length;e++)this.ruler.push(nt[e][0],nt[e][1])}rt.prototype.process=function(e){const u=this.ruler.getRules("");for(let t=0,n=u.length;t<n;t++)u[t](e)},rt.prototype.State=An;function ne(e,u,t,n){this.src=e,this.md=u,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,o=0,s=0,a=0,c=r.length,d=!1;o<c;o++){const f=r.charCodeAt(o);if(!d)if(T(f)){s++,f===9?a+=4-a%4:a++;continue}else d=!0;(f===10||o===c-1)&&(f!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(a),this.bsCount.push(0),d=!1,s=0,a=0,i=o+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ne.prototype.push=function(e,u,t){const n=new ee(e,u,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},ne.prototype.isEmpty=function(u){return this.bMarks[u]+this.tShift[u]>=this.eMarks[u]},ne.prototype.skipEmptyLines=function(u){for(let t=this.lineMax;u<t&&!(this.bMarks[u]+this.tShift[u]<this.eMarks[u]);u++);return u},ne.prototype.skipSpaces=function(u){for(let t=this.src.length;u<t;u++){const n=this.src.charCodeAt(u);if(!T(n))break}return u},ne.prototype.skipSpacesBack=function(u,t){if(u<=t)return u;for(;u>t;)if(!T(this.src.charCodeAt(--u)))return u+1;return u},ne.prototype.skipChars=function(u,t){for(let n=this.src.length;u<n&&this.src.charCodeAt(u)===t;u++);return u},ne.prototype.skipCharsBack=function(u,t,n){if(u<=n)return u;for(;u>n;)if(t!==this.src.charCodeAt(--u))return u+1;return u},ne.prototype.getLines=function(u,t,n,r){if(u>=t)return"";const i=new Array(t-u);for(let o=0,s=u;s<t;s++,o++){let a=0;const c=this.bMarks[s];let d=c,f;for(s+1<t||r?f=this.eMarks[s]+1:f=this.eMarks[s];d<f&&a<n;){const m=this.src.charCodeAt(d);if(T(m))m===9?a+=4-(a+this.bsCount[s])%4:a++;else if(d-c<this.tShift[s])a++;else break;d++}a>n?i[o]=new Array(a-n+1).join(" ")+this.src.slice(d,f):i[o]=this.src.slice(d,f)}return i.join("")},ne.prototype.Token=ee;const $o=65536;function it(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];return e.src.slice(t,n)}function En(e){const u=[],t=e.length;let n=0,r=e.charCodeAt(n),i=!1,o=0,s="";for(;n<t;)r===124&&(i?(s+=e.substring(o,n-1),o=n):(u.push(s+e.substring(o,n)),s="",o=n+1)),i=r===92,n++,r=e.charCodeAt(n);return u.push(s+e.substring(o)),u}function zo(e,u,t,n){if(u+2>t)return!1;let r=u+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let i=e.bMarks[r]+e.tShift[r];if(i>=e.eMarks[r])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[r])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!T(s)||o===45&&T(s))return!1;for(;i<e.eMarks[r];){const g=e.src.charCodeAt(i);if(g!==124&&g!==45&&g!==58&&!T(g))return!1;i++}let a=it(e,u+1),c=a.split("|");const d=[];for(let g=0;g<c.length;g++){const E=c[g].trim();if(!E){if(g===0||g===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?d.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=it(e,u).trim(),a.indexOf("|")===-1||e.sCount[u]-e.blkIndent>=4)return!1;c=En(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(n)return!0;const m=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),k=[u,0];h.map=k;const v=e.push("thead_open","thead",1);v.map=[u,u+1];const S=e.push("tr_open","tr",1);S.map=[u,u+1];for(let g=0;g<c.length;g++){const E=e.push("th_open","th",1);d[g]&&(E.attrs=[["style","text-align:"+d[g]]]);const D=e.push("inline","",0);D.content=c[g].trim(),D.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let C,_=0;for(r=u+2;r<t&&!(e.sCount[r]<e.blkIndent);r++){let g=!1;for(let D=0,B=p.length;D<B;D++)if(p[D](e,r,t,!0)){g=!0;break}if(g||(a=it(e,r).trim(),!a)||e.sCount[r]-e.blkIndent>=4||(c=En(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),_+=f-c.length,_>$o))break;if(r===u+2){const D=e.push("tbody_open","tbody",1);D.map=C=[u+2,0]}const E=e.push("tr_open","tr",1);E.map=[r,r+1];for(let D=0;D<f;D++){const B=e.push("td_open","td",1);d[D]&&(B.attrs=[["style","text-align:"+d[D]]]);const Z=e.push("inline","",0);Z.content=c[D]?c[D].trim():"",Z.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return C&&(e.push("tbody_close","tbody",-1),C[1]=r),e.push("table_close","table",-1),k[1]=r,e.parentType=m,e.line=r,!0}function Ho(e,u,t){if(e.sCount[u]-e.blkIndent<4)return!1;let n=u+1,r=n;for(;n<t;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,r=n;continue}break}e.line=r;const i=e.push("code_block","code",0);return i.content=e.getLines(u,r,4+e.blkIndent,!1)+`
`,i.map=[u,e.line],!0}function qo(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||r+3>i)return!1;const o=e.src.charCodeAt(r);if(o!==126&&o!==96)return!1;let s=r;r=e.skipChars(r,o);let a=r-s;if(a<3)return!1;const c=e.src.slice(s,r),d=e.src.slice(r,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let f=u,m=!1;for(;f++,!(f>=t||(r=s=e.bMarks[f]+e.tShift[f],i=e.eMarks[f],r<i&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(r)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(r=e.skipChars(r,o),!(r-s<a)&&(r=e.skipSpaces(r),!(r<i)))){m=!0;break}a=e.sCount[u],e.line=f+(m?1:0);const p=e.push("fence","code",0);return p.info=d,p.content=e.getLines(u+1,f,a,!0),p.markup=c,p.map=[u,e.line],!0}function jo(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];const o=e.lineMax;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(n)return!0;const s=[],a=[],c=[],d=[],f=e.md.block.ruler.getRules("blockquote"),m=e.parentType;e.parentType="blockquote";let p=!1,h;for(h=u;h<t;h++){const _=e.sCount[h]<e.blkIndent;if(r=e.bMarks[h]+e.tShift[h],i=e.eMarks[h],r>=i)break;if(e.src.charCodeAt(r++)===62&&!_){let E=e.sCount[h]+1,D,B;e.src.charCodeAt(r)===32?(r++,E++,B=!1,D=!0):e.src.charCodeAt(r)===9?(D=!0,(e.bsCount[h]+E)%4===3?(r++,E++,B=!1):B=!0):D=!1;let Z=E;for(s.push(e.bMarks[h]),e.bMarks[h]=r;r<i;){const oe=e.src.charCodeAt(r);if(T(oe))oe===9?Z+=4-(Z+e.bsCount[h]+(B?1:0))%4:Z++;else break;r++}p=r>=i,a.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(D?1:0),c.push(e.sCount[h]),e.sCount[h]=Z-E,d.push(e.tShift[h]),e.tShift[h]=r-e.bMarks[h];continue}if(p)break;let g=!1;for(let E=0,D=f.length;E<D;E++)if(f[E](e,h,t,!0)){g=!0;break}if(g){e.lineMax=h,e.blkIndent!==0&&(s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]=-1}const k=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const S=[u,0];v.map=S,e.md.block.tokenize(e,u,h);const C=e.push("blockquote_close","blockquote",-1);C.markup=">",e.lineMax=o,e.parentType=m,S[1]=e.line;for(let _=0;_<d.length;_++)e.bMarks[_+u]=s[_],e.tShift[_+u]=d[_],e.sCount[_+u]=c[_],e.bsCount[_+u]=a[_];return e.blkIndent=k,!0}function Yo(e,u,t,n){const r=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let i=e.bMarks[u]+e.tShift[u];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;i<r;){const c=e.src.charCodeAt(i++);if(c!==o&&!T(c))return!1;c===o&&s++}if(s<3)return!1;if(n)return!0;e.line=u+1;const a=e.push("hr","hr",0);return a.map=[u,e.line],a.markup=Array(s+1).join(String.fromCharCode(o)),!0}function yn(e,u){const t=e.eMarks[u];let n=e.bMarks[u]+e.tShift[u];const r=e.src.charCodeAt(n++);if(r!==42&&r!==45&&r!==43)return-1;if(n<t){const i=e.src.charCodeAt(n);if(!T(i))return-1}return n}function kn(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];let r=t;if(r+1>=n)return-1;let i=e.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=n)return-1;if(i=e.src.charCodeAt(r++),i>=48&&i<=57){if(r-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<n&&(i=e.src.charCodeAt(r),!T(i))?-1:r}function Go(e,u){const t=e.level+2;for(let n=u+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===t&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function Qo(e,u,t,n){let r,i,o,s,a=u,c=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;n&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let f,m,p;if((p=kn(e,a))>=0){if(f=!0,o=e.bMarks[a]+e.tShift[a],m=Number(e.src.slice(o,p-1)),d&&m!==1)return!1}else if((p=yn(e,a))>=0)f=!1;else return!1;if(d&&e.skipSpaces(p)>=e.eMarks[a])return!1;if(n)return!0;const h=e.src.charCodeAt(p-1),k=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),m!==1&&(s.attrs=[["start",m]])):s=e.push("bullet_list_open","ul",1);const v=[a,0];s.map=v,s.markup=String.fromCharCode(h);let S=!1;const C=e.md.block.ruler.getRules("list"),_=e.parentType;for(e.parentType="list";a<t;){i=p,r=e.eMarks[a];const g=e.sCount[a]+p-(e.bMarks[a]+e.tShift[a]);let E=g;for(;i<r;){const xe=e.src.charCodeAt(i);if(xe===9)E+=4-(E+e.bsCount[a])%4;else if(xe===32)E++;else break;i++}const D=i;let B;D>=r?B=1:B=E-g,B>4&&(B=1);const Z=g+B;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const oe=[a,0];s.map=oe,f&&(s.info=e.src.slice(o,p-1));const ke=e.tight,U=e.tShift[a],lu=e.sCount[a],du=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=Z,e.tight=!0,e.tShift[a]=D-e.bMarks[a],e.sCount[a]=E,D>=r&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,a,t,!0),(!e.tight||S)&&(c=!1),S=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=du,e.tShift[a]=U,e.sCount[a]=lu,e.tight=ke,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),a=e.line,oe[1]=a,a>=t||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let Le=!1;for(let xe=0,wt=C.length;xe<wt;xe++)if(C[xe](e,a,t,!0)){Le=!0;break}if(Le)break;if(f){if(p=kn(e,a),p<0)break;o=e.bMarks[a]+e.tShift[a]}else if(p=yn(e,a),p<0)break;if(h!==e.src.charCodeAt(p-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),v[1]=a,e.line=a,e.parentType=_,c&&Go(e,k),!0}function Vo(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u],o=u+1;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function s(C){const _=e.lineMax;if(C>=_||e.isEmpty(C))return null;let g=!1;if(e.sCount[C]-e.blkIndent>3&&(g=!0),e.sCount[C]<0&&(g=!0),!g){const B=e.md.block.ruler.getRules("reference"),Z=e.parentType;e.parentType="reference";let oe=!1;for(let ke=0,U=B.length;ke<U;ke++)if(B[ke](e,C,_,!0)){oe=!0;break}if(e.parentType=Z,oe)return null}const E=e.bMarks[C]+e.tShift[C],D=e.eMarks[C];return e.src.slice(E,D+1)}let a=e.src.slice(r,i+1);i=a.length;let c=-1;for(r=1;r<i;r++){const C=a.charCodeAt(r);if(C===91)return!1;if(C===93){c=r;break}else if(C===10){const _=s(o);_!==null&&(a+=_,i=a.length,o++)}else if(C===92&&(r++,r<i&&a.charCodeAt(r)===10)){const _=s(o);_!==null&&(a+=_,i=a.length,o++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<i;r++){const C=a.charCodeAt(r);if(C===10){const _=s(o);_!==null&&(a+=_,i=a.length,o++)}else if(!T(C))break}const d=e.md.helpers.parseLinkDestination(a,r,i);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;r=d.pos;const m=r,p=o,h=r;for(;r<i;r++){const C=a.charCodeAt(r);if(C===10){const _=s(o);_!==null&&(a+=_,i=a.length,o++)}else if(!T(C))break}let k=e.md.helpers.parseLinkTitle(a,r,i);for(;k.can_continue;){const C=s(o);if(C===null)break;a+=C,r=i,i=a.length,o++,k=e.md.helpers.parseLinkTitle(a,r,i,k)}let v;for(r<i&&h!==r&&k.ok?(v=k.str,r=k.pos):(v="",r=m,o=p);r<i;){const C=a.charCodeAt(r);if(!T(C))break;r++}if(r<i&&a.charCodeAt(r)!==10&&v)for(v="",r=m,o=p;r<i;){const C=a.charCodeAt(r);if(!T(C))break;r++}if(r<i&&a.charCodeAt(r)!==10)return!1;const S=Cu(a.slice(1,c));return S?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[S]>"u"&&(e.env.references[S]={title:v,href:f}),e.line=o),!0):!1}const Wo=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Zo="[a-zA-Z_:][a-zA-Z0-9:._-]*",Xo="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",wn="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+Zo+"(?:\\s*=\\s*"+Xo+")?)")+"*\\s*\\/?>",vn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Ko="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Jo="<[?][\\s\\S]*?[?]>",e0="<![A-Za-z][^>]*>",u0="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",t0=new RegExp("^(?:"+wn+"|"+vn+"|"+Ko+"|"+Jo+"|"+e0+"|"+u0+")"),n0=new RegExp("^(?:"+wn+"|"+vn+")"),Re=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Wo.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(n0.source+"\\s*$"),/^$/,!1]];function r0(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let o=e.src.slice(r,i),s=0;for(;s<Re.length&&!Re[s][0].test(o);s++);if(s===Re.length)return!1;if(n)return Re[s][2];let a=u+1;if(!Re[s][1].test(o)){for(;a<t&&!(e.sCount[a]<e.blkIndent);a++)if(r=e.bMarks[a]+e.tShift[a],i=e.eMarks[a],o=e.src.slice(r,i),Re[s][1].test(o)){o.length!==0&&a++;break}}e.line=a;const c=e.push("html_block","",0);return c.map=[u,a],c.content=e.getLines(u,a,e.blkIndent,!0),!0}function i0(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(r);if(o!==35||r>=i)return!1;let s=1;for(o=e.src.charCodeAt(++r);o===35&&r<i&&s<=6;)s++,o=e.src.charCodeAt(++r);if(s>6||r<i&&!T(o))return!1;if(n)return!0;i=e.skipSpacesBack(i,r);const a=e.skipCharsBack(i,35,r);a>r&&T(e.src.charCodeAt(a-1))&&(i=a),e.line=u+1;const c=e.push("heading_open","h"+String(s),1);c.markup="########".slice(0,s),c.map=[u,e.line];const d=e.push("inline","",0);d.content=e.src.slice(r,i).trim(),d.map=[u,e.line],d.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function o0(e,u,t){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[u]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let i=0,o,s=u+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let p=e.bMarks[s]+e.tShift[s];const h=e.eMarks[s];if(p<h&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=h))){i=o===61?1:2;break}}if(e.sCount[s]<0)continue;let m=!1;for(let p=0,h=n.length;p<h;p++)if(n[p](e,s,t,!0)){m=!0;break}if(m)break}if(!i)return!1;const a=e.getLines(u,s,e.blkIndent,!1).trim();e.line=s+1;const c=e.push("heading_open","h"+String(i),1);c.markup=String.fromCharCode(o),c.map=[u,e.line];const d=e.push("inline","",0);d.content=a,d.map=[u,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(i),-1);return f.markup=String.fromCharCode(o),e.parentType=r,!0}function s0(e,u,t){const n=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let i=u+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let c=!1;for(let d=0,f=n.length;d<f;d++)if(n[d](e,i,t,!0)){c=!0;break}if(c)break}const o=e.getLines(u,i,e.blkIndent,!1).trim();e.line=i;const s=e.push("paragraph_open","p",1);s.map=[u,e.line];const a=e.push("inline","",0);return a.content=o,a.map=[u,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const yu=[["table",zo,["paragraph","reference"]],["code",Ho],["fence",qo,["paragraph","reference","blockquote","list"]],["blockquote",jo,["paragraph","reference","blockquote","list"]],["hr",Yo,["paragraph","reference","blockquote","list"]],["list",Qo,["paragraph","reference","blockquote"]],["reference",Vo],["html_block",r0,["paragraph","reference","blockquote"]],["heading",i0,["paragraph","reference","blockquote"]],["lheading",o0],["paragraph",s0]];function ku(){this.ruler=new Q;for(let e=0;e<yu.length;e++)this.ruler.push(yu[e][0],yu[e][1],{alt:(yu[e][2]||[]).slice()})}ku.prototype.tokenize=function(e,u,t){const n=this.ruler.getRules(""),r=n.length,i=e.md.options.maxNesting;let o=u,s=!1;for(;o<t&&(e.line=o=e.skipEmptyLines(o),!(o>=t||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=t;break}const a=e.line;let c=!1;for(let d=0;d<r;d++)if(c=n[d](e,o,t,!1),c){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<t&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},ku.prototype.parse=function(e,u,t,n){if(!e)return;const r=new this.State(e,u,t,n);this.tokenize(r,r.line,r.lineMax)},ku.prototype.State=ne;function tu(e,u,t,n){this.src=e,this.env=t,this.md=u,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}tu.prototype.pushPending=function(){const e=new ee("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},tu.prototype.push=function(e,u,t){this.pending&&this.pushPending();const n=new ee(e,u,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(r),n},tu.prototype.scanDelims=function(e,u){const t=this.posMax,n=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===n;)i++;const o=i-e,s=i<t?this.src.charCodeAt(i):32,a=uu(r)||eu(String.fromCharCode(r)),c=uu(s)||eu(String.fromCharCode(s)),d=Je(r),f=Je(s),m=!f&&(!c||d||a),p=!d&&(!a||f||c);return{can_open:m&&(u||!p||a),can_close:p&&(u||!m||c),length:o}},tu.prototype.Token=ee;function a0(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function c0(e,u){let t=e.pos;for(;t<e.posMax&&!a0(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(u||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const l0=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function d0(e,u){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,n=e.posMax;if(t+3>n||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const r=e.pending.match(l0);if(!r)return!1;const i=r[1],o=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!o)return!1;let s=o.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!u){e.pending=e.pending.slice(0,-i.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-i.length,!0}function f0(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const n=e.pending.length-1,r=e.posMax;if(!u)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<r&&T(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ot=[];for(let e=0;e<256;e++)ot.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ot[e.charCodeAt(0)]=1});function h0(e,u){let t=e.pos;const n=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=n))return!1;let r=e.src.charCodeAt(t);if(r===10){for(u||e.push("hardbreak","br",0),t++;t<n&&(r=e.src.charCodeAt(t),!!T(r));)t++;return e.pos=t,!0}let i=e.src[t];if(r>=55296&&r<=56319&&t+1<n){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const o="\\"+i;if(!u){const s=e.push("text_special","",0);r<256&&ot[r]!==0?s.content=i:s.content=o,s.markup=o,s.info="escape"}return e.pos=t+1,!0}function p0(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const r=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const o=e.src.slice(r,t),s=o.length;if(e.backticksScanned&&(e.backticks[s]||0)<=r)return u||(e.pending+=o),e.pos+=s,!0;let a=t,c;for(;(c=e.src.indexOf("`",a))!==-1;){for(a=c+1;a<i&&e.src.charCodeAt(a)===96;)a++;const d=a-c;if(d===s){if(!u){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=c}return e.backticksScanned=!0,u||(e.pending+=o),e.pos+=s,!0}function b0(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==126)return!1;const r=e.scanDelims(e.pos,!0);let i=r.length;const o=String.fromCharCode(n);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=o,i--);for(let a=0;a<i;a+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function Dn(e,u){let t;const n=[],r=u.length;for(let i=0;i<r;i++){const o=u[i];if(o.marker!==126||o.end===-1)continue;const s=u[o.end];t=e.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&n.push(s.token-1)}for(;n.length;){const i=n.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(t=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=t)}}function m0(e){const u=e.tokens_meta,t=e.tokens_meta.length;Dn(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&Dn(e,u[n].delimiters)}const Sn={tokenize:b0,postProcess:m0};function g0(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==95&&n!==42)return!1;const r=e.scanDelims(e.pos,n===42);for(let i=0;i<r.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Tn(e,u){const t=u.length;for(let n=t-1;n>=0;n--){const r=u[n];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=u[r.end],o=n>0&&u[n-1].end===r.end+1&&u[n-1].marker===r.marker&&u[n-1].token===r.token-1&&u[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),a=e.tokens[r.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?s+s:s,a.content="";const c=e.tokens[i.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?s+s:s,c.content="",o&&(e.tokens[u[n-1].token].content="",e.tokens[u[r.end+1].token].content="",n--)}}function A0(e){const u=e.tokens_meta,t=e.tokens_meta.length;Tn(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&Tn(e,u[n].delimiters)}const Fn={tokenize:g0,postProcess:A0};function x0(e,u){let t,n,r,i,o="",s="",a=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,m=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&e.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(t=e.src.charCodeAt(h),!(!T(t)&&t!==10));h++);if(h>=f)return!1;if(a=h,r=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),r.ok){for(o=e.md.normalizeLink(r.str),e.md.validateLink(o)?h=r.pos:o="",a=h;h<f&&(t=e.src.charCodeAt(h),!(!T(t)&&t!==10));h++);if(r=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<f&&a!==h&&r.ok)for(s=r.str,h=r.pos;h<f&&(t=e.src.charCodeAt(h),!(!T(t)&&t!==10));h++);}(h>=f||e.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof e.env.references>"u")return!1;if(h<f&&e.src.charCodeAt(h)===91?(a=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?n=e.src.slice(a,h++):h=p+1):h=p+1,n||(n=e.src.slice(m,p)),i=e.env.references[Cu(n)],!i)return e.pos=d,!1;o=i.href,s=i.title}if(!u){e.pos=m,e.posMax=p;const k=e.push("link_open","a",1),v=[["href",o]];k.attrs=v,s&&v.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=f,!0}function _0(e,u){let t,n,r,i,o,s,a,c,d="";const f=e.pos,m=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(i=h+1,i<m&&e.src.charCodeAt(i)===40){for(i++;i<m&&(t=e.src.charCodeAt(i),!(!T(t)&&t!==10));i++);if(i>=m)return!1;for(c=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(d=e.md.normalizeLink(s.str),e.md.validateLink(d)?i=s.pos:d=""),c=i;i<m&&(t=e.src.charCodeAt(i),!(!T(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<m&&c!==i&&s.ok)for(a=s.str,i=s.pos;i<m&&(t=e.src.charCodeAt(i),!(!T(t)&&t!==10));i++);else a="";if(i>=m||e.src.charCodeAt(i)!==41)return e.pos=f,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<m&&e.src.charCodeAt(i)===91?(c=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?r=e.src.slice(c,i++):i=h+1):i=h+1,r||(r=e.src.slice(p,h)),o=e.env.references[Cu(r)],!o)return e.pos=f,!1;d=o.href,a=o.title}if(!u){n=e.src.slice(p,h);const k=[];e.md.inline.parse(n,e.md,e.env,k);const v=e.push("image","img",0),S=[["src",d],["alt",""]];v.attrs=S,v.children=k,v.content=n,a&&S.push(["title",a])}return e.pos=i,e.posMax=m,!0}const C0=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,E0=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function y0(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const n=e.pos,r=e.posMax;for(;;){if(++t>=r)return!1;const o=e.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const i=e.src.slice(n+1,t);if(E0.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!u){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}if(C0.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!u){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}return!1}function k0(e){return/^<a[>\s]/i.test(e)}function w0(e){return/^<\/a\s*>/i.test(e)}function v0(e){const u=e|32;return u>=97&&u<=122}function D0(e,u){if(!e.md.options.html)return!1;const t=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=t)return!1;const r=e.src.charCodeAt(n+1);if(r!==33&&r!==63&&r!==47&&!v0(r))return!1;const i=e.src.slice(n).match(t0);if(!i)return!1;if(!u){const o=e.push("html_inline","",0);o.content=i[0],k0(o.content)&&e.linkLevel++,w0(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const S0=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,T0=/^&([a-z][a-z0-9]{1,31});/i;function F0(e,u){const t=e.pos,n=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=n)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(S0);if(i){if(!u){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=tt(o)?_u(o):_u(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(T0);if(i){const o=bn(i[0]);if(o!==i[0]){if(!u){const s=e.push("text_special","",0);s.content=o,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function In(e){const u={},t=e.length;if(!t)return;let n=0,r=-2;const i=[];for(let o=0;o<t;o++){const s=e[o];if(i.push(0),(e[n].marker!==s.marker||r!==s.token-1)&&(n=o),r=s.token,s.length=s.length||0,!s.close)continue;u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]);const a=u[s.marker][(s.open?3:0)+s.length%3];let c=n-i[n]-1,d=c;for(;c>a;c-=i[c]+1){const f=e[c];if(f.marker===s.marker&&f.open&&f.end<0){let m=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(m=!0),!m){const p=c>0&&!e[c-1].open?i[c-1]+1:0;i[o]=o-c+p,i[c]=p,s.open=!1,f.end=o,f.close=!1,d=-1,r=-2;break}}}d!==-1&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function I0(e){const u=e.tokens_meta,t=e.tokens_meta.length;In(e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&In(u[n].delimiters)}function R0(e){let u,t,n=0;const r=e.tokens,i=e.tokens.length;for(u=t=0;u<i;u++)r[u].nesting<0&&n--,r[u].level=n,r[u].nesting>0&&n++,r[u].type==="text"&&u+1<i&&r[u+1].type==="text"?r[u+1].content=r[u].content+r[u+1].content:(u!==t&&(r[t]=r[u]),t++);u!==t&&(r.length=t)}const st=[["text",c0],["linkify",d0],["newline",f0],["escape",h0],["backticks",p0],["strikethrough",Sn.tokenize],["emphasis",Fn.tokenize],["link",x0],["image",_0],["autolink",y0],["html_inline",D0],["entity",F0]],at=[["balance_pairs",I0],["strikethrough",Sn.postProcess],["emphasis",Fn.postProcess],["fragments_join",R0]];function nu(){this.ruler=new Q;for(let e=0;e<st.length;e++)this.ruler.push(st[e][0],st[e][1]);this.ruler2=new Q;for(let e=0;e<at.length;e++)this.ruler2.push(at[e][0],at[e][1])}nu.prototype.skipToken=function(e){const u=e.pos,t=this.ruler.getRules(""),n=t.length,r=e.md.options.maxNesting,i=e.cache;if(typeof i[u]<"u"){e.pos=i[u];return}let o=!1;if(e.level<r){for(let s=0;s<n;s++)if(e.level++,o=t[s](e,!0),e.level--,o){if(u>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[u]=e.pos},nu.prototype.tokenize=function(e){const u=this.ruler.getRules(""),t=u.length,n=e.posMax,r=e.md.options.maxNesting;for(;e.pos<n;){const i=e.pos;let o=!1;if(e.level<r){for(let s=0;s<t;s++)if(o=u[s](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},nu.prototype.parse=function(e,u,t,n){const r=new this.State(e,u,t,n);this.tokenize(r);const i=this.ruler2.getRules(""),o=i.length;for(let s=0;s<o;s++)i[s](r)},nu.prototype.State=tu;function M0(e){const u={};e=e||{},u.src_Any=ln.source,u.src_Cc=dn.source,u.src_Z=hn.source,u.src_P=Ku.source,u.src_ZPCc=[u.src_Z,u.src_P,u.src_Cc].join("|"),u.src_ZCc=[u.src_Z,u.src_Cc].join("|");const t="[><｜]";return u.src_pseudo_letter="(?:(?!"+t+"|"+u.src_ZPCc+")"+u.src_Any+")",u.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",u.src_auth="(?:(?:(?!"+u.src_ZCc+"|[@/\\[\\]()]).)+@)?",u.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",u.src_host_terminator="(?=$|"+t+"|"+u.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+u.src_ZPCc+"))",u.src_path="(?:[/?#](?:(?!"+u.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+u.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+u.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+u.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+u.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+u.src_ZCc+"|[']).)+\\'|\\'(?="+u.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+u.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+u.src_ZCc+"|$)|;(?!"+u.src_ZCc+"|$)|\\!+(?!"+u.src_ZCc+"|[!]|$)|\\?(?!"+u.src_ZCc+"|[?]|$))+|\\/)?",u.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',u.src_xn="xn--[a-z0-9\\-]{1,59}",u.src_domain_root="(?:"+u.src_xn+"|"+u.src_pseudo_letter+"{1,63})",u.src_domain="(?:"+u.src_xn+"|(?:"+u.src_pseudo_letter+")|(?:"+u.src_pseudo_letter+"(?:-|"+u.src_pseudo_letter+"){0,61}"+u.src_pseudo_letter+"))",u.src_host="(?:(?:(?:(?:"+u.src_domain+")\\.)*"+u.src_domain+"))",u.tpl_host_fuzzy="(?:"+u.src_ip4+"|(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%)))",u.tpl_host_no_ip_fuzzy="(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%))",u.src_host_strict=u.src_host+u.src_host_terminator,u.tpl_host_fuzzy_strict=u.tpl_host_fuzzy+u.src_host_terminator,u.src_host_port_strict=u.src_host+u.src_port+u.src_host_terminator,u.tpl_host_port_fuzzy_strict=u.tpl_host_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_port_no_ip_fuzzy_strict=u.tpl_host_no_ip_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+u.src_ZPCc+"|>|$))",u.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+u.src_ZCc+")("+u.src_email_name+"@"+u.tpl_host_fuzzy_strict+")",u.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_fuzzy_strict+u.src_path+")",u.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_no_ip_fuzzy_strict+u.src_path+")",u}function ct(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function wu(e){return Object.prototype.toString.call(e)}function L0(e){return wu(e)==="[object String]"}function B0(e){return wu(e)==="[object Object]"}function U0(e){return wu(e)==="[object RegExp]"}function Rn(e){return wu(e)==="[object Function]"}function N0(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Mn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function O0(e){return Object.keys(e||{}).reduce(function(u,t){return u||Mn.hasOwnProperty(t)},!1)}const P0={"http:":{validate:function(e,u,t){const n=e.slice(u);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,u,t){const n=e.slice(u);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?u>=3&&e[u-3]===":"||u>=3&&e[u-3]==="/"?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,u,t){const n=e.slice(u);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},$0="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",z0="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function H0(e){e.__index__=-1,e.__text_cache__=""}function q0(e){return function(u,t){const n=u.slice(t);return e.test(n)?n.match(e)[0].length:0}}function Ln(){return function(e,u){u.normalize(e)}}function vu(e){const u=e.re=M0(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push($0),t.push(u.src_xn),u.src_tlds=t.join("|");function n(s){return s.replace("%TLDS%",u.src_tlds)}u.email_fuzzy=RegExp(n(u.tpl_email_fuzzy),"i"),u.link_fuzzy=RegExp(n(u.tpl_link_fuzzy),"i"),u.link_no_ip_fuzzy=RegExp(n(u.tpl_link_no_ip_fuzzy),"i"),u.host_fuzzy_test=RegExp(n(u.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function i(s,a){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+a)}Object.keys(e.__schemas__).forEach(function(s){const a=e.__schemas__[s];if(a===null)return;const c={validate:null,link:null};if(e.__compiled__[s]=c,B0(a)){U0(a.validate)?c.validate=q0(a.validate):Rn(a.validate)?c.validate=a.validate:i(s,a),Rn(a.normalize)?c.normalize=a.normalize:a.normalize?i(s,a):c.normalize=Ln();return}if(L0(a)){r.push(s);return}i(s,a)}),r.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Ln()};const o=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(N0).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),H0(e)}function j0(e,u){const t=e.__index__,n=e.__last_index__,r=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+u,this.lastIndex=n+u,this.raw=r,this.text=r,this.url=r}function lt(e,u){const t=new j0(e,u);return e.__compiled__[t.schema].normalize(t,e),t}function W(e,u){if(!(this instanceof W))return new W(e,u);u||O0(e)&&(u=e,e={}),this.__opts__=ct({},Mn,u),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ct({},P0,e),this.__compiled__={},this.__tlds__=z0,this.__tlds_replaced__=!1,this.re={},vu(this)}W.prototype.add=function(u,t){return this.__schemas__[u]=t,vu(this),this},W.prototype.set=function(u){return this.__opts__=ct(this.__opts__,u),this},W.prototype.test=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return!1;let t,n,r,i,o,s,a,c,d;if(this.re.schema_test.test(u)){for(a=this.re.schema_search,a.lastIndex=0;(t=a.exec(u))!==null;)if(i=this.testSchemaAt(u,t[2],a.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=u.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=u.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=u.indexOf("@"),d>=0&&(r=u.match(this.re.email_fuzzy))!==null&&(o=r.index+r[1].length,s=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0},W.prototype.pretest=function(u){return this.re.pretest.test(u)},W.prototype.testSchemaAt=function(u,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(u,n,this):0},W.prototype.match=function(u){const t=[];let n=0;this.__index__>=0&&this.__text_cache__===u&&(t.push(lt(this,n)),n=this.__last_index__);let r=n?u.slice(n):u;for(;this.test(r);)t.push(lt(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null},W.prototype.matchAtStart=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return null;const t=this.re.schema_at_start.exec(u);if(!t)return null;const n=this.testSchemaAt(u,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,lt(this,0)):null},W.prototype.tlds=function(u,t){return u=Array.isArray(u)?u:[u],t?(this.__tlds__=this.__tlds__.concat(u).sort().filter(function(n,r,i){return n!==i[r-1]}).reverse(),vu(this),this):(this.__tlds__=u.slice(),this.__tlds_replaced__=!0,vu(this),this)},W.prototype.normalize=function(u){u.schema||(u.url="http://"+u.url),u.schema==="mailto:"&&!/^mailto:/i.test(u.url)&&(u.url="mailto:"+u.url)},W.prototype.onCompile=function(){};const Me=2147483647,re=36,dt=1,ru=26,Y0=38,G0=700,Bn=72,Un=128,Nn="-",Q0=/^xn--/,V0=/[^\0-\x7F]/,W0=/[\x2E\u3002\uFF0E\uFF61]/g,Z0={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ft=re-dt,ie=Math.floor,ht=String.fromCharCode;function Ae(e){throw new RangeError(Z0[e])}function X0(e,u){const t=[];let n=e.length;for(;n--;)t[n]=u(e[n]);return t}function On(e,u){const t=e.split("@");let n="";t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(W0,".");const r=e.split("."),i=X0(r,u).join(".");return n+i}function Pn(e){const u=[];let t=0;const n=e.length;for(;t<n;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){const i=e.charCodeAt(t++);(i&64512)==56320?u.push(((r&1023)<<10)+(i&1023)+65536):(u.push(r),t--)}else u.push(r)}return u}const K0=e=>String.fromCodePoint(...e),J0=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:re},$n=function(e,u){return e+22+75*(e<26)-((u!=0)<<5)},zn=function(e,u,t){let n=0;for(e=t?ie(e/G0):e>>1,e+=ie(e/u);e>ft*ru>>1;n+=re)e=ie(e/ft);return ie(n+(ft+1)*e/(e+Y0))},Hn=function(e){const u=[],t=e.length;let n=0,r=Un,i=Bn,o=e.lastIndexOf(Nn);o<0&&(o=0);for(let s=0;s<o;++s)e.charCodeAt(s)>=128&&Ae("not-basic"),u.push(e.charCodeAt(s));for(let s=o>0?o+1:0;s<t;){const a=n;for(let d=1,f=re;;f+=re){s>=t&&Ae("invalid-input");const m=J0(e.charCodeAt(s++));m>=re&&Ae("invalid-input"),m>ie((Me-n)/d)&&Ae("overflow"),n+=m*d;const p=f<=i?dt:f>=i+ru?ru:f-i;if(m<p)break;const h=re-p;d>ie(Me/h)&&Ae("overflow"),d*=h}const c=u.length+1;i=zn(n-a,c,a==0),ie(n/c)>Me-r&&Ae("overflow"),r+=ie(n/c),n%=c,u.splice(n++,0,r)}return String.fromCodePoint(...u)},qn=function(e){const u=[];e=Pn(e);const t=e.length;let n=Un,r=0,i=Bn;for(const a of e)a<128&&u.push(ht(a));const o=u.length;let s=o;for(o&&u.push(Nn);s<t;){let a=Me;for(const d of e)d>=n&&d<a&&(a=d);const c=s+1;a-n>ie((Me-r)/c)&&Ae("overflow"),r+=(a-n)*c,n=a;for(const d of e)if(d<n&&++r>Me&&Ae("overflow"),d===n){let f=r;for(let m=re;;m+=re){const p=m<=i?dt:m>=i+ru?ru:m-i;if(f<p)break;const h=f-p,k=re-p;u.push(ht($n(p+h%k,0))),f=ie(h/k)}u.push(ht($n(f,0))),i=zn(r,c,s===o),r=0,++s}++r,++n}return u.join("")},jn={version:"2.3.1",ucs2:{decode:Pn,encode:K0},decode:Hn,encode:qn,toASCII:function(e){return On(e,function(u){return V0.test(u)?"xn--"+qn(u):u})},toUnicode:function(e){return On(e,function(u){return Q0.test(u)?Hn(u.slice(4).toLowerCase()):u})}},es={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},us=/^(vbscript|javascript|file|data):/,ts=/^data:image\/(gif|png|jpeg|webp);/;function ns(e){const u=e.trim().toLowerCase();return us.test(u)?ts.test(u):!0}const Yn=["http:","https:","mailto:"];function rs(e){const u=Xu(e,!0);if(u.hostname&&(!u.protocol||Yn.indexOf(u.protocol)>=0))try{u.hostname=jn.toASCII(u.hostname)}catch{}return Ke(Zu(u))}function is(e){const u=Xu(e,!0);if(u.hostname&&(!u.protocol||Yn.indexOf(u.protocol)>=0))try{u.hostname=jn.toUnicode(u.hostname)}catch{}return Te(Zu(u),Te.defaultChars+"%")}function K(e,u){if(!(this instanceof K))return new K(e,u);u||ut(e)||(u=e||{},e="default"),this.inline=new nu,this.block=new ku,this.core=new rt,this.renderer=new Ie,this.linkify=new W,this.validateLink=ns,this.normalizeLink=rs,this.normalizeLinkText=is,this.utils=mo,this.helpers=xu({},_o),this.options={},this.configure(e),u&&this.set(u)}K.prototype.set=function(e){return xu(this.options,e),this},K.prototype.configure=function(e){const u=this;if(ut(e)){const t=e;if(e=es[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&u.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&u[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&u[t].ruler2.enableOnly(e.components[t].rules2)}),this},K.prototype.enable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},K.prototype.disable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},K.prototype.use=function(e){const u=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,u),this},K.prototype.parse=function(e,u){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,u);return this.core.process(t),t.tokens},K.prototype.render=function(e,u){return u=u||{},this.renderer.render(this.parse(e,u),this.options,u)},K.prototype.parseInline=function(e,u){const t=new this.core.State(e,this,u);return t.inlineMode=!0,this.core.process(t),t.tokens},K.prototype.renderInline=function(e,u){return u=u||{},this.renderer.render(this.parseInline(e,u),this.options,u)};function os(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pt=!0,Gn=!1,Qn=!1,ss=function(e,u){u&&(pt=!u.enabled,Gn=!!u.label,Qn=!!u.labelAfter),e.core.ruler.after("inline","github-task-lists",function(t){for(var n=t.tokens,r=2;r<n.length;r++)cs(n,r)&&(ls(n[r],t.Token),Vn(n[r-2],"class","task-list-item"+(pt?"":" enabled")),Vn(n[as(n,r-2)],"class","contains-task-list"))})};function Vn(e,u,t){var n=e.attrIndex(u),r=[u,t];n<0?e.attrPush(r):e.attrs[n]=r}function as(e,u){for(var t=e[u].level-1,n=u-1;n>=0;n--)if(e[n].level===t)return n;return-1}function cs(e,u){return bs(e[u])&&ms(e[u-1])&&gs(e[u-2])&&As(e[u])}function ls(e,u){if(e.children.unshift(ds(e,u)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),Gn)if(Qn){e.children.pop();var t="task-item-"+Math.ceil(Math.random()*(1e4*1e3)-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+' id="'+t+'">',e.children.push(ps(e.content,t,u))}else e.children.unshift(fs(u)),e.children.push(hs(u))}function ds(e,u){var t=new u("html_inline","",0),n=pt?' disabled="" ':"";return e.content.indexOf("[ ] ")===0?t.content='<input class="task-list-item-checkbox"'+n+'type="checkbox">':(e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0)&&(t.content='<input class="task-list-item-checkbox" checked=""'+n+'type="checkbox">'),t}function fs(e){var u=new e("html_inline","",0);return u.content="<label>",u}function hs(e){var u=new e("html_inline","",0);return u.content="</label>",u}function ps(e,u,t){var n=new t("html_inline","",0);return n.content='<label class="task-list-item-label" for="'+u+'">'+e+"</label>",n.attrs=[{for:u}],n}function bs(e){return e.type==="inline"}function ms(e){return e.type==="paragraph_open"}function gs(e){return e.type==="list_item_open"}function As(e){return e.content.indexOf("[ ] ")===0||e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0}const xs=os(ss);/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Wn,setPrototypeOf:Zn,isFrozen:_s,getPrototypeOf:Cs,getOwnPropertyDescriptor:Es}=Object;let{freeze:j,seal:J,create:bt}=Object,{apply:mt,construct:gt}=typeof Reflect<"u"&&Reflect;j||(j=function(u){return u}),J||(J=function(u){return u}),mt||(mt=function(u,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return u.apply(t,r)}),gt||(gt=function(u){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new u(...n)});const Du=G(Array.prototype.forEach),ys=G(Array.prototype.lastIndexOf),Xn=G(Array.prototype.pop),iu=G(Array.prototype.push),ks=G(Array.prototype.splice),Su=G(String.prototype.toLowerCase),At=G(String.prototype.toString),xt=G(String.prototype.match),ou=G(String.prototype.replace),ws=G(String.prototype.indexOf),vs=G(String.prototype.trim),ue=G(Object.prototype.hasOwnProperty),Y=G(RegExp.prototype.test),su=Ds(TypeError);function G(e){return function(u){u instanceof RegExp&&(u.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return mt(e,u,n)}}function Ds(e){return function(){for(var u=arguments.length,t=new Array(u),n=0;n<u;n++)t[n]=arguments[n];return gt(e,t)}}function w(e,u){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Su;Zn&&Zn(e,null);let n=u.length;for(;n--;){let r=u[n];if(typeof r=="string"){const i=t(r);i!==r&&(_s(u)||(u[n]=i),r=i)}e[r]=!0}return e}function Ss(e){for(let u=0;u<e.length;u++)ue(e,u)||(e[u]=null);return e}function ce(e){const u=bt(null);for(const[t,n]of Wn(e))ue(e,t)&&(Array.isArray(n)?u[t]=Ss(n):n&&typeof n=="object"&&n.constructor===Object?u[t]=ce(n):u[t]=n);return u}function au(e,u){for(;e!==null;){const n=Es(e,u);if(n){if(n.get)return G(n.get);if(typeof n.value=="function")return G(n.value)}e=Cs(e)}function t(){return null}return t}const Kn=j(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_t=j(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ct=j(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ts=j(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Et=j(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Fs=j(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Jn=j(["#text"]),er=j(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),yt=j(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ur=j(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Tu=j(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Is=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Rs=J(/<%[\w\W]*|[\w\W]*%>/gm),Ms=J(/\$\{[\w\W]*/gm),Ls=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bs=J(/^aria-[\-\w]+$/),tr=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Us=J(/^(?:\w+script|data):/i),Ns=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),nr=J(/^html$/i),Os=J(/^[a-z][.\w]*(-[.\w]+)+$/i);var rr=Object.freeze({__proto__:null,ARIA_ATTR:Bs,ATTR_WHITESPACE:Ns,CUSTOM_ELEMENT:Os,DATA_ATTR:Ls,DOCTYPE_NAME:nr,ERB_EXPR:Rs,IS_ALLOWED_URI:tr,IS_SCRIPT_OR_DATA:Us,MUSTACHE_EXPR:Is,TMPLIT_EXPR:Ms});const cu={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ps=function(){return typeof window>"u"?null:window},$s=function(u,t){if(typeof u!="object"||typeof u.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return u.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},ir=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function or(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ps();const u=x=>or(x);if(u.version="3.3.0",u.removed=[],!e||!e.document||e.document.nodeType!==cu.document||!e.Element)return u.isSupported=!1,u;let{document:t}=e;const n=t,r=n.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:s,Element:a,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:m,trustedTypes:p}=e,h=a.prototype,k=au(h,"cloneNode"),v=au(h,"remove"),S=au(h,"nextSibling"),C=au(h,"childNodes"),_=au(h,"parentNode");if(typeof o=="function"){const x=t.createElement("template");x.content&&x.content.ownerDocument&&(t=x.content.ownerDocument)}let g,E="";const{implementation:D,createNodeIterator:B,createDocumentFragment:Z,getElementsByTagName:oe}=t,{importNode:ke}=n;let U=ir();u.isSupported=typeof Wn=="function"&&typeof _=="function"&&D&&D.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lu,ERB_EXPR:du,TMPLIT_EXPR:Le,DATA_ATTR:xe,ARIA_ATTR:wt,IS_SCRIPT_OR_DATA:js,ATTR_WHITESPACE:cr,CUSTOM_ELEMENT:Ys}=rr;let{IS_ALLOWED_URI:lr}=rr,P=null;const dr=w({},[...Kn,..._t,...Ct,...Et,...Jn]);let z=null;const fr=w({},[...er,...yt,...ur,...Tu]);let R=Object.seal(bt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),fu=null,vt=null;const Be=Object.seal(bt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let hr=!0,Dt=!0,pr=!1,br=!0,Ue=!1,Iu=!0,we=!1,St=!1,Tt=!1,Ne=!1,Ru=!1,Mu=!1,mr=!0,gr=!1;const Gs="user-content-";let Ft=!0,hu=!1,Oe={},Pe=null;const Ar=w({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let xr=null;const _r=w({},["audio","video","img","source","image","track"]);let It=null;const Cr=w({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Lu="http://www.w3.org/1998/Math/MathML",Bu="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let $e=le,Rt=!1,Mt=null;const Qs=w({},[Lu,Bu,le],At);let Uu=w({},["mi","mo","mn","ms","mtext"]),Nu=w({},["annotation-xml"]);const Vs=w({},["title","style","font","a","script"]);let pu=null;const Ws=["application/xhtml+xml","text/html"],Zs="text/html";let $=null,ze=null;const Xs=t.createElement("form"),Er=function(l){return l instanceof RegExp||l instanceof Function},Lt=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ze&&ze===l)){if((!l||typeof l!="object")&&(l={}),l=ce(l),pu=Ws.indexOf(l.PARSER_MEDIA_TYPE)===-1?Zs:l.PARSER_MEDIA_TYPE,$=pu==="application/xhtml+xml"?At:Su,P=ue(l,"ALLOWED_TAGS")?w({},l.ALLOWED_TAGS,$):dr,z=ue(l,"ALLOWED_ATTR")?w({},l.ALLOWED_ATTR,$):fr,Mt=ue(l,"ALLOWED_NAMESPACES")?w({},l.ALLOWED_NAMESPACES,At):Qs,It=ue(l,"ADD_URI_SAFE_ATTR")?w(ce(Cr),l.ADD_URI_SAFE_ATTR,$):Cr,xr=ue(l,"ADD_DATA_URI_TAGS")?w(ce(_r),l.ADD_DATA_URI_TAGS,$):_r,Pe=ue(l,"FORBID_CONTENTS")?w({},l.FORBID_CONTENTS,$):Ar,fu=ue(l,"FORBID_TAGS")?w({},l.FORBID_TAGS,$):ce({}),vt=ue(l,"FORBID_ATTR")?w({},l.FORBID_ATTR,$):ce({}),Oe=ue(l,"USE_PROFILES")?l.USE_PROFILES:!1,hr=l.ALLOW_ARIA_ATTR!==!1,Dt=l.ALLOW_DATA_ATTR!==!1,pr=l.ALLOW_UNKNOWN_PROTOCOLS||!1,br=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ue=l.SAFE_FOR_TEMPLATES||!1,Iu=l.SAFE_FOR_XML!==!1,we=l.WHOLE_DOCUMENT||!1,Ne=l.RETURN_DOM||!1,Ru=l.RETURN_DOM_FRAGMENT||!1,Mu=l.RETURN_TRUSTED_TYPE||!1,Tt=l.FORCE_BODY||!1,mr=l.SANITIZE_DOM!==!1,gr=l.SANITIZE_NAMED_PROPS||!1,Ft=l.KEEP_CONTENT!==!1,hu=l.IN_PLACE||!1,lr=l.ALLOWED_URI_REGEXP||tr,$e=l.NAMESPACE||le,Uu=l.MATHML_TEXT_INTEGRATION_POINTS||Uu,Nu=l.HTML_INTEGRATION_POINTS||Nu,R=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Er(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(R.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Er(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(R.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(R.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Dt=!1),Ru&&(Ne=!0),Oe&&(P=w({},Jn),z=[],Oe.html===!0&&(w(P,Kn),w(z,er)),Oe.svg===!0&&(w(P,_t),w(z,yt),w(z,Tu)),Oe.svgFilters===!0&&(w(P,Ct),w(z,yt),w(z,Tu)),Oe.mathMl===!0&&(w(P,Et),w(z,ur),w(z,Tu))),l.ADD_TAGS&&(typeof l.ADD_TAGS=="function"?Be.tagCheck=l.ADD_TAGS:(P===dr&&(P=ce(P)),w(P,l.ADD_TAGS,$))),l.ADD_ATTR&&(typeof l.ADD_ATTR=="function"?Be.attributeCheck=l.ADD_ATTR:(z===fr&&(z=ce(z)),w(z,l.ADD_ATTR,$))),l.ADD_URI_SAFE_ATTR&&w(It,l.ADD_URI_SAFE_ATTR,$),l.FORBID_CONTENTS&&(Pe===Ar&&(Pe=ce(Pe)),w(Pe,l.FORBID_CONTENTS,$)),Ft&&(P["#text"]=!0),we&&w(P,["html","head","body"]),P.table&&(w(P,["tbody"]),delete fu.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw su('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw su('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');g=l.TRUSTED_TYPES_POLICY,E=g.createHTML("")}else g===void 0&&(g=$s(p,r)),g!==null&&typeof E=="string"&&(E=g.createHTML(""));j&&j(l),ze=l}},yr=w({},[..._t,...Ct,...Ts]),kr=w({},[...Et,...Fs]),Ks=function(l){let b=_(l);(!b||!b.tagName)&&(b={namespaceURI:$e,tagName:"template"});const A=Su(l.tagName),F=Su(b.tagName);return Mt[l.namespaceURI]?l.namespaceURI===Bu?b.namespaceURI===le?A==="svg":b.namespaceURI===Lu?A==="svg"&&(F==="annotation-xml"||Uu[F]):!!yr[A]:l.namespaceURI===Lu?b.namespaceURI===le?A==="math":b.namespaceURI===Bu?A==="math"&&Nu[F]:!!kr[A]:l.namespaceURI===le?b.namespaceURI===Bu&&!Nu[F]||b.namespaceURI===Lu&&!Uu[F]?!1:!kr[A]&&(Vs[A]||!yr[A]):!!(pu==="application/xhtml+xml"&&Mt[l.namespaceURI]):!1},se=function(l){iu(u.removed,{element:l});try{_(l).removeChild(l)}catch{v(l)}},ve=function(l,b){try{iu(u.removed,{attribute:b.getAttributeNode(l),from:b})}catch{iu(u.removed,{attribute:null,from:b})}if(b.removeAttribute(l),l==="is")if(Ne||Ru)try{se(b)}catch{}else try{b.setAttribute(l,"")}catch{}},wr=function(l){let b=null,A=null;if(Tt)l="<remove></remove>"+l;else{const L=xt(l,/^[\r\n\t ]+/);A=L&&L[0]}pu==="application/xhtml+xml"&&$e===le&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const F=g?g.createHTML(l):l;if($e===le)try{b=new m().parseFromString(F,pu)}catch{}if(!b||!b.documentElement){b=D.createDocument($e,"template",null);try{b.documentElement.innerHTML=Rt?E:F}catch{}}const q=b.body||b.documentElement;return l&&A&&q.insertBefore(t.createTextNode(A),q.childNodes[0]||null),$e===le?oe.call(b,we?"html":"body")[0]:we?b.documentElement:q},vr=function(l){return B.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Bt=function(l){return l instanceof f&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof d)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Dr=function(l){return typeof s=="function"&&l instanceof s};function de(x,l,b){Du(x,A=>{A.call(u,l,b,ze)})}const Sr=function(l){let b=null;if(de(U.beforeSanitizeElements,l,null),Bt(l))return se(l),!0;const A=$(l.nodeName);if(de(U.uponSanitizeElement,l,{tagName:A,allowedTags:P}),Iu&&l.hasChildNodes()&&!Dr(l.firstElementChild)&&Y(/<[/\w!]/g,l.innerHTML)&&Y(/<[/\w!]/g,l.textContent)||l.nodeType===cu.progressingInstruction||Iu&&l.nodeType===cu.comment&&Y(/<[/\w]/g,l.data))return se(l),!0;if(!(Be.tagCheck instanceof Function&&Be.tagCheck(A))&&(!P[A]||fu[A])){if(!fu[A]&&Fr(A)&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,A)||R.tagNameCheck instanceof Function&&R.tagNameCheck(A)))return!1;if(Ft&&!Pe[A]){const F=_(l)||l.parentNode,q=C(l)||l.childNodes;if(q&&F){const L=q.length;for(let V=L-1;V>=0;--V){const fe=k(q[V],!0);fe.__removalCount=(l.__removalCount||0)+1,F.insertBefore(fe,S(l))}}}return se(l),!0}return l instanceof a&&!Ks(l)||(A==="noscript"||A==="noembed"||A==="noframes")&&Y(/<\/no(script|embed|frames)/i,l.innerHTML)?(se(l),!0):(Ue&&l.nodeType===cu.text&&(b=l.textContent,Du([lu,du,Le],F=>{b=ou(b,F," ")}),l.textContent!==b&&(iu(u.removed,{element:l.cloneNode()}),l.textContent=b)),de(U.afterSanitizeElements,l,null),!1)},Tr=function(l,b,A){if(mr&&(b==="id"||b==="name")&&(A in t||A in Xs))return!1;if(!(Dt&&!vt[b]&&Y(xe,b))){if(!(hr&&Y(wt,b))){if(!(Be.attributeCheck instanceof Function&&Be.attributeCheck(b,l))){if(!z[b]||vt[b]){if(!(Fr(l)&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,l)||R.tagNameCheck instanceof Function&&R.tagNameCheck(l))&&(R.attributeNameCheck instanceof RegExp&&Y(R.attributeNameCheck,b)||R.attributeNameCheck instanceof Function&&R.attributeNameCheck(b,l))||b==="is"&&R.allowCustomizedBuiltInElements&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,A)||R.tagNameCheck instanceof Function&&R.tagNameCheck(A))))return!1}else if(!It[b]){if(!Y(lr,ou(A,cr,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&l!=="script"&&ws(A,"data:")===0&&xr[l])){if(!(pr&&!Y(js,ou(A,cr,"")))){if(A)return!1}}}}}}}return!0},Fr=function(l){return l!=="annotation-xml"&&xt(l,Ys)},Ir=function(l){de(U.beforeSanitizeAttributes,l,null);const{attributes:b}=l;if(!b||Bt(l))return;const A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let F=b.length;for(;F--;){const q=b[F],{name:L,namespaceURI:V,value:fe}=q,He=$(L),Ut=fe;let H=L==="value"?Ut:vs(Ut);if(A.attrName=He,A.attrValue=H,A.keepAttr=!0,A.forceKeepAttr=void 0,de(U.uponSanitizeAttribute,l,A),H=A.attrValue,gr&&(He==="id"||He==="name")&&(ve(L,l),H=Gs+H),Iu&&Y(/((--!?|])>)|<\/(style|title|textarea)/i,H)){ve(L,l);continue}if(He==="attributename"&&xt(H,"href")){ve(L,l);continue}if(A.forceKeepAttr)continue;if(!A.keepAttr){ve(L,l);continue}if(!br&&Y(/\/>/i,H)){ve(L,l);continue}Ue&&Du([lu,du,Le],Mr=>{H=ou(H,Mr," ")});const Rr=$(l.nodeName);if(!Tr(Rr,He,H)){ve(L,l);continue}if(g&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!V)switch(p.getAttributeType(Rr,He)){case"TrustedHTML":{H=g.createHTML(H);break}case"TrustedScriptURL":{H=g.createScriptURL(H);break}}if(H!==Ut)try{V?l.setAttributeNS(V,L,H):l.setAttribute(L,H),Bt(l)?se(l):Xn(u.removed)}catch{ve(L,l)}}de(U.afterSanitizeAttributes,l,null)},Js=function x(l){let b=null;const A=vr(l);for(de(U.beforeSanitizeShadowDOM,l,null);b=A.nextNode();)de(U.uponSanitizeShadowNode,b,null),Sr(b),Ir(b),b.content instanceof i&&x(b.content);de(U.afterSanitizeShadowDOM,l,null)};return u.sanitize=function(x){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,A=null,F=null,q=null;if(Rt=!x,Rt&&(x="<!-->"),typeof x!="string"&&!Dr(x))if(typeof x.toString=="function"){if(x=x.toString(),typeof x!="string")throw su("dirty is not a string, aborting")}else throw su("toString is not a function");if(!u.isSupported)return x;if(St||Lt(l),u.removed=[],typeof x=="string"&&(hu=!1),hu){if(x.nodeName){const fe=$(x.nodeName);if(!P[fe]||fu[fe])throw su("root node is forbidden and cannot be sanitized in-place")}}else if(x instanceof s)b=wr("<!---->"),A=b.ownerDocument.importNode(x,!0),A.nodeType===cu.element&&A.nodeName==="BODY"||A.nodeName==="HTML"?b=A:b.appendChild(A);else{if(!Ne&&!Ue&&!we&&x.indexOf("<")===-1)return g&&Mu?g.createHTML(x):x;if(b=wr(x),!b)return Ne?null:Mu?E:""}b&&Tt&&se(b.firstChild);const L=vr(hu?x:b);for(;F=L.nextNode();)Sr(F),Ir(F),F.content instanceof i&&Js(F.content);if(hu)return x;if(Ne){if(Ru)for(q=Z.call(b.ownerDocument);b.firstChild;)q.appendChild(b.firstChild);else q=b;return(z.shadowroot||z.shadowrootmode)&&(q=ke.call(n,q,!0)),q}let V=we?b.outerHTML:b.innerHTML;return we&&P["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&Y(nr,b.ownerDocument.doctype.name)&&(V="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+V),Ue&&Du([lu,du,Le],fe=>{V=ou(V,fe," ")}),g&&Mu?g.createHTML(V):V},u.setConfig=function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Lt(x),St=!0},u.clearConfig=function(){ze=null,St=!1},u.isValidAttribute=function(x,l,b){ze||Lt({});const A=$(x),F=$(l);return Tr(A,F,b)},u.addHook=function(x,l){typeof l=="function"&&iu(U[x],l)},u.removeHook=function(x,l){if(l!==void 0){const b=ys(U[x],l);return b===-1?void 0:ks(U[x],b,1)[0]}return Xn(U[x])},u.removeHooks=function(x){U[x]=[]},u.removeAllHooks=function(){U=ir()},u}var zs=or();const Fu=class Fu extends Xe{constructor(){super(...arguments),this.open=!1,this.message="",this.titleText="Rio Insight",this.buttonLabel="Rio Insight",this.placeholder="Pergunte alguma coisa",this.accentColor="#008B9A",this.apiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar={height:0,top:0,visible:!1},this.conversationHistoryLoading=!1,this.refreshConversationsAfterResponse=!1,this.activeConversationTitle=null,this.conversationScrollbarRaf=null,this.rioClient=null,this.rioUnsubscribe=null,this.loadingTimer=null,this.currentConversationId=null,this.conversationCounter=0,this.conversationUserId=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.markdownRenderer=new K({html:!1,linkify:!0,breaks:!0}).use(xs),this.conversations=[]}generateConversationId(){this.conversationUserId||(this.conversationUserId=this.inferUserIdFromToken());const t=`default-${this.conversationUserId??"user"}-${this.randomId(8)}`;return console.info("[RioAssist][conversation] gerando conversationId",t),t}inferUserIdFromToken(){const u=this.rioToken.trim();if(!u||!u.includes("."))return null;const[,t]=u.split(".");try{const n=JSON.parse(atob(t.replace(/-/g,"+").replace(/_/g,"/"))),r=(n==null?void 0:n.userId)??(n==null?void 0:n.user_id)??(n==null?void 0:n.sub)??(n==null?void 0:n.id)??(n==null?void 0:n.email)??(n==null?void 0:n.username);if(r&&typeof r=="string")return r.replace(/[^a-zA-Z0-9_-]/g,"")}catch{return null}return null}randomId(u){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let r=0;r<u;r+=1)n+=t.charAt(Math.floor(Math.random()*t.length));return n}get suggestions(){return this.suggestionsSource?this.suggestionsSource.split("|").map(u=>u.trim()).filter(Boolean):[]}updated(u){super.updated(u),this.style.setProperty("--accent-color",this.accentColor),(u.has("isFullscreen")||u.has("showConversations")||u.has("conversations"))&&this.enqueueConversationScrollbarMeasure(),(u.has("messages")||u.has("isLoading")&&this.isLoading||u.has("open")&&this.open||u.has("isFullscreen")&&this.isFullscreen)&&this.scrollConversationToBottom()}firstUpdated(){this.enqueueConversationScrollbarMeasure()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.teardownRioClient(),this.clearLoadingGuard()}get filteredConversations(){const u=this.conversationSearch.trim().toLowerCase();return u?this.conversations.filter(t=>t.title.toLowerCase().includes(u)):this.conversations}get hasActiveConversation(){return this.messages.length>0}togglePanel(){if(this.isFullscreen){this.exitFullscreen(!1);return}this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.isFullscreen=!1,this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0,this.requestConversationHistory()}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){if(this.showConversations=!this.showConversations,!this.showConversations){this.conversationMenuId=null;return}this.requestConversationHistory()}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}handleConversationSelect(u){u&&(this.showConversations=!1,this.conversationMenuId=null,this.errorMessage="",this.currentConversationId=u,this.activeConversationTitle=this.lookupConversationTitle(u),console.info("[RioAssist][history] carregando conversa",u),this.requestConversationHistory(u))}handleConversationSearch(u){this.conversationSearch=u.target.value}handleConversationMenuToggle(u,t){if(u.stopPropagation(),this.conversationMenuId===t){this.conversationMenuId=null;return}const n=u.currentTarget,r=this.renderRoot.querySelector(".conversations-panel__surface");if(n&&r){const i=n.getBoundingClientRect(),s=r.getBoundingClientRect().bottom-i.bottom;this.conversationMenuPlacement=s<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=t}handleConversationsPanelPointer(u){const t=u.target;!t.closest(".conversation-menu")&&!t.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(u,t){this.conversationMenuId=null;const n=this.conversations.find(i=>i.id===t);if(!n)return;const r=`${u==="rename"?"Renomear":"Excluir"} "${n.title}"`;console.info(`[Mock] ${r}`)}handleCloseAction(){if(this.isFullscreen){this.exitFullscreen(!0);return}this.showConversations?this.closeConversationsPanel():this.closePanel()}enterFullscreen(){this.isFullscreen||(this.isFullscreen=!0,this.open=!1,this.showConversations=!1)}exitFullscreen(u){this.isFullscreen&&(this.isFullscreen=!1,this.conversationMenuId=null,this.showNewConversationShortcut=!1,u&&(this.open=!0))}handleCreateConversation(){this.hasActiveConversation&&(this.clearLoadingGuard(),this.isLoading=!1,this.messages=[],this.message="",this.errorMessage="",this.showConversations=!1,this.teardownRioClient(),this.currentConversationId=this.generateConversationId(),this.activeConversationTitle=null,this.showNewConversationShortcut=!1,this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0})))}handleConversationListScroll(u){const t=u.currentTarget;t&&this.updateConversationScrollbar(t)}handleConversationScrollbarPointerDown(u){const t=u.currentTarget,n=this.renderRoot.querySelector(".conversation-list--sidebar");if(!t||!n)return;const r=t.getBoundingClientRect(),i=r.height*(this.conversationScrollbar.height/100),o=Math.max(r.height-i,0),s=Math.max(n.scrollHeight-n.clientHeight,1),a=n.scrollTop/s*o,c=u.clientY-r.top,d=c>=a&&c<=a+i,f=d?a:Math.min(Math.max(c-i/2,0),o);d||(n.scrollTop=f/Math.max(o,1)*(n.scrollHeight-n.clientHeight),this.updateConversationScrollbar(n)),t.setPointerCapture(u.pointerId),this.conversationScrollbarDraggingId=u.pointerId,this.conversationScrollbarDragState={startY:u.clientY,startThumbTop:f,trackHeight:r.height,thumbHeight:i,list:n},u.preventDefault()}handleConversationScrollbarPointerMove(u){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==u.pointerId||!this.conversationScrollbarDragState)return;const{startY:t,startThumbTop:n,trackHeight:r,thumbHeight:i,list:o}=this.conversationScrollbarDragState,s=Math.max(r-i,0),a=u.clientY-t,c=Math.min(Math.max(n+a,0),s),d=o.scrollHeight-o.clientHeight;d>0&&(o.scrollTop=c/Math.max(s,1)*d,this.updateConversationScrollbar(o)),u.preventDefault()}handleConversationScrollbarPointerUp(u){if(this.conversationScrollbarDraggingId!==u.pointerId)return;const t=u.currentTarget;t==null||t.releasePointerCapture(u.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.updateConversationScrollbar()}))}updateConversationScrollbar(u){const t=u??this.renderRoot.querySelector(".conversation-list--sidebar");if(!t){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const{scrollHeight:n,clientHeight:r,scrollTop:i}=t;if(n<=r+1){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const o=r/n,s=Math.max(o*100,8),a=100-s,c=i/(n-r)*(a>0?a:0);this.conversationScrollbar={height:s,top:c,visible:!0}}async onSuggestionClick(u){await this.processMessage(u)}async handleSubmit(u){u.preventDefault(),await this.processMessage(this.message)}createMessage(u,t){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:u,text:t,html:this.renderMarkdown(t),timestamp:Date.now()}}async processMessage(u){const t=u.trim();if(!t||this.isLoading)return;this.currentConversationId||(this.currentConversationId=this.generateConversationId(),this.activeConversationTitle=null);const n=this.messages.length===0;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:t,apiBaseUrl:this.apiBaseUrl,token:this.rioToken},bubbles:!0,composed:!0}));const r=this.createMessage("user",t);this.messages=[...this.messages,r],n&&(this.showNewConversationShortcut=!0,this.refreshConversationsAfterResponse=!0),this.message="",this.errorMessage="",this.isLoading=!0,this.startLoadingGuard();try{await this.ensureRioClient().sendMessage(t,this.currentConversationId)}catch(i){this.clearLoadingGuard(),this.isLoading=!1,this.errorMessage=i instanceof Error?i.message:"Nao foi possivel enviar a mensagem para o agente."}}ensureRioClient(){const u=this.rioToken.trim();if(!u)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");return(!this.rioClient||!this.rioClient.matchesToken(u))&&(this.teardownRioClient(),this.rioClient=new Ti(u),this.rioUnsubscribe=this.rioClient.onMessage(t=>{this.handleIncomingMessage(t)})),this.rioClient}handleIncomingMessage(u){if(this.isHistoryPayload(u)){this.logHistoryPayload(u),this.handleHistoryPayload(u.data);return}console.info("[RioAssist][ws] resposta de mensagem recebida",{action:u.action??"message",text:u.text,raw:u.raw,data:u.data});const t=this.createMessage("assistant",u.text);this.messages=[...this.messages,t],this.clearLoadingGuard(),this.isLoading=!1,this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1,this.requestConversationHistory())}teardownRioClient(){this.rioUnsubscribe&&(this.rioUnsubscribe(),this.rioUnsubscribe=null),this.rioClient&&(this.rioClient.close(),this.rioClient=null)}async requestConversationHistory(u){try{const t=this.ensureRioClient(),n=50;console.info("[RioAssist][history] solicitando historico de conversas",{conversationId:u??null,limit:n}),this.conversationHistoryLoading=!0,await t.requestHistory({conversationId:u,limit:n})}catch(t){console.error("[RioAssist][history] erro ao solicitar historico",t),this.conversationHistoryLoading=!1}}handleHistoryPayload(u){const t=this.extractHistoryEntries(u),n=this.extractConversationId(u);if(n!=null){this.applyMessageHistory(t,n);return}if(this.isMessageHistoryEntries(t)){this.applyMessageHistory(t);return}this.applyConversationHistoryFromEntries(t),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1)}isHistoryPayload(u){if(typeof u.action=="string"&&u.action.toLowerCase().includes("history"))return!0;const t=u.data;if(t&&typeof t=="object"){const n=t.action;if(typeof n=="string"&&n.toLowerCase().includes("history")||Array.isArray(t.history)||Array.isArray(t.conversations))return!0}return!1}logHistoryPayload(u){const t="[RioAssist][history] payload recebido do websocket";if(u.data!==null&&u.data!==void 0){console.info(t,u.data);return}console.info(t,u.raw)}applyConversationHistoryFromEntries(u){if(u.length===0){console.info("[RioAssist][history] payload sem itens para montar lista de conversas"),this.conversations=[],this.conversationHistoryLoading=!1;return}const t=new Map;u.forEach((r,i)=>{if(!r||typeof r!="object")return;const o=this.normalizeConversationItem(r,i);if(!o)return;const s=t.get(o.id);if(!s){t.set(o.id,o);return}const a=Date.parse(s.updatedAt),c=Date.parse(o.updatedAt);Number.isFinite(c)&&c>a&&t.set(o.id,o)});const n=Array.from(t.values()).sort((r,i)=>{const o=Date.parse(i.updatedAt)-Date.parse(r.updatedAt);return Number.isFinite(o)?o:0});this.conversations=n,this.conversationHistoryLoading=!1,this.syncActiveConversationTitle(),console.info("[RioAssist][history] conversas normalizadas",n)}applyMessageHistory(u,t){if(u.length===0){console.info("[RioAssist][history] lista de mensagens vazia",{conversationId:t}),this.messages=[],this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.conversationHistoryLoading=!1;return}const n=u.flatMap((r,i)=>this.normalizeHistoryMessages(r,i));t&&(this.currentConversationId=t),this.messages=n,this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.showNewConversationShortcut=n.length>0,this.conversationHistoryLoading=!1,this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][history] mensagens carregadas",{conversationId:t??null,total:n.length})}extractHistoryEntries(u){if(Array.isArray(u))return u;if(u&&typeof u=="object"){const t=u,n=[t.history,t.conversations,t.data,t.items,t.messages];for(const r of n)if(Array.isArray(r))return r;if(t.data&&typeof t.data=="object"&&!Array.isArray(t.data)){const r=this.extractHistoryEntries(t.data);if(r.length>0)return r}}return[]}extractConversationId(u){if(u&&typeof u=="object"){const t=u,n=[t.conversationId,t.conversationUUID,t.conversationUuid,t.uuid,t.id];for(const r of n){if(r===null)return null;if(r!==void 0)return String(r)}}}isMessageHistoryEntries(u){return u.some(t=>this.looksLikeMessageHistoryEntry(t))}looksLikeMessageHistoryEntry(u){if(!u||typeof u!="object")return!1;const t=u,n=t.role??t.sender??t.from??t.author??t.type;return!!(typeof n=="string"&&n.trim().length>0||typeof t.content=="string"||typeof t.message=="string"||typeof t.text=="string"||typeof t.response=="string"||Array.isArray(t.parts)&&t.parts.length>0)}normalizeConversationItem(u,t){const n=u.id??u.conversationId??u.conversationUUID??u.conversationUuid??u.uuid,r=n!=null?String(n):`history-${t+1}`,i=u.title??u.name??u.topic??u.subject??u.question??u.query??u.message,o=typeof i=="string"&&i.trim().length>0?i.trim():`Conversa ${t+1}`,s=u.updatedAt??u.updated_at??u.lastMessageAt??u.last_message_at??u.createdAt??u.created_at??u.timestamp??u.date,a=this.toIsoString(s);return{id:r,title:o,updatedAt:a}}normalizeHistoryMessages(u,t){const n=[],r=u.message??u.question??u.query??u.text??u.content,i=typeof r=="string"?r.trim():"",o=u.response??u.answer??u.reply??u.completion??u.body??u.preview,s=typeof o=="string"?o.trim():"",a=u.id??u.messageId??u.uuid??u.conversationMessageId,c=a!=null?String(a):`history-${t+1}`,d=u.timestamp??u.createdAt??u.created_at??u.date??u.time,f=u.responseTimestamp??u.responseTime??u.responseDate??u.response_at??u.updatedAt??u.updated_at,m=this.parseTimestamp(d),p=this.parseTimestamp(f,m+1);if(s)i&&n.push({id:`${c}-user`,role:"user",text:i,html:this.renderMarkdown(i),timestamp:m}),n.push({id:`${c}-assistant`,role:"assistant",text:s,html:this.renderMarkdown(s),timestamp:p});else if(i)return[];if(n.length>0)return n;const h=this.normalizeSingleHistoryMessage(u,t);return h?[h]:[]}normalizeSingleHistoryMessage(u,t){const n=u.text??u.message??u.content??u.response??u.body??u.preview,r=typeof n=="string"&&n.trim().length>0?n:"";if(!r)return null;const i=this.normalizeRole(u.role??u.sender??u.from??u.author??u.type??u.direction),o=u.id??u.messageId??u.uuid??u.conversationMessageId,s=o!=null?String(o):`history-message-${t+1}`,a=u.timestamp??u.createdAt??u.created_at??u.updatedAt??u.updated_at??u.date??u.time,c=this.parseTimestamp(a);return{id:s,role:i,text:r,html:this.renderMarkdown(r),timestamp:c}}normalizeRole(u){if(typeof u=="string"){const t=u.toLowerCase();if(t.includes("user")||t.includes("client"))return"user";if(t.includes("assistant")||t.includes("agent")||t.includes("bot"))return"assistant"}return"assistant"}parseTimestamp(u,t){const n=Date.parse(this.toIsoString(u));return Number.isFinite(n)?n:Number.isFinite(t??NaN)?t:Date.now()}lookupConversationTitle(u){if(!u)return null;const t=this.conversations.find(n=>n.id===u);return t?t.title:null}syncActiveConversationTitle(){if(!this.currentConversationId)return;const u=this.lookupConversationTitle(this.currentConversationId);u&&(this.activeConversationTitle=u)}toIsoString(u){if(typeof u=="string"||typeof u=="number"){const t=new Date(u);if(!Number.isNaN(t.getTime()))return t.toISOString()}return new Date().toISOString()}startLoadingGuard(){this.clearLoadingGuard(),this.loadingTimer=window.setTimeout(()=>{this.loadingTimer=null,this.isLoading=!1},15e3)}clearLoadingGuard(){this.loadingTimer!==null&&(window.clearTimeout(this.loadingTimer),this.loadingTimer=null)}scrollConversationToBottom(){Array.from(this.renderRoot.querySelectorAll(".panel-content")).forEach(t=>{requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight})})}renderMarkdown(u){const t=this.markdownRenderer.render(u),n=zs.sanitize(t,{ALLOWED_TAGS:["a","p","ul","ol","li","code","pre","strong","em","blockquote","table","thead","tbody","tr","th","td","del","hr","br","img","span","input"],ALLOWED_ATTR:["href","title","target","rel","src","alt","class","type","checked","disabled","aria-label"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["style","script"],USE_PROFILES:{html:!0}}),r=document.createElement("div");return r.innerHTML=n,r.querySelectorAll("a").forEach(i=>{i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer")}),r.querySelectorAll('input[type="checkbox"]').forEach(i=>{i.setAttribute("disabled",""),i.setAttribute("tabindex","-1")}),r.innerHTML}render(){return vi(this)}};Fu.styles=ni,Fu.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0},conversations:{state:!0},conversationHistoryLoading:{type:Boolean,state:!0},activeConversationTitle:{state:!0}};let kt=Fu;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",kt);const Hs={title:"Rio Insight",buttonLabel:"Rio Insight",placeholder:"Pergunte alguma coisa",suggestions:["Veículos com problemas","Valor das peças","Planos de manutenção"],accentColor:"#008B9A",apiBaseUrl:"",rioToken:""},sr="rio-assist-widget";function qs(e={}){const{target:u=document.body,...t}=e;let n=document.querySelector(sr);n||(n=document.createElement(sr),u.appendChild(n));const r={...Hs,...t};Object.entries(r).forEach(([i,o])=>{o!==void 0&&(n==null||n.setAttribute(`data-${i.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}`,Array.isArray(o)?o.join("|"):String(o)))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:qs},window.dispatchEvent(new Event("rio-assist-ready")))})();
