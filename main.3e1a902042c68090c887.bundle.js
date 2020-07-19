(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{412:function(module,exports,__webpack_require__){__webpack_require__(413),__webpack_require__(560),module.exports=__webpack_require__(561)},47:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(109),react=__webpack_require__(0),react_default=__webpack_require__.n(react),lib=__webpack_require__(97),lib_default=__webpack_require__.n(lib),objectSpread2=__webpack_require__(411),noop=function(){},Volume_MUTED=0,Volume_AUDIBLE=1,ensureAutoPlay=function(player,isAutoPlay){isAutoPlay||player.pause()},ensureVolume=function(player,isMuted){player.setVolume(isMuted?Volume_MUTED:Volume_AUDIBLE)},hasTwitchApiLoaded=function(){var _root$Twitch;return!!(null===lib_default.a||void 0===lib_default.a||null===(_root$Twitch=lib_default.a.Twitch)||void 0===_root$Twitch?void 0:_root$Twitch.Embed)},TwitchEmbedVideo=function(props){var Embed,width=props.width,height=props.height,targetId=props.targetId,targetClass=props.targetClass,containerRef=Object(react.useRef)(),_useTwitchEmbed=function(props){var _useState=Object(react.useState)(),_useState2=Object(slicedToArray.a)(_useState,2),embed=_useState2[0],setEmbed=_useState2[1];return[embed,Object(react.useCallback)((function(){var TwitchEmbed=new lib_default.a.Twitch.Embed(props.targetId,Object(objectSpread2.a)({},props));setEmbed(TwitchEmbed)}),[props])]}(props),_useTwitchEmbed2=Object(slicedToArray.a)(_useTwitchEmbed,2),embed=_useTwitchEmbed2[0],initializeEmbed=_useTwitchEmbed2[1],eventListenerFactory=(Embed=embed,Object(react.useCallback)((function(event,callback){return Embed?(Embed.addEventListener(event,callback),function(){return Embed.removeEventListener(event,callback)}):noop}),[Embed])),onPlayerReady=function(Embed){var _ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},isAutoPlay=_ref.autoplay,isMuted=_ref.muted,onReady=_ref.onReady;return Object(react.useCallback)((function(){if(Embed){var player=Embed.getPlayer();ensureVolume(player,isMuted),ensureAutoPlay(player,isAutoPlay),onReady&&onReady(player)}else console.warn("Player not provided")}),[Embed,isMuted,isAutoPlay,onReady])}(embed,props),onPlayerPlay=function(Embed,_ref){var autoplay=_ref.autoplay,onPlay=_ref.onPlay,_useState=Object(react.useState)(autoplay),_useState2=Object(slicedToArray.a)(_useState,2),shouldForcePlay=_useState2[0],setForcePlay=_useState2[1];return Object(react.useCallback)((function(){if(shouldForcePlay)return onPlay&&onPlay();Embed.getPlayer().pause(),setForcePlay(!0)}),[onPlay,Embed,setForcePlay,shouldForcePlay])}(embed,props);return Object(react.useEffect)((function(){if(hasTwitchApiLoaded()){var _root$Twitch$Embed=lib_default.a.Twitch.Embed,VIDEO_PLAY=_root$Twitch$Embed.VIDEO_PLAY,VIDEO_READY=_root$Twitch$Embed.VIDEO_READY,removeVideoPlayListener=eventListenerFactory(VIDEO_PLAY,onPlayerPlay),removePlayerReadyEventListener=eventListenerFactory(VIDEO_READY,onPlayerReady);return function(){removePlayerReadyEventListener(),removeVideoPlayListener()}}}),[onPlayerReady,eventListenerFactory,onPlayerPlay]),Object(react.useEffect)((function(){var callback,script;(containerRef.current.innerHTML="",hasTwitchApiLoaded())?initializeEmbed():(callback=initializeEmbed,(script=document.createElement("script")).setAttribute("src","https://embed.twitch.tv/embed/v1.js"),script.addEventListener("load",callback),document.body.appendChild(script))}),[initializeEmbed]),react_default.a.createElement("div",{ref:containerRef,style:{width:width,height:height},className:targetClass,id:targetId})};TwitchEmbedVideo.displayName="TwitchEmbedVideo",TwitchEmbedVideo.defaultProps={targetId:"twitch-embed",width:"940",height:"480",autoplay:!0,muted:!1},TwitchEmbedVideo.__docgenInfo={description:"",methods:[],displayName:"TwitchEmbedVideo",props:{targetId:{defaultValue:{value:'"twitch-embed"',computed:!1},type:{name:"string"},required:!1,description:"Custom id to target"},width:{defaultValue:{value:'"940"',computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"Width of video embed including chat"},height:{defaultValue:{value:'"480"',computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"Maximum width of the rendered element, in pixels. This can be expressed as a percentage, by passing a string like 100%"},autoplay:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"If true, the video starts playing automatically, without the user clicking play. The exception is mobile platforms, on which video cannot be played without user interaction. Default: true."},muted:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Specifies whether the initial state of the video is muted. Default: false."},allowfullscreen:{type:{name:"bool"},required:!1,description:"If true, the player can go full screen. Default: true."},channel:{type:{name:"string"},required:!0,description:"Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream."},chat:{type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"mobile"',computed:!1}]},required:!1,description:"Specifies the type of chat to use. Valid values:\ndefault: Default value, uses full-featured chat.\nmobile: Uses a read-only version of chat, optimized for mobile devices.\n\n          To omit chat, specify a value of video for the layout option."},collection:{type:{name:"string"},required:!1,description:"The VOD collection to play. If you use this, you also must specify an initial video in the VOD collection. All VODs are auto-played. Rechat is not supported"},layout:{type:{name:"enum",value:[{value:'"video"',computed:!1},{value:'"video-with-chat"',computed:!1}]},required:!1,description:"Determines the screen layout. Valid values:\n          video-with-chat: Default if channel is provided. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.\nvideo: Default if channel is not provided. Shows only the video player (omits chat)."},onPlay:{type:{name:"func"},required:!1,description:"The video started playing. This callback receives an object with a sessionId property."},onReady:{type:{name:"func"},required:!1,description:"The video player is ready for API commands. This callback receives the player object."},parent:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"If you use the interactive embed, and your site is embedded in other locations, add a parent key to the options object used to configure the embed to indicate which domains your site is embedded on.\nThe value should be a JavaScript array containing any domains which embed your content."},targetClass:{type:{name:"string"},required:!1,description:"Custom class name for div wrapper"},theme:{type:{name:"string"},required:!1,description:"The Twitch embed color theme to use. Valid values: light or dark. Default: light."},video:{type:{name:"string"},required:!0,description:"ID of a VOD to play. Chat replay is not supported."}}};__webpack_exports__.a=react_default.a.memo(TwitchEmbedVideo);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.js"]={name:"TwitchEmbedVideo",docgenInfo:TwitchEmbedVideo.__docgenInfo,path:"src/index.js"})},477:function(module,exports){},561:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(134),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.create)({base:"dark",brandTitle:"React Twitch Embed Video",brandUrl:"https://github.com/talk2MeGooseman/react-twitch-embed-video"}),name:"React Twitch Embed Video",url:"https://github.com/talk2MeGooseman/react-twitch-embed-video",isFullscreen:!1,showNav:!0,showPanel:!0,panelPosition:"bottom",hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/,sidebarAnimations:!0,enableShortcuts:!0,isToolshown:!0,storySort:void 0}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(748)}),module)}.call(this,__webpack_require__(307)(module))},748:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(134),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(255),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(398),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(55),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(47),ignoreArgsAction=Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.decorateAction)([function(){return["callback triggered"]}]),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{width:"500px",height:"400px",channel:"talk2megooseman"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("React Twitch Embed Video",module).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("Choose channel",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Channel","talk2megooseman")})})).add("Choose VOD to play",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{video:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("VOD ID","462014255")})})).add("Custom width and height",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:"talk2megooseman",height:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Height","400"),width:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Width","800")})})).add("Theme: light or dark",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:"talk2megooseman",theme:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Theme",["dark","light"],"dark")})})).add("Layout: with or without chat",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:"talk2megooseman",layout:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Layout",["video-with-chat","video"],"video")})})).add("Choose autoplay",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{video:"462014255",autoplay:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Autoplay",[!0,!1],!1)})})).add("Choose auto mute",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{video:"462014255",muted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("Muted",[!0,!1],!0)})})).add("2 twitch streams and dynamic update knob",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{height:"900px"}},_ref,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{width:"100%",height:"100%",channel:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)("Second Embed Channel","lana_lux"),targetId:"second"}))})).add("with video play callback",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:"talk2megooseman",onPlay:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onVideoPlay")})})).add("with player ready callback",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.a,{channel:"talk2megooseman",onReady:ignoreArgsAction("onPlayerReady")})}))}.call(this,__webpack_require__(307)(module))},763:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":369,"./nestedObjectAssign.js":369};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=763}},[[412,1,2]]]);
//# sourceMappingURL=main.3e1a902042c68090c887.bundle.js.map