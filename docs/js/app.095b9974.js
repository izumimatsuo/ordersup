(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ordersup/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[a("v-toolbar-title",[t._v("注文票")]),a("v-spacer"),t._l(t.pages.length,(function(e){return a("v-icon",{key:e},[t._v(" mdi-numeric-"+t._s(e)+"-circle"+t._s(t.pages[e-1]?"":"-outline")+" ")])})),a("v-spacer"),a("v-btn",{attrs:{outlined:"",small:""},on:{click:t.reset}},[t._v(" リセット ")])],2),a("v-content",[a("router-view",{ref:"order",on:{updated:t.commit}})],1),a("v-footer",{attrs:{color:"primary",dark:"",app:""}},[a("v-col",{staticClass:"text-left"},[t._v(" 合計 "+t._s((t.total+t.total*t.tax).toLocaleString())+" 円"),a("br"),t._v("（"+t._s(t.total)+"+"+t._s(t.total*t.tax)+"） ")]),a("v-spacer"),a("v-btn",{attrs:{"x-large":"",icon:""},on:{click:t.reduce}},[a("v-icon",[t._v("mdi-calculator")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.prev}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.next}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)},i=[],o=(a("c975"),a("13d5"),{data:function(){return{tax:.1,total:0,pages:[!0,!1,!1,!1,!1]}},methods:{commit:function(t){this.total=t},reset:function(){this.$refs.order.onClear();for(var t=0;t<this.pages.length;t++)this.$set(this.pages,t,!1),this.$refs.order.removeData(t);this.$set(this.pages,0,!0)},reduce:function(){this.$refs.order.reduce()},prev:function(){var t=this.pages.indexOf(!0);t>0&&(this.$set(this.pages,t,!1),this.$set(this.pages,t-1,!0),this.$refs.order.saveData(t),this.$refs.order.loadData(t-1))},next:function(){var t=this.pages.indexOf(!0);t<4&&this.total>0&&(this.pages[t]=!1,this.$set(this.pages,t,!1),this.$set(this.pages,t+1,!0),this.$refs.order.saveData(t),this.$refs.order.loadData(t+1))}}}),s=o,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),v=a("8336"),h=a("62ad"),f=a("a75b"),m=a("553a"),g=a("132d"),y=a("2fa4"),b=a("2a7f"),_=Object(l["a"])(s,n,i,!1,null,null,null),x=_.exports;u()(_,{VApp:d["a"],VAppBar:p["a"],VBtn:v["a"],VCol:h["a"],VContent:f["a"],VFooter:m["a"],VIcon:g["a"],VSpacer:y["a"],VToolbarTitle:b["a"]});var w=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{style:t.hidden?"display:none":"",attrs:{color:"primary",dark:"",app:""}},[[a("v-tabs",{attrs:{"show-arrows":""}},t._l(t.navi_list.length,(function(e){return a("v-tab",{key:e,on:{click:function(a){return t.jump("#"+t.navi_list[e-1])}}},[t._v(" "+t._s(t.navi_list[e-1])+" ")])})),1)]],2),a("v-container",{staticClass:"grey lighten-5"},[[a("v-row",{staticClass:"blue lighten-4",style:0==t.total&&t.hidden?"":"display:none"},[a("v-col",[a("p",{staticClass:"text-center"},[t._v(" 余白 ")])])],1)],t._l(t.items,(function(e,r){return[e.header?a("v-row",{key:r,staticClass:"blue lighten-4",style:t.hidden?"display:none":"",attrs:{"no-gutters":""}},[a("v-col",[a("v-subheader",[a("p",{staticStyle:{"margin-top":"-80px","padding-top":"80px"},attrs:{id:e.tab}},[t._v(" "+t._s(e.header)+" ")])])],1)],1):a("v-row",{key:r,class:e.value?"grey lighten-3":"",style:"セット"==e.text&&0!=t.total||e.value||!t.hidden?"":"display:none",attrs:{"no-gutters":"",align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-checkbox",{attrs:{label:e.text,value:e.value,dense:"false"},on:{change:function(a){return t.onChange(e)}}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-card-text",{staticClass:"text-right"},[t._v(" "+t._s(e.price.toLocaleString())+" 円 ")])],1),a("v-col",{attrs:{cols:"2"}},[a("v-card-text",{staticClass:"text-right"},[t._v(" "+t._s(e.unit)+" 個 ")])],1),a("v-col",{attrs:{cols:"3"}},[a("div",[a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(a){return t.plus(e)}}},[a("v-icon",[t._v(" mdi-plus-circle ")])],1),a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(a){return t.minus(e)}}},[a("v-icon",[t._v(" mdi-minus-circle ")])],1)],1)])],1)]}))],2)],1)},$=[],k=(a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),a("bc3a")),C=a.n(k),O={data:function(){return{items:[],navi_list:[],total:0,hidden:!1}},created:function(){var t=this;C.a.get("menu.json").then((function(e){t.items=e.data;var a=!0,r=!1,n=void 0;try{for(var i,o=t.items[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var s=i.value;s.header&&t.navi_list.push(s.tab)}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}}))},methods:{onClear:function(){var t=!0,e=!1,a=void 0;try{for(var r,n=this.items[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var i=r.value;i.value=!1,i.unit=0}}catch(o){e=!0,a=o}finally{try{t||null==n.return||n.return()}finally{if(e)throw a}}this.total=0,this.navi_index=0,window.location.href="#top",this.$emit("updated",this.total)},onChange:function(t){t.value=!t.value,t.value?(this.total+=t.price,t.unit=1):(this.total-=t.price*t.unit,t.unit=0),this.$emit("updated",this.total)},jump:function(t){window.location.href=t},reduce:function(){this.hidden=!this.hidden,window.location.href="#top"},plus:function(t){t.unit>0&&(this.total+=t.price,++t.unit,this.$emit("updated",this.total))},minus:function(t){t.unit>1&&(this.total-=t.price,--t.unit,this.$emit("updated",this.total))},saveData:function(t){localStorage.setItem("page-"+t,JSON.stringify(this.items))},loadData:function(t){var e=localStorage.getItem("page-"+t)||this.items;this.onClear(),this.items=JSON.parse(e);var a=!0,r=!1,n=void 0;try{for(var i,o=this.items[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var s=i.value;s.value&&(this.total+=s.price*s.unit)}}catch(l){r=!0,n=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw n}}this.hidden=!0,this.$emit("updated",this.total)},removeData:function(t){localStorage.removeItem("page-"+t),this.onClear()}}},S=O,j=a("99d9"),D=a("ac7c"),T=a("a523"),P=a("0fd9"),I=a("e0c7"),A=a("71a3"),B=a("fe57"),J=Object(l["a"])(S,V,$,!1,null,null,null),M=J.exports;u()(J,{VApp:d["a"],VAppBar:p["a"],VBtn:v["a"],VCardText:j["a"],VCheckbox:D["a"],VCol:h["a"],VContainer:T["a"],VIcon:g["a"],VRow:P["a"],VSubheader:I["a"],VTab:A["a"],VTabs:B["a"]}),r["a"].use(w["a"]);var E=[{path:"/",name:"Order",component:M}],L=new w["a"]({mode:"history",base:"/ordersup/",routes:E}),N=L,F=a("f309");r["a"].use(F["a"]);var R=new F["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:N,vuetify:R,render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.095b9974.js.map