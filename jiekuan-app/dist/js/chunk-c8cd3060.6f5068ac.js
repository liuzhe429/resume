(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8cd3060"],{"22d4":function(t,e,i){"use strict";var s=i("6674"),o=i.n(s);o.a},"47be":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"admin_p_user_page"},[i("div",{staticClass:"title"},[t._v("问题列表")]),i("ul",{staticClass:"user_list"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.questionList,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),i("el-table-column",{attrs:{prop:"question",label:"问题",width:"180"}}),i("el-table-column",{attrs:{prop:"answer",label:"答案"}}),i("el-table-column",{attrs:{prop:"create_time",label:"添加时间"}}),i("el-table-column",{attrs:{prop:"update_time",label:"更新时间"}}),i("el-table-column",{attrs:{label:"申请订单"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.modifyQuestion(e.$index,e.row.id)}}},[t._v("修改")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.deleteQuestion(e.$index,e.row.id)}}},[t._v("删除")])]}}])})],1)],1),i("el-dialog",{attrs:{title:"add"===t.type?"添加问题":"修改问题",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:t.formData,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"问题"}},[i("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData.question,callback:function(e){t.$set(t.formData,"question",e)},expression:"formData.question"}})],1),i("el-form-item",{attrs:{label:"答案"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.answer,callback:function(e){t.$set(t.formData,"answer",e)},expression:"formData.answer"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.getData("cancle")}}},[t._v("取 消")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"删除",visible:t.deleteVisible,width:"30%"},on:{"update:visible":function(e){t.deleteVisible=e}}},[i("span",[t._v("确定要删除该问题吗？")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.deleteVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:t.confirmDelete}},[t._v("确 定")])],1)]),i("div",{staticClass:"footer"},[i("el-button",{staticClass:"add_btn",attrs:{type:"info"},on:{click:t.addQuestion}},[t._v("添加问题")])],1)],1)},o=[],a=i("5c96"),n={components:{"el-table":a["Table"],"el-table-column":a["TableColumn"],"el-button":a["Button"],"el-dialog":a["Dialog"],"el-form":a["Form"],"el-input":a["Input"],"el-form-item":a["FormItem"]},data:function(){return{question:[{id:"",question:"ahhahah",answer:"1111"}],questionList:[],questionId:"",questionIndex:"",dialogVisible:!1,formData:{},deleteVisible:!1,type:""}},created:function(){this.getData()},methods:{handleClose:function(){this.dialogVisible=!1},getData:function(t){var e=this;"cancle"===t&&(this.dialogVisible=!1),this.$service.get("/admin/question_modify",{adminToken:this.$Cookies.get("adminToken")},!0).then(function(t){e.questionList=t.data.questionList}).catch(function(){})},addQuestion:function(){this.dialogVisible=!this.dialogVisible,this.type="add"},confirmDelete:function(){this.formData={},this.submitForm("delete")},deleteQuestion:function(t,e){this.type="delete",this.questionId=e,this.questionIndex=t,this.deleteVisible=!this.deleteVisible},modifyQuestion:function(t,e){this.questionId=e,this.questionIndex=t,this.type="edit",this.dialogVisible=!this.dialogVisible,this.formData=this.questionList[t]},submitForm:function(){var t=this,e=[];"add"===this.type?(e=this.questionList,e=e.concat(this.formData)):(this.questionList[this.questionIndex]=this.formData,e=this.questionList),this.$service.post("/admin/question_modify/modify",{adminToken:this.$Cookies.get("adminToken"),question:e},!0).then(function(){"delete"===t.type?t.deleteVisible=!t.deleteVisible:t.dialogVisible=!t.dialogVisible,t.formData={},t.getData()}).catch(function(){})}}},l=n,r=(i("22d4"),i("2877")),u=Object(r["a"])(l,s,o,!1,null,"d3259c1a",null);e["default"]=u.exports},6674:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c8cd3060.6f5068ac.js.map