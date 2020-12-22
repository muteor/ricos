(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return d})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return p})),i.d(t,"default",(function(){return m}));var o=i(3),n=i(7),r=(i(0),i(134)),a=i(146),l=i(310),s=i(301),d=(i(56),i(57),i(55),{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"}),c={unversionedId:"ricos/quick-start",id:"ricos/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"import 'wix-rich-content-plugin-video/dist/styles.min.css';",source:"@site/docs/ricos/quick-start.mdx",slug:"/ricos/quick-start",permalink:"/rich-content/docs/ricos/quick-start",version:"current",sidebar_label:"Quick Start",sidebar:"ricos",previous:{title:"Introduction",permalink:"/rich-content/docs/ricos/ricos-intro"},next:{title:"Introducing the rich content viewer",permalink:"/rich-content/docs/ricos/adding-a-viewer"}},p=[],u={toc:p};function m(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Let's get started by installing the package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm i ricos-editor\n")),Object(r.b)("p",null,"Then add a basic rich text editor to your app. You can now test typing and adding formatting to your text:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { RicosEditor } from 'ricos-editor';\nimport 'ricos-editor/dist/styles.min.css';\n\n<RicosEditor placeholder={'Type here!'} />;\n")),Object(r.b)("div",{className:"card"},Object(r.b)(a.a,{placeholder:"Type here!",mdxType:"RicosEditor"})),Object(r.b)("p",null,"Let's add some plugins:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm i wix-rich-content-plugin-video wix-rich-content-plugin-divider\n")),Object(r.b)("p",null,"Adding videos and dividers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { RicosEditor } from 'ricos-editor';\nimport 'ricos-editor/dist/styles.min.css';\n\nimport { pluginVideo } from 'wix-rich-content-plugin-video';\nimport 'wix-rich-content-plugin-video/dist/styles.min.css';\n\nimport { pluginDivider } from 'wix-rich-content-plugin-divider';\nimport 'wix-rich-content-plugin-divider/dist/styles.min.css';\n\n<RicosEditor placeholder={'Type here!'} plugins={[pluginDivider(), pluginVideo()]} />;\n")),Object(r.b)("div",{className:"card"},Object(r.b)(a.a,{placeholder:"Type here!",plugins:[Object(l.a)(),Object(s.a)()],mdxType:"RicosEditor"})),Object(r.b)("p",null,"There you go! A rich content editor with plugins. Now go ahead and add some more plugins!"))}m.isMDXComponent=!0},200:function(e){e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://wix-rich-content/video-content-data-schema.json","type":"object","properties":{"src":{"oneOf":[{"$id":"/properties/src","type":"string","title":"Video Source URL","examples":["https://www.youtube.com/watch?v=eqZVIiD6wSg"]},{"$id":"/properties/src","type":"object","properties":{"pathname":{"$id":"/properties/src/pathname","type":"string","title":"Video Source Pathname","examples":["video-sample/jellyfish-25-mbps-hd-hevc.mp4"]},"thumbnail":{"$id":"/properties/src/thumbnail","type":"object","properties":{"pathname":{"$id":"/properties/src/thumbnail/pathname","type":"string","title":"Video Thumbnail Pathname","examples":["media/441c23_84f5c058e5e4479ab9e626cd5560a21bf002.jpg"]},"height":{"$id":"/properties/src/thumbnail/height","type":"integer","title":"Video Thumbnail Height","examples":[1080]},"width":{"$id":"/properties/src/thumbnail/width","type":"integer","title":"Video Thumbnail Width","examples":[1920]}}}}}]},"isCustomVideo":{"$id":"/properties/isCustomVideo","type":"boolean","title":"Is Custom Video","default":false},"config":{"$id":"/properties/config","type":"object","title":"configuration","properties":{"size":{"$id":"/properties/config/properties/size","enum":["content","small","fullWidth"],"title":"Size","default":"large","examples":["content","small","fullWidth"]},"alignment":{"$id":"/properties/config/properties/alignment","enum":["left","right","center"],"title":"Alignment","default":"center","examples":["left","right","center"]},"textWrap":{"$id":"/properties/config/properties/textWrap","type":"string","title":"Text Wrap","default":"nowrap","examples":["nowrap"]}}}},"required":["src"]}')},224:function(e){e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://wix-rich-content/divider-content-data-schema.json","type":"object","properties":{"type":{"enum":["double","single","dashed","dotted"],"title":"divider type","examples":["double","single","dashed","dotted"]},"config":{"type":"object","title":"configuration","properties":{"size":{"$id":"/properties/config/properties/size","enum":["medium","small","large"],"title":"size","examples":["medium","small","large"]},"alignment":{"enum":["left","right","center"],"title":"alignment","examples":["left","right","center"]},"textWrap":{"type":"string","title":"text wrap style","examples":["nowrap"]}}}},"required":["type"]}')},301:function(e,t,i){"use strict";i.d(t,"a",(function(){return F}));var o=i(145),n=i(135),r=i(0),a=i.n(r),l=i(131),s=i(247),d=i.n(s),c=i(138),p=i.n(c),u=i(22),m=i.n(u),h=i(132),v=i(157),f=i.n(v),b=i(200),y=function(){return(y=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},g=function(e){return a.a.createElement("svg",y({xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 19 19",width:"19",height:"19"},e),a.a.createElement("defs",null,a.a.createElement("path",{id:"video-icon-path",d:"M14 7l2.842-1.421A.8.8 0 0 1 18 6.294v6.412a.8.8 0 0 1-1.158.715L14 12v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2zm0 3.9l2.708 1.354a.2.2 0 0 0 .29-.179V6.922a.2.2 0 0 0-.29-.178L14 8.098V10.9zM2 5v9h11V5H2z"})),a.a.createElement("g",{fillRule:"evenodd"},a.a.createElement("mask",{id:"video-icon-mask"},a.a.createElement("use",{xlinkHref:"#video-icon-path"})),a.a.createElement("use",{fillRule:"nonzero",xlinkHref:"#video-icon-path"})))},_=function(e){return a.a.createElement("svg",y({xmlnsXlink:"http://www.w3.org/1999/xlink",width:19,height:19,viewBox:"0 0 19 19"},e),a.a.createElement("defs",null,a.a.createElement("path",{id:"replace-path",d:"M3 7.8V3.2c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2v2.592A6.607 6.607 0 0 1 9.412 3C13.05 3 16 5.91 16 9.5c0 .168-.006.335-.02.5h-1.016a5.51 5.51 0 0 0 .022-.5c0-3.038-2.495-5.5-5.574-5.5a5.583 5.583 0 0 0-4.967 3H7.8c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H3.2a.2.2 0 0 1-.2-.2zm13 3.4v4.6a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2v-2.592A6.607 6.607 0 0 1 9.588 16C5.95 16 3 13.09 3 9.5c0-.168.006-.335.02-.5h1.016a5.496 5.496 0 0 0-.022.5c0 3.038 2.495 5.5 5.574 5.5a5.583 5.583 0 0 0 4.967-3H11.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2h4.6c.11 0 .2.09.2.2z"})),a.a.createElement("g",{fillRule:"evenodd"},a.a.createElement("mask",{id:"replace-mask"},a.a.createElement("use",{xlinkHref:"#replace-path"})),a.a.createElement("use",{fillRule:"nonzero",xlinkHref:"#replace-path"})))},O=function(e,t){return function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},t.apply(this,arguments)}e.exports=t}(t={exports:{}}),t.exports}(),E=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t},w={video_modal_container_big:"VCtav",video_modal_container_small:"k3Cxo",video_modal_closeIcon:"dYNr5",video_modal_errorIcon:"_2QlJF",video_modal_header:"_3vwK9",video_modal_header_text:"_2-OZV",video_modal_textInput_customWidth:"_2SmiS",video_modal_textInput_fullWidth:"tG98t",video_modal_add_a_Video:"_2zSwk",video_modal_or_upload_video_from:"_3bpo3",video_modal_upload_video:"_1vAf7",video_modal_add_button_inline:"_3x2Ul",video_modal_add_button_inMiddle:"_3uXpu",textInput_input:"LHmk3",textInput_input_invalid:"_2zbXV",fileInput:"_34TOP",fileInputLabel:"_37xN4"},x="wix-draft-plugin-video",k=function(e){function t(t){var i;(i=e.call(this,t)||this).onUrlChange=function(e){return i.setState({url:e,showError:!1})},i.onUrlVideoSelection=function(){var e,t=i.props,o=t.componentData,n=t.helpers,r=i.state.url,a=(void 0===r?"":r).trim();if(Object(l.M)(a)&&d.a.canPlay(a)){var s=O({},o,{tempData:!1,src:a});i.onConfirm(s),null==n||null===(e=n.onVideoSelected)||void 0===e||e.call(n,a,(function(e){return setTimeout((function(){return i.updateComponentData(O({},s,{metadata:e}))}))}),0),i.closeModal()}else i.setState({showError:!0})},i.onUrlInputDoubleClick=function(){i.setState({url:"https://www.youtube.com/watch?v=vzKryaN44ss"})},i.closeModal=function(){i.setState({isOpen:!1}),i.props.helpers.closeModal()},i.handleKeyPress=function(e){e.charCode===n.w.ENTER&&i.onUrlVideoSelection()},i.loadLocalVideo=function(e){var t=URL.createObjectURL(e),o=i.props.componentData;i.onConfirm(O({},o,{src:t,isCustomVideo:!0,tempData:!0}))},i.handleError=function(e){e&&i.props.commonPubsub.set("onMediaUploadError",e)},i.updateVideoComponent=function(e,t,o,n){var r=e.data,a=e.error;void 0===n&&(n=!1);var l=r.pathname,s=r.thumbnail,d=r.url,c=l?{pathname:l,thumbnail:s}:d;t&&i.props.helpers.onMediaUploadEnd(t,a),i.setComponentData(O({},o,{src:c,error:a,isCustomVideo:n,tempData:!1})),i.handleError(a)},i.addVideoComponent=function(e,t,o){var n=e.data,r=e.error;void 0===o&&(o=!1);var a=n.pathname,l=n.thumbnail,s=n.url,d=a?{pathname:a,thumbnail:l}:s;i.onConfirm(O({},t,{src:d,error:r,isCustomVideo:o})),i.handleError(r)},i.setComponentData=function(e){i.props.pubsub.set("componentData",e,i.blockKey)},i.updateComponentData=function(e){i.props.pubsub.update("componentData",e,i.blockKey)},i.handleNativeFileUpload=function(){var e,t=i.props,o=t.componentData,n=t.handleFileUpload,r=i.inputFile.files[0];i.loadLocalVideo(r);var a=null===(e=i.props.helpers)||void 0===e?void 0:e.onMediaUploadStart(x,r.size,"video");n(r,(function(e){var t=e.data,n=e.error;i.updateVideoComponent({data:t,error:n},a,o,!0)})),i.closeModal()},i.styles=Object(l.O)({styles:w,theme:t.theme});var o=i.props.componentData;i.state={url:!o.isCustomVideo&&o.src||""},i.id="VideoUploadModal_FileInput_"+Math.floor(9999*Math.random());var r=t.onConfirm,a=t.onReplace;return i.blockKey=i.getFocusedBlockKey(),i.onConfirm=function(e){if(r){var t=r(e).newBlock;i.blockKey=t.key}else a(e,i.blockKey)},i}E(t,e);var i=t.prototype;return i.getFocusedBlockKey=function(){return this.props.pubsub.get("focusedBlock")},i.componentDidMount=function(){this.input.focus(),this.input.setSelectionRange(0,this.input.value.length)},i.render=function(){var e,t=this,i=this.state,n=i.url,r=i.showError,l=this.props,s=l.t,d=l.handleFileSelection,c=l.handleFileUpload,p=l.enableCustomUploadOnMobile,u=l.isMobile,m=l.languageDir,h=l.componentData,v=l.theme,f=this.styles,b=c||d;d&&(e=function(e){return e.preventDefault(),d((function(e){var i=e.data,o=e.error;t.addVideoComponent({data:i,error:o},h,!0),t.closeModal()}))});var y=a.a.createElement("div",null,a.a.createElement("div",{className:f.video_modal_or_upload_video_from},s("VideoUploadModal_CustomVideoHeader")),a.a.createElement("div",{className:f.video_modal_upload_video},a.a.createElement("input",{id:this.id,type:"file",accept:"video/*",className:f.fileInput,ref:function(e){return t.inputFile=e},onClick:e,onChange:this.handleNativeFileUpload}),a.a.createElement("label",{htmlFor:this.id,className:f.fileInputLabel,role:"button","data-hook":"videoUploadModalCustomVideo",tabIndex:0},"+ ",s("VideoUploadModal_CustomVideoClickText"))));return a.a.createElement("div",{dir:m},a.a.createElement("div",{className:f["video_modal_container_"+(b?"big":"small")],"data-hook":"videoUploadModal"},a.a.createElement(o.d,{className:f.video_modal_closeIcon,onClick:function(){return t.closeModal()}}),a.a.createElement("h2",{className:f.video_modal_add_a_Video},s("VideoUploadModal_Title")),a.a.createElement("div",{role:"heading","aria-level":3,"aria-labelledby":"video_modal_hdr",className:f.video_modal_header},a.a.createElement("h3",{id:"video_modal_hdr",className:f.video_modal_header_text},s("VideoUploadModal_Header"))),a.a.createElement("div",null,a.a.createElement("div",{className:f["video_modal_textInput_"+(b?"customWidth":"fullWidth")]},a.a.createElement(o.D,{inputRef:function(e){t.input=e},type:"url",onKeyPress:this.handleKeyPress,onChange:this.onUrlChange,onDoubleClick:this.onUrlInputDoubleClick,value:n,error:r?s("VideoUploadModal_Input_InvalidUrl"):null,placeholder:s("VideoUploadModal_Input_Placeholder"),theme:f,"data-hook":"videoUploadModalInput"})),a.a.createElement(o.c,{className:f["video_modal_add_button_"+(b?"inline":"inMiddle")],onClick:this.onUrlVideoSelection,ariaProps:!this.state.url&&{disabled:"disabled"},dataHook:"videoUploadModalAddButton",theme:O({},f,v)},s("VideoUploadModal_AddButtonText"))),(!u||p)&&b&&y))},t}(r.Component),D={content:{maxWidth:"580px",minHeight:"260px"}},M={content:{maxWidth:"580px",minHeight:"378px"}},N=function(e){var t,i,r=e.t,a=e.settings,l=e.isMobile,s=(null===(i=null===(t=null==a?void 0:a.toolbar)||void 0===t?void 0:t.icons)||void 0===i?void 0:i.replace)||_,d=l&&!a.enableCustomUploadOnMobile||!a.handleFileSelection&&!a.handleFileUpload?D:M,c=a.spoiler?[{keyName:"spoiler",type:o.b.SPOILER,mobile:!0}]:[];return function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<i;t++)for(var r=arguments[t],a=0,l=r.length;a<l;a++,n++)o[n]=r[a];return o}([{keyName:"sizeSmallCenter",type:o.b.SIZE_SMALL_CENTER,mobile:!1},{keyName:"sizeContent",type:o.b.SIZE_CONTENT,mobile:!1},{keyName:"sizeFullWidth",type:o.b.SIZE_FULL_WIDTH,mobile:!1},{keyName:"separator1",type:o.b.SEPARATOR,mobile:!1},{keyName:"sizeSmallLeft",type:o.b.SIZE_SMALL_LEFT,mobile:!1},{keyName:"sizeSimallRight",type:o.b.SIZE_SMALL_RIGHT,mobile:!1},{keyName:"separator2",type:o.b.SEPARATOR,mobile:!1}],c,[{keyName:"replace",type:o.b.EXTERNAL_MODAL,icon:s,modalElement:Object(n.R)(k,y({},a)),modalStyles:Object(n.ib)({customStyles:d,fullScreen:!1,isMobile:l}),mobile:!0,tooltipTextKey:"ReplaceVideoButton_Tooltip",t:r},{keyName:"delete",type:o.b.DELETE,mobile:!0}])},j=function(e){function t(t){var i;return(i=e.call(this,t)||this).isVimeoAndRequireJS=function(){return!Object(l.L)()&&(e=i.props.url,!/vimeo\.com\/external\/[0-9]+\..+/.test(e)&&/vimeo\.com\/.+/.test(e))&&!window.Vimeo&&window.requirejs;var e},i.state={vimeoLoaded:!1,isPlaying:!1},i}E(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.isVimeoAndRequireJS()&&window.require(["https://player.vimeo.com/api/player.js"],(function(t){window.Vimeo={Player:t},e.setState({vimeoLoaded:!0})}))},i.render=function(){var e=this;if(!this.state.vimeoLoaded&&this.isVimeoAndRequireJS())return null;var t=this.props,i=t.isPlayable,o=t.styles,n=t.disabled;return a.a.createElement(d.a,O({playing:this.state.isPlaying&&!n,onPlay:function(){return e.setState({isPlaying:!0})},onPause:function(){return e.setState({isPlaying:!1})},style:o},this.props,{light:!i}))},t}(r.Component);j.defaultProps={isPlayable:!0};var C=function(e,t){if(void 0===t&&(t={}),"object"==typeof e){if(t&&t.getVideoUrl)return t.getVideoUrl(e);console.error("must set getVideoUrl in plugin config when using custom video source!",e)}return e},S={video_player:"o56NN",videoOverlay:"yX8uB",video_container:"F25pT"},P=function(e){function t(t){var i;(i=e.call(this,t)||this).setUrl=function(e){var t,o,n=i.normalizeUrl(e);n!==i.state.url&&(i.setState({url:n}),null===(t=(o=i.props).onReload)||void 0===t||t.call(o))},i.normalizeUrl=function(e){return 0===e.toLowerCase().indexOf("vimeo")?"https://"+e:e},i.findFormalVideoRatio=function(e){var t,i=[1,5/4,4/3,1.5,1.6,16/9,1.85,2,2.35,2.39,3],o=[].concat(i,i.map((function(e){return 1/e}))),n=(t=e,o.reduce((function(e,i){return Math.abs(i-t)<Math.abs(e-t)?i:e})));return Math.abs(n-e)>.01?e:n},i.getVideoRatio=function(e){var t=e.querySelector("iframe, video");return i.findFormalVideoRatio(t.clientHeight/t.clientWidth)},i.onReactPlayerReady=function(){var e,t,o=m.a.findDOMNode(f()(i)).parentNode,n=i.getVideoRatio(o);o.style["padding-bottom"]=100*n+"%",i.props.isLoaded||(null===(e=(t=i.props).onReady)||void 0===e?void 0:e.call(t))||i.setState({isLoaded:!0})},i.handleContextMenu=function(e){return i.props.disableRightClick&&e.preventDefault()},Object(l.V)(t.componentData,b),i.state={url:void 0,isLoaded:!1};var o=C(t.componentData.src,t.settings);return"string"==typeof o?i.state={url:i.normalizeUrl(o)}:o&&"function"==typeof o.then&&o.then((function(e){return i.setState({url:i.normalizeUrl(e)})})),i}E(t,e);var i=t.prototype;return i.componentWillReceiveProps=function(e){var t=this;if(!Object(h.isEqual)(e.componentData,this.props.componentData)&&(Object(l.V)(e.componentData,b),e.componentData.src!==this.props.componentData.src)){var i=C(e.componentData.src,e.settings);"string"==typeof i?this.setUrl(i):i&&"function"==typeof i.then&&i.then((function(e){return t.setUrl(e)}))}},i.componentDidMount=function(){this.setState({key:"mounted"})},i.render=function(){var e=this.props,t=e.theme,i=e.width,o=e.height,n=e.disabled,r=e.setComponentUrl,s=e.settings.disableDownload,d=void 0!==s&&s;this.styles=this.styles||Object(l.O)({styles:S,theme:t});var c=this.state,u=c.url,m=c.key;null==r||r(u);var h=O({url:u,onReady:this.onReactPlayerReady,disabled:n,width:i,height:o,key:m},d&&{config:{file:{attributes:{controlsList:"nodownload"}}}}),v=this.props.isLoaded||this.state.isLoaded;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,O({className:p()(this.styles.video_player),onContextMenu:this.handleContextMenu,"data-loaded":v,controls:!1!==this.props.isLoaded},h)))},t}(r.Component);P.defaultProps={width:"100%",height:"100%"};var V={video_player:"BANNx",videoOverlay:"VtPOJ",video_container:"_3S6M7",video_overlay:"_1zQca",error:"_1fo62"},R=Object.freeze({config:{size:"content",alignment:"center"}}),I=function(e){function t(t){var i;(i=e.call(this,t)||this).setPlayer=function(e){i.player=e},i.handleReady=function(){i.state.isLoaded||i.props.componentData.tempData||i.setState({isLoaded:!0})},i.renderOverlay=function(e){return a.a.createElement("div",{className:p()(e.video_overlay)})},i.renderLoader=function(){var e=Object(h.get)(i.props,"componentData.isCustomVideo");return a.a.createElement("div",{className:i.styles.videoOverlay},a.a.createElement(o.k,{type:"medium",isVerySlowFakeLoader:e}))},i.onReload=function(){i.setState({isLoaded:!1})},i.renderPlayer=function(){var e=i.props,t=e.theme,o=e.componentData,n=e.disabled,r=e.disableRightClick,l=e.settings,s=e.setComponentUrl;return a.a.createElement(P,{ref:i.setPlayer,componentData:o,settings:l,onReady:i.handleReady,disabled:n,disableRightClick:r,theme:t,setComponentUrl:s,onReload:i.onReload,isLoaded:i.state.isLoaded})},i.onKeyDown=function(e,t){"Enter"!==e.key&&" "!==e.key||t()};var n=!t.blockProps;return i.state={isLoaded:!1,isPlayable:n},i}E(t,e);var i=t.prototype;return i.componentDidMount=function(){this.handlePlayerFocus()},i.componentDidUpdate=function(){this.handlePlayerFocus()},i.handlePlayerFocus=function(){var e=Object(u.findDOMNode)(this).querySelector("iframe, video");e&&(e.tabIndex=-1)},i.render=function(){var e=this;this.styles=this.styles||Object(l.O)({styles:V,theme:this.props.theme});var t=this.props,i=t.className,n=t.onClick,r=t.t,s=t.componentData.error,d=this.state,c=d.isPlayable,u=d.isLoaded,m=p()(this.styles.video_container,i||"");return a.a.createElement("div",{"data-hook":"videoPlayer",onClick:n,className:m,onKeyDown:function(t){return e.onKeyDown(t,n)},draggable:!0},!c&&this.renderOverlay(this.styles,this.props.t),this.renderPlayer(),!u&&!s&&this.renderLoader(),s&&a.a.createElement(o.l,{error:s,t:r}))},t}(a.a.Component);I.type={VIDEO_TYPE_LEGACY:"VIDEO-EMBED",VIDEO_TYPE:x};var T,L=function(e){var t,i,o=e.t,r=e.settings,a=e.isMobile,l=(null===(i=null===(t=null==r?void 0:r.toolbar)||void 0===t?void 0:t.icons)||void 0===i?void 0:i.InsertPluginButtonIcon)||g,s=a&&!r.enableCustomUploadOnMobile||!r.handleFileSelection&&!r.handleFileUpload?D:M;return[{type:n.e.MODAL,name:n.t.VIDEO,tooltip:o("VideoPlugin_InsertButton_Tooltip"),getIcon:function(){return l},componentData:R,toolbars:[n.K.INSERT_PLUGIN,n.K.MOBILE,n.K.FOOTER,n.K.SIDE],modalElement:Object(n.R)(k,r),modalStyles:Object(n.ib)({customStyles:s,fullScreen:!1,isMobile:a})}]},U=function(e){var t=e.t,i=e.settings,o=e.isMobile;return{InlineButtons:N({t:t,settings:i,isMobile:o}),InsertButtons:L({t:t,settings:i,isMobile:o}),name:"video"}},z=function(e){var t,i=e,n=i.helpers,r=i.t,a=x,l=i[a],s=void 0===l?{}:l,d=i.isMobile,c=i.spoilerWrapper,p=i.commonPubsub,u=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(i,["helpers","t",a+"","isMobile","spoilerWrapper","commonPubsub"]);return Object(o.F)(y({component:I,type:x,legacyType:"VIDEO-EMBED",toolbar:U({t:r,settings:y(y({},s),{commonPubsub:p}),isMobile:d}),helpers:n,settings:s,t:r,isMobile:d,disableRightClick:null===(t=null==e?void 0:e.uiSettings)||void 0===t?void 0:t.disableRightClick,defaultPluginData:R,spoilerWrapper:s.spoiler&&c,commonPubsub:p},u))},A=((T={})["video-selection-input"]=k,T),B={toolbar:{hidden:[]}},F=function(e){return{config:y(y({},B),e),type:x,createPlugin:z,ModalsMap:A}}},310:function(e,t,i){"use strict";i.d(t,"a",(function(){return B}));var o=i(131),n=i(145),r=i(0),a=i.n(r),l=i(138),s=i.n(l),d=i(224),c=i(132),p=i(135),u=function(){return(u=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},m=Object.freeze(["single","double","dashed","dotted"]),h=Object.freeze(["large","medium","small"]),v=["left","center","right"],f=Object.freeze({type:"single",config:{size:"large",alignment:"center",textWrap:"nowrap"}}),b="wix-draft-plugin-divider",y=function(e,t){return e[(e.indexOf(t)+1)%e.length]},g=function(e){var t=this,i=void 0===e?{}:e,o=i.type,n=i.config;this.getNextAlignmentConfig=function(){var e,i=y(v,null===(e=t.config)||void 0===e?void 0:e.alignment);return u(u({},t.config),{alignment:i})},this.getNextSizeConfig=function(){var e,i=y(h,null===(e=t.config)||void 0===e?void 0:e.size);return u(u({},t.config),{size:i})},this.isAlignmentDisabled=function(){return"large"===t.size},this.type=o||f.type,this.config=u(u({},f.config),n),this.size=this.config.size,this.alignment=this.config.alignment},_=function(e,t){return function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},t.apply(this,arguments)}e.exports=t}(t={exports:{}}),t.exports}(),O=function(e,t){return void 0===t&&(t=1),{x2:e,y1:t,y2:t}},E=function(e){var t=e.type,i=e.size,o=e.alignment,n=e.width,r=e.multilineDistance,l=e.styles,d=e.className,c=e.fillParent,p=e.isMobile,u=function(e,t,i){void 0===i&&(i=7);var o=[O(t)];return"double"===e&&o.push(O(t,i)),o}(t,n,r),m=s()(l.divider,l["divider--"+t],l["divider--"+i+(p?"--mobile":"")],l["divider--"+o],c?l["divider--fill-parent"]:"",d);return a.a.createElement("svg",{className:m},u.map((function(e,t){return a.a.createElement("line",_({key:t},e))})))},w={"divider-container":"_2NwBk","divider-container--double":"_16HTx",divider:"_1eeNQ","divider--single":"_2R86a","divider--double":"_3EMsO","divider--dashed":"_3t7GA","divider--dotted":"_23vFV","divider--small":"_1g4Bt","divider--small--mobile":"_3Ry7y","divider--medium":"_2Cqkx","divider--large--mobile":"_2eR-U","divider--medium--mobile":"_2T2Yh","divider--large":"_2ZP6T","divider--left":"_3jlZr","divider--center":"_3DZBf","divider--right":"_9gZCp","divider--fill-parent":"_1JOa_"},x=function(e){function t(t){var i;return i=e.call(this,t)||this,Object(o.V)(t.componentData,d),i}var i,n;n=e,(i=t).prototype=Object.create(n.prototype),i.prototype.constructor=i,i.__proto__=n;var r=t.prototype;return r.componentWillReceiveProps=function(e){Object(c.isEqual)(e.componentData,this.props.componentData)||Object(o.V)(e.componentData,d)},r.render=function(){var e,t;this.styles=this.styles||Object(o.O)({styles:w,theme:this.props.theme});var i=null===(e=(t=this.props).getEditorBounds)||void 0===e?void 0:e.call(t),n=i&&i.width?i.width:"100%",r=new g(this.props.componentData),l=r.type,d=r.size,c=r.alignment,p=s()(this.styles["divider-container"],this.styles["divider-container--"+l],this.props.isMobile&&this.styles["divider-container--mobile"],this.props.className);return a.a.createElement("div",{className:p,"data-hook":"divider-"+l},a.a.createElement(E,{type:l,width:n,size:d,alignment:c,styles:this.styles,isMobile:this.props.isMobile}))},t}(r.PureComponent),k=function(e){return new g(e.get("componentData"))},D=function(e,t){e.update("componentData",{config:t})},M=function(e,t,i){i.update("componentData",{type:e.value})},N=function(e){var t=e.store,i=k(t);D(t,i.getNextAlignmentConfig())},j=function(e){var t=e.store,i=k(t);D(t,i.getNextSizeConfig())},C=function(e){return void 0===e&&(e={}),new g(e).isAlignmentDisabled()},S=function(e){var t,i=new g(e).size;return(t={},t.large=n.v,t.medium=n.x,t.small=n.u,t)[i]},P=function(e){var t,i=new g(e).alignment;return(t={},t.left=p.b,t.center=n.a,t.right=p.c,t)[i]},V=function(e){var t=e.type,i=e.styles;return function(){return a.a.createElement("div",{className:i["divider-dropdown__option"]},a.a.createElement(E,{type:t,styles:i,width:60,fillParent:!0,multilineDinstance:4,className:i["divider-dropdown__divider"]}))}},R=function(e){return function(t){var i=(t.get("componentData")||{}).type||f.type;return e.find((function(e){return e.value===i}))}},I=function(e){var t,i=e.styles,o=e.t,r=e.settings,a=function(e){return m.map((function(t){return{value:t,component:V({type:t,styles:e})}}))}(i),l=(null===(t=null==r?void 0:r.toolbar)||void 0===t?void 0:t.icons)||{};return[{keyName:"type",type:n.b.DROPDOWN,options:a,onChange:M,getValue:R(a),controlClassName:null==i?void 0:i["divider-dropdown__control"],tooltipTextKey:"DividerPlugin_SelectType_Tooltip",t:o,mobile:!0},{keyName:"separator1",type:n.b.SEPARATOR,mobile:!0},{keyName:"sizeSmall",type:n.b.SIZE_SMALL},{keyName:"sizeMedium",type:n.b.SIZE_MEDIUM},{keyName:"sizeLarge",type:n.b.SIZE_LARGE},{keyName:"sizeMobile",type:n.b.CUSTOM,icon:l.sizeMobile||n.u,onClick:j,mobile:!0,desktop:!1,mapComponentDataToButtonProps:function(e){return{icon:S(e)}}},{keyName:"separator2",type:n.b.SEPARATOR,mobile:!0},{keyName:"alignLeft",type:n.b.TEXT_ALIGN_LEFT,mapComponentDataToButtonProps:function(e){return{disabled:C(e)}}},{keyName:"alignCenter",type:n.b.TEXT_ALIGN_CENTER},{keyName:"alignRight",type:n.b.TEXT_ALIGN_RIGHT,mapComponentDataToButtonProps:function(e){return{disabled:C(e)}}},{keyName:"alignMobile",type:n.b.CUSTOM,icon:l.alignMobile||n.a,onClick:N,mobile:!0,desktop:!1,mapComponentDataToButtonProps:function(e){return{icon:P(e),disabled:C(e)}}},{keyName:"separator3",type:n.b.SEPARATOR,mobile:!0},{keyName:"delete",type:n.b.DELETE,mobile:!0}]},T=function(e){return a.a.createElement("svg",u({width:19,height:19,viewBox:"0 0 19 19"},e),a.a.createElement("path",{fillRule:"evenodd",d:"M16.8 4c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2V5H3v1.8a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2V4.2c0-.11.09-.2.2-.2h14.6zM2.2 15a.2.2 0 0 1-.2-.2v-2.6c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2V14h13v-1.8c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2v2.6a.2.2 0 0 1-.2.2H2.2zm2-6h10.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2H4.2a.2.2 0 0 1-.2-.2v-.6c0-.11.09-.2.2-.2z"}))},L=function(e){var t,i,o=e.t,n=e.settings,r=(null===(i=null===(t=null==n?void 0:n.toolbar)||void 0===t?void 0:t.icons)||void 0===i?void 0:i.InsertPluginButtonIcon)||T;return[{type:p.e.BUTTON,name:p.t.DIVIDER,tooltip:o("DividerPlugin_InsertButton_Tooltip"),toolbars:[p.K.INSERT_PLUGIN,p.K.MOBILE,p.K.FOOTER,p.K.SIDE],getIcon:function(){return r},componentData:f}]},U=function(e){var t=e.settings,i=e.styles,o=e.t;return{InlineButtons:I({styles:i,t:o,settings:t}),InsertButtons:L({t:o,settings:t}),name:"divider"}},z={"divider-container":"_2o3HM","divider-container--double":"_3H9IG",divider:"_3oaVl","divider--single":"pP9fW","divider--double":"_22KGG","divider--dashed":"_3S2Wh","divider--dotted":"_2mCit","divider--small":"_14-KV","divider--small--mobile":"CBP-9","divider--medium":"_1fuVl","divider--large--mobile":"_2qEAT","divider--medium--mobile":"_2xMy8","divider--large":"Y6u3v","divider--center":"_2RK4y","divider--fill-parent":"_13iU4","divider-dropdown__control":"_3Ami8","divider-dropdown__option":"hhcT3","divider-dropdown__divider":"_1cYMA"},A=function(e){var t=b,i=e,r=i.helpers,a=i.theme,l=i.t,s=t,d=i[s],c=void 0===d?{}:d,p=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i}(i,["helpers","theme","t",s+""]),m=Object(o.O)({styles:z,theme:a});return Object(n.F)(u({component:x,settings:c,theme:a,type:t,toolbar:U({settings:c,helpers:r,styles:m,theme:a,t:l}),helpers:r,t:l,defaultPluginData:f},p))},B=function(e){return{config:u(u({},f.config),e),type:b,createPlugin:A,ModalsMap:{}}}}}]);