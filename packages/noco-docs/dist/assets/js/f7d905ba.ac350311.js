"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,g=c["".concat(s,".").concat(f)]||c[f]||u[f]||l;return r?i.createElement(g,a(a({ref:t},d),{},{components:r})):i.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const l={title:"Filtering records",description:"Learn how to filter records in NocoDB.",tags:["Table operations","Filter","Gallery view","Kanban view","Grid view"],keywords:["NocoDB table operations","table operations overview","filter"]},a=void 0,o={unversionedId:"table-operations/filter",id:"table-operations/filter",title:"Filtering records",description:"Learn how to filter records in NocoDB.",source:"@site/docs/060.table-operations/030.filter.md",sourceDirName:"060.table-operations",slug:"/table-operations/filter",permalink:"/table-operations/filter",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/060.table-operations/030.filter.md",tags:[{label:"Table operations",permalink:"/tags/table-operations"},{label:"Filter",permalink:"/tags/filter"},{label:"Gallery view",permalink:"/tags/gallery-view"},{label:"Kanban view",permalink:"/tags/kanban-view"},{label:"Grid view",permalink:"/tags/grid-view"}],version:"current",sidebarPosition:30,frontMatter:{title:"Filtering records",description:"Learn how to filter records in NocoDB.",tags:["Table operations","Filter","Gallery view","Kanban view","Grid view"],keywords:["NocoDB table operations","table operations overview","filter"]},sidebar:"tutorialSidebar",previous:{title:"Hide & reorder fields",permalink:"/table-operations/field-operations"},next:{title:"Sorting records",permalink:"/table-operations/sort"}},s={},p=[{value:"Adding or Editing Filters",id:"adding-or-editing-filters",level:3},{value:"Deleting Filters",id:"deleting-filters",level:3},{value:"Grouping Filters",id:"grouping-filters",level:3},{value:"Enabling NULL and EMPTY Filters",id:"enabling-null-and-empty-filters",level:2},{value:"Supported Filters",id:"supported-filters",level:3},{value:"Related topics",id:"related-topics",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Filters provide a powerful way to narrow down and organize your data according to your specific requirements. NocoDB supports nested filters, allowing you to select multiple fields and conditions for filtering. You can choose between ",(0,n.kt)("inlineCode",{parentName:"p"},"and")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"or")," mode of operation to combine filters, and filtering also supports Lookup, Formula, and Nested Data."),(0,n.kt)("h3",{id:"adding-or-editing-filters"},"Adding or Editing Filters"),(0,n.kt)("p",null,"To add or edit a filter, simply click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Filter")," button in the toolbar and select either ",(0,n.kt)("inlineCode",{parentName:"p"},"Add filter")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Add filter group"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Filter",src:r(59155).Z,width:"2300",height:"610"})),(0,n.kt)("p",null,"Configure the filter by specifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"Field,")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Operation,")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Value")," (if applicable)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Filter Configuration",src:r(19911).Z,width:"2298",height:"800"})),(0,n.kt)("p",null,"You can combine multiple filter conditions using either ",(0,n.kt)("inlineCode",{parentName:"p"},"And")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Or")," mode of operation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Nested Filters",src:r(48448).Z,width:"2296",height:"1056"})),(0,n.kt)("h3",{id:"deleting-filters"},"Deleting Filters"),(0,n.kt)("p",null,"To remove a filter, click on the bin icon located to the right of the respective filter."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Delete Filter",src:r(92390).Z,width:"2296",height:"1056"})),(0,n.kt)("h3",{id:"grouping-filters"},"Grouping Filters"),(0,n.kt)("p",null,"You also have the option to group multiple filters together using a Filter Group."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Grouped Filters",src:r(51970).Z,width:"2298",height:"1268"})),(0,n.kt)("h2",{id:"enabling-null-and-empty-filters"},"Enabling NULL and EMPTY Filters"),(0,n.kt)("p",null,"By default, NULL filters (",(0,n.kt)("inlineCode",{parentName:"p"},"is null")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"is not null"),") and EMPTY filters (",(0,n.kt)("inlineCode",{parentName:"p"},"is empty")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"is not empty"),") are hidden. If you wish to filter out either of these explicitly, you can enable ",(0,n.kt)("inlineCode",{parentName:"p"},"Show NULL and EMPTY Filter")," in ",(0,n.kt)("a",{parentName:"p",href:"/bases/actions-on-base#base-settings"},"Project settings"),"."),(0,n.kt)("p",null,"Before enabling ",(0,n.kt)("inlineCode",{parentName:"p"},"Show NULL and EMPTY Filter"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Show isBlank",src:r(75518).Z,width:"2300",height:"1028"})),(0,n.kt)("p",null,"Once enabled, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"is null")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"is empty")," filters to filter out cells with NULL or EMPTY values."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Show NULL and EMPTY Filter",src:r(76227).Z,width:"2300",height:"1112"})),(0,n.kt)("p",null,"Alternatively, you can use Blank filters to filter out cells with NULL or EMPTY values."),(0,n.kt)("h3",{id:"supported-filters"},"Supported Filters"),(0,n.kt)("p",null,"NocoDB currently supports various types of filters for corresponding fields. Please refer to the matrix below for detailed information."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTpCNKtA-szaXUKJEO5uuSIRnzUOK793MKnyBz9m2rQcwn7HqK19jPHeER-IIRWH9X56J78wfxXZuuv/pubhtml?gid=427284630&single=true&widget=true&headers=false"},"Filter Matrix")),(0,n.kt)("h3",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"field-operations"},"Field operations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"sort"},"Sort")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"group-by"},"GroupBy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"row-height"},"Row height")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"search"},"Quick Search")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"download"},"Download"))))}u.isMDXComponent=!0},59155:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-1-6d82d6adaa0df9338b4c29b6376de557.png"},19911:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-2-51019e4c6061e78b8b3df002cf6db8f5.png"},48448:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-3-f6db70222f513a250bf4b0bd36e3c158.png"},51970:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-4-058ba55633cb86f5b1a5431c1ee8766d.png"},92390:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-5-e2ea016b369c57c5787ec7c4259f7fc6.png"},75518:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-is-blank-93b9ad8f1a235a7a0c0e198c076a7caf.png"},76227:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/filter-is-null-empty-1341b5cc9439c361df4992106ff00ad6.png"}}]);