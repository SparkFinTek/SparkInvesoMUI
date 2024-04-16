import{j as e,M as y,G as I,be as m,y as g,B as A,r as b,d1 as E,cQ as $,dh as G,aR as w,h as T,_ as B,a5 as H,t as R,a1 as K,a2 as N,c as q,aN as U,di as P,aM as J,dc as X,ce as Q}from"./index-DWuWYdwO.js";import{C as Y,a as Z,b as ee}from"./ComponentSkeleton-B_nzrx-9.js";import{c as te}from"./countries-CK98J6et.js";import{C as W}from"./CheckOutlined-ByG7qEtx.js";import{C as oe}from"./Checkbox-CkJQfgQ3.js";import"./Skeleton-Cqh1Sn3g.js";const re=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}],s=re;function le(){return e.jsx(y,{title:"Basic",sx:{overflow:"visible"},codeHighlight:!0,codeString:`<Autocomplete
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
/>`,children:e.jsxs(I,{container:!0,spacing:2,children:[e.jsx(I,{item:!0,xs:12,lg:6,children:e.jsx(m,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete-label",options:s,renderInput:t=>e.jsx(g,{...t,label:"Label"})})}),e.jsx(I,{item:!0,xs:12,lg:6,children:e.jsx(m,{fullWidth:!0,disablePortal:!0,id:"basic-autocomplete",options:s,renderInput:t=>e.jsx(g,{...t,placeholder:"Placeholder"})})})]})})}function ie(){return e.jsx(y,{title:"With Image",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{id:"country-select-demo",fullWidth:!0,options:te,autoHighlight:!0,getOptionLabel:t=>t.label,renderOption:({key:t,...i},l)=>e.jsxs(A,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...i,children:[l.code&&e.jsx("img",{loading:"lazy",width:"20",src:`https://flagcdn.com/w20/${l.code.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${l.code.toLowerCase()}.png 2x`,alt:""}),l.label," (",l.code,") +",l.phone]},t),renderInput:t=>e.jsx(g,{...t,placeholder:"Choose a country",inputProps:{...t.inputProps,autoComplete:"new-password"}})})})}const ae=s,ne=E();function se(){const[o,t]=b.useState(null);return e.jsx(y,{title:"Creatable",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{fullWidth:!0,value:o,onChange:(l,a)=>{typeof a=="string"?t({label:a}):a&&a.inputValue?t({label:a.inputValue}):t(a)},filterOptions:(l,a)=>{const d=ne(l,a),{inputValue:p}=a,x=l.some(O=>p===O.label);return p!==""&&!x&&d.push({inputValue:p,label:`Add "${p}"`}),d},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:ae,getOptionLabel:l=>typeof l=="string"?l:l.inputValue?l.inputValue:l.label,renderOption:({key:l,...a},d)=>e.jsx("li",{...a,children:d.label},l),freeSolo:!0,renderInput:l=>e.jsx(g,{...l,placeholder:"Free solo with text demo"})})})}function pe(){const o=s.map(i=>{const l=i.label[0].toUpperCase();return{firstLetter:/[0-9]/.test(l)?"0-9":l,...i}});return e.jsx(y,{title:"Grouped",codeString:`<Autocomplete
  id="grouped-demo"
  fullWidth
  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
  groupBy={(option) => option.firstLetter}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} placeholder="With categories" />}
/>`,children:e.jsx(m,{id:"grouped-demo",fullWidth:!0,options:o.sort((i,l)=>-l.firstLetter.localeCompare(i.firstLetter)),groupBy:i=>i.firstLetter,getOptionLabel:i=>i.label,renderInput:i=>e.jsx(g,{...i,placeholder:"With categories"})})})}function de(){return e.jsx(y,{title:"Disabled Options",codeString:`<Autocomplete
  fullWidth
  id="disabled-options-demo"
  options={timeSlots}
  getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]}
  renderInput={(params) => <TextField {...params} placeholder="Disabled options" />}
/>`,children:e.jsx(m,{fullWidth:!0,id:"disabled-options-demo",options:F,getOptionDisabled:t=>t===F[0]||t===F[2],renderInput:t=>e.jsx(g,{...t,placeholder:"Disabled options"})})})}const F=Array.from(new Array(24*2)).map((o,t)=>`${t<20?"0":""}${Math.floor(t/2)}:${t%2===0?"00":"30"}`);function ue(o=0){return new Promise(t=>{setTimeout(t,o)})}function ce(){const[o,t]=b.useState(!1),[i,l]=b.useState([]),a=o&&i.length===0;return b.useEffect(()=>{let p=!0;if(a)return(async()=>(await ue(1e3),p&&l([...me])))(),()=>{p=!1}},[a]),b.useEffect(()=>{o||l([])},[o]),e.jsx(y,{title:"Asynchronous",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{id:"asynchronous-demo",sx:{width:300},open:o,onOpen:()=>{t(!0)},onClose:()=>{t(!1)},isOptionEqualToValue:(p,x)=>p.title===x.title,getOptionLabel:p=>p.title,options:i,loading:a,renderInput:p=>e.jsx(g,{...p,placeholder:"Asynchronous",InputProps:{...p.InputProps,endAdornment:e.jsxs(e.Fragment,{children:[a?e.jsx($,{color:"inherit",size:20}):null,p.InputProps.endAdornment]})}})})})}const me=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014}],D=w("div")(({theme:o})=>`
color: ${o.palette.mode===T.DARK?"rgba(255,255,255,0.65)":"rgba(0,0,0,.85)"};
font-size: 14px;
`);D.displayName="Root";const ge=w("div")(({theme:o})=>`
width: 100%;
border: 1px solid ${o.palette.mode===T.DARK?"#434343":"#d9d9d9"};
background-color: ${o.palette.mode===T.DARK?"#141414":"#fff"};
border-radius: 4px;
padding: 8px;
display: flex;
flex-wrap: wrap;

&:hover {
  border-color: ${o.palette.primary.main};
}

&.focused {
  border-color: ${o.palette.primary.main};
  box-shadow: ${o.customShadows.primary};
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
`);function he(o){const{label:t,onDelete:i,...l}=o;return e.jsxs("div",{...l,children:[e.jsx("span",{children:t}),e.jsx(B,{onClick:i})]})}const be=w(he)(({theme:o})=>`
display: flex;
align-items: center;
height: 24px;
margin: 4px;
line-height: 22px;
background-color: ${o.palette.secondary.lighter};
border: 1px solid ${o.palette.secondary.light};
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
`),ye=w("ul")(({theme:o})=>`
width: 300px;
margin: 2px 0 0;
padding: 0;
position: absolute;
list-style: none;
background-color: ${o.palette.background.paper};
overflow: auto;
max-height: 250px;
border-radius: 4px;
box-shadow: ${o.customShadows.z1};
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
  background-color: ${o.palette.primary.lighter};
  font-weight: 600;

  & svg {
    color: ${o.palette.primary.main};
  }
}

& li[data-focus='true'] {
  background-color: ${o.palette.primary.lighter};
  cursor: pointer;

  & svg {
    color: currentColor;
  }
}
`);function xe(){const{getRootProps:o,getInputProps:t,getTagProps:i,getListboxProps:l,getOptionProps:a,groupedOptions:d,value:p,focused:x,setAnchorEl:O}=G({id:"customized-hook-demo",defaultValue:[s[1],s[3],s[8]],multiple:!0,options:s,getOptionLabel:S=>S.label});return e.jsx(y,{title:"Customized",sx:{overflow:"visible"},codeString:`// CustomizedAutocomplete.tsx
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
</Root>`,children:e.jsxs(D,{children:[e.jsx("div",{...o(),children:e.jsxs(ge,{ref:O,className:x?"focused":"",children:[p.map((S,v)=>b.createElement(be,{label:S.label,...i({index:v}),key:v})),e.jsx("input",{...t()})]})}),d.length>0?e.jsx(ye,{...l(),children:d.map((S,v)=>b.createElement("li",{...a({option:S,index:v}),key:v},e.jsx("span",{children:S.label}),e.jsx(W,{style:{marginTop:2}})))}):null]})})}function fe(){return e.jsx(y,{title:"Multiple Tags",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{multiple:!0,id:"tags-outlined",options:s,getOptionLabel:t=>t.label,defaultValue:[s[7],s[13]],filterSelectedOptions:!0,renderInput:t=>e.jsx(g,{...t,placeholder:"Favorites"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function Se(){const o=[s[6]],[t,i]=b.useState([...o,s[13]]);return e.jsx(y,{title:"Fixed Options",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{multiple:!0,fullWidth:!0,id:"fixed-tags-demo",value:t,onChange:(a,d)=>{i([...o,...d.filter(p=>o.indexOf(p)===-1)])},options:s,getOptionLabel:a=>a.label,renderTags:(a,d)=>a.map((p,x)=>b.createElement(H,{label:p.label,...d({index:x}),key:x,disabled:o.indexOf(p)!==-1})),renderInput:a=>e.jsx(g,{...a,placeholder:"Fixed Tag"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function Oe(){return e.jsx(y,{title:"Checkboxes",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{multiple:!0,id:"checkboxes-tags-demo",options:s,disableCloseOnSelect:!0,getOptionLabel:t=>t.label,renderOption:({key:t,...i},l,{selected:a})=>e.jsxs("li",{...i,children:[e.jsx(oe,{style:{marginRight:8},checked:a}),l.label]},t),renderInput:t=>e.jsx(g,{...t,placeholder:"Checkboxes"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})})}function ve(){return e.jsx(y,{title:"Limit Tags",codeString:`<Autocomplete
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
/>`,children:e.jsx(m,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:s,getOptionLabel:t=>t.label,defaultValue:[s[13],s[12],s[11]],renderInput:t=>e.jsx(g,{...t,placeholder:"Limit Tags"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderRadius:1,height:32,pl:1.5,pr:1.5,lineHeight:"32px",borderColor:"primary.light","& .MuiChip-label":{paddingLeft:0,paddingRight:0},"& .MuiSvgIcon-root":{color:"primary.main",ml:1,mr:-.75,"&:hover":{color:"primary.dark"}}}}})})}function Ce(){return e.jsx(y,{title:"Sizes",codeString:`<Autocomplete
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
/>`,children:e.jsxs(R,{spacing:2,children:[e.jsx(m,{id:"size-small-outlined",size:"small",options:s,getOptionLabel:t=>t.label,defaultValue:s[13],renderInput:t=>e.jsx(g,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(m,{id:"size-small-outlined",options:s,getOptionLabel:t=>t.label,defaultValue:s[13],renderInput:t=>e.jsx(g,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(m,{multiple:!0,id:"size-small-outlined-multi",size:"small",options:s,getOptionLabel:t=>t.label,defaultValue:[s[13],s[3]],renderInput:t=>e.jsx(g,{...t,placeholder:"Size Small"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(m,{multiple:!0,id:"size-default-outlined-multi",options:s,getOptionLabel:t=>t.label,defaultValue:[s[13],s[3]],renderInput:t=>e.jsx(g,{...t,placeholder:"Size Medium"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}}),e.jsx(m,{multiple:!0,size:"medium",id:"size-large-outlined-multi",options:s,getOptionLabel:t=>t.label,defaultValue:[s[13],s[3]],renderInput:t=>e.jsx(g,{...t,placeholder:"Size Large"}),sx:{"& .MuiOutlinedInput-root":{p:1},"& .MuiAutocomplete-tag":{bgcolor:"primary.lighter",border:"1px solid",borderColor:"primary.light","& .MuiSvgIcon-root":{color:"primary.main","&:hover":{color:"primary.dark"}}}}})]})})}var V={exports:{}},_={},z={};Object.defineProperty(z,"__esModule",{value:!0});var Ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 00-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 009.3-35.2l-.9-2.6a442.5 442.5 0 00-79.6-137.7l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.3a353.44 353.44 0 00-98.9 57.3l-81.8-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a445.93 445.93 0 00-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0025.8 25.7l2.7.5a448.27 448.27 0 00158.8 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"}}]},name:"setting",theme:"filled"};z.default=Ae;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return f}});var t=x(b),i=d(z),l=d(K);function a(r,n,u){return n in r?Object.defineProperty(r,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[n]=u,r}function d(r){return r&&r.__esModule?r:{default:r}}function p(r){if(typeof WeakMap!="function")return null;var n=new WeakMap,u=new WeakMap;return(p=function(h){return h?u:n})(r)}function x(r,n){if(!n&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var u=p(n);if(u&&u.has(r))return u.get(r);var h={__proto__:null},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in r)if(j!=="default"&&Object.prototype.hasOwnProperty.call(r,j)){var M=C?Object.getOwnPropertyDescriptor(r,j):null;M&&(M.get||M.set)?Object.defineProperty(h,j,M):h[j]=r[j]}return h.default=r,u&&u.set(r,h),h}function O(r){for(var n=1;n<arguments.length;n++){var u=arguments[n]!=null?arguments[n]:{},h=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(h=h.concat(Object.getOwnPropertySymbols(u).filter(function(C){return Object.getOwnPropertyDescriptor(u,C).enumerable}))),h.forEach(function(C){a(r,C,u[C])})}return r}function k(r,n){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);n&&(h=h.filter(function(C){return Object.getOwnPropertyDescriptor(r,C).enumerable})),u.push.apply(u,h)}return u}function S(r,n){return n=n??{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(n,u))}),r}var v=function(r,n){return t.createElement(l.default,S(O({},r),{ref:n,icon:i.default}))},c=t.forwardRef(v),f=c})(_);(function(o,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const i=l(_);function l(d){return d&&d.__esModule?d:{default:d}}const a=i;t.default=a,o.exports=a})(V,V.exports);var we=V.exports;const je=N(we),Ie=w("div")(({theme:o})=>({[`& .${P.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${P.listbox}`]:{background:o.palette.background.paper,padding:0,[`& .${P.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid  ${o.palette.divider}`,'&[aria-selected="true"]':{background:"transparent"},'&[data-focus="true"], &[data-focus="true"][aria-selected="true"]':{background:o.palette.action.hover}}},[`&.${P.popperDisablePortal}`]:{position:"relative"}}));function Te({...o}){return e.jsx(Ie,{...o})}const ke=w(J)(({theme:o})=>({border:"1px solid",borderColor:o.palette.mode===T.DARK?"#30363d":"#e1e4e8",boxShadow:`0 8px 24px ${o.palette.mode===T.DARK?"rgb(1, 4, 9)":"rgba(149, 157, 165, 0.2)"}`,borderRadius:6,width:300,zIndex:o.zIndex.modal,fontSize:13,color:o.palette.text.primary,background:o.palette.background.paper})),Le=w(X)(({theme:o})=>({padding:10,width:"100%",borderBottom:"1px solid",borderBottomColor:o.palette.divider,"& input":{borderRadius:4,background:o.palette.background.paper,padding:8,transition:o.transitions.create(["border-color","box-shadow"]),border:"1px solid",borderColor:o.palette.primary.main,fontSize:14,"&:focus-visible":{boxShadow:o.customShadows.primary,borderColor:o.palette.primary.main}}})),Me=w(Q)(({theme:o})=>({fontSize:13,width:"100%",textAlign:"left",marginBottom:8,color:o.palette.text.primary,fontWeight:600,"&:hover":{color:o.palette.primary.main},"&:focus-visible":{borderRadius:2,outline:`2px solid ${o.palette.secondary.dark}`,outlineOffset:2},"& span":{width:"100%"},"& svg":{width:16,height:16}}));function Pe(){const[o,t]=b.useState(null),[i,l]=b.useState([L[1],L[11]]),[a,d]=b.useState([]),p=q(),x=c=>{d(i),t(c.currentTarget)},O=()=>{l(a),o&&o.focus(),t(null)},k=!!o,S=k?"github-label":void 0;return e.jsxs(y,{title:"GitHub's Picker",codeString:`// GitHubAutocomplete.tsx
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
</StyledPopper>`,children:[e.jsxs(A,{sx:{width:221,fontSize:13},children:[e.jsxs(Me,{disableRipple:!0,"aria-describedby":S,onClick:x,sx:{justifyContent:"space-between","& span":{width:"auto"}},children:[e.jsx("span",{children:"Labels"}),e.jsx(je,{})]}),i.map((c,f)=>e.jsx(A,{sx:{mt:"3px",height:20,padding:".15em 4px",fontWeight:600,lineHeight:"15px",borderRadius:"2px",bgcolor:c.color,color:p.palette.getContrastText(c.color)},children:c.name},f))]}),e.jsx(ke,{id:S,open:k,anchorEl:o,placement:"bottom-start",children:e.jsx(U,{onClickAway:O,children:e.jsxs("div",{children:[e.jsx(A,{sx:{borderBottom:"1px solid",borderBottomColor:p.palette.mode===T.DARK?"#30363d":"#eaecef",padding:"8px 10px",fontWeight:600},children:"Apply labels to this pull request"}),e.jsx(m,{open:!0,multiple:!0,onClose:(c,f)=>{f==="escape"&&O()},value:a,onChange:(c,f,r)=>{c.type==="keydown"&&c.key==="Backspace"&&r==="removeOption"||d(f)},disableCloseOnSelect:!0,PopperComponent:Te,renderTags:()=>null,noOptionsText:"No labels",renderOption:({key:c,...f},r,{selected:n})=>e.jsxs("li",{...f,children:[e.jsx(A,{component:W,sx:{width:17,height:17,mr:"5px",ml:"-2px",mt:.25,visibility:n?"visible":"hidden"}}),e.jsx(A,{sx:{width:14,height:14,flexShrink:0,borderRadius:"3px",mr:1,mt:"2px",bgcolor:r.color}}),e.jsxs(A,{sx:{flexGrow:1,"& span":{color:"text.secondary"}},children:[r.name,e.jsx("br",{}),e.jsx("span",{children:r.description})]}),e.jsx(A,{component:B,sx:{opacity:.6,width:18,height:18,mt:.25,visibility:n?"visible":"hidden"}})]},c),options:[...L].sort((c,f)=>{let r=i.indexOf(c);r=r===-1?i.length+L.indexOf(c):r;let n=i.indexOf(f);return n=n===-1?i.length+L.indexOf(f):n,r-n}),getOptionLabel:c=>c.name,renderInput:c=>e.jsx(Le,{ref:c.InputProps.ref,inputProps:c.inputProps,autoFocus:!0,placeholder:"Filter labels"})})]})})})]})}const L=[{name:"good first issue",color:"#7057ff",description:"Good for newcomers"},{name:"help wanted",color:"#008672",description:"Extra attention is needed"},{name:"priority: critical",color:"#b60205",description:""},{name:"priority: high",color:"#d93f0b",description:""},{name:"priority: low",color:"#0e8a16",description:""},{name:"priority: medium",color:"#fbca04",description:""},{name:"status: can't reproduce",color:"#fec1c1",description:""},{name:"status: confirmed",color:"#215cea",description:""},{name:"status: duplicate",color:"#cfd3d7",description:"This issue or pull request already exists"},{name:"status: needs information",color:"#fef2c0",description:""},{name:"status: wont do/fix",color:"#eeeeee",description:"This will not be worked on"},{name:"type: bug",color:"#d73a4a",description:"Something isn't working"},{name:"type: discussion",color:"#d4c5f9",description:""},{name:"type: documentation",color:"#006b75",description:""},{name:"type: enhancement",color:"#84b6eb",description:""},{name:"type: epic",color:"#3e4b9e",description:"A theme of work that contain sub-tasks"},{name:"type: feature request",color:"#fbca04",description:"New feature or request"},{name:"type: question",color:"#d876e3",description:"Further information is requested"}];function De(){return e.jsxs(Y,{children:[e.jsx(Z,{title:"Autocomplete",caption:"The autocomplete is a normal text input enhanced by a panel of suggested options.",directory:"src/pages/components-overview/autocomplete",link:"https://mui.com/material-ui/react-autocomplete/"}),e.jsx(ee,{children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{item:!0,xs:12,sm:6,children:e.jsxs(R,{spacing:3,children:[e.jsx(le,{}),e.jsx(ie,{}),e.jsx(se,{}),e.jsx(pe,{}),e.jsx(de,{}),e.jsx(ce,{}),e.jsx(xe,{})]})}),e.jsx(I,{item:!0,xs:12,sm:6,children:e.jsxs(R,{spacing:3,children:[e.jsx(fe,{}),e.jsx(Se,{}),e.jsx(Oe,{}),e.jsx(ve,{}),e.jsx(Ce,{}),e.jsx(Pe,{})]})})]})})]})}export{De as default};
