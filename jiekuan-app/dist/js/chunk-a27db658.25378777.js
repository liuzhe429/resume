(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a27db658"],{"0ac9":function(t,e,a){"use strict";var r=a("6950"),i=a.n(r);i.a},6950:function(t,e,a){},"90fe":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"b",function(){return o});a("a481");function r(t){return new Promise(function(e){var a=t.that,r=t.url,i=void 0===r?"/login":r,o=t.mobile,n=t.password;a.$service.post(i,{mobile:o,password:n},!0).then(function(t){0===t.code&&a.$Cookies.set("token",t.data.token),e(t)})})}function i(t){var e=t.that,a=t.msg,r=t.time,i=void 0===r?2e3:r,o=t.type,n=void 0===o?"txt":o;e.toast=e.$createToast({txt:a,type:n,time:i}),e.toast.show()}function o(t){return/\d{11}/.test(t)?t.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3"):t}},9622:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin_p_add_huankuan"},[a("el-button",{staticClass:"back_btn",attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),a("div",{staticClass:"page_title"},[t._v("还款列表")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.repayList,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),a("el-table-column",{attrs:{prop:"order_id",label:"订单号"}}),a("el-table-column",{attrs:{label:"借款分期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.period)+" - "+t._s(e.row.period)+"期")])]}}])}),a("el-table-column",{attrs:{prop:"repaid",label:"还款金额"}}),a("el-table-column",{attrs:{prop:"create_time",label:"还款时间"}})],1),"chakan"!==t.type?a("div",{staticClass:"add_container"},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"70px"}},[a("el-form-item",{attrs:{label:"还款金额"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入还款金额"},model:{value:t.repaid,callback:function(e){t.repaid=e},expression:"repaid"}})],1)],1),a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1):t._e()],1)},i=[],o=(a("6d67"),a("5c96")),n=a("90fe"),s={components:{"el-table":o["Table"],"el-table-column":o["TableColumn"],"el-button":o["Button"],"el-form":o["Form"],"el-input":o["Input"],"el-form-item":o["FormItem"]},data:function(){return{orderId:this.$route.query.orderId||"",period:this.$route.query.period||"",type:this.$route.query.type||"",repaid:"",repayList:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.$service.get("/admin/repay",{userId:this.$route.query.userId,adminToken:this.$Cookies.get("adminToken")},!0).then(function(e){0===e.code&&e.data.repayList.map(function(e){e.orderId===t.orderId&&(t.repayList=e.repayPlan)}),t.dialogVisible=!1})},submitForm:function(){var t=this;this.$service.get("/admin/repay/add",{repaid:this.repaid,orderId:this.$route.query.orderId,period:parseInt(this.repayList.length)+1,adminToken:this.$Cookies.get("adminToken")},!0).then(function(e){0===e.code?(Object(n["c"])({that:t,msg:"审批成功",time:2e3}),t.getData()):Object(n["c"])({that:t,msg:e.msg,time:2e3}),t.dialogVisible=!1,t.auditMoney="",t.type=""}).catch(function(){})}}},l=s,d=(a("0ac9"),a("2877")),c=Object(d["a"])(l,r,i,!1,null,"462e75e2",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-a27db658.25378777.js.map