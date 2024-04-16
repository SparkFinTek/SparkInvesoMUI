import{r as x,j as n,d as m,aP as O,G as f,b1 as M,x as oe,_ as ie,E as pe,H as F,K as ne,n as Se,g as Qe,I as Je,J as R,ab as Ze,P,bY as et,bX as tt,aR as Be,T as X,ce as nt,b$ as ot,bi as it,bj as ke,c5 as at,c6 as rt,B as Y,b2 as L,b5 as N,y as Oe,aQ as st,ds as lt,df as ct,N as je,W as dt,a6 as ut,X as gt,S as pt,aj as ht,ah as mt,z as H,aI as ft,ai as Pe,bH as xt,c9 as Me,aS as Ae,a2 as Ct,cD as vt,R as Dt,F as yt,v as bt,M as B}from"./index-BHUrCk0l.js";import{C as St,a as jt,b as Tt}from"./ComponentSkeleton-Duec2wAU.js";import"./Skeleton-D00KhaeD.js";const Ie=["username@gmail.com","user02@gmail.com"];function Ee({onClose:e,selectedValue:t,open:o}){const i=()=>{e(t)},a=r=>{e(r)};return n.jsxs(O,{onClose:i,open:o,children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",sx:{borderBottom:"1px solid",borderColor:"divider"},children:[n.jsx(f,{item:!0,children:n.jsx(M,{children:"Set backup account"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(oe,{color:"secondary",onClick:i,children:n.jsx(ie,{})})})]}),n.jsxs(pe,{sx:{p:2.5},children:[Ie.map((r,s)=>n.jsxs(F,{selected:t===r,onClick:()=>a(r),sx:{p:1.25},children:[n.jsx(ne,{children:n.jsx(Se,{src:Qe(`avatar-${s+1}.png`,Je.USERS)})}),n.jsx(R,{primary:r})]},r)),n.jsxs(F,{autoFocus:!0,onClick:()=>a("addAccount"),sx:{p:1.25},children:[n.jsx(ne,{children:n.jsx(Se,{size:"sm",children:n.jsx(Ze,{})})}),n.jsx(R,{primary:"Add Account"})]})]})]})}function wt(){const[e,t]=x.useState(!1),[o,i]=x.useState(Ie[1]),a=()=>{t(!0)},r=s=>{t(!1),i(s)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a,children:"Open simple dialog"}),n.jsx(Ee,{selectedValue:o,open:e,onClose:r})]})}Ee.propTypes={onClose:P.func,selectedValue:P.string,open:P.bool};function Bt(e){return et("MuiDialogContentText",e)}tt("MuiDialogContentText",["root"]);const kt=["children","className"],Ot=e=>{const{classes:t}=e,i=rt({root:["root"]},Bt,t);return ke({},t,i)},Pt=Be(X,{shouldForwardProp:e=>nt(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Mt=x.forwardRef(function(t,o){const i=ot({props:t,name:"MuiDialogContentText"}),{className:a}=i,r=it(i,kt),s=Ot(r);return n.jsx(Pt,ke({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:r,className:at(s.root,a)},i,{classes:s}))}),V=Mt;function At(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open alert dialog"}),n.jsx(O,{open:e,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{id:"alert-dialog-title",children:"Use Google's location service?"}),n.jsx(L,{children:n.jsx(V,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}function It(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open form dialog"}),n.jsx(O,{open:e,onClose:i,children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{children:"Subscribe"}),n.jsxs(L,{children:[n.jsx(V,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Oe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function Et(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Slide in dialog"}),n.jsx(O,{open:e,TransitionComponent:st,keepMounted:!0,onClose:i,"aria-describedby":"alert-dialog-slide-description",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{children:"Use Google'ss location service?"}),n.jsx(L,{children:n.jsx(V,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}const Lt=Be(O)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(3)},"& .MuiDialogActions-root":{padding:e.spacing(1.25),paddingRight:e.spacing(2)}}));function Le({children:e,onClose:t,...o}){return n.jsxs(M,{sx:{m:0,p:2},...o,children:[e,t?n.jsx(oe,{"aria-label":"close",onClick:t,color:"secondary",sx:{position:"absolute",right:10,top:10},children:n.jsx(ie,{})}):null]})}function Nt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open dialog"}),n.jsxs(Lt,{onClose:i,"aria-labelledby":"customized-dialog-title",open:e,children:[n.jsx(Le,{id:"customized-dialog-title",onClose:i,children:"Modal Title"}),n.jsxs(L,{dividers:!0,sx:{p:3},children:[n.jsx(X,{variant:"h6",gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),n.jsx(X,{variant:"h6",gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),n.jsx(N,{children:n.jsx(m,{variant:"contained",onClick:i,children:"Save changes"})})]})]})}Le.propTypes={children:P.node,onClose:P.func,other:P.any};function _t(e,t){return n.jsx(pt,{direction:"up",ref:t,...e})}const Wt=x.forwardRef(_t);function Gt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open full-screen dialog"}),n.jsxs(O,{fullScreen:!0,open:e,onClose:i,TransitionComponent:Wt,children:[n.jsx(lt,{sx:{position:"relative",boxShadow:"none"},children:n.jsxs(ct,{children:[n.jsx(oe,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:n.jsx(ie,{})}),n.jsx(X,{sx:{ml:2,flex:1},variant:"h6",children:"Set Backup Account"}),n.jsx(m,{color:"primary",variant:"contained",onClick:i,children:"save"})]})}),n.jsxs(pe,{sx:{p:3},children:[n.jsxs(F,{children:[n.jsx(ne,{children:n.jsx(je,{src:dt})}),n.jsx(R,{primary:"Phone ringtone",secondary:"Default"})]}),n.jsx(ut,{}),n.jsxs(F,{children:[n.jsx(ne,{children:n.jsx(je,{src:gt})}),n.jsx(R,{primary:"Default notification ringtone",secondary:"Tethys"})]})]})]})]})}function Ft(){const[e,t]=x.useState(!0),[o,i]=x.useState("sm"),[a,r]=x.useState(!1),s=()=>{r(!0)},d=()=>{r(!1)},p=y=>{i(y.target.value)},v=y=>{t(y.target.checked)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:s,children:"Open max-width dialog"}),n.jsx(O,{fullWidth:e,maxWidth:o,open:a,onClose:d,children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{children:"Optional sizes"}),n.jsxs(L,{children:[n.jsx(V,{children:"You can set my maximum width and whether to adapt or not."}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:1},children:[n.jsx(f,{item:!0,children:n.jsx(X,{variant:"h6",children:"Max Width :"})}),n.jsx(f,{item:!0,children:n.jsx(ht,{sx:{minWidth:120},children:n.jsxs(mt,{autoFocus:!0,value:o,onChange:p,inputProps:{name:"max-width",id:"max-width"},children:[n.jsx(H,{value:!1,children:"false"}),n.jsx(H,{value:"xs",children:"xs"}),n.jsx(H,{value:"sm",children:"sm"}),n.jsx(H,{value:"md",children:"md"}),n.jsx(H,{value:"lg",children:"lg"}),n.jsx(H,{value:"xl",children:"xl"})]})})})]}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:.25},children:[n.jsx(f,{item:!0,children:n.jsx(X,{variant:"h6",children:"Full Width:"})}),n.jsx(f,{item:!0,children:n.jsx(ft,{checked:e,onChange:v})})]})]}),n.jsx(N,{children:n.jsx(m,{variant:"outlined",color:"error",onClick:d,children:"Close"})})]})})]})}function Rt(){const e=Pe(r=>r.breakpoints.down("md")),[t,o]=x.useState(!1),i=()=>{o(!0)},a=()=>{o(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:i,children:"Open responsive dialog"}),n.jsx(O,{fullScreen:e,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{id:"responsive-dialog-title",children:"Use Google's location service?"}),n.jsx(L,{children:n.jsx(V,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:a,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:a,children:"Agree"})]})]})})]})}var ae={exports:{}},Ne={};function _e(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=_e(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Te(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=_e(e))&&(i&&(i+=" "),i+=t);return i}const Xt=Object.freeze(Object.defineProperty({__proto__:null,clsx:Te,default:Te},Symbol.toStringTag,{value:"Module"})),Yt=xt(Xt);var C={},A={};Object.defineProperty(A,"__esModule",{value:!0});A.dontSetMe=qt;A.findInArray=Ut;A.int=Ht;A.isFunction=$t;A.isNum=zt;function Ut(e,t){for(let o=0,i=e.length;o<i;o++)if(t.apply(t,[e[o],o,e]))return e[o]}function $t(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function zt(e){return typeof e=="number"&&!isNaN(e)}function Ht(e){return parseInt(e,10)}function qt(e,t,o){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(o," - do not set this, set it on the child."))}var U={};Object.defineProperty(U,"__esModule",{value:!0});U.browserPrefixToKey=Ge;U.browserPrefixToStyle=Vt;U.default=void 0;U.getPrefix=We;const de=["Moz","Webkit","O","ms"];function We(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const o=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!o||t in o)return"";for(let i=0;i<de.length;i++)if(Ge(t,de[i])in o)return de[i];return""}function Ge(e,t){return t?"".concat(t).concat(Kt(e)):e}function Vt(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Kt(e){let t="",o=!0;for(let i=0;i<e.length;i++)o?(t+=e[i].toUpperCase(),o=!1):e[i]==="-"?o=!0:t+=e[i];return t}U.default=We();Object.defineProperty(C,"__esModule",{value:!0});C.addClassName=Xe;C.addEvent=Zt;C.addUserSelectStyles=un;C.createCSSTransform=sn;C.createSVGTransform=ln;C.getTouch=cn;C.getTouchIdentifier=dn;C.getTranslation=he;C.innerHeight=on;C.innerWidth=an;C.matchesSelector=Re;C.matchesSelectorAndParentsTo=Jt;C.offsetXYFromParent=rn;C.outerHeight=tn;C.outerWidth=nn;C.removeClassName=Ye;C.removeEvent=en;C.removeUserSelectStyles=gn;var w=A,we=Qt(U);function Fe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Fe=function(i){return i?o:t})(e)}function Qt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Fe(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}let te="";function Re(e,t){return te||(te=(0,w.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(o){return(0,w.isFunction)(e[o])})),(0,w.isFunction)(e[te])?e[te](t):!1}function Jt(e,t,o){let i=e;do{if(Re(i,t))return!0;if(i===o)return!1;i=i.parentNode}while(i);return!1}function Zt(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.addEventListener?e.addEventListener(t,o,a):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o}function en(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.removeEventListener?e.removeEventListener(t,o,a):e.detachEvent?e.detachEvent("on"+t,o):e["on"+t]=null}function tn(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderTopWidth),t+=(0,w.int)(o.borderBottomWidth),t}function nn(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderLeftWidth),t+=(0,w.int)(o.borderRightWidth),t}function on(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingTop),t-=(0,w.int)(o.paddingBottom),t}function an(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingLeft),t-=(0,w.int)(o.paddingRight),t}function rn(e,t,o){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),r=(e.clientX+t.scrollLeft-a.left)/o,s=(e.clientY+t.scrollTop-a.top)/o;return{x:r,y:s}}function sn(e,t){const o=he(e,t,"px");return{[(0,we.browserPrefixToKey)("transform",we.default)]:o}}function ln(e,t){return he(e,t,"")}function he(e,t,o){let{x:i,y:a}=e,r="translate(".concat(i).concat(o,",").concat(a).concat(o,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+o),d="".concat(typeof t.y=="string"?t.y:t.y+o);r="translate(".concat(s,", ").concat(d,")")+r}return r}function cn(e,t){return e.targetTouches&&(0,w.findInArray)(e.targetTouches,o=>t===o.identifier)||e.changedTouches&&(0,w.findInArray)(e.changedTouches,o=>t===o.identifier)}function dn(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function un(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Xe(e.body,"react-draggable-transparent-selection")}function gn(e){if(e)try{if(e.body&&Ye(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Xe(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ye(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var I={};Object.defineProperty(I,"__esModule",{value:!0});I.canDragX=mn;I.canDragY=fn;I.createCoreData=Cn;I.createDraggableData=vn;I.getBoundPosition=pn;I.getControlPosition=xn;I.snapToGrid=hn;var T=A,q=C;function pn(e,t,o){if(!e.props.bounds)return[t,o];let{bounds:i}=e.props;i=typeof i=="string"?i:Dn(i);const a=me(e);if(typeof i=="string"){const{ownerDocument:r}=a,s=r.defaultView;let d;if(i==="parent"?d=a.parentNode:d=r.querySelector(i),!(d instanceof s.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const p=d,v=s.getComputedStyle(a),y=s.getComputedStyle(p);i={left:-a.offsetLeft+(0,T.int)(y.paddingLeft)+(0,T.int)(v.marginLeft),top:-a.offsetTop+(0,T.int)(y.paddingTop)+(0,T.int)(v.marginTop),right:(0,q.innerWidth)(p)-(0,q.outerWidth)(a)-a.offsetLeft+(0,T.int)(y.paddingRight)-(0,T.int)(v.marginRight),bottom:(0,q.innerHeight)(p)-(0,q.outerHeight)(a)-a.offsetTop+(0,T.int)(y.paddingBottom)-(0,T.int)(v.marginBottom)}}return(0,T.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,T.isNum)(i.bottom)&&(o=Math.min(o,i.bottom)),(0,T.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,T.isNum)(i.top)&&(o=Math.max(o,i.top)),[t,o]}function hn(e,t,o){const i=Math.round(t/e[0])*e[0],a=Math.round(o/e[1])*e[1];return[i,a]}function mn(e){return e.props.axis==="both"||e.props.axis==="x"}function fn(e){return e.props.axis==="both"||e.props.axis==="y"}function xn(e,t,o){const i=typeof t=="number"?(0,q.getTouch)(e,t):null;if(typeof t=="number"&&!i)return null;const a=me(o),r=o.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,q.offsetXYFromParent)(i||e,r,o.props.scale)}function Cn(e,t,o){const i=!(0,T.isNum)(e.lastX),a=me(e);return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:o,x:t,y:o}:{node:a,deltaX:t-e.lastX,deltaY:o-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:o}}function vn(e,t){const o=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/o,y:e.state.y+t.deltaY/o,deltaX:t.deltaX/o,deltaY:t.deltaY/o,lastX:e.state.x,lastY:e.state.y}}function Dn(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function me(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var re={},se={};Object.defineProperty(se,"__esModule",{value:!0});se.default=yn;function yn(){}Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var ue=Sn(x),j=fe(Me),bn=fe(Ae),b=C,W=I,ge=A,Q=fe(se);function fe(e){return e&&e.__esModule?e:{default:e}}function Ue(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Ue=function(i){return i?o:t})(e)}function Sn(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Ue(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}function S(e,t,o){return t=jn(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function jn(e){var t=Tn(e,"string");return typeof t=="symbol"?t:String(t)}function Tn(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const k={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let G=k.mouse,le=class extends ue.Component{constructor(){super(...arguments),S(this,"dragging",!1),S(this,"lastX",NaN),S(this,"lastY",NaN),S(this,"touchIdentifier",null),S(this,"mounted",!1),S(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const o=this.findDOMNode();if(!o||!o.ownerDocument||!o.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:i}=o;if(this.props.disabled||!(t.target instanceof i.defaultView.Node)||this.props.handle&&!(0,b.matchesSelectorAndParentsTo)(t.target,this.props.handle,o)||this.props.cancel&&(0,b.matchesSelectorAndParentsTo)(t.target,this.props.cancel,o))return;t.type==="touchstart"&&t.preventDefault();const a=(0,b.getTouchIdentifier)(t);this.touchIdentifier=a;const r=(0,W.getControlPosition)(t,a,this);if(r==null)return;const{x:s,y:d}=r,p=(0,W.createCoreData)(this,s,d);(0,Q.default)("DraggableCore: handleDragStart: %j",p),(0,Q.default)("calling",this.props.onStart),!(this.props.onStart(t,p)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,b.addUserSelectStyles)(i),this.dragging=!0,this.lastX=s,this.lastY=d,(0,b.addEvent)(i,G.move,this.handleDrag),(0,b.addEvent)(i,G.stop,this.handleDragStop))}),S(this,"handleDrag",t=>{const o=(0,W.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let d=i-this.lastX,p=a-this.lastY;if([d,p]=(0,W.snapToGrid)(this.props.grid,d,p),!d&&!p)return;i=this.lastX+d,a=this.lastY+p}const r=(0,W.createCoreData)(this,i,a);if((0,Q.default)("DraggableCore: handleDrag: %j",r),this.props.onDrag(t,r)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(p)}return}this.lastX=i,this.lastY=a}),S(this,"handleDragStop",t=>{if(!this.dragging)return;const o=(0,W.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let p=i-this.lastX||0,v=a-this.lastY||0;[p,v]=(0,W.snapToGrid)(this.props.grid,p,v),i=this.lastX+p,a=this.lastY+v}const r=(0,W.createCoreData)(this,i,a);if(this.props.onStop(t,r)===!1||this.mounted===!1)return!1;const d=this.findDOMNode();d&&this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(d.ownerDocument),(0,Q.default)("DraggableCore: handleDragStop: %j",r),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,d&&((0,Q.default)("DraggableCore: Removing handlers"),(0,b.removeEvent)(d.ownerDocument,G.move,this.handleDrag),(0,b.removeEvent)(d.ownerDocument,G.stop,this.handleDragStop))}),S(this,"onMouseDown",t=>(G=k.mouse,this.handleDragStart(t))),S(this,"onMouseUp",t=>(G=k.mouse,this.handleDragStop(t))),S(this,"onTouchStart",t=>(G=k.touch,this.handleDragStart(t))),S(this,"onTouchEnd",t=>(G=k.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,b.addEvent)(t,k.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:o}=t;(0,b.removeEvent)(o,k.mouse.move,this.handleDrag),(0,b.removeEvent)(o,k.touch.move,this.handleDrag),(0,b.removeEvent)(o,k.mouse.stop,this.handleDragStop),(0,b.removeEvent)(o,k.touch.stop,this.handleDragStop),(0,b.removeEvent)(t,k.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(o)}}findDOMNode(){var t,o;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(o=this.props)===null||o===void 0||(o=o.nodeRef)===null||o===void 0?void 0:o.current:bn.default.findDOMNode(this)}render(){return ue.cloneElement(ue.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};re.default=le;S(le,"displayName","DraggableCore");S(le,"propTypes",{allowAnyClick:j.default.bool,children:j.default.node.isRequired,disabled:j.default.bool,enableUserSelectHack:j.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:j.default.arrayOf(j.default.number),handle:j.default.string,cancel:j.default.string,nodeRef:j.default.object,onStart:j.default.func,onDrag:j.default.func,onStop:j.default.func,onMouseDown:j.default.func,scale:j.default.number,className:ge.dontSetMe,style:ge.dontSetMe,transform:ge.dontSetMe});S(le,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),e.default=void 0;var t=E(x),o=y(Me),i=y(Ae),a=y(Yt),r=C,s=I,d=A,p=y(re),v=y(se);function y(l){return l&&l.__esModule?l:{default:l}}function J(l){if(typeof WeakMap!="function")return null;var c=new WeakMap,g=new WeakMap;return(J=function(u){return u?g:c})(l)}function E(l,c){if(!c&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var g=J(c);if(g&&g.has(l))return g.get(l);var u={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in l)if(h!=="default"&&Object.prototype.hasOwnProperty.call(l,h)){var _=D?Object.getOwnPropertyDescriptor(l,h):null;_&&(_.get||_.set)?Object.defineProperty(u,h,_):u[h]=l[h]}return u.default=l,g&&g.set(l,u),u}function ce(){return ce=Object.assign?Object.assign.bind():function(l){for(var c=1;c<arguments.length;c++){var g=arguments[c];for(var u in g)Object.prototype.hasOwnProperty.call(g,u)&&(l[u]=g[u])}return l},ce.apply(this,arguments)}function $(l,c,g){return c=He(c),c in l?Object.defineProperty(l,c,{value:g,enumerable:!0,configurable:!0,writable:!0}):l[c]=g,l}function He(l){var c=qe(l,"string");return typeof c=="symbol"?c:String(c)}function qe(l,c){if(typeof l!="object"||l===null)return l;var g=l[Symbol.toPrimitive];if(g!==void 0){var u=g.call(l,c||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(l)}class Z extends t.Component{static getDerivedStateFromProps(c,g){let{position:u}=c,{prevPropsPosition:D}=g;return u&&(!D||u.x!==D.x||u.y!==D.y)?((0,v.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:D}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(c){super(c),$(this,"onDragStart",(g,u)=>{if((0,v.default)("Draggable: onDragStart: %j",u),this.props.onStart(g,(0,s.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),$(this,"onDrag",(g,u)=>{if(!this.state.dragging)return!1;(0,v.default)("Draggable: onDrag: %j",u);const D=(0,s.createDraggableData)(this,u),h={x:D.x,y:D.y,slackX:0,slackY:0};if(this.props.bounds){const{x:K,y:z}=h;h.x+=this.state.slackX,h.y+=this.state.slackY;const[ee,xe]=(0,s.getBoundPosition)(this,h.x,h.y);h.x=ee,h.y=xe,h.slackX=this.state.slackX+(K-h.x),h.slackY=this.state.slackY+(z-h.y),D.x=h.x,D.y=h.y,D.deltaX=h.x-this.state.x,D.deltaY=h.y-this.state.y}if(this.props.onDrag(g,D)===!1)return!1;this.setState(h)}),$(this,"onDragStop",(g,u)=>{if(!this.state.dragging||this.props.onStop(g,(0,s.createDraggableData)(this,u))===!1)return!1;(0,v.default)("Draggable: onDragStop: %j",u);const h={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:K,y:z}=this.props.position;h.x=K,h.y=z}this.setState(h)}),this.state={dragging:!1,dragged:!1,x:c.position?c.position.x:c.defaultPosition.x,y:c.position?c.position.y:c.defaultPosition.y,prevPropsPosition:{...c.position},slackX:0,slackY:0,isElementSVG:!1},c.position&&!(c.onDrag||c.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var c,g;return(c=(g=this.props)===null||g===void 0||(g=g.nodeRef)===null||g===void 0?void 0:g.current)!==null&&c!==void 0?c:i.default.findDOMNode(this)}render(){const{axis:c,bounds:g,children:u,defaultPosition:D,defaultClassName:h,defaultClassNameDragging:_,defaultClassNameDragged:K,position:z,positionOffset:ee,scale:xe,...Ve}=this.props;let Ce={},ve=null;const De=!!!z||this.state.dragging,ye=z||D,be={x:(0,s.canDragX)(this)&&De?this.state.x:ye.x,y:(0,s.canDragY)(this)&&De?this.state.y:ye.y};this.state.isElementSVG?ve=(0,r.createSVGTransform)(be,ee):Ce=(0,r.createCSSTransform)(be,ee);const Ke=(0,a.default)(u.props.className||"",h,{[_]:this.state.dragging,[K]:this.state.dragged});return t.createElement(p.default,ce({},Ve,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(u),{className:Ke,style:{...u.props.style,...Ce},transform:ve}))}}e.default=Z,$(Z,"displayName","Draggable"),$(Z,"propTypes",{...p.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),$(Z,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Ne);const{default:$e,DraggableCore:wn}=Ne;ae.exports=$e;ae.exports.default=$e;ae.exports.DraggableCore=wn;var Bn=ae.exports;const kn=Ct(Bn);function On(e,t){return n.jsx(kn,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:n.jsx(vt,{ref:t,...e})})}const Pn=x.forwardRef(On);function Mn(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open draggable dialog"}),n.jsx(O,{open:e,onClose:i,PaperComponent:Pn,"aria-labelledby":"draggable-dialog-title",children:n.jsxs(Y,{sx:{p:1,py:1.5},children:[n.jsx(M,{sx:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),n.jsxs(L,{children:[n.jsx(V,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Oe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function An(){const[e,t]=x.useState(!1),[o,i]=x.useState("paper"),a=d=>()=>{t(!0),i(d)},r=()=>{t(!1)},s=x.useRef(null);return x.useEffect(()=>{if(e){const{current:d}=s;d!==null&&d.focus()}},[e]),n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a("paper"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=paper"}),n.jsx(m,{variant:"outlined",onClick:a("body"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=body"}),n.jsxs(O,{open:e,onClose:r,scroll:o,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:[n.jsx(f,{item:!0,children:n.jsx(M,{children:"Subscribe"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(oe,{color:"secondary",onClick:r,children:n.jsx(ie,{})})})]}),n.jsx(L,{dividers:!0,children:n.jsx(f,{container:!0,spacing:1.25,children:[...new Array(25)].map((d,p)=>n.jsx(f,{item:!0,children:n.jsx(X,{variant:"h6",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})},`${p}-${o}`))})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:r,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:r,sx:{mr:1},children:"Subscribe"})]})]})]})}const In=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis"];function ze({onClose:e,value:t,open:o,...i}){const a=Pe(E=>E.breakpoints.down("md")),[r,s]=x.useState(t),d=x.useRef(null);x.useEffect(()=>{o||s(t)},[t,o]);const p=()=>{d.current!=null&&d.current.focus()},v=()=>{e()},y=()=>{e(r)},J=E=>{s(E.target.value)};return n.jsxs(O,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:a?"sm":"lg",TransitionProps:{onEntering:p},open:o,...i,children:[n.jsx(M,{children:"Phone Ringtone"}),n.jsx(L,{dividers:!0,children:n.jsx(Dt,{row:!a,ref:d,"aria-label":"ringtone",name:"ringtone",value:r,onChange:J,children:In.map(E=>n.jsx(yt,{value:E,control:n.jsx(bt,{}),label:E},E))})}),n.jsxs(N,{children:[n.jsx(m,{color:"error",onClick:v,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:y,sx:{mr:.5},children:"Done"})]})]})}function En(){const[e,t]=x.useState(!1),[o,i]=x.useState("Hangouts Call"),a=()=>{t(!0)},r=s=>{t(!1),s&&i(s)};return n.jsx(Y,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:n.jsxs(pe,{role:"group",children:[n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Interruptions"})}),n.jsx(F,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:a,children:n.jsx(R,{primary:"Phone Ringtone",secondary:o})}),n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Default Notification Ringtone",secondary:"Tethys"})}),n.jsx(ze,{id:"ringtone-menu",keepMounted:!0,open:e,onClose:r,value:o})]})})}ze.propTypes={onClose:P.func,value:P.string,open:P.bool,other:P.any};function Fn(){return n.jsxs(St,{children:[n.jsx(jt,{title:"Dialog",caption:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",directory:"src/pages/components-overview/dialogs",link:"https://mui.com/material-ui/react-dialog/"}),n.jsx(Tt,{sx:{"& .MuiCardContent-root":{textAlign:"center"}},children:n.jsxs(f,{container:!0,spacing:3,children:[n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Basic",codeString:`// SimpleDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<Dialog onClose={handleClose} open={open}>
  <Grid
    container
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
    sx={{ borderBottom: '1px solid {theme.palette.divider}' }}
  >
    <Grid item>
      <DialogTitle>Set backup account</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>

  <List sx={{ p: 2.5 }}>
    {emails.map((email, index) => (
      <ListItemButton selected={selectedValue === email} onClick={() => handleListItemClick(email)} key={email} sx={{ p: 1.25 }}>
        <ListItemAvatar>
          <Avatar src={'/src/assets/images/users/avatar-{index + 1}.png'} />
        </ListItemAvatar>
        <ListItemText primary={email} />
      </ListItemButton>
    ))}
    <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')} sx={{ p: 1.25 }}>
      <ListItemAvatar>
        <Avatar size="sm">
          <PlusOutlined />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Add Account" />
    </ListItemButton>
  </List>
</Dialog>`,children:n.jsx(wt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Alert",codeString:`// AlertDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open alert dialog
</Button>
<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
<Box sx={{ p: 1, py: 1.5 }}>
  <DialogTitle id="alert-dialog-title">Use Google&apos;s location service?</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Disagree
    </Button>
    <Button variant="contained" onClick={handleClose} autoFocus>
      Agree
    </Button>
  </DialogActions>
</Box>
</Dialog>`,children:n.jsx(At,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Form",codeString:`// FormDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open form dialog
</Button>
<Dialog open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(It,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Transitions",codeString:` // TransitionsDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Slide in dialog
</Button>
<Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Use Google&apos;ss location service?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Et,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Customized",codeString:`// CustomizedDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open dialog
</Button>
<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    Modal Title
  </BootstrapDialogTitle>
  <DialogContent dividers sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
      odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button variant="contained" autoFocus onClick={handleClose}>
      Save changes
    </Button>
  </DialogActions>
</BootstrapDialog>`,children:n.jsx(Nt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Full Screen",codeString:`// FullScreenDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open full-screen dialog
</Button>
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseOutlined />
      </IconButton>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
        Set Backup Account
      </Typography>
      <Button autoFocus color="inherit" onClick={handleClose}>
        save
      </Button>
    </Toolbar>
  </AppBar>
  <List sx={{ p: 3 }}>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-1.png'} />
      </ListItemAvatar>
      <ListItemText primary="Phone ringtone" secondary="Default" />
    </ListItemButton>
    <Divider />
    <ListItemButton>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-2.png'} />
      </ListItemAvatar>
      <ListItemText primary="Default notification ringtone" secondary="Tethys" />
    </ListItemButton>
  </List>
</Dialog>`,children:n.jsx(Gt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Sizes",codeString:`// SizesDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open max-width dialog
</Button>
<Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Optional sizes</DialogTitle>
    <DialogContent>
      <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
        <Grid item>
          <Typography variant="h6">Max Width :</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}
            >
              <MenuItem value={false as any}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 0.25 }}>
        <Grid item>
          <Typography variant="h6">Full Width:</Typography>
        </Grid>
        <Grid item>
          <Switch checked={fullWidth} onChange={handleFullWidthChange} />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Ft,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Responsive",codeString:`// ResponsiveDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open responsive dialog
</Button>
<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Rt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Draggable",codeString:`// DraggableDialog
<Button variant="contained" onClick={handleClickOpen}>
  Open draggable dialog
</Button>
<Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
      Subscribe
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,children:n.jsx(Mn,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Scrolling",codeString:`// ScrollDialog.tsx
<Button variant="contained" onClick={handleClickOpen('paper')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=paper
</Button>
<Button variant="outlined" onClick={handleClickOpen('body')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=body
</Button>
<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
>
  <Grid container spacing={2} justifyContent="space-between" alignItems="center">
    <Grid item>
      <DialogTitle>Subscribe</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>
  <DialogContent dividers>
    <Grid container spacing={1.25}>
      {[...new Array(25)].map((i, index) => (
        <Grid item key={'{index}-{scroll}'}>
          <Typography variant="h6">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Grid>
      ))}
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
      Subscribe
    </Button>
  </DialogActions>
</Dialog>`,children:n.jsx(An,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Confirmation",codeString:`// ConfirmationDialog.tsx
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <List role="group">
    <ListItemButton divider disabled>
      <ListItemText primary="Interruptions" />
    </ListItemButton>
    <ListItemButton
      divider
      aria-haspopup="true"
      aria-controls="ringtone-menu"
      aria-label="phone ringtone"
      onClick={handleClickListItem}
    >
      <ListItemText primary="Phone Ringtone" secondary={value} />
    </ListItemButton>
    <ListItemButton divider disabled>
      <ListItemText primary="Default Notification Ringtone" secondary="Tethys" />
    </ListItemButton>
    <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
  </List>
</Box>
<Dialog
  sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
  maxWidth={matchDownMD ? 'sm' : 'lg'}
  TransitionProps={{ onEntering: handleEntering }}
  open={open}
  {...other}
>
  <DialogTitle>Phone Ringtone</DialogTitle>
  <DialogContent dividers>
    <RadioGroup row={!matchDownMD} ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </DialogContent>
  <DialogActions>
    <Button color="error" autoFocus onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleOk} sx={{ mr: 0.5 }}>
      Done
    </Button>
  </DialogActions>
</Dialog>`,children:n.jsx(En,{})})})]})})]})}export{Fn as default};
