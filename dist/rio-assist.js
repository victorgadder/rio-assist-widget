(function(){"use strict";var Gi;var b=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=globalThis,Qt=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),Jn=new WeakMap;let Zn=class{constructor(t,n,u){if(this._$cssResult$=!0,u!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Qt&&t===void 0){const u=n!==void 0&&n.length===1;u&&(t=Jn.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),u&&Jn.set(n,t))}return t}toString(){return this.cssText}};const xo=e=>new Zn(typeof e=="string"?e:e+"",void 0,jt),De=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((u,i,o)=>u+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Zn(n,e,jt)},Co=(e,t)=>{if(Qt)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const u=document.createElement("style"),i=mt.litNonce;i!==void 0&&u.setAttribute("nonce",i),u.textContent=n.cssText,e.appendChild(u)}},Kn=Qt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const u of t.cssRules)n+=u.cssText;return xo(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vo,defineProperty:wo,getOwnPropertyDescriptor:yo,getOwnPropertyNames:Eo,getOwnPropertySymbols:ko,getPrototypeOf:Io}=Object,pe=globalThis,$n=pe.trustedTypes,So=$n?$n.emptyScript:"",Vt=pe.reactiveElementPolyfillSupport,Ge=(e,t)=>e,qt={toAttribute(e,t){switch(t){case Boolean:e=e?So:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},eu=(e,t)=>!vo(e,t),tu={attribute:!0,type:String,converter:qt,reflect:!1,useDefault:!1,hasChanged:eu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pe.litPropertyMetadata??(pe.litPropertyMetadata=new WeakMap);let _e=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=tu){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const u=Symbol(),i=this.getPropertyDescriptor(t,u,n);i!==void 0&&wo(this.prototype,t,i)}}static getPropertyDescriptor(t,n,u){const{get:i,set:o}=yo(this.prototype,t)??{get(){return this[n]},set(r){this[n]=r}};return{get:i,set(r){const s=i==null?void 0:i.call(this);o==null||o.call(this,r),this.requestUpdate(t,s,u)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tu}static _$Ei(){if(this.hasOwnProperty(Ge("elementProperties")))return;const t=Io(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ge("properties"))){const n=this.properties,u=[...Eo(n),...ko(n)];for(const i of u)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[u,i]of n)this.elementProperties.set(u,i)}this._$Eh=new Map;for(const[n,u]of this.elementProperties){const i=this._$Eu(n,u);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const u=new Set(t.flat(1/0).reverse());for(const i of u)n.unshift(Kn(i))}else t!==void 0&&n.push(Kn(t));return n}static _$Eu(t,n){const u=n.attribute;return u===!1?void 0:typeof u=="string"?u:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const u of n.keys())this.hasOwnProperty(u)&&(t.set(u,this[u]),delete this[u]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Co(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var u;return(u=n.hostConnected)==null?void 0:u.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var u;return(u=n.hostDisconnected)==null?void 0:u.call(n)})}attributeChangedCallback(t,n,u){this._$AK(t,u)}_$ET(t,n){var o;const u=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,u);if(i!==void 0&&u.reflect===!0){const r=(((o=u.converter)==null?void 0:o.toAttribute)!==void 0?u.converter:qt).toAttribute(n,u.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,n){var o,r;const u=this.constructor,i=u._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=u.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:qt;this._$Em=i;const c=a.fromAttribute(n,s.type);this[i]=c??((r=this._$Ej)==null?void 0:r.get(i))??c,this._$Em=null}}requestUpdate(t,n,u){var i;if(t!==void 0){const o=this.constructor,r=this[t];if(u??(u=o.getPropertyOptions(t)),!((u.hasChanged??eu)(r,n)||u.useDefault&&u.reflect&&r===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(o._$Eu(t,u))))return;this.C(t,n,u)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:u,reflect:i,wrapped:o},r){u&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??n??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||u||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var u;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:s}=r,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(u=this._$EO)==null||u.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(u=>{var i;return(i=u.hostUpdated)==null?void 0:i.call(u)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[Ge("elementProperties")]=new Map,_e[Ge("finalized")]=new Map,Vt==null||Vt({ReactiveElement:_e}),(pe.reactiveElementVersions??(pe.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,xt=Ye.trustedTypes,nu=xt?xt.createPolicy("lit-html",{createHTML:e=>e}):void 0,uu="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,iu="?"+Ae,Ro=`<${iu}>`,ve=document,Xe=()=>ve.createComment(""),We=e=>e===null||typeof e!="object"&&typeof e!="function",Gt=Array.isArray,Do=e=>Gt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Yt=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ou=/-->/g,ru=/>/g,we=RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),su=/'/g,au=/"/g,cu=/^(?:script|style|textarea|title)$/i,_o=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),y=_o(1),ce=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),lu=new WeakMap,ye=ve.createTreeWalker(ve,129);function du(e,t){if(!Gt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return nu!==void 0?nu.createHTML(t):t}const Fo=(e,t)=>{const n=e.length-1,u=[];let i,o=t===2?"<svg>":t===3?"<math>":"",r=Je;for(let s=0;s<n;s++){const a=e[s];let c,d,f=-1,A=0;for(;A<a.length&&(r.lastIndex=A,d=r.exec(a),d!==null);)A=r.lastIndex,r===Je?d[1]==="!--"?r=ou:d[1]!==void 0?r=ru:d[2]!==void 0?(cu.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=we):d[3]!==void 0&&(r=we):r===we?d[0]===">"?(r=i??Je,f=-1):d[1]===void 0?f=-2:(f=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?we:d[3]==='"'?au:su):r===au||r===su?r=we:r===ou||r===ru?r=Je:(r=we,i=void 0);const p=r===we&&e[s+1].startsWith("/>")?" ":"";o+=r===Je?a+Ro:f>=0?(u.push(c),a.slice(0,f)+uu+a.slice(f)+Ae+p):a+Ae+(f===-2?s:p)}return[du(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),u]};class Ze{constructor({strings:t,_$litType$:n},u){let i;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[c,d]=Fo(t,n);if(this.el=Ze.createElement(c,u),ye.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=ye.nextNode())!==null&&a.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(uu)){const A=d[r++],p=i.getAttribute(f).split(Ae),h=/([.?@])?(.*)/.exec(A);a.push({type:1,index:o,name:h[2],strings:p,ctor:h[1]==="."?Bo:h[1]==="?"?Mo:h[1]==="@"?Uo:Ct}),i.removeAttribute(f)}else f.startsWith(Ae)&&(a.push({type:6,index:o}),i.removeAttribute(f));if(cu.test(i.tagName)){const f=i.textContent.split(Ae),A=f.length-1;if(A>0){i.textContent=xt?xt.emptyScript:"";for(let p=0;p<A;p++)i.append(f[p],Xe()),ye.nextNode(),a.push({type:2,index:++o});i.append(f[A],Xe())}}}else if(i.nodeType===8)if(i.data===iu)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Ae,f+1))!==-1;)a.push({type:7,index:o}),f+=Ae.length-1}o++}}static createElement(t,n){const u=ve.createElement("template");return u.innerHTML=t,u}}function Fe(e,t,n=e,u){var r,s;if(t===ce)return t;let i=u!==void 0?(r=n._$Co)==null?void 0:r[u]:n._$Cl;const o=We(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,u)),u!==void 0?(n._$Co??(n._$Co=[]))[u]=i:n._$Cl=i),i!==void 0&&(t=Fe(e,i._$AS(e,t.values),i,u)),t}class To{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:u}=this._$AD,i=((t==null?void 0:t.creationScope)??ve).importNode(n,!0);ye.currentNode=i;let o=ye.nextNode(),r=0,s=0,a=u[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new Ke(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Po(o,this,t)),this._$AV.push(c),a=u[++s]}r!==(a==null?void 0:a.index)&&(o=ye.nextNode(),r++)}return ye.currentNode=ve,i}p(t){let n=0;for(const u of this._$AV)u!==void 0&&(u.strings!==void 0?(u._$AI(t,u,n),n+=u.strings.length-2):u._$AI(t[n])),n++}}class Ke{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,u,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=u,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fe(this,t,n),We(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==ce&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Do(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&We(this._$AH)?this._$AA.nextSibling.data=t:this.T(ve.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:u}=t,i=typeof u=="number"?this._$AC(t):(u.el===void 0&&(u.el=Ze.createElement(du(u.h,u.h[0]),this.options)),u);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const r=new To(i,this),s=r.u(this.options);r.p(n),this.T(s),this._$AH=r}}_$AC(t){let n=lu.get(t.strings);return n===void 0&&lu.set(t.strings,n=new Ze(t)),n}k(t){Gt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let u,i=0;for(const o of t)i===n.length?n.push(u=new Ke(this.O(Xe()),this.O(Xe()),this,this.options)):u=n[i],u._$AI(o),i++;i<n.length&&(this._$AR(u&&u._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var u;for((u=this._$AP)==null?void 0:u.call(this,!1,!0,n);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,u,i,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,u.length>2||u[0]!==""||u[1]!==""?(this._$AH=Array(u.length-1).fill(new String),this.strings=u):this._$AH=B}_$AI(t,n=this,u,i){const o=this.strings;let r=!1;if(o===void 0)t=Fe(this,t,n,0),r=!We(t)||t!==this._$AH&&t!==ce,r&&(this._$AH=t);else{const s=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Fe(this,s[u+a],n,a),c===ce&&(c=this._$AH[a]),r||(r=!We(c)||c!==this._$AH[a]),c===B?t=B:t!==B&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Bo extends Ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class Mo extends Ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class Uo extends Ct{constructor(t,n,u,i,o){super(t,n,u,i,o),this.type=5}_$AI(t,n=this){if((t=Fe(this,t,n,0)??B)===ce)return;const u=this._$AH,i=t===B&&u!==B||t.capture!==u.capture||t.once!==u.once||t.passive!==u.passive,o=t!==B&&(u===B||i);i&&this.element.removeEventListener(this.name,this,u),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Po{constructor(t,n,u){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=u}get _$AU(){return this._$AM._$AU}_$AI(t){Fe(this,t)}}const Xt=Ye.litHtmlPolyfillSupport;Xt==null||Xt(Ze,Ke),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.3.1");const Lo=(e,t,n)=>{const u=(n==null?void 0:n.renderBefore)??t;let i=u._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;u._$litPart$=i=new Ke(t.insertBefore(Xe(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis;let $e=class extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lo(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ce}};$e._$litElement$=!0,$e.finalized=!0,(Gi=Ee.litElementHydrateSupport)==null||Gi.call(Ee,{LitElement:$e});const Wt=Ee.litElementPolyfillSupport;Wt==null||Wt({LitElement:$e}),(Ee.litElementVersions??(Ee.litElementVersions=[])).push("4.2.1");const Oo=De`
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
`,No=De`
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
    flex: 0 0 16px;
    border: 2px solid #008b9a;
    border-radius: 50%;
    border-top-color: transparent;
    box-sizing: border-box;
    animation: typing-spin 0.8s linear infinite;
  }

  .typing > span:first-of-type {
    flex: 0 1 auto;
    min-width: 0;
  }

  .typing__dots {
    flex: 0 0 auto;
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
`,Ho=De`
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
`,zo=De`
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
    min-height: 64px;
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
    align-items: center;
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
    width: fit-content;
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
    top: 76px;
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
    top: 72px;
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
`,Qo=De`
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

  .conversation-item__content {
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .conversations-panel:not(.conversations-panel--sidebar) .conversation-item {
    padding: 0 0 0 6px;
    gap: 8px;
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
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .conversation-item__time {
    display: block;
    font-family: 'Source Sans Pro', 'Inter', sans-serif;
    font-size: 13px;
    line-height: 1.2;
    color: #545556;
    white-space: nowrap;
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
`,jo=[De`
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
`,Oo,No,Ho,zo,Qo];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt={ATTRIBUTE:1,CHILD:2},Zt=e=>(...t)=>({_$litDirective$:e,values:t});let Kt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,u){this._$Ct=t,this._$AM=n,this._$Ci=u}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=Zt(class extends Kt{constructor(e){var t;if(super(e),e.type!==Jt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var u,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((u=this.nt)!=null&&u.has(o))&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const r=!!t[o];r===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(r?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return ce}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fu="important",Vo=" !"+fu,hu=Zt(class extends Kt{constructor(e){var t;if(super(e),e.type!==Jt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const u=e[n];return u==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${u};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const u of this.ft)t[u]==null&&(this.ft.delete(u),u.includes("-")?n.removeProperty(u):n[u]=null);for(const u in t){const i=t[u];if(i!=null){this.ft.add(u);const o=typeof i=="string"&&i.endsWith(Vo);u.includes("-")||o?n.setProperty(u,o?i.slice(0,-11):i,o?fu:""):n[u]=i}}return ce}}),qo=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Go=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Yo=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Xo=e=>{const t=e.floatingButtonIconUrl.trim()||qo,n=e.floatingButtonLabelIconUrl.trim()||Go,u=e.floatingButtonBackgroundIconUrl.trim()||Yo;return y`
  <button
    class="floating-button"
    style=${hu({background:e.accentColor,bottom:`${e.floatingButtonOffset}px`})}
    @click=${i=>e.handleFloatingButtonClick(i)}
    @pointerdown=${i=>e.handleFloatingButtonPointerDown(i)}
    @pointermove=${i=>e.handleFloatingButtonPointerMove(i)}
    @pointerup=${i=>e.handleFloatingButtonPointerUp(i)}
    @pointercancel=${i=>e.handleFloatingButtonPointerCancel(i)}
    aria-expanded=${e.open}
  >
    <img
      class="floating-button__box-bg"
      src=${u}
      alt=""
      aria-hidden="true"
    />
    <span class="floating-button__content">
      <img class="floating-button__icon" src=${t} alt="" aria-hidden="true" />
      <img
        class="floating-button__label-image"
        src=${n}
        alt=${e.buttonLabel}
      />
    </span>
  </button>
`};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t extends Kt{constructor(t){if(super(t),this.it=B,t.type!==Jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||t==null)return this._t=void 0,this.it=t;if(t===ce)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}$t.directiveName="unsafeHTML",$t.resultType=1;const Wo=Zt($t),pu=e=>{const t=e instanceof Date?e:new Date(e);if(Number.isNaN(t.getTime()))return"";const n=new Date,u=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),o=Math.floor((i.getTime()-u.getTime())/864e5),r=t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});if(o===0)return r;let s="";return o===1?s="ontem":o>=2&&o<=5?s=t.toLocaleDateString("pt-BR",{weekday:"long"}):s=t.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),`${s} ${r}`},Jo=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7dx/ThNBFAfw75vdVkJI7BHqCcAT0Cb8CH/RlagpxtiewHIDegLgBCwhUhMl638omFBugDdYb1D/8A+hnXEGrAFR2BFxH+R9EhJoh6T5drq7nfdmASGEEEKIW4nAzHqSlO4NRiuGqOT+1nqQPn881wVTbAJ0wY1g7KV9QS0DlM4/a1Kt0X62MBODGRYBdpKdMhDs25dTvmLocj2aboMRBQYMgiRDeM7y1vb7FhjJfQa+2t5tKEXrWcfbj3fvG8IHzajaAwO5z0Ab3guf8fYdLxX1cQ1M5B6gDWQCnpTCJJjIPcCLZ9zbhcMM9D6WaYMvYCL/GWj0ATwRmS6YyP8yhtSq13hQuhjNvgMTuQdoL4y7xtBa1vEGgyUwwuJCevHRVCtLiPaEs8Rp9jmsFhM6yW7DptSyB7nx4WME6mmjP4VUaD2Jqodght1qjLOe7NuFhf5EANP7ikLK5VuHEEIIIYQQQog7gdV34ZOuBD3WsGtEk3YRYcIV1N1Pvz/Y4NqdwCbAzTc7lUIYJpfUSLpAv1mP5lIwwiLArbcfahSo5OqRbkYOqpxCzH1B1bV1UEAr2UZTGQgzF+H/BwZFpaCVsa1jqNKxH3cwkX9nApF3kdwo8i7G3xQOhXXvMEipcTDBoqh0mzE4BuIzPGltvP/npuQfICGGJ6WKMZjIPcBRhKt+/TEU16NqCiZyDzCyJUsDk7HbgFIgkBbfX9WjmdiAotOAfs8Yc2DDq3KafQ6zxQRXUD+u2bRqw4trOzsPiVTsemgghBBCCCGEEEJcH9Mm86RUPC6W3e9HhaO0GUVsm8xZBfhj77Db/lo5/4yJbT24za2o7rAJsJN8tPVe07hsjA238XR+agOMsAjwdbK3Yqtz2bby9/vVOqM+mdwXVDeTvUrm8JwwkM6EswKjG/BCZelMOPsCSM3Dkw4CuWfC0N9s+VeE+2BCtvxfE4cZ6L2F1c5ANtteGZQ1jed1nSt9FrpggsGW/5MbinWzjrdlzjXpTLggbF5WVP9J6/ZiNO15k4qbxaQzoZqOIHj45/smuHBNs74wuwxmGN6A8XS7vz3Vlk8eUJRKV4IQQgghxD/3HTJ2+CG9OavnAAAAAElFTkSuQmCC",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Zo=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB7ZpBTgIxFIZfjbiVmzieQGatJnoEb+ANhBPoTVwY14w36BHwBromWPujY1zQoe20M32lX0JCeDMk30cZCoGoUCgUCoeLIMZUz8spndANfVFFQpySUu/64UZe143tc7ANUL2+PWjhe313umO80rM7mxDsAmxf9YlY4u7eg4WYy8uLRechxAgn+Ral6q6VcERM8JIHQjx2jdkEoAk9kav8D1X1spyZhnwCrAkXPEk+CHM4NgHkbf1Ba1WTVwRxZprwWQHUI4JSn6YRqwDAK4IyH5tcAFztt1f8DpwjbKgxjZIK8PdRp2/BIii10MeuTONkNkI7PuclBLeibuf9R8qr2XnX+UmsAINE1XMlyN/HOxl9BVjs8HxWgtU5YNQADttbhwh6x6g3TTbyYLQAHnt761fVhVECeH+xiRBh8AA95FuCRhg0QAD5lmARBgsQUL4lSIRB9gER5IMRfQVEkufxFkhdHkQLwEEeRAnARR4ED8BJHgQNwE0eBAvAUR4ECcBVHvQOwFke9ArAXR54B8hBHngFyEUeOAfISR44BchNHlgHyFEeWAXIVR7sDZCzPOgMkLs8MAY4BHlg/k3wmOaUuTwwBxA7/4DoS5LyYIhfhZOVB7EDJC0PYgZIXh7ECsBCHsQIwEYehA7ASh6EDMBOHoQKwFIeHBsnghraKLJiY/+fnEKhUCgU0uEbh7OOhX0VxTkAAAAASUVORK5CYII=",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Ko=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB7ZvPTcMwFMY/h/QMG1A2yAbQI6IH2KCMwATABrABnaAHKnFMR8gGhAkoN1TaPBzKARANeXbiPGr/pFqV6jTpp/fns+UCgUAgEPAXhRZI7tMbKLWLRlHzbHh4gYaJ0QYKp3rcR6NQrofGBYjgOUEAeI73AlR2gWSS9nWZ7IP9rWqixz00Sw6ic3BZIs/OBvmmj6u7QIyR/jGXkEFfP0sKLjFd6/Fq08ehBsBzggDwHO8F+KsL3GFJM9gQYY6FfnVHl/eWD3s5nDxoc7QS4w1+R9FtdjLI6kw1XQ6PIJkC47pT2UUwO95sK8Wg7W/dqYZdgJ4gmCrv/xNDAdQz5MKq+tsYATlnsqkRkttbiV440826AGkBGA00Gx59m51MZ1R5wRsdfM3jZJrq96reJqtykQKKF2ZOIRcpoETbSwcRUPgeAbFgAZQLAV63Z4VlJICu0HIFWLrxAZBqhjg2uMRCAJF2mB2Z2xYBOZjY7AnKqwNMG1xiLgAJbIVKPYKJuQCRQAGcRoBElMsaINEOFy67gEQ77DQCJNrhyGEEfNphWSIs3PoADb/qtonJGsVSAH7fbZEcBthGgBw7TGbPYicA/f99AdujsrUE+DhtxiFGX1/DusTEBq9vZUNph6nGvB7z4crTYD3w6CQFVoJSwHCn2k6AHUFusOiiC0SeR4CoswJRFymwRkYULMxSwP4fI0Rj3QmaPhjNRvRWfSAQCASE8g7TeaJ3NUq3zgAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,$o=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,er=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,tr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB7dyxTQNBEIbR8YnAInIJhISEhC4FKqIF04kd0wAZlOAIHwSGQzRgaYBf8r2XXH5fNrs7VQAAAAAA8OcW1XR9u76qmRqXtX/dbvfVcFEN3z9/+KyXmqnLQ22mz301DEWUAGEChAkQJkCYAGEChAkQJkCYAGEChLVmQctpGPX+Vo81U4uhdgUAAAAAJ2rdjLtZr1cfh3qomToea/f8tN1UQ2saOo61mubZdzVTw88wf1MNzgPCBAgTIEyAMAHCBAgTIEyAMAHCBAgTIMwz1YbfeKYKAAAA8I/MghqsLAuzsuwMCBAmQJgAYQKECRAmQJgAYQKECRAmQJiVZQ1WlgEAAAAAAKf4Apw6ME0JptRKAAAAAElFTkSuQmCC",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Au=(e,t={})=>{const n=t.variant??"drawer",u=n==="sidebar",i=u||e.showConversations;return y`
    <div
      class=${j({"conversations-panel":!0,"conversations-panel--open":i,"conversations-panel--sidebar":u})}
      aria-hidden=${!i}
      @pointerdown=${o=>e.handleConversationsPanelPointer(o)}
    >
      <div
        class=${j({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":u})}
      >
        ${nr(e,n)}
      </div>
    </div>
  `},nr=(e,t)=>{const n=t==="sidebar",u=n?y`
        <div
          class=${j({"new-conversation-cta":!0,open:e.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!e.hasActiveConversation}
            aria-disabled=${!e.hasActiveConversation}
            @click=${()=>e.handleCreateConversation()}
          >
            <img src=${er} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,i=y`
    <div
      class=${j({"conversation-list":!0,"conversation-list--sidebar":n})}
      @scroll=${n?o=>e.handleConversationListScroll(o):null}
    >
      ${e.filteredConversations.map(o=>{const r=e.conversationMenuId===o.id;return y`
            <div
              class="conversation-item"
              role="button"
              tabindex="0"
              title=${`Recuperar ${o.title}`}
              @click=${()=>e.handleConversationSelect(o.id)}
              @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e.handleConversationSelect(o.id))}}
            >
              <div class="conversation-item__content">
                <div class="conversation-item__text">
                  ${o.title}
                </div>
                <time class="conversation-item__time" datetime=${o.updatedAt}>
                  ${pu(o.updatedAt)}
                </time>
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${s=>e.handleConversationMenuToggle(s,o.id)}
              >
                <img src=${Jo} alt="" aria-hidden="true" />
              </button>
              ${r?y`
                    <div
                      class=${j({"conversation-menu":!0,"conversation-menu--above":e.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("rename",o.id)}
                      >
                        <img src=${Zo} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("delete",o.id)}
                      >
                        <img src=${Ko} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return y`
    ${u}

    ${n?y`
          <button class="recent-conversations-button" type="button" aria-label="Conversas recentes">
            <img src=${tr} alt="" aria-hidden="true" />
            <span>Conversas recentes</span>
          </button>
        `:null}

    <div class="conversation-search">
      <img class="search-icon" src=${$o} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${e.conversationSearch}
        @input=${o=>e.handleConversationSearch(o)}
      />
    </div>

    <div
      class=${j({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":n})}
    >
      ${e.conversationHistoryLoading?y`<div class="conversation-loading">Carregando conversas...</div>`:null}
      ${e.conversationHistoryError?y`<div class="conversation-error">${e.conversationHistoryError}</div>`:null}
      ${i}
      ${n?y`
            <div
              class=${j({"conversation-scrollbar":!0,"conversation-scrollbar--visible":e.conversationScrollbar.visible})}
              @pointerdown=${o=>e.handleConversationScrollbarPointerDown(o)}
              @pointermove=${o=>e.handleConversationScrollbarPointerMove(o)}
              @pointerup=${o=>e.handleConversationScrollbarPointerUp(o)}
              @pointercancel=${o=>e.handleConversationScrollbarPointerUp(o)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${hu({height:`${e.conversationScrollbar.height}%`,top:`${e.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},ur=e=>{const{consultantAgentVisible:t,consultantAgentIntro:n,consultantAgentOptions:u}=e,i=e.consultantAgentButtonText.trim()||"Consulte o UptAIme Agent";return y`
    <div class="consultant-agent">
      ${e.showConsultantAgentButton?y`
            <button
              class="consultant-agent__button"
              type="button"
              @click=${()=>e.handleConsultantAgentOpen()}
            >
              ${i}
            </button>
          `:null}

      ${t?y`
            <div class="consultant-agent__intro">${n}</div>
            <div class="consultant-agent__options">
              ${u.map(o=>y`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantAgentOption(o)}
                  >
                    ${o.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},ir=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,or=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7d1PThNhGMfx3zutFQMxPUI9gXgCSyJEd44mRrqxnEA8gXIC9QTFhZKYkMEVBhfUE4A3qDfoyvB3Xmd0A6iJNCXvzPt8PwlpgV3nO+9MM0+nEgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBpwiNci2O6280VXFOO/Hh40fw5U0HasCogtgkGXtGc1lxdOuKsuPfJ6/7T2+/0aBJYrMjGb3VOmNX3IdlzRef9j8vKrAoloB3m/u9JPEDVQTXhofqnlrJV0IdjiIagUoNv4z1Uix97Wv66irgKI7BNSNz11bARGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHFNxWVNuX+nKfOJa3vvO0l5kcm524pIVAEsp4tDXbGP2c58LjcoLuTMKwIcAi7pSbq0/zRdvKNytYkAAUyoWG1eKYIIKnUIKKd5WsetTu6SoFfILjppHuz/bYSrjGAj+3JXlR9A+bdKBFBu+Buae1k87ftraldtWWpqThvZzrp0uracPhhd+He5CnRVU8Ff698zfLN7xUnVavFTqT3/PNeXGrsb2Xbn7F/LE08n7aumggcwk9x8Xs7IqRZcp1gP/hg5y73/qpoKHoDL84eql+4g2z2/Ujk3Uk0FD6CO76dbOu6c/d3nvhIz/pPgbeAEkpPTCp+rXA4BGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEYBwBGEcAxhGAcQQQmEvCDpMQQGBOraADpQQQlFtfThdGCogAAvG/RskbwT9ZFNung4NwSTL2Pv+v0XAnP/YuGfbSxeD3CS4RwBT00ntbxcOWaohDgHEEYBwBGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEMIG82ajtPYEuqkIAQ9XMka6NFIkq3CXsk2rFrYf8qtdpCx5AORnj/fTv8X8VyjGuAzVeKCKVOAfoPVrqFy/virz/pgryXt+Lh7VDNRdi2vsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA9/AQgnaBvPi1l+wAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,rr=(e,t)=>{var i;if(t.role!=="assistant")return null;const u=((i=[...e.messages].reverse().find(o=>o.role==="assistant"&&!o.hidden))==null?void 0:i.id)===t.id;return y`
    <div class="message__actions" aria-label="Ações da resposta">
      ${u?y`
            <button
              class="message__action-button"
              type="button"
              aria-label="Atualizar"
              title="Atualizar resposta"
              ?disabled=${e.isLoading||!t.responseTo}
              @click=${()=>e.handleUpdateResponse(t)}
            >
              <img src=${ir} alt="" aria-hidden="true" />
            </button>
          `:null}
      <button
        class=${j({"message__action-button":!0,"message__action-button--copied":e.copiedMessageId===t.id})}
        type="button"
        aria-label="Copiar"
        title="Copiar mensagem"
        @click=${()=>e.handleCopyMessage(t)}
      >
        <img src=${or} alt="" aria-hidden="true" />
      </button>
      ${e.copiedMessageId===t.id?y`<span class="message__copy-feedback" role="status">Copiado!</span>`:null}
    </div>
  `},sr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB7dzBTcNQEEXRcQCJZUqgBLeQBpDoACqiBVNBliyjdJAOaMFLNiFENADSiDxFPkdyA75ejf+fKgAAAAAA+HdDNY3b3UMt13x42szVcFsN4/v55R+Hj1qu6fy8VMOqiBIgTIAwAcIECBMgTIAwAcIECBMgTICw1iyoPmuum9NbLde+AAAAAOCPWifjxu1uXXfDay3V12l/eNxM1dCbht7Xuo71XEu1+vl+p2rwPyBMgDABwgQIEyBMgDABwgQIEyBMgDABwlxT7WlfUwUAAAC4ILOgHivLwqaysuy6CRAmQJgAYQKECRAmQJgAYQKECRAmQJiVZT1WlgEAAAAAAL/6Bj7sKlMf4mFGAAAAAElFTkSuQmCC",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,ar=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgB7d3fTdtAHMDxn2l57wbNCN6A5rEqSN2gdAM6QcMGdALoBEVqeA5MUHeCskclDl8gVkji+M6+C7/Lfb8PwEOQLD5K5PtnRIiIiIiIiIiIiMihQkjK6e1l/W0kKiqq6vjom+ur3wqJvDHn8lDMxChANA9eb6oDIak+ju/lwIzrz6N7SSwAn0sVEcClUkQEcKXUEAHcUEqIALaUCiKAW0oBEcCOtCMC6JBmRAAd04oIoEdzRFNci6IA9Ki8ufteT1aeiaIAdGyOZ8xElAWgQ1rxbAB2pBnPBuCWtOPZAGwpBTwbgBtKBc8G4Eop4dkAXCo1PBuAz6WIZwNQ0sWzZQ8YHc+YHzEnwLMG3AHeeXUyPou5ipEt4I7wJvbHmEtRWQLuEm9RLMTsAF8Db1EMxKwAXxNvUWjEbADLm1n52niLQiJmA1h9GldSmK8SIw+85noCIWb1EVojXgVH7IHXXE8AxOxuYoIiDsBrrmcgYpbDiCCIAfCa6xmAmO1AfhBiQLzmehrE4p/P72U9ldYLMQJecz0W8b9xPh9v4yEHMh9inIopLjtfGBGvbwA+14moEM8G4FKtiErxbACutIaoGI9asojl9NaUv2cToTSbz50SERERDYkbivbUz4U+bYMo/pTTuy9Ca6keyK/vYSlOq+Ojn0JNagHbNyCBuJxKwO7dYyAuUgfovvUPRJvXTUz5a/ZOIua3b9NccWPjexd6KBc14kgi1G/TLYiew4jivRwWs9CIw3ZM543YZxw4CokYZrt7voh9B/JBEMOeVcgTcchMzCDEOAdN8kMcOpXWCzHuKaEaMaO50xBzoV6IOzniZQ+yZFKoyWwnRA3n8/atkKsRWxHBi1Po5aSNiODFK8Z64AtE8OIW6/8HPiFO767rP3C8Z0yz6Tbqivwo6gPCwZuX5vEy8JrSAwTvRWkBgrdWOoDgbSwNQPBa0w8I3tZ0A4LXmV5A8JzSCQiec/oAwfMq1lxoz4qL6uTDRMg5Ze9A8znWvtN9TdtH6CjGvtN9TuNNDIgeaR1GgOiY5oE8iA5pn0oDsaMUJrNB3FIqy0kgtpTSgi6IG0ptSwWIK6W4qQnEpfzmQo35K1oejHAok/rrqRARERERERERERF19wiyXT051op+sQAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,cr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABoXSURBVHgB7d3PbyTXgdjxV5wfu07WERMFa3uxgSgEyR5yUBvOXeyjoZ/+C0yfctQYyF2j+wKS/wLN/AUzlmcgIBdy7lps65AADrAwjRiGvLCM0XqTNTQkK+9Vd3N6KJJdfKzqrq76fACKv1qj0Qy7vv3eq3pVjB4dlAEArmgrAEAGAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZboZrmry5WwQANs517wdlBAJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGS5GaCHRg/2t+O77dMv3Aw7px+X8es3Fr43/1p55mvPbYeieClcVVl+Ff/59MLvb4XDFz4/OfP5Vvx3v57++5MfjQ8DdIyA0Dnx4L9TfZAO+vOD/fMD/OLBfPq44oU47Cz9DxTV487/epOKJb9gueS/n75/a/rh6NHB4uMOZ99PcXk6+9rT6vOy/PXp5+ltHqVZjISIJgkIrTodCSzG4KQ6yM9DMPt4IRCLFg/2Fx2PyzAs50Xy9M+oePFrxcLHtxZClCJUno54Dk9HS2lUdDyLz1H1/RSdi0dRDJqAkOWFMGzN4pAObPMoFLOvLQZhHoPzQjC0CKzbNEI7p5/Pw5P+HuYro4ujn3lwqlFNNcqZxiaNcKajm0OhGR4B4VzVNNI8DidVGF6pRgnxW98Iw3kjBEHol3lwqhcAC7GZvyiYjm5SQA7DdFrtsJpOm0fmqArMYaBXBGTARo/3R+ndaSDSx8VsJDF3dhoELjZ9gTGXQjP/+bl17kjm8/jxJE5rHk7eGE8CG0dABqKacrpZPbnfjU/s18LzkYSRA6vz4kjm3fkIZrY2cxBHLSkqB3Ed5sCUWPcJSI9V0bgV9uIz9Z0wfWW4HaC7dmNU4lt4L63DxKgcxFHK/VlMDgOdIyA9NPrF/m7YKt6Lr+R2g2iwudLP8e4sJvfi6OT+5K3xQaAzBKRH4prGXiiLH4f0xDMVRb/sxdHJXgxJXJQvP5i8Pb4XWDtbmfRACsfo8cGvYjw+DqEadUBf7cRRyccxJL8afRJfMLFWArLB0lRVfCLtV+GocwU29MfzkKQpW9bCFNYGmi6Ob70fQnknwLClU9D3qzWSZ3Fqy2L7ShmBbJjq1dbt4u/FA16wF27FkJjWWikB2SCjR08+TK+2TFfBuWbTWvF5wkqYwtoAo0/3d8Jx8SCOOkYBWKK8E6e03o1TWmNTWu0yAum4aruRkzjqWNwiAlhmp5rSmm7XQ0sEpMOq9Y7SlBVk2knPn7gu8m6gFQLSUXEe98fVeocryeE6tuO6yIPq+UTjBKSDpj/s5b0ANKS8JyLNE5COmQ63xQOaJyJNE5AOqc622qq2IwFaUX5kYb05AtIRVTxOrHlAy7bjwvqD6o6bXJuAdMWJs61gRdIpvg+qLYG4FgHpgOrKWfGAVRpN95PjOgRkzap7eNjXCtagvOMakesRkDWq1j1C4VUQrEvaO8t6SDYBWafjcNfUFazVdrhd2Hwxk4CsyXToXDgnHdatDO+6KVUeAVmXG171QGcU1VSWs7KuSEDWoFo4N3UFXbITbgYns1yRgKyFhXPonKJ4zyjkagRkxYw+oLO2jUKuRkBWzugDOsso5EoEZIWMPqDztsOtsBeoRUBWqSzeC0DHFe8EahGQFZltIW0baei+XdeF1CMgq1JanIMNYo+sGgRkVYri9QBshsIuEXUIyApUw2GL57BJtk1jLScgq2E4DJvH83YJAVkF01eweQpnYy0jIC2bXZTk7CvYPDsuKrycgLTtRtgNwGa6YRrrMgLStkJAYGMVZg8uIyBtK4rXArCZPH8vdTPQtr6+gnkaQvlVaEzxUkj7EEG3GIFcQkBaNFuAW+VB8flBvQyHL7xPitnHRXxceps7WXjM0cLHs19z8qPx07Am5/4Z3jxzTc3W7PMyPq48fezzj4vTx2/Hj7fFiivYTj+D63wOdJmAtOl2PHCVIcc0BOngnw70J9UB/7D6ztbsfTrob8Wvf12F4Glff8Bn/19n/98OQ0PiwWEn/j1txz/PaXBuzN5P33bin/E8RPP4vBIYltvVC5BJ4BsEpE0n1UHnfGX5eTwwTeIBajIbDUxSDOIB8zCwMjl/3tWoKB1Upn+/o9kuA6PZfLmRTd8cV9NYAnIOAWnT1ukI5GkVjCI8rKJxFCaGxJtr9nc3P6AcLH7vdNflMp3+WV1AKij0loC06ThNPZVjwRiOyRvjFJb0di99Xu2nVIS9ajcC+6FtpsLf20UEpEWTt8cPA4M2eWt8EGajlNOYBDu9bhijyAu4DgRWJMVk8uZ4L9woX40j05+cnhhBtxXVWXucQ0BgxSY/HB/Gqa57kzd2hYSNJiCwRqchCeVPhYRNIyDQAXFq66OwVY5jSO4H2BACAh1RTW2drpEYjdB9AgIdM10jidNaZflBgA4TEOioyVvjuzEiY6MRukpAoMOq60iqtRFbadA9AgIdN10b2f1+HI38LECHCAhsiDgauWNdhC4RENggs3UREaETBAQ2TBWRdAU7rJnNFAesupnSosU7/c1vrnTWi3f9a97ZuyUmx2e+9vxGWklvb6Z1mXQF++hRultj8WGANRGQDXN60J/fRe+bt3PdXtj8bfq94oUw7IQ6iuqxF3+vTWf/u1vnfP/W809Hjw7mH05DU4bndzGcf15Wt/p9ehqok9M7PD7d1Bt5pavXR7/YT3/f7wdYAwHpgCoKN8KoesV/Uh3gpxEoZrdVLRbiMJcOomcP8hfe/TAMxTdHR/P/96J48WvFwse3FiKUrrl4fh/5w9PwpFsJz24jPLvnRyek6awYkSAirIOArEF1X4itrdfjwWk3fRrmYVg8sM0/X3xP+6YjtJ3Tz+fhWQh2jM30joTpLpMhPJzd82Ntqog8PnhtehdEWB0BWZEqGiE+wYvqZkLxlbIqbLAU/N34d7kb3783C8rD+Hd6f20x+Touqt8uRu56yCoJSIvi1NR2nB7Zm92BbhToqxSUdNvavRiTONVVfhAX/g9Wua6STiQYfbo/DsfF3wd30GNFnMbbghSO0eMn74dbxa9mZ8mIx3DshK3i4/h3v1/9DKxQumI9zrG5RoSVEZCGVVNVt+OrwLK8G7wSHLKd9DMQRyS/Gn2yvxdWpLqvSBGn02AFTGE1pJquuh1feaaFTMsbPFeNSGJIXg/Pyg9WMq2V1kNuVeszXsDQKiOQBjwfdTgLhgvtVdNan+y3/jMyvbDSVBbtE5BrGj3avxMXT/ed/UINaTTyYBVrI9VUVggHAVokINcwPRDYSoIrqtZGnrT/c2PTRVomIJlGjw8+ni2UQ4byTlwX+Ti0aHpNSnk/QEsEJMM0Hun6DriWvbYjEm6EuwFaIiBXVE1biQfN2WtzOqu6NsSdDGmJgFzBNB6mrWhanM5qc2H9ZvgoQAsEpKbR4/2ReNCatLA+3S+tcdMr1J2RRfMEpIbRp+keHMWDAG0qigffuMlXU5yRRQsEpI7juBDpOg/atx1uFa0sqs92CT4I0CABWSJOXe3NdtOFVdht72r18ucBGiQgS7nTGyu2VXxY7a3WtGfhXoAGCcglqtGHqStWbyfcDHdCw6Z7ZJnGojkCcimjD9akKN5rZRRiGosGCcgFjD5Ys+02RiGmsWiSgFzI6IM1i6OQ0LDZVu+/DtAAATlHdUGX0Qfrt93KxYWlOxbSDAE5T2GvKzqiaGEkvBUmARogIOcq3gnQDbuNL6ZvOROLZgjIGbOLuNxLmu640eytkmd7Yz0NcE0CctaW+5rTMVvF66Fx5ZMA1yQg31C8FqBbdkPTynAY4JoEZMFsrnkUoFt2Gt+ltxAQrk9AFt0UDzrqRsM/mycCwvUJyKJCQOiorYavS7ohIFyfgCwqnX1FVzW8NrflLCyu72bgucLV5//15e3wg3/3Uu3H/+9/+r9h/3e/D20bf/ffh//87X+99HGr+v2sXvlvQ4PSqbyjRwcBrkNAXlC8Egbuv/2nV6qI1PXHZ0dh/3+0f8De/c7L4e2//u7Sx33ymy/6GRCjYzrIFBan/upbf36leCTfvnXzyv8OGYpWXtyYxuJaBIRTuSG4ypQXXVJ+FeAaBIRTb/31d0KOOlNLQP8ICJWc6avTf/df/blpLBggAaFy3QCYxoLhERAqudNXc+k0W2BYBIRa01fLTo39m3/zF+F73/qzAAyHgLA0Hulaj7/9n/8QlrGYDsMiIFQX6V3msy+fht/+y5/CH4+OLn2chXQYFgEZuHQh4LL1ixSQZP+Ly6exUkBMY8FwCMjAjb+zfPH77/4wvd7s775cft1ZnV8P6AcBGbhl01dp/eOX//TP1cfzkchlnI0FwyEgA3aV6askrYP89v/96dLHp2msb9+0RycMgYAM2A9eXn7x39nTdz/7w/JRyHWvKQE2g4AM2Pgvl083pftrLKq1DmIaCwZBQAZs/L3LD/Rpymq+/jFX514bprFgGARkoHa/+/LSg/x5i+ZpUX3ZOkhiGgv6T0AGqs701UVnXdUZhZjGgv4TkIFaNn2VzK//OOvgd1+GZUxjQf8JyAClrdeXHdzT2sdFU1Xpe8u2NUlMY0G/CcgA1dn08LPfX3y6bnVx4Vf/HJYxjQX9JiADVGfTw4N/vHyaytlYgIAMTJq+SregvUwaYSzbtuTgi+XrIEk62wvoJwEZmFrTVzX2vDrvGpHc/x6wmQRkYOpMX9WZnqoe98Xyx6U7FZrGgn4SkAGpM32VXHT6bs7j0oaNprGgnwRkQOpOX9W50nz+2Dqn85rGgn4SkAGpNX31Rb3pq6s83jQW9JOADETT01enj/+y3jTW37z0FwHoFwEZiDrTSHXPrFpUd8HdVenQPwIyEHWmr+qcvntWnWtGknSvdNNY0C8CMgBpDaLO9NVV1z/m6gTENBb0j5eEA1B3+ihNc+XsX/VX31oep/nvI2eUA2tVlr8OnEtABiBNH9V6XMubH6bfx/vhlwHoB1NYPVd3+moV0jRWnbUY6JQyHAbOJSA9t/udbl0FvvuXrkpnwxQCchEB6bmu3ZPj7f/gqnQ2zFawcHcBAemxtLidprC6xDQWm2byxngSOJeA9FhXNzE0jcUGEY9LCEiPdXUTQ9NYbA6n8F7Gabw9VXf6Kl2X8Yvf/C405b//l/+49Irz+TSWa0LovNII5DIC0lN11xk++c0XjQbkBy+/VGvkk6axBIQNcBC4kCmsnqp79flVd99d+ut9We/XM43FRjgyArmMgPRQmr6qMwJJO+/WvXlUXXV353U2Fp1Xlk8mPxobJl9CQHqo7oH5s983/9youztvku5RAp1VhIeBSwlID9Wdvjr4xy9DG+oGxK1u6bRnArKMgPRM3emrq4wUrqruukrao8s0Fh01idNXh4FLCUjP1J6+avEMqPRr//HoqNZjTWPRSSflzwJLCUjP1J2+qrvYneuT//NFrceZxqKTjp2+W4eA9Ejd6auk6dN3z/rsD/VGOGka63vf+rMAHXLP9FU9AtIjV5m+avr03bPqXg+SGIXQKWV5P1CLgPRI3emrVVwBfpVFegvpdMhk8tb4IFCLgPTEVS7Ma3v6aq7uOkv6fZvGohMsnl+JgPRE3fue//Zf/rSyPahMY7FhDidvj+8FahOQnqh769pVbmCYtkqpezqvaSzWrix/ErgSAemBNH1V99a1q94Bt+7pvCkgy7aBhxbds/ZxdZ6xPZAWrL//+Enoor/9X/9QvV3X+5//snobsBbKX7iKc+5Z+UHgyoxAYBOUZRtnPpg3TMryA9d95BGQF7h9JQzMYZy6uhvIIiCLyrDaBQKor9EbG40+3d8JPI1TV+NANgFZtOXuY3RUEQ5Dk05MX4WT8qemrq5HQF4kIHRT2fDP5tADktY9XPNxbQKy6OuGX+VBU44a/tkswigMVbpVrXWPRgjIgun9jy2k0zmHjU+1lGEnDNNhjPG7gUYIyFml21jSOQehaUXxWhiew7RoPn2hSBME5JsEhG45Kdu4SnRoU1jzeBwGGiMgZx1Vi5VeodAdx82+qJmdwjukRXTxaImAnDFbB/l5gE4of974lMuzQY0+JuLRHgE5TxnuBeiCkxamVIuwGwahvC8e7RKQc1S7chZO6WXt2rk/RVG8HvouXefx5njPgnm7BOQiJ+6LzLo1f3e82fpHn6ewDmM8xq7zWA0BuchR+ChYTGd94sJvC9NXJz2evipjcJ+V33dfj9URkAtUQ9/S/ZFZk7K838rcfVn8OPTPfNRxx5TVagnIJaphsLUQVq+VLcZn01e7oT/Si7wPjDrWxx0JlzkpfxIXHfcDrMpJS3fH68/01XR2IE4zG3GslxHIEtUrG1NZrM699naJLd4Pm20+4ng1jdDEY/2MQOo4CnfD7fDOgDegYzUO27o39+gX+7sb+vObovF5fH/XNFX3CEgN6ZVOfAKayqJdbd7gqAh7YXOk3SCexN/zw/B1eGik0V0CUlN69TN6tP/T+Ez8MEDTpjc4amUjz2rx/LjLZ1+Vv47rMwfVHUGLcDB5Y+zGbhtCQK5g8ub4ozgS2Y4jkU2fS6ZL4hpbqxe+Hccp2LWKgSjTVFQViKdVKI7j++Mwsc3IZhOQK0pP9DgS2YkjkT6eT8/KlffT9QuhJSsafUynnE7i+3Ta+1Z8O6lu3HQoEP0mIBnSHjsxIkFEuJ4Yj/izFNq0itFHXOSOEXSXvwFyGm+m6olftnS+Pv2Xpq1ajsf0wkEvcmiPgFxDNW8tIlxVWjBvcdrq1HHxIECLBOSaZhEZ2/KEGp6uaqfY0eP9vTC829ayYgLSgOoCp60YkWALeC5QxkXmFe3ZNJu6cqYgrbOI3pDJD6uzTfbiK7+D6snrqnWmDqsLBFu6xuNc04XznQAtMwJp2OSN8b3JG7uvhiJtwmhaa8Ce7xS7wniMHu3fsXDOqhiBtCSFJL67N52LNiIZkLXtFDu75sPUFSsjIC07DUnazK7aj6h4J36+HeiTp3Ga6ufx7/feujb8Gz3Y3w4n1V5tfrZYGQFZkdmBJb1Nd0YNIV14NQpF8VrwpN808x1i055ND+NoY7L2Df9uFx8b5bJqArIGizFJ4jTXKJzEiGzFA8BJdRDYjq9md+IBIX6teMWBYWXSlhxfVfs2VZGYrWHNt+fo6P5No8dP4hRp6UpwVk5AOuCy3UfjaOWuzRtrmR78k3kA0sZ9J2E6Mpif0LA1e388+/7R9PNN3bNpFo+7AdZAQFiVw3igu/g6ma0Lzlg7OfP1oxc+fzrke0VUZ1yJB2skIKxCutPe2M6szRk9evLjONRybxrWynUgtE08Gja91qO8F2DNBIQ2iUfDqjUPd8WkI0xh0RbxaFictvowrnm0v4sv1CQgtEE8GjS7wvxBnLayuy6dYgqLpolHg6qLTqdXmIsHnWMEQpPEoyHV1iS3tuJ6R5yyKgN0koDQFPFoSDXq2Epbk5Q7ATpMQGiCeDTAqINNIyBcl3hcUxWO21vvTc+wKm2sycYQEK5DPJpwq3gQ47EbYMM4C4tc4tGUG+5eyWYSEHKIR4MmP4x/jlvlWETYNALCVYlHC0SETSQgXIV4tEhE2DQCQl3isQIiwiYREOoQjxUSETaFgLCMeKyBiLAJBITLiMcaiQhdJyBcRDw6QEToMgHhPBPx6A4RoasEhLPEo4NEhC4SEBbN4/E00DkiQtcICHPisQFEhC4REBLx2CAiQlcICOKxgUSELhCQYROPDSYirJuADJd49ICIsE4C0nVFaOMALx49IiKsi4B03UnjBwXx6CERYR0EpOuOw0H8Z1MHe/HoMRFh1QSk46qDfVn+LFyfeAyAiLBKArIJjsJH4XqjEPEYEBFhVQRkA8xGIT8KecRjgESEVRCQDTF5a3wQTqqI1A9BWT4Rj+ESEdomIBtk8vb4YbhRfj+W4f6Sh8ZglD+N0dkVj2ETEdp0M7BRqgNCCHujT/fvhpOwG47jWxF2QhkPENNrRh5WoxWYST8z8edlHE6K/fhzshOgIQKyoWYhuTd7g0u1GpF2LnZlA5jCgoFobTqrND02VAICA9JSRB4GBklAYGAajsihNbfhEhAYoMYiclJ+EBgsAYGBunZEyvJnk7fH9wKDJSAwYNkRSRepHoW7gUETEBi4KiJf17pANXGRKqcEBKj2W5u8Od4LN8pXq92fy/Lz8HzbnKfViKOM6x3Pylfj4z4KEFxICCyYXaB6J0ANRiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkKUYPTooAwBckREIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGT5/w72Vgm/kJoZAAAAAElFTkSuQmCC",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,lr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,dr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZtLbtswEIZHUg10qSP4CLmCNgW69CZA0PMVAbLxskA3ukKOwCN4XzguqYEYwAFNDjkzlAB+mzzMx/yfnYgibYBGo9FoNEi8nv8cf5//PsFGeLO1uJoggx6I4ETD3EE3b0GCC/9ha3E15UjoKI3X8Lbb0f18A7jc4Db9Ov14hwqs4W0dI/7mZgCu08vpp0kdI1nAffiVWhK+hvcVGYqEJAGh8H5KZQnh8L4ikyohKiAW3k+pJCEe3ldkUiQ8FJAa3k8pLCE9vK/IxCQEBVDD+ymFJNDD+4rMIwnBy+AAw2gvdcTJFqMj9yUyP7yrpx8H+D6GHxeamOuVUBa+u/QwTM+n6T3cRrCAUgnS4bGdcCG5EjTCY1uFgqgStMJjewIaEjTDYx8ikhK0w2O/DCQk1AiPfTPhlFArPPYvgEPCwX5fKzyOUUiphB6/VgmP4zBQIiEHrvA4FhNaEjjD43iMSEvgDo9jMiMlQSI8jisAtwSp8Di2EFwSJMPj+IKUSpAO7/gGG+bDrhCu8A8k2fyfgPRG6y7+CUpK2M1lUErCrhZCEhJ2txTmlrDLmyFOCeT3B9xTuplhn4ELEOE8fCkSwLGT09tnsqaEKlti9yu8mocv6puioeVtLQmq2+KxtX0NCWoHI6k3NtoSVI7GqHd1mhLED0dzb2m1JIgej5fez2tIEHuDBNdmhrSETmJi7p0cSQnBleAVDrZjl7FC49/GerbF568YXT2HS/jxB7ye56NVMVuPR0ieTG4Pj/5K6AzYel5Okwm2gAipEjQ2MB3pEuLhl1aQQEyCVviVuIS08EtLSCQkQTv8SlhCevilNRC4l1Ar/MpXCbTwSw8gskpw9+M1w698SnBXLFr4bJyEt/P8BBsBPzLjnphGo9FoNCj8BxYA9Kv7ja2UAAAAAElFTkSuQmCC",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,gu=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,fr=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,hr=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,pr=new URL("data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9197%2029.6004H25.8396C26.6348%2029.6004%2027.2796%2028.9556%2027.2796%2028.1604V15.3511C27.2796%2014.9748%2027.1322%2014.6135%2026.8692%2014.3443L23.4366%2010.8337C23.3025%2010.6965%2023.1423%2010.5876%2022.9655%2010.5131C22.7887%2010.4387%2022.5988%2010.4004%2022.407%2010.4004H18.9197V18.6804H22.6397C22.8625%2018.6804%2023.0761%2018.7689%2023.2337%2018.9264C23.3912%2019.084%2023.4797%2019.2976%2023.4797%2019.5204C23.4797%2019.7432%2023.3912%2019.9568%2023.2337%2020.1144C23.0761%2020.2719%2022.8625%2020.3604%2022.6397%2020.3604H18.9197V22.2804H20.4797C20.7025%2022.2804%2020.9161%2022.3689%2021.0737%2022.5264C21.2312%2022.684%2021.3197%2022.8976%2021.3197%2023.1204C21.3197%2023.3432%2021.2312%2023.5568%2021.0737%2023.7144C20.9161%2023.8719%2020.7025%2023.9604%2020.4797%2023.9604H18.9197V25.7004H22.6397C22.8625%2025.7004%2023.0761%2025.7889%2023.2337%2025.9464C23.3912%2026.104%2023.4797%2026.3176%2023.4797%2026.5404C23.4797%2026.7632%2023.3912%2026.9768%2023.2337%2027.1344C23.0761%2027.2919%2022.8625%2027.3804%2022.6397%2027.3804H18.9197V29.6004ZM18.9197%2010.4004H14.1197C13.3244%2010.4004%2012.6797%2011.0452%2012.6797%2011.8404V28.1604C12.6797%2028.9556%2013.3244%2029.6004%2014.1197%2029.6004H18.9197V27.3804H15.6797C15.4569%2027.3804%2015.2432%2027.2919%2015.0857%2027.1344C14.9282%2026.9768%2014.8397%2026.7632%2014.8397%2026.5404C14.8397%2026.3176%2014.9282%2026.104%2015.0857%2025.9464C15.2432%2025.7889%2015.4569%2025.7004%2015.6797%2025.7004H18.9197V23.9604H15.6797C15.4569%2023.9604%2015.2432%2023.8719%2015.0857%2023.7144C14.9282%2023.5568%2014.8397%2023.3432%2014.8397%2023.1204C14.8397%2022.8976%2014.9282%2022.684%2015.0857%2022.5264C15.2432%2022.3689%2015.4569%2022.2804%2015.6797%2022.2804H18.9197V20.3604H15.6797C15.4569%2020.3604%2015.2432%2020.2719%2015.0857%2020.1144C14.9282%2019.9568%2014.8397%2019.7432%2014.8397%2019.5204C14.8397%2019.2976%2014.9282%2019.084%2015.0857%2018.9264C15.2432%2018.7689%2015.4569%2018.6804%2015.6797%2018.6804H18.9197V10.4004Z'%20fill='white'/%3e%3c/svg%3e",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Ar=(e,t)=>{const n=t.questions??[],u=e.activeConsultantFollowUpId===t.id&&n.length>0;return y`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${t.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${u?y`
            <div class="consultant-follow-up__options">
              ${n.map(i=>y`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantFollowUpQuestion(i)}
                  >
                    ${i.prompt}
                  </button>
                `)}
              <button
                class="consultant-agent__option"
                type="button"
                @click=${()=>e.handleConsultantChooseAnotherSubject()}
              >
                Escolher outro assunto.
              </button>
            </div>
          `:null}
    </div>
  `},gr=(e,t)=>{const n=e.activeConsultantPromptId===t.id;return y`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">${t.text}</p>
      ${n?y`
            <div class="consultant-follow-up__options">
              ${t.options.map(u=>y`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantAgentOption(u)}
                  >
                    ${u.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},bu=e=>{const t=e.messages.length>0,n=e.consultantAgentVisible&&e.consultantAgentOptions.length>0&&!t,u=y`
    <div class="hero-card">
      <img src=${cr} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
      ${ur(e)}
    </div>
  `,i=y`
    <div class="consultant-prompt">
      <div class="consultant-prompt__text">
        ${e.consultantAgentIntro}
      </div>
      <div class="consultant-prompt__options">
        ${e.consultantAgentOptions.map(r=>y`
            <button
              class="consultant-agent__option"
              type="button"
              @click=${()=>e.handleConsultantAgentOption(r)}
            >
              ${r.label}
            </button>
          `)}
      </div>
    </div>
  `,o=y`
    <div class="conversation">
      ${e.messages.filter(r=>!r.hidden).map(r=>{const s=!!r.consultantFollowUp;return y`
          <div
            class=${j({message:!0,"message--user":r.role==="user","message--assistant":r.role==="assistant"})}
          >
            <div class="message__content">
              ${s?Ar(e,r.consultantFollowUp):r.consultantPrompt?gr(e,r.consultantPrompt):Wo(r.html??r.text)}
            </div>
            ${rr(e,r)}
            <time>
              ${pu(r.timestamp)}
            </time>
          </div>
        `})}
      ${e.isLoading?y`
            <div class="message message--assistant typing">
              <span>${e.loadingLabel}</span>
              <span class="typing__dots" aria-hidden="true">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          `:null}
    </div>
  `;return y`
    <div class="panel-body">
      <div
      class=${j({"panel-content":!0,"panel-content--empty":!t&&!n,"panel-content--consultant":n})}
      >
        ${t?o:n?i:u}
      </div>

      ${e.errorMessage?y`<p class="error-banner">${e.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${e.showSuggestions&&e.suggestions.length>0?y`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${e.suggestions.map(r=>y`
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
          class=${j({"input-shell":!0,"input-shell--has-attachments":e.selectedFiles.length>0,"input-shell--recording":e.isRecording})}
        >
          ${e.selectedFiles.length>0?y`
                <div class="attachments">
                  ${e.selectedFiles.map(r=>r.kind==="image"?y`
                          <div class="attachment-thumb">
                            <img
                              src=${r.previewUrl??""}
                              alt=${r.name}
                              loading="lazy"
                            />
                            <button
                              class="attachment-thumb__remove"
                              type="button"
                              aria-label=${`Remover ${r.name}`}
                              @click=${()=>e.handleAttachmentRemove(r.id)}
                            >
                              <img src=${gu} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `:y`
                          <div class="attachment-card attachment-card--${r.kind}">
                            <span
                              class="attachment-card__icon"
                              style=${`--file-icon: url(${r.kind==="audio"?hr:pr});`}
                              aria-hidden="true"
                            ></span>
                            <div class="attachment-card__meta">
                              <strong>${r.name}</strong>
                              <span>${r.typeLabel}</span>
                            </div>
                            <button
                              class="attachment-card__remove"
                              type="button"
                              aria-label=${`Remover ${r.name}`}
                              @click=${()=>r.kind==="audio"?e.handleVoiceAttachmentRemove(r.id):e.handleAttachmentRemove(r.id)}
                            >
                              <img src=${gu} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `)}
                </div>
              `:null}
          ${e.hasVoiceAttachment&&!e.speechRecognitionAvailable?y`
                <p class="voice-transcript voice-transcript--unavailable">
                  A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                </p>
              `:null}
          ${e.attachmentError?y`<p class="attachment-error">${e.attachmentError}</p>`:null}
          <!-- Controles de anexo temporariamente ocultos (backend ainda sem suporte). -->
          <div class="input-row">
            <textarea
              class="composer-input"
              rows="1"
              placeholder=${e.placeholder}
              .value=${e.message}
              @input=${r=>e.handleComposerInput(r)}
              @keydown=${r=>e.handleComposerKeydown(r)}
              ?disabled=${e.isTextInputDisabled}
            ></textarea>
            <!-- Controles de audio temporariamente ocultos (backend ainda sem suporte). -->
            <button
              class="input-button submit-button"
              type="submit"
              aria-label="Enviar mensagem"
              ?disabled=${e.isLoading}
            >
              <img src=${fr} alt="" aria-hidden="true" />
            </button>
          </div>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informações importantes.
        </p>
      </div>
    </div>
  `},br=e=>{const t=bu(e);return y`
    <aside class=${j({panel:!0,open:e.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${e.titleText}</span>
          <button
            class="close-button"
            @click=${()=>e.handleCloseAction()}
            aria-label="Fechar UptAIme Assist"
          >
            <img src=${dr} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>e.toggleConversationsPanel()}
          >
            <img src=${sr} alt="" aria-hidden="true" />
            Minhas Conversas
          </button>
          <div class="panel-header__icons">
            <button
              type="button"
              class="short-answer-toggle short-answer-toggle--header"
              role="switch"
              aria-checked=${e.quickResponse}
              @click=${()=>e.toggleQuickResponse()}
            >
              <span
                class=${j({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.quickResponse})}
                aria-hidden="true"
              >
                <span class="short-answer-toggle__thumb"></span>
              </span>
              <span class="short-answer-toggle__label">Respostas rápidas</span>
            </button>

            ${e.hasActiveConversation?y`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${()=>e.handleCreateConversation()}
                  >
                    <img src=${lr} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>e.enterFullscreen()}
            >
              <img src=${ar} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${t}

      ${Au(e,{variant:"drawer"})}
    </aside>
  `},mr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIzSURBVHgB7dzdTeNQFEXhk9EUMCWkBOhgpoOZCgYqIx1AB4gKoANSAh2EY+ErBQTh2j73bNtZn3SVFx6SvXCk/ChmAAAAWJjD4bDtjiFfP/5zf7aGPEfjF0TI8sn4RMhyYnwitFYxPhFaGTA+EaKNGJ8IUSaMT4SpAsYnwliB4xNhqAbjE6FWw/GJ8J2E8YnwlcTxifCRYHwiFMLxZxNhYyL9A7/3szWtvZ8/m81mbwKSAD7+L795NP34xd7PpUd4sWQ/LFk//hz+849t/dz39y1V6hVwNP6FzdOTvT0dpV0JaQEWMH6RGiElwILGL9IiNA+wwPGLlAhNAyx4/KJ5hGYBVjB+0TRCkwArGr9oFiE8wArHL5pEaBGge4W7tvGLJw9waYFCXwn7+De23vE7F/1jDBN2BfR37MrOw86vhGsLEBLgzMYvQiJMDnCm4xeTI0wKcObjF5MijA7A+O+MjjAqAON/alSEwQEY/6TBEQYFYPwqgyJUB2D8QaojVAXw8f/6za1hiH8e4e67P6p9KyL9w+oVqNos/VsReI8AYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHEfto87fw8WKzffv7bzMw1wIO/l76zQP6ZRnczuwA8BYkRQIwAYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHECCBGADECiBFAjABiBBAjgBgBxAggRgAxAogRQIwAYgQQI4AYAcRqv57e/Vxv9Pf1T9lbvDU8BgCI9AoWATDVE+mlOgAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,xr=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Cr=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,vr=new URL("data:image/png;base64,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",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,wr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,yr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB7d3BbRNBFIDhtwZzdge4BHeA9ojgQge0QAfQAR1QAhcQR1OCqQCXkDORvHg2LE6I196Zee/toPl/CQ4IJZY/RfbMOG9EiIiIiIiIqNQ2X7ebzeftWhRbCLkU8KRrtrJstpqIjZB5f/FEVn/+aS+3Xbt70+4lMwCNO4M3pIIIoGEX8IayEQE0agLeUBYigAZF4A0lIwKoXALeUBJiNcuI41v32Cc0/nuk44XWKUuMetaBS/movYi+XybeUDRiRQv55rn2InpICW8oCrG2nZi1NqIy3tDkx1njVpoaohHe0KTHWeteaDaiMd7QSp5d/vo1b2YnIzrh3UhzXFa8aneX/lPtpxHRiCXhhThOikAsDS8E4F1XEUvECwF4ahSxVLwQgA97hFgyXuip0L8NiG3/Fr5gvBCA5+sRpevhisULATjeWmzLxgvxGjhPKnghAP1TwwsB6JsqXghAv9TxQgD6ZIIXAtA+M7wQgLaZ4oUAtMscLwSgTS54IQD1c8MLAaibK14IQN1u5Nfxj2MA6qb+udNrAaifKyKANrkhAmiXCyKAtpkjAmifKSKAPpkhAuiXCSKAvqkjAuifKiKA86SGWM/nQrvuh5Q2VmUp749/vxUiIiKKLvtFffPl+yex/0WQyJrd7vWLd1JB+e9Cn3Qf5ND/KtZaSqk7VDPEL3sduHvZ7mXRtcef5b2QeyoLeRDnS20nBsR5Ut1KA9E/9b1QEH0z2cwG0S+z0wgQfTI9TgLRPvPzQBBtcznQBdEutxN5EG3y/UjFIcweMx1dVV1ugE5T/6rLBRA8u8wBwbPNFBA8+8wAwfPJBBA8v9QBwfNNFRA8/9QAwZsnFUDw5isbELx5ywL0uxSDDfCxkgE9bzThFGO8JEDv62g4ihovGnCuu4RAPF8U4NwXQYH4uMmApdziBeLDJgGWdgUbiKeuApZ6fx6Id10ELP3yQxCv/QQu+kW05Qjh7BnTtSNeBDR+ctQGhNeMePU10OjJUZ/uXivipHehyk+O2Wj+0+NsfkolTV4HKiGa36vQP87brooJFaHoaQ6bb9t14lQK90sxaihpHEcCInhGJc9TiUAEz7CsgTgTEMEzLn/U1jgieA6pjKQ6gwieU2ozxe4hrsD7TwuI/QY4ERERERERldpvO99jwLC0P3AAAAAASUVORK5CYII=",b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href).href,Er=[{id:"status",iconUrl:xr,ariaLabel:"Status"},{id:"info",iconUrl:Cr,ariaLabel:"Informacoes"},{id:"profile",iconUrl:vr,ariaLabel:"Perfil de usuario"}],kr=e=>{var u;const t=bu(e),n=(u=e.headerActions)!=null&&u.length?e.headerActions:Er;return y`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button
          type="button"
          class="rail-button"
          aria-label="Ir para home"
          @click=${()=>e.handleHomeNavigation()}
        >
          <img src=${mr} alt="" aria-hidden="true" />
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
              <span class="fullscreen-header__brand">${e.titleText}</span>
              <button
                type="button"
                class=${j({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":e.showNewConversationShortcut})}
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
            ${e.activeConversationTitle?y`<span class="fullscreen-header__tab">${e.activeConversationTitle}</span>`:null}
          </div>

          <div class="fullscreen-header__actions">
            ${n.map((i,o)=>y`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label=${i.ariaLabel??"Acao do cabecalho"}
                  @click=${()=>e.handleHeaderActionClick(i,o)}
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
          @click=${()=>e.exitFullscreen(!0)}
        >
          <img src=${yr} alt="" aria-hidden="true" />
        </button>

        <div class="fullscreen-utility-bar">
          <button
            type="button"
            class="short-answer-toggle short-answer-toggle--header"
            role="switch"
            aria-checked=${e.quickResponse}
            @click=${()=>e.toggleQuickResponse()}
          >
            <span
              class=${j({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.quickResponse})}
              aria-hidden="true"
            >
              <span class="short-answer-toggle__thumb"></span>
            </span>
            <span class="short-answer-toggle__label">Respostas rápidas</span>
          </button>
          ${e.hasActiveConversation?y`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label="Iniciar nova conversa"
                  @click=${()=>e.handleCreateConversation()}
                >
                  <img src=${wr} alt="" aria-hidden="true" />
                </button>
              `:null}
        </div>

        <div class="fullscreen-grid">
          ${Au(e,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${t}
          </div>
        </div>
      </div>
    </section>
  `},Ir=e=>{const t=j({canvas:!0,"canvas--fullscreen":e.isFullscreen,"canvas--open":e.open});return y`
    <div class=${t}>
      ${Xo(e)}
      ${br(e)}
      ${e.isFullscreen?kr(e):null}
      ${e.renameConversationTarget?y`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Digite o novo título para a conversa:</p>
                <input
                  class="dialog__input"
                  type="text"
                  .value=${e.renameConversationTarget.draft}
                  @input=${n=>e.handleRenameDraft(n)}
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
      ${e.deleteConversationTarget?y`
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
      ${e.conversationActionError?y`
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
      ${e.voiceCancelDialogOpen?y`
            <div class="dialog-overlay" role="dialog" aria-modal="true">
              <div class="dialog">
                <p class="dialog__message">Deseja cancelar a mensagem de voz?</p>
                <div class="dialog__actions">
                  <button
                    type="button"
                    class="dialog__button dialog__button--danger"
                    @click=${()=>e.handleVoiceDialogConfirm()}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    class="dialog__button dialog__button--primary"
                    @click=${()=>e.handleVoiceDialogContinue()}
                  >
                    ${e.voiceCancelDialogMode==="cancel"?"CONTINUAR GRAVAÇÃO":"MANTER GRAVAÇÃO"}
                  </button>
                </div>
              </div>
            </div>
          `:null}
      ${e.newConversationConfirmOpen?y`
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
  `};function Sr(e){return{id:e.conversation.id,title:e.conversation.title,index:e.index,action:e.action}}function Rr(e){return e==="rename"?"rioassist:conversation-rename":"rioassist:conversation-delete"}function mu(){return{conversationHistoryError:""}}function xu(e,t){return t instanceof Error&&t.message?t.message:e==="rename"?"Nao foi possivel renomear a conversa.":"Nao foi possivel excluir a conversa."}function Cu(e){const t=!!(e.pendingConversationAction&&e.pendingConversationAction.conversationId===e.conversationId&&e.pendingConversationAction.action===e.action);return{conversationHistoryError:"",pendingConversationAction:t?null:e.pendingConversationAction,conversationActionError:t?null:void 0}}function Dr(e,t){return{...e,message:t}}function _r(e){if(e.currentMenuId===e.targetId)return{conversationMenuId:null,conversationMenuPlacement:"below"};const t=e.buttonRect,n=e.containerRect,u=t&&n&&n.bottom-t.bottom<140?"above":"below";return{conversationMenuId:e.targetId,conversationMenuPlacement:u}}function Fr(e){return e?!e.closest(".conversation-menu")&&!e.closest(".conversation-menu-button"):!0}function Tr(e){const t=e.conversations.findIndex(u=>u.id===e.id);if(t===-1)return null;const n=e.conversations[t];return e.action==="delete"?{deleteConversationTarget:{id:n.id,title:n.title,index:t},renameConversationTarget:null}:{deleteConversationTarget:null,renameConversationTarget:{id:n.id,title:n.title,index:t,draft:n.title}}}function Br(e,t){return{...e,draft:t}}function et(e,t){if(!t)return{activeConversationTitle:null,activeConversationUpdatedAt:null};const n=e.find(u=>u.id===t)??null;return{activeConversationTitle:(n==null?void 0:n.title)??null,activeConversationUpdatedAt:(n==null?void 0:n.updatedAt)??null}}function Mr(e,t){var n;return{currentConversationId:e,activeConversationTitle:((n=t.find(u=>u.id===e))==null?void 0:n.title)??null}}function Ur(e){const{conversations:t,currentConversationId:n,conversationId:u,newTitle:i}=e;let o=!1;const r=t.map(a=>a.id!==u?a:(o=!0,{...a,title:i})),s=et(o?r:t,n);return{conversations:r,changed:o,...s}}function Pr(e){const{conversations:t,currentConversationId:n,conversationId:u,messages:i}=e,o=n===u,r=t.filter(d=>d.id!==u);if(!(r.length!==t.length)){const d=et(t,n);return{conversations:t,removed:!1,currentConversationId:n,messages:i,...d}}const a=o?null:n,c=et(r,a);return{conversations:r,removed:!0,currentConversationId:a,messages:o?[]:i,...c}}function vu(e){const{conversations:t,snapshot:n,index:u}=e;if(!n||t.some(s=>s.id===n.id))return t;const o=[...t],r=u>=0&&u<=o.length?u:o.length;return o.splice(r,0,n),o}function Lr(e){const{target:t,conversations:n,currentConversationId:u,messages:i,nowIsoString:o}=e,r=n[t.index]??n.find(a=>a.id===t.id)??{id:t.id,title:t.title,updatedAt:o},s=u===t.id;return{action:"delete",conversationId:t.id,originalTitle:t.title,index:t.index,snapshot:r,messagesSnapshot:s?[...i]:void 0,wasActive:s}}function Or(e){return{action:"rename",conversationId:e.id,originalTitle:e.title,index:e.index,newTitle:e.draft.trim()}}function Nr(e){const{errorState:t,conversations:n,nowIsoString:u}=e,i=typeof t.index=="number"?t.index:n.findIndex(s=>s.id===t.conversationId),o=i>=0?i:n.length>0?n.length-1:0,r=t.snapshot??n.find(s=>s.id===t.conversationId)??{id:t.conversationId,title:t.originalTitle,updatedAt:u};return{action:t.action,conversationId:t.conversationId,originalTitle:t.originalTitle,index:o,newTitle:t.newTitle,snapshot:r,messagesSnapshot:t.messagesSnapshot,wasActive:t.wasActive}}function en(e){const{conversations:t,currentConversationId:n}=e;return{conversations:t,conversationHistoryLoading:!1,conversationHistoryError:"",...et(t,n)}}function wu(e){const{messages:t,currentConversationId:n}=e,u={messages:t,showConversations:!1,isLoading:!1,conversationHistoryLoading:!1,showNewConversationShortcut:t.length>0,refreshConversationsAfterResponse:!1};return n&&(u.currentConversationId=n),u}function Hr(e,t){const n=(e.action??"").toLowerCase();if(n==="conversationrenamed"){const u=e.data,i=t(vt(u,["conversationId","id"])??""),o=vt(u,["newTitle","title"]);return i&&o?{kind:"rename",conversationId:i,newTitle:o}:{kind:"processing"}}if(n==="conversationdeleted"){const u=e.data,i=t(vt(u,["conversationId","id"])??"");return i?{kind:"delete",conversationId:i}:{kind:"processing"}}return n==="processing"?{kind:"processing"}:null}function zr(e){if((e.action??"").toLowerCase()!=="error")return null;const n=e.data;return vt(n,["error","message","detail","description"])||(typeof e.text=="string"&&e.text.trim()?e.text:"O agente retornou um erro ao processar a conversa.")}function Qr(e){if(!e)return!1;const t=e.toLowerCase();return t==="processing"||t==="conversationrenamed"||t==="conversationdeleted"}function vt(e,t){if(!e||typeof e!="object")return null;for(const n of t){const u=e[n];if(typeof u=="string"&&u.trim())return u}return null}function jr(e,t){if(!t)return;const n=Mr(t,e.conversations);return e.showConversations=!1,e.conversationMenuId=null,e.errorMessage="",e.currentConversationId=n.currentConversationId,e.activeConversationTitle=n.activeConversationTitle,e.requestConversationHistory(t)}function Vr(e){return e.target.value}function qr(e,t,n,u){t.stopPropagation();const i=t.currentTarget,o=u.querySelector(".conversations-panel__surface"),r=_r({currentMenuId:e.conversationMenuId,targetId:n,buttonRect:(i==null?void 0:i.getBoundingClientRect())??null,containerRect:(o==null?void 0:o.getBoundingClientRect())??null});e.conversationMenuId=r.conversationMenuId,e.conversationMenuPlacement=r.conversationMenuPlacement}function Gr(e,t){const n=t.target;Fr(n)&&(e.conversationMenuId=null)}function Yr(e,t,n){e.conversationMenuId=null;const u=Tr({action:t,id:n,conversations:e.conversations});u&&(e.deleteConversationTarget=u.deleteConversationTarget,e.renameConversationTarget=u.renameConversationTarget)}async function Xr(e){const t=e.deleteConversationTarget;if(!t)return;if(e.pendingConversationAction=Lr({target:t,conversations:e.conversations,currentConversationId:e.currentConversationId,messages:e.messages,nowIsoString:new Date().toISOString()}),await tn(e,"delete",{id:t.id,title:t.title},t.index)){e.deleteConversationTarget=null;return}e.pendingConversationAction=null}function Wr(e){e.deleteConversationTarget=null}function Jr(e,t){e.renameConversationTarget&&(e.renameConversationTarget=Br(e.renameConversationTarget,t.target.value))}async function Zr(e){const t=e.renameConversationTarget;if(!t)return;const n=t.draft.trim();if(!n)return;if(e.pendingConversationAction=Or({...t,draft:n}),await tn(e,"rename",{id:t.id,title:n},t.index,n)){e.renameConversationTarget=null;return}e.pendingConversationAction=null}function Kr(e){e.renameConversationTarget=null}function $r(e){e.conversationActionError=null,e.pendingConversationAction=null}async function es(e){const t=e.conversationActionError;t&&(e.pendingConversationAction=Nr({errorState:t,conversations:e.conversations,nowIsoString:new Date().toISOString()}),e.conversationActionError=null,await tn(e,t.action,{id:t.conversationId,title:t.newTitle??t.originalTitle},e.pendingConversationAction.index,t.newTitle))}async function tn(e,t,n,u,i){const o=Rr(t),r=Sr({action:t,conversation:n,index:u});return e.dispatchEvent(new CustomEvent(o,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))?t==="delete"?ns(e,n.id):t==="rename"&&i?ts(e,n.id,i):!1:!1}async function ts(e,t,n){try{return await e.ensureRioClient().renameConversation(t,n),e.applyConversationRename(t,n),e.conversationHistoryError=mu().conversationHistoryError,!0}catch(u){return e.conversationHistoryError=xu("rename",u),!1}}async function ns(e,t){try{return await e.ensureRioClient().deleteConversation(t),e.applyConversationDeletion(t),e.conversationHistoryError=mu().conversationHistoryError,!0}catch(n){return e.conversationHistoryError=xu("delete",n),!1}}function us(e,t){const n=Hr(t,u=>e.repairConversationId(u));if(!n)return!1;if(n.kind==="rename"){e.applyConversationRename(n.conversationId,n.newTitle);const u=Cu({pendingConversationAction:e.pendingConversationAction,conversationId:n.conversationId,action:"rename"});return e.conversationHistoryError=u.conversationHistoryError,e.pendingConversationAction=u.pendingConversationAction,u.conversationActionError===null&&(e.conversationActionError=null),!0}if(n.kind==="delete"){e.applyConversationDeletion(n.conversationId);const u=Cu({pendingConversationAction:e.pendingConversationAction,conversationId:n.conversationId,action:"delete"});return e.conversationHistoryError=u.conversationHistoryError,e.pendingConversationAction=u.pendingConversationAction,u.conversationActionError===null&&(e.conversationActionError=null),!0}return n.kind==="processing"}function is(e,t){var i;const n=zr(t);if(!n)return!1;const u=e.pendingConversationAction;return u?(u.action==="rename"&&e.applyConversationRename(u.conversationId,u.originalTitle),u.action==="delete"&&(e.conversations=vu({conversations:e.conversations,snapshot:u.snapshot,index:u.index}),u.wasActive&&(e.currentConversationId=u.conversationId,e.activeConversationTitle=u.originalTitle,e.activeConversationUpdatedAt=((i=u.snapshot)==null?void 0:i.updatedAt)??null,e.messages=u.messagesSnapshot??e.messages)),e.conversationActionError=Dr(u,n),e.pendingConversationAction=null,e.loadingGuard.clear(),e.isLoading=!1,!0):(e.errorMessage=n,e.loadingGuard.clear(),e.isLoading=!1,!0)}const os="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Em qual assunto posso ajudar você hoje?",yu=e=>`Certo! Reuni abaixo as principais dúvidas sobre ${e}. Escolha uma delas ou faça sua pergunta.`,nn=typeof{url:b&&b.tagName.toUpperCase()==="SCRIPT"&&b.src||new URL("rio-assist.js",document.baseURI).href}<"u"&&!1,ke={info:(...e)=>{nn&&console.info(...e)},warn:(...e)=>{nn&&console.warn(...e)},error:(e,...t)=>{if(nn){console.error(e,...t);return}if(typeof e=="string"){console.error(e);return}console.error("RioAssist error")}},rs="https://consultant-api.latam-sandbox.rio.cloud/consultant/api/v1";async function ss(e){const t=(e==null?void 0:e.trim())||rs;try{const n=await fetch(`${t}/branches`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`Erro ao buscar branches do consultor: ${n.status}`);const u=await n.json();if(!Array.isArray(u))throw new Error("Formato inesperado da API de branches do consultor.");return u.map((o,r)=>as(o,r)).filter(o=>!!o).sort((o,r)=>{const s=(o.order??0)-(r.order??0);return s!==0?s:o.label.localeCompare(r.label)})}catch(n){return ke.error("[ConsultantAgent] Falha ao carregar branches da API.",n),[]}}function as(e,t){if(!e||typeof e!="object")return null;const n=e;if(!(n.active!==!1))return null;const i=typeof n.branchId=="string"?n.branchId:"",o=typeof n.label=="string"?n.label:"";if(!i||!o)return null;const s=(Array.isArray(n.questions)?n.questions:[]).map(a=>cs(a)).filter(a=>!!a);return{id:typeof n.id=="string"&&n.id?n.id:i,branchId:i,label:o,businessObjective:typeof n.businessObjective=="string"?n.businessObjective:void 0,order:typeof n.order=="number"?n.order:typeof n.order=="string"?Number(n.order):t+1,active:!0,questions:s}}function cs(e){if(!e||typeof e!="object")return null;const t=e;if(!(t.active!==!1))return null;const u=typeof t.questionId=="string"?t.questionId:"",i=typeof t.prompt=="string"?t.prompt:"";return!u||!i?null:{questionId:u,prompt:i,level:typeof t.level=="string"?t.level:void 0,levelLabel:typeof t.levelLabel=="string"?t.levelLabel:void 0,expectedResponse:typeof t.expectedResponse=="string"?t.expectedResponse:void 0,order:typeof t.order=="number"?t.order:typeof t.order=="string"?Number(t.order):void 0,active:!0}}function ls(){return{showSuggestions:!0,consultantAgentVisible:!1,activeConsultantFollowUpId:null,activeConsultantBranchId:null,activeConsultantPromptId:null,consultantAgentStage:"idle",consultantOptionsSuppressed:!1,pendingConsultantFollowUpId:null,lastConsultantPromptId:null,lastConsultantFollowUpId:null,lastConsultantFollowUpPayload:null}}function ds(e){return e.state.consultantAgentStage==="awaiting"?null:{introMessage:e.createMessage("assistant",e.consultantAgentInitialMessage.trim()||e.defaultInitialMessage),shouldBootstrapOptions:e.consultantAgentOptions.length===0,initialPrompt:"Resumo da Frota",state:{...e.state,showSuggestions:!1,consultantOptionsSuppressed:!1,consultantAgentStage:"awaiting",activeConsultantPromptId:null,pendingConsultantFollowUpId:null,activeConsultantFollowUpId:null}}}function fs(e){var o;const t=e.option.label.trim();if(!t)return null;const n=((o=e.option.questions)==null?void 0:o.filter(r=>r&&typeof r.prompt=="string"&&typeof r.questionId=="string"))??[],u=[];e.hasMessages||u.push(e.createMessage("assistant",e.consultantAgentIntro)),u.push(e.createMessage("user",t));const i=e.createId(12);return u.push(e.createMessage("assistant",yu(t),{id:i,topicId:e.option.branchId??e.option.id,topicLabel:t,questions:n})),{messages:u,state:{...e.state,consultantAgentVisible:!1,showSuggestions:!1,activeConsultantFollowUpId:i,activeConsultantBranchId:e.option.branchId??e.option.id,activeConsultantPromptId:null,consultantOptionsSuppressed:!1,pendingConsultantFollowUpId:null,lastConsultantFollowUpId:i,lastConsultantFollowUpPayload:{topicId:e.option.branchId??e.option.id,topicLabel:t,questions:n}}}}function Eu(e){if(e.state.consultantOptionsSuppressed)return null;const t=e.createId(12),n="Em qual assunto posso ajudar você hoje?";return{promptMessage:{...e.createMessage("assistant",n),consultantPrompt:{id:t,text:n,options:[...e.consultantAgentOptions]}},state:{...e.state,lastConsultantPromptId:t,activeConsultantPromptId:t,activeConsultantFollowUpId:null,pendingConsultantFollowUpId:null,activeConsultantBranchId:null,lastConsultantFollowUpId:null,lastConsultantFollowUpPayload:null,consultantAgentStage:"ready"}}}function hs(e){const t=e.state.activeConsultantBranchId;return{state:{...e.state,pendingConsultantFollowUpId:e.state.activeConsultantFollowUpId??e.state.lastConsultantFollowUpId,activeConsultantFollowUpId:null},message:e.question.prompt,options:{consultantContext:{branchId:t??null,branchLabel:gs(e.consultantAgentOptions,t),questionId:e.question.questionId,questionLevel:e.question.level??null},isConsultantAgent:!0}}}function ps(e){const t=[];let n={...e.state};if(e.state.consultantAgentStage==="awaiting"){const u=Eu({state:e.state,consultantAgentOptions:e.consultantAgentOptions,createMessage:e.createMessage,createId:e.createId});u&&(t.push(u.promptMessage),n={...n,...u.state})}if(!n.consultantOptionsSuppressed&&n.lastConsultantFollowUpPayload&&(n.pendingConsultantFollowUpId||n.lastConsultantFollowUpId)){const u=e.createId(12);t.push(e.createMessage("assistant",yu(n.lastConsultantFollowUpPayload.topicLabel),{id:u,topicId:n.lastConsultantFollowUpPayload.topicId,topicLabel:n.lastConsultantFollowUpPayload.topicLabel,questions:n.lastConsultantFollowUpPayload.questions})),n={...n,activeConsultantFollowUpId:u,pendingConsultantFollowUpId:null,lastConsultantFollowUpId:u}}return{messages:t,state:n}}function As(e){return{...e,consultantOptionsSuppressed:!0,activeConsultantFollowUpId:null,activeConsultantPromptId:null,pendingConsultantFollowUpId:null}}function gs(e,t){if(!t)return null;const n=e.find(u=>u.branchId===t||u.id===t);return n?n.label:null}function bs(e,t){const n=ds({state:e.getConsultantFlowState(),consultantAgentOptions:e.consultantAgentOptions,consultantAgentInitialMessage:e.consultantAgentInitialMessage,defaultInitialMessage:t,createMessage:(u,i,o,r)=>e.createMessage(u,i,o,r)});n&&(n.shouldBootstrapOptions&&e.bootstrapConsultantAgent(),e.messages=[...e.messages,n.introMessage],e.applyConsultantFlowState(n.state),e.processMessage(n.initialPrompt,{suppressUserMessage:!0}))}function ms(e,t){const n=fs({option:t,hasMessages:e.messages.length>0,consultantAgentIntro:e.consultantAgentIntro,createMessage:(u,i,o,r)=>e.createMessage(u,i,o,r),createId:u=>e.randomId(u),state:e.getConsultantFlowState()});n&&(e.messages=[...e.messages,...n.messages],e.applyConsultantFlowState(n.state),e.errorMessage="",e.showNewConversationShortcut=!0,e.requestUpdate(),e.scrollConversationToBottom())}function xs(e){const t=Eu({state:e.getConsultantFlowState(),consultantAgentOptions:e.consultantAgentOptions,createMessage:(n,u,i,o)=>e.createMessage(n,u,i,o),createId:n=>e.randomId(n)});t&&(e.messages=[...e.messages,t.promptMessage],e.applyConsultantFlowState(t.state),e.scrollConversationToBottom())}async function Cs(e,t){const n=hs({state:e.getConsultantFlowState(),consultantAgentOptions:e.consultantAgentOptions,question:t});e.applyConsultantFlowState(n.state),await e.processMessage(t.prompt,n.options)}const un=3,vs=10*1024*1024,ku={text:["txt","doc","docx"],sheet:["xls","xlsx","csv"],pdf:["pdf"],image:["jpg","jpeg","png"],audio:["wav","mp3","m4a","ogg","webm"]},Iu={text:"Documento de Texto",sheet:"Planilha",pdf:"Documento PDF",image:"Imagem",audio:"Mensagem de audio"};function ws(e){const t=e.split(".");return t.length<2?"":t[t.length-1].toLowerCase()}function ys(e){const t=e.toLowerCase(),n=Object.entries(ku);for(const[u,i]of n)if(i.includes(t))return u;return null}function Es(e,t){if(e.size>vs)return{error:`O arquivo ${e.name} excede 10 MB.`};const n=ws(e.name),u=ys(n);return u?{item:{id:t.createId(),file:e,name:e.name,typeLabel:Iu[u],kind:u,previewUrl:u==="image"?t.createPreviewUrl(e):void 0}}:{error:`Formato nao suportado: ${e.name}.`}}function ks(e,t,n){const u=[...e];let i="";for(const o of t){if(u.length>=un){i="Voce pode anexar no maximo 3 arquivos.";break}const{item:r,error:s}=Es(o,n);if(s){i=s;continue}r&&u.push(r)}return{files:u,error:i}}function Is(e){const t=e.toLowerCase();return t.includes("ogg")?"ogg":t.includes("mpeg")||t.includes("mp3")?"mp3":t.includes("wav")?"wav":t.includes("mp4")||t.includes("m4a")?"m4a":(t.includes("webm"),"webm")}function Ss(e,t){const n=Is(e.type||"audio/webm"),u=`mensagem-voz-${t()}.${n}`;return new File([e],u,{type:e.type||"audio/webm"})}function Rs(e){if(!e.blob||e.blob.size===0)return null;if(e.existingFiles.length>=un)return{error:"Voce pode anexar no maximo 3 arquivos."};const t=Ss(e.blob,e.now),n=e.createId(),u=e.transcriptSegments.join(" ").trim()||e.transcriptPreview;return{item:{id:n,file:t,name:t.name,typeLabel:Iu.audio,kind:"audio"},voiceAttachmentId:n,voiceTranscript:u.trim()}}function Ds(e,t){const n=e.find(i=>i.id===t)??null,u=e.filter(i=>i.id!==t);return{removed:n,files:u,shouldClearError:u.length===0}}function _s(e){return ks(e.currentFiles,e.incomingFiles,{createId:e.createId,createPreviewUrl:e.createPreviewUrl})}function Fs(e){return Ds(e.currentFiles,e.id)}function Ts(){return{voiceTranscript:"",voiceTranscriptPreview:"",voiceTranscriptSegments:[]}}function Bs(){return{isRecording:!0,isRecordingPaused:!1}}function Ms(){return{isRecordingPaused:!0}}function Us(){return{isRecordingPaused:!1}}function Ps(){return{isRecording:!1,isRecordingPaused:!1,voiceCancelDialogOpen:!1,voiceTranscriptPreview:"",voiceTranscriptSegments:[]}}function Su(){return{isRecording:!1,isRecordingPaused:!1,voiceCancelDialogOpen:!1,voiceTranscript:"",voiceTranscriptPreview:"",voiceTranscriptSegments:[]}}function Ls(e,t){return t?"error"in t?{...e,attachmentError:t.error??""}:{selectedFiles:[...e.selectedFiles,t.item],attachmentError:"",voiceAttachmentId:t.voiceAttachmentId,voiceTranscript:t.voiceTranscript}:e}function Os(e){return{voiceCancelDialogMode:"remove",pendingVoiceRemovalId:e,voiceCancelDialogOpen:!0}}function Ns(){return{voiceCancelDialogOpen:!1,pendingVoiceRemovalId:null,shouldResume:!0}}function Hs(){return{voiceCancelDialogOpen:!1,pendingVoiceRemovalId:null,shouldResume:!1}}function zs(e){const{selectedFiles:t,targetId:n,voiceAttachmentId:u}=e,i=n?t.filter(r=>r.id!==n):t,o=!!(n&&u===n);return{selectedFiles:i,voiceAttachmentId:o?null:u,voiceTranscript:o?"":void 0,pendingVoiceRemovalId:null,voiceCancelDialogOpen:!1,attachmentError:i.length===0?"":void 0}}function Qs(e){return{selectedFiles:e.files,attachmentError:e.shouldClearError?"":void 0}}function js(e){e.voiceCapture.teardown();const t=Su();e.voiceTranscript=t.voiceTranscript,e.voiceTranscriptSegments=t.voiceTranscriptSegments,e.voiceTranscriptPreview=t.voiceTranscriptPreview,e.isRecording=t.isRecording,e.isRecordingPaused=t.isRecordingPaused}function Ru(e,t,n){const u=Rs({blob:t,existingFiles:e.selectedFiles,transcriptSegments:n?[n]:[],transcriptPreview:n,createId:()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():e.randomId(12),now:()=>Date.now()}),i=Ls({selectedFiles:e.selectedFiles,attachmentError:e.attachmentError},u);e.selectedFiles=i.selectedFiles,e.attachmentError=i.attachmentError,"voiceAttachmentId"in i&&(e.voiceAttachmentId=i.voiceAttachmentId),"voiceTranscript"in i&&(e.voiceTranscript=i.voiceTranscript)}async function Vs(e){if(e.isVoiceButtonDisabled)return;const t=Ts();if(e.voiceTranscriptSegments=t.voiceTranscriptSegments,e.voiceTranscriptPreview=t.voiceTranscriptPreview,e.voiceTranscript=t.voiceTranscript,!await e.voiceCapture.start({onTranscriptPreview:(i,o)=>{e.voiceTranscriptPreview=i,e.voiceTranscriptSegments=o},onSpeechRecognitionAvailabilityChange:i=>{e.speechRecognitionAvailable=i},onError:i=>{e.errorMessage=i},isRecordingActive:()=>e.isRecording,isRecordingPaused:()=>e.isRecordingPaused}))return;const u=Bs();e.isRecording=u.isRecording,e.isRecordingPaused=u.isRecordingPaused}function qs(e){!e.isRecording||e.isRecordingPaused||(e.voiceCapture.pause(),e.isRecordingPaused=Ms().isRecordingPaused)}function Du(e){!e.isRecording||!e.isRecordingPaused||(e.voiceCapture.resume({onTranscriptPreview:(t,n)=>{e.voiceTranscriptPreview=t,e.voiceTranscriptSegments=n},onSpeechRecognitionAvailabilityChange:t=>{e.speechRecognitionAvailable=t},onError:t=>{e.errorMessage=t},isRecordingActive:()=>e.isRecording,isRecordingPaused:()=>e.isRecordingPaused}),e.isRecordingPaused=Us().isRecordingPaused)}async function Gs(e){if(!e.isRecording)return;const t=Ps();e.isRecording=t.isRecording,e.isRecordingPaused=t.isRecordingPaused,e.voiceCancelDialogOpen=t.voiceCancelDialogOpen;const n=await e.voiceCapture.stop();n.blob&&Ru(e,n.blob,n.transcript),e.voiceTranscriptSegments=t.voiceTranscriptSegments,e.voiceTranscriptPreview=t.voiceTranscriptPreview}async function _u(e){const t=Su();e.isRecording=t.isRecording,e.isRecordingPaused=t.isRecordingPaused,e.voiceCancelDialogOpen=t.voiceCancelDialogOpen,await e.voiceCapture.discard(),e.voiceTranscript=t.voiceTranscript,e.voiceTranscriptSegments=t.voiceTranscriptSegments,e.voiceTranscriptPreview=t.voiceTranscriptPreview}function Ys(e){if(e.voiceCancelDialogMode==="cancel"){_u(e);return}const t=e.pendingVoiceRemovalId;if(t){const n=zs({selectedFiles:e.selectedFiles,targetId:t,voiceAttachmentId:e.voiceAttachmentId});e.selectedFiles=n.selectedFiles,e.voiceAttachmentId=n.voiceAttachmentId,typeof n.voiceTranscript=="string"&&(e.voiceTranscript=n.voiceTranscript),e.pendingVoiceRemovalId=n.pendingVoiceRemovalId,e.voiceCancelDialogOpen=n.voiceCancelDialogOpen,typeof n.attachmentError=="string"&&(e.attachmentError=n.attachmentError);return}e.voiceCancelDialogOpen=!1}function Xs(e){if(e.voiceCancelDialogMode==="cancel"){const n=Ns();e.voiceCancelDialogOpen=n.voiceCancelDialogOpen,e.pendingVoiceRemovalId=n.pendingVoiceRemovalId,Du(e);return}const t=Hs();e.voiceCancelDialogOpen=t.voiceCancelDialogOpen,e.pendingVoiceRemovalId=t.pendingVoiceRemovalId}function Fu(e,t){if(e.isRecording)return;const n=Os(t);e.voiceCancelDialogMode=n.voiceCancelDialogMode,e.pendingVoiceRemovalId=n.pendingVoiceRemovalId,e.voiceCancelDialogOpen=n.voiceCancelDialogOpen}function Ws(e){if(e.isFilePickerDisabled)return;const t=e.renderRoot.querySelector(".file-input");t&&!t.disabled&&t.click()}function Js(e,t){const n=t.target;if(!n)return;const u=e.selectedFiles,i=Array.from(n.files??[]);if(n.value="",i.length===0)return;const o=_s({currentFiles:e.selectedFiles,incomingFiles:i,createId:()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():e.randomId(12),createPreviewUrl:r=>URL.createObjectURL(r)});e.selectedFiles=o.files,e.attachmentError=o.error,u.forEach(r=>{r.previewUrl&&!e.selectedFiles.find(s=>s.id===r.id)&&URL.revokeObjectURL(r.previewUrl)})}function Zs(e,t){const n=Fs({currentFiles:e.selectedFiles,id:t}),u=n.removed;if((u==null?void 0:u.kind)==="audio"){Fu(e,t);return}const i=Qs(n);e.selectedFiles=i.selectedFiles,u!=null&&u.previewUrl&&URL.revokeObjectURL(u.previewUrl),typeof i.attachmentError=="string"&&(e.attachmentError=i.attachmentError)}function Ks(e){let t=null,n=e,u;try{if(t=JSON.parse(e),typeof t=="object"&&t!==null){const i=t,o=i.action??i.type??i.event;typeof o=="string"&&(u=o);const r=i.message??i.response??i.text??i.content;typeof r=="string"&&(n=r)}}catch{t=null}return{parsed:t,text:n,action:u}}const Tu="wss://ws.volkswagen.latam-sandbox.rio.cloud",$s=5*6e4;class ea{constructor(t,n){var u;this.socket=null,this.connectPromise=null,this.listeners=new Set,this.heartbeatId=null,this.token=t,this.websocketUrl=((u=n==null?void 0:n.websocketUrl)==null?void 0:u.trim())||Tu}matchesConnection(t,n){const u=(n==null?void 0:n.trim())||Tu;return this.token===t&&this.websocketUrl===u}async sendMessage(t,n,u){const i=await this.ensureConnection(),o={action:"sendMessage",message:t,conversationId:n??null,...u??{}};ke.info("[RioAssist][ws] enviando payload de mensagem",o),i.send(JSON.stringify(o))}async requestHistory(t={}){const n=await this.ensureConnection(),u={action:"getHistory",limit:t.limit??50,conversationId:t.conversationId??null};n.send(JSON.stringify(u))}async renameConversation(t,n){const u=await this.ensureConnection(),i={action:"renameConversation",conversationId:t,newTitle:n};ke.info("[RioAssist][ws] enviando renameConversation",i),u.send(JSON.stringify(i))}async deleteConversation(t){const n=await this.ensureConnection(),u={action:"deleteConversation",conversationId:t};ke.info("[RioAssist][ws] enviando deleteConversation",u),n.send(JSON.stringify(u))}onMessage(t){return this.listeners.add(t),()=>this.listeners.delete(t)}close(){this.stopHeartbeat(),this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${this.websocketUrl}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",t=>this.handleMessage(t)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null,this.stopHeartbeat()}),this.connectPromise=new Promise((t,n)=>{if(!this.socket){n(new Error("Falha ao criar conexão WebSocket."));return}const u=()=>{o(),this.socket&&this.startHeartbeat(this.socket),t()},i=()=>{var r;o(),this.stopHeartbeat(),(r=this.socket)==null||r.close(),this.socket=null,this.connectPromise=null,n(new Error("Não foi possível abrir conexão com o websocket do UptAIme Assist."))},o=()=>{var r,s;(r=this.socket)==null||r.removeEventListener("open",u),(s=this.socket)==null||s.removeEventListener("error",i)};this.socket.addEventListener("open",u,{once:!0}),this.socket.addEventListener("error",i,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do UptAIme Assist não está pronta.");return this.socket}startHeartbeat(t){this.stopHeartbeat(),this.heartbeatId=window.setInterval(()=>{t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({action:"ping"}))},$s)}stopHeartbeat(){this.heartbeatId!==null&&(window.clearInterval(this.heartbeatId),this.heartbeatId=null)}async handleMessage(t){const n=await this.readMessage(t.data),{parsed:u,text:i,action:o}=Ks(n);this.listeners.forEach(r=>r({text:i,raw:n,data:u,action:o}))}async readMessage(t){return typeof t=="string"?t:t instanceof Blob?t.text():t instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(t)):ArrayBuffer.isView(t)?new TextDecoder().decode(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)):String(t??"")}}class ta{constructor(t=(n,u)=>new ea(n,u)){this.createClient=t,this.client=null,this.unsubscribe=null}ensureConnection(t){const n=t.token.trim();if(!n)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");const u=t.websocketUrl.trim();return(!this.client||!this.client.matchesConnection(n,u))&&(this.teardown(),this.client=this.createClient(n,{websocketUrl:u}),this.unsubscribe=this.client.onMessage(t.onMessage)),this.client}teardown(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.client&&(this.client.close(),this.client=null)}}class na{loadOptions(t){return ss(t)}}class ua{constructor(t){this.logger=t,this.recorder=null,this.stream=null,this.recordingChunks=[],this.speechRecognizer=null,this.transcriptSegments=[],this.transcriptPreview=""}async start(t){const n=await this.requestMicrophoneStream(t.onError);if(!n)return t.onSpeechRecognitionAvailabilityChange(!1),!1;this.stream=n,this.recordingChunks=[],this.transcriptSegments=[],this.transcriptPreview="";const u=this.createVoiceRecorder(n);return this.recorder=u,u.ondataavailable=i=>{i.data&&i.data.size>0&&this.recordingChunks.push(i.data)},u.onstop=()=>{this.cleanupVoiceStream()},u.start(),this.startSpeechRecognition(t),!0}pause(){!this.recorder||this.recorder.state!=="recording"||(this.recorder.pause(),this.stopSpeechRecognition())}resume(t){!this.recorder||this.recorder.state!=="paused"||(this.recorder.resume(),this.startSpeechRecognition(t))}async stop(){this.stopSpeechRecognition();const t=await this.stopRecorder();this.cleanupVoiceStream();const n=this.transcriptSegments.join(" ").trim()||this.transcriptPreview.trim();return this.clearRecorder(),{blob:t,transcript:n}}async discard(){this.stopSpeechRecognition(),await this.stopRecorder(),this.cleanupVoiceStream(),this.clearRecorder()}teardown(){this.recorder&&this.recorder.state!=="inactive"&&this.recorder.stop(),this.stopSpeechRecognition(),this.cleanupVoiceStream(),this.clearRecorder()}async requestMicrophoneStream(t){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return t("Seu navegador nao suporta gravacao de audio."),null;try{return await navigator.mediaDevices.getUserMedia({audio:!0})}catch(n){return this.logger.error("[RioAssist][voice] erro ao acessar microfone",n),t("Nao foi possivel acessar o microfone."),null}}createVoiceRecorder(t){const u=["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4"].find(i=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(i));return u?new MediaRecorder(t,{mimeType:u}):new MediaRecorder(t)}startSpeechRecognition(t){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){t.onSpeechRecognitionAvailabilityChange(!1);return}this.stopSpeechRecognition();const u=new n;u.lang="pt-BR",u.continuous=!0,u.interimResults=!0,u.onresult=i=>{var r;let o="";for(let s=i.resultIndex;s<i.results.length;s+=1){const a=i.results[s],c=((r=a[0])==null?void 0:r.transcript)??"";a.isFinal?this.transcriptSegments.push(c.trim()):o+=c}this.transcriptPreview=[...this.transcriptSegments,o.trim()].filter(Boolean).join(" ").trim(),this.transcriptPreview&&this.logger.info("[RioAssist][voice] transcricao parcial",this.transcriptPreview),t.onTranscriptPreview(this.transcriptPreview,[...this.transcriptSegments])},u.onstart=()=>{this.logger.info("[RioAssist][voice] reconhecimento iniciado")},u.onaudiostart=()=>{this.logger.info("[RioAssist][voice] audio captado (inicio)")},u.onaudioend=()=>{this.logger.info("[RioAssist][voice] audio captado (fim)")},u.onsoundstart=()=>{this.logger.info("[RioAssist][voice] som detectado")},u.onsoundend=()=>{this.logger.info("[RioAssist][voice] som terminou")},u.onspeechstart=()=>{this.logger.info("[RioAssist][voice] fala detectada")},u.onspeechend=()=>{this.logger.info("[RioAssist][voice] fala terminou")},u.onnomatch=i=>{this.logger.warn("[RioAssist][voice] fala nao reconhecida",i)},u.onend=()=>{if(this.logger.info("[RioAssist][voice] reconhecimento encerrado",{isRecording:t.isRecordingActive(),isRecordingPaused:t.isRecordingPaused()}),t.isRecordingActive()&&!t.isRecordingPaused())try{u.start()}catch(i){this.logger.warn("[RioAssist][voice] falha ao reiniciar reconhecimento",i)}},u.onerror=i=>{const o=i&&i.error||"";this.logger.error("[RioAssist][voice] erro no reconhecimento de voz",{error:o,message:(i==null?void 0:i.message)??null,event:i}),(o==="not-allowed"||o==="service-not-allowed"||o==="not-supported")&&t.onSpeechRecognitionAvailabilityChange(!1)};try{u.start(),this.speechRecognizer=u,t.onSpeechRecognitionAvailabilityChange(!0)}catch(i){this.logger.warn("[RioAssist][voice] nao foi possivel iniciar reconhecimento",i),this.speechRecognizer=null,t.onSpeechRecognitionAvailabilityChange(!1)}}stopSpeechRecognition(){if(this.speechRecognizer){try{this.speechRecognizer.onresult=null,this.speechRecognizer.onerror=null,this.speechRecognizer.onend=null,this.speechRecognizer.stop()}catch(t){this.logger.warn("[RioAssist][voice] erro ao interromper reconhecimento",t)}this.speechRecognizer=null}}stopRecorder(){return new Promise(t=>{const n=this.recorder;if(!n){t(null);return}const u=()=>{n.removeEventListener("stop",u);const i=n.mimeType||"audio/webm",o=this.recordingChunks.length>0?new Blob(this.recordingChunks,{type:i}):null;t(o)};n.addEventListener("stop",u),n.state!=="inactive"?n.stop():u()})}cleanupVoiceStream(){this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null)}clearRecorder(){this.recordingChunks=[],this.transcriptSegments=[],this.transcriptPreview="",this.recorder&&(this.recorder.ondataavailable=null,this.recorder.onstop=null,this.recorder=null)}}const ia="UptAIme Assist está respondendo...";class oa{constructor(t){this.timerSlow=null,this.timerLong=null,this.timerVeryLong=null,this.onLabelChange=t.onLabelChange,this.onRequestUpdate=t.onRequestUpdate}start(){this.clear(),this.onLabelChange("UptAIme Assist está respondendo"),this.timerSlow=window.setTimeout(()=>{var t;this.onLabelChange("UptAIme Assist continua respondendo"),(t=this.onRequestUpdate)==null||t.call(this)},2e4),this.timerLong=window.setTimeout(()=>{var t;this.onLabelChange("UptAIme Assist ainda está processando sua resposta. Peço que aguarde um pouco mais"),(t=this.onRequestUpdate)==null||t.call(this)},6e4),this.timerVeryLong=window.setTimeout(()=>{var t;this.onLabelChange("Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco"),(t=this.onRequestUpdate)==null||t.call(this)},12e4)}clear(){this.timerSlow!==null&&(window.clearTimeout(this.timerSlow),this.timerSlow=null),this.timerLong!==null&&(window.clearTimeout(this.timerLong),this.timerLong=null),this.timerVeryLong!==null&&(window.clearTimeout(this.timerVeryLong),this.timerVeryLong=null)}}const Bu={};function ra(e){let t=Bu[e];if(t)return t;t=Bu[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function Te(e,t){typeof t!="string"&&(t=Te.defaultChars);const n=ra(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let i="";for(let o=0,r=u.length;o<r;o+=3){const s=parseInt(u.slice(o+1,o+3),16);if(s<128){i+=n[s];continue}if((s&224)===192&&o+3<r){const a=parseInt(u.slice(o+4,o+6),16);if((a&192)===128){const c=s<<6&1984|a&63;c<128?i+="��":i+=String.fromCharCode(c),o+=3;continue}}if((s&240)===224&&o+6<r){const a=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16);if((a&192)===128&&(c&192)===128){const d=s<<12&61440|a<<6&4032|c&63;d<2048||d>=55296&&d<=57343?i+="���":i+=String.fromCharCode(d),o+=6;continue}}if((s&248)===240&&o+9<r){const a=parseInt(u.slice(o+4,o+6),16),c=parseInt(u.slice(o+7,o+9),16),d=parseInt(u.slice(o+10,o+12),16);if((a&192)===128&&(c&192)===128&&(d&192)===128){let f=s<<18&1835008|a<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),o+=9;continue}}i+="�"}return i})}Te.defaultChars=";/?:@&=+$,#",Te.componentChars="";const Mu={};function sa(e){let t=Mu[e];if(t)return t;t=Mu[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function tt(e,t,n){typeof t!="string"&&(n=t,t=tt.defaultChars),typeof n>"u"&&(n=!0);const u=sa(t);let i="";for(let o=0,r=e.length;o<r;o++){const s=e.charCodeAt(o);if(n&&s===37&&o+2<r&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(s<128){i+=u[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<r){const a=e.charCodeAt(o+1);if(a>=56320&&a<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}tt.defaultChars=";/?:@&=+$,-_.!~*'()#",tt.componentChars="-_.!~*'()";function on(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function wt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const aa=/^([a-z0-9.+-]+:)/i,ca=/:[0-9]*$/,la=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,da=["<",">",'"',"`"," ","\r",`
`,"	"],fa=["{","}","|","\\","^","`"].concat(da),ha=["'"].concat(fa),Uu=["%","/","?",";","#"].concat(ha),Pu=["/","?","#"],pa=255,Lu=/^[+a-z0-9A-Z_-]{0,63}$/,Aa=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ou={javascript:!0,"javascript:":!0},Nu={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function rn(e,t){if(e&&e instanceof wt)return e;const n=new wt;return n.parse(e,t),n}wt.prototype.parse=function(e,t){let n,u,i,o=e;if(o=o.trim(),!t&&e.split("#").length===1){const c=la.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let r=aa.exec(o);if(r&&(r=r[0],n=r.toLowerCase(),this.protocol=r,o=o.substr(r.length)),(t||r||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(r&&Ou[r])&&(o=o.substr(2),this.slashes=!0)),!Ou[r]&&(i||r&&!Nu[r])){let c=-1;for(let h=0;h<Pu.length;h++)u=o.indexOf(Pu[h]),u!==-1&&(c===-1||u<c)&&(c=u);let d,f;c===-1?f=o.lastIndexOf("@"):f=o.lastIndexOf("@",c),f!==-1&&(d=o.slice(0,f),o=o.slice(f+1),this.auth=d),c=-1;for(let h=0;h<Uu.length;h++)u=o.indexOf(Uu[h]),u!==-1&&(c===-1||u<c)&&(c=u);c===-1&&(c=o.length),o[c-1]===":"&&c--;const A=o.slice(0,c);o=o.slice(c),this.parseHost(A),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const h=this.hostname.split(/\./);for(let k=0,I=h.length;k<I;k++){const D=h[k];if(D&&!D.match(Lu)){let v="";for(let w=0,m=D.length;w<m;w++)D.charCodeAt(w)>127?v+="x":v+=D[w];if(!v.match(Lu)){const w=h.slice(0,k),m=h.slice(k+1),E=D.match(Aa);E&&(w.push(E[1]),m.unshift(E[2])),m.length&&(o=m.join(".")+o),this.hostname=w.join(".");break}}}}this.hostname.length>pa&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=o.indexOf("#");s!==-1&&(this.hash=o.substr(s),o=o.slice(0,s));const a=o.indexOf("?");return a!==-1&&(this.search=o.substr(a),o=o.slice(0,a)),o&&(this.pathname=o),Nu[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this},wt.prototype.parseHost=function(e){let t=ca.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const ga=Object.freeze(Object.defineProperty({__proto__:null,decode:Te,encode:tt,format:on,parse:rn},Symbol.toStringTag,{value:"Module"})),Hu=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,zu=/[\0-\x1F\x7F-\x9F]/,ba=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,sn=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Qu=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ju=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ma=Object.freeze(Object.defineProperty({__proto__:null,Any:Hu,Cc:zu,Cf:ba,P:sn,S:Qu,Z:ju},Symbol.toStringTag,{value:"Module"})),xa=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Ca=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var an;const va=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),wa=(an=String.fromCodePoint)!==null&&an!==void 0?an:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ya(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=va.get(e))!==null&&t!==void 0?t:e}var L;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(L||(L={}));const Ea=32;var ge;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(ge||(ge={}));function cn(e){return e>=L.ZERO&&e<=L.NINE}function ka(e){return e>=L.UPPER_A&&e<=L.UPPER_F||e>=L.LOWER_A&&e<=L.LOWER_F}function Ia(e){return e>=L.UPPER_A&&e<=L.UPPER_Z||e>=L.LOWER_A&&e<=L.LOWER_Z||cn(e)}function Sa(e){return e===L.EQUALS||Ia(e)}var O;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(O||(O={}));var be;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(be||(be={}));class Ra{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=O.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=be.Strict}startEntity(t){this.decodeMode=t,this.state=O.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case O.EntityStart:return t.charCodeAt(n)===L.NUM?(this.state=O.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=O.NamedEntity,this.stateNamedEntity(t,n));case O.NumericStart:return this.stateNumericStart(t,n);case O.NumericDecimal:return this.stateNumericDecimal(t,n);case O.NumericHex:return this.stateNumericHex(t,n);case O.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|Ea)===L.LOWER_X?(this.state=O.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=O.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,i){if(n!==u){const o=u-n;this.result=this.result*Math.pow(i,o)+parseInt(t.substr(n,o),i),this.consumed+=o}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(cn(i)||ka(i))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(cn(i))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===L.SEMI)this.consumed+=1;else if(this.decodeMode===be.Strict)return 0;return this.emitCodePoint(ya(this.result),this.consumed),this.errors&&(t!==L.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let i=u[this.treeIndex],o=(i&ge.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const r=t.charCodeAt(n);if(this.treeIndex=Da(u,i,this.treeIndex+Math.max(1,o),r),this.treeIndex<0)return this.result===0||this.decodeMode===be.Attribute&&(o===0||Sa(r))?0:this.emitNotTerminatedNamedEntity();if(i=u[this.treeIndex],o=(i&ge.VALUE_LENGTH)>>14,o!==0){if(r===L.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==be.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,i=(u[n]&ge.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~ge.VALUE_LENGTH:i[t+1],u),n===3&&this.emitCodePoint(i[t+2],u),u}end(){var t;switch(this.state){case O.NamedEntity:return this.result!==0&&(this.decodeMode!==be.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case O.NumericDecimal:return this.emitNumericEntity(0,2);case O.NumericHex:return this.emitNumericEntity(0,3);case O.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case O.EntityStart:return 0}}}function Vu(e){let t="";const n=new Ra(e,u=>t+=wa(u));return function(i,o){let r=0,s=0;for(;(s=i.indexOf("&",s))>=0;){t+=i.slice(r,s),n.startEntity(o);const c=n.write(i,s+1);if(c<0){r=s+n.end();break}r=s+c,s=c===0?r+1:r}const a=t+i.slice(r);return t="",a}}function Da(e,t,n,u){const i=(t&ge.BRANCH_LENGTH)>>7,o=t&ge.JUMP_TABLE;if(i===0)return o!==0&&u===o?n:-1;if(o){const a=u-o;return a<0||a>=i?-1:e[n+a]-1}let r=n,s=r+i-1;for(;r<=s;){const a=r+s>>>1,c=e[a];if(c<u)r=a+1;else if(c>u)s=a-1;else return e[a+i]}return-1}const _a=Vu(xa);Vu(Ca);function qu(e,t=be.Legacy){return _a(e,t)}function Fa(e){return Object.prototype.toString.call(e)}function ln(e){return Fa(e)==="[object String]"}const Ta=Object.prototype.hasOwnProperty;function Ba(e,t){return Ta.call(e,t)}function yt(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function Gu(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function dn(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Et(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Yu=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ma=/&([a-z#][a-z0-9]{1,31});/gi,Ua=new RegExp(Yu.source+"|"+Ma.source,"gi"),Pa=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function La(e,t){if(t.charCodeAt(0)===35&&Pa.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return dn(u)?Et(u):e}const n=qu(e);return n!==e?n:e}function Oa(e){return e.indexOf("\\")<0?e:e.replace(Yu,"$1")}function Be(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Ua,function(t,n,u){return n||La(t,u)})}const Na=/[&<>"]/,Ha=/[&<>"]/g,za={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Qa(e){return za[e]}function me(e){return Na.test(e)?e.replace(Ha,Qa):e}const ja=/[.?*+^$[\]\\(){}|-]/g;function Va(e){return e.replace(ja,"\\$&")}function _(e){switch(e){case 9:case 32:return!0}return!1}function nt(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ut(e){return sn.test(e)||Qu.test(e)}function it(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function kt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const qa=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Gu,assign:yt,escapeHtml:me,escapeRE:Va,fromCodePoint:Et,has:Ba,isMdAsciiPunct:it,isPunctChar:ut,isSpace:_,isString:ln,isValidEntityCode:dn,isWhiteSpace:nt,lib:{mdurl:ga,ucmicro:ma},normalizeReference:kt,unescapeAll:Be,unescapeMd:Oa},Symbol.toStringTag,{value:"Module"}));function Ga(e,t,n){let u,i,o,r;const s=e.posMax,a=e.pos;for(e.pos=t+1,u=1;e.pos<s;){if(o=e.src.charCodeAt(e.pos),o===93&&(u--,u===0)){i=!0;break}if(r=e.pos,e.md.inline.skipToken(e),o===91){if(r===e.pos-1)u++;else if(n)return e.pos=a,-1}}let c=-1;return i&&(c=e.pos),e.pos=a,c}function Ya(e,t,n){let u,i=t;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<n;){if(u=e.charCodeAt(i),u===10||u===60)return o;if(u===62)return o.pos=i+1,o.str=Be(e.slice(t+1,i)),o.ok=!0,o;if(u===92&&i+1<n){i+=2;continue}i++}return o}let r=0;for(;i<n&&(u=e.charCodeAt(i),!(u===32||u<32||u===127));){if(u===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(u===40&&(r++,r>32))return o;if(u===41){if(r===0)break;r--}i++}return t===i||r!==0||(o.str=Be(e.slice(t,i)),o.pos=i,o.ok=!0),o}function Xa(e,t,n,u){let i,o=t;const r={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)r.str=u.str,r.marker=u.marker;else{if(o>=n)return r;let s=e.charCodeAt(o);if(s!==34&&s!==39&&s!==40)return r;t++,o++,s===40&&(s=41),r.marker=s}for(;o<n;){if(i=e.charCodeAt(o),i===r.marker)return r.pos=o+1,r.str+=Be(e.slice(t,o)),r.ok=!0,r;if(i===40&&r.marker===41)return r;i===92&&o+1<n&&o++,o++}return r.can_continue=!0,r.str+=Be(e.slice(t,o)),r}const Wa=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Ya,parseLinkLabel:Ga,parseLinkTitle:Xa},Symbol.toStringTag,{value:"Module"})),ue={};ue.code_inline=function(e,t,n,u,i){const o=e[t];return"<code"+i.renderAttrs(o)+">"+me(o.content)+"</code>"},ue.code_block=function(e,t,n,u,i){const o=e[t];return"<pre"+i.renderAttrs(o)+"><code>"+me(e[t].content)+`</code></pre>
`},ue.fence=function(e,t,n,u,i){const o=e[t],r=o.info?Be(o.info).trim():"";let s="",a="";if(r){const d=r.split(/(\s+)/g);s=d[0],a=d.slice(2).join("")}let c;if(n.highlight?c=n.highlight(o.content,s,a)||me(o.content):c=me(o.content),c.indexOf("<pre")===0)return c+`
`;if(r){const d=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[];d<0?f.push(["class",n.langPrefix+s]):(f[d]=f[d].slice(),f[d][1]+=" "+n.langPrefix+s);const A={attrs:f};return`<pre><code${i.renderAttrs(A)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${c}</code></pre>
`},ue.image=function(e,t,n,u,i){const o=e[t];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,n,u),i.renderToken(e,t,n)},ue.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},ue.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},ue.text=function(e,t){return me(e[t].content)},ue.html_block=function(e,t){return e[t].content},ue.html_inline=function(e,t){return e[t].content};function Me(){this.rules=yt({},ue)}Me.prototype.renderAttrs=function(t){let n,u,i;if(!t.attrs)return"";for(i="",n=0,u=t.attrs.length;n<u;n++)i+=" "+me(t.attrs[n][0])+'="'+me(t.attrs[n][1])+'"';return i},Me.prototype.renderToken=function(t,n,u){const i=t[n];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&t[n-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&u.xhtmlOut&&(o+=" /");let r=!1;if(i.block&&(r=!0,i.nesting===1&&n+1<t.length)){const s=t[n+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(r=!1)}return o+=r?`>
`:">",o},Me.prototype.renderInline=function(e,t,n){let u="";const i=this.rules;for(let o=0,r=e.length;o<r;o++){const s=e[o].type;typeof i[s]<"u"?u+=i[s](e,o,t,n,this):u+=this.renderToken(e,o,t)}return u},Me.prototype.renderInlineAsText=function(e,t,n){let u="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":u+=e[i].content;break;case"image":u+=this.renderInlineAsText(e[i].children,t,n);break;case"html_inline":case"html_block":u+=e[i].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u},Me.prototype.render=function(e,t,n){let u="";const i=this.rules;for(let o=0,r=e.length;o<r;o++){const s=e[o].type;s==="inline"?u+=this.renderInline(e[o].children,t,n):typeof i[s]<"u"?u+=i[s](e,o,t,n,this):u+=this.renderToken(e,o,t,n)}return u};function W(){this.__rules__=[],this.__cache__=null}W.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},W.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})},W.prototype.at=function(e,t,n){const u=this.__find__(e),i=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=i.alt||[],this.__cache__=null},W.prototype.before=function(e,t,n,u){const i=this.__find__(e),o=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null},W.prototype.after=function(e,t,n,u){const i=this.__find__(e),o=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null},W.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null},W.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!0,n.push(u)},this),this.__cache__=null,n},W.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)},W.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!1,n.push(u)},this),this.__cache__=null,n},W.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function te(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}te.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,i=n.length;u<i;u++)if(n[u][0]===t)return u;return-1},te.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},te.prototype.attrSet=function(t,n){const u=this.attrIndex(t),i=[t,n];u<0?this.attrPush(i):this.attrs[u]=i},te.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u},te.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function Xu(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Xu.prototype.Token=te;const Ja=/\r\n?|\n/g,Za=/\0/g;function Ka(e){let t;t=e.src.replace(Ja,`
`),t=t.replace(Za,"�"),e.src=t}function $a(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function ec(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const i=t[n];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function tc(e){return/^<a[>\s]/i.test(e)}function nc(e){return/^<\/a\s*>/i.test(e)}function uc(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;let i=t[n].children,o=0;for(let r=i.length-1;r>=0;r--){const s=i[r];if(s.type==="link_close"){for(r--;i[r].level!==s.level&&i[r].type!=="link_open";)r--;continue}if(s.type==="html_inline"&&(tc(s.content)&&o>0&&o--,nc(s.content)&&o++),!(o>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const a=s.content;let c=e.md.linkify.match(a);const d=[];let f=s.level,A=0;c.length>0&&c[0].index===0&&r>0&&i[r-1].type==="text_special"&&(c=c.slice(1));for(let p=0;p<c.length;p++){const h=c[p].url,k=e.md.normalizeLink(h);if(!e.md.validateLink(k))continue;let I=c[p].text;c[p].schema?c[p].schema==="mailto:"&&!/^mailto:/i.test(I)?I=e.md.normalizeLinkText("mailto:"+I).replace(/^mailto:/,""):I=e.md.normalizeLinkText(I):I=e.md.normalizeLinkText("http://"+I).replace(/^http:\/\//,"");const D=c[p].index;if(D>A){const E=new e.Token("text","",0);E.content=a.slice(A,D),E.level=f,d.push(E)}const v=new e.Token("link_open","a",1);v.attrs=[["href",k]],v.level=f++,v.markup="linkify",v.info="auto",d.push(v);const w=new e.Token("text","",0);w.content=I,w.level=f,d.push(w);const m=new e.Token("link_close","a",-1);m.level=--f,m.markup="linkify",m.info="auto",d.push(m),A=c[p].lastIndex}if(A<a.length){const p=new e.Token("text","",0);p.content=a.slice(A),p.level=f,d.push(p)}t[n].children=i=Gu(i,r,d)}}}}const Wu=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,ic=/\((c|tm|r)\)/i,oc=/\((c|tm|r)\)/ig,rc={c:"©",r:"®",tm:"™"};function sc(e,t){return rc[t.toLowerCase()]}function ac(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(oc,sc)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function cc(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Wu.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function lc(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(ic.test(e.tokens[t].content)&&ac(e.tokens[t].children),Wu.test(e.tokens[t].content)&&cc(e.tokens[t].children))}const dc=/['"]/,Ju=/['"]/g,Zu="’";function It(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function fc(e,t){let n;const u=[];for(let i=0;i<e.length;i++){const o=e[i],r=e[i].level;for(n=u.length-1;n>=0&&!(u[n].level<=r);n--);if(u.length=n+1,o.type!=="text")continue;let s=o.content,a=0,c=s.length;e:for(;a<c;){Ju.lastIndex=a;const d=Ju.exec(s);if(!d)break;let f=!0,A=!0;a=d.index+1;const p=d[0]==="'";let h=32;if(d.index-1>=0)h=s.charCodeAt(d.index-1);else for(n=i-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){h=e[n].content.charCodeAt(e[n].content.length-1);break}let k=32;if(a<c)k=s.charCodeAt(a);else for(n=i+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){k=e[n].content.charCodeAt(0);break}const I=it(h)||ut(String.fromCharCode(h)),D=it(k)||ut(String.fromCharCode(k)),v=nt(h),w=nt(k);if(w?f=!1:D&&(v||I||(f=!1)),v?A=!1:I&&(w||D||(A=!1)),k===34&&d[0]==='"'&&h>=48&&h<=57&&(A=f=!1),f&&A&&(f=I,A=D),!f&&!A){p&&(o.content=It(o.content,d.index,Zu));continue}if(A)for(n=u.length-1;n>=0;n--){let m=u[n];if(u[n].level<r)break;if(m.single===p&&u[n].level===r){m=u[n];let E,R;p?(E=t.md.options.quotes[2],R=t.md.options.quotes[3]):(E=t.md.options.quotes[0],R=t.md.options.quotes[1]),o.content=It(o.content,d.index,R),e[m.token].content=It(e[m.token].content,m.pos,E),a+=R.length-1,m.token===i&&(a+=E.length-1),s=o.content,c=s.length,u.length=n;continue e}}f?u.push({token:i,pos:d.index,single:p,level:r}):A&&p&&(o.content=It(o.content,d.index,Zu))}}}function hc(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!dc.test(e.tokens[t].content)||fc(e.tokens[t].children,e)}function pc(e){let t,n;const u=e.tokens,i=u.length;for(let o=0;o<i;o++){if(u[o].type!=="inline")continue;const r=u[o].children,s=r.length;for(t=0;t<s;t++)r[t].type==="text_special"&&(r[t].type="text");for(t=n=0;t<s;t++)r[t].type==="text"&&t+1<s&&r[t+1].type==="text"?r[t+1].content=r[t].content+r[t+1].content:(t!==n&&(r[n]=r[t]),n++);t!==n&&(r.length=n)}}const fn=[["normalize",Ka],["block",$a],["inline",ec],["linkify",uc],["replacements",lc],["smartquotes",hc],["text_join",pc]];function hn(){this.ruler=new W;for(let e=0;e<fn.length;e++)this.ruler.push(fn[e][0],fn[e][1])}hn.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)},hn.prototype.State=Xu;function ie(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,r=0,s=0,a=0,c=i.length,d=!1;r<c;r++){const f=i.charCodeAt(r);if(!d)if(_(f)){s++,f===9?a+=4-a%4:a++;continue}else d=!0;(f===10||r===c-1)&&(f!==10&&r++,this.bMarks.push(o),this.eMarks.push(r),this.tShift.push(s),this.sCount.push(a),this.bsCount.push(0),d=!1,s=0,a=0,o=r+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ie.prototype.push=function(e,t,n){const u=new te(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u},ie.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]},ie.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t},ie.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!_(u))break}return t},ie.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!_(this.src.charCodeAt(--t)))return t+1;return t},ie.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t},ie.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t},ie.prototype.getLines=function(t,n,u,i){if(t>=n)return"";const o=new Array(n-t);for(let r=0,s=t;s<n;s++,r++){let a=0;const c=this.bMarks[s];let d=c,f;for(s+1<n||i?f=this.eMarks[s]+1:f=this.eMarks[s];d<f&&a<u;){const A=this.src.charCodeAt(d);if(_(A))A===9?a+=4-(a+this.bsCount[s])%4:a++;else if(d-c<this.tShift[s])a++;else break;d++}a>u?o[r]=new Array(a-u+1).join(" ")+this.src.slice(d,f):o[r]=this.src.slice(d,f)}return o.join("")},ie.prototype.Token=te;const Ac=65536;function pn(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function Ku(e){const t=[],n=e.length;let u=0,i=e.charCodeAt(u),o=!1,r=0,s="";for(;u<n;)i===124&&(o?(s+=e.substring(r,u-1),r=u):(t.push(s+e.substring(r,u)),s="",r=u+1)),o=i===92,u++,i=e.charCodeAt(u);return t.push(s+e.substring(r)),t}function gc(e,t,n,u){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const r=e.src.charCodeAt(o++);if(r!==124&&r!==45&&r!==58||o>=e.eMarks[i])return!1;const s=e.src.charCodeAt(o++);if(s!==124&&s!==45&&s!==58&&!_(s)||r===45&&_(s))return!1;for(;o<e.eMarks[i];){const m=e.src.charCodeAt(o);if(m!==124&&m!==45&&m!==58&&!_(m))return!1;o++}let a=pn(e,t+1),c=a.split("|");const d=[];for(let m=0;m<c.length;m++){const E=c[m].trim();if(!E){if(m===0||m===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?d.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=pn(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=Ku(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(u)return!0;const A=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),h=e.push("table_open","table",1),k=[t,0];h.map=k;const I=e.push("thead_open","thead",1);I.map=[t,t+1];const D=e.push("tr_open","tr",1);D.map=[t,t+1];for(let m=0;m<c.length;m++){const E=e.push("th_open","th",1);d[m]&&(E.attrs=[["style","text-align:"+d[m]]]);const R=e.push("inline","",0);R.content=c[m].trim(),R.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let v,w=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let m=!1;for(let R=0,U=p.length;R<U;R++)if(p[R](e,i,n,!0)){m=!0;break}if(m||(a=pn(e,i).trim(),!a)||e.sCount[i]-e.blkIndent>=4||(c=Ku(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),w+=f-c.length,w>Ac))break;if(i===t+2){const R=e.push("tbody_open","tbody",1);R.map=v=[t+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let R=0;R<f;R++){const U=e.push("td_open","td",1);d[R]&&(U.attrs=[["style","text-align:"+d[R]]]);const K=e.push("inline","",0);K.content=c[R]?c[R].trim():"",K.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return v&&(e.push("tbody_close","tbody",-1),v[1]=i),e.push("table_close","table",-1),k[1]=i,e.parentType=A,e.line=i,!0}function bc(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,i=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,i=u;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,o.map=[t,e.line],!0}function mc(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>o)return!1;const r=e.src.charCodeAt(i);if(r!==126&&r!==96)return!1;let s=i;i=e.skipChars(i,r);let a=i-s;if(a<3)return!1;const c=e.src.slice(s,i),d=e.src.slice(i,o);if(r===96&&d.indexOf(String.fromCharCode(r))>=0)return!1;if(u)return!0;let f=t,A=!1;for(;f++,!(f>=n||(i=s=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i<o&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===r&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,r),!(i-s<a)&&(i=e.skipSpaces(i),!(i<o)))){A=!0;break}a=e.sCount[t],e.line=f+(A?1:0);const p=e.push("fence","code",0);return p.info=d,p.content=e.getLines(t+1,f,a,!0),p.markup=c,p.map=[t,e.line],!0}function xc(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];const r=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(u)return!0;const s=[],a=[],c=[],d=[],f=e.md.block.ruler.getRules("blockquote"),A=e.parentType;e.parentType="blockquote";let p=!1,h;for(h=t;h<n;h++){const w=e.sCount[h]<e.blkIndent;if(i=e.bMarks[h]+e.tShift[h],o=e.eMarks[h],i>=o)break;if(e.src.charCodeAt(i++)===62&&!w){let E=e.sCount[h]+1,R,U;e.src.charCodeAt(i)===32?(i++,E++,U=!1,R=!0):e.src.charCodeAt(i)===9?(R=!0,(e.bsCount[h]+E)%4===3?(i++,E++,U=!1):U=!0):R=!1;let K=E;for(s.push(e.bMarks[h]),e.bMarks[h]=i;i<o;){const se=e.src.charCodeAt(i);if(_(se))se===9?K+=4-(K+e.bsCount[h]+(U?1:0))%4:K++;else break;i++}p=i>=o,a.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(R?1:0),c.push(e.sCount[h]),e.sCount[h]=K-E,d.push(e.tShift[h]),e.tShift[h]=i-e.bMarks[h];continue}if(p)break;let m=!1;for(let E=0,R=f.length;E<R;E++)if(f[E](e,h,n,!0)){m=!0;break}if(m){e.lineMax=h,e.blkIndent!==0&&(s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}s.push(e.bMarks[h]),a.push(e.bsCount[h]),d.push(e.tShift[h]),c.push(e.sCount[h]),e.sCount[h]=-1}const k=e.blkIndent;e.blkIndent=0;const I=e.push("blockquote_open","blockquote",1);I.markup=">";const D=[t,0];I.map=D,e.md.block.tokenize(e,t,h);const v=e.push("blockquote_close","blockquote",-1);v.markup=">",e.lineMax=r,e.parentType=A,D[1]=e.line;for(let w=0;w<d.length;w++)e.bMarks[w+t]=s[w],e.tShift[w+t]=d[w],e.sCount[w+t]=c[w],e.bsCount[w+t]=a[w];return e.blkIndent=k,!0}function Cc(e,t,n,u){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.bMarks[t]+e.tShift[t];const r=e.src.charCodeAt(o++);if(r!==42&&r!==45&&r!==95)return!1;let s=1;for(;o<i;){const c=e.src.charCodeAt(o++);if(c!==r&&!_(c))return!1;c===r&&s++}if(s<3)return!1;if(u)return!0;e.line=t+1;const a=e.push("hr","hr",0);return a.map=[t,e.line],a.markup=Array(s+1).join(String.fromCharCode(r)),!0}function $u(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(u++);if(i!==42&&i!==45&&i!==43)return-1;if(u<n){const o=e.src.charCodeAt(u);if(!_(o))return-1}return u}function ei(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let i=n;if(i+1>=u)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=u)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-n>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<u&&(o=e.src.charCodeAt(i),!_(o))?-1:i}function vc(e,t){const n=e.level+2;for(let u=t+2,i=e.tokens.length-2;u<i;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function wc(e,t,n,u){let i,o,r,s,a=t,c=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;u&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let f,A,p;if((p=ei(e,a))>=0){if(f=!0,r=e.bMarks[a]+e.tShift[a],A=Number(e.src.slice(r,p-1)),d&&A!==1)return!1}else if((p=$u(e,a))>=0)f=!1;else return!1;if(d&&e.skipSpaces(p)>=e.eMarks[a])return!1;if(u)return!0;const h=e.src.charCodeAt(p-1),k=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),A!==1&&(s.attrs=[["start",A]])):s=e.push("bullet_list_open","ul",1);const I=[a,0];s.map=I,s.markup=String.fromCharCode(h);let D=!1;const v=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";a<n;){o=p,i=e.eMarks[a];const m=e.sCount[a]+p-(e.bMarks[a]+e.tShift[a]);let E=m;for(;o<i;){const Ce=e.src.charCodeAt(o);if(Ce===9)E+=4-(E+e.bsCount[a])%4;else if(Ce===32)E++;else break;o++}const R=o;let U;R>=i?U=1:U=E-m,U>4&&(U=1);const K=m+U;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(h);const se=[a,0];s.map=se,f&&(s.info=e.src.slice(r,p-1));const Ie=e.tight,P=e.tShift[a],ht=e.sCount[a],pt=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=K,e.tight=!0,e.tShift[a]=R-e.bMarks[a],e.sCount[a]=E,R>=i&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,a,n,!0),(!e.tight||D)&&(c=!1),D=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=pt,e.tShift[a]=P,e.sCount[a]=ht,e.tight=Ie,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(h),a=e.line,se[1]=a,a>=n||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let Le=!1;for(let Ce=0,On=v.length;Ce<On;Ce++)if(v[Ce](e,a,n,!0)){Le=!0;break}if(Le)break;if(f){if(p=ei(e,a),p<0)break;r=e.bMarks[a]+e.tShift[a]}else if(p=$u(e,a),p<0)break;if(h!==e.src.charCodeAt(p-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(h),I[1]=a,e.line=a,e.parentType=w,c&&vc(e,k),!0}function yc(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t],r=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(v){const w=e.lineMax;if(v>=w||e.isEmpty(v))return null;let m=!1;if(e.sCount[v]-e.blkIndent>3&&(m=!0),e.sCount[v]<0&&(m=!0),!m){const U=e.md.block.ruler.getRules("reference"),K=e.parentType;e.parentType="reference";let se=!1;for(let Ie=0,P=U.length;Ie<P;Ie++)if(U[Ie](e,v,w,!0)){se=!0;break}if(e.parentType=K,se)return null}const E=e.bMarks[v]+e.tShift[v],R=e.eMarks[v];return e.src.slice(E,R+1)}let a=e.src.slice(i,o+1);o=a.length;let c=-1;for(i=1;i<o;i++){const v=a.charCodeAt(i);if(v===91)return!1;if(v===93){c=i;break}else if(v===10){const w=s(r);w!==null&&(a+=w,o=a.length,r++)}else if(v===92&&(i++,i<o&&a.charCodeAt(i)===10)){const w=s(r);w!==null&&(a+=w,o=a.length,r++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<o;i++){const v=a.charCodeAt(i);if(v===10){const w=s(r);w!==null&&(a+=w,o=a.length,r++)}else if(!_(v))break}const d=e.md.helpers.parseLinkDestination(a,i,o);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;i=d.pos;const A=i,p=r,h=i;for(;i<o;i++){const v=a.charCodeAt(i);if(v===10){const w=s(r);w!==null&&(a+=w,o=a.length,r++)}else if(!_(v))break}let k=e.md.helpers.parseLinkTitle(a,i,o);for(;k.can_continue;){const v=s(r);if(v===null)break;a+=v,i=o,o=a.length,r++,k=e.md.helpers.parseLinkTitle(a,i,o,k)}let I;for(i<o&&h!==i&&k.ok?(I=k.str,i=k.pos):(I="",i=A,r=p);i<o;){const v=a.charCodeAt(i);if(!_(v))break;i++}if(i<o&&a.charCodeAt(i)!==10&&I)for(I="",i=A,r=p;i<o;){const v=a.charCodeAt(i);if(!_(v))break;i++}if(i<o&&a.charCodeAt(i)!==10)return!1;const D=kt(a.slice(1,c));return D?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[D]>"u"&&(e.env.references[D]={title:I,href:f}),e.line=r),!0):!1}const Ec=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],kc="[a-zA-Z_:][a-zA-Z0-9:._-]*",Ic="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",ti="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+kc+"(?:\\s*=\\s*"+Ic+")?)")+"*\\s*\\/?>",ni="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Sc="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Rc="<[?][\\s\\S]*?[?]>",Dc="<![A-Za-z][^>]*>",_c="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Fc=new RegExp("^(?:"+ti+"|"+ni+"|"+Sc+"|"+Rc+"|"+Dc+"|"+_c+")"),Tc=new RegExp("^(?:"+ti+"|"+ni+")"),Ue=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Ec.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Tc.source+"\\s*$"),/^$/,!1]];function Bc(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let r=e.src.slice(i,o),s=0;for(;s<Ue.length&&!Ue[s][0].test(r);s++);if(s===Ue.length)return!1;if(u)return Ue[s][2];let a=t+1;if(!Ue[s][1].test(r)){for(;a<n&&!(e.sCount[a]<e.blkIndent);a++)if(i=e.bMarks[a]+e.tShift[a],o=e.eMarks[a],r=e.src.slice(i,o),Ue[s][1].test(r)){r.length!==0&&a++;break}}e.line=a;const c=e.push("html_block","",0);return c.map=[t,a],c.content=e.getLines(t,a,e.blkIndent,!0),!0}function Mc(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let r=e.src.charCodeAt(i);if(r!==35||i>=o)return!1;let s=1;for(r=e.src.charCodeAt(++i);r===35&&i<o&&s<=6;)s++,r=e.src.charCodeAt(++i);if(s>6||i<o&&!_(r))return!1;if(u)return!0;o=e.skipSpacesBack(o,i);const a=e.skipCharsBack(o,35,i);a>i&&_(e.src.charCodeAt(a-1))&&(o=a),e.line=t+1;const c=e.push("heading_open","h"+String(s),1);c.markup="########".slice(0,s),c.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(i,o).trim(),d.map=[t,e.line],d.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function Uc(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,r,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let p=e.bMarks[s]+e.tShift[s];const h=e.eMarks[s];if(p<h&&(r=e.src.charCodeAt(p),(r===45||r===61)&&(p=e.skipChars(p,r),p=e.skipSpaces(p),p>=h))){o=r===61?1:2;break}}if(e.sCount[s]<0)continue;let A=!1;for(let p=0,h=u.length;p<h;p++)if(u[p](e,s,n,!0)){A=!0;break}if(A)break}if(!o)return!1;const a=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(r),c.map=[t,e.line];const d=e.push("inline","",0);d.content=a,d.map=[t,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup=String.fromCharCode(r),e.parentType=i,!0}function Pc(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=t+1;for(e.parentType="paragraph";o<n&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let d=0,f=u.length;d<f;d++)if(u[d](e,o,n,!0)){c=!0;break}if(c)break}const r=e.getLines(t,o,e.blkIndent,!1).trim();e.line=o;const s=e.push("paragraph_open","p",1);s.map=[t,e.line];const a=e.push("inline","",0);return a.content=r,a.map=[t,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const St=[["table",gc,["paragraph","reference"]],["code",bc],["fence",mc,["paragraph","reference","blockquote","list"]],["blockquote",xc,["paragraph","reference","blockquote","list"]],["hr",Cc,["paragraph","reference","blockquote","list"]],["list",wc,["paragraph","reference","blockquote"]],["reference",yc],["html_block",Bc,["paragraph","reference","blockquote"]],["heading",Mc,["paragraph","reference","blockquote"]],["lheading",Uc],["paragraph",Pc]];function Rt(){this.ruler=new W;for(let e=0;e<St.length;e++)this.ruler.push(St[e][0],St[e][1],{alt:(St[e][2]||[]).slice()})}Rt.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),i=u.length,o=e.md.options.maxNesting;let r=t,s=!1;for(;r<n&&(e.line=r=e.skipEmptyLines(r),!(r>=n||e.sCount[r]<e.blkIndent));){if(e.level>=o){e.line=n;break}const a=e.line;let c=!1;for(let d=0;d<i;d++)if(c=u[d](e,r,n,!1),c){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),r=e.line,r<n&&e.isEmpty(r)&&(s=!0,r++,e.line=r)}},Rt.prototype.parse=function(e,t,n,u){if(!e)return;const i=new this.State(e,t,n,u);this.tokenize(i,i.line,i.lineMax)},Rt.prototype.State=ie;function ot(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ot.prototype.pushPending=function(){const e=new te("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},ot.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new te(e,t,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(i),u},ot.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<n&&this.src.charCodeAt(o)===u;)o++;const r=o-e,s=o<n?this.src.charCodeAt(o):32,a=it(i)||ut(String.fromCharCode(i)),c=it(s)||ut(String.fromCharCode(s)),d=nt(i),f=nt(s),A=!f&&(!c||d||a),p=!d&&(!a||f||c);return{can_open:A&&(t||!p||a),can_close:p&&(t||!A||c),length:r}},ot.prototype.Token=te;function Lc(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Oc(e,t){let n=e.pos;for(;n<e.posMax&&!Lc(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}const Nc=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Hc(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const i=e.pending.match(Nc);if(!i)return!1;const o=i[1],r=e.md.linkify.matchAtStart(e.src.slice(n-o.length));if(!r)return!1;let s=r.url;if(s.length<=o.length)return!1;s=s.replace(/\*+$/,"");const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!t){e.pending=e.pending.slice(0,-o.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-o.length,!0}function zc(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,i=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let o=u-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<i&&_(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const An=[];for(let e=0;e<256;e++)An.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){An[e.charCodeAt(0)]=1});function Qc(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(i=e.src.charCodeAt(n),!!_(i));)n++;return e.pos=n,!0}let o=e.src[n];if(i>=55296&&i<=56319&&n+1<u){const s=e.src.charCodeAt(n+1);s>=56320&&s<=57343&&(o+=e.src[n+1],n++)}const r="\\"+o;if(!t){const s=e.push("text_special","",0);i<256&&An[i]!==0?s.content=o:s.content=r,s.markup=r,s.info="escape"}return e.pos=n+1,!0}function jc(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const i=n;n++;const o=e.posMax;for(;n<o&&e.src.charCodeAt(n)===96;)n++;const r=e.src.slice(i,n),s=r.length;if(e.backticksScanned&&(e.backticks[s]||0)<=i)return t||(e.pending+=r),e.pos+=s,!0;let a=n,c;for(;(c=e.src.indexOf("`",a))!==-1;){for(a=c+1;a<o&&e.src.charCodeAt(a)===96;)a++;const d=a-c;if(d===s){if(!t){const f=e.push("code_inline","code",0);f.markup=r,f.content=e.src.slice(n,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=c}return e.backticksScanned=!0,t||(e.pending+=r),e.pos+=s,!0}function Vc(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const r=String.fromCharCode(u);if(o<2)return!1;let s;o%2&&(s=e.push("text","",0),s.content=r,o--);for(let a=0;a<o;a+=2)s=e.push("text","",0),s.content=r+r,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function ui(e,t){let n;const u=[],i=t.length;for(let o=0;o<i;o++){const r=t[o];if(r.marker!==126||r.end===-1)continue;const s=t[r.end];n=e.tokens[r.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[s.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&u.push(s.token-1)}for(;u.length;){const o=u.pop();let r=o+1;for(;r<e.tokens.length&&e.tokens[r].type==="s_close";)r++;r--,o!==r&&(n=e.tokens[r],e.tokens[r]=e.tokens[o],e.tokens[o]=n)}}function qc(e){const t=e.tokens_meta,n=e.tokens_meta.length;ui(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&ui(e,t[u].delimiters)}const ii={tokenize:Vc,postProcess:qc};function Gc(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const i=e.scanDelims(e.pos,u===42);for(let o=0;o<i.length;o++){const r=e.push("text","",0);r.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function oi(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const i=t[u];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=t[i.end],r=u>0&&t[u-1].end===i.end+1&&t[u-1].marker===i.marker&&t[u-1].token===i.token-1&&t[i.end+1].token===o.token+1,s=String.fromCharCode(i.marker),a=e.tokens[i.token];a.type=r?"strong_open":"em_open",a.tag=r?"strong":"em",a.nesting=1,a.markup=r?s+s:s,a.content="";const c=e.tokens[o.token];c.type=r?"strong_close":"em_close",c.tag=r?"strong":"em",c.nesting=-1,c.markup=r?s+s:s,c.content="",r&&(e.tokens[t[u-1].token].content="",e.tokens[t[i.end+1].token].content="",u--)}}function Yc(e){const t=e.tokens_meta,n=e.tokens_meta.length;oi(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&oi(e,t[u].delimiters)}const ri={tokenize:Gc,postProcess:Yc};function Xc(e,t){let n,u,i,o,r="",s="",a=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,A=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let h=p+1;if(h<f&&e.src.charCodeAt(h)===40){for(c=!1,h++;h<f&&(n=e.src.charCodeAt(h),!(!_(n)&&n!==10));h++);if(h>=f)return!1;if(a=h,i=e.md.helpers.parseLinkDestination(e.src,h,e.posMax),i.ok){for(r=e.md.normalizeLink(i.str),e.md.validateLink(r)?h=i.pos:r="",a=h;h<f&&(n=e.src.charCodeAt(h),!(!_(n)&&n!==10));h++);if(i=e.md.helpers.parseLinkTitle(e.src,h,e.posMax),h<f&&a!==h&&i.ok)for(s=i.str,h=i.pos;h<f&&(n=e.src.charCodeAt(h),!(!_(n)&&n!==10));h++);}(h>=f||e.src.charCodeAt(h)!==41)&&(c=!0),h++}if(c){if(typeof e.env.references>"u")return!1;if(h<f&&e.src.charCodeAt(h)===91?(a=h+1,h=e.md.helpers.parseLinkLabel(e,h),h>=0?u=e.src.slice(a,h++):h=p+1):h=p+1,u||(u=e.src.slice(A,p)),o=e.env.references[kt(u)],!o)return e.pos=d,!1;r=o.href,s=o.title}if(!t){e.pos=A,e.posMax=p;const k=e.push("link_open","a",1),I=[["href",r]];k.attrs=I,s&&I.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=h,e.posMax=f,!0}function Wc(e,t){let n,u,i,o,r,s,a,c,d="";const f=e.pos,A=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,h=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(h<0)return!1;if(o=h+1,o<A&&e.src.charCodeAt(o)===40){for(o++;o<A&&(n=e.src.charCodeAt(o),!(!_(n)&&n!==10));o++);if(o>=A)return!1;for(c=o,s=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),s.ok&&(d=e.md.normalizeLink(s.str),e.md.validateLink(d)?o=s.pos:d=""),c=o;o<A&&(n=e.src.charCodeAt(o),!(!_(n)&&n!==10));o++);if(s=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<A&&c!==o&&s.ok)for(a=s.str,o=s.pos;o<A&&(n=e.src.charCodeAt(o),!(!_(n)&&n!==10));o++);else a="";if(o>=A||e.src.charCodeAt(o)!==41)return e.pos=f,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<A&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(c,o++):o=h+1):o=h+1,i||(i=e.src.slice(p,h)),r=e.env.references[kt(i)],!r)return e.pos=f,!1;d=r.href,a=r.title}if(!t){u=e.src.slice(p,h);const k=[];e.md.inline.parse(u,e.md,e.env,k);const I=e.push("image","img",0),D=[["src",d],["alt",""]];I.attrs=D,I.children=k,I.content=u,a&&D.push(["title",a])}return e.pos=o,e.posMax=A,!0}const Jc=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Zc=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Kc(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;const r=e.src.charCodeAt(n);if(r===60)return!1;if(r===62)break}const o=e.src.slice(u+1,n);if(Zc.test(o)){const r=e.md.normalizeLink(o);if(!e.md.validateLink(r))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",r]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(Jc.test(o)){const r=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(r))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",r]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function $c(e){return/^<a[>\s]/i.test(e)}function el(e){return/^<\/a\s*>/i.test(e)}function tl(e){const t=e|32;return t>=97&&t<=122}function nl(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const i=e.src.charCodeAt(u+1);if(i!==33&&i!==63&&i!==47&&!tl(i))return!1;const o=e.src.slice(u).match(Fc);if(!o)return!1;if(!t){const r=e.push("html_inline","",0);r.content=o[0],$c(r.content)&&e.linkLevel++,el(r.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const ul=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,il=/^&([a-z][a-z0-9]{1,31});/i;function ol(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const o=e.src.slice(n).match(ul);if(o){if(!t){const r=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),s=e.push("text_special","",0);s.content=dn(r)?Et(r):Et(65533),s.markup=o[0],s.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(n).match(il);if(o){const r=qu(o[0]);if(r!==o[0]){if(!t){const s=e.push("text_special","",0);s.content=r,s.markup=o[0],s.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function si(e){const t={},n=e.length;if(!n)return;let u=0,i=-2;const o=[];for(let r=0;r<n;r++){const s=e[r];if(o.push(0),(e[u].marker!==s.marker||i!==s.token-1)&&(u=r),i=s.token,s.length=s.length||0,!s.close)continue;t.hasOwnProperty(s.marker)||(t[s.marker]=[-1,-1,-1,-1,-1,-1]);const a=t[s.marker][(s.open?3:0)+s.length%3];let c=u-o[u]-1,d=c;for(;c>a;c-=o[c]+1){const f=e[c];if(f.marker===s.marker&&f.open&&f.end<0){let A=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(A=!0),!A){const p=c>0&&!e[c-1].open?o[c-1]+1:0;o[r]=r-c+p,o[c]=p,s.open=!1,f.end=r,f.close=!1,d=-1,i=-2;break}}}d!==-1&&(t[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function rl(e){const t=e.tokens_meta,n=e.tokens_meta.length;si(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&si(t[u].delimiters)}function sl(e){let t,n,u=0;const i=e.tokens,o=e.tokens.length;for(t=n=0;t<o;t++)i[t].nesting<0&&u--,i[t].level=u,i[t].nesting>0&&u++,i[t].type==="text"&&t+1<o&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}const gn=[["text",Oc],["linkify",Hc],["newline",zc],["escape",Qc],["backticks",jc],["strikethrough",ii.tokenize],["emphasis",ri.tokenize],["link",Xc],["image",Wc],["autolink",Kc],["html_inline",nl],["entity",ol]],bn=[["balance_pairs",rl],["strikethrough",ii.postProcess],["emphasis",ri.postProcess],["fragments_join",sl]];function rt(){this.ruler=new W;for(let e=0;e<gn.length;e++)this.ruler.push(gn[e][0],gn[e][1]);this.ruler2=new W;for(let e=0;e<bn.length;e++)this.ruler2.push(bn[e][0],bn[e][1])}rt.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[t]<"u"){e.pos=o[t];return}let r=!1;if(e.level<i){for(let s=0;s<u;s++)if(e.level++,r=n[s](e,!0),e.level--,r){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;r||e.pos++,o[t]=e.pos},rt.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,i=e.md.options.maxNesting;for(;e.pos<u;){const o=e.pos;let r=!1;if(e.level<i){for(let s=0;s<n;s++)if(r=t[s](e,!1),r){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(r){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},rt.prototype.parse=function(e,t,n,u){const i=new this.State(e,t,n,u);this.tokenize(i);const o=this.ruler2.getRules(""),r=o.length;for(let s=0;s<r;s++)o[s](i)},rt.prototype.State=ot;function al(e){const t={};e=e||{},t.src_Any=Hu.source,t.src_Cc=zu.source,t.src_Z=ju.source,t.src_P=sn.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function mn(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function Dt(e){return Object.prototype.toString.call(e)}function cl(e){return Dt(e)==="[object String]"}function ll(e){return Dt(e)==="[object Object]"}function dl(e){return Dt(e)==="[object RegExp]"}function ai(e){return Dt(e)==="[object Function]"}function fl(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const ci={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function hl(e){return Object.keys(e||{}).reduce(function(t,n){return t||ci.hasOwnProperty(n)},!1)}const pl={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},Al="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",gl="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function bl(e){e.__index__=-1,e.__text_cache__=""}function ml(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function li(){return function(e,t){t.normalize(e)}}function _t(e){const t=e.re=al(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(Al),n.push(t.src_xn),t.src_tlds=n.join("|");function u(s){return s.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(s,a){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+a)}Object.keys(e.__schemas__).forEach(function(s){const a=e.__schemas__[s];if(a===null)return;const c={validate:null,link:null};if(e.__compiled__[s]=c,ll(a)){dl(a.validate)?c.validate=ml(a.validate):ai(a.validate)?c.validate=a.validate:o(s,a),ai(a.normalize)?c.normalize=a.normalize:a.normalize?o(s,a):c.normalize=li();return}if(cl(a)){i.push(s);return}o(s,a)}),i.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:li()};const r=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(fl).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+r+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+r+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),bl(e)}function xl(e,t){const n=e.__index__,u=e.__last_index__,i=e.__text_cache__.slice(n,u);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=u+t,this.raw=i,this.text=i,this.url=i}function xn(e,t){const n=new xl(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function Z(e,t){if(!(this instanceof Z))return new Z(e,t);t||hl(e)&&(t=e,e={}),this.__opts__=mn({},ci,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=mn({},pl,e),this.__compiled__={},this.__tlds__=gl,this.__tlds_replaced__=!1,this.re={},_t(this)}Z.prototype.add=function(t,n){return this.__schemas__[t]=n,_t(this),this},Z.prototype.set=function(t){return this.__opts__=mn(this.__opts__,t),this},Z.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let n,u,i,o,r,s,a,c,d;if(this.re.schema_test.test(t)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(t))!==null;)if(o=this.testSchemaAt(t,n[2],a.lastIndex),o){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=t.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(u=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(r=u.index+u[1].length,(this.__index__<0||r<this.__index__)&&(this.__schema__="",this.__index__=r,this.__last_index__=u.index+u[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(i=t.match(this.re.email_fuzzy))!==null&&(r=i.index+i[1].length,s=i.index+i[0].length,(this.__index__<0||r<this.__index__||r===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=r,this.__last_index__=s))),this.__index__>=0},Z.prototype.pretest=function(t){return this.re.pretest.test(t)},Z.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0},Z.prototype.match=function(t){const n=[];let u=0;this.__index__>=0&&this.__text_cache__===t&&(n.push(xn(this,u)),u=this.__last_index__);let i=u?t.slice(u):t;for(;this.test(i);)n.push(xn(this,u)),i=i.slice(this.__last_index__),u+=this.__last_index__;return n.length?n:null},Z.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);return u?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+u,xn(this,0)):null},Z.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,i,o){return u!==o[i-1]}).reverse(),_t(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,_t(this),this)},Z.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)},Z.prototype.onCompile=function(){};const Pe=2147483647,oe=36,Cn=1,st=26,Cl=38,vl=700,di=72,fi=128,hi="-",wl=/^xn--/,yl=/[^\0-\x7F]/,El=/[\x2E\u3002\uFF0E\uFF61]/g,kl={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},vn=oe-Cn,re=Math.floor,wn=String.fromCharCode;function xe(e){throw new RangeError(kl[e])}function Il(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function pi(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(El,".");const i=e.split("."),o=Il(i,t).join(".");return u+o}function Ai(e){const t=[];let n=0;const u=e.length;for(;n<u;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<u){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}const Sl=e=>String.fromCodePoint(...e),Rl=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:oe},gi=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},bi=function(e,t,n){let u=0;for(e=n?re(e/vl):e>>1,e+=re(e/t);e>vn*st>>1;u+=oe)e=re(e/vn);return re(u+(vn+1)*e/(e+Cl))},mi=function(e){const t=[],n=e.length;let u=0,i=fi,o=di,r=e.lastIndexOf(hi);r<0&&(r=0);for(let s=0;s<r;++s)e.charCodeAt(s)>=128&&xe("not-basic"),t.push(e.charCodeAt(s));for(let s=r>0?r+1:0;s<n;){const a=u;for(let d=1,f=oe;;f+=oe){s>=n&&xe("invalid-input");const A=Rl(e.charCodeAt(s++));A>=oe&&xe("invalid-input"),A>re((Pe-u)/d)&&xe("overflow"),u+=A*d;const p=f<=o?Cn:f>=o+st?st:f-o;if(A<p)break;const h=oe-p;d>re(Pe/h)&&xe("overflow"),d*=h}const c=t.length+1;o=bi(u-a,c,a==0),re(u/c)>Pe-i&&xe("overflow"),i+=re(u/c),u%=c,t.splice(u++,0,i)}return String.fromCodePoint(...t)},xi=function(e){const t=[];e=Ai(e);const n=e.length;let u=fi,i=0,o=di;for(const a of e)a<128&&t.push(wn(a));const r=t.length;let s=r;for(r&&t.push(hi);s<n;){let a=Pe;for(const d of e)d>=u&&d<a&&(a=d);const c=s+1;a-u>re((Pe-i)/c)&&xe("overflow"),i+=(a-u)*c,u=a;for(const d of e)if(d<u&&++i>Pe&&xe("overflow"),d===u){let f=i;for(let A=oe;;A+=oe){const p=A<=o?Cn:A>=o+st?st:A-o;if(f<p)break;const h=f-p,k=oe-p;t.push(wn(gi(p+h%k,0))),f=re(h/k)}t.push(wn(gi(f,0))),o=bi(i,c,s===r),i=0,++s}++i,++u}return t.join("")},Ci={version:"2.3.1",ucs2:{decode:Ai,encode:Sl},decode:mi,encode:xi,toASCII:function(e){return pi(e,function(t){return yl.test(t)?"xn--"+xi(t):t})},toUnicode:function(e){return pi(e,function(t){return wl.test(t)?mi(t.slice(4).toLowerCase()):t})}},Dl={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},_l=/^(vbscript|javascript|file|data):/,Fl=/^data:image\/(gif|png|jpeg|webp);/;function Tl(e){const t=e.trim().toLowerCase();return _l.test(t)?Fl.test(t):!0}const vi=["http:","https:","mailto:"];function Bl(e){const t=rn(e,!0);if(t.hostname&&(!t.protocol||vi.indexOf(t.protocol)>=0))try{t.hostname=Ci.toASCII(t.hostname)}catch{}return tt(on(t))}function Ml(e){const t=rn(e,!0);if(t.hostname&&(!t.protocol||vi.indexOf(t.protocol)>=0))try{t.hostname=Ci.toUnicode(t.hostname)}catch{}return Te(on(t),Te.defaultChars+"%")}function $(e,t){if(!(this instanceof $))return new $(e,t);t||ln(e)||(t=e||{},e="default"),this.inline=new rt,this.block=new Rt,this.core=new hn,this.renderer=new Me,this.linkify=new Z,this.validateLink=Tl,this.normalizeLink=Bl,this.normalizeLinkText=Ml,this.utils=qa,this.helpers=yt({},Wa),this.options={},this.configure(e),t&&this.set(t)}$.prototype.set=function(e){return yt(this.options,e),this},$.prototype.configure=function(e){const t=this;if(ln(e)){const n=e;if(e=Dl[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},$.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this},$.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this},$.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},$.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},$.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},$.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},$.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function Ul(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yn=!0,wi=!1,yi=!1,Pl=function(e,t){t&&(yn=!t.enabled,wi=!!t.label,yi=!!t.labelAfter),e.core.ruler.after("inline","github-task-lists",function(n){for(var u=n.tokens,i=2;i<u.length;i++)Ol(u,i)&&(Nl(u[i],n.Token),Ei(u[i-2],"class","task-list-item"+(yn?"":" enabled")),Ei(u[Ll(u,i-2)],"class","contains-task-list"))})};function Ei(e,t,n){var u=e.attrIndex(t),i=[t,n];u<0?e.attrPush(i):e.attrs[u]=i}function Ll(e,t){for(var n=e[t].level-1,u=t-1;u>=0;u--)if(e[u].level===n)return u;return-1}function Ol(e,t){return Vl(e[t])&&ql(e[t-1])&&Gl(e[t-2])&&Yl(e[t])}function Nl(e,t){if(e.children.unshift(Hl(e,t)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),wi)if(yi){e.children.pop();var n="task-item-"+Math.ceil(Math.random()*(1e4*1e3)-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+' id="'+n+'">',e.children.push(jl(e.content,n,t))}else e.children.unshift(zl(t)),e.children.push(Ql(t))}function Hl(e,t){var n=new t("html_inline","",0),u=yn?' disabled="" ':"";return e.content.indexOf("[ ] ")===0?n.content='<input class="task-list-item-checkbox"'+u+'type="checkbox">':(e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0)&&(n.content='<input class="task-list-item-checkbox" checked=""'+u+'type="checkbox">'),n}function zl(e){var t=new e("html_inline","",0);return t.content="<label>",t}function Ql(e){var t=new e("html_inline","",0);return t.content="</label>",t}function jl(e,t,n){var u=new n("html_inline","",0);return u.content='<label class="task-list-item-label" for="'+t+'">'+e+"</label>",u.attrs=[{for:t}],u}function Vl(e){return e.type==="inline"}function ql(e){return e.type==="paragraph_open"}function Gl(e){return e.type==="list_item_open"}function Yl(e){return e.content.indexOf("[ ] ")===0||e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0}const Xl=Ul(Pl);/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:ki,setPrototypeOf:Ii,isFrozen:Wl,getPrototypeOf:Jl,getOwnPropertyDescriptor:Zl}=Object;let{freeze:q,seal:ee,create:En}=Object,{apply:kn,construct:In}=typeof Reflect<"u"&&Reflect;q||(q=function(t){return t}),ee||(ee=function(t){return t}),kn||(kn=function(t,n){for(var u=arguments.length,i=new Array(u>2?u-2:0),o=2;o<u;o++)i[o-2]=arguments[o];return t.apply(n,i)}),In||(In=function(t){for(var n=arguments.length,u=new Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return new t(...u)});const Ft=Y(Array.prototype.forEach),Kl=Y(Array.prototype.lastIndexOf),Si=Y(Array.prototype.pop),at=Y(Array.prototype.push),$l=Y(Array.prototype.splice),Tt=Y(String.prototype.toLowerCase),Sn=Y(String.prototype.toString),Rn=Y(String.prototype.match),ct=Y(String.prototype.replace),e0=Y(String.prototype.indexOf),t0=Y(String.prototype.trim),ne=Y(Object.prototype.hasOwnProperty),G=Y(RegExp.prototype.test),lt=n0(TypeError);function Y(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,u=new Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return kn(e,t,u)}}function n0(e){return function(){for(var t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return In(e,n)}}function S(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tt;Ii&&Ii(e,null);let u=t.length;for(;u--;){let i=t[u];if(typeof i=="string"){const o=n(i);o!==i&&(Wl(t)||(t[u]=o),i=o)}e[i]=!0}return e}function u0(e){for(let t=0;t<e.length;t++)ne(e,t)||(e[t]=null);return e}function le(e){const t=En(null);for(const[n,u]of ki(e))ne(e,n)&&(Array.isArray(u)?t[n]=u0(u):u&&typeof u=="object"&&u.constructor===Object?t[n]=le(u):t[n]=u);return t}function dt(e,t){for(;e!==null;){const u=Zl(e,t);if(u){if(u.get)return Y(u.get);if(typeof u.value=="function")return Y(u.value)}e=Jl(e)}function n(){return null}return n}const Ri=q(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Dn=q(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_n=q(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),i0=q(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Fn=q(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),o0=q(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Di=q(["#text"]),_i=q(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Tn=q(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fi=q(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Bt=q(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),r0=ee(/\{\{[\w\W]*|[\w\W]*\}\}/gm),s0=ee(/<%[\w\W]*|[\w\W]*%>/gm),a0=ee(/\$\{[\w\W]*/gm),c0=ee(/^data-[\-\w.\u00B7-\uFFFF]+$/),l0=ee(/^aria-[\-\w]+$/),Ti=ee(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),d0=ee(/^(?:\w+script|data):/i),f0=ee(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Bi=ee(/^html$/i),h0=ee(/^[a-z][.\w]*(-[.\w]+)+$/i);var Mi=Object.freeze({__proto__:null,ARIA_ATTR:l0,ATTR_WHITESPACE:f0,CUSTOM_ELEMENT:h0,DATA_ATTR:c0,DOCTYPE_NAME:Bi,ERB_EXPR:s0,IS_ALLOWED_URI:Ti,IS_SCRIPT_OR_DATA:d0,MUSTACHE_EXPR:r0,TMPLIT_EXPR:a0});const ft={element:1,text:3,progressingInstruction:7,comment:8,document:9},p0=function(){return typeof window>"u"?null:window},A0=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let u=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(u=n.getAttribute(i));const o="dompurify"+(u?"#"+u:"");try{return t.createPolicy(o,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Ui=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Pi(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:p0();const t=C=>Pi(C);if(t.version="3.3.0",t.removed=[],!e||!e.document||e.document.nodeType!==ft.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const u=n,i=u.currentScript,{DocumentFragment:o,HTMLTemplateElement:r,Node:s,Element:a,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:A,trustedTypes:p}=e,h=a.prototype,k=dt(h,"cloneNode"),I=dt(h,"remove"),D=dt(h,"nextSibling"),v=dt(h,"childNodes"),w=dt(h,"parentNode");if(typeof r=="function"){const C=n.createElement("template");C.content&&C.content.ownerDocument&&(n=C.content.ownerDocument)}let m,E="";const{implementation:R,createNodeIterator:U,createDocumentFragment:K,getElementsByTagName:se}=n,{importNode:Ie}=u;let P=Ui();t.isSupported=typeof ki=="function"&&typeof w=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ht,ERB_EXPR:pt,TMPLIT_EXPR:Le,DATA_ATTR:Ce,ARIA_ATTR:On,IS_SCRIPT_OR_DATA:cd,ATTR_WHITESPACE:Yi,CUSTOM_ELEMENT:ld}=Mi;let{IS_ALLOWED_URI:Xi}=Mi,N=null;const Wi=S({},[...Ri,...Dn,..._n,...Fn,...Di]);let z=null;const Ji=S({},[..._i,...Tn,...Fi,...Bt]);let T=Object.seal(En(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),At=null,Nn=null;const Oe=Object.seal(En(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Zi=!0,Hn=!0,Ki=!1,$i=!0,Ne=!1,Ut=!0,Se=!1,zn=!1,Qn=!1,He=!1,Pt=!1,Lt=!1,eo=!0,to=!1;const dd="user-content-";let jn=!0,gt=!1,ze={},Qe=null;const no=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let uo=null;const io=S({},["audio","video","img","source","image","track"]);let Vn=null;const oo=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ot="http://www.w3.org/1998/Math/MathML",Nt="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xhtml";let je=de,qn=!1,Gn=null;const fd=S({},[Ot,Nt,de],Sn);let Ht=S({},["mi","mo","mn","ms","mtext"]),zt=S({},["annotation-xml"]);const hd=S({},["title","style","font","a","script"]);let bt=null;const pd=["application/xhtml+xml","text/html"],Ad="text/html";let H=null,Ve=null;const gd=n.createElement("form"),ro=function(l){return l instanceof RegExp||l instanceof Function},Yn=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ve&&Ve===l)){if((!l||typeof l!="object")&&(l={}),l=le(l),bt=pd.indexOf(l.PARSER_MEDIA_TYPE)===-1?Ad:l.PARSER_MEDIA_TYPE,H=bt==="application/xhtml+xml"?Sn:Tt,N=ne(l,"ALLOWED_TAGS")?S({},l.ALLOWED_TAGS,H):Wi,z=ne(l,"ALLOWED_ATTR")?S({},l.ALLOWED_ATTR,H):Ji,Gn=ne(l,"ALLOWED_NAMESPACES")?S({},l.ALLOWED_NAMESPACES,Sn):fd,Vn=ne(l,"ADD_URI_SAFE_ATTR")?S(le(oo),l.ADD_URI_SAFE_ATTR,H):oo,uo=ne(l,"ADD_DATA_URI_TAGS")?S(le(io),l.ADD_DATA_URI_TAGS,H):io,Qe=ne(l,"FORBID_CONTENTS")?S({},l.FORBID_CONTENTS,H):no,At=ne(l,"FORBID_TAGS")?S({},l.FORBID_TAGS,H):le({}),Nn=ne(l,"FORBID_ATTR")?S({},l.FORBID_ATTR,H):le({}),ze=ne(l,"USE_PROFILES")?l.USE_PROFILES:!1,Zi=l.ALLOW_ARIA_ATTR!==!1,Hn=l.ALLOW_DATA_ATTR!==!1,Ki=l.ALLOW_UNKNOWN_PROTOCOLS||!1,$i=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ne=l.SAFE_FOR_TEMPLATES||!1,Ut=l.SAFE_FOR_XML!==!1,Se=l.WHOLE_DOCUMENT||!1,He=l.RETURN_DOM||!1,Pt=l.RETURN_DOM_FRAGMENT||!1,Lt=l.RETURN_TRUSTED_TYPE||!1,Qn=l.FORCE_BODY||!1,eo=l.SANITIZE_DOM!==!1,to=l.SANITIZE_NAMED_PROPS||!1,jn=l.KEEP_CONTENT!==!1,gt=l.IN_PLACE||!1,Xi=l.ALLOWED_URI_REGEXP||Ti,je=l.NAMESPACE||de,Ht=l.MATHML_TEXT_INTEGRATION_POINTS||Ht,zt=l.HTML_INTEGRATION_POINTS||zt,T=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&ro(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(T.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&ro(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(T.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(T.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ne&&(Hn=!1),Pt&&(He=!0),ze&&(N=S({},Di),z=[],ze.html===!0&&(S(N,Ri),S(z,_i)),ze.svg===!0&&(S(N,Dn),S(z,Tn),S(z,Bt)),ze.svgFilters===!0&&(S(N,_n),S(z,Tn),S(z,Bt)),ze.mathMl===!0&&(S(N,Fn),S(z,Fi),S(z,Bt))),l.ADD_TAGS&&(typeof l.ADD_TAGS=="function"?Oe.tagCheck=l.ADD_TAGS:(N===Wi&&(N=le(N)),S(N,l.ADD_TAGS,H))),l.ADD_ATTR&&(typeof l.ADD_ATTR=="function"?Oe.attributeCheck=l.ADD_ATTR:(z===Ji&&(z=le(z)),S(z,l.ADD_ATTR,H))),l.ADD_URI_SAFE_ATTR&&S(Vn,l.ADD_URI_SAFE_ATTR,H),l.FORBID_CONTENTS&&(Qe===no&&(Qe=le(Qe)),S(Qe,l.FORBID_CONTENTS,H)),jn&&(N["#text"]=!0),Se&&S(N,["html","head","body"]),N.table&&(S(N,["tbody"]),delete At.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw lt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw lt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=l.TRUSTED_TYPES_POLICY,E=m.createHTML("")}else m===void 0&&(m=A0(p,i)),m!==null&&typeof E=="string"&&(E=m.createHTML(""));q&&q(l),Ve=l}},so=S({},[...Dn,..._n,...i0]),ao=S({},[...Fn,...o0]),bd=function(l){let g=w(l);(!g||!g.tagName)&&(g={namespaceURI:je,tagName:"template"});const x=Tt(l.tagName),F=Tt(g.tagName);return Gn[l.namespaceURI]?l.namespaceURI===Nt?g.namespaceURI===de?x==="svg":g.namespaceURI===Ot?x==="svg"&&(F==="annotation-xml"||Ht[F]):!!so[x]:l.namespaceURI===Ot?g.namespaceURI===de?x==="math":g.namespaceURI===Nt?x==="math"&&zt[F]:!!ao[x]:l.namespaceURI===de?g.namespaceURI===Nt&&!zt[F]||g.namespaceURI===Ot&&!Ht[F]?!1:!ao[x]&&(hd[x]||!so[x]):!!(bt==="application/xhtml+xml"&&Gn[l.namespaceURI]):!1},ae=function(l){at(t.removed,{element:l});try{w(l).removeChild(l)}catch{I(l)}},Re=function(l,g){try{at(t.removed,{attribute:g.getAttributeNode(l),from:g})}catch{at(t.removed,{attribute:null,from:g})}if(g.removeAttribute(l),l==="is")if(He||Pt)try{ae(g)}catch{}else try{g.setAttribute(l,"")}catch{}},co=function(l){let g=null,x=null;if(Qn)l="<remove></remove>"+l;else{const M=Rn(l,/^[\r\n\t ]+/);x=M&&M[0]}bt==="application/xhtml+xml"&&je===de&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const F=m?m.createHTML(l):l;if(je===de)try{g=new A().parseFromString(F,bt)}catch{}if(!g||!g.documentElement){g=R.createDocument(je,"template",null);try{g.documentElement.innerHTML=qn?E:F}catch{}}const V=g.body||g.documentElement;return l&&x&&V.insertBefore(n.createTextNode(x),V.childNodes[0]||null),je===de?se.call(g,Se?"html":"body")[0]:Se?g.documentElement:V},lo=function(l){return U.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Xn=function(l){return l instanceof f&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof d)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},fo=function(l){return typeof s=="function"&&l instanceof s};function fe(C,l,g){Ft(C,x=>{x.call(t,l,g,Ve)})}const ho=function(l){let g=null;if(fe(P.beforeSanitizeElements,l,null),Xn(l))return ae(l),!0;const x=H(l.nodeName);if(fe(P.uponSanitizeElement,l,{tagName:x,allowedTags:N}),Ut&&l.hasChildNodes()&&!fo(l.firstElementChild)&&G(/<[/\w!]/g,l.innerHTML)&&G(/<[/\w!]/g,l.textContent)||l.nodeType===ft.progressingInstruction||Ut&&l.nodeType===ft.comment&&G(/<[/\w]/g,l.data))return ae(l),!0;if(!(Oe.tagCheck instanceof Function&&Oe.tagCheck(x))&&(!N[x]||At[x])){if(!At[x]&&Ao(x)&&(T.tagNameCheck instanceof RegExp&&G(T.tagNameCheck,x)||T.tagNameCheck instanceof Function&&T.tagNameCheck(x)))return!1;if(jn&&!Qe[x]){const F=w(l)||l.parentNode,V=v(l)||l.childNodes;if(V&&F){const M=V.length;for(let J=M-1;J>=0;--J){const he=k(V[J],!0);he.__removalCount=(l.__removalCount||0)+1,F.insertBefore(he,D(l))}}}return ae(l),!0}return l instanceof a&&!bd(l)||(x==="noscript"||x==="noembed"||x==="noframes")&&G(/<\/no(script|embed|frames)/i,l.innerHTML)?(ae(l),!0):(Ne&&l.nodeType===ft.text&&(g=l.textContent,Ft([ht,pt,Le],F=>{g=ct(g,F," ")}),l.textContent!==g&&(at(t.removed,{element:l.cloneNode()}),l.textContent=g)),fe(P.afterSanitizeElements,l,null),!1)},po=function(l,g,x){if(eo&&(g==="id"||g==="name")&&(x in n||x in gd))return!1;if(!(Hn&&!Nn[g]&&G(Ce,g))){if(!(Zi&&G(On,g))){if(!(Oe.attributeCheck instanceof Function&&Oe.attributeCheck(g,l))){if(!z[g]||Nn[g]){if(!(Ao(l)&&(T.tagNameCheck instanceof RegExp&&G(T.tagNameCheck,l)||T.tagNameCheck instanceof Function&&T.tagNameCheck(l))&&(T.attributeNameCheck instanceof RegExp&&G(T.attributeNameCheck,g)||T.attributeNameCheck instanceof Function&&T.attributeNameCheck(g,l))||g==="is"&&T.allowCustomizedBuiltInElements&&(T.tagNameCheck instanceof RegExp&&G(T.tagNameCheck,x)||T.tagNameCheck instanceof Function&&T.tagNameCheck(x))))return!1}else if(!Vn[g]){if(!G(Xi,ct(x,Yi,""))){if(!((g==="src"||g==="xlink:href"||g==="href")&&l!=="script"&&e0(x,"data:")===0&&uo[l])){if(!(Ki&&!G(cd,ct(x,Yi,"")))){if(x)return!1}}}}}}}return!0},Ao=function(l){return l!=="annotation-xml"&&Rn(l,ld)},go=function(l){fe(P.beforeSanitizeAttributes,l,null);const{attributes:g}=l;if(!g||Xn(l))return;const x={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:z,forceKeepAttr:void 0};let F=g.length;for(;F--;){const V=g[F],{name:M,namespaceURI:J,value:he}=V,qe=H(M),Wn=he;let Q=M==="value"?Wn:t0(Wn);if(x.attrName=qe,x.attrValue=Q,x.keepAttr=!0,x.forceKeepAttr=void 0,fe(P.uponSanitizeAttribute,l,x),Q=x.attrValue,to&&(qe==="id"||qe==="name")&&(Re(M,l),Q=dd+Q),Ut&&G(/((--!?|])>)|<\/(style|title|textarea)/i,Q)){Re(M,l);continue}if(qe==="attributename"&&Rn(Q,"href")){Re(M,l);continue}if(x.forceKeepAttr)continue;if(!x.keepAttr){Re(M,l);continue}if(!$i&&G(/\/>/i,Q)){Re(M,l);continue}Ne&&Ft([ht,pt,Le],mo=>{Q=ct(Q,mo," ")});const bo=H(l.nodeName);if(!po(bo,qe,Q)){Re(M,l);continue}if(m&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!J)switch(p.getAttributeType(bo,qe)){case"TrustedHTML":{Q=m.createHTML(Q);break}case"TrustedScriptURL":{Q=m.createScriptURL(Q);break}}if(Q!==Wn)try{J?l.setAttributeNS(J,M,Q):l.setAttribute(M,Q),Xn(l)?ae(l):Si(t.removed)}catch{Re(M,l)}}fe(P.afterSanitizeAttributes,l,null)},md=function C(l){let g=null;const x=lo(l);for(fe(P.beforeSanitizeShadowDOM,l,null);g=x.nextNode();)fe(P.uponSanitizeShadowNode,g,null),ho(g),go(g),g.content instanceof o&&C(g.content);fe(P.afterSanitizeShadowDOM,l,null)};return t.sanitize=function(C){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=null,x=null,F=null,V=null;if(qn=!C,qn&&(C="<!-->"),typeof C!="string"&&!fo(C))if(typeof C.toString=="function"){if(C=C.toString(),typeof C!="string")throw lt("dirty is not a string, aborting")}else throw lt("toString is not a function");if(!t.isSupported)return C;if(zn||Yn(l),t.removed=[],typeof C=="string"&&(gt=!1),gt){if(C.nodeName){const he=H(C.nodeName);if(!N[he]||At[he])throw lt("root node is forbidden and cannot be sanitized in-place")}}else if(C instanceof s)g=co("<!---->"),x=g.ownerDocument.importNode(C,!0),x.nodeType===ft.element&&x.nodeName==="BODY"||x.nodeName==="HTML"?g=x:g.appendChild(x);else{if(!He&&!Ne&&!Se&&C.indexOf("<")===-1)return m&&Lt?m.createHTML(C):C;if(g=co(C),!g)return He?null:Lt?E:""}g&&Qn&&ae(g.firstChild);const M=lo(gt?C:g);for(;F=M.nextNode();)ho(F),go(F),F.content instanceof o&&md(F.content);if(gt)return C;if(He){if(Pt)for(V=K.call(g.ownerDocument);g.firstChild;)V.appendChild(g.firstChild);else V=g;return(z.shadowroot||z.shadowrootmode)&&(V=Ie.call(u,V,!0)),V}let J=Se?g.outerHTML:g.innerHTML;return Se&&N["!doctype"]&&g.ownerDocument&&g.ownerDocument.doctype&&g.ownerDocument.doctype.name&&G(Bi,g.ownerDocument.doctype.name)&&(J="<!DOCTYPE "+g.ownerDocument.doctype.name+`>
`+J),Ne&&Ft([ht,pt,Le],he=>{J=ct(J,he," ")}),m&&Lt?m.createHTML(J):J},t.setConfig=function(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Yn(C),zn=!0},t.clearConfig=function(){Ve=null,zn=!1},t.isValidAttribute=function(C,l,g){Ve||Yn({});const x=H(C),F=H(l);return po(x,F,g)},t.addHook=function(C,l){typeof l=="function"&&at(P[C],l)},t.removeHook=function(C,l){if(l!==void 0){const g=Kl(P[C],l);return g===-1?void 0:$l(P[C],g,1)[0]}return Si(P[C])},t.removeHooks=function(C){P[C]=[]},t.removeAllHooks=function(){P=Ui()},t}var g0=Pi();function b0(){const e=new $({html:!1,linkify:!0,breaks:!0}).use(Xl);return{render(t){const n=e.render(t),u=g0.sanitize(n,{ALLOWED_TAGS:["a","p","ul","ol","li","code","pre","strong","em","blockquote","table","thead","tbody","tr","th","td","del","hr","br","img","span","input"],ALLOWED_ATTR:["href","title","target","rel","src","alt","class","type","checked","disabled","aria-label"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["style","script"],USE_PROFILES:{html:!0}}),i=document.createElement("div");return i.innerHTML=u,i.querySelectorAll("a").forEach(o=>{o.setAttribute("target","_blank"),o.setAttribute("rel","noopener noreferrer")}),i.querySelectorAll('input[type="checkbox"]').forEach(o=>{o.setAttribute("disabled",""),o.setAttribute("tabindex","-1")}),i.innerHTML}}}function m0(e){var s,a,c,d,f,A,p,h,k,I,D;const t=e.rawValue.trim();if(!t||e.isLoading)return null;const n=((a=(s=e.options)==null?void 0:s.forcePayload)==null?void 0:a.quickResponse)??e.quickResponse,u=((d=(c=e.options)==null?void 0:c.forcePayload)==null?void 0:d.contentToSend)??t,i=((A=(f=e.options)==null?void 0:f.forcePayload)==null?void 0:A.contentToDisplay)??t,o={text:i,toSend:u,quickResponse:n,consultantContext:((p=e.options)==null?void 0:p.consultantContext)??null,isConsultantAgent:((h=e.options)==null?void 0:h.isConsultantAgent)??!1},r=((k=e.options)==null?void 0:k.attachments)??[];if(!((I=e.options)!=null&&I.suppressUserMessage)){const v=e.createMessage({role:"user",text:i,request:o});return{content:t,contentToSend:u,contentToDisplay:i,requestPayload:o,pendingResponse:{messageId:v.id,requestText:o.text,requestToSend:o.toSend,quickResponse:o.quickResponse,consultantContext:o.consultantContext??null,isConsultantAgent:o.isConsultantAgent??!1},userMessage:v,shouldRefreshConversations:!e.hasMessages,attachments:r}}return{content:t,contentToSend:u,contentToDisplay:i,requestPayload:o,pendingResponse:{messageId:((D=e.options)==null?void 0:D.responseToMessageId)??"resend",requestText:o.text,requestToSend:o.toSend,quickResponse:o.quickResponse,consultantContext:o.consultantContext??null,isConsultantAgent:o.isConsultantAgent??!1},shouldRefreshConversations:!e.hasMessages,attachments:r}}function x0(e){return{quickResponse:e.quickResponse,...e.consultantContext||e.isConsultantAgent?{isConsultantAgent:!!e.isConsultantAgent,consultantContext:e.consultantContext??null}:{}}}function C0(e){return t=>({id:e.createId(),role:t.role,text:t.text,html:e.renderHtml(t.text),timestamp:e.now(),request:t.request,responseTo:t.responseTo,hidden:t.hidden,consultantFollowUp:t.consultantFollowUp})}function v0(e){return e.createMessage({role:"assistant",text:e.text,responseTo:e.pendingResponse??void 0})}function w0(e){const{incomingConversationId:t,incomingConversationTitle:n}=e;if(!t)return{conversations:e.conversations,activeConversationTitle:null,activeConversationUpdatedAt:null,isNewConversation:!1};const u=e.conversations.findIndex(a=>a.id===t),i=u===-1;let o=e.conversations,r=null,s=null;if(n)if(r=n,s=e.nowIsoString,i)o=[{id:t,title:n,updatedAt:e.nowIsoString},...e.conversations];else{const a=e.conversations[u],c=[...e.conversations];c.splice(u,1),c.unshift({...a,title:n,updatedAt:e.nowIsoString}),o=c}return{conversations:o,activeConversationTitle:r,activeConversationUpdatedAt:s,isNewConversation:i}}function y0(e){return{message:e.content,apiBaseUrl:e.apiBaseUrl,hasToken:e.hasToken,tokenPreview:e.tokenPreview,consultantContext:e.consultantContext,isConsultantAgent:e.isConsultantAgent,quickResponse:e.quickResponse,attachments:e.attachments.map(t=>t.file)}}function E0(e){return{messages:e.prepared.userMessage?[...e.messages,e.prepared.userMessage]:e.messages,pendingResponseTo:e.prepared.pendingResponse,showNewConversationShortcut:e.prepared.shouldRefreshConversations,refreshConversationsAfterResponse:e.prepared.shouldRefreshConversations,message:"",errorMessage:"",isLoading:!0}}function k0(e){return{pendingResponseTo:null,isLoading:!1,errorMessage:e}}function I0(e){const t=e.voiceAttachmentId&&e.sentAttachments.some(n=>n.id===e.voiceAttachmentId);return{shouldRevokePreviewUrls:e.selectedFiles.filter(n=>!!n.previewUrl).map(n=>n.previewUrl),selectedFiles:[],attachmentError:"",voiceAttachmentId:t?null:e.voiceAttachmentId,voiceTranscript:t?"":void 0}}function S0(e){var n,u;const t=m0({rawValue:e.rawValue,isLoading:e.isLoading,quickResponse:e.quickResponse,hasMessages:e.hasMessages,options:e.options,createMessage:e.createMessage});return t?{prepared:t,sendEventDetail:y0({content:t.content,apiBaseUrl:e.apiBaseUrl,hasToken:e.hasToken,tokenPreview:e.tokenPreview,consultantContext:((n=e.options)==null?void 0:n.consultantContext)??null,isConsultantAgent:((u=e.options)==null?void 0:u.isConsultantAgent)??!1,quickResponse:t.requestPayload.quickResponse,attachments:t.attachments}),uiState:E0({messages:e.messages,prepared:t}),websocketExtraPayload:x0(t.requestPayload),resetConversationMeta:!0}:null}function R0(e){return I0(e)}function D0(e){return k0(e instanceof Error?e.message:"Nao foi possivel enviar a mensagem para o agente.")}function _0(e,t){return{messageId:e.id,role:e.role,text:e.text,conversationId:t,responseTo:e.responseTo??null}}function F0(e){return{copiedMessageId:e,timeoutMs:1200}}function T0(){return{copiedMessageId:null}}function B0(e,t,n){const i=e[n]===t?void 0:t,o={...e};return i?o[n]=i:delete o[n],o}function M0(e,t){return e.map(n=>n.id===t?{...n,hidden:!0}:n)}function U0(e){if(!e||e.includes(":"))return e;const t=e.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);if(!t||t.index===void 0)return e;const n=t[0],u=e.slice(0,t.index).replace(/[-:]?$/,""),i=e.slice(t.index+n.length);return`${u?`${u}:`:""}${n}${i}`}function P0(e){if(typeof e=="string"){const t=e.toLowerCase();if(t.includes("user")||t.includes("client"))return"user";if(t.includes("assistant")||t.includes("agent")||t.includes("bot"))return"assistant"}return"assistant"}function Bn(e,t){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){const n=e.trim();if(n){const u=Number(n);if(Number.isFinite(u))return u;const i=Date.parse(n);if(Number.isFinite(i))return i}}return Number.isFinite(t??Number.NaN)?t:Date.now()}function L0(e){if(typeof e=="string"||typeof e=="number"){const t=new Date(e);if(!Number.isNaN(t.getTime()))return t.toISOString()}return new Date().toISOString()}function O0(e){if(!e||typeof e!="object")return!1;const t=e,n=t.role??t.sender??t.from??t.author??t.type;return!!(typeof n=="string"&&n.trim().length>0||typeof t.content=="string"||typeof t.message=="string"||typeof t.text=="string"||typeof t.response=="string"||Array.isArray(t.parts)&&t.parts.length>0)}function N0(e){if(typeof e.action=="string"&&e.action.toLowerCase().includes("history"))return!0;const t=e.data;if(t&&typeof t=="object"){const n=t.action;if(typeof n=="string"&&n.toLowerCase().includes("history")||Array.isArray(t.history)||Array.isArray(t.conversations))return!0}return!1}function Li(e){if(Array.isArray(e))return e;if(e&&typeof e=="object"){const t=e,n=[t.history,t.conversations,t.data,t.items,t.messages];for(const u of n)if(Array.isArray(u))return u;if(t.data&&typeof t.data=="object"&&!Array.isArray(t.data)){const u=Li(t.data);if(u.length>0)return u}}return[]}function Oi(e,t){if(e&&typeof e=="object"){const n=e,u=[n.conversationId,n.conversationUUID,n.conversationUuid,n.uuid,n.id];for(const i of u){if(i===null)return null;if(i!==void 0)return t(String(i))}}}function H0(e){return e.some(t=>O0(t))}function z0(e,t){if(e.length===0)return[];const n=new Map;return e.forEach((u,i)=>{if(!u||typeof u!="object")return;const o=j0(u,i,t);if(!o)return;const r=n.get(o.id);if(!r){n.set(o.id,o);return}const s=Date.parse(r.updatedAt),a=Date.parse(o.updatedAt);Number.isFinite(a)&&a>s&&n.set(o.id,o)}),Array.from(n.values()).sort((u,i)=>{const o=Date.parse(i.updatedAt)-Date.parse(u.updatedAt);return Number.isFinite(o)?o:0})}function Q0(e,t){return e.length===0?[]:e.flatMap((n,u)=>V0(n,u,t))}function j0(e,t,n){const u=e.conversationId??e.conversationUUID??e.conversationUuid??e.uuid??e.id,i=u!=null?String(u):`history-${t+1}`,o=n(i),r=e.title??e.name??e.topic??e.subject??e.question??e.query??e.message,s=typeof r=="string"&&r.trim().length>0?r.trim():`Conversa ${t+1}`,a=e.updatedAt??e.updated_at??e.lastMessageAt??e.last_message_at??e.createdAt??e.created_at??e.timestamp??e.date,c=L0(a);return{id:o,title:s,updatedAt:c}}function V0(e,t,n){const u=[],i=e.message??e.question??e.query??e.text??e.content,o=typeof i=="string"?i.trim():"",r=e.response??e.answer??e.reply??e.completion??e.body??e.preview,s=typeof r=="string"?r.trim():"",a=e.id??e.messageId??e.uuid??e.conversationMessageId,c=a!=null?String(a):`history-${t+1}`,d=e.timestamp??e.createdAt??e.created_at??e.date??e.time,f=e.responseTimestamp??e.responseTime??e.responseDate??e.response_at??e.updatedAt??e.updated_at,A=Bn(d),p=Bn(f,A+1);if(s)o&&u.push({id:`${c}-user`,role:"user",text:o,html:n(o),timestamp:A}),u.push({id:`${c}-assistant`,role:"assistant",text:s,html:n(s),timestamp:p});else if(o)return[];if(u.length>0)return u;const h=q0(e,t,n);return h?[h]:[]}function q0(e,t,n){const u=e.text??e.message??e.content??e.response??e.body??e.preview,i=typeof u=="string"&&u.trim().length>0?u:"";if(!i)return null;const o=P0(e.role??e.sender??e.from??e.author??e.type??e.direction),r=e.id??e.messageId??e.uuid??e.conversationMessageId,s=r!=null?String(r):`history-message-${t+1}`,a=e.timestamp??e.createdAt??e.created_at??e.updatedAt??e.updated_at??e.date??e.time,c=Bn(a);return{id:s,role:o,text:i,html:n(i),timestamp:c}}function G0(e){var s;const t=Oi(e.message.data,e.repairConversationId),n=typeof((s=e.message.data)==null?void 0:s.conversationTitle)=="string"?e.message.data.conversationTitle.trim():"",u=t?w0({conversations:e.conversations,incomingConversationId:t,incomingConversationTitle:n,nowIsoString:e.nowIsoString}):{conversations:e.conversations,activeConversationTitle:null,activeConversationUpdatedAt:null,isNewConversation:!1},i=en({conversations:u.conversations,currentConversationId:t??null});if(e.message.action==="processing")return{incomingConversationId:t,conversationSync:u,conversationMetaState:i,assistantMessage:null,consultantEffects:null,shouldKeepLoading:!0};const o=v0({text:e.message.text,pendingResponse:e.pendingResponseTo,createMessage:e.createMessage}),r=ps({state:e.consultantState,consultantAgentOptions:e.consultantAgentOptions,createMessage:e.createConsultantMessage,createId:e.createId});return{incomingConversationId:t,conversationSync:u,conversationMetaState:i,assistantMessage:o,consultantEffects:r,shouldKeepLoading:!1}}function Mn(){return{height:0,top:0,visible:!1}}function Y0(e){const{scrollHeight:t,clientHeight:n,scrollTop:u}=e;if(t<=n+1)return Mn();const i=n/t,o=Math.max(i*100,8),r=100-o,s=u/(t-n)*(r>0?r:0);return{height:o,top:s,visible:!0}}function X0(e){const{trackHeight:t,scrollbarHeightPercent:n,scrollHeight:u,clientHeight:i,scrollTop:o}=e,r=t*(n/100),s=Math.max(t-r,0),a=Math.max(u-i,1),c=o/a*s;return{thumbHeight:r,maxThumbTop:s,currentThumbTop:c}}function W0(e){const{pointerY:t,trackTop:n,trackHeight:u,scrollbarHeightPercent:i,scrollHeight:o,clientHeight:r,scrollTop:s}=e,{thumbHeight:a,maxThumbTop:c,currentThumbTop:d}=X0({trackHeight:u,scrollbarHeightPercent:i,scrollHeight:o,clientHeight:r,scrollTop:s}),f=t-n,A=f>=d&&f<=d+a,p=A?d:Math.min(Math.max(f-a/2,0),c);return{nextScrollTop:A?null:p/Math.max(c,1)*(o-r),metrics:{startY:t,startThumbTop:p,trackHeight:u,thumbHeight:a}}}function J0(e){const{metrics:t,pointerY:n,scrollHeight:u,clientHeight:i}=e,o=Math.max(t.trackHeight-t.thumbHeight,0),r=n-t.startY,s=Math.min(Math.max(t.startThumbTop+r,0),o),a=u-i;return a<=0?null:s/Math.max(o,1)*a}function _d(e){return e}function Z0(e,t,n){return Math.min(Math.max(e,t),n)}function K0(e){const{dragState:t,pointerY:n,viewportHeight:u,margin:i=12,dragThreshold:o=3}=e,r=n-t.startY,s=Math.max(i,u-t.buttonHeight-i);return{offset:Z0(t.startOffset-r,i,s),dragged:Math.abs(r)>o}}function $0(e){return{shouldSuppressClick:e}}function Ni(e){if(e.isFullscreen)return Un(e,!1);const t=!e.open;return{...e,open:t,emittedEvent:t?"rioassist:open":"rioassist:close"}}function ed(e){const t=!e.open&&!e.isFullscreen;return{...Ni(e),willOpenMiniPanel:t}}function Hi(e){return e.open?{...e,open:!1,isFullscreen:!1,emittedEvent:"rioassist:close"}:{...e,isFullscreen:!1,emittedEvent:null}}function td(e){return{...e,showConversations:!0,emittedEvent:null,shouldRequestHistory:!0}}function zi(e){return{...e,showConversations:!1,conversationMenuId:null,emittedEvent:null}}function nd(e){const t=!e.showConversations;return{...e,showConversations:t,conversationMenuId:t?e.conversationMenuId:null,emittedEvent:null,shouldRequestHistory:t}}function ud(e){return e.isFullscreen?{nextState:Un(e,!0),action:"exit-fullscreen"}:e.showConversations?{nextState:zi(e),action:"close-conversations"}:{nextState:Hi(e),action:"close-panel"}}function id(e){return e.isFullscreen?{...e,emittedEvent:null,shouldRequestHistory:!1}:{...e,isFullscreen:!0,open:!1,showConversations:!1,emittedEvent:null,shouldRequestHistory:!0}}function Un(e,t){return e.isFullscreen?{...e,isFullscreen:!1,conversationMenuId:null,showNewConversationShortcut:!1,open:t?!0:e.open,emittedEvent:null}:{...e,emittedEvent:null}}function od(e){return{...e,newConversationConfirmOpen:!0,emittedEvent:null}}function Pn(e){return{...e,newConversationConfirmOpen:!1,emittedEvent:null}}function rd(){return{isLoading:!1,messages:[],message:"",errorMessage:"",showConversations:!1,currentConversationId:null,activeConversationTitle:null,activeConversationUpdatedAt:null,showNewConversationShortcut:!1}}const Qi=280,X={info:ke.info,warn:ke.warn,error:ke.error},sd="Consulte o UptAIme Agent",ji="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",Mt=class Mt extends $e{constructor(){super(...arguments),this.open=!1,this.message="",this.selectedFiles=[],this.attachmentError="",this.isRecording=!1,this.isRecordingPaused=!1,this.voiceAttachmentId=null,this.voiceTranscript="",this.voiceCancelDialogOpen=!1,this.voiceCancelDialogMode="cancel",this.speechRecognitionAvailable=!1,this.titleText="UptAIme Assist",this.buttonLabel="Uptaime Assist",this.floatingButtonIconUrl="",this.floatingButtonLabelIconUrl="",this.floatingButtonBackgroundIconUrl="",this.placeholder="Pergunte alguma coisa",this.accentColor="#B23672",this.floatingButtonOffset=32,this.apiBaseUrl="",this.wsBaseUrl="",this.consultantApiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.randomizedSuggestions=[],this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar=Mn(),this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.deleteConversationTarget=null,this.renameConversationTarget=null,this.quickResponse=!0,this.newConversationConfirmOpen=!1,this.conversationActionError=null,this.loadingLabelInternal=ia,this.refreshConversationsAfterResponse=!1,this.activeConversationTitle=null,this.activeConversationUpdatedAt=null,this.headerActions=[],this.homeUrl="",this.consultantAgentVisible=!1,this.consultantAgentIntro=os,this.consultantAgentButtonText=sd,this.showConsultantAgentButton=!0,this.consultantAgentInitialMessage=ji,this.autoStartConsultantFlow=!1,this.consultantAgentOptions=[],this.showSuggestions=!0,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.activeConsultantPromptId=null,this.consultantAgentStage="idle",this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantPromptId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.pendingConversationAction=null,this.pendingVoiceRemovalId=null,this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.loadingGuard=new oa({onLabelChange:t=>{this.loadingLabelInternal=t},onRequestUpdate:()=>this.requestUpdate()}),this.voiceCapture=new ua(X),this.conversationScrollbarRaf=null,this.rioClient=null,this.rioSession=new ta,this.consultantOptionsGateway=new na,this.copiedMessageId=null,this.messageReactions={},this.copiedMessageTimer=null,this.pendingResponseTo=null,this.currentConversationId=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.floatingButtonDragState=null,this.floatingButtonDragged=!1,this.suppressFloatingButtonClick=!1,this.markdownRenderer=b0(),this.conversations=[],this.createChatMessage=C0({createId:()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,now:()=>Date.now(),renderHtml:t=>this.renderMarkdown(t)})}get loadingLabel(){return this.loadingLabelInternal}repairConversationId(t){return U0(t)}randomId(t){const n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let u="";for(let i=0;i<t;i+=1)u+=n.charAt(Math.floor(Math.random()*n.length));return u}getTokenPreview(t){const n=t.trim();return n?n.length<=10?`${n.slice(0,2)}***${n.slice(-2)}`:`${n.slice(0,6)}***${n.slice(-4)}`:null}get suggestions(){return this.randomizedSuggestions}parseSuggestions(t){return t?t.split("|").map(n=>n.trim()).filter(Boolean):[]}pickRandomSuggestions(t,n){if(t.length<=n)return[...t];const u=[...t];for(let i=u.length-1;i>0;i-=1){const o=Math.floor(Math.random()*(i+1));[u[i],u[o]]=[u[o],u[i]]}return u.slice(0,n)}willUpdate(t){super.willUpdate(t),t.has("suggestionsSource")&&(this.randomizedSuggestions=this.pickRandomSuggestions(this.parseSuggestions(this.suggestionsSource),3))}updated(t){super.updated(t),this.style.setProperty("--accent-color",this.accentColor),(t.has("isFullscreen")||t.has("showConversations")||t.has("conversations"))&&this.enqueueConversationScrollbarMeasure(),(t.has("messages")||t.has("isLoading")&&this.isLoading||t.has("open")&&this.open||t.has("isFullscreen")&&this.isFullscreen)&&this.scrollConversationToBottom(),(t.has("message")||t.has("isRecording")||t.has("selectedFiles")||t.has("isFullscreen")||t.has("showConversations")||t.has("open"))&&(this.syncComposerHeight(),requestAnimationFrame(()=>this.syncComposerHeight()))}firstUpdated(){this.enqueueConversationScrollbarMeasure(),this.syncComposerHeight(),requestAnimationFrame(()=>this.syncComposerHeight()),this.bootstrapConsultantAgent()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null),this.selectedFiles.forEach(t=>{t.previewUrl&&URL.revokeObjectURL(t.previewUrl)}),this.teardownVoiceRecording(),this.teardownRioClient(),this.loadingGuard.clear()}getConsultantFlowState(){return{showSuggestions:this.showSuggestions,consultantAgentVisible:this.consultantAgentVisible,activeConsultantFollowUpId:this.activeConsultantFollowUpId,activeConsultantBranchId:this.activeConsultantBranchId,activeConsultantPromptId:this.activeConsultantPromptId,consultantAgentStage:this.consultantAgentStage,consultantOptionsSuppressed:this.consultantOptionsSuppressed,pendingConsultantFollowUpId:this.pendingConsultantFollowUpId,lastConsultantPromptId:this.lastConsultantPromptId,lastConsultantFollowUpId:this.lastConsultantFollowUpId,lastConsultantFollowUpPayload:this.lastConsultantFollowUpPayload}}applyConsultantFlowState(t){this.showSuggestions=t.showSuggestions,this.consultantAgentVisible=t.consultantAgentVisible,this.activeConsultantFollowUpId=t.activeConsultantFollowUpId,this.activeConsultantBranchId=t.activeConsultantBranchId,this.activeConsultantPromptId=t.activeConsultantPromptId,this.consultantAgentStage=t.consultantAgentStage,this.consultantOptionsSuppressed=t.consultantOptionsSuppressed,this.pendingConsultantFollowUpId=t.pendingConsultantFollowUpId,this.lastConsultantPromptId=t.lastConsultantPromptId,this.lastConsultantFollowUpId=t.lastConsultantFollowUpId,this.lastConsultantFollowUpPayload=t.lastConsultantFollowUpPayload}async bootstrapConsultantAgent(){try{this.consultantAgentOptions=await this.consultantOptionsGateway.loadOptions(this.consultantApiBaseUrl)}catch(t){X.error("[RioAssist][consultant] erro ao carregar opções do agente consultor",t),this.consultantAgentOptions=[]}}get filteredConversations(){const t=this.conversationSearch.trim().toLowerCase();return t?this.conversations.filter(n=>n.title.toLowerCase().includes(t)):this.conversations}get hasActiveConversation(){return this.messages.length>0}get hasVoiceAttachment(){return!!this.voiceAttachmentId}get isAttachmentLimitReached(){return this.selectedFiles.length>=un}get isVoiceButtonDisabled(){return this.isLoading||this.isRecording||this.hasVoiceAttachment||this.isAttachmentLimitReached}get isFilePickerDisabled(){return this.isLoading||this.isRecording||this.isAttachmentLimitReached}get isTextInputDisabled(){return this.autoStartConsultantFlow||this.isLoading||this.isRecording||this.hasVoiceAttachment}get filePickerAccept(){return Object.values(ku).flat().map(t=>`.${t}`).join(",")}handleFloatingButtonClick(t){if(this.suppressFloatingButtonClick){t.preventDefault();return}const n=ed(this.getPanelVisibilityState());this.applyPanelVisibilityState(n),n.emittedEvent&&this.dispatchPanelToggleEvent(n.emittedEvent),this.autoStartConsultantFlow&&n.willOpenMiniPanel&&!this.hasActiveConversation&&this.handleConsultantAgentOpen()}handleFloatingButtonPointerDown(t){const n=t.currentTarget;n.setPointerCapture(t.pointerId),this.floatingButtonDragState={pointerId:t.pointerId,startY:t.clientY,startOffset:this.floatingButtonOffset,buttonHeight:n.getBoundingClientRect().height},this.floatingButtonDragged=!1}handleFloatingButtonPointerMove(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const n=window.innerHeight||this.getBoundingClientRect().height||0,u=K0({dragState:this.floatingButtonDragState,pointerY:t.clientY,viewportHeight:n});this.floatingButtonOffset=u.offset,this.floatingButtonDragged=this.floatingButtonDragged||u.dragged,t.preventDefault()}handleFloatingButtonPointerUp(t){this.finishFloatingButtonDrag(t)}handleFloatingButtonPointerCancel(t){this.finishFloatingButtonDrag(t)}finishFloatingButtonDrag(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const n=t.currentTarget;n&&n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),$0(this.floatingButtonDragged).shouldSuppressClick&&(this.suppressFloatingButtonClick=!0,window.setTimeout(()=>{this.suppressFloatingButtonClick=!1},0)),this.floatingButtonDragState=null,this.floatingButtonDragged=!1}togglePanel(){const t=Ni(this.getPanelVisibilityState());this.applyPanelVisibilityState(t),t.emittedEvent&&this.dispatchPanelToggleEvent(t.emittedEvent)}closePanel(){const t=Hi(this.getPanelVisibilityState());this.applyPanelVisibilityState(t),t.emittedEvent&&this.dispatchPanelToggleEvent(t.emittedEvent)}openConversationsPanel(){const t=td(this.getPanelVisibilityState());this.applyPanelVisibilityState(t),t.shouldRequestHistory&&this.requestConversationHistory()}closeConversationsPanel(){this.applyPanelVisibilityState(zi(this.getPanelVisibilityState()))}toggleConversationsPanel(){const t=nd(this.getPanelVisibilityState());this.applyPanelVisibilityState(t),t.shouldRequestHistory&&this.requestConversationHistory()}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}toggleQuickResponse(){this.quickResponse=!this.quickResponse}handleConsultantAgentOpen(){bs(this.getConsultantControllerHost(),ji)}handleConsultantAgentOption(t){ms(this.getConsultantControllerHost(),t)}handleConsultantChooseAnotherSubject(){xs(this.getConsultantControllerHost())}async handleConsultantFollowUpQuestion(t){await Cs(this.getConsultantControllerHost(),t)}handleConversationSelect(t){return jr(this.getConversationControllerHost(),t)}handleConversationSearch(t){this.conversationSearch=Vr(t)}handleConversationMenuToggle(t,n){qr(this.getConversationControllerHost(),t,n,this.renderRoot)}handleConversationsPanelPointer(t){Gr(this.getConversationControllerHost(),t)}handleConversationAction(t,n){Yr(this.getConversationControllerHost(),t,n)}handleHomeNavigation(){const t={url:this.homeUrl||null};this.dispatchEvent(new CustomEvent("rioassist:home",{detail:t,bubbles:!0,composed:!0,cancelable:!0}))&&this.homeUrl&&window.location.assign(this.homeUrl)}applyConversationRename(t,n){if(!t||!n)return;const u=Ur({conversations:this.conversations,currentConversationId:this.currentConversationId,conversationId:t,newTitle:n});u.changed&&(this.conversations=u.conversations,this.activeConversationTitle=u.activeConversationTitle,this.activeConversationUpdatedAt=u.activeConversationUpdatedAt)}applyConversationDeletion(t){if(!t)return;const n=Pr({conversations:this.conversations,currentConversationId:this.currentConversationId,conversationId:t,messages:this.messages});n.removed&&(this.conversations=n.conversations,this.currentConversationId=n.currentConversationId,this.activeConversationTitle=n.activeConversationTitle,this.activeConversationUpdatedAt=n.activeConversationUpdatedAt,this.messages=n.messages)}restoreConversationSnapshot(t,n){this.conversations=vu({conversations:this.conversations,snapshot:t,index:n})}async confirmDeleteConversation(){await Xr(this.getConversationControllerHost())}cancelDeleteConversation(){Wr(this.getConversationControllerHost())}handleRenameDraft(t){Jr(this.getConversationControllerHost(),t)}async confirmRenameConversation(){await Zr(this.getConversationControllerHost())}cancelRenameConversation(){Kr(this.getConversationControllerHost())}cancelConversationActionError(){$r(this.getConversationControllerHost())}async retryConversationAction(){await es(this.getConversationControllerHost())}handleConversationSystemAction(t){return us(this.getConversationControllerHost(),t)}handleConversationActionError(t){return is(this.getConversationControllerHost(),t)}handleHeaderActionClick(t,n){const u={index:n,id:t.id??null,ariaLabel:t.ariaLabel??null,iconUrl:t.iconUrl};this.dispatchEvent(new CustomEvent("rioassist:header-action",{detail:u,bubbles:!0,composed:!0,cancelable:!0}))&&typeof t.onClick=="function"&&t.onClick()}handleCloseAction(){const t=ud(this.getPanelVisibilityState());this.applyPanelVisibilityState(t.nextState),t.nextState.emittedEvent&&this.dispatchPanelToggleEvent(t.nextState.emittedEvent)}enterFullscreen(){const t=id(this.getPanelVisibilityState());this.applyPanelVisibilityState(t),t.shouldRequestHistory&&this.requestConversationHistory()}exitFullscreen(t){this.applyPanelVisibilityState(Un(this.getPanelVisibilityState(),t))}handleCreateConversation(){if(this.hasActiveConversation){if(this.autoStartConsultantFlow){this.startNewConversation(),this.handleConsultantAgentOpen();return}this.applyPanelVisibilityState(od(this.getPanelVisibilityState()))}}confirmCreateConversation(){if(!this.hasActiveConversation){this.applyPanelVisibilityState(Pn(this.getPanelVisibilityState()));return}this.applyPanelVisibilityState(Pn(this.getPanelVisibilityState())),this.startNewConversation()}cancelCreateConversation(){this.applyPanelVisibilityState(Pn(this.getPanelVisibilityState()))}startNewConversation(){if(!this.hasActiveConversation)return;this.loadingGuard.clear();const t=rd();this.isLoading=t.isLoading,this.messages=t.messages,this.message=t.message,this.errorMessage=t.errorMessage,this.showConversations=t.showConversations,this.teardownRioClient(),this.currentConversationId=t.currentConversationId,this.activeConversationTitle=t.activeConversationTitle,this.activeConversationUpdatedAt=t.activeConversationUpdatedAt,this.showNewConversationShortcut=t.showNewConversationShortcut,this.applyConsultantFlowState(ls()),this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0}))}handleConversationListScroll(t){const n=t.currentTarget;n&&this.syncConversationScrollbar(n)}handleConversationScrollbarPointerDown(t){const n=t.currentTarget,u=this.renderRoot.querySelector(".conversation-list--sidebar");if(!n||!u)return;const i=n.getBoundingClientRect(),o=W0({pointerY:t.clientY,trackTop:i.top,trackHeight:i.height,scrollbarHeightPercent:this.conversationScrollbar.height,scrollHeight:u.scrollHeight,clientHeight:u.clientHeight,scrollTop:u.scrollTop});o.nextScrollTop!==null&&(u.scrollTop=o.nextScrollTop,this.syncConversationScrollbar(u)),n.setPointerCapture(t.pointerId),this.conversationScrollbarDraggingId=t.pointerId,this.conversationScrollbarDragState={metrics:o.metrics,list:u},t.preventDefault()}handleConversationScrollbarPointerMove(t){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==t.pointerId||!this.conversationScrollbarDragState)return;const{metrics:n,list:u}=this.conversationScrollbarDragState,i=J0({metrics:n,pointerY:t.clientY,scrollHeight:u.scrollHeight,clientHeight:u.clientHeight});i!==null&&(u.scrollTop=i,this.syncConversationScrollbar(u)),t.preventDefault()}handleConversationScrollbarPointerUp(t){if(this.conversationScrollbarDraggingId!==t.pointerId)return;const n=t.currentTarget;n==null||n.releasePointerCapture(t.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.syncConversationScrollbar()}))}syncConversationScrollbar(t){const n=t??this.renderRoot.querySelector(".conversation-list--sidebar");if(!n){this.conversationScrollbar.visible&&(this.conversationScrollbar=Mn());return}this.conversationScrollbar=Y0({scrollHeight:n.scrollHeight,clientHeight:n.clientHeight,scrollTop:n.scrollTop})}getPanelVisibilityState(){return{open:this.open,isFullscreen:this.isFullscreen,showConversations:this.showConversations,conversationMenuId:this.conversationMenuId,showNewConversationShortcut:this.showNewConversationShortcut,newConversationConfirmOpen:this.newConversationConfirmOpen}}getConversationControllerHost(){return this}getConsultantControllerHost(){return this}getMediaControllerHost(){return this}applyPanelVisibilityState(t){typeof t.open=="boolean"&&(this.open=t.open),typeof t.isFullscreen=="boolean"&&(this.isFullscreen=t.isFullscreen),typeof t.showConversations=="boolean"&&(this.showConversations=t.showConversations),"conversationMenuId"in t&&(this.conversationMenuId=t.conversationMenuId??null),typeof t.showNewConversationShortcut=="boolean"&&(this.showNewConversationShortcut=t.showNewConversationShortcut),typeof t.newConversationConfirmOpen=="boolean"&&(this.newConversationConfirmOpen=t.newConversationConfirmOpen)}dispatchPanelToggleEvent(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}async onSuggestionClick(t){await this.processMessage(t)}teardownVoiceRecording(){js(this.getMediaControllerHost())}addVoiceAttachment(t,n){Ru(this.getMediaControllerHost(),t,n)}async handleVoiceButtonClick(){await Vs(this.getMediaControllerHost())}pauseVoiceRecording(){qs(this.getMediaControllerHost())}resumeVoiceRecording(){Du(this.getMediaControllerHost())}async handleVoiceConfirmClick(){await Gs(this.getMediaControllerHost())}async discardVoiceRecording(){await _u(this.getMediaControllerHost())}handleVoiceDialogConfirm(){if(this.voiceCancelDialogMode==="cancel"){this.discardVoiceRecording();return}Ys(this.getMediaControllerHost())}handleVoiceDialogContinue(){Xs(this.getMediaControllerHost())}handleVoiceAttachmentRemove(t){Fu(this.getMediaControllerHost(),t)}handleFilePickerClick(){Ws(this.getMediaControllerHost())}handleFileInputChange(t){Js(this.getMediaControllerHost(),t)}handleAttachmentRemove(t){Zs(this.getMediaControllerHost(),t)}dispatchMessageAction(t,n){this.dispatchEvent(new CustomEvent(`rioassist:message-${t}`,{detail:_0(n,this.currentConversationId),bubbles:!0,composed:!0}))}setCopiedMessage(t){this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null);const n=F0(t);this.copiedMessageId=n.copiedMessageId,this.copiedMessageTimer=window.setTimeout(()=>{this.copiedMessageId=T0().copiedMessageId,this.copiedMessageTimer=null},n.timeoutMs)}async handleCopyMessage(t){var u;const n=t.text.trim();if(n)try{if((u=navigator.clipboard)!=null&&u.writeText)await navigator.clipboard.writeText(n);else{const i=document.createElement("textarea");i.value=n,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}this.setCopiedMessage(t.id),this.dispatchMessageAction("copy",t)}catch(i){X.error("[RioAssist] falha ao copiar mensagem",i)}}handleUpdateResponse(t){this.isLoading||!t.responseTo||(this.messages=M0(this.messages,t.id),this.processMessage(t.responseTo.requestText,{suppressUserMessage:!0,responseToMessageId:t.responseTo.messageId,forcePayload:{contentToSend:t.responseTo.requestToSend,contentToDisplay:t.responseTo.requestText,quickResponse:t.responseTo.quickResponse},consultantContext:t.responseTo.consultantContext??null,isConsultantAgent:t.responseTo.isConsultantAgent??!1}),this.dispatchMessageAction("update",t))}handleToggleReaction(t,n){this.messageReactions=B0(this.messageReactions,t,n.id),this.dispatchMessageAction(t,n)}handleMessageAction(t,n){this.dispatchMessageAction(t,n)}handleComposerKeydown(t){t.key!=="Enter"||t.shiftKey||t.isComposing||(t.preventDefault(),this.submitCurrentMessage())}handleComposerInput(t){const n=t.target;n&&(this.message=n.value,this.resizeComposer(n))}async handleSubmit(t){t.preventDefault(),await this.submitCurrentMessage()}async submitCurrentMessage(){this.isRecording||(this.applyConsultantFlowState(As(this.getConsultantFlowState())),await this.processMessage(this.message,{attachments:this.selectedFiles}))}resizeComposer(t){t.style.height="auto";const n=Math.min(t.scrollHeight,Qi);t.style.height=`${n}px`,t.style.overflowY=t.scrollHeight>Qi?"auto":"hidden"}syncComposerHeight(){const t=Array.from(this.renderRoot.querySelectorAll(".composer-input"));t.length!==0&&t.forEach(n=>this.resizeComposer(n))}createMessage(t,n,u,i){return this.createChatMessage({role:t,text:n,consultantFollowUp:u,request:i==null?void 0:i.request,responseTo:i==null?void 0:i.responseTo,hidden:i==null?void 0:i.hidden})}async processMessage(t,n=null){const u=S0({rawValue:t,isLoading:this.isLoading,quickResponse:this.quickResponse,hasMessages:this.messages.length>0,messages:this.messages,apiBaseUrl:this.apiBaseUrl,hasToken:!!this.rioToken.trim(),tokenPreview:this.getTokenPreview(this.rioToken),options:n,createMessage:o=>this.createChatMessage(o)});if(!u)return;u.resetConversationMeta&&!this.currentConversationId&&(this.currentConversationId=null,this.activeConversationTitle=null,this.activeConversationUpdatedAt=null),this.dispatchEvent(new CustomEvent("rioassist:send",{detail:u.sendEventDetail,bubbles:!0,composed:!0}));const i=u.uiState;this.messages=i.messages,this.pendingResponseTo=i.pendingResponseTo,this.showNewConversationShortcut=i.showNewConversationShortcut,this.refreshConversationsAfterResponse=i.refreshConversationsAfterResponse,this.message=i.message,this.errorMessage=i.errorMessage,this.isLoading=i.isLoading,this.loadingGuard.start();try{if(await this.ensureRioClient().sendMessage(u.prepared.contentToSend,this.currentConversationId,u.websocketExtraPayload),u.prepared.attachments.length){const r=R0({selectedFiles:this.selectedFiles,sentAttachments:u.prepared.attachments,voiceAttachmentId:this.voiceAttachmentId});r.shouldRevokePreviewUrls.forEach(s=>URL.revokeObjectURL(s)),this.selectedFiles=r.selectedFiles,this.attachmentError=r.attachmentError,this.voiceAttachmentId=r.voiceAttachmentId,typeof r.voiceTranscript=="string"&&(this.voiceTranscript=r.voiceTranscript)}}catch(o){const r=D0(o);this.pendingResponseTo=r.pendingResponseTo,this.loadingGuard.clear(),this.isLoading=r.isLoading,this.errorMessage=r.errorMessage}}ensureRioClient(){return this.rioClient=this.rioSession.ensureConnection({token:this.rioToken,websocketUrl:this.wsBaseUrl,onMessage:t=>{this.handleIncomingMessage(t)}}),this.rioClient}async handleIncomingMessage(t){if(this.isHistoryPayload(t)){this.logHistoryPayload(t),this.handleHistoryPayload(t.data);return}if(this.handleConversationSystemAction(t)||this.handleConversationActionError(t)||Qr(t.action))return;const n=G0({message:t,conversations:this.conversations,pendingResponseTo:this.pendingResponseTo,consultantState:this.getConsultantFlowState(),consultantAgentOptions:this.consultantAgentOptions,nowIsoString:new Date().toISOString(),repairConversationId:u=>this.repairConversationId(u),createMessage:u=>this.createChatMessage(u),createConsultantMessage:(u,i,o,r)=>this.createMessage(u,i,o,r),createId:u=>this.randomId(u)});if(this.conversations=n.conversationSync.conversations,this.currentConversationId=n.incomingConversationId??this.currentConversationId,this.activeConversationTitle=n.conversationMetaState.activeConversationTitle,this.activeConversationUpdatedAt=n.conversationMetaState.activeConversationUpdatedAt,n.conversationSync.isNewConversation&&n.incomingConversationId&&(this.refreshConversationsAfterResponse=!1,X.info("[RioAssist][ws] nova conversa detectada, atualizando lista",{conversationId:n.incomingConversationId}),await this.requestConversationHistory()),X.info("[RioAssist][ws] resposta de mensagem recebida",{action:t.action??"message",text:t.text,raw:t.raw,data:t.data}),n.shouldKeepLoading){X.info("[RioAssist][ws] processando mensagem - aguardando resposta final");return}n.assistantMessage&&(this.messages=[...this.messages,n.assistantMessage]),this.pendingResponseTo=null,this.loadingGuard.clear(),this.isLoading=!1,n.consultantEffects&&(n.consultantEffects.messages.length>0&&(this.messages=[...this.messages,...n.consultantEffects.messages]),this.applyConsultantFlowState(n.consultantEffects.state)),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1,await this.requestConversationHistory())}teardownRioClient(){this.rioSession.teardown(),this.rioClient=null}async requestConversationHistory(t){try{const n=this.ensureRioClient(),u=50;X.info("[RioAssist][history] solicitando historico de conversas",{conversationId:t??null,limit:u}),this.conversationHistoryError="",this.conversationHistoryLoading=!0,await n.requestHistory({conversationId:t,limit:u})}catch(n){X.error("[RioAssist][history] erro ao solicitar historico",n),this.conversationHistoryError=n instanceof Error&&n.message?n.message:"Nao foi possivel carregar as conversas.",this.conversationHistoryLoading=!1}}handleHistoryPayload(t){const n=Li(t),u=Oi(t,i=>this.repairConversationId(i));if(u!=null){this.applyMessageHistory(n,u);return}if(H0(n)){this.applyMessageHistory(n);return}this.applyConversationHistoryFromEntries(n),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1)}isHistoryPayload(t){return N0(t)}logHistoryPayload(t){const n="[RioAssist][history] payload recebido do websocket";if(t.data!==null&&t.data!==void 0){X.info(n,t.data);return}X.info(n,t.raw)}applyConversationHistoryFromEntries(t){if(t.length===0){X.info("[RioAssist][history] payload sem itens para montar lista de conversas");const i=en({conversations:[],currentConversationId:this.currentConversationId});this.conversations=i.conversations,this.conversationHistoryLoading=i.conversationHistoryLoading,this.conversationHistoryError=i.conversationHistoryError,this.activeConversationTitle=i.activeConversationTitle,this.activeConversationUpdatedAt=i.activeConversationUpdatedAt;return}t.forEach(i=>{if(!i||typeof i!="object")return;const o=i.conversationId??i.conversationUUID??i.conversationUuid??i.uuid??i.id;o&&X.info("[RioAssist][history] conversa recebida do backend",{rawId:o,normalizedId:this.repairConversationId(String(o)),entry:i})});const n=z0(t,i=>this.repairConversationId(i)),u=en({conversations:n,currentConversationId:this.currentConversationId});this.conversations=u.conversations,this.conversationHistoryLoading=u.conversationHistoryLoading,this.conversationHistoryError=u.conversationHistoryError,this.activeConversationTitle=u.activeConversationTitle,this.activeConversationUpdatedAt=u.activeConversationUpdatedAt,X.info("[RioAssist][history] conversas normalizadas",n)}applyMessageHistory(t,n){if(t.length===0){X.info("[RioAssist][history] lista de mensagens vazia",{conversationId:n});const o=wu({messages:[],currentConversationId:n});this.messages=o.messages,this.showConversations=o.showConversations,this.loadingGuard.clear(),this.isLoading=o.isLoading,this.conversationHistoryLoading=o.conversationHistoryLoading,this.showNewConversationShortcut=o.showNewConversationShortcut,this.refreshConversationsAfterResponse=o.refreshConversationsAfterResponse,typeof o.currentConversationId=="string"&&(this.currentConversationId=o.currentConversationId);return}const u=Q0(t,o=>this.renderMarkdown(o)),i=wu({messages:u,currentConversationId:n});this.messages=i.messages,this.showConversations=i.showConversations,this.loadingGuard.clear(),this.isLoading=i.isLoading,this.showNewConversationShortcut=i.showNewConversationShortcut,this.conversationHistoryLoading=i.conversationHistoryLoading,this.refreshConversationsAfterResponse=i.refreshConversationsAfterResponse,typeof i.currentConversationId=="string"&&(this.currentConversationId=i.currentConversationId),X.info("[RioAssist][history] mensagens carregadas",{conversationId:n??null,total:u.length})}scrollConversationToBottom(){Array.from(this.renderRoot.querySelectorAll(".panel-content")).forEach(n=>{requestAnimationFrame(()=>{n.scrollTop=n.scrollHeight})})}renderMarkdown(t){return this.markdownRenderer.render(t)}render(){return Ir(this)}};Mt.styles=jo,Mt.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},floatingButtonIconUrl:{type:String,attribute:"data-floating-button-icon-url"},floatingButtonLabelIconUrl:{type:String,attribute:"data-floating-button-label-icon-url"},floatingButtonBackgroundIconUrl:{type:String,attribute:"data-floating-button-background-icon-url"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},wsBaseUrl:{type:String,attribute:"data-ws-base-url"},consultantApiBaseUrl:{type:String,attribute:"data-consultant-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},selectedFiles:{attribute:!1,state:!0},attachmentError:{type:String,state:!0},isRecording:{type:Boolean,state:!0},isRecordingPaused:{type:Boolean,state:!0},voiceAttachmentId:{type:String,state:!0},voiceTranscript:{type:String,state:!0},voiceCancelDialogOpen:{type:Boolean,state:!0},voiceCancelDialogMode:{type:String,state:!0},speechRecognitionAvailable:{type:Boolean,state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0},conversations:{state:!0},conversationHistoryLoading:{type:Boolean,state:!0},activeConversationTitle:{state:!0},activeConversationUpdatedAt:{state:!0},conversationHistoryError:{type:String,state:!0},deleteConversationTarget:{attribute:!1},renameConversationTarget:{attribute:!1},quickResponse:{type:Boolean,state:!0},newConversationConfirmOpen:{type:Boolean,state:!0},conversationActionError:{attribute:!1},headerActions:{attribute:!1},homeUrl:{type:String,attribute:"data-home-url"},floatingButtonOffset:{type:Number,attribute:"data-floating-offset"},consultantAgentVisible:{type:Boolean,state:!0},consultantAgentIntro:{type:String,state:!0},consultantAgentButtonText:{type:String,attribute:"data-consultant-agent-button-text"},showConsultantAgentButton:{attribute:"data-show-consultant-agent-button",converter:{fromAttribute:t=>t===null||t===""||t==="true",toAttribute:t=>t?"true":"false"}},consultantAgentInitialMessage:{type:String,attribute:"data-consultant-agent-initial-message"},autoStartConsultantFlow:{attribute:"data-auto-start-consultant-flow",converter:{fromAttribute:t=>t===""||t==="true",toAttribute:t=>t?"true":"false"}},consultantAgentOptions:{attribute:!1,state:!0},showSuggestions:{type:Boolean,state:!0},activeConsultantFollowUpId:{type:String,state:!0},activeConsultantBranchId:{type:String,state:!0},activeConsultantPromptId:{type:String,state:!0},consultantAgentStage:{type:String,state:!0},consultantOptionsSuppressed:{type:Boolean,state:!0},pendingConsultantFollowUpId:{type:String,state:!0},lastConsultantPromptId:{type:String,state:!0},lastConsultantFollowUpId:{type:String,state:!0},lastConsultantFollowUpPayload:{attribute:!1},copiedMessageId:{type:String,state:!0},messageReactions:{attribute:!1}};let Ln=Mt;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",Ln);const Vi={title:"UptAIme Assist",buttonLabel:"Uptaime Assist",floatingButtonIconUrl:"",floatingButtonLabelIconUrl:"",floatingButtonBackgroundIconUrl:"",placeholder:"Pergunte alguma coisa",suggestions:["Resumo da Frota","Frota Disponível","Chamados Abertos","Parados + Causas","Aguardando Peças","Principais Gargalos","Tempo por Concessionária","Tempo de Ciclo","Preventiva x Corretiva"],accentColor:"#B23672",apiBaseUrl:"",wsBaseUrl:"",consultantApiBaseUrl:"",rioToken:"",floatingOffset:32,consultantAgentButtonText:"Consulte o UptAIme Agent",showConsultantAgentButton:!0,consultantAgentInitialMessage:"Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",autoStartConsultantFlow:!1},qi="rio-assist-widget";function ad(e={}){const{target:t=document.body,...n}=e;let u=document.querySelector(qi);u||(u=document.createElement(qi),t.appendChild(u));const i=96,o=64,r=typeof window<"u"&&(window.innerHeight||document.documentElement.clientHeight)||0,s=n.floatingOffset??(r?Math.max(12,r-i-o):Vi.floatingOffset),a={...Vi,...n,floatingOffset:s};Object.entries(a).forEach(([c,d])=>{if(d===void 0)return;const f=`data-${c.replace(/[A-Z]/g,A=>`-${A.toLowerCase()}`)}`;if(typeof d=="boolean"){d?u==null||u.setAttribute(f,"true"):u==null||u.removeAttribute(f);return}u==null||u.setAttribute(f,Array.isArray(d)?d.join("|"):String(d))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:ad},window.dispatchEvent(new Event("rio-assist-ready")))})();
