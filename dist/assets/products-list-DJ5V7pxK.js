import{P as j,c as T,j as e,G as a,B as p,g as v,I as w,a5 as P,t as g,T as l,cT as N,r as x,n as z,ab as I,a9 as O,x as $,w as A,bv as H,M as K,d as B,a6 as G}from"./index-BHUrCk0l.js";import{N as V}from"./react-number-format.es-Dx14T1WC.js";import{u as q,g as L,a as Q,b as U,c as X,d as J,S as W,f as b}from"./ScrollX-DcGhAfcX.js";import{r as Y}from"./index-BLlYVWof.js";import{I as R,D as Z,S as _,C as ee,R as te,H as se,T as re}from"./Filter-DSKEKrb1.js";import{R as oe}from"./Rating-BDumd0d7.js";import{E as ne}from"./EyeOutlined-ecpR533H.js";import{T as le,a as ie,b as ce}from"./TableContainer-DaC-e6W2.js";import{T as ae}from"./TableHead-CKGYOjxM.js";import{T as u}from"./TableRow-Cq0HkC_w.js";import{T as h}from"./TableCell-Cc1KRl3a.js";import"./DownloadOutlined-BSo1VBPW.js";import"./CaretDownOutlined-D6iVVplt.js";import"./CaretUpOutlined-CDN-dwPs.js";import"./LinearWithLabel-y4iFSsOL.js";import"./Slider-WmQyGqAk.js";import"./visuallyHidden-J1ppfhCd.js";import"./CheckOutlined-DgrF9T0m.js";import"./Pagination-ypUxIMC7.js";import"./index-CkjyhU3Q.js";import"./Checkbox-CD0fXkyM.js";import"./MinusOutlined-oI906KYU.js";function k({data:t}){var s;const d=T();return e.jsxs(a,{container:!0,spacing:2.5,sx:{pl:{xs:0,sm:5,md:6,lg:10,xl:12}},children:[e.jsx(a,{item:!0,xs:6,sm:5,md:4,lg:3,children:e.jsxs(p,{sx:{position:"relative"},children:[e.jsx(p,{sx:{bgcolor:"grey.200",width:"100%"},children:e.jsx("img",{src:t.image&&v(`${t.image}`,w.ECOMMERCE),alt:"product",style:{background:d.palette.grey[200],width:"100%"}})}),e.jsx(P,{label:t.isStock?"In Stock":"Out of Stock",color:t.isStock?"success":"error",variant:"light",sx:{position:"absolute",right:15,top:15}})]})}),e.jsx(a,{item:!0,xs:12,sm:7,md:8,lg:9,children:e.jsxs(g,{spacing:1,sx:{px:2},children:[e.jsx(l,{variant:"h5",children:t==null?void 0:t.name}),e.jsx(l,{color:"text.secondary",children:t==null?void 0:t.about}),e.jsx(oe,{name:"read-only",value:t.rating,readOnly:!0}),e.jsx(p,{sx:{width:"80%",pt:2},children:e.jsxs(a,{container:!0,spacing:1,children:[e.jsx(a,{item:!0,xs:4,md:3,children:e.jsx(l,{color:"text.secondary",children:"Categories"})}),e.jsx(a,{item:!0,xs:8,md:9,children:e.jsx(g,{direction:"row",spacing:.5,children:(s=t==null?void 0:t.categories)==null?void 0:s.map((n,i)=>e.jsxs(l,{variant:"h6",sx:{textTransform:"capitalize"},children:[n,(t==null?void 0:t.categories.length)>i+1?",":""]},i))})}),e.jsx(a,{item:!0,xs:4,md:3,children:e.jsx(l,{color:"text.secondary",children:"Qty"})}),e.jsx(a,{item:!0,xs:8,md:9,children:e.jsx(l,{variant:"h6",children:t==null?void 0:t.quantity})}),e.jsx(a,{item:!0,xs:4,md:3,children:e.jsx(l,{color:"text.secondary",children:"Price"})}),e.jsx(a,{item:!0,xs:8,md:9,children:e.jsx(l,{variant:"h5",children:t!=null&&t.salePrice?`$${t==null?void 0:t.salePrice}`:`$${t==null?void 0:t.offerPrice}`})})]})})]})})]})}k.propTypes={data:j.any};const ge=(t,d,s,n)=>{const i=Y(t.getValue(d),s);return n(i),i.passed};function M({data:t,columns:d}){const s=T(),[n,i]=x.useState([{id:"name",desc:!1}]),[m,E]=x.useState({}),[S,y]=x.useState(""),c=q({data:t,columns:d,state:{sorting:n,rowSelection:m,globalFilter:S},enableRowSelection:!0,onSortingChange:i,onRowSelectionChange:E,onGlobalFilterChange:y,getRowCanExpand:()=>!0,getSortedRowModel:L(),getFilteredRowModel:Q(),getCoreRowModel:U(),getPaginationRowModel:X(),getExpandedRowModel:J(),globalFilterFn:ge,debugTable:!0}),f=A(s.palette.primary.lighter,.1);let C=[];d.map(r=>r.accessorKey&&C.push({label:typeof r.header=="string"?r.header:"#",key:r.accessorKey}));const D=H(),F=()=>{D("/apps/e-commerce/add-new-product")};return e.jsxs(K,{content:!1,children:[e.jsxs(g,{direction:"row",spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2},children:[e.jsx(Z,{value:S??"",onFilterChange:r=>y(String(r)),placeholder:`Search ${t.length} records...`}),e.jsxs(g,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(_,{getState:c.getState,getAllColumns:c.getAllColumns,setSorting:i}),e.jsx(B,{variant:"contained",startIcon:e.jsx(I,{}),onClick:F,children:"Add Product"}),e.jsx(ee,{data:c.getSelectedRowModel().flatRows.map(r=>r.original).length===0?t:c.getSelectedRowModel().flatRows.map(r=>r.original),headers:C,filename:"product-list.csv"})]})]}),e.jsx(W,{children:e.jsxs(g,{children:[e.jsx(te,{selected:Object.keys(m).length}),e.jsx(le,{children:e.jsxs(ie,{children:[e.jsx(ae,{children:c.getHeaderGroups().map(r=>e.jsx(u,{children:r.headers.map(o=>(o.column.columnDef.meta!==void 0&&o.column.getCanSort()&&Object.assign(o.column.columnDef.meta,{className:o.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(h,{...o.column.columnDef.meta,onClick:o.column.getToggleSortingHandler(),...o.column.getCanSort()&&o.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:o.isPlaceholder?null:e.jsxs(g,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(p,{children:b(o.column.columnDef.header,o.getContext())}),o.column.getCanSort()&&e.jsx(se,{column:o.column})]})},o.id)))},r.id))}),e.jsx(ce,{children:c.getRowModel().rows.map(r=>e.jsxs(x.Fragment,{children:[e.jsx(u,{children:r.getVisibleCells().map(o=>e.jsx(h,{...o.column.columnDef.meta,children:b(o.column.columnDef.cell,o.getContext())},o.id))}),r.getIsExpanded()&&e.jsx(u,{sx:{bgcolor:f,"&:hover":{bgcolor:`${f} !important`}},children:e.jsx(h,{colSpan:r.getVisibleCells().length,children:e.jsx(k,{data:r.original})})})]},r.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(p,{sx:{p:2},children:e.jsx(re,{setPageSize:c.setPageSize,setPageIndex:c.setPageIndex,getState:c.getState,getPageCount:c.getPageCount,initialPageSize:5})})]})]})})]})}function Fe(){const t=N(),d=x.useMemo(()=>[{id:"select",header:({table:s})=>e.jsx(R,{checked:s.getIsAllRowsSelected(),indeterminate:s.getIsSomeRowsSelected(),onChange:s.getToggleAllRowsSelectedHandler()}),cell:({row:s})=>e.jsx(R,{checked:s.getIsSelected(),disabled:!s.getCanSelect(),indeterminate:s.getIsSomeSelected(),onChange:s.getToggleSelectedHandler()})},{header:"#",accessorKey:"id",meta:{className:"cell-center"}},{header:"Product Detail",accessorKey:"name",cell:({row:s,getValue:n})=>e.jsxs(g,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(z,{variant:"rounded",alt:n(),color:"secondary",size:"sm",src:v(`thumbs/${s.original.image?s.original.image:"prod-11.png"}`,w.ECOMMERCE)}),e.jsxs(g,{spacing:0,children:[e.jsx(l,{variant:"subtitle1",children:n()}),e.jsx(l,{variant:"caption",color:"text.secondary",children:s.original.description})]})]})},{header:"Categories",accessorKey:"categories",cell:({row:s})=>{var n;return s.original.categories?e.jsx(g,{direction:"row",spacing:.25,children:(n=s.original)==null?void 0:n.categories.map((i,m)=>e.jsxs(l,{variant:"h6",sx:{textTransform:"capitalize"},children:[i,s.original.categories.length>m+1?",":""]},m))}):e.jsx(l,{variant:"h6",children:"-"})}},{header:"Price",accessorKey:"offerPrice",cell:({getValue:s})=>e.jsx(V,{value:s(),displayType:"text",thousandSeparator:!0,prefix:"$"}),meta:{className:"cell-right"}},{header:"Qty",accessorKey:"quantity",meta:{className:"cell-right"}},{header:"Status",accessorKey:"isStock",cell:({getValue:s})=>e.jsx(P,{color:s()?"success":"error",label:s()?"In Stock":"Out of Stock",size:"small",variant:"light"})},{header:"Actions",meta:{className:"cell-center"},disableSortBy:!0,cell:({row:s})=>{const n=s.getCanExpand()&&s.getIsExpanded()?e.jsx(I,{style:{transform:"rotate(45deg)"}}):e.jsx(ne,{});return e.jsx(O,{title:"View",children:e.jsx($,{color:s.getIsExpanded()?"error":"secondary",onClick:s.getToggleExpandedHandler(),children:n})})}}],[]);return e.jsx(M,{data:t,columns:d})}M.propTypes={data:j.array,columns:j.array};export{Fe as default,ge as fuzzyFilter};
