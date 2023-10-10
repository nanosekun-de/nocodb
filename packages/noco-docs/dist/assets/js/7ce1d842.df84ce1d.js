"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[3998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?r.createElement(m,l(l({ref:t},b),{},{components:a})):r.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Table overview",description:"Learn how to create, import, and manage tables in NocoDB.",tags:["Tables","Overview"],keywords:["NocoDB table","table overview"]},l=void 0,i={unversionedId:"tables/table-overview",id:"tables/table-overview",title:"Table overview",description:"Learn how to create, import, and manage tables in NocoDB.",source:"@site/docs/050.tables/010.table-overview.md",sourceDirName:"050.tables",slug:"/tables/table-overview",permalink:"/tables/table-overview",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/050.tables/010.table-overview.md",tags:[{label:"Tables",permalink:"/tags/tables"},{label:"Overview",permalink:"/tags/overview"}],version:"current",sidebarPosition:10,frontMatter:{title:"Table overview",description:"Learn how to create, import, and manage tables in NocoDB.",tags:["Tables","Overview"],keywords:["NocoDB table","table overview"]},sidebar:"tutorialSidebar",previous:{title:"Actions on base",permalink:"/bases/actions-on-base"},next:{title:"Create empty table",permalink:"/tables/create-table"}},s={},c=[{value:"Related articles",id:"related-articles",level:2}],b={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A base is housed in tables, where data is logically arranged into records and fields. A table in NocoDB serves as a robust center for managing your data effectively. You have the flexibility to create multiple tables, each catering to distinct sets of data. Moreover, you can link tables to one another to establish relationships between them."),(0,n.kt)("p",null,"Much like traditional spreadsheets, NocoDB tables empower you to carry out tasks such as sorting, filtering, and aggregating your data. What sets NocoDB apart from standard spreadsheets is its ability to present table data in various formats. You can view your data as a conventional grid with records and fields, a gallery of cards, or even as interactive kanban boards, and then make use of a friendly form to input data."),(0,n.kt)("p",null,"As you delve into this section, you'll gain a deeper understanding of how to leverage NocoDB's tables effectively, equipping you to proficiently organize your own dataset."),(0,n.kt)("h2",{id:"related-articles"},"Related articles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/create-table"},"Create a new table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/create-table-via-import"},"Create a table using a CSV, Excel or a JSON")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/import-data-into-existing-table"},"Import data from Csv/Xlsx into existing table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/actions-on-table#rename-table"},"Rename a table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/actions-on-table#duplicate-table"},"Duplicate a table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tables/actions-on-table#delete-table"},"Delete a table"))))}u.isMDXComponent=!0}}]);