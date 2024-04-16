import{r as O,bY as I,bX as $,bZ as k,aR as E,b$ as H,bi as N,bj as g,j as e,c5 as z,c6 as A,T as S,ck as ne,M as U,a1 as F,a2 as X,O as ie,G as R}from"./index-BHUrCk0l.js";import{C as oe,a as re,b as le}from"./ComponentSkeleton-Duec2wAU.js";import"./Skeleton-D00KhaeD.js";const se=O.createContext({}),B=se;function ae(n){return I("MuiTimeline",n)}$("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function w(n){return n==="alternate-reverse"?"positionAlternateReverse":`position${k(n)}`}const ce=["position","className"],me=n=>{const{position:i,classes:l}=n,s={root:["root",i&&w(i)]};return A(s,ae,l)},pe=E("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,l.position&&i[w(l.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),ue=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimeline"}),{position:m="right",className:c}=s,u=N(s,ce),d=g({},s,{position:m}),v=me(d),j=O.useMemo(()=>({position:m}),[m]);return e.jsx(B.Provider,{value:j,children:e.jsx(pe,g({className:z(v.root,c),ownerState:d,ref:l},u))})}),V=ue;function de(n){return I("MuiTimelineConnector",n)}$("MuiTimelineConnector",["root"]);const fe=["className"],Te=n=>{const{classes:i}=n;return A({root:["root"]},de,i)},xe=E("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(n,i)=>i.root})(({theme:n})=>({width:2,backgroundColor:(n.vars||n).palette.grey[400],flexGrow:1})),he=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineConnector"}),{className:m}=s,c=N(s,fe),u=s,d=Te(u);return e.jsx(xe,g({className:z(d.root,m),ownerState:u,ref:l},c))}),C=he;function ye(n){return I("MuiTimelineContent",n)}const ge=$("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Ce=ge,ve=["className"],Oe=n=>{const{position:i,classes:l}=n,s={root:["root",w(i)]};return A(s,ye,l)},je=E(S,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,i[w(l.position)]]}})(({ownerState:n})=>g({flex:1,padding:"6px 16px",textAlign:"left"},n.position==="left"&&{textAlign:"right"})),_e=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineContent"}),{className:m}=s,c=N(s,ve),{position:u}=O.useContext(B),d=g({},s,{position:u||"right"}),v=Oe(d);return e.jsx(je,g({component:"div",className:z(v.root,m),ownerState:d,ref:l},c))}),f=_e;function Se(n){return I("MuiTimelineDot",n)}$("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const be=["className","color","variant"],we=n=>{const{color:i,variant:l,classes:s}=n,m={root:["root",l,i!=="inherit"&&`${l}${k(i)}`]};return A(m,Se,s)},De=E("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,i[l.color!=="inherit"&&`${l.variant}${k(l.color)}`],i[l.variant]]}})(({ownerState:n,theme:i})=>g({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(i.vars||i).shadows[1],margin:"11.5px 0"},n.variant==="filled"&&g({borderColor:"transparent"},n.color!=="inherit"&&g({},n.color==="grey"?{color:(i.vars||i).palette.grey[50],backgroundColor:(i.vars||i).palette.grey[400]}:{color:(i.vars||i).palette[n.color].contrastText,backgroundColor:(i.vars||i).palette[n.color].main})),n.variant==="outlined"&&g({boxShadow:"none",backgroundColor:"transparent"},n.color!=="inherit"&&g({},n.color==="grey"?{borderColor:(i.vars||i).palette.grey[400]}:{borderColor:(i.vars||i).palette[n.color].main})))),Me=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineDot"}),{className:m,color:c="grey",variant:u="filled"}=s,d=N(s,be),v=g({},s,{color:c,variant:u}),j=we(v);return e.jsx(De,g({className:z(j.root,m),ownerState:v,ref:l},d))}),T=Me;function Pe(n){return I("MuiTimelineOppositeContent",n)}const Re=$("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Ie=Re,$e=["className"],Ee=n=>{const{position:i,classes:l}=n,s={root:["root",w(i)]};return A(s,Pe,l)},He=E(S,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,i[w(l.position)]]}})(({ownerState:n})=>g({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},n.position==="left"&&{textAlign:"left"})),Q=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineOppositeContent"}),{className:m}=s,c=N(s,$e),{position:u}=O.useContext(B),d=g({},s,{position:u||"left"}),v=Ee(d);return e.jsx(He,g({component:"div",className:z(v.root,m),ownerState:d,ref:l},c))});Q.muiName="TimelineOppositeContent";const b=Q;function Ne(n){return I("MuiTimelineItem",n)}$("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const ze=["position","className"],Ae=n=>{const{position:i,classes:l,hasOppositeContent:s}=n,m={root:["root",w(i),!s&&"missingOppositeContent"]};return A(m,Ne,l)},Ue=E("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:l}=n;return[i.root,i[w(l.position)]]}})(({ownerState:n})=>g({listStyle:"none",display:"flex",position:"relative",minHeight:70},n.position==="left"&&{flexDirection:"row-reverse"},(n.position==="alternate"||n.position==="alternate-reverse")&&{[`&:nth-of-type(${n.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Ce.root}`]:{textAlign:"right"},[`& .${Ie.root}`]:{textAlign:"left"}}},!n.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),Ve=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineItem"}),{position:m,className:c}=s,u=N(s,ze),{position:d}=O.useContext(B);let v=!1;O.Children.forEach(s.children,P=>{ne(P,["TimelineOppositeContent"])&&(v=!0)});const j=g({},s,{position:m||d||"right",hasOppositeContent:v}),D=Ae(j),M=O.useMemo(()=>({position:j.position}),[j.position]);return e.jsx(B.Provider,{value:M,children:e.jsx(Ue,g({className:z(D.root,c),ownerState:j,ref:l},u))})}),x=Ve;function We(n){return I("MuiTimelineSeparator",n)}$("MuiTimelineSeparator",["root"]);const Be=["className"],qe=n=>{const{classes:i}=n;return A({root:["root"]},We,i)},Ge=E("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(n,i)=>i.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),Le=O.forwardRef(function(i,l){const s=H({props:i,name:"MuiTimelineSeparator"}),{className:m}=s,c=N(s,Be),u=s,d=qe(u);return e.jsx(Ge,g({className:z(d.root,m),ownerState:u,ref:l},c))}),h=Le;function ke(){return e.jsx(U,{title:"Basic",codeString:`<Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{children:[e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Eat"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Code"})]}),e.jsxs(x,{sx:{minHeight:"auto"},children:[e.jsx(h,{children:e.jsx(T,{variant:"outlined",color:"primary"})}),e.jsx(f,{children:"Sleep"})]})]})})}function Fe(){return e.jsx(U,{title:"Left Positioned",codeString:`<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{position:"left",children:[e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Eat"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Code"})]}),e.jsxs(x,{sx:{minHeight:"auto"},children:[e.jsx(h,{children:e.jsx(T,{variant:"outlined",color:"primary"})}),e.jsx(f,{children:"Sleep"})]})]})})}function Xe(){return e.jsx(U,{title:"Alternating Positioned",codeString:`<Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{position:"alternate",children:[e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Eat"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Code"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Sleep"})]}),e.jsxs(x,{sx:{minHeight:"auto"},children:[e.jsx(h,{children:e.jsx(T,{variant:"outlined",color:"primary"})}),e.jsx(f,{children:"Repeat"})]})]})})}function Ye(){return e.jsx(U,{title:"Colors",codeString:`<Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="success" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="warning" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="error" />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{position:"alternate",children:[e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Eat"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"success"}),e.jsx(C,{})]}),e.jsx(f,{children:"Code"})]}),e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"warning"}),e.jsx(C,{})]}),e.jsx(f,{children:"Sleep"})]}),e.jsxs(x,{sx:{minHeight:"auto"},children:[e.jsx(h,{children:e.jsx(T,{variant:"outlined",color:"error"})}),e.jsx(f,{children:"Repeat"})]})]})})}function Ze(){return e.jsx(U,{title:"Opposite Content",codeString:`<Timeline position="alternate">
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">10:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">12:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineOppositeContent color="text.secondary">9:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{position:"alternate",children:[e.jsxs(x,{children:[e.jsx(b,{color:"text.secondary",children:"09:30 am"}),e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Eat"})]}),e.jsxs(x,{children:[e.jsx(b,{color:"text.secondary",children:"10:00 am"}),e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Code"})]}),e.jsxs(x,{children:[e.jsx(b,{color:"text.secondary",children:"12:00 am"}),e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Sleep"})]}),e.jsxs(x,{sx:{minHeight:"auto"},children:[e.jsx(b,{color:"text.secondary",children:"9:00 am"}),e.jsxs(h,{children:[e.jsx(T,{variant:"outlined",color:"primary"}),e.jsx(C,{})]}),e.jsx(f,{children:"Repeat"})]})]})})}var q={exports:{}},K={},Y={};Object.defineProperty(Y,"__esModule",{value:!0});var Je={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M275 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm613 144H768c0-39.8-32.2-72-72-72H200c-39.8 0-72 32.2-72 72v248c0 3.4.2 6.7.7 9.9-.5 7-.7 14-.7 21.1 0 176.7 143.3 320 320 320 160.1 0 292.7-117.5 316.3-271H888c39.8 0 72-32.2 72-72V497c0-39.8-32.2-72-72-72zM696 681h-1.1c.7 7.6 1.1 15.2 1.1 23 0 137-111 248-248 248S200 841 200 704c0-7.8.4-15.4 1.1-23H200V425h496v256zm192-8H776V497h112v176zM613 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm-170 0c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36z"}}]},name:"coffee",theme:"outlined"};Y.default=Je;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return W}});var i=d(O),l=c(Y),s=c(F);function m(t,o,r){return o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}function c(t){return t&&t.__esModule?t:{default:t}}function u(t){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(u=function(a){return a?r:o})(t)}function d(t,o){if(!o&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=u(o);if(r&&r.has(t))return r.get(t);var a={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var _=p?Object.getOwnPropertyDescriptor(t,y):null;_&&(_.get||_.set)?Object.defineProperty(a,y,_):a[y]=t[y]}return a.default=t,r&&r.set(t,a),a}function v(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),a.forEach(function(p){m(t,p,r[p])})}return t}function j(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),r.push.apply(r,a)}return r}function D(t,o){return o=o??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}),t}var M=function(t,o){return i.createElement(s.default,D(v({},t),{ref:o,icon:l.default}))},P=i.forwardRef(M),W=P})(K);(function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;const l=s(K);function s(c){return c&&c.__esModule?c:{default:c}}const m=l;i.default=m,n.exports=m})(q,q.exports);var Qe=q.exports;const Ke=X(Qe);var G={exports:{}},ee={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"};Z.default=et;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return W}});var i=d(O),l=c(Z),s=c(F);function m(t,o,r){return o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}function c(t){return t&&t.__esModule?t:{default:t}}function u(t){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(u=function(a){return a?r:o})(t)}function d(t,o){if(!o&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=u(o);if(r&&r.has(t))return r.get(t);var a={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var _=p?Object.getOwnPropertyDescriptor(t,y):null;_&&(_.get||_.set)?Object.defineProperty(a,y,_):a[y]=t[y]}return a.default=t,r&&r.set(t,a),a}function v(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),a.forEach(function(p){m(t,p,r[p])})}return t}function j(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),r.push.apply(r,a)}return r}function D(t,o){return o=o??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}),t}var M=function(t,o){return i.createElement(s.default,D(v({},t),{ref:o,icon:l.default}))},P=i.forwardRef(M),W=P})(ee);(function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;const l=s(ee);function s(c){return c&&c.__esModule?c:{default:c}}const m=l;i.default=m,n.exports=m})(G,G.exports);var tt=G.exports;const nt=X(tt);var L={exports:{}},te={},J={};Object.defineProperty(J,"__esModule",{value:!0});var it={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0011.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 00-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 00-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"}}]},name:"retweet",theme:"outlined"};J.default=it;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return W}});var i=d(O),l=c(J),s=c(F);function m(t,o,r){return o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}function c(t){return t&&t.__esModule?t:{default:t}}function u(t){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(u=function(a){return a?r:o})(t)}function d(t,o){if(!o&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=u(o);if(r&&r.has(t))return r.get(t);var a={__proto__:null},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var _=p?Object.getOwnPropertyDescriptor(t,y):null;_&&(_.get||_.set)?Object.defineProperty(a,y,_):a[y]=t[y]}return a.default=t,r&&r.set(t,a),a}function v(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),a.forEach(function(p){m(t,p,r[p])})}return t}function j(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),r.push.apply(r,a)}return r}function D(t,o){return o=o??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}),t}var M=function(t,o){return i.createElement(s.default,D(v({},t),{ref:o,icon:l.default}))},P=i.forwardRef(M),W=P})(te);(function(n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;const l=s(te);function s(c){return c&&c.__esModule?c:{default:c}}const m=l;i.default=m,n.exports=m})(L,L.exports);var ot=L.exports;const rt=X(ot);function lt(){return e.jsx(U,{title:"Customized",codeString:`<Timeline
  position="alternate"
  sx={{
    '& .MuiTimelineItem-root': { minHeight: 90 },
    '& .MuiTimelineOppositeContent-root': { mt: 0.5 },
    '& .MuiTimelineDot-root': {
      borderRadius: 1.25,
      boxShadow: 'none',
      margin: 0,
      ml: 1.25,
      mr: 1.25,
      p: 1,
      '& .MuiSvgIcon-root': { fontSize: '1.2rem' }
    },
    '& .MuiTimelineContent-root': { borderRadius: 1, bgcolor: 'secondary.lighter', height: '100%' },
    '& .MuiTimelineConnector-root': { border: '1px dashed', borderColor: 'secondary.light', bgcolor: 'transparent' }
  }}
>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      9:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
        <CoffeeOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6"> Eat </Typography>
      <Typography color="text.secondary">Because you need strength</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent variant="body2" color="text.secondary">
      10:00 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
        <DesktopOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6"> Code </Typography>
      <Typography color="text.secondary">Because it&apos;s awesome!</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      11:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'warning.main', bgcolor: 'warning.lighter' }}>
        <GiftOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6"> Gift </Typography>
      <Typography color="text.secondary">Because you need.</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      12:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
        <RetweetOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6"> Repeat </Typography>
      <Typography color="text.secondary">This is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>`,children:e.jsxs(V,{position:"alternate",sx:{"& .MuiTimelineItem-root":{minHeight:90},"& .MuiTimelineOppositeContent-root":{mt:.5},"& .MuiTimelineDot-root":{borderRadius:1.25,boxShadow:"none",margin:0,ml:1.25,mr:1.25,p:1,"& .MuiSvgIcon-root":{fontSize:"1.2rem"}},"& .MuiTimelineContent-root":{borderRadius:1,bgcolor:"secondary.lighter",height:"100%"},"& .MuiTimelineConnector-root":{border:"1px dashed",borderColor:"secondary.light",bgcolor:"transparent"}},children:[e.jsxs(x,{children:[e.jsx(b,{align:"right",variant:"body2",color:"text.secondary",children:"9:30 am"}),e.jsxs(h,{children:[e.jsx(T,{sx:{color:"primary.main",bgcolor:"primary.lighter"},children:e.jsx(Ke,{style:{fontSize:"1.3rem"}})}),e.jsx(C,{})]}),e.jsxs(f,{children:[e.jsx(S,{variant:"h6",children:"Eat"}),e.jsx(S,{color:"text.secondary",children:"Because you need strength"})]})]}),e.jsxs(x,{children:[e.jsx(b,{variant:"body2",color:"text.secondary",children:"10:00 am"}),e.jsxs(h,{children:[e.jsx(T,{sx:{color:"success.main",bgcolor:"success.lighter"},children:e.jsx(nt,{style:{fontSize:"1.3rem"}})}),e.jsx(C,{})]}),e.jsxs(f,{children:[e.jsx(S,{variant:"h6",children:"Code"}),e.jsx(S,{color:"text.secondary",children:"Because it's awesome!"})]})]}),e.jsxs(x,{children:[e.jsx(b,{align:"right",variant:"body2",color:"text.secondary",children:"11:30 am"}),e.jsxs(h,{children:[e.jsx(T,{sx:{color:"warning.main",bgcolor:"warning.lighter"},children:e.jsx(ie,{style:{fontSize:"1.3rem"}})}),e.jsx(C,{})]}),e.jsxs(f,{children:[e.jsx(S,{variant:"h6",children:"Gift"}),e.jsx(S,{color:"text.secondary",children:"Because you need."})]})]}),e.jsxs(x,{children:[e.jsx(b,{align:"right",variant:"body2",color:"text.secondary",children:"12:30 am"}),e.jsxs(h,{children:[e.jsx(T,{sx:{color:"error.main",bgcolor:"error.lighter"},children:e.jsx(rt,{style:{fontSize:"1.3rem"}})}),e.jsx(C,{})]}),e.jsxs(f,{children:[e.jsx(S,{variant:"h6",children:"Repeat"}),e.jsx(S,{color:"text.secondary",children:"This is the life you love!"})]})]})]})})}function mt(){return e.jsxs(oe,{children:[e.jsx(re,{title:"Timeline",caption:"The timeline displays a list of events in chronological order.",directory:"src/pages/components-overview/timeline",link:"https://mui.com/material-ui/react-timeline/"}),e.jsx(le,{children:e.jsxs(R,{container:!0,spacing:3,children:[e.jsx(R,{item:!0,xs:12,sm:6,children:e.jsx(ke,{})}),e.jsx(R,{item:!0,xs:12,sm:6,children:e.jsx(Fe,{})}),e.jsx(R,{item:!0,xs:12,sm:6,children:e.jsx(Xe,{})}),e.jsx(R,{item:!0,xs:12,sm:6,children:e.jsx(Ye,{})}),e.jsx(R,{item:!0,xs:12,lg:6,children:e.jsx(Ze,{})}),e.jsx(R,{item:!0,xs:12,lg:6,children:e.jsx(lt,{})})]})})]})}export{mt as default};
