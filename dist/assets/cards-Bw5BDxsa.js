import{r as S,j as e,B as T,ba as M,bb as g,T as t,P as s,c as L,G as r,M as a,e as j,L as B,x as d,ap as c,a0 as u,a6 as h,k as m,V as P,af as q}from"./index-BHUrCk0l.js";import{C as w,a as A,b as O}from"./ComponentSkeleton-Duec2wAU.js";import{E as R}from"./EllipsisOutlined-DpL9w8uP.js";import{T as k,a as y}from"./ToggleButtonGroup-Di5WUbg8.js";import"./Skeleton-D00KhaeD.js";import"./getValidReactChildren-B4b4z6fx.js";function p({children:i,value:o,index:n,...l}){return e.jsx("div",{role:"tabpanel",hidden:o!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...l,children:o===n&&e.jsx(T,{sx:{p:3},children:i})})}function x(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function v({activeTab:i}){const[o,n]=S.useState(i||0),l=(f,C)=>{n(C)};return e.jsxs(T,{sx:{width:"100%"},children:[e.jsx(T,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(M,{value:o,onChange:l,"aria-label":"basic tabs example",children:[e.jsx(g,{label:"Article",...x(0)}),e.jsx(g,{label:"App",...x(1)}),e.jsx(g,{label:"Project",...x(2)})]})}),e.jsxs(p,{value:o,index:0,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"text.secondary",children:"Article Content"}),e.jsx(t,{variant:"h6",gutterBottom:!i,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."}),!i&&e.jsx(t,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque."})]}),e.jsxs(p,{value:o,index:1,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"text.secondary",children:"App Content"}),e.jsx(t,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})]}),e.jsxs(p,{value:o,index:2,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"text.secondary",children:"Project Content"}),e.jsx(t,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})]})]})}p.propTypes={children:s.node,value:s.number,index:s.number,other:s.any};v.propTypes={activeTab:s.number};const b="/assets/card-media-Bp1wKoiZ.png";function $(){const i=L(),o=e.jsxs(k,{fullWidth:!0,color:"primary",exclusive:!0,"aria-label":"text alignment",size:"small",sx:{p:1,"& .MuiToggleButton-root":{borderRadius:0,p:.75,"&:not(.Mui-selected)":{borderTopColor:"transparent",borderBottomColor:"transparent"},"&:first-of-type":{borderLeftColor:"transparent"},"&:last-of-type":{borderRightColor:"transparent"},"&:hover":{bgcolor:"transparent",color:"primary.main"}}},children:[e.jsx(y,{value:"web","aria-label":"web",children:e.jsx(P,{})}),e.jsx(y,{value:"android","aria-label":"android",children:e.jsx(q,{})}),e.jsx(y,{value:"ios","aria-label":"ios",children:e.jsx(R,{})})]});return e.jsxs(w,{children:[e.jsx(A,{title:"Card",caption:"Cards contain content and actions about a single subject.",directory:"src/pages/components-overview/cards",link:"https://mui.com/material-ui/react-card/"}),e.jsx(O,{children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Basic",codeString:`<MainCard border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="text.secondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="text.secondary">
    This is card description
  </Typography>
</MainCard>`,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{border:!1,boxShadow:!0,shadow:i.customShadows.z1,sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"text.secondary",children:"This is card description"})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",border:!1,boxShadow:!0,shadow:i.customShadows.z1,sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"text.secondary",children:"This is card description"})]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Outlined",codeString:`<MainCard sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="text.secondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="text.secondary">
    This is card description
  </Typography>
</MainCard>`,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"text.secondary",children:"This is card description"})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"text.secondary",children:"This is card description"})]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Action",codeString:`<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      More
    </Link>
  }
>
  <Typography variant="h5" color="text.secondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim.
  </Typography>
</MainCard>
<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
>
  <Typography variant="h5" color="text.secondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper
    ligula. Mauris purus sem.
  </Typography>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardContent>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: 'primary.main'
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(j,{component:B,to:"#",color:"primary",children:"More"}),children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim."})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(d,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem."})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(d,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsxs(u,{children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(h,{}),o]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Complex Interaction",codeString:`<MainCard content={false}>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>

<MainCard
  title="Card Title"
  divider={false}
  content={false}
  secondary={
    <Link color="primary" href="/">
      More
    </Link>
  }
>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="text.secondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>`,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{content:!1,children:e.jsx(v,{})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{title:"Card Title",divider:!1,content:!1,secondary:e.jsx(j,{component:B,to:"#",color:"primary",children:"More"}),children:e.jsx(v,{activeTab:2})})})]})})}),e.jsx(r,{item:!0,xs:12,xl:9,children:e.jsx(a,{title:"Media",codeString:`<MainCard content={false}>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
    </Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: 'primary.main'
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,
    </Typography>
  </CardContent>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: 'primary.main'
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{content:!1,children:[e.jsx(m,{component:"img",image:b,alt:"green iguana"}),e.jsxs(u,{children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu."})]}),e.jsx(h,{}),o]})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(d,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsx(m,{component:"img",image:b,alt:"green iguana"}),e.jsxs(u,{children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,"})]})]})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(d,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsx(m,{component:"img",image:b,alt:"green iguana"}),e.jsxs(u,{children:[e.jsx(t,{variant:"h5",color:"text.secondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(h,{}),o]})})]})})})]})})]})}export{$ as default};
