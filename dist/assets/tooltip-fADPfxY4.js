import{c as b,j as t,B as f,aR as u,a9 as n,P as l,cR as S,dA as c,r as w,G as o,t as j,M as s,x as k,b6 as L,ab as I,d as e,T,aN as W,br as D,ck as F}from"./index-DWuWYdwO.js";import{C as H,a as P,b as N}from"./ComponentSkeleton-B_nzrx-9.js";import{F as M}from"./Fab-B3qXrFY_.js";import"./Skeleton-Cqh1Sn3g.js";function g({color:i,theme:r,labelColor:d}){const h=S(r,i),{main:p,contrastText:x}=h;let m=i||"";return["primary","secondary","info","success","warning","error"].includes(m)?{[`& .${c.tooltip}`]:{background:p,color:d||x},[`& .${c.arrow}`]:{color:p}}:{[`& .${c.tooltip}`]:{background:m,color:d||x,boxShadow:r.shadows[1]},[`& .${c.arrow}`]:{color:m}}}const O=u(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}),{shouldForwardProp:i=>i!=="color"&&i!=="labelColor"})(({theme:i,color:r,labelColor:d})=>({...r&&g({color:r,theme:i,labelColor:d})}));function a({children:i,arrow:r=!0,labelColor:d="",...h}){const p=b();return t.jsx(f,{display:"flex",children:t.jsx(O,{arrow:r,...h,theme:p,labelColor:d,children:i})})}g.propTypes={color:l.oneOfType([l.string,l.any]),theme:l.any,labelColor:l.oneOfType([l.string,l.any])};a.propTypes={children:l.any,arrow:l.bool,labelColor:l.oneOfType([l.string,l.any]),rest:l.any};const y=u(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))(({theme:i})=>({[`& .${c.tooltip}`]:{background:i.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:i.shadows[1],fontSize:11}}));y.displayName="LightTooltip";const C=u(({className:i,...r})=>t.jsx(n,{...r,arrow:!0,classes:{popper:i}}))(({theme:i})=>({[`& .${c.arrow}`]:{color:i.palette.secondary.dark},[`& .${c.tooltip}`]:{background:i.palette.secondary.dark}}));C.displayName="BootstrapTooltip";const B=u(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))(({theme:i})=>({[`& .${c.tooltip}`]:{background:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:i.typography.pxToRem(12),border:"1px solid #dadde9"}}));B.displayName="HtmlTooltip";const A=u(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))({[`& .${c.tooltip}`]:{maxWidth:500}});A.displayName="CustomWidthTooltip";const v=u(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))({[`& .${c.tooltip}`]:{maxWidth:"none"}});v.displayName="NoMaxWidthTooltip";function _(){const[i,r]=w.useState(!1),d=()=>{r(!1)},h=()=>{r(!0)},p=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.`;return t.jsxs(H,{children:[t.jsx(P,{title:"Tooltip",caption:"Tooltips display informative text when users hover over, focus on, or tap an element.",directory:"src/pages/components-overview/tooltip",link:"https://mui.com/material-ui/react-tooltip/"}),t.jsx(N,{children:t.jsxs(o,{container:!0,spacing:3,children:[t.jsx(o,{item:!0,xs:12,md:6,children:t.jsxs(j,{spacing:3,children:[t.jsx(s,{title:"Simple Tooltips",codeHighlight:!0,codeString:`<Tooltip title="Delete">
  <IconButton aria-label="delete" size="large">
    <DeleteFilled />
  </IconButton>
</Tooltip>
<Tooltip title="Add" aria-label="add">
  <Fab color="primary" sx={{ m: 2 }}>
    <PlusOutlined />
  </Fab>
</Tooltip>`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Delete",children:t.jsx(k,{"aria-label":"delete",size:"large",children:t.jsx(L,{})})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add","aria-label":"add",children:t.jsx(M,{color:"primary",sx:{m:2},children:t.jsx(I,{style:{fontSize:"1.3rem"}})})})})]})}),t.jsx(s,{title:"Customized Tooltip",codeString:`<LightTooltip title="Add">
  <Button>Light</Button>
</LightTooltip>
<BootstrapTooltip title="Add">
  <Button>Bootstrap</Button>
</BootstrapTooltip>
<HtmlTooltip
  title={
    <>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>And here&apos;s</em>{' '}
      <Typography variant="subtitle1" >
        some
      </Typography>{' '}
      <u>amazing content</u>. it&apos;s very engaging. Right?
    </>
  }
>
  <Button>HTML</Button>
</HtmlTooltip>`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(y,{title:"Add",children:t.jsx(e,{children:"Light"})})}),t.jsx(o,{item:!0,children:t.jsx(C,{title:"Add",children:t.jsx(e,{children:"Bootstrap"})})}),t.jsx(o,{item:!0,children:t.jsx(B,{title:t.jsxs(t.Fragment,{children:[t.jsx(T,{color:"inherit",children:"Tooltip with HTML"}),t.jsx("em",{children:"And here's"})," ",t.jsx(T,{variant:"subtitle1",component:"span",children:"some"})," ",t.jsx("u",{children:"amazing content"}),". it's very engaging. Right?"]}),children:t.jsx(e,{children:"HTML"})})})]})}),t.jsx(s,{title:"Arrow Tooltips",codeString:`<Tooltip title="Add" arrow>
  <Button>Arrow</Button>
</Tooltip>`,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",arrow:!0,children:t.jsx(e,{children:"Arrow"})})})})}),t.jsx(s,{title:"Delay Tooltips",codeString:`<Tooltip title="Add" enterDelay={500} leaveDelay={200}>
  <Button>[500ms, 200ms]</Button>
</Tooltip>`,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",enterDelay:500,leaveDelay:200,children:t.jsx(e,{children:"[500ms, 200ms]"})})})})}),t.jsx(s,{title:"Disabled Tooltips",codeString:`<Tooltip title="You Don't have permission to do this">
  <span>
    <Button disabled>A Disabled Button</Button>
  </span>
</Tooltip>`,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"You Don't have permission to do this",children:t.jsx("span",{children:t.jsx(e,{disabled:!0,children:"A Disabled Button"})})})})})}),t.jsx(s,{title:"Disable Interactive Tooltips",codeString:`<Tooltip title="Add" disableInteractive>
  <Button>Disable Interactive</Button>
</Tooltip>`,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",disableInteractive:!0,children:t.jsx(e,{children:"Disable Interactive"})})})})})]})}),t.jsx(o,{item:!0,xs:12,md:6,children:t.jsxs(j,{spacing:3,children:[t.jsx(s,{title:"Triggers/Controlled Tooltips",codeString:`<Tooltip disableFocusListener title="Add">
  <Button>Hover or touch</Button>
</Tooltip>
<Tooltip disableFocusListener disableTouchListener title="Add">
  <Button>Hover</Button>
</Tooltip>
<ClickAwayListener onClickAway={handleTooltipClose}>
  <div>
    <Tooltip
      PopperProps={{
        disablePortal: true
      }}
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title="Add"
    >
      <Button onClick={handleTooltipOpen}>Click</Button>
    </Tooltip>
  </div>
</ClickAwayListener>`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{disableFocusListener:!0,title:"Add",children:t.jsx(e,{children:"Hover or touch"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{disableFocusListener:!0,disableTouchListener:!0,title:"Add",children:t.jsx(e,{children:"Hover"})})}),t.jsx(o,{item:!0,children:t.jsx(W,{onClickAway:d,children:t.jsx("div",{children:t.jsx(n,{PopperProps:{disablePortal:!0},onClose:d,open:i,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add",children:t.jsx(e,{onClick:h,children:"Click"})})})})})]})}),t.jsx(s,{title:"Transitions Tooltips",codeString:`<Tooltip title="Add">
  <Button>Grow</Button>
</Tooltip>
<Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
  <Button>Fade</Button>
</Tooltip>
<Tooltip TransitionComponent={Zoom} title="Add">
  <Button>Zoom</Button>
</Tooltip>`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",children:t.jsx(e,{children:"Grow"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{TransitionComponent:D,TransitionProps:{timeout:600},title:"Add",children:t.jsx(e,{children:"Fade"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{TransitionComponent:F,title:"Add",children:t.jsx(e,{children:"Zoom"})})})]})}),t.jsx(s,{title:"Variable Width Tooltips",codeString:`<Tooltip title={longText}>
  <Button sx={{ m: 1 }}>Default Width [300px]</Button>
</Tooltip>
<CustomWidthTooltip title={longText}>
  <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
</CustomWidthTooltip>
<NoMaxWidthTooltip title={longText}>
  <Button sx={{ m: 1 }}>No wrapping</Button>
</NoMaxWidthTooltip>`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:p,children:t.jsx(e,{sx:{m:1},children:"Default Width [300px]"})})}),t.jsx(o,{item:!0,children:t.jsx(A,{title:p,children:t.jsx(e,{sx:{m:1},children:"Custom Width [500px]"})})}),t.jsx(o,{item:!0,children:t.jsx(v,{title:p,children:t.jsx(e,{sx:{m:1},children:"No wrapping"})})})]})}),t.jsx(s,{title:"Positioned Tooltips",codeString:`<Tooltip title="Add" placement="top-start">
  <Button color="secondary" variant="outlined">
    top-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="top">
  <Button color="secondary" variant="outlined">
    top
  </Button>
</Tooltip>
<Tooltip title="Add" placement="top-end">
  <Button color="secondary" variant="outlined">
    top-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right-start">
  <Button color="secondary" variant="outlined">
    right-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right">
  <Button color="secondary" variant="outlined">
    right
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right-end">
  <Button color="secondary" variant="outlined">
    right-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left-start">
  <Button color="secondary" variant="outlined">
    left-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left">
  <Button color="secondary" variant="outlined">
    left
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left-end">
  <Button color="secondary" variant="outlined">
    left-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-start">
  <Button color="secondary" variant="outlined">
    bottom-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom">
  <Button color="secondary" variant="outlined">
    bottom
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-end">
  <Button color="secondary" variant="outlined">
    bottom-end
  </Button>
</Tooltip>`,children:t.jsxs(t.Fragment,{children:[t.jsxs(o,{container:!0,justifyContent:"center",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top-end"})})})]}),t.jsxs(o,{container:!0,justifyContent:"center",sx:{my:1},children:[t.jsxs(o,{item:!0,xs:6,container:!0,alignItems:"flex-start",direction:"column",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right-end"})})})]}),t.jsxs(o,{item:!0,xs:6,container:!0,alignItems:"flex-end",direction:"column",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left-end"})})})]})]}),t.jsxs(o,{container:!0,justifyContent:"center",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom-end"})})})]})]})}),t.jsx(s,{title:"Color Variant Tooltips",codeString:`<CustomTooltip title="Add" color="primary">
  <Button color="primary" variant="outlined">
   primary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="secondary">
  <Button color="secondary" variant="contained">
    Secondary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="success">
  <Button color="success" variant="contained">
    Success
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="info">
  <Button color="info" variant="contained">
    Info
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="warning">
  <Button color="warning" variant="contained">
    Warning
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="error">
  <Button color="error" variant="contained">
    Error
  </Button>
</CustomTooltip>
`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"primary",children:t.jsx(e,{color:"primary",variant:"contained",children:"Primary"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"secondary",children:t.jsx(e,{color:"secondary",variant:"contained",children:"Secondary"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"success",children:t.jsx(e,{color:"success",variant:"contained",children:"Success"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"info",children:t.jsx(e,{color:"info",variant:"contained",children:"Info"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"warning",children:t.jsx(e,{color:"warning",variant:"contained",children:"Warning"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"error",children:t.jsx(e,{color:"error",variant:"contained",children:"error"})})})]})}),t.jsx(s,{title:"Custom Color Tooltips",codeString:`<CustomTooltip title="Add" color="#fff" bg="pink">
  <Button color="inherit" variant="outlined">
    pink
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#fff">
  <Button color="inherit" variant="contained">
    Orange
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#000">
  <Button color="inherit" variant="contained">
    Yellow
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="white" labelColor='#000'>
  <Button color="inherit" variant="contained">
    Black/White
  </Button>
</CustomTooltip>
`,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"pink",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"pink"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"orange",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Orange"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"yellow",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Yellow"})})}),t.jsx(o,{item:!0,children:t.jsx(a,{title:"Add",color:"#fff",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Black/white"})})})]})})]})})]})})]})}export{_ as default};
