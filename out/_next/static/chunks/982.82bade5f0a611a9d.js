(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{3643:function(e,r,t){"use strict";t.d(r,{h:function(){return Z}});var o=t(7294),a=t(4761),n=t(3594),i=t(6768),l=t(917);function c({styles:e}){let r=(0,a.rZ)();return o.createElement(l.xB,{styles:(0,l.iv)("function"==typeof e?e(r):e)})}let s=(0,o.createContext)({zIndex:1e3,fixed:!1,layout:"default"});s.Provider;var d=t(6817),p=t(4258),u=t(58);function f(e,r){if(!e)return[];let t=Object.keys(e).filter(e=>"base"!==e).map(t=>[(0,p.a)({size:t,sizes:r.breakpoints,units:"em"}),e[t]]);return t.sort((e,r)=>(0,u.oI)(e[0])-(0,u.oI)(r[0])),t}var b=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&O(e,t,r[t]);if(y)for(var t of y(r))v.call(r,t)&&O(e,t,r[t]);return e},k=(e,r)=>m(e,h(r)),x=(0,d.k)((e,{height:r,fixed:t,position:o,zIndex:a,borderPosition:n,layout:l})=>{let c="object"==typeof r&&null!==r?f(r,e).reduce((e,[r,t])=>(e[`@media (min-width: ${(0,i.em)(r)})`]={height:(0,i.h)(t),minHeight:(0,i.h)(t)},e),{}):null;return{root:k(w(k(w(w({},e.fn.fontStyles()),o),{zIndex:a,left:"alt"===l?"var(--mantine-navbar-width, 0)":0,right:"alt"===l?"var(--mantine-aside-width, 0)":0,height:"object"==typeof r?(0,i.h)(null==r?void 0:r.base)||"100%":(0,i.h)(r),maxHeight:"object"==typeof r?(0,i.h)(null==r?void 0:r.base)||"100%":(0,i.h)(r),position:t?"fixed":"static",boxSizing:"border-box",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white}),c),{borderBottom:"bottom"===n?`${(0,i.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0,borderTop:"top"===n?`${(0,i.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0})}}),S=t(7414),j=Object.defineProperty,P=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,N=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&N(e,t,r[t]);if(P)for(var t of P(r))z.call(r,t)&&N(e,t,r[t]);return e},C=(e,r)=>{var t={};for(var o in e)E.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>r.indexOf(o)&&z.call(e,o)&&(t[o]=e[o]);return t};let $=(0,o.forwardRef)((e,r)=>{var{children:t,className:a,classNames:l,styles:d,height:p,fixed:u=!1,withBorder:b=!0,position:m,zIndex:h,section:y,unstyled:g,__staticSelector:v,variant:O}=e,w=C(e,["children","className","classNames","styles","height","fixed","withBorder","position","zIndex","section","unstyled","__staticSelector","variant"]);let k=(0,o.useContext)(s),j=h||k.zIndex||(0,n.w)("app"),{classes:P,cx:E,theme:z}=x({height:p,fixed:k.fixed||u,position:m,zIndex:"number"==typeof j&&"default"===k.layout?j+1:j,layout:k.layout,borderPosition:b?"header"===y?"bottom":"top":"none"},{name:v,classNames:l,styles:d,unstyled:g,variant:O}),N="object"==typeof p&&null!==p?f(p,z).reduce((e,[r,t])=>(e[`@media (min-width: ${(0,i.em)(r)})`]={[`--mantine-${y}-height`]:(0,i.h)(t)},e),{}):null;return o.createElement(S.x,I({component:"header"===y?"header":"footer",className:E(P.root,a),ref:r},w),t,o.createElement(c,{styles:()=>({":root":I({[`--mantine-${y}-height`]:"object"==typeof p?(0,i.h)(null==p?void 0:p.base)||"100%":(0,i.h)(p)},N)})}))});$.displayName="@mantine/core/VerticalSection";var T=Object.defineProperty,W=Object.defineProperties,_=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,F=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&H(e,t,r[t]);if(R)for(var t of R(r))L.call(r,t)&&H(e,t,r[t]);return e},B=(e,r)=>W(e,_(r));let M={fixed:!1,position:{top:0,left:0,right:0}},Z=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Header",M,e);return o.createElement($,B(F({section:"header",__staticSelector:"Header"},t),{ref:r}))});Z.displayName="@mantine/core/Header"},6137:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var o=t(7294),a=t(4761),n=t(6817),i=t(4258),l=t(6768);let c={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var s=(0,n.k)((e,{spacing:r,position:t,noWrap:o,grow:a,align:n,count:s})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:n||"center",flexWrap:o?"nowrap":"wrap",justifyContent:c[t],gap:(0,i.a)({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:a?`calc(${100/s}% - (${(0,l.h)((0,i.a)({size:r,sizes:e.spacing}))} - ${(0,i.a)({size:r,sizes:e.spacing})} / ${s}))`:void 0,flexGrow:a?1:0}}})),d=t(7414),p=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&m(e,t,r[t]);if(u)for(var t of u(r))b.call(r,t)&&m(e,t,r[t]);return e},y=(e,r)=>{var t={};for(var o in e)f.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>r.indexOf(o)&&b.call(e,o)&&(t[o]=e[o]);return t};let g={position:"left",spacing:"md"},v=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Group",g,e),{className:n,position:i,align:l,children:c,noWrap:p,grow:u,spacing:f,unstyled:b,variant:m}=t,v=y(t,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),O=o.Children.toArray(c).filter(Boolean),{classes:w,cx:k}=s({align:l,grow:u,noWrap:p,spacing:f,position:i,count:O.length},{unstyled:b,name:"Group",variant:m});return o.createElement(d.x,h({className:k(w.root,n),ref:r},v),O)});v.displayName="@mantine/core/Group"},5227:function(e,r,t){"use strict";t.d(r,{J:function(){return m}});var o=t(6768),a=t(6817),n=t(4258),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&u(e,t,r[t]);return e},b=(e,r)=>l(e,c(r));let m={xs:(0,o.h)(30),sm:(0,o.h)(36),md:(0,o.h)(42),lg:(0,o.h)(50),xl:(0,o.h)(60)},h=["default","filled","unstyled"];var y=(0,a.k)((e,{multiline:r,radius:t,invalid:a,rightSectionWidth:i,withRightSection:l,iconWidth:c,offsetBottom:s,offsetTop:d,pointer:p},{variant:u,size:y})=>{let g=e.fn.variant({variant:"filled",color:"red"}).background,v="default"===u||"filled"===u?{minHeight:(0,n.a)({size:y,sizes:m}),paddingLeft:`calc(${(0,n.a)({size:y,sizes:m})}  / 3)`,paddingRight:l?i||(0,n.a)({size:y,sizes:m}):`calc(${(0,n.a)({size:y,sizes:m})}  / 3)`,borderRadius:e.fn.radius(t)}:"unstyled"===u&&l?{paddingRight:i||(0,n.a)({size:y,sizes:m})}:null;return{wrapper:{position:"relative",marginTop:d?`calc(${e.spacing.xs} / 2)`:void 0,marginBottom:s?`calc(${e.spacing.xs} / 2)`:void 0,"&:has(input:disabled)":{"& .mantine-Input-rightSection":{display:"none"}}},input:b(f(f(b(f({},e.fn.fontStyles()),{height:r?"unstyled"===u?void 0:"auto":(0,n.a)({size:y,sizes:m}),WebkitTapHighlightColor:"transparent",lineHeight:r?e.lineHeight:`calc(${(0,n.a)({size:y,sizes:m})} - ${(0,o.h)(2)})`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:(0,n.a)({size:y,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left",cursor:p?"pointer":void 0}),function({theme:e,variant:r}){return h.includes(r)?"default"===r?{border:`${(0,o.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:"filled"===r?{border:`${(0,o.h)(1)} solid transparent`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:(0,o.h)(28),outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}:null}({theme:e,variant:u})),v),{"&:disabled, &[data-disabled]":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed",pointerEvents:"none","&::placeholder":{color:e.colors.dark[2]}},"&[data-invalid]":{color:g,borderColor:g,"&::placeholder":{opacity:1,color:g}},"&[data-with-icon]":{paddingLeft:"number"==typeof c?(0,o.h)(c):(0,n.a)({size:y,sizes:m})},"&::placeholder":b(f({},e.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:c?(0,o.h)(c):(0,n.a)({size:y,sizes:m}),color:a?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:i||(0,n.a)({size:y,sizes:m})}}});r.Z=y},4088:function(e,r,t){"use strict";t.d(r,{r:function(){return r$}});var o=t(7294);let a="undefined"!=typeof document?o.useLayoutEffect:o.useEffect,n=o["useId".toString()]||(()=>void 0);function i({value:e,defaultValue:r,finalValue:t,onChange:a=()=>{}}){let[n,i]=(0,o.useState)(void 0!==r?r:t);return void 0!==e?[e,a,!0]:[n,e=>{i(e),null==a||a(e)},!1]}var l=t(4761);let c=(0,o.createContext)(null),s=c.Provider,d=()=>(0,o.useContext)(c);var p=t(6768),u=t(8427),f=t(6817),b=t(4258),m=(0,f.k)((e,r,{size:t})=>({label:{display:"inline-block",fontSize:(0,b.a)({size:t,sizes:e.fontSizes}),fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[9],wordBreak:"break-word",cursor:"default",WebkitTapHighlightColor:"transparent"},required:{color:e.fn.variant({variant:"filled",color:"red"}).background}})),h=t(7414),y=Object.defineProperty,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,w=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&w(e,t,r[t]);if(g)for(var t of g(r))O.call(r,t)&&w(e,t,r[t]);return e},x=(e,r)=>{var t={};for(var o in e)v.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>r.indexOf(o)&&O.call(e,o)&&(t[o]=e[o]);return t};let S={labelElement:"label",size:"sm"},j=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("InputLabel",S,e),{labelElement:a,children:n,required:i,size:c,classNames:s,styles:d,unstyled:p,className:u,htmlFor:f,__staticSelector:b,variant:y,onMouseDown:g}=t,v=x(t,["labelElement","children","required","size","classNames","styles","unstyled","className","htmlFor","__staticSelector","variant","onMouseDown"]),{classes:O,cx:w}=m(null,{name:["InputWrapper",b],classNames:s,styles:d,unstyled:p,variant:y,size:c});return o.createElement(h.x,k({component:a,ref:r,className:w(O.label,u),htmlFor:"label"===a?f:void 0,onMouseDown:e=>{null==g||g(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault()}},v),n,i&&o.createElement("span",{className:O.required,"aria-hidden":!0}," *"))});j.displayName="@mantine/core/InputLabel";var P=(0,f.k)((e,r,{size:t})=>({error:{wordBreak:"break-word",color:e.fn.variant({variant:"filled",color:"red"}).background,fontSize:`calc(${(0,b.a)({size:t,sizes:e.fontSizes})} - ${(0,p.h)(2)})`,lineHeight:1.2,display:"block"}})),E=t(5117),z=Object.defineProperty,N=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&$(e,t,r[t]);if(N)for(var t of N(r))C.call(r,t)&&$(e,t,r[t]);return e},W=(e,r)=>{var t={};for(var o in e)I.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&N)for(var o of N(e))0>r.indexOf(o)&&C.call(e,o)&&(t[o]=e[o]);return t};let _={size:"sm"},R=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("InputError",_,e),{children:a,className:n,classNames:i,styles:c,unstyled:s,size:d,__staticSelector:p,variant:u}=t,f=W(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:b,cx:m}=P(null,{name:["InputWrapper",p],classNames:i,styles:c,unstyled:s,variant:u,size:d});return o.createElement(E.x,T({className:m(b.error,n),ref:r},f),a)});R.displayName="@mantine/core/InputError";var D=(0,f.k)((e,r,{size:t})=>({description:{wordBreak:"break-word",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],fontSize:`calc(${(0,b.a)({size:t,sizes:e.fontSizes})} - ${(0,p.h)(2)})`,lineHeight:1.2,display:"block"}})),L=Object.defineProperty,H=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,M=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Z=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&M(e,t,r[t]);if(H)for(var t of H(r))B.call(r,t)&&M(e,t,r[t]);return e},G=(e,r)=>{var t={};for(var o in e)F.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&H)for(var o of H(e))0>r.indexOf(o)&&B.call(e,o)&&(t[o]=e[o]);return t};let q={size:"sm"},A=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("InputDescription",q,e),{children:a,className:n,classNames:i,styles:c,unstyled:s,size:d,__staticSelector:p,variant:u}=t,f=G(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:b,cx:m}=D(null,{name:["InputWrapper",p],classNames:i,styles:c,unstyled:s,variant:u,size:d});return o.createElement(E.x,Z({color:"dimmed",className:m(b.description,n),ref:r,unstyled:s},f),a)});A.displayName="@mantine/core/InputDescription";let V=(0,o.createContext)({offsetBottom:!1,offsetTop:!1,describedBy:void 0}),U=V.Provider,J=()=>(0,o.useContext)(V);var Y=Object.defineProperty,K=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,et=(e,r,t)=>r in e?Y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eo=(e,r)=>{for(var t in r||(r={}))ee.call(r,t)&&et(e,t,r[t]);if(X)for(var t of X(r))er.call(r,t)&&et(e,t,r[t]);return e},ea=(e,r)=>K(e,Q(r)),en=(0,f.k)(e=>({root:ea(eo({},e.fn.fontStyles()),{lineHeight:e.lineHeight})})),ei=Object.defineProperty,el=Object.defineProperties,ec=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable,eu=(e,r,t)=>r in e?ei(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ef=(e,r)=>{for(var t in r||(r={}))ed.call(r,t)&&eu(e,t,r[t]);if(es)for(var t of es(r))ep.call(r,t)&&eu(e,t,r[t]);return e},eb=(e,r)=>el(e,ec(r)),em=(e,r)=>{var t={};for(var o in e)ed.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&es)for(var o of es(e))0>r.indexOf(o)&&ep.call(e,o)&&(t[o]=e[o]);return t};let eh={labelElement:"label",size:"sm",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},ey=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("InputWrapper",eh,e),{className:a,label:n,children:i,required:c,id:s,error:d,description:p,labelElement:u,labelProps:f,descriptionProps:b,errorProps:m,classNames:y,styles:g,size:v,inputContainer:O,__staticSelector:w,unstyled:k,inputWrapperOrder:x,withAsterisk:S,variant:P}=t,E=em(t,["className","label","children","required","id","error","description","labelElement","labelProps","descriptionProps","errorProps","classNames","styles","size","inputContainer","__staticSelector","unstyled","inputWrapperOrder","withAsterisk","variant"]),{classes:z,cx:N}=en(null,{classNames:y,styles:g,name:["InputWrapper",w],unstyled:k,variant:P,size:v}),I={classNames:y,styles:g,unstyled:k,size:v,variant:P,__staticSelector:w},C=s?`${s}-error`:null==m?void 0:m.id,$=s?`${s}-description`:null==b?void 0:b.id,T=!!d&&"boolean"!=typeof d,W=`${T?C:""} ${p?$:""}`,_=W.trim().length>0?W.trim():void 0,D=n&&o.createElement(j,ef(ef({key:"label",labelElement:u,id:s?`${s}-label`:void 0,htmlFor:s,required:"boolean"==typeof S?S:c},I),f),n),L=p&&o.createElement(A,eb(ef(ef({key:"description"},b),I),{size:(null==b?void 0:b.size)||I.size,id:(null==b?void 0:b.id)||$}),p),H=o.createElement(o.Fragment,{key:"input"},O(i)),F="boolean"!=typeof d&&d&&o.createElement(R,eb(ef(ef({},m),I),{size:(null==m?void 0:m.size)||I.size,key:"error",id:(null==m?void 0:m.id)||C}),d),B=x.map(e=>{switch(e){case"label":return D;case"input":return H;case"description":return L;case"error":return F;default:return null}});return o.createElement(U,{value:ef({describedBy:_},function(e,{hasDescription:r,hasError:t}){let o=e.findIndex(e=>"input"===e),a=e[o-1],n=e[o+1];return{offsetBottom:r&&"description"===n||t&&"error"===n,offsetTop:r&&"description"===a||t&&"error"===a}}(x,{hasDescription:!!L,hasError:!!F}))},o.createElement(h.x,ef({className:N(z.root,a),ref:r},E),B))});ey.displayName="@mantine/core/InputWrapper";var eg=Object.defineProperty,ev=Object.getOwnPropertySymbols,eO=Object.prototype.hasOwnProperty,ew=Object.prototype.propertyIsEnumerable,ek=(e,r,t)=>r in e?eg(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ex=(e,r)=>{for(var t in r||(r={}))eO.call(r,t)&&ek(e,t,r[t]);if(ev)for(var t of ev(r))ew.call(r,t)&&ek(e,t,r[t]);return e},eS=(e,r)=>{var t={};for(var o in e)eO.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ev)for(var o of ev(e))0>r.indexOf(o)&&ew.call(e,o)&&(t[o]=e[o]);return t};let ej={},eP=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("InputPlaceholder",ej,e),{sx:a}=t,n=eS(t,["sx"]);return o.createElement(h.x,ex({component:"span",sx:[e=>e.fn.placeholderStyles(),...Array.isArray(a)?a:[a]],ref:r},n))});eP.displayName="@mantine/core/InputPlaceholder";var eE=t(5227),ez=t(2756),eN=Object.defineProperty,eI=Object.defineProperties,eC=Object.getOwnPropertyDescriptors,e$=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,eW=Object.prototype.propertyIsEnumerable,e_=(e,r,t)=>r in e?eN(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eR=(e,r)=>{for(var t in r||(r={}))eT.call(r,t)&&e_(e,t,r[t]);if(e$)for(var t of e$(r))eW.call(r,t)&&e_(e,t,r[t]);return e},eD=(e,r)=>eI(e,eC(r)),eL=(e,r)=>{var t={};for(var o in e)eT.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&e$)for(var o of e$(e))0>r.indexOf(o)&&eW.call(e,o)&&(t[o]=e[o]);return t};let eH={size:"sm",variant:"default"},eF=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("Input",eH,e),{className:a,error:n,required:i,disabled:c,variant:s,icon:d,style:u,rightSectionWidth:f,iconWidth:b,rightSection:m,rightSectionProps:y,radius:g,size:v,wrapperProps:O,classNames:w,styles:k,__staticSelector:x,multiline:S,sx:j,unstyled:P,pointer:E}=t,z=eL(t,["className","error","required","disabled","variant","icon","style","rightSectionWidth","iconWidth","rightSection","rightSectionProps","radius","size","wrapperProps","classNames","styles","__staticSelector","multiline","sx","unstyled","pointer"]),{offsetBottom:N,offsetTop:I,describedBy:C}=J(),{classes:$,cx:T}=(0,eE.Z)({radius:g,multiline:S,invalid:!!n,rightSectionWidth:f?(0,p.h)(f):void 0,iconWidth:b,withRightSection:!!m,offsetBottom:N,offsetTop:I,pointer:E},{classNames:w,styles:k,name:["Input",x],unstyled:P,variant:s,size:v}),{systemStyles:W,rest:_}=(0,ez.x)(z);return o.createElement(h.x,eR(eR({className:T($.wrapper,a),sx:j,style:u},W),O),d&&o.createElement("div",{className:$.icon},d),o.createElement(h.x,eD(eR({component:"input"},_),{ref:r,required:i,"aria-invalid":!!n,"aria-describedby":C,disabled:c,"data-disabled":c||void 0,"data-with-icon":!!d||void 0,"data-invalid":!!n||void 0,className:$.input})),m&&o.createElement("div",eD(eR({},y),{className:$.rightSection}),m))});eF.displayName="@mantine/core/Input",eF.Wrapper=ey,eF.Label=j,eF.Description=A,eF.Error=R,eF.Placeholder=eP;let eB=(0,u.F)(eF);var eM=Object.defineProperty,eZ=Object.getOwnPropertySymbols,eG=Object.prototype.hasOwnProperty,eq=Object.prototype.propertyIsEnumerable,eA=(e,r,t)=>r in e?eM(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eV=(e,r)=>{for(var t in r||(r={}))eG.call(r,t)&&eA(e,t,r[t]);if(eZ)for(var t of eZ(r))eq.call(r,t)&&eA(e,t,r[t]);return e},eU=(e,r)=>{var t={};for(var o in e)eG.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&eZ)for(var o of eZ(e))0>r.indexOf(o)&&eq.call(e,o)&&(t[o]=e[o]);return t};let eJ={size:"sm"},eY=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("SwitchGroup",eJ,e),{children:a,value:n,defaultValue:c,onChange:d,size:p,wrapperProps:u}=t,f=eU(t,["children","value","defaultValue","onChange","size","wrapperProps"]),[b,m]=i({value:n,defaultValue:c,finalValue:[],onChange:d});return o.createElement(s,{value:{value:b,onChange:e=>{let r=e.currentTarget.value;m(b.includes(r)?b.filter(e=>e!==r):[...b,r])},size:p}},o.createElement(eB.Wrapper,eV(eV({labelElement:"div",size:p,__staticSelector:"SwitchGroup",ref:r},u),f),a))});eY.displayName="@mantine/core/SwitchGroup";var eK=Object.defineProperty,eQ=Object.defineProperties,eX=Object.getOwnPropertyDescriptors,e0=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,e2=Object.prototype.propertyIsEnumerable,e4=(e,r,t)=>r in e?eK(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,e7=(e,r)=>{for(var t in r||(r={}))e1.call(r,t)&&e4(e,t,r[t]);if(e0)for(var t of e0(r))e2.call(r,t)&&e4(e,t,r[t]);return e},e6=(e,r)=>eQ(e,eX(r));let e3={xs:(0,p.h)(16),sm:(0,p.h)(20),md:(0,p.h)(24),lg:(0,p.h)(30),xl:(0,p.h)(36)},e5={xs:(0,p.h)(32),sm:(0,p.h)(38),md:(0,p.h)(46),lg:(0,p.h)(56),xl:(0,p.h)(72)},e8={xs:(0,p.h)(12),sm:(0,p.h)(14),md:(0,p.h)(18),lg:(0,p.h)(22),xl:(0,p.h)(28)},e9={xs:(0,p.h)(5),sm:(0,p.h)(6),md:(0,p.h)(7),lg:(0,p.h)(9),xl:(0,p.h)(11)},re={xs:(0,p.h)(4),sm:(0,p.h)(5),md:(0,p.h)(6),lg:(0,p.h)(8),xl:(0,p.h)(10)};var rr=(0,f.k)((e,{radius:r,color:t,labelPosition:o,error:a},{size:n})=>{let i=(0,b.a)({size:n,sizes:e8}),l=(0,b.a)({size:r,sizes:e.radius}),c=e.fn.variant({variant:"filled",color:t}),s=(0,b.a)({size:n,sizes:e5}),d=(0,p.h)("xs"===n?1:2),u=e.fn.variant({variant:"filled",color:"red"}).background;return{root:{position:"relative"},input:{height:0,width:0,overflow:"hidden",whiteSpace:"nowrap",padding:0,WebkitClipPath:"inset(50%)",clipPath:"inset(50%)",position:"absolute"},track:e6(e7({},e.fn.focusStyles("input:focus + &")),{cursor:e.cursorType,overflow:"hidden",WebkitTapHighlightColor:"transparent",position:"relative",borderRadius:l,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2],border:`${(0,p.h)(1)} solid ${a?u:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,height:(0,b.a)({size:n,sizes:e3}),minWidth:s,margin:0,transitionProperty:"background-color, border-color",transitionTimingFunction:e.transitionTimingFunction,transitionDuration:"150ms",boxSizing:"border-box",appearance:"none",display:"flex",alignItems:"center",fontSize:(0,b.a)({size:n,sizes:e9}),fontWeight:600,order:"left"===o?2:1,userSelect:"none",zIndex:0,lineHeight:0,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],transition:`color 150ms ${e.transitionTimingFunction}`,"input:checked + &":{backgroundColor:c.background,borderColor:c.background,color:e.white,transition:`color 150ms ${e.transitionTimingFunction}`},"input:disabled + &":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],cursor:"not-allowed",pointerEvents:"none"}}),thumb:{position:"absolute",zIndex:1,borderRadius:l,boxSizing:"border-box",display:"flex",backgroundColor:e.white,height:i,width:i,border:`${(0,p.h)(1)} solid ${"dark"===e.colorScheme?e.white:e.colors.gray[3]}`,left:d,transition:`left 150ms ${e.transitionTimingFunction}`,"& > *":{margin:"auto"},"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":""},"input:checked + * > &":{left:`calc(100% - ${i} - ${d})`,borderColor:e.white},"input:disabled + * > &":{borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],backgroundColor:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[0]}},trackLabel:{height:"100%",display:"grid",placeContent:"center",minWidth:`calc(${s} - ${i})`,paddingInline:(0,b.a)({size:n,sizes:re}),marginLeft:`calc(${i} + ${d})`,transition:`margin 150ms ${e.transitionTimingFunction}`,"input:checked + * > &":{marginLeft:0,marginRight:`calc(${i} + ${d})`}}}}),rt=Object.defineProperty,ro=Object.defineProperties,ra=Object.getOwnPropertyDescriptors,rn=Object.getOwnPropertySymbols,ri=Object.prototype.hasOwnProperty,rl=Object.prototype.propertyIsEnumerable,rc=(e,r,t)=>r in e?rt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,rs=(e,r)=>{for(var t in r||(r={}))ri.call(r,t)&&rc(e,t,r[t]);if(rn)for(var t of rn(r))rl.call(r,t)&&rc(e,t,r[t]);return e},rd=(e,r)=>ro(e,ra(r));let rp={xs:(0,p.h)(16),sm:(0,p.h)(20),md:(0,p.h)(24),lg:(0,p.h)(30),xl:(0,p.h)(36)};var ru=(0,f.k)((e,{labelPosition:r},{size:t})=>({root:{},body:{display:"flex","&:has(input:disabled) label":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}},labelWrapper:rd(rs({},e.fn.fontStyles()),{display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:t in rp?(0,b.a)({size:t,sizes:e.fontSizes}):void 0,lineHeight:t in rp?(0,b.a)({size:t,sizes:rp}):void 0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,cursor:e.cursorType,order:"left"===r?1:2}),description:{marginTop:`calc(${e.spacing.xs} / 2)`,["left"===r?"paddingRight":"paddingLeft"]:e.spacing.sm},error:{marginTop:`calc(${e.spacing.xs} / 2)`,["left"===r?"paddingRight":"paddingLeft"]:e.spacing.sm},label:{cursor:e.cursorType,["left"===r?"paddingRight":"paddingLeft"]:e.spacing.sm,"&:disabled, &[data-disabled]":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}}})),rf=Object.defineProperty,rb=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,ry=(e,r,t)=>r in e?rf(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,rg=(e,r)=>{for(var t in r||(r={}))rm.call(r,t)&&ry(e,t,r[t]);if(rb)for(var t of rb(r))rh.call(r,t)&&ry(e,t,r[t]);return e},rv=(e,r)=>{var t={};for(var o in e)rm.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&rb)for(var o of rb(e))0>r.indexOf(o)&&rh.call(e,o)&&(t[o]=e[o]);return t};let rO=(0,o.forwardRef)((e,r)=>{var{__staticSelector:t,className:a,classNames:n,styles:i,unstyled:l,children:c,label:s,description:d,id:p,disabled:u,error:f,size:b,labelPosition:m,variant:y}=e,g=rv(e,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]);let{classes:v,cx:O}=ru({labelPosition:m},{name:t,styles:i,classNames:n,unstyled:l,variant:y,size:b});return o.createElement(h.x,rg({className:O(v.root,a),ref:r},g),o.createElement("div",{className:O(v.body)},c,o.createElement("div",{className:v.labelWrapper},null!=s&&o.createElement("label",{className:v.label,"data-disabled":u||void 0,htmlFor:p},s),d&&o.createElement(eB.Description,{className:v.description},d),f&&"boolean"!==f&&o.createElement(eB.Error,{className:v.error},f))))});rO.displayName="@mantine/core/InlineInput";var rw=Object.defineProperty,rk=Object.defineProperties,rx=Object.getOwnPropertyDescriptors,rS=Object.getOwnPropertySymbols,rj=Object.prototype.hasOwnProperty,rP=Object.prototype.propertyIsEnumerable,rE=(e,r,t)=>r in e?rw(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,rz=(e,r)=>{for(var t in r||(r={}))rj.call(r,t)&&rE(e,t,r[t]);if(rS)for(var t of rS(r))rP.call(r,t)&&rE(e,t,r[t]);return e},rN=(e,r)=>rk(e,rx(r)),rI=(e,r)=>{var t={};for(var o in e)rj.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&rS)for(var o of rS(e))0>r.indexOf(o)&&rP.call(e,o)&&(t[o]=e[o]);return t};let rC={offLabel:"",onLabel:"",size:"sm",radius:"xl",error:!1},r$=(0,o.forwardRef)((e,r)=>{var t;let c=(0,l.N4)("Switch",rC,e),{className:s,color:p,label:u,offLabel:f,onLabel:b,id:m,style:h,size:y,radius:g,wrapperProps:v,children:O,unstyled:w,styles:k,classNames:x,thumbIcon:S,sx:j,checked:P,defaultChecked:E,onChange:z,labelPosition:N,description:I,error:C,disabled:$,variant:T}=c,W=rI(c,["className","color","label","offLabel","onLabel","id","style","size","radius","wrapperProps","children","unstyled","styles","classNames","thumbIcon","sx","checked","defaultChecked","onChange","labelPosition","description","error","disabled","variant"]),_=d(),R=(null==_?void 0:_.size)||y,{classes:D,cx:L}=rr({color:p,radius:g,labelPosition:N,error:!!C},{name:"Switch",classNames:x,styles:k,unstyled:w,size:R,variant:T}),{systemStyles:H,rest:F}=(0,ez.x)(W),B=function(e){let r=function(){let e=n();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[t,i]=(0,o.useState)(r);return(a(()=>{i(`mantine-${Math.random().toString(36).slice(2,11)}`)},[]),"string"==typeof e)?e:"undefined"==typeof window?r:t}(m),M=_?{checked:_.value.includes(F.value),onChange:_.onChange}:{},[Z,G]=i({value:null!=(t=M.checked)?t:P,defaultValue:E,finalValue:!1});return o.createElement(rO,rz(rz({className:L(s,D.root),sx:j,style:h,id:B,size:(null==_?void 0:_.size)||y,labelPosition:N,label:u,description:I,error:C,disabled:$,__staticSelector:"Switch",classNames:x,styles:k,unstyled:w,"data-checked":M.checked||void 0,variant:T},H),v),o.createElement("input",rN(rz({},F),{disabled:$,checked:Z,onChange:e=>{_?M.onChange(e):null==z||z(e),G(e.currentTarget.checked)},id:B,ref:r,type:"checkbox",className:D.input})),o.createElement("label",{htmlFor:B,className:D.track},o.createElement("div",{className:D.thumb},S),o.createElement("div",{className:D.trackLabel},Z?b:f)))});r$.displayName="@mantine/core/Switch",r$.Group=eY},3594:function(e,r,t){"use strict";t.d(r,{w:function(){return a}});let o={app:100,modal:200,popover:300,overlay:400,max:9999};function a(e){return o[e]}},853:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var o=t(7294),a=t(5697),n=t.n(a),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&f(e,t,r[t]);if(d)for(var t of d(r))u.call(r,t)&&f(e,t,r[t]);return e},m=(e,r)=>c(e,s(r)),h=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>r.indexOf(o)&&u.call(e,o)&&(t[o]=e[o]);return t},y=(e,r,t)=>{let a=(0,o.forwardRef)((r,a)=>{var{color:n="currentColor",size:l=24,stroke:c=2,children:s}=r,d=h(r,["color","size","stroke","children"]);return(0,o.createElement)("svg",b(m(b({ref:a},i),{width:l,height:l,stroke:n,strokeWidth:c,className:`tabler-icon tabler-icon-${e}`}),d),[...t.map(([e,r])=>(0,o.createElement)(e,r)),...s||[]])});return a.propTypes={color:n().string,size:n().oneOfType([n().string,n().number]),stroke:n().oneOfType([n().string,n().number])},a.displayName=`${r}`,a}},2093:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(853).Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},4738:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var o=(0,t(853).Z)("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]])},2703:function(e,r,t){"use strict";var o=t(414);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,n,i){if(i!==o){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:a};return t.PropTypes=t,t}},5697:function(e,r,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);