import{c,j as o,G as s,M as d,t as i,T as h,P as r}from"./index-BHUrCk0l.js";import{C as x,a as w,b as u}from"./ComponentSkeleton-Duec2wAU.js";import"./Skeleton-D00KhaeD.js";function t({shadow:e}){return o.jsx(d,{border:!1,shadow:e,boxShadow:!0,children:o.jsxs(i,{spacing:1,justifyContent:"center",alignItems:"center",children:[o.jsx(h,{variant:"h6",children:"boxShadow"}),o.jsx(h,{variant:"subtitle1",children:e})]})})}function a({shadow:e,label:m,color:l,bgcolor:n}){return o.jsx(d,{border:!1,shadow:e,boxShadow:!0,sx:{bgcolor:n||"inherit"},children:o.jsx(i,{spacing:1,justifyContent:"center",alignItems:"center",children:o.jsx(h,{variant:"subtitle1",color:l,children:m})})})}function p(){const e=c();return o.jsxs(x,{children:[o.jsx(w,{title:"Shadows",caption:"Add or remove shadows to elements with box-shadow utilities.",directory:"src/pages/components-overview/shadows",link:"https://mui.com/system/shadows/"}),o.jsx(u,{children:o.jsxs(s,{container:!0,spacing:3,children:[o.jsx(s,{item:!0,xs:12,children:o.jsx(d,{title:"Basic Shadow",codeHighlight:!0,codeString:`<ShadowBox shadow="0" />
<ShadowBox shadow="1" />
<ShadowBox shadow="2" />
<ShadowBox shadow="3" />
<ShadowBox shadow="4" />
<ShadowBox shadow="5" />
<ShadowBox shadow="6" />
<ShadowBox shadow="7" />
<ShadowBox shadow="8" />
<ShadowBox shadow="9" />
<ShadowBox shadow="10" />
<ShadowBox shadow="11" />
<ShadowBox shadow="12" />
<ShadowBox shadow="13" />
<ShadowBox shadow="14" />
<ShadowBox shadow="15" />
<ShadowBox shadow="16" />
<ShadowBox shadow="17" />
<ShadowBox shadow="18" />
<ShadowBox shadow="19" />
<ShadowBox shadow="20" />
<ShadowBox shadow="21" />
<ShadowBox shadow="22" />
<ShadowBox shadow="23" />
<ShadowBox shadow="24" />`,children:o.jsxs(s,{container:!0,spacing:3,children:[o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"0"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"1"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"2"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"3"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"4"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"5"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"6"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"7"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"8"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"9"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"10"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"11"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"12"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"13"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"14"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"15"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"16"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"17"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"18"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"19"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"20"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"21"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"22"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"23"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(t,{shadow:"24"})})]})})}),o.jsx(s,{item:!0,xs:12,children:o.jsx(d,{title:"Custom Shadow",codeString:'<CustomShadowBox shadow={theme.customShadows.z1} label="z1" color="inherit" />',children:o.jsx(s,{container:!0,spacing:3,children:o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{shadow:e.customShadows.z1,label:"z1",color:"inherit"})})})})}),o.jsx(s,{item:!0,xs:12,children:o.jsx(d,{title:"Color Shadow",codeString:`<CustomShadowBox
  color={theme.palette.primary.contrastText}
  bgcolor={theme.palette.primary.main}
  shadow={theme.customShadows.primaryButton}
  label="primary"
/>
<CustomShadowBox
  color={theme.palette.secondary.contrastText}
  bgcolor={theme.palette.secondary.main}
  shadow={theme.customShadows.secondaryButton}
  label="secondary"
/>
<CustomShadowBox
  color={theme.palette.success.contrastText}
  bgcolor={theme.palette.success.main}
  shadow={theme.customShadows.successButton}
  label="success"
/>
<CustomShadowBox
  color={theme.palette.warning.contrastText}
  bgcolor={theme.palette.warning.main}
  shadow={theme.customShadows.warningButton}
  label="warning"
/>
<CustomShadowBox
  color={theme.palette.info.contrastText}
  bgcolor={theme.palette.info.main}
  shadow={theme.customShadows.infoButton}
  label="info"
/>
<CustomShadowBox
  color={theme.palette.error.contrastText}
  bgcolor={theme.palette.error.main}
  shadow={theme.customShadows.errorButton}
  label="error"
/>
<CustomShadowBox color={theme.palette.primary.main} shadow={theme.customShadows.primary} label="primary" />
<CustomShadowBox color={theme.palette.secondary.main} shadow={theme.customShadows.secondary} label="secondary" />
<CustomShadowBox color={theme.palette.success.main} shadow={theme.customShadows.success} label="success" />
<CustomShadowBox color={theme.palette.warning.main} shadow={theme.customShadows.warning} label="warning" />
<CustomShadowBox color={theme.palette.info.main} shadow={theme.customShadows.info} label="info" />
<CustomShadowBox color={theme.palette.error.main} shadow={theme.customShadows.error} label="error" />`,children:o.jsxs(s,{container:!0,spacing:3,children:[o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.primary.contrastText,bgcolor:e.palette.primary.main,shadow:e.customShadows.primaryButton,label:"primary"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.secondary.contrastText,bgcolor:e.palette.secondary.main,shadow:e.customShadows.secondaryButton,label:"secondary"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.success.contrastText,bgcolor:e.palette.success.main,shadow:e.customShadows.successButton,label:"success"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.warning.contrastText,bgcolor:e.palette.warning.main,shadow:e.customShadows.warningButton,label:"warning"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.info.contrastText,bgcolor:e.palette.info.main,shadow:e.customShadows.infoButton,label:"info"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.error.contrastText,bgcolor:e.palette.error.main,shadow:e.customShadows.errorButton,label:"error"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.primary.main,shadow:e.customShadows.primary,label:"primary"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.secondary.main,shadow:e.customShadows.secondary,label:"secondary"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.success.main,shadow:e.customShadows.success,label:"success"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.warning.main,shadow:e.customShadows.warning,label:"warning"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.info.main,shadow:e.customShadows.info,label:"info"})}),o.jsx(s,{item:!0,xs:6,sm:4,md:3,lg:2,children:o.jsx(a,{color:e.palette.error.main,shadow:e.customShadows.error,label:"error"})})]})})})]})})]})}t.propTypes={shadow:r.string};a.propTypes={shadow:r.string,label:r.string,color:r.string,bgcolor:r.string};export{p as default};
