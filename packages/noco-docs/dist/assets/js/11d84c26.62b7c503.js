"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[5336],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var l=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=l.createContext({}),d=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(i),f=a,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||n;return i?l.createElement(u,r(r({ref:t},p),{},{components:i})):l.createElement(u,r({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<n;d++)r[d]=i[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}f.displayName="MDXCreateElement"},45896:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var l=i(87462),a=(i(67294),i(3905));const n={title:"Email",description:"This article explains how to create & work with an Email field.",tags:["Fields","Field types","Text based types","Email"],keywords:["Fields","Field types","Text based types","Email","Create email field"]},r=void 0,o={unversionedId:"fields/field-types/text-based/email",id:"fields/field-types/text-based/email",title:"Email",description:"This article explains how to create & work with an Email field.",source:"@site/docs/070.fields/040.field-types/010.text-based/030.email.md",sourceDirName:"070.fields/040.field-types/010.text-based",slug:"/fields/field-types/text-based/email",permalink:"/fields/field-types/text-based/email",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/010.text-based/030.email.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Text based types",permalink:"/tags/text-based-types"},{label:"Email",permalink:"/tags/email"}],version:"current",sidebarPosition:30,frontMatter:{title:"Email",description:"This article explains how to create & work with an Email field.",tags:["Fields","Field types","Text based types","Email"],keywords:["Fields","Field types","Text based types","Email","Create email field"]},sidebar:"tutorialSidebar",previous:{title:"Long text",permalink:"/fields/field-types/text-based/long-text"},next:{title:"Phone Number",permalink:"/fields/field-types/text-based/phonenumber"}},s={},d=[{value:"Create an <code>Email</code> field",id:"create-an-email-field",level:2},{value:"Similar text based fields",id:"similar-text-based-fields",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Email")," field is text based field custom-built for storing E-mail IDs. It is a special type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Single line text")," field with"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optional validation for Email ID"),(0,a.kt)("li",{parentName:"ul"},"Cell display as clickable link")),(0,a.kt)("h2",{id:"create-an-email-field"},"Create an ",(0,a.kt)("inlineCode",{parentName:"h2"},"Email")," field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,a.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,a.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,a.kt)("li",{parentName:"ol"},"Select the field type as ",(0,a.kt)("inlineCode",{parentName:"li"},"Email")," from the dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enable validation by toggling the ",(0,a.kt)("inlineCode",{parentName:"li"},"Validate Email")," checkbox (Optional)."),(0,a.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(49737).Z,width:"2878",height:"1398"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Specify default value without quotes."),(0,a.kt)("li",{parentName:"ul"},"Validation only ensures that the value entered is a valid email ID. It does not check if the email ID exists."))),(0,a.kt)("h2",{id:"similar-text-based-fields"},"Similar text based fields"),(0,a.kt)("p",null,"Following are the other text based fields available in NocoDB, custom-built for specific use cases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/single-line-text"},"Single line text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/long-text"},"Long text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/url"},"URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fields/field-types/text-based/phonenumber"},"Phone"))))}m.isMDXComponent=!0},49737:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/email-764cb45f6208ba575ca2b5c1dabded86.png"}}]);