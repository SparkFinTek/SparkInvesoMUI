import{c as v,aw as D,ai as L,r as T,j as e,ds as P,C as S,df as I,t as m,T as j,bB as g,a5 as b,e as r,L as x,bd as f,B as y,A as C,d as k,x as E,h as u,ax as B,E as M,H as s,ag as o,J as a,dS as R,P as w}from"./index-BHUrCk0l.js";import{M as N}from"./MenuOutlined-C4MHEERR.js";import{L as i}from"./LineOutlined-DNx1dkju.js";var z={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function _({children:t,window:n}){const l=v(),d=R({disableHysteresis:!0,threshold:10,target:n?n():void 0}),h=l.palette.mode===u.DARK?l.palette.grey[50]:l.palette.grey[800];return T.cloneElement(t,{style:{background:d?h:"transparent"}})}function V(){const t=v(),{isLoggedIn:n}=D(),l=L(t.breakpoints.down("md")),[d,h]=T.useState(!1),c=A=>p=>{p.type==="keydown"&&(p.key==="Tab"||p.key==="Shift")||h(A)};return e.jsx(_,{children:e.jsx(P,{sx:{bgcolor:"transparent",color:"text.primary",boxShadow:"none"},children:e.jsx(S,{disableGutters:l,children:e.jsxs(I,{sx:{px:{xs:1.5,md:0,lg:0},py:2},children:[e.jsxs(m,{direction:"row",sx:{flexGrow:1,display:{xs:"none",md:"block"}},alignItems:"center",children:[e.jsx(j,{sx:{textAlign:"left",display:"inline-block"},children:e.jsx(g,{reverse:!0,to:"/"})}),e.jsx(b,{label:z.VITE_APP_VERSION,variant:"outlined",size:"small",color:"secondary",sx:{mt:.5,ml:1,fontSize:"0.725rem",height:20,"& .MuiChip-label":{px:.5}}})]}),e.jsxs(m,{direction:"row",sx:{"& .header-link":{px:1,"&:hover":{color:"primary.main"}},display:{xs:"none",md:"block"}},spacing:2,children:[e.jsx(r,{className:"header-link",color:"white",component:x,to:n?f:"/login",target:"_blank",underline:"none",children:n?"Dashboard":"Login"}),e.jsx(r,{className:"header-link",color:"white",component:x,to:"/components-overview/buttons",underline:"none",children:"Components"}),e.jsx(r,{className:"header-link",color:"white",href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",underline:"none",children:"Documentation"}),e.jsx(y,{sx:{display:"inline-block"},children:e.jsx(C,{children:e.jsx(k,{component:r,href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",disableElevation:!0,color:"primary",variant:"contained",children:"Purchase Now"})})})]}),e.jsxs(y,{sx:{width:"100%",alignItems:"center",justifyContent:"space-between",display:{xs:"flex",md:"none"}},children:[e.jsx(j,{sx:{textAlign:"left",display:"inline-block"},children:e.jsx(g,{reverse:!0,to:"/"})}),e.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(k,{variant:"outlined",size:"small",color:"warning",component:x,to:"/components-overview/buttons",sx:{mt:.5,height:28},children:"All Components"}),e.jsx(E,{color:"secondary",onClick:c(!0),sx:{"&:hover":{bgcolor:t.palette.mode===u.DARK?"secondary.lighter":"secondary.dark"}},children:e.jsx(N,{style:{color:t.palette.mode===u.DARK?"inherit":t.palette.grey[100]}})})]}),e.jsx(B,{anchor:"top",open:d,onClose:c(!1),sx:{"& .MuiDrawer-paper":{backgroundImage:"none"}},children:e.jsx(y,{sx:{width:"auto","& .MuiListItemIcon-root":{fontSize:"1rem",minWidth:28}},role:"presentation",onClick:c(!1),onKeyDown:c(!1),children:e.jsxs(M,{children:[e.jsx(r,{underline:"none",href:n?f:"/login",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:n?"Dashboard":"Login",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e.jsx(r,{underline:"none",href:"/components-overview/buttons",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:"All Components",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e.jsx(r,{underline:"none",href:"https://github.com/codedthemes/mantis-free-react-admin-template",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:"Free Version",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e.jsx(r,{underline:"none",href:"https://codedthemes.gitbook.io/mantis/",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:"Documentation",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e.jsx(r,{underline:"none",href:"https://codedthemes.support-hub.io/",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:"Support",primaryTypographyProps:{variant:"h6",color:"text.primary"}})]})}),e.jsx(r,{underline:"none",href:"https://mui.com/store/items/mantis-react-admin-dashboard-template/",target:"_blank",children:e.jsxs(s,{children:[e.jsx(o,{children:e.jsx(i,{})}),e.jsx(a,{primary:"Purchase Now",primaryTypographyProps:{variant:"h6",color:"text.primary"}}),e.jsx(b,{color:"primary",label:"v1.0",size:"small"})]})})]})})})]})]})})})})}_.propTypes={children:w.any,window:w.any};export{V as default};
