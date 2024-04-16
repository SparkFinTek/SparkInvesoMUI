import{r as x,j as e,B as k,F as l,G as n,t as d,M as a,aj as b,ak as m}from"./index-BHUrCk0l.js";import{C as u,a as j,b as g}from"./ComponentSkeleton-Duec2wAU.js";import{C as o}from"./Checkbox-CD0fXkyM.js";import"./Skeleton-D00KhaeD.js";function w(){const[t,r]=x.useState([!0,!1]),s=c=>{r([c.target.checked,c.target.checked])},h=c=>{r([c.target.checked,t[1]])},i=c=>{r([t[0],c.target.checked])},C=e.jsxs(k,{sx:{display:"flex",flexDirection:"column",ml:3},children:[e.jsx(l,{label:"Child 1",control:e.jsx(o,{checked:t[0],onChange:h})}),e.jsx(l,{label:"Child 2",control:e.jsx(o,{checked:t[1],onChange:i})})]});return e.jsxs(u,{children:[e.jsx(j,{title:"Checkbox",caption:"Checkboxes allow the user to select one or more items from a set.",directory:"src/pages/components-overview/checkbox",link:"https://mui.com/material-ui/react-checkbox/"}),e.jsx(g,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsxs(a,{title:"Basic",codeHighlight:!0,codeString:`<Checkbox />
<Checkbox defaultChecked />
<Checkbox defaultChecked />
<Checkbox defaultChecked disabled />
<Checkbox disabled />`,children:[e.jsx(o,{}),e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0,disabled:!0}),e.jsx(o,{disabled:!0})]}),e.jsxs(a,{title:"Size",codeString:`<Checkbox defaultChecked />
<Checkbox defaultChecked className="size-medium" />
<Checkbox defaultChecked className="size-large" />`,children:[e.jsx(o,{defaultChecked:!0}),e.jsx(o,{defaultChecked:!0,className:"size-medium"}),e.jsx(o,{defaultChecked:!0,className:"size-large"})]}),e.jsxs(a,{title:"Colors",codeString:`<Checkbox />
<Checkbox defaultChecked color="secondary" />
<Checkbox defaultChecked color="success" />
<Checkbox defaultChecked color="warning" />
<Checkbox defaultChecked color="info" />
<Checkbox defaultChecked color="error" />`,children:[e.jsx(o,{}),e.jsx(o,{defaultChecked:!0,color:"secondary"}),e.jsx(o,{defaultChecked:!0,color:"success"}),e.jsx(o,{defaultChecked:!0,color:"warning"}),e.jsx(o,{defaultChecked:!0,color:"info"}),e.jsx(o,{defaultChecked:!0,color:"error"})]})]})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsx(a,{title:"Label Placement",codeString:`<FormControl component="fieldset">
  <FormGroup aria-label="position" row>
    <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top" />
    <FormControlLabel
      value="start"
      control={<Checkbox defaultChecked />}
      label="Start"
      labelPlacement="start"
      sx={{ mr: 1 }}
    />
    <FormControlLabel value="bottom" control={<Checkbox />} label="Bottom" labelPlacement="bottom" />
    <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="End" labelPlacement="end" sx={{ ml: 1 }} />
  </FormGroup>
</FormControl>`,children:e.jsx(b,{component:"fieldset",children:e.jsxs(m,{"aria-label":"position",row:!0,children:[e.jsx(l,{value:"top",control:e.jsx(o,{}),label:"Top",labelPlacement:"top"}),e.jsx(l,{value:"start",control:e.jsx(o,{defaultChecked:!0}),label:"Start",labelPlacement:"start",sx:{mr:1}}),e.jsx(l,{value:"bottom",control:e.jsx(o,{}),label:"Bottom",labelPlacement:"bottom"}),e.jsx(l,{value:"end",control:e.jsx(o,{defaultChecked:!0}),label:"End",labelPlacement:"end",sx:{ml:1}})]})})}),e.jsx(a,{title:"Indeterminate",codeString:`<>
  <FormControlLabel
    label="Parent"
    control={
      <Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />
    }
  />
  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
    <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
    <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
  </Box>
</>`,children:e.jsxs(e.Fragment,{children:[e.jsx(l,{label:"Parent",control:e.jsx(o,{checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:s})}),C]})})]})})]})})]})}export{w as default};
