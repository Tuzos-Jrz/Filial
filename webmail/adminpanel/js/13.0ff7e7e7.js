(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{b6bf:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"full-height full-width"},[e("q-scroll-area",{staticClass:"full-height full-width"},[e("div",{staticClass:"q-pa-lg "},[e("div",{staticClass:"row q-mb-md"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.HEADING_SECURITY_SETTINGS",expression:"'ADMINPANELWEBCLIENT.HEADING_SECURITY_SETTINGS'"}],staticClass:"col text-h5"})]),e("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row q-mb-md"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.LABEL_SECURITY_LOGIN",expression:"'ADMINPANELWEBCLIENT.LABEL_SECURITY_LOGIN'"}],staticClass:"col-2 q-my-sm"}),e("div",{staticClass:"col-5"},[e("q-input",{attrs:{outlined:"",dense:"","bg-color":"white"},on:{keyup:function(a){return!a.type.indexOf("key")&&s._k(a.keyCode,"enter",13,a.key,"Enter")?null:s.save.apply(null,arguments)}},model:{value:s.login,callback:function(a){s.login=a},expression:"login"}})],1)]),e("div",{staticClass:"row q-mb-md"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.LABEL_SECURITY_PASS",expression:"'ADMINPANELWEBCLIENT.LABEL_SECURITY_PASS'"}],staticClass:"col-2 q-my-sm"}),e("div",{staticClass:"col-5"},[e("q-input",{ref:"oldPassword",attrs:{outlined:"",dense:"","bg-color":"white",type:"password",autocomplete:"new-password"},on:{keyup:function(a){return!a.type.indexOf("key")&&s._k(a.keyCode,"enter",13,a.key,"Enter")?null:s.save.apply(null,arguments)}},model:{value:s.oldPassword,callback:function(a){s.oldPassword=a},expression:"oldPassword"}})],1)]),e("div",{staticClass:"row q-mb-md"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.LABEL_SECURITY_NEW_PASS",expression:"'ADMINPANELWEBCLIENT.LABEL_SECURITY_NEW_PASS'"}],staticClass:"col-2 q-my-sm"}),e("div",{staticClass:"col-5"},[e("q-input",{ref:"newPassword",attrs:{outlined:"",dense:"","bg-color":"white",type:"password",autocomplete:"new-password"},on:{keyup:function(a){return!a.type.indexOf("key")&&s._k(a.keyCode,"enter",13,a.key,"Enter")?null:s.save.apply(null,arguments)}},model:{value:s.newPassword,callback:function(a){s.newPassword=a},expression:"newPassword"}})],1)]),e("div",{staticClass:"row q-mb-md"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.LABEL_SECURITY_CONFIRM_PASS",expression:"'ADMINPANELWEBCLIENT.LABEL_SECURITY_CONFIRM_PASS'"}],staticClass:"col-2 q-my-sm"}),e("div",{staticClass:"col-5"},[e("q-input",{attrs:{outlined:"",dense:"","bg-color":"white",type:"password",autocomplete:"new-password"},on:{keyup:function(a){return!a.type.indexOf("key")&&s._k(a.keyCode,"enter",13,a.key,"Enter")?null:s.save.apply(null,arguments)}},model:{value:s.confirmNewPassword,callback:function(a){s.confirmNewPassword=a},expression:"confirmNewPassword"}})],1)]),e("div",{staticClass:"row"},[e("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_LANGUAGE",expression:"'COREWEBCLIENT.LABEL_LANGUAGE'"}],staticClass:"col-2 q-my-sm"}),e("div",{staticClass:"col-5"},[e("q-select",{attrs:{outlined:"",dense:"","bg-color":"white","emit-value":"","map-options":"",options:s.languageOptions,"option-label":"name"},model:{value:s.language,callback:function(a){s.language=a},expression:"language"}})],1)])])],1),e("div",{staticClass:"q-pt-md text-right"},[e("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:s.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:s.save}})],1)],1)]),e("q-inner-loading",{staticStyle:{"justify-content":"flex-start"},attrs:{showing:s.saving}},[e("q-linear-progress",{attrs:{query:""}})],1)],1)},n=[],i=(e("498a"),e("2ef0")),o=e.n(i),r=e("4245"),l=e("21ac"),d=e("e539"),c=e("83d6"),E={name:"AdminAccount",data:function(){return{login:"",oldPassword:"",newPassword:"",confirmNewPassword:"",language:"",languageOptions:[],saving:!1,adminHasPassword:!1}},beforeRouteLeave:function(s,a,e){this.doBeforeRouteLeave(s,a,e)},mounted:function(){this.languageOptions=c["a"].getLanguageList(),this.saving=!1,this.populate()},methods:{populate:function(){var s=c["a"].getAdminAccountData();this.login=s.adminLogin,this.oldPassword="",this.newPassword="",this.confirmNewPassword="",this.language=s.adminLanguage,this.adminHasPassword=s.adminHasPassword},hasChanges:function(){var s=c["a"].getAdminAccountData();return this.login!==s.adminLogin||""!==this.oldPassword||""!==this.newPassword||""!==this.confirmNewPassword||this.language!==s.adminLanguage},revertChanges:function(){this.populate()},isDataValid:function(){var s=o.a.trim(this.oldPassword),a=o.a.trim(this.newPassword),e=o.a.trim(this.confirmNewPassword);return""===s&&""===a&&""===e||(this.adminHasPassword&&""===s?(l["a"].showError(this.$t("ADMINPANELWEBCLIENT.ERROR_CURRENT_PASSWORD_EMPTY")),this.$refs.oldPassword.$el.focus(),!1):this.adminHasPassword||""===s?""===a?(l["a"].showError(this.$t("ADMINPANELWEBCLIENT.ERROR_NEW_PASSWORD_EMPTY")),this.$refs.newPassword.$el.focus(),!1):a===e||(l["a"].showError(this.$t("COREWEBCLIENT.ERROR_PASSWORDS_DO_NOT_MATCH")),this.$refs.newPassword.$el.focus(),!1):(l["a"].showError(this.$t("COREWEBCLIENT.ERROR_CURRENT_PASSWORD_NOT_CORRECT")),this.$refs.oldPassword.$el.focus(),!1))},save:function(){var s=this;if(!this.saving&&this.isDataValid()){this.saving=!0;var a={AdminLogin:this.login,AdminLanguage:this.language};o.a.isEmpty(this.newPassword)||(a.Password=this.oldPassword,a.NewPassword=this.newPassword),d["a"].sendRequest({moduleName:"Core",methodName:"UpdateSettings",parameters:a}).then((function(e){s.saving=!1,!0===e?(c["a"].saveAdminAccountData({login:a.AdminLogin,hasPassword:!o.a.isEmpty(a.NewPassword)||s.adminHasPassword,language:a.AdminLanguage}),s.populate(),l["a"].showReport(s.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):l["a"].showError(s.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(a){s.saving=!1,l["a"].showError(r["a"].getTextFromResponse(a,s.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}}}},u=E,w=e("2877"),m=e("4983"),N=e("f09f"),p=e("a370"),C=e("27f9"),g=e("ddd8"),L=e("9c40"),A=e("74f7"),v=e("6b1d"),h=e("eebe"),P=e.n(h),f=Object(w["a"])(u,t,n,!1,null,"46de42b6",null);a["default"]=f.exports;P()(f,"components",{QScrollArea:m["a"],QCard:N["a"],QCardSection:p["a"],QInput:C["a"],QSelect:g["a"],QBtn:L["a"],QInnerLoading:A["a"],QLinearProgress:v["a"]})}}]);