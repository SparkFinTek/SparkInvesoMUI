import{r as i,j as e,M as f,t as j,cD as b,P as u}from"./index-BHUrCk0l.js";import{u as F,b as C,a as T,e as y,h as M,i as R,S as w,f as c}from"./ScrollX-DcGhAfcX.js";import{m as D}from"./react-table-c1OiOfP-.js";import{D as S,C as P,F as E,E as V}from"./Filter-DSKEKrb1.js";import{T as K,a as N,b as v}from"./TableContainer-DaC-e6W2.js";import{T as p}from"./TableHead-CKGYOjxM.js";import{T as l}from"./TableRow-Cq0HkC_w.js";import{T as r}from"./TableCell-Cc1KRl3a.js";import{T as A}from"./TableFooter-pkDN8Z40.js";import"./index-8VKuvd1R.js";import"./DownloadOutlined-BSo1VBPW.js";import"./CaretDownOutlined-D6iVVplt.js";import"./CaretUpOutlined-CDN-dwPs.js";import"./LinearWithLabel-y4iFSsOL.js";import"./Slider-WmQyGqAk.js";import"./visuallyHidden-J1ppfhCd.js";import"./CheckOutlined-DgrF9T0m.js";import"./Pagination-ypUxIMC7.js";import"./index-CkjyhU3Q.js";import"./Checkbox-CD0fXkyM.js";import"./MinusOutlined-oI906KYU.js";function g({columns:n,data:o}){const[x,h]=i.useState([]),[m,d]=i.useState(""),a=F({data:o,columns:n,state:{columnFilters:x,globalFilter:m},getCoreRowModel:C(),getFilteredRowModel:T(),getFacetedRowModel:y(),getFacetedUniqueValues:M(),getFacetedMinMaxValues:R(),onColumnFiltersChange:h,onGlobalFilterChange:d});return e.jsxs(f,{content:!1,children:[e.jsxs(j,{direction:"row",spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2},children:[e.jsx(S,{value:m??"",onFilterChange:s=>d(String(s)),placeholder:`Search ${o.length} records...`}),e.jsx(P,{data:o,filename:"empty-table.csv"})]}),e.jsx(w,{children:e.jsx(K,{component:b,children:e.jsxs(N,{children:[e.jsx(p,{children:a.getHeaderGroups().map(s=>e.jsx(l,{children:s.headers.map(t=>e.jsx(r,{...t.column.columnDef.meta,children:t.isPlaceholder?null:c(t.column.columnDef.header,t.getContext())},t.id))},s.id))}),e.jsx(p,{children:a.getHeaderGroups().map(s=>e.jsx(l,{children:s.headers.map(t=>e.jsx(r,{...t.column.columnDef.meta,children:t.column.getCanFilter()&&e.jsx(E,{column:t.column,table:a})},t.id))},s.id))}),e.jsx(v,{children:a.getRowModel().rows.length>0?a.getRowModel().rows.map(s=>e.jsx(l,{children:s.getVisibleCells().map(t=>e.jsx(r,{...t.column.columnDef.meta,children:c(t.column.columnDef.cell,t.getContext())},t.id))},s.id)):e.jsx(l,{children:e.jsx(r,{colSpan:a.getAllColumns().length,children:e.jsx(V,{msg:"No Data"})})})}),e.jsx(A,{children:a.getFooterGroups().map(s=>e.jsx(l,{children:s.headers.map(t=>e.jsx(r,{...t.column.columnDef.meta,children:t.isPlaceholder?null:c(t.column.columnDef.header,t.getContext())},t.id))},s.id))})]})})})]})}function ae(){const n=i.useMemo(()=>D(0),[]),o=i.useMemo(()=>[{header:"Name",footer:"Name",accessorKey:"fullName"},{header:"Email",footer:"Email",accessorKey:"email"},{header:"Role",footer:"Role",accessorKey:"role"},{header:"Age",footer:"Age",accessorKey:"age",meta:{className:"cell-right"}},{header:"Visits",footer:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{header:"Status",footer:"Status",accessorKey:"status"},{header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress"}],[]);return e.jsx(g,{columns:o,data:n})}g.propTypes={columns:u.array,data:u.array};export{ae as default};
