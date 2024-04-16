import{r as c,j as e,G as n,t as d,M as t,T as s,B as u,aL as x}from"./index-DWuWYdwO.js";import{C as j,a as p,b as f}from"./ComponentSkeleton-B_nzrx-9.js";import{H as v}from"./HeartFilled-BYx-k2Xb.js";import{H as S}from"./HeartOutlined-aKlVZASO.js";import{S as g}from"./StarOutlined-BvNl2oDJ.js";import{R as i}from"./Rating-B8b92-Iw.js";import"./Skeleton-Cqh1Sn3g.js";import"./visuallyHidden-J1ppfhCd.js";const z={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function P(){const[r,l]=c.useState(2),[o,h]=c.useState(-1);return e.jsxs(j,{children:[e.jsx(p,{title:"Rating",caption:"Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.",directory:"src/pages/components-overview/rating",link:"https://mui.com/material-ui/react-rating/"}),e.jsx(f,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsx(t,{title:"Basic",codeHighlight:!0,codeString:`<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Rating name="read-only" value={3} readOnly />
<Rating name="disabled" value={4} disabled />
<Rating name="no-value" value={null} />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Controlled"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"simple-controlled",value:r,onChange:(m,a)=>{l(a)}})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Read Only"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"read-only",value:3,readOnly:!0})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"Disabled"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"disabled",value:4,disabled:!0})}),e.jsx(n,{item:!0,xs:5,sm:3,children:e.jsx(s,{variant:"h6",children:"No rating"})}),e.jsx(n,{item:!0,xs:7,sm:9,children:e.jsx(i,{name:"no-value",value:null})})]})}),e.jsx(t,{title:"Precision",codeString:`<Rating name="half-rating" defaultValue={3.6} precision={0.1} />
<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating",defaultValue:3.6,precision:.1})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})})]})}),e.jsx(t,{title:"Hover Feedback",codeString:`<Box
  sx={{
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }}
>
  <Rating
    name="hover-feedback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
  />
  {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
</Box>`,children:e.jsxs(u,{sx:{width:200,display:"flex",alignItems:"center"},children:[e.jsx(i,{name:"hover-feedback",value:r,precision:.5,onChange:(m,a)=>{l(a)},onChangeActive:(m,a)=>{h(a)}}),r!==null&&e.jsx(u,{sx:{ml:2},children:z[o!==-1?o:r]})]})})]})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsxs(d,{spacing:3,children:[e.jsx(t,{title:"Sizes",codeString:`<Rating name="size-small" defaultValue={2} size="small" />
  <Rating name="size-medium" defaultValue={2} />
  <Rating name="size-large" defaultValue={2} size="large" />`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-small",defaultValue:2,size:"small"})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-medium",defaultValue:2})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"size-large",defaultValue:2,size:"large"})})]})}),e.jsx(t,{title:"Customization",codeString:`<Rating name="customized-10" defaultValue={2} max={10} />
<Rating
  name="customized-color"
  defaultValue={2}
  precision={0.5}
  icon={<HeartFilled style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<HeartOutlined style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'error.main' }}
/>
<Rating
  name="customized-color"
  defaultValue={3}
  icon={<SmileOutlined style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<SmileOutlined style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-10",defaultValue:2,max:10})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-color-heart",defaultValue:2,precision:.5,icon:e.jsx(v,{style:{fontSize:"1.3rem",margin:2}}),emptyIcon:e.jsx(S,{style:{fontSize:"1.3rem",margin:2}}),sx:{color:"error.main"}})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-color-smily",defaultValue:3,icon:e.jsx(x,{style:{fontSize:"1.3rem",margin:2}}),emptyIcon:e.jsx(x,{style:{fontSize:"1.3rem",margin:2}}),sx:{color:"warning.main"}})})]})}),e.jsx(t,{title:"Half",codeString:`<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
<Rating
  name="customized-color"
  defaultValue={3.5}
  precision={0.5}
  icon={<StarOutlined style={{ fontSize: '1.3rem', margin: 2 }} />}
  emptyIcon={<StarOutlined style={{ fontSize: '1.3rem', margin: 2 }} />}
  sx={{ color: 'warning.main' }}
/>`,children:e.jsxs(n,{container:!0,spacing:1,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"half-rating-read-custom",defaultValue:2.5,precision:.5})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(i,{name:"customized-color-half",defaultValue:3.5,precision:.5,icon:e.jsx(g,{style:{fontSize:"1.3rem",margin:2}}),emptyIcon:e.jsx(g,{style:{fontSize:"1.3rem",margin:2}}),sx:{color:"warning.main"}})})]})})]})})]})})]})}export{P as default};
