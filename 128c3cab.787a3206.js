(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(161)),l={id:"theming",title:"Theming Guidelines",sidebar_label:"Theming Guidelines"},o={id:"plugin-development-guidelines/theming",title:"Theming Guidelines",description:"Motivation",source:"@site/docs/plugin-development-guidelines/Theming.md",permalink:"/rich-content/docs/plugin-development-guidelines/theming",sidebar_label:"Theming Guidelines",sidebar:"devs",previous:{title:"Modal Dialogs",permalink:"/rich-content/docs/plugin-development-guidelines/modals"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Theme vs Default Styles",id:"theme-vs-default-styles",children:[]},{value:"Theming Drawbacks",id:"theming-drawbacks",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"wix-rich-content")," project is designed with theming capability in mind. That is, every single UI element appearance can be easily modified by a consumer from outside, by passing the ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," prop to the ",Object(a.b)("inlineCode",{parentName:"p"},"RichContentEditor")," or ",Object(a.b)("inlineCode",{parentName:"p"},"RichContentViewer"),"."),Object(a.b)("h2",{id:"theme-vs-default-styles"},"Theme vs Default Styles"),Object(a.b)("p",null,"In order to achieve that customability level, every single UI component has a ",Object(a.b)("em",{parentName:"p"},"default style")," (usually implemented in a dedicated SCSS file), and also accepts ",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"theme")," prop"),". The theme is expected to be an object that maps the CSS module names to the actual CSS class names."),Object(a.b)("p",null,"The default styles and theme styles are merged, and the merged result is used for component styling. The ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/blob/master/packages/common/web/src/Utils/mergeStyles.js"}),"mergeStyles")," utility can be used for such merging."),Object(a.b)("p",null,"For example, the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/blob/master/packages/plugin-divider/web/src/components/divider-component.jsx"}),"DividerComponent")," imports default ",Object(a.b)("inlineCode",{parentName:"p"},"styles")," from ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/blob/master/packages/plugin-divider/web/statics/styles/divider-viewer.rtlignore.scss"}),"divider-viewer.rtlignore.scss"),". This ",Object(a.b)("inlineCode",{parentName:"p"},"styles")," CSS module exposes ",Object(a.b)("inlineCode",{parentName:"p"},".divider"),", ",Object(a.b)("inlineCode",{parentName:"p"},".divider-container"),", etc class names. In addition, the ",Object(a.b)("inlineCode",{parentName:"p"},"DividerComponent")," has the ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," prop. Both default ",Object(a.b)("inlineCode",{parentName:"p"},"styles")," and ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," are passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"mergeStyles")," utility, and the result is used for styling. The merging allows to override the default styles: if the ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," contains the ",Object(a.b)("inlineCode",{parentName:"p"},"divider-container")," key, then the merged style will get its value; otherwise, it will get the default style value."),Object(a.b)("p",null,"The example theme definition can be found in the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/tree/master/examples/editor/src/theme"}),"editor example"),"."),Object(a.b)("h2",{id:"theming-drawbacks"},"Theming Drawbacks"),Object(a.b)("p",null,"In order to support plugin theming, the following conditions should be met:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"every styled UI component should accept ",Object(a.b)("inlineCode",{parentName:"li"},"theme")," prop"),Object(a.b)("li",{parentName:"ul"},"every UI component should be styled with merged styles resulted by ",Object(a.b)("inlineCode",{parentName:"li"},"mergeStyles")," utility"),Object(a.b)("li",{parentName:"ul"},"the default plugin styles should be implemented in dedicated SCSS files"),Object(a.b)("li",{parentName:"ul"},"all the styling should be implemented with ",Object(a.b)("em",{parentName:"li"},"class selectors")," only (avoid HTML element selectors, nth-child, etc)"),Object(a.b)("li",{parentName:"ul"},"all the SCSS files should have ",Object(a.b)("em",{parentName:"li"},"flat structure")," (avoid nesting)"),Object(a.b)("li",{parentName:"ul"},"all the SCSS class names should be ",Object(a.b)("em",{parentName:"li"},"globally unique")," to avoid name collisions in theme mapping. The current class naming convention is ",Object(a.b)("inlineCode",{parentName:"li"},"[component_name]_[style_name]"),", e.g. ",Object(a.b)("inlineCode",{parentName:"li"},".video_player"),", ",Object(a.b)("inlineCode",{parentName:"li"},".video_container"),", ",Object(a.b)("inlineCode",{parentName:"li"},".video_overlay"))))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||b[d]||a;return n?r.a.createElement(u,o(o({ref:t},s),{},{components:n})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);