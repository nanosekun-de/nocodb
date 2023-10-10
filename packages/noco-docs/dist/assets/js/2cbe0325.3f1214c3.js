"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1245],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(i),f=r,u=m["".concat(d,".").concat(f)]||m[f]||c[f]||l;return i?a.createElement(u,n(n({ref:t},p),{},{components:i})):a.createElement(u,n({ref:t},p))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,n=new Array(l);n[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,n[1]=o;for(var s=2;s<l;s++)n[s]=i[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},53499:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=i(87462),r=(i(67294),i(3905));const l={title:"Time",description:"This article explains how to create & work with a Time field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create time field"]},n=void 0,o={unversionedId:"fields/field-types/date-time-based/time",id:"fields/field-types/date-time-based/time",title:"Time",description:"This article explains how to create & work with a Time field.",source:"@site/docs/070.fields/040.field-types/070.date-time-based/030.time.md",sourceDirName:"070.fields/040.field-types/070.date-time-based",slug:"/fields/field-types/date-time-based/time",permalink:"/fields/field-types/date-time-based/time",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/070.date-time-based/030.time.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Date & Time",permalink:"/tags/date-time"}],version:"current",sidebarPosition:30,frontMatter:{title:"Time",description:"This article explains how to create & work with a Time field.",tags:["Fields","Field types","Date & Time"],keywords:["Fields","Field types","Date & Time","Create time field"]},sidebar:"tutorialSidebar",previous:{title:"Date",permalink:"/fields/field-types/date-time-based/date"},next:{title:"Duration",permalink:"/fields/field-types/date-time-based/duration"}},d={},s=[{value:"Create a time field",id:"create-a-time-field",level:2},{value:"Supported time formats",id:"supported-time-formats",level:3},{value:"Related fields",id:"related-fields",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Time")," field type is used to store time values in a single field. Time formats supported by NocoDB are listed in the table below."),(0,r.kt)("h2",{id:"create-a-time-field"},"Create a time field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,r.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,r.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)"),(0,r.kt)("li",{parentName:"ol"},"Select the field type as ",(0,r.kt)("inlineCode",{parentName:"li"},"Time")," from the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"Time Format")),(0,r.kt)("li",{parentName:"ol"},"Configure default value (Optional)"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(36161).Z,width:"2876",height:"1192"})),(0,r.kt)("h3",{id:"supported-time-formats"},"Supported time formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"12:45:30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm"),(0,r.kt)("td",{parentName:"tr",align:null},"14:20")))),(0,r.kt)("h2",{id:"related-fields"},"Related fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/date-time"},"DateTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/date"},"Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/date-time-based/duration"},"Duration"))))}c.isMDXComponent=!0},36161:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/time-e7719917464163b50837ace0db5619c0.png"}}]);