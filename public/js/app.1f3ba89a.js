(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"91da":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=r("65d9"),o=r.n(a);o.a.registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]);var i=r("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var s=r("bc3a"),c=r.n(s);c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var u=document.head.querySelector('meta[name="csrf-token"]');u&&(c.a.defaults.headers.common["X-CSRF-TOKEN"]=u.content);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper",attrs:{id:"app"}},[r("loading",{attrs:{"show-loading":e.showLoading}}),r("main",{staticClass:"main-content container text-center"},[r("h2",{staticClass:"vab-litle"},[e._v("氣象局氣象語音答詢系統")]),r("microphone",{on:{"toggle-loading":e.toggleLoading,"receive-olami":e.receiveOlami}}),r("router-view",{attrs:{olami:e.olami},on:{"toggle-loading":e.toggleLoading,"receive-olami":e.receiveOlami}})],1)],1)},d=[],p=r("d225"),f=r("b0b4"),v=r("308d"),h=r("6bb5"),m=r("4e2b"),b=r("9ab4"),g=r("60a3"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showLoading?r("div"):e._e()},w=[],O=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),t}(g["e"]);b["a"]([Object(g["d"])({default:!1})],O.prototype,"showLoading",void 0),O=b["a"]([g["a"]],O);var j=O,_=j,k=(r("fa76"),r("2877")),x=Object(k["a"])(_,y,w,!1,null,"05e9fc34",null);x.options.__file="Loading.vue";var R=x.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vab-microphone"},[r("button",{on:{mousedown:e.startRecording,mouseup:e.stopRecording,touchstart:e.startRecording,touchend:e.stopRecording}},[r("i",{staticClass:"fa fa-microphone",attrs:{"aria-hidden":"true"}})])])},L=[],E=r("795b"),S=r.n(E),M=(r("96cf"),r("3b8d")),T=function(){function e(){Object(p["a"])(this,e)}return Object(f["a"])(e,[{key:"query",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=(new Date).toISOString()+".wav",n=new FormData,n.append("sound",t,r),e.next=5,c()({method:"post",url:"/api/olami/query",data:n,headers:{"Content-Type":"multipart/form-data"}});case 5:return a=e.sent,o=a.data.data.asr.result,i=a.data.data.nli[0].desc_obj.result,e.abrupt("return",{asr:o,nli:i});case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"speech",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()({method:"post",url:"/api/olami/speech",data:{text:t}});case 2:return r=e.sent,e.abrupt("return","".concat(r.data.file_path).concat(r.data.file_name));case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),$=r("59ad"),q=r.n($),P=r("a9ee"),A=r.n(P),D=window.URL||window.webkitURL,N=function(){function e(){Object(p["a"])(this,e)}return Object(f["a"])(e,[{key:"startRecording",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getRecorder();case 2:t=e.sent,t.startRecording();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"stopRecording",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getRecorder();case 2:return t=e.sent,e.abrupt("return",new S.a(function(e){t.stopRecording(function(){e(t.getBlob()),r.recorder=null,r.stream&&(r.stream.stop(),r.stream=null)})}));case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDuration",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new S.a(function(e){var r=document.createElement("audio");r.addEventListener("loadeddata",function(t){e(q()(t.currentTarget.duration)),document.body.removeChild(r)}),r.src=D.createObjectURL(t),r.style.visibility="hidden",r.style.position="absolute",r.style.left="-10000px",r.style.top="0",document.body.appendChild(r)}));case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getMicrophone",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.stream){e.next=2;break}return e.abrupt("return",this.stream);case 2:return e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 4:return e.abrupt("return",this.stream=e.sent);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getRecorder",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.recorder){e.next=2;break}return e.abrupt("return",this.recorder);case 2:return e.t0=A.a,e.next=5,this.getMicrophone();case 5:return e.t1=e.sent,e.t2={type:"audio",recorderType:P["StereoAudioRecorder"],desiredSampRate:16e3,numberOfAudioChannels:1,disableLogs:!0},this.recorder=new e.t0(e.t1,e.t2),e.abrupt("return",this.recorder);case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),U=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"startRecording",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.recorder.startRecording();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"stopRecording",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.toogleLoading(!0),e.next=4,this.recorder.stopRecording();case 4:return t=e.sent,e.next=7,this.recorder.getDuration(t);case 7:if(r=e.sent,!(r<=1||r===1/0)){e.next=10;break}return e.abrupt("return");case 10:return e.t0=this,e.next=13,this.client.query(t);case 13:e.t1=e.sent,e.t0.receiveOlami.call(e.t0,e.t1),e.next=19;break;case 17:e.prev=17,e.t2=e["catch"](0);case 19:return e.prev=19,setTimeout(function(){n.toogleLoading(!1)},200),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,17,19,22]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"toogleLoading",value:function(e){return new S.a(function(t){!1===e?setTimeout(function(){return t(!1)},500):t(!0)})}},{key:"receiveOlami",value:function(e){return e}}]),t}(g["e"]);b["a"]([Object(g["c"])({default:new T})],U.prototype,"client",void 0),b["a"]([Object(g["c"])({default:new N})],U.prototype,"recorder",void 0),b["a"]([Object(g["b"])("toggle-loading")],U.prototype,"stopRecording",null),b["a"]([Object(g["b"])("toggle-loading")],U.prototype,"toogleLoading",null),b["a"]([Object(g["b"])()],U.prototype,"receiveOlami",null),U=b["a"]([g["a"]],U);var F=U,H=F,X=Object(k["a"])(H,C,L,!1,null,null,null);X.options.__file="Microphone.vue";var B=X.exports,J=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.showLoading=!0,e.olami={},e}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"toggleLoading",value:function(e){this.showLoading=e}},{key:"receiveOlami",value:function(e){this.olami=e}},{key:"mounted",value:function(){this.toggleLoading(!1)}}]),t}(g["e"]);J=b["a"]([Object(g["a"])({components:{Loading:R,Microphone:B}})],J);var I=J,K=I,W=Object(k["a"])(K,l,d,!1,null,null,null);W.options.__file="App.vue";var z=W.exports,G=r("8c4f"),Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{action:""}},[r("div",{staticClass:"input-group text-center say-password"},[r("div",{staticClass:"row"},[e._m(0),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"col-md-6 col-md-push-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.olami.asr,expression:"olami.asr"}],staticClass:"form-control vab-input",class:{"input-success":"success"===e.status,"input-failed":"failed"===e.status},attrs:{type:"text",placeholder:"您說的內容會顯示於此處",readonly:"readonly"},domProps:{value:e.olami.asr},on:{input:function(t){t.target.composing||e.$set(e.olami,"asr",t.target.value)}}})]),"success"===e.status?r("div",{staticClass:"col-md-2 col-md-push-3"},[r("router-link",{staticClass:"btn next-btn",attrs:{to:"/home"}},[e._v("\n                        繼續\n                        "),r("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])],1):e._e()]),"success"===e.status?r("div",{staticClass:"col-md-12"},[r("span",{staticClass:"vab-success",attrs:{for:""}},[e._v("*通關密語正確，請點選繼續")])]):"failed"===e.status?r("div",{staticClass:"col-md-12"},[r("span",{staticClass:"vab-failed",attrs:{for:""}},[e._v("*您的通關密語錯誤，請再試一次")])]):e._e()])])])},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("label",{staticClass:"label vab-label",attrs:{for:""}},[e._v("請說出通關密語")])])}],Y=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.passed=["一二三四","1234",1234],e}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"receiveOlami",value:function(){return{asr:"",nli:""}}},{key:"beforeRouteLeave",value:function(e,t,r){this.receiveOlami(),r()}},{key:"status",get:function(){return this.olami&&this.olami.asr?-1!==this.passed.indexOf(this.olami.asr)?"success":"failed":""}}]),t}(g["e"]);b["a"]([Object(g["d"])({default:{}})],Y.prototype,"olami",void 0),b["a"]([Object(g["b"])()],Y.prototype,"receiveOlami",null),Y=b["a"]([g["a"]],Y);var Z=Y,ee=Z,te=Object(k["a"])(ee,Q,V,!1,null,null,null);te.options.__file="Login.vue";var re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{action:""}},[r("div",{staticClass:"input-group say-password"},[r("div",{staticClass:"row"},[e._m(0),r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"col-md-6 col-md-push-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.asr,expression:"asr"}],staticClass:"form-control vab-input",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.asr},on:{input:function(t){t.target.composing||(e.asr=t.target.value)}}})]),e._m(1)]),r("div",{staticClass:"col-md-8 col-md-push-2"},[r("div",{staticClass:"vab-answer",attrs:{id:"vab-answer"}},[r("p",{staticClass:"vab-answer-text"},[e._v(e._s(e.nli))])])])])])])},ae=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("label",{staticClass:"label vab-label",attrs:{for:""}},[e._v("恭喜你，進入氣象語音答詢系統！"),r("br"),e._v("請問你想詢問的是")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-1 col-md-push-3"},[r("div",{staticClass:"btn-group vab-prompt"},[r("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"fa fa-question-circle-o",attrs:{"aria-hidden":"true"}})]),r("ul",{staticClass:"dropdown-menu prompt-menu"},[r("li",[e._v("必要：地點（縣/市/鄉/鎮）主題（天氣）")]),r("li",[e._v("輔助：時間（日期/後天/明天）五日以內")]),r("li",[e._v("範例："),r("br"),e._v("高雄天氣"),r("br"),e._v("請問永和週末會不會下雨"),r("br"),e._v("台中明天氣溫")])])])])}],oe=r("1e5c"),ie=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new T;Object(p["a"])(this,e),this.client=t}return Object(f["a"])(e,[{key:"say",value:function(){var e=Object(M["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=oe["Howl"],e.next=3,this.client.speech(t);case 3:e.t1=e.sent,e.t2={src:e.t1},r=new e.t0(e.t2),r.once("load",function(){r.play()});case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),se=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"created",value:function(){this.toogleLoading(!0)}},{key:"mounted",value:function(){this.toogleLoading(!1)}},{key:"toogleLoading",value:function(e){return new S.a(function(t){!1===e?setTimeout(function(){return t(!1)},500):t(!0)})}},{key:"asr",get:function(){return this.olami.asr||"高雄明天天氣"}},{key:"nli",get:function(){return this.olami&&this.olami.nli&&this.speaker.say(this.olami.nli),this.olami.nli||"高雄明天多雲中雨，最高溫度22.9℃，最低溫度18.5℃，南南西風軟風"}}]),t}(g["e"]);b["a"]([Object(g["d"])({default:{}})],se.prototype,"olami",void 0),b["a"]([Object(g["c"])({default:new ie})],se.prototype,"speaker",void 0),b["a"]([Object(g["b"])("toggle-loading")],se.prototype,"toogleLoading",null),se=b["a"]([g["a"]],se);var ce=se,ue=ce,le=Object(k["a"])(ue,ne,ae,!1,null,null,null);le.options.__file="Home.vue";var de=le.exports;n["default"].use(G["a"]);var pe=new G["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:re},{path:"/home",name:"home",component:de}]}),fe=r("2f62");n["default"].use(fe["a"]);var ve=new fe["a"].Store({state:{},mutations:{},actions:{}});n["default"].config.productionTip=!1,new n["default"]({router:pe,store:ve,render:function(e){return e(z)}}).$mount("#app")},fa76:function(e,t,r){"use strict";var n=r("91da"),a=r.n(n);a.a}});
//# sourceMappingURL=app.1f3ba89a.js.map