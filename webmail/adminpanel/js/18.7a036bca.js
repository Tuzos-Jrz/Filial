(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"5d6c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-layout",[n("q-splitter",{staticClass:"full-height full-width",attrs:{"after-class":t.showTabs?"":"q-splitter__right-panel",limits:[10,30]},scopedSlots:t._u([{key:"before",fn:function(){return[n("div",{staticClass:"flex column full-height "},[n("q-toolbar",{staticClass:"col-auto q-py-sm list-border"},[n("q-btn",{attrs:{flat:"",color:"grey-8",size:"mg","no-wrap":"",disable:0===t.checkedIds.length},on:{click:t.askDeleteCheckedTenants}},[n("Trash"),n("span",[t._v(t._s(t.countLabel))]),n("q-tooltip",[t._v("\n              "+t._s(t.$t("COREWEBCLIENT.ACTION_DELETE"))+"\n            ")])],1),n("q-btn",{attrs:{flat:"",color:"grey-8",size:"mg"},on:{click:t.routeCreateTenant}},[n("Add"),n("q-tooltip",[t._v("\n              "+t._s(t.$t("ADMINPANELWEBCLIENT.ACTION_CREATE_ENTITY_TENANT"))+"\n            ")])],1)],1),n("StandardList",{ref:"tenantList",staticClass:"col-grow list-border",attrs:{items:t.tenantItems,selectedItem:t.selectedTenantId,loading:t.loadingTenants,search:t.search,page:t.page,pagesCount:t.pagesCount,noItemsText:"ADMINPANELWEBCLIENT.INFO_NO_ENTITIES_TENANT",noItemsFoundText:"ADMINPANELWEBCLIENT.INFO_NO_ENTITIES_FOUND_TENANT"},on:{route:t.route,check:t.afterCheck}})],1)]},proxy:!0},{key:"after",fn:function(){return[t.showTabs?n("q-splitter",{staticClass:"full-height full-width",attrs:{"after-class":"q-splitter__right-panel",limits:[10,30]},scopedSlots:t._u([{key:"before",fn:function(){return[n("q-list",[n("div",[n("q-item",{class:""===t.selectedTab?"bg-selected-item":"",attrs:{clickable:""},on:{click:function(e){return t.route(t.selectedTenantId)}}},[n("q-item-section",[n("q-item-label",{directives:[{name:"t",rawName:"v-t",value:"ADMINPANELWEBCLIENT.LABEL_COMMON_SETTINGS_TAB",expression:"'ADMINPANELWEBCLIENT.LABEL_COMMON_SETTINGS_TAB'"}],attrs:{lines:"1"}})],1)],1),n("q-separator")],1),t._l(t.tabs,(function(e){return n("div",{key:e.tabName},[n("q-item",{class:t.selectedTab===e.tabName?"bg-selected-item":"",attrs:{clickable:""},on:{click:function(n){return t.route(t.selectedTenantId,e.tabName)}}},[n("q-item-section",[n("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(t.$t(e.tabTitle)))])],1)],1),n("q-separator")],1)}))],2)]},proxy:!0},{key:"after",fn:function(){return[n("router-view",{attrs:{deletingIds:t.deletingIds},on:{"tenant-created":t.handleCreateTenant,"cancel-create":t.route,"delete-tenant":t.askDeleteTenant}})]},proxy:!0}],null,!1,1501921303),model:{value:t.tabsSplitterWidth,callback:function(e){t.tabsSplitterWidth=e},expression:"tabsSplitterWidth"}}):t._e(),t.showTabs?t._e():n("router-view",{attrs:{deletingIds:t.deletingIds},on:{"tenant-created":t.handleCreateTenant,"cancel-create":t.route,"delete-tenant":t.askDeleteTenant}})]},proxy:!0}]),model:{value:t.listSplitterWidth,callback:function(e){t.listSplitterWidth=e},expression:"listSplitterWidth"}},[n("ConfirmDialog",{ref:"confirmDialog"})],1)],1)},s=[],i=(n("7db0"),n("d3b7"),n("d81d"),n("b0c0"),n("ac1f"),n("841c"),n("1276"),n("4de4"),n("fb6a"),n("2ef0")),l=n.n(i),r=n("4245"),o=n("21ac"),d=n("6bfe"),c=n("e539"),u=n("0091"),h=n("83d6"),T=n("713b"),p=n("96ec"),I=n("2287"),f=n("2e52"),g=n("952a"),m={name:"Tenants",components:{MainLayout:T["a"],ConfirmDialog:p["a"],StandardList:I["a"],Add:f["a"],Trash:g["a"]},data:function(){return{tenants:[],selectedTenantId:0,loadingTenants:!1,totalCount:0,search:"",page:1,limit:h["a"].getEntitiesPerPage(),tenantItems:[],checkedIds:[],justCreatedId:0,deletingIds:[],tabs:[],selectedTab:"",listSplitterWidth:d["a"].pInt(localStorage.getItem("tenants-list-splitter-width"),20),tabsSplitterWidth:d["a"].pInt(localStorage.getItem("tenants-tabs-splitter-width"),20)}},computed:{currentTenantId:function(){return this.$store.getters["tenants/getCurrentTenantId"]},allTenants:function(){return this.$store.getters["tenants/getTenants"]},pagesCount:function(){return Math.ceil(this.totalCount/this.limit)},countLabel:function(){var t=this.checkedIds.length;return t>0?t:""},showTabs:function(){return this.tabs.length>0&&this.selectedTenantId>0}},watch:{$route:function(t,e){this.parseRoute()},allTenants:function(){var t=this;this.populate();var e=!1;this.justCreatedId&&this.allTenants.find((function(e){return e.id===t.justCreatedId}))&&(this.tenants.find((function(e){return e.id===t.justCreatedId}))&&(this.route(this.justCreatedId),e=!0),this.justCreatedId=0),0!==this.selectedTenantId||e||this.route(this.currentTenantId)},tenants:function(){this.tenants?this.tenantItems=this.tenants.map((function(t){return{id:t.id,title:t.name,checked:!1}})):this.tenantItems=[]},currentTenantId:function(){this.currentTenantId!==this.selectedTenantId&&this.route(this.currentTenantId)},selectedTenantId:function(){this.currentTenantId!==this.selectedTenantId&&0!==this.selectedTenantId&&this.$store.commit("tenants/setCurrentTenantId",this.selectedTenantId)},listSplitterWidth:function(){localStorage.setItem("tenants-list-splitter-width",this.listSplitterWidth)},tabsSplitterWidth:function(){localStorage.setItem("tenants-tabs-splitter-width",this.tabsSplitterWidth)}},mounted:function(){this.populateTabs(),this.parseRoute(),this.populate()},methods:{populateTabs:function(){this.tabs=u["a"].getAdminEntityTabs("getAdminTenantTabs").map((function(t){return{tabName:t.tabName,tabTitle:t.tabTitle}}))},parseRoute:function(){if("/tenants/create"===this.$route.path)this.selectedTenantId=0;else{var t,e,n,a,s,i,l=d["a"].pString(null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.search),r=d["a"].pPositiveInt(null===(n=this.$route)||void 0===n||null===(a=n.params)||void 0===a?void 0:a.page);this.search===l&&this.page===r&&0===this.justCreatedId||(this.search=l,this.page=r,this.populate());var o=d["a"].pNonNegativeInt(null===(s=this.$route)||void 0===s||null===(i=s.params)||void 0===i?void 0:i.id);this.selectedTenantId!==o&&(this.selectedTenantId=o);var c=this.$route.path.split("/"),u=c.length>0?c[c.length-1]:"",h=this.tabs.find((function(t){return t.tabName===u}));this.selectedTab=h?h.tabName:""}},populate:function(){var t=this.search.toLowerCase(),e=""===t?this.allTenants:this.allTenants.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t)}));this.totalCount=e.length;var n=this.limit*(this.page-1);this.tenants=e.slice(n,n+this.limit)},route:function(){var t,e,n,a,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=(null===(t=this.$refs)||void 0===t||null===(e=t.tenantList)||void 0===e?void 0:e.enteredSearch)||"",r=""!==l?"/search/".concat(l):"",o=(null===(n=this.$refs)||void 0===n||null===(a=n.tenantList)||void 0===a?void 0:a.selectedPage)||1;this.search!==l&&(o=1);var d=o>1?"/page/".concat(o):"",c=s>0?"/id/".concat(s):"",u=""!==i?"/".concat(i):"",h="/tenants"+r+d+c+u;h!==this.$route.path&&this.$router.push(h)},routeCreateTenant:function(){this.$router.push("/tenants/create")},handleCreateTenant:function(t){this.justCreatedId=t,this.route(),this.$store.dispatch("tenants/requestTenants")},afterCheck:function(t){this.checkedIds=t},askDeleteTenant:function(t){this.askDeleteTenants([t])},askDeleteCheckedTenants:function(){this.askDeleteTenants(this.checkedIds)},askDeleteTenants:function(t){var e,n;if(l.a.isFunction(null===this||void 0===this||null===(e=this.$refs)||void 0===e||null===(n=e.confirmDialog)||void 0===n?void 0:n.openDialog)){var a=1===t.length?this.tenants.find((function(e){return e.id===t[0]})):null,s=a?a.name:"";this.$refs.confirmDialog.openDialog({title:s,message:this.$tc("ADMINPANELWEBCLIENT.CONFIRM_DELETE_TENANT_PLURAL",t.length),okHandler:this.deleteTenants.bind(this,t)})}},deleteTenants:function(t){var e=this;this.deletingIds=t,this.loadingTenants=!0,c["a"].sendRequest({moduleName:"Core",methodName:"DeleteTenants",parameters:{IdList:t,DeletionConfirmedByAdmin:!0,TenantId:this.currentTenantId,Type:"Tenant"}}).then((function(n){if(e.deletingIds=[],e.loadingTenants=!1,!0===n){var a,s,i,r;o["a"].showReport(e.$tc("ADMINPANELWEBCLIENT.REPORT_DELETE_ENTITIES_TENANT_PLURAL",t.length));var d=-1!==t.indexOf(e.selectedTenantId),c=(null===(a=e.$refs)||void 0===a||null===(s=a.tenantList)||void 0===s?void 0:s.selectedPage)||1,u=e.tenants.length===t.length&&c>1;u&&l.a.isFunction(null===(i=e.$refs)||void 0===i||null===(r=i.tenantList)||void 0===r?void 0:r.decreasePage)?e.$refs.tenantList.decreasePage():d?(e.route(),e.populate()):e.populate()}else o["a"].showError(e.$tc("ADMINPANELWEBCLIENT.ERROR_DELETE_ENTITIES_TENANT_PLURAL",t.length));e.$store.dispatch("tenants/requestTenants")}),(function(n){e.deletingIds=[],e.loadingTenants=!1,o["a"].showError(r["a"].getTextFromResponse(n,e.$tc("ADMINPANELWEBCLIENT.ERROR_DELETE_ENTITIES_TENANT_PLURAL",t.length))),e.$store.dispatch("tenants/requestTenants")}))}}},E=m,N=n("2877"),b=n("8562"),v=n("65c6"),C=n("9c40"),L=n("05c0"),_=n("1c1c"),A=n("66e5"),k=n("4074"),S=n("0170"),D=n("eb85"),$=n("eebe"),w=n.n($),q=Object(N["a"])(E,a,s,!1,null,null,null);e["default"]=q.exports;w()(q,"components",{QSplitter:b["a"],QToolbar:v["a"],QBtn:C["a"],QTooltip:L["a"],QList:_["a"],QItem:A["a"],QItemSection:k["a"],QItemLabel:S["a"],QSeparator:D["a"]})}}]);