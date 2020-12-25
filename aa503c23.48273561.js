(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(149));const i={id:"v7-to-v8",title:"Migrating to Version 8",sidebar_label:"v.7 => v.8"},c={unversionedId:"ricos/migrations/v7-to-v8",id:"ricos/migrations/v7-to-v8",isDocsHomePage:!1,title:"Migrating to Version 8",description:"plugin-commons separation",source:"@site/docs/ricos/migrations/migrating-to-v8.mdx",slug:"/ricos/migrations/v7-to-v8",permalink:"/ricos/docs/ricos/migrations/v7-to-v8",version:"current",sidebar_label:"v.7 => v.8",sidebar:"ricos",previous:{title:"Media handling",permalink:"/ricos/docs/ricos/media_handling"},next:{title:"Migrating to Version 7",permalink:"/ricos/docs/ricos/migrations/v6-to-v7"}},o=[{value:"plugin-commons separation",id:"plugin-commons-separation",children:[]},{value:"Theme",id:"theme",children:[{value:"<code>createTheme()</code> is removed",id:"createtheme-is-removed",children:[]},{value:"Design Updates",id:"design-updates",children:[]}]}],b={toc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"plugin-commons-separation"},"plugin-commons separation"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"wix-rich-content-editor-common")," package size has been significantly reduced -- all the plugin-related stuff now resides in a separate ",Object(r.b)("inlineCode",{parentName:"p"},"wix-rich-content-plugin-commons")," package."),Object(r.b)("p",null,"The change is ",Object(r.b)("em",{parentName:"p"},"almost")," internal, except just the one drawback. It is now required to import ",Object(r.b)("inlineCode",{parentName:"p"},"plugin-commons")," styles:"),Object(r.b)("p",null,"either in JS:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import 'wix-rich-content-plugin-commons/dist/styles.min.css';\n")),Object(r.b)("p",null,"or in CSS:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"@import '~wix-rich-content-plugin-commons/dist/styles.min.css';\n")),Object(r.b)("h2",{id:"theme"},"Theme"),Object(r.b)("h3",{id:"createtheme-is-removed"},Object(r.b)("inlineCode",{parentName:"h3"},"createTheme()")," is removed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Please remove any calls for ",Object(r.b)("inlineCode",{parentName:"li"},"createTheme")," as those will no longer work"),Object(r.b)("li",{parentName:"ul"},"In addition, you can safely remove ",Object(r.b)("inlineCode",{parentName:"li"},"ricos-theme")," from your ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," as it is also no longer in use")),Object(r.b)("h4",{id:"before"},"Before"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import { createTheme } from 'ricos-theme';\n//...\n<RicosEditor theme={createTheme({ palette, parentClass })} />;\n")),Object(r.b)("h4",{id:"after"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"<RicosEditor theme={{ palette, parentClass }} />\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"design-updates"},"Design Updates"),Object(r.b)("p",null,"(relevant to ",Object(r.b)("inlineCode",{parentName:"p"},"cssOverride")," / legacy ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," prop)"),Object(r.b)("p",null,"If you're overriding styles, make sure your CSS files are aligned with this version's updates."),Object(r.b)("p",null,"Listed below are the major style changes.\nIf you face conflicts related to other changes that aren't listed here, you can check the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/ricos/pull/1607/files?file-filters%5B%5D=.scss"}),"the rest of the .scss differences here"),"."),Object(r.b)("h4",{id:"plugin-mentions"},Object(r.b)("inlineCode",{parentName:"h4"},"plugin-mentions")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Before"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"After"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"260",alt:"Screen Shot 2020-10-04 at 17 35 55",src:"https://user-images.githubusercontent.com/22775305/95095237-79048d00-0733-11eb-899a-d887a784a2a5.png"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"251",alt:"Screen Shot 2020-10-04 at 17 35 55",src:"https://user-images.githubusercontent.com/22775305/95095355-9f2a2d00-0733-11eb-9287-a07f867e2e74.png"}))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/ricos/blob/master/packages/plugin-mentions/web/statics/mentions.scss"}),"mentions.scss"))),Object(r.b)("hr",null),Object(r.b)("h4",{id:"inline-toolbar"},Object(r.b)("inlineCode",{parentName:"h4"},"Inline Toolbar")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Before"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"After"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"614",alt:"Screen Shot 2020-10-04 at 17 36 17 3",src:"https://user-images.githubusercontent.com/22775305/95096162-98e88080-0734-11eb-8113-47da9d5b37df.png"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"623",alt:"Screen Shot 2020-10-04 at 17 36 17 2",src:"https://user-images.githubusercontent.com/22775305/95096165-9a19ad80-0734-11eb-9dea-e516aaa62b11.png"}))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/ricos/blob/master/packages/editor-common/web/statics/styles/inline-toolbar-button.scss"}),"inline-toolbar-button.scss")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/ricos/blob/master/packages/editor/web/statics/styles/inline-toolbar-dropdown-button.scss"}),"inline-toolbar-dropdown-button.scss"))),Object(r.b)("hr",null),Object(r.b)("h4",{id:"plugin-toolbar"},Object(r.b)("inlineCode",{parentName:"h4"},"Plugin Toolbar")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Before"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"After"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"480",alt:"Screen Shot 2020-10-04 at 17 31 48 3",src:"https://user-images.githubusercontent.com/22775305/95100351-af450b00-0739-11eb-82ee-02e6181060b3.png"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{width:"480",alt:"Screen Shot 2020-10-04 at 17 31 48 2",src:"https://user-images.githubusercontent.com/22775305/95100360-b0763800-0739-11eb-9177-43126c878d76.png"}))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/ricos/blob/master/packages/plugin-commons/web/statics/styles/plugin-toolbar.scss"}),"plugin-toolbar.scss")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wix/ricos/blob/master/packages/plugin-commons/web/statics/styles/plugin-toolbar-button.scss"}),"plugin-toolbar-button.scss"))))}l.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);