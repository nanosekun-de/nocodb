"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,u=s["".concat(d,".").concat(k)]||s[k]||m[k]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",tags:["Records","Delete","Edit","Duplicate","Shortcuts"],keywords:["NocoDB delete record","delete record","delete row","delete rows"]},i=void 0,l={unversionedId:"records/actions-on-record",id:"records/actions-on-record",title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",source:"@site/docs/080.records/070.actions-on-record.md",sourceDirName:"080.records",slug:"/records/actions-on-record",permalink:"/records/actions-on-record",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/080.records/070.actions-on-record.md",tags:[{label:"Records",permalink:"/tags/records"},{label:"Delete",permalink:"/tags/delete"},{label:"Edit",permalink:"/tags/edit"},{label:"Duplicate",permalink:"/tags/duplicate"},{label:"Shortcuts",permalink:"/tags/shortcuts"}],version:"current",sidebarPosition:70,frontMatter:{title:"Actions on record",description:"Learn how to perform actions (edit, duplicate, delete, etc) on a record in NocoDB.",tags:["Records","Delete","Edit","Duplicate","Shortcuts"],keywords:["NocoDB delete record","delete record","delete row","delete rows"]},sidebar:"tutorialSidebar",previous:{title:"Expanded record",permalink:"/records/expand-record"},next:{title:"View overview",permalink:"/views/views-overview"}},d={},c=[{value:"Keyboard navigation within Grid view",id:"keyboard-navigation-within-grid-view",level:2},{value:"Keyboard shortcuts for cell navigation",id:"keyboard-shortcuts-for-cell-navigation",level:3},{value:"Update Record",id:"update-record",level:3},{value:"Bulk Update Records",id:"bulk-update-records",level:3},{value:"Delete Record (Single)",id:"delete-record-single",level:3},{value:"Delete Record (Bulk)",id:"delete-record-bulk",level:3}],p={toc:c},s="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keyboard-navigation-within-grid-view"},"Keyboard navigation within Grid view"),(0,a.kt)("p",null,"A selected cell can be in one of the following states:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Select")," state : A single click on the cell selects the cell. When in this state, arrow keys can be used to navigate to adjacent cells."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Edit")," state : A double click on the cell puts the cell in edit state. Cursor can be moved within the cell using arrow keys.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Double-click on a cell to put it in edit state directly."),(0,a.kt)("li",{parentName:"ul"},"From Select state, press ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," key to enter edit state."),(0,a.kt)("li",{parentName:"ul"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Esc")," key to exit edit state."),(0,a.kt)("li",{parentName:"ul"},"From Edit state, press ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," key to save the changes."))),(0,a.kt)("p",null,"Edit state for some cells will be a picker. For example, a cell with ",(0,a.kt)("inlineCode",{parentName:"p"},"Single Select")," field type will have a picker with options to choose from. In such cases, arrow keys can be used to navigate between options."),(0,a.kt)("h3",{id:"keyboard-shortcuts-for-cell-navigation"},"Keyboard shortcuts for cell navigation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Behaviour"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"\u2318")," ",(0,a.kt)("inlineCode",{parentName:"td"},"\u2191")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Jump to first record in this field (in same page)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"\u2318")," ",(0,a.kt)("inlineCode",{parentName:"td"},"\u2193")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Jump to last record in this field (in same page)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"\u2318")," ",(0,a.kt)("inlineCode",{parentName:"td"},"C")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Copy cell contents to clipboard")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"\u2318")," ",(0,a.kt)("inlineCode",{parentName:"td"},"V")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Paste clipboard contents to cell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Enter")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Switch cell in focus to EDIT mode; opens modal/picker if cell is associated with one")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Esc")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Exit cell EDIT mode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Delete")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Clear cell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Space")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Expand current record")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"\u2190")," ",(0,a.kt)("inlineCode",{parentName:"td"},"\u2192")," ",(0,a.kt)("inlineCode",{parentName:"td"},"\u2191")," ",(0,a.kt)("inlineCode",{parentName:"td"},"\u2193")),(0,a.kt)("td",{parentName:"tr",align:"left"},"General cell navigation : left, right, top, bottom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"Tab")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Move to next cell horizontally; if on last cell, move to beginning of next record")))),(0,a.kt)("h3",{id:"update-record"},"Update Record"),(0,a.kt)("p",null,"You can start editing by any of the following methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Double-click on cell to edit"),(0,a.kt)("li",{parentName:"ul"},"Click on cell and start typing (this way it will clear the previous content)"),(0,a.kt)("li",{parentName:"ul"},"Click on cell and press enter to start editing")),(0,a.kt)("p",null,"And it will automatically save on blur event or if inactive."),(0,a.kt)("h3",{id:"bulk-update-records"},"Bulk Update Records"),(0,a.kt)("p",null,"You can bulk update records by "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Selecting multiple records that you wish to update together and then "),(0,a.kt)("li",{parentName:"ol"},"Right-click on the index field area (first column on the grid view) and then select ",(0,a.kt)("inlineCode",{parentName:"li"},"Bulk Update records")," option from the context menu. This will open ",(0,a.kt)("inlineCode",{parentName:"li"},"Bulk update")," modal.")),(0,a.kt)("p",null,"On the bulk update modal,\n3. ",(0,a.kt)("inlineCode",{parentName:"p"},"Fields area")," : Select the fields that you want to update.\n4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Selected fields area")," : Enter the new value for the selected fields.\n5. Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bulk Update all")," button\n6. A confirmation dialog will be displayed. Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to update the records."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This operation cannot be undone.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bulk Update",src:n(1826).Z,width:"2876",height:"1108"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bulk Update",src:n(30265).Z,width:"2878",height:"1024"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bulk Update",src:n(11595).Z,width:"2876",height:"954"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can drag drop required fields from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fields area")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Selected fields area")," & vice versa.",(0,a.kt)("br",{parentName:"p"}),"\n","You can update multiple fields at a time.")),(0,a.kt)("h3",{id:"delete-record-single"},"Delete Record (Single)"),(0,a.kt)("p",null,"Right-click on record and then from the cell context menu, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete Record")," option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete row -1",src:n(36783).Z,width:"2308",height:"940"})),(0,a.kt)("h3",{id:"delete-record-bulk"},"Delete Record (Bulk)"),(0,a.kt)("p",null,"Select multiple records by using the checkbox in first column and then ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete Selected Records")," options from the right click context menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete row 2",src:n(60426).Z,width:"2306",height:"858"})))}m.isMDXComponent=!0},1826:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bulk-update-1-abf0bea8ffcee3689a6b4c7bc912a92b.png"},30265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bulk-update-2-8ad8314489b9cb76d57cdddddcf2ab85.png"},11595:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bulk-update-3-e8c66d72a7fdbe1247482ba2021aa0f5.png"},60426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/delete-row-bulk-70240cbb8e8a5e84e368e9ff11b6e5c0.png"},36783:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/delete-row-2ef2b7c113b757dabf1542106e79f2db.png"}}]);