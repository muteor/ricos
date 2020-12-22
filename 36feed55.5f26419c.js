(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(7),r=(n(0),n(134)),a={id:"RichContentEditorAPI",title:"RichContentEditor API",sidebar_label:"RichContentEditor API"},d={unversionedId:"rce_api/RichContentEditorAPI",id:"rce_api/RichContentEditorAPI",isDocsHomePage:!1,title:"RichContentEditor API",description:"Introduction",source:"@site/docs/rce_api/RichContentEditorApi.mdx",slug:"/rce_api/RichContentEditorAPI",permalink:"/rich-content/docs/rce_api/RichContentEditorAPI",version:"current",sidebar_label:"RichContentEditor API"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"<code>handleReturn</code>",id:"handlereturn",children:[]},{value:"<code>config</code>",id:"config",children:[]},{value:"<code>shouldRenderOptimizedImages</code>",id:"shouldrenderoptimizedimages",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document describes the ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentEditor")," API."),Object(r.b)("h2",{id:"handlereturn"},Object(r.b)("inlineCode",{parentName:"h2"},"handleReturn")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"handleReturn")," prop determines editor behavior upon Enter key press."),Object(r.b)("p",null,"The prop value is expected to be a function with the following signature:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"\n(updateEditorStateCallback: Function) =>\n  (e: SyntheticKeyboardEvent, editorState: EditorState) => 'handled' | 'not-handled'\n\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"updateEditorStateCallback")," parameter can be used for ",Object(r.b)("inlineCode",{parentName:"p"},"editorState")," update. It accepts a single parameter ",Object(r.b)("inlineCode",{parentName:"p"},"editorState"),"."),Object(r.b)("p",null,"The return value is a function that is used as the ",Object(r.b)("inlineCode",{parentName:"p"},"draft-js")," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://draftjs.org/docs/api-reference-editor#handlereturn"}),"handleReturn cancellable handler"),". It should return either ",Object(r.b)("inlineCode",{parentName:"p"},"handled")," or ",Object(r.b)("inlineCode",{parentName:"p"},"not-handled")," string. The ",Object(r.b)("inlineCode",{parentName:"p"},"'handled'")," value indicates that the event is handled and the Draft core should do nothing more with it. By returning ",Object(r.b)("inlineCode",{parentName:"p"},"'not-handled'"),", you defer to Draft to handle the event. For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"() => 'handled'")," will cause the editor to completely ignore the Enter key press."),Object(r.b)("h2",{id:"config"},Object(r.b)("inlineCode",{parentName:"h2"},"config")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"config")," prop allow to customize various aspects of the ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentEditor"),", such as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/rich-content/docs/rce_api/ToolbarCustomization"}),"toolbars"),", ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/rich-content/docs/rce_api/UiSettings"}),"common UI settings"),", and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/rich-content/docs/plugins_api/PluginCustomization"}),"plugins"),"."),Object(r.b)("h2",{id:"shouldrenderoptimizedimages"},Object(r.b)("inlineCode",{parentName:"h2"},"shouldRenderOptimizedImages")),Object(r.b)("p",null,"When true, images will be rendered in high resolution. Useful for forcing high resolution rendering for crawlers relevant to SEO."))}p.isMDXComponent=!0}}]);