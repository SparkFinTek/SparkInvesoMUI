import{r as m,j as e,d9 as j,M as b,a5 as d,P as g,cD as E,G as h}from"./index-BHUrCk0l.js";import{D as C,T as D,H as y}from"./index-DusQoUEP.js";import{u as R,b as T,S as w,f as p}from"./ScrollX-DcGhAfcX.js";import{L as K}from"./LinearWithLabel-y4iFSsOL.js";import{C as S,c as z,d as A}from"./Filter-DSKEKrb1.js";import{m as P}from"./react-table-c1OiOfP-.js";import{T as v,a as M,b as N}from"./TableContainer-DaC-e6W2.js";import{T as V}from"./TableHead-CKGYOjxM.js";import{T as x}from"./TableRow-Cq0HkC_w.js";import{T as u}from"./TableCell-Cc1KRl3a.js";import"./redux-D8VgfUav.js";import"./DownloadOutlined-BSo1VBPW.js";import"./CaretDownOutlined-D6iVVplt.js";import"./CaretUpOutlined-CDN-dwPs.js";import"./Slider-WmQyGqAk.js";import"./visuallyHidden-J1ppfhCd.js";import"./CheckOutlined-DgrF9T0m.js";import"./Pagination-ypUxIMC7.js";import"./index-CkjyhU3Q.js";import"./Checkbox-CD0fXkyM.js";import"./MinusOutlined-oI906KYU.js";import"./index-8VKuvd1R.js";function H({defaultColumns:t,defaultData:l}){const[r]=m.useState(()=>[...t]),[c,f]=m.useState([...l]),n=(s,o)=>{c.splice(o,0,c.splice(s,1)[0]),f([...c])},i=R({data:c,columns:r,getCoreRowModel:T(),getRowId:s=>s.id.toString(),debugTable:!0,debugHeaders:!0,debugColumns:!0});let a=[];return i.getAllColumns().map(s=>a.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsx(b,{title:"Row Drag & Drop (Ordering)",content:!1,secondary:e.jsx(S,{data:i.getRowModel().flatRows.map(s=>s.original),headers:a,filename:"row-dragable.csv"}),children:e.jsx(w,{children:e.jsx(v,{children:e.jsxs(M,{children:[e.jsx(V,{children:i.getHeaderGroups().map(s=>e.jsxs(x,{sx:{"& > th:first-of-type":{width:"58px"}},children:[e.jsx(u,{}),s.headers.map(o=>e.jsx(u,{...o.column.columnDef.meta,children:o.isPlaceholder?null:p(o.column.columnDef.header,o.getContext())},o.id))]},s.id))}),e.jsx(N,{children:i.getRowModel().rows.map(s=>e.jsx(z,{row:s,reorderRow:n,children:e.jsx(e.Fragment,{children:s.getVisibleCells().map(o=>e.jsx(u,{...o.column.columnDef.meta,children:p(o.column.columnDef.cell,o.getContext())},o.id))})},s.id))})]})})})})}function O(){const t=m.useMemo(()=>P(10),[]),l=[{id:"fullName",header:"Name",footer:"Name",accessorKey:"fullName"},{id:"email",header:"Email",footer:"Email",accessorKey:"email"},{id:"age",header:"Age",footer:"Age",accessorKey:"age",meta:{className:"cell-right"}},{id:"role",header:"Role",footer:"Role",accessorKey:"role"},{id:"visits",header:"Visits",footer:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{id:"status",header:"Status",footer:"Status",accessorKey:"status",cell:r=>{switch(r.getValue()){case"Complicated":return e.jsx(d,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return e.jsx(d,{color:"success",label:"Relationship",size:"small",variant:"light"});case"Single":default:return e.jsx(d,{color:"info",label:"Single",size:"small",variant:"light"})}}},{id:"progress",header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress",cell:r=>e.jsx(K,{value:r.getValue(),sx:{minWidth:75}})}];return e.jsx(C,{backend:j?D:y,children:e.jsx(H,{defaultColumns:l,defaultData:t})})}H.propTypes={defaultColumns:g.array,defaultData:g.array};function k({defaultColumns:t,data:l}){const[r]=m.useState(()=>[...t]),[c,f]=m.useState(r.map(a=>a.id)),n=R({data:l,columns:r,state:{columnOrder:c},onColumnOrderChange:f,getCoreRowModel:T(),debugTable:!0,debugHeaders:!0,debugColumns:!0});let i=[];return n.getAllColumns().map(a=>i.push({label:typeof a.columnDef.header=="string"?a.columnDef.header:"#",key:a.columnDef.accessorKey})),e.jsx(b,{title:"Column Drag & Drop (Ordering)",content:!1,secondary:e.jsx(S,{data:l,headers:i,filename:"column-dragable.csv"}),children:e.jsx(w,{children:e.jsx(v,{component:E,children:e.jsxs(M,{children:[e.jsx(V,{children:n.getHeaderGroups().map(a=>e.jsx(x,{children:a.headers.map(s=>e.jsx(A,{header:s,table:n,children:e.jsx(e.Fragment,{children:s.isPlaceholder?null:p(s.column.columnDef.header,s.getContext())})},s.id))},a.id))}),e.jsx(N,{children:n.getRowModel().rows.map(a=>e.jsx(x,{children:a.getVisibleCells().map(s=>e.jsx(u,{...s.column.columnDef.meta,children:p(s.column.columnDef.cell,s.getContext())},s.id))},a.id))})]})})})})}function L(){const t=m.useMemo(()=>P(10),[]),l=[{id:"fullName",header:"Name",footer:"Name",accessorKey:"fullName"},{id:"email",header:"Email",footer:"Email",accessorKey:"email"},{id:"age",header:"Age",footer:"Age",accessorKey:"age",meta:{className:"cell-right"}},{id:"role",header:"Role",footer:"Role",accessorKey:"role"},{id:"visits",header:"Visits",footer:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{id:"status",header:"Status",footer:"Status",accessorKey:"status",cell:r=>{switch(r.getValue()){case"Complicated":return e.jsx(d,{color:"error",label:"Complicated",size:"small"});case"Relationship":return e.jsx(d,{color:"success",label:"Relationship",size:"small"});case"Single":default:return e.jsx(d,{color:"info",label:"Single",size:"small"})}}},{id:"progress",header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress",cell:r=>e.jsx(K,{value:r.getValue(),sx:{minWidth:75}})}];return e.jsx(C,{backend:j?D:y,children:e.jsx(k,{defaultColumns:l,data:t})})}k.propTypes={defaultColumns:g.array,data:g.array};function ce(){return e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{item:!0,xs:12,children:e.jsx(O,{})}),e.jsx(h,{item:!0,xs:12,children:e.jsx(L,{})})]})}export{ce as default};
