(function(){"use strict";var dr;var x=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis,Nt=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),Ou=new WeakMap;let Nu=class{constructor(t,u,n){if(this._$cssResult$=!0,n!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=u}get styleSheet(){let t=this.o;const u=this.t;if(Nt&&t===void 0){const n=u!==void 0&&u.length===1;n&&(t=Ou.get(u)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ou.set(u,t))}return t}toString(){return this.cssText}};const Or=e=>new Nu(typeof e=="string"?e:e+"",void 0,Pt),qe=(e,...t)=>{const u=e.length===1?e[0]:t.reduce((n,r,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new Nu(u,e,Pt)},Nr=(e,t)=>{if(Nt)e.adoptedStyleSheets=t.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet);else for(const u of t){const n=document.createElement("style"),r=bt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=u.cssText,e.appendChild(n)}},Pu=Nt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let u="";for(const n of t.cssRules)u+=n.cssText;return Or(u)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pr,defineProperty:$r,getOwnPropertyDescriptor:zr,getOwnPropertyNames:Hr,getOwnPropertySymbols:qr,getPrototypeOf:jr}=Object,he=globalThis,$u=he.trustedTypes,Yr=$u?$u.emptyScript:"",$t=he.reactiveElementPolyfillSupport,je=(e,t)=>e,zt={toAttribute(e,t){switch(t){case Boolean:e=e?Yr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let u=e;switch(t){case Boolean:u=e!==null;break;case Number:u=e===null?null:Number(e);break;case Object:case Array:try{u=JSON.parse(e)}catch{u=null}}return u}},zu=(e,t)=>!Pr(e,t),Hu={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:zu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);let De=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,u=Hu){if(u.state&&(u.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((u=Object.create(u)).wrapped=!0),this.elementProperties.set(t,u),!u.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,u);r!==void 0&&$r(this.prototype,t,r)}}static getPropertyDescriptor(t,u,n){const{get:r,set:i}=zr(this.prototype,t)??{get(){return this[u]},set(o){this[u]=o}};return{get:r,set(o){const s=r==null?void 0:r.call(this);i==null||i.call(this,o),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Hu}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=jr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const u=this.properties,n=[...Hr(u),...qr(u)];for(const r of n)this.createProperty(r,u[r])}const t=this[Symbol.metadata];if(t!==null){const u=litPropertyMetadata.get(t);if(u!==void 0)for(const[n,r]of u)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[u,n]of this.elementProperties){const r=this._$Eu(u,n);r!==void 0&&this._$Eh.set(r,u)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const u=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const r of n)u.unshift(Pu(r))}else t!==void 0&&u.push(Pu(t));return u}static _$Eu(t,u){const n=u.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(u=>this.enableUpdating=u),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(u=>u(this))}addController(t){var u;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((u=t.hostConnected)==null||u.call(t))}removeController(t){var u;(u=this._$EO)==null||u.delete(t)}_$E_(){const t=new Map,u=this.constructor.elementProperties;for(const n of u.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(u=>{var n;return(n=u.hostConnected)==null?void 0:n.call(u)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(u=>{var n;return(n=u.hostDisconnected)==null?void 0:n.call(u)})}attributeChangedCallback(t,u,n){this._$AK(t,n)}_$ET(t,u){var i;const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:zt).toAttribute(u,n.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,u){var i,o;const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:zt;this._$Em=r;const c=a.fromAttribute(u,s.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(t,u,n){var r;if(t!==void 0){const i=this.constructor,o=this[t];if(n??(n=i.getPropertyOptions(t)),!((n.hasChanged??zu)(o,u)||n.useDefault&&n.reflect&&o===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,u,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,u,{useDefault:n,reflect:r,wrapped:i},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??u??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(u=void 0),this._$AL.set(t,u)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(u){Promise.reject(u)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const u=this._$AL;try{t=this.shouldUpdate(u),t?(this.willUpdate(u),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(u)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(u)}willUpdate(t){}_$AE(t){var u;(u=this._$EO)==null||u.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(u=>this._$ET(u,this[u]))),this._$EM()}updated(t){}firstUpdated(t){}};De.elementStyles=[],De.shadowRootOptions={mode:"open"},De[je("elementProperties")]=new Map,De[je("finalized")]=new Map,$t==null||$t({ReactiveElement:De}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,gt=Ye.trustedTypes,qu=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ju="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Yu="?"+pe,Vr=`<${Yu}>`,_e=document,Ve=()=>_e.createComment(""),Qe=e=>e===null||typeof e!="object"&&typeof e!="function",Ht=Array.isArray,Qr=e=>Ht(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qt=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vu=/-->/g,Qu=/>/g,Ce=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gu=/'/g,Wu=/"/g,Zu=/^(?:script|style|textarea|title)$/i,Gr=e=>(t,...u)=>({_$litType$:e,strings:t,values:u}),w=Gr(1),ae=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Xu=new WeakMap,ye=_e.createTreeWalker(_e,129);function Ku(e,t){if(!Ht(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qu!==void 0?qu.createHTML(t):t}const Wr=(e,t)=>{const u=e.length-1,n=[];let r,i=t===2?"<svg>":t===3?"<math>":"",o=Ge;for(let s=0;s<u;s++){const a=e[s];let c,d,f=-1,g=0;for(;g<a.length&&(o.lastIndex=g,d=o.exec(a),d!==null);)g=o.lastIndex,o===Ge?d[1]==="!--"?o=Vu:d[1]!==void 0?o=Qu:d[2]!==void 0?(Zu.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=Ce):d[3]!==void 0&&(o=Ce):o===Ce?d[0]===">"?(o=r??Ge,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Ce:d[3]==='"'?Wu:Gu):o===Wu||o===Gu?o=Ce:o===Vu||o===Qu?o=Ge:(o=Ce,r=void 0);const p=o===Ce&&e[s+1].startsWith("/>")?" ":"";i+=o===Ge?a+Vr:f>=0?(n.push(c),a.slice(0,f)+ju+a.slice(f)+pe+p):a+pe+(f===-2?s:p)}return[Ku(e,i+(e[u]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class We{constructor({strings:t,_$litType$:u},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[c,d]=Wr(t,u);if(this.el=We.createElement(c,n),ye.currentNode=this.el.content,u===2||u===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=ye.nextNode())!==null&&a.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(const f of r.getAttributeNames())if(f.endsWith(ju)){const g=d[o++],p=r.getAttribute(f).split(pe),h=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:h[2],strings:p,ctor:h[1]==="."?Xr:h[1]==="?"?Kr:h[1]==="@"?Jr:mt}),r.removeAttribute(f)}else f.startsWith(pe)&&(a.push({type:6,index:i}),r.removeAttribute(f));if(Zu.test(r.tagName)){const f=r.textContent.split(pe),g=f.length-1;if(g>0){r.textContent=gt?gt.emptyScript:"";for(let p=0;p<g;p++)r.append(f[p],Ve()),ye.nextNode(),a.push({type:2,index:++i});r.append(f[g],Ve())}}}else if(r.nodeType===8)if(r.data===Yu)a.push({type:2,index:i});else{let f=-1;for(;(f=r.data.indexOf(pe,f+1))!==-1;)a.push({type:7,index:i}),f+=pe.length-1}i++}}static createElement(t,u){const n=_e.createElement("template");return n.innerHTML=t,n}}function Se(e,t,u=e,n){var o,s;if(t===ae)return t;let r=n!==void 0?(o=u._$Co)==null?void 0:o[n]:u._$Cl;const i=Qe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,u,n)),n!==void 0?(u._$Co??(u._$Co=[]))[n]=r:u._$Cl=r),r!==void 0&&(t=Se(e,r._$AS(e,t.values),r,n)),t}class Zr{constructor(t,u){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:u},parts:n}=this._$AD,r=((t==null?void 0:t.creationScope)??_e).importNode(u,!0);ye.currentNode=r;let i=ye.nextNode(),o=0,s=0,a=n[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new Ze(i,i.nextSibling,this,t):a.type===1?c=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(c=new ei(i,this,t)),this._$AV.push(c),a=n[++s]}o!==(a==null?void 0:a.index)&&(i=ye.nextNode(),o++)}return ye.currentNode=_e,r}p(t){let u=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,u),u+=n.strings.length-2):n._$AI(t[u])),u++}}class Ze{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,u,n,r){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=u,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const u=this._$AM;return u!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=u.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,u=this){t=Se(this,t,u),Qe(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==ae&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&Qe(this._$AH)?this._$AA.nextSibling.data=t:this.T(_e.createTextNode(t)),this._$AH=t}$(t){var i;const{values:u,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=We.createElement(Ku(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(u);else{const o=new Zr(r,this),s=o.u(this.options);o.p(u),this.T(s),this._$AH=o}}_$AC(t){let u=Xu.get(t.strings);return u===void 0&&Xu.set(t.strings,u=new We(t)),u}k(t){Ht(this._$AH)||(this._$AH=[],this._$AR());const u=this._$AH;let n,r=0;for(const i of t)r===u.length?u.push(n=new Ze(this.O(Ve()),this.O(Ve()),this,this.options)):n=u[r],n._$AI(i),r++;r<u.length&&(this._$AR(n&&n._$AB.nextSibling,r),u.length=r)}_$AR(t=this._$AA.nextSibling,u){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,u);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var u;this._$AM===void 0&&(this._$Cv=t,(u=this._$AP)==null||u.call(this,t))}}class mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,u,n,r,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=u,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(t,u=this,n,r){const i=this.strings;let o=!1;if(i===void 0)t=Se(this,t,u,0),o=!Qe(t)||t!==this._$AH&&t!==ae,o&&(this._$AH=t);else{const s=t;let a,c;for(t=i[0],a=0;a<i.length-1;a++)c=Se(this,s[n+a],u,a),c===ae&&(c=this._$AH[a]),o||(o=!Qe(c)||c!==this._$AH[a]),c===B?t=B:t!==B&&(t+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!r&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xr extends mt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class Kr extends mt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class Jr extends mt{constructor(t,u,n,r,i){super(t,u,n,r,i),this.type=5}_$AI(t,u=this){if((t=Se(this,t,u,0)??B)===ae)return;const n=this._$AH,r=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==B&&(n===B||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var u;typeof this._$AH=="function"?this._$AH.call(((u=this.options)==null?void 0:u.host)??this.element,t):this._$AH.handleEvent(t)}}class ei{constructor(t,u,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=u,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Se(this,t)}}const jt=Ye.litHtmlPolyfillSupport;jt==null||jt(We,Ze),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.3.1");const ti=(e,t,u)=>{const n=(u==null?void 0:u.renderBefore)??t;let r=n._$litPart$;if(r===void 0){const i=(u==null?void 0:u.renderBefore)??null;n._$litPart$=r=new Ze(t.insertBefore(Ve(),i),i,void 0,u??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis;let Xe=class extends De{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var u;const t=super.createRenderRoot();return(u=this.renderOptions).renderBefore??(u.renderBefore=t.firstChild),t}update(t){const u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ti(u,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ae}};Xe._$litElement$=!0,Xe.finalized=!0,(dr=ve.litElementHydrateSupport)==null||dr.call(ve,{LitElement:Xe});const Yt=ve.litElementPolyfillSupport;Yt==null||Yt({LitElement:Xe}),(ve.litElementVersions??(ve.litElementVersions=[])).push("4.2.1");const ui=qe`
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
    cursor: grab;
    user-select: none;
    touch-action: none;
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

  .floating-button:active {
    cursor: grabbing;
  }

  .canvas--fullscreen .floating-button {
    opacity: 0;
    pointer-events: none;
  }
`,ni=qe`
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

  form {
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #a4afbb;
    border-radius: 80px;
    padding: 8px 12px 8px 16px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    height: 56px;
    box-sizing: border-box;
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
`,ri=qe`
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
    max-width: 1400px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-body {
    max-width: 920px;
    width: 100%;
    padding: 12px clamp(20px, 3vw, 44px) 12px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .fullscreen-chat .panel-footer {
    max-width: 640px;
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
`,ii=qe`
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
`,oi=[qe`
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
`,ui,ni,ri,ii];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={ATTRIBUTE:1,CHILD:2},Qt=e=>(...t)=>({_$litDirective$:e,values:t});let Gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,u,n){this._$Ct=t,this._$AM=u,this._$Ci=n}_$AS(t,u){return this.update(t,u)}update(t,u){return this.render(...u)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=Qt(class extends Gt{constructor(e){var t;if(super(e),e.type!==Vt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const u=e.element.classList;for(const i of this.st)i in t||(u.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(o?(u.add(i),this.st.add(i)):(u.remove(i),this.st.delete(i)))}return ae}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ju="important",si=" !"+Ju,en=Qt(class extends Gt{constructor(e){var t;if(super(e),e.type!==Vt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,u)=>{const n=e[u];return n==null?t:t+`${u=u.includes("-")?u:u.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:u}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?u.removeProperty(n):u[n]=null);for(const n in t){const r=t[n];if(r!=null){this.ft.add(n);const i=typeof r=="string"&&r.endsWith(si);n.includes("-")||i?u.setProperty(n,i?r.slice(0,-11):r,i?Ju:""):u[n]=r}}return ae}}),ai=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgB7Ze/T8JAFMcfxMVFq5OaGBsTJxccXEn/AAdGNvE/8C9QjP+AOybippuDDrpQdCT+ijpIRJowwICCMZFBk/O99iANob+urS73SV5ee717/XL37l0BkEgkklhJQAQwxhR0isPjbiKR6IIggQSiEA1dBm0BLcVFKT6HG9xIbBntBIUbEBUobptFSwctA1GAgTZZPJBIFcKCQeosPg7c3j3mQ5yG7gPtkDcZDl37+aiClaMq+EOD/4B+mN+Zd4vjuYuZVUIomVWwZmjSoSvNMu1QA02nHcqs/CqBx2xiX7FyRy9gYvlHyb/OY2henUEUFm5zkEiFxym5dXTTkHQRp8HQ0jROK/BcOB/cv93UzPtW+XFUCBKX49f3IEgySOfGWQWq+xeDexL3enwFd7tHTkP6p4zwURdIoJ1es2PO4Ex6Gb4/e+Z1HAgLbF+/mH5+bdX0Lf0B4kBYYD/vqgVryVuXTyCI6/KLz+BtDcZnp9CmYWJpDr6a76YJ4LqBhAS2Md9+MO8Ws2lY2cqannDYzV4UQQRmFemwZHisPYfneQiDV4H1oG6LU7e1UwHXmVVnw4FBFLQiCw4JUHmMnK09B3HAhY5apjwXkGHWmZtitg9Q3tYJI9Dze5CgPz0YfLgcbGB70WkMX8IShES0zLiKI/C5jm4H/gpbLuUCjsvHnoNh4SIpF1MgkUgkkkD8AgAi3WKqFnrYAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,ci=e=>w`
  <button
    class="floating-button"
    style=${en({background:e.accentColor,bottom:`${e.floatingButtonOffset}px`})}
    @click=${t=>e.handleFloatingButtonClick(t)}
    @pointerdown=${t=>e.handleFloatingButtonPointerDown(t)}
    @pointermove=${t=>e.handleFloatingButtonPointerMove(t)}
    @pointerup=${t=>e.handleFloatingButtonPointerUp(t)}
    @pointercancel=${t=>e.handleFloatingButtonPointerCancel(t)}
    aria-expanded=${e.open}
  >
    <img src=${ai} alt="" aria-hidden="true" />
    <span>${e.buttonLabel}</span>
  </button>
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt extends Gt{constructor(t){if(super(t),this.it=B,t.type!==Vt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||t==null)return this._t=void 0,this.it=t;if(t===ae)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const u=[t];return u.raw=u,this._t={_$litType$:this.constructor.resultType,strings:u,values:[]}}}Wt.directiveName="unsafeHTML",Wt.resultType=1;const li=Qt(Wt),di=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB5ZQxCsJAEEX/rsbaI3gEvYE22ppO7DyCJ1BvoCdIFSNBGFOIaBBzg1whR0gpqLsuSWHnBBKI4G+mefyB+Z8B6pBD1C7KCg7wgusCSi0Bndxh9Wb2IP3GS84wN8t2d1rqMeZw3hCIMjuIVEorQhXyKOw7dCt8x98Wm7JPl+4TYiGho4k93HA8G8oLILN1rCHW2/25fMom3U8YDbCSPKAH0CrQwHxqjw74D7n+sevRqVOEZW+4o5Ck1Yo1mrFrKlTa0ISRVcVUpw2F8oZGq3yIpLLnUOtjeAMX/z7Yit+o3QAAAABJRU5ErkJggg==",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,fi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBvZPdCcIwFIVPqvjcETpCnUDzrA86ghOIG+gGbqIv4mPjBhmhI/goFhNv2qpNQfIjeCCQhHu++0MC/CgWEpwfihQjLHCHkEteBgHyc5FBsQIaGR2vqPTYQBJfAG5k0rQapRhgajZOgMmcny5rymaycrqStEo8IJwtWGUztpWzya6eA1XgnEGv51Z6I+d8341L/M1UdoVjP5b5mzV/lf0VEGq2ADHmNyDWbNQMUdGjiDB/ALa8zUbDFiOg9Kredz7KX/QESDR2d7Kg6IcAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,hi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBpZLfDYIwEMavqImPjOAIdQP6bIw6AhM4giMYR3ACEhOegQ3qBh2hvplIOItG6NXKn/glbY6745e7DwD+FPMl+SXbwgRCkqxAybXI3d6pDwAB2wNCRJNYmCvyTsCTLIQZS+whzAmdXm2ObJ4eGMudUO8J5qa5RHudK/jFHCD1gKfFARAX0CeGJ7kSr2moB1gtTXXTC6jg/AkDp6RbGApz519xrRKUH4BtoUu1eX5AMAig6SvjpboAEvqEePsNCKzxmPUz0ZisQD/j3RRnDeHYFqzYMZoAjLuap1kMXWID1hyjJ+SZQp3ORCa/AAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,pi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgBxZNNTsMwEIVnnBAqVuEG6Q16A8INeoOSFXRFkEpFVqRCaquqi7CA0hXhBNATUE4ANyBHyA4aKg+OU0QgxgKExNvkx8+fx89jgD8S6gb98NK2rKcdALZFCLacwOkuYxBHQTv5FqhzMnGZCdfCYqvGOWA4DnZ7b99MZTocnTWYibcFhHoMqD4K9jBbrG8SkCcsifgXdvrnvrai7uDiUTwcYd4eBu355/GjwcThAPdEAC9ZrR6FXlqpqNufNnOIWCFWQXIN83w4nCKiba09+8qtEZJblEpXoFG2UYukH6ChBCFREe4CEh0oOvBS6V+dZjVsKgDcooYO5Iucyt8VEGcwlzxk+6CRCawlfQSxEjSWAeODCNvtDKbHKojsMXH84jUxVgtXjj+fvDJJiTBjvsQZY8uEc9NBgzcZYquo4r09UAcRmPSLzs4b0iu3B2ogvVHQDkXzuZyDK5wOEaYGoxtVf6EOAj+QDBuN5azYxu8gH5Rf1PIl/De9AhTgnL0rAocOAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,bi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,gi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB7dQxDsIgFMbxP9iLdDPOJq4cxSt4BE/iUWQ1OqsjvUFP0NeOtGV6DW3S8EsI4QvkDTyAYmtmGpwuTtAL35ev48CSWfYC1TToDDVFJNVFD5Sko/29/S3OqsS+K0rGEoZpVGD9LkK4oySGlt2ZddHx7BwL/D/ex+vZHdgDT/TCMNb97FLvoEFJRH+2yKcHytAb6RI8xigAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,tn=(e,t={})=>{const u=t.variant??"drawer",n=u==="sidebar",r=n||e.showConversations;return w`
    <div
      class=${Q({"conversations-panel":!0,"conversations-panel--open":r,"conversations-panel--sidebar":n})}
      aria-hidden=${!r}
      @pointerdown=${i=>e.handleConversationsPanelPointer(i)}
    >
      <div
        class=${Q({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":n})}
      >
        ${mi(e,u)}
      </div>
    </div>
  `},mi=(e,t)=>{const u=t==="sidebar",n=u?w`
        <div
          class=${Q({"new-conversation-cta":!0,open:e.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!e.hasActiveConversation}
            aria-disabled=${!e.hasActiveConversation}
            @click=${()=>e.handleCreateConversation()}
          >
            <img src=${bi} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,r=w`
    <div
      class=${Q({"conversation-list":!0,"conversation-list--sidebar":u})}
      @scroll=${u?i=>e.handleConversationListScroll(i):null}
    >
      ${e.filteredConversations.map(i=>{const o=e.conversationMenuId===i.id;return w`
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
                <img src=${di} alt="" aria-hidden="true" />
              </button>
              ${o?w`
                    <div
                      class=${Q({"conversation-menu":!0,"conversation-menu--above":e.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("rename",i.id)}
                      >
                        <img src=${fi} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("delete",i.id)}
                      >
                        <img src=${hi} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return w`
    ${n}

    ${u?w`
          <button class="recent-conversations-button" type="button" aria-label="Conversas recentes">
            <img src=${gi} alt="" aria-hidden="true" />
            <span>Conversas recentes</span>
          </button>
        `:null}

    <div class="conversation-search">
      <img class="search-icon" src=${pi} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${e.conversationSearch}
        @input=${i=>e.handleConversationSearch(i)}
      />
    </div>

    <div
      class=${Q({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":u})}
    >
      ${e.conversationHistoryLoading?w`<div class="conversation-loading">Carregando conversas...</div>`:null}
      ${e.conversationHistoryError?w`<div class="conversation-error">${e.conversationHistoryError}</div>`:null}
      ${r}
      ${u?w`
            <div
              class=${Q({"conversation-scrollbar":!0,"conversation-scrollbar--visible":e.conversationScrollbar.visible})}
              @pointerdown=${i=>e.handleConversationScrollbarPointerDown(i)}
              @pointermove=${i=>e.handleConversationScrollbarPointerMove(i)}
              @pointerup=${i=>e.handleConversationScrollbarPointerUp(i)}
              @pointercancel=${i=>e.handleConversationScrollbarPointerUp(i)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${en({height:`${e.conversationScrollbar.height}%`,top:`${e.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},Ai=e=>{const{consultantAgentVisible:t,consultantAgentIntro:u,consultantAgentOptions:n}=e;return w`
    <div class="consultant-agent">
      <button
        class="consultant-agent__button"
        type="button"
        @click=${()=>e.handleConsultantAgentOpen()}
      >
        Fale com um consultor
      </button>

      ${t?w`
            <div class="consultant-agent__intro">${u}</div>
            <div class="consultant-agent__options">
              ${n.map(r=>w`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantAgentOption(r)}
                  >
                    ${r.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},xi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dSxDYAgEAXQf8ZF3MAN1F53cAVHcBKH0F5HYATcwN7ipEShOoMkhpdAwg/kCg6AJDZ6BuWyMeS0auvCDjIEFrxA7iQnF0gsvi6aIEaHaqvBTnLPrh5irM10KxChi5hHSBEO/I7bRfNa4wXVNZu9du+AaIWcNuPbz87zDniHFEN+NgnmAsF0G91pmpecAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,_i=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB5ZbBDYIwFIZfjd4dwRHqCD0aY4ybuIE6gpPghXhEJ7AbyAgMYKyPApZAkUIfMdH/QHr4838p7722AL8uBp7iYcThCdOPpgdIuRFJuhwDhRgL8NsMHSuB30u6HIGn5FJIYDowcfF7A7tCSYB51BqgpZZUQB5ed6DU3sXrDewC8wY2wpQ6YE3nYKlpbyA/RzMM3tpgciX2TY3UGygXIq4F5rC3p4COjIfmpFEsQtixDBtUPIhax+FroU411N04YXf9+zzFTGgWpgtdhZnWT9ImqHq6yOwwvWKw+OVdWOYs8wQ4Ej1VvZ4KqNBno32oj3i3xUAELKA3TAYL7ODb+u6DTwBzBxLBXIEJuk5AJBdgrXuHBpJCTZfiUy5/XTXL+6j/B70AdWmQ/S7ON+YAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Ci=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAavSURBVHgB7Z1PTxtHFMDf2Cb9o6ZBoSq0ShRQK1XKpRs1Uo/Yx4pAk0+QcOg5ILVn4F4Jeu4h9BOQEqMevdx6SIWRKlVUquRWUQRVqJyStqiAJ+/N7prFWYu1PbP71p6fZO1igzHz23kz82ZmEU7ZlWBhQw4srLBCmGGFMKPQ+kT1VlGAJTFa23BbQ5hhhTDDCmGGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIMwqQEZy1yrg6KYB3lDAMeXzEoQG15nkO6vA/PgDq1TulOjAjdSGqoPPgqMJtYGELcQ0Enks6949R0KxN3NUA4Rke+pkh/3eXXXqths8pQfjAc/k7PlfH56okrzpVqkKCpCLE2ajcAynu0ik+vKucCiooONlyNEmrcOF/CF+4kgbgQkN+ByfgYq2qgUESFeKsV25DXiy3ver5UoScKFKNcTY2V6pTk0tgiMQadae8uYx/1FoGZYTBECoXsdZsNds0zSQixNlwH2D9n4P+wYEhUTEhxbgQrOILWCvuQf8xjlLWQDNGhWDj7VAVh/7FcR5VFkEjhmuI/iuIHULcx9AVbzwUA2NC8MopZrwBj8sw9lW1tY/maojoy3YjGqHGVFowGLLExzA4jOvqcZkcGNIovO6nImqYFqmrlAT4R+/cI5xrOo9cKJcl1SjfOwr/eaEuBG0xPTZ59ffWoEeMCFGNnJSl6nTJhRRwfsCrtYGjaxALCbZjWi4CI0L8LKoLKVH9TOWbVumh8mbJiumJvp8PwWztanWqOIE19hvIACzmQ+I2iL1kWjF8zmFXHNsurC2MMSZEtSMX4DbGcgcL4RKAChnDao6D6CKE+Klwj/A8hjd/gedyG8/ddnMYKGURpQBnKdqFeCJy9zFEzPm9n7PomuMIC22+pwjmMGiiaTaqU6GklN1JoJQ6Q7S2Iap3c0Fs+fmr5Luep9DMY0UlNqPIy1lgijYhXldTVFj1ZmjuIkKK6oUxbeT11ZAG05lAkkJ5tVZyqlvMDi1CvDlybMC5EtGI+w1/ogsY4qCnhnCW4VGMrCVSbgIzNIUs8TlwR6hc01ly/GpIz91e1ZifQMfcvDwM773xGhwcH4O7tx/5PcXREbhY8D7iT389h6f/HUL3RGSfKanJbFd+7+OQY7WgrWOmr47CzJUxePrvYVshX13/EN5/83V1vv5kFxa2d6BrpJyADMA2l/XJ5UtKBtUgojT6DgwCbIVQ7SHW/9hVUi4OFeDmSJpjzWRgKyQofPfPfajsPlPnxXdHoN9hKSQIV8TO8xew8/cLdT5zdQz6HZZCgnD1eL+uwtWjJ3vq60EIWyyFBIVOPSvi4OhYySH6PWyxExIOVzT2CAiE9HvYYreDqjR22r399tPTsRyFq+BINSgQ1G/wExIabwQ1pRUKW+yEiN6XABGshHz09ltNCfOPf4ZfD/458/qX1z9Qwihsff3Lb8CKYz15MVZtyPSVUXWkRpzSKZRWCT/cXS/Fwq63hVljXRtIWQkJwlW7cFTZe9Y8Z9Xbkvomu9gICYercMGHCXd/w41/ytSqM6VV0ETvbUgBG7Mu0u+UuQ1nb2k0fmPj/PmiL37chq4IryXWSUNq3QDaew05hGz0P2VEL0j2uDJGyiWdtYPoWUja63hjIyM+Y9QsYuz3QxnTpUXQjKY2RH4PvKE4//CVZ4WYhK6Q8yZkEHqEHGEvQ9PAyAgRcV5NPXe6epEWRRzJieqt0goYQsvAkMKWs1G5g5fcFnBDwMPION84VwatFaZkGg34XLrokrhZjbaROq1zQimzIMUypLuM9BR1RcMry0b9VZYLbX5mCUfdK2ndKUjrOIT2YkBe3mAQvup+o1uMLNgTWgzeZpUl9sbSvG2T9lyWv3tpQi1Mo524krYjUI0R18AcscOLU67Mcb7Nh7Hkor8VwA2+xoKodSSFFkOHF7KdhDaKnt6ErKNNPN6dJQZ0w05PGOjjO+XNu/i+1DtiPQfMT4hmGWoD0VBuISt3I+I1hWti9DtEd5TIzq2h+AgxlIpQgzipNwFoEh5CDMkIUO+dESnpCzEsIyArUtIVkpCMAO93yXlgTHJCWqc5E5YRoNoUMQC7cM9DFT4VBN3/tqH2kC9CSqgUD1MpiY5DVEEAj92v9Flw5I41VTw480LKebiBvhl/s6Z4Eur+xJMLKZKZm/GbglOtJey/q2CGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIM6wQZlghzLBCmCGcspvEPzi1xMTWEGZYIcywQpjxEna5gwxqk9eHAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,yi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,vi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBrVNBDoIwEFya6Hv0EeqZmJgQDoaXUB6DRC4NBy+i8Qn4IalbSLUtW9DoXChlZpjtbgH+ibw8LaY4pThbHKYXh+qyZ7N5U4g69YmL6po+IGiOyNV7gXZVHwwuj8JV5oqhbbl+b0Eu43B97xLscIEPU8DNJK4Y11nca/oEL6KoFcksgQNj4Iqj7YZbJUyYgE9MGnhNCLECowwwtvxoj0owODAbg+6wUTHGhpHuWAkosa6Z6o5O0hnkOEjMHCTiwFwTa5D6oZCJT6yAf+TvcmSiB8lCKW5fX6af8QRrqoetlQGSZAAAAABJRU5ErkJggg==",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Ei=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOsSURBVHgBxZlNaBNBFMffhLSIWI16sNiKKaLiyRUF8dTsvS30JvWgPYjeasF727tgvCkI9uK5YFs87hYvHlrYgghVpFsoxYKVaEULSTvOf3Y32aSb/Zhskx/ka2dm95/3Zt68fctIEW3eKBAjjRgbxE/ilBOfObe5JF62aLfpgK+K76Y1rJukAEvSWZszctSdmSDOn/jExMUWL5PKfMYa1e24g2IJlMK6MlNEUlgazMYVGilQWzCEKCbEJbZYFHD/jDWiz4Z1ChWoLSw9T9FqzSQUraHByaatQQcdl7I58bVA7cESLteFy0uNDZnA7l3MoPaJA5prkEMcEui4VQxoPwX32nXUuVhbNB4QZ2+oo/BJa0gver+qArX3Rp4OhGs55amzlMR8HPDmY83F+zR9lOKunjxBT69dokX9NvVks2Fd3ZjrIC0orbfP1ukIuHnmFD2+kqdbZ50w+m7zO02trkUPLPPTsKLzV2C9FIGFxgb6aKS/l84fP1bX9urrRryTZAnxd9oRiA2fU8vAjcN952jkQi/1dB124/JOibb+7sU7GWMTEMicrETGPWUa3diMyeVPZG7vUGw41/E3C6RAmBs9diuV6oLY+reXTBwQ6VxW5nQJiHKjJwau9Fv05RebFCiIK7CLcXrGdePb9U35eW+gv3pst1yhlZ+/KDnsOuJgPqobxL2+o4WKg9UeflyVYvzigLH9I/7iqCcHgZF5HmPhaSOsdvfDStXKjcQOLRQsMBKEh6CLeFZ79vkbjeX7AsUlCi0BYJZjz4u0ojfJH112pizchh0BLsWxIHHAm5OKYCfhYvayWOk8REIQLAKBnuBm4pRCSz02LGiJV6yVDPwWCRMHFEOLD76BOWiSAgjQYeLUQ4sPTlYGb6SANxeb0UJo8WNm3Dv+UpJRCCfe9rb2+09gnxZCi4cNbU6Y4fxFkpFwL/ZZhBfEv0YxrYYWFxNvjsAKFZOM7OnOSmHegsFi8ItsMbQ4iMoDPmr3JPNG0c3BlPG2QliwRWatocI4vtR2korMqls6M4SlIM72rAeqAp27qFpDxzioLyrV7cXyfjThgkkVce3GYlJwbWbBbHfpA1hi3t1oPBiczZT5KJFaAFeC8yUUj4KawstvKazsSODWYb1piS80H5QDGR+Xteb0Kck6TIg4EK8ELCsPCEPsPqUBFqIIa0H1wEaSFdE9oc6Nfp6SUXKFFeMIUxLoR97wY6Uz+QgiL0QjvfE9hkAiLBeaiYxJ9THEf70IlLfxyQXCAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,wi=(e,t)=>{const u=t.questions??[],n=e.activeConsultantFollowUpId===t.id&&u.length>0;return w`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${t.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${n?w`
            <div class="consultant-follow-up__options">
              ${u.map(r=>w`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantFollowUpQuestion(r)}
                  >
                    ${r.prompt}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},un=e=>{const t=e.messages.length>0,u=e.consultantAgentVisible&&e.consultantAgentOptions.length>0&&!t,n=w`
    <div class="hero-card">
      <img src=${Ci} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
      ${Ai(e)}
    </div>
  `,r=w`
    <div class="consultant-prompt">
      <div class="consultant-prompt__text">
        ${e.consultantAgentIntro}
      </div>
      <div class="consultant-prompt__options">
        ${e.consultantAgentOptions.map(o=>w`
            <button
              class="consultant-agent__option"
              type="button"
              @click=${()=>e.handleConsultantAgentOption(o)}
            >
              ${o.label}
            </button>
          `)}
      </div>
    </div>
  `,i=w`
    <div class="conversation">
      ${e.messages.map(o=>{const s=!!o.consultantFollowUp;return w`
          <div
            class=${Q({message:!0,"message--user":o.role==="user","message--assistant":o.role==="assistant"})}
          >
            <div class="message__content">
              ${s?wi(e,o.consultantFollowUp):li(o.html??o.text)}
            </div>
            <time>
              ${new Date(o.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}
            </time>
          </div>
        `})}
      ${e.isLoading?w`
            <div class="message message--assistant typing">
              <span>${e.loadingLabel}</span>
              <span class="typing__dots" aria-hidden="true">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          `:null}
    </div>
  `;return w`
    <div class="panel-body">
      <div
      class=${Q({"panel-content":!0,"panel-content--empty":!t&&!u,"panel-content--consultant":u})}
      >
        ${t?i:u?r:n}
      </div>

      ${e.errorMessage?w`<p class="error-banner">${e.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${e.showSuggestions&&e.suggestions.length>0?w`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${e.suggestions.map(o=>w`
                      <button
                        class="suggestion"
                        type="button"
                        @click=${()=>e.onSuggestionClick(o)}
                      >
                        ${o}
                      </button>
                    `)}
                </div>
              </div>
            `:null}

        <form
          @submit=${o=>e.handleSubmit(o)}
          aria-busy=${e.isLoading}
        >
          <input
            type="text"
            placeholder=${e.placeholder}
            .value=${e.message}
            @input=${o=>{e.message=o.target.value}}
            ?disabled=${e.isLoading}
          />
          <button
            class="input-button submit-button"
            type="submit"
            aria-label="Enviar mensagem"
            ?disabled=${e.isLoading}
          >
            <img src=${Ei} alt="" aria-hidden="true" />
          </button>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informacoes importantes.
        </p>
      </div>
    </div>
  `},ki=e=>{const t=un(e);return w`
    <aside class=${Q({panel:!0,open:e.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${e.titleText}</span>
          <button
            class="close-button"
            @click=${()=>e.handleCloseAction()}
            aria-label="Fechar Rio Insight"
          >
            <img src=${vi} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>e.toggleConversationsPanel()}
          >
            <img src=${xi} alt="" aria-hidden="true" />
            Minhas Conversas
          </button>
          <div class="panel-header__icons">
            <button
              type="button"
              class="short-answer-toggle short-answer-toggle--header"
              role="switch"
              aria-checked=${e.shortAnswerEnabled}
              @click=${()=>e.toggleShortAnswers()}
            >
              <span
                class=${Q({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.shortAnswerEnabled})}
                aria-hidden="true"
              >
                <span class="short-answer-toggle__thumb"></span>
              </span>
              <span class="short-answer-toggle__label">Respostas rápidas</span>
            </button>

            ${e.hasActiveConversation?w`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${()=>e.handleCreateConversation()}
                  >
                    <img src=${yi} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>e.enterFullscreen()}
            >
              <img src=${_i} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${t}

      ${tn(e,{variant:"drawer"})}
    </aside>
  `},Di=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgB7ZXtCYAgEIbPaIBGsA1arU3aoJFqgxqhDa6LFPogO/UEoR44ENHn/eGpADmBiHorSIGRT6Y0SELCyogt27gCCYx8wDtDdIhDHh/CkIeHeMj9QwLk/JAI+XuIgNwdQpMdytFbb3HIkLk4FwpITDYBLVV9qZazsQQei1JqPk7QQS6cjd85gz8gHcoOqO0aeH4uRmrTU1vi/vHrh/WzbesVLQQBC6E6gyQAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Si=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB5ZZLTuQwEIbLjqWRRizCDcIJpvsGnQ1MNBvYoe5G5AYzV+EGRoGIXe8mYjb0nGAyJyA3ICsQUtqmKiTpPPrhZAm1ieOU63NV/bYC8NGMmTqeLk7tgy8HE8aYTe8adJJBltx5d4nJ+r2gaTT1OeOXOJxscYmVVlehF0oYAjqPzh2LWQsGbAQGRhmu9MrdluFG0PTPdMQ1f8DVNvSzVK2UG/4I470gykRw8W8ApIJlOhu3M+NtLyzXkEwARZIWQ1swsWh/b4Co8dgTB/oCNLjBSXCIz+tiekSxtoI45z+hJwQr4N54N0t610xXvSmUuvYtB3lvmHiEnhB5LONyPZW9XhHxIg7lmUwbGQkQjiGjAyGVtiFk2ddsso5fLkYnPAswBJIfBegKSClVzfGdUbHJiqsxbiLZCTFQaQXSXKfNrUNMTQ6Pw9jSlosz//tCOPBkHa4w/8G3s9fsqe6IKvJvT26v2wFMMxFaHElPJu/QwqSbq2NZd2Saydn97HIIhCpSQhqgInBn9zns9+wXjefRfGLaE6bYVZPbsvn9nO650YYdpqZXE4kn+B4c1ec6qhNKnOVB22YKIWW+iwd2gqiuiil3I8wEQsqs9WYriIwkjZlV58fQYktZ41L+nU3sW30RXfgocxLDt40OGv7ihmTgBXJXHOOfEz/yHfwZccr7jA64eBbL8tL8fPYGlj3l1qpxcVgAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Ti=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIVSURBVHgB5VVBctNAEOxZiQpwEi+IfoD9A+uAKI4yVamycyC8gPwAeAGVF+AcEldR5VpuQHKweQHmBYgf+AhUvMMsthVZWkm2wynpizS7O9M7O7O9wG0DbbrwvdbB3vxhh4kCaxszT30faS95lm7i30h0Nro4UopeyG/HNc/AlA2fHD6PB9iFaKg/hQxPE6iFjcApMI+qMnQSfdAXLQMay24DbAFZP2NwdJjE00YimwnB/1ZJwvzdBiRS+2KELjLCVbuYmSpH8moz6XXjVr8bd6QZTl3zsvOA4evi+BqRLbwsDXFDCFlrEesaft7wFL3ihiDn+lIahKUWqG2SZacOcuQL2NoI7486Z2b8zBwJ+2jAL/iPXibRzP5nGV3BD/06Eilyv/skXNlnoy9vlFKva1ywhz8d+Xy0/1mNlCl3UB72uLAl2FDWVGpjJ1BwPvp8jB2RERGr2h3btiXlvcM2wUUPS0QPPG+C/w3/floiShbdManzYzbZJb2nSIpMaeVaEdteEpWJltOnqKZJ+92nRyvrQPTMGPO2arU0z0neXiPqJfFAajHFjUGpjZUfKV0d0alERNEhqhQO9eV4bUTUoagk8qyIangRSuMO7PpMWBIlJAdJVDoV5z2y5y+ZteuKXcS/lxZe20Wy2EQDhlpUmHEs4vbYScD8VXRvUKzJ1kTXhONQFDHEUqpYqdlveJOVaN49/AWuVb4JKaLcJgAAAABJRU5ErkJggg==",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Ii=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBzZZPTsJAFMbfG8A/0USO0BvQI9AFJu5sjEbiptwATgCcQG5QN1ATNeOOBEioN8Ab9Ai4MHFR5jmjxiilzNSi8dt00vfN+01m5r0W4I+EWcw+5+VivGOrcVx8mTVcd2461wikALuw3yaA5lKoU3drXZMczMS0DXvTFZA30DUfX4KBtKD+3chDQDstrhYQ3AyrkBfEkI51HmLpCzEGAbIDnYWQWTqPFkREj9okCDOtR2dAxHuNIwIohZAXJK9vKB+pV5hg0aq7TgQaGRdswEceEXgMWUUQPSGIWQG3Omeuo922/yXVFQI+tNbFwUBrt27Ax015iKr1qGShEOLh/fDVTGEzLFTkqCpPKhICuhcnh1eZQQGf+DKBBxkkk/XO3VorJbYZiA6WAKnexhj6kEdx7NRPj8KvrxJ1xBi0Ia+KxUSOb6DB7UQ2ULQgv6p9PrJTQYQLbRc2loB0kOxrFmxMZKWCflPLIOOfDW1i9lHYq0CIpd5n5edS8tORqCOfT8s7EP/4UhSA5s9Qihqus7HdyaRXhOV61M1m9WYAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Fi=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Ri=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7ZbRDcIgFEUvxgFcwQ1wAu23uoMb6AbWDdxAnUH7TZ1AVnADJxAfNmgVag32+dWTNGmB9BR43BRoiURm+UZmx+V7uwADVgaDWWEQqR4PV66vg0jkQS1kpuRHmcWYtDzTaCG9tAcjVFnqyR5jr31328VvOGlCazcPymB2epLMmhI66Snc9SqzxC9pLb6MURiW8QkF1lVdPMK36uUXwj8yjl+qNKdDXTdmRJcuN3jRZhPkfqhrZHqa5IjAn6GgL4dQwAdpMbMcEXh7qMeJhjCUHLiAgWDRlKT/ERZQNv5LWJn6HEJOmSeslpkd7ekADRRS5xuZDeKmqvc5w6s5V8nc00Mq4qUvSSP3KqWfnmVIxoaVUrxt0RLJDb1+gyTxzU/rAAAAAElFTkSuQmCC",x&&x.tagName.toUpperCase()==="SCRIPT"&&x.src||new URL("rio-assist.js",document.baseURI).href).href,Bi=[{id:"status",iconUrl:Si,ariaLabel:"Status"},{id:"info",iconUrl:Ti,ariaLabel:"Informacoes"},{id:"profile",iconUrl:Ii,ariaLabel:"Perfil de usuario"}],Mi=e=>{var n;const t=un(e),u=(n=e.headerActions)!=null&&n.length?e.headerActions:Bi;return w`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button
          type="button"
          class="rail-button"
          aria-label="Ir para home"
          @click=${()=>e.handleHomeNavigation()}
        >
          <img src=${Di} alt="" aria-hidden="true" />
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
                class=${Q({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":e.showNewConversationShortcut})}
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
            ${e.activeConversationTitle?w`<span class="fullscreen-header__tab">${e.activeConversationTitle}</span>`:null}
          </div>

          <div class="fullscreen-header__actions">
            ${u.map((r,i)=>w`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label=${r.ariaLabel??"Acao do cabecalho"}
                  @click=${()=>e.handleHeaderActionClick(r,i)}
                >
                  <img src=${r.iconUrl} alt="" aria-hidden="true" />
                </button>
              `)}
          </div>
        </header>

        <button
          type="button"
          class="fullscreen-exit-inline"
          aria-label="Retornar para painel compacto"
          @click=${()=>e.exitFullscreen(!0)}
        >
          <img src=${Ri} alt="" aria-hidden="true" />
        </button>

        <div class="fullscreen-utility-bar">
          <button
            type="button"
            class="short-answer-toggle short-answer-toggle--header"
            role="switch"
            aria-checked=${e.shortAnswerEnabled}
            @click=${()=>e.toggleShortAnswers()}
          >
            <span
              class=${Q({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.shortAnswerEnabled})}
              aria-hidden="true"
            >
              <span class="short-answer-toggle__thumb"></span>
            </span>
            <span class="short-answer-toggle__label">Respostas rápidas</span>
          </button>
          ${e.hasActiveConversation?w`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label="Iniciar nova conversa"
                  @click=${()=>e.handleCreateConversation()}
                >
                  <img src=${Fi} alt="" aria-hidden="true" />
                </button>
              `:null}
        </div>

        <div class="fullscreen-grid">
          ${tn(e,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${t}
          </div>
        </div>
      </div>
    </section>
  `},Ui=e=>{const t=Q({canvas:!0,"canvas--fullscreen":e.isFullscreen});return w`
    <div class=${t}>
      ${ci(e)}
      ${ki(e)}
      ${e.isFullscreen?Mi(e):null}
      ${e.renameConversationTarget?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Digite o novo título para a conversa:</p>
                <input
                  class="dialog__input"
                  type="text"
                  .value=${e.renameConversationTarget.draft}
                  @input=${u=>e.handleRenameDraft(u)}
                  aria-label="Novo titulo da conversa"
                />
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>e.cancelRenameConversation()}>
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>e.confirmRenameConversation()}
                  >
                    Renomear
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${e.deleteConversationTarget?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Deseja realmente excluir essa conversa?</p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>e.cancelDeleteConversation()}>
                    Cancelar
                  </button>
                  <button type="button" class="dialog__button dialog__button--danger" @click=${()=>e.confirmDeleteConversation()}>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${e.conversationActionError?w`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message dialog__message--title">
                  Erro ao
                  ${e.conversationActionError.action==="delete"?"excluir":"renomear"}
                  conversa:
                </p>
                <p class="dialog__message">
                  O agente retornou o seguinte erro ao tentar
                  ${e.conversationActionError.action==="delete"?"excluir":"renomear"}
                  a conversa:
                </p>
                <p class="dialog__message dialog__message--error">
                  ${e.conversationActionError.message}
                </p>
                <div class="dialog__actions">
                  <button type="button" class="dialog__button dialog__button--ghost" @click=${()=>e.cancelConversationActionError()}>
                    Cancelar ação
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>e.retryConversationAction()}
                  >
                    Tentar novamente
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${e.newConversationConfirmOpen?w`
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
                    @click=${()=>e.cancelCreateConversation()}
                  >
                    CONTINUAR CONVERSA ATUAL
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>e.confirmCreateConversation()}
                  >
                    INICIAR NOVA CONVERSA
                  </button>
                </div>
              </div>
            </div>
          `:null}
    </div>
  `},Li="wss://ws.volkswagen.latam-sandbox.rio.cloud",Oi=5*6e4;class Ni{constructor(t){this.socket=null,this.connectPromise=null,this.listeners=new Set,this.heartbeatId=null,this.token=t}matchesToken(t){return this.token===t}async sendMessage(t,u,n){const r=await this.ensureConnection(),i={action:"sendMessage",message:t,conversationId:u??null,...n??{}};console.info("[RioAssist][ws] enviando payload de mensagem",i),r.send(JSON.stringify(i))}async requestHistory(t={}){const u=await this.ensureConnection(),n={action:"getHistory",limit:t.limit??50,conversationId:t.conversationId??null};u.send(JSON.stringify(n))}async renameConversation(t,u){const n=await this.ensureConnection(),r={action:"renameConversation",conversationId:t,newTitle:u};console.info("[RioAssist][ws] enviando renameConversation",r),n.send(JSON.stringify(r))}async deleteConversation(t){const u=await this.ensureConnection(),n={action:"deleteConversation",conversationId:t};console.info("[RioAssist][ws] enviando deleteConversation",n),u.send(JSON.stringify(n))}onMessage(t){return this.listeners.add(t),()=>this.listeners.delete(t)}close(){this.stopHeartbeat(),this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${Li}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",t=>this.handleMessage(t)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null,this.stopHeartbeat()}),this.connectPromise=new Promise((t,u)=>{if(!this.socket){u(new Error("Falha ao criar conexão WebSocket."));return}const n=()=>{i(),this.socket&&this.startHeartbeat(this.socket),t()},r=()=>{var o;i(),this.stopHeartbeat(),(o=this.socket)==null||o.close(),this.socket=null,this.connectPromise=null,u(new Error("Não foi possível abrir conexão com o websocket do Rio Insight."))},i=()=>{var o,s;(o=this.socket)==null||o.removeEventListener("open",n),(s=this.socket)==null||s.removeEventListener("error",r)};this.socket.addEventListener("open",n,{once:!0}),this.socket.addEventListener("error",r,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do Rio Insight não está pronta.");return this.socket}startHeartbeat(t){this.stopHeartbeat(),this.heartbeatId=window.setInterval(()=>{t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({action:"ping"}))},Oi)}stopHeartbeat(){this.heartbeatId!==null&&(window.clearInterval(this.heartbeatId),this.heartbeatId=null)}async handleMessage(t){const u=await this.readMessage(t.data);let n=null,r=u,i;try{if(n=JSON.parse(u),typeof n=="object"&&n!==null){const o=n.action??n.type??n.event;typeof o=="string"&&(i=o);const s=n.message??n.response??n.text??n.content;typeof s=="string"&&(r=s)}}catch{n=null}this.listeners.forEach(o=>o({text:r,raw:u,data:n,action:i}))}async readMessage(t){return typeof t=="string"?t:t instanceof Blob?t.text():t instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(t)):ArrayBuffer.isView(t)?new TextDecoder().decode(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)):String(t??"")}}const nn={};function Pi(e){let t=nn[e];if(t)return t;t=nn[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);t.push(n)}for(let u=0;u<e.length;u++){const n=e.charCodeAt(u);t[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return t}function Te(e,t){typeof t!="string"&&(t=Te.defaultChars);const u=Pi(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let r="";for(let i=0,o=n.length;i<o;i+=3){const s=parseInt(n.slice(i+1,i+3),16);if(s<128){r+=u[s];continue}if((s&224)===192&&i+3<o){const a=parseInt(n.slice(i+4,i+6),16);if((a&192)===128){const c=s<<6&1984|a&63;c<128?r+="��":r+=String.fromCharCode(c),i+=3;continue}}if((s&240)===224&&i+6<o){const a=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16);if((a&192)===128&&(c&192)===128){const d=s<<12&61440|a<<6&4032|c&63;d<2048||d>=55296&&d<=57343?r+="���":r+=String.fromCharCode(d),i+=6;continue}}if((s&248)===240&&i+9<o){const a=parseInt(n.slice(i+4,i+6),16),c=parseInt(n.slice(i+7,i+9),16),d=parseInt(n.slice(i+10,i+12),16);if((a&192)===128&&(c&192)===128&&(d&192)===128){let f=s<<18&1835008|a<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?r+="����":(f-=65536,r+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),i+=9;continue}}r+="�"}return r})}Te.defaultChars=";/?:@&=+$,#",Te.componentChars="";const rn={};function $i(e){let t=rn[e];if(t)return t;t=rn[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);/^[0-9a-z]$/i.test(n)?t.push(n):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function Ke(e,t,u){typeof t!="string"&&(u=t,t=Ke.defaultChars),typeof u>"u"&&(u=!0);const n=$i(t);let r="";for(let i=0,o=e.length;i<o;i++){const s=e.charCodeAt(i);if(u&&s===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){r+=e.slice(i,i+3),i+=2;continue}if(s<128){r+=n[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<o){const a=e.charCodeAt(i+1);if(a>=56320&&a<=57343){r+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[i])}return r}Ke.defaultChars=";/?:@&=+$,-_.!~*'()#",Ke.componentChars="-_.!~*'()";function Zt(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function At(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const zi=/^([a-z0-9.+-]+:)/i,Hi=/:[0-9]*$/,qi=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ji=["<",">",'"',"`"," ","\r",`
`,"	"],Yi=["{","}","|","\\","^","`"].concat(ji),Vi=["'"].concat(Yi),on=["%","/","?",";","#"].concat(Vi),sn=["/","?","#"],Qi=255,an=/^[+a-z0-9A-Z_-]{0,63}$/,Gi=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,cn={javascript:!0,"javascript:":!0},ln={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Xt(e,t){if(e&&e instanceof At)return e;const u=new At;return u.parse(e,t),u}At.prototype.parse=function(e,t){let u,n,r,i=e;if(i=i.trim(),!t&&e.split("#").length===1){const c=qi.exec(i);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=zi.exec(i);if(o&&(o=o[0],u=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(t||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(o&&cn[o])&&(i=i.substr(2),this.slashes=!0)),!cn[o]&&(r||o&&!ln[o])){let c=-1;for(let h=0;h<sn.length;h++)n=i.indexOf(sn[h]),n!==-1&&(c===-1||n<c)&&(c=n);let d,f;c===-1?f=i.lastIndexOf("@"):f=i.lastIndexOf("@",c),f!==-1&&(d=i.slice(0,f),i=i.slice(f+1),this.auth=d),c=-1;for(let h=0;h<on.length;h++)n=i.indexOf(on[h]),n!==-1&&(c===-1||n<c)&&(c=n);c===-1&&(c=i.length),i[c-1]===":"&&c--;const g=i.slice(0,c);i=i.slice(c),this.parseHost(g),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let E=0,D=h.length;E<D;E++){const T=h[E];if(T&&!T.match(an)){let y="";for(let C=0,m=T.length;C<m;C++)T.charCodeAt(C)>127?y+="x":y+=T[C];if(!y.match(an)){const C=h.slice(0,E),m=h.slice(E+1),v=T.match(Gi);v&&(C.push(v[1]),m.unshift(v[2])),m.length&&(i=m.join(".")+i),this.hostname=C.join(".");break}}}}this.hostname.length>Qi&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const a=i.indexOf("?");return a!==-1&&(this.search=i.substr(a),i=i.slice(0,a)),i&&(this.pathname=i),ln[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this},At.prototype.parseHost=function(e){let t=Hi.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const Wi=Object.freeze(Object.defineProperty({__proto__:null,decode:Te,encode:Ke,format:Zt,parse:Xt},Symbol.toStringTag,{value:"Module"})),dn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,fn=/[\0-\x1F\x7F-\x9F]/,Zi=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Kt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,hn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,pn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Xi=Object.freeze(Object.defineProperty({__proto__:null,Any:dn,Cc:fn,Cf:Zi,P:Kt,S:hn,Z:pn},Symbol.toStringTag,{value:"Module"})),Ki=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Ji=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Jt;const eo=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),to=(Jt=String.fromCodePoint)!==null&&Jt!==void 0?Jt:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function uo(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=eo.get(e))!==null&&t!==void 0?t:e}var O;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(O||(O={}));const no=32;var be;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(be||(be={}));function eu(e){return e>=O.ZERO&&e<=O.NINE}function ro(e){return e>=O.UPPER_A&&e<=O.UPPER_F||e>=O.LOWER_A&&e<=O.LOWER_F}function io(e){return e>=O.UPPER_A&&e<=O.UPPER_Z||e>=O.LOWER_A&&e<=O.LOWER_Z||eu(e)}function oo(e){return e===O.EQUALS||io(e)}var N;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(N||(N={}));var ge;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(ge||(ge={}));class so{constructor(t,u,n){this.decodeTree=t,this.emitCodePoint=u,this.errors=n,this.state=N.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=ge.Strict}startEntity(t){this.decodeMode=t,this.state=N.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case N.EntityStart:return t.charCodeAt(u)===O.NUM?(this.state=N.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=N.NamedEntity,this.stateNamedEntity(t,u));case N.NumericStart:return this.stateNumericStart(t,u);case N.NumericDecimal:return this.stateNumericDecimal(t,u);case N.NumericHex:return this.stateNumericHex(t,u);case N.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|no)===O.LOWER_X?(this.state=N.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=N.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,n,r){if(u!==n){const i=n-u;this.result=this.result*Math.pow(r,i)+parseInt(t.substr(u,i),r),this.consumed+=i}}stateNumericHex(t,u){const n=u;for(;u<t.length;){const r=t.charCodeAt(u);if(eu(r)||ro(r))u+=1;else return this.addToNumericResult(t,n,u,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,n,u,16),-1}stateNumericDecimal(t,u){const n=u;for(;u<t.length;){const r=t.charCodeAt(u);if(eu(r))u+=1;else return this.addToNumericResult(t,n,u,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,n,u,10),-1}emitNumericEntity(t,u){var n;if(this.consumed<=u)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===O.SEMI)this.consumed+=1;else if(this.decodeMode===ge.Strict)return 0;return this.emitCodePoint(uo(this.result),this.consumed),this.errors&&(t!==O.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:n}=this;let r=n[this.treeIndex],i=(r&be.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const o=t.charCodeAt(u);if(this.treeIndex=ao(n,r,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===ge.Attribute&&(i===0||oo(o))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&be.VALUE_LENGTH)>>14,i!==0){if(o===O.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==ge.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:n}=this,r=(n[u]&be.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,n){const{decodeTree:r}=this;return this.emitCodePoint(u===1?r[t]&~be.VALUE_LENGTH:r[t+1],n),u===3&&this.emitCodePoint(r[t+2],n),n}end(){var t;switch(this.state){case N.NamedEntity:return this.result!==0&&(this.decodeMode!==ge.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case N.NumericDecimal:return this.emitNumericEntity(0,2);case N.NumericHex:return this.emitNumericEntity(0,3);case N.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case N.EntityStart:return 0}}}function bn(e){let t="";const u=new so(e,n=>t+=to(n));return function(r,i){let o=0,s=0;for(;(s=r.indexOf("&",s))>=0;){t+=r.slice(o,s),u.startEntity(i);const c=u.write(r,s+1);if(c<0){o=s+u.end();break}o=s+c,s=c===0?o+1:o}const a=t+r.slice(o);return t="",a}}function ao(e,t,u,n){const r=(t&be.BRANCH_LENGTH)>>7,i=t&be.JUMP_TABLE;if(r===0)return i!==0&&n===i?u:-1;if(i){const a=n-i;return a<0||a>=r?-1:e[u+a]-1}let o=u,s=o+r-1;for(;o<=s;){const a=o+s>>>1,c=e[a];if(c<n)o=a+1;else if(c>n)s=a-1;else return e[a+r]}return-1}const co=bn(Ki);bn(Ji);function gn(e,t=ge.Legacy){return co(e,t)}function lo(e){return Object.prototype.toString.call(e)}function tu(e){return lo(e)==="[object String]"}const fo=Object.prototype.hasOwnProperty;function ho(e,t){return fo.call(e,t)}function xt(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(n){e[n]=u[n]})}}),e}function mn(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function uu(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function _t(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const An=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,po=/&([a-z#][a-z0-9]{1,31});/gi,bo=new RegExp(An.source+"|"+po.source,"gi"),go=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function mo(e,t){if(t.charCodeAt(0)===35&&go.test(t)){const n=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return uu(n)?_t(n):e}const u=gn(e);return u!==e?u:e}function Ao(e){return e.indexOf("\\")<0?e:e.replace(An,"$1")}function Ie(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(bo,function(t,u,n){return u||mo(t,n)})}const xo=/[&<>"]/,_o=/[&<>"]/g,Co={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function yo(e){return Co[e]}function me(e){return xo.test(e)?e.replace(_o,yo):e}const vo=/[.?*+^$[\]\\(){}|-]/g;function Eo(e){return e.replace(vo,"\\$&")}function I(e){switch(e){case 9:case 32:return!0}return!1}function Je(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function et(e){return Kt.test(e)||hn.test(e)}function tt(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Ct(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const wo=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:mn,assign:xt,escapeHtml:me,escapeRE:Eo,fromCodePoint:_t,has:ho,isMdAsciiPunct:tt,isPunctChar:et,isSpace:I,isString:tu,isValidEntityCode:uu,isWhiteSpace:Je,lib:{mdurl:Wi,ucmicro:Xi},normalizeReference:Ct,unescapeAll:Ie,unescapeMd:Ao},Symbol.toStringTag,{value:"Module"}));function ko(e,t,u){let n,r,i,o;const s=e.posMax,a=e.pos;for(e.pos=t+1,n=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(n--,n===0)){r=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)n++;else if(u)return e.pos=a,-1}}let c=-1;return r&&(c=e.pos),e.pos=a,c}function Do(e,t,u){let n,r=t;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<u;){if(n=e.charCodeAt(r),n===10||n===60)return i;if(n===62)return i.pos=r+1,i.str=Ie(e.slice(t+1,r)),i.ok=!0,i;if(n===92&&r+1<u){r+=2;continue}r++}return i}let o=0;for(;r<u&&(n=e.charCodeAt(r),!(n===32||n<32||n===127));){if(n===92&&r+1<u){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(n===40&&(o++,o>32))return i;if(n===41){if(o===0)break;o--}r++}return t===r||o!==0||(i.str=Ie(e.slice(t,r)),i.pos=r,i.ok=!0),i}function So(e,t,u,n){let r,i=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)o.str=n.str,o.marker=n.marker;else{if(i>=u)return o;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return o;t++,i++,s===40&&(s=41),o.marker=s}for(;i<u;){if(r=e.charCodeAt(i),r===o.marker)return o.pos=i+1,o.str+=Ie(e.slice(t,i)),o.ok=!0,o;if(r===40&&o.marker===41)return o;r===92&&i+1<u&&i++,i++}return o.can_continue=!0,o.str+=Ie(e.slice(t,i)),o}const To=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Do,parseLinkLabel:ko,parseLinkTitle:So},Symbol.toStringTag,{value:"Module"})),ue={};ue.code_inline=function(e,t,u,n,r){const i=e[t];return"<code"+r.renderAttrs(i)+">"+me(i.content)+"</code>"},ue.code_block=function(e,t,u,n,r){const i=e[t];return"<pre"+r.renderAttrs(i)+"><code>"+me(e[t].content)+`</code></pre>
`},ue.fence=function(e,t,u,n,r){const i=e[t],o=i.info?Ie(i.info).trim():"";let s="",a="";if(o){const d=o.split(/(\s+)/g);s=d[0],a=d.slice(2).join("")}let c;if(u.highlight?c=u.highlight(i.content,s,a)||me(i.content):c=me(i.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=i.attrIndex("class"),f=i.attrs?i.attrs.slice():[];d<0?f.push(["class",u.langPrefix+s]):(f[d]=f[d].slice(),f[d][1]+=" "+u.langPrefix+s);const g={attrs:f};return`<pre><code${r.renderAttrs(g)}>${c}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${c}</code></pre>
`},ue.image=function(e,t,u,n,r){const i=e[t];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,u,n),r.renderToken(e,t,u)},ue.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`},ue.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`},ue.text=function(e,t){return me(e[t].content)},ue.html_block=function(e,t){return e[t].content},ue.html_inline=function(e,t){return e[t].content};function Fe(){this.rules=xt({},ue)}Fe.prototype.renderAttrs=function(t){let u,n,r;if(!t.attrs)return"";for(r="",u=0,n=t.attrs.length;u<n;u++)r+=" "+me(t.attrs[u][0])+'="'+me(t.attrs[u][1])+'"';return r},Fe.prototype.renderToken=function(t,u,n){const r=t[u];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&u&&t[u-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=" /");let o=!1;if(r.block&&(o=!0,r.nesting===1&&u+1<t.length)){const s=t[u+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===r.tag)&&(o=!1)}return i+=o?`>
`:">",i},Fe.prototype.renderInline=function(e,t,u){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;typeof r[s]<"u"?n+=r[s](e,i,t,u,this):n+=this.renderToken(e,i,t)}return n},Fe.prototype.renderInlineAsText=function(e,t,u){let n="";for(let r=0,i=e.length;r<i;r++)switch(e[r].type){case"text":n+=e[r].content;break;case"image":n+=this.renderInlineAsText(e[r].children,t,u);break;case"html_inline":case"html_block":n+=e[r].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n},Fe.prototype.render=function(e,t,u){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;s==="inline"?n+=this.renderInline(e[i].children,t,u):typeof r[s]<"u"?n+=r[s](e,i,t,u,this):n+=this.renderToken(e,i,t,u)}return n};function G(){this.__rules__=[],this.__cache__=null}G.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},G.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(n){t.indexOf(n)<0&&t.push(n)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(n){n.enabled&&(u&&n.alt.indexOf(u)<0||e.__cache__[u].push(n.fn))})})},G.prototype.at=function(e,t,u){const n=this.__find__(e),r=u||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=r.alt||[],this.__cache__=null},G.prototype.before=function(e,t,u,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:t,enabled:!0,fn:u,alt:i.alt||[]}),this.__cache__=null},G.prototype.after=function(e,t,u,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:t,enabled:!0,fn:u,alt:i.alt||[]}),this.__cache__=null},G.prototype.push=function(e,t,u){const n=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},G.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!0,u.push(n)},this),this.__cache__=null,u},G.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)},G.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!1,u.push(n)},this),this.__cache__=null,u},G.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ee(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ee.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let n=0,r=u.length;n<r;n++)if(u[n][0]===t)return n;return-1},ee.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},ee.prototype.attrSet=function(t,u){const n=this.attrIndex(t),r=[t,u];n<0?this.attrPush(r):this.attrs[n]=r},ee.prototype.attrGet=function(t){const u=this.attrIndex(t);let n=null;return u>=0&&(n=this.attrs[u][1]),n},ee.prototype.attrJoin=function(t,u){const n=this.attrIndex(t);n<0?this.attrPush([t,u]):this.attrs[n][1]=this.attrs[n][1]+" "+u};function xn(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}xn.prototype.Token=ee;const Io=/\r\n?|\n/g,Fo=/\0/g;function Ro(e){let t;t=e.src.replace(Io,`
`),t=t.replace(Fo,"�"),e.src=t}function Bo(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Mo(e){const t=e.tokens;for(let u=0,n=t.length;u<n;u++){const r=t[u];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Uo(e){return/^<a[>\s]/i.test(e)}function Lo(e){return/^<\/a\s*>/i.test(e)}function Oo(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,n=t.length;u<n;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let r=t[u].children,i=0;for(let o=r.length-1;o>=0;o--){const s=r[o];if(s.type==="link_close"){for(o--;r[o].level!==s.level&&r[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&(Uo(s.content)&&i>0&&i--,Lo(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const a=s.content;let c=e.md.linkify.match(a);const d=[];let f=s.level,g=0;c.length>0&&c[0].index===0&&o>0&&r[o-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const h=c[p].url,E=e.md.normalizeLink(h);if(!e.md.validateLink(E))continue;let D=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(D)?D=e.md.normalizeLinkText("mailto:"+D).replace(/^mailto:/,""):D=e.md.normalizeLinkText(D):D=e.md.normalizeLinkText("http://"+D).replace(/^http:\/\//,"");const T=c[p].index;if(T>g){const v=new e.Token("text","",0);v.content=a.slice(g,T),v.level=f,d.push(v)}const y=new e.Token("link_open","a",1);y.attrs=[["href",E]],y.level=f++,y.markup="linkify",y.info="auto",d.push(y);const C=new e.Token("text","",0);C.content=D,C.level=f,d.push(C);const m=new e.Token("link_close","a",-1);m.level=--f,m.markup="linkify",m.info="auto",d.push(m),g=c[p].lastIndex}if(g<a.length){const p=new e.Token("text","",0);p.content=a.slice(g),p.level=f,d.push(p)}t[u].children=r=mn(r,o,d)}}}}const _n=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,No=/\((c|tm|r)\)/i,Po=/\((c|tm|r)\)/ig,$o={c:"©",r:"®",tm:"™"};function zo(e,t){return $o[t.toLowerCase()]}function Ho(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&(n.content=n.content.replace(Po,zo)),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function qo(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&_n.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function jo(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(No.test(e.tokens[t].content)&&Ho(e.tokens[t].children),_n.test(e.tokens[t].content)&&qo(e.tokens[t].children))}const Yo=/['"]/,Cn=/['"]/g,yn="’";function yt(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function Vo(e,t){let u;const n=[];for(let r=0;r<e.length;r++){const i=e[r],o=e[r].level;for(u=n.length-1;u>=0&&!(n[u].level<=o);u--);if(n.length=u+1,i.type!=="text")continue;let s=i.content,a=0,c=s.length;e:for(;a<c;){Cn.lastIndex=a;const d=Cn.exec(s);if(!d)break;let f=!0,g=!0;a=d.index+1;const p=d[0]==="'";let h=32;if(d.index-1>=0)h=s.charCodeAt(d.index-1);else for(u=r-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){h=e[u].content.charCodeAt(e[u].content.length-1);break}let E=32;if(a<c)E=s.charCodeAt(a);else for(u=r+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){E=e[u].content.charCodeAt(0);break}const D=tt(h)||et(String.fromCharCode(h)),T=tt(E)||et(String.fromCharCode(E)),y=Je(h),C=Je(E);if(C?f=!1:T&&(y||D||(f=!1)),y?g=!1:D&&(C||T||(g=!1)),E===34&&d[0]==='"'&&h>=48&&h<=57&&(g=f=!1),f&&g&&(f=D,g=T),!f&&!g){p&&(i.content=yt(i.content,d.index,yn));continue}if(g)for(u=n.length-1;u>=0;u--){let m=n[u];if(n[u].level<o)break;if(m.single===p&&n[u].level===o){m=n[u];let v,S;p?(v=t.md.options.quotes[2],S=t.md.options.quotes[3]):(v=t.md.options.quotes[0],S=t.md.options.quotes[1]),i.content=yt(i.content,d.index,S),e[m.token].content=yt(e[m.token].content,m.pos,v),a+=S.length-1,m.token===r&&(a+=v.length-1),s=i.content,c=s.length,n.length=u;continue e}}f?n.push({token:r,pos:d.index,single:p,level:o}):g&&p&&(i.content=yt(i.content,d.index,yn))}}}function Qo(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!Yo.test(e.tokens[t].content)||Vo(e.tokens[t].children,e)}function Go(e){let t,u;const n=e.tokens,r=n.length;for(let i=0;i<r;i++){if(n[i].type!=="inline")continue;const o=n[i].children,s=o.length;for(t=0;t<s;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=u=0;t<s;t++)o[t].type==="text"&&t+1<s&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==u&&(o[u]=o[t]),u++);t!==u&&(o.length=u)}}const nu=[["normalize",Ro],["block",Bo],["inline",Mo],["linkify",Oo],["replacements",jo],["smartquotes",Qo],["text_join",Go]];function ru(){this.ruler=new G;for(let e=0;e<nu.length;e++)this.ruler.push(nu[e][0],nu[e][1])}ru.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,n=t.length;u<n;u++)t[u](e)},ru.prototype.State=xn;function ne(e,t,u,n){this.src=e,this.md=t,this.env=u,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,o=0,s=0,a=0,c=r.length,d=!1;o<c;o++){const f=r.charCodeAt(o);if(!d)if(I(f)){s++,f===9?a+=4-a%4:a++;continue}else d=!0;(f===10||o===c-1)&&(f!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(a),this.bsCount.push(0),d=!1,s=0,a=0,i=o+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ne.prototype.push=function(e,t,u){const n=new ee(e,t,u);return n.block=!0,u<0&&this.level--,n.level=this.level,u>0&&this.level++,this.tokens.push(n),n},ne.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]},ne.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t},ne.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const n=this.src.charCodeAt(t);if(!I(n))break}return t},ne.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!I(this.src.charCodeAt(--t)))return t+1;return t},ne.prototype.skipChars=function(t,u){for(let n=this.src.length;t<n&&this.src.charCodeAt(t)===u;t++);return t},ne.prototype.skipCharsBack=function(t,u,n){if(t<=n)return t;for(;t>n;)if(u!==this.src.charCodeAt(--t))return t+1;return t},ne.prototype.getLines=function(t,u,n,r){if(t>=u)return"";const i=new Array(u-t);for(let o=0,s=t;s<u;s++,o++){let a=0;const c=this.bMarks[s];let d=c,f;for(s+1<u||r?f=this.eMarks[s]+1:f=this.eMarks[s];d<f&&a<n;){const g=this.src.charCodeAt(d);if(I(g))g===9?a+=4-(a+this.bsCount[s])%4:a++;else if(d-c<this.tShift[s])a++;else break;d++}a>n?i[o]=new Array(a-n+1).join(" ")+this.src.slice(d,f):i[o]=this.src.slice(d,f)}return i.join("")},ne.prototype.Token=ee;const Wo=65536;function iu(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];return e.src.slice(u,n)}function vn(e){const t=[],u=e.length;let n=0,r=e.charCodeAt(n),i=!1,o=0,s="";for(;n<u;)r===124&&(i?(s+=e.substring(o,n-1),o=n):(t.push(s+e.substring(o,n)),s="",o=n+1)),i=r===92,n++,r=e.charCodeAt(n);return t.push(s+e.substring(o)),t}function Zo(e,t,u,n){if(t+2>u)return!1;let r=t+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let i=e.bMarks[r]+e.tShift[r];if(i>=e.eMarks[r])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[r])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!I(s)||o===45&&I(s))return!1;for(;i<e.eMarks[r];){const m=e.src.charCodeAt(i);if(m!==124&&m!==45&&m!==58&&!I(m))return!1;i++}let a=iu(e,t+1),c=a.split("|");const d=[];for(let m=0;m<c.length;m++){const v=c[m].trim();if(!v){if(m===0||m===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?d.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=iu(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=vn(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(n)return!0;const g=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),E=[t,0];h.map=E;const D=e.push("thead_open","thead",1);D.map=[t,t+1];const T=e.push("tr_open","tr",1);T.map=[t,t+1];for(let m=0;m<c.length;m++){const v=e.push("th_open","th",1);d[m]&&(v.attrs=[["style","text-align:"+d[m]]]);const S=e.push("inline","",0);S.content=c[m].trim(),S.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let y,C=0;for(r=t+2;r<u&&!(e.sCount[r]<e.blkIndent);r++){let m=!1;for(let S=0,U=p.length;S<U;S++)if(p[S](e,r,u,!0)){m=!0;break}if(m||(a=iu(e,r).trim(),!a)||e.sCount[r]-e.blkIndent>=4||(c=vn(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),C+=f-c.length,C>Wo))break;if(r===t+2){const S=e.push("tbody_open","tbody",1);S.map=y=[t+2,0]}const v=e.push("tr_open","tr",1);v.map=[r,r+1];for(let S=0;S<f;S++){const U=e.push("td_open","td",1);d[S]&&(U.attrs=[["style","text-align:"+d[S]]]);const X=e.push("inline","",0);X.content=c[S]?c[S].trim():"",X.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return y&&(e.push("tbody_close","tbody",-1),y[1]=r),e.push("table_close","table",-1),E[1]=r,e.parentType=g,e.line=r,!0}function Xo(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let n=t+1,r=n;for(;n<u;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,r=n;continue}break}e.line=r;const i=e.push("code_block","code",0);return i.content=e.getLines(t,r,4+e.blkIndent,!1)+`
`,i.map=[t,e.line],!0}function Ko(e,t,u,n){let r=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||r+3>i)return!1;const o=e.src.charCodeAt(r);if(o!==126&&o!==96)return!1;let s=r;r=e.skipChars(r,o);let a=r-s;if(a<3)return!1;const c=e.src.slice(s,r),d=e.src.slice(r,i);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let f=t,g=!1;for(;f++,!(f>=u||(r=s=e.bMarks[f]+e.tShift[f],i=e.eMarks[f],r<i&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(r)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(r=e.skipChars(r,o),!(r-s<a)&&(r=e.skipSpaces(r),!(r<i)))){g=!0;break}a=e.sCount[t],e.line=f+(g?1:0);const p=e.push("fence","code",0);return p.info=d,p.content=e.getLines(t+1,f,a,!0),p.markup=c,p.map=[t,e.line],!0}function Jo(e,t,u,n){let r=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(n)return!0;const s=[],a=[],c=[],d=[],f=e.md.block.ruler.getRules("blockquote"),g=e.parentType;e.parentType="blockquote";let p=!1,h;for(h=t;h<u;h++){const C=e.sCount[h]<e.blkIndent;if(r=e.bMarks[h]+e.tShift[h],i=e.eMarks[h],r>=i)break;if(e.src.charCodeAt(r++)===62&&!C){let v=e.sCount[h]+1,S,U;e.src.charCodeAt(r)===32?(r++,v++,U=!1,S=!0):e.src.charCodeAt(r)===9?(S=!0,(e.bsCount[h]+v)%4===3?(r++,v++,U=!1):U=!0):S=!1;let X=v;for(s.push(e.bMarks[h]),e.bMarks[h]=r;r<i;){const oe=e.src.charCodeAt(r);if(I(oe))oe===9?X+=4-(X+e.bsCount[h]+(U?1:0))%4:X++;else break;r++}p=r>=i,a.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(S?1:0),c.push(e.sCount[h]),e.sCount[h]=X-v,d.push(e.tShift[h]),e.tShift[h]=r-e.bMarks[h];continue}if(p)break;let m=!1;for(let v=0,S=f.length;v<S;v++)if(f[v](e,h,u,!0)){m=!0;break}if(m){e.lineMax=h,e.blkIndent!==0&&(s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]=-1}const E=e.blkIndent;e.blkIndent=0;const D=e.push("blockquote_open","blockquote",1);D.markup=">";const T=[t,0];D.map=T,e.md.block.tokenize(e,t,h);const y=e.push("blockquote_close","blockquote",-1);y.markup=">",e.lineMax=o,e.parentType=g,T[1]=e.line;for(let C=0;C<d.length;C++)e.bMarks[C+t]=s[C],e.tShift[C+t]=d[C],e.sCount[C+t]=c[C],e.bsCount[C+t]=a[C];return e.blkIndent=E,!0}function es(e,t,u,n){const r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;i<r;){const c=e.src.charCodeAt(i++);if(c!==o&&!I(c))return!1;c===o&&s++}if(s<3)return!1;if(n)return!0;e.line=t+1;const a=e.push("hr","hr",0);return a.map=[t,e.line],a.markup=Array(s+1).join(String.fromCharCode(o)),!0}function En(e,t){const u=e.eMarks[t];let n=e.bMarks[t]+e.tShift[t];const r=e.src.charCodeAt(n++);if(r!==42&&r!==45&&r!==43)return-1;if(n<u){const i=e.src.charCodeAt(n);if(!I(i))return-1}return n}function wn(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];let r=u;if(r+1>=n)return-1;let i=e.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=n)return-1;if(i=e.src.charCodeAt(r++),i>=48&&i<=57){if(r-u>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<n&&(i=e.src.charCodeAt(r),!I(i))?-1:r}function ts(e,t){const u=e.level+2;for(let n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===u&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function us(e,t,u,n){let r,i,o,s,a=t,c=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;n&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let f,g,p;if((p=wn(e,a))>=0){if(f=!0,o=e.bMarks[a]+e.tShift[a],g=Number(e.src.slice(o,p-1)),d&&g!==1)return!1}else if((p=En(e,a))>=0)f=!1;else return!1;if(d&&e.skipSpaces(p)>=e.eMarks[a])return!1;if(n)return!0;const h=e.src.charCodeAt(p-1),E=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),g!==1&&(s.attrs=[["start",g]])):s=e.push("bullet_list_open","ul",1);const D=[a,0];s.map=D,s.markup=String.fromCharCode(h);let T=!1;const y=e.md.block.ruler.getRules("list"),C=e.parentType;for(e.parentType="list";a<u;){i=p,r=e.eMarks[a];const m=e.sCount[a]+p-(e.bMarks[a]+e.tShift[a]);let v=m;for(;i<r;){const xe=e.src.charCodeAt(i);if(xe===9)v+=4-(v+e.bsCount[a])%4;else if(xe===32)v++;else break;i++}const S=i;let U;S>=r?U=1:U=v-m,U>4&&(U=1);const X=m+U;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const oe=[a,0];s.map=oe,f&&(s.info=e.src.slice(o,p-1));const Ee=e.tight,L=e.tShift[a],lt=e.sCount[a],dt=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=X,e.tight=!0,e.tShift[a]=S-e.bMarks[a],e.sCount[a]=v,S>=r&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,a,u,!0),(!e.tight||T)&&(c=!1),T=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=dt,e.tShift[a]=L,e.sCount[a]=lt,e.tight=Ee,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),a=e.line,oe[1]=a,a>=u||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let Me=!1;for(let xe=0,wu=y.length;xe<wu;xe++)if(y[xe](e,a,u,!0)){Me=!0;break}if(Me)break;if(f){if(p=wn(e,a),p<0)break;o=e.bMarks[a]+e.tShift[a]}else if(p=En(e,a),p<0)break;if(h!==e.src.charCodeAt(p-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),D[1]=a,e.line=a,e.parentType=C,c&&ts(e,E),!0}function ns(e,t,u,n){let r=e.bMarks[t]+e.tShift[t],i=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function s(y){const C=e.lineMax;if(y>=C||e.isEmpty(y))return null;let m=!1;if(e.sCount[y]-e.blkIndent>3&&(m=!0),e.sCount[y]<0&&(m=!0),!m){const U=e.md.block.ruler.getRules("reference"),X=e.parentType;e.parentType="reference";let oe=!1;for(let Ee=0,L=U.length;Ee<L;Ee++)if(U[Ee](e,y,C,!0)){oe=!0;break}if(e.parentType=X,oe)return null}const v=e.bMarks[y]+e.tShift[y],S=e.eMarks[y];return e.src.slice(v,S+1)}let a=e.src.slice(r,i+1);i=a.length;let c=-1;for(r=1;r<i;r++){const y=a.charCodeAt(r);if(y===91)return!1;if(y===93){c=r;break}else if(y===10){const C=s(o);C!==null&&(a+=C,i=a.length,o++)}else if(y===92&&(r++,r<i&&a.charCodeAt(r)===10)){const C=s(o);C!==null&&(a+=C,i=a.length,o++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(r=c+2;r<i;r++){const y=a.charCodeAt(r);if(y===10){const C=s(o);C!==null&&(a+=C,i=a.length,o++)}else if(!I(y))break}const d=e.md.helpers.parseLinkDestination(a,r,i);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;r=d.pos;const g=r,p=o,h=r;for(;r<i;r++){const y=a.charCodeAt(r);if(y===10){const C=s(o);C!==null&&(a+=C,i=a.length,o++)}else if(!I(y))break}let E=e.md.helpers.parseLinkTitle(a,r,i);for(;E.can_continue;){const y=s(o);if(y===null)break;a+=y,r=i,i=a.length,o++,E=e.md.helpers.parseLinkTitle(a,r,i,E)}let D;for(r<i&&h!==r&&E.ok?(D=E.str,r=E.pos):(D="",r=g,o=p);r<i;){const y=a.charCodeAt(r);if(!I(y))break;r++}if(r<i&&a.charCodeAt(r)!==10&&D)for(D="",r=g,o=p;r<i;){const y=a.charCodeAt(r);if(!I(y))break;r++}if(r<i&&a.charCodeAt(r)!==10)return!1;const T=Ct(a.slice(1,c));return T?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[T]>"u"&&(e.env.references[T]={title:D,href:f}),e.line=o),!0):!1}const rs=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],is="[a-zA-Z_:][a-zA-Z0-9:._-]*",os="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",kn="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+is+"(?:\\s*=\\s*"+os+")?)")+"*\\s*\\/?>",Dn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",ss="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",as="<[?][\\s\\S]*?[?]>",cs="<![A-Za-z][^>]*>",ls="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",ds=new RegExp("^(?:"+kn+"|"+Dn+"|"+ss+"|"+as+"|"+cs+"|"+ls+")"),fs=new RegExp("^(?:"+kn+"|"+Dn+")"),Re=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+rs.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(fs.source+"\\s*$"),/^$/,!1]];function hs(e,t,u,n){let r=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let o=e.src.slice(r,i),s=0;for(;s<Re.length&&!Re[s][0].test(o);s++);if(s===Re.length)return!1;if(n)return Re[s][2];let a=t+1;if(!Re[s][1].test(o)){for(;a<u&&!(e.sCount[a]<e.blkIndent);a++)if(r=e.bMarks[a]+e.tShift[a],i=e.eMarks[a],o=e.src.slice(r,i),Re[s][1].test(o)){o.length!==0&&a++;break}}e.line=a;const c=e.push("html_block","",0);return c.map=[t,a],c.content=e.getLines(t,a,e.blkIndent,!0),!0}function ps(e,t,u,n){let r=e.bMarks[t]+e.tShift[t],i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(r);if(o!==35||r>=i)return!1;let s=1;for(o=e.src.charCodeAt(++r);o===35&&r<i&&s<=6;)s++,o=e.src.charCodeAt(++r);if(s>6||r<i&&!I(o))return!1;if(n)return!0;i=e.skipSpacesBack(i,r);const a=e.skipCharsBack(i,35,r);a>r&&I(e.src.charCodeAt(a-1))&&(i=a),e.line=t+1;const c=e.push("heading_open","h"+String(s),1);c.markup="########".slice(0,s),c.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(r,i).trim(),d.map=[t,e.line],d.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function bs(e,t,u){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let i=0,o,s=t+1;for(;s<u&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let p=e.bMarks[s]+e.tShift[s];const h=e.eMarks[s];if(p<h&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=h))){i=o===61?1:2;break}}if(e.sCount[s]<0)continue;let g=!1;for(let p=0,h=n.length;p<h;p++)if(n[p](e,s,u,!0)){g=!0;break}if(g)break}if(!i)return!1;const a=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;const c=e.push("heading_open","h"+String(i),1);c.markup=String.fromCharCode(o),c.map=[t,e.line];const d=e.push("inline","",0);d.content=a,d.map=[t,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(i),-1);return f.markup=String.fromCharCode(o),e.parentType=r,!0}function gs(e,t,u){const n=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let i=t+1;for(e.parentType="paragraph";i<u&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let c=!1;for(let d=0,f=n.length;d<f;d++)if(n[d](e,i,u,!0)){c=!0;break}if(c)break}const o=e.getLines(t,i,e.blkIndent,!1).trim();e.line=i;const s=e.push("paragraph_open","p",1);s.map=[t,e.line];const a=e.push("inline","",0);return a.content=o,a.map=[t,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const vt=[["table",Zo,["paragraph","reference"]],["code",Xo],["fence",Ko,["paragraph","reference","blockquote","list"]],["blockquote",Jo,["paragraph","reference","blockquote","list"]],["hr",es,["paragraph","reference","blockquote","list"]],["list",us,["paragraph","reference","blockquote"]],["reference",ns],["html_block",hs,["paragraph","reference","blockquote"]],["heading",ps,["paragraph","reference","blockquote"]],["lheading",bs],["paragraph",gs]];function Et(){this.ruler=new G;for(let e=0;e<vt.length;e++)this.ruler.push(vt[e][0],vt[e][1],{alt:(vt[e][2]||[]).slice()})}Et.prototype.tokenize=function(e,t,u){const n=this.ruler.getRules(""),r=n.length,i=e.md.options.maxNesting;let o=t,s=!1;for(;o<u&&(e.line=o=e.skipEmptyLines(o),!(o>=u||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=u;break}const a=e.line;let c=!1;for(let d=0;d<r;d++)if(c=n[d](e,o,u,!1),c){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<u&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},Et.prototype.parse=function(e,t,u,n){if(!e)return;const r=new this.State(e,t,u,n);this.tokenize(r,r.line,r.lineMax)},Et.prototype.State=ne;function ut(e,t,u,n){this.src=e,this.env=u,this.md=t,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ut.prototype.pushPending=function(){const e=new ee("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},ut.prototype.push=function(e,t,u){this.pending&&this.pushPending();const n=new ee(e,t,u);let r=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(r),n},ut.prototype.scanDelims=function(e,t){const u=this.posMax,n=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<u&&this.src.charCodeAt(i)===n;)i++;const o=i-e,s=i<u?this.src.charCodeAt(i):32,a=tt(r)||et(String.fromCharCode(r)),c=tt(s)||et(String.fromCharCode(s)),d=Je(r),f=Je(s),g=!f&&(!c||d||a),p=!d&&(!a||f||c);return{can_open:g&&(t||!p||a),can_close:p&&(t||!g||c),length:o}},ut.prototype.Token=ee;function ms(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function As(e,t){let u=e.pos;for(;u<e.posMax&&!ms(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const xs=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function _s(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,n=e.posMax;if(u+3>n||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const r=e.pending.match(xs);if(!r)return!1;const i=r[1],o=e.md.linkify.matchAtStart(e.src.slice(u-i.length));if(!o)return!1;let s=o.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!t){e.pending=e.pending.slice(0,-i.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-i.length,!0}function Cs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const n=e.pending.length-1,r=e.posMax;if(!t)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<r&&I(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const ou=[];for(let e=0;e<256;e++)ou.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ou[e.charCodeAt(0)]=1});function ys(e,t){let u=e.pos;const n=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=n))return!1;let r=e.src.charCodeAt(u);if(r===10){for(t||e.push("hardbreak","br",0),u++;u<n&&(r=e.src.charCodeAt(u),!!I(r));)u++;return e.pos=u,!0}let i=e.src[u];if(r>=55296&&r<=56319&&u+1<n){const s=e.src.charCodeAt(u+1);s>=56320&&s<=57343&&(i+=e.src[u+1],u++)}const o="\\"+i;if(!t){const s=e.push("text_special","",0);r<256&&ou[r]!==0?s.content=i:s.content=o,s.markup=o,s.info="escape"}return e.pos=u+1,!0}function vs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const r=u;u++;const i=e.posMax;for(;u<i&&e.src.charCodeAt(u)===96;)u++;const o=e.src.slice(r,u),s=o.length;if(e.backticksScanned&&(e.backticks[s]||0)<=r)return t||(e.pending+=o),e.pos+=s,!0;let a=u,c;for(;(c=e.src.indexOf("`",a))!==-1;){for(a=c+1;a<i&&e.src.charCodeAt(a)===96;)a++;const d=a-c;if(d===s){if(!t){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(u,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=c}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=s,!0}function Es(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==126)return!1;const r=e.scanDelims(e.pos,!0);let i=r.length;const o=String.fromCharCode(n);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=o,i--);for(let a=0;a<i;a+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function Sn(e,t){let u;const n=[],r=t.length;for(let i=0;i<r;i++){const o=t[i];if(o.marker!==126||o.end===-1)continue;const s=t[o.end];u=e.tokens[o.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[s.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&n.push(s.token-1)}for(;n.length;){const i=n.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(u=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=u)}}function ws(e){const t=e.tokens_meta,u=e.tokens_meta.length;Sn(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Sn(e,t[n].delimiters)}const Tn={tokenize:Es,postProcess:ws};function ks(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==95&&n!==42)return!1;const r=e.scanDelims(e.pos,n===42);for(let i=0;i<r.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function In(e,t){const u=t.length;for(let n=u-1;n>=0;n--){const r=t[n];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=t[r.end],o=n>0&&t[n-1].end===r.end+1&&t[n-1].marker===r.marker&&t[n-1].token===r.token-1&&t[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),a=e.tokens[r.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?s+s:s,a.content="";const c=e.tokens[i.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?s+s:s,c.content="",o&&(e.tokens[t[n-1].token].content="",e.tokens[t[r.end+1].token].content="",n--)}}function Ds(e){const t=e.tokens_meta,u=e.tokens_meta.length;In(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&In(e,t[n].delimiters)}const Fn={tokenize:ks,postProcess:Ds};function Ss(e,t){let u,n,r,i,o="",s="",a=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,g=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&e.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(u=e.src.charCodeAt(h),!(!I(u)&&u!==10));h++);if(h>=f)return!1;if(a=h,r=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),r.ok){for(o=e.md.normalizeLink(r.str),e.md.validateLink(o)?h=r.pos:o="",a=h;h<f&&(u=e.src.charCodeAt(h),!(!I(u)&&u!==10));h++);if(r=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<f&&a!==h&&r.ok)for(s=r.str,h=r.pos;h<f&&(u=e.src.charCodeAt(h),!(!I(u)&&u!==10));h++);}(h>=f||e.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof e.env.references>"u")return!1;if(h<f&&e.src.charCodeAt(h)===91?(a=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?n=e.src.slice(a,h++):h=p+1):h=p+1,n||(n=e.src.slice(g,p)),i=e.env.references[Ct(n)],!i)return e.pos=d,!1;o=i.href,s=i.title}if(!t){e.pos=g,e.posMax=p;const E=e.push("link_open","a",1),D=[["href",o]];E.attrs=D,s&&D.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=f,!0}function Ts(e,t){let u,n,r,i,o,s,a,c,d="";const f=e.pos,g=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(i=h+1,i<g&&e.src.charCodeAt(i)===40){for(i++;i<g&&(u=e.src.charCodeAt(i),!(!I(u)&&u!==10));i++);if(i>=g)return!1;for(c=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(d=e.md.normalizeLink(s.str),e.md.validateLink(d)?i=s.pos:d=""),c=i;i<g&&(u=e.src.charCodeAt(i),!(!I(u)&&u!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<g&&c!==i&&s.ok)for(a=s.str,i=s.pos;i<g&&(u=e.src.charCodeAt(i),!(!I(u)&&u!==10));i++);else a="";if(i>=g||e.src.charCodeAt(i)!==41)return e.pos=f,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<g&&e.src.charCodeAt(i)===91?(c=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?r=e.src.slice(c,i++):i=h+1):i=h+1,r||(r=e.src.slice(p,h)),o=e.env.references[Ct(r)],!o)return e.pos=f,!1;d=o.href,a=o.title}if(!t){n=e.src.slice(p,h);const E=[];e.md.inline.parse(n,e.md,e.env,E);const D=e.push("image","img",0),T=[["src",d],["alt",""]];D.attrs=T,D.children=E,D.content=n,a&&T.push(["title",a])}return e.pos=i,e.posMax=g,!0}const Is=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Fs=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Rs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const n=e.pos,r=e.posMax;for(;;){if(++u>=r)return!1;const o=e.src.charCodeAt(u);if(o===60)return!1;if(o===62)break}const i=e.src.slice(n+1,u);if(Fs.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}if(Is.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(i);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=i.length+2,!0}return!1}function Bs(e){return/^<a[>\s]/i.test(e)}function Ms(e){return/^<\/a\s*>/i.test(e)}function Us(e){const t=e|32;return t>=97&&t<=122}function Ls(e,t){if(!e.md.options.html)return!1;const u=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=u)return!1;const r=e.src.charCodeAt(n+1);if(r!==33&&r!==63&&r!==47&&!Us(r))return!1;const i=e.src.slice(n).match(ds);if(!i)return!1;if(!t){const o=e.push("html_inline","",0);o.content=i[0],Bs(o.content)&&e.linkLevel++,Ms(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const Os=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,Ns=/^&([a-z][a-z0-9]{1,31});/i;function Ps(e,t){const u=e.pos,n=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=n)return!1;if(e.src.charCodeAt(u+1)===35){const i=e.src.slice(u).match(Os);if(i){if(!t){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=uu(o)?_t(o):_t(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(u).match(Ns);if(i){const o=gn(i[0]);if(o!==i[0]){if(!t){const s=e.push("text_special","",0);s.content=o,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Rn(e){const t={},u=e.length;if(!u)return;let n=0,r=-2;const i=[];for(let o=0;o<u;o++){const s=e[o];if(i.push(0),(e[n].marker!==s.marker||r!==s.token-1)&&(n=o),r=s.token,s.length=s.length||0,!s.close)continue;t.hasOwnProperty(s.marker)||(t[s.marker]=[-1,-1,-1,-1,-1,-1]);const a=t[s.marker][(s.open?3:0)+s.length%3];let c=n-i[n]-1,d=c;for(;c>a;c-=i[c]+1){const f=e[c];if(f.marker===s.marker&&f.open&&f.end<0){let g=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(g=!0),!g){const p=c>0&&!e[c-1].open?i[c-1]+1:0;i[o]=o-c+p,i[c]=p,s.open=!1,f.end=o,f.close=!1,d=-1,r=-2;break}}}d!==-1&&(t[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function $s(e){const t=e.tokens_meta,u=e.tokens_meta.length;Rn(e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Rn(t[n].delimiters)}function zs(e){let t,u,n=0;const r=e.tokens,i=e.tokens.length;for(t=u=0;t<i;t++)r[t].nesting<0&&n--,r[t].level=n,r[t].nesting>0&&n++,r[t].type==="text"&&t+1<i&&r[t+1].type==="text"?r[t+1].content=r[t].content+r[t+1].content:(t!==u&&(r[u]=r[t]),u++);t!==u&&(r.length=u)}const su=[["text",As],["linkify",_s],["newline",Cs],["escape",ys],["backticks",vs],["strikethrough",Tn.tokenize],["emphasis",Fn.tokenize],["link",Ss],["image",Ts],["autolink",Rs],["html_inline",Ls],["entity",Ps]],au=[["balance_pairs",$s],["strikethrough",Tn.postProcess],["emphasis",Fn.postProcess],["fragments_join",zs]];function nt(){this.ruler=new G;for(let e=0;e<su.length;e++)this.ruler.push(su[e][0],su[e][1]);this.ruler2=new G;for(let e=0;e<au.length;e++)this.ruler2.push(au[e][0],au[e][1])}nt.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),n=u.length,r=e.md.options.maxNesting,i=e.cache;if(typeof i[t]<"u"){e.pos=i[t];return}let o=!1;if(e.level<r){for(let s=0;s<n;s++)if(e.level++,o=u[s](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[t]=e.pos},nt.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,n=e.posMax,r=e.md.options.maxNesting;for(;e.pos<n;){const i=e.pos;let o=!1;if(e.level<r){for(let s=0;s<u;s++)if(o=t[s](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},nt.prototype.parse=function(e,t,u,n){const r=new this.State(e,t,u,n);this.tokenize(r);const i=this.ruler2.getRules(""),o=i.length;for(let s=0;s<o;s++)i[s](r)},nt.prototype.State=ut;function Hs(e){const t={};e=e||{},t.src_Any=dn.source,t.src_Cc=fn.source,t.src_Z=pn.source,t.src_P=Kt.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function cu(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(n){e[n]=u[n]})}),e}function wt(e){return Object.prototype.toString.call(e)}function qs(e){return wt(e)==="[object String]"}function js(e){return wt(e)==="[object Object]"}function Ys(e){return wt(e)==="[object RegExp]"}function Bn(e){return wt(e)==="[object Function]"}function Vs(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Mn={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Qs(e){return Object.keys(e||{}).reduce(function(t,u){return t||Mn.hasOwnProperty(u)},!1)}const Gs={"http:":{validate:function(e,t,u){const n=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(n)?n.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const n=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(n)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:n.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const n=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(n)?n.match(u.re.mailto)[0].length:0}}},Ws="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",Zs="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function Xs(e){e.__index__=-1,e.__text_cache__=""}function Ks(e){return function(t,u){const n=t.slice(u);return e.test(n)?n.match(e)[0].length:0}}function Un(){return function(e,t){t.normalize(e)}}function kt(e){const t=e.re=Hs(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(Ws),u.push(t.src_xn),t.src_tlds=u.join("|");function n(s){return s.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(n(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(n(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(n(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(n(t.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function i(s,a){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+a)}Object.keys(e.__schemas__).forEach(function(s){const a=e.__schemas__[s];if(a===null)return;const c={validate:null,link:null};if(e.__compiled__[s]=c,js(a)){Ys(a.validate)?c.validate=Ks(a.validate):Bn(a.validate)?c.validate=a.validate:i(s,a),Bn(a.normalize)?c.normalize=a.normalize:a.normalize?i(s,a):c.normalize=Un();return}if(qs(a)){r.push(s);return}i(s,a)}),r.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Un()};const o=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(Vs).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),Xs(e)}function Js(e,t){const u=e.__index__,n=e.__last_index__,r=e.__text_cache__.slice(u,n);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=n+t,this.raw=r,this.text=r,this.url=r}function lu(e,t){const u=new Js(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function Z(e,t){if(!(this instanceof Z))return new Z(e,t);t||Qs(e)&&(t=e,e={}),this.__opts__=cu({},Mn,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=cu({},Gs,e),this.__compiled__={},this.__tlds__=Zs,this.__tlds_replaced__=!1,this.re={},kt(this)}Z.prototype.add=function(t,u){return this.__schemas__[t]=u,kt(this),this},Z.prototype.set=function(t){return this.__opts__=cu(this.__opts__,t),this},Z.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,n,r,i,o,s,a,c,d;if(this.re.schema_test.test(t)){for(a=this.re.schema_search,a.lastIndex=0;(u=a.exec(t))!==null;)if(i=this.testSchemaAt(t,u[2],a.lastIndex),i){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=t.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(r=t.match(this.re.email_fuzzy))!==null&&(o=r.index+r[1].length,s=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0},Z.prototype.pretest=function(t){return this.re.pretest.test(t)},Z.prototype.testSchemaAt=function(t,u,n){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,n,this):0},Z.prototype.match=function(t){const u=[];let n=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(lu(this,n)),n=this.__last_index__);let r=n?t.slice(n):t;for(;this.test(r);)u.push(lu(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return u.length?u:null},Z.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const n=this.testSchemaAt(t,u[2],u[0].length);return n?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+n,lu(this,0)):null},Z.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(n,r,i){return n!==i[r-1]}).reverse(),kt(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,kt(this),this)},Z.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)},Z.prototype.onCompile=function(){};const Be=2147483647,re=36,du=1,rt=26,ea=38,ta=700,Ln=72,On=128,Nn="-",ua=/^xn--/,na=/[^\0-\x7F]/,ra=/[\x2E\u3002\uFF0E\uFF61]/g,ia={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},fu=re-du,ie=Math.floor,hu=String.fromCharCode;function Ae(e){throw new RangeError(ia[e])}function oa(e,t){const u=[];let n=e.length;for(;n--;)u[n]=t(e[n]);return u}function Pn(e,t){const u=e.split("@");let n="";u.length>1&&(n=u[0]+"@",e=u[1]),e=e.replace(ra,".");const r=e.split("."),i=oa(r,t).join(".");return n+i}function $n(e){const t=[];let u=0;const n=e.length;for(;u<n;){const r=e.charCodeAt(u++);if(r>=55296&&r<=56319&&u<n){const i=e.charCodeAt(u++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),u--)}else t.push(r)}return t}const sa=e=>String.fromCodePoint(...e),aa=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:re},zn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Hn=function(e,t,u){let n=0;for(e=u?ie(e/ta):e>>1,e+=ie(e/t);e>fu*rt>>1;n+=re)e=ie(e/fu);return ie(n+(fu+1)*e/(e+ea))},qn=function(e){const t=[],u=e.length;let n=0,r=On,i=Ln,o=e.lastIndexOf(Nn);o<0&&(o=0);for(let s=0;s<o;++s)e.charCodeAt(s)>=128&&Ae("not-basic"),t.push(e.charCodeAt(s));for(let s=o>0?o+1:0;s<u;){const a=n;for(let d=1,f=re;;f+=re){s>=u&&Ae("invalid-input");const g=aa(e.charCodeAt(s++));g>=re&&Ae("invalid-input"),g>ie((Be-n)/d)&&Ae("overflow"),n+=g*d;const p=f<=i?du:f>=i+rt?rt:f-i;if(g<p)break;const h=re-p;d>ie(Be/h)&&Ae("overflow"),d*=h}const c=t.length+1;i=Hn(n-a,c,a==0),ie(n/c)>Be-r&&Ae("overflow"),r+=ie(n/c),n%=c,t.splice(n++,0,r)}return String.fromCodePoint(...t)},jn=function(e){const t=[];e=$n(e);const u=e.length;let n=On,r=0,i=Ln;for(const a of e)a<128&&t.push(hu(a));const o=t.length;let s=o;for(o&&t.push(Nn);s<u;){let a=Be;for(const d of e)d>=n&&d<a&&(a=d);const c=s+1;a-n>ie((Be-r)/c)&&Ae("overflow"),r+=(a-n)*c,n=a;for(const d of e)if(d<n&&++r>Be&&Ae("overflow"),d===n){let f=r;for(let g=re;;g+=re){const p=g<=i?du:g>=i+rt?rt:g-i;if(f<p)break;const h=f-p,E=re-p;t.push(hu(zn(p+h%E,0))),f=ie(h/E)}t.push(hu(zn(f,0))),i=Hn(r,c,s===o),r=0,++s}++r,++n}return t.join("")},Yn={version:"2.3.1",ucs2:{decode:$n,encode:sa},decode:qn,encode:jn,toASCII:function(e){return Pn(e,function(t){return na.test(t)?"xn--"+jn(t):t})},toUnicode:function(e){return Pn(e,function(t){return ua.test(t)?qn(t.slice(4).toLowerCase()):t})}},ca={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},la=/^(vbscript|javascript|file|data):/,da=/^data:image\/(gif|png|jpeg|webp);/;function fa(e){const t=e.trim().toLowerCase();return la.test(t)?da.test(t):!0}const Vn=["http:","https:","mailto:"];function ha(e){const t=Xt(e,!0);if(t.hostname&&(!t.protocol||Vn.indexOf(t.protocol)>=0))try{t.hostname=Yn.toASCII(t.hostname)}catch{}return Ke(Zt(t))}function pa(e){const t=Xt(e,!0);if(t.hostname&&(!t.protocol||Vn.indexOf(t.protocol)>=0))try{t.hostname=Yn.toUnicode(t.hostname)}catch{}return Te(Zt(t),Te.defaultChars+"%")}function K(e,t){if(!(this instanceof K))return new K(e,t);t||tu(e)||(t=e||{},e="default"),this.inline=new nt,this.block=new Et,this.core=new ru,this.renderer=new Fe,this.linkify=new Z,this.validateLink=fa,this.normalizeLink=ha,this.normalizeLinkText=pa,this.utils=wo,this.helpers=xt({},To),this.options={},this.configure(e),t&&this.set(t)}K.prototype.set=function(e){return xt(this.options,e),this},K.prototype.configure=function(e){const t=this;if(tu(e)){const u=e;if(e=ca[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this},K.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){u=u.concat(this[r].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(r){return u.indexOf(r)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},K.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){u=u.concat(this[r].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(r){return u.indexOf(r)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},K.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},K.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens},K.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},K.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens},K.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu=!0,Qn=!1,Gn=!1,ga=function(e,t){t&&(pu=!t.enabled,Qn=!!t.label,Gn=!!t.labelAfter),e.core.ruler.after("inline","github-task-lists",function(u){for(var n=u.tokens,r=2;r<n.length;r++)Aa(n,r)&&(xa(n[r],u.Token),Wn(n[r-2],"class","task-list-item"+(pu?"":" enabled")),Wn(n[ma(n,r-2)],"class","contains-task-list"))})};function Wn(e,t,u){var n=e.attrIndex(t),r=[t,u];n<0?e.attrPush(r):e.attrs[n]=r}function ma(e,t){for(var u=e[t].level-1,n=t-1;n>=0;n--)if(e[n].level===u)return n;return-1}function Aa(e,t){return Ea(e[t])&&wa(e[t-1])&&ka(e[t-2])&&Da(e[t])}function xa(e,t){if(e.children.unshift(_a(e,t)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),Qn)if(Gn){e.children.pop();var u="task-item-"+Math.ceil(Math.random()*(1e4*1e3)-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+' id="'+u+'">',e.children.push(va(e.content,u,t))}else e.children.unshift(Ca(t)),e.children.push(ya(t))}function _a(e,t){var u=new t("html_inline","",0),n=pu?' disabled="" ':"";return e.content.indexOf("[ ] ")===0?u.content='<input class="task-list-item-checkbox"'+n+'type="checkbox">':(e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0)&&(u.content='<input class="task-list-item-checkbox" checked=""'+n+'type="checkbox">'),u}function Ca(e){var t=new e("html_inline","",0);return t.content="<label>",t}function ya(e){var t=new e("html_inline","",0);return t.content="</label>",t}function va(e,t,u){var n=new u("html_inline","",0);return n.content='<label class="task-list-item-label" for="'+t+'">'+e+"</label>",n.attrs=[{for:t}],n}function Ea(e){return e.type==="inline"}function wa(e){return e.type==="paragraph_open"}function ka(e){return e.type==="list_item_open"}function Da(e){return e.content.indexOf("[ ] ")===0||e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0}const Sa=ba(ga);/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Zn,setPrototypeOf:Xn,isFrozen:Ta,getPrototypeOf:Ia,getOwnPropertyDescriptor:Fa}=Object;let{freeze:j,seal:J,create:bu}=Object,{apply:gu,construct:mu}=typeof Reflect<"u"&&Reflect;j||(j=function(t){return t}),J||(J=function(t){return t}),gu||(gu=function(t,u){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return t.apply(u,r)}),mu||(mu=function(t){for(var u=arguments.length,n=new Array(u>1?u-1:0),r=1;r<u;r++)n[r-1]=arguments[r];return new t(...n)});const Dt=V(Array.prototype.forEach),Ra=V(Array.prototype.lastIndexOf),Kn=V(Array.prototype.pop),it=V(Array.prototype.push),Ba=V(Array.prototype.splice),St=V(String.prototype.toLowerCase),Au=V(String.prototype.toString),xu=V(String.prototype.match),ot=V(String.prototype.replace),Ma=V(String.prototype.indexOf),Ua=V(String.prototype.trim),te=V(Object.prototype.hasOwnProperty),Y=V(RegExp.prototype.test),st=La(TypeError);function V(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var u=arguments.length,n=new Array(u>1?u-1:0),r=1;r<u;r++)n[r-1]=arguments[r];return gu(e,t,n)}}function La(e){return function(){for(var t=arguments.length,u=new Array(t),n=0;n<t;n++)u[n]=arguments[n];return mu(e,u)}}function k(e,t){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:St;Xn&&Xn(e,null);let n=t.length;for(;n--;){let r=t[n];if(typeof r=="string"){const i=u(r);i!==r&&(Ta(t)||(t[n]=i),r=i)}e[r]=!0}return e}function Oa(e){for(let t=0;t<e.length;t++)te(e,t)||(e[t]=null);return e}function ce(e){const t=bu(null);for(const[u,n]of Zn(e))te(e,u)&&(Array.isArray(n)?t[u]=Oa(n):n&&typeof n=="object"&&n.constructor===Object?t[u]=ce(n):t[u]=n);return t}function at(e,t){for(;e!==null;){const n=Fa(e,t);if(n){if(n.get)return V(n.get);if(typeof n.value=="function")return V(n.value)}e=Ia(e)}function u(){return null}return u}const Jn=j(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_u=j(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Cu=j(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Na=j(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),yu=j(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Pa=j(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),er=j(["#text"]),tr=j(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),vu=j(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ur=j(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Tt=j(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$a=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),za=J(/<%[\w\W]*|[\w\W]*%>/gm),Ha=J(/\$\{[\w\W]*/gm),qa=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),ja=J(/^aria-[\-\w]+$/),nr=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ya=J(/^(?:\w+script|data):/i),Va=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),rr=J(/^html$/i),Qa=J(/^[a-z][.\w]*(-[.\w]+)+$/i);var ir=Object.freeze({__proto__:null,ARIA_ATTR:ja,ATTR_WHITESPACE:Va,CUSTOM_ELEMENT:Qa,DATA_ATTR:qa,DOCTYPE_NAME:rr,ERB_EXPR:za,IS_ALLOWED_URI:nr,IS_SCRIPT_OR_DATA:Ya,MUSTACHE_EXPR:$a,TMPLIT_EXPR:Ha});const ct={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ga=function(){return typeof window>"u"?null:window},Wa=function(t,u){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";u&&u.hasAttribute(r)&&(n=u.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return t.createPolicy(i,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},or=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function sr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ga();const t=_=>sr(_);if(t.version="3.3.0",t.removed=[],!e||!e.document||e.document.nodeType!==ct.document||!e.Element)return t.isSupported=!1,t;let{document:u}=e;const n=u,r=n.currentScript,{DocumentFragment:i,HTMLTemplateElement:o,Node:s,Element:a,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:g,trustedTypes:p}=e,h=a.prototype,E=at(h,"cloneNode"),D=at(h,"remove"),T=at(h,"nextSibling"),y=at(h,"childNodes"),C=at(h,"parentNode");if(typeof o=="function"){const _=u.createElement("template");_.content&&_.content.ownerDocument&&(u=_.content.ownerDocument)}let m,v="";const{implementation:S,createNodeIterator:U,createDocumentFragment:X,getElementsByTagName:oe}=u,{importNode:Ee}=n;let L=or();t.isSupported=typeof Zn=="function"&&typeof C=="function"&&S&&S.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lt,ERB_EXPR:dt,TMPLIT_EXPR:Me,DATA_ATTR:xe,ARIA_ATTR:wu,IS_SCRIPT_OR_DATA:r0,ATTR_WHITESPACE:fr,CUSTOM_ELEMENT:i0}=ir;let{IS_ALLOWED_URI:hr}=ir,P=null;const pr=k({},[...Jn,..._u,...Cu,...yu,...er]);let z=null;const br=k({},[...tr,...vu,...ur,...Tt]);let R=Object.seal(bu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,ku=null;const Ue=Object.seal(bu(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let gr=!0,Du=!0,mr=!1,Ar=!0,Le=!1,Ft=!0,we=!1,Su=!1,Tu=!1,Oe=!1,Rt=!1,Bt=!1,xr=!0,_r=!1;const o0="user-content-";let Iu=!0,ht=!1,Ne={},Pe=null;const Cr=k({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let yr=null;const vr=k({},["audio","video","img","source","image","track"]);let Fu=null;const Er=k({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Mt="http://www.w3.org/1998/Math/MathML",Ut="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let $e=le,Ru=!1,Bu=null;const s0=k({},[Mt,Ut,le],Au);let Lt=k({},["mi","mo","mn","ms","mtext"]),Ot=k({},["annotation-xml"]);const a0=k({},["title","style","font","a","script"]);let pt=null;const c0=["application/xhtml+xml","text/html"],l0="text/html";let $=null,ze=null;const d0=u.createElement("form"),wr=function(l){return l instanceof RegExp||l instanceof Function},Mu=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ze&&ze===l)){if((!l||typeof l!="object")&&(l={}),l=ce(l),pt=c0.indexOf(l.PARSER_MEDIA_TYPE)===-1?l0:l.PARSER_MEDIA_TYPE,$=pt==="application/xhtml+xml"?Au:St,P=te(l,"ALLOWED_TAGS")?k({},l.ALLOWED_TAGS,$):pr,z=te(l,"ALLOWED_ATTR")?k({},l.ALLOWED_ATTR,$):br,Bu=te(l,"ALLOWED_NAMESPACES")?k({},l.ALLOWED_NAMESPACES,Au):s0,Fu=te(l,"ADD_URI_SAFE_ATTR")?k(ce(Er),l.ADD_URI_SAFE_ATTR,$):Er,yr=te(l,"ADD_DATA_URI_TAGS")?k(ce(vr),l.ADD_DATA_URI_TAGS,$):vr,Pe=te(l,"FORBID_CONTENTS")?k({},l.FORBID_CONTENTS,$):Cr,ft=te(l,"FORBID_TAGS")?k({},l.FORBID_TAGS,$):ce({}),ku=te(l,"FORBID_ATTR")?k({},l.FORBID_ATTR,$):ce({}),Ne=te(l,"USE_PROFILES")?l.USE_PROFILES:!1,gr=l.ALLOW_ARIA_ATTR!==!1,Du=l.ALLOW_DATA_ATTR!==!1,mr=l.ALLOW_UNKNOWN_PROTOCOLS||!1,Ar=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Le=l.SAFE_FOR_TEMPLATES||!1,Ft=l.SAFE_FOR_XML!==!1,we=l.WHOLE_DOCUMENT||!1,Oe=l.RETURN_DOM||!1,Rt=l.RETURN_DOM_FRAGMENT||!1,Bt=l.RETURN_TRUSTED_TYPE||!1,Tu=l.FORCE_BODY||!1,xr=l.SANITIZE_DOM!==!1,_r=l.SANITIZE_NAMED_PROPS||!1,Iu=l.KEEP_CONTENT!==!1,ht=l.IN_PLACE||!1,hr=l.ALLOWED_URI_REGEXP||nr,$e=l.NAMESPACE||le,Lt=l.MATHML_TEXT_INTEGRATION_POINTS||Lt,Ot=l.HTML_INTEGRATION_POINTS||Ot,R=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&wr(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(R.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&wr(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(R.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(R.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Du=!1),Rt&&(Oe=!0),Ne&&(P=k({},er),z=[],Ne.html===!0&&(k(P,Jn),k(z,tr)),Ne.svg===!0&&(k(P,_u),k(z,vu),k(z,Tt)),Ne.svgFilters===!0&&(k(P,Cu),k(z,vu),k(z,Tt)),Ne.mathMl===!0&&(k(P,yu),k(z,ur),k(z,Tt))),l.ADD_TAGS&&(typeof l.ADD_TAGS=="function"?Ue.tagCheck=l.ADD_TAGS:(P===pr&&(P=ce(P)),k(P,l.ADD_TAGS,$))),l.ADD_ATTR&&(typeof l.ADD_ATTR=="function"?Ue.attributeCheck=l.ADD_ATTR:(z===br&&(z=ce(z)),k(z,l.ADD_ATTR,$))),l.ADD_URI_SAFE_ATTR&&k(Fu,l.ADD_URI_SAFE_ATTR,$),l.FORBID_CONTENTS&&(Pe===Cr&&(Pe=ce(Pe)),k(Pe,l.FORBID_CONTENTS,$)),Iu&&(P["#text"]=!0),we&&k(P,["html","head","body"]),P.table&&(k(P,["tbody"]),delete ft.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=l.TRUSTED_TYPES_POLICY,v=m.createHTML("")}else m===void 0&&(m=Wa(p,r)),m!==null&&typeof v=="string"&&(v=m.createHTML(""));j&&j(l),ze=l}},kr=k({},[..._u,...Cu,...Na]),Dr=k({},[...yu,...Pa]),f0=function(l){let b=C(l);(!b||!b.tagName)&&(b={namespaceURI:$e,tagName:"template"});const A=St(l.tagName),F=St(b.tagName);return Bu[l.namespaceURI]?l.namespaceURI===Ut?b.namespaceURI===le?A==="svg":b.namespaceURI===Mt?A==="svg"&&(F==="annotation-xml"||Lt[F]):!!kr[A]:l.namespaceURI===Mt?b.namespaceURI===le?A==="math":b.namespaceURI===Ut?A==="math"&&Ot[F]:!!Dr[A]:l.namespaceURI===le?b.namespaceURI===Ut&&!Ot[F]||b.namespaceURI===Mt&&!Lt[F]?!1:!Dr[A]&&(a0[A]||!kr[A]):!!(pt==="application/xhtml+xml"&&Bu[l.namespaceURI]):!1},se=function(l){it(t.removed,{element:l});try{C(l).removeChild(l)}catch{D(l)}},ke=function(l,b){try{it(t.removed,{attribute:b.getAttributeNode(l),from:b})}catch{it(t.removed,{attribute:null,from:b})}if(b.removeAttribute(l),l==="is")if(Oe||Rt)try{se(b)}catch{}else try{b.setAttribute(l,"")}catch{}},Sr=function(l){let b=null,A=null;if(Tu)l="<remove></remove>"+l;else{const M=xu(l,/^[\r\n\t ]+/);A=M&&M[0]}pt==="application/xhtml+xml"&&$e===le&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const F=m?m.createHTML(l):l;if($e===le)try{b=new g().parseFromString(F,pt)}catch{}if(!b||!b.documentElement){b=S.createDocument($e,"template",null);try{b.documentElement.innerHTML=Ru?v:F}catch{}}const q=b.body||b.documentElement;return l&&A&&q.insertBefore(u.createTextNode(A),q.childNodes[0]||null),$e===le?oe.call(b,we?"html":"body")[0]:we?b.documentElement:q},Tr=function(l){return U.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Uu=function(l){return l instanceof f&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof d)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Ir=function(l){return typeof s=="function"&&l instanceof s};function de(_,l,b){Dt(_,A=>{A.call(t,l,b,ze)})}const Fr=function(l){let b=null;if(de(L.beforeSanitizeElements,l,null),Uu(l))return se(l),!0;const A=$(l.nodeName);if(de(L.uponSanitizeElement,l,{tagName:A,allowedTags:P}),Ft&&l.hasChildNodes()&&!Ir(l.firstElementChild)&&Y(/<[/\w!]/g,l.innerHTML)&&Y(/<[/\w!]/g,l.textContent)||l.nodeType===ct.progressingInstruction||Ft&&l.nodeType===ct.comment&&Y(/<[/\w]/g,l.data))return se(l),!0;if(!(Ue.tagCheck instanceof Function&&Ue.tagCheck(A))&&(!P[A]||ft[A])){if(!ft[A]&&Br(A)&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,A)||R.tagNameCheck instanceof Function&&R.tagNameCheck(A)))return!1;if(Iu&&!Pe[A]){const F=C(l)||l.parentNode,q=y(l)||l.childNodes;if(q&&F){const M=q.length;for(let W=M-1;W>=0;--W){const fe=E(q[W],!0);fe.__removalCount=(l.__removalCount||0)+1,F.insertBefore(fe,T(l))}}}return se(l),!0}return l instanceof a&&!f0(l)||(A==="noscript"||A==="noembed"||A==="noframes")&&Y(/<\/no(script|embed|frames)/i,l.innerHTML)?(se(l),!0):(Le&&l.nodeType===ct.text&&(b=l.textContent,Dt([lt,dt,Me],F=>{b=ot(b,F," ")}),l.textContent!==b&&(it(t.removed,{element:l.cloneNode()}),l.textContent=b)),de(L.afterSanitizeElements,l,null),!1)},Rr=function(l,b,A){if(xr&&(b==="id"||b==="name")&&(A in u||A in d0))return!1;if(!(Du&&!ku[b]&&Y(xe,b))){if(!(gr&&Y(wu,b))){if(!(Ue.attributeCheck instanceof Function&&Ue.attributeCheck(b,l))){if(!z[b]||ku[b]){if(!(Br(l)&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,l)||R.tagNameCheck instanceof Function&&R.tagNameCheck(l))&&(R.attributeNameCheck instanceof RegExp&&Y(R.attributeNameCheck,b)||R.attributeNameCheck instanceof Function&&R.attributeNameCheck(b,l))||b==="is"&&R.allowCustomizedBuiltInElements&&(R.tagNameCheck instanceof RegExp&&Y(R.tagNameCheck,A)||R.tagNameCheck instanceof Function&&R.tagNameCheck(A))))return!1}else if(!Fu[b]){if(!Y(hr,ot(A,fr,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&l!=="script"&&Ma(A,"data:")===0&&yr[l])){if(!(mr&&!Y(r0,ot(A,fr,"")))){if(A)return!1}}}}}}}return!0},Br=function(l){return l!=="annotation-xml"&&xu(l,i0)},Mr=function(l){de(L.beforeSanitizeAttributes,l,null);const{attributes:b}=l;if(!b||Uu(l))return;const A={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let F=b.length;for(;F--;){const q=b[F],{name:M,namespaceURI:W,value:fe}=q,He=$(M),Lu=fe;let H=M==="value"?Lu:Ua(Lu);if(A.attrName=He,A.attrValue=H,A.keepAttr=!0,A.forceKeepAttr=void 0,de(L.uponSanitizeAttribute,l,A),H=A.attrValue,_r&&(He==="id"||He==="name")&&(ke(M,l),H=o0+H),Ft&&Y(/((--!?|])>)|<\/(style|title|textarea)/i,H)){ke(M,l);continue}if(He==="attributename"&&xu(H,"href")){ke(M,l);continue}if(A.forceKeepAttr)continue;if(!A.keepAttr){ke(M,l);continue}if(!Ar&&Y(/\/>/i,H)){ke(M,l);continue}Le&&Dt([lt,dt,Me],Lr=>{H=ot(H,Lr," ")});const Ur=$(l.nodeName);if(!Rr(Ur,He,H)){ke(M,l);continue}if(m&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!W)switch(p.getAttributeType(Ur,He)){case"TrustedHTML":{H=m.createHTML(H);break}case"TrustedScriptURL":{H=m.createScriptURL(H);break}}if(H!==Lu)try{W?l.setAttributeNS(W,M,H):l.setAttribute(M,H),Uu(l)?se(l):Kn(t.removed)}catch{ke(M,l)}}de(L.afterSanitizeAttributes,l,null)},h0=function _(l){let b=null;const A=Tr(l);for(de(L.beforeSanitizeShadowDOM,l,null);b=A.nextNode();)de(L.uponSanitizeShadowNode,b,null),Fr(b),Mr(b),b.content instanceof i&&_(b.content);de(L.afterSanitizeShadowDOM,l,null)};return t.sanitize=function(_){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,A=null,F=null,q=null;if(Ru=!_,Ru&&(_="<!-->"),typeof _!="string"&&!Ir(_))if(typeof _.toString=="function"){if(_=_.toString(),typeof _!="string")throw st("dirty is not a string, aborting")}else throw st("toString is not a function");if(!t.isSupported)return _;if(Su||Mu(l),t.removed=[],typeof _=="string"&&(ht=!1),ht){if(_.nodeName){const fe=$(_.nodeName);if(!P[fe]||ft[fe])throw st("root node is forbidden and cannot be sanitized in-place")}}else if(_ instanceof s)b=Sr("<!---->"),A=b.ownerDocument.importNode(_,!0),A.nodeType===ct.element&&A.nodeName==="BODY"||A.nodeName==="HTML"?b=A:b.appendChild(A);else{if(!Oe&&!Le&&!we&&_.indexOf("<")===-1)return m&&Bt?m.createHTML(_):_;if(b=Sr(_),!b)return Oe?null:Bt?v:""}b&&Tu&&se(b.firstChild);const M=Tr(ht?_:b);for(;F=M.nextNode();)Fr(F),Mr(F),F.content instanceof i&&h0(F.content);if(ht)return _;if(Oe){if(Rt)for(q=X.call(b.ownerDocument);b.firstChild;)q.appendChild(b.firstChild);else q=b;return(z.shadowroot||z.shadowrootmode)&&(q=Ee.call(n,q,!0)),q}let W=we?b.outerHTML:b.innerHTML;return we&&P["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&Y(rr,b.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+W),Le&&Dt([lt,dt,Me],fe=>{W=ot(W,fe," ")}),m&&Bt?m.createHTML(W):W},t.setConfig=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mu(_),Su=!0},t.clearConfig=function(){ze=null,Su=!1},t.isValidAttribute=function(_,l,b){ze||Mu({});const A=$(_),F=$(l);return Rr(A,F,b)},t.addHook=function(_,l){typeof l=="function"&&it(L[_],l)},t.removeHook=function(_,l){if(l!==void 0){const b=Ra(L[_],l);return b===-1?void 0:Ba(L[_],b,1)[0]}return Kn(L[_])},t.removeHooks=function(_){L[_]=[]},t.removeAllHooks=function(){L=or()},t}var Za=sr();const Xa="Olá! Sou o Agente Consultor. Em qual assunto posso ajudar você hoje?",ar=[{id:"process-efficiency",branchId:"process-efficiency",label:"Eficiência de Processo",order:1,active:!0,questions:[]},{id:"failure-modes",branchId:"failure-modes",label:"Modos de Falha",order:2,active:!0,questions:[]},{id:"network-performance",branchId:"network-performance",label:"Performance de Rede",order:3,active:!0,questions:[]},{id:"tactical-management-aging",branchId:"tactical-management-aging",label:"Gestão tática (Aging)",order:4,active:!0,questions:[]}],Ka=e=>`Certo! Reuni abaixo as principais dúvidas sobre ${e}. Escolha uma delas ou faça sua pergunta.`,Ja="http://consultant-agent-alb-306464826.eu-west-1.elb.amazonaws.com/consultant/api/v1";async function e0(){try{const e=await fetch(`${Ja}/branches`,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Erro ao buscar branches do consultor: ${e.status}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Formato inesperado da API de branches do consultor.");const u=t.map((n,r)=>t0(n,r)).filter(n=>!!n);return u.length===0?[...ar]:u.sort((n,r)=>{const i=(n.order??0)-(r.order??0);return i!==0?i:n.label.localeCompare(r.label)})}catch(e){return console.error("[ConsultantAgent] Falha ao carregar branches, usando mocks.",e),[...ar]}}function t0(e,t){if(!e||typeof e!="object")return null;const u=e;if(!(u.active!==!1))return null;const r=typeof u.branchId=="string"?u.branchId:"",i=typeof u.label=="string"?u.label:"";if(!r||!i)return null;const s=(Array.isArray(u.questions)?u.questions:[]).map(a=>u0(a)).filter(a=>!!a);return{id:typeof u.id=="string"&&u.id?u.id:r,branchId:r,label:i,businessObjective:typeof u.businessObjective=="string"?u.businessObjective:void 0,order:typeof u.order=="number"?u.order:typeof u.order=="string"?Number(u.order):t+1,active:!0,questions:s}}function u0(e){if(!e||typeof e!="object")return null;const t=e;if(!(t.active!==!1))return null;const n=typeof t.questionId=="string"?t.questionId:"",r=typeof t.prompt=="string"?t.prompt:"";return!n||!r?null:{questionId:n,prompt:r,level:typeof t.level=="string"?t.level:void 0,levelLabel:typeof t.levelLabel=="string"?t.levelLabel:void 0,expectedResponse:typeof t.expectedResponse=="string"?t.expectedResponse:void 0,order:typeof t.order=="number"?t.order:typeof t.order=="string"?Number(t.order):void 0,active:!0}}const It=class It extends Xe{constructor(){super(...arguments),this.open=!1,this.message="",this.titleText="RIO Insight",this.buttonLabel="RIO Insight",this.placeholder="Pergunte alguma coisa",this.accentColor="#008B9A",this.floatingButtonOffset=32,this.apiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.randomizedSuggestions=[],this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar={height:0,top:0,visible:!1},this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.deleteConversationTarget=null,this.renameConversationTarget=null,this.shortAnswerEnabled=!0,this.newConversationConfirmOpen=!1,this.conversationActionError=null,this.loadingLabelInternal="Rio Insight está respondendo...",this.loadingTimerSlow=null,this.loadingTimerTimeout=null,this.refreshConversationsAfterResponse=!1,this.activeConversationTitle=null,this.headerActions=[],this.homeUrl="",this.consultantAgentVisible=!1,this.consultantAgentIntro=Xa,this.consultantAgentOptions=[],this.showSuggestions=!0,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.pendingConversationAction=null,this.conversationScrollbarRaf=null,this.rioClient=null,this.rioUnsubscribe=null,this.loadingTimer=null,this.currentConversationId=null,this.conversationCounter=0,this.conversationUserId=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.floatingButtonDragState=null,this.floatingButtonDragged=!1,this.suppressFloatingButtonClick=!1,this.markdownRenderer=new K({html:!1,linkify:!0,breaks:!0}).use(Sa),this.conversations=[]}get loadingLabel(){return this.loadingLabelInternal}inferUserIdFromToken(){const t=this.rioToken.trim();if(!t||!t.includes("."))return null;const[,u]=t.split(".");try{const n=JSON.parse(atob(u.replace(/-/g,"+").replace(/_/g,"/"))),r=(n==null?void 0:n.userId)??(n==null?void 0:n.user_id)??(n==null?void 0:n.sub)??(n==null?void 0:n.id)??(n==null?void 0:n.email)??(n==null?void 0:n.username);if(r&&typeof r=="string")return r.replace(/[^a-zA-Z0-9_:-]/g,"")}catch{return null}return null}repairConversationId(t){if(!t||t.includes(":"))return t;const u=t.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);if(!u||u.index===void 0)return t;const n=u[0],r=t.slice(0,u.index).replace(/[-:]?$/,""),i=t.slice(u.index+n.length);return`${r?`${r}:`:""}${n}${i}`}randomId(t){const u="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let r=0;r<t;r+=1)n+=u.charAt(Math.floor(Math.random()*u.length));return n}clamp(t,u,n){return Math.min(Math.max(t,u),n)}get suggestions(){return this.randomizedSuggestions}parseSuggestions(t){return t?t.split("|").map(u=>u.trim()).filter(Boolean):[]}pickRandomSuggestions(t,u){if(t.length<=u)return[...t];const n=[...t];for(let r=n.length-1;r>0;r-=1){const i=Math.floor(Math.random()*(r+1));[n[r],n[i]]=[n[i],n[r]]}return n.slice(0,u)}willUpdate(t){super.willUpdate(t),t.has("suggestionsSource")&&(this.randomizedSuggestions=this.pickRandomSuggestions(this.parseSuggestions(this.suggestionsSource),3))}updated(t){super.updated(t),this.style.setProperty("--accent-color",this.accentColor),(t.has("isFullscreen")||t.has("showConversations")||t.has("conversations"))&&this.enqueueConversationScrollbarMeasure(),(t.has("messages")||t.has("isLoading")&&this.isLoading||t.has("open")&&this.open||t.has("isFullscreen")&&this.isFullscreen)&&this.scrollConversationToBottom()}firstUpdated(){this.enqueueConversationScrollbarMeasure(),this.bootstrapConsultantAgent()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.teardownRioClient(),this.clearLoadingGuard()}async bootstrapConsultantAgent(){try{this.consultantAgentOptions=await e0()}catch(t){console.error("[RioAssist][consultant] erro ao carregar opções do agente consultor",t),this.consultantAgentOptions=[]}}get filteredConversations(){const t=this.conversationSearch.trim().toLowerCase();return t?this.conversations.filter(u=>u.title.toLowerCase().includes(t)):this.conversations}get hasActiveConversation(){return this.messages.length>0}handleFloatingButtonClick(t){if(this.suppressFloatingButtonClick){t.preventDefault();return}this.togglePanel()}handleFloatingButtonPointerDown(t){const u=t.currentTarget;u.setPointerCapture(t.pointerId),this.floatingButtonDragState={pointerId:t.pointerId,startY:t.clientY,startOffset:this.floatingButtonOffset,buttonHeight:u.getBoundingClientRect().height},this.floatingButtonDragged=!1}handleFloatingButtonPointerMove(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const{startY:u,startOffset:n,buttonHeight:r}=this.floatingButtonDragState,i=t.clientY-u,o=window.innerHeight||this.getBoundingClientRect().height||0,s=12,a=Math.max(s,o-r-s);this.floatingButtonOffset=this.clamp(n-i,s,a),this.floatingButtonDragged=this.floatingButtonDragged||Math.abs(i)>3,t.preventDefault()}handleFloatingButtonPointerUp(t){this.finishFloatingButtonDrag(t)}handleFloatingButtonPointerCancel(t){this.finishFloatingButtonDrag(t)}finishFloatingButtonDrag(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const u=t.currentTarget;u&&u.hasPointerCapture(t.pointerId)&&u.releasePointerCapture(t.pointerId),this.floatingButtonDragged&&(this.suppressFloatingButtonClick=!0,window.setTimeout(()=>{this.suppressFloatingButtonClick=!1},0)),this.floatingButtonDragState=null,this.floatingButtonDragged=!1}togglePanel(){if(this.isFullscreen){this.exitFullscreen(!1);return}this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.isFullscreen=!1,this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0,this.requestConversationHistory()}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){if(this.showConversations=!this.showConversations,!this.showConversations){this.conversationMenuId=null;return}this.requestConversationHistory()}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}toggleShortAnswers(){this.shortAnswerEnabled=!this.shortAnswerEnabled}handleConsultantAgentOpen(){this.consultantAgentVisible||(this.consultantAgentVisible=!0),this.showSuggestions=!1,this.consultantAgentOptions.length===0&&this.bootstrapConsultantAgent()}handleConsultantAgentOption(t){var s;const u=t.label.trim();if(!u)return;const n=((s=t.questions)==null?void 0:s.filter(a=>a&&typeof a.prompt=="string"&&typeof a.questionId=="string"))??[];if(this.messages.length===0){const a=this.createMessage("assistant",this.consultantAgentIntro);this.messages=[...this.messages,a]}const r=this.createMessage("user",u),i=this.randomId(12),o=this.createMessage("assistant",Ka(u),{id:i,topicId:t.branchId??t.id,topicLabel:u,questions:n});this.messages=[...this.messages,r,o],this.consultantAgentVisible=!1,this.errorMessage="",this.showNewConversationShortcut=!0,this.showSuggestions=!1,this.activeConsultantFollowUpId=i,this.activeConsultantBranchId=t.branchId??t.id,this.requestUpdate(),this.scrollConversationToBottom()}async handleConsultantFollowUpQuestion(t){this.activeConsultantFollowUpId=null;const u=this.activeConsultantBranchId,n={consultantContext:{branchId:u??null,branchLabel:this.lookupConsultantBranchLabel(u),questionId:t.questionId,questionLevel:t.level??null},isConsultantAgent:!0};await this.processMessage(t.prompt,n)}handleConversationSelect(t){t&&(this.showConversations=!1,this.conversationMenuId=null,this.errorMessage="",this.currentConversationId=t,this.activeConversationTitle=this.lookupConversationTitle(t),console.info("[RioAssist][history] carregando conversa",t),this.requestConversationHistory(t))}handleConversationSearch(t){this.conversationSearch=t.target.value}handleConversationMenuToggle(t,u){if(t.stopPropagation(),this.conversationMenuId===u){this.conversationMenuId=null;return}const n=t.currentTarget,r=this.renderRoot.querySelector(".conversations-panel__surface");if(n&&r){const i=n.getBoundingClientRect(),s=r.getBoundingClientRect().bottom-i.bottom;this.conversationMenuPlacement=s<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=u}handleConversationsPanelPointer(t){const u=t.target;!u.closest(".conversation-menu")&&!u.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(t,u){this.conversationMenuId=null;const n=this.conversations.findIndex(i=>i.id===u);if(n===-1)return;const r=this.conversations[n];if(t==="delete"){this.deleteConversationTarget={id:r.id,title:r.title,index:n};return}this.renameConversationTarget={id:r.id,title:r.title,index:n,draft:r.title}}handleHomeNavigation(){const t={url:this.homeUrl||null};this.dispatchEvent(new CustomEvent("rioassist:home",{detail:t,bubbles:!0,composed:!0,cancelable:!0}))&&this.homeUrl&&window.location.assign(this.homeUrl)}applyConversationRename(t,u){if(!t||!u)return;let n=!1;this.conversations=this.conversations.map(r=>r.id===t?(n=!0,{...r,title:u}):r),n&&this.currentConversationId===t&&(this.activeConversationTitle=u)}applyConversationDeletion(t){if(!t)return;const u=this.currentConversationId===t,n=this.conversations.filter(r=>r.id!==t);n.length!==this.conversations.length&&(this.conversations=n,u&&(this.currentConversationId=null,this.activeConversationTitle=null,this.messages=[]))}restoreConversationSnapshot(t,u){if(!t||this.conversations.some(o=>o.id===t.id))return;const r=[...this.conversations],i=u>=0&&u<=r.length?u:r.length;r.splice(i,0,t),this.conversations=r}async confirmDeleteConversation(){const t=this.deleteConversationTarget;if(!t)return;const u=this.conversations[t.index]??this.conversations.find(i=>i.id===t.id)??{id:t.id,title:t.title,updatedAt:new Date().toISOString()},n=this.currentConversationId===t.id;if(this.pendingConversationAction={action:"delete",conversationId:t.id,originalTitle:t.title,index:t.index,snapshot:u,messagesSnapshot:n?[...this.messages]:void 0,wasActive:n},await this.dispatchConversationAction("delete",{id:t.id,title:t.title},t.index)){this.deleteConversationTarget=null;return}this.pendingConversationAction=null}cancelDeleteConversation(){this.deleteConversationTarget=null}handleRenameDraft(t){this.renameConversationTarget&&(this.renameConversationTarget={...this.renameConversationTarget,draft:t.target.value})}async confirmRenameConversation(){const t=this.renameConversationTarget;if(!t)return;const u=t.draft.trim();if(!u)return;if(this.pendingConversationAction={action:"rename",conversationId:t.id,originalTitle:t.title,index:t.index,newTitle:u},await this.dispatchConversationAction("rename",{id:t.id,title:u},t.index,u)){this.renameConversationTarget=null;return}this.pendingConversationAction=null}cancelRenameConversation(){this.renameConversationTarget=null}cancelConversationActionError(){this.conversationActionError=null,this.pendingConversationAction=null}async retryConversationAction(){const t=this.conversationActionError;if(!t)return;const u=typeof t.index=="number"?t.index:this.conversations.findIndex(i=>i.id===t.conversationId),n=u>=0?u:this.conversations.length>0?this.conversations.length-1:0,r=t.snapshot??this.conversations.find(i=>i.id===t.conversationId)??{id:t.conversationId,title:t.originalTitle,updatedAt:new Date().toISOString()};this.pendingConversationAction={action:t.action,conversationId:t.conversationId,originalTitle:t.originalTitle,index:n,newTitle:t.newTitle,snapshot:r,messagesSnapshot:t.messagesSnapshot,wasActive:t.wasActive},this.conversationActionError=null,await this.dispatchConversationAction(t.action,{id:t.conversationId,title:t.newTitle??t.originalTitle},n,t.newTitle)}async dispatchConversationAction(t,u,n,r){const i=t==="rename"?"rioassist:conversation-rename":"rioassist:conversation-delete",o={id:u.id,title:u.title,index:n,action:t};return this.dispatchEvent(new CustomEvent(i,{detail:o,bubbles:!0,composed:!0,cancelable:!0}))?t==="delete"?await this.syncConversationDeleteBackend(u.id):t==="rename"&&r?await this.syncConversationRenameBackend(u.id,r):!1:!1}async syncConversationRenameBackend(t,u){try{const n=this.ensureRioClient();return console.info("[RioAssist][ws] enviando renameConversation",{conversationId:t,newTitle:u}),await n.renameConversation(t,u),this.applyConversationRename(t,u),this.conversationHistoryError="",!0}catch(n){return console.error("[RioAssist][history] erro ao renomear conversa",n),this.conversationHistoryError=n instanceof Error&&n.message?n.message:"Nao foi possivel renomear a conversa.",!1}}async syncConversationDeleteBackend(t){try{return await this.ensureRioClient().deleteConversation(t),this.applyConversationDeletion(t),this.conversationHistoryError="",!0}catch(u){return console.error("[RioAssist][history] erro ao excluir conversa",u),this.conversationHistoryError=u instanceof Error&&u.message?u.message:"Nao foi possivel excluir a conversa.",!1}}handleConversationSystemAction(t){const u=(t.action??"").toLowerCase();if(u==="conversationrenamed"){const n=t.data,r=this.repairConversationId(this.extractString(n,["conversationId","id"])??""),i=this.extractString(n,["newTitle","title"]);return r&&i&&(this.applyConversationRename(r,i),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===r&&this.pendingConversationAction.action==="rename"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}if(u==="conversationdeleted"){const n=t.data,r=this.repairConversationId(this.extractString(n,["conversationId","id"])??"");return r&&(this.applyConversationDeletion(r),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===r&&this.pendingConversationAction.action==="delete"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}return u==="processing"}handleConversationActionError(t){if((t.action??"").toLowerCase()!=="error")return!1;const n=t.data;console.error("[RioAssist][ws] erro em acao de conversa recebido do backend",{text:t.text,data:n,raw:t.raw});const r=this.extractString(n,["error","message","detail","description"])||(typeof t.text=="string"&&t.text.trim()?t.text:"O agente retornou um erro ao processar a conversa."),i=this.pendingConversationAction;return i?(i.action==="rename"&&this.applyConversationRename(i.conversationId,i.originalTitle),i.action==="delete"&&(this.restoreConversationSnapshot(i.snapshot,i.index),i.wasActive&&(this.currentConversationId=i.conversationId,this.activeConversationTitle=i.originalTitle,this.messages=i.messagesSnapshot??this.messages)),this.conversationActionError={...i,message:r},this.pendingConversationAction=null,this.clearLoadingGuard(),this.isLoading=!1,!0):(this.errorMessage=r,this.clearLoadingGuard(),this.isLoading=!1,!0)}shouldIgnoreAssistantPayload(t){if(!t)return!1;const u=t.toLowerCase();return u==="processing"||u==="conversationrenamed"||u==="conversationdeleted"}extractString(t,u){if(!t||typeof t!="object")return null;for(const n of u){const r=t[n];if(typeof r=="string"&&r.trim())return r}return null}handleHeaderActionClick(t,u){const n={index:u,id:t.id??null,ariaLabel:t.ariaLabel??null,iconUrl:t.iconUrl};this.dispatchEvent(new CustomEvent("rioassist:header-action",{detail:n,bubbles:!0,composed:!0,cancelable:!0}))&&typeof t.onClick=="function"&&t.onClick()}handleCloseAction(){if(this.isFullscreen){this.exitFullscreen(!0);return}this.showConversations?this.closeConversationsPanel():this.closePanel()}enterFullscreen(){this.isFullscreen||(this.isFullscreen=!0,this.open=!1,this.showConversations=!1,this.requestConversationHistory())}exitFullscreen(t){this.isFullscreen&&(this.isFullscreen=!1,this.conversationMenuId=null,this.showNewConversationShortcut=!1,t&&(this.open=!0))}handleCreateConversation(){this.hasActiveConversation&&(this.newConversationConfirmOpen=!0)}confirmCreateConversation(){if(!this.hasActiveConversation){this.newConversationConfirmOpen=!1;return}this.newConversationConfirmOpen=!1,this.startNewConversation()}cancelCreateConversation(){this.newConversationConfirmOpen=!1}startNewConversation(){this.hasActiveConversation&&(this.clearLoadingGuard(),this.isLoading=!1,this.messages=[],this.message="",this.errorMessage="",this.showConversations=!1,this.teardownRioClient(),this.currentConversationId=null,this.activeConversationTitle=null,this.showNewConversationShortcut=!1,this.showSuggestions=!0,this.consultantAgentVisible=!1,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0})))}handleConversationListScroll(t){const u=t.currentTarget;u&&this.updateConversationScrollbar(u)}handleConversationScrollbarPointerDown(t){const u=t.currentTarget,n=this.renderRoot.querySelector(".conversation-list--sidebar");if(!u||!n)return;const r=u.getBoundingClientRect(),i=r.height*(this.conversationScrollbar.height/100),o=Math.max(r.height-i,0),s=Math.max(n.scrollHeight-n.clientHeight,1),a=n.scrollTop/s*o,c=t.clientY-r.top,d=c>=a&&c<=a+i,f=d?a:Math.min(Math.max(c-i/2,0),o);d||(n.scrollTop=f/Math.max(o,1)*(n.scrollHeight-n.clientHeight),this.updateConversationScrollbar(n)),u.setPointerCapture(t.pointerId),this.conversationScrollbarDraggingId=t.pointerId,this.conversationScrollbarDragState={startY:t.clientY,startThumbTop:f,trackHeight:r.height,thumbHeight:i,list:n},t.preventDefault()}handleConversationScrollbarPointerMove(t){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==t.pointerId||!this.conversationScrollbarDragState)return;const{startY:u,startThumbTop:n,trackHeight:r,thumbHeight:i,list:o}=this.conversationScrollbarDragState,s=Math.max(r-i,0),a=t.clientY-u,c=Math.min(Math.max(n+a,0),s),d=o.scrollHeight-o.clientHeight;d>0&&(o.scrollTop=c/Math.max(s,1)*d,this.updateConversationScrollbar(o)),t.preventDefault()}handleConversationScrollbarPointerUp(t){if(this.conversationScrollbarDraggingId!==t.pointerId)return;const u=t.currentTarget;u==null||u.releasePointerCapture(t.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.updateConversationScrollbar()}))}updateConversationScrollbar(t){const u=t??this.renderRoot.querySelector(".conversation-list--sidebar");if(!u){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const{scrollHeight:n,clientHeight:r,scrollTop:i}=u;if(n<=r+1){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const o=r/n,s=Math.max(o*100,8),a=100-s,c=i/(n-r)*(a>0?a:0);this.conversationScrollbar={height:s,top:c,visible:!0}}async onSuggestionClick(t){await this.processMessage(t)}async handleSubmit(t){t.preventDefault(),await this.processMessage(this.message)}createMessage(t,u,n){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:t,text:u,html:this.renderMarkdown(u),timestamp:Date.now(),consultantFollowUp:n}}async processMessage(t,u=null){const n=t.trim();if(!n||this.isLoading)return;const r=this.shortAnswerEnabled?`Quero uma resposta curta sobre: ${n}`:n,i=n;this.currentConversationId||(this.currentConversationId=null,this.activeConversationTitle=null);const o=this.messages.length===0;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:n,apiBaseUrl:this.apiBaseUrl,token:this.rioToken,consultantContext:(u==null?void 0:u.consultantContext)??null,isConsultantAgent:(u==null?void 0:u.isConsultantAgent)??!1},bubbles:!0,composed:!0}));const s=this.createMessage("user",i);this.messages=[...this.messages,s],o&&(this.showNewConversationShortcut=!0,this.refreshConversationsAfterResponse=!0),this.message="",this.errorMessage="",this.isLoading=!0,this.startLoadingGuard();try{const a=this.ensureRioClient(),c=u&&(u.consultantContext||u.isConsultantAgent)?{isConsultantAgent:!!u.isConsultantAgent,consultantContext:u.consultantContext??null}:void 0;await a.sendMessage(r,this.currentConversationId,c)}catch(a){this.clearLoadingGuard(),this.isLoading=!1,this.errorMessage=a instanceof Error?a.message:"Nao foi possivel enviar a mensagem para o agente."}}ensureRioClient(){const t=this.rioToken.trim();if(!t)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");return(!this.rioClient||!this.rioClient.matchesToken(t))&&(this.teardownRioClient(),this.rioClient=new Ni(t),this.rioUnsubscribe=this.rioClient.onMessage(u=>{this.handleIncomingMessage(u)})),this.rioClient}handleIncomingMessage(t){if(this.isHistoryPayload(t)){this.logHistoryPayload(t),this.handleHistoryPayload(t.data);return}if(this.handleConversationSystemAction(t)||this.handleConversationActionError(t)||this.shouldIgnoreAssistantPayload(t.action))return;const u=this.extractConversationId(t.data);if(u&&(this.currentConversationId=u,this.syncActiveConversationTitle()),console.info("[RioAssist][ws] resposta de mensagem recebida",{action:t.action??"message",text:t.text,raw:t.raw,data:t.data}),t.action==="processing"){console.info("[RioAssist][ws] processando mensagem - aguardando resposta final");return}const n=this.createMessage("assistant",t.text);this.messages=[...this.messages,n],this.clearLoadingGuard(),this.isLoading=!1,this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1,this.requestConversationHistory())}teardownRioClient(){this.rioUnsubscribe&&(this.rioUnsubscribe(),this.rioUnsubscribe=null),this.rioClient&&(this.rioClient.close(),this.rioClient=null)}async requestConversationHistory(t){try{const u=this.ensureRioClient(),n=50;console.info("[RioAssist][history] solicitando historico de conversas",{conversationId:t??null,limit:n}),this.conversationHistoryError="",this.conversationHistoryLoading=!0,await u.requestHistory({conversationId:t,limit:n})}catch(u){console.error("[RioAssist][history] erro ao solicitar historico",u),this.conversationHistoryError=u instanceof Error&&u.message?u.message:"Nao foi possivel carregar as conversas.",this.conversationHistoryLoading=!1}}handleHistoryPayload(t){const u=this.extractHistoryEntries(t),n=this.extractConversationId(t);if(n!=null){this.applyMessageHistory(u,n);return}if(this.isMessageHistoryEntries(u)){this.applyMessageHistory(u);return}this.applyConversationHistoryFromEntries(u),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1)}isHistoryPayload(t){if(typeof t.action=="string"&&t.action.toLowerCase().includes("history"))return!0;const u=t.data;if(u&&typeof u=="object"){const n=u.action;if(typeof n=="string"&&n.toLowerCase().includes("history")||Array.isArray(u.history)||Array.isArray(u.conversations))return!0}return!1}logHistoryPayload(t){const u="[RioAssist][history] payload recebido do websocket";if(t.data!==null&&t.data!==void 0){console.info(u,t.data);return}console.info(u,t.raw)}applyConversationHistoryFromEntries(t){if(t.length===0){console.info("[RioAssist][history] payload sem itens para montar lista de conversas"),this.conversations=[],this.conversationHistoryLoading=!1,this.conversationHistoryError="";return}const u=new Map;t.forEach((r,i)=>{if(!r||typeof r!="object")return;const o=this.normalizeConversationItem(r,i),s=r.conversationId??r.conversationUUID??r.conversationUuid??r.uuid??r.id;if(s&&console.info("[RioAssist][history] conversa recebida do backend",{rawId:s,normalizedId:(o==null?void 0:o.id)??null,entry:r}),!o)return;const a=u.get(o.id);if(!a){u.set(o.id,o);return}const c=Date.parse(a.updatedAt),d=Date.parse(o.updatedAt);Number.isFinite(d)&&d>c&&u.set(o.id,o)});const n=Array.from(u.values()).sort((r,i)=>{const o=Date.parse(i.updatedAt)-Date.parse(r.updatedAt);return Number.isFinite(o)?o:0});this.conversations=n,this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.syncActiveConversationTitle(),console.info("[RioAssist][history] conversas normalizadas",n)}applyMessageHistory(t,u){if(t.length===0){console.info("[RioAssist][history] lista de mensagens vazia",{conversationId:u}),this.messages=[],this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.conversationHistoryLoading=!1;return}const n=t.flatMap((r,i)=>this.normalizeHistoryMessages(r,i));u&&(this.currentConversationId=u),this.messages=n,this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.showNewConversationShortcut=n.length>0,this.conversationHistoryLoading=!1,this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][history] mensagens carregadas",{conversationId:u??null,total:n.length})}extractHistoryEntries(t){if(Array.isArray(t))return t;if(t&&typeof t=="object"){const u=t,n=[u.history,u.conversations,u.data,u.items,u.messages];for(const r of n)if(Array.isArray(r))return r;if(u.data&&typeof u.data=="object"&&!Array.isArray(u.data)){const r=this.extractHistoryEntries(u.data);if(r.length>0)return r}}return[]}extractConversationId(t){if(t&&typeof t=="object"){const u=t,n=[u.conversationId,u.conversationUUID,u.conversationUuid,u.uuid,u.id];for(const r of n){if(r===null)return null;if(r!==void 0)return this.repairConversationId(String(r))}}}isMessageHistoryEntries(t){return t.some(u=>this.looksLikeMessageHistoryEntry(u))}looksLikeMessageHistoryEntry(t){if(!t||typeof t!="object")return!1;const u=t,n=u.role??u.sender??u.from??u.author??u.type;return!!(typeof n=="string"&&n.trim().length>0||typeof u.content=="string"||typeof u.message=="string"||typeof u.text=="string"||typeof u.response=="string"||Array.isArray(u.parts)&&u.parts.length>0)}normalizeConversationItem(t,u){const n=t.conversationId??t.conversationUUID??t.conversationUuid??t.uuid??t.id,r=n!=null?String(n):`history-${u+1}`,i=this.repairConversationId(r),o=t.title??t.name??t.topic??t.subject??t.question??t.query??t.message,s=typeof o=="string"&&o.trim().length>0?o.trim():`Conversa ${u+1}`,a=t.updatedAt??t.updated_at??t.lastMessageAt??t.last_message_at??t.createdAt??t.created_at??t.timestamp??t.date,c=this.toIsoString(a);return{id:i,title:s,updatedAt:c}}normalizeHistoryMessages(t,u){const n=[],r=t.message??t.question??t.query??t.text??t.content,i=typeof r=="string"?r.trim():"",o=t.response??t.answer??t.reply??t.completion??t.body??t.preview,s=typeof o=="string"?o.trim():"",a=t.id??t.messageId??t.uuid??t.conversationMessageId,c=a!=null?String(a):`history-${u+1}`,d=t.timestamp??t.createdAt??t.created_at??t.date??t.time,f=t.responseTimestamp??t.responseTime??t.responseDate??t.response_at??t.updatedAt??t.updated_at,g=this.parseTimestamp(d),p=this.parseTimestamp(f,g+1);if(s)i&&n.push({id:`${c}-user`,role:"user",text:i,html:this.renderMarkdown(i),timestamp:g}),n.push({id:`${c}-assistant`,role:"assistant",text:s,html:this.renderMarkdown(s),timestamp:p});else if(i)return[];if(n.length>0)return n;const h=this.normalizeSingleHistoryMessage(t,u);return h?[h]:[]}normalizeSingleHistoryMessage(t,u){const n=t.text??t.message??t.content??t.response??t.body??t.preview,r=typeof n=="string"&&n.trim().length>0?n:"";if(!r)return null;const i=this.normalizeRole(t.role??t.sender??t.from??t.author??t.type??t.direction),o=t.id??t.messageId??t.uuid??t.conversationMessageId,s=o!=null?String(o):`history-message-${u+1}`,a=t.timestamp??t.createdAt??t.created_at??t.updatedAt??t.updated_at??t.date??t.time,c=this.parseTimestamp(a);return{id:s,role:i,text:r,html:this.renderMarkdown(r),timestamp:c}}normalizeRole(t){if(typeof t=="string"){const u=t.toLowerCase();if(u.includes("user")||u.includes("client"))return"user";if(u.includes("assistant")||u.includes("agent")||u.includes("bot"))return"assistant"}return"assistant"}parseTimestamp(t,u){const n=Date.parse(this.toIsoString(t));return Number.isFinite(n)?n:Number.isFinite(u??NaN)?u:Date.now()}lookupConversationTitle(t){if(!t)return null;const u=this.conversations.find(n=>n.id===t);return u?u.title:null}lookupConsultantBranchLabel(t){if(!t)return null;const u=this.consultantAgentOptions.find(n=>n.branchId===t||n.id===t);return u?u.label:null}syncActiveConversationTitle(){if(!this.currentConversationId)return;const t=this.lookupConversationTitle(this.currentConversationId);t&&(this.activeConversationTitle=t)}toIsoString(t){if(typeof t=="string"||typeof t=="number"){const u=new Date(t);if(!Number.isNaN(u.getTime()))return u.toISOString()}return new Date().toISOString()}startLoadingGuard(){this.clearLoadingGuard(),this.loadingLabelInternal="RIO Insight está respondendo",this.loadingTimerSlow=window.setTimeout(()=>{this.loadingLabelInternal="RIO Insight continua respondendo",this.requestUpdate()},2e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="RIO Insight ainda está processando sua resposta. Peço que aguarde um pouco mais",this.requestUpdate()},6e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco",this.requestUpdate()},12e4)}clearLoadingGuard(){this.loadingTimer!==null&&(window.clearTimeout(this.loadingTimer),this.loadingTimer=null),this.loadingTimerSlow!==null&&(window.clearTimeout(this.loadingTimerSlow),this.loadingTimerSlow=null),this.loadingTimerTimeout!==null&&(window.clearTimeout(this.loadingTimerTimeout),this.loadingTimerTimeout=null)}scrollConversationToBottom(){Array.from(this.renderRoot.querySelectorAll(".panel-content")).forEach(u=>{requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight})})}renderMarkdown(t){const u=this.markdownRenderer.render(t),n=Za.sanitize(u,{ALLOWED_TAGS:["a","p","ul","ol","li","code","pre","strong","em","blockquote","table","thead","tbody","tr","th","td","del","hr","br","img","span","input"],ALLOWED_ATTR:["href","title","target","rel","src","alt","class","type","checked","disabled","aria-label"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["style","script"],USE_PROFILES:{html:!0}}),r=document.createElement("div");return r.innerHTML=n,r.querySelectorAll("a").forEach(i=>{i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer")}),r.querySelectorAll('input[type="checkbox"]').forEach(i=>{i.setAttribute("disabled",""),i.setAttribute("tabindex","-1")}),r.innerHTML}render(){return Ui(this)}};It.styles=oi,It.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0},conversations:{state:!0},conversationHistoryLoading:{type:Boolean,state:!0},activeConversationTitle:{state:!0},conversationHistoryError:{type:String,state:!0},deleteConversationTarget:{attribute:!1},renameConversationTarget:{attribute:!1},shortAnswerEnabled:{type:Boolean,state:!0},newConversationConfirmOpen:{type:Boolean,state:!0},conversationActionError:{attribute:!1},headerActions:{attribute:!1},homeUrl:{type:String,attribute:"data-home-url"},floatingButtonOffset:{type:Number,attribute:"data-floating-offset"},consultantAgentVisible:{type:Boolean,state:!0},consultantAgentIntro:{type:String,state:!0},consultantAgentOptions:{attribute:!1,state:!0},showSuggestions:{type:Boolean,state:!0},activeConsultantFollowUpId:{type:String,state:!0},activeConsultantBranchId:{type:String,state:!0}};let Eu=It;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",Eu);const cr={title:"Rio Insight",buttonLabel:"Rio Insight",placeholder:"Pergunte alguma coisa",suggestions:["Resumo da Frota","Frota Disponível","Chamados Abertos","Parados + Causas","Aguardando Peças","Principais Gargalos","Tempo por Concessionária","Tempo de Ciclo","Preventiva x Corretiva"],accentColor:"#008B9A",apiBaseUrl:"",rioToken:"",floatingOffset:32},lr="rio-assist-widget";function n0(e={}){const{target:t=document.body,...u}=e;let n=document.querySelector(lr);n||(n=document.createElement(lr),t.appendChild(n));const r=96,i=64,o=typeof window<"u"&&(window.innerHeight||document.documentElement.clientHeight)||0,s=u.floatingOffset??(o?Math.max(12,o-r-i):cr.floatingOffset),a={...cr,...u,floatingOffset:s};Object.entries(a).forEach(([c,d])=>{d!==void 0&&(n==null||n.setAttribute(`data-${c.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}`,Array.isArray(d)?d.join("|"):String(d)))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:n0},window.dispatchEvent(new Event("rio-assist-ready")))})();
