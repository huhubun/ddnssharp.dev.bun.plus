(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{218:function(t,e,r){"use strict";e.a=function(t){t.app.router.afterEach((function(t,e){try{var r=t.fullPath,o=e.fullPath;_czc.push(["_trackPageview",r,o])}catch(t){}}))}},219:function(t,e,r){"use strict";var o=r(1),n=r(323);o.a.use(n.default)},278:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("3a3359aa",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";var o=r(488),n=r(496),c=r(489),l=r(231),h=r(494),f=r(492),d=r(212),_=r(210),m=r(135),v=r(211),x=r(95),w=r(491),y=r(495),k=r(493),C=r(490),D=r(174),N={data:function(){return{clipped:!0,drawer:!1,items:[{icon:"mdi-home-outline",title:"首页",to:"/"},{icon:"mdi-file-document-outline",title:"文档",href:"https://github.com/huhubun/DDNSSharp"},{icon:"mdi-history",title:"更新记录",href:"https://github.com/huhubun/DDNSSharp/releases"},{icon:"mdi-keyboard-return",title:"huhubun Studio",href:"https://huhubun.com/"}],title:"DDNSSharp",footers:[{text:"Github",href:"https://github.com/huhubun/DDNSSharp"}]}}},S=r(96),component=Object(S.a)(N,(function(){var t=this,e=t._self._c;return e(o.a,[e(y.a,{attrs:{clipped:t.clipped,fixed:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(_.a,t._l(t.items,(function(r,i){return e(m.a,{key:"drawer_nav_item_".concat(i),attrs:{to:r.to,href:r.href,router:"",exact:""}},[e(v.a,[e(d.a,[t._v(t._s(r.icon))])],1),t._v(" "),e(x.a,[e(x.b,{domProps:{textContent:t._s(r.title)}})],1)],1)})),1)],1),t._v(" "),e(n.a,{attrs:{"clipped-left":t.clipped,flat:"",app:"",color:"blue-grey darken-4 white--text"}},[e(c.a,{staticClass:"hidden-sm-and-up white--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(D.b,{domProps:{textContent:t._s(t.title)}}),t._v(" "),e(C.a),t._v(" "),e(D.a,{staticClass:"hidden-xs-only"},[t._l(t.items,(function(r,i){return[e(l.a,{key:"toolbar_item_".concat(i,"_btn"),staticClass:"white--text",attrs:{text:"",to:t.items[i].to,href:t.items[i].href}},[t._v("\n          "+t._s(t.items[i].title)+"\n        ")])]}))],2)],1),t._v(" "),e(w.a,[e("nuxt")],1),t._v(" "),e(f.a,{attrs:{color:"blue-grey darken-4",padless:""}},[e(k.a,{attrs:{justify:"center","no-gutters":""}},[t._l(t.footers,(function(footer){return e(l.a,{key:footer.href,staticClass:"my-2",attrs:{href:footer.href,color:"white",text:""}},[t._v("\n        "+t._s(footer.text)+"\n      ")])})),t._v(" "),e(h.a,{staticClass:"pb-4 text-center white--text",attrs:{cols:"12"}},[t._v("\n        © "+t._s((new Date).getFullYear())+"\n        "),e("a",{staticClass:"text-decoration-none white--text",attrs:{href:"https://huhubun.com"}},[t._v("\n          huhubun\n        ")])])],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports},334:function(t,e,r){r(335),t.exports=r(336)},385:function(t,e,r){"use strict";r(278)},386:function(t,e,r){var o=r(19)((function(i){return i[1]}));o.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),o.locals={},t.exports=o},389:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2ebc13b8",content,!0,{sourceMap:!1})},390:function(t,e,r){var o=r(19)((function(i){return i[1]}));o.push([t.i,'body .v-application .command-input{font-family:"Roboto Mono",monospace!important}',""]),o.locals={},t.exports=o},86:function(t,e,r){"use strict";var o=r(488),n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(385),r(96)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports}},[[334,9,2,10]]]);