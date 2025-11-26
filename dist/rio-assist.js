(function(){"use strict";var ve;var l=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,D=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),q=new WeakMap;let Z=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(D&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(t,e))}return e}toString(){return this.cssText}};const we=n=>new Z(typeof n=="string"?n:n+"",void 0,j),I=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new Z(t,n,j)},xe=(n,e)=>{if(D)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},W=D?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return we(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ce,defineProperty:Se,getOwnPropertyDescriptor:ye,getOwnPropertyNames:Ue,getOwnPropertySymbols:Ee,getPrototypeOf:Ie}=Object,b=globalThis,J=b.trustedTypes,$e=J?J.emptyScript:"",H=b.reactiveElementPolyfillSupport,$=(n,e)=>n,V={toAttribute(n,e){switch(e){case Boolean:n=n?$e:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ee=(n,e)=>!Ce(n,e),te={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Se(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=ye(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const c=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??te}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=Ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,s=[...Ue(t),...Ee(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(W(i))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:V).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r,o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=s.getPropertyOptions(i),a=typeof c.converter=="function"?{fromAttribute:c.converter}:((r=c.converter)==null?void 0:r.fromAttribute)!==void 0?c.converter:V;this._$Em=i;const h=a.fromAttribute(t,c.type);this[i]=h??((o=this._$Ej)==null?void 0:o.get(i))??h,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const r=this.constructor,o=this[e];if(s??(s=r.getPropertyOptions(e)),!((s.hasChanged??ee)(o,t)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:c}=o,a=this[r];c!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[$("elementProperties")]=new Map,U[$("finalized")]=new Map,H==null||H({ReactiveElement:U}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,Q=R.trustedTypes,se=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,ie="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ne="?"+m,Re=`<${ne}>`,x=document,B=()=>x.createComment(""),_=n=>n===null||typeof n!="object"&&typeof n!="function",F=Array.isArray,Be=n=>F(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,C=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,ce=/^(?:script|style|textarea|title)$/i,_e=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),u=_e(1),v=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),he=new WeakMap,S=x.createTreeWalker(x,129);function de(n,e){if(!F(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const ke=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=k;for(let c=0;c<t;c++){const a=n[c];let h,p,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===k?p[1]==="!--"?o=re:p[1]!==void 0?o=oe:p[2]!==void 0?(ce.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=C):p[3]!==void 0&&(o=C):o===C?p[0]===">"?(o=i??k,d=-1):p[1]===void 0?d=-2:(d=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?C:p[3]==='"'?le:ae):o===le||o===ae?o=C:o===re||o===oe?o=k:(o=C,i=void 0);const w=o===C&&n[c+1].startsWith("/>")?" ":"";r+=o===k?a+Re:d>=0?(s.push(h),a.slice(0,d)+ie+a.slice(d)+m+w):a+m+(d===-2?c:w)}return[de(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class M{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[h,p]=ke(e,t);if(this.el=M.createElement(h,s),S.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=S.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(ie)){const f=p[o++],w=i.getAttribute(d).split(m),O=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:O[2],strings:w,ctor:O[1]==="."?Te:O[1]==="?"?Pe:O[1]==="@"?Ne:Y}),i.removeAttribute(d)}else d.startsWith(m)&&(a.push({type:6,index:r}),i.removeAttribute(d));if(ce.test(i.tagName)){const d=i.textContent.split(m),f=d.length-1;if(f>0){i.textContent=Q?Q.emptyScript:"";for(let w=0;w<f;w++)i.append(d[w],B()),S.nextNode(),a.push({type:2,index:++r});i.append(d[f],B())}}}else if(i.nodeType===8)if(i.data===ne)a.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:r}),d+=m.length-1}r++}}static createElement(e,t){const s=x.createElement("template");return s.innerHTML=e,s}}function E(n,e,t=n,s){var o,c;if(e===v)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const r=_(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=E(n,i._$AS(n,e.values),i,s)),e}class Me{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??x).importNode(t,!0);S.currentNode=i;let r=S.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new T(r,r.nextSibling,this,e):a.type===1?h=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(h=new Qe(r,this,e)),this._$AV.push(h),a=s[++c]}o!==(a==null?void 0:a.index)&&(r=S.nextNode(),o++)}return S.currentNode=x,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class T{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),_(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&_(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=M.createElement(de(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const o=new Me(i,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new M(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new T(this.O(B()),this.O(B()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=E(this,e,t,0),o=!_(e)||e!==this._$AH&&e!==v,o&&(this._$AH=e);else{const c=e;let a,h;for(e=r[0],a=0;a<r.length-1;a++)h=E(this,c[s+a],t,a),h===v&&(h=this._$AH[a]),o||(o=!_(h)||h!==this._$AH[a]),h===A?e=A:e!==A&&(e+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class Pe extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Ne extends Y{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??A)===v)return;const s=this._$AH,i=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==A&&(s===A||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Qe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const z=R.litHtmlPolyfillSupport;z==null||z(M,T),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.1");const Ye=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new T(e.insertBefore(B(),r),r,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=globalThis;let P=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return v}};P._$litElement$=!0,P.finalized=!0,(ve=y.litElementHydrateSupport)==null||ve.call(y,{LitElement:P});const G=y.litElementPolyfillSupport;G==null||G({LitElement:P}),(y.litElementVersions??(y.litElementVersions=[])).push("4.2.1");const Le=I`
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
`,Oe=I`
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
`,De=I`
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
    padding: 36px 64px 18px;
  }

  .fullscreen-chat .panel-body {
    max-width: 920px;
    width: 100%;
    padding: 12px 48px 12px;
  }

  .fullscreen-chat .panel-footer {
    max-width: 640px;
  }

  .fullscreen-chat form {
    max-width: none;
  }
`,je=I`
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
    padding-right: 20px;
    overflow-y: auto;
    min-height: 0;
  }

  .conversation-scrollbar {
    position: absolute;
    top: 8px;
    right: 6px;
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
    padding: 0 20px 0 6px;
    border-radius: 8px;
    color: #1f2f36;
    font-size: 15px;
    position: relative;
    height: 40px;
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
    height: 44px;
    border-radius: 10px;
    border: 1px solid #30b4c0;
    background: #fff;
    color: #008b9a;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 14px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  }

  .new-conversation-cta__button img {
    width: 18px;
    height: 18px;
  }

  .new-conversation-cta__button:disabled,
  .new-conversation-cta__button[aria-disabled='true'] {
    opacity: 0.45;
    cursor: not-allowed;
    border-color: #7bc1d3ff;
    color: #88c5d3ff;
  }
`,He=[I`
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
`,Le,Oe,De,je];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe={ATTRIBUTE:1},ue=n=>(...e)=>({_$litDirective$:n,values:e});let Ae=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=ue(class extends Ae{constructor(n){var e;if(super(n),n.type!==pe.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var s,i;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(e)}const t=n.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return v}}),Ve=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgB7Ze/T8JAFMcfxMVFq5OaGBsTJxccXEn/AAdGNvE/8C9QjP+AOybippuDDrpQdCT+ijpIRJowwICCMZFBk/O99iANob+urS73SV5ee717/XL37l0BkEgkklhJQAQwxhR0isPjbiKR6IIggQSiEA1dBm0BLcVFKT6HG9xIbBntBIUbEBUobptFSwctA1GAgTZZPJBIFcKCQeosPg7c3j3mQ5yG7gPtkDcZDl37+aiClaMq+EOD/4B+mN+Zd4vjuYuZVUIomVWwZmjSoSvNMu1QA02nHcqs/CqBx2xiX7FyRy9gYvlHyb/OY2henUEUFm5zkEiFxym5dXTTkHQRp8HQ0jROK/BcOB/cv93UzPtW+XFUCBKX49f3IEgySOfGWQWq+xeDexL3enwFd7tHTkP6p4zwURdIoJ1es2PO4Ex6Gb4/e+Z1HAgLbF+/mH5+bdX0Lf0B4kBYYD/vqgVryVuXTyCI6/KLz+BtDcZnp9CmYWJpDr6a76YJ4LqBhAS2Md9+MO8Ws2lY2cqannDYzV4UQQRmFemwZHisPYfneQiDV4H1oG6LU7e1UwHXmVVnw4FBFLQiCw4JUHmMnK09B3HAhY5apjwXkGHWmZtitg9Q3tYJI9Dze5CgPz0YfLgcbGB70WkMX8IShES0zLiKI/C5jm4H/gpbLuUCjsvHnoNh4SIpF1MgkUgkkkD8AgAi3WKqFnrYAAAAAElFTkSuQmCC",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,Fe=n=>u`
  <button
    class="floating-button"
    style="background:${n.accentColor}"
    @click=${()=>n.togglePanel()}
    aria-expanded=${n.open}
  >
    <img src=${Ve} alt="" aria-hidden="true" />
    <span>${n.buttonLabel}</span>
  </button>
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge="important",Xe=" !"+ge,ze=ue(class extends Ae{constructor(n){var e;if(super(n),n.type!==pe.ATTRIBUTE||n.name!=="style"||((e=n.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((e,t)=>{const s=n[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(n,[e]){const{style:t}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?t.removeProperty(s):t[s]=null);for(const s in e){const i=e[s];if(i!=null){this.ft.add(s);const r=typeof i=="string"&&i.endsWith(Xe);s.includes("-")||r?t.setProperty(s,r?i.slice(0,-11):i,r?ge:""):t[s]=i}}return v}}),Ge=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgB5ZQxCsJAEEX/rsbaI3gEvYE22ppO7DyCJ1BvoCdIFSNBGFOIaBBzg1whR0gpqLsuSWHnBBKI4G+mefyB+Z8B6pBD1C7KCg7wgusCSi0Bndxh9Wb2IP3GS84wN8t2d1rqMeZw3hCIMjuIVEorQhXyKOw7dCt8x98Wm7JPl+4TYiGho4k93HA8G8oLILN1rCHW2/25fMom3U8YDbCSPKAH0CrQwHxqjw74D7n+sevRqVOEZW+4o5Ck1Yo1mrFrKlTa0ISRVcVUpw2F8oZGq3yIpLLnUOtjeAMX/z7Yit+o3QAAAABJRU5ErkJggg==",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,Ke=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBvZPdCcIwFIVPqvjcETpCnUDzrA86ghOIG+gGbqIv4mPjBhmhI/goFhNv2qpNQfIjeCCQhHu++0MC/CgWEpwfihQjLHCHkEteBgHyc5FBsQIaGR2vqPTYQBJfAG5k0rQapRhgajZOgMmcny5rymaycrqStEo8IJwtWGUztpWzya6eA1XgnEGv51Z6I+d8341L/M1UdoVjP5b5mzV/lf0VEGq2ADHmNyDWbNQMUdGjiDB/ALa8zUbDFiOg9Kredz7KX/QESDR2d7Kg6IcAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,qe=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBpZLfDYIwEMavqImPjOAIdQP6bIw6AhM4giMYR3ACEhOegQ3qBh2hvplIOItG6NXKn/glbY6745e7DwD+FPMl+SXbwgRCkqxAybXI3d6pDwAB2wNCRJNYmCvyTsCTLIQZS+whzAmdXm2ObJ4eGMudUO8J5qa5RHudK/jFHCD1gKfFARAX0CeGJ7kSr2moB1gtTXXTC6jg/AkDp6RbGApz519xrRKUH4BtoUu1eX5AMAig6SvjpboAEvqEePsNCKzxmPUz0ZisQD/j3RRnDeHYFqzYMZoAjLuap1kMXWID1hyjJ+SZQp3ORCa/AAAAAElFTkSuQmCC",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,Ze=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgBxZNNTsMwEIVnnBAqVuEG6Q16A8INeoOSFXRFkEpFVqRCaquqi7CA0hXhBNATUE4ANyBHyA4aKg+OU0QgxgKExNvkx8+fx89jgD8S6gb98NK2rKcdALZFCLacwOkuYxBHQTv5FqhzMnGZCdfCYqvGOWA4DnZ7b99MZTocnTWYibcFhHoMqD4K9jBbrG8SkCcsifgXdvrnvrai7uDiUTwcYd4eBu355/GjwcThAPdEAC9ZrR6FXlqpqNufNnOIWCFWQXIN83w4nCKiba09+8qtEZJblEpXoFG2UYukH6ChBCFREe4CEh0oOvBS6V+dZjVsKgDcooYO5Iucyt8VEGcwlzxk+6CRCawlfQSxEjSWAeODCNvtDKbHKojsMXH84jUxVgtXjj+fvDJJiTBjvsQZY8uEc9NBgzcZYquo4r09UAcRmPSLzs4b0iu3B2ogvVHQDkXzuZyDK5wOEaYGoxtVf6EOAj+QDBuN5azYxu8gH5Rf1PIl/De9AhTgnL0rAocOAAAAAElFTkSuQmCC",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,We=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,fe=(n,e={})=>{const t=e.variant??"drawer",s=t==="sidebar",i=s||n.showConversations;return u`
    <div
      class=${g({"conversations-panel":!0,"conversations-panel--open":i,"conversations-panel--sidebar":s})}
      aria-hidden=${!i}
      @pointerdown=${r=>n.handleConversationsPanelPointer(r)}
    >
      <div
        class=${g({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":s})}
      >
        ${Je(n,t)}
      </div>
    </div>
  `},Je=(n,e)=>{const t=e==="sidebar",s=t?u`
        <div
          class=${g({"new-conversation-cta":!0,open:n.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!n.hasActiveConversation}
            aria-disabled=${!n.hasActiveConversation}
            @click=${()=>n.handleCreateConversation()}
          >
            <img src=${We} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,i=u`
    <div
      class=${g({"conversation-list":!0,"conversation-list--sidebar":t})}
      @scroll=${t?r=>n.handleConversationListScroll(r):null}
    >
      ${n.filteredConversations.map(r=>{const o=n.conversationMenuId===r.id;return u`
            <div class="conversation-item">
              <div class="conversation-item__text">
                ${r.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${c=>n.handleConversationMenuToggle(c,r.id)}
              >
                <img src=${Ge} alt="" aria-hidden="true" />
              </button>
              ${o?u`
                    <div
                      class=${g({"conversation-menu":!0,"conversation-menu--above":n.conversationMenuPlacement==="above"})}
                      @click=${c=>c.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>n.handleConversationAction("rename",r.id)}
                      >
                        <img src=${Ke} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>n.handleConversationAction("delete",r.id)}
                      >
                        <img src=${qe} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return u`
    ${s}

    <div class="conversation-search">
      <img class="search-icon" src=${Ze} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${n.conversationSearch}
        @input=${r=>n.handleConversationSearch(r)}
      />
    </div>

    <div
      class=${g({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":t})}
    >
      ${i}
      ${t?u`
            <div
              class=${g({"conversation-scrollbar":!0,"conversation-scrollbar--visible":n.conversationScrollbar.visible})}
              @pointerdown=${r=>n.handleConversationScrollbarPointerDown(r)}
              @pointermove=${r=>n.handleConversationScrollbarPointerMove(r)}
              @pointerup=${r=>n.handleConversationScrollbarPointerUp(r)}
              @pointercancel=${r=>n.handleConversationScrollbarPointerUp(r)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${ze({height:`${n.conversationScrollbar.height}%`,top:`${n.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},et=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7dSxDYAgEAXQf8ZF3MAN1F53cAVHcBKH0F5HYATcwN7ipEShOoMkhpdAwg/kCg6AJDZ6BuWyMeS0auvCDjIEFrxA7iQnF0gsvi6aIEaHaqvBTnLPrh5irM10KxChi5hHSBEO/I7bRfNa4wXVNZu9du+AaIWcNuPbz87zDniHFEN+NgnmAsF0G91pmpecAAAAAElFTkSuQmCC",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,tt=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB5ZbBDYIwFIZfjd4dwRHqCD0aY4ybuIE6gpPghXhEJ7AbyAgMYKyPApZAkUIfMdH/QHr4838p7722AL8uBp7iYcThCdOPpgdIuRFJuhwDhRgL8NsMHSuB30u6HIGn5FJIYDowcfF7A7tCSYB51BqgpZZUQB5ed6DU3sXrDewC8wY2wpQ6YE3nYKlpbyA/RzMM3tpgciX2TY3UGygXIq4F5rC3p4COjIfmpFEsQtixDBtUPIhax+FroU411N04YXf9+zzFTGgWpgtdhZnWT9ImqHq6yOwwvWKw+OVdWOYs8wQ4Ej1VvZ4KqNBno32oj3i3xUAELKA3TAYL7ODb+u6DTwBzBxLBXIEJuk5AJBdgrXuHBpJCTZfiUy5/XTXL+6j/B70AdWmQ/S7ON+YAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,st=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAavSURBVHgB7Z1PTxtHFMDf2Cb9o6ZBoSq0ShRQK1XKpRs1Uo/Yx4pAk0+QcOg5ILVn4F4Jeu4h9BOQEqMevdx6SIWRKlVUquRWUQRVqJyStqiAJ+/N7prFWYu1PbP71p6fZO1igzHz23kz82ZmEU7ZlWBhQw4srLBCmGGFMKPQ+kT1VlGAJTFa23BbQ5hhhTDDCmGGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIMwqQEZy1yrg6KYB3lDAMeXzEoQG15nkO6vA/PgDq1TulOjAjdSGqoPPgqMJtYGELcQ0Enks6949R0KxN3NUA4Rke+pkh/3eXXXqths8pQfjAc/k7PlfH56okrzpVqkKCpCLE2ajcAynu0ik+vKucCiooONlyNEmrcOF/CF+4kgbgQkN+ByfgYq2qgUESFeKsV25DXiy3ver5UoScKFKNcTY2V6pTk0tgiMQadae8uYx/1FoGZYTBECoXsdZsNds0zSQixNlwH2D9n4P+wYEhUTEhxbgQrOILWCvuQf8xjlLWQDNGhWDj7VAVh/7FcR5VFkEjhmuI/iuIHULcx9AVbzwUA2NC8MopZrwBj8sw9lW1tY/maojoy3YjGqHGVFowGLLExzA4jOvqcZkcGNIovO6nImqYFqmrlAT4R+/cI5xrOo9cKJcl1SjfOwr/eaEuBG0xPTZ59ffWoEeMCFGNnJSl6nTJhRRwfsCrtYGjaxALCbZjWi4CI0L8LKoLKVH9TOWbVumh8mbJiumJvp8PwWztanWqOIE19hvIACzmQ+I2iL1kWjF8zmFXHNsurC2MMSZEtSMX4DbGcgcL4RKAChnDao6D6CKE+Klwj/A8hjd/gedyG8/ddnMYKGURpQBnKdqFeCJy9zFEzPm9n7PomuMIC22+pwjmMGiiaTaqU6GklN1JoJQ6Q7S2Iap3c0Fs+fmr5Luep9DMY0UlNqPIy1lgijYhXldTVFj1ZmjuIkKK6oUxbeT11ZAG05lAkkJ5tVZyqlvMDi1CvDlybMC5EtGI+w1/ogsY4qCnhnCW4VGMrCVSbgIzNIUs8TlwR6hc01ly/GpIz91e1ZifQMfcvDwM773xGhwcH4O7tx/5PcXREbhY8D7iT389h6f/HUL3RGSfKanJbFd+7+OQY7WgrWOmr47CzJUxePrvYVshX13/EN5/83V1vv5kFxa2d6BrpJyADMA2l/XJ5UtKBtUgojT6DgwCbIVQ7SHW/9hVUi4OFeDmSJpjzWRgKyQofPfPfajsPlPnxXdHoN9hKSQIV8TO8xew8/cLdT5zdQz6HZZCgnD1eL+uwtWjJ3vq60EIWyyFBIVOPSvi4OhYySH6PWyxExIOVzT2CAiE9HvYYreDqjR22r399tPTsRyFq+BINSgQ1G/wExIabwQ1pRUKW+yEiN6XABGshHz09ltNCfOPf4ZfD/458/qX1z9Qwihsff3Lb8CKYz15MVZtyPSVUXWkRpzSKZRWCT/cXS/Fwq63hVljXRtIWQkJwlW7cFTZe9Y8Z9Xbkvomu9gICYercMGHCXd/w41/ytSqM6VV0ETvbUgBG7Mu0u+UuQ1nb2k0fmPj/PmiL37chq4IryXWSUNq3QDaew05hGz0P2VEL0j2uDJGyiWdtYPoWUja63hjIyM+Y9QsYuz3QxnTpUXQjKY2RH4PvKE4//CVZ4WYhK6Q8yZkEHqEHGEvQ9PAyAgRcV5NPXe6epEWRRzJieqt0goYQsvAkMKWs1G5g5fcFnBDwMPION84VwatFaZkGg34XLrokrhZjbaROq1zQimzIMUypLuM9BR1RcMry0b9VZYLbX5mCUfdK2ndKUjrOIT2YkBe3mAQvup+o1uMLNgTWgzeZpUl9sbSvG2T9lyWv3tpQi1Mo524krYjUI0R18AcscOLU67Mcb7Nh7Hkor8VwA2+xoKodSSFFkOHF7KdhDaKnt6ErKNNPN6dJQZ0w05PGOjjO+XNu/i+1DtiPQfMT4hmGWoD0VBuISt3I+I1hWti9DtEd5TIzq2h+AgxlIpQgzipNwFoEh5CDMkIUO+dESnpCzEsIyArUtIVkpCMAO93yXlgTHJCWqc5E5YRoNoUMQC7cM9DFT4VBN3/tqH2kC9CSqgUD1MpiY5DVEEAj92v9Flw5I41VTw480LKebiBvhl/s6Z4Eur+xJMLKZKZm/GbglOtJey/q2CGFcIMK4QZVggzrBBmWCHMsEKYYYUwwwphhhXCDCuEGVYIM6wQZlghzLBCmCGcspvEPzi1xMTWEGZYIcywQpjxEna5gwxqk9eHAAAAAElFTkSuQmCC",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,it=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgB7ZbdCYNAEIRnJb6nBEu4ErSAEK0gLaSUdJAS8gt5vKQDO4gd6HtAc0YhEm4NOQUJ7AcnuHMrI7cMBwjCP6N2el4vDMCDI+qoY/h0NytXJx3CEWcDpjM2z+bviVZwxN3ASIgBMTC5gRkntAHTFzJvjVAHUsBtTJMo4zSyFV8h49EW/QZ+o6qidBFdP8v2I+iGzFgwYWU3UGKPsSmrg61M3P6vM+BjY9qXzYv5+ANr8BRmDgqbwA5h21BwujrrjkZ5moQZHJAcEANiwN1AN6zK6oYpUBcdDL0VC8ITASg13Rg8meYAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,nt=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBrVNBDoIwEFya6Hv0EeqZmJgQDoaXUB6DRC4NBy+i8Qn4IalbSLUtW9DoXChlZpjtbgH+ibw8LaY4pThbHKYXh+qyZ7N5U4g69YmL6po+IGiOyNV7gXZVHwwuj8JV5oqhbbl+b0Eu43B97xLscIEPU8DNJK4Y11nca/oEL6KoFcksgQNj4Iqj7YZbJUyYgE9MGnhNCLECowwwtvxoj0owODAbg+6wUTHGhpHuWAkosa6Z6o5O0hnkOEjMHCTiwFwTa5D6oZCJT6yAf+TvcmSiB8lCKW5fX6af8QRrqoetlQGSZAAAAABJRU5ErkJggg==",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,be=n=>{const e=n.messages.length>0,t=u`
    <div class="hero-card">
      <img src=${st} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
    </div>
  `,s=u`
    <div class="conversation">
      ${n.messages.map(i=>u`
          <div
            class=${g({message:!0,"message--user":i.role==="user","message--assistant":i.role==="assistant"})}
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
    <div class="panel-body">
      <div
        class=${g({"panel-content":!0,"panel-content--empty":!e})}
      >
        ${e?s:t}
      </div>

      ${n.errorMessage?u`<p class="error-banner">${n.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${n.suggestions.length>0?u`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
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
          IA pode cometer erros. Por isso lembre-se de conferir informacoes importantes.
        </p>
      </div>
    </div>
  `},rt=n=>{const e=be(n);return u`
    <aside class=${g({panel:!0,open:n.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${n.titleText}</span>
          <button
            class="close-button"
            @click=${()=>n.handleCloseAction()}
            aria-label="Fechar Rio Insight"
          >
            <img src=${nt} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>n.toggleConversationsPanel()}
          >
            <img src=${et} alt="" aria-hidden="true" />
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
                    <img src=${it} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>n.enterFullscreen()}
            >
              <img src=${tt} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${e}

      ${fe(n,{variant:"drawer"})}
    </aside>
  `},ot=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgB7ZXtCYAgEIbPaIBGsA1arU3aoJFqgxqhDa6LFPogO/UEoR44ENHn/eGpADmBiHorSIGRT6Y0SELCyogt27gCCYx8wDtDdIhDHh/CkIeHeMj9QwLk/JAI+XuIgNwdQpMdytFbb3HIkLk4FwpITDYBLVV9qZazsQQei1JqPk7QQS6cjd85gz8gHcoOqO0aeH4uRmrTU1vi/vHrh/WzbesVLQQBC6E6gyQAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,at=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB5ZZLTuQwEIbLjqWRRizCDcIJpvsGnQ1MNBvYoe5G5AYzV+EGRoGIXe8mYjb0nGAyJyA3ICsQUtqmKiTpPPrhZAm1ieOU63NV/bYC8NGMmTqeLk7tgy8HE8aYTe8adJJBltx5d4nJ+r2gaTT1OeOXOJxscYmVVlehF0oYAjqPzh2LWQsGbAQGRhmu9MrdluFG0PTPdMQ1f8DVNvSzVK2UG/4I470gykRw8W8ApIJlOhu3M+NtLyzXkEwARZIWQ1swsWh/b4Co8dgTB/oCNLjBSXCIz+tiekSxtoI45z+hJwQr4N54N0t610xXvSmUuvYtB3lvmHiEnhB5LONyPZW9XhHxIg7lmUwbGQkQjiGjAyGVtiFk2ddsso5fLkYnPAswBJIfBegKSClVzfGdUbHJiqsxbiLZCTFQaQXSXKfNrUNMTQ6Pw9jSlosz//tCOPBkHa4w/8G3s9fsqe6IKvJvT26v2wFMMxFaHElPJu/QwqSbq2NZd2Saydn97HIIhCpSQhqgInBn9zns9+wXjefRfGLaE6bYVZPbsvn9nO650YYdpqZXE4kn+B4c1ec6qhNKnOVB22YKIWW+iwd2gqiuiil3I8wEQsqs9WYriIwkjZlV58fQYktZ41L+nU3sW30RXfgocxLDt40OGv7ihmTgBXJXHOOfEz/yHfwZccr7jA64eBbL8tL8fPYGlj3l1qpxcVgAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,lt=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIVSURBVHgB5VVBctNAEOxZiQpwEi+IfoD9A+uAKI4yVamycyC8gPwAeAGVF+AcEldR5VpuQHKweQHmBYgf+AhUvMMsthVZWkm2wynpizS7O9M7O7O9wG0DbbrwvdbB3vxhh4kCaxszT30faS95lm7i30h0Nro4UopeyG/HNc/AlA2fHD6PB9iFaKg/hQxPE6iFjcApMI+qMnQSfdAXLQMay24DbAFZP2NwdJjE00YimwnB/1ZJwvzdBiRS+2KELjLCVbuYmSpH8moz6XXjVr8bd6QZTl3zsvOA4evi+BqRLbwsDXFDCFlrEesaft7wFL3ihiDn+lIahKUWqG2SZacOcuQL2NoI7486Z2b8zBwJ+2jAL/iPXibRzP5nGV3BD/06Eilyv/skXNlnoy9vlFKva1ywhz8d+Xy0/1mNlCl3UB72uLAl2FDWVGpjJ1BwPvp8jB2RERGr2h3btiXlvcM2wUUPS0QPPG+C/w3/floiShbdManzYzbZJb2nSIpMaeVaEdteEpWJltOnqKZJ+92nRyvrQPTMGPO2arU0z0neXiPqJfFAajHFjUGpjZUfKV0d0alERNEhqhQO9eV4bUTUoagk8qyIangRSuMO7PpMWBIlJAdJVDoV5z2y5y+ZteuKXcS/lxZe20Wy2EQDhlpUmHEs4vbYScD8VXRvUKzJ1kTXhONQFDHEUqpYqdlveJOVaN49/AWuVb4JKaLcJgAAAABJRU5ErkJggg==",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,ct=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBzZZPTsJAFMbfG8A/0USO0BvQI9AFJu5sjEbiptwATgCcQG5QN1ATNeOOBEioN8Ab9Ai4MHFR5jmjxiilzNSi8dt00vfN+01m5r0W4I+EWcw+5+VivGOrcVx8mTVcd2461wikALuw3yaA5lKoU3drXZMczMS0DXvTFZA30DUfX4KBtKD+3chDQDstrhYQ3AyrkBfEkI51HmLpCzEGAbIDnYWQWTqPFkREj9okCDOtR2dAxHuNIwIohZAXJK9vKB+pV5hg0aq7TgQaGRdswEceEXgMWUUQPSGIWQG3Omeuo922/yXVFQI+tNbFwUBrt27Ax015iKr1qGShEOLh/fDVTGEzLFTkqCpPKhICuhcnh1eZQQGf+DKBBxkkk/XO3VorJbYZiA6WAKnexhj6kEdx7NRPj8KvrxJ1xBi0Ia+KxUSOb6DB7UQ2ULQgv6p9PrJTQYQLbRc2loB0kOxrFmxMZKWCflPLIOOfDW1i9lHYq0CIpd5n5edS8tORqCOfT8s7EP/4UhSA5s9Qihqus7HdyaRXhOV61M1m9WYAAAAASUVORK5CYII=",l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("rio-assist.js",document.baseURI).href).href,ht=n=>{const e=be(n);return u`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button type="button" class="rail-button" aria-label="Ir para home">
          <img src=${ot} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="rail-button rail-button--close"
          aria-label="Fechar tela cheia"
          @click=${()=>n.exitFullscreen(!0)}
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
                class=${g({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":n.showNewConversationShortcut})}
                aria-label="Alternar ações de conversa"
                @click=${()=>n.toggleNewConversationShortcut()}
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
            <span class="fullscreen-header__tab">CONVERSA</span>
          </div>

          <div class="fullscreen-header__actions">
            <button type="button" class="fullscreen-header__icon" aria-label="Status">
              <img src=${at} alt="" aria-hidden="true" />
            </button>
            <button type="button" class="fullscreen-header__icon" aria-label="Informacoes">
              <img src=${lt} alt="" aria-hidden="true" />
            </button>
            <button type="button" class="fullscreen-header__icon" aria-label="Perfil de usuario">
              <img src=${ct} alt="" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div class="fullscreen-grid">
          ${fe(n,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${e}
          </div>
        </div>
      </div>
    </section>
  `},dt=n=>{const e=g({canvas:!0,"canvas--fullscreen":n.isFullscreen});return u`
    <div class=${e}>
      ${Fe(n)}
      ${rt(n)}
      ${n.isFullscreen?ht(n):null}
    </div>
  `},pt="wss://ws.volkswagen.latam-sandbox.rio.cloud",ut="eu.amazon.nova-pro-v1:0";class At{constructor(e){this.socket=null,this.connectPromise=null,this.listeners=new Set,this.token=e}matchesToken(e){return this.token===e}async sendMessage(e){const t=await this.ensureConnection(),s={action:"sendMessage",message:e,agentModel:ut};t.send(JSON.stringify(s))}onMessage(e){return this.listeners.add(e),()=>this.listeners.delete(e)}close(){this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${pt}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",e=>this.handleMessage(e)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null}),this.connectPromise=new Promise((e,t)=>{if(!this.socket){t(new Error("Falha ao criar conexão WebSocket."));return}const s=()=>{r(),e()},i=()=>{var o;r(),(o=this.socket)==null||o.close(),this.socket=null,this.connectPromise=null,t(new Error("Não foi possível abrir conexão com o websocket do Rio Insight."))},r=()=>{var o,c;(o=this.socket)==null||o.removeEventListener("open",s),(c=this.socket)==null||c.removeEventListener("error",i)};this.socket.addEventListener("open",s,{once:!0}),this.socket.addEventListener("error",i,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do Rio Insight não está pronta.");return this.socket}async handleMessage(e){const t=await this.readMessage(e.data);let s=null,i=t;try{if(s=JSON.parse(t),typeof s=="object"&&s!==null){const r=s.message??s.response??s.text??s.content;typeof r=="string"&&(i=r)}}catch{s=null}this.listeners.forEach(r=>r({text:i,raw:t,data:s}))}async readMessage(e){return typeof e=="string"?e:e instanceof Blob?e.text():e instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(e)):ArrayBuffer.isView(e)?new TextDecoder().decode(new Uint8Array(e.buffer,e.byteOffset,e.byteLength)):String(e??"")}}const L=class L extends P{constructor(){super(...arguments),this.open=!1,this.message="",this.titleText="Rio Insight",this.buttonLabel="Rio Insight",this.placeholder="Pergunte alguma coisa",this.accentColor="#008B9A",this.apiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar={height:0,top:0,visible:!1},this.conversationScrollbarRaf=null,this.rioClient=null,this.rioUnsubscribe=null,this.loadingTimer=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.conversations=Array.from({length:20}).map((e,t)=>({id:`${t+1}`,title:["Caminhões com problema na frota de veículos.","Próximas manutenções periódicas preventivas.","Quais revisões meu plano inclui?","Como automatizar preenchimento de odômetro.","Valor das peças da próxima revisão.","O que é revisão de assentamento?","Alertas críticos ativos.","Veículo superaquecendo, causas e recomendações.","Calibragem recomendada nos pneus do e-Delivery.","Quantos mil km trocar o óleo do motor.","Qual a vida útil da bateria Moura M100HE."][t%11],updatedAt:new Date(Date.now()-t*36e5).toISOString()}))}get suggestions(){return this.suggestionsSource?this.suggestionsSource.split("|").map(e=>e.trim()).filter(Boolean):[]}updated(e){super.updated(e),this.style.setProperty("--accent-color",this.accentColor),(e.has("isFullscreen")||e.has("showConversations")||e.has("conversations"))&&this.enqueueConversationScrollbarMeasure()}firstUpdated(){this.enqueueConversationScrollbarMeasure()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.teardownRioClient(),this.clearLoadingGuard()}get filteredConversations(){const e=this.conversationSearch.trim().toLowerCase();return e?this.conversations.filter(t=>t.title.toLowerCase().includes(e)):this.conversations}get hasActiveConversation(){return this.messages.length>0}togglePanel(){if(this.isFullscreen){this.exitFullscreen(!1);return}this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.isFullscreen=!1,this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){this.showConversations=!this.showConversations,this.showConversations||(this.conversationMenuId=null)}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}handleConversationSearch(e){this.conversationSearch=e.target.value}handleConversationMenuToggle(e,t){if(e.stopPropagation(),this.conversationMenuId===t){this.conversationMenuId=null;return}const s=e.currentTarget,i=this.renderRoot.querySelector(".conversations-panel__surface");if(s&&i){const r=s.getBoundingClientRect(),c=i.getBoundingClientRect().bottom-r.bottom;this.conversationMenuPlacement=c<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=t}handleConversationsPanelPointer(e){const t=e.target;!t.closest(".conversation-menu")&&!t.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(e,t){this.conversationMenuId=null;const s=this.conversations.find(r=>r.id===t);if(!s)return;const i=`${e==="rename"?"Renomear":"Excluir"} "${s.title}"`;console.info(`[Mock] ${i}`)}handleCloseAction(){if(this.isFullscreen){this.exitFullscreen(!0);return}this.showConversations?this.closeConversationsPanel():this.closePanel()}enterFullscreen(){this.isFullscreen||(this.isFullscreen=!0,this.open=!1,this.showConversations=!1)}exitFullscreen(e){this.isFullscreen&&(this.isFullscreen=!1,this.conversationMenuId=null,this.showNewConversationShortcut=!1,e&&(this.open=!0))}handleCreateConversation(){this.hasActiveConversation&&(this.clearLoadingGuard(),this.isLoading=!1,this.messages=[],this.message="",this.errorMessage="",this.showConversations=!1,this.teardownRioClient(),this.showNewConversationShortcut=!1,this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0})))}handleConversationListScroll(e){const t=e.currentTarget;t&&this.updateConversationScrollbar(t)}handleConversationScrollbarPointerDown(e){const t=e.currentTarget,s=this.renderRoot.querySelector(".conversation-list--sidebar");if(!t||!s)return;const i=t.getBoundingClientRect(),r=i.height*(this.conversationScrollbar.height/100),o=Math.max(i.height-r,0),c=Math.max(s.scrollHeight-s.clientHeight,1),a=s.scrollTop/c*o,h=e.clientY-i.top,p=h>=a&&h<=a+r,d=p?a:Math.min(Math.max(h-r/2,0),o);p||(s.scrollTop=d/Math.max(o,1)*(s.scrollHeight-s.clientHeight),this.updateConversationScrollbar(s)),t.setPointerCapture(e.pointerId),this.conversationScrollbarDraggingId=e.pointerId,this.conversationScrollbarDragState={startY:e.clientY,startThumbTop:d,trackHeight:i.height,thumbHeight:r,list:s},e.preventDefault()}handleConversationScrollbarPointerMove(e){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==e.pointerId||!this.conversationScrollbarDragState)return;const{startY:t,startThumbTop:s,trackHeight:i,thumbHeight:r,list:o}=this.conversationScrollbarDragState,c=Math.max(i-r,0),a=e.clientY-t,h=Math.min(Math.max(s+a,0),c),p=o.scrollHeight-o.clientHeight;p>0&&(o.scrollTop=h/Math.max(c,1)*p,this.updateConversationScrollbar(o)),e.preventDefault()}handleConversationScrollbarPointerUp(e){if(this.conversationScrollbarDraggingId!==e.pointerId)return;const t=e.currentTarget;t==null||t.releasePointerCapture(e.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.updateConversationScrollbar()}))}updateConversationScrollbar(e){const t=e??this.renderRoot.querySelector(".conversation-list--sidebar");if(!t){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const{scrollHeight:s,clientHeight:i,scrollTop:r}=t;if(s<=i+1){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const o=i/s,c=Math.max(o*100,8),a=100-c,h=r/(s-i)*(a>0?a:0);this.conversationScrollbar={height:c,top:h,visible:!0}}async onSuggestionClick(e){await this.processMessage(e)}async handleSubmit(e){e.preventDefault(),await this.processMessage(this.message)}createMessage(e,t){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:e,text:t,timestamp:Date.now()}}async processMessage(e){const t=e.trim();if(!t||this.isLoading)return;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:t,apiBaseUrl:this.apiBaseUrl,token:this.rioToken},bubbles:!0,composed:!0}));const s=this.createMessage("user",t);this.messages=[...this.messages,s],this.message="",this.errorMessage="",this.isLoading=!0,this.startLoadingGuard();try{await this.ensureRioClient().sendMessage(t)}catch(i){this.clearLoadingGuard(),this.isLoading=!1,this.errorMessage=i instanceof Error?i.message:"Nao foi possivel enviar a mensagem para o agente."}}ensureRioClient(){const e=this.rioToken.trim();if(!e)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");return(!this.rioClient||!this.rioClient.matchesToken(e))&&(this.teardownRioClient(),this.rioClient=new At(e),this.rioUnsubscribe=this.rioClient.onMessage(t=>{this.handleIncomingMessage(t)})),this.rioClient}handleIncomingMessage(e){const t=this.createMessage("assistant",e.text);this.messages=[...this.messages,t],this.clearLoadingGuard(),this.isLoading=!1}teardownRioClient(){this.rioUnsubscribe&&(this.rioUnsubscribe(),this.rioUnsubscribe=null),this.rioClient&&(this.rioClient.close(),this.rioClient=null)}startLoadingGuard(){this.clearLoadingGuard(),this.loadingTimer=window.setTimeout(()=>{this.loadingTimer=null,this.isLoading=!1},15e3)}clearLoadingGuard(){this.loadingTimer!==null&&(window.clearTimeout(this.loadingTimer),this.loadingTimer=null)}render(){return dt(this)}};L.styles=He,L.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0}};let K=L;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",K);const gt={title:"Rio Insight",buttonLabel:"Rio Insight",placeholder:"Pergunte alguma coisa",suggestions:["Veículos com problemas","Valor das peças","Planos de manutenção"],accentColor:"#008B9A",apiBaseUrl:"",rioToken:""},me="rio-assist-widget";function ft(n={}){const{target:e=document.body,...t}=n;let s=document.querySelector(me);s||(s=document.createElement(me),e.appendChild(s));const i={...gt,...t};Object.entries(i).forEach(([r,o])=>{o!==void 0&&(s==null||s.setAttribute(`data-${r.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}`,Array.isArray(o)?o.join("|"):String(o)))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:ft},window.dispatchEvent(new Event("rio-assist-ready")))})();
