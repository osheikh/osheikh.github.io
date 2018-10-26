(function(t){function o(o){for(var a,i,n=o[0],l=o[1],c=o[2],p=0,d=[];p<n.length;p++)i=n[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(o);while(d.length)d.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],a=!0,n=1;n<e.length;n++){var l=e[n];0!==r[l]&&(a=!1)}a&&(s.splice(o--,1),t=i(i.s=e[0]))}return t}var a={},r={app:0},s=[];function i(o){if(a[o])return a[o].exports;var e=a[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)i.d(e,a,function(o){return t[o]}.bind(null,a));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=o,n=n.slice();for(var c=0;c<n.length;c++)o(n[c]);var h=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"56d7":function(t,o,e){"use strict";e.r(o);var a=e("2b0e"),r=e("bb71");e("da64"),e("15f5");a["a"].use(r["a"],{iconfont:"fa"});var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("swingdev ")]),a("span",{staticClass:"font-weight-light"},[t._v("PHOTO GALLERY")])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",href:"https://www.swingdev.io/",target:"_blank",icon:""}},[a("v-img",{attrs:{src:e("621a"),contain:""}})],1)],1),a("v-content",[a("photo-gallery")],1)],1)},i=[],n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{attrs:{"grid-list-sm":!0,fluid:""}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("v-toolbar",{attrs:{color:"grey darken-3",dense:"",floating:""}},[e("v-text-field",{attrs:{dark:"","hide-details":"",color:"teal accent-3","background-color":"grey darken-3","prepend-icon":"search","single-line":""},model:{value:t.search,callback:function(o){t.search=o},expression:"search"}}),e("v-btn",{attrs:{color:"teal accent-3",icon:""},on:{click:function(o){t.searchPhotos()}}},[e("v-icon",[t._v("fas fa-camera-retro")])],1)],1)],1),e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.photos,function(o,a){return e("v-flex",{key:a,attrs:{xs4:""}},[e("photo-card",{staticClass:"ma-4",attrs:{photo:o},on:{error:function(o){t.snackbar=!0}}})],1)})),e("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[e("v-card",{attrs:{color:"grey darken-3",dark:""}},[e("v-card-text",[t._v("\n        Loading Images ...\n        "),e("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"teal accent-3"}})],1)],1)],1),e("v-snackbar",{attrs:{bottom:"bottom"===t.y,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(o){t.snackbar=o},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),e("v-btn",{attrs:{color:"teal accent-3",flat:""},on:{click:function(o){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},l=[],c=e("bc3a"),h=e.n(c),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var a=o.hover;return e("v-card",{class:"elevation-"+(a?12:2),attrs:{dark:""}},[e("v-img",{attrs:{src:t.url,"lazy-src":t.url,"aspect-ratio":"1"}},[e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-layout",{attrs:{"fill-height":""}},[e("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.title))])])],1)],1)],1),e("v-card-actions",{staticClass:"text-xs-center"},[e("v-spacer"),e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",flat:"",icon:"",color:"teal accent-3"},on:{click:function(o){o.stopPropagation(),t.showImages=!0}},slot:"activator"},[e("v-icon",{attrs:{dark:""}},[t._v("fas fa-images\n          ")])],1),e("span",[t._v("author’s other pictures")])],1),e("v-btn",{attrs:{flat:"",icon:"",color:"teal accent-3"},on:{click:function(o){o.stopPropagation(),t.showMap=!0}}},[e("v-icon",{attrs:{dark:""}},[t._v("fas fa-map-marked-alt")])],1),e("v-btn",{attrs:{flat:"",icon:"",color:"teal accent-3"},on:{click:function(o){o.stopPropagation(),t.showFullPic=!0}}},[e("v-icon",{attrs:{dark:""}},[t._v("fas fa-expand")])],1),e("v-btn",{attrs:{icon:""},on:{click:function(o){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),e("v-slide-y-transition",[e("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-flex",{attrs:{xs12:""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs7:""}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(t.owner_info.realname))]),e("div",[t._v(t._s(t.owner_info.location))]),e("div",[t._v(t._s(t.date))])])])],1),e("v-flex",{attrs:{xs5:""}},[e("v-avatar",{attrs:{slot:"activator",size:"125px"},slot:"activator"},[e("img",{attrs:{src:t.avatarUrl,alt:"Avatar"}})])],1)],1),e("v-divider",{attrs:{light:""}}),t._v("\n          "+t._s(t.description)+"\n        ")],1)],1)],1),e("full-screen-modal",{attrs:{photo:t.url,visible:t.showFullPic,title:t.title},on:{close:function(o){t.showFullPic=!1}}}),e("map-modal",{attrs:{picID:t.photo.id,visible:t.showMap},on:{close:function(o){t.showMap=!1}}}),e("show-more-images",{attrs:{nsid:t.owner_info.nsid,visible:t.showImages,author:t.owner_info.realname},on:{close:function(o){t.showImages=!1}}})],1)}}])})},d=[],u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"50%"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("v-card",{attrs:{tile:""}},[e("v-toolbar",{attrs:{card:"",dark:"",color:"teal accent-3"}},[e("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(o){t.show=!1}}},[e("v-icon",[t._v("close")])],1),e("v-toolbar-title",[t._v(t._s(t.title))]),e("v-spacer")],1),e("v-img",{attrs:{src:t.photo,"lazy-src":t.photo,contain:""}})],1)],1)},f=[],v={props:["visible","photo","title"],computed:{show:{get(){return this.visible},set(t){t||this.$emit("close")}}}},g=v,m=e("2877"),b=e("6544"),_=e.n(b),k=e("8336"),w=e("b0af"),y=e("169a"),V=e("132d"),x=e("adda"),j=e("9910"),I=e("71d9"),P=e("2a7f"),M=Object(m["a"])(g,u,f,!1,null,null,null);M.options.__file="FullScreenModal.vue";var C=M.exports;_()(M,{VBtn:k["a"],VCard:w["a"],VDialog:y["a"],VIcon:V["a"],VImg:x["a"],VSpacer:j["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{scrollable:"",width:"50%"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("v-card",[e("v-toolbar",{attrs:{card:"",dark:"",color:"teal accent-3"}},[e("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(o){t.show=!1}}},[e("v-icon",[t._v("close")])],1),e("v-toolbar-title",[t._v("Photo Location")]),e("v-spacer")],1),e("google-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:7}},t._l(t.markers,function(o,a){return e("google-marker",{key:a,attrs:{position:o.position,clickable:!0,draggable:!0},on:{click:function(e){t.center=o.position}}})}))],1)],1)},T=[],A=e("be6f"),$={name:"MapModal",data(){return{center:{lat:45.508,lng:-73.587},markers:[]}},props:["picID","visible"],computed:{show:{get(){return this.visible},set(t){t||this.$emit("close")}}},watch:{picID(){this.picID&&this.fetchGeoPosition(this.picID).then(({data:t})=>{this.addMarker(t.photo.location)})}},created(){this.fetchGeoPosition(this.picID).then(({data:t})=>{this.addMarker(t.photo.location)}).catch(t=>{console.log(t)})},methods:{addMarker(t){const o={lat:+t.latitude,lng:+t.longitude};this.markers.push({position:o}),this.center=o},fetchGeoPosition(t){return h()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.geo.getLocation",api_key:A.flickrApiKey.Key,photo_id:t,format:"json",nojsoncallback:1}})}}},S=$,D=Object(m["a"])(S,O,T,!1,null,null,null);D.options.__file="MapModal.vue";var E=D.exports;_()(D,{VBtn:k["a"],VCard:w["a"],VDialog:y["a"],VIcon:V["a"],VSpacer:j["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var F=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("v-card",{attrs:{tile:""}},[e("v-toolbar",{attrs:{card:"",dark:"",color:"teal accent-3"}},[e("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(o){t.show=!1}}},[e("v-icon",[t._v("close")])],1),e("v-toolbar-title",[t._v(t._s(t.author)+"'s Other Work")]),e("v-spacer")],1),e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.images,function(t,o){return e("v-flex",{key:o,attrs:{xs4:"","d-flex":""}},[e("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[e("v-img",{staticClass:"grey lighten-2",attrs:{src:t,"lazy-src":t,"aspect-ratio":"1"}},[e("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}))],1)],1),e("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)},K=[],L={props:["nsid","visible","author"],computed:{show:{get(){return this.visible},set(t){t||this.$emit("close")}}},data(){return{images:[],photoObjs:[]}},watch:{nsid(){this.nsid&&this.fetchMorePhotos(this.nsid).then(({data:t})=>{this.photoObjs.splice(0,this.photoObjs.length),this.images.splice(0,this.images.length),this.photoObjs.push(...t.photos.photo),this.photoObjs.forEach(t=>{this.images.push(`https://farm${t.farm}.staticflickr.com/${t.server}/${t.id}_${t.secret}.jpg`)})}).catch(t=>{console.log(t)})}},methods:{fetchMorePhotos(){return h()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.search",api_key:A.flickrApiKey.Key,user_id:this.nsid,page:1,format:"json",nojsoncallback:1,per_page:9}})}}},B=L,z=e("a523"),G=e("0e8f"),N=e("a722"),H=e("490a"),J=Object(m["a"])(B,F,K,!1,null,null,null);J.options.__file="ShowMoreImages.vue";var U=J.exports;_()(J,{VBtn:k["a"],VCard:w["a"],VContainer:z["a"],VDialog:y["a"],VFlex:G["a"],VIcon:V["a"],VImg:x["a"],VLayout:N["a"],VProgressCircular:H["a"],VSpacer:j["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var X={data(){return{card_info:{},owner_info:{},show:!1,showFullPic:!1,showMap:!1,showImages:!1}},components:{FullScreenModal:C,MapModal:E,ShowMoreImages:U},props:{photo:Object},watch:{photo(){this.photo&&this.fetchInfo(this.photo.id).then(({data:t})=>{this.card_info=t.photo,this.owner_info=this.card_info.owner}).catch(()=>{this.$emit("error")})}},created(){this.fetchInfo(this.photo.id).then(({data:t})=>{this.card_info=t.photo,this.owner_info=this.card_info.owner}).catch(()=>{this.$emit("error")})},computed:{avatarUrl(){return this.owner_info.iconserver>0?`http://farm${this.owner_info.iconfarm}.staticflickr.com/${this.owner_info.iconserver}/buddyicons/${this.owner_info.nsid}.jpg`:"https://www.flickr.com/images/buddyicon.gif"},url(){return`https://farm${this.photo.farm}.staticflickr.com/${this.photo.server}/${this.photo.id}_${this.photo.secret}.jpg`},description(){let t=this.card_info.description;return t&&""!==t._content?t._content:"No Description Available"},date(){return"dates"in this.card_info?this.card_info.dates.taken:"N/A"},title(){return this.card_info.title?this.card_info.title._content:""}},methods:{fetchInfo(t){return h()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.getInfo",api_key:A.flickrApiKey.Key,photo_id:t,format:"json",nojsoncallback:1}})}}},Y=X,q=e("8212"),R=e("99d9"),W=e("12b2"),Q=e("ce7e"),Z=e("ce87"),tt=e("0789"),ot=e("3a2f"),et=Object(m["a"])(Y,p,d,!1,null,null,null);et.options.__file="PhotoCard.vue";var at=et.exports;_()(et,{VAvatar:q["a"],VBtn:k["a"],VCard:w["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:W["a"],VContainer:z["a"],VDivider:Q["a"],VFlex:G["a"],VHover:Z["a"],VIcon:V["a"],VImg:x["a"],VLayout:N["a"],VSlideYTransition:tt["c"],VSpacer:j["a"],VTooltip:ot["a"]});var rt={data(){return{photos:[],page:1,dialog:!1,snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,text:"Error, Unable To Connect To API",search:"dog"}},components:{PhotoCard:at},mounted(){this.scroll()},beforeMount(){this.fetchImages(this.search).then(t=>{this.photos=t.data.photos.photo}).catch(()=>{this.snackbar=!0})},methods:{fetchImages(t){return h()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.search",api_key:A.flickrApiKey.Key,text:t,extras:"url_n",page:this.page,format:"json",nojsoncallback:1,has_geo:1,per_page:30}})},searchPhotos(){""==this.search.trim()&&(this.search="dog"),this.dialog=!0,this.fetchImages(this.search).then(t=>{this.photos.splice(0,this.photos.length),this.photos.push(...t.data.photos.photo),this.dialog=!1}).catch(()=>{this.snackbar=!0})},scroll(){window.onscroll=(()=>{let t=(document.documentElement.scrollTop+window.innerHeight)/document.documentElement.offsetHeight>=.99;t&&!this.dialog&&(this.dialog=!0,this.page++,this.fetchImages(this.search).then(t=>{this.photos.push(...t.data.photos.photo),this.dialog=!1}))})}}},st=rt,it=(e("d394"),e("8e36")),nt=e("2db4"),lt=e("2677"),ct=Object(m["a"])(st,n,l,!1,null,null,null);ct.options.__file="PhotoGallery.vue";var ht=ct.exports;_()(ct,{VBtn:k["a"],VCard:w["a"],VCardText:R["b"],VContainer:z["a"],VDialog:y["a"],VFlex:G["a"],VIcon:V["a"],VLayout:N["a"],VProgressLinear:it["a"],VSnackbar:nt["a"],VTextField:lt["a"],VToolbar:I["a"]});var pt={name:"App",components:{PhotoGallery:ht},data(){return{}}},dt=pt,ut=e("7496"),ft=e("549c"),vt=Object(m["a"])(dt,s,i,!1,null,null,null);vt.options.__file="App.vue";var gt=vt.exports;_()(vt,{VApp:ut["a"],VBtn:k["a"],VContent:ft["a"],VImg:x["a"],VSpacer:j["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var mt=e("9483");Object(mt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var bt=e("755e");a["a"].config.productionTip=!1,new a["a"]({render:t=>t(gt)}).$mount("#app"),a["a"].use(bt,{load:{key:A.googleMapsApi.key}}),a["a"].component("google-map",bt["Map"]),a["a"].component("google-marker",bt["Marker"])},"621a":function(t,o,e){t.exports=e.p+"img/swingdev.820a6795.png"},be6f:function(t){t.exports={flickrApiKey:{Key:"1647ac1edc782bb060d15132ceb25556",Secret:"0af02815399d4eae"},googleMapsApi:{key:"AIzaSyA7Sm6cYmee1JXqXJtAXP3fvj6A41MKuVk"}}},d394:function(t,o,e){"use strict";var a=e("d3fb"),r=e.n(a);r.a},d3fb:function(t,o,e){}});
//# sourceMappingURL=app.45ae6183.js.map