import{j as e,M as l,G as n,d as t,dt as o,aR as P,du as D,r as h,P as b,dv as v,$ as O,d3 as z,T as p,B as W,by as C,aG as N,_ as I,aH as q,cD as Y,dw as E,t as x,aj as f,R as B,F as g,v as m,dx as R,dy as L,ab as F,dz as G,aK as V,S as j,cl as M,br as H,cE as A,aO as a}from"./index-BHUrCk0l.js";import{C as U,a as Z,b as K}from"./ComponentSkeleton-Duec2wAU.js";import{C as $}from"./CheckCircleFilled-PwxkCJzK.js";import{C as T}from"./Checkbox-CD0fXkyM.js";import{S as _}from"./Slider-WmQyGqAk.js";import{M as J}from"./MinusOutlined-oI906KYU.js";import"./Skeleton-D00KhaeD.js";import"./visuallyHidden-J1ppfhCd.js";function Q(){return e.jsx(l,{title:"Color Variants",codeString:`<Button variant="contained" onClick={() => enqueueSnackbar('This is default message.')}>
  Default
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('his is success message', { variant: 'success' })}>
  success
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('his is warning message', { variant: 'warning' })}>
  Warning
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('his is info message', { variant: 'info' })}>
  Info
</Button>
<Button variant="contained" onClick={() => enqueueSnackbar('his is error message', { variant: 'error' })}>
  Error
</Button>
`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is default message."),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>o("his is success message",{variant:"success"}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>o("This is warning message",{variant:"warning"}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>o("This is info message",{variant:"info"}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>o("This is info message",{variant:"error"}),children:"Error"})})]})})}const X=P(D)({"@media (min-width:600px)":{minWidth:"344px !important"}});function w({id:r,message:i},s){const{closeSnackbar:c}=v(),[u,k]=h.useState(!1),d=h.useCallback(()=>{k(y=>!y)},[]),S=h.useCallback(()=>{c(r)},[r,c]);return e.jsx(X,{ref:s,children:e.jsxs(O,{sx:{bgcolor:"warning.light",width:"100%"},children:[e.jsxs(z,{sx:{padding:"8px 8px 8px 16px",justifyContent:"space-between"},children:[e.jsx(p,{variant:"subtitle2",children:i}),e.jsxs(W,{sx:{marginLeft:"auto"},children:[e.jsx(C,{"aria-label":"Show more",sx:{p:1,transition:"all .2s",transform:u?"rotate(180deg)":"rotate(0deg)"},onClick:d,children:e.jsx(N,{})}),e.jsx(C,{sx:{p:1,transition:"all .2s"},onClick:S,children:e.jsx(I,{})})]})]}),e.jsx(q,{in:u,timeout:"auto",unmountOnExit:!0,children:e.jsxs(Y,{sx:{padding:2,borderTopLeftRadius:0,borderTopRightRadius:0,bgcolor:"warning.lighter"},children:[e.jsx(p,{gutterBottom:!0,children:"PDF ready"}),e.jsx(t,{size:"small",startIcon:e.jsx($,{style:{fontSize:16,marginTop:-2}}),sx:{"&:hover":{bgcolor:"transparent"}},children:"Download now"})]})})]})})}const ee=h.forwardRef(w);function ne(){return e.jsx(l,{title:"Custom Component",codeString:`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    enqueueSnackbar("You're report is ready", {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      content: (key: SnackbarKey, message: SnackbarMessage) => <CustomNotistack id={key} message={message} />
    });
  }}
>
  Show snackbar
</Button>`,children:e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{o("You're report is ready",{anchorOrigin:{vertical:"bottom",horizontal:"right"},content:(i,s)=>e.jsx(ee,{id:i,message:s})})},children:"Show snackbar"})})}w.propTypes={id:b.any,message:b.any};function te(){const[r,i]=h.useState(!1),s=u=>{i(u.target.checked),E(u.target.checked)};return e.jsxs(l,{title:"Dense",codeString:`<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
Dense margins
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => enqueueSnackbar('Your notification here')}>
  Show snackbar
</Button>`,children:[e.jsx(T,{checked:r,onChange:s,inputProps:{"aria-label":"controlled"}}),"Dense margins",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("Your notification here"),children:"Show snackbar"})]})}function ae(){const{closeSnackbar:r}=v();return e.jsx(l,{title:"Dismiss Programmatically",codeString:`<Button variant="outlined" 
  onClick={() => enqueueSnackbar('No connection!', { variant: 'error',persist: true, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }})}>
  Back Online
</Button>
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => closeSnackbar()}>
    Back Online
</Button>`,children:e.jsxs(x,{flexDirection:"row",justifyContent:"space-between",children:[e.jsx(t,{variant:"outlined",fullWidth:!0,color:"error",sx:{marginBlockStart:2,marginInlineEnd:2},onClick:()=>o("No connection!",{variant:"error",persist:!0,anchorOrigin:{horizontal:"center",vertical:"bottom"}}),children:"Simulate connection loss"}),e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>r(),children:"Back Online"})]})})}function re(){const[r,i]=h.useState(1),s=(d,S)=>{typeof S=="number"&&i(S)},c=[{value:1},{value:3},{value:5},{value:7},{value:9},{value:11}];function u(d){return d===11?"persist":`${d}s`}return e.jsxs(l,{title:"Hide Duration",codeString:`<Button
  variant="contained"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    if (value !== 11) {
      enqueueSnackbar('Your notification here', { autoHideDuration: value * 1000 });
    } else {
      enqueueSnackbar('Your notification here', { persist: true });
    }
  }}
>
  Show Snackbar
</Button>`,children:[e.jsx(_,{value:r,min:1,step:2,max:11,valueLabelDisplay:"on",marks:c,getAriaValueText:u,valueLabelFormat:u,onChange:s}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{r!==11?o("Your notification here",{autoHideDuration:r*1e3}):o("Your notification here",{persist:!0})},children:"Show Snackbar"})]})}function oe(){const[r,i]=h.useState("usedefault"),s=u=>{i(u.target.value)};return e.jsxs(l,{title:"With Icons",codeString:`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here', { variant: 'info' });
  handlerIconVariants(value);
}}
>
  Show Snackbar
</Button>`,children:[e.jsx(f,{children:e.jsxs(B,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:s,name:"row-radio-buttons-group",children:[e.jsx(g,{value:"usedefault",control:e.jsx(m,{}),label:"Use Default"}),e.jsx(g,{value:"useemojis",control:e.jsx(m,{}),label:"Use Emojis"}),e.jsx(g,{value:"hide",control:e.jsx(m,{}),label:"Hide"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{o("Your notification here",{variant:"info"}),R(r)},children:"Show Snackbar"})]})}function ie(){const r={minWidth:"auto"},{snackbar:i}=L(),[s,c]=h.useState(3),u=()=>{o("Your notification here"),G(s)};return e.jsxs(l,{title:"Maximum snackbars",codeString:`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here');
  handlerIncrease(value);
}}
>
  Show Snackbar
</Button>`,children:[e.jsxs(x,{justifyContent:"space-between",flexDirection:"row",children:[e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:i.maxStack===0,onClick:()=>c(d=>d-1),children:e.jsx(J,{})}),e.jsxs(p,{variant:"body1",children:["stack up to ",s]}),e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:i.maxStack===4,onClick:()=>c(d=>d+1),children:e.jsx(F,{})})]}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>u(),children:"Show Snackbar"})]})}function se(){return e.jsx(l,{title:"Positioning",codeString:`<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is default message.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    })
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('his is success message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    })
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is warning message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }
>
  Top-right
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    })
  }
>
  Bottom-left
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    })
  }
>
  Bottom-center
</Button>
<Button
  variant="contained"
  onClick={() =>
    enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    })
  }
>
  Bottom-Right
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is default message.",{anchorOrigin:{vertical:"top",horizontal:"left"}}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("his is success message",{anchorOrigin:{vertical:"top",horizontal:"center"}}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is warning message",{anchorOrigin:{vertical:"top",horizontal:"right"}}),children:"Top-right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"left"}}),children:"Bottom-left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"center"}}),children:"Bottom-center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>o("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"right"}}),children:"Bottom-Right"})})]})})}function ce(){const[r,i]=V.useState(!0),s=u=>{i(u.target.checked)};return e.jsx(l,{title:"Prevent Duplicate",codeString:`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() =>
    enqueueSnackbar('You only see me once.', {
      preventDuplicate: checked ? true : false
    })
  }
>
  Show snackbar
</Button>`,children:e.jsxs(x,{flexDirection:"row",gap:1,justifyContent:"center",alignItems:"center",flexWrap:"wrap",children:[e.jsx(T,{checked:r,onChange:s,inputProps:{"aria-label":"controlled"}}),"Prevent duplicate",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("You only see me once.",{preventDuplicate:!!r}),children:"Show snackbar"})]})})}function le(){const{closeSnackbar:r}=v(),i=c=>e.jsxs(x,{direction:"row",spacing:.5,children:[e.jsx(t,{size:"small",color:"error",variant:"contained",onClick:()=>{alert(`I belong to snackbar with id ${c}`)},children:"Undo"}),e.jsx(t,{size:"small",color:"secondary",variant:"contained",onClick:()=>r(c),children:"Dismiss"})]});return e.jsx(l,{title:"With Action",codeString:`const actionTask = (snackbarId: SnackbarKey) => (
  <>
    <Button
      variant="text"
      onClick={() => {
        alert("I belong to snackbar with id {snackbarId}");
      }}
    >
      Undo
    </Button>
    <Button variant="text" onClick={() => closeSnackbar(snackbarId)}>
      Dismiss
    </Button>
  </>
);
<Button variant="outlined" onClick={() => enqueueSnackbar('Your notification here', { action: (key) => actionTask(key) })}>
 Show Snackbar
</Button>`,children:e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>o("Your notification here",{action:c=>i(c)}),children:"Show Snackbar"})})}function ue(){const[r,i]=h.useState("slide"),s=k=>{i(k.target.value)},c=()=>{switch(r){case"slide":o("Your notification here",{TransitionComponent:j});break;case"grow":o("Your notification here",{TransitionComponent:A});break;case"fade":o("Your notification here",{TransitionComponent:H});break;case"zoom":o("Your notification here",{TransitionComponent:M});break;default:o("Your notification here",{TransitionComponent:j});break}};return e.jsxs(l,{title:"Animation",codeString:`<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Slide })>
  Slide
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Grow })>
  Grow
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Fade })>
  Fade
</Button>
<Button variant="contained" 
  onClick={() => enqueueSnackbar('Your notification here', { TransitionComponent: Zoom })>
  Zoom
</Button>`,children:[e.jsx(f,{children:e.jsxs(B,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:s,name:"row-radio-buttons-group",children:[e.jsx(g,{value:"slide",control:e.jsx(m,{}),label:"Slide"}),e.jsx(g,{value:"grow",control:e.jsx(m,{}),label:"Grow"}),e.jsx(g,{value:"fade",control:e.jsx(m,{}),label:"Fade"}),e.jsx(g,{value:"zoom",control:e.jsx(m,{}),label:"Zoom"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>c(),children:"Show Snackbar"})]})}function ve(){return e.jsxs(U,{children:[e.jsx(Z,{title:"Snackbar",caption:"Snackbars provide brief notifications. The component is also known as a toast.",directory:"src/pages/components-overview/snackbar",link:"https://mui.com/material-ui/react-snackbar/"}),e.jsx(K,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Basic",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert"}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Outlined",codeString:`<Button
  variant="outlined"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      alert: {
        variant: 'outlined'
      },
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="outlined"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'secondary'
      },
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="outlined"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'success'
      },
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="outlined"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'warning'
      },
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="outlined"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'info'
      },
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="outlined"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'error'
      },
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"}}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"With Close",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"},close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"},close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"},close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"},close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"},close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"With Close + Action",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      actionButton: true,
      close: true
    } as SnackbarProps);
  }
>
  Error
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"},actionButton:!0,close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"},actionButton:!0,close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"},actionButton:!0,close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"},actionButton:!0,close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"},actionButton:!0,close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"},actionButton:!0,close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Position",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      message: 'This is an top-left message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      message: 'This is an top-center message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      message: 'This is an top-right message!',
      close: true
    } as SnackbarProps);
  }
>
  Top-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      message: 'This is an bottom-right message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      message: 'This is an bottom-center message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      message: 'This is an bottom-left message!',
      close: true
    } as SnackbarProps);
  }
>
  Bottom-Left
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"left"},message:"This is an top-left message!",close:!0}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},message:"This is an top-center message!",close:!0}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},message:"This is an top-right message!",close:!0}),children:"Top-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"This is an bottom-right message!",close:!0}),children:"Bottom-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"This is an bottom-center message!",close:!0}),children:"Bottom-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},message:"This is an bottom-left message!",close:!0}),children:"Bottom-Left"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(l,{title:"Transitions",codeString:`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an fade message!',
      transition: 'Fade',
      close: true
    } as SnackbarProps);
  }
>
  Default/Fade
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-left message!',
      transition: 'SlideLeft',
      close: true
    } as SnackbarProps);
  }
>
  Slide Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-up message!',
      transition: 'SlideUp',
      close: true
    } as SnackbarProps);
  }
>
  Slide Up
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-right message!',
      transition: 'SlideRight',
      close: true
    } as SnackbarProps);
  }
>
  Slide Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-down message!',
      transition: 'SlideDown',
      close: true
    } as SnackbarProps);
  }
>
  Slide Down
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an grow message!',
      transition: 'Grow',
      close: true
    } as SnackbarProps);
  }
>
  Grow
</Button>`,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an fade message!",transition:"Fade",close:!0}),children:"Default/Fade"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-left message!",transition:"SlideLeft",close:!0}),children:"Slide Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-up message!",transition:"SlideUp",close:!0}),children:"Slide Up"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-right message!",transition:"SlideRight",close:!0}),children:"Slide Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-down message!",transition:"SlideDown",close:!0}),children:"Slide Down"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an grow message!",transition:"Grow",close:!0}),children:"Grow"})})]})})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(p,{variant:"h5",sx:{mt:2},children:"Extended - Notistack"})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(Q,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ie,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(oe,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(re,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(le,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ae,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ce,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ue,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(te,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ne,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(se,{})})]})})]})}export{ve as default};
