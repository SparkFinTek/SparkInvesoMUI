import{r as b,j as e,G as d,t as i,M as l,y as t,ay as r,az as o,x as a,aj as j,b3 as g,bn as w}from"./index-DWuWYdwO.js";import{C as f,a as y,b as I}from"./ComponentSkeleton-B_nzrx-9.js";import{E as u}from"./EyeInvisibleOutlined-B7x8qc4h.js";import{E as T}from"./EyeOutlined-B27Plxqr.js";import"./Skeleton-Cqh1Sn3g.js";function z(){const[n,c]=b.useState({password:"",showPassword:!1}),p=s=>m=>{c({...n,[s]:m.target.value})},x=()=>{c({...n,showPassword:!n.showPassword})},h=s=>{s.preventDefault()};return e.jsxs(f,{children:[e.jsx(y,{title:"Text Field",caption:"Text fields let users enter and edit text.",directory:"src/pages/components-overview/textfield",link:"https://mui.com/material-ui/react-text-field/"}),e.jsx(I,{children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,lg:6,children:e.jsxs(i,{spacing:3,children:[e.jsx(l,{title:"Basic",codeHighlight:!0,codeString:`<TextField id="outlined-basic" label="Outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />`,children:e.jsxs(i,{spacing:2,children:[e.jsx(t,{id:"outlined-basic",placeholder:"Outlined"}),e.jsx(t,{id:"filled-basic",label:"Filled",variant:"filled"}),e.jsx(t,{id:"standard-basic",label:"Standard",variant:"standard"})]})}),e.jsx(l,{title:"Form Props",codeString:`<TextField required id="outlined-required" placeholder="Required *" defaultValue="Hello World" />
<TextField id="helper-text-basic" placeholder="Helper text" helperText="Helper text" />
<TextField id="outlined-number" label="Number" type="number" />
<TextField
  id="outlined-number"
  defaultValue="Read Only"
  InputProps={{
    readOnly: true
  }}
/>
<OutlinedInput
  id="outlined-adornment-password"
  type={values.showPassword ? 'text' : 'password'}
  value={values.password}
  onChange={handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
        color="secondary"
      >
        {values.showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </IconButton>
    </InputAdornment>
  }
/>
<FormControl variant="standard">
  <Stack spacing={3}>
    <InputLabel shrink htmlFor="with-label-input">
      With Label
    </InputLabel>
    <TextField id="with-label-input" placeholder="With Label" />
  </Stack>
</FormControl>
<TextField id="disabled-basic" label="Disabled" disabled />
<TextField id="filled-search" placeholder="Search" type="search" />`,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(i,{spacing:2,children:[e.jsx(t,{required:!0,id:"outlined-required",placeholder:"Required *",defaultValue:"Hello World"}),e.jsx(t,{id:"helper-text-basic",placeholder:"Helper text",helperText:"Helper text"}),e.jsx(t,{id:"outlined-number",placeholder:"Number",type:"number"}),e.jsx(t,{id:"outlined-number",defaultValue:"Read Only",InputProps:{readOnly:!0}})]})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(i,{spacing:2,children:[e.jsx(r,{id:"outlined-adornment-password",type:n.showPassword?"text":"password",value:n.password,onChange:p("password"),endAdornment:e.jsx(o,{position:"end",children:e.jsx(a,{"aria-label":"toggle password visibility",onClick:x,onMouseDown:h,edge:"end",color:"secondary",children:n.showPassword?e.jsx(T,{}):e.jsx(u,{})})})}),e.jsx(j,{variant:"standard",children:e.jsxs(i,{spacing:3,children:[e.jsx(g,{shrink:!0,htmlFor:"with-label-input",children:"With Label"}),e.jsx(t,{id:"with-label-input",placeholder:"With Label"})]})}),e.jsx(t,{id:"disabled-basic",placeholder:"Disabled",disabled:!0}),e.jsx(t,{id:"filled-search",placeholder:"Search",type:"search"})]})})]})}),e.jsx(l,{title:"With Icon",codeString:`<OutlinedInput id="start-adornment-email" placeholder="Email / UserId" startAdornment={<MailOutlined />} />
<OutlinedInput
  id="end-adornment-password"
  type="password"
  placeholder="Password"
  endAdornment={
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
        <EyeInvisibleOutlined />
      </IconButton>
    </InputAdornment>
  }
/>`,children:e.jsxs(i,{spacing:2,children:[e.jsx(r,{id:"start-adornment-email",placeholder:"Email / UserId",startAdornment:e.jsx(w,{})}),e.jsx(r,{id:"end-adornment-password",type:"password",placeholder:"Password",endAdornment:e.jsx(o,{position:"end",children:e.jsx(a,{"aria-label":"toggle password visibility",edge:"end",color:"secondary",children:e.jsx(u,{})})})})]})}),e.jsx(l,{title:"Sizes",codeString:`<TextField id="outlined-basic-small" label="Small" size="small" />
<TextField id="outlined-basic-default" label="Medium" />
<TextField
  id="outlined-basic-custom"
  label="Custom"
  sx={{
    '& .MuiInputLabel-root': { fontSize: '1rem' },
    '& .MuiOutlinedInput-root': { fontSize: '1rem' }
  }}
/>`,children:e.jsxs(i,{spacing:2,children:[e.jsx(t,{id:"outlined-basic-small",placeholder:"Small",size:"small"}),e.jsx(t,{id:"outlined-basic-default",placeholder:"Medium"}),e.jsx(t,{id:"outlined-basic-custom",placeholder:"Custom",sx:{"& .MuiInputLabel-root":{fontSize:"1rem"},"& .MuiOutlinedInput-root":{fontSize:"1rem"}}})]})})]})}),e.jsx(d,{item:!0,xs:12,lg:6,children:e.jsxs(i,{spacing:3,children:[e.jsx(l,{title:"Event",codeString:'<TextField id="outlined-basic-auto" label="Auto Focus" autoFocus />',children:e.jsx(t,{id:"outlined-basic-auto",placeholder:"Auto Focus",autoFocus:!0})}),e.jsx(l,{title:"Validation",codeString:`<TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
<TextField
  error
  id="outlined-error-helper-text"
  label="Error"
  defaultValue="Hello World"
  helperText="Incorrect entry."
/>`,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsx(t,{error:!0,id:"outlined-error",placeholder:"Error",defaultValue:"Hello World"})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsx(t,{error:!0,id:"outlined-error-helper-text",placeholder:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."})})]})}),e.jsx(l,{title:"Multiline",codeString:`<TextField
  id="outlined-multiline-static"
  fullWidth
  label="Multiline"
  multiline
  rows={5}
  defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
/>`,children:e.jsx(t,{id:"outlined-multiline-static",fullWidth:!0,placeholder:"Multiline",multiline:!0,rows:5,defaultValue:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"})}),e.jsx(l,{title:"Input Adornments",codeString:`<TextField
  placeholder="Website URL"
  id="url-start-adornment"
  InputProps={{
    startAdornment: 'https://'
  }}
/>
<TextField
  placeholder="Website URL"
  id="outlined-end-adornment"
  InputProps={{
    endAdornment: '.com'
  }}
/>
<OutlinedInput
  id="text-adornment-password"
  type="password"
  placeholder="Password"
  endAdornment={
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
        <EyeInvisibleOutlined />
      </IconButton>
    </InputAdornment>
  }
/>
<TextField
  placeholder="0.00"
  id="outlined-start-adornment"
  InputProps={{
    startAdornment: '$'
  }}
/>`,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(i,{spacing:2,children:[e.jsx(t,{placeholder:"Website URL",id:"url-start-adornment",InputProps:{startAdornment:"https://"}}),e.jsx(t,{placeholder:"Website URL",id:"outlined-end-adornment",InputProps:{endAdornment:".com"}})]})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(i,{spacing:2,children:[e.jsx(r,{id:"text-adornment-password",type:"password",placeholder:"Password",endAdornment:e.jsx(o,{position:"end",children:e.jsx(a,{"aria-label":"toggle password visibility",edge:"end",color:"secondary",children:e.jsx(u,{})})})}),e.jsx(t,{placeholder:"0.00",id:"outlined-start-adornment",InputProps:{startAdornment:"$"}})]})})]})}),e.jsx(l,{title:"Full Width",codeString:'<TextField fullWidth id="outlined-basic-fullwidth" label="Fullwidth" />',children:e.jsx(t,{fullWidth:!0,id:"outlined-basic-fullwidth",placeholder:"Fullwidth"})})]})})]})})]})}export{z as default};
