import{bW as x,j as t,bX as P,bY as y,aR as B,cd as M,ce as g,bZ as l,bj as n,ca as R,r as u,b$ as S,bi as _,c5 as H,c6 as E}from"./index-BHUrCk0l.js";const O=x(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=x(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=x(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return y("MuiCheckbox",o)}const N=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),h=N,F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],W=o=>{const{classes:e,indeterminate:c,color:a,size:r}=o,s={root:["root",c&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=E(s,L,e);return n({},e,d)},T=B(M,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:R(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${h.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),X=t.jsx(U,{}),Y=t.jsx(O,{}),Z=t.jsx(V,{}),q=u.forwardRef(function(e,c){var a,r;const s=S({props:e,name:"MuiCheckbox"}),{checkedIcon:d=X,color:z="primary",icon:f=Y,indeterminate:i=!1,indeterminateIcon:m=Z,inputProps:I,size:p="medium",className:$}=s,j=_(s,F),C=i?m:f,k=i?m:d,b=n({},s,{color:z,indeterminate:i,size:p}),v=W(b);return t.jsx(T,n({type:"checkbox",inputProps:n({"data-indeterminate":i},I),icon:u.cloneElement(C,{fontSize:(a=C.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:b,ref:c,className:H(v.root,$)},j,{classes:v}))}),A=q;export{A as C};
