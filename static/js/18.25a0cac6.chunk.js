(this["webpackJsonp@pietrop/digital-paper-edit-client"]=this["webpackJsonp@pietrop/digital-paper-edit-client"]||[]).push([[18],{112:function(t,e,r){(function(t){function r(t,e){for(var r=0,a=t.length-1;a>=0;a--){var n=t[a];"."===n?t.splice(a,1):".."===n?(t.splice(a,1),r++):r&&(t.splice(a,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function a(t,e){if(t.filter)return t.filter(e);for(var r=[],a=0;a<t.length;a++)e(t[a],a,t)&&r.push(t[a]);return r}e.resolve=function(){for(var e="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var s=i>=0?arguments[i]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,n="/"===s.charAt(0))}return(n?"/":"")+(e=r(a(e.split("/"),(function(t){return!!t})),!n).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),s="/"===n(t,-1);return(t=r(a(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&s&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function a(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var n=a(t.split("/")),i=a(r.split("/")),s=Math.min(n.length,i.length),c=s,l=0;l<s;l++)if(n[l]!==i[l]){c=l;break}var o=[];for(l=c;l<n.length;l++)o.push("..");return(o=o.concat(i.slice(c))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,a=-1,n=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!n){a=i;break}}else n=!1;return-1===a?r?"/":".":r&&1===a?"/":t.slice(0,a)},e.basename=function(t,e){var r=function(t){"string"!==typeof t&&(t+="");var e,r=0,a=-1,n=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!n){r=e+1;break}}else-1===a&&(n=!1,a=e+1);return-1===a?"":t.slice(r,a)}(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,r=0,a=-1,n=!0,i=0,s=t.length-1;s>=0;--s){var c=t.charCodeAt(s);if(47!==c)-1===a&&(n=!1,a=s+1),46===c?-1===e?e=s:1!==i&&(i=1):-1!==e&&(i=-1);else if(!n){r=s+1;break}}return-1===e||-1===a||0===i||1===i&&e===a-1&&e===r+1?"":t.slice(e,a)};var n="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(105))},526:function(t,e,r){"use strict";r.r(e);var a=r(15),n=r(16),i=r(18),s=r(17),c=r(19),l=r(0),o=r.n(l),p=r(112),u=r.n(p),m=r(21),f=r(27),h=r(87),d=r(10),g=r(127),v=r(97),b=r(29),E=r(82),j=o.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(17)]).then(r.bind(null,157))})),T=function(t){function e(t){var r;return Object(a.a)(this,e),(r=Object(i.a)(this,Object(s.a)(e).call(this,t))).componentDidMount=function(){v.a.getTranscript(r.state.projectId,r.state.transcriptId).then((function(t){console.log("json",t),r.setState({projectTitle:t.projectTitle,transcriptTitle:t.transcriptTitle,transcriptJson:t.transcript,url:t.url,clipName:t.clipName})}))},r.handleSave=function(t){console.log("handleSave",t);var e=t;e.title=r.state.transcriptTitle,e.transcriptTitle=r.state.transcriptTitle;v.a.updateTranscript(r.state.projectId,r.state.transcriptId,!1,e).then((function(t){console.log("ApiWrapper.updateTranscript",t),t.ok&&(console.log("updated"),r.setState({savedNotification:o.a.createElement("small",{className:"text-success"},"Transcript: ",o.a.createElement("b",null,r.state.transcriptTitle)," has been saved at ",o.a.createElement("b",null,(new Date).toLocaleString()))}))})).catch((function(t){console.error("error saving transcript:: ",t),r.setState({savedNotification:o.a.createElement(b.a,{dismissable:!0,variant:"danger",heading:"Error saving transcript",message:o.a.createElement("p",null,"There was an error trying to save this transcript: ",o.a.createElement("b",null,r.state.transcriptTitle))})})}))},r.redirectToAnnotatePage=function(){r.setState({redirect:!0})},r.renderRedirect=function(){if(r.state.redirect)return o.a.createElement(d.c,{to:"/projects/".concat(r.state.projectId,"/transcripts/").concat(r.state.newTranscriptId,"/annotate")})},r.state={projectId:r.props.match.params.projectId,transcriptId:r.props.match.params.transcriptId,transcriptJson:null,url:null,projectTitle:"",transcriptTitle:"",savedNotification:null},r.transcriptEditorRef=o.a.createRef(),r}return Object(c.a)(e,t),Object(n.a)(e,[{key:"render",value:function(){var t="video";return".wav"!==u.a.extname(this.state.clipName)&&".mp3"!==u.a.extname(this.state.clipName)&&".m4a"!==u.a.extname(this.state.clipName)&&".flac"!==u.a.extname(this.state.clipName)&&".aiff"!==u.a.extname(this.state.clipName)||(t="audio"),o.a.createElement(o.a.Fragment,null,this.renderRedirect(),o.a.createElement(m.a,{style:{backgroundColor:"#eee"},fluid:!0},o.a.createElement("br",null),o.a.createElement(f.a,null,o.a.createElement(h.a,{sm:12,md:12,ld:12,xl:12,style:{marginBottom:"0"}},o.a.createElement(g.a,{backgroundColor:"transparent",items:[{name:"Projects",link:"/projects"},{name:"Project: ".concat(this.state.projectTitle),link:"/projects/".concat(this.state.projectId)},{name:"Transcripts"},{name:"".concat(this.state.transcriptTitle)}]}))),this.state.savedNotification,null!==this.state.transcriptJson&&o.a.createElement(l.Suspense,{fallback:o.a.createElement(m.a,{fluid:!0},o.a.createElement(f.a,null,o.a.createElement(h.a,{xs:12,sm:3,md:3,lg:3,xl:3},o.a.createElement(E.a,{variant:"rect",width:"100%",height:100})),o.a.createElement(h.a,{xs:12,sm:8,md:8,lg:8,xl:8},o.a.createElement(E.a,{variant:"rect",width:"100%",height:600})),o.a.createElement(h.a,{xs:12,sm:1,md:1,lg:1,xl:1},o.a.createElement(E.a,{variant:"rect",width:"100%",height:350}))))},o.a.createElement(j,{transcriptData:this.state.transcriptJson,mediaUrl:this.state.url,isEditable:!0,title:this.state.transcriptTitle,mediaType:t,autoSaveContentType:"digitalpaperedit",handleSaveEditor:this.handleSave}))))}}]),e}(l.Component);e.default=T}}]);
//# sourceMappingURL=18.25a0cac6.chunk.js.map