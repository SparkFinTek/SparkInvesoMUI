import{r as P,j as e,M as N,B as g,ba as A,bb as p,a5 as O,T as o,P as b,a1 as Q,a2 as k,ad as K,G as q,t as $}from"./index-BHUrCk0l.js";import{C as ee,a as ae,b as ie}from"./ComponentSkeleton-Duec2wAU.js";import"./Skeleton-D00KhaeD.js";function B({children:i,value:l,index:n,...c}){return e.jsx("div",{role:"tabpanel",hidden:l!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:l===n&&e.jsx(g,{sx:{pt:2},children:i})})}function E(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function te(){const[i,l]=P.useState(0),n=(v,u)=>{l(u)};return e.jsx(N,{codeString:`// BasicTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
  <Tab label="Tab3" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(g,{sx:{width:"100%"},children:[e.jsx(g,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(A,{value:i,onChange:n,"aria-label":"basic tabs example",children:[e.jsx(p,{label:"Tab1",icon:e.jsx(O,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...E(0)}),e.jsx(p,{label:"Tab2",icon:e.jsx(O,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...E(1)}),e.jsx(p,{label:"Tab3",...E(2)})]})}),e.jsx(B,{value:i,index:0,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(B,{value:i,index:1,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(B,{value:i,index:2,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}B.propTypes={children:b.node,value:b.number,index:b.number,other:b.any};function x({children:i,value:l,index:n,...c}){return e.jsx("div",{role:"tabpanel",hidden:l!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:l===n&&e.jsx(g,{sx:{pt:2},children:i})})}function f(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function re(){const[i,l]=P.useState(0),n=(v,u)=>{l(u)};return e.jsx(N,{codeString:`// ScrollableTabs.tsx
  <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab
    label="Tab2"
    disabled
    icon={<Chip label="99" disabled variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(1)}
  />
  <Tab label="Tab3" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(2)} />
  <Tab label="Tab4" {...a11yProps(3)} />
  <Tab label="Tab5" {...a11yProps(4)} />
  <Tab label="Tab6" {...a11yProps(5)} />
  <Tab label="Tab7" {...a11yProps(6)} />
  <Tab label="Tab8" {...a11yProps(7)} />
  <Tab label="Tab9" {...a11yProps(8)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={4}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={5}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={6}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={7}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={8}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(g,{sx:{width:"100%"},children:[e.jsx(g,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(A,{value:i,onChange:n,variant:"scrollable",scrollButtons:"auto","aria-label":"basic tabs example",children:[e.jsx(p,{label:"Tab1",icon:e.jsx(O,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...f(0)}),e.jsx(p,{label:"Tab2",disabled:!0,icon:e.jsx(O,{label:"99",disabled:!0,variant:"light",size:"small"}),iconPosition:"end",...f(1)}),e.jsx(p,{label:"Tab3",icon:e.jsx(O,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...f(2)}),e.jsx(p,{label:"Tab4",...f(3)}),e.jsx(p,{label:"Tab5",...f(4)}),e.jsx(p,{label:"Tab6",...f(5)}),e.jsx(p,{label:"Tab7",...f(6)}),e.jsx(p,{label:"Tab8",...f(7)}),e.jsx(p,{label:"Tab9",...f(8)})]})}),e.jsx(x,{value:i,index:0,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(x,{value:i,index:2,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(x,{value:i,index:3,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(x,{value:i,index:4,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(x,{value:i,index:5,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(x,{value:i,index:6,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(x,{value:i,index:7,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(x,{value:i,index:8,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}x.propTypes={children:b.node,value:b.number,index:b.number,other:b.any};var L={exports:{}},J={},H={};Object.defineProperty(H,"__esModule",{value:!0});var se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"}}]},name:"book",theme:"outlined"};H.default=se;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return I}});var l=_(P),n=u(H),c=u(Q);function v(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function u(a){return a&&a.__esModule?a:{default:a}}function y(a){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(y=function(s){return s?r:t})(a)}function _(a,t){if(!t&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var r=y(t);if(r&&r.has(a))return r.get(a);var s={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in a)if(m!=="default"&&Object.prototype.hasOwnProperty.call(a,m)){var h=d?Object.getOwnPropertyDescriptor(a,m):null;h&&(h.get||h.set)?Object.defineProperty(s,m,h):s[m]=a[m]}return s.default=a,r&&r.set(a,s),s}function S(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable}))),s.forEach(function(d){v(a,d,r[d])})}return a}function w(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),r.push.apply(r,s)}return r}function C(a,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))}),a}var M=function(a,t){return l.createElement(c.default,C(S({},a),{ref:t,icon:n.default}))},D=l.forwardRef(M),I=D})(J);(function(i,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const n=c(J);function c(u){return u&&u.__esModule?u:{default:u}}const v=n;l.default=v,i.exports=v})(L,L.exports);var ne=L.exports;const le=k(ne);var R={exports:{}},Y={},G={};Object.defineProperty(G,"__esModule",{value:!0});var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 00-12.6 0l-99.8 127.2a7.98 7.98 0 006.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 00-12.7 0zM360 442a40 40 0 1080 0 40 40 0 10-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file-image",theme:"outlined"};G.default=ue;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return I}});var l=_(P),n=u(G),c=u(Q);function v(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function u(a){return a&&a.__esModule?a:{default:a}}function y(a){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(y=function(s){return s?r:t})(a)}function _(a,t){if(!t&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var r=y(t);if(r&&r.has(a))return r.get(a);var s={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in a)if(m!=="default"&&Object.prototype.hasOwnProperty.call(a,m)){var h=d?Object.getOwnPropertyDescriptor(a,m):null;h&&(h.get||h.set)?Object.defineProperty(s,m,h):s[m]=a[m]}return s.default=a,r&&r.set(a,s),s}function S(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable}))),s.forEach(function(d){v(a,d,r[d])})}return a}function w(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),r.push.apply(r,s)}return r}function C(a,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))}),a}var M=function(a,t){return l.createElement(c.default,C(S({},a),{ref:t,icon:n.default}))},D=l.forwardRef(M),I=D})(Y);(function(i,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const n=c(Y);function c(u){return u&&u.__esModule?u:{default:u}}const v=n;l.default=v,i.exports=v})(R,R.exports);var oe=R.exports;const ce=k(oe);var W={exports:{}},Z={},X={};Object.defineProperty(X,"__esModule",{value:!0});var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"};X.default=de;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return I}});var l=_(P),n=u(X),c=u(Q);function v(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function u(a){return a&&a.__esModule?a:{default:a}}function y(a){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(y=function(s){return s?r:t})(a)}function _(a,t){if(!t&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var r=y(t);if(r&&r.has(a))return r.get(a);var s={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in a)if(m!=="default"&&Object.prototype.hasOwnProperty.call(a,m)){var h=d?Object.getOwnPropertyDescriptor(a,m):null;h&&(h.get||h.set)?Object.defineProperty(s,m,h):s[m]=a[m]}return s.default=a,r&&r.set(a,s),s}function S(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable}))),s.forEach(function(d){v(a,d,r[d])})}return a}function w(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);t&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),r.push.apply(r,s)}return r}function C(a,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))}),a}var M=function(a,t){return l.createElement(c.default,C(S({},a),{ref:t,icon:n.default}))},D=l.forwardRef(M),I=D})(Z);(function(i,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const n=c(Z);function c(u){return u&&u.__esModule?u:{default:u}}const v=n;l.default=v,i.exports=v})(W,W.exports);var pe=W.exports;const me=k(pe);function V({children:i,value:l,index:n,...c}){return e.jsx("div",{role:"tabpanel",hidden:l!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:l===n&&e.jsx(g,{sx:{pt:2},children:i})})}function U(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function be(){const[i,l]=P.useState(0),n=(v,u)=>{l(u)};return e.jsx(N,{codeString:`// IconTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
  <Tab label="Profile" icon={<UserOutlined />} iconPosition="start" {...a11yProps(0)} />
  <Tab label="Followers" icon={<BookOutlined />} iconPosition="start" {...a11yProps(1)} />
  <Tab label="Friends" icon={<UsergroupAddOutlined />} iconPosition="start" {...a11yProps(2)} />
  <Tab label="Gallery" icon={<FileImageOutlined />} iconPosition="start" {...a11yProps(3)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>`,children:e.jsxs(g,{sx:{width:"100%"},children:[e.jsx(g,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(A,{value:i,onChange:n,"aria-label":"basic tabs example",children:[e.jsx(p,{label:"Profile",icon:e.jsx(K,{}),iconPosition:"start",...U(0)}),e.jsx(p,{label:"Followers",icon:e.jsx(le,{}),iconPosition:"start",...U(1)}),e.jsx(p,{label:"Friends",icon:e.jsx(me,{}),iconPosition:"start",...U(2)}),e.jsx(p,{label:"Gallery",icon:e.jsx(ce,{}),iconPosition:"start",...U(3)})]})}),e.jsx(V,{value:i,index:0,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(V,{value:i,index:1,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(V,{value:i,index:2,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})}),e.jsx(V,{value:i,index:3,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})})]})})}V.propTypes={children:b.node,value:b.number,index:b.number,other:b.any};function z({children:i,value:l,index:n,...c}){return e.jsx("div",{role:"tabpanel",hidden:l!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...c,children:l===n&&e.jsx(g,{sx:{pt:2},children:i})})}function F(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function ve(){const[i,l]=P.useState(0),n=(v,u)=>{l(u)};return e.jsx(N,{codeString:`// CenteredTabs.tsx
<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
  <Tab
    label="Tab1"
    icon={<Chip label="99" color="primary" variant="light" size="small" />}
    iconPosition="end"
    {...a11yProps(0)}
  />
  <Tab label="Tab2" icon={<Chip label="9" variant="light" size="small" />} iconPosition="end" {...a11yProps(1)} />
  <Tab label="Tab3" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
    purus sem, sagittis eu mauris et, viverra lobortis urna.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
    semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
    cursus in nec est.
  </Typography>
</TabPanel>`,children:e.jsxs(g,{sx:{width:"100%"},children:[e.jsx(g,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(A,{value:i,onChange:n,"aria-label":"basic tabs example",centered:!0,children:[e.jsx(p,{label:"Tab1",icon:e.jsx(O,{label:"99",color:"primary",variant:"light",size:"small"}),iconPosition:"end",...F(0)}),e.jsx(p,{label:"Tab2",icon:e.jsx(O,{label:"9",variant:"light",size:"small"}),iconPosition:"end",...F(1)}),e.jsx(p,{label:"Tab3",...F(2)})]})}),e.jsx(z,{value:i,index:0,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."})}),e.jsx(z,{value:i,index:1,children:e.jsx(o,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})}),e.jsx(z,{value:i,index:2,children:e.jsx(o,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})})]})})}z.propTypes={children:b.node,value:b.number,index:b.number,other:b.any};function T({children:i,value:l,index:n,...c}){return e.jsx("div",{role:"tabpanel",hidden:l!==n,id:`vertical-tabpanel-${n}`,"aria-labelledby":`vertical-tab-${n}`,...c,children:l===n&&e.jsx(g,{sx:{p:3,height:{xs:"100%",sm:"auto"},overflowX:{xs:"scroll",sm:"auto"}},children:i})})}function j(i){return{id:`vertical-tab-${i}`,"aria-controls":`vertical-tabpanel-${i}`}}function he(){const[i,l]=P.useState(0),n=(v,u)=>{l(u)};return e.jsx(N,{codeString:`// VerticalTabs.tsx
<Tabs
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ borderRight: 1, borderColor: 'divider' }}
>
  <Tab label="Tab 1" {...a11yProps(0)} />
  <Tab label="Tab 2" {...a11yProps(1)} />
  <Tab label="Tab 3" {...a11yProps(2)} />
  <Tab label="Tab 4" {...a11yProps(3)} />
  <Tab label="Tab 5" {...a11yProps(4)} />
  <Tab label="Tab 6" {...a11yProps(5)} />
  <Tab label="Tab 7" {...a11yProps(6)} />
</Tabs>
<TabPanel value={value} index={0}>
  <Typography variant="h6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor
    augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper,
    posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et
    scelerisque erat fringilla quis.
  </Typography>
</TabPanel>
<TabPanel value={value} index={1}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={2}>
  <Typography variant="h6">
    Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat
    aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non.
    Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum.
    Nullam mollis sagittis dolor.
  </Typography>
</TabPanel>
<TabPanel value={value} index={3}>
  <Typography variant="h6">
    Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium
    quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et,
    eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam
    hendrerit. Ut vitae tellus enim.
  </Typography>
</TabPanel>
<TabPanel value={value} index={4}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={5}>
  <Typography variant="h6">
    Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean
    consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa,
    tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id
    sollicitudin leo elementum.
  </Typography>
</TabPanel>
<TabPanel value={value} index={6}>
  <Typography variant="h6">
    Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla.
    Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo
    nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum.
  </Typography>
</TabPanel>`,children:e.jsxs(g,{sx:{flexGrow:1,bgcolor:"background.paper",display:"flex",height:224},children:[e.jsxs(A,{orientation:"vertical",variant:"scrollable",value:i,onChange:n,"aria-label":"Vertical tabs example",sx:{borderRight:1,borderColor:"divider"},children:[e.jsx(p,{label:"Tab 1",...j(0)}),e.jsx(p,{label:"Tab 2",...j(1)}),e.jsx(p,{label:"Tab 3",...j(2)}),e.jsx(p,{label:"Tab 4",...j(3)}),e.jsx(p,{label:"Tab 5",...j(4)}),e.jsx(p,{label:"Tab 6",...j(5)}),e.jsx(p,{label:"Tab 7",...j(6)})]}),e.jsx(T,{value:i,index:0,children:e.jsx(o,{variant:"h6",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est quam, mattis non dui sed, pretium dignissim elit. Nam auctor augue et magna rutrum dictum. Nulla facilisi. Sed consectetur libero vitae sem ultrices fermentum. Donec ac tortor ullamcorper, posuere est congue, pharetra velit. Nullam vehicula elit elementum pellentesque elementum. Duis consectetur sapien purus, et scelerisque erat fringilla quis."})}),e.jsx(T,{value:i,index:1,children:e.jsx(o,{variant:"h6",children:"Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa, tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id sollicitudin leo elementum."})}),e.jsx(T,{value:i,index:2,children:e.jsx(o,{variant:"h6",children:"Curabitur vitae condimentum magna. In posuere rhoncus dolor sit amet mattis. Suspendisse ligula enim, varius at consequat aliquam, pharetra ac velit. Morbi a augue vel leo suscipit convallis. Proin semper pretium dolor, ac pharetra diam gravida non. Etiam velit orci, elementum et viverra ornare, vestibulum accumsan dui. Suspendisse sagittis tristique metus non interdum. Nullam mollis sagittis dolor."})}),e.jsx(T,{value:i,index:3,children:e.jsx(o,{variant:"h6",children:"Quisque posuere luctus turpis vel aliquam. Maecenas consequat tempus nisl, ac ultrices lacus laoreet dignissim. Donec pretium quis turpis sed rutrum. Etiam fermentum ipsum vel urna scelerisque vulputate. Phasellus nulla dui, bibendum id ligula et, eleifend efficitur orci. Integer vel purus nec lectus porta interdum. Aliquam finibus lectus id odio dictum, in facilisis quam hendrerit. Ut vitae tellus enim."})}),e.jsx(T,{value:i,index:4,children:e.jsx(o,{variant:"h6",children:"Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla. Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum."})}),e.jsx(T,{value:i,index:5,children:e.jsx(o,{variant:"h6",children:"Vestibulum felis felis, venenatis non eleifend nec, eleifend gravida enim. In tristique nunc ut dui sodales dapibus. Aenean consequat eros sed erat sagittis lobortis. Proin turpis leo, pulvinar ac eros feugiat, feugiat varius odio. Nullam quam massa, tempus ac egestas ac, dapibus sed nisl. Vivamus vehicula cursus magna vitae pretium. Nunc dictum elit at felis malesuada, id sollicitudin leo elementum."})}),e.jsx(T,{value:i,index:6,children:e.jsx(o,{variant:"h6",children:"Vestibulum ullamcorper sem ac velit dictum ultricies. Vestibulum orci dolor, laoreet vehicula eleifend et, pharetra eget nulla. Vivamus arcu nisl, tincidunt et turpis semper, ultrices porta neque. Nam vestibulum, sapien sit amet malesuada dignissim, justo nisi dictum nisl, non maximus quam risus vitae nisi. Fusce vitae nisl ultrices, hendrerit libero non, pellentesque ipsum."})})]})})}T.propTypes={children:b.node,value:b.number,index:b.number,other:b.any};function ye(){return e.jsxs(ee,{children:[e.jsx(ae,{title:"Tabs",caption:"Tabs make it easy to explore and switch between different views.",directory:"src/pages/components-overview/tabs",link:"https://mui.com/material-ui/react-tabs/"}),e.jsx(ie,{children:e.jsxs(q,{container:!0,spacing:3,children:[e.jsx(q,{item:!0,xs:12,lg:6,children:e.jsxs($,{spacing:1,children:[e.jsx(o,{variant:"h5",children:"Basic"}),e.jsx(te,{})]})}),e.jsx(q,{item:!0,xs:12,lg:6,children:e.jsxs($,{spacing:1,children:[e.jsx(o,{variant:"h5",children:"Color Tab with Disabled Tab + Scrollable Tabs"}),e.jsx(re,{})]})}),e.jsx(q,{item:!0,xs:12,lg:6,children:e.jsxs($,{spacing:1,children:[e.jsx(o,{variant:"h5",children:"Icon Tabs"}),e.jsx(be,{})]})}),e.jsx(q,{item:!0,xs:12,lg:6,children:e.jsxs($,{spacing:1,children:[e.jsx(o,{variant:"h5",children:"Centered Tabs"}),e.jsx(ve,{})]})}),e.jsx(q,{item:!0,xs:12,lg:6,children:e.jsxs($,{spacing:1,children:[e.jsx(o,{variant:"h5",children:"Vertical Tabs"}),e.jsx(he,{})]})})]})})]})}export{ye as default};
