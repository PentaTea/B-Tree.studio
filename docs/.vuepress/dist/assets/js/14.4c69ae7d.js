(window.webpackJsonp=window.webpackJsonp||[]).push([[14,16],{217:function(t,e,n){},237:function(t,e,n){"use strict";var u=n(217);n.n(u).a},238:function(t,e,n){},245:function(t,e,n){"use strict";n.r(e);var u=n(27),o=n(2),a={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"发现内容更新",buttonText:"刷新"},updateEvent:null}},computed:{popupConfig:function(){return Object(o.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||a["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||a["/"].buttonText}},created:function(){u.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现内容更新",buttonText:"刷新"}&&(this.rawPopupConfig=a)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(237),n(12)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},284:function(t,e,n){"use strict";var u=n(238);n.n(u).a},298:function(t,e,n){"use strict";n.r(e);var u={components:{SWUpdatePopup:n(245).default}},o=(n(284),n(12)),a=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var u=e.enabled,o=e.reload,a=e.message,s=e.buttonText;return[u?n("button",{staticClass:"custom-sw-update-popup",on:{click:o}},[n("h3",[t._v(t._s(a))]),t._v(" "),n("h3",[t._v(t._s(s))])]):t._e()]}}])})}),[],!1,null,null,null);e.default=a.exports}}]);