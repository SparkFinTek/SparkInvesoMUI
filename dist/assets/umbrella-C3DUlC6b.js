import{r as i,j as e,x as p,aG as E,aC as k,d8 as W,n as Y,g as Z,I as ee,d9 as te,t as j,a9 as M,_ as se,c as ae,ai as oe,w as le,M as ne,cD as re,d7 as ie,B as S,a6 as ce,P as C}from"./index-BHUrCk0l.js";import{D as de,T as ge,H as me}from"./index-DusQoUEP.js";import{s as ue,u as pe,d as xe,j as fe,b as he,c as je,g as Ce,a as be,e as Se,h as ye,i as Re,S as Te,f}from"./ScrollX-DcGhAfcX.js";import{r as De,c as Fe}from"./index-BLlYVWof.js";import{m as we}from"./react-table-c1OiOfP-.js";import{E as Me}from"./ExpandingUserDetail-BQ8AW-6-.js";import{I,b as Ie,D as Ge,f as Ee,C as ke,R as Pe,d as Ve,H as ve,F as Ae,c as He,E as Oe,T as Ke}from"./Filter-DSKEKrb1.js";import{E as ze}from"./EditTwoTone-BCZxPkYU.js";import{S as Ne}from"./SendOutlined-CvvdW6_r.js";import{U as Ue}from"./UngroupOutlined-BDaZxrNg.js";import{T as Be,a as Le,b as $e}from"./TableContainer-DaC-e6W2.js";import{T as G}from"./TableHead-CKGYOjxM.js";import{T as h}from"./TableRow-Cq0HkC_w.js";import{T as d}from"./TableCell-Cc1KRl3a.js";import{T as qe}from"./TableFooter-pkDN8Z40.js";import"./redux-D8VgfUav.js";import"./index-8VKuvd1R.js";import"./react-number-format.es-Dx14T1WC.js";import"./DownloadOutlined-BSo1VBPW.js";import"./CaretDownOutlined-D6iVVplt.js";import"./CaretUpOutlined-CDN-dwPs.js";import"./LinearWithLabel-y4iFSsOL.js";import"./Slider-WmQyGqAk.js";import"./visuallyHidden-J1ppfhCd.js";import"./CheckOutlined-DgrF9T0m.js";import"./Pagination-ypUxIMC7.js";import"./index-CkjyhU3Q.js";import"./Checkbox-CD0fXkyM.js";import"./MinusOutlined-oI906KYU.js";const P=(r,l,a,o)=>{const g=De(r.getValue(l),a);return o(g),g.passed},_e=(r,l,a)=>{let o=0;return r.columnFiltersMeta[a]&&(o=Fe(r.columnFiltersMeta[a],l.columnFiltersMeta[a])),o===0?ue.alphanumeric(r,l,a):o};function V({row:r,table:l}){var g;const a=(g=l==null?void 0:l.options)==null?void 0:g.meta,o=m=>{a==null||a.setSelectedRow(b=>({...b,[r.id]:!b[r.id]})),a==null||a.revertData(r.index,(m==null?void 0:m.currentTarget.name)==="cancel")};return e.jsxs(j,{direction:"row",spacing:1,alignItems:"center",children:[(a==null?void 0:a.selectedRow[r.id])&&e.jsx(M,{title:"Cancel",children:e.jsx(p,{color:"error",name:"cancel",onClick:o,children:e.jsx(se,{})})}),e.jsx(M,{title:a!=null&&a.selectedRow[r.id]?"Save":"Edit",children:e.jsx(p,{color:a!=null&&a.selectedRow[r.id]?"success":"primary",onClick:o,children:a!=null&&a.selectedRow[r.id]?e.jsx(Ne,{}):e.jsx(ze,{})})})]})}function v({defaultColumns:r,data:l,setData:a}){const o=ae(),g=oe(o.breakpoints.down("sm")),[m,b]=i.useState({}),[A,H]=i.useState([]),[y,R]=i.useState(""),[O,K]=i.useState([]),[z,N]=i.useState([]),[U,B]=i.useState(()=>[...l]),[L,$]=i.useState({}),[T]=i.useState(()=>[...r]),[q,_]=i.useState(T.map(s=>s.id)),Q=(s,t)=>{l.splice(t,0,l.splice(s,1)[0]),a([...l])},[X,D]=i.useState({}),n=pe({data:l,columns:T,defaultColumn:{cell:Ie},state:{rowSelection:m,columnFilters:A,globalFilter:y,sorting:O,grouping:z,columnOrder:q,columnVisibility:X},enableRowSelection:!0,onRowSelectionChange:b,onSortingChange:K,onGroupingChange:N,onColumnFiltersChange:H,onGlobalFilterChange:R,onColumnOrderChange:_,onColumnVisibilityChange:D,getRowCanExpand:()=>!0,getExpandedRowModel:xe(),getGroupedRowModel:fe(),getCoreRowModel:he(),getPaginationRowModel:je(),getSortedRowModel:Ce(),getFilteredRowModel:be(),getFacetedRowModel:Se(),getFacetedUniqueValues:ye(),getFacetedMinMaxValues:Re(),globalFilterFn:P,getRowId:s=>s.id.toString(),debugTable:!0,debugHeaders:!0,debugColumns:!0,meta:{selectedRow:L,setSelectedRow:$,revertData:(s,t)=>{t?a(c=>c.map((u,x)=>x===s?U[s]:u)):B(c=>c.map((u,x)=>x===s?l[s]:u))},updateData:(s,t,c)=>{a(u=>u.map((x,J)=>J===s?{...u[s],[t]:c}:x))}}});i.useEffect(()=>D({id:!1,role:!1,contact:!1,country:!1,progress:!1}),[]);const F=le(o.palette.primary.lighter,.1);let w=[];return n.getVisibleLeafColumns().map(s=>s.columnDef.accessorKey&&w.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsxs(ne,{content:!1,children:[e.jsxs(j,{direction:{xs:"column",sm:"row"},spacing:2,justifyContent:"space-between",sx:{padding:2,...g&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(Ge,{value:y??"",onFilterChange:s=>R(String(s)),placeholder:`Search ${l.length} records...`}),e.jsxs(j,{direction:"row",spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(Ee,{getVisibleLeafColumns:n.getVisibleLeafColumns,getIsAllColumnsVisible:n.getIsAllColumnsVisible,getToggleAllColumnsVisibilityHandler:n.getToggleAllColumnsVisibilityHandler,getAllColumns:n.getAllColumns}),e.jsx(ke,{data:n.getSelectedRowModel().flatRows.map(s=>s.original).length===0?l:n.getSelectedRowModel().flatRows.map(s=>s.original),headers:w,filename:"umbrella.csv"})]})]}),e.jsxs(Te,{children:[e.jsx(Pe,{selected:Object.keys(m).length}),e.jsx(Be,{component:re,children:e.jsxs(Le,{children:[e.jsx(G,{children:n.getHeaderGroups().map(s=>e.jsxs(h,{children:[e.jsx(d,{}),s.headers.map(t=>(t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{className:t.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(Ve,{header:t,table:n,children:e.jsx(e.Fragment,{children:t.isPlaceholder?null:e.jsxs(j,{direction:"row",spacing:1,alignItems:"center",children:[t.column.getCanGroup()&&e.jsx(p,{color:t.column.getIsGrouped()?"error":"primary",onClick:t.column.getToggleGroupingHandler(),size:"small",sx:{p:0,width:24,height:24,fontSize:"1rem",mr:.75},children:t.column.getIsGrouped()?e.jsx(Ue,{}):e.jsx(ie,{})}),e.jsx(S,{children:f(t.column.columnDef.header,t.getContext())}),t.column.getCanSort()&&e.jsx(ve,{column:t.column,sort:!0})]})})},t.id)))]},s.id))}),e.jsx(G,{children:n.getHeaderGroups().map(s=>e.jsxs(h,{children:[e.jsx(d,{}),s.headers.map(t=>e.jsx(d,{...t.column.columnDef.meta,children:t.column.getCanFilter()&&e.jsx(Ae,{column:t.column,table:n})},t.id))]},s.id))}),e.jsx($e,{children:n.getRowModel().rows.length>0?n.getRowModel().rows.map(s=>e.jsxs(i.Fragment,{children:[e.jsx(He,{row:s,reorderRow:Q,children:e.jsx(e.Fragment,{children:s.getVisibleCells().map(t=>{let c="background.paper";return t.getIsGrouped()&&(c="primary.lighter"),t.getIsAggregated()&&(c="warning.lighter"),t.getIsPlaceholder()&&(c="error.lighter"),t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{style:{background:c}}),e.jsx(d,{...t.column.columnDef.meta,sx:{bgcolor:c},...t.getIsGrouped()&&t.column.columnDef.meta===void 0&&{style:{background:c}},children:t.getIsGrouped()?e.jsxs(j,{direction:"row",alignItems:"center",spacing:.5,children:[e.jsx(p,{color:"secondary",onClick:s.getToggleExpandedHandler(),size:"small",sx:{p:0,width:24,height:24},children:s.getIsExpanded()?e.jsx(E,{}):e.jsx(k,{})}),e.jsx(S,{children:f(t.column.columnDef.cell,t.getContext())})," ",e.jsxs(S,{children:["(",s.subRows.length,")"]})]}):t.getIsAggregated()?f(t.column.columnDef.aggregatedCell??t.column.columnDef.cell,t.getContext()):t.getIsPlaceholder()?null:f(t.column.columnDef.cell,t.getContext())},t.id)})})}),s.getIsExpanded()&&!s.getIsGrouped()&&e.jsx(h,{sx:{bgcolor:F,"&:hover":{bgcolor:`${F} !important`}},children:e.jsx(d,{colSpan:s.getVisibleCells().length+2,children:e.jsx(Me,{data:s.original})})})]},s.id)):e.jsx(h,{children:e.jsx(d,{colSpan:n.getAllColumns().length,children:e.jsx(Oe,{msg:"No Data"})})})}),e.jsx(qe,{children:n.getFooterGroups().map(s=>e.jsxs(h,{children:[e.jsx(d,{}),s.headers.map(t=>e.jsx(d,{...t.column.columnDef.meta,children:t.isPlaceholder?null:f(t.column.columnDef.header,t.getContext())},t.id))]},s.id))})]})}),e.jsx(ce,{}),e.jsx(S,{sx:{p:2},children:e.jsx(Ke,{setPageSize:n.setPageSize,setPageIndex:n.setPageIndex,getState:n.getState,getPageCount:n.getPageCount})})]})]})}function Rt(){const[r,l]=i.useState(()=>we(20)),a=i.useMemo(()=>[{id:"expander",enableGrouping:!1,header:()=>null,cell:({row:o})=>o.getCanExpand()?e.jsx(p,{color:o.getIsExpanded()?"primary":"secondary",onClick:o.getToggleExpandedHandler(),size:"small",children:o.getIsExpanded()?e.jsx(E,{}):e.jsx(k,{})}):e.jsx(p,{color:"secondary",size:"small",disabled:!0,children:e.jsx(W,{})})},{id:"select",enableGrouping:!1,header:({table:o})=>e.jsx(I,{checked:o.getIsAllRowsSelected(),indeterminate:o.getIsSomeRowsSelected(),onChange:o.getToggleAllRowsSelectedHandler()}),cell:({row:o})=>e.jsx(I,{checked:o.getIsSelected(),disabled:!o.getCanSelect(),indeterminate:o.getIsSomeSelected(),onChange:o.getToggleSelectedHandler()})},{id:"id",title:"Id",header:"#",accessorKey:"id",dataType:"text",enableColumnFilter:!1,enableGrouping:!1,meta:{className:"cell-center"}},{id:"avatar",header:"Avatar",accessorKey:"avatar",enableColumnFilter:!1,enableGrouping:!1,cell:o=>e.jsx(Y,{alt:"Avatar 1",size:"sm",src:Z(`avatar-${o.getValue()}.png`,ee.USERS)}),meta:{className:"cell-center"}},{id:"fullName",header:"Name",footer:"Name",accessorKey:"fullName",dataType:"text",enableGrouping:!1},{id:"email",header:"Email",footer:"Email",accessorKey:"email",dataType:"text",enableGrouping:!1},{id:"age",header:"Age",footer:"Age",accessorKey:"age",dataType:"text",meta:{className:"cell-right"}},{id:"role",header:"Role",footer:"Role",accessorKey:"role",dataType:"text",enableGrouping:!1,filterFn:P,sortingFn:_e},{id:"contact",header:"Contact",footer:"Contact",accessorKey:"contact",dataType:"text",enableGrouping:!1},{id:"country",header:"Country",footer:"Country",accessorKey:"country",dataType:"text",enableGrouping:!1},{id:"visits",header:"Visits",footer:"Visits",accessorKey:"visits",dataType:"text",enableGrouping:!1,meta:{className:"cell-right"}},{id:"status",header:"Status",footer:"Status",accessorKey:"status",dataType:"select"},{id:"progress",header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress",dataType:"progress",enableGrouping:!1},{id:"edit",header:"Actions",cell:V,enableGrouping:!1,meta:{className:"cell-center"}}],[]);return e.jsx(de,{backend:te?ge:me,children:e.jsx(v,{data:r,defaultColumns:a,setData:l})})}V.propTypes={row:C.object,table:C.object};v.propTypes={defaultColumns:C.array,data:C.array,setData:C.any};export{Rt as default,P as fuzzyFilter,_e as fuzzySort};
