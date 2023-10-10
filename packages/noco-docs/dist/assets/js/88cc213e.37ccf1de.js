"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(s,".").concat(m)]||p[m]||b[m]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Share Base",description:"Procedures to share a base & generating embedded iframe"},i=void 0,o={unversionedId:"setup-and-usages/share-base",id:"version-0.109.7/setup-and-usages/share-base",title:"Share Base",description:"Procedures to share a base & generating embedded iframe",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/130.share-base.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/share-base",permalink:"/0.109.7/setup-and-usages/share-base",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/030.setup-and-usages/130.share-base.md",tags:[],version:"0.109.7",sidebarPosition:130,frontMatter:{title:"Share Base",description:"Procedures to share a base & generating embedded iframe"},sidebar:"tutorialSidebar",previous:{title:"Sync Schema",permalink:"/0.109.7/setup-and-usages/sync-schema"},next:{title:"Share View",permalink:"/0.109.7/setup-and-usages/share-view"}},s={},d=[{value:"Generate Share base",id:"generate-share-base",level:2},{value:"Modify Share base",id:"modify-share-base",level:2},{value:"Disable Share base",id:"disable-share-base",level:2},{value:"Share base Access Permissions",id:"share-base-access-permissions",level:2},{value:"Embeddable Frame",id:"embeddable-frame",level:2},{value:"Generate embeddable HTML code",id:"generate-embeddable-html-code",level:3},{value:"Embed into application&#39;s HTML Body",id:"embed-into-applications-html-body",level:3}],c={toc:d},p="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"generate-share-base"},"Generate Share base"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Project "),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Invite Team")," button on bottom left tool bar")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/192435607-ee00326e-3890-4478-8260-e5c7c286f03a.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Shared base link")," tab and toggle from ",(0,r.kt)("inlineCode",{parentName:"li"},"Disabled Share base")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Anyone with the link"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/192435735-71fc161b-48fc-49e2-94ad-55713932f10a.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Share base link generated is displayed over & can be used to share this project to others in the team ","[Selection (2) in the image below]")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/86527202/154789725-a1194e30-3101-423a-bd5c-25009c361b96.png",alt:"Screenshot 2022-02-19 at 12 01 58 PM"})),(0,r.kt)("h2",{id:"modify-share-base"},"Modify Share base"),(0,r.kt)("p",null,"Modifying ",(0,r.kt)("inlineCode",{parentName:"p"},"Share base")," will invalidate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Share base")," link generated previously and will generate a new link."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Project base"),(0,r.kt)("li",{parentName:"ul"},"Click on 'Share' button on top right tool bar"),(0,r.kt)("li",{parentName:"ul"},"Click on 'Reload' button on Quick menu (next to Shared base link)")),(0,r.kt)("h2",{id:"disable-share-base"},"Disable Share base"),(0,r.kt)("p",null,"Disabling ",(0,r.kt)("inlineCode",{parentName:"p"},"Share base")," will invalidate the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"Share base")," link"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Project base"),(0,r.kt)("li",{parentName:"ul"},"Click on 'Share' button on top right tool bar"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Shared base link")," and toggle from ",(0,r.kt)("inlineCode",{parentName:"li"},"Anyone with the link")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Disable Share base"))),(0,r.kt)("h2",{id:"share-base-access-permissions"},"Share base Access Permissions"),(0,r.kt)("p",null,"Shared base can be configured as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Viewer - User with the link will get ",(0,r.kt)("strong",{parentName:"li"},"READ ONLY")," access to the project data."),(0,r.kt)("li",{parentName:"ul"},"Editor - User with the link will get ",(0,r.kt)("strong",{parentName:"li"},"READ & WRITE")," access to the project data.")),(0,r.kt)("h2",{id:"embeddable-frame"},"Embeddable Frame"),(0,r.kt)("p",null,"NocoDB interface can be embedded into existing applications easily by making use of ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"HTML IFRAME"),") attribute."),(0,r.kt)("h3",{id:"generate-embeddable-html-code"},"Generate embeddable HTML code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Project base"),(0,r.kt)("li",{parentName:"ul"},"Click on 'Share' button on top right tool bar"),(0,r.kt)("li",{parentName:"ul"},"Under 'Shared base link' tab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click on button to copy 'Embeddable HTML code'")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n    class="nc-embed"\n    src="https://nocodb-nocodb-rsyir.ondigitalocean.app/dashboard/#/nc/base/e3bba9df-4fc1-4d11-b7ce-41c4a3ad6810?embed"\n    frameBorder="0"\n    width="100%"\n    height="700"\n    style="background: transparent; border: 1px solid #ddd"\n>\n</iframe>\n')),(0,r.kt)("h3",{id:"embed-into-applications-html-body"},"Embed into application's HTML Body"),(0,r.kt)("p",null,"Sample code with embedded iframe generated above"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <body>\n        <iframe\n            class="nc-embed"\n            src="http://localhost:3000/#/nc/base/7d4b551c-b5e0-41c9-a87b-f3984c21d2c7?embed"\n            frameBorder="0"\n            width="100%"\n            height="700"\n            style="background: transparent; "\n        ></iframe>\n    </body>\n</html>\n')))}b.isMDXComponent=!0}}]);