(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"91da":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("65d9"),o=n.n(a);o.a.registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]);var i=n("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var s=n("bc3a"),c=n.n(s);c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var u=document.head.querySelector('meta[name="csrf-token"]');u&&(c.a.defaults.headers.common["X-CSRF-TOKEN"]=u.content);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("loading",{attrs:{"show-loading":e.showLoading}}),n("main",{staticClass:"main-content container text-center"},[n("h2",{staticClass:"vab-litle"},[e._v("氣象局氣象語音答詢系統")]),n("microphone",{on:{"toggle-loading":e.toggleLoading,"receive-olami":e.receiveOlami}}),n("router-view",{attrs:{olami:e.olami},on:{"toggle-loading":e.toggleLoading,"receive-olami":e.receiveOlami}})],1)],1)},d=[],p=n("d225"),f=n("b0b4"),v=n("308d"),h=n("6bb5"),m=n("4e2b"),b=n("9ab4"),g=n("60a3"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showLoading?n("div"):e._e()},y=[],O=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),t}(g["e"]);b["a"]([Object(g["d"])({default:!1})],O.prototype,"showLoading",void 0),O=b["a"]([Object(g["a"])({name:"loading"})],O);var j=O,_=j,k=(n("fa76"),n("2877")),x=Object(k["a"])(_,w,y,!1,null,"05e9fc34",null);x.options.__file="Loading.vue";var R=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vab-microphone"},[n("button",{on:{mousedown:e.startRecording,mouseup:e.stopRecording,touchstart:e.startRecording,touchend:e.stopRecording}},[n("i",{staticClass:"fa fa-microphone",attrs:{"aria-hidden":"true"}})])])},L=[],E=n("795b"),S=n.n(E),$=(n("96cf"),n("3b8d")),M=function(){function e(){Object(p["a"])(this,e)}return Object(f["a"])(e,[{key:"query",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=(new Date).toISOString()+".wav",r=new FormData,r.append("sound",t,n),e.next=5,c()({method:"post",url:"/api/olami/query",data:r,headers:{"Content-Type":"multipart/form-data"}});case 5:return a=e.sent,o=a.data.data.asr.result,i=a.data.data.nli[0].desc_obj.result,e.abrupt("return",{asr:o,nli:i});case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"speech",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()({method:"post",url:"/api/olami/speech",data:{text:t}});case 2:return n=e.sent,e.abrupt("return","".concat(n.data.file_path).concat(n.data.file_name));case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),T=n("59ad"),q=n.n(T),P=n("86c9"),A=n.n(P),D=window.AudioContext||window.webkitAudioContext,N=window.URL||window.webkitURL,U=function(){function e(){Object(p["a"])(this,e)}return Object(f["a"])(e,[{key:"startRecording",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getRecorder();case 2:t=e.sent,t.record();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"stopRecording",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new S.a(function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRecorder();case 2:r=e.sent,r.stop(),r.exportWAV(function(e){n(e),r.clear()});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDuration",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new S.a(function(e){var n=document.createElement("audio");n.addEventListener("loadeddata",function(t){e(q()(t.currentTarget.duration)),document.body.removeChild(n)}),n.src=N.createObjectURL(t),n.style.visibility="hidden",n.style.position="absolute",n.style.left="-10000px",n.style.top="0",document.body.appendChild(n)}));case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getRecorder",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.recorder){e.next=2;break}return e.abrupt("return",this.recorder);case 2:return e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 4:return t=e.sent,this.recorder=new A.a((new D).createMediaStreamSource(t),{numChannels:1}),e.abrupt("return",this.recorder);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),F=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"startRecording",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.recorder.startRecording();case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"stopRecording",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.toogleLoading(!0),e.next=4,this.recorder.stopRecording();case 4:return t=e.sent,e.next=7,this.recorder.getDuration(t);case 7:if(n=e.sent,!(n<=1||n===1/0)){e.next=10;break}return e.abrupt("return");case 10:return e.t0=this,e.next=13,this.client.query(t);case 13:e.t1=e.sent,e.t0.receiveOlami.call(e.t0,e.t1),e.next=19;break;case 17:e.prev=17,e.t2=e["catch"](0);case 19:return e.prev=19,setTimeout(function(){r.toogleLoading(!1)},200),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,17,19,22]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"toogleLoading",value:function(e){return new S.a(function(t){!1===e?setTimeout(function(){return t(!1)},500):t(!0)})}},{key:"receiveOlami",value:function(e){return e}}]),t}(g["e"]);b["a"]([Object(g["c"])({default:new M})],F.prototype,"client",void 0),b["a"]([Object(g["c"])({default:new U})],F.prototype,"recorder",void 0),b["a"]([Object(g["b"])("toggle-loading")],F.prototype,"stopRecording",null),b["a"]([Object(g["b"])("toggle-loading")],F.prototype,"toogleLoading",null),b["a"]([Object(g["b"])()],F.prototype,"receiveOlami",null),F=b["a"]([Object(g["a"])({name:"microphone"})],F);var H=F,X=H,J=Object(k["a"])(X,C,L,!1,null,null,null);J.options.__file="Microphone.vue";var W=J.exports,B=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.showLoading=!0,e.olami={},e}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"toggleLoading",value:function(e){this.showLoading=e}},{key:"receiveOlami",value:function(e){this.olami=e}},{key:"mounted",value:function(){this.toggleLoading(!1)}}]),t}(g["e"]);B=b["a"]([Object(g["a"])({components:{Loading:R,Microphone:W}})],B);var I=B,K=I,V=Object(k["a"])(K,l,d,!1,null,null,null);V.options.__file="App.vue";var z=V.exports,G=n("8c4f"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{action:""}},[n("div",{staticClass:"input-group text-center say-password"},[n("div",{staticClass:"row"},[e._m(0),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"col-md-6 col-md-push-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.olami.asr,expression:"olami.asr"}],staticClass:"form-control vab-input",class:{"input-success":"success"===e.status,"input-failed":"failed"===e.status},attrs:{type:"text",placeholder:"您說的內容會顯示於此處",readonly:"readonly"},domProps:{value:e.olami.asr},on:{input:function(t){t.target.composing||e.$set(e.olami,"asr",t.target.value)}}})]),"success"===e.status?n("div",{staticClass:"col-md-2 col-md-push-3"},[n("router-link",{staticClass:"btn next-btn",attrs:{to:"/home"}},[e._v("\n                        繼續\n                        "),n("i",{staticClass:"fa fa-arrow-right",attrs:{"aria-hidden":"true"}})])],1):e._e()]),"success"===e.status?n("div",{staticClass:"col-md-12"},[n("span",{staticClass:"vab-success",attrs:{for:""}},[e._v("*通關密語正確，請點選繼續")])]):"failed"===e.status?n("div",{staticClass:"col-md-12"},[n("span",{staticClass:"vab-failed",attrs:{for:""}},[e._v("*您的通關密語錯誤，請再試一次")])]):e._e()])])])},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-12"},[n("label",{staticClass:"label vab-label",attrs:{for:""}},[e._v("請說出通關密語")])])}],Z=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.passed=["一二三四","1234",1234],e}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"receiveOlami",value:function(){return{asr:"",nli:""}}},{key:"beforeRouteLeave",value:function(e,t,n){this.receiveOlami(),n()}},{key:"status",get:function(){return this.olami&&this.olami.asr?-1!==this.passed.indexOf(this.olami.asr)?"success":"failed":""}}]),t}(g["e"]);b["a"]([Object(g["d"])({default:{}})],Z.prototype,"olami",void 0),b["a"]([Object(g["b"])()],Z.prototype,"receiveOlami",null),Z=b["a"]([g["a"]],Z);var ee=Z,te=ee,ne=Object(k["a"])(te,Q,Y,!1,null,null,null);ne.options.__file="Login.vue";var re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{action:""}},[n("div",{staticClass:"input-group say-password"},[n("div",{staticClass:"row"},[e._m(0),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"col-md-6 col-md-push-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.asr,expression:"asr"}],staticClass:"form-control vab-input",attrs:{type:"text",readonly:"readonly"},domProps:{value:e.asr},on:{input:function(t){t.target.composing||(e.asr=t.target.value)}}})]),e._m(1)]),n("div",{staticClass:"col-md-8 col-md-push-2"},[n("div",{staticClass:"vab-answer",attrs:{id:"vab-answer"}},[n("p",{staticClass:"vab-answer-text"},[e._v(e._s(e.nli))])])])])])])},oe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-12"},[n("label",{staticClass:"label vab-label",attrs:{for:""}},[e._v("恭喜你，進入氣象語音答詢系統！"),n("br"),e._v("請問你想詢問的是")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-1 col-md-push-3"},[n("div",{staticClass:"btn-group vab-prompt"},[n("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fa fa-question-circle-o",attrs:{"aria-hidden":"true"}})]),n("ul",{staticClass:"dropdown-menu prompt-menu"},[n("li",[e._v("必要：地點（縣/市/鄉/鎮）主題（天氣）")]),n("li",[e._v("輔助：時間（日期/後天/明天）五日以內")]),n("li",[e._v("範例："),n("br"),e._v("高雄天氣"),n("br"),e._v("請問永和週末會不會下雨"),n("br"),e._v("台中明天氣溫")])])])])}],ie=n("1e5c"),se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new M;Object(p["a"])(this,e),this.client=t}return Object(f["a"])(e,[{key:"say",value:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=ie["Howl"],e.next=3,this.client.speech(t);case 3:e.t1=e.sent,e.t2={src:e.t1},n=new e.t0(e.t2),n.once("load",function(){n.play()});case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),ce=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(f["a"])(t,[{key:"created",value:function(){this.toogleLoading(!0)}},{key:"mounted",value:function(){this.toogleLoading(!1)}},{key:"toogleLoading",value:function(e){return new S.a(function(t){!1===e?setTimeout(function(){return t(!1)},500):t(!0)})}},{key:"asr",get:function(){return this.olami.asr||"高雄明天天氣"}},{key:"nli",get:function(){return this.olami&&this.olami.nli&&this.speaker.say(this.olami.nli),this.olami.nli||"高雄明天多雲中雨，最高溫度22.9℃，最低溫度18.5℃，南南西風軟風"}}]),t}(g["e"]);b["a"]([Object(g["d"])({default:{}})],ce.prototype,"olami",void 0),b["a"]([Object(g["c"])({default:new se})],ce.prototype,"speaker",void 0),b["a"]([Object(g["b"])("toggle-loading")],ce.prototype,"toogleLoading",null),ce=b["a"]([g["a"]],ce);var ue=ce,le=ue,de=Object(k["a"])(le,ae,oe,!1,null,null,null);de.options.__file="Home.vue";var pe=de.exports;r["default"].use(G["a"]);var fe=new G["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:re},{path:"/home",name:"home",component:pe}]}),ve=n("2f62");r["default"].use(ve["a"]);var he=new ve["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:fe,store:he,render:function(e){return e(z)}}).$mount("#app")},fa76:function(e,t,n){"use strict";var r=n("91da"),a=n.n(r);a.a}});
//# sourceMappingURL=app.f9ee19b1.js.map