(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"089bd9a2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"2a56":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",[o("button",{on:{click:e.help}},[e._v("도움말")])]),o("h2",[e._v("짧은 일기")]),o("div",{staticClass:"memo-form"},[o("div",[o("label",[e._v("제목"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.memo.title,expression:"memo.title"}],attrs:{type:"text",maxlength:"100"},domProps:{value:e.memo.title},on:{input:function(t){t.target.composing||e.$set(e.memo,"title",t.target.value)}}})])]),o("div",[o("label",[e._v("내용 "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.content,expression:"memo.content"}],domProps:{value:e.memo.content},on:{input:function(t){t.target.composing||e.$set(e.memo,"content",t.target.value)}}})])]),o("button",{on:{click:e.addMemo}},[e._v("추가")])]),o("MemoList",{attrs:{memoList:e.memoList}})],1)},a=[],i=(o("d3b7"),o("159b"),o("4e82"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",e._l(e.memoList,(function(e){return o("Memoitem",{key:e.id,attrs:{memo:e}})})),1)])}),s=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("div",[e._v(e._s(e.memo.createAt))]),e.isUpdateMode?o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.content,expression:"memo.content"}],domProps:{value:e.memo.content},on:{input:function(t){t.target.composing||e.$set(e.memo,"content",t.target.value)}}}):o("div",[e._v(e._s(e.memo.content))]),o("div",[e.isUpdateMode?o("button",{on:{click:function(t){return e.changeMode("read")}}},[e._v("취소")]):o("button",{on:{click:e.deleteMemo}},[e._v("삭제")]),e.isUpdateMode?o("button",{on:{click:e.saveChangedMemo}},[e._v("저장")]):o("button",{on:{click:function(t){return e.changeMode("update")}}},[e._v("편집모드로 전환")])])])])},u=[],c={props:["memo"],data:function(){return{isUpdateMode:!1}},methods:{saveChangedMemo:function(){this.$store.commit("saveChangedMemo",this.memo.content),this.isUpdateMode=!1},deleteMemo:function(){this.$store.commit("deleteMemo",this.memo.id)},changeMode:function(e){"update"===e?this.isUpdateMode=!0:"read"===e&&(this.isUpdateMode=!1)}}},m=c,p=o("2877"),v=Object(p["a"])(m,l,u,!1,null,null,null),d=v.exports,f={props:["memoList"],components:{Memoitem:d},mounted:function(){console.log("memoList")}},h=f,g=Object(p["a"])(h,i,s,!1,null,null,null),_=g.exports,b=o("8aa5"),k=o.n(b),j={components:{MemoList:_},data:function(){return{memoList:[],memo:{title:null,content:null}}},methods:{help:function(){alert("모든 내용은 모두에게 공개됩니다.\n\n추가: Ctrl + Enter")},listMemo:function(){var e=this;k.a.firestore().collection("posts").get().then((function(t){var o=[];t.forEach((function(e){var t=e.data(),n={id:e.id,title:t.title,content:t.content,createAt:t.createAt.toDate().toLocaleString()};o.push(n),console.log(o)})),o.sort((function(e,t){return e.createAt<t.createAt?1:-1})),e.memoList=o}))},addMemo:function(){var e=this;k.a.firestore().collection("posts").doc().set({title:this.memo.title,content:this.memo.content,createAt:new Date}).then((function(){e.memo.title="",e.memo.content="",alert("추가 되었습니다."),e.listMemo()}))}},created:function(){this.listMemo()}},y=j,M=Object(p["a"])(y,r,a,!1,null,null,null),w=M.exports,x=(o("3ca3"),o("ddb0"),o("8c4f")),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},E=[],O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._m(0),o("h3",[e._v("Installed CLI Plugins")]),e._m(1),o("h3",[e._v("Essential Links")]),e._m(2),o("h3",[e._v("Ecosystem")]),e._m(3)])},C=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),e._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],P={name:"HelloWorld",props:{msg:String}},$=P,A=(o("6f12"),Object(p["a"])($,O,C,!1,null,"5cc7f8f0",null)),S=A.exports,H={name:"Home",components:{HelloWorld:S}},I=H,U=Object(p["a"])(I,L,E,!1,null,null,null),D=U.exports;n["a"].use(x["a"]);var T=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],W=new x["a"]({mode:"history",base:"/",routes:T}),N=W,F=(o("a434"),o("2f62"));n["a"].use(F["a"]);var q=new F["a"].Store({state:{memoList:[],memoSeq:0},mutations:{addMemo:function(e,t){t.id=++e.memoSeq,t.createAt=(new Date).toLocaleDateString(),e.memoList.push(t)},deleteMemo:function(e,t){for(var o=null,n=0;n<e.memoList.length;n++){var r=e.memoList[n];if(t===r.id){o=n;break}}e.memoList.splice(o,1)},saveChangedMemo:function(e,t){for(var o=null,n=(t.content,t.createAt,0);n<e.memoList.length;n++){var r=e.memoList[n];if(t.id===r.id){o=n;break}}t.id=o}},actions:{},modules:{}}),z=o("59ca");n["a"].config.productionTip=!1;var J={apiKey:"AIzaSyCE-9WZFesg_Hf9HIY99Z2FH9mPQ6HbNh4",authDomain:"yoondi.firebaseapp.com",projectId:"yoondi",storageBucket:"yoondi.appspot.com",messagingSenderId:"983120963755",appId:"1:983120963755:web:83531b26a1286a006aefee"},V=(Object(z["initializeApp"])(J),"happyyoondi@nana.com"),Y="1234567890";k.a.auth().signInWithEmailAndPassword(V,Y),new n["a"]({router:N,store:q,render:function(e){return e(w)}}).$mount("#app")},"6f12":function(e,t,o){"use strict";o("2a56")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.be8d3e6c.js.map