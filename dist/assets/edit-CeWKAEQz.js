import{bA as je,r as Z,j as e,b9 as pe,M as $,aV as k,aX as v,aW as N,bu as ue,bv as fe,bw as ye,b0 as ge,G as t,t as c,b3 as p,aj as C,y as T,ah as be,B as g,z as D,b4 as A,a_ as ee,a$ as ie,T as a,d as P,af as Ie,ab as ne,bx as we,a6 as _e,be as Ce,bd as Te,P as te,aT as re,aO as Ae}from"./index-DWuWYdwO.js";import{C as Pe}from"./CircularLoader-Bd6WMJyi.js";import{A as se,I as qe,a as Se}from"./InvoiceModal-CwcyBTIA.js";import{u as De,a as Le,h as de,b as oe,s as Fe,c as E,f as Oe}from"./invoice-CtEBVet3.js";import{T as ke,a as Ne,b as Ee}from"./TableContainer-DaSqANyU.js";import{T as $e}from"./TableHead-UeT6rlXJ.js";import{T as ce}from"./TableRow-Cu26Yl8o.js";import{T as u}from"./TableCell-DifTD_db.js";import{v as Be}from"./v4-D8aEg3BZ.js";import{D as ae}from"./DatePicker-C89fNkAL.js";import"./DeleteOutlined-Ce9XbAuj.js";import"./Skeleton-Cqh1Sn3g.js";import"./react-pdf.browser-fdpOy0uw.js";import"./index-DROKURrI.js";import"./index-CaepUFAR.js";import"./index-WhEdw1H0.js";import"./DownloadOutlined-cTRsJVoi.js";import"./dateViewRenderers-Dv6mi70Y.js";import"./DesktopDatePicker-C2FLjWfN.js";import"./useMobilePicker-CuOEMUMP.js";const ze=k({date:v().required("Invoice date is required"),due_date:v().when("date",(s,d)=>s&&d.min(s,"Due date can't be before invoice date")).nullable().required("Due date is required"),customerInfo:k({name:N().required("Invoice receiver information is required")}).required("Invoice receiver information is required"),status:N().required("Status selection is required"),invoice_detail:ue().required("Invoice details is required").of(k().shape({name:N().required("Product name is required")})).min(1,"Invoice must have at least 1 items")}),le={name:"",address:"",phone:"",email:""};function xe({list:s,invoiceMaster:d}){const q=fe(),b=500,L=o=>{var x,f,i;const r={id:Number(s.id),invoice_id:Number(o.invoice_id),customer_name:(x=o.cashierInfo)==null?void 0:x.name,email:(f=o.cashierInfo)==null?void 0:f.email,avatar:Number(s.avatar),discount:Number(o.discount),tax:Number(o.tax),date:re(new Date(o.date),"MM/dd/yyyy"),due_date:re(new Date(o.due_date),"MM/dd/yyyy"),quantity:Number((i=o.invoice_detail)==null?void 0:i.reduce((I,y)=>I+y.qty,0)),status:o.status,cashierInfo:o.cashierInfo,customerInfo:o.customerInfo,invoice_detail:o.invoice_detail,notes:o.notes};Oe(r.id,r),Ae({open:!0,message:"Invoice Updated successfully",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"alert",alert:{color:"success"},close:!0}),q("/apps/invoice/list")};return e.jsx(ye,{enableReinitialize:!0,initialValues:{id:s.id||"",invoice_id:s.invoice_id||"",status:s.status||"",date:new Date(s.date)||null,due_date:new Date(s.due_date)||null,cashierInfo:s.cashierInfo||le,customerInfo:s.customerInfo||le,invoice_detail:s.invoice_detail||[],discount:s.discount||0,tax:s.tax||0,notes:s.notes||""},validationSchema:ze,onSubmit:o=>{L(o)},children:({handleBlur:o,errors:r,handleChange:x,handleSubmit:f,values:i,isValid:I,setFieldValue:y,touched:h})=>{var B,z,H,M,R,G,U,W,Q,V;const w=((B=i==null?void 0:i.invoice_detail)==null?void 0:B.reduce((n,l)=>l.name.trim().length>0?n+Number(l.price*Math.floor(l.qty)):n,0))||0,F=(i==null?void 0:i.tax)*w/100,O=i.discount*w/100,S=w-O+F;return e.jsx(ge,{onSubmit:f,children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:3,children:e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Invoice Id"}),e.jsx(C,{sx:{width:"100%"},children:e.jsx(T,{required:!0,disabled:!0,type:"number",name:"invoice_id",id:"invoice_id",value:i.invoice_id,onChange:x})})]})}),e.jsxs(t,{item:!0,xs:12,sm:6,md:3,children:[e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Status"}),e.jsx(C,{sx:{width:"100%"},children:e.jsxs(be,{value:i.status,displayEmpty:!0,name:"status",renderValue:n=>n.length===0?e.jsx(g,{sx:{color:"secondary.400"},children:"Select status"}):n,onChange:x,error:!!(r.status&&h.status),children:[e.jsx(D,{disabled:!0,value:"",children:"Select status"}),e.jsx(D,{value:"Paid",children:"Paid"}),e.jsx(D,{value:"Unpaid",children:"Unpaid"}),e.jsx(D,{value:"Cancelled",children:"Cancelled"})]})})]}),h.status&&r.status&&e.jsx(A,{error:!0,children:r.status})]}),e.jsxs(t,{item:!0,xs:12,sm:6,md:3,children:[e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Date"}),e.jsx(C,{sx:{width:"100%"},error:!!(h.date&&r.date),children:e.jsx(ee,{dateAdapter:ie,children:e.jsx(ae,{format:"dd/MM/yyyy",value:i.date,onChange:n=>y("date",n)})})})]}),h.date&&r.date&&e.jsx(A,{error:!0,children:r.date})]}),e.jsxs(t,{item:!0,xs:12,sm:6,md:3,children:[e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Due Date"}),e.jsx(C,{sx:{width:"100%"},error:!!(h.due_date&&r.due_date),children:e.jsx(ee,{dateAdapter:ie,children:e.jsx(ae,{format:"dd/MM/yyyy",value:i.due_date,onChange:n=>y("due_date",n)})})})]}),h.due_date&&r.due_date&&e.jsx(A,{error:!0,children:r.due_date})]}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsx($,{sx:{minHeight:168},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:8,children:e.jsxs(c,{spacing:2,children:[e.jsx(a,{variant:"h5",children:"From:"}),e.jsxs(c,{sx:{width:"100%"},children:[e.jsx(a,{variant:"subtitle1",children:(z=i==null?void 0:i.cashierInfo)==null?void 0:z.name}),e.jsx(a,{color:"secondary",children:(H=i==null?void 0:i.cashierInfo)==null?void 0:H.address}),e.jsx(a,{color:"secondary",children:(M=i==null?void 0:i.cashierInfo)==null?void 0:M.phone}),e.jsx(a,{color:"secondary",children:(R=i==null?void 0:i.cashierInfo)==null?void 0:R.email})]})]})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsxs(g,{textAlign:{xs:"left",sm:"right"},color:"grey.200",children:[e.jsx(P,{variant:"outlined",startIcon:e.jsx(Ie,{}),color:"secondary",onClick:()=>de(!0),size:"small",children:"Change"}),e.jsx(se,{open:d.open,setOpen:n=>de(n),handlerAddress:n=>y("cashierInfo",n)})]})})]})})}),e.jsxs(t,{item:!0,xs:12,sm:6,children:[e.jsx($,{sx:{minHeight:168},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,sm:8,children:e.jsxs(c,{spacing:2,children:[e.jsx(a,{variant:"h5",children:"To:"}),e.jsxs(c,{sx:{width:"100%"},children:[e.jsx(a,{variant:"subtitle1",children:(G=i==null?void 0:i.customerInfo)==null?void 0:G.name}),e.jsx(a,{color:"secondary",children:(U=i==null?void 0:i.customerInfo)==null?void 0:U.address}),e.jsx(a,{color:"secondary",children:(W=i==null?void 0:i.customerInfo)==null?void 0:W.phone}),e.jsx(a,{color:"secondary",children:(Q=i==null?void 0:i.customerInfo)==null?void 0:Q.email})]})]})}),e.jsx(t,{item:!0,xs:12,sm:4,children:e.jsxs(g,{textAlign:"right",color:"grey.200",children:[e.jsx(P,{size:"small",startIcon:e.jsx(ne,{}),color:"secondary",variant:"outlined",onClick:()=>oe(!0),children:"Add"}),e.jsx(se,{open:d.isCustomerOpen,setOpen:n=>oe(n),handlerAddress:n=>y("customerInfo",n)})]})})]})}),h.customerInfo&&r.customerInfo&&e.jsx(A,{error:!0,children:(V=r==null?void 0:r.customerInfo)==null?void 0:V.name})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(a,{variant:"h5",children:"Detail"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(we,{name:"invoice_detail",render:({remove:n,push:l})=>{var m,_,X,J,K,Y;return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsxs(Ne,{sx:{minWidth:650},children:[e.jsx($e,{children:e.jsxs(ce,{children:[e.jsx(u,{children:"#"}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Description"}),e.jsx(u,{children:"Qty"}),e.jsx(u,{children:"Price"}),e.jsx(u,{align:"right",children:"Amount"}),e.jsx(u,{align:"center",children:"Action"})]})}),e.jsx(Ee,{children:(m=i==null?void 0:i.invoice_detail)==null?void 0:m.map((j,he)=>e.jsxs(ce,{children:[e.jsx(u,{children:(i==null?void 0:i.invoice_detail.indexOf(j))+1}),e.jsx(qe,{id:j.id,index:he,name:j.name,description:j.description,qty:j.qty,price:j.price,onDeleteItem:me=>n(me),onEditItem:x,Blur:o,errors:r,touched:h},j.id)]},j.id))})]})}),e.jsx(_e,{}),h.invoice_detail&&r.invoice_detail&&!Array.isArray(r==null?void 0:r.invoice_detail)&&e.jsx(c,{direction:"row",justifyContent:"center",sx:{p:1.5},children:e.jsx(A,{error:!0,children:r.invoice_detail})}),e.jsxs(t,{container:!0,justifyContent:"space-between",children:[e.jsx(t,{item:!0,xs:12,md:8,children:e.jsx(g,{sx:{pt:2.5,pr:2.5,pb:2.5,pl:0},children:e.jsx(P,{color:"primary",startIcon:e.jsx(ne,{}),onClick:()=>l({id:Be(),name:"",description:"",qty:1,price:"1.00"}),variant:"dashed",sx:{bgcolor:"transparent !important"},children:"Add Item"})})}),e.jsxs(t,{item:!0,xs:12,md:4,children:[e.jsxs(t,{container:!0,justifyContent:"space-between",spacing:2,sx:{pt:2.5,pb:2.5},children:[e.jsx(t,{item:!0,xs:6,children:e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Discount(%)"}),e.jsx(T,{type:"number",fullWidth:!0,name:"discount",id:"discount",placeholder:"0.0",value:i.discount,onChange:x,inputProps:{min:0}})]})}),e.jsx(t,{item:!0,xs:6,children:e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Tax(%)"}),e.jsx(T,{type:"number",fullWidth:!0,name:"tax",id:"tax",placeholder:"0.0",value:i.tax,onChange:x,inputProps:{min:0}})]})})]}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{spacing:2,children:[e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(a,{color:"secondary",children:"Sub Total:"}),e.jsx(a,{children:((_=d.country)==null?void 0:_.prefix)+""+w.toFixed(2)})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(a,{color:"secondary",children:"Discount:"}),e.jsx(a,{variant:"h6",color:"success.main",children:((X=d.country)==null?void 0:X.prefix)+""+O.toFixed(2)})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(a,{color:"secondary",children:"Tax:"}),e.jsx(a,{children:((J=d.country)==null?void 0:J.prefix)+""+F.toFixed(2)})]}),e.jsxs(c,{direction:"row",justifyContent:"space-between",children:[e.jsx(a,{variant:"subtitle1",children:"Grand Total:"}),e.jsx(a,{variant:"subtitle1",children:S%1===0?((K=d.country)==null?void 0:K.prefix)+""+S:((Y=d.country)==null?void 0:Y.prefix)+""+S.toFixed(2)})]})]})})]})]})]})}})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Notes"}),e.jsx(T,{placeholder:"Address",rows:3,value:i.notes,multiline:!0,name:"notes",onChange:x,inputProps:{maxLength:b},helperText:`${i.notes.length} / ${b}`,sx:{width:"100%","& .MuiFormHelperText-root":{mr:0,display:"flex",justifyContent:"flex-end"}}})]})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsxs(c,{spacing:1,children:[e.jsx(p,{children:"Set Currency*"}),e.jsx(C,{sx:{width:{xs:"100%",sm:250}},children:e.jsx(Ce,{id:"country-select-demo",fullWidth:!0,options:d.countries,defaultValue:d.countries[2],value:d.countries.find(n=>{var l;return n.code===((l=d.country)==null?void 0:l.code)}),onChange:(n,l)=>Fe(l),autoHighlight:!0,getOptionLabel:n=>n.label,renderOption:({key:n,...l},m)=>e.jsxs(g,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...l,children:[m.code&&e.jsx("img",{loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${m.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${m.code.toLowerCase()}.png 2x`,alt:""}),m.label]},n),renderInput:n=>{const l=d.countries.find(m=>{var _;return m.code===((_=d.country)==null?void 0:_.code)});return e.jsx(T,{...n,name:"phoneCode",placeholder:"Select",InputProps:{...n.InputProps,startAdornment:e.jsx(e.Fragment,{children:l&&l.code!==""&&e.jsx("img",{style:{marginRight:6},loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${l.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${l.code.toLowerCase()}.png 2x`,alt:""})})},inputProps:{...n.inputProps,autoComplete:"new-password"}})}})})]})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsxs(c,{direction:"row",justifyContent:"flex-end",alignItems:"flex-end",spacing:2,sx:{height:"100%"},children:[e.jsx(P,{variant:"outlined",color:"secondary",disabled:!I,sx:{color:"secondary.dark"},onClick:()=>E(!0),children:"Preview"}),e.jsx(P,{color:"primary",variant:"contained",type:"submit",children:"Update & Send"}),e.jsx(Se,{isOpen:d.isOpen,setIsOpen:n=>E(n),invoiceInfo:{...i,subtotal:w,taxRate:F,discountRate:O,total:S},items:i==null?void 0:i.invoice_detail,onAddNextInvoice:()=>E(!1)},i.invoice_id)]})})]})})}})}function di(){const{id:s}=je(),{invoiceLoading:d,invoice:q}=De(),{invoiceMaster:b,invoiceMasterLoading:L}=Le(),[o,r]=Z.useState(null);Z.useEffect(()=>{s&&!d&&r(q.filter(I=>I.id.toString()===s)[0])},[s,q,d]);const x=e.jsx(g,{sx:{height:"calc(100vh - 310px)"},children:e.jsx(Pe,{})});let f=[{title:"Home",to:Te},{title:"Invoice",to:"/apps/invoice/dashboard"},{title:"Edit"}];const i=d||L||b===void 0||o===null;return e.jsxs(e.Fragment,{children:[e.jsx(pe,{custom:!0,heading:"New Invoice",links:f}),e.jsx($,{children:i?x:e.jsx(xe,{list:o,invoiceMaster:b})})]})}xe.propTypes={list:te.any,invoiceMaster:te.any};export{di as default};
