(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab45ccc"],{"4fde":function(t,e,s){"use strict";s("7ce0")},"7ce0":function(t,e,s){},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AddModalUser",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",[t._v("Login")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"row"},[s("form",{ref:"formReset",staticClass:"col s12",attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[s("div",{staticClass:"input-field col s12 m12 l6"},[s("i",{staticClass:"material-icons prefix"},[t._v("markunread")]),s("label",{staticClass:"active",attrs:{for:"icon_email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"validate",attrs:{id:"icon_email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"input-field col s12 m12 l6"},[s("i",{staticClass:"material-icons prefix"},[t._v("lock")]),s("label",{staticClass:"active",attrs:{for:"icon_password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"validate",attrs:{id:"icon_password",type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("button",{staticClass:"btn waves-effect waves-light btn_form",attrs:{type:"submit",name:"action"}},[t._v(" Login "),s("i",{staticClass:"material-icons right"},[t._v(" login ")])]),s("router-link",{staticClass:"waves-effect waves-light btn register red lighten-2",attrs:{to:"/register"}},[s("i",{staticClass:"material-icons right"},[t._v(" how_to_reg ")]),t._v("Register ")])],1)])]},proxy:!0}])})},i=[],o=s("5530"),r=(s("d3b7"),s("3ca3"),s("ddb0"),s("2f62")),n={name:"Add_user",components:{AddModalUser:function(){return s.e("chunk-9757553c").then(s.bind(null,"3da3"))}},data:function(){return{password:"12345",email:"va.ovsyanikov@gmail.com"}},computed:Object(o["a"])({},Object(r["c"])(["NOTIFICATION","NOTIFICATION_ERROR","NOTIFICATION_ERROR_VALID"])),methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["LOGIN"])),{},{submitForm:function(){this.LOGIN({email:this.email,password:this.password})}}),watch:{NOTIFICATION:function(){this.$notify({group:"foo",type:"".concat(this.NOTIFICATION.type),text:'<i class="material-icons">info_outline</i> <span>'.concat(this.NOTIFICATION.message,"</span>")}),this.$refs.formReset.reset(),this.$router.push({name:"Home"})},NOTIFICATION_ERROR_VALID:function(){for(var t in console.log(this.NOTIFICATION_ERROR_VALID),this.NOTIFICATION_ERROR_VALID){var e=t;this.$notify({group:"foo",type:"error",text:'<i class="material-icons">cancel</i> <span>'.concat(this.NOTIFICATION_ERROR_VALID[e].msg,"</span>")})}}}},c=n,l=(s("4fde"),s("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7ab45ccc.941320cc.js.map