(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c9d67f6"],{"45cd":function(t,e,a){"use strict";var n=a("7790"),s=a.n(n);s.a},7790:function(t,e,a){},b5d9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin_p_user_page"},[a("el-button",{staticClass:"back_btn",attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),a("div",{staticClass:"title"},[t._v("银行卡列表")]),a("ul",{staticClass:"user_list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.cardList,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),a("el-table-column",{attrs:{prop:"bank_code",label:"银行名称",width:"180"}}),a("el-table-column",{attrs:{prop:"card_no",label:"银行卡号"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}})],1)],1)],1)},s=[],r=a("5c96"),i={components:{"el-table":r["Table"],"el-table-column":r["TableColumn"],"el-button":r["Button"]},data:function(){return{userId:this.$route.query.userId,cardList:[]}},created:function(){this.goBankCardList(this.userId)},methods:{goBankCardList:function(t){var e=this;this.$service.post("/admin/query_user_card",{adminToken:this.$Cookies.get("adminToken"),userId:t}).then(function(t){t.cardList&&(e.cardList=t.cardList)}).catch(function(){})}}},c=i,l=(a("45cd"),a("2877")),o=Object(l["a"])(c,n,s,!1,null,"04b34757",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0c9d67f6.5c6e5920.js.map