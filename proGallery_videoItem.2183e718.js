(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{952:function(e,t,i){"use strict";i.r(t);var o=i(153),s=i(0),a=i.n(s),r=i(609),p=i(342),n=i(942),d=function(e){function t(t){var i=e.call(this,t)||this;return i.pause=i.pause.bind(i),i.play=i.play.bind(i),i.playVideoIfNeeded=i.playVideoIfNeeded.bind(i),i.state={playedOnce:!1,playing:!1,reactPlayerLoaded:!1,vimeoPlayerLoaded:!1,hlsPlayerLoaded:!1},i}return Object(o.c)(t,e),t.prototype.componentDidMount=function(){this.dynamiclyImportVideoPlayers()},t.prototype.dynamiclyImportVideoPlayers=function(){var e=this;r.a&&r.a.ReactPlayer||i.e(57).then(i.t.bind(null,922,7)).then((function(t){r.a.ReactPlayer=t.default,e.setState({reactPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.a&&r.a.Vimeo||!this.props.videoUrl||!this.props.videoUrl.includes("vimeo.com")||i.e(60).then(i.bind(null,939)).then((function(t){r.a.Vimeo={Player:t.default},e.setState({vimeoPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.a&&r.a.Hls||!this.isHLSVideo()||i.e(68).then(i.t.bind(null,941,7)).then((function(t){r.a.Hls=t.default,e.setState({hlsPlayerLoaded:!0}),e.playVideoIfNeeded()}))},t.prototype.isHLSVideo=function(){return this.props.videoUrl&&(this.props.videoUrl.includes("/hls")||this.props.videoUrl.includes(".m3u8"))},t.prototype.shouldUseHlsPlayer=function(){return this.isHLSVideo()&&!p.a.isiOS()},t.prototype.shouldForceVideoForHLS=function(){return this.isHLSVideo()&&p.a.isiOS()},t.prototype.UNSAFE_componentWillReceiveProps=function(e){e.playing&&this.setState({playedOnce:!0}),this.playVideoIfNeeded(e)},t.prototype.componentDidUpdate=function(e){e.currentIdx!==this.props.currentIdx&&this.fixIFrameTabIndexIfNeeded(),"image"===e.type&&"video"===this.props.type&&this.dynamiclyImportVideoPlayers(),this.playVideoIfNeeded()},t.prototype.play=function(){this.props.playVideo(this.props.idx)},t.prototype.pause=function(){this.props.pauseVideo()},t.prototype.playVideoIfNeeded=function(e){void 0===e&&(e=this.props);try{e.playingVideoIdx!==this.props.idx||this.isPlaying||(this.videoElement=this.videoElement||r.a.document.querySelector("#video-"+this.props.id+" video"),this.videoElement&&(this.isPlaying=!0,this.videoElement.play(),p.a.isVerbose()&&console.log("[VIDEO] Playing video #"+this.props.idx,this.videoElement)))}catch(t){console.error("[VIDEO] Could not play video #"+this.props.idx,this.videoElement,t)}},t.prototype.createPlayerElement=function(){var e,t=this;if(!r.a||!r.a.ReactPlayer)return null;var i=r.a.ReactPlayer,s=this.props.style.ratio>=this.props.cubeRatio,p={width:s?"100%":"auto",height:s?"auto":"100%"};this.props.styleParams.cubeImages&&"fill"===this.props.styleParams.cubeType&&(e=[p.height,p.width],p.width=e[0],p.height=e[1],p.position="absolute",p.margin="auto",p.minHeight="100%",p.minWidth="100%",p.left="-100%",p.right="-100%",p.top="-100%",p.bottom="-100%");var d=this.props.videoUrl?this.props.videoUrl:this.props.createUrl(n.a.urlSizes.RESIZED,n.a.urlTypes.VIDEO);return a.a.createElement(i,{className:"gallery-item-visible video gallery-item",id:"video-"+this.props.id,width:"100%",height:"100%",url:d,alt:this.props.alt?this.props.alt:"untitled video",loop:!!this.props.styleParams.videoLoop,ref:function(e){return t.video=e},volume:this.props.styleParams.videoSound?.8:0,playing:this.props.playing,onEnded:function(){t.setState({playing:!1}),t.props.actions.eventsListener(n.a.events.VIDEO_ENDED,t.props)},onPause:function(){t.setState({playing:!1})},onError:function(e){t.props.actions.eventsListener(n.a.events.VIDEO_ERROR,Object(o.a)(Object(o.a)({},t.props),{videoError:e}))},playbackRate:Number(this.props.styleParams.videoSpeed)||1,onPlay:function(){t.props.actions.eventsListener(n.a.events.VIDEO_PLAYED,t.props),t.setState({playing:!0})},onReady:function(){t.playVideoIfNeeded(),t.fixIFrameTabIndexIfNeeded(),t.props.actions.setItemLoaded(),t.setState({ready:!0})},config:{file:{attributes:{muted:!this.props.styleParams.videoSound,preload:"metadata",poster:this.props.createUrl(n.a.urlSizes.RESIZED,n.a.urlTypes.HIGH_RES),style:p,type:"video/mp4"},forceHLS:this.shouldUseHlsPlayer(),forceVideo:this.shouldForceVideoForHLS()}},key:"video-"+this.props.id})},t.prototype.fixIFrameTabIndexIfNeeded=function(){if(this.props.isExternalVideo){var e=r.a.document&&r.a.document.getElementById("video-"+this.props.id),t=e&&e.getElementsByTagName("iframe"),i=t&&t[0];i&&(this.props.currentIdx===this.props.idx?i.setAttribute("tabIndex","0"):i.setAttribute("tabIndex","-1"))}},t.prototype.render=function(){var e=this.props.hover,t="gallery-item-content gallery-item-visible gallery-item-preloaded gallery-item-video gallery-item video-item"+(p.a.isiPhone()?" ios":"");this.state.playing&&(t+=" playing");var i=a.a.createElement("div",{className:"pro-circle-preloader",key:"video-preloader-"+this.props.idx}),s=this.props.imageDimensions||{},r=(s.marginLeft,s.marginTop,Object(o.e)(s,["marginLeft","marginTop"])),d=a.a.createElement("div",{className:t+" animated fadeIn ","data-hook":"video_container-video-player-element",key:"video_container-"+this.props.id,style:p.a.deviceHasMemoryIssues()||this.state.ready?{backgroundColor:"black"}:Object(o.a)({backgroundImage:"url("+this.props.createUrl(n.a.urlSizes.RESIZED,n.a.urlTypes.HIGH_RES)+")"},r)},this.createPlayerElement(),this.props.videoControls,i);return a.a.createElement("div",{key:"video-and-hover-container"+this.props.idx},[d,e])},t}(i(235).a);t.default=d}}]);