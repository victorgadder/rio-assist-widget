(function(){"use strict";var xi;var p=typeof document<"u"?document.currentScript:null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Ot=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),Ou=new WeakMap;let Nu=class{constructor(t,u,n){if(this._$cssResult$=!0,n!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=u}get styleSheet(){let t=this.o;const u=this.t;if(Ot&&t===void 0){const n=u!==void 0&&u.length===1;n&&(t=Ou.get(u)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ou.set(u,t))}return t}toString(){return this.cssText}};const qi=e=>new Nu(typeof e=="string"?e:e+"",void 0,Nt),je=(e,...t)=>{const u=e.length===1?e[0]:t.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new Nu(u,e,Nt)},Gi=(e,t)=>{if(Ot)e.adoptedStyleSheets=t.map(u=>u instanceof CSSStyleSheet?u:u.styleSheet);else for(const u of t){const n=document.createElement("style"),i=pt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=u.cssText,e.appendChild(n)}},Qu=Ot?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let u="";for(const n of t.cssRules)u+=n.cssText;return qi(u)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yi,defineProperty:Xi,getOwnPropertyDescriptor:Vi,getOwnPropertyNames:Ji,getOwnPropertySymbols:Wi,getPrototypeOf:Zi}=Object,he=globalThis,zu=he.trustedTypes,Ki=zu?zu.emptyScript:"",Qt=he.reactiveElementPolyfillSupport,qe=(e,t)=>e,zt={toAttribute(e,t){switch(t){case Boolean:e=e?Ki:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let u=e;switch(t){case Boolean:u=e!==null;break;case Number:u=e===null?null:Number(e);break;case Object:case Array:try{u=JSON.parse(e)}catch{u=null}}return u}},Hu=(e,t)=>!Yi(e,t),ju={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:Hu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);let Re=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,u=ju){if(u.state&&(u.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((u=Object.create(u)).wrapped=!0),this.elementProperties.set(t,u),!u.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,u);i!==void 0&&Xi(this.prototype,t,i)}}static getPropertyDescriptor(t,u,n){const{get:i,set:r}=Vi(this.prototype,t)??{get(){return this[u]},set(o){this[u]=o}};return{get:i,set(o){const s=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ju}static _$Ei(){if(this.hasOwnProperty(qe("elementProperties")))return;const t=Zi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qe("properties"))){const u=this.properties,n=[...Ji(u),...Wi(u)];for(const i of n)this.createProperty(i,u[i])}const t=this[Symbol.metadata];if(t!==null){const u=litPropertyMetadata.get(t);if(u!==void 0)for(const[n,i]of u)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[u,n]of this.elementProperties){const i=this._$Eu(u,n);i!==void 0&&this._$Eh.set(i,u)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const u=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)u.unshift(Qu(i))}else t!==void 0&&u.push(Qu(t));return u}static _$Eu(t,u){const n=u.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(u=>this.enableUpdating=u),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(u=>u(this))}addController(t){var u;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((u=t.hostConnected)==null||u.call(t))}removeController(t){var u;(u=this._$EO)==null||u.delete(t)}_$E_(){const t=new Map,u=this.constructor.elementProperties;for(const n of u.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gi(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(u=>{var n;return(n=u.hostConnected)==null?void 0:n.call(u)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(u=>{var n;return(n=u.hostDisconnected)==null?void 0:n.call(u)})}attributeChangedCallback(t,u,n){this._$AK(t,n)}_$ET(t,u){var r;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:zt).toAttribute(u,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,u){var r,o;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:zt;this._$Em=i;const c=a.fromAttribute(u,s.type);this[i]=c??((o=this._$Ej)==null?void 0:o.get(i))??c,this._$Em=null}}requestUpdate(t,u,n){var i;if(t!==void 0){const r=this.constructor,o=this[t];if(n??(n=r.getPropertyOptions(t)),!((n.hasChanged??Hu)(o,u)||n.useDefault&&n.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,u,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,u,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??u??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(u=void 0),this._$AL.set(t,u)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(u){Promise.reject(u)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const u=this._$AL;try{t=this.shouldUpdate(u),t?(this.willUpdate(u),(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(u)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(u)}willUpdate(t){}_$AE(t){var u;(u=this._$EO)==null||u.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(u=>this._$ET(u,this[u]))),this._$EM()}updated(t){}firstUpdated(t){}};Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[qe("elementProperties")]=new Map,Re[qe("finalized")]=new Map,Qt==null||Qt({ReactiveElement:Re}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,gt=Ge.trustedTypes,qu=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gu="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Yu="?"+pe,$i=`<${Yu}>`,ve=document,Ye=()=>ve.createComment(""),Xe=e=>e===null||typeof e!="object"&&typeof e!="function",Ht=Array.isArray,er=e=>Ht(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",jt=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xu=/-->/g,Vu=/>/g,Ee=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ju=/'/g,Wu=/"/g,Zu=/^(?:script|style|textarea|title)$/i,tr=e=>(t,...u)=>({_$litType$:e,strings:t,values:u}),C=tr(1),le=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ku=new WeakMap,we=ve.createTreeWalker(ve,129);function $u(e,t){if(!Ht(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return qu!==void 0?qu.createHTML(t):t}const ur=(e,t)=>{const u=e.length-1,n=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=Ve;for(let s=0;s<u;s++){const a=e[s];let c,d,f=-1,g=0;for(;g<a.length&&(o.lastIndex=g,d=o.exec(a),d!==null);)g=o.lastIndex,o===Ve?d[1]==="!--"?o=Xu:d[1]!==void 0?o=Vu:d[2]!==void 0?(Zu.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=Ee):d[3]!==void 0&&(o=Ee):o===Ee?d[0]===">"?(o=i??Ve,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Ee:d[3]==='"'?Wu:Ju):o===Wu||o===Ju?o=Ee:o===Xu||o===Vu?o=Ve:(o=Ee,i=void 0);const h=o===Ee&&e[s+1].startsWith("/>")?" ":"";r+=o===Ve?a+$i:f>=0?(n.push(c),a.slice(0,f)+Gu+a.slice(f)+pe+h):a+pe+(f===-2?s:h)}return[$u(e,r+(e[u]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Je{constructor({strings:t,_$litType$:u},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[c,d]=ur(t,u);if(this.el=Je.createElement(c,n),we.currentNode=this.el.content,u===2||u===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=we.nextNode())!==null&&a.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Gu)){const g=d[o++],h=i.getAttribute(f).split(pe),A=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:A[2],strings:h,ctor:A[1]==="."?ir:A[1]==="?"?rr:A[1]==="@"?or:bt}),i.removeAttribute(f)}else f.startsWith(pe)&&(a.push({type:6,index:r}),i.removeAttribute(f));if(Zu.test(i.tagName)){const f=i.textContent.split(pe),g=f.length-1;if(g>0){i.textContent=gt?gt.emptyScript:"";for(let h=0;h<g;h++)i.append(f[h],Ye()),we.nextNode(),a.push({type:2,index:++r});i.append(f[g],Ye())}}}else if(i.nodeType===8)if(i.data===Yu)a.push({type:2,index:r});else{let f=-1;for(;(f=i.data.indexOf(pe,f+1))!==-1;)a.push({type:7,index:r}),f+=pe.length-1}r++}}static createElement(t,u){const n=ve.createElement("template");return n.innerHTML=t,n}}function De(e,t,u=e,n){var o,s;if(t===le)return t;let i=n!==void 0?(o=u._$Co)==null?void 0:o[n]:u._$Cl;const r=Xe(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,u,n)),n!==void 0?(u._$Co??(u._$Co=[]))[n]=i:u._$Cl=i),i!==void 0&&(t=De(e,i._$AS(e,t.values),i,n)),t}class nr{constructor(t,u){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=u}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:u},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??ve).importNode(u,!0);we.currentNode=i;let r=we.nextNode(),o=0,s=0,a=n[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new We(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new sr(r,this,t)),this._$AV.push(c),a=n[++s]}o!==(a==null?void 0:a.index)&&(r=we.nextNode(),o++)}return we.currentNode=ve,i}p(t){let u=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,u),u+=n.strings.length-2):n._$AI(t[u])),u++}}class We{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,u,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=u,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const u=this._$AM;return u!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=u.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,u=this){t=De(this,t,u),Xe(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==le&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):er(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&Xe(this._$AH)?this._$AA.nextSibling.data=t:this.T(ve.createTextNode(t)),this._$AH=t}$(t){var r;const{values:u,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Je.createElement($u(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(u);else{const o=new nr(i,this),s=o.u(this.options);o.p(u),this.T(s),this._$AH=o}}_$AC(t){let u=Ku.get(t.strings);return u===void 0&&Ku.set(t.strings,u=new Je(t)),u}k(t){Ht(this._$AH)||(this._$AH=[],this._$AR());const u=this._$AH;let n,i=0;for(const r of t)i===u.length?u.push(n=new We(this.O(Ye()),this.O(Ye()),this,this.options)):n=u[i],n._$AI(r),i++;i<u.length&&(this._$AR(n&&n._$AB.nextSibling,i),u.length=i)}_$AR(t=this._$AA.nextSibling,u){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,u);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var u;this._$AM===void 0&&(this._$Cv=t,(u=this._$AP)==null||u.call(this,t))}}class bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,u,n,i,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=u,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,u=this,n,i){const r=this.strings;let o=!1;if(r===void 0)t=De(this,t,u,0),o=!Xe(t)||t!==this._$AH&&t!==le,o&&(this._$AH=t);else{const s=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=De(this,s[n+a],u,a),c===le&&(c=this._$AH[a]),o||(o=!Xe(c)||c!==this._$AH[a]),c===_?t=_:t!==_&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ir extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}class rr extends bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}}class or extends bt{constructor(t,u,n,i,r){super(t,u,n,i,r),this.type=5}_$AI(t,u=this){if((t=De(this,t,u,0)??_)===le)return;const n=this._$AH,i=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var u;typeof this._$AH=="function"?this._$AH.call(((u=this.options)==null?void 0:u.host)??this.element,t):this._$AH.handleEvent(t)}}class sr{constructor(t,u,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=u,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){De(this,t)}}const qt=Ge.litHtmlPolyfillSupport;qt==null||qt(Je,We),(Ge.litHtmlVersions??(Ge.litHtmlVersions=[])).push("3.3.1");const ar=(e,t,u)=>{const n=(u==null?void 0:u.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const r=(u==null?void 0:u.renderBefore)??null;n._$litPart$=i=new We(t.insertBefore(Ye(),r),r,void 0,u??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=globalThis;let Ze=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var u;const t=super.createRenderRoot();return(u=this.renderOptions).renderBefore??(u.renderBefore=t.firstChild),t}update(t){const u=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ar(u,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return le}};Ze._$litElement$=!0,Ze.finalized=!0,(xi=ye.litElementHydrateSupport)==null||xi.call(ye,{LitElement:Ze});const Gt=ye.litElementPolyfillSupport;Gt==null||Gt({LitElement:Ze}),(ye.litElementVersions??(ye.litElementVersions=[])).push("4.2.1");const cr=je`
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
`,lr=je`
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
    border-radius: 80px;
    padding: 8px 8px 8px 16px;
    background: #fff;
    width: 100%;
    max-width: 520px;
    margin-bottom: 0;
    height: 56px;
    box-sizing: border-box;
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
`,dr=je`
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
`,fr=je`
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
`,Ar=[je`
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
`,cr,lr,dr,fr];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={ATTRIBUTE:1,CHILD:2},Xt=e=>(...t)=>({_$litDirective$:e,values:t});let Vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,u,n){this._$Ct=t,this._$AM=u,this._$Ci=n}_$AS(t,u){return this.update(t,u)}update(t,u){return this.render(...u)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=Xt(class extends Vt{constructor(e){var t;if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(t)}const u=e.element.classList;for(const r of this.st)r in t||(u.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(u.add(r),this.st.add(r)):(u.remove(r),this.st.delete(r)))}return le}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en="important",hr=" !"+en,tn=Xt(class extends Vt{constructor(e){var t;if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,u)=>{const n=e[u];return n==null?t:t+`${u=u.includes("-")?u:u.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:u}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?u.removeProperty(n):u[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(hr);n.includes("-")||r?u.setProperty(n,r?i.slice(0,-11):i,r?en:""):u[n]=i}}return le}}),pr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,gr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,br=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,mr=e=>{const t=e.floatingButtonIconUrl.trim()||pr,u=e.floatingButtonLabelIconUrl.trim()||gr,n=e.floatingButtonBackgroundIconUrl.trim()||br;return C`
  <button
    class="floating-button"
    style=${tn({background:e.accentColor,bottom:`${e.floatingButtonOffset}px`})}
    @click=${i=>e.handleFloatingButtonClick(i)}
    @pointerdown=${i=>e.handleFloatingButtonPointerDown(i)}
    @pointermove=${i=>e.handleFloatingButtonPointerMove(i)}
    @pointerup=${i=>e.handleFloatingButtonPointerUp(i)}
    @pointercancel=${i=>e.handleFloatingButtonPointerCancel(i)}
    aria-expanded=${e.open}
  >
    <img
      class="floating-button__box-bg"
      src=${n}
      alt=""
      aria-hidden="true"
    />
    <span class="floating-button__content">
      <img class="floating-button__icon" src=${t} alt="" aria-hidden="true" />
      <img
        class="floating-button__label-image"
        src=${u}
        alt=${e.buttonLabel}
      />
    </span>
  </button>
`};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jt extends Vt{constructor(t){if(super(t),this.it=_,t.type!==Yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_||t==null)return this._t=void 0,this.it=t;if(t===le)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const u=[t];return u.raw=u,this._t={_$litType$:this.constructor.resultType,strings:u,values:[]}}}Jt.directiveName="unsafeHTML",Jt.resultType=1;const xr=Xt(Jt),Cr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7dx/ThNBFAfw75vdVkJI7BHqCcAT0Cb8CH/RlagpxtiewHIDegLgBCwhUhMl638omFBugDdYb1D/8A+hnXEGrAFR2BFxH+R9EhJoh6T5drq7nfdmASGEEEKIW4nAzHqSlO4NRiuGqOT+1nqQPn881wVTbAJ0wY1g7KV9QS0DlM4/a1Kt0X62MBODGRYBdpKdMhDs25dTvmLocj2aboMRBQYMgiRDeM7y1vb7FhjJfQa+2t5tKEXrWcfbj3fvG8IHzajaAwO5z0Ab3guf8fYdLxX1cQ1M5B6gDWQCnpTCJJjIPcCLZ9zbhcMM9D6WaYMvYCL/GWj0ATwRmS6YyP8yhtSq13hQuhjNvgMTuQdoL4y7xtBa1vEGgyUwwuJCevHRVCtLiPaEs8Rp9jmsFhM6yW7DptSyB7nx4WME6mmjP4VUaD2Jqodght1qjLOe7NuFhf5EANP7ikLK5VuHEEIIIYQQQog7gdV34ZOuBD3WsGtEk3YRYcIV1N1Pvz/Y4NqdwCbAzTc7lUIYJpfUSLpAv1mP5lIwwiLArbcfahSo5OqRbkYOqpxCzH1B1bV1UEAr2UZTGQgzF+H/BwZFpaCVsa1jqNKxH3cwkX9nApF3kdwo8i7G3xQOhXXvMEipcTDBoqh0mzE4BuIzPGltvP/npuQfICGGJ6WKMZjIPcBRhKt+/TEU16NqCiZyDzCyJUsDk7HbgFIgkBbfX9WjmdiAotOAfs8Yc2DDq3KafQ6zxQRXUD+u2bRqw4trOzsPiVTsemgghBBCCCGEEEJcH9Mm86RUPC6W3e9HhaO0GUVsm8xZBfhj77Db/lo5/4yJbT24za2o7rAJsJN8tPVe07hsjA238XR+agOMsAjwdbK3Yqtz2bby9/vVOqM+mdwXVDeTvUrm8JwwkM6EswKjG/BCZelMOPsCSM3Dkw4CuWfC0N9s+VeE+2BCtvxfE4cZ6L2F1c5ANtteGZQ1jed1nSt9FrpggsGW/5MbinWzjrdlzjXpTLggbF5WVP9J6/ZiNO15k4qbxaQzoZqOIHj45/smuHBNs74wuwxmGN6A8XS7vz3Vlk8eUJRKV4IQQgghxD/3HTJ2+CG9OavnAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,vr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB7ZpBTgIxFIZfjbiVmzieQGatJnoEb+ANhBPoTVwY14w36BHwBromWPujY1zQoe20M32lX0JCeDMk30cZCoGoUCgUCoeLIMZUz8spndANfVFFQpySUu/64UZe143tc7ANUL2+PWjhe313umO80rM7mxDsAmxf9YlY4u7eg4WYy8uLRechxAgn+Ral6q6VcERM8JIHQjx2jdkEoAk9kav8D1X1spyZhnwCrAkXPEk+CHM4NgHkbf1Ba1WTVwRxZprwWQHUI4JSn6YRqwDAK4IyH5tcAFztt1f8DpwjbKgxjZIK8PdRp2/BIii10MeuTONkNkI7PuclBLeibuf9R8qr2XnX+UmsAINE1XMlyN/HOxl9BVjs8HxWgtU5YNQADttbhwh6x6g3TTbyYLQAHnt761fVhVECeH+xiRBh8AA95FuCRhg0QAD5lmARBgsQUL4lSIRB9gER5IMRfQVEkufxFkhdHkQLwEEeRAnARR4ED8BJHgQNwE0eBAvAUR4ECcBVHvQOwFke9ArAXR54B8hBHngFyEUeOAfISR44BchNHlgHyFEeWAXIVR7sDZCzPOgMkLs8MAY4BHlg/k3wmOaUuTwwBxA7/4DoS5LyYIhfhZOVB7EDJC0PYgZIXh7ECsBCHsQIwEYehA7ASh6EDMBOHoQKwFIeHBsnghraKLJiY/+fnEKhUCgU0uEbh7OOhX0VxTkAAAAASUVORK5CYII=",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Er=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB7ZvPTcMwFMY/h/QMG1A2yAbQI6IH2KCMwATABrABnaAHKnFMR8gGhAkoN1TaPBzKARANeXbiPGr/pFqV6jTpp/fns+UCgUAgEPAXhRZI7tMbKLWLRlHzbHh4gYaJ0QYKp3rcR6NQrofGBYjgOUEAeI73AlR2gWSS9nWZ7IP9rWqixz00Sw6ic3BZIs/OBvmmj6u7QIyR/jGXkEFfP0sKLjFd6/Fq08ehBsBzggDwHO8F+KsL3GFJM9gQYY6FfnVHl/eWD3s5nDxoc7QS4w1+R9FtdjLI6kw1XQ6PIJkC47pT2UUwO95sK8Wg7W/dqYZdgJ4gmCrv/xNDAdQz5MKq+tsYATlnsqkRkttbiV440826AGkBGA00Gx59m51MZ1R5wRsdfM3jZJrq96reJqtykQKKF2ZOIRcpoETbSwcRUPgeAbFgAZQLAV63Z4VlJICu0HIFWLrxAZBqhjg2uMRCAJF2mB2Z2xYBOZjY7AnKqwNMG1xiLgAJbIVKPYKJuQCRQAGcRoBElMsaINEOFy67gEQ77DQCJNrhyGEEfNphWSIs3PoADb/qtonJGsVSAH7fbZEcBthGgBw7TGbPYicA/f99AdujsrUE+DhtxiFGX1/DusTEBq9vZUNph6nGvB7z4crTYD3w6CQFVoJSwHCn2k6AHUFusOiiC0SeR4CoswJRFymwRkYULMxSwP4fI0Rj3QmaPhjNRvRWfSAQCASE8g7TeaJ3NUq3zgAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,wr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,yr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,kr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB7dyxTQNBEIbR8YnAInIJhISEhC4FKqIF04kd0wAZlOAIHwSGQzRgaYBf8r2XXH5fNrs7VQAAAAAA8OcW1XR9u76qmRqXtX/dbvfVcFEN3z9/+KyXmqnLQ22mz301DEWUAGEChAkQJkCYAGEChAkQJkCYAGEChLVmQctpGPX+Vo81U4uhdgUAAAAAJ2rdjLtZr1cfh3qomToea/f8tN1UQ2saOo61mubZdzVTw88wf1MNzgPCBAgTIEyAMAHCBAgTIEyAMAHCBAgTIMwz1YbfeKYKAAAA8I/MghqsLAuzsuwMCBAmQJgAYQKECRAmQJgAYQKECRAmQJiVZQ1WlgEAAAAAAKf4Apw6ME0JptRKAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,un=(e,t={})=>{const u=t.variant??"drawer",n=u==="sidebar",i=n||e.showConversations;return C`
    <div
      class=${M({"conversations-panel":!0,"conversations-panel--open":i,"conversations-panel--sidebar":n})}
      aria-hidden=${!i}
      @pointerdown=${r=>e.handleConversationsPanelPointer(r)}
    >
      <div
        class=${M({"conversations-panel__surface":!0,"conversations-panel__surface--sidebar":n})}
      >
        ${Ir(e,u)}
      </div>
    </div>
  `},Ir=(e,t)=>{const u=t==="sidebar",n=u?C`
        <div
          class=${M({"new-conversation-cta":!0,open:e.showNewConversationShortcut})}
        >
          <button
            type="button"
            class="new-conversation-cta__button"
            ?disabled=${!e.hasActiveConversation}
            aria-disabled=${!e.hasActiveConversation}
            @click=${()=>e.handleCreateConversation()}
          >
            <img src=${yr} alt="" aria-hidden="true" />
            <span>Iniciar nova conversa</span>
          </button>
        </div>
      `:null,i=C`
    <div
      class=${M({"conversation-list":!0,"conversation-list--sidebar":u})}
      @scroll=${u?r=>e.handleConversationListScroll(r):null}
    >
      ${e.filteredConversations.map(r=>{const o=e.conversationMenuId===r.id;return C`
            <div
              class="conversation-item"
              role="button"
              tabindex="0"
              title=${`Recuperar ${r.title}`}
              @click=${()=>e.handleConversationSelect(r.id)}
              @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),e.handleConversationSelect(r.id))}}
            >
              <div class="conversation-item__text">
                ${r.title}
              </div>
              <button
                class="conversation-menu-button"
                type="button"
                @click=${s=>e.handleConversationMenuToggle(s,r.id)}
              >
                <img src=${Cr} alt="" aria-hidden="true" />
              </button>
              ${o?C`
                    <div
                      class=${M({"conversation-menu":!0,"conversation-menu--above":e.conversationMenuPlacement==="above"})}
                      @click=${s=>s.stopPropagation()}
                    >
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("rename",r.id)}
                      >
                        <img src=${vr} alt="" aria-hidden="true" />
                        Renomear
                      </button>
                      <button
                        type="button"
                        @click=${()=>e.handleConversationAction("delete",r.id)}
                      >
                        <img src=${Er} alt="" aria-hidden="true" />
                        Excluir
                      </button>
                    </div>
                  `:null}
            </div>
          `})}
    </div>
  `;return C`
    ${n}

    ${u?C`
          <button class="recent-conversations-button" type="button" aria-label="Conversas recentes">
            <img src=${kr} alt="" aria-hidden="true" />
            <span>Conversas recentes</span>
          </button>
        `:null}

    <div class="conversation-search">
      <img class="search-icon" src=${wr} alt="" aria-hidden="true" />
      <input
        type="text"
        placeholder="Buscar nas conversas"
        .value=${e.conversationSearch}
        @input=${r=>e.handleConversationSearch(r)}
      />
    </div>

    <div
      class=${M({"conversation-list-wrapper":!0,"conversation-list-wrapper--sidebar":u})}
    >
      ${e.conversationHistoryLoading?C`<div class="conversation-loading">Carregando conversas...</div>`:null}
      ${e.conversationHistoryError?C`<div class="conversation-error">${e.conversationHistoryError}</div>`:null}
      ${i}
      ${u?C`
            <div
              class=${M({"conversation-scrollbar":!0,"conversation-scrollbar--visible":e.conversationScrollbar.visible})}
              @pointerdown=${r=>e.handleConversationScrollbarPointerDown(r)}
              @pointermove=${r=>e.handleConversationScrollbarPointerMove(r)}
              @pointerup=${r=>e.handleConversationScrollbarPointerUp(r)}
              @pointercancel=${r=>e.handleConversationScrollbarPointerUp(r)}
            >
              <span
                class="conversation-scrollbar__thumb"
                style=${tn({height:`${e.conversationScrollbar.height}%`,top:`${e.conversationScrollbar.top}%`})}
              ></span>
            </div>
          `:null}
    </div>
  `},Sr=e=>{const{consultantAgentVisible:t,consultantAgentIntro:u,consultantAgentOptions:n}=e,i=e.consultantAgentButtonText.trim()||"Consulte o UptAIme Agent";return C`
    <div class="consultant-agent">
      ${e.showConsultantAgentButton?C`
            <button
              class="consultant-agent__button"
              type="button"
              @click=${()=>e.handleConsultantAgentOpen()}
            >
              ${i}
            </button>
          `:null}

      ${t?C`
            <div class="consultant-agent__intro">${u}</div>
            <div class="consultant-agent__options">
              ${n.map(r=>C`
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
  `},Rr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB7dzBTcNQEEXRcQCJZUqgBLeQBpDoACqiBVNBliyjdJAOaMFLNiFENADSiDxFPkdyA75ejf+fKgAAAAAA+HdDNY3b3UMt13x42szVcFsN4/v55R+Hj1qu6fy8VMOqiBIgTIAwAcIECBMgTIAwAcIECBMgTICw1iyoPmuum9NbLde+AAAAAOCPWifjxu1uXXfDay3V12l/eNxM1dCbht7Xuo71XEu1+vl+p2rwPyBMgDABwgQIEyBMgDABwgQIEyBMgDABwlxT7WlfUwUAAAC4ILOgHivLwqaysuy6CRAmQJgAYQKECRAmQJgAYQKECRAmQJiVZT1WlgEAAAAAAL/6Bj7sKlMf4mFGAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Dr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgB7d3fTdtAHMDxn2l57wbNCN6A5rEqSN2gdAM6QcMGdALoBEVqeA5MUHeCskclDl8gVkji+M6+C7/Lfb8PwEOQLD5K5PtnRIiIiIiIiIiIiMihQkjK6e1l/W0kKiqq6vjom+ur3wqJvDHn8lDMxChANA9eb6oDIak+ju/lwIzrz6N7SSwAn0sVEcClUkQEcKXUEAHcUEqIALaUCiKAW0oBEcCOtCMC6JBmRAAd04oIoEdzRFNci6IA9Ki8ufteT1aeiaIAdGyOZ8xElAWgQ1rxbAB2pBnPBuCWtOPZAGwpBTwbgBtKBc8G4Eop4dkAXCo1PBuAz6WIZwNQ0sWzZQ8YHc+YHzEnwLMG3AHeeXUyPou5ipEt4I7wJvbHmEtRWQLuEm9RLMTsAF8Db1EMxKwAXxNvUWjEbADLm1n52niLQiJmA1h9GldSmK8SIw+85noCIWb1EVojXgVH7IHXXE8AxOxuYoIiDsBrrmcgYpbDiCCIAfCa6xmAmO1AfhBiQLzmehrE4p/P72U9ldYLMQJecz0W8b9xPh9v4yEHMh9inIopLjtfGBGvbwA+14moEM8G4FKtiErxbACutIaoGI9asojl9NaUv2cToTSbz50SERERDYkbivbUz4U+bYMo/pTTuy9Ca6keyK/vYSlOq+Ojn0JNagHbNyCBuJxKwO7dYyAuUgfovvUPRJvXTUz5a/ZOIua3b9NccWPjexd6KBc14kgi1G/TLYiew4jivRwWs9CIw3ZM543YZxw4CokYZrt7voh9B/JBEMOeVcgTcchMzCDEOAdN8kMcOpXWCzHuKaEaMaO50xBzoV6IOzniZQ+yZFKoyWwnRA3n8/atkKsRWxHBi1Po5aSNiODFK8Z64AtE8OIW6/8HPiFO767rP3C8Z0yz6Tbqivwo6gPCwZuX5vEy8JrSAwTvRWkBgrdWOoDgbSwNQPBa0w8I3tZ0A4LXmV5A8JzSCQiec/oAwfMq1lxoz4qL6uTDRMg5Ze9A8znWvtN9TdtH6CjGvtN9TuNNDIgeaR1GgOiY5oE8iA5pn0oDsaMUJrNB3FIqy0kgtpTSgi6IG0ptSwWIK6W4qQnEpfzmQo35K1oejHAok/rrqRARERERERERERF19wiyXT051op+sQAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Br=new URL("data:image/png;base64,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oWYhuTd7g0u1GpF2LnZlA5jCgoFobTqrND02VAICA9JSRB4GBklAYGAajsihNbfhEhAYoMYiclJ+EBgsAYGBunZEyvJnk7fH9wKDJSAwYNkRSRepHoW7gUETEBi4KiJf17pANXGRKqcEBKj2W5u8Od4LN8pXq92fy/Lz8HzbnKfViKOM6x3Pylfj4z4KEFxICCyYXaB6J0ANRiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkEVAAMgiIABkERAAsggIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGQREACyCAgAWQQEgCwCAkAWAQEgi4AAkKUYPTooAwBckREIAFkEBIAsAgJAFgEBIIuAAJBFQADIIiAAZBEQALIICABZBASALAICQBYBASCLgACQRUAAyCIgAGT5/w72Vgm/kJoZAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,nn=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Fr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZtLbtswEIZHUg10qSP4CLmCNgW69CZA0PMVAbLxskA3ukKOwCN4XzguqYEYwAFNDjkzlAB+mzzMx/yfnYgibYBGo9FoNEi8nv8cf5//PsFGeLO1uJoggx6I4ETD3EE3b0GCC/9ha3E15UjoKI3X8Lbb0f18A7jc4Db9Ov14hwqs4W0dI/7mZgCu08vpp0kdI1nAffiVWhK+hvcVGYqEJAGh8H5KZQnh8L4ikyohKiAW3k+pJCEe3ldkUiQ8FJAa3k8pLCE9vK/IxCQEBVDD+ymFJNDD+4rMIwnBy+AAw2gvdcTJFqMj9yUyP7yrpx8H+D6GHxeamOuVUBa+u/QwTM+n6T3cRrCAUgnS4bGdcCG5EjTCY1uFgqgStMJjewIaEjTDYx8ikhK0w2O/DCQk1AiPfTPhlFArPPYvgEPCwX5fKzyOUUiphB6/VgmP4zBQIiEHrvA4FhNaEjjD43iMSEvgDo9jMiMlQSI8jisAtwSp8Di2EFwSJMPj+IKUSpAO7/gGG+bDrhCu8A8k2fyfgPRG6y7+CUpK2M1lUErCrhZCEhJ2txTmlrDLmyFOCeT3B9xTuplhn4ELEOE8fCkSwLGT09tnsqaEKlti9yu8mocv6puioeVtLQmq2+KxtX0NCWoHI6k3NtoSVI7GqHd1mhLED0dzb2m1JIgej5fez2tIEHuDBNdmhrSETmJi7p0cSQnBleAVDrZjl7FC49/GerbF568YXT2HS/jxB7ye56NVMVuPR0ieTG4Pj/5K6AzYel5Okwm2gAipEjQ2MB3pEuLhl1aQQEyCVviVuIS08EtLSCQkQTv8SlhCevilNRC4l1Ar/MpXCbTwSw8gskpw9+M1w698SnBXLFr4bJyEt/P8BBsBPzLjnphGo9FoNCj8BxYA9Kv7ja2UAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,rn=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Tr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,on=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,_r=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Ur=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAb4SURBVHgB7d1NaBNpHMfx/0ymWAtdougedsFG9NDCbrcoe1ko6km9NT1JLZhTr1uvXqwgnuO1XiIoeGp7Wax7UelFWMp2WaE9KJsKuyyraFCMWpPOzi82aZpOnuZl5pnJ5PeBIvaFQvPtfyaT55ka0qCx+bF4f2//2KaxecoQY0QMSYgtcaHwMyTnPFZZW+wV27Yf5z/mFxaSC7nGvnQPF+5fSJi2OW3GzEsMIjqcWDJFu3jt3vl7WdXn1Q2kNDH6+q86xU0LRZZt2OmefM+1TDLjOlFcA8HUiBmxh86hJCEUec40yTrT5IzbNDFr3zHx68QI4+gueKzxmE/8MjGy+2NVODm6m9skqUwQnHMwju5WniSp+VTlyUglEJyQMg5CA5/7Pl/d/r98ObRYhvWXEG0p2IWjONSUJkhMYjNCVMWyrdLlDSP1MBUvfCq8EaKdctYH66i58XFjTIh2i2/0boyZzknJaSFyYRjGKdMwjR+EyIUTyAhOUhNC5MaWhMlXaEkhbgqRAgMhJQZCSgyElBgIKTEQUmIgpMRASImBkBIDISUGQkoMhJQYCCkxEFJiIKTEQEiJgZASAyElBkJKllCo9Fl9pTfIF/KltyAxkJAYPDAo48fHZejg0I73r75elaW/l2TpnyUJAgMJgYuDF+XcwDnXjyEYvI1+Oyrp39PaJwrPQQKEQ8nUd1N146iGSK78eKVy+NGFgQQEDzQecEyGRg18NSBnB86KTgwkAOU48IA3C9NG5xRhIJq1E0fp63v65OTXJ0UXBqJRu3GUHek/IrrwWYwmh/YfkumR6bbjAEwRXRiIBogDk+Pw/sPihVcfXokuPMT4zOs4YPXNqujCQHzkRxyYHmuv10QXBuITP+KAuedzohMD8YGfceB1GZ0YiMf8jGP+2bzoxkA8FLU4gIF4JIpxAK+DeAAXv/x4pTXoOIATpE1RjgM4QdrgVxx31+7K4vqihAEDaZFfccw+ndX+VFaFgbQA60cvn7gc+TiAgTRp9JtRmfp+SrwWxjiAgTTBjziwCPnO2p1QxgEMpEF+xXHjtxuy/nZdwopPcxvQrXEAJ8gexo+NS/J4UrzUKXEAJ4hCt8cBnCB1+BEHFvukV9IdEwcwEBd+xYHJ8fLDS+kkPMTUYBw7MZAqjGM3BrKFcbgL7BwEr2NgIzJ2rZcX2eAHiSuKWNavc+8H46gvkEAQBm6WUvtiF1ZlIRj8ULEWQsdNUxiHmvZAGnlAMFFw5RLBzD/3b9EM7s3RzO0XGhGlOEDrOQguWTfz24opkzzm7W93GeNojNYJ0sooRyTg5STxIw5c/EIcQd90zmvaJsjQgaGWV3x7OUkYR3O0TZDBg4PSjnYnSel+YM55jdc3X4lyHKAtEC/2i7QaiVc3bqkV9ThAWyDvC+/FC81G4lccuH9pELel1E1bIC/evhCvNBqJX3Hg+szsn7PSDbSdpC6/XPb0t22vE1fG4Q1tgeQ/5+VB9oF4qV4kuMB2/afrjMMDWi+UYTvh+jtvF8vURuLXJupujANiw5PDM6LRk3+fyPChYYnvi4tX8PrNQP+A9Jg9paeyfuywx3bIbmRMLk7aohlu41g6P+j39hDgh7Bsog5KIOtBcD5SWrj7LtxrM7s9DghswVA5kuX/liWMGMcXga4oQyS42BS2bYeMY1solhyGaeMy49gpNGtSwxAJ49gtVIuWg4yEcbgL3ar2ICJhHPWFcmcdIgGvF/bU+15hvTdHGIR2XwweOD8XLJe/B+NQC/XGqblnc75FwjgaE/qddX5Ewjga1xG7+xEJtLtwGetRcGEOq8GoMR1z+4d2I+m0G7eERUdt3m71cMM4Wtdxu/ubjYRxtKcj7zCESLC9Eft8sYKsHpxr3Hp6K1JbIXULZMGQl7Ca7MThE5X1p5gYCAN/+C/s6006Qcffowwx8FmJf3iHIVJiIKTEQEiJgZASAyElBkJKDISUGAgpMRBSYiCkxEBIiYGQEgMhJQZCSgyElBgIKTEQUmIgpMRASImBkJIphuSEyF0OEyQrRG4MyZqyKX8IkQvDNlZMQ4xHQuTGlsdmrDe2wPMQchP7GFswM2cyOaeU20JUxTmyZDLJTOkkVSzbSgtRlZgdu4Z/S4Fkzmeyzj83hQg25eZWE9sXyqx91owzVrJCXQ0NWJ+smfL/K4HgXMQZK2cYSffCY48GcO5Rft+OS+0YK0WzmGQk3acUhxlLlg8t2+93kbqfShSN4kNb7IRQ5FUmR00cXz6mMLk4iWc3PwtFl3NCinOO6sNKNWOvr8c0KUhhxvnMS0KRYBhGzi7aty3DSrtNjR2fKw1Kzafixd7imHPYOe181YjzTQZs2/buT1eSb0pB2Pa687ZiivkIV0jrTYxa/wM44iJf/sg40QAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Mr=new URL("data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.9197%2029.6004H25.8396C26.6348%2029.6004%2027.2796%2028.9556%2027.2796%2028.1604V15.3511C27.2796%2014.9748%2027.1322%2014.6135%2026.8692%2014.3443L23.4366%2010.8337C23.3025%2010.6965%2023.1423%2010.5876%2022.9655%2010.5131C22.7887%2010.4387%2022.5988%2010.4004%2022.407%2010.4004H18.9197V18.6804H22.6397C22.8625%2018.6804%2023.0761%2018.7689%2023.2337%2018.9264C23.3912%2019.084%2023.4797%2019.2976%2023.4797%2019.5204C23.4797%2019.7432%2023.3912%2019.9568%2023.2337%2020.1144C23.0761%2020.2719%2022.8625%2020.3604%2022.6397%2020.3604H18.9197V22.2804H20.4797C20.7025%2022.2804%2020.9161%2022.3689%2021.0737%2022.5264C21.2312%2022.684%2021.3197%2022.8976%2021.3197%2023.1204C21.3197%2023.3432%2021.2312%2023.5568%2021.0737%2023.7144C20.9161%2023.8719%2020.7025%2023.9604%2020.4797%2023.9604H18.9197V25.7004H22.6397C22.8625%2025.7004%2023.0761%2025.7889%2023.2337%2025.9464C23.3912%2026.104%2023.4797%2026.3176%2023.4797%2026.5404C23.4797%2026.7632%2023.3912%2026.9768%2023.2337%2027.1344C23.0761%2027.2919%2022.8625%2027.3804%2022.6397%2027.3804H18.9197V29.6004ZM18.9197%2010.4004H14.1197C13.3244%2010.4004%2012.6797%2011.0452%2012.6797%2011.8404V28.1604C12.6797%2028.9556%2013.3244%2029.6004%2014.1197%2029.6004H18.9197V27.3804H15.6797C15.4569%2027.3804%2015.2432%2027.2919%2015.0857%2027.1344C14.9282%2026.9768%2014.8397%2026.7632%2014.8397%2026.5404C14.8397%2026.3176%2014.9282%2026.104%2015.0857%2025.9464C15.2432%2025.7889%2015.4569%2025.7004%2015.6797%2025.7004H18.9197V23.9604H15.6797C15.4569%2023.9604%2015.2432%2023.8719%2015.0857%2023.7144C14.9282%2023.5568%2014.8397%2023.3432%2014.8397%2023.1204C14.8397%2022.8976%2014.9282%2022.684%2015.0857%2022.5264C15.2432%2022.3689%2015.4569%2022.2804%2015.6797%2022.2804H18.9197V20.3604H15.6797C15.4569%2020.3604%2015.2432%2020.2719%2015.0857%2020.1144C14.9282%2019.9568%2014.8397%2019.7432%2014.8397%2019.5204C14.8397%2019.2976%2014.9282%2019.084%2015.0857%2018.9264C15.2432%2018.7689%2015.4569%2018.6804%2015.6797%2018.6804H18.9197V10.4004Z'%20fill='white'/%3e%3c/svg%3e",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Lr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgB7d1hThtHFAfw92bXJpEqlZ6g7gkKNzBSIIr6JSZqJcOHkBOEnABzgpITQBUhq62iDZ8iQSs7JyA36PYGVGpVCt6ZzsMhaWjA9hrvzM7+fx9BthDzdubN7Nu3RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFACTPDebpLM18/rDc1qXhl9sv7dN28pcAgAq5u8bmjDmxFHjw3R/IffmNT+i/bareVtClTlA+Cn5HBBE/c+HvirJBCypXbrQUqBqXQAyJXPFB/fPPiXTHpKtcUnraUTCoiiSot64w2+4EZdn21SYCobAC+So6YM6gQfIVbqKQWmsgEQES3QhOx6Ob9vcwYKSGUDgI1uUg5qkI25ZJRDdXMA5q8JqhkAkv1Puv5fOo3vBHU4VMkA0DpqUg52x/AW28AARIpzZfPG6N8pMJULAMniTY4dgFDMrygwlQsANmaKw5xanwJTqaPgYfIX/0Y5yPq/1lpepMBUbAaIepSXzn6gAFUmALoHv27l3foJVnPBrf+iEkuA3PLNiI8pJ230wfrq/YcUoOBnAFn3M6KEpqAyvUOBCnoGGCZ9su5zg3IyxrxZW11pUqCCnQFe/Py6KcUe0wy+4CzrUMCczwBSiDmnP9tgZW68OaM1vVl/tLJHY7hI+LTu0NQ41TPI/pnUicnO+j4UnToNgG5yZK9SSsavyhldm3d7g18E97WGzpaAYT3eJIMvuGEovjahK9fgC27IwdSPB788JkecBYAxqjPZ4A/ZoFno2vX96s9lzS/X4H+QabPjqtLIWQAwqy8pJ61U8+rP4jjapZKSUjNF/D05EMQuYP/l4ca02b4HmrtJr/BysyACQCl2tobepjk6a1LBSh8AyfCqaVIAjGbMAJP6kwbBlGkrnaVUsNIHQJQVf9XMiouC09IHgGEdSADwnouC04o/G+gLTu1c5uQRdASAcxeDb4+Dl1JyAAHgkNQZnlK06GrwBQLAITnWvkuDLXIIAeCYnQU2P3VvoygIAB/EsbNZAAHgByf3AQQCwBN1Om+QAwiAikMAeOKMaik5gADwgDx44qrvAALAA4rrztrPIQBc03obJ4EVxMQn9hDoWfvR/Q45FBMUjFND5rm9B7DnQ78hzAAFs4M//w/FXgy+QAAUTErA6/rcm0fNSx8AbFT52rZxviZVs1D+AIjOS9e4UTF9Tp7wMQCkNGrJELeG1TI3kwcrjaFS9e/T2njz93q1C5Bt0Vpr+X03jiTp9U8pO7a/adz4OaY9u7Y6LayYhNK6T57wZgawg3/y38EXLZspy5Zp1GeVzaqpNDhtf/ugT54IYhcgJ2nGGO/buMnhjxSAkke8CQDZHn2qNIrJjNXX9y7XNu13eLsjkMFXDqt/r+MuBzD6D+KP48/EcbL/8vDZmcr68YAatTh+apeGxtWP2qD430DLctFNjmziSPmbQc7O9t8U7fjYadxZi5hucvFId85n+uOvrruSpvve2/cut/mCPOVsCWi3Lho+9WlSI+6eyfeOu4UsAufoglIkpznAHYpbxvDILF9McvdsrXXvlSRbPiSG8vAHecybRpHv2rlec7UM0rydtIZLgtoadZYwO/Lq2XtPyFOV6BXcTXoNY847zC46iVyfr/igYu8LKHg2kHzFccHHKJV7d3BRs4HNP56vra44q/UbV2VfHn0RCDR4yMZs3OY7BKW5tA2uTru13KcSqPzr4y/dnISOFtnDqb+olob2WjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwwr/DubvGOyIy/AAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Pr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVmSURBVHgB7d1tThtHHAbw5z+7Sd2qUukJujlByQm6lgpSvrGpWhX4AJwgyQkCJwBOQKoquC+KFj6lgki4J6hzg+0N6Ke6xd7pDCYSpATMru2Z3X1+UgTEjpR4n53X/04AIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiqgABYS9N54DWXDhAhBIGYb+3kSSnqJDGBsBe9BY+fWK+jS9+TYQGejrXu6vfLL5ABTQuAJ30daS12hRRa5gi88HufJ8sPIPnGhWA/fT4qQKem7t0DjNQhRA0IgD2rgfCPUywqR/bYNBe/vZRF55SqDl71wvCP+Di4lthMNWupqwQNXX5rtdwKobHahmAH399HZu7Pp1VX38zieCx2nUB+4dv1sIwPPHj4p9PC71eF6jVINDe+fbiwyM2AAJ9AAy3lpNHGTzjPAAXU7M180HN3/LWrhlRb31oRD3q84MTf5tcneVAspos9uARp13AT+nxtkng9hgX34ph7u6fTRN/3Yt2ccfv/lYigZy8TI/G+bfOjLMAvHx1tG4u/FPc0TDXO3vpyZX+3d79017ZmwQT9jkF2YZHnAVAiV5CAfZD/Cj/Z/3y743u/sqIO2asAk+46wJEfYaCNORKCyAiX6FCtBJvuoHKTwNHgz+JUCGi1JfwROUDMEAYoWJyjb/gicoHQOU6QsUogTdTwdruBfhLMvOxd+GJ2u8G+kZDz+X5WTwau7jHAMzY+VqAkj27arn/6rc7r4NMGgPgjFkZVMF2Jz1+DocYAPc2XS4MMQA+CENnrQAD4If4/f2NWWEAPNFCnwFotJJPJRXFAHiiH7acrA4yAB7QWv++kbSd1A4yAB4QwQs4wgA4Zu7+3eXE3YOkDIBDAjkVGe7AIQbAIbsxZPcEXG4MMQDOSWRDwIWgRpOohTMn1cIMgCc0ZMlFK1D9ACh/yqvKsHUCrUF/5tXClQ/AJ7iXoSZyFUSYMe8CYKdGdmXMTJDfjvP+ZLSC1kUNqHyYYca8CoA9YetvBA9WHi/Gy48X583PY52vY/rPXdRB2MowY14FQBAml9fEV5KFHdMa/HDbn1tJvj4YVdtWl231lpN2hhnzKAA6u+4D0Hrc5l1voMJE7q3DAY8CINF10yARHWMMy8lC13zZQiXpDRd3v+VVF/AxBldq435Jj+bv8ti3CcEmKhQC2+wHCB+63Azy6skge15AJz1aynV+GEjwxRC48yPkNgSd9Nh+W7rQ0h7vovN84gNMUerUzPt7ZrDbhWPOAmDS/1ZE4v+/IpGS4MlNR7spdfOAz4ZgP33TU9B7ZQ6Lsoszkuddnw96LMtZF2Au/gEKkWycJtPODLRpXkvPDhyWbM+CswAUGbTZRaIAQTLu+0cDq6At5Y5q8+pEj0lzfkpYJz2JtD7bNH+R+fdP/nhHoE9Nk3HQR7hTpHbOjAli86XM8XFdE9g2aqgxp4WPzgxG4S1XE77PXRVuTlNjtoPtqiJK7Bncz/91/iTvNDStHqDwGoFSqlIHUY2rgf9jyLEdC8QoZPDAx+Ney2hiRVDhVkDnUuhsQ581LgAX088uCvDpeLdJaWRNoFkdPEQxMWqmkQEQDIquQkauyrenpZEBsAM5rfEnCriPswg10uCycN1FAWowZAtQCyKFysnzMKjVamBjTwq1+/G4M8lWk4VaPIfwTmNbgELTwXx4a4Fq1TT60bAA+tn4W8WS9dV9p49yT0OjA/BdstgzawLJ7UUj9vWgzd3AGhp1BUHbPn9gC04uv3bx81YfwUNXVbvT1rjNoNvYSuTheWHKIKvbxg8RERERERERERERERERERERERERERERERERERERERFV1n8eqplfc7mFmAAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Or=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Nr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Qr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7d1PThNhGMfx3zutFQMxPUI9gXgCSyJEd44mRrqxnEA8gXIC9QTFhZKYkMEVBhfUE4A3qDfoyvB3Xmd0A6iJNCXvzPt8PwlpgV3nO+9MM0+nEgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBpwiNci2O6280VXFOO/Hh40fw5U0HasCogtgkGXtGc1lxdOuKsuPfJ6/7T2+/0aBJYrMjGb3VOmNX3IdlzRef9j8vKrAoloB3m/u9JPEDVQTXhofqnlrJV0IdjiIagUoNv4z1Uix97Wv66irgKI7BNSNz11bARGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHFNxWVNuX+nKfOJa3vvO0l5kcm524pIVAEsp4tDXbGP2c58LjcoLuTMKwIcAi7pSbq0/zRdvKNytYkAAUyoWG1eKYIIKnUIKKd5WsetTu6SoFfILjppHuz/bYSrjGAj+3JXlR9A+bdKBFBu+Buae1k87ftraldtWWpqThvZzrp0uracPhhd+He5CnRVU8Ff698zfLN7xUnVavFTqT3/PNeXGrsb2Xbn7F/LE08n7aumggcwk9x8Xs7IqRZcp1gP/hg5y73/qpoKHoDL84eql+4g2z2/Ujk3Uk0FD6CO76dbOu6c/d3nvhIz/pPgbeAEkpPTCp+rXA4BGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEYBwBGEcAxhGAcQQQmEvCDpMQQGBOraADpQQQlFtfThdGCogAAvG/RskbwT9ZFNung4NwSTL2Pv+v0XAnP/YuGfbSxeD3CS4RwBT00ntbxcOWaohDgHEEYBwBGEcAxhGAcQRgHAEYRwDGEYBxBGAcARhHAMYRgHEEMIG82ajtPYEuqkIAQ9XMka6NFIkq3CXsk2rFrYf8qtdpCx5AORnj/fTv8X8VyjGuAzVeKCKVOAfoPVrqFy/virz/pgryXt+Lh7VDNRdi2vsBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA9/AQgnaBvPi1l+wAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,zr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOFSURBVHgB7d1vbhNHGMfx38zaKUJI9RHcExBOgC3xR7wiW9RWTlXVPkHNDZITACeIESqp1KLtO1qoFHMDeoPtDdIXlVpi73Q2bRAICDu8IvN8P1KkxJ68sObZ2fXMPPNIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAzwMmYvaoafLI+PwrODdq/m2Zdf/PFjaWMMhMAbcef04Xv4geeB2nw+ruhbhrtfn3r2kLGmAiA/erxUCoO4scdvqfpzqS8uitDvAwIKqoOnd/aefjol7kMyX4E+P7Rk6n3bq9r+3h7OPxHvc9m5fhQBmQ/AsTO/zalfbwiBhvN0ZaMyD4AYoduKpH3uiwjsg+AN5/48SoLI0DyvbwJ+lNG5D8ChOaZEjkXljIi/6+Bzt9Nai9Xb5fXf5YR2QdAnNhZhuDudW0ftL4tQ0xMBG1/fmXeJQjiA+NtS1d/y9Ri0H71ZBp7eR5v8hdPXnNyh01ofu+5/vzLcvxcxphbDWztVQdxYWi1WSgc/qV+bWXWDwAAAAAAAABgkqm1gOOsoObCNK6BXo6LQJttQkj7s1qt71vNDjITAA9+fDzq93rVKXsEl9JqNilv1DLERAA8/OnXLVf46v0tQ/23+pcsrQ5mvyGkTQtzhbvTrbUbxmXiDoGSDwObQot5x7SwE6P9eLuQEflnBjmXnOQRvEtOJjmrLCSGJHem8/6ijDCxKRTvZuAZQH8oUdOE5P85q/IPAKeFEnm/sZAR2QfAefXupuUHusWkHNcyIvsAKOOkTlDomO3jaqngiJjcTMpriyBX/tfBbxdCeBY7f2zp6m8Zyww6GEpHo9jbWyeTQ3F0eO6cX7Q5hAIAAAAAAAAAID9GD4mqBhtHG8P29xf9F/WsLM0eEmUqAP6vHdAeHz96/Z2wkNa71pJCWmYCYL/6bS929PS0NjE4pl/dvHJfhpgIgB+qp3eC1K0UzGo1nhjKE8x+Q8iD6umoc+e3ekXn8jI5yD4AitBMlcQNyQzKiHf+phI1RUHNoFx8SMkY7/SpjKBkzFtQMiYjcQRIPgI+jgBmjo03sC08JH6vb7eO95cywkDJmOOC0Muu7YPCPTKDstObnZYU8lLT7G6XVxOLTJ1tRjKDxvU5FZfeXTeoDY4wm9y6viNjzK0GnpSLiY/6w+MXvKvJCgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOT+BTU3+TEldtBPAAAAAElFTkSuQmCC",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Hr=e=>{const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const u=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(u.getFullYear(),u.getMonth(),u.getDate()),r=Math.floor((i.getTime()-n.getTime())/864e5),o=t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});if(r===0)return o;let s="";return r===1?s="ontem":r>=2&&r<=5?s=t.toLocaleDateString("pt-BR",{weekday:"long"}):s=t.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),`${s} ${o}`},jr=(e,t)=>{const u=t.questions??[],n=e.activeConsultantFollowUpId===t.id&&u.length>0;return C`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">
        Certo! Reuni abaixo as principais dúvidas sobre ${t.topicLabel}. Escolha uma delas ou
        faça sua pergunta.
      </p>
      ${n?C`
            <div class="consultant-follow-up__options">
              ${u.map(i=>C`
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
  `},qr=(e,t)=>{const u=e.activeConsultantPromptId===t.id;return C`
    <div class="consultant-follow-up">
      <p class="consultant-follow-up__text">${t.text}</p>
      ${u?C`
            <div class="consultant-follow-up__options">
              ${t.options.map(n=>C`
                  <button
                    class="consultant-agent__option"
                    type="button"
                    @click=${()=>e.handleConsultantAgentOption(n)}
                  >
                    ${n.label}
                  </button>
                `)}
            </div>
          `:null}
    </div>
  `},sn=e=>{const t=e.messages.length>0,u=e.consultantAgentVisible&&e.consultantAgentOptions.length>0&&!t,n=C`
    <div class="hero-card">
      <img src=${Br} alt="IA assistente" class="hero-card__icon" />
      <h3>Como posso te ajudar hoje?</h3>
      ${Sr(e)}
    </div>
  `,i=C`
    <div class="consultant-prompt">
      <div class="consultant-prompt__text">
        ${e.consultantAgentIntro}
      </div>
      <div class="consultant-prompt__options">
        ${e.consultantAgentOptions.map(o=>C`
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
  `,r=C`
    <div class="conversation">
      ${e.messages.filter(o=>!o.hidden).map(o=>{const s=!!o.consultantFollowUp;return C`
          <div
            class=${M({message:!0,"message--user":o.role==="user","message--assistant":o.role==="assistant"})}
          >
            <div class="message__content">
              ${s?jr(e,o.consultantFollowUp):o.consultantPrompt?qr(e,o.consultantPrompt):xr(o.html??o.text)}
            </div>
            ${o.role==="assistant"?C`
                  <div class="message__actions" aria-label="Ações da resposta">
                    <button
                      class=${M({"message__action-button":!0,"message__action-button--liked":e.messageReactions[o.id]==="like"})}
                      type="button"
                      aria-label="Curtir"
                      aria-pressed=${e.messageReactions[o.id]==="like"}
                      @click=${()=>e.handleToggleReaction("like",o)}
                    >
                      <img src=${Lr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class=${M({"message__action-button":!0,"message__action-button--unliked":e.messageReactions[o.id]==="unlike"})}
                      type="button"
                      aria-label="Não curtir"
                      aria-pressed=${e.messageReactions[o.id]==="unlike"}
                      @click=${()=>e.handleToggleReaction("unlike",o)}
                    >
                      <img src=${Pr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Atualizar"
                      ?disabled=${e.isLoading||!o.responseTo}
                      @click=${()=>e.handleUpdateResponse(o)}
                    >
                      <img src=${Or} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Compartilhar"
                      @click=${()=>e.handleMessageAction("share",o)}
                    >
                      <img src=${Nr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class=${M({"message__action-button":!0,"message__action-button--copied":e.copiedMessageId===o.id})}
                      type="button"
                      aria-label="Copiar"
                      @click=${()=>e.handleCopyMessage(o)}
                    >
                      <img src=${Qr} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="message__action-button"
                      type="button"
                      aria-label="Mais opções"
                      @click=${()=>e.handleMessageAction("more",o)}
                    >
                      <img src=${zr} alt="" aria-hidden="true" />
                    </button>
                    ${e.copiedMessageId===o.id?C`<span class="message__copy-feedback" role="status">Copiado!</span>`:null}
                  </div>
                `:null}
            <time>
              ${Hr(o.timestamp)}
            </time>
          </div>
        `})}
      ${e.isLoading?C`
            <div class="message message--assistant typing">
              <span>${e.loadingLabel}</span>
              <span class="typing__dots" aria-hidden="true">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          `:null}
    </div>
  `;return C`
    <div class="panel-body">
      <div
      class=${M({"panel-content":!0,"panel-content--empty":!t&&!u,"panel-content--consultant":u})}
      >
        ${t?r:u?i:n}
      </div>

      ${e.errorMessage?C`<p class="error-banner">${e.errorMessage}</p>`:null}

      <div class="panel-footer">
        ${e.showSuggestions&&e.suggestions.length>0?C`
              <div class="suggestions-wrapper">
                <p class="suggestions-label">Sugestões de Perguntas</p>
                <div class="suggestions">
                  ${e.suggestions.map(o=>C`
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
          class=${M({"input-shell":!0,"input-shell--has-attachments":e.selectedFiles.length>0,"input-shell--recording":e.isRecording})}
        >
          ${e.selectedFiles.length>0?C`
                <div class="attachments">
                  ${e.selectedFiles.map(o=>o.kind==="image"?C`
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
                              @click=${()=>e.handleAttachmentRemove(o.id)}
                            >
                              <img src=${rn} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `:C`
                          <div class="attachment-card attachment-card--${o.kind}">
                            <span
                              class="attachment-card__icon"
                              style=${`--file-icon: url(${o.kind==="audio"?on:Mr});`}
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
                              @click=${()=>o.kind==="audio"?e.handleVoiceAttachmentRemove(o.id):e.handleAttachmentRemove(o.id)}
                            >
                              <img src=${rn} alt="" aria-hidden="true" />
                            </button>
                          </div>
                        `)}
                </div>
              `:null}
          ${e.hasVoiceAttachment&&!e.speechRecognitionAvailable?C`
                <p class="voice-transcript voice-transcript--unavailable">
                  A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                </p>
              `:null}
          ${e.attachmentError?C`<p class="attachment-error">${e.attachmentError}</p>`:null}
          <input
            class="file-input"
            type="file"
            accept=${e.filePickerAccept}
            multiple
            ?disabled=${e.isFilePickerDisabled}
            @change=${o=>e.handleFileInputChange(o)}
          />
          <div class="input-row">
            <button
              class="input-button input-button--file"
              type="button"
              aria-label="Anexar arquivos"
              @click=${()=>e.handleFilePickerClick()}
              ?disabled=${e.isFilePickerDisabled}
            >
              <img src=${nn} alt="" aria-hidden="true" />
            </button>
            ${e.isRecording?C`<span class="voice-recording-label">Ouvindo...</span>`:e.hasVoiceAttachment?C`
                    <div
                      class=${M({"voice-input-locked":!0,"voice-input-locked--error":!e.voiceTranscript})}
                      aria-live="polite"
                    >
                      ${e.voiceTranscript?C`${e.voiceTranscript}`:e.speechRecognitionAvailable?C`Não foi possível gerar a transcrição desta mensagem.`:C`
                              A transcrição não foi possível pois a ferramenta não está disponível no seu navegador
                            `}
                    </div>
                  `:C`
                    <input
                      type="text"
                      placeholder=${e.placeholder}
                      .value=${e.message}
                      @input=${o=>{e.message=o.target.value}}
                      ?disabled=${e.isTextInputDisabled}
                    />
                  `}
            ${e.isRecording?C`
                  <div class="voice-recording-actions">
                    <button
                      class="input-button input-button--voice-action"
                      type="button"
                      aria-label="Cancelar gravação"
                      @click=${()=>e.handleVoiceCancelClick()}
                    >
                      <img src=${_r} alt="" aria-hidden="true" />
                    </button>
                    <button
                      class="input-button input-button--voice-action"
                      type="button"
                      aria-label="Confirmar gravação"
                      @click=${()=>e.handleVoiceConfirmClick()}
                    >
                      <img src=${Ur} alt="" aria-hidden="true" />
                    </button>
                  </div>
                `:null}
            <button
              class="input-button input-button--voice"
              type="button"
              aria-label="Gravar mensagem de voz"
              @click=${()=>e.handleVoiceButtonClick()}
              ?disabled=${e.isVoiceButtonDisabled}
            >
              <img src=${on} alt="" aria-hidden="true" />
            </button>
            <button
              class="input-button submit-button"
              type="submit"
              aria-label="Enviar mensagem"
              ?disabled=${e.isLoading||e.isRecording}
            >
              <img src=${Tr} alt="" aria-hidden="true" />
            </button>
          </div>
        </form>

        <p class="footnote">
          IA pode cometer erros. Por isso lembre-se de conferir informações importantes.
        </p>
      </div>
    </div>
  `},Gr=e=>{const t=sn(e);return C`
    <aside class=${M({panel:!0,open:e.open})} role="dialog">
      <header class="panel-header">
        <div class="panel-header__top">
          <span class="panel-title">${e.titleText}</span>
          <button
            class="close-button"
            @click=${()=>e.handleCloseAction()}
            aria-label="Fechar UptAIme Assist"
          >
            <img src=${Fr} alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="panel-header__actions">
          <button
            class="conversations-button"
            type="button"
            @click=${()=>e.toggleConversationsPanel()}
          >
            <img src=${Rr} alt="" aria-hidden="true" />
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
                class=${M({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.shortAnswerEnabled})}
                aria-hidden="true"
              >
                <span class="short-answer-toggle__thumb"></span>
              </span>
              <span class="short-answer-toggle__label">Respostas rápidas</span>
            </button>

            ${e.hasActiveConversation?C`
                  <button
                    class="panel-header__icon-button conversations-plus-button"
                    type="button"
                    aria-label="Nova conversa"
                    @click=${()=>e.handleCreateConversation()}
                  >
                    <img src=${nn} alt="" aria-hidden="true" />
                  </button>
                `:null}
            <button
              class="panel-header__icon-button"
              type="button"
              aria-label="Expandir painel"
              @click=${()=>e.enterFullscreen()}
            >
              <img src=${Dr} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      ${t}

      ${un(e,{variant:"drawer"})}
    </aside>
  `},Yr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIzSURBVHgB7dzdTeNQFEXhk9EUMCWkBOhgpoOZCgYqIx1AB4gKoANSAh2EY+ErBQTh2j73bNtZn3SVFx6SvXCk/ChmAAAAWJjD4bDtjiFfP/5zf7aGPEfjF0TI8sn4RMhyYnwitFYxPhFaGTA+EaKNGJ8IUSaMT4SpAsYnwliB4xNhqAbjE6FWw/GJ8J2E8YnwlcTxifCRYHwiFMLxZxNhYyL9A7/3szWtvZ8/m81mbwKSAD7+L795NP34xd7PpUd4sWQ/LFk//hz+849t/dz39y1V6hVwNP6FzdOTvT0dpV0JaQEWMH6RGiElwILGL9IiNA+wwPGLlAhNAyx4/KJ5hGYBVjB+0TRCkwArGr9oFiE8wArHL5pEaBGge4W7tvGLJw9waYFCXwn7+De23vE7F/1jDBN2BfR37MrOw86vhGsLEBLgzMYvQiJMDnCm4xeTI0wKcObjF5MijA7A+O+MjjAqAON/alSEwQEY/6TBEQYFYPwqgyJUB2D8QaojVAXw8f/6za1hiH8e4e67P6p9KyL9w+oVqNos/VsReI8AYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHEfto87fw8WKzffv7bzMw1wIO/l76zQP6ZRnczuwA8BYkRQIwAYgQQI4AYAcQIIEYAMQKIEUCMAGIEECOAGAHECCBGADECiBFAjABiBBAjgBgBxAggRgAxAogRQIwAYgQQI4AYAcRqv57e/Vxv9Pf1T9lbvDU8BgCI9AoWATDVE+mlOgAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Xr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Vr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Jr=new URL("data:image/png;base64,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",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Wr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgB7d3fURNRGIbxd4N6jR1gBW4HspcOorED6IAOgAq0BKxAVBwvEzpYK3BLiLfGcDxZuHBwJmFjvuXP+/xuYIAMM+TJYc/J5IsEAAAAAAAAAAAAAAAAAAAAALjHChkqP4429URDXWir/UJSrZnG9dtqIjN2AZRfzw+V0kH+dPPatyYqivf1zotjGbEKoDwbj/KH7SU/dlK/2t6XiYFMtI/85Xf+3F55NjqQCYsVoPw22tKs+NHhJhNN0zOHawKPFeDiRo/8v23qkUoZcAlgS10VBOAt/bNLeJAIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgjgDMEYA5AjBHAOYIwBwBmCMAcwRgrpf5AO1MnvnLrQcrvEp3LYo3Shp2u4lOpfRJfZtpog019U5VqwfhASyYyYPFGl2k4/p1daJAoQHccCYPFgudWRR2DVCenb8Td/467F39LUOErAArzOTBMtP0NGJmUcwKMOt4wYXlHmtPAaL+BVjM1+lX8VwBOAcwFxNAylsYrFdKPxUgagUYC+t2qgBh5wCcAaxRSuf1brWtAHHXABtpP+fVCP+r0e+YHcBcWAD1y6rRIFU53w/CavIjP+//q7z/bxSknyeD2oOh9g0abmd7OGi3UF1/d53P4r/rNhSaH/ic5mV/rGAe08K/jI5UFIedbpTyEzG71ZEeOM4BzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMAcAZgjAHMEYI4AzBGAOQIwRwDmCMCcRwCDFQZVXL5E+8HzCODXCvN1pjEzee4aiwAuJ2x2mlRyEjmV4y7xuQaY6uCGM4saTdOxTNgE0K4C7cyiBSPsepjJc9dYjIi5rvw8Gub0h0pXb2AxH2xZ5GW/h5k8AAAAAAAAAAAAAAAAAAAE+QMaiqe8YD8gVgAAAABJRU5ErkJggg==",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Zr=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB7d3BbRNBFIDhtwZzdge4BHeA9ojgQge0QAfQAR1QAhcQR1OCqQCXkDORvHg2LE6I196Zee/toPl/CQ4IJZY/RfbMOG9EiIiIiIiIqNQ2X7ebzeftWhRbCLkU8KRrtrJstpqIjZB5f/FEVn/+aS+3Xbt70+4lMwCNO4M3pIIIoGEX8IayEQE0agLeUBYigAZF4A0lIwKoXALeUBJiNcuI41v32Cc0/nuk44XWKUuMetaBS/movYi+XybeUDRiRQv55rn2InpICW8oCrG2nZi1NqIy3tDkx1njVpoaohHe0KTHWeteaDaiMd7QSp5d/vo1b2YnIzrh3UhzXFa8aneX/lPtpxHRiCXhhThOikAsDS8E4F1XEUvECwF4ahSxVLwQgA97hFgyXuip0L8NiG3/Fr5gvBCA5+sRpevhisULATjeWmzLxgvxGjhPKnghAP1TwwsB6JsqXghAv9TxQgD6ZIIXAtA+M7wQgLaZ4oUAtMscLwSgTS54IQD1c8MLAaibK14IQN1u5Nfxj2MA6qb+udNrAaifKyKANrkhAmiXCyKAtpkjAmifKSKAPpkhAuiXCSKAvqkjAuifKiKA86SGWM/nQrvuh5Q2VmUp749/vxUiIiKKLvtFffPl+yex/0WQyJrd7vWLd1JB+e9Cn3Qf5ND/KtZaSqk7VDPEL3sduHvZ7mXRtcef5b2QeyoLeRDnS20nBsR5Ut1KA9E/9b1QEH0z2cwG0S+z0wgQfTI9TgLRPvPzQBBtcznQBdEutxN5EG3y/UjFIcweMx1dVV1ugE5T/6rLBRA8u8wBwbPNFBA8+8wAwfPJBBA8v9QBwfNNFRA8/9QAwZsnFUDw5isbELx5ywL0uxSDDfCxkgE9bzThFGO8JEDv62g4ihovGnCuu4RAPF8U4NwXQYH4uMmApdziBeLDJgGWdgUbiKeuApZ6fx6Id10ELP3yQxCv/QQu+kW05Qjh7BnTtSNeBDR+ctQGhNeMePU10OjJUZ/uXivipHehyk+O2Wj+0+NsfkolTV4HKiGa36vQP87brooJFaHoaQ6bb9t14lQK90sxaihpHEcCInhGJc9TiUAEz7CsgTgTEMEzLn/U1jgieA6pjKQ6gwieU2ozxe4hrsD7TwuI/QY4ERERERERldpvO99jwLC0P3AAAAAASUVORK5CYII=",p&&p.tagName.toUpperCase()==="SCRIPT"&&p.src||new URL("rio-assist.js",document.baseURI).href).href,Kr=[{id:"status",iconUrl:Xr,ariaLabel:"Status"},{id:"info",iconUrl:Vr,ariaLabel:"Informacoes"},{id:"profile",iconUrl:Jr,ariaLabel:"Perfil de usuario"}],$r=e=>{var n;const t=sn(e),u=(n=e.headerActions)!=null&&n.length?e.headerActions:Kr;return C`
    <section class="fullscreen-shell" role="dialog" aria-modal="true">
      <div class="fullscreen-shell__rail">
        <button
          type="button"
          class="rail-button"
          aria-label="Ir para home"
          @click=${()=>e.handleHomeNavigation()}
        >
          <img src=${Yr} alt="" aria-hidden="true" />
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
                class=${M({"fullscreen-header__brand-toggle":!0,"fullscreen-header__brand-toggle--open":e.showNewConversationShortcut})}
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
            ${e.activeConversationTitle?C`<span class="fullscreen-header__tab">${e.activeConversationTitle}</span>`:null}
          </div>

          <div class="fullscreen-header__actions">
            ${u.map((i,r)=>C`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label=${i.ariaLabel??"Acao do cabecalho"}
                  @click=${()=>e.handleHeaderActionClick(i,r)}
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
          <img src=${Zr} alt="" aria-hidden="true" />
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
              class=${M({"short-answer-toggle__track":!0,"short-answer-toggle__track--on":e.shortAnswerEnabled})}
              aria-hidden="true"
            >
              <span class="short-answer-toggle__thumb"></span>
            </span>
            <span class="short-answer-toggle__label">Respostas rápidas</span>
          </button>
          ${e.hasActiveConversation?C`
                <button
                  type="button"
                  class="fullscreen-header__icon"
                  aria-label="Iniciar nova conversa"
                  @click=${()=>e.handleCreateConversation()}
                >
                  <img src=${Wr} alt="" aria-hidden="true" />
                </button>
              `:null}
        </div>

        <div class="fullscreen-grid">
          ${un(e,{variant:"sidebar"})}
          <div class="fullscreen-chat">
            ${t}
          </div>
        </div>
      </div>
    </section>
  `},eo=e=>{const t=M({canvas:!0,"canvas--fullscreen":e.isFullscreen,"canvas--open":e.open});return C`
    <div class=${t}>
      ${mr(e)}
      ${Gr(e)}
      ${e.isFullscreen?$r(e):null}
      ${e.renameConversationTarget?C`
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
      ${e.deleteConversationTarget?C`
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
      ${e.conversationActionError?C`
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
      ${e.voiceCancelDialogOpen?C`
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
      ${e.newConversationConfirmOpen?C`
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
  `},to="wss://ws.volkswagen.latam-sandbox.rio.cloud",uo=5*6e4;class no{constructor(t){this.socket=null,this.connectPromise=null,this.listeners=new Set,this.heartbeatId=null,this.token=t}matchesToken(t){return this.token===t}async sendMessage(t,u,n){const i=await this.ensureConnection(),r={action:"sendMessage",message:t,conversationId:u??null,...n??{}};console.info("[RioAssist][ws] enviando payload de mensagem",r),i.send(JSON.stringify(r))}async requestHistory(t={}){const u=await this.ensureConnection(),n={action:"getHistory",limit:t.limit??50,conversationId:t.conversationId??null};u.send(JSON.stringify(n))}async renameConversation(t,u){const n=await this.ensureConnection(),i={action:"renameConversation",conversationId:t,newTitle:u};console.info("[RioAssist][ws] enviando renameConversation",i),n.send(JSON.stringify(i))}async deleteConversation(t){const u=await this.ensureConnection(),n={action:"deleteConversation",conversationId:t};console.info("[RioAssist][ws] enviando deleteConversation",n),u.send(JSON.stringify(n))}onMessage(t){return this.listeners.add(t),()=>this.listeners.delete(t)}close(){this.stopHeartbeat(),this.socket&&this.socket.readyState===WebSocket.OPEN&&this.socket.close(),this.connectPromise=null,this.socket=null,this.listeners.clear()}async ensureConnection(){if(this.socket&&(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING))return await this.connectPromise,this.socket;if(this.socket=new WebSocket(`${to}?token=${encodeURIComponent(this.token)}`),this.socket.addEventListener("message",t=>this.handleMessage(t)),this.socket.addEventListener("close",()=>{this.connectPromise=null,this.socket=null,this.stopHeartbeat()}),this.connectPromise=new Promise((t,u)=>{if(!this.socket){u(new Error("Falha ao criar conexão WebSocket."));return}const n=()=>{r(),this.socket&&this.startHeartbeat(this.socket),t()},i=()=>{var o;r(),this.stopHeartbeat(),(o=this.socket)==null||o.close(),this.socket=null,this.connectPromise=null,u(new Error("Não foi possível abrir conexão com o websocket do UptAIme Assist."))},r=()=>{var o,s;(o=this.socket)==null||o.removeEventListener("open",n),(s=this.socket)==null||s.removeEventListener("error",i)};this.socket.addEventListener("open",n,{once:!0}),this.socket.addEventListener("error",i,{once:!0})}),await this.connectPromise,!this.socket||this.socket.readyState!==WebSocket.OPEN)throw new Error("Conexão WebSocket do UptAIme Assist não está pronta.");return this.socket}startHeartbeat(t){this.stopHeartbeat(),this.heartbeatId=window.setInterval(()=>{t.readyState===WebSocket.OPEN&&t.send(JSON.stringify({action:"ping"}))},uo)}stopHeartbeat(){this.heartbeatId!==null&&(window.clearInterval(this.heartbeatId),this.heartbeatId=null)}async handleMessage(t){const u=await this.readMessage(t.data);let n=null,i=u,r;try{if(n=JSON.parse(u),typeof n=="object"&&n!==null){const o=n.action??n.type??n.event;typeof o=="string"&&(r=o);const s=n.message??n.response??n.text??n.content;typeof s=="string"&&(i=s)}}catch{n=null}this.listeners.forEach(o=>o({text:i,raw:u,data:n,action:r}))}async readMessage(t){return typeof t=="string"?t:t instanceof Blob?t.text():t instanceof ArrayBuffer?new TextDecoder().decode(new Uint8Array(t)):ArrayBuffer.isView(t)?new TextDecoder().decode(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)):String(t??"")}}const an={};function io(e){let t=an[e];if(t)return t;t=an[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);t.push(n)}for(let u=0;u<e.length;u++){const n=e.charCodeAt(u);t[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return t}function Be(e,t){typeof t!="string"&&(t=Be.defaultChars);const u=io(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let i="";for(let r=0,o=n.length;r<o;r+=3){const s=parseInt(n.slice(r+1,r+3),16);if(s<128){i+=u[s];continue}if((s&224)===192&&r+3<o){const a=parseInt(n.slice(r+4,r+6),16);if((a&192)===128){const c=s<<6&1984|a&63;c<128?i+="��":i+=String.fromCharCode(c),r+=3;continue}}if((s&240)===224&&r+6<o){const a=parseInt(n.slice(r+4,r+6),16),c=parseInt(n.slice(r+7,r+9),16);if((a&192)===128&&(c&192)===128){const d=s<<12&61440|a<<6&4032|c&63;d<2048||d>=55296&&d<=57343?i+="���":i+=String.fromCharCode(d),r+=6;continue}}if((s&248)===240&&r+9<o){const a=parseInt(n.slice(r+4,r+6),16),c=parseInt(n.slice(r+7,r+9),16),d=parseInt(n.slice(r+10,r+12),16);if((a&192)===128&&(c&192)===128&&(d&192)===128){let f=s<<18&1835008|a<<12&258048|c<<6&4032|d&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),r+=9;continue}}i+="�"}return i})}Be.defaultChars=";/?:@&=+$,#",Be.componentChars="";const cn={};function ro(e){let t=cn[e];if(t)return t;t=cn[e]=[];for(let u=0;u<128;u++){const n=String.fromCharCode(u);/^[0-9a-z]$/i.test(n)?t.push(n):t.push("%"+("0"+u.toString(16).toUpperCase()).slice(-2))}for(let u=0;u<e.length;u++)t[e.charCodeAt(u)]=e[u];return t}function Ke(e,t,u){typeof t!="string"&&(u=t,t=Ke.defaultChars),typeof u>"u"&&(u=!0);const n=ro(t);let i="";for(let r=0,o=e.length;r<o;r++){const s=e.charCodeAt(r);if(u&&s===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){i+=e.slice(r,r+3),r+=2;continue}if(s<128){i+=n[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&r+1<o){const a=e.charCodeAt(r+1);if(a>=56320&&a<=57343){i+=encodeURIComponent(e[r]+e[r+1]),r++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[r])}return i}Ke.defaultChars=";/?:@&=+$,-_.!~*'()#",Ke.componentChars="-_.!~*'()";function Wt(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function mt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const oo=/^([a-z0-9.+-]+:)/i,so=/:[0-9]*$/,ao=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,co=["<",">",'"',"`"," ","\r",`
`,"	"],lo=["{","}","|","\\","^","`"].concat(co),fo=["'"].concat(lo),ln=["%","/","?",";","#"].concat(fo),dn=["/","?","#"],Ao=255,fn=/^[+a-z0-9A-Z_-]{0,63}$/,ho=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,An={javascript:!0,"javascript:":!0},hn={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Zt(e,t){if(e&&e instanceof mt)return e;const u=new mt;return u.parse(e,t),u}mt.prototype.parse=function(e,t){let u,n,i,r=e;if(r=r.trim(),!t&&e.split("#").length===1){const c=ao.exec(r);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=oo.exec(r);if(o&&(o=o[0],u=o.toLowerCase(),this.protocol=o,r=r.substr(o.length)),(t||o||r.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=r.substr(0,2)==="//",i&&!(o&&An[o])&&(r=r.substr(2),this.slashes=!0)),!An[o]&&(i||o&&!hn[o])){let c=-1;for(let A=0;A<dn.length;A++)n=r.indexOf(dn[A]),n!==-1&&(c===-1||n<c)&&(c=n);let d,f;c===-1?f=r.lastIndexOf("@"):f=r.lastIndexOf("@",c),f!==-1&&(d=r.slice(0,f),r=r.slice(f+1),this.auth=d),c=-1;for(let A=0;A<ln.length;A++)n=r.indexOf(ln[A]),n!==-1&&(c===-1||n<c)&&(c=n);c===-1&&(c=r.length),r[c-1]===":"&&c--;const g=r.slice(0,c);r=r.slice(c),this.parseHost(g),this.hostname=this.hostname||"";const h=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!h){const A=this.hostname.split(/\./);for(let k=0,S=A.length;k<S;k++){const D=A[k];if(D&&!D.match(fn)){let w="";for(let E=0,m=D.length;E<m;E++)D.charCodeAt(E)>127?w+="x":w+=D[E];if(!w.match(fn)){const E=A.slice(0,k),m=A.slice(k+1),y=D.match(ho);y&&(E.push(y[1]),m.unshift(y[2])),m.length&&(r=m.join(".")+r),this.hostname=E.join(".");break}}}}this.hostname.length>Ao&&(this.hostname=""),h&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=r.indexOf("#");s!==-1&&(this.hash=r.substr(s),r=r.slice(0,s));const a=r.indexOf("?");return a!==-1&&(this.search=r.substr(a),r=r.slice(0,a)),r&&(this.pathname=r),hn[u]&&this.hostname&&!this.pathname&&(this.pathname=""),this},mt.prototype.parseHost=function(e){let t=so.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const po=Object.freeze(Object.defineProperty({__proto__:null,decode:Be,encode:Ke,format:Wt,parse:Zt},Symbol.toStringTag,{value:"Module"})),pn=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,gn=/[\0-\x1F\x7F-\x9F]/,go=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Kt=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,bn=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,mn=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,bo=Object.freeze(Object.defineProperty({__proto__:null,Any:pn,Cc:gn,Cf:go,P:Kt,S:bn,Z:mn},Symbol.toStringTag,{value:"Module"})),mo=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),xo=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var $t;const Co=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),vo=($t=String.fromCodePoint)!==null&&$t!==void 0?$t:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function Eo(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Co.get(e))!==null&&t!==void 0?t:e}var N;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(N||(N={}));const wo=32;var ge;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(ge||(ge={}));function eu(e){return e>=N.ZERO&&e<=N.NINE}function yo(e){return e>=N.UPPER_A&&e<=N.UPPER_F||e>=N.LOWER_A&&e<=N.LOWER_F}function ko(e){return e>=N.UPPER_A&&e<=N.UPPER_Z||e>=N.LOWER_A&&e<=N.LOWER_Z||eu(e)}function Io(e){return e===N.EQUALS||ko(e)}var Q;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Q||(Q={}));var be;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(be||(be={}));class So{constructor(t,u,n){this.decodeTree=t,this.emitCodePoint=u,this.errors=n,this.state=Q.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=be.Strict}startEntity(t){this.decodeMode=t,this.state=Q.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,u){switch(this.state){case Q.EntityStart:return t.charCodeAt(u)===N.NUM?(this.state=Q.NumericStart,this.consumed+=1,this.stateNumericStart(t,u+1)):(this.state=Q.NamedEntity,this.stateNamedEntity(t,u));case Q.NumericStart:return this.stateNumericStart(t,u);case Q.NumericDecimal:return this.stateNumericDecimal(t,u);case Q.NumericHex:return this.stateNumericHex(t,u);case Q.NamedEntity:return this.stateNamedEntity(t,u)}}stateNumericStart(t,u){return u>=t.length?-1:(t.charCodeAt(u)|wo)===N.LOWER_X?(this.state=Q.NumericHex,this.consumed+=1,this.stateNumericHex(t,u+1)):(this.state=Q.NumericDecimal,this.stateNumericDecimal(t,u))}addToNumericResult(t,u,n,i){if(u!==n){const r=n-u;this.result=this.result*Math.pow(i,r)+parseInt(t.substr(u,r),i),this.consumed+=r}}stateNumericHex(t,u){const n=u;for(;u<t.length;){const i=t.charCodeAt(u);if(eu(i)||yo(i))u+=1;else return this.addToNumericResult(t,n,u,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,n,u,16),-1}stateNumericDecimal(t,u){const n=u;for(;u<t.length;){const i=t.charCodeAt(u);if(eu(i))u+=1;else return this.addToNumericResult(t,n,u,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,n,u,10),-1}emitNumericEntity(t,u){var n;if(this.consumed<=u)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===N.SEMI)this.consumed+=1;else if(this.decodeMode===be.Strict)return 0;return this.emitCodePoint(Eo(this.result),this.consumed),this.errors&&(t!==N.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,u){const{decodeTree:n}=this;let i=n[this.treeIndex],r=(i&ge.VALUE_LENGTH)>>14;for(;u<t.length;u++,this.excess++){const o=t.charCodeAt(u);if(this.treeIndex=Ro(n,i,this.treeIndex+Math.max(1,r),o),this.treeIndex<0)return this.result===0||this.decodeMode===be.Attribute&&(r===0||Io(o))?0:this.emitNotTerminatedNamedEntity();if(i=n[this.treeIndex],r=(i&ge.VALUE_LENGTH)>>14,r!==0){if(o===N.SEMI)return this.emitNamedEntityData(this.treeIndex,r,this.consumed+this.excess);this.decodeMode!==be.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:u,decodeTree:n}=this,i=(n[u]&ge.VALUE_LENGTH)>>14;return this.emitNamedEntityData(u,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,u,n){const{decodeTree:i}=this;return this.emitCodePoint(u===1?i[t]&~ge.VALUE_LENGTH:i[t+1],n),u===3&&this.emitCodePoint(i[t+2],n),n}end(){var t;switch(this.state){case Q.NamedEntity:return this.result!==0&&(this.decodeMode!==be.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Q.NumericDecimal:return this.emitNumericEntity(0,2);case Q.NumericHex:return this.emitNumericEntity(0,3);case Q.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Q.EntityStart:return 0}}}function xn(e){let t="";const u=new So(e,n=>t+=vo(n));return function(i,r){let o=0,s=0;for(;(s=i.indexOf("&",s))>=0;){t+=i.slice(o,s),u.startEntity(r);const c=u.write(i,s+1);if(c<0){o=s+u.end();break}o=s+c,s=c===0?o+1:o}const a=t+i.slice(o);return t="",a}}function Ro(e,t,u,n){const i=(t&ge.BRANCH_LENGTH)>>7,r=t&ge.JUMP_TABLE;if(i===0)return r!==0&&n===r?u:-1;if(r){const a=n-r;return a<0||a>=i?-1:e[u+a]-1}let o=u,s=o+i-1;for(;o<=s;){const a=o+s>>>1,c=e[a];if(c<n)o=a+1;else if(c>n)s=a-1;else return e[a+i]}return-1}const Do=xn(mo);xn(xo);function Cn(e,t=be.Legacy){return Do(e,t)}function Bo(e){return Object.prototype.toString.call(e)}function tu(e){return Bo(e)==="[object String]"}const Fo=Object.prototype.hasOwnProperty;function To(e,t){return Fo.call(e,t)}function xt(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){if(u){if(typeof u!="object")throw new TypeError(u+"must be object");Object.keys(u).forEach(function(n){e[n]=u[n]})}}),e}function vn(e,t,u){return[].concat(e.slice(0,t),u,e.slice(t+1))}function uu(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Ct(e){if(e>65535){e-=65536;const t=55296+(e>>10),u=56320+(e&1023);return String.fromCharCode(t,u)}return String.fromCharCode(e)}const En=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,_o=/&([a-z#][a-z0-9]{1,31});/gi,Uo=new RegExp(En.source+"|"+_o.source,"gi"),Mo=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Lo(e,t){if(t.charCodeAt(0)===35&&Mo.test(t)){const n=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return uu(n)?Ct(n):e}const u=Cn(e);return u!==e?u:e}function Po(e){return e.indexOf("\\")<0?e:e.replace(En,"$1")}function Fe(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Uo,function(t,u,n){return u||Lo(t,n)})}const Oo=/[&<>"]/,No=/[&<>"]/g,Qo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function zo(e){return Qo[e]}function me(e){return Oo.test(e)?e.replace(No,zo):e}const Ho=/[.?*+^$[\]\\(){}|-]/g;function jo(e){return e.replace(Ho,"\\$&")}function B(e){switch(e){case 9:case 32:return!0}return!1}function $e(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function et(e){return Kt.test(e)||bn.test(e)}function tt(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function vt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const qo=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:vn,assign:xt,escapeHtml:me,escapeRE:jo,fromCodePoint:Ct,has:To,isMdAsciiPunct:tt,isPunctChar:et,isSpace:B,isString:tu,isValidEntityCode:uu,isWhiteSpace:$e,lib:{mdurl:po,ucmicro:bo},normalizeReference:vt,unescapeAll:Fe,unescapeMd:Po},Symbol.toStringTag,{value:"Module"}));function Go(e,t,u){let n,i,r,o;const s=e.posMax,a=e.pos;for(e.pos=t+1,n=1;e.pos<s;){if(r=e.src.charCodeAt(e.pos),r===93&&(n--,n===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),r===91){if(o===e.pos-1)n++;else if(u)return e.pos=a,-1}}let c=-1;return i&&(c=e.pos),e.pos=a,c}function Yo(e,t,u){let n,i=t;const r={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<u;){if(n=e.charCodeAt(i),n===10||n===60)return r;if(n===62)return r.pos=i+1,r.str=Fe(e.slice(t+1,i)),r.ok=!0,r;if(n===92&&i+1<u){i+=2;continue}i++}return r}let o=0;for(;i<u&&(n=e.charCodeAt(i),!(n===32||n<32||n===127));){if(n===92&&i+1<u){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(n===40&&(o++,o>32))return r;if(n===41){if(o===0)break;o--}i++}return t===i||o!==0||(r.str=Fe(e.slice(t,i)),r.pos=i,r.ok=!0),r}function Xo(e,t,u,n){let i,r=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)o.str=n.str,o.marker=n.marker;else{if(r>=u)return o;let s=e.charCodeAt(r);if(s!==34&&s!==39&&s!==40)return o;t++,r++,s===40&&(s=41),o.marker=s}for(;r<u;){if(i=e.charCodeAt(r),i===o.marker)return o.pos=r+1,o.str+=Fe(e.slice(t,r)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&r+1<u&&r++,r++}return o.can_continue=!0,o.str+=Fe(e.slice(t,r)),o}const Vo=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Yo,parseLinkLabel:Go,parseLinkTitle:Xo},Symbol.toStringTag,{value:"Module"})),ue={};ue.code_inline=function(e,t,u,n,i){const r=e[t];return"<code"+i.renderAttrs(r)+">"+me(r.content)+"</code>"},ue.code_block=function(e,t,u,n,i){const r=e[t];return"<pre"+i.renderAttrs(r)+"><code>"+me(e[t].content)+`</code></pre>
`},ue.fence=function(e,t,u,n,i){const r=e[t],o=r.info?Fe(r.info).trim():"";let s="",a="";if(o){const d=o.split(/(\s+)/g);s=d[0],a=d.slice(2).join("")}let c;if(u.highlight?c=u.highlight(r.content,s,a)||me(r.content):c=me(r.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=r.attrIndex("class"),f=r.attrs?r.attrs.slice():[];d<0?f.push(["class",u.langPrefix+s]):(f[d]=f[d].slice(),f[d][1]+=" "+u.langPrefix+s);const g={attrs:f};return`<pre><code${i.renderAttrs(g)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(r)}>${c}</code></pre>
`},ue.image=function(e,t,u,n,i){const r=e[t];return r.attrs[r.attrIndex("alt")][1]=i.renderInlineAsText(r.children,u,n),i.renderToken(e,t,u)},ue.hardbreak=function(e,t,u){return u.xhtmlOut?`<br />
`:`<br>
`},ue.softbreak=function(e,t,u){return u.breaks?u.xhtmlOut?`<br />
`:`<br>
`:`
`},ue.text=function(e,t){return me(e[t].content)},ue.html_block=function(e,t){return e[t].content},ue.html_inline=function(e,t){return e[t].content};function Te(){this.rules=xt({},ue)}Te.prototype.renderAttrs=function(t){let u,n,i;if(!t.attrs)return"";for(i="",u=0,n=t.attrs.length;u<n;u++)i+=" "+me(t.attrs[u][0])+'="'+me(t.attrs[u][1])+'"';return i},Te.prototype.renderToken=function(t,u,n){const i=t[u];let r="";if(i.hidden)return"";i.block&&i.nesting!==-1&&u&&t[u-1].hidden&&(r+=`
`),r+=(i.nesting===-1?"</":"<")+i.tag,r+=this.renderAttrs(i),i.nesting===0&&n.xhtmlOut&&(r+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&u+1<t.length)){const s=t[u+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(o=!1)}return r+=o?`>
`:">",r},Te.prototype.renderInline=function(e,t,u){let n="";const i=this.rules;for(let r=0,o=e.length;r<o;r++){const s=e[r].type;typeof i[s]<"u"?n+=i[s](e,r,t,u,this):n+=this.renderToken(e,r,t)}return n},Te.prototype.renderInlineAsText=function(e,t,u){let n="";for(let i=0,r=e.length;i<r;i++)switch(e[i].type){case"text":n+=e[i].content;break;case"image":n+=this.renderInlineAsText(e[i].children,t,u);break;case"html_inline":case"html_block":n+=e[i].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n},Te.prototype.render=function(e,t,u){let n="";const i=this.rules;for(let r=0,o=e.length;r<o;r++){const s=e[r].type;s==="inline"?n+=this.renderInline(e[r].children,t,u):typeof i[s]<"u"?n+=i[s](e,r,t,u,this):n+=this.renderToken(e,r,t,u)}return n};function V(){this.__rules__=[],this.__cache__=null}V.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},V.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(u){u.enabled&&u.alt.forEach(function(n){t.indexOf(n)<0&&t.push(n)})}),e.__cache__={},t.forEach(function(u){e.__cache__[u]=[],e.__rules__.forEach(function(n){n.enabled&&(u&&n.alt.indexOf(u)<0||e.__cache__[u].push(n.fn))})})},V.prototype.at=function(e,t,u){const n=this.__find__(e),i=u||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=t,this.__rules__[n].alt=i.alt||[],this.__cache__=null},V.prototype.before=function(e,t,u,n){const i=this.__find__(e),r=n||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:u,alt:r.alt||[]}),this.__cache__=null},V.prototype.after=function(e,t,u,n){const i=this.__find__(e),r=n||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:u,alt:r.alt||[]}),this.__cache__=null},V.prototype.push=function(e,t,u){const n=u||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},V.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const i=this.__find__(n);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[i].enabled=!0,u.push(n)},this),this.__cache__=null,u},V.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(u){u.enabled=!1}),this.enable(e,t)},V.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const u=[];return e.forEach(function(n){const i=this.__find__(n);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[i].enabled=!1,u.push(n)},this),this.__cache__=null,u},V.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ee(e,t,u){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=u,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ee.prototype.attrIndex=function(t){if(!this.attrs)return-1;const u=this.attrs;for(let n=0,i=u.length;n<i;n++)if(u[n][0]===t)return n;return-1},ee.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},ee.prototype.attrSet=function(t,u){const n=this.attrIndex(t),i=[t,u];n<0?this.attrPush(i):this.attrs[n]=i},ee.prototype.attrGet=function(t){const u=this.attrIndex(t);let n=null;return u>=0&&(n=this.attrs[u][1]),n},ee.prototype.attrJoin=function(t,u){const n=this.attrIndex(t);n<0?this.attrPush([t,u]):this.attrs[n][1]=this.attrs[n][1]+" "+u};function wn(e,t,u){this.src=e,this.env=u,this.tokens=[],this.inlineMode=!1,this.md=t}wn.prototype.Token=ee;const Jo=/\r\n?|\n/g,Wo=/\0/g;function Zo(e){let t;t=e.src.replace(Jo,`
`),t=t.replace(Wo,"�"),e.src=t}function Ko(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function $o(e){const t=e.tokens;for(let u=0,n=t.length;u<n;u++){const i=t[u];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function es(e){return/^<a[>\s]/i.test(e)}function ts(e){return/^<\/a\s*>/i.test(e)}function us(e){const t=e.tokens;if(e.md.options.linkify)for(let u=0,n=t.length;u<n;u++){if(t[u].type!=="inline"||!e.md.linkify.pretest(t[u].content))continue;let i=t[u].children,r=0;for(let o=i.length-1;o>=0;o--){const s=i[o];if(s.type==="link_close"){for(o--;i[o].level!==s.level&&i[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&(es(s.content)&&r>0&&r--,ts(s.content)&&r++),!(r>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const a=s.content;let c=e.md.linkify.match(a);const d=[];let f=s.level,g=0;c.length>0&&c[0].index===0&&o>0&&i[o-1].type==="text_special"&&(c=c.slice(1));for(let h=0;h<c.length;h++){const A=c[h].url,k=e.md.normalizeLink(A);if(!e.md.validateLink(k))continue;let S=c[h].text;c[h].schema?c[h].schema==="mailto:"&&!/^mailto:/i.test(S)?S=e.md.normalizeLinkText("mailto:"+S).replace(/^mailto:/,""):S=e.md.normalizeLinkText(S):S=e.md.normalizeLinkText("http://"+S).replace(/^http:\/\//,"");const D=c[h].index;if(D>g){const y=new e.Token("text","",0);y.content=a.slice(g,D),y.level=f,d.push(y)}const w=new e.Token("link_open","a",1);w.attrs=[["href",k]],w.level=f++,w.markup="linkify",w.info="auto",d.push(w);const E=new e.Token("text","",0);E.content=S,E.level=f,d.push(E);const m=new e.Token("link_close","a",-1);m.level=--f,m.markup="linkify",m.info="auto",d.push(m),g=c[h].lastIndex}if(g<a.length){const h=new e.Token("text","",0);h.content=a.slice(g),h.level=f,d.push(h)}t[u].children=i=vn(i,o,d)}}}}const yn=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,ns=/\((c|tm|r)\)/i,is=/\((c|tm|r)\)/ig,rs={c:"©",r:"®",tm:"™"};function os(e,t){return rs[t.toLowerCase()]}function ss(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&(n.content=n.content.replace(is,os)),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function as(e){let t=0;for(let u=e.length-1;u>=0;u--){const n=e[u];n.type==="text"&&!t&&yn.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&t--,n.type==="link_close"&&n.info==="auto"&&t++}}function cs(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(ns.test(e.tokens[t].content)&&ss(e.tokens[t].children),yn.test(e.tokens[t].content)&&as(e.tokens[t].children))}const ls=/['"]/,kn=/['"]/g,In="’";function Et(e,t,u){return e.slice(0,t)+u+e.slice(t+1)}function ds(e,t){let u;const n=[];for(let i=0;i<e.length;i++){const r=e[i],o=e[i].level;for(u=n.length-1;u>=0&&!(n[u].level<=o);u--);if(n.length=u+1,r.type!=="text")continue;let s=r.content,a=0,c=s.length;e:for(;a<c;){kn.lastIndex=a;const d=kn.exec(s);if(!d)break;let f=!0,g=!0;a=d.index+1;const h=d[0]==="'";let A=32;if(d.index-1>=0)A=s.charCodeAt(d.index-1);else for(u=i-1;u>=0&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u--)if(e[u].content){A=e[u].content.charCodeAt(e[u].content.length-1);break}let k=32;if(a<c)k=s.charCodeAt(a);else for(u=i+1;u<e.length&&!(e[u].type==="softbreak"||e[u].type==="hardbreak");u++)if(e[u].content){k=e[u].content.charCodeAt(0);break}const S=tt(A)||et(String.fromCharCode(A)),D=tt(k)||et(String.fromCharCode(k)),w=$e(A),E=$e(k);if(E?f=!1:D&&(w||S||(f=!1)),w?g=!1:S&&(E||D||(g=!1)),k===34&&d[0]==='"'&&A>=48&&A<=57&&(g=f=!1),f&&g&&(f=S,g=D),!f&&!g){h&&(r.content=Et(r.content,d.index,In));continue}if(g)for(u=n.length-1;u>=0;u--){let m=n[u];if(n[u].level<o)break;if(m.single===h&&n[u].level===o){m=n[u];let y,R;h?(y=t.md.options.quotes[2],R=t.md.options.quotes[3]):(y=t.md.options.quotes[0],R=t.md.options.quotes[1]),r.content=Et(r.content,d.index,R),e[m.token].content=Et(e[m.token].content,m.pos,y),a+=R.length-1,m.token===i&&(a+=y.length-1),s=r.content,c=s.length,n.length=u;continue e}}f?n.push({token:i,pos:d.index,single:h,level:o}):g&&h&&(r.content=Et(r.content,d.index,In))}}}function fs(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!ls.test(e.tokens[t].content)||ds(e.tokens[t].children,e)}function As(e){let t,u;const n=e.tokens,i=n.length;for(let r=0;r<i;r++){if(n[r].type!=="inline")continue;const o=n[r].children,s=o.length;for(t=0;t<s;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=u=0;t<s;t++)o[t].type==="text"&&t+1<s&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==u&&(o[u]=o[t]),u++);t!==u&&(o.length=u)}}const nu=[["normalize",Zo],["block",Ko],["inline",$o],["linkify",us],["replacements",cs],["smartquotes",fs],["text_join",As]];function iu(){this.ruler=new V;for(let e=0;e<nu.length;e++)this.ruler.push(nu[e][0],nu[e][1])}iu.prototype.process=function(e){const t=this.ruler.getRules("");for(let u=0,n=t.length;u<n;u++)t[u](e)},iu.prototype.State=wn;function ne(e,t,u,n){this.src=e,this.md=t,this.env=u,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let r=0,o=0,s=0,a=0,c=i.length,d=!1;o<c;o++){const f=i.charCodeAt(o);if(!d)if(B(f)){s++,f===9?a+=4-a%4:a++;continue}else d=!0;(f===10||o===c-1)&&(f!==10&&o++,this.bMarks.push(r),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(a),this.bsCount.push(0),d=!1,s=0,a=0,r=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}ne.prototype.push=function(e,t,u){const n=new ee(e,t,u);return n.block=!0,u<0&&this.level--,n.level=this.level,u>0&&this.level++,this.tokens.push(n),n},ne.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]},ne.prototype.skipEmptyLines=function(t){for(let u=this.lineMax;t<u&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t},ne.prototype.skipSpaces=function(t){for(let u=this.src.length;t<u;t++){const n=this.src.charCodeAt(t);if(!B(n))break}return t},ne.prototype.skipSpacesBack=function(t,u){if(t<=u)return t;for(;t>u;)if(!B(this.src.charCodeAt(--t)))return t+1;return t},ne.prototype.skipChars=function(t,u){for(let n=this.src.length;t<n&&this.src.charCodeAt(t)===u;t++);return t},ne.prototype.skipCharsBack=function(t,u,n){if(t<=n)return t;for(;t>n;)if(u!==this.src.charCodeAt(--t))return t+1;return t},ne.prototype.getLines=function(t,u,n,i){if(t>=u)return"";const r=new Array(u-t);for(let o=0,s=t;s<u;s++,o++){let a=0;const c=this.bMarks[s];let d=c,f;for(s+1<u||i?f=this.eMarks[s]+1:f=this.eMarks[s];d<f&&a<n;){const g=this.src.charCodeAt(d);if(B(g))g===9?a+=4-(a+this.bsCount[s])%4:a++;else if(d-c<this.tShift[s])a++;else break;d++}a>n?r[o]=new Array(a-n+1).join(" ")+this.src.slice(d,f):r[o]=this.src.slice(d,f)}return r.join("")},ne.prototype.Token=ee;const hs=65536;function ru(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];return e.src.slice(u,n)}function Sn(e){const t=[],u=e.length;let n=0,i=e.charCodeAt(n),r=!1,o=0,s="";for(;n<u;)i===124&&(r?(s+=e.substring(o,n-1),o=n):(t.push(s+e.substring(o,n)),s="",o=n+1)),r=i===92,n++,i=e.charCodeAt(n);return t.push(s+e.substring(o)),t}function ps(e,t,u,n){if(t+2>u)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let r=e.bMarks[i]+e.tShift[i];if(r>=e.eMarks[i])return!1;const o=e.src.charCodeAt(r++);if(o!==124&&o!==45&&o!==58||r>=e.eMarks[i])return!1;const s=e.src.charCodeAt(r++);if(s!==124&&s!==45&&s!==58&&!B(s)||o===45&&B(s))return!1;for(;r<e.eMarks[i];){const m=e.src.charCodeAt(r);if(m!==124&&m!==45&&m!==58&&!B(m))return!1;r++}let a=ru(e,t+1),c=a.split("|");const d=[];for(let m=0;m<c.length;m++){const y=c[m].trim();if(!y){if(m===0||m===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(y))return!1;y.charCodeAt(y.length-1)===58?d.push(y.charCodeAt(0)===58?"center":"right"):y.charCodeAt(0)===58?d.push("left"):d.push("")}if(a=ru(e,t).trim(),a.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;c=Sn(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const f=c.length;if(f===0||f!==d.length)return!1;if(n)return!0;const g=e.parentType;e.parentType="table";const h=e.md.block.ruler.getRules("blockquote"),A=e.push("table_open","table",1),k=[t,0];A.map=k;const S=e.push("thead_open","thead",1);S.map=[t,t+1];const D=e.push("tr_open","tr",1);D.map=[t,t+1];for(let m=0;m<c.length;m++){const y=e.push("th_open","th",1);d[m]&&(y.attrs=[["style","text-align:"+d[m]]]);const R=e.push("inline","",0);R.content=c[m].trim(),R.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let w,E=0;for(i=t+2;i<u&&!(e.sCount[i]<e.blkIndent);i++){let m=!1;for(let R=0,L=h.length;R<L;R++)if(h[R](e,i,u,!0)){m=!0;break}if(m||(a=ru(e,i).trim(),!a)||e.sCount[i]-e.blkIndent>=4||(c=Sn(a),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),E+=f-c.length,E>hs))break;if(i===t+2){const R=e.push("tbody_open","tbody",1);R.map=w=[t+2,0]}const y=e.push("tr_open","tr",1);y.map=[i,i+1];for(let R=0;R<f;R++){const L=e.push("td_open","td",1);d[R]&&(L.attrs=[["style","text-align:"+d[R]]]);const Z=e.push("inline","",0);Z.content=c[R]?c[R].trim():"",Z.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return w&&(e.push("tbody_close","tbody",-1),w[1]=i),e.push("table_close","table",-1),k[1]=i,e.parentType=g,e.line=i,!0}function gs(e,t,u){if(e.sCount[t]-e.blkIndent<4)return!1;let n=t+1,i=n;for(;n<u;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,i=n;continue}break}e.line=i;const r=e.push("code_block","code",0);return r.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,r.map=[t,e.line],!0}function bs(e,t,u,n){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>r)return!1;const o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let a=i-s;if(a<3)return!1;const c=e.src.slice(s,i),d=e.src.slice(i,r);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let f=t,g=!1;for(;f++,!(f>=u||(i=s=e.bMarks[f]+e.tShift[f],r=e.eMarks[f],i<r&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<a)&&(i=e.skipSpaces(i),!(i<r)))){g=!0;break}a=e.sCount[t],e.line=f+(g?1:0);const h=e.push("fence","code",0);return h.info=d,h.content=e.getLines(t+1,f,a,!0),h.markup=c,h.map=[t,e.line],!0}function ms(e,t,u,n){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(n)return!0;const s=[],a=[],c=[],d=[],f=e.md.block.ruler.getRules("blockquote"),g=e.parentType;e.parentType="blockquote";let h=!1,A;for(A=t;A<u;A++){const E=e.sCount[A]<e.blkIndent;if(i=e.bMarks[A]+e.tShift[A],r=e.eMarks[A],i>=r)break;if(e.src.charCodeAt(i++)===62&&!E){let y=e.sCount[A]+1,R,L;e.src.charCodeAt(i)===32?(i++,y++,L=!1,R=!0):e.src.charCodeAt(i)===9?(R=!0,(e.bsCount[A]+y)%4===3?(i++,y++,L=!1):L=!0):R=!1;let Z=y;for(s.push(e.bMarks[A]),e.bMarks[A]=i;i<r;){const se=e.src.charCodeAt(i);if(B(se))se===9?Z+=4-(Z+e.bsCount[A]+(L?1:0))%4:Z++;else break;i++}h=i>=r,a.push(e.bsCount[A]),e.bsCount[A]=e.sCount[A]+1+(R?1:0),c.push(e.sCount[A]),e.sCount[A]=Z-y,d.push(e.tShift[A]),e.tShift[A]=i-e.bMarks[A];continue}if(h)break;let m=!1;for(let y=0,R=f.length;y<R;y++)if(f[y](e,A,u,!0)){m=!0;break}if(m){e.lineMax=A,e.blkIndent!==0&&(s.push(e.bMarks[A]),a.push(e.bsCount[A]),d.push(e.tShift[A]),c.push(e.sCount[A]),e.sCount[A]-=e.blkIndent);break}s.push(e.bMarks[A]),a.push(e.bsCount[A]),d.push(e.tShift[A]),c.push(e.sCount[A]),e.sCount[A]=-1}const k=e.blkIndent;e.blkIndent=0;const S=e.push("blockquote_open","blockquote",1);S.markup=">";const D=[t,0];S.map=D,e.md.block.tokenize(e,t,A);const w=e.push("blockquote_close","blockquote",-1);w.markup=">",e.lineMax=o,e.parentType=g,D[1]=e.line;for(let E=0;E<d.length;E++)e.bMarks[E+t]=s[E],e.tShift[E+t]=d[E],e.sCount[E+t]=c[E],e.bsCount[E+t]=a[E];return e.blkIndent=k,!0}function xs(e,t,u,n){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let r=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;r<i;){const c=e.src.charCodeAt(r++);if(c!==o&&!B(c))return!1;c===o&&s++}if(s<3)return!1;if(n)return!0;e.line=t+1;const a=e.push("hr","hr",0);return a.map=[t,e.line],a.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Rn(e,t){const u=e.eMarks[t];let n=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(n++);if(i!==42&&i!==45&&i!==43)return-1;if(n<u){const r=e.src.charCodeAt(n);if(!B(r))return-1}return n}function Dn(e,t){const u=e.bMarks[t]+e.tShift[t],n=e.eMarks[t];let i=u;if(i+1>=n)return-1;let r=e.src.charCodeAt(i++);if(r<48||r>57)return-1;for(;;){if(i>=n)return-1;if(r=e.src.charCodeAt(i++),r>=48&&r<=57){if(i-u>=10)return-1;continue}if(r===41||r===46)break;return-1}return i<n&&(r=e.src.charCodeAt(i),!B(r))?-1:i}function Cs(e,t){const u=e.level+2;for(let n=t+2,i=e.tokens.length-2;n<i;n++)e.tokens[n].level===u&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function vs(e,t,u,n){let i,r,o,s,a=t,c=!0;if(e.sCount[a]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[a]-e.listIndent>=4&&e.sCount[a]<e.blkIndent)return!1;let d=!1;n&&e.parentType==="paragraph"&&e.sCount[a]>=e.blkIndent&&(d=!0);let f,g,h;if((h=Dn(e,a))>=0){if(f=!0,o=e.bMarks[a]+e.tShift[a],g=Number(e.src.slice(o,h-1)),d&&g!==1)return!1}else if((h=Rn(e,a))>=0)f=!1;else return!1;if(d&&e.skipSpaces(h)>=e.eMarks[a])return!1;if(n)return!0;const A=e.src.charCodeAt(h-1),k=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),g!==1&&(s.attrs=[["start",g]])):s=e.push("bullet_list_open","ul",1);const S=[a,0];s.map=S,s.markup=String.fromCharCode(A);let D=!1;const w=e.md.block.ruler.getRules("list"),E=e.parentType;for(e.parentType="list";a<u;){r=h,i=e.eMarks[a];const m=e.sCount[a]+h-(e.bMarks[a]+e.tShift[a]);let y=m;for(;r<i;){const Ce=e.src.charCodeAt(r);if(Ce===9)y+=4-(y+e.bsCount[a])%4;else if(Ce===32)y++;else break;r++}const R=r;let L;R>=i?L=1:L=y-m,L>4&&(L=1);const Z=m+L;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(A);const se=[a,0];s.map=se,f&&(s.info=e.src.slice(o,h-1));const ke=e.tight,P=e.tShift[a],lt=e.sCount[a],dt=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=Z,e.tight=!0,e.tShift[a]=R-e.bMarks[a],e.sCount[a]=y,R>=i&&e.isEmpty(a+1)?e.line=Math.min(e.line+2,u):e.md.block.tokenize(e,a,u,!0),(!e.tight||D)&&(c=!1),D=e.line-a>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=dt,e.tShift[a]=P,e.sCount[a]=lt,e.tight=ke,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(A),a=e.line,se[1]=a,a>=u||e.sCount[a]<e.blkIndent||e.sCount[a]-e.blkIndent>=4)break;let Me=!1;for(let Ce=0,ku=w.length;Ce<ku;Ce++)if(w[Ce](e,a,u,!0)){Me=!0;break}if(Me)break;if(f){if(h=Dn(e,a),h<0)break;o=e.bMarks[a]+e.tShift[a]}else if(h=Rn(e,a),h<0)break;if(A!==e.src.charCodeAt(h-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(A),S[1]=a,e.line=a,e.parentType=E,c&&Cs(e,k),!0}function Es(e,t,u,n){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(w){const E=e.lineMax;if(w>=E||e.isEmpty(w))return null;let m=!1;if(e.sCount[w]-e.blkIndent>3&&(m=!0),e.sCount[w]<0&&(m=!0),!m){const L=e.md.block.ruler.getRules("reference"),Z=e.parentType;e.parentType="reference";let se=!1;for(let ke=0,P=L.length;ke<P;ke++)if(L[ke](e,w,E,!0)){se=!0;break}if(e.parentType=Z,se)return null}const y=e.bMarks[w]+e.tShift[w],R=e.eMarks[w];return e.src.slice(y,R+1)}let a=e.src.slice(i,r+1);r=a.length;let c=-1;for(i=1;i<r;i++){const w=a.charCodeAt(i);if(w===91)return!1;if(w===93){c=i;break}else if(w===10){const E=s(o);E!==null&&(a+=E,r=a.length,o++)}else if(w===92&&(i++,i<r&&a.charCodeAt(i)===10)){const E=s(o);E!==null&&(a+=E,r=a.length,o++)}}if(c<0||a.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<r;i++){const w=a.charCodeAt(i);if(w===10){const E=s(o);E!==null&&(a+=E,r=a.length,o++)}else if(!B(w))break}const d=e.md.helpers.parseLinkDestination(a,i,r);if(!d.ok)return!1;const f=e.md.normalizeLink(d.str);if(!e.md.validateLink(f))return!1;i=d.pos;const g=i,h=o,A=i;for(;i<r;i++){const w=a.charCodeAt(i);if(w===10){const E=s(o);E!==null&&(a+=E,r=a.length,o++)}else if(!B(w))break}let k=e.md.helpers.parseLinkTitle(a,i,r);for(;k.can_continue;){const w=s(o);if(w===null)break;a+=w,i=r,r=a.length,o++,k=e.md.helpers.parseLinkTitle(a,i,r,k)}let S;for(i<r&&A!==i&&k.ok?(S=k.str,i=k.pos):(S="",i=g,o=h);i<r;){const w=a.charCodeAt(i);if(!B(w))break;i++}if(i<r&&a.charCodeAt(i)!==10&&S)for(S="",i=g,o=h;i<r;){const w=a.charCodeAt(i);if(!B(w))break;i++}if(i<r&&a.charCodeAt(i)!==10)return!1;const D=vt(a.slice(1,c));return D?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[D]>"u"&&(e.env.references[D]={title:S,href:f}),e.line=o),!0):!1}const ws=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ys="[a-zA-Z_:][a-zA-Z0-9:._-]*",ks="(?:"+"[^\"'=<>`\\x00-\\x20]+"+"|"+"'[^']*'"+"|"+'"[^"]*"'+")",Bn="<[A-Za-z][A-Za-z0-9\\-]*"+("(?:\\s+"+ys+"(?:\\s*=\\s*"+ks+")?)")+"*\\s*\\/?>",Fn="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Is="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Ss="<[?][\\s\\S]*?[?]>",Rs="<![A-Za-z][^>]*>",Ds="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Bs=new RegExp("^(?:"+Bn+"|"+Fn+"|"+Is+"|"+Ss+"|"+Rs+"|"+Ds+")"),Fs=new RegExp("^(?:"+Bn+"|"+Fn+")"),_e=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+ws.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Fs.source+"\\s*$"),/^$/,!1]];function Ts(e,t,u,n){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,r),s=0;for(;s<_e.length&&!_e[s][0].test(o);s++);if(s===_e.length)return!1;if(n)return _e[s][2];let a=t+1;if(!_e[s][1].test(o)){for(;a<u&&!(e.sCount[a]<e.blkIndent);a++)if(i=e.bMarks[a]+e.tShift[a],r=e.eMarks[a],o=e.src.slice(i,r),_e[s][1].test(o)){o.length!==0&&a++;break}}e.line=a;const c=e.push("html_block","",0);return c.map=[t,a],c.content=e.getLines(t,a,e.blkIndent,!0),!0}function _s(e,t,u,n){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=r)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<r&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<r&&!B(o))return!1;if(n)return!0;r=e.skipSpacesBack(r,i);const a=e.skipCharsBack(r,35,i);a>i&&B(e.src.charCodeAt(a-1))&&(r=a),e.line=t+1;const c=e.push("heading_open","h"+String(s),1);c.markup="########".slice(0,s),c.map=[t,e.line];const d=e.push("inline","",0);d.content=e.src.slice(i,r).trim(),d.map=[t,e.line],d.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function Us(e,t,u){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let r=0,o,s=t+1;for(;s<u&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let h=e.bMarks[s]+e.tShift[s];const A=e.eMarks[s];if(h<A&&(o=e.src.charCodeAt(h),(o===45||o===61)&&(h=e.skipChars(h,o),h=e.skipSpaces(h),h>=A))){r=o===61?1:2;break}}if(e.sCount[s]<0)continue;let g=!1;for(let h=0,A=n.length;h<A;h++)if(n[h](e,s,u,!0)){g=!0;break}if(g)break}if(!r)return!1;const a=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;const c=e.push("heading_open","h"+String(r),1);c.markup=String.fromCharCode(o),c.map=[t,e.line];const d=e.push("inline","",0);d.content=a,d.map=[t,e.line-1],d.children=[];const f=e.push("heading_close","h"+String(r),-1);return f.markup=String.fromCharCode(o),e.parentType=i,!0}function Ms(e,t,u){const n=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let r=t+1;for(e.parentType="paragraph";r<u&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3||e.sCount[r]<0)continue;let c=!1;for(let d=0,f=n.length;d<f;d++)if(n[d](e,r,u,!0)){c=!0;break}if(c)break}const o=e.getLines(t,r,e.blkIndent,!1).trim();e.line=r;const s=e.push("paragraph_open","p",1);s.map=[t,e.line];const a=e.push("inline","",0);return a.content=o,a.map=[t,e.line],a.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const wt=[["table",ps,["paragraph","reference"]],["code",gs],["fence",bs,["paragraph","reference","blockquote","list"]],["blockquote",ms,["paragraph","reference","blockquote","list"]],["hr",xs,["paragraph","reference","blockquote","list"]],["list",vs,["paragraph","reference","blockquote"]],["reference",Es],["html_block",Ts,["paragraph","reference","blockquote"]],["heading",_s,["paragraph","reference","blockquote"]],["lheading",Us],["paragraph",Ms]];function yt(){this.ruler=new V;for(let e=0;e<wt.length;e++)this.ruler.push(wt[e][0],wt[e][1],{alt:(wt[e][2]||[]).slice()})}yt.prototype.tokenize=function(e,t,u){const n=this.ruler.getRules(""),i=n.length,r=e.md.options.maxNesting;let o=t,s=!1;for(;o<u&&(e.line=o=e.skipEmptyLines(o),!(o>=u||e.sCount[o]<e.blkIndent));){if(e.level>=r){e.line=u;break}const a=e.line;let c=!1;for(let d=0;d<i;d++)if(c=n[d](e,o,u,!1),c){if(a>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<u&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},yt.prototype.parse=function(e,t,u,n){if(!e)return;const i=new this.State(e,t,u,n);this.tokenize(i,i.line,i.lineMax)},yt.prototype.State=ne;function ut(e,t,u,n){this.src=e,this.env=u,this.md=t,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ut.prototype.pushPending=function(){const e=new ee("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},ut.prototype.push=function(e,t,u){this.pending&&this.pushPending();const n=new ee(e,t,u);let i=null;return u<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,u>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(i),n},ut.prototype.scanDelims=function(e,t){const u=this.posMax,n=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let r=e;for(;r<u&&this.src.charCodeAt(r)===n;)r++;const o=r-e,s=r<u?this.src.charCodeAt(r):32,a=tt(i)||et(String.fromCharCode(i)),c=tt(s)||et(String.fromCharCode(s)),d=$e(i),f=$e(s),g=!f&&(!c||d||a),h=!d&&(!a||f||c);return{can_open:g&&(t||!h||a),can_close:h&&(t||!g||c),length:o}},ut.prototype.Token=ee;function Ls(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Ps(e,t){let u=e.pos;for(;u<e.posMax&&!Ls(e.src.charCodeAt(u));)u++;return u===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,u)),e.pos=u,!0)}const Os=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Ns(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const u=e.pos,n=e.posMax;if(u+3>n||e.src.charCodeAt(u)!==58||e.src.charCodeAt(u+1)!==47||e.src.charCodeAt(u+2)!==47)return!1;const i=e.pending.match(Os);if(!i)return!1;const r=i[1],o=e.md.linkify.matchAtStart(e.src.slice(u-r.length));if(!o)return!1;let s=o.url;if(s.length<=r.length)return!1;s=s.replace(/\*+$/,"");const a=e.md.normalizeLink(s);if(!e.md.validateLink(a))return!1;if(!t){e.pending=e.pending.slice(0,-r.length);const c=e.push("link_open","a",1);c.attrs=[["href",a]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-r.length,!0}function Qs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==10)return!1;const n=e.pending.length-1,i=e.posMax;if(!t)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let r=n-1;for(;r>=1&&e.pending.charCodeAt(r-1)===32;)r--;e.pending=e.pending.slice(0,r),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(u++;u<i&&B(e.src.charCodeAt(u));)u++;return e.pos=u,!0}const ou=[];for(let e=0;e<256;e++)ou.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ou[e.charCodeAt(0)]=1});function zs(e,t){let u=e.pos;const n=e.posMax;if(e.src.charCodeAt(u)!==92||(u++,u>=n))return!1;let i=e.src.charCodeAt(u);if(i===10){for(t||e.push("hardbreak","br",0),u++;u<n&&(i=e.src.charCodeAt(u),!!B(i));)u++;return e.pos=u,!0}let r=e.src[u];if(i>=55296&&i<=56319&&u+1<n){const s=e.src.charCodeAt(u+1);s>=56320&&s<=57343&&(r+=e.src[u+1],u++)}const o="\\"+r;if(!t){const s=e.push("text_special","",0);i<256&&ou[i]!==0?s.content=r:s.content=o,s.markup=o,s.info="escape"}return e.pos=u+1,!0}function Hs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==96)return!1;const i=u;u++;const r=e.posMax;for(;u<r&&e.src.charCodeAt(u)===96;)u++;const o=e.src.slice(i,u),s=o.length;if(e.backticksScanned&&(e.backticks[s]||0)<=i)return t||(e.pending+=o),e.pos+=s,!0;let a=u,c;for(;(c=e.src.indexOf("`",a))!==-1;){for(a=c+1;a<r&&e.src.charCodeAt(a)===96;)a++;const d=a-c;if(d===s){if(!t){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(u,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=a,!0}e.backticks[d]=c}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=s,!0}function js(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==126)return!1;const i=e.scanDelims(e.pos,!0);let r=i.length;const o=String.fromCharCode(n);if(r<2)return!1;let s;r%2&&(s=e.push("text","",0),s.content=o,r--);for(let a=0;a<r;a+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Tn(e,t){let u;const n=[],i=t.length;for(let r=0;r<i;r++){const o=t[r];if(o.marker!==126||o.end===-1)continue;const s=t[o.end];u=e.tokens[o.token],u.type="s_open",u.tag="s",u.nesting=1,u.markup="~~",u.content="",u=e.tokens[s.token],u.type="s_close",u.tag="s",u.nesting=-1,u.markup="~~",u.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&n.push(s.token-1)}for(;n.length;){const r=n.pop();let o=r+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,r!==o&&(u=e.tokens[o],e.tokens[o]=e.tokens[r],e.tokens[r]=u)}}function qs(e){const t=e.tokens_meta,u=e.tokens_meta.length;Tn(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Tn(e,t[n].delimiters)}const _n={tokenize:js,postProcess:qs};function Gs(e,t){const u=e.pos,n=e.src.charCodeAt(u);if(t||n!==95&&n!==42)return!1;const i=e.scanDelims(e.pos,n===42);for(let r=0;r<i.length;r++){const o=e.push("text","",0);o.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function Un(e,t){const u=t.length;for(let n=u-1;n>=0;n--){const i=t[n];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const r=t[i.end],o=n>0&&t[n-1].end===i.end+1&&t[n-1].marker===i.marker&&t[n-1].token===i.token-1&&t[i.end+1].token===r.token+1,s=String.fromCharCode(i.marker),a=e.tokens[i.token];a.type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?s+s:s,a.content="";const c=e.tokens[r.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?s+s:s,c.content="",o&&(e.tokens[t[n-1].token].content="",e.tokens[t[i.end+1].token].content="",n--)}}function Ys(e){const t=e.tokens_meta,u=e.tokens_meta.length;Un(e,e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Un(e,t[n].delimiters)}const Mn={tokenize:Gs,postProcess:Ys};function Xs(e,t){let u,n,i,r,o="",s="",a=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const d=e.pos,f=e.posMax,g=e.pos+1,h=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(h<0)return!1;let A=h+1;if(A<f&&e.src.charCodeAt(A)===40){for(c=!1,A++;A<f&&(u=e.src.charCodeAt(A),!(!B(u)&&u!==10));A++);if(A>=f)return!1;if(a=A,i=e.md.helpers.parseLinkDestination(e.src,A,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?A=i.pos:o="",a=A;A<f&&(u=e.src.charCodeAt(A),!(!B(u)&&u!==10));A++);if(i=e.md.helpers.parseLinkTitle(e.src,A,e.posMax),A<f&&a!==A&&i.ok)for(s=i.str,A=i.pos;A<f&&(u=e.src.charCodeAt(A),!(!B(u)&&u!==10));A++);}(A>=f||e.src.charCodeAt(A)!==41)&&(c=!0),A++}if(c){if(typeof e.env.references>"u")return!1;if(A<f&&e.src.charCodeAt(A)===91?(a=A+1,A=e.md.helpers.parseLinkLabel(e,A),A>=0?n=e.src.slice(a,A++):A=h+1):A=h+1,n||(n=e.src.slice(g,h)),r=e.env.references[vt(n)],!r)return e.pos=d,!1;o=r.href,s=r.title}if(!t){e.pos=g,e.posMax=h;const k=e.push("link_open","a",1),S=[["href",o]];k.attrs=S,s&&S.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=A,e.posMax=f,!0}function Vs(e,t){let u,n,i,r,o,s,a,c,d="";const f=e.pos,g=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const h=e.pos+2,A=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(A<0)return!1;if(r=A+1,r<g&&e.src.charCodeAt(r)===40){for(r++;r<g&&(u=e.src.charCodeAt(r),!(!B(u)&&u!==10));r++);if(r>=g)return!1;for(c=r,s=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),s.ok&&(d=e.md.normalizeLink(s.str),e.md.validateLink(d)?r=s.pos:d=""),c=r;r<g&&(u=e.src.charCodeAt(r),!(!B(u)&&u!==10));r++);if(s=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<g&&c!==r&&s.ok)for(a=s.str,r=s.pos;r<g&&(u=e.src.charCodeAt(r),!(!B(u)&&u!==10));r++);else a="";if(r>=g||e.src.charCodeAt(r)!==41)return e.pos=f,!1;r++}else{if(typeof e.env.references>"u")return!1;if(r<g&&e.src.charCodeAt(r)===91?(c=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0?i=e.src.slice(c,r++):r=A+1):r=A+1,i||(i=e.src.slice(h,A)),o=e.env.references[vt(i)],!o)return e.pos=f,!1;d=o.href,a=o.title}if(!t){n=e.src.slice(h,A);const k=[];e.md.inline.parse(n,e.md,e.env,k);const S=e.push("image","img",0),D=[["src",d],["alt",""]];S.attrs=D,S.children=k,S.content=n,a&&D.push(["title",a])}return e.pos=r,e.posMax=g,!0}const Js=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,Ws=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function Zs(e,t){let u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;const n=e.pos,i=e.posMax;for(;;){if(++u>=i)return!1;const o=e.src.charCodeAt(u);if(o===60)return!1;if(o===62)break}const r=e.src.slice(n+1,u);if(Ws.test(r)){const o=e.md.normalizeLink(r);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(r);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=r.length+2,!0}if(Js.test(r)){const o=e.md.normalizeLink("mailto:"+r);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(r);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=r.length+2,!0}return!1}function Ks(e){return/^<a[>\s]/i.test(e)}function $s(e){return/^<\/a\s*>/i.test(e)}function ea(e){const t=e|32;return t>=97&&t<=122}function ta(e,t){if(!e.md.options.html)return!1;const u=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=u)return!1;const i=e.src.charCodeAt(n+1);if(i!==33&&i!==63&&i!==47&&!ea(i))return!1;const r=e.src.slice(n).match(Bs);if(!r)return!1;if(!t){const o=e.push("html_inline","",0);o.content=r[0],Ks(o.content)&&e.linkLevel++,$s(o.content)&&e.linkLevel--}return e.pos+=r[0].length,!0}const ua=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,na=/^&([a-z][a-z0-9]{1,31});/i;function ia(e,t){const u=e.pos,n=e.posMax;if(e.src.charCodeAt(u)!==38||u+1>=n)return!1;if(e.src.charCodeAt(u+1)===35){const r=e.src.slice(u).match(ua);if(r){if(!t){const o=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),s=e.push("text_special","",0);s.content=uu(o)?Ct(o):Ct(65533),s.markup=r[0],s.info="entity"}return e.pos+=r[0].length,!0}}else{const r=e.src.slice(u).match(na);if(r){const o=Cn(r[0]);if(o!==r[0]){if(!t){const s=e.push("text_special","",0);s.content=o,s.markup=r[0],s.info="entity"}return e.pos+=r[0].length,!0}}}return!1}function Ln(e){const t={},u=e.length;if(!u)return;let n=0,i=-2;const r=[];for(let o=0;o<u;o++){const s=e[o];if(r.push(0),(e[n].marker!==s.marker||i!==s.token-1)&&(n=o),i=s.token,s.length=s.length||0,!s.close)continue;t.hasOwnProperty(s.marker)||(t[s.marker]=[-1,-1,-1,-1,-1,-1]);const a=t[s.marker][(s.open?3:0)+s.length%3];let c=n-r[n]-1,d=c;for(;c>a;c-=r[c]+1){const f=e[c];if(f.marker===s.marker&&f.open&&f.end<0){let g=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(g=!0),!g){const h=c>0&&!e[c-1].open?r[c-1]+1:0;r[o]=o-c+h,r[c]=h,s.open=!1,f.end=o,f.close=!1,d=-1,i=-2;break}}}d!==-1&&(t[s.marker][(s.open?3:0)+(s.length||0)%3]=d)}}function ra(e){const t=e.tokens_meta,u=e.tokens_meta.length;Ln(e.delimiters);for(let n=0;n<u;n++)t[n]&&t[n].delimiters&&Ln(t[n].delimiters)}function oa(e){let t,u,n=0;const i=e.tokens,r=e.tokens.length;for(t=u=0;t<r;t++)i[t].nesting<0&&n--,i[t].level=n,i[t].nesting>0&&n++,i[t].type==="text"&&t+1<r&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==u&&(i[u]=i[t]),u++);t!==u&&(i.length=u)}const su=[["text",Ps],["linkify",Ns],["newline",Qs],["escape",zs],["backticks",Hs],["strikethrough",_n.tokenize],["emphasis",Mn.tokenize],["link",Xs],["image",Vs],["autolink",Zs],["html_inline",ta],["entity",ia]],au=[["balance_pairs",ra],["strikethrough",_n.postProcess],["emphasis",Mn.postProcess],["fragments_join",oa]];function nt(){this.ruler=new V;for(let e=0;e<su.length;e++)this.ruler.push(su[e][0],su[e][1]);this.ruler2=new V;for(let e=0;e<au.length;e++)this.ruler2.push(au[e][0],au[e][1])}nt.prototype.skipToken=function(e){const t=e.pos,u=this.ruler.getRules(""),n=u.length,i=e.md.options.maxNesting,r=e.cache;if(typeof r[t]<"u"){e.pos=r[t];return}let o=!1;if(e.level<i){for(let s=0;s<n;s++)if(e.level++,o=u[s](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,r[t]=e.pos},nt.prototype.tokenize=function(e){const t=this.ruler.getRules(""),u=t.length,n=e.posMax,i=e.md.options.maxNesting;for(;e.pos<n;){const r=e.pos;let o=!1;if(e.level<i){for(let s=0;s<u;s++)if(o=t[s](e,!1),o){if(r>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},nt.prototype.parse=function(e,t,u,n){const i=new this.State(e,t,u,n);this.tokenize(i);const r=this.ruler2.getRules(""),o=r.length;for(let s=0;s<o;s++)r[s](i)},nt.prototype.State=ut;function sa(e){const t={};e=e||{},t.src_Any=pn.source,t.src_Cc=gn.source,t.src_Z=mn.source,t.src_P=Kt.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const u="[><｜]";return t.src_pseudo_letter="(?:(?!"+u+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+u+"|"+t.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+u+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+u+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}function cu(e){return Array.prototype.slice.call(arguments,1).forEach(function(u){u&&Object.keys(u).forEach(function(n){e[n]=u[n]})}),e}function kt(e){return Object.prototype.toString.call(e)}function aa(e){return kt(e)==="[object String]"}function ca(e){return kt(e)==="[object Object]"}function la(e){return kt(e)==="[object RegExp]"}function Pn(e){return kt(e)==="[object Function]"}function da(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const On={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function fa(e){return Object.keys(e||{}).reduce(function(t,u){return t||On.hasOwnProperty(u)},!1)}const Aa={"http:":{validate:function(e,t,u){const n=e.slice(t);return u.re.http||(u.re.http=new RegExp("^\\/\\/"+u.re.src_auth+u.re.src_host_port_strict+u.re.src_path,"i")),u.re.http.test(n)?n.match(u.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,u){const n=e.slice(t);return u.re.no_http||(u.re.no_http=new RegExp("^"+u.re.src_auth+"(?:localhost|(?:(?:"+u.re.src_domain+")\\.)+"+u.re.src_domain_root+")"+u.re.src_port+u.re.src_host_terminator+u.re.src_path,"i")),u.re.no_http.test(n)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:n.match(u.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,u){const n=e.slice(t);return u.re.mailto||(u.re.mailto=new RegExp("^"+u.re.src_email_name+"@"+u.re.src_host_strict,"i")),u.re.mailto.test(n)?n.match(u.re.mailto)[0].length:0}}},ha="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",pa="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ga(e){e.__index__=-1,e.__text_cache__=""}function ba(e){return function(t,u){const n=t.slice(u);return e.test(n)?n.match(e)[0].length:0}}function Nn(){return function(e,t){t.normalize(e)}}function It(e){const t=e.re=sa(e.__opts__),u=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||u.push(ha),u.push(t.src_xn),t.src_tlds=u.join("|");function n(s){return s.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(n(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(n(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(n(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(n(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function r(s,a){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+a)}Object.keys(e.__schemas__).forEach(function(s){const a=e.__schemas__[s];if(a===null)return;const c={validate:null,link:null};if(e.__compiled__[s]=c,ca(a)){la(a.validate)?c.validate=ba(a.validate):Pn(a.validate)?c.validate=a.validate:r(s,a),Pn(a.normalize)?c.normalize=a.normalize:a.normalize?r(s,a):c.normalize=Nn();return}if(aa(a)){i.push(s);return}r(s,a)}),i.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Nn()};const o=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(da).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),ga(e)}function ma(e,t){const u=e.__index__,n=e.__last_index__,i=e.__text_cache__.slice(u,n);this.schema=e.__schema__.toLowerCase(),this.index=u+t,this.lastIndex=n+t,this.raw=i,this.text=i,this.url=i}function lu(e,t){const u=new ma(e,t);return e.__compiled__[u.schema].normalize(u,e),u}function W(e,t){if(!(this instanceof W))return new W(e,t);t||fa(e)&&(t=e,e={}),this.__opts__=cu({},On,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=cu({},Aa,e),this.__compiled__={},this.__tlds__=pa,this.__tlds_replaced__=!1,this.re={},It(this)}W.prototype.add=function(t,u){return this.__schemas__[t]=u,It(this),this},W.prototype.set=function(t){return this.__opts__=cu(this.__opts__,t),this},W.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;let u,n,i,r,o,s,a,c,d;if(this.re.schema_test.test(t)){for(a=this.re.schema_search,a.lastIndex=0;(u=a.exec(t))!==null;)if(r=this.testSchemaAt(t,u[2],a.lastIndex),r){this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+r;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=t.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=t.indexOf("@"),d>=0&&(i=t.match(this.re.email_fuzzy))!==null&&(o=i.index+i[1].length,s=i.index+i[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0},W.prototype.pretest=function(t){return this.re.pretest.test(t)},W.prototype.testSchemaAt=function(t,u,n){return this.__compiled__[u.toLowerCase()]?this.__compiled__[u.toLowerCase()].validate(t,n,this):0},W.prototype.match=function(t){const u=[];let n=0;this.__index__>=0&&this.__text_cache__===t&&(u.push(lu(this,n)),n=this.__last_index__);let i=n?t.slice(n):t;for(;this.test(i);)u.push(lu(this,n)),i=i.slice(this.__last_index__),n+=this.__last_index__;return u.length?u:null},W.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;const u=this.re.schema_at_start.exec(t);if(!u)return null;const n=this.testSchemaAt(t,u[2],u[0].length);return n?(this.__schema__=u[2],this.__index__=u.index+u[1].length,this.__last_index__=u.index+u[0].length+n,lu(this,0)):null},W.prototype.tlds=function(t,u){return t=Array.isArray(t)?t:[t],u?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(n,i,r){return n!==r[i-1]}).reverse(),It(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,It(this),this)},W.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)},W.prototype.onCompile=function(){};const Ue=2147483647,ie=36,du=1,it=26,xa=38,Ca=700,Qn=72,zn=128,Hn="-",va=/^xn--/,Ea=/[^\0-\x7F]/,wa=/[\x2E\u3002\uFF0E\uFF61]/g,ya={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},fu=ie-du,re=Math.floor,Au=String.fromCharCode;function xe(e){throw new RangeError(ya[e])}function ka(e,t){const u=[];let n=e.length;for(;n--;)u[n]=t(e[n]);return u}function jn(e,t){const u=e.split("@");let n="";u.length>1&&(n=u[0]+"@",e=u[1]),e=e.replace(wa,".");const i=e.split("."),r=ka(i,t).join(".");return n+r}function qn(e){const t=[];let u=0;const n=e.length;for(;u<n;){const i=e.charCodeAt(u++);if(i>=55296&&i<=56319&&u<n){const r=e.charCodeAt(u++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),u--)}else t.push(i)}return t}const Ia=e=>String.fromCodePoint(...e),Sa=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ie},Gn=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Yn=function(e,t,u){let n=0;for(e=u?re(e/Ca):e>>1,e+=re(e/t);e>fu*it>>1;n+=ie)e=re(e/fu);return re(n+(fu+1)*e/(e+xa))},Xn=function(e){const t=[],u=e.length;let n=0,i=zn,r=Qn,o=e.lastIndexOf(Hn);o<0&&(o=0);for(let s=0;s<o;++s)e.charCodeAt(s)>=128&&xe("not-basic"),t.push(e.charCodeAt(s));for(let s=o>0?o+1:0;s<u;){const a=n;for(let d=1,f=ie;;f+=ie){s>=u&&xe("invalid-input");const g=Sa(e.charCodeAt(s++));g>=ie&&xe("invalid-input"),g>re((Ue-n)/d)&&xe("overflow"),n+=g*d;const h=f<=r?du:f>=r+it?it:f-r;if(g<h)break;const A=ie-h;d>re(Ue/A)&&xe("overflow"),d*=A}const c=t.length+1;r=Yn(n-a,c,a==0),re(n/c)>Ue-i&&xe("overflow"),i+=re(n/c),n%=c,t.splice(n++,0,i)}return String.fromCodePoint(...t)},Vn=function(e){const t=[];e=qn(e);const u=e.length;let n=zn,i=0,r=Qn;for(const a of e)a<128&&t.push(Au(a));const o=t.length;let s=o;for(o&&t.push(Hn);s<u;){let a=Ue;for(const d of e)d>=n&&d<a&&(a=d);const c=s+1;a-n>re((Ue-i)/c)&&xe("overflow"),i+=(a-n)*c,n=a;for(const d of e)if(d<n&&++i>Ue&&xe("overflow"),d===n){let f=i;for(let g=ie;;g+=ie){const h=g<=r?du:g>=r+it?it:g-r;if(f<h)break;const A=f-h,k=ie-h;t.push(Au(Gn(h+A%k,0))),f=re(A/k)}t.push(Au(Gn(f,0))),r=Yn(i,c,s===o),i=0,++s}++i,++n}return t.join("")},Jn={version:"2.3.1",ucs2:{decode:qn,encode:Ia},decode:Xn,encode:Vn,toASCII:function(e){return jn(e,function(t){return Ea.test(t)?"xn--"+Vn(t):t})},toUnicode:function(e){return jn(e,function(t){return va.test(t)?Xn(t.slice(4).toLowerCase()):t})}},Ra={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},Da=/^(vbscript|javascript|file|data):/,Ba=/^data:image\/(gif|png|jpeg|webp);/;function Fa(e){const t=e.trim().toLowerCase();return Da.test(t)?Ba.test(t):!0}const Wn=["http:","https:","mailto:"];function Ta(e){const t=Zt(e,!0);if(t.hostname&&(!t.protocol||Wn.indexOf(t.protocol)>=0))try{t.hostname=Jn.toASCII(t.hostname)}catch{}return Ke(Wt(t))}function _a(e){const t=Zt(e,!0);if(t.hostname&&(!t.protocol||Wn.indexOf(t.protocol)>=0))try{t.hostname=Jn.toUnicode(t.hostname)}catch{}return Be(Wt(t),Be.defaultChars+"%")}function K(e,t){if(!(this instanceof K))return new K(e,t);t||tu(e)||(t=e||{},e="default"),this.inline=new nt,this.block=new yt,this.core=new iu,this.renderer=new Te,this.linkify=new W,this.validateLink=Fa,this.normalizeLink=Ta,this.normalizeLinkText=_a,this.utils=qo,this.helpers=xt({},Vo),this.options={},this.configure(e),t&&this.set(t)}K.prototype.set=function(e){return xt(this.options,e),this},K.prototype.configure=function(e){const t=this;if(tu(e)){const u=e;if(e=Ra[u],!e)throw new Error('Wrong `markdown-it` preset "'+u+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(u){e.components[u].rules&&t[u].ruler.enableOnly(e.components[u].rules),e.components[u].rules2&&t[u].ruler2.enableOnly(e.components[u].rules2)}),this},K.prototype.enable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.enable(e,!0))},this),u=u.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(i){return u.indexOf(i)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},K.prototype.disable=function(e,t){let u=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){u=u.concat(this[i].ruler.disable(e,!0))},this),u=u.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(i){return u.indexOf(i)<0});if(n.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},K.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},K.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const u=new this.core.State(e,this,t);return this.core.process(u),u.tokens},K.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},K.prototype.parseInline=function(e,t){const u=new this.core.State(e,this,t);return u.inlineMode=!0,this.core.process(u),u.tokens},K.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hu=!0,Zn=!1,Kn=!1,Ma=function(e,t){t&&(hu=!t.enabled,Zn=!!t.label,Kn=!!t.labelAfter),e.core.ruler.after("inline","github-task-lists",function(u){for(var n=u.tokens,i=2;i<n.length;i++)Pa(n,i)&&(Oa(n[i],u.Token),$n(n[i-2],"class","task-list-item"+(hu?"":" enabled")),$n(n[La(n,i-2)],"class","contains-task-list"))})};function $n(e,t,u){var n=e.attrIndex(t),i=[t,u];n<0?e.attrPush(i):e.attrs[n]=i}function La(e,t){for(var u=e[t].level-1,n=t-1;n>=0;n--)if(e[n].level===u)return n;return-1}function Pa(e,t){return ja(e[t])&&qa(e[t-1])&&Ga(e[t-2])&&Ya(e[t])}function Oa(e,t){if(e.children.unshift(Na(e,t)),e.children[1].content=e.children[1].content.slice(3),e.content=e.content.slice(3),Zn)if(Kn){e.children.pop();var u="task-item-"+Math.ceil(Math.random()*(1e4*1e3)-1e3);e.children[0].content=e.children[0].content.slice(0,-1)+' id="'+u+'">',e.children.push(Ha(e.content,u,t))}else e.children.unshift(Qa(t)),e.children.push(za(t))}function Na(e,t){var u=new t("html_inline","",0),n=hu?' disabled="" ':"";return e.content.indexOf("[ ] ")===0?u.content='<input class="task-list-item-checkbox"'+n+'type="checkbox">':(e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0)&&(u.content='<input class="task-list-item-checkbox" checked=""'+n+'type="checkbox">'),u}function Qa(e){var t=new e("html_inline","",0);return t.content="<label>",t}function za(e){var t=new e("html_inline","",0);return t.content="</label>",t}function Ha(e,t,u){var n=new u("html_inline","",0);return n.content='<label class="task-list-item-label" for="'+t+'">'+e+"</label>",n.attrs=[{for:t}],n}function ja(e){return e.type==="inline"}function qa(e){return e.type==="paragraph_open"}function Ga(e){return e.type==="list_item_open"}function Ya(e){return e.content.indexOf("[ ] ")===0||e.content.indexOf("[x] ")===0||e.content.indexOf("[X] ")===0}const Xa=Ua(Ma);/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:ei,setPrototypeOf:ti,isFrozen:Va,getPrototypeOf:Ja,getOwnPropertyDescriptor:Wa}=Object;let{freeze:G,seal:$,create:pu}=Object,{apply:gu,construct:bu}=typeof Reflect<"u"&&Reflect;G||(G=function(t){return t}),$||($=function(t){return t}),gu||(gu=function(t,u){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return t.apply(u,i)}),bu||(bu=function(t){for(var u=arguments.length,n=new Array(u>1?u-1:0),i=1;i<u;i++)n[i-1]=arguments[i];return new t(...n)});const St=X(Array.prototype.forEach),Za=X(Array.prototype.lastIndexOf),ui=X(Array.prototype.pop),rt=X(Array.prototype.push),Ka=X(Array.prototype.splice),Rt=X(String.prototype.toLowerCase),mu=X(String.prototype.toString),xu=X(String.prototype.match),ot=X(String.prototype.replace),$a=X(String.prototype.indexOf),ec=X(String.prototype.trim),te=X(Object.prototype.hasOwnProperty),Y=X(RegExp.prototype.test),st=tc(TypeError);function X(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var u=arguments.length,n=new Array(u>1?u-1:0),i=1;i<u;i++)n[i-1]=arguments[i];return gu(e,t,n)}}function tc(e){return function(){for(var t=arguments.length,u=new Array(t),n=0;n<t;n++)u[n]=arguments[n];return bu(e,u)}}function I(e,t){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rt;ti&&ti(e,null);let n=t.length;for(;n--;){let i=t[n];if(typeof i=="string"){const r=u(i);r!==i&&(Va(t)||(t[n]=r),i=r)}e[i]=!0}return e}function uc(e){for(let t=0;t<e.length;t++)te(e,t)||(e[t]=null);return e}function oe(e){const t=pu(null);for(const[u,n]of ei(e))te(e,u)&&(Array.isArray(n)?t[u]=uc(n):n&&typeof n=="object"&&n.constructor===Object?t[u]=oe(n):t[u]=n);return t}function at(e,t){for(;e!==null;){const n=Wa(e,t);if(n){if(n.get)return X(n.get);if(typeof n.value=="function")return X(n.value)}e=Ja(e)}function u(){return null}return u}const ni=G(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Cu=G(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),vu=G(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nc=G(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Eu=G(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ic=G(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ii=G(["#text"]),ri=G(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),wu=G(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),oi=G(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Dt=G(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),rc=$(/\{\{[\w\W]*|[\w\W]*\}\}/gm),oc=$(/<%[\w\W]*|[\w\W]*%>/gm),sc=$(/\$\{[\w\W]*/gm),ac=$(/^data-[\-\w.\u00B7-\uFFFF]+$/),cc=$(/^aria-[\-\w]+$/),si=$(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),lc=$(/^(?:\w+script|data):/i),dc=$(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ai=$(/^html$/i),fc=$(/^[a-z][.\w]*(-[.\w]+)+$/i);var ci=Object.freeze({__proto__:null,ARIA_ATTR:cc,ATTR_WHITESPACE:dc,CUSTOM_ELEMENT:fc,DATA_ATTR:ac,DOCTYPE_NAME:ai,ERB_EXPR:oc,IS_ALLOWED_URI:si,IS_SCRIPT_OR_DATA:lc,MUSTACHE_EXPR:rc,TMPLIT_EXPR:sc});const ct={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ac=function(){return typeof window>"u"?null:window},hc=function(t,u){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";u&&u.hasAttribute(i)&&(n=u.getAttribute(i));const r="dompurify"+(n?"#"+n:"");try{return t.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},li=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function di(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ac();const t=v=>di(v);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==ct.document||!e.Element)return t.isSupported=!1,t;let{document:u}=e;const n=u,i=n.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:s,Element:a,NodeFilter:c,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:g,trustedTypes:h}=e,A=a.prototype,k=at(A,"cloneNode"),S=at(A,"remove"),D=at(A,"nextSibling"),w=at(A,"childNodes"),E=at(A,"parentNode");if(typeof o=="function"){const v=u.createElement("template");v.content&&v.content.ownerDocument&&(u=v.content.ownerDocument)}let m,y="";const{implementation:R,createNodeIterator:L,createDocumentFragment:Z,getElementsByTagName:se}=u,{importNode:ke}=n;let P=li();t.isSupported=typeof ei=="function"&&typeof E=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:lt,ERB_EXPR:dt,TMPLIT_EXPR:Me,DATA_ATTR:Ce,ARIA_ATTR:ku,IS_SCRIPT_OR_DATA:yc,ATTR_WHITESPACE:Ci,CUSTOM_ELEMENT:kc}=ci;let{IS_ALLOWED_URI:vi}=ci,z=null;const Ei=I({},[...ni,...Cu,...vu,...Eu,...ii]);let H=null;const wi=I({},[...ri,...wu,...oi,...Dt]);let T=Object.seal(pu(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,Iu=null;const Le=Object.seal(pu(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let yi=!0,Su=!0,ki=!1,Ii=!0,Pe=!1,Ft=!0,Ie=!1,Ru=!1,Du=!1,Oe=!1,Tt=!1,_t=!1,Si=!0,Ri=!1;const Ic="user-content-";let Bu=!0,At=!1,Ne={},ae=null;const Fu=I({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Di=null;const Bi=I({},["audio","video","img","source","image","track"]);let Tu=null;const Fi=I({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ut="http://www.w3.org/1998/Math/MathML",Mt="http://www.w3.org/2000/svg",de="http://www.w3.org/1999/xhtml";let Qe=de,_u=!1,Uu=null;const Sc=I({},[Ut,Mt,de],mu);let Lt=I({},["mi","mo","mn","ms","mtext"]),Pt=I({},["annotation-xml"]);const Rc=I({},["title","style","font","a","script"]);let ht=null;const Dc=["application/xhtml+xml","text/html"],Bc="text/html";let O=null,ze=null;const Fc=u.createElement("form"),Ti=function(l){return l instanceof RegExp||l instanceof Function},Mu=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ze&&ze===l)){if((!l||typeof l!="object")&&(l={}),l=oe(l),ht=Dc.indexOf(l.PARSER_MEDIA_TYPE)===-1?Bc:l.PARSER_MEDIA_TYPE,O=ht==="application/xhtml+xml"?mu:Rt,z=te(l,"ALLOWED_TAGS")?I({},l.ALLOWED_TAGS,O):Ei,H=te(l,"ALLOWED_ATTR")?I({},l.ALLOWED_ATTR,O):wi,Uu=te(l,"ALLOWED_NAMESPACES")?I({},l.ALLOWED_NAMESPACES,mu):Sc,Tu=te(l,"ADD_URI_SAFE_ATTR")?I(oe(Fi),l.ADD_URI_SAFE_ATTR,O):Fi,Di=te(l,"ADD_DATA_URI_TAGS")?I(oe(Bi),l.ADD_DATA_URI_TAGS,O):Bi,ae=te(l,"FORBID_CONTENTS")?I({},l.FORBID_CONTENTS,O):Fu,ft=te(l,"FORBID_TAGS")?I({},l.FORBID_TAGS,O):oe({}),Iu=te(l,"FORBID_ATTR")?I({},l.FORBID_ATTR,O):oe({}),Ne=te(l,"USE_PROFILES")?l.USE_PROFILES:!1,yi=l.ALLOW_ARIA_ATTR!==!1,Su=l.ALLOW_DATA_ATTR!==!1,ki=l.ALLOW_UNKNOWN_PROTOCOLS||!1,Ii=l.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Pe=l.SAFE_FOR_TEMPLATES||!1,Ft=l.SAFE_FOR_XML!==!1,Ie=l.WHOLE_DOCUMENT||!1,Oe=l.RETURN_DOM||!1,Tt=l.RETURN_DOM_FRAGMENT||!1,_t=l.RETURN_TRUSTED_TYPE||!1,Du=l.FORCE_BODY||!1,Si=l.SANITIZE_DOM!==!1,Ri=l.SANITIZE_NAMED_PROPS||!1,Bu=l.KEEP_CONTENT!==!1,At=l.IN_PLACE||!1,vi=l.ALLOWED_URI_REGEXP||si,Qe=l.NAMESPACE||de,Lt=l.MATHML_TEXT_INTEGRATION_POINTS||Lt,Pt=l.HTML_INTEGRATION_POINTS||Pt,T=l.CUSTOM_ELEMENT_HANDLING||{},l.CUSTOM_ELEMENT_HANDLING&&Ti(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(T.tagNameCheck=l.CUSTOM_ELEMENT_HANDLING.tagNameCheck),l.CUSTOM_ELEMENT_HANDLING&&Ti(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(T.attributeNameCheck=l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),l.CUSTOM_ELEMENT_HANDLING&&typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(T.allowCustomizedBuiltInElements=l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Su=!1),Tt&&(Oe=!0),Ne&&(z=I({},ii),H=[],Ne.html===!0&&(I(z,ni),I(H,ri)),Ne.svg===!0&&(I(z,Cu),I(H,wu),I(H,Dt)),Ne.svgFilters===!0&&(I(z,vu),I(H,wu),I(H,Dt)),Ne.mathMl===!0&&(I(z,Eu),I(H,oi),I(H,Dt))),l.ADD_TAGS&&(typeof l.ADD_TAGS=="function"?Le.tagCheck=l.ADD_TAGS:(z===Ei&&(z=oe(z)),I(z,l.ADD_TAGS,O))),l.ADD_ATTR&&(typeof l.ADD_ATTR=="function"?Le.attributeCheck=l.ADD_ATTR:(H===wi&&(H=oe(H)),I(H,l.ADD_ATTR,O))),l.ADD_URI_SAFE_ATTR&&I(Tu,l.ADD_URI_SAFE_ATTR,O),l.FORBID_CONTENTS&&(ae===Fu&&(ae=oe(ae)),I(ae,l.FORBID_CONTENTS,O)),l.ADD_FORBID_CONTENTS&&(ae===Fu&&(ae=oe(ae)),I(ae,l.ADD_FORBID_CONTENTS,O)),Bu&&(z["#text"]=!0),Ie&&I(z,["html","head","body"]),z.table&&(I(z,["tbody"]),delete ft.tbody),l.TRUSTED_TYPES_POLICY){if(typeof l.TRUSTED_TYPES_POLICY.createHTML!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof l.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw st('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=l.TRUSTED_TYPES_POLICY,y=m.createHTML("")}else m===void 0&&(m=hc(h,i)),m!==null&&typeof y=="string"&&(y=m.createHTML(""));G&&G(l),ze=l}},_i=I({},[...Cu,...vu,...nc]),Ui=I({},[...Eu,...ic]),Tc=function(l){let b=E(l);(!b||!b.tagName)&&(b={namespaceURI:Qe,tagName:"template"});const x=Rt(l.tagName),F=Rt(b.tagName);return Uu[l.namespaceURI]?l.namespaceURI===Mt?b.namespaceURI===de?x==="svg":b.namespaceURI===Ut?x==="svg"&&(F==="annotation-xml"||Lt[F]):!!_i[x]:l.namespaceURI===Ut?b.namespaceURI===de?x==="math":b.namespaceURI===Mt?x==="math"&&Pt[F]:!!Ui[x]:l.namespaceURI===de?b.namespaceURI===Mt&&!Pt[F]||b.namespaceURI===Ut&&!Lt[F]?!1:!Ui[x]&&(Rc[x]||!_i[x]):!!(ht==="application/xhtml+xml"&&Uu[l.namespaceURI]):!1},ce=function(l){rt(t.removed,{element:l});try{E(l).removeChild(l)}catch{S(l)}},Se=function(l,b){try{rt(t.removed,{attribute:b.getAttributeNode(l),from:b})}catch{rt(t.removed,{attribute:null,from:b})}if(b.removeAttribute(l),l==="is")if(Oe||Tt)try{ce(b)}catch{}else try{b.setAttribute(l,"")}catch{}},Mi=function(l){let b=null,x=null;if(Du)l="<remove></remove>"+l;else{const U=xu(l,/^[\r\n\t ]+/);x=U&&U[0]}ht==="application/xhtml+xml"&&Qe===de&&(l='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+l+"</body></html>");const F=m?m.createHTML(l):l;if(Qe===de)try{b=new g().parseFromString(F,ht)}catch{}if(!b||!b.documentElement){b=R.createDocument(Qe,"template",null);try{b.documentElement.innerHTML=_u?y:F}catch{}}const q=b.body||b.documentElement;return l&&x&&q.insertBefore(u.createTextNode(x),q.childNodes[0]||null),Qe===de?se.call(b,Ie?"html":"body")[0]:Ie?b.documentElement:q},Li=function(l){return L.call(l.ownerDocument||l,l,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Lu=function(l){return l instanceof f&&(typeof l.nodeName!="string"||typeof l.textContent!="string"||typeof l.removeChild!="function"||!(l.attributes instanceof d)||typeof l.removeAttribute!="function"||typeof l.setAttribute!="function"||typeof l.namespaceURI!="string"||typeof l.insertBefore!="function"||typeof l.hasChildNodes!="function")},Pi=function(l){return typeof s=="function"&&l instanceof s};function fe(v,l,b){St(v,x=>{x.call(t,l,b,ze)})}const Oi=function(l){let b=null;if(fe(P.beforeSanitizeElements,l,null),Lu(l))return ce(l),!0;const x=O(l.nodeName);if(fe(P.uponSanitizeElement,l,{tagName:x,allowedTags:z}),Ft&&l.hasChildNodes()&&!Pi(l.firstElementChild)&&Y(/<[/\w!]/g,l.innerHTML)&&Y(/<[/\w!]/g,l.textContent)||l.nodeType===ct.progressingInstruction||Ft&&l.nodeType===ct.comment&&Y(/<[/\w]/g,l.data))return ce(l),!0;if(!(Le.tagCheck instanceof Function&&Le.tagCheck(x))&&(!z[x]||ft[x])){if(!ft[x]&&Qi(x)&&(T.tagNameCheck instanceof RegExp&&Y(T.tagNameCheck,x)||T.tagNameCheck instanceof Function&&T.tagNameCheck(x)))return!1;if(Bu&&!ae[x]){const F=E(l)||l.parentNode,q=w(l)||l.childNodes;if(q&&F){const U=q.length;for(let J=U-1;J>=0;--J){const Ae=k(q[J],!0);Ae.__removalCount=(l.__removalCount||0)+1,F.insertBefore(Ae,D(l))}}}return ce(l),!0}return l instanceof a&&!Tc(l)||(x==="noscript"||x==="noembed"||x==="noframes")&&Y(/<\/no(script|embed|frames)/i,l.innerHTML)?(ce(l),!0):(Pe&&l.nodeType===ct.text&&(b=l.textContent,St([lt,dt,Me],F=>{b=ot(b,F," ")}),l.textContent!==b&&(rt(t.removed,{element:l.cloneNode()}),l.textContent=b)),fe(P.afterSanitizeElements,l,null),!1)},Ni=function(l,b,x){if(Si&&(b==="id"||b==="name")&&(x in u||x in Fc))return!1;if(!(Su&&!Iu[b]&&Y(Ce,b))){if(!(yi&&Y(ku,b))){if(!(Le.attributeCheck instanceof Function&&Le.attributeCheck(b,l))){if(!H[b]||Iu[b]){if(!(Qi(l)&&(T.tagNameCheck instanceof RegExp&&Y(T.tagNameCheck,l)||T.tagNameCheck instanceof Function&&T.tagNameCheck(l))&&(T.attributeNameCheck instanceof RegExp&&Y(T.attributeNameCheck,b)||T.attributeNameCheck instanceof Function&&T.attributeNameCheck(b,l))||b==="is"&&T.allowCustomizedBuiltInElements&&(T.tagNameCheck instanceof RegExp&&Y(T.tagNameCheck,x)||T.tagNameCheck instanceof Function&&T.tagNameCheck(x))))return!1}else if(!Tu[b]){if(!Y(vi,ot(x,Ci,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&l!=="script"&&$a(x,"data:")===0&&Di[l])){if(!(ki&&!Y(yc,ot(x,Ci,"")))){if(x)return!1}}}}}}}return!0},Qi=function(l){return l!=="annotation-xml"&&xu(l,kc)},zi=function(l){fe(P.beforeSanitizeAttributes,l,null);const{attributes:b}=l;if(!b||Lu(l))return;const x={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H,forceKeepAttr:void 0};let F=b.length;for(;F--;){const q=b[F],{name:U,namespaceURI:J,value:Ae}=q,He=O(U),Pu=Ae;let j=U==="value"?Pu:ec(Pu);if(x.attrName=He,x.attrValue=j,x.keepAttr=!0,x.forceKeepAttr=void 0,fe(P.uponSanitizeAttribute,l,x),j=x.attrValue,Ri&&(He==="id"||He==="name")&&(Se(U,l),j=Ic+j),Ft&&Y(/((--!?|])>)|<\/(style|title|textarea)/i,j)){Se(U,l);continue}if(He==="attributename"&&xu(j,"href")){Se(U,l);continue}if(x.forceKeepAttr)continue;if(!x.keepAttr){Se(U,l);continue}if(!Ii&&Y(/\/>/i,j)){Se(U,l);continue}Pe&&St([lt,dt,Me],ji=>{j=ot(j,ji," ")});const Hi=O(l.nodeName);if(!Ni(Hi,He,j)){Se(U,l);continue}if(m&&typeof h=="object"&&typeof h.getAttributeType=="function"&&!J)switch(h.getAttributeType(Hi,He)){case"TrustedHTML":{j=m.createHTML(j);break}case"TrustedScriptURL":{j=m.createScriptURL(j);break}}if(j!==Pu)try{J?l.setAttributeNS(J,U,j):l.setAttribute(U,j),Lu(l)?ce(l):ui(t.removed)}catch{Se(U,l)}}fe(P.afterSanitizeAttributes,l,null)},_c=function v(l){let b=null;const x=Li(l);for(fe(P.beforeSanitizeShadowDOM,l,null);b=x.nextNode();)fe(P.uponSanitizeShadowNode,b,null),Oi(b),zi(b),b.content instanceof r&&v(b.content);fe(P.afterSanitizeShadowDOM,l,null)};return t.sanitize=function(v){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,x=null,F=null,q=null;if(_u=!v,_u&&(v="<!-->"),typeof v!="string"&&!Pi(v))if(typeof v.toString=="function"){if(v=v.toString(),typeof v!="string")throw st("dirty is not a string, aborting")}else throw st("toString is not a function");if(!t.isSupported)return v;if(Ru||Mu(l),t.removed=[],typeof v=="string"&&(At=!1),At){if(v.nodeName){const Ae=O(v.nodeName);if(!z[Ae]||ft[Ae])throw st("root node is forbidden and cannot be sanitized in-place")}}else if(v instanceof s)b=Mi("<!---->"),x=b.ownerDocument.importNode(v,!0),x.nodeType===ct.element&&x.nodeName==="BODY"||x.nodeName==="HTML"?b=x:b.appendChild(x);else{if(!Oe&&!Pe&&!Ie&&v.indexOf("<")===-1)return m&&_t?m.createHTML(v):v;if(b=Mi(v),!b)return Oe?null:_t?y:""}b&&Du&&ce(b.firstChild);const U=Li(At?v:b);for(;F=U.nextNode();)Oi(F),zi(F),F.content instanceof r&&_c(F.content);if(At)return v;if(Oe){if(Tt)for(q=Z.call(b.ownerDocument);b.firstChild;)q.appendChild(b.firstChild);else q=b;return(H.shadowroot||H.shadowrootmode)&&(q=ke.call(n,q,!0)),q}let J=Ie?b.outerHTML:b.innerHTML;return Ie&&z["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&Y(ai,b.ownerDocument.doctype.name)&&(J="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+J),Pe&&St([lt,dt,Me],Ae=>{J=ot(J,Ae," ")}),m&&_t?m.createHTML(J):J},t.setConfig=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mu(v),Ru=!0},t.clearConfig=function(){ze=null,Ru=!1},t.isValidAttribute=function(v,l,b){ze||Mu({});const x=O(v),F=O(l);return Ni(x,F,b)},t.addHook=function(v,l){typeof l=="function"&&rt(P[v],l)},t.removeHook=function(v,l){if(l!==void 0){const b=Za(P[v],l);return b===-1?void 0:Ka(P[v],b,1)[0]}return ui(P[v])},t.removeHooks=function(v){P[v]=[]},t.removeAllHooks=function(){P=li()},t}var pc=di();const gc="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Em qual assunto posso ajudar você hoje?",fi=e=>`Certo! Reuni abaixo as principais dúvidas sobre ${e}. Escolha uma delas ou faça sua pergunta.`,bc="https://consultant-api.latam-sandbox.rio.cloud/consultant/api/v1";async function mc(){try{const e=await fetch(`${bc}/branches`,{headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Erro ao buscar branches do consultor: ${e.status}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Formato inesperado da API de branches do consultor.");return t.map((n,i)=>xc(n,i)).filter(n=>!!n).sort((n,i)=>{const r=(n.order??0)-(i.order??0);return r!==0?r:n.label.localeCompare(i.label)})}catch(e){return console.error("[ConsultantAgent] Falha ao carregar branches da API.",e),[]}}function xc(e,t){if(!e||typeof e!="object")return null;const u=e;if(!(u.active!==!1))return null;const i=typeof u.branchId=="string"?u.branchId:"",r=typeof u.label=="string"?u.label:"";if(!i||!r)return null;const s=(Array.isArray(u.questions)?u.questions:[]).map(a=>Cc(a)).filter(a=>!!a);return{id:typeof u.id=="string"&&u.id?u.id:i,branchId:i,label:r,businessObjective:typeof u.businessObjective=="string"?u.businessObjective:void 0,order:typeof u.order=="number"?u.order:typeof u.order=="string"?Number(u.order):t+1,active:!0,questions:s}}function Cc(e){if(!e||typeof e!="object")return null;const t=e;if(!(t.active!==!1))return null;const n=typeof t.questionId=="string"?t.questionId:"",i=typeof t.prompt=="string"?t.prompt:"";return!n||!i?null:{questionId:n,prompt:i,level:typeof t.level=="string"?t.level:void 0,levelLabel:typeof t.levelLabel=="string"?t.levelLabel:void 0,expectedResponse:typeof t.expectedResponse=="string"?t.expectedResponse:void 0,order:typeof t.order=="number"?t.order:typeof t.order=="string"?Number(t.order):void 0,active:!0}}const Ai=3,vc=10*1024*1024,hi={text:["txt","doc","docx"],sheet:["xls","xlsx","csv"],pdf:["pdf"],image:["jpg","jpeg","png"],audio:["wav","mp3","m4a","ogg","webm"]},pi={text:"Documento de Texto",sheet:"Planilha",pdf:"Documento PDF",image:"Imagem",audio:"Mensagem de audio"},Ec="Consulte o UptAIme Agent",gi="Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",Bt=class Bt extends Ze{constructor(){super(...arguments),this.open=!1,this.message="",this.selectedFiles=[],this.attachmentError="",this.isRecording=!1,this.isRecordingPaused=!1,this.voiceAttachmentId=null,this.voiceTranscript="",this.voiceCancelDialogOpen=!1,this.voiceCancelDialogMode="cancel",this.speechRecognitionAvailable=!1,this.titleText="UptAIme Assist",this.buttonLabel="Uptaime Assist",this.floatingButtonIconUrl="",this.floatingButtonLabelIconUrl="",this.floatingButtonBackgroundIconUrl="",this.placeholder="Pergunte alguma coisa",this.accentColor="#B23672",this.floatingButtonOffset=32,this.apiBaseUrl="",this.rioToken="",this.suggestionsSource="",this.randomizedSuggestions=[],this.messages=[],this.isLoading=!1,this.errorMessage="",this.showConversations=!1,this.conversationSearch="",this.conversationMenuId=null,this.conversationMenuPlacement="below",this.isFullscreen=!1,this.showNewConversationShortcut=!1,this.conversationScrollbar={height:0,top:0,visible:!1},this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.deleteConversationTarget=null,this.renameConversationTarget=null,this.shortAnswerEnabled=!0,this.newConversationConfirmOpen=!1,this.conversationActionError=null,this.loadingLabelInternal="UptAIme Assist está respondendo...",this.loadingTimerSlow=null,this.loadingTimerTimeout=null,this.refreshConversationsAfterResponse=!1,this.activeConversationTitle=null,this.headerActions=[],this.homeUrl="",this.consultantAgentVisible=!1,this.consultantAgentIntro=gc,this.consultantAgentButtonText=Ec,this.showConsultantAgentButton=!0,this.consultantAgentInitialMessage=gi,this.autoStartConsultantFlow=!1,this.consultantAgentOptions=[],this.showSuggestions=!0,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.activeConsultantPromptId=null,this.consultantAgentStage="idle",this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantPromptId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.pendingConversationAction=null,this.voiceRecorder=null,this.voiceRecordingStream=null,this.voiceRecordingChunks=[],this.speechRecognizer=null,this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.pendingVoiceRemovalId=null,this.microphonePermissionGranted=!1,this.conversationScrollbarRaf=null,this.rioClient=null,this.rioUnsubscribe=null,this.loadingTimer=null,this.copiedMessageId=null,this.messageReactions={},this.copiedMessageTimer=null,this.pendingResponseTo=null,this.currentConversationId=null,this.conversationCounter=0,this.conversationUserId=null,this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null,this.floatingButtonDragState=null,this.floatingButtonDragged=!1,this.suppressFloatingButtonClick=!1,this.markdownRenderer=new K({html:!1,linkify:!0,breaks:!0}).use(Xa),this.conversations=[]}get loadingLabel(){return this.loadingLabelInternal}inferUserIdFromToken(){const t=this.rioToken.trim();if(!t||!t.includes("."))return null;const[,u]=t.split(".");try{const n=JSON.parse(atob(u.replace(/-/g,"+").replace(/_/g,"/"))),i=(n==null?void 0:n.userId)??(n==null?void 0:n.user_id)??(n==null?void 0:n.sub)??(n==null?void 0:n.id)??(n==null?void 0:n.email)??(n==null?void 0:n.username);if(i&&typeof i=="string")return i.replace(/[^a-zA-Z0-9_:-]/g,"")}catch{return null}return null}repairConversationId(t){if(!t||t.includes(":"))return t;const u=t.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);if(!u||u.index===void 0)return t;const n=u[0],i=t.slice(0,u.index).replace(/[-:]?$/,""),r=t.slice(u.index+n.length);return`${i?`${i}:`:""}${n}${r}`}randomId(t){const u="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let i=0;i<t;i+=1)n+=u.charAt(Math.floor(Math.random()*u.length));return n}getFileExtension(t){const u=t.split(".");return u.length<2?"":u[u.length-1].toLowerCase()}resolveAttachmentKind(t){const u=t.toLowerCase(),n=Object.entries(hi);for(const[i,r]of n)if(r.includes(u))return i;return null}buildAttachmentItem(t){if(t.size>vc)return{error:`O arquivo ${t.name} excede 10 MB.`};const u=this.getFileExtension(t.name),n=this.resolveAttachmentKind(u);return n?{item:{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():this.randomId(12),file:t,name:t.name,typeLabel:pi[n],kind:n,previewUrl:n==="image"?URL.createObjectURL(t):void 0}}:{error:`Formato nao suportado: ${t.name}.`}}clamp(t,u,n){return Math.min(Math.max(t,u),n)}get suggestions(){return this.randomizedSuggestions}parseSuggestions(t){return t?t.split("|").map(u=>u.trim()).filter(Boolean):[]}pickRandomSuggestions(t,u){if(t.length<=u)return[...t];const n=[...t];for(let i=n.length-1;i>0;i-=1){const r=Math.floor(Math.random()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n.slice(0,u)}willUpdate(t){super.willUpdate(t),t.has("suggestionsSource")&&(this.randomizedSuggestions=this.pickRandomSuggestions(this.parseSuggestions(this.suggestionsSource),3))}updated(t){super.updated(t),this.style.setProperty("--accent-color",this.accentColor),(t.has("isFullscreen")||t.has("showConversations")||t.has("conversations"))&&this.enqueueConversationScrollbarMeasure(),(t.has("messages")||t.has("isLoading")&&this.isLoading||t.has("open")&&this.open||t.has("isFullscreen")&&this.isFullscreen)&&this.scrollConversationToBottom()}firstUpdated(){this.enqueueConversationScrollbarMeasure(),this.bootstrapConsultantAgent()}disconnectedCallback(){super.disconnectedCallback(),this.conversationScrollbarRaf!==null&&(cancelAnimationFrame(this.conversationScrollbarRaf),this.conversationScrollbarRaf=null),this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null),this.selectedFiles.forEach(t=>{t.previewUrl&&URL.revokeObjectURL(t.previewUrl)}),this.teardownVoiceRecording(),this.teardownRioClient(),this.clearLoadingGuard()}async bootstrapConsultantAgent(){try{this.consultantAgentOptions=await mc()}catch(t){console.error("[RioAssist][consultant] erro ao carregar opções do agente consultor",t),this.consultantAgentOptions=[]}}get filteredConversations(){const t=this.conversationSearch.trim().toLowerCase();return t?this.conversations.filter(u=>u.title.toLowerCase().includes(t)):this.conversations}get hasActiveConversation(){return this.messages.length>0}get hasVoiceAttachment(){return!!this.voiceAttachmentId}get isAttachmentLimitReached(){return this.selectedFiles.length>=Ai}get isVoiceButtonDisabled(){return this.isLoading||this.isRecording||this.hasVoiceAttachment||this.isAttachmentLimitReached}get isFilePickerDisabled(){return this.isLoading||this.isRecording||this.isAttachmentLimitReached}get isTextInputDisabled(){return this.autoStartConsultantFlow||this.isLoading||this.isRecording||this.hasVoiceAttachment}get filePickerAccept(){return Object.values(hi).flat().map(t=>`.${t}`).join(",")}isSpeechRecognitionSupported(){return!!(window.SpeechRecognition||window.webkitSpeechRecognition)}handleFloatingButtonClick(t){if(this.suppressFloatingButtonClick){t.preventDefault();return}const u=!this.open&&!this.isFullscreen;this.togglePanel(),this.autoStartConsultantFlow&&u&&!this.hasActiveConversation&&this.handleConsultantAgentOpen()}handleFloatingButtonPointerDown(t){const u=t.currentTarget;u.setPointerCapture(t.pointerId),this.floatingButtonDragState={pointerId:t.pointerId,startY:t.clientY,startOffset:this.floatingButtonOffset,buttonHeight:u.getBoundingClientRect().height},this.floatingButtonDragged=!1}handleFloatingButtonPointerMove(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const{startY:u,startOffset:n,buttonHeight:i}=this.floatingButtonDragState,r=t.clientY-u,o=window.innerHeight||this.getBoundingClientRect().height||0,s=12,a=Math.max(s,o-i-s);this.floatingButtonOffset=this.clamp(n-r,s,a),this.floatingButtonDragged=this.floatingButtonDragged||Math.abs(r)>3,t.preventDefault()}handleFloatingButtonPointerUp(t){this.finishFloatingButtonDrag(t)}handleFloatingButtonPointerCancel(t){this.finishFloatingButtonDrag(t)}finishFloatingButtonDrag(t){if(!this.floatingButtonDragState||this.floatingButtonDragState.pointerId!==t.pointerId)return;const u=t.currentTarget;u&&u.hasPointerCapture(t.pointerId)&&u.releasePointerCapture(t.pointerId),this.floatingButtonDragged&&(this.suppressFloatingButtonClick=!0,window.setTimeout(()=>{this.suppressFloatingButtonClick=!1},0)),this.floatingButtonDragState=null,this.floatingButtonDragged=!1}togglePanel(){if(this.isFullscreen){this.exitFullscreen(!1);return}this.open=!this.open,this.dispatchEvent(new CustomEvent(this.open?"rioassist:open":"rioassist:close",{bubbles:!0,composed:!0}))}closePanel(){this.isFullscreen=!1,this.open&&this.togglePanel()}openConversationsPanel(){this.showConversations=!0,this.requestConversationHistory()}closeConversationsPanel(){this.showConversations=!1,this.conversationMenuId=null}toggleConversationsPanel(){if(this.showConversations=!this.showConversations,!this.showConversations){this.conversationMenuId=null;return}this.requestConversationHistory()}toggleNewConversationShortcut(){this.showNewConversationShortcut=!this.showNewConversationShortcut}toggleShortAnswers(){this.shortAnswerEnabled=!this.shortAnswerEnabled}handleConsultantAgentOpen(){if(this.consultantAgentStage==="awaiting")return;this.showSuggestions=!1,this.consultantOptionsSuppressed=!1,this.consultantAgentOptions.length===0&&this.bootstrapConsultantAgent();const t=this.createMessage("assistant",this.consultantAgentInitialMessage.trim()||gi);this.messages=[...this.messages,t],this.consultantAgentStage="awaiting",this.activeConsultantPromptId=null,this.pendingConsultantFollowUpId=null,this.activeConsultantFollowUpId=null,this.processMessage("Resumo da Frota",{suppressUserMessage:!0})}handleConsultantAgentOption(t){var s;const u=t.label.trim();if(!u)return;const n=((s=t.questions)==null?void 0:s.filter(a=>a&&typeof a.prompt=="string"&&typeof a.questionId=="string"))??[];if(this.messages.length===0){const a=this.createMessage("assistant",this.consultantAgentIntro);this.messages=[...this.messages,a]}const i=this.createMessage("user",u),r=this.randomId(12),o=this.createMessage("assistant",fi(u),{id:r,topicId:t.branchId??t.id,topicLabel:u,questions:n});this.messages=[...this.messages,i,o],this.consultantAgentVisible=!1,this.errorMessage="",this.showNewConversationShortcut=!0,this.showSuggestions=!1,this.activeConsultantFollowUpId=r,this.activeConsultantBranchId=t.branchId??t.id,this.activeConsultantPromptId=null,this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantFollowUpId=r,this.lastConsultantFollowUpPayload={topicId:t.branchId??t.id,topicLabel:u,questions:n},this.requestUpdate(),this.scrollConversationToBottom()}handleConsultantChooseAnotherSubject(){if(this.consultantOptionsSuppressed)return;const t=this.randomId(12),u={...this.createMessage("assistant","Em qual assunto posso ajudar você hoje?"),consultantPrompt:{id:t,text:"Em qual assunto posso ajudar você hoje?",options:[...this.consultantAgentOptions]}};this.messages=[...this.messages,u],this.lastConsultantPromptId=t,this.activeConsultantPromptId=t,this.activeConsultantFollowUpId=null,this.pendingConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.consultantAgentStage="ready",this.scrollConversationToBottom()}async handleConsultantFollowUpQuestion(t){this.pendingConsultantFollowUpId=this.activeConsultantFollowUpId??this.lastConsultantFollowUpId,this.activeConsultantFollowUpId=null;const u=this.activeConsultantBranchId,n={consultantContext:{branchId:u??null,branchLabel:this.lookupConsultantBranchLabel(u),questionId:t.questionId,questionLevel:t.level??null},isConsultantAgent:!0};await this.processMessage(t.prompt,n)}handleConversationSelect(t){t&&(this.showConversations=!1,this.conversationMenuId=null,this.errorMessage="",this.currentConversationId=t,this.activeConversationTitle=this.lookupConversationTitle(t),console.info("[RioAssist][history] carregando conversa",t),this.requestConversationHistory(t))}handleConversationSearch(t){this.conversationSearch=t.target.value}handleConversationMenuToggle(t,u){if(t.stopPropagation(),this.conversationMenuId===u){this.conversationMenuId=null;return}const n=t.currentTarget,i=this.renderRoot.querySelector(".conversations-panel__surface");if(n&&i){const r=n.getBoundingClientRect(),s=i.getBoundingClientRect().bottom-r.bottom;this.conversationMenuPlacement=s<140?"above":"below"}else this.conversationMenuPlacement="below";this.conversationMenuId=u}handleConversationsPanelPointer(t){const u=t.target;!u.closest(".conversation-menu")&&!u.closest(".conversation-menu-button")&&(this.conversationMenuId=null)}handleConversationAction(t,u){this.conversationMenuId=null;const n=this.conversations.findIndex(r=>r.id===u);if(n===-1)return;const i=this.conversations[n];if(t==="delete"){this.deleteConversationTarget={id:i.id,title:i.title,index:n};return}this.renameConversationTarget={id:i.id,title:i.title,index:n,draft:i.title}}handleHomeNavigation(){const t={url:this.homeUrl||null};this.dispatchEvent(new CustomEvent("rioassist:home",{detail:t,bubbles:!0,composed:!0,cancelable:!0}))&&this.homeUrl&&window.location.assign(this.homeUrl)}applyConversationRename(t,u){if(!t||!u)return;let n=!1;this.conversations=this.conversations.map(i=>i.id===t?(n=!0,{...i,title:u}):i),n&&this.currentConversationId===t&&(this.activeConversationTitle=u)}applyConversationDeletion(t){if(!t)return;const u=this.currentConversationId===t,n=this.conversations.filter(i=>i.id!==t);n.length!==this.conversations.length&&(this.conversations=n,u&&(this.currentConversationId=null,this.activeConversationTitle=null,this.messages=[]))}restoreConversationSnapshot(t,u){if(!t||this.conversations.some(o=>o.id===t.id))return;const i=[...this.conversations],r=u>=0&&u<=i.length?u:i.length;i.splice(r,0,t),this.conversations=i}async confirmDeleteConversation(){const t=this.deleteConversationTarget;if(!t)return;const u=this.conversations[t.index]??this.conversations.find(r=>r.id===t.id)??{id:t.id,title:t.title,updatedAt:new Date().toISOString()},n=this.currentConversationId===t.id;if(this.pendingConversationAction={action:"delete",conversationId:t.id,originalTitle:t.title,index:t.index,snapshot:u,messagesSnapshot:n?[...this.messages]:void 0,wasActive:n},await this.dispatchConversationAction("delete",{id:t.id,title:t.title},t.index)){this.deleteConversationTarget=null;return}this.pendingConversationAction=null}cancelDeleteConversation(){this.deleteConversationTarget=null}handleRenameDraft(t){this.renameConversationTarget&&(this.renameConversationTarget={...this.renameConversationTarget,draft:t.target.value})}async confirmRenameConversation(){const t=this.renameConversationTarget;if(!t)return;const u=t.draft.trim();if(!u)return;if(this.pendingConversationAction={action:"rename",conversationId:t.id,originalTitle:t.title,index:t.index,newTitle:u},await this.dispatchConversationAction("rename",{id:t.id,title:u},t.index,u)){this.renameConversationTarget=null;return}this.pendingConversationAction=null}cancelRenameConversation(){this.renameConversationTarget=null}cancelConversationActionError(){this.conversationActionError=null,this.pendingConversationAction=null}async retryConversationAction(){const t=this.conversationActionError;if(!t)return;const u=typeof t.index=="number"?t.index:this.conversations.findIndex(r=>r.id===t.conversationId),n=u>=0?u:this.conversations.length>0?this.conversations.length-1:0,i=t.snapshot??this.conversations.find(r=>r.id===t.conversationId)??{id:t.conversationId,title:t.originalTitle,updatedAt:new Date().toISOString()};this.pendingConversationAction={action:t.action,conversationId:t.conversationId,originalTitle:t.originalTitle,index:n,newTitle:t.newTitle,snapshot:i,messagesSnapshot:t.messagesSnapshot,wasActive:t.wasActive},this.conversationActionError=null,await this.dispatchConversationAction(t.action,{id:t.conversationId,title:t.newTitle??t.originalTitle},n,t.newTitle)}async dispatchConversationAction(t,u,n,i){const r=t==="rename"?"rioassist:conversation-rename":"rioassist:conversation-delete",o={id:u.id,title:u.title,index:n,action:t};return this.dispatchEvent(new CustomEvent(r,{detail:o,bubbles:!0,composed:!0,cancelable:!0}))?t==="delete"?await this.syncConversationDeleteBackend(u.id):t==="rename"&&i?await this.syncConversationRenameBackend(u.id,i):!1:!1}async syncConversationRenameBackend(t,u){try{const n=this.ensureRioClient();return console.info("[RioAssist][ws] enviando renameConversation",{conversationId:t,newTitle:u}),await n.renameConversation(t,u),this.applyConversationRename(t,u),this.conversationHistoryError="",!0}catch(n){return console.error("[RioAssist][history] erro ao renomear conversa",n),this.conversationHistoryError=n instanceof Error&&n.message?n.message:"Nao foi possivel renomear a conversa.",!1}}async syncConversationDeleteBackend(t){try{return await this.ensureRioClient().deleteConversation(t),this.applyConversationDeletion(t),this.conversationHistoryError="",!0}catch(u){return console.error("[RioAssist][history] erro ao excluir conversa",u),this.conversationHistoryError=u instanceof Error&&u.message?u.message:"Nao foi possivel excluir a conversa.",!1}}handleConversationSystemAction(t){const u=(t.action??"").toLowerCase();if(u==="conversationrenamed"){const n=t.data,i=this.repairConversationId(this.extractString(n,["conversationId","id"])??""),r=this.extractString(n,["newTitle","title"]);return i&&r&&(this.applyConversationRename(i,r),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===i&&this.pendingConversationAction.action==="rename"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}if(u==="conversationdeleted"){const n=t.data,i=this.repairConversationId(this.extractString(n,["conversationId","id"])??"");return i&&(this.applyConversationDeletion(i),this.conversationHistoryError="",this.pendingConversationAction&&this.pendingConversationAction.conversationId===i&&this.pendingConversationAction.action==="delete"&&(this.pendingConversationAction=null,this.conversationActionError=null)),!0}return u==="processing"}handleConversationActionError(t){if((t.action??"").toLowerCase()!=="error")return!1;const n=t.data;console.error("[RioAssist][ws] erro em acao de conversa recebido do backend",{text:t.text,data:n,raw:t.raw});const i=this.extractString(n,["error","message","detail","description"])||(typeof t.text=="string"&&t.text.trim()?t.text:"O agente retornou um erro ao processar a conversa."),r=this.pendingConversationAction;return r?(r.action==="rename"&&this.applyConversationRename(r.conversationId,r.originalTitle),r.action==="delete"&&(this.restoreConversationSnapshot(r.snapshot,r.index),r.wasActive&&(this.currentConversationId=r.conversationId,this.activeConversationTitle=r.originalTitle,this.messages=r.messagesSnapshot??this.messages)),this.conversationActionError={...r,message:i},this.pendingConversationAction=null,this.clearLoadingGuard(),this.isLoading=!1,!0):(this.errorMessage=i,this.clearLoadingGuard(),this.isLoading=!1,!0)}shouldIgnoreAssistantPayload(t){if(!t)return!1;const u=t.toLowerCase();return u==="processing"||u==="conversationrenamed"||u==="conversationdeleted"}extractString(t,u){if(!t||typeof t!="object")return null;for(const n of u){const i=t[n];if(typeof i=="string"&&i.trim())return i}return null}handleHeaderActionClick(t,u){const n={index:u,id:t.id??null,ariaLabel:t.ariaLabel??null,iconUrl:t.iconUrl};this.dispatchEvent(new CustomEvent("rioassist:header-action",{detail:n,bubbles:!0,composed:!0,cancelable:!0}))&&typeof t.onClick=="function"&&t.onClick()}handleCloseAction(){if(this.isFullscreen){this.exitFullscreen(!0);return}this.showConversations?this.closeConversationsPanel():this.closePanel()}enterFullscreen(){this.isFullscreen||(this.isFullscreen=!0,this.open=!1,this.showConversations=!1,this.requestConversationHistory())}exitFullscreen(t){this.isFullscreen&&(this.isFullscreen=!1,this.conversationMenuId=null,this.showNewConversationShortcut=!1,t&&(this.open=!0))}handleCreateConversation(){if(this.hasActiveConversation){if(this.autoStartConsultantFlow){this.startNewConversation(),this.handleConsultantAgentOpen();return}this.newConversationConfirmOpen=!0}}confirmCreateConversation(){if(!this.hasActiveConversation){this.newConversationConfirmOpen=!1;return}this.newConversationConfirmOpen=!1,this.startNewConversation()}cancelCreateConversation(){this.newConversationConfirmOpen=!1}startNewConversation(){this.hasActiveConversation&&(this.clearLoadingGuard(),this.isLoading=!1,this.messages=[],this.message="",this.errorMessage="",this.showConversations=!1,this.teardownRioClient(),this.currentConversationId=null,this.activeConversationTitle=null,this.showNewConversationShortcut=!1,this.showSuggestions=!0,this.consultantAgentVisible=!1,this.activeConsultantFollowUpId=null,this.activeConsultantBranchId=null,this.activeConsultantPromptId=null,this.consultantAgentStage="idle",this.consultantOptionsSuppressed=!1,this.pendingConsultantFollowUpId=null,this.lastConsultantPromptId=null,this.lastConsultantFollowUpId=null,this.lastConsultantFollowUpPayload=null,this.dispatchEvent(new CustomEvent("rioassist:new-conversation",{bubbles:!0,composed:!0})))}handleConversationListScroll(t){const u=t.currentTarget;u&&this.updateConversationScrollbar(u)}handleConversationScrollbarPointerDown(t){const u=t.currentTarget,n=this.renderRoot.querySelector(".conversation-list--sidebar");if(!u||!n)return;const i=u.getBoundingClientRect(),r=i.height*(this.conversationScrollbar.height/100),o=Math.max(i.height-r,0),s=Math.max(n.scrollHeight-n.clientHeight,1),a=n.scrollTop/s*o,c=t.clientY-i.top,d=c>=a&&c<=a+r,f=d?a:Math.min(Math.max(c-r/2,0),o);d||(n.scrollTop=f/Math.max(o,1)*(n.scrollHeight-n.clientHeight),this.updateConversationScrollbar(n)),u.setPointerCapture(t.pointerId),this.conversationScrollbarDraggingId=t.pointerId,this.conversationScrollbarDragState={startY:t.clientY,startThumbTop:f,trackHeight:i.height,thumbHeight:r,list:n},t.preventDefault()}handleConversationScrollbarPointerMove(t){if(this.conversationScrollbarDraggingId===null||this.conversationScrollbarDraggingId!==t.pointerId||!this.conversationScrollbarDragState)return;const{startY:u,startThumbTop:n,trackHeight:i,thumbHeight:r,list:o}=this.conversationScrollbarDragState,s=Math.max(i-r,0),a=t.clientY-u,c=Math.min(Math.max(n+a,0),s),d=o.scrollHeight-o.clientHeight;d>0&&(o.scrollTop=c/Math.max(s,1)*d,this.updateConversationScrollbar(o)),t.preventDefault()}handleConversationScrollbarPointerUp(t){if(this.conversationScrollbarDraggingId!==t.pointerId)return;const u=t.currentTarget;u==null||u.releasePointerCapture(t.pointerId),this.conversationScrollbarDraggingId=null,this.conversationScrollbarDragState=null}enqueueConversationScrollbarMeasure(){this.conversationScrollbarRaf===null&&(this.conversationScrollbarRaf=requestAnimationFrame(()=>{this.conversationScrollbarRaf=null,this.updateConversationScrollbar()}))}updateConversationScrollbar(t){const u=t??this.renderRoot.querySelector(".conversation-list--sidebar");if(!u){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const{scrollHeight:n,clientHeight:i,scrollTop:r}=u;if(n<=i+1){this.conversationScrollbar.visible&&(this.conversationScrollbar={height:0,top:0,visible:!1});return}const o=i/n,s=Math.max(o*100,8),a=100-s,c=r/(n-i)*(a>0?a:0);this.conversationScrollbar={height:s,top:c,visible:!0}}async onSuggestionClick(t){await this.processMessage(t)}getAudioExtension(t){const u=t.toLowerCase();return u.includes("ogg")?"ogg":u.includes("mpeg")||u.includes("mp3")?"mp3":u.includes("wav")?"wav":u.includes("mp4")||u.includes("m4a")?"m4a":(u.includes("webm"),"webm")}createAudioFile(t){const u=this.getAudioExtension(t.type||"audio/webm"),n=`mensagem-voz-${Date.now()}.${u}`;return new File([t],n,{type:t.type||"audio/webm"})}clearVoiceRecorder(){this.voiceRecordingChunks=[],this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.voiceRecorder&&(this.voiceRecorder.ondataavailable=null,this.voiceRecorder.onstop=null,this.voiceRecorder=null)}cleanupVoiceStream(){this.voiceRecordingStream&&(this.voiceRecordingStream.getTracks().forEach(t=>t.stop()),this.voiceRecordingStream=null)}teardownVoiceRecording(){this.voiceRecorder&&this.voiceRecorder.state!=="inactive"&&this.voiceRecorder.stop(),this.stopSpeechRecognition(),this.cleanupVoiceStream(),this.clearVoiceRecorder(),this.isRecording=!1,this.isRecordingPaused=!1}async requestMicrophoneStream(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return this.errorMessage="Seu navegador nao suporta gravacao de audio.",null;try{const t=await navigator.mediaDevices.getUserMedia({audio:!0});return this.microphonePermissionGranted=!0,t}catch(t){return this.microphonePermissionGranted=!1,console.error("[RioAssist][voice] erro ao acessar microfone",t),this.errorMessage="Nao foi possivel acessar o microfone.",null}}createVoiceRecorder(t){const n=["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4"].find(i=>typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(i));return n?new MediaRecorder(t,{mimeType:n}):new MediaRecorder(t)}startSpeechRecognition(){const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){this.speechRecognitionAvailable=!1;return}this.stopSpeechRecognition();const u=new t;u.lang="pt-BR",u.continuous=!0,u.interimResults=!0,u.onresult=n=>{var r;let i="";for(let o=n.resultIndex;o<n.results.length;o+=1){const s=n.results[o],a=((r=s[0])==null?void 0:r.transcript)??"";s.isFinal?this.voiceTranscriptSegments.push(a.trim()):i+=a}this.voiceTranscriptPreview=[...this.voiceTranscriptSegments,i.trim()].filter(Boolean).join(" ").trim(),this.voiceTranscriptPreview&&console.info("[RioAssist][voice] transcricao parcial",this.voiceTranscriptPreview)},u.onstart=()=>{console.info("[RioAssist][voice] reconhecimento iniciado")},u.onaudiostart=()=>{console.info("[RioAssist][voice] audio captado (inicio)")},u.onaudioend=()=>{console.info("[RioAssist][voice] audio captado (fim)")},u.onsoundstart=()=>{console.info("[RioAssist][voice] som detectado")},u.onsoundend=()=>{console.info("[RioAssist][voice] som terminou")},u.onspeechstart=()=>{console.info("[RioAssist][voice] fala detectada")},u.onspeechend=()=>{console.info("[RioAssist][voice] fala terminou")},u.onnomatch=n=>{console.warn("[RioAssist][voice] fala nao reconhecida",n)},u.onend=()=>{if(console.info("[RioAssist][voice] reconhecimento encerrado",{isRecording:this.isRecording,isRecordingPaused:this.isRecordingPaused}),this.isRecording&&!this.isRecordingPaused)try{u.start()}catch(n){console.warn("[RioAssist][voice] falha ao reiniciar reconhecimento",n)}},u.onerror=n=>{const i=n&&n.error||"";console.error("[RioAssist][voice] erro no reconhecimento de voz",{error:i,message:(n==null?void 0:n.message)??null,event:n}),(i==="not-allowed"||i==="service-not-allowed"||i==="not-supported")&&(this.speechRecognitionAvailable=!1)};try{u.start(),this.speechRecognizer=u,this.speechRecognitionAvailable=!0}catch(n){console.warn("[RioAssist][voice] nao foi possivel iniciar reconhecimento",n),this.speechRecognizer=null,this.speechRecognitionAvailable=!1}}stopSpeechRecognition(){if(this.speechRecognizer){try{this.speechRecognizer.onresult=null,this.speechRecognizer.onerror=null,this.speechRecognizer.onend=null,this.speechRecognizer.stop()}catch(t){console.warn("[RioAssist][voice] erro ao interromper reconhecimento",t)}this.speechRecognizer=null}}stopVoiceRecorder(){return new Promise(t=>{const u=this.voiceRecorder;if(!u){t(null);return}const n=()=>{u.removeEventListener("stop",n);const i=u.mimeType||"audio/webm",r=this.voiceRecordingChunks.length>0?new Blob(this.voiceRecordingChunks,{type:i}):null;t(r)};u.addEventListener("stop",n),u.state!=="inactive"?u.stop():n()})}addVoiceAttachment(t){if(!t||t.size===0)return;if(this.isAttachmentLimitReached){this.attachmentError="Voce pode anexar no maximo 3 arquivos.";return}const u=this.createAudioFile(t),n=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():this.randomId(12),i=this.voiceTranscriptSegments.join(" ").trim()||this.voiceTranscriptPreview,r={id:n,file:u,name:u.name,typeLabel:pi.audio,kind:"audio"};this.selectedFiles=[...this.selectedFiles,r],this.voiceAttachmentId=n,this.voiceTranscript=i.trim(),this.attachmentError=""}async handleVoiceButtonClick(){if(this.isVoiceButtonDisabled)return;const t=await this.requestMicrophoneStream();if(!t)return;this.voiceRecordingStream=t,this.voiceRecordingChunks=[],this.voiceTranscriptSegments=[],this.voiceTranscriptPreview="",this.voiceTranscript="";const u=this.createVoiceRecorder(t);this.voiceRecorder=u,u.ondataavailable=n=>{n.data&&n.data.size>0&&this.voiceRecordingChunks.push(n.data)},u.onstop=()=>{this.cleanupVoiceStream()},u.start(),this.isRecording=!0,this.isRecordingPaused=!1,this.startSpeechRecognition()}pauseVoiceRecording(){!this.voiceRecorder||!this.isRecording||this.isRecordingPaused||(this.voiceRecorder.state==="recording"&&this.voiceRecorder.pause(),this.isRecordingPaused=!0,this.stopSpeechRecognition())}resumeVoiceRecording(){!this.voiceRecorder||!this.isRecording||!this.isRecordingPaused||(this.voiceRecorder.state==="paused"&&this.voiceRecorder.resume(),this.isRecordingPaused=!1,this.startSpeechRecognition())}handleVoiceCancelClick(){this.isRecording&&(this.pauseVoiceRecording(),this.voiceCancelDialogMode="cancel",this.pendingVoiceRemovalId=null,this.voiceCancelDialogOpen=!0)}async handleVoiceConfirmClick(){if(!this.isRecording)return;this.isRecording=!1,this.isRecordingPaused=!1,this.voiceCancelDialogOpen=!1,this.stopSpeechRecognition();const t=await this.stopVoiceRecorder();this.cleanupVoiceStream(),t&&this.addVoiceAttachment(t),this.clearVoiceRecorder()}async discardVoiceRecording(){this.isRecording=!1,this.isRecordingPaused=!1,this.voiceCancelDialogOpen=!1,this.stopSpeechRecognition(),await this.stopVoiceRecorder(),this.cleanupVoiceStream(),this.clearVoiceRecorder(),this.voiceTranscript=""}handleVoiceDialogConfirm(){if(this.voiceCancelDialogMode==="cancel"){this.discardVoiceRecording();return}const t=this.pendingVoiceRemovalId;t&&(this.selectedFiles=this.selectedFiles.filter(u=>u.id!==t),this.voiceAttachmentId===t&&(this.voiceAttachmentId=null,this.voiceTranscript=""),this.pendingVoiceRemovalId=null),this.selectedFiles.length===0&&(this.attachmentError=""),this.voiceCancelDialogOpen=!1}handleVoiceDialogContinue(){if(this.voiceCancelDialogMode==="cancel"){this.voiceCancelDialogOpen=!1,this.resumeVoiceRecording();return}this.voiceCancelDialogOpen=!1,this.pendingVoiceRemovalId=null}handleVoiceAttachmentRemove(t){this.isRecording||(this.voiceCancelDialogMode="remove",this.pendingVoiceRemovalId=t,this.voiceCancelDialogOpen=!0)}handleFilePickerClick(){if(this.isFilePickerDisabled)return;const t=this.renderRoot.querySelector(".file-input");t&&!t.disabled&&t.click()}handleFileInputChange(t){const u=t.target;if(!u)return;const n=this.selectedFiles,i=Array.from(u.files??[]);if(u.value="",i.length===0)return;const r=[...this.selectedFiles];let o="";for(const s of i){if(r.length>=Ai){o="Voce pode anexar no maximo 3 arquivos.";break}const{item:a,error:c}=this.buildAttachmentItem(s);if(c){o=c;continue}a&&r.push(a)}this.selectedFiles=r,this.attachmentError=o,n.forEach(s=>{s.previewUrl&&!this.selectedFiles.find(a=>a.id===s.id)&&URL.revokeObjectURL(s.previewUrl)})}handleAttachmentRemove(t){const u=this.selectedFiles.find(n=>n.id===t);if((u==null?void 0:u.kind)==="audio"){this.handleVoiceAttachmentRemove(t);return}this.selectedFiles=this.selectedFiles.filter(n=>n.id!==t),u!=null&&u.previewUrl&&URL.revokeObjectURL(u.previewUrl),this.selectedFiles.length===0&&(this.attachmentError="")}dispatchMessageAction(t,u){this.dispatchEvent(new CustomEvent(`rioassist:message-${t}`,{detail:{messageId:u.id,role:u.role,text:u.text,conversationId:this.currentConversationId,responseTo:u.responseTo??null},bubbles:!0,composed:!0}))}setCopiedMessage(t){this.copiedMessageTimer!==null&&(window.clearTimeout(this.copiedMessageTimer),this.copiedMessageTimer=null),this.copiedMessageId=t,this.copiedMessageTimer=window.setTimeout(()=>{this.copiedMessageId=null,this.copiedMessageTimer=null},1200)}async handleCopyMessage(t){var n;const u=t.text.trim();if(u)try{if((n=navigator.clipboard)!=null&&n.writeText)await navigator.clipboard.writeText(u);else{const i=document.createElement("textarea");i.value=u,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}this.setCopiedMessage(t.id),this.dispatchMessageAction("copy",t)}catch(i){console.error("[RioAssist] falha ao copiar mensagem",i)}}handleUpdateResponse(t){this.isLoading||!t.responseTo||(this.messages=this.messages.map(u=>u.id===t.id?{...u,hidden:!0}:u),this.processMessage(t.responseTo.requestText,{suppressUserMessage:!0,responseToMessageId:t.responseTo.messageId,forcePayload:{contentToSend:t.responseTo.requestToSend,contentToDisplay:t.responseTo.requestText},consultantContext:t.responseTo.consultantContext??null,isConsultantAgent:t.responseTo.isConsultantAgent??!1}),this.dispatchMessageAction("update",t))}handleToggleReaction(t,u){const i=this.messageReactions[u.id]===t?void 0:t,r={...this.messageReactions};i?r[u.id]=i:delete r[u.id],this.messageReactions=r,this.dispatchMessageAction(t,u)}handleMessageAction(t,u){this.dispatchMessageAction(t,u)}async handleSubmit(t){t.preventDefault(),!this.isRecording&&(this.consultantOptionsSuppressed=!0,this.activeConsultantFollowUpId=null,this.activeConsultantPromptId=null,this.pendingConsultantFollowUpId=null,await this.processMessage(this.message,{attachments:this.selectedFiles}))}createMessage(t,u,n,i){return{id:typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`,role:t,text:u,html:this.renderMarkdown(u),timestamp:Date.now(),request:i==null?void 0:i.request,responseTo:i==null?void 0:i.responseTo,hidden:i==null?void 0:i.hidden,consultantFollowUp:n}}async processMessage(t,u=null){var a,c,d,f;const n=t.trim();if(!n||this.isLoading)return;const i=((a=u==null?void 0:u.forcePayload)==null?void 0:a.contentToSend)??(this.shortAnswerEnabled?`Quero uma resposta curta sobre: ${n}`:n),r=((c=u==null?void 0:u.forcePayload)==null?void 0:c.contentToDisplay)??n;this.currentConversationId||(this.currentConversationId=null,this.activeConversationTitle=null);const o=this.messages.length===0;this.dispatchEvent(new CustomEvent("rioassist:send",{detail:{message:n,apiBaseUrl:this.apiBaseUrl,token:this.rioToken,consultantContext:(u==null?void 0:u.consultantContext)??null,isConsultantAgent:(u==null?void 0:u.isConsultantAgent)??!1,attachments:((d=u==null?void 0:u.attachments)==null?void 0:d.map(g=>g.file))??[]},bubbles:!0,composed:!0}));const s={text:r,toSend:i,consultantContext:(u==null?void 0:u.consultantContext)??null,isConsultantAgent:(u==null?void 0:u.isConsultantAgent)??!1};if(u!=null&&u.suppressUserMessage)this.pendingResponseTo={messageId:(u==null?void 0:u.responseToMessageId)??"resend",requestText:s.text,requestToSend:s.toSend,consultantContext:s.consultantContext??null,isConsultantAgent:s.isConsultantAgent??!1};else{const g=this.createMessage("user",r,void 0,{request:s});this.messages=[...this.messages,g],this.pendingResponseTo={messageId:g.id,requestText:s.text,requestToSend:s.toSend,consultantContext:s.consultantContext??null,isConsultantAgent:s.isConsultantAgent??!1}}o&&(this.showNewConversationShortcut=!0,this.refreshConversationsAfterResponse=!0),this.message="",this.errorMessage="",this.isLoading=!0,this.startLoadingGuard();try{const g=this.ensureRioClient(),h=u&&(u.consultantContext||u.isConsultantAgent)?{isConsultantAgent:!!u.isConsultantAgent,consultantContext:u.consultantContext??null}:void 0;if(await g.sendMessage(i,this.currentConversationId,h),(f=u==null?void 0:u.attachments)!=null&&f.length){const A=this.voiceAttachmentId&&u.attachments.some(k=>k.id===this.voiceAttachmentId);this.selectedFiles.forEach(k=>{k.previewUrl&&URL.revokeObjectURL(k.previewUrl)}),this.selectedFiles=[],this.attachmentError="",A&&(this.voiceAttachmentId=null,this.voiceTranscript="")}}catch(g){this.pendingResponseTo=null,this.clearLoadingGuard(),this.isLoading=!1,this.errorMessage=g instanceof Error?g.message:"Nao foi possivel enviar a mensagem para o agente."}}ensureRioClient(){const t=this.rioToken.trim();if(!t)throw new Error("Informe o token RIO em data-rio-token para conectar no websocket do assistente.");return(!this.rioClient||!this.rioClient.matchesToken(t))&&(this.teardownRioClient(),this.rioClient=new no(t),this.rioUnsubscribe=this.rioClient.onMessage(u=>{this.handleIncomingMessage(u)})),this.rioClient}async handleIncomingMessage(t){var o;if(this.isHistoryPayload(t)){this.logHistoryPayload(t),this.handleHistoryPayload(t.data);return}if(this.handleConversationSystemAction(t)||this.handleConversationActionError(t)||this.shouldIgnoreAssistantPayload(t.action))return;const u=this.extractConversationId(t.data),n=typeof((o=t.data)==null?void 0:o.conversationTitle)=="string"?t.data.conversationTitle.trim():"";if(u){const s=this.conversations.findIndex(c=>c.id===u),a=s===-1;if(n){const c=new Date().toISOString();if(a)this.conversations=[{id:u,title:n,updatedAt:c},...this.conversations];else{const d=this.conversations[s],f=[...this.conversations];f.splice(s,1),f.unshift({...d,title:n,updatedAt:c}),this.conversations=f}this.activeConversationTitle=n}a&&(this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][ws] nova conversa detectada, atualizando lista",{conversationId:u}),await this.requestConversationHistory()),this.currentConversationId=u,this.syncActiveConversationTitle()}if(console.info("[RioAssist][ws] resposta de mensagem recebida",{action:t.action??"message",text:t.text,raw:t.raw,data:t.data}),t.action==="processing"){console.info("[RioAssist][ws] processando mensagem - aguardando resposta final");return}const i=this.pendingResponseTo?{messageId:this.pendingResponseTo.messageId,requestText:this.pendingResponseTo.requestText,requestToSend:this.pendingResponseTo.requestToSend,consultantContext:this.pendingResponseTo.consultantContext??null,isConsultantAgent:this.pendingResponseTo.isConsultantAgent??!1}:void 0,r=this.createMessage("assistant",t.text,void 0,{responseTo:i});if(this.messages=[...this.messages,r],this.pendingResponseTo=null,this.clearLoadingGuard(),this.isLoading=!1,this.consultantAgentStage==="awaiting"){const s=this.randomId(12),a={...this.createMessage("assistant","Em qual assunto posso ajudar você hoje?"),consultantPrompt:{id:s,text:"Em qual assunto posso ajudar você hoje?",options:[...this.consultantAgentOptions]}};this.messages=[...this.messages,a],this.consultantAgentStage="ready",this.activeConsultantPromptId=s,this.lastConsultantPromptId=s}if(!this.consultantOptionsSuppressed&&this.lastConsultantFollowUpPayload&&(this.pendingConsultantFollowUpId||this.lastConsultantFollowUpId)){const s=this.randomId(12),a=this.createMessage("assistant",fi(this.lastConsultantFollowUpPayload.topicLabel),{id:s,topicId:this.lastConsultantFollowUpPayload.topicId,topicLabel:this.lastConsultantFollowUpPayload.topicLabel,questions:this.lastConsultantFollowUpPayload.questions});this.messages=[...this.messages,a],this.activeConsultantFollowUpId=s,this.pendingConsultantFollowUpId=null,this.lastConsultantFollowUpId=s}this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1,await this.requestConversationHistory())}teardownRioClient(){this.rioUnsubscribe&&(this.rioUnsubscribe(),this.rioUnsubscribe=null),this.rioClient&&(this.rioClient.close(),this.rioClient=null)}async requestConversationHistory(t){try{const u=this.ensureRioClient(),n=50;console.info("[RioAssist][history] solicitando historico de conversas",{conversationId:t??null,limit:n}),this.conversationHistoryError="",this.conversationHistoryLoading=!0,await u.requestHistory({conversationId:t,limit:n})}catch(u){console.error("[RioAssist][history] erro ao solicitar historico",u),this.conversationHistoryError=u instanceof Error&&u.message?u.message:"Nao foi possivel carregar as conversas.",this.conversationHistoryLoading=!1}}handleHistoryPayload(t){const u=this.extractHistoryEntries(t),n=this.extractConversationId(t);if(n!=null){this.applyMessageHistory(u,n);return}if(this.isMessageHistoryEntries(u)){this.applyMessageHistory(u);return}this.applyConversationHistoryFromEntries(u),this.refreshConversationsAfterResponse&&(this.refreshConversationsAfterResponse=!1)}isHistoryPayload(t){if(typeof t.action=="string"&&t.action.toLowerCase().includes("history"))return!0;const u=t.data;if(u&&typeof u=="object"){const n=u.action;if(typeof n=="string"&&n.toLowerCase().includes("history")||Array.isArray(u.history)||Array.isArray(u.conversations))return!0}return!1}logHistoryPayload(t){const u="[RioAssist][history] payload recebido do websocket";if(t.data!==null&&t.data!==void 0){console.info(u,t.data);return}console.info(u,t.raw)}applyConversationHistoryFromEntries(t){if(t.length===0){console.info("[RioAssist][history] payload sem itens para montar lista de conversas"),this.conversations=[],this.conversationHistoryLoading=!1,this.conversationHistoryError="";return}const u=new Map;t.forEach((i,r)=>{if(!i||typeof i!="object")return;const o=this.normalizeConversationItem(i,r),s=i.conversationId??i.conversationUUID??i.conversationUuid??i.uuid??i.id;if(s&&console.info("[RioAssist][history] conversa recebida do backend",{rawId:s,normalizedId:(o==null?void 0:o.id)??null,entry:i}),!o)return;const a=u.get(o.id);if(!a){u.set(o.id,o);return}const c=Date.parse(a.updatedAt),d=Date.parse(o.updatedAt);Number.isFinite(d)&&d>c&&u.set(o.id,o)});const n=Array.from(u.values()).sort((i,r)=>{const o=Date.parse(r.updatedAt)-Date.parse(i.updatedAt);return Number.isFinite(o)?o:0});this.conversations=n,this.conversationHistoryLoading=!1,this.conversationHistoryError="",this.syncActiveConversationTitle(),console.info("[RioAssist][history] conversas normalizadas",n)}applyMessageHistory(t,u){if(t.length===0){console.info("[RioAssist][history] lista de mensagens vazia",{conversationId:u}),this.messages=[],this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.conversationHistoryLoading=!1;return}const n=t.flatMap((i,r)=>this.normalizeHistoryMessages(i,r));u&&(this.currentConversationId=u),this.messages=n,this.showConversations=!1,this.clearLoadingGuard(),this.isLoading=!1,this.showNewConversationShortcut=n.length>0,this.conversationHistoryLoading=!1,this.refreshConversationsAfterResponse=!1,console.info("[RioAssist][history] mensagens carregadas",{conversationId:u??null,total:n.length})}extractHistoryEntries(t){if(Array.isArray(t))return t;if(t&&typeof t=="object"){const u=t,n=[u.history,u.conversations,u.data,u.items,u.messages];for(const i of n)if(Array.isArray(i))return i;if(u.data&&typeof u.data=="object"&&!Array.isArray(u.data)){const i=this.extractHistoryEntries(u.data);if(i.length>0)return i}}return[]}extractConversationId(t){if(t&&typeof t=="object"){const u=t,n=[u.conversationId,u.conversationUUID,u.conversationUuid,u.uuid,u.id];for(const i of n){if(i===null)return null;if(i!==void 0)return this.repairConversationId(String(i))}}}isMessageHistoryEntries(t){return t.some(u=>this.looksLikeMessageHistoryEntry(u))}looksLikeMessageHistoryEntry(t){if(!t||typeof t!="object")return!1;const u=t,n=u.role??u.sender??u.from??u.author??u.type;return!!(typeof n=="string"&&n.trim().length>0||typeof u.content=="string"||typeof u.message=="string"||typeof u.text=="string"||typeof u.response=="string"||Array.isArray(u.parts)&&u.parts.length>0)}normalizeConversationItem(t,u){const n=t.conversationId??t.conversationUUID??t.conversationUuid??t.uuid??t.id,i=n!=null?String(n):`history-${u+1}`,r=this.repairConversationId(i),o=t.title??t.name??t.topic??t.subject??t.question??t.query??t.message,s=typeof o=="string"&&o.trim().length>0?o.trim():`Conversa ${u+1}`,a=t.updatedAt??t.updated_at??t.lastMessageAt??t.last_message_at??t.createdAt??t.created_at??t.timestamp??t.date,c=this.toIsoString(a);return{id:r,title:s,updatedAt:c}}normalizeHistoryMessages(t,u){const n=[],i=t.message??t.question??t.query??t.text??t.content,r=typeof i=="string"?i.trim():"",o=t.response??t.answer??t.reply??t.completion??t.body??t.preview,s=typeof o=="string"?o.trim():"",a=t.id??t.messageId??t.uuid??t.conversationMessageId,c=a!=null?String(a):`history-${u+1}`,d=t.timestamp??t.createdAt??t.created_at??t.date??t.time,f=t.responseTimestamp??t.responseTime??t.responseDate??t.response_at??t.updatedAt??t.updated_at,g=this.parseTimestamp(d),h=this.parseTimestamp(f,g+1);if(s)r&&n.push({id:`${c}-user`,role:"user",text:r,html:this.renderMarkdown(r),timestamp:g}),n.push({id:`${c}-assistant`,role:"assistant",text:s,html:this.renderMarkdown(s),timestamp:h});else if(r)return[];if(n.length>0)return n;const A=this.normalizeSingleHistoryMessage(t,u);return A?[A]:[]}normalizeSingleHistoryMessage(t,u){const n=t.text??t.message??t.content??t.response??t.body??t.preview,i=typeof n=="string"&&n.trim().length>0?n:"";if(!i)return null;const r=this.normalizeRole(t.role??t.sender??t.from??t.author??t.type??t.direction),o=t.id??t.messageId??t.uuid??t.conversationMessageId,s=o!=null?String(o):`history-message-${u+1}`,a=t.timestamp??t.createdAt??t.created_at??t.updatedAt??t.updated_at??t.date??t.time,c=this.parseTimestamp(a);return{id:s,role:r,text:i,html:this.renderMarkdown(i),timestamp:c}}normalizeRole(t){if(typeof t=="string"){const u=t.toLowerCase();if(u.includes("user")||u.includes("client"))return"user";if(u.includes("assistant")||u.includes("agent")||u.includes("bot"))return"assistant"}return"assistant"}parseTimestamp(t,u){if(typeof t=="number"&&Number.isFinite(t))return t;if(typeof t=="string"){const n=t.trim();if(n){const i=Number(n);if(Number.isFinite(i))return i;const r=Date.parse(n);if(Number.isFinite(r))return r}}return Number.isFinite(u??NaN)?u:Date.now()}lookupConversationTitle(t){if(!t)return null;const u=this.conversations.find(n=>n.id===t);return u?u.title:null}lookupConsultantBranchLabel(t){if(!t)return null;const u=this.consultantAgentOptions.find(n=>n.branchId===t||n.id===t);return u?u.label:null}syncActiveConversationTitle(){if(!this.currentConversationId)return;const t=this.lookupConversationTitle(this.currentConversationId);t&&(this.activeConversationTitle=t)}toIsoString(t){if(typeof t=="string"||typeof t=="number"){const u=new Date(t);if(!Number.isNaN(u.getTime()))return u.toISOString()}return new Date().toISOString()}startLoadingGuard(){this.clearLoadingGuard(),this.loadingLabelInternal="UptAIme Assist está respondendo",this.loadingTimerSlow=window.setTimeout(()=>{this.loadingLabelInternal="UptAIme Assist continua respondendo",this.requestUpdate()},2e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="UptAIme Assist ainda está processando sua resposta. Peço que aguarde um pouco mais",this.requestUpdate()},6e4),this.loadingTimerTimeout=window.setTimeout(()=>{this.loadingLabelInternal="Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco",this.requestUpdate()},12e4)}clearLoadingGuard(){this.loadingTimer!==null&&(window.clearTimeout(this.loadingTimer),this.loadingTimer=null),this.loadingTimerSlow!==null&&(window.clearTimeout(this.loadingTimerSlow),this.loadingTimerSlow=null),this.loadingTimerTimeout!==null&&(window.clearTimeout(this.loadingTimerTimeout),this.loadingTimerTimeout=null)}scrollConversationToBottom(){Array.from(this.renderRoot.querySelectorAll(".panel-content")).forEach(u=>{requestAnimationFrame(()=>{u.scrollTop=u.scrollHeight})})}renderMarkdown(t){const u=this.markdownRenderer.render(t),n=pc.sanitize(u,{ALLOWED_TAGS:["a","p","ul","ol","li","code","pre","strong","em","blockquote","table","thead","tbody","tr","th","td","del","hr","br","img","span","input"],ALLOWED_ATTR:["href","title","target","rel","src","alt","class","type","checked","disabled","aria-label"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["style","script"],USE_PROFILES:{html:!0}}),i=document.createElement("div");return i.innerHTML=n,i.querySelectorAll("a").forEach(r=>{r.setAttribute("target","_blank"),r.setAttribute("rel","noopener noreferrer")}),i.querySelectorAll('input[type="checkbox"]').forEach(r=>{r.setAttribute("disabled",""),r.setAttribute("tabindex","-1")}),i.innerHTML}render(){return eo(this)}};Bt.styles=Ar,Bt.properties={open:{type:Boolean,state:!0},message:{type:String,state:!0},titleText:{type:String,attribute:"data-title"},buttonLabel:{type:String,attribute:"data-button-label"},floatingButtonIconUrl:{type:String,attribute:"data-floating-button-icon-url"},floatingButtonLabelIconUrl:{type:String,attribute:"data-floating-button-label-icon-url"},floatingButtonBackgroundIconUrl:{type:String,attribute:"data-floating-button-background-icon-url"},placeholder:{type:String,attribute:"data-placeholder"},accentColor:{type:String,attribute:"data-accent-color"},apiBaseUrl:{type:String,attribute:"data-api-base-url"},rioToken:{type:String,attribute:"data-rio-token"},suggestionsSource:{type:String,attribute:"data-suggestions"},messages:{state:!0},isLoading:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},showConversations:{type:Boolean,state:!0},conversationSearch:{type:String,state:!0},conversationMenuId:{state:!0},conversationMenuPlacement:{state:!0},selectedFiles:{attribute:!1,state:!0},attachmentError:{type:String,state:!0},isRecording:{type:Boolean,state:!0},isRecordingPaused:{type:Boolean,state:!0},voiceAttachmentId:{type:String,state:!0},voiceTranscript:{type:String,state:!0},voiceCancelDialogOpen:{type:Boolean,state:!0},voiceCancelDialogMode:{type:String,state:!0},speechRecognitionAvailable:{type:Boolean,state:!0},isFullscreen:{type:Boolean,state:!0},conversationScrollbar:{state:!0},showNewConversationShortcut:{type:Boolean,state:!0},conversations:{state:!0},conversationHistoryLoading:{type:Boolean,state:!0},activeConversationTitle:{state:!0},conversationHistoryError:{type:String,state:!0},deleteConversationTarget:{attribute:!1},renameConversationTarget:{attribute:!1},shortAnswerEnabled:{type:Boolean,state:!0},newConversationConfirmOpen:{type:Boolean,state:!0},conversationActionError:{attribute:!1},headerActions:{attribute:!1},homeUrl:{type:String,attribute:"data-home-url"},floatingButtonOffset:{type:Number,attribute:"data-floating-offset"},consultantAgentVisible:{type:Boolean,state:!0},consultantAgentIntro:{type:String,state:!0},consultantAgentButtonText:{type:String,attribute:"data-consultant-agent-button-text"},showConsultantAgentButton:{attribute:"data-show-consultant-agent-button",converter:{fromAttribute:t=>t===null||t===""||t==="true",toAttribute:t=>t?"true":"false"}},consultantAgentInitialMessage:{type:String,attribute:"data-consultant-agent-initial-message"},autoStartConsultantFlow:{attribute:"data-auto-start-consultant-flow",converter:{fromAttribute:t=>t===""||t==="true",toAttribute:t=>t?"true":"false"}},consultantAgentOptions:{attribute:!1,state:!0},showSuggestions:{type:Boolean,state:!0},activeConsultantFollowUpId:{type:String,state:!0},activeConsultantBranchId:{type:String,state:!0},activeConsultantPromptId:{type:String,state:!0},consultantAgentStage:{type:String,state:!0},consultantOptionsSuppressed:{type:Boolean,state:!0},pendingConsultantFollowUpId:{type:String,state:!0},lastConsultantPromptId:{type:String,state:!0},lastConsultantFollowUpId:{type:String,state:!0},lastConsultantFollowUpPayload:{attribute:!1},copiedMessageId:{type:String,state:!0},messageReactions:{attribute:!1}};let yu=Bt;customElements.get("rio-assist-widget")||customElements.define("rio-assist-widget",yu);const bi={title:"UptAIme Assist",buttonLabel:"Uptaime Assist",floatingButtonIconUrl:"",floatingButtonLabelIconUrl:"",floatingButtonBackgroundIconUrl:"",placeholder:"Pergunte alguma coisa",suggestions:["Resumo da Frota","Frota Disponível","Chamados Abertos","Parados + Causas","Aguardando Peças","Principais Gargalos","Tempo por Concessionária","Tempo de Ciclo","Preventiva x Corretiva"],accentColor:"#B23672",apiBaseUrl:"",rioToken:"",floatingOffset:32,consultantAgentButtonText:"Consulte o UptAIme Agent",showConsultantAgentButton:!0,consultantAgentInitialMessage:"Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.",autoStartConsultantFlow:!1},mi="rio-assist-widget";function wc(e={}){const{target:t=document.body,...u}=e;let n=document.querySelector(mi);n||(n=document.createElement(mi),t.appendChild(n));const i=96,r=64,o=typeof window<"u"&&(window.innerHeight||document.documentElement.clientHeight)||0,s=u.floatingOffset??(o?Math.max(12,o-i-r):bi.floatingOffset),a={...bi,...u,floatingOffset:s};Object.entries(a).forEach(([c,d])=>{if(d===void 0)return;const f=`data-${c.replace(/[A-Z]/g,g=>`-${g.toLowerCase()}`)}`;if(typeof d=="boolean"){d?n==null||n.setAttribute(f,"true"):n==null||n.removeAttribute(f);return}n==null||n.setAttribute(f,Array.isArray(d)?d.join("|"):String(d))})}typeof window<"u"&&(window.RioAssist=window.RioAssist??{init:wc},window.dispatchEvent(new Event("rio-assist-ready")))})();
