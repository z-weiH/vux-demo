webpackJsonp([5],{0:function(t,e,n){t.exports=n("NHnr")},CRgB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("lRwf"),a=n.n(i),l=n("DV+v"),s=(l.b,String,{mounted:function(){},name:"tabbar",mixins:[l.b],props:{iconClass:String}}),r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var o=n("C7Lr")(s,r,!1,function(t){n("R5Po")},null,null).exports,c=(String,Number,{name:"badge",props:{text:[String,Number]}}),u={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var p=n("C7Lr")(c,u,!1,function(t){n("eoh0")},null,null).exports,d=(l.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:p},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[l.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():n("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?n("sup",[n("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),n("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},f=n("C7Lr")(d,v,!1,null,null,null).exports,h=n("n9nh"),b=(h.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:h.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?n("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},staticRenderFns:[]};var m=n("C7Lr")(b,g,!1,function(t){n("QU0M")},null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"vux-label-desc"},[this._t("default")],2)},staticRenderFns:[]};var x=n("C7Lr")({name:"inline-desc"},_,!1,function(t){n("CRgB")},null,null).exports,w=n("7+S+"),C=n("Dvzy"),S=n("x8E4"),y=(Object(C.a)(),{name:"cell",components:{InlineDesc:x},props:Object(C.a)(),created:function(){0},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(h.a)({width:Object(S.a)(this,"labelWidth"),textAlign:Object(S.a)(this,"labelAlign"),marginRight:Object(S.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(w.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title||t.hasTitleSlot?n("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]};var $=n("C7Lr")(y,A,!1,function(t){n("w+8+")},null,null).exports,R={components:{Tabbar:o,TabbarItem:f,Group:m,Cell:$},data:function(){return{transitionName:"",active:-1}},watch:{$route:function(t,e){t.meta.weight&&e.meta.weight&&(this.transitionName=t.meta.weight>e.meta.weight?"forward":"reverse")}},mounted:function(){}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tabbar",{model:{value:t.$store.state.layout.pageActive,callback:function(e){t.$set(t.$store.state.layout,"pageActive",e)},expression:"$store.state.layout.pageActive"}},[n("tabbar-item",{attrs:{link:"/index"}},[n("span",{attrs:{slot:"label"},slot:"label"},[t._v("首页")])]),t._v(" "),n("tabbar-item",{attrs:{link:"/shoucang"}},[n("span",{attrs:{slot:"label"},slot:"label"},[t._v("收藏")])]),t._v(" "),n("tabbar-item",{attrs:{link:"/wode"}},[n("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的")])])],1),t._v(" "),n("div",{staticClass:"router-box"},[n("transition",{attrs:{name:t.transitionName}},[n("router-view")],1)],1)],1)},staticRenderFns:[]};var T=n("C7Lr")(R,k,!1,function(t){n("Ren8"),n("dgsc")},"data-v-659de718",null).exports,j=n("pRNm"),I=["/"],N=[{path:"/",redirect:"/index"},{path:"/index",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("JXTs")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{weight:1}},{path:"/shoucang",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("effp")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{weight:2}},{path:"/wode",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("IlBQ")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{weight:3}}];var L=new(n.n(j).a)({routes:N});L.beforeEach(function(t,e,n){window.scrollTo(0,0),I.indexOf(t.path),n()}),L.afterEach(function(t,e){});var O=L,P=(n("SPU+"),n("OMN4")),M=n.n(P),E=n("rVsN"),D=n.n(E),F=n("6iV/"),B=n.n(F),V={env:"dev",host:""};M.a.defaults.timeout=1e4,M.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",M.a.defaults.baseURL=V.host,M.a.interceptors.request.use(function(t){return"post"===t.method&&!0!==t.mheaders&&(t.data=B.a.stringify(t.data)),t},function(t){return D.a.reject(t)}),M.a.interceptors.response.use(function(t){return t.data},function(t){return t.response&&alert("网络出错"),D.a.reject(t)});M.a;var U=n("SJI6");var H=new(n.n(U).a.Store)({modules:{layout:{namespaced:!0,state:{pageActive:-1},mutations:{setPageActive:function(t,e){t.pageActive=e}}}}}),J=n("uAC3"),Q=n.n(J);a.a.config.productionTip=!1,a.a.prototype.$http=M.a,a.a.prototype.$config=V,a.a.prototype.$cookie=Q.a,new a.a({el:"#app",router:O,store:H,components:{App:T},template:"<App/>"})},OMN4:function(t,e){t.exports=axios},QU0M:function(t,e){},R5Po:function(t,e){},Ren8:function(t,e){},SJI6:function(t,e){t.exports=Vuex},"SPU+":function(t,e){},dgsc:function(t,e){},eoh0:function(t,e){},lRwf:function(t,e){t.exports=Vue},pRNm:function(t,e){t.exports=VueRouter},"w+8+":function(t,e){}},[0]);
//# sourceMappingURL=app.a19cb4c355ac9089ad71.js.map