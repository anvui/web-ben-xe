(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74e4d840"],{"0035":function(t,e,n){},"3e8e":function(t,e,n){},"4f4d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("step-box-ticket"),n("div",{staticClass:"container"},[n("div",{staticClass:"filter-trip-on-small-screen text-right mt-3"},[n("el-button",{staticClass:"btn-filter",on:{click:function(e){t.drawer.status=!0}}},[t._v(" Lọc "),n("svg",{staticClass:"bi bi-funnel-fill",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"}})])]),n("el-drawer",{attrs:{size:"50%",visible:t.drawer.status,direction:t.drawer.direction},on:{"update:visible":function(e){return t.$set(t.drawer,"status",e)}}},[n("filter-trip")],1)],1),n("div",{staticClass:"row no-margin list-trip-wrapper"},[n("filter-trip"),n("list-trip")],1)])],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},[n("div",{staticClass:"arrange-trip"},[n("label",{staticClass:"title no-margin pb-3"},[t._v(t._s(t.$t("book.filter.arrange.label")))]),n("div",{staticClass:"arrange-by"},[t._l(t.listArrange,(function(e,i){return[n("a",{key:i,class:{active:t.currentArrange&&t.currentArrange===e.id},attrs:{id:e.id},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.arrangeTrip(e.id)}}},[t._v(t._s(e.name))])]}))],2)]),n("div",{staticClass:"list-banner-ads"},[n("hooper",{attrs:{settings:t.hooperSettings}},[t._l(t.companyConfig.companyImage,(function(t){return n("slide",{key:t},[n("div",{staticClass:"row no-gutters justify-content-center"},[n("div",{staticClass:"col-auto"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:t}})])])])])})),n("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),n("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)])},a=[],o=n("5530"),c=(n("99af"),n("7e04")),l=(n("955f"),n("2f62")),u={components:{Hooper:c["a"],Slide:c["d"],HooperNavigation:c["b"],HooperPagination:c["c"]},data:function(){return{listArrange:[{id:"start-time",name:this.$t("book.filter.arrange.startTime")},{id:"cheap-price",name:this.$t("book.filter.arrange.price")}],filters:{startTime:null},currentArrange:null,hooperSettings:{itemsToShow:1,infiniteScroll:!0,trimWhiteSpace:!0,autoPlay:!0,playSpeed:6e3,wheelControl:!1}}},computed:Object(o["a"])({},Object(l["c"])(["trips","companyConfig"])),watch:{},methods:{arrangeTrip:function(t){this.currentArrange=t},viewNews:function(t){window.open("".concat(window.location.origin,"/news/article/").concat(t),"_blank")}}},p=u,d=(n("ee43"),n("2877")),h=Object(d["a"])(p,s,a,!1,null,"b4b5084c",null),f=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list-trip",attrs:{"element-loading-spinner":"el-icon-kbus-loading"}},[t.trips&&t.trips.length>0?n("div",{staticClass:"count-total"},[n("div",{staticClass:"row no-margin"},[n("div",{staticClass:"col-auto"},[n("span",{staticClass:"total-trip"},[t._v(t._s(t.$t("book.trips.totalTrips",{tripsLength:t.trips.length})))])])])]):t._e(),!t.loading&&t.trips&&t.trips.length>0?n("div",{staticClass:"list"},[t._l(t.trips,(function(e,i){return[n("trip",{key:i,attrs:{trip:e,"status-more-info-section":t.moreInfoStatus,"status-selected-trip-section":t.selectedTripStatus},on:{"set-status-more-info-section":t.setStatusMoreInfoSection,"set-status-selected-trip-section":t.setStatusSelectedTripSection}})]}))],2):t._e()])},m=[],g=n("c7eb"),b=n("1da1"),w=n("53ca"),C=(n("a15b"),n("d81d"),n("8040")),y=n("ed08"),_=n("779c"),T={components:{Trip:C["a"],FormCreateTrip:_["a"]},data:function(){return{moreInfoStatus:null,selectedTripStatus:null,loading:!1,mapStartPoint:null,mapEndPoint:null,trips:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["token","dateAndPoint","listPoint","searchTripQuery"])),{},{getDateAndPoint:function(){var t=this.dateAndPoint;return"string"===typeof t?t=JSON.parse(this.dateAndPoint):"object"===Object(w["a"])(t)&&(t=this.dateAndPoint),t}}),watch:{searchTripQuery:function(){var t=Object(b["a"])(Object(g["a"])().mark((function t(e){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getListTrip();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getDateAndPoint:function(){var t=Object(b["a"])(Object(g["a"])().mark((function t(e){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$route.query.tripId||this.$route.params.tripId){t.next=5;break}return this.mapStartPoint=this.getDateAndPoint.startPoint,this.mapEndPoint=this.getDateAndPoint.endPoint,t.next=5,this.getListTrip();case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),"$route.query":function(){var t=Object(b["a"])(Object(g["a"])().mark((function t(e){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.tripId){t.next=3;break}return t.next=3,this.getListTrip();case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;return Object(b["a"])(Object(g["a"])().mark((function e(){var n,i,r;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.$route.params.query){e.next=9;break}return n=t.$route.params.query,i=JSON.parse(decodeURI(n)),console.log(i),r={date:i.startDate.split("-").join(""),companyId:null,startPoint:i.startPoint,endPoint:i.endPoint,type:1,routeIds:null},t.$store.dispatch("system/getPointAndDate",r),e.next=9,t.getListTrip();case 9:e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("warning trips page",e.t0),t.$router.push({name:"Home"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},methods:{setStatusMoreInfoSection:function(t){this.moreInfoStatus=t},setStatusSelectedTripSection:function(t){this.selectedTripStatus=t},getListTrip:function(){var t=this;return Object(b["a"])(Object(g["a"])().mark((function e(){var n,i;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.searchTripQuery,t.searchTripQuery.startPoint&&t.searchTripQuery.endPoint){e.next=4;break}return t.$message.warning("Chọn điểm đi điểm xuống"),e.abrupt("return");case 4:return console.log("param",n),t.loading=!0,e.next=8,t.$store.dispatch("system/getListTrip",n);case 8:i=e.sent,i?(console.log("listtrip",i),t.trips=i,t.trips.map((function(e,n){var i=Object(y["f"])(e.runTime),r=Object(y["a"])(parseInt(i.hours),parseInt(i.minutes),parseInt(i.seconds));t.trips[n]=Object(o["a"])(Object(o["a"])({},e),{},{runTimeMilliseconds:r})}))):t.$message.error(t.$t("message.common.undefinedError")),t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},getTripByTripId:function(){}}},j=T,O=(n("e95a0"),Object(d["a"])(j,v,m,!1,null,"8f23b1a8",null)),P=O.exports,k=n("9341"),x={components:{FilterTrip:f,ListTrip:P,StepBoxTicket:k["a"]},data:function(){return{drawer:{status:!1,direction:"rtl"}}},created:function(){window.addEventListener("resize",this.handleDrawerWhenScreenResize)},destroyed:function(){window.removeEventListener("resize",this.handleDrawerWhenScreenResize)},methods:{handleDrawerWhenScreenResize:function(t){t.target.screen.width<=991&&this.drawer.status&&(this.drawer.status=!0)}}},S=x,A=(n("af96"),Object(d["a"])(S,i,r,!1,null,null,null));e["default"]=A.exports},"568f":function(t,e,n){"use strict";n("98fd")},"63b5":function(t,e,n){"use strict";n("3e8e")},"6fe1":function(t,e,n){},9341:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-step-to-book-ticket"},[n("div",{staticClass:"container"},[n("div",{staticClass:"w-100"},[n("div",{staticClass:"row no-gutters process-booking"},[n("div",{staticClass:"col-md",attrs:{id:"select-trip"}},[t._m(0),n("div",{staticClass:"route-info"},[n("div",{staticClass:"route"},[n("div",{staticClass:"province-name"},[t.searchTripQuery?[n("span",{attrs:{id:"start-point"}},[t._v(t._s(t.searchTripQuery.startPoint))]),n("span",[t._v(" - ")]),n("span",{attrs:{id:"end-point"}},[t._v(t._s(t.searchTripQuery.endPoint))])]:t._e()],2),"payment"!==t.$route.name?n("a",{style:{"padding-left":t.searchTripQuery?"8px":""},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.reselectRoute=!0}}},[t._v("Chọn lại")]):t._e()]),n("div",{staticClass:"date"},[n("p",[t._v(t._s(t.searchTripQuery?t.$moment(t.searchTripQuery.date).format("DD/MM/YYYY"):""))])])])]),t._m(1),n("div",{staticClass:"col-md",attrs:{id:"booking"}},[n("div",{staticClass:"title",class:["pay"===t.$route.name?"active":""]},[n("span",{staticClass:"text-step"},[t._v("3. ")]),n("span",{staticClass:"text-title"},[t._v("Tiến hành thanh toán")])])])])])]),n("el-dialog",{attrs:{visible:t.reselectRoute,width:"74%"},on:{"update:visible":function(e){t.reselectRoute=e}}},[n("search-trip",{model:{value:t.reselectRoute,callback:function(e){t.reselectRoute=e},expression:"reselectRoute"}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title active"},[n("span",{staticClass:"text-step"},[t._v("1. ")]),n("span",{staticClass:"text-title"},[t._v("Chọn chuyến")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md",attrs:{id:"select-trip-and-enter-info"}},[n("div",{staticClass:"title active"},[n("span",{staticClass:"text-step"},[t._v("2. ")]),n("span",{staticClass:"text-title"},[t._v("Chọn chuyến và nhập thông tin")])])])}],s=n("53ca"),a=n("5530"),o=(n("7db0"),n("d3b7"),n("9358")),c=n("2f62"),l={name:"StepBookTicket",components:{SearchTrip:o["a"]},data:function(){return{reselectRoute:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(c["c"])(["provinces","dateAndPoint","searchTripQuery","listPoint"])),{},{getDateAndPoint:function(){var t=this.dateAndPoint;return"string"===typeof t?t=JSON.parse(this.dateAndPoint):"object"===Object(s["a"])(t)&&(t=this.dateAndPoint),t},mapStartPoint:function(){var t=this,e=this.getDateAndPoint?this.provinces.find((function(e,n){return e.id===t.getDateAndPoint.from})):null;return e}}),methods:{},watch:{searchTripQuery:{handler:function(t,e){t&&(this.reselectRoute=!1)},immediate:!0,deep:!0}}},u=l,p=(n("63b5"),n("568f"),n("2877")),d=Object(p["a"])(u,i,r,!1,null,"6f2b434f",null);e["a"]=d.exports},"98fd":function(t,e,n){},af96:function(t,e,n){"use strict";n("0035")},b57a:function(t,e,n){},e95a0:function(t,e,n){"use strict";n("6fe1")},ee43:function(t,e,n){"use strict";n("b57a")}}]);