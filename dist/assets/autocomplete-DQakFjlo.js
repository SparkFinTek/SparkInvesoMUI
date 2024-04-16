import{j as o,M as z,G as te,be as j,y as L,B as U,r as b,d1 as At,cQ as wt,c0 as It,c1 as Ae,dh as kt,cq as me,bj as qe,di as Tt,aR as J,h as oe,_ as Xe,a5 as jt,t as Ie,a1 as Pt,a2 as Lt,c as Mt,aN as Ft,dj as he,aM as Rt,dc as Vt,cf as Dt}from"./index-BHUrCk0l.js";import{C as zt,a as Bt,b as Et}from"./ComponentSkeleton-Duec2wAU.js";import{c as $t}from"./countries-CK98J6et.js";import{C as Qe}from"./CheckOutlined-DgrF9T0m.js";import{C as Wt}from"./Checkbox-CD0fXkyM.js";import"./Skeleton-D00KhaeD.js";const _t=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}],m=_t;function Ht(){return o.jsx(z,{title:"Basic",sx:{overflow:"visible"},codeHighlight:!0,codeString:`<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete-label"
  options={data}
  renderInput={(params) => <TextField {...params} label="Label" />}
/>
<Autocomplete
  fullWidth
  disablePortal
  id="basic-autocomplete"
  options={data}
  renderInput={(params) => <TextField {...params} placeholder="Placeholder" />}
/>`,children:o.jsxs(te,{container:!0,spacing:2,children:[o.jsx(te,{item:!0,xs:12,lg:6,children:o.jsx(j,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete-label",options:m,renderInput:l=>o.jsx(L,{...l,label:"Label"})})}),o.jsx(te,{item:!0,xs:12,lg:6,children:o.jsx(j,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete",options:m,renderInput:l=>o.jsx(L,{...l,placeholder:"Placeholder"})})})]})})}function Gt(){return o.jsx(z,{title:"With Image",codeString:`<Autocomplete
  id="country-select-demo"
  fullWidth
  options={countries}
  autoHighlight
  getOptionLabel={(option) => option.label}
  renderOption={({ key, ...props }, option) => (
    <Box key={key} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
      {option.code && (
        <img
          loading="lazy"
          width="20"
          src={https://flagcdn.com/w20/{option.code.toLowerCase()}.png}
          srcSet={https://flagcdn.com/w40/{option.code.toLowerCase()}.png 2x}
          alt=""
        />
      )}
      {option.label} ({option.code}) +{option.phone}
    </Box>
  )}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Choose a country"
      inputProps={{
        ...params.inputProps,
        autoComplete: 'new-password' // disable autocomplete and autofill
      }}
    />
  )}
/>`,children:o.jsx(j,{id:"country-select-demo",fullWidth:!0,options:$t,autoHighlight:!0,getOptionLabel:l=>l.label,renderOption:({key:l,...n},s)=>o.jsxs(U,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...n,children:[s.code&&o.jsx("img",{loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${s.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${s.code.toLowerCase()}.png 2x`,alt:""}),s.label," (",s.code,") +",s.phone]},l),renderInput:l=>o.jsx(L,{...l,placeholder:"Choose a country",inputProps:{...l.inputProps,autoComplete:"new-password"}})})})}const Nt=m,Kt=At();function qt(){const[r,l]=b.useState(null);return o.jsx(z,{title:"Creatable",codeString:`<Autocomplete
  fullWidth
  value={value}
  onChange={(event, newValue) => {
    if (typeof newValue === 'string') {
      setValue({
        label: newValue
      });
    } else if (newValue && newValue.inputValue) {
      setValue({
        label: newValue.inputValue
      });
    } else {
      setValue(newValue);
    }
  }}
  filterOptions={(options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;

    const isExisting = options.some((option) => inputValue === option.label);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        label: 'Add {inputValue}'
      });
    }

    return filtered;
  }}
  selectOnFocus
  clearOnBlur
  handleHomeEndKeys
  id="free-solo-with-text-demo"
  options={data}
  getOptionLabel={(option) => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.label;
  }}
  renderOption={({key, ...props}, option) => <li key={key} {...props}>{option.label}</li>}
  freeSolo
  renderInput={(params) => <TextField {...params} placeholder="Free solo with text demo" />}
/>`,children:o.jsx(j,{fullWidth:!0,value:r,onChange:(s,d)=>{typeof d=="string"?l({label:d}):d&&d.inputValue?l({label:d.inputValue}):l(d)},filterOptions:(s,d)=>{const h=Kt(s,d),{inputValue:g}=d,w=s.some(R=>g===R.label);return g!==""&&!w&&h.push({inputValue:g,label:`Add "${g}"`}),h},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:Nt,getOptionLabel:s=>typeof s=="string"?s:s.inputValue?s.inputValue:s.label,renderOption:({key:s,...d},h)=>o.jsx("li",{...d,children:h.label},s),freeSolo:!0,renderInput:s=>o.jsx(L,{...s,placeholder:"Free solo with text demo"})})})}function Ut(){const r=m.map(n=>{const s=n.label[0].toUpperCase();return{firstLetter:/[0-9]/.test(s)?"0-9":s,...n}});return o.jsx(z,{title:"Grouped",codeString:`<Autocomplete
  id="grouped-demo"
  fullWidth
  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} placeholder="With categories" />}
/>`,children:o.jsx(j,{id:"grouped-demo",fullWidth:!0,options:r.sort((n,s)=>-s.firstLetter.localeCompare(n.firstLetter)),groupBy:n=>n.firstLetter,getOptionLabel:n=>n.label,renderInput:n=>o.jsx(L,{...n,placeholder:"With categories"})})})}function Jt(){return o.jsx(z,{title:"Disabled Options",codeString:`<Autocomplete
  fullWidth
  id="disabled-options-demo"
  options={timeSlots}
  getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
  renderInput={(params) => <TextField {...params} placeholder="Disabled options" />}
/>`,children:o.jsx(j,{fullWidth:!0,id:"disabled-options-demo",options:we,getOptionDisabled:l=>l===we[0]||l===we[2],renderInput:l=>o.jsx(L,{...l,placeholder:"Disabled options"})})})}const we=Array.from(new Array(24*2)).map((r,l)=>`${l<20?"0":""}${Math.floor(l/2)}:${l%2===0?"00":"30"}`);function Xt(r=0){return new Promise(l=>{setTimeout(l,r)})}function Qt(){const[r,l]=b.useState(!1),[n,s]=b.useState([]),d=r&&n.length===0;return b.useEffect(()=>{let g=!0;if(d)return(async()=>(await Xt(1e3),g&&s([...Yt])))(),()=>{g=!1}},[d]),b.useEffect(()=>{r||s([])},[r]),o.jsx(z,{title:"Asynchronous",codeString:`<Autocomplete
  id="asynchronous-demo"
  sx={{ width: 300 }}
  open={open}
  onOpen={() => {
    setOpen(true);
  }}
  onClose={() => {
    setOpen(false);
  }}
  isOptionEqualToValue={(option, value) => option.title === value.title}
  getOptionLabel={(option) => option.title}
  options={options}
  loading={loading}
  renderInput={(params) => (
    <TextField
      {...params}
      placeholder="Asynchronous"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        )
      }}
    />
  )}
/>`,children:o.jsx(j,{id:"asynchronous-demo",sx:{width:300},open:r,onOpen:()=>{l(!0)},onClose:()=>{l(!1)},isOptionEqualToValue:(g,w)=>g.title===w.title,getOptionLabel:g=>g.title,options:n,loading:d,renderInput:g=>o.jsx(L,{...g,placeholder:"Asynchronous",InputProps:{...g.InputProps,endAdornment:o.jsxs(o.Fragment,{children:[d?o.jsx(wt,{color:"inherit",size:20}):null,g.InputProps.endAdornment]})}})})})}const Yt=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014}];function Ue(r){return typeof r.normalize<"u"?r.normalize("NFD").replace(/[\u0300-\u036f]/g,""):r}function Zt(r={}){const{ignoreAccents:l=!0,ignoreCase:n=!0,limit:s,matchFrom:d="any",stringify:h,trim:g=!1}=r;return(w,{inputValue:R,getOptionLabel:E})=>{let A=g?R.trim():R;n&&(A=A.toLowerCase()),l&&(A=Ue(A));const V=A?w.filter(x=>{let O=(h||E)(x);return n&&(O=O.toLowerCase()),l&&(O=Ue(O)),d==="start"?O.indexOf(A)===0:O.indexOf(A)>-1}):w;return typeof s=="number"?V.slice(0,s):V}}function be(r,l){for(let n=0;n<r.length;n+=1)if(l(r[n]))return n;return-1}const eo=Zt(),Je=5,to=r=>{var l;return r.current!==null&&((l=r.current.parentElement)==null?void 0:l.contains(document.activeElement))};function oo(r){const{unstable_isActiveElementInListbox:l=to,unstable_classNamePrefix:n="Mui",autoComplete:s=!1,autoHighlight:d=!1,autoSelect:h=!1,blurOnSelect:g=!1,clearOnBlur:w=!r.freeSolo,clearOnEscape:R=!1,componentName:E="useAutocomplete",defaultValue:A=r.multiple?[]:null,disableClearable:V=!1,disableCloseOnSelect:x=!1,disabled:O,disabledItemsFocusable:a=!1,disableListWrap:c=!1,filterOptions:S=eo,filterSelectedOptions:k=!1,freeSolo:M=!1,getOptionDisabled:$,getOptionKey:q,getOptionLabel:je=t=>t.label??t,groupBy:se,handleHomeEndKeys:Pe=!r.freeSolo,id:et,includeInputInList:Le=!1,inputValue:tt,isOptionEqualToValue:re=(t,e)=>t===e,multiple:C=!1,onChange:Me,onClose:Fe,onHighlightChange:Re,onInputChange:X,onOpen:Ve,open:ot,openOnFocus:rt=!1,options:lt,readOnly:le=!1,selectOnFocus:it=!r.freeSolo,value:at}=r,W=It(et);let D=je;D=t=>{const e=je(t);return typeof e!="string"?String(e):e};const xe=b.useRef(!1),ye=b.useRef(!0),P=b.useRef(null),_=b.useRef(null),[pe,nt]=b.useState(null),[H,Se]=b.useState(-1),De=d?0:-1,F=b.useRef(De),[u,st]=Ae({controlled:at,default:A,name:E}),[y,ue]=Ae({controlled:tt,default:"",name:E,state:"inputValue"}),[de,ze]=b.useState(!1),ce=b.useCallback((t,e)=>{if(!(C?u.length<e.length:e!==null)&&!w)return;let p;if(C)p="";else if(e==null)p="";else{const f=D(e);p=typeof f=="string"?f:""}y!==p&&(ue(p),X&&X(t,p,"reset"))},[D,y,C,X,ue,w,u]),[Z,Be]=Ae({controlled:ot,default:!1,name:E,state:"open"}),[pt,Ee]=b.useState(!0),$e=!C&&u!=null&&y===D(u),B=Z&&!le,v=B?S(lt.filter(t=>!(k&&(C?u:[u]).some(e=>e!==null&&re(t,e)))),{inputValue:$e&&pt?"":y,getOptionLabel:D}):[],N=kt({filteredOptions:v,value:u,inputValue:y});b.useEffect(()=>{const t=u!==N.value;de&&!t||M&&!t||ce(null,u)},[u,ce,de,N.value,M]);const Oe=Z&&v.length>0&&!le,ge=me(t=>{t===-1?P.current.focus():pe.querySelector(`[data-tag-index="${t}"]`).focus()});b.useEffect(()=>{C&&H>u.length-1&&(Se(-1),ge(-1))},[u,C,H,ge]);function ut(t,e){if(!_.current||t<0||t>=v.length)return-1;let i=t;for(;;){const p=_.current.querySelector(`[data-option-index="${i}"]`),f=a?!1:!p||p.disabled||p.getAttribute("aria-disabled")==="true";if(p&&p.hasAttribute("tabindex")&&!f)return i;if(e==="next"?i=(i+1)%v.length:i=(i-1+v.length)%v.length,i===t)return-1}}const Q=me(({event:t,index:e,reason:i="auto"})=>{if(F.current=e,e===-1?P.current.removeAttribute("aria-activedescendant"):P.current.setAttribute("aria-activedescendant",`${W}-option-${e}`),Re&&Re(t,e===-1?null:v[e],i),!_.current)return;const p=_.current.querySelector(`[role="option"].${n}-focused`);p&&(p.classList.remove(`${n}-focused`),p.classList.remove(`${n}-focusVisible`));let f=_.current;if(_.current.getAttribute("role")!=="listbox"&&(f=_.current.parentElement.querySelector('[role="listbox"]')),!f)return;if(e===-1){f.scrollTop=0;return}const T=_.current.querySelector(`[data-option-index="${e}"]`);if(T&&(T.classList.add(`${n}-focused`),i==="keyboard"&&T.classList.add(`${n}-focusVisible`),f.scrollHeight>f.clientHeight&&i!=="mouse"&&i!=="touch")){const I=T,G=f.clientHeight+f.scrollTop,Ke=I.offsetTop+I.offsetHeight;Ke>G?f.scrollTop=Ke-f.clientHeight:I.offsetTop-I.offsetHeight*(se?1.3:0)<f.scrollTop&&(f.scrollTop=I.offsetTop-I.offsetHeight*(se?1.3:0))}}),K=me(({event:t,diff:e,direction:i="next",reason:p="auto"})=>{if(!B)return;const T=ut((()=>{const I=v.length-1;if(e==="reset")return De;if(e==="start")return 0;if(e==="end")return I;const G=F.current+e;return G<0?G===-1&&Le?-1:c&&F.current!==-1||Math.abs(e)>1?0:I:G>I?G===I+1&&Le?-1:c||Math.abs(e)>1?I:0:G})(),i);if(Q({index:T,reason:p,event:t}),s&&e!=="reset")if(T===-1)P.current.value=y;else{const I=D(v[T]);P.current.value=I,I.toLowerCase().indexOf(y.toLowerCase())===0&&y.length>0&&P.current.setSelectionRange(y.length,I.length)}}),dt=()=>{const t=(e,i)=>{const p=e?D(e):"",f=i?D(i):"";return p===f};if(F.current!==-1&&N.filteredOptions&&N.filteredOptions.length!==v.length&&N.inputValue===y&&(C?u.length===N.value.length&&N.value.every((e,i)=>D(u[i])===D(e)):t(N.value,u))){const e=N.filteredOptions[F.current];if(e)return be(v,i=>D(i)===D(e))}return-1},Ce=b.useCallback(()=>{if(!B)return;const t=dt();if(t!==-1){F.current=t;return}const e=C?u[0]:u;if(v.length===0||e==null){K({diff:"reset"});return}if(_.current){if(e!=null){const i=v[F.current];if(C&&i&&be(u,f=>re(i,f))!==-1)return;const p=be(v,f=>re(f,e));p===-1?K({diff:"reset"}):Q({index:p});return}if(F.current>=v.length-1){Q({index:v.length-1});return}Q({index:F.current})}},[v.length,C?!1:u,k,K,Q,B,y,C]),ct=me(t=>{Tt(_,t),t&&Ce()});b.useEffect(()=>{Ce()},[Ce]);const Y=t=>{Z||(Be(!0),Ee(!0),Ve&&Ve(t))},ie=(t,e)=>{Z&&(Be(!1),Fe&&Fe(t,e))},ee=(t,e,i,p)=>{if(C){if(u.length===e.length&&u.every((f,T)=>f===e[T]))return}else if(u===e)return;Me&&Me(t,e,i,p),st(e)},fe=b.useRef(!1),ae=(t,e,i="selectOption",p="options")=>{let f=i,T=e;if(C){T=Array.isArray(u)?u.slice():[];const I=be(T,G=>re(e,G));I===-1?T.push(e):p!=="freeSolo"&&(T.splice(I,1),f="removeOption")}ce(t,T),ee(t,T,f,{option:e}),!x&&(!t||!t.ctrlKey&&!t.metaKey)&&ie(t,f),(g===!0||g==="touch"&&fe.current||g==="mouse"&&!fe.current)&&P.current.blur()};function gt(t,e){if(t===-1)return-1;let i=t;for(;;){if(e==="next"&&i===u.length||e==="previous"&&i===-1)return-1;const p=pe.querySelector(`[data-tag-index="${i}"]`);if(!p||!p.hasAttribute("tabindex")||p.disabled||p.getAttribute("aria-disabled")==="true")i+=e==="next"?1:-1;else return i}}const We=(t,e)=>{if(!C)return;y===""&&ie(t,"toggleInput");let i=H;H===-1?y===""&&e==="previous"&&(i=u.length-1):(i+=e==="next"?1:-1,i<0&&(i=0),i===u.length&&(i=-1)),i=gt(i,e),Se(i),ge(i)},_e=t=>{xe.current=!0,ue(""),X&&X(t,"","clear"),ee(t,C?[]:null,"clear")},ft=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(H!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(Se(-1),ge(-1)),e.which!==229))switch(e.key){case"Home":B&&Pe&&(e.preventDefault(),K({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":B&&Pe&&(e.preventDefault(),K({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),K({diff:-Je,direction:"previous",reason:"keyboard",event:e}),Y(e);break;case"PageDown":e.preventDefault(),K({diff:Je,direction:"next",reason:"keyboard",event:e}),Y(e);break;case"ArrowDown":e.preventDefault(),K({diff:1,direction:"next",reason:"keyboard",event:e}),Y(e);break;case"ArrowUp":e.preventDefault(),K({diff:-1,direction:"previous",reason:"keyboard",event:e}),Y(e);break;case"ArrowLeft":We(e,"previous");break;case"ArrowRight":We(e,"next");break;case"Enter":if(F.current!==-1&&B){const i=v[F.current],p=$?$(i):!1;if(e.preventDefault(),p)return;ae(e,i,"selectOption"),s&&P.current.setSelectionRange(P.current.value.length,P.current.value.length)}else M&&y!==""&&$e===!1&&(C&&e.preventDefault(),ae(e,y,"createOption","freeSolo"));break;case"Escape":B?(e.preventDefault(),e.stopPropagation(),ie(e,"escape")):R&&(y!==""||C&&u.length>0)&&(e.preventDefault(),e.stopPropagation(),_e(e));break;case"Backspace":if(C&&!le&&y===""&&u.length>0){const i=H===-1?u.length-1:H,p=u.slice();p.splice(i,1),ee(e,p,"removeOption",{option:u[i]})}break;case"Delete":if(C&&!le&&y===""&&u.length>0&&H!==-1){const i=H,p=u.slice();p.splice(i,1),ee(e,p,"removeOption",{option:u[i]})}break}},mt=t=>{ze(!0),rt&&!xe.current&&Y(t)},He=t=>{if(l(_)){P.current.focus();return}ze(!1),ye.current=!0,xe.current=!1,h&&F.current!==-1&&B?ae(t,v[F.current],"blur"):h&&M&&y!==""?ae(t,y,"blur","freeSolo"):w&&ce(t,u),ie(t,"blur")},ht=t=>{const e=t.target.value;y!==e&&(ue(e),Ee(!1),X&&X(t,e,"input")),e===""?!V&&!C&&ee(t,null,"clear"):Y(t)},bt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));F.current!==e&&Q({event:t,index:e,reason:"mouse"})},xt=t=>{Q({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),fe.current=!0},yt=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));ae(t,v[e],"selectOption"),fe.current=!1},St=t=>e=>{const i=u.slice();i.splice(t,1),ee(e,i,"removeOption",{option:u[t]})},Ge=t=>{Z?ie(t,"toggleInput"):Y(t)},Ot=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==W&&t.preventDefault()},Ct=t=>{t.currentTarget.contains(t.target)&&(P.current.focus(),it&&ye.current&&P.current.selectionEnd-P.current.selectionStart===0&&P.current.select(),ye.current=!1)},vt=t=>{!O&&(y===""||!Z)&&Ge(t)};let ve=M&&y.length>0;ve=ve||(C?u.length>0:u!==null);let Ne=v;return se&&(Ne=v.reduce((t,e,i)=>{const p=se(e);return t.length>0&&t[t.length-1].group===p?t[t.length-1].options.push(e):t.push({key:i,index:i,group:p,options:[e]}),t},[])),O&&de&&He(),{getRootProps:(t={})=>qe({"aria-owns":Oe?`${W}-listbox`:null},t,{onKeyDown:ft(t),onMouseDown:Ot,onClick:Ct}),getInputLabelProps:()=>({id:`${W}-label`,htmlFor:W}),getInputProps:()=>({id:W,value:y,onBlur:He,onFocus:mt,onChange:ht,onMouseDown:vt,"aria-activedescendant":B?"":null,"aria-autocomplete":s?"both":"list","aria-controls":Oe?`${W}-listbox`:void 0,"aria-expanded":Oe,autoComplete:"off",ref:P,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:O}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:_e}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Ge}),getTagProps:({index:t})=>qe({key:t,"data-tag-index":t,tabIndex:-1},!le&&{onDelete:St(t)}),getListboxProps:()=>({role:"listbox",id:`${W}-listbox`,"aria-labelledby":`${W}-label`,ref:ct,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{const i=(C?u:[u]).some(f=>f!=null&&re(e,f)),p=$?$(e):!1;return{key:(q==null?void 0:q(e))??D(e),tabIndex:-1,role:"option",id:`${W}-option-${t}`,onMouseMove:bt,onClick:yt,onTouchStart:xt,"data-option-index":t,"aria-disabled":p,"aria-selected":i}},id:W,inputValue:y,value:u,dirty:ve,expanded:B&&pe,popupOpen:B,focused:de||H!==-1,anchorEl:pe,setAnchorEl:nt,focusedTag:H,groupedOptions:Ne}}const Ye=J("div")(({theme:r})=>`
color: ${r.palette.mode===oe.DARK?"rgba(255,255,255,0.65)":"rgba(0,0,0,.85)"};
font-size: 14px;
`);Ye.displayName="Root";const ro=J("div")(({theme:r})=>`
width: 100%;
border: 1px solid ${r.palette.mode===oe.DARK?"#434343":"#d9d9d9"};
background-color: ${r.palette.mode===oe.DARK?"#141414":"#fff"};
border-radius: 4px;
padding: 8px;
display: flex;
flex-wrap: wrap;

&:hover {
  border-color: ${r.palette.primary.main};
}

&.focused {
  border-color: ${r.palette.primary.main};
  box-shadow: ${r.customShadows.primary};
}

& input {
  background-color: transparent;
  height: 30px;
  box-sizing: border-box;
  padding: 4px 6px;
  width: 0;
  min-width: 30px;
  flex-grow: 1;
  border: 0;
  margin: 0;
  outline: 0;
}
`);function lo(r){const{label:l,onDelete:n,...s}=r;return o.jsxs("div",{...s,children:[o.jsx("span",{children:l}),o.jsx(Xe,{onClick:n})]})}const io=J(lo)(({theme:r})=>`
display: flex;
align-items: center;
height: 24px;
margin: 4px;
line-height: 22px;
background-color: ${r.palette.secondary.lighter};
border: 1px solid ${r.palette.secondary.light};
border-radius: 2px;
box-sizing: content-box;
padding: 0 4px 0 10px;
outline: 0;
overflow: hidden;

& span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

& svg {
  font-size: 0.625rem;
  cursor: pointer;
  padding: 4px;
}
`),ao=J("ul")(({theme:r})=>`
width: 300px;
margin: 2px 0 0;
padding: 0;
position: absolute;
list-style: none;
background-color: ${r.palette.background.paper};
overflow: auto;
max-height: 250px;
border-radius: 4px;
box-shadow: ${r.customShadows.z1};
z-index: 1;

& li {
  padding: 5px 12px;
  display: flex;

  & span {
    flex-grow: 1;
  }

  & svg {
    color: transparent;
  }
}

& li[aria-selected='true'] {
  background-color: ${r.palette.primary.lighter};
  font-weight: 600;

  & svg {
    color: ${r.palette.primary.main};
  }
}

& li[data-focus='true'] {
  background-color: ${r.palette.primary.lighter};
  cursor: pointer;

  & svg {
    color: currentColor;
  }
}
`);function no(){const{getRootProps:r,getInputProps:l,getTagProps:n,getListboxProps:s,getOptionProps:d,groupedOptions:h,value:g,focused:w,setAnchorEl:R}=oo({id:"customized-hook-demo",defaultValue:[m[1],m[3],m[8]],multiple:!0,options:m,getOptionLabel:A=>A.label});return o.jsx(z,{title:"Customized",sx:{overflow:"visible"},codeString:`// CustomizedAutocomplete.tsx
<Root>
  <div {...getRootProps()}>
    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
      {value.map((option: FilmOptionType, index: number) => (
        <StyledTag label={option.label} {...getTagProps({ index })} />
      ))}
      <input {...getInputProps()} />
    </InputWrapper>
  </div>
  {groupedOptions.length > 0 ? (
    <Listbox {...getListboxProps()}>
      {(groupedOptions as typeof data).map((option, index) => (
        <li {...getOptionProps({ option, index })}>
          <span>{option.label}</span>
          <CheckOutlined style={{ marginTop: 2 }} />
        </li>
      ))}
    </Listbox>
  ) : null}
</Root>`,children:o.jsxs(Ye,{children:[o.jsx("div",{...r(),children:o.jsxs(ro,{ref:R,className:w?"focused":"",children:[g.map((A,V)=>b.createElement(io,{label:A.label,...n({index:V}),key:V})),o.jsx("input",{...l()})]})}),h.length>0?o.jsx(ao,{...s(),children:h.map((A,V)=>b.createElement("li",{...d({option:A,index:V}),key:V},o.jsx("span",{children:A.label}),o.jsx(Qe,{style:{marginTop:2}})))}):null]})})}function so(){return o.jsx(z,{title:"Multiple Tags",codeString:`<Autocomplete
  multiple
  id="tags-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[7], data[13]]}
  filterSelectedOptions
  renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(j,{multiple:!0,id:"tags-outlined",options:m,getOptionLabel:l=>l.label,defaultValue:[m[7],m[13]],filterSelectedOptions:!0,renderInput:l=>o.jsx(L,{...l,placeholder:"Favorites"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function po(){const r=[m[6]],[l,n]=b.useState([...r,m[13]]);return o.jsx(z,{title:"Fixed Options",codeString:`<Autocomplete
  multiple
  fullWidth
  id="fixed-tags-demo"
  value={value}
  onChange={(event, newValue) => {
    setValue([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
  }}
  options={data}
  getOptionLabel={(option) => option.label}
  renderTags={(tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Chip label={option.label} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1} />
    ))
  }
  renderInput={(params) => <TextField {...params} placeholder="Fixed Tag" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(j,{multiple:!0,fullWidth:!0,id:"fixed-tags-demo",value:l,onChange:(d,h)=>{n([...r,...h.filter(g=>r.indexOf(g)===-1)])},options:m,getOptionLabel:d=>d.label,renderTags:(d,h)=>d.map((g,w)=>b.createElement(jt,{label:g.label,...h({index:w}),key:w,disabled:r.indexOf(g)!==-1})),renderInput:d=>o.jsx(L,{...d,placeholder:"Fixed Tag"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function uo(){return o.jsx(z,{title:"Checkboxes",codeString:`<Autocomplete
  multiple
  id="checkboxes-tags-demo"
  options={data}
  disableCloseOnSelect
  getOptionLabel={(option) => option.label}
  renderOption={({ key, ...props }, option, { selected }) => (
    <li key={key} {...props}>
      <Checkbox sx={{ mr:1 }} checked={selected} />
      {option.label}
    </li>
  )}
  renderInput={(params) => <TextField {...params} placeholder="Checkboxes" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(j,{multiple:!0,id:"checkboxes-tags-demo",options:m,disableCloseOnSelect:!0,getOptionLabel:l=>l.label,renderOption:({key:l,...n},s,{selected:d})=>o.jsxs("li",{...n,children:[o.jsx(Wt,{style:{marginRight:8},checked:d}),s.label]},l),renderInput:l=>o.jsx(L,{...l,placeholder:"Checkboxes"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function co(){return o.jsx(z,{title:"Limit Tags",codeString:`<Autocomplete
  multiple
  limitTags={2}
  id="multiple-limit-tags"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[12], data[11]]}
  renderInput={(params) => <TextField {...params} placeholder="Limit Tags" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderRadius: 1,
      height: 32,
      pl: 1.5,
      pr: 1.5,
      lineHeight: '32px',
      borderColor: 'primary.light',
      '& .MuiChip-label': {
        paddingLeft: 0,
        paddingRight: 0
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        ml: 1,
        mr: -0.75,
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsx(j,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:m,getOptionLabel:l=>l.label,defaultValue:[m[13],m[12],m[11]],renderInput:l=>o.jsx(L,{...l,placeholder:"Limit Tags"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderRadius:1,height:32,pl:1.5,pr:1.5,lineHeight:"32px",borderColor:"primary.light","& .MuiChip-label":{paddingLeft:0,paddingRight:0},"& .MuiSvgIcon-root":{color:"primary.main",ml:1,mr:-.75,"&:hover":{color:"primary.dark"}}}}})})}function go(){return o.jsx(z,{title:"Sizes",codeString:`<Autocomplete
  id="size-small-outlined"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  id="size-small-outlined"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={data[13]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-small-outlined-multi"
  size="small"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Small" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  id="size-default-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Medium" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>
<Autocomplete
  multiple
  size="medium"
  id="size-large-outlined-multi"
  options={data}
  getOptionLabel={(option) => option.label}
  defaultValue={[data[13], data[3]]}
  renderInput={(params) => <TextField {...params} placeholder="Size Large" />}
  sx={{
    '& .MuiOutlinedInput-root': {
      p: 1
    },
    '& .MuiAutocomplete-tag': {
      bgcolor: 'primary.lighter',
      border: '1px solid',
      borderColor: 'primary.light',
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
        '&:hover': {
          color: 'primary.dark'
        }
      }
    }
  }}
/>`,children:o.jsxs(Ie,{spacing:2,children:[o.jsx(j,{id:"size-small-outlined",size:"small",options:m,getOptionLabel:l=>l.label,defaultValue:m[13],renderInput:l=>o.jsx(L,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(j,{id:"size-small-outlined",options:m,getOptionLabel:l=>l.label,defaultValue:m[13],renderInput:l=>o.jsx(L,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(j,{multiple:!0,id:"size-small-outlined-multi",size:"small",options:m,getOptionLabel:l=>l.label,defaultValue:[m[13],m[3]],renderInput:l=>o.jsx(L,{...l,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(j,{multiple:!0,id:"size-default-outlined-multi",options:m,getOptionLabel:l=>l.label,defaultValue:[m[13],m[3]],renderInput:l=>o.jsx(L,{...l,placeholder:"Size Medium"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),o.jsx(j,{multiple:!0,size:"medium",id:"size-large-outlined-multi",options:m,getOptionLabel:l=>l.label,defaultValue:[m[13],m[3]],renderInput:l=>o.jsx(L,{...l,placeholder:"Size Large"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})]})})}var ke={exports:{}},Ze={},Te={};Object.defineProperty(Te,"__esModule",{value:!0});var fo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 00-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 009.3-35.2l-.9-2.6a442.5 442.5 0 00-79.6-137.7l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.3a353.44 353.44 0 00-98.9 57.3l-81.8-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a445.93 445.93 0 00-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0025.8 25.7l2.7.5a448.27 448.27 0 00158.8 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"}}]},name:"setting",theme:"filled"};Te.default=fo;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return O}});var l=w(b),n=h(Te),s=h(Pt);function d(a,c,S){return c in a?Object.defineProperty(a,c,{value:S,enumerable:!0,configurable:!0,writable:!0}):a[c]=S,a}function h(a){return a&&a.__esModule?a:{default:a}}function g(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,S=new WeakMap;return(g=function(k){return k?S:c})(a)}function w(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var S=g(c);if(S&&S.has(a))return S.get(a);var k={__proto__:null},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in a)if($!=="default"&&Object.prototype.hasOwnProperty.call(a,$)){var q=M?Object.getOwnPropertyDescriptor(a,$):null;q&&(q.get||q.set)?Object.defineProperty(k,$,q):k[$]=a[$]}return k.default=a,S&&S.set(a,k),k}function R(a){for(var c=1;c<arguments.length;c++){var S=arguments[c]!=null?arguments[c]:{},k=Object.keys(S);typeof Object.getOwnPropertySymbols=="function"&&(k=k.concat(Object.getOwnPropertySymbols(S).filter(function(M){return Object.getOwnPropertyDescriptor(S,M).enumerable}))),k.forEach(function(M){d(a,M,S[M])})}return a}function E(a,c){var S=Object.keys(a);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(a);c&&(k=k.filter(function(M){return Object.getOwnPropertyDescriptor(a,M).enumerable})),S.push.apply(S,k)}return S}function A(a,c){return c=c??{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):E(Object(c)).forEach(function(S){Object.defineProperty(a,S,Object.getOwnPropertyDescriptor(c,S))}),a}var V=function(a,c){return l.createElement(s.default,A(R({},a),{ref:c,icon:n.default}))},x=l.forwardRef(V),O=x})(Ze);(function(r,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const n=s(Ze);function s(h){return h&&h.__esModule?h:{default:h}}const d=n;l.default=d,r.exports=d})(ke,ke.exports);var mo=ke.exports;const ho=Lt(mo),bo=J("div")(({theme:r})=>({[`& .${he.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${he.listbox}`]:{background:r.palette.background.paper,padding:0,[`& .${he.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid  ${r.palette.divider}`,'&[aria-selected="true"]':{background:"transparent"},'&[data-focus="true"], &[data-focus="true"][aria-selected="true"]':{background:r.palette.action.hover}}},[`&.${he.popperDisablePortal}`]:{position:"relative"}}));function xo({...r}){return o.jsx(bo,{...r})}const yo=J(Rt)(({theme:r})=>({border:"1px solid",borderColor:r.palette.mode===oe.DARK?"#30363d":"#e1e4e8",boxShadow:`0 8px 24px ${r.palette.mode===oe.DARK?"rgb(1, 4, 9)":"rgba(149, 157, 165, 0.2)"}`,borderRadius:6,width:300,zIndex:r.zIndex.modal,fontSize:13,color:r.palette.text.primary,background:r.palette.background.paper})),So=J(Vt)(({theme:r})=>({padding:10,width:"100%",borderBottom:"1px solid",borderBottomColor:r.palette.divider,"& input":{borderRadius:4,background:r.palette.background.paper,padding:8,transition:r.transitions.create(["border-color","box-shadow"]),border:"1px solid",borderColor:r.palette.primary.main,fontSize:14,"&:focus-visible":{boxShadow:r.customShadows.primary,borderColor:r.palette.primary.main}}})),Oo=J(Dt)(({theme:r})=>({fontSize:13,width:"100%",textAlign:"left",marginBottom:8,color:r.palette.text.primary,fontWeight:600,"&:hover":{color:r.palette.primary.main},"&:focus-visible":{borderRadius:2,outline:`2px solid ${r.palette.secondary.dark}`,outlineOffset:2},"& span":{width:"100%"},"& svg":{width:16,height:16}}));function Co(){const[r,l]=b.useState(null),[n,s]=b.useState([ne[1],ne[11]]),[d,h]=b.useState([]),g=Mt(),w=x=>{h(n),l(x.currentTarget)},R=()=>{s(d),r&&r.focus(),l(null)},E=!!r,A=E?"github-label":void 0;return o.jsxs(z,{title:"GitHub's Picker",codeString:`// GitHubAutocomplete.tsx
<Box sx={{ width: 221, fontSize: 13 }}>
  <Button
    disableRipple
    aria-describedby={id}
    onClick={handleClick}
    sx={{ justifyContent: 'space-between', '& span': { width: 'auto' } }}
  >
    <span>Labels</span>
    <SettingFilled />
  </Button>
  {value.map((label, index) => (
    <Box
      key={index}
      sx={{
        mt: '3px',
        height: 20,
        padding: '.15em 4px',
        fontWeight: 600,
        lineHeight: '15px',
        borderRadius: '2px',
        bgcolor: label.color,
        color: theme.palette.getContrastText(label.color)
      }}
    >
      {label.name}
    </Box>
  ))}
</Box>
<StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
  <ClickAwayListener onClickAway={handleClose}>
    <div>
      <Box
        sx={{
          borderBottom: '1px solid {theme.palette.mode === ThemeMode.DARK ? '#30363d' : '#eaecef'}',
          padding: '8px 10px',
          fontWeight: 600
        }}
      >
        Apply labels to this pull request
      </Box>
      <Autocomplete
        open
        multiple
        onClose={(event: React.ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
          if (reason === 'escape') {
            handleClose();
          }
        }}
        value={pendingValue}
        onChange={(event, newValue, reason) => {
          if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Backspace' && reason === 'removeOption') {
            return;
          }
          setPendingValue(newValue);
        }}
        disableCloseOnSelect
        PopperComponent={PopperComponent}
        renderTags={() => null}
        noOptionsText="No labels"
        renderOption={({ key, ...props }, option, { selected }) => (
          <li key={key} {...props}>
            <Box
              component={CheckOutlined}
              sx={{ width: 17, height: 17, mr: '5px', ml: '-2px', mt: 0.25, visibility: selected ? 'visible' : 'hidden' }}
            />
            <Box sx={{ width: 14, height: 14, flexShrink: 0, borderRadius: '3px', mr: 1, mt: '2px', bgcolor: option.color }} />
            <Box sx={{ flexGrow: 1, '& span': { color: 'text.secondary' } }}>
              {option.name}
              <br />
              <span>{option.description}</span>
            </Box>
            <Box
              component={CloseOutlined}
              sx={{ opacity: 0.6, width: 18, height: 18, mt: 0.25 ,visibility: selected ? 'visible' : 'hidden'}}
            />
          </li>
        )}
        options={[...labels].sort((a, b) => {
          // Display the selected labels first.
          let ai = value.indexOf(a);
          ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
          let bi = value.indexOf(b);
          bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
          return ai - bi;
        })}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels" />
        )}
      />
    </div>
  </ClickAwayListener>
</StyledPopper>`,children:[o.jsxs(U,{sx:{width:221,fontSize:13},children:[o.jsxs(Oo,{disableRipple:!0,"aria-describedby":A,onClick:w,sx:{justifyContent:"space-between","& span":{width:"auto"}},children:[o.jsx("span",{children:"Labels"}),o.jsx(ho,{})]}),n.map((x,O)=>o.jsx(U,{sx:{mt:"3px",height:20,padding:".15em 4px",fontWeight:600,lineHeight:"15px",borderRadius:"2px",bgcolor:x.color,color:g.palette.getContrastText(x.color)},children:x.name},O))]}),o.jsx(yo,{id:A,open:E,anchorEl:r,placement:"bottom-start",children:o.jsx(Ft,{onClickAway:R,children:o.jsxs("div",{children:[o.jsx(U,{sx:{borderBottom:"1px solid",borderBottomColor:g.palette.mode===oe.DARK?"#30363d":"#eaecef",padding:"8px 10px",fontWeight:600},children:"Apply labels to this pull request"}),o.jsx(j,{open:!0,multiple:!0,onClose:(x,O)=>{O==="escape"&&R()},value:d,onChange:(x,O,a)=>{x.type==="keydown"&&x.key==="Backspace"&&a==="removeOption"||h(O)},disableCloseOnSelect:!0,PopperComponent:xo,renderTags:()=>null,noOptionsText:"No labels",renderOption:({key:x,...O},a,{selected:c})=>o.jsxs("li",{...O,children:[o.jsx(U,{component:Qe,sx:{width:17,height:17,mr:"5px",ml:"-2px",mt:.25,visibility:c?"visible":"hidden"}}),o.jsx(U,{sx:{width:14,height:14,flexShrink:0,borderRadius:"3px",mr:1,mt:"2px",bgcolor:a.color}}),o.jsxs(U,{sx:{flexGrow:1,"& span":{color:"text.secondary"}},children:[a.name,o.jsx("br",{}),o.jsx("span",{children:a.description})]}),o.jsx(U,{component:Xe,sx:{opacity:.6,width:18,height:18,mt:.25,visibility:c?"visible":"hidden"}})]},x),options:[...ne].sort((x,O)=>{let a=n.indexOf(x);a=a===-1?n.length+ne.indexOf(x):a;let c=n.indexOf(O);return c=c===-1?n.length+ne.indexOf(O):c,a-c}),getOptionLabel:x=>x.name,renderInput:x=>o.jsx(So,{ref:x.InputProps.ref,inputProps:x.inputProps,autoFocus:!0,placeholder:"Filter labels"})})]})})})]})}const ne=[{name:"good first issue",color:"#7057ff",description:"Good for newcomers"},{name:"help wanted",color:"#008672",description:"Extra attention is needed"},{name:"priority: critical",color:"#b60205",description:""},{name:"priority: high",color:"#d93f0b",description:""},{name:"priority: low",color:"#0e8a16",description:""},{name:"priority: medium",color:"#fbca04",description:""},{name:"status: can't reproduce",color:"#fec1c1",description:""},{name:"status: confirmed",color:"#215cea",description:""},{name:"status: duplicate",color:"#cfd3d7",description:"This issue or pull request already exists"},{name:"status: needs information",color:"#fef2c0",description:""},{name:"status: wont do/fix",color:"#eeeeee",description:"This will not be worked on"},{name:"type: bug",color:"#d73a4a",description:"Something isn't working"},{name:"type: discussion",color:"#d4c5f9",description:""},{name:"type: documentation",color:"#006b75",description:""},{name:"type: enhancement",color:"#84b6eb",description:""},{name:"type: epic",color:"#3e4b9e",description:"A theme of work that contain sub-tasks"},{name:"type: feature request",color:"#fbca04",description:"New feature or request"},{name:"type: question",color:"#d876e3",description:"Further information is requested"}];function jo(){return o.jsxs(zt,{children:[o.jsx(Bt,{title:"Autocomplete",caption:"The autocomplete is a normal text input enhanced by a panel of suggested options.",directory:"src/pages/components-overview/autocomplete",link:"https://mui.com/material-ui/react-autocomplete/"}),o.jsx(Et,{children:o.jsxs(te,{container:!0,spacing:3,children:[o.jsx(te,{item:!0,xs:12,sm:6,children:o.jsxs(Ie,{spacing:3,children:[o.jsx(Ht,{}),o.jsx(Gt,{}),o.jsx(qt,{}),o.jsx(Ut,{}),o.jsx(Jt,{}),o.jsx(Qt,{}),o.jsx(no,{})]})}),o.jsx(te,{item:!0,xs:12,sm:6,children:o.jsxs(Ie,{spacing:3,children:[o.jsx(so,{}),o.jsx(po,{}),o.jsx(uo,{}),o.jsx(co,{}),o.jsx(go,{}),o.jsx(Co,{})]})})]})})]})}export{jo as default};
