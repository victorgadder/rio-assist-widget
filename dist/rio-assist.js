(function(){"use strict";var Ae;var c=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,j=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),q=new WeakMap;let G=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(j&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(t,e))}return e}toString(){return this.cssText}};const ue=n=>new G(typeof n=="string"?n:n+"",void 0,D),Z=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new G(t,n,D)},ge=(n,e)=>{if(j)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},W=j?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ue(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fe,defineProperty:me,getOwnPropertyDescriptor:be,getOwnPropertyNames:ve,getOwnPropertySymbols:xe,getPrototypeOf:we}=Object,f=globalThis,J=f.trustedTypes,ye=J?J.emptyScript:"",H=f.reactiveElementPolyfillSupport,E=(n,e)=>n,L={toAttribute(n,e){switch(e){case Boolean:n=n?ye:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ee=(n,e)=>!fe(n,e),te={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&me(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=be(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){const l=i==null?void 0:i.call(this);o==null||o.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??te}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=we(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,s=[...ve(t),...xe(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(W(i))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:L).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){var o,r;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:L;this._$Em=i;const d=a.fromAttribute(t,l.type);this[i]=d??((r=this._$Ej)==null?void 0:r.get(i))??d,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const o=this.constructor,r=this[e];if(s??(s=o.getPropertyOptions(e)),!((s.hasChanged??ee)(r,t)||s.useDefault&&s.reflect&&r===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:l}=r,a=this[o];l!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[E("elementProperties")]=new Map,$[E("finalized")]=new Map,H==null||H({ReactiveElement:$}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,O=U.trustedTypes,se=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,ie="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ne="?"+m,Ce=`<${ne}>`,v=document,I=()=>v.createComment(""),_=n=>n===null||typeof n!="object"&&typeof n!="function",V=Array.isArray,$e=n=>V(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",z=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,re=/>/g,x=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,ce=/^(?:script|style|textarea|title)$/i,Se=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),u=Se(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),he=new WeakMap,y=v.createTreeWalker(v,129);function de(n,e){if(!V(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const Ee=(n,e)=>{const t=n.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",r=R;for(let l=0;l<t;l++){const a=n[l];let d,A,h=-1,g=0;for(;g<a.length&&(r.lastIndex=g,A=r.exec(a),A!==null);)g=r.lastIndex,r===R?A[1]==="!--"?r=oe:A[1]!==void 0?r=re:A[2]!==void 0?(ce.test(A[2])&&(i=RegExp("</"+A[2],"g")),r=x):A[3]!==void 0&&(r=x):r===x?A[0]===">"?(r=i??R,h=-1):A[1]===void 0?h=-2:(h=r.lastIndex-A[2].length,d=A[1],r=A[3]===void 0?x:A[3]==='"'?le:ae):r===le||r===ae?r=x:r===oe||r===re?r=R:(r=x,i=void 0);const b=r===x&&n[l+1].startsWith("/>")?" ":"";o+=r===R?a+Ce:h>=0?(s.push(d),a.slice(0,h)+ie+a.slice(h)+m+b):a+m+(h===-2?l:b)}return[de(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class B{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,r=0;const l=e.length-1,a=this.parts,[d,A]=Ee(e,t);if(this.el=B.createElement(d,s),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ie)){const g=A[r++],b=i.getAttribute(h).split(m),Y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:Y[2],strings:b,ctor:Y[1]==="."?Ie:Y[1]==="?"?_e:Y[1]==="@"?Re:Q}),i.removeAttribute(h)}else h.startsWith(m)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(ce.test(i.tagName)){const h=i.textContent.split(m),g=h.length-1;if(g>0){i.textContent=O?O.emptyScript:"";for(let b=0;b<g;b++)i.append(h[b],I()),y.nextNode(),a.push({type:2,index:++o});i.append(h[g],I())}}}else if(i.nodeType===8)if(i.data===ne)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(m,h+1))!==-1;)a.push({type:7,index:o}),h+=m.length-1}o++}}static createElement(e,t){const s=v.createElement("template");return s.innerHTML=e,s}}function S(n,e,t=n,s){var r,l;if(e===w)return e;let i=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const o=_(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=S(n,i._$AS(n,e.values),i,s)),e}class Ue{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??v).importNode(t,!0);y.currentNode=i;let o=y.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new M(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Be(o,this,e)),this._$AV.push(d),a=s[++l]}r!==(a==null?void 0:a.index)&&(o=y.nextNode(),r++)}return y.currentNode=v,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),_(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$e(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&_(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=B.createElement(de(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const r=new Ue(i,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new B(e)),t}k(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new M(this.O(I()),this.O(I()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(e,t=this,s,i){const o=this.strings;let r=!1;if(o===void 0)e=S(this,e,t,0),r=!_(e)||e!==this._$AH&&e!==w,r&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=S(this,l[s+a],t,a),d===w&&(d=this._$AH[a]),r||(r=!_(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}r&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ie extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class _e extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Re extends Q{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??p)===w)return;const s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const X=U.litHtmlPolyfillSupport;X==null||X(B,M),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");const Me=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new M(e.insertBefore(I(),o),o,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;let P=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}};P._$litElement$=!0,P.finalized=!0,(Ae=C.litElementHydrateSupport)==null||Ae.call(C,{LitElement:P});const F=C.litElementPolyfillSupport;F==null||F({LitElement:P}),(C.litElementVersions??(C.litElementVersions=[])).push("4.2.1");const Pe=Z`
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

  .conversations-panel--open {
    pointer-events: auto;
  }

  .conversations-panel__surface {
    width: 100%;
    height: 100%;
    background: #d0d8de;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transform: translateX(100%);
    transition: transform 0.35s ease;
  }

  .conversations-panel--open .conversations-panel__surface {
    transform: translateX(0);
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
  }

  .conversation-search input {
    border: none;
    background: transparent;
    flex: 1;
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
  }

  .conversation-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 6px;
    border-radius: 8px;
    color: #1f2f36;
    font-size: 15px;
    position: relative;
    height: 40px;
  }

  .conversation-item__text {
    flex: 1;
    padding-right: 16px;
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
`,Te=[Z`
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

  .canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .panel {
    --header-height: 128px;
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
    gap: 16px;
  }

  .message {
    border-radius: 16px;
    border: 1px solid #e4eaee;
    padding: 12px 16px;
    max-width: 90%;
    background: #fff;
    color: #1f2f36;
    font-size: 15px;
  }

  .message--user {
    align-self: flex-end;
    background: #e3f3f6;
    border-color: #cde6ea;
    color: #00596b;
  }

  .message time {
    display: block;
    font-size: 11px;
    margin-top: 6px;
    color: #8a98a4;
    text-align: right;
  }

  .typing {
    font-style: italic;
    opacity: 0.75;
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
    font-weight: 500;
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
    font-weight: 500;
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
  display: grid;
  place-items: center;
  color: #9ba5b2;
  font-size: 28px;
  font-weight: 600;
}
`,Pe];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne={ATTRIBUTE:1},Oe=n=>(...e)=>({_$litDirective$:n,values:e});class Qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=Oe(class extends Qe{constructor(n){var e;if(super(n),n.type!==Ne.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var s,i;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(e)}const t=n.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const r=!!e[o];r===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(r?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return w}}),ke=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB5ZQxCsJAEEX/rsbaI3gEvYE22ppO7DyCJ1BvoCdIFSNBGFOIaBBzg1whR0gpqLsuSWHnBBKI4G+mefyB+Z8B6pBD1C7KCg7wgusCSi0Bndxh9Wb2IP3GS84wN8t2d1rqMeZw3hCIMjuIVEorQhXyKOw7dCt8x98Wm7JPl+4TYiGho4k93HA8G8oLILN1rCHW2/25fMom3U8YDbCSPKAH0CrQwHxqjw74D7n+sevRqVOEZW+4o5Ck1Yo1mrFrKlTa0ISRVcVUpw2F8oZGq3yIpLLnUOtjeAMX/z7Yit+o3QAAAABJRU5ErkJggg==",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,Ye=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBvZPdCcIwFIVPqvjcETpCnUDzrA86ghOIG+gGbqIv4mPjBhmhI/goFhNv2qpNQfIjeCCQhHu++0MC/CgWEpwfihQjLHCHkEteBgHyc5FBsQIaGR2vqPTYQBJfAG5k0rQapRhgajZOgMmcny5rymaycrqStEo8IJwtWGUztpWzya6eA1XgnEGv51Z6I+d8341L/M1UdoVjP5b5mzV/lf0VEGq2ADHmNyDWbNQMUdGjiDB/ALa8zUbDFiOg9Kredz7KX/QESDR2d7Kg6IcAAAAASUVORK5CYII=",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,je=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBpZLfDYIwEMavqImPjOAIdQP6bIw6AhM4giMYR3ACEhOegQ3qBh2hvplIOItG6NXKn/glbY6745e7DwD+FPMl+SXbwgRCkqxAybXI3d6pDwAB2wNCRJNYmCvyTsCTLIQZS+whzAmdXm2ObJ4eGMudUO8J5qa5RHudK/jFHCD1gKfFARAX0CeGJ7kSr2moB1gtTXXTC6jg/AkDp6RbGApz519xrRKUH4BtoUu1eX5AMAig6SvjpboAEvqEePsNCKzxmPUz0ZisQD/j3RRnDeHYFqzYMZoAjLuap1kMXWID1hyjJ+SZQp3ORCa/AAAAAElFTkSuQmCC",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,De=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgBxZNNTsMwEIVnnBAqVuEG6Q16A8INeoOSFXRFkEpFVqRCaquqi7CA0hXhBNATUE4ANyBHyA4aKg+OU0QgxgKExNvkx8+fx89jgD8S6gb98NK2rKcdALZFCLacwOkuYxBHQTv5FqhzMnGZCdfCYqvGOWA4DnZ7b99MZTocnTWYibcFhHoMqD4K9jBbrG8SkCcsifgXdvrnvrai7uDiUTwcYd4eBu355/GjwcThAPdEAC9ZrR6FXlqpqNufNnOIWCFWQXIN83w4nCKiba09+8qtEZJblEpXoFG2UYukH6ChBCFREe4CEh0oOvBS6V+dZjVsKgDcooYO5Iucyt8VEGcwlzxk+6CRCawlfQSxEjSWAeODCNvtDKbHKojsMXH84jUxVgtXjj+fvDJJiTBjvsQZY8uEc9NBgzcZYquo4r09UAcRmPSLzs4b0iu3B2ogvVHQDkXzuZyDK5wOEaYGoxtVf6EOAj+QDBuN5azYxu8gH5Rf1PIl/De9AhTgnL0rAocOAAAAAElFTkSuQmCC",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,He=n=>u`
  <div
    class=${T({"conversations-panel":!0,"conversations-panel--open":n.showConversations})}
    aria-hidden=${!n.showConversations}
    @pointerdown=${e=>n.handleConversationsPanelPointer(e)}
  >
    <div class="conversations-panel__surface">
      <div class="conversation-search">
        <img class="search-icon" src=${De} alt="" aria-hidden="true" />
        <input
          type="text"
          placeholder="Buscar nas conversas"
          .value=${n.conversationSearch}
          @input=${e=>n.handleConversationSearch(e)}
        />
      </div>

      <div class="conversation-list">
        ${n.filteredConversations.map(e=>{const t=n.conversationMenuId===e.id;return u`
            <div class="conversation-item">
              <div class="conversation-item__text">
                ${e.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${s=>n.handleConversationMenuToggle(s,e.id)}
              >
                <img src=${ke} alt="" aria-hidden="true" />
              </button>
              ${t?u`
                    <div
                      class=${T({"conversation-menu":!0,"conversation-menu--above":n.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>n.handleConversationAction("rename",e.id)}
                      >
                        <img src=${Ye} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>n.handleConversationAction("delete",e.id)}
                      >
                        <img src=${je} alt="" aria_hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
      </div>
    </div>
  </div>
`,Le=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgB7Ze/T8JAFMcfxMVFq5OaGBsTJxccXEn/AAdGNvE/8C9QjP+AOybippuDDrpQdCT+ijpIRJowwICCMZFBk/O99iANob+urS73SV5ee717/XL37l0BkEgkklhJQAQwxhR0isPjbiKR6IIggQSiEA1dBm0BLcVFKT6HG9xIbBntBIUbEBUobptFSwctA1GAgTZZPJBIFcKCQeosPg7c3j3mQ5yG7gPtkDcZDl37+aiClaMq+EOD/4B+mN+Zd4vjuYuZVUIomVWwZmjSoSvNMu1QA02nHcqs/CqBx2xiX7FyRy9gYvlHyb/OY2henUEUFm5zkEiFxym5dXTTkHQRp8HQ0jROK/BcOB/cv93UzPtW+XFUCBKX49f3IEgySOfGWQWq+xeDexL3enwFd7tHTkP6p4zwURdIoJ1es2PO4Ex6Gb4/e+Z1HAgLbF+/mH5+bdX0Lf0B4kBYYD/vqgVryVuXTyCI6/KLz+BtDcZnp9CmYWJpDr6a76YJ4LqBhAS2Md9+MO8Ws2lY2cqannDYzV4UQQRmFemwZHisPYfneQiDV4H1oG6LU7e1UwHXmVVnw4FBFLQiCw4JUHmMnK09B3HAhY5apjwXkGHWmZtitg9Q3tYJI9Dze5CgPz0YfLgcbGB70WkMX8IShES0zLiKI/C5jm4H/gpbLuUCjsvHnoNh4SIpF1MgkUgkkkD8AgAi3WKqFnrYAAAAAElFTkSuQmCC",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,Ve=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dSxDYAgEAXQf8ZF3MAN1F53cAVHcBKH0F5HYATcwN7ipEShOoMkhpdAwg/kCg6AJDZ6BuWyMeS0auvCDjIEFrxA7iQnF0gsvi6aIEaHaqvBTnLPrh5irM10KxChi5hHSBEO/I7bRfNa4wXVNZu9du+AaIWcNuPbz87zDniHFEN+NgnmAsF0G91pmpecAAAAAElFTkSuQmCC",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,ze=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB5ZbBDYIwFIZfjd4dwRHqCD0aY4ybuIE6gpPghXhEJ7AbyAgMYKyPApZAkUIfMdH/QHr4838p7722AL8uBp7iYcThCdOPpgdIuRFJuhwDhRgL8NsMHSuB30u6HIGn5FJIYDowcfF7A7tCSYB51BqgpZZUQB5ed6DU3sXrDewC8wY2wpQ6YE3nYKlpbyA/RzMM3tpgciX2TY3UGygXIq4F5rC3p4COjIfmpFEsQtixDBtUPIhax+FroU411N04YXf9+zzFTGgWpgtdhZnWT9ImqHq6yOwwvWKw+OVdWOYs8wQ4Ej1VvZ4KqNBno32oj3i3xUAELKA3TAYL7ODb+u6DTwBzBxLBXIEJuk5AJBdgrXuHBpJCTZfiUy5/XTXL+6j/B70AdWmQ/S7ON+YAAAAASUVORK5CYII=",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,Xe=new URL("data:image/png;base64,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",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,Fe=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",c&&c.tagName.toUpperCase()==="SCRIPT"&&c.src||new URL("rio-assist.js",document.baseURI).href).href,Ke=n=>{const e=n.messages.length>0,t=u`
    <div class="hero-card">
      <img src=${Xe} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
    </div>
  `,s=u`
    <div class="conversation">
      ${n.messages.map(i=>u`
          <div
            class=${T({message:!0,"message--user":i.role==="user","message--assistant":i.role==="assistant"})}
          >
            <p>${i.text}</p>
            <time>
              ${new Date(i.timestamp).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}
            </time>
          </div>
        `)}
      ${n.isLoading?u`
            <div class="message message--assistant typing">
              <span>IA está respondendo...</span>
            </div>
          `:null}
    </div>
  `;return u`
    <div class="canvas">
      <button
        class="floating-button"
        style="background:${n.accentColor}"
        @click=${()=>n.togglePanel()}
        aria-expanded=${n.open}
      >
        <img src=${Le} alt="" aria-hidden="true" />
        <span>${n.buttonLabel}</span>
      </button>

      <aside class=${T({panel:!0,open:n.open})} role="dialog">
        <header class="panel-header">
          <div class="panel-header__top">
            <span class="panel-title">${n.titleText}</span>
            <button
              class="close-button"
              @click=${()=>n.handleCloseAction()}
              aria-label="Fechar RIO Assist"
            >
              ×
            </button>
          </div>
          <div class="panel-header__actions">
            <button
              class="conversations-button"
              type="button"
              @click=${()=>n.toggleConversationsPanel()}
            >
              <img src=${Ve} alt="" aria-hidden="true" />
              Minhas Conversas
            </button>
            <div class="panel-header__icons">
              ${n.showConversations?u`
                    <button
                      class="panel-header__icon-button conversations-plus-button"
                      type="button"
                      aria-label="Nova conversa"
                      @click=${()=>n.handleCreateConversation()}
                    >
                      <img src=${Fe} alt="" aria-hidden="true" />
                    </button>
                  `:null}
              <button
                class="panel-header__icon-button"
                type="button"
                aria-label="Expandir painel"
              >
                <img src=${ze} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        <div class="panel-body">
          <div
            class=${T({"panel-content":!0,"panel-content--empty":!e})}
          >
            ${e?s:t}
          </div>

          ${n.errorMessage?u`<p class="error-banner">${n.errorMessage}</p>`:null}

          <div class="panel-footer">
            ${n.suggestions.length>0?u`
                  <div class="suggestions-wrapper">
                    <p class="suggestions-label">Sugestoes de perguntas:</p>
                    <div class="suggestions">
                      ${n.suggestions.map(i=>u`
                          <button
                            class="suggestion"
                            type="button"
                            @click=${()=>n.onSuggestionClick(i)}
                          >
                            ${i}
                          </button>
                        `)}
                    </div>
                  </div>
                `:null}

            <form
              @submit=${i=>n.handleSubmit(i)}
              aria-busy=${n.isLoading}
            >
              <input
                type="text"
                placeholder=${n.placeholder}
                .value=${n.message}
                @input=${i=>{n.message=i.target.value}}
                ?disabled=${n.isLoading}
              />
            </form>

            <p class="footnote">
              IA pode cometer erros. Por isso lembre-se de conferir informacoes
              importantes.
            </p>
          </div>
        </div>

        ${He(n)}
      </aside>
    </div>
  `};new TextEncoder;const qe=async(n,e)=>{throw new Error("Configure VITE_BEDROCK_AGENT_RUNTIME_ARN antes de usar o agente.")},k=class k extends P{constructor(){super(...arguments),this.open=!1,this.message="",this.titleText="RIO Assist",this.buttonLabel="RIO Assist",this.placeholder="Pergunte alguma coisa",this.accentColor="#008B9A",this.apiBaseUrl="",this.suggestionsSource="",this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.conversations=Array.from({length:20}).map((e,t)=>({id:`${t+1}`,title:["Caminhões com problema na frota de veículos.","Próximas manutenções periódicas preventivas.","Quais revisões meu plano inclui?","Como automatizar preenchimento de odômetro.","Valor das peças da próxima revisão.","O que é revisão de assentamento?","Alertas críticos ativos.","Veículo superaquecendo, causas e recomendações.","Calibragem recomendada nos pneus do e-Delivery.","Quantos mil km trocar o óleo do motor.","Qual a vida útil da bateria Moura M100HE."][t%11],updatedAt:new Date(Date.now()-t*36e5).toISOString()}))}get suggestions(){return this.suggestionsSource?this.suggestionsSource.split("|").map(e=>e.trim()).filter(Boolean):[]}updated(){this.style.setProperty("--accent-color",this.accentColor)}get filteredConversations(){const e=this.conversationSearch.trim().toLowerCase();return e?this.conversations.filter(t=>t.title.toLowerCase().includes(e)):this.conversations}togglePanel(){this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){this.showConversations=!this.showConversations,this.showConversations||(this.conversationMenuId=null)}handleConversationSearch(e){this.conversationSearch=e.target.value}handleConversationMenuToggle(e,t){if(e.stopPropagation(),this.conversationMenuId===t){this.conversationMenuId=null;return}const s=e.currentTarget,i=this.renderRoot.querySelector(".conversations-panel__surface");if(s&&i){const o=s.getBoundingClientRect(),l=i.getBoundingClientRect().bottom-o.bottom;this.conversationMenuPlacement=l<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=t}handleConversationsPanelPointer(e){const t=e.target;!t.closest(".conversation-menu")&&!t.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(e,t){this.conversationMenuId=null;const s=this.conversations.find(o=>o.id===t);if(!s)return;const i=`${e==="rename"?"Renomear":"Excluir"} "${s.title}"`;console.info(`[Mock] ${i}`)}handleCloseAction(){this.showConversations?this.closeConversationsPanel():this.closePanel()}handleCreateConversation(){console.info("[Mock] Criar nova conversa")}async onSuggestionClick(e){await this.processMessage(e)}async handleSubmit(e){e.preventDefault(),await this.processMessage(this.message)}createMessage(e,t){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:e,text:t,timestamp:Date.now()}}async processMessage(e){const t=e.trim();if(!t||this.isLoading)return;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:t,apiBaseUrl:this.apiBaseUrl},bubbles:!0,composed:!0}));const s=this.createMessage("user",t);this.messages=[...this.messages,s],this.message="",this.errorMessage="",this.isLoading=!0;try{const i=await qe(t,this.sessionId);if(i.sessionId&&(this.sessionId=i.sessionId),i.text){const o=this.createMessage("assistant",i.text);this.messages=[...this.messages,o]}}catch(i){this.errorMessage=i instanceof Error?i.message:"Não foi possível obter resposta do agente."}finally{this.isLoading=!1}}render(){return Ke(this)}};k.styles=Te,k.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},sessionId:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0}};let K=k;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",K);const Ge={title:"RIO Assist",buttonLabel:"RIO Assist",placeholder:"Pergunte alguma coisa",suggestions:["Veículos com problemas","Valor das peças","Planos de manutenção"],accentColor:"#008B9A",apiBaseUrl:""},pe="rio-assist-widget";function Ze(n={}){const{target:e=document.body,...t}=n;let s=document.querySelector(pe);s||(s=document.createElement(pe),e.appendChild(s));const i={...Ge,...t};Object.entries(i).forEach(([o,r])=>{r!==void 0&&(s==null||s.setAttribute(`data-${o.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}`,Array.isArray(r)?r.join("|"):String(r)))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:Ze},window.dispatchEvent(new Event("rio-assist-ready")))})();
