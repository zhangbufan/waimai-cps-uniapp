(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order"],{"117a":function(t,e,n){"use strict";(function(t){function n(t){return i(t)||a(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{dataList:[],list:[{name:"全部",id:0},{name:"待结算",id:1},{name:"已结算",id:2}],current:0,page:1,loadStatus:["loadmore","loadmore","loadmore"]}},computed:{userInfo:function(){return this.$store.state.userInfo}},onLoad:function(){this.getOrderList()},onPullDownRefresh:function(){this.getOrderList()},onReachBottom:function(){console.log("触发了到底"),this.getOrderList(),this.loadStatus[this.current]="loading"},methods:{getOrderList:function(){var e=this;t.showLoading({title:"获取订单中"});var r={page:this.page,status:0,commission_status:this.list[this.current].id};this.$http.user.getOrderList(r).then((function(r){console.log(r),t.stopPullDownRefresh(),0!=r.data.length?(e.loadStatus[e.current]="loadmore",e.page++,e.dataList=[].concat(n(e.dataList),n(r.data))):e.loadStatus[e.current]="nomore",t.hideLoading()})).catch((function(e){console.log(e),t.hideLoading()}))},clitbs:function(t){this.current=t,this.page=1,this.dataList=[],this.getOrderList()}},filters:{zeroize:function(t){return parseFloat(t).toFixed(2)}}};e.default=s}).call(this,n("543d")["default"])},"50c3":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"1982"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"a3c1"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("zeroize")(t.userInfo.disavailable_money||"0")),r=t._f("zeroize")(t.userInfo.sum_order_money||"0"),o=0!=t.dataList.length?t.__map(t.dataList,(function(e,n){var r=t.__get_orig(e),o=t._f("zeroize")(e.direct),a=t._f("zeroize")(e.my_commission);return{$orig:r,f2:o,f3:a}})):null;t.$mp.data=Object.assign({},{$root:{f0:n,f1:r,l0:o}})},a=[]},"65a9":function(t,e,n){"use strict";(function(t){n("8e1f");r(n("66fd"));var e=r(n("b878"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"7a5c":function(t,e,n){"use strict";n.r(e);var r=n("117a"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},"862b":function(t,e,n){},b878:function(t,e,n){"use strict";n.r(e);var r=n("50c3"),o=n("7a5c");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("fc31");var i,u=n("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"c6b9641e",null,!1,r["a"],i);e["default"]=s.exports},fc31:function(t,e,n){"use strict";var r=n("862b"),o=n.n(r);o.a}},[["65a9","common/runtime","common/vendor"]]]);