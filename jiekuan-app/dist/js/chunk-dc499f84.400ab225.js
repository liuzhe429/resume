(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc499f84"],{"0ffd":function(t,e,i){},"7fae":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_p_user_page"},[i("el-button",{staticClass:"back_btn",attrs:{type:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),i("div",{staticClass:"title"},[t._v("申请列表")]),i("ul",{staticClass:"user_list"},[i("el-table",{attrs:{data:t.orderList,border:""}},[i("el-table-column",{attrs:{prop:"id",label:"id"}}),i("el-table-column",{attrs:{prop:"order_id",label:"order_id"}}),i("el-table-column",{attrs:{prop:"loan_name",label:"姓名"}}),i("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.shenheApply(e.row,1)}}},[t._v("通过")]),i("i",{staticStyle:{margin:"0 2px"}}),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.shenheApply(e.row,2)}}},[t._v("拒绝")]),i("i",{staticStyle:{margin:"0 2px"}}),1===e.row.repay_status?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){return t.add(e.row)}}},[t._v("查看")]):t._e(),1!==e.row.repay_status?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){return t.add(e.row)}}},[t._v("还款")]):t._e()]}}])})],1)],1),i("el-dialog",{attrs:{title:"借款申请",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"审批金额"}},[i("el-input",{attrs:{autocomplete:"off",placeholder:"请输入最高审批金额"},model:{value:t.auditMoney,callback:function(e){t.auditMoney=e},expression:"auditMoney"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.cancleApply("cancle")}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"拒绝申请",visible:t.denyVisible,width:"30%"},on:{"update:visible":function(e){t.denyVisible=e}}},[i("span",[t._v("确定要拒绝该申请吗？")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.denyVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmDeny}},[t._v("确 定")])],1)])],1)},n=[],a=i("5c96"),s=i("90fe"),r={components:{"el-table":a["Table"],"el-table-column":a["TableColumn"],"el-button":a["Button"],"el-dialog":a["Dialog"],"el-form":a["Form"],"el-input":a["Input"],"el-form-item":a["FormItem"]},data:function(){return{userId:this.$route.query.userId||"",orderList:[],dialogVisible:!1,formData:{},denyVisible:!1,type:"",auditMoney:""}},created:function(){this.getData()},methods:{add:function(t){var e;1===t.repay_status&&(e="chakan"),this.$router.push("/admin/home/huankuan?userId=".concat(t.user_id,"&orderId=").concat(t.order_id,"&period=").concat(t.periods,"&type=").concat(e))},confirmDeny:function(){var t=this;this.$service.get("/admin/order/audit",{orderId:this.formData.order_id,auditStatus:2,auditMoney:0,adminToken:this.$Cookies.get("adminToken")},!0).then(function(e){0===e.code?(Object(s["c"])({that:t,msg:"拒绝成功",time:2e3}),t.getData()):Object(s["c"])({that:t,msg:e.msg,time:2e3}),t.denyVisible=!1,t.auditMoney="",t.type=""}).catch(function(){})},handleClose:function(){this.dialogVisible=!1},cancleApply:function(){this.dialogVisible=!1},submitForm:function(){var t=this;return this.auditMoney?this.auditMoney>=this.formData.amount?(Object(s["c"])({that:this,msg:"审批金额大于借款金额",time:2e3}),!1):void this.$service.get("/admin/order/audit",{orderId:this.formData.order_id,auditStatus:this.type,auditMoney:this.auditMoney,adminToken:this.$Cookies.get("adminToken")},!0).then(function(e){0===e.code?(Object(s["c"])({that:t,msg:"审批成功",time:2e3}),t.getData()):Object(s["c"])({that:t,msg:e.msg,time:2e3}),t.dialogVisible=!1,t.auditMoney="",t.type=""}).catch(function(){}):(Object(s["c"])({that:this,msg:"请输入正确的审批金额",time:2e3}),!1)},getData:function(){var t=this;this.$service.post("/admin/order",{userId:this.userId,adminToken:this.$Cookies.get("adminToken")},!0).then(function(e){t.orderList=e.data.orderList}).catch(function(){})},shenheApply:function(t,e){1===e?this.dialogVisible=!this.dialogVisible:this.denyVisible=!this.denyVisible,this.type=e,this.formData=t}}},l=r,c=(i("a82d"),i("2877")),d=Object(c["a"])(l,o,n,!1,null,"1880f803",null);e["default"]=d.exports},"90fe":function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"c",function(){return n}),i.d(e,"b",function(){return a});i("a481");function o(t){return new Promise(function(e){var i=t.that,o=t.url,n=void 0===o?"/login":o,a=t.mobile,s=t.password;i.$service.post(n,{mobile:a,password:s},!0).then(function(t){0===t.code&&i.$Cookies.set("token",t.data.token),e(t)})})}function n(t){var e=t.that,i=t.msg,o=t.time,n=void 0===o?2e3:o,a=t.type,s=void 0===a?"txt":a;e.toast=e.$createToast({txt:i,type:s,time:n}),e.toast.show()}function a(t){return/\d{11}/.test(t)?t.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3"):t}},a82d:function(t,e,i){"use strict";var o=i("0ffd"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-dc499f84.400ab225.js.map