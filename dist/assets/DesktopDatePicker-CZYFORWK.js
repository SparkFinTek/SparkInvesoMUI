import{bj as r,bY as te,bX as ne,aR as K,aM as he,cD as ye,b$ as W,r as b,c4 as Z,br as ke,cE as Te,cF as xe,j as T,c6 as se,cq as De,cG as J,bi as R,y as ve,T as Re,c5 as we,c0 as Fe,az as ge,by as Se,a_ as _e,P as e}from"./index-BHUrCk0l.js";import{m as Ce,n as $e,u as B,p as re,q as U,s as ae,o as Ie,v as le,L as Ee,N as Oe,r as Me,B as je,a as ie,w as ce,c as Ae,C as Le,I as Ve,K as ze,E as Q,O as Be,F as Ne,G as Ue}from"./dateViewRenderers-BhOy5den.js";import{u as E,r as Ke}from"./useSlotProps-BeK_f2Qt.js";const We=t=>{var s,u,i;const a=B(),p=re();return r({},t,{disablePast:(s=t.disablePast)!=null?s:!1,disableFuture:(u=t.disableFuture)!=null?u:!1,format:(i=t.format)!=null?i:a.formats.keyboardDate,minDate:U(a,t.minDate,p.minDate),maxDate:U(a,t.maxDate,p.maxDate)})},qe=({props:t,inputRef:s})=>{const u=We(t),{forwardedProps:i,internalProps:a}=Ce(u,"date");return $e({inputRef:s,forwardedProps:i,internalProps:a,valueManager:ae,fieldValueManager:Ie,validator:le,valueType:"date"})};function He(t){return te("MuiPickersPopper",t)}ne("MuiPickersPopper",["root","paper"]);const Ye=["PaperComponent","popperPlacement","ownerState","children","paperSlotProps","paperClasses","onPaperClick","onPaperTouchStart"],Ge=t=>{const{classes:s}=t;return se({root:["root"],paper:["paper"]},He,s)},Xe=K(he,{name:"MuiPickersPopper",slot:"Root",overridesResolver:(t,s)=>s.root})(({theme:t})=>({zIndex:t.zIndex.modal})),Je=K(ye,{name:"MuiPickersPopper",slot:"Paper",overridesResolver:(t,s)=>s.paper})(({ownerState:t})=>r({outline:0,transformOrigin:"top center"},t.placement.includes("top")&&{transformOrigin:"bottom center"}));function Qe(t,s){return s.documentElement.clientWidth<t.clientX||s.documentElement.clientHeight<t.clientY}function Ze(t,s){const u=b.useRef(!1),i=b.useRef(!1),a=b.useRef(null),p=b.useRef(!1);b.useEffect(()=>{if(!t)return;function o(){p.current=!0}return document.addEventListener("mousedown",o,!0),document.addEventListener("touchstart",o,!0),()=>{document.removeEventListener("mousedown",o,!0),document.removeEventListener("touchstart",o,!0),p.current=!1}},[t]);const c=De(o=>{if(!p.current)return;const n=i.current;i.current=!1;const l=J(a.current);if(!a.current||"clientX"in o&&Qe(o,l))return;if(u.current){u.current=!1;return}let d;o.composedPath?d=o.composedPath().indexOf(a.current)>-1:d=!l.documentElement.contains(o.target)||a.current.contains(o.target),!d&&!n&&s(o)}),f=()=>{i.current=!0};return b.useEffect(()=>{if(t){const o=J(a.current),n=()=>{u.current=!0};return o.addEventListener("touchstart",c),o.addEventListener("touchmove",n),()=>{o.removeEventListener("touchstart",c),o.removeEventListener("touchmove",n)}}},[t,c]),b.useEffect(()=>{if(t){const o=J(a.current);return o.addEventListener("click",c),()=>{o.removeEventListener("click",c),i.current=!1}}},[t,c]),[a,f,f]}const eo=b.forwardRef((t,s)=>{const{PaperComponent:u,popperPlacement:i,ownerState:a,children:p,paperSlotProps:c,paperClasses:f,onPaperClick:o,onPaperTouchStart:n}=t,l=R(t,Ye),d=r({},a,{placement:i}),P=E({elementType:u,externalSlotProps:c,additionalProps:{tabIndex:-1,elevation:8,ref:s},className:f,ownerState:d});return T.jsx(u,r({},l,P,{onClick:m=>{var h;o(m),(h=P.onClick)==null||h.call(P,m)},onTouchStart:m=>{var h;n(m),(h=P.onTouchStart)==null||h.call(P,m)},ownerState:d,children:p}))});function oo(t){var s,u,i,a;const p=W({props:t,name:"MuiPickersPopper"}),{anchorEl:c,children:f,containerRef:o=null,shouldRestoreFocus:n,onBlur:l,onDismiss:d,open:P,role:m,placement:h,slots:y,slotProps:k,reduceAnimations:w}=p;b.useEffect(()=>{function v(C){P&&(C.key==="Escape"||C.key==="Esc")&&d()}return document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)}},[d,P]);const x=b.useRef(null);b.useEffect(()=>{m==="tooltip"||n&&!n()||(P?x.current=Ee(document):x.current&&x.current instanceof HTMLElement&&setTimeout(()=>{x.current instanceof HTMLElement&&x.current.focus()}))},[P,m,n]);const[F,$,O]=Ze(P,l??d),M=b.useRef(null),j=Z(M,o),A=Z(j,F),g=p,S=Ge(g),D=Oe(),I=w??D,_=v=>{v.key==="Escape"&&(v.stopPropagation(),d())},L=((s=y==null?void 0:y.desktopTransition)!=null?s:I)?ke:Te,q=(u=y==null?void 0:y.desktopTrapFocus)!=null?u:xe,H=(i=y==null?void 0:y.desktopPaper)!=null?i:Je,N=(a=y==null?void 0:y.popper)!=null?a:Xe,Y=E({elementType:N,externalSlotProps:k==null?void 0:k.popper,additionalProps:{transition:!0,role:m,open:P,anchorEl:c,placement:h,onKeyDown:_},className:S.root,ownerState:p});return T.jsx(N,r({},Y,{children:({TransitionProps:v,placement:C})=>T.jsx(q,r({open:P,disableAutoFocus:!0,disableRestoreFocus:!0,disableEnforceFocus:m==="tooltip",isEnabled:()=>!0},k==null?void 0:k.desktopTrapFocus,{children:T.jsx(L,r({},v,k==null?void 0:k.desktopTransition,{children:T.jsx(eo,{PaperComponent:H,ownerState:g,popperPlacement:C,ref:A,onPaperClick:$,onPaperTouchStart:O,paperClasses:S.paper,paperSlotProps:k==null?void 0:k.desktopPaper,children:f})}))}))}))}const to=["components","componentsProps","slots","slotProps","InputProps","inputProps"],no=["inputRef"],so=["ref","onPaste","onKeyDown","inputMode","readOnly","clearable","onClear"],ro=b.forwardRef(function(s,u){var i,a,p;const c=W({props:s,name:"MuiDateField"}),{components:f,componentsProps:o,slots:n,slotProps:l,InputProps:d,inputProps:P}=c,m=R(c,to),h=c,y=(i=(a=n==null?void 0:n.textField)!=null?a:f==null?void 0:f.TextField)!=null?i:ve,k=E({elementType:y,externalSlotProps:(p=l==null?void 0:l.textField)!=null?p:o==null?void 0:o.textField,externalForwardedProps:m,ownerState:h}),{inputRef:w}=k,x=R(k,no);x.inputProps=r({},P,x.inputProps),x.InputProps=r({},d,x.InputProps);const F=qe({props:x,inputRef:w}),{ref:$,onPaste:O,onKeyDown:M,inputMode:j,readOnly:A,clearable:g,onClear:S}=F,D=R(F,so),{InputProps:I,fieldProps:_}=Me({onClear:S,clearable:g,fieldProps:D,InputProps:D.InputProps,slots:n,slotProps:l,components:f,componentsProps:o});return T.jsx(y,r({ref:u},_,{InputProps:r({},I,{readOnly:A}),inputProps:r({},D.inputProps,{inputMode:j,onPaste:O,onKeyDown:M,ref:$})}))});function ao(t){return te("MuiDatePickerToolbar",t)}ne("MuiDatePickerToolbar",["root","title"]);const lo=["value","isLandscape","onChange","toolbarFormat","toolbarPlaceholder","views","className"],io=t=>{const{classes:s}=t;return se({root:["root"],title:["title"]},ao,s)},co=K(je,{name:"MuiDatePickerToolbar",slot:"Root",overridesResolver:(t,s)=>s.root})({}),uo=K(Re,{name:"MuiDatePickerToolbar",slot:"Title",overridesResolver:(t,s)=>s.title})(({ownerState:t})=>r({},t.isLandscape&&{margin:"auto 16px auto auto"})),po=b.forwardRef(function(s,u){const i=W({props:s,name:"MuiDatePickerToolbar"}),{value:a,isLandscape:p,toolbarFormat:c,toolbarPlaceholder:f="––",views:o,className:n}=i,l=R(i,lo),d=B(),P=ie(),m=io(i),h=b.useMemo(()=>{if(!a)return f;const k=ce(d,{format:c,views:o},!0);return d.formatByString(a,k)},[a,c,f,d,o]),y=i;return T.jsx(co,r({ref:u,toolbarTitle:P.datePickerToolbarTitle,isLandscape:p,className:we(m.root,n)},l,{children:T.jsx(uo,{variant:"h4",align:p?"left":"center",ownerState:y,className:m.title,children:h})}))});function Po(t,s){var u,i,a,p;const c=B(),f=re(),o=W({props:t,name:s}),n=b.useMemo(()=>{var d;return((d=o.localeText)==null?void 0:d.toolbarTitle)==null?o.localeText:r({},o.localeText,{datePickerToolbarTitle:o.localeText.toolbarTitle})},[o.localeText]),l=(u=o.slots)!=null?u:Ae(o.components);return r({},o,{localeText:n},Le({views:o.views,openTo:o.openTo,defaultViews:["year","day"],defaultOpenTo:"day"}),{disableFuture:(i=o.disableFuture)!=null?i:!1,disablePast:(a=o.disablePast)!=null?a:!1,minDate:U(c,o.minDate,f.minDate),maxDate:U(c,o.maxDate,f.maxDate),slots:r({toolbar:po},l),slotProps:(p=o.slotProps)!=null?p:o.componentsProps})}const fo=["props","getOpenDialogAriaText"],mo=["ownerState"],bo=["ownerState"],ho=t=>{var s,u,i,a,p;let{props:c,getOpenDialogAriaText:f}=t,o=R(t,fo);const{slots:n,slotProps:l,className:d,sx:P,format:m,formatDensity:h,timezone:y,name:k,label:w,inputRef:x,readOnly:F,disabled:$,autoFocus:O,localeText:M,reduceAnimations:j}=c,A=B(),g=b.useRef(null),S=b.useRef(null),D=Fe(),I=(s=l==null||(u=l.toolbar)==null?void 0:u.hidden)!=null?s:!1,{open:_,actions:L,hasUIView:q,layoutProps:H,renderCurrentView:N,shouldRestoreFocus:Y,fieldProps:v}=Ve(r({},o,{props:c,inputRef:g,autoFocusView:!0,additionalViewProps:{},wrapperVariant:"desktop"})),C=(i=n.inputAdornment)!=null?i:ge,ue=E({elementType:C,externalSlotProps:l==null?void 0:l.inputAdornment,additionalProps:{position:"end"},ownerState:c}),G=R(ue,mo),ee=(a=n.openPickerButton)!=null?a:Se,pe=E({elementType:ee,externalSlotProps:l==null?void 0:l.openPickerButton,additionalProps:{disabled:$||F,onClick:_?L.onClose:L.onOpen,"aria-label":f(v.value,A),edge:G.position},ownerState:c}),de=R(pe,bo),Pe=n.openPickerIcon,oe=n.field,V=E({elementType:oe,externalSlotProps:l==null?void 0:l.field,additionalProps:r({},v,I&&{id:D},{readOnly:F,disabled:$,className:d,sx:P,format:m,formatDensity:h,timezone:y,label:w,name:k,autoFocus:O&&!c.open,focused:_?!0:void 0}),ownerState:c});q&&(V.InputProps=r({},V.InputProps,{ref:S,[`${G.position}Adornment`]:T.jsx(C,r({},G,{children:T.jsx(ee,r({},de,{children:T.jsx(Pe,r({},l==null?void 0:l.openPickerIcon))}))}))}));const fe=r({textField:n.textField,clearIcon:n.clearIcon,clearButton:n.clearButton},V.slots),me=(p=n.layout)!=null?p:ze,be=Z(g,V.inputRef,x);let X=D;I&&(w?X=`${D}-label`:X=void 0);const z=r({},l,{toolbar:r({},l==null?void 0:l.toolbar,{titleId:D}),popper:r({"aria-labelledby":X},l==null?void 0:l.popper)});return{renderPicker:()=>T.jsxs(_e,{localeText:M,children:[T.jsx(oe,r({},V,{slots:fe,slotProps:z,inputRef:be})),T.jsx(oo,r({role:"dialog",placement:"bottom-start",anchorEl:S.current},L,{open:_,slots:n,slotProps:z,shouldRestoreFocus:Y,reduceAnimations:j,children:T.jsx(me,r({},H,z==null?void 0:z.layout,{slots:n,slotProps:z,children:N()}))}))]})}},yo=b.forwardRef(function(s,u){var i,a,p,c;const f=ie(),o=B(),n=Po(s,"MuiDesktopDatePicker"),l=r({day:Q,month:Q,year:Q},n.viewRenderers),d=r({},n,{viewRenderers:l,format:ce(o,n,!1),yearsPerRow:(i=n.yearsPerRow)!=null?i:4,slots:r({openPickerIcon:Be,field:ro},n.slots),slotProps:r({},n.slotProps,{field:m=>{var h;return r({},Ke((h=n.slotProps)==null?void 0:h.field,m),Ne(n),{ref:u})},toolbar:r({hidden:!0},(a=n.slotProps)==null?void 0:a.toolbar)})}),{renderPicker:P}=ho({props:d,valueManager:ae,valueType:"date",getOpenDialogAriaText:(p=(c=d.localeText)==null?void 0:c.openDatePickerDialogue)!=null?p:f.openDatePickerDialogue,validator:le});return P()});yo.propTypes={autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,components:e.object,componentsProps:e.object,dayOfWeekFormatter:e.func,defaultCalendarMonth:e.any,defaultValue:e.any,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,displayWeekNumber:e.bool,fixedWeekNumber:e.number,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:Ue,label:e.node,loading:e.bool,localeText:e.object,maxDate:e.any,minDate:e.any,monthsPerRow:e.oneOf([3,4]),name:e.string,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,onYearChange:e.func,open:e.bool,openTo:e.oneOf(["day","month","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.any,renderLoading:e.func,selectedSections:e.oneOfType([e.oneOf(["all","day","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number,e.shape({endIndex:e.number.isRequired,startIndex:e.number.isRequired})]),shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.any,view:e.oneOf(["day","month","year"]),viewRenderers:e.shape({day:e.func,month:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","month","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};export{yo as D,ro as a,ho as b,Po as u};
