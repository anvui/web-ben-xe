(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95713590"],{"026a":function(t,e,i){"use strict";i("ba10")},"0357":function(t,e,i){"use strict";i("1dd9")},"08f3":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return a}));var s={CANCELED:0,NEW:1,BOOKED:2,BOUGHT:3,ON_THE_TRIP:4,COMPLETED:5},a={TRIP:1,ROUTE:2,VEHICLE:3,COMPANY:4,KBUS:5}},"1dd9":function(t,e,i){},"507a":function(t,e,i){},"6ec6":function(t,e,i){},"79ec":function(t,e,i){},"881e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"payment-page-wrapper w-100"},[i("step-book-ticket"),i("div",{staticClass:"payment-wrapper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"body"},[i("booked-tickets")],1)])])],1)},a=[],n=i("9341"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"booked-tickets-wrapper",attrs:{"element-loading-spinner":"el-icon-kbus-loading"}},[t.previousOrder.length>0?i("div",{staticClass:"row no-gutters info-trip"},[i("div",{staticClass:"col-md-6 text-center",attrs:{id:"route-info"}},[i("div",{staticClass:"col-md point",attrs:{id:"start-point"}},[i("span",{staticClass:"time"},[t._v(t._s(t.formatStartTime))]),i("span",{staticClass:"date"},[t._v(t._s(t.formatStartDate))])]),i("div",{staticClass:"col-auto",attrs:{id:"distance"}},[i("svg",{attrs:{width:"60",height:"20",viewBox:"0 0 60 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.5002 3.33334C22.0581 3.33334 21.6342 3.50894 21.3217 3.8215C21.0091 4.13406 20.8335 4.55798 20.8335 5.00001V14.1667C20.8335 14.6269 21.2066 15 21.6668 15H22.6424C22.9856 15.971 23.9116 16.6667 25.0002 16.6667C26.0887 16.6667 27.0147 15.971 27.3579 15H32.6424C32.9856 15.971 33.9116 16.6667 35.0002 16.6667C36.0887 16.6667 37.0147 15.971 37.3579 15H38.3335C38.7937 15 39.1668 14.6269 39.1668 14.1667V10C39.1668 8.30635 38.6883 6.64673 37.7912 5.39086C36.8916 4.13145 35.6007 3.33334 34.1668 3.33334H22.5002ZM29.1668 5.00001H26.6668V7.50001H29.1668V5.00001ZM30.8335 7.50001V5.00001H32.6597L33.1955 7.50001H30.8335ZM22.5002 9.16668V13.3333H22.6424C22.9856 12.3623 23.9116 11.6667 25.0002 11.6667C26.0887 11.6667 27.0147 12.3623 27.3579 13.3333H32.6424C32.9856 12.3623 33.9116 11.6667 35.0002 11.6667C36.0887 11.6667 37.0147 12.3623 37.3579 13.3333H37.5002V10.8335H34.5835C34.1905 10.8335 33.851 10.559 33.7686 10.1748L33.5526 9.16668H22.5002ZM22.5002 5.00001H25.0002V7.50001H22.5002V5.00001ZM35.2571 9.16685H37.4526C37.3284 8.08758 36.9666 7.10379 36.435 6.35959C35.8283 5.51019 35.0831 5.07708 34.3663 5.00944L35.2571 9.16685Z",fill:"#2D225E"}}),i("rect",{attrs:{x:"12",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"6",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"56",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"50",y:"9",width:"4",height:"1",fill:"#2D225E"}}),i("rect",{attrs:{x:"44",y:"9",width:"4",height:"1",fill:"#2D225E"}})])]),i("div",{staticClass:"col-md point",attrs:{id:"end-point"}},[t.previousOrder.length>0?i("span",{staticClass:"point-name"},[t._v(t._s(t.previousOrder[0].routeName))]):t._e()])]),i("div",{staticClass:"col-md",attrs:{id:"number-customer"}},[i("label",{staticClass:"total-customer d-block"},[t._v("Mã vé: "+t._s(t.previousOrder[0].ticketCode))]),i("label",{staticClass:"total-customer d-block"},[t._v(t._s(t.$t("payment.numberCustomer.quantity"))+" "+t._s(t.previousOrder.length))]),i("span",{attrs:{id:"number-male"}},[t._v(t._s(t.countMale)+" "+t._s(t.$t("payment.numberCustomer.male"))+" ")]),i("span",{attrs:{id:"number-female"}},[t._v(t._s(t.countFemale)+" "+t._s(t.$t("payment.numberCustomer.female")))])]),i("div",{staticClass:"col-md",attrs:{id:"wait-to-pay"}},[t.hasTicketsBooked?i("div",{attrs:{id:"countdown"}},[i("span",{staticClass:"text-title mr-2"},[t._v(t._s(t.$t("payment.countdown"))+": ")]),i("time-countdown",{ref:"TimeCountdown",attrs:{expire:t.timeExpire},on:{"pay-expire":t.payExpire}})],1):t._e()])]):t._e(),t.previousOrder.length>0?i("div",{staticClass:"w-100 list-passengers-info"},[t._l(t.previousOrder,(function(e,s){return[i("div",{key:s,staticClass:"wrapper"},[i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v("HK"+t._s(s+1))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.fullName")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.fullName||"-trống-"))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.phoneNumber")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.phoneNumber||"-trống-"))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s(t.$t("payment.passengerInfo.email")))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.email||"-trống-"))])]),i("div",{staticClass:"passenger-info-item"},[i("label",{staticClass:"text-title"},[t._v(t._s("Ghế"))]),i("label",{staticClass:"text-content"},[t._v(t._s(e.seatId))])])])]}))],2):t._e(),i("div",{staticClass:"pay"},[i("el-button",{staticClass:"btn-pay",class:[t.previousOrder&&t.previousOrder.length<=0||t.isPayExpire?"disabled":""],attrs:{loading:t.loadingPay,disabled:t.previousOrder&&t.previousOrder.length<=0||t.isPayExpire},on:{click:t.handlePayTicket}},[t._v(" Thanh toán ( "+t._s(t._f("number")(t.totalPrice?Object.values(t.totalPrice).reduce((function(t,e){return t+e}),0):0))+" VNĐ ) ")]),i("div",{staticClass:"w-100 text-center mt-3"},[i("el-button",{staticClass:"w-100",staticStyle:{"border-radius":"8px"},attrs:{loading:t.loadingCancelTicket},on:{click:function(e){return e.preventDefault(),t.handleCancelTicket(e)}}},[t._v(" Hủy vé ")])],1)],1)])},o=[],c=i("5530"),l=(i("d81d"),i("4de4"),i("d3b7"),i("7db0"),i("a15b"),i("ed08")),u=i("2f62"),d=i("cca5"),h=i("08f3"),p={components:{TimeCountdown:d["a"]},data:function(){return{ticketsBooked:[],loading:!1,loadingPay:!1,isPayExpire:!1,loadingCancelTicket:!1,loadingCancelPerTicket:null,previousOrder:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(u["c"])(["paymeResponse","userInfo","systemConfig","lastOrder","listPoint","selectedTrip","trips","totalPrice"])),{},{formatStartTime:function(){var t=this.previousOrder[0].getInTimePlan||null;return this.$moment.utc(t).format("HH:mm")},formatStartDate:function(){var t=this.previousOrder[0].getInTimePlan||null;return this.$moment.utc(t).format("DD/MM/YYYY")},formatDistanceTime:function(){var t="";if(this.ticketsBooked.length>0){var e=Object(l["f"])(this.ticketsBooked[0].trip.finishTime);t=e}return t},formatEndTime:function(){var t="";if(this.ticketsBooked.length>0){var e=new Date(this.ticketsBooked[0].trip.runTime),i=e.getTime(),s=new Date(i+this.ticketsBooked[0].trip.finishTime),a=Object(l["f"])(s);t=a.hours+":"+a.minutes}return t},formatEndDate:function(){var t="";if(this.ticketsBooked.length>0){var e=new Date(this.ticketsBooked[0].trip.runTime),i=e.getTime(),s=new Date(i+this.ticketsBooked[0].trip.finishTime);t=this.$moment.utc(s).format("DD/MM/YYYY")}return t},countMale:function(){return this.previousOrder.length},countFemale:function(){var t=0;return t},timeExpire:function(){return this.ticketsBooked.length>0&&new Date(this.ticketsBooked[0].createdAt).getTime()+this.systemConfigData.ticketHolderTime,"null"},passengersInfo:function(){var t=this.previousOrder.map((function(t,e){return{ticketStatus:t.status,ticketId:t.id,fullName:t.fullName,phoneNumber:t.phoneNumber,email:t.email}}));return t},hasTicketsBooked:function(){var t=this.passengersInfo.filter((function(t,e){return 1===t.ticketStatus||2===t.ticketStatus}));return t.length>0},hasTicketsPaid:function(){var t=this.passengersInfo.filter((function(t,e){return 3===t.ticketStatus}));return t.length>0},systemConfigData:function(){return this.systemConfig&&JSON.parse(this.systemConfig.data),"null"}}),watch:{},mounted:function(){this.getListTicketsBooked()},methods:{detechPointName:function(t){var e=this.listPoint.find((function(e){return e.pointId===t}));return e?e.pointName:"-Không xác định-"},getLabelTicketStatus:function(t){var e="";switch(!0){case t===h["b"].CANCELED:e="Đã hủy";break;case t===h["b"].NEW&&!this.isPayExpire:e="Chờ thanh toán";break;case t===h["b"].BOOKED&&!this.isPayExpire:e="Chờ thanh toán";break;case(t===h["b"].NEW||t===h["b"].BOOKED)&&this.isPayExpire:e="Hết hạn thanh toán";break;case t===h["b"].BOUGHT:e="Đã thanh toán";break;case t===h["b"].ON_THE_TRIP:e="Đã lên xe";break;case t===h["b"].COMPLETED:e="Đã hoàn thành";break}return e},getColorTicketStatus:function(t){var e="";switch(!0){case t===h["b"].CANCELED:e="red";break;case t===h["b"].NEW&&!this.isPayExpire:e="#F39B13";break;case t===h["b"].BOOKED&&!this.isPayExpire:e="#F39B13";break;case(t===h["b"].NEW||t===h["b"].BOOKED)&&this.isPayExpire:e="red";break;case t===h["b"].BOUGHT:e="#ED196B";break;case t===h["b"].ON_THE_TRIP:e="#0091FE";break;case t===h["b"].COMPLETED:e="#50C694";break}return e},getListTicketsBooked:function(){var t=this;this.loading=!0,setTimeout((function(){t.ticketsBooked=t.lastOrder,t.previousOrder=t.lastOrder.listTicket,console.log("this.lastOrder",t.lastOrder),console.log("this.previousOrder",t.previousOrder),t.loading=!1}),1e3)},handlePayTicket:function(){var t=this,e=this.previousOrder.map((function(t){return t.id})).join("-");this.loadingPay=!0,this.$store.dispatch("system/payOrder",{ticketIds:e}).then((function(e){window.location.href=e,t.loadingPay=!1})).catch((function(e){t.$message.error(e.message?e.message:"Đã có lỗi xảy ra"),console.log(e),t.loadingPay=!1}))},payExpire:function(t){this.$message.error("Đã hết thời gian thanh toán"),this.isPayExpire=!0},handleCancelTicket:function(){this.$router.push({path:""})},handleCancelPerTicket:function(t){var e=this,i="",s=new Date(this.ticketsBooked[0].trip.runTime),a=new Date,n=s.getTime()-252e5,r=a.getTime(),o=n-432e5;if(r>o?i="Bạn chắc chắn muốn hủy vé?\n\nHủy vé sau 12 tiếng so với giờ xuất bến: Không được hoàn tiền vé":r<o&&(i="Bạn chắc chắn muốn hủy vé?\n\nHủy vé trước 12 tiếng so với giờ xuất bến: Được hoàn 100% tiền vé"),confirm(i)){var c=[];c.push(t),this.loadingCancelPerTicket=t,this.$store.dispatch("ticket/cancelTicket",{ticketIds:c}).then((function(t){e.loadingCancelTicket=!1,e.getListTicketsBooked()})).catch((function(t){console.log(t),e.loadingCancelPerTicket=!1,e.$message.error("Đã có lỗi xảy ra")}))}}}},m=p,f=(i("de6f"),i("2877")),v=Object(f["a"])(m,r,o,!1,null,"8c4d0c2a",null),C=v.exports,g={components:{StepBookTicket:n["a"],BookedTickets:C},data:function(){return{}}},k=g,b=(i("0357"),Object(f["a"])(k,s,a,!1,null,"72ee5e22",null));e["default"]=b.exports},9341:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-step-to-book-ticket"},[i("div",{staticClass:"container"},[i("div",{staticClass:"w-100"},[i("div",{staticClass:"row no-gutters process-booking"},[i("div",{staticClass:"col-md",attrs:{id:"select-trip"}},[t._m(0),i("div",{staticClass:"route-info"},[i("div",{staticClass:"route"},[i("div",{staticClass:"province-name"},[t.searchTripQuery?[i("span",{attrs:{id:"start-point"}},[t._v(t._s(t.searchTripQuery.startPoint))]),i("span",[t._v(" - ")]),i("span",{attrs:{id:"end-point"}},[t._v(t._s(t.searchTripQuery.endPoint))])]:t._e()],2),"payment"!==t.$route.name?i("a",{style:{"padding-left":t.searchTripQuery?"8px":""},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.reselectRoute=!0}}},[t._v("Chọn lại")]):t._e()]),i("div",{staticClass:"date"},[i("p",[t._v(t._s(t.searchTripQuery?t.$moment(t.searchTripQuery.date).format("DD/MM/YYYY"):""))])])])]),t._m(1),i("div",{staticClass:"col-md",attrs:{id:"booking"}},[i("div",{staticClass:"title",class:["pay"===t.$route.name?"active":""]},[i("span",{staticClass:"text-step"},[t._v("3. ")]),i("span",{staticClass:"text-title"},[t._v("Tiến hành thanh toán")])])])])])]),i("el-dialog",{attrs:{visible:t.reselectRoute,width:"74%"},on:{"update:visible":function(e){t.reselectRoute=e}}},[i("search-trip",{model:{value:t.reselectRoute,callback:function(e){t.reselectRoute=e},expression:"reselectRoute"}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title active"},[i("span",{staticClass:"text-step"},[t._v("1. ")]),i("span",{staticClass:"text-title"},[t._v("Chọn chuyến")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md",attrs:{id:"select-trip-and-enter-info"}},[i("div",{staticClass:"title active"},[i("span",{staticClass:"text-step"},[t._v("2. ")]),i("span",{staticClass:"text-title"},[t._v("Chọn chuyến và nhập thông tin")])])])}],n=i("53ca"),r=i("5530"),o=(i("7db0"),i("d3b7"),i("9358")),c=i("2f62"),l={name:"StepBookTicket",components:{SearchTrip:o["a"]},data:function(){return{reselectRoute:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["provinces","dateAndPoint","searchTripQuery","listPoint"])),{},{getDateAndPoint:function(){var t=this.dateAndPoint;return"string"===typeof t?t=JSON.parse(this.dateAndPoint):"object"===Object(n["a"])(t)&&(t=this.dateAndPoint),t},mapStartPoint:function(){var t=this,e=this.getDateAndPoint?this.provinces.find((function(e,i){return e.id===t.getDateAndPoint.from})):null;return e}}),methods:{}},u=l,d=(i("c8c6"),i("026a"),i("2877")),h=Object(d["a"])(u,s,a,!1,null,"23a7cc9f",null);e["a"]=h.exports},ba10:function(t,e,i){},c8c6:function(t,e,i){"use strict";i("507a")},cca5:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"content"},[t._v(t._s(t.data))])},a=[],n=(i("a9e3"),{props:{expire:{type:Number,default:null}},data:function(){return{data:"",expireDefault:9e5,interval:""}},computed:{},watch:{expire:function(t){t&&this.startTimer(this.expire)}},mounted:function(){this.expire&&this.startTimer(this.expire)},methods:{startTimer:function(t){var e,i,s=this;function a(){var a=new Date,n=a.getTime(),r=(t-n)/1e3;e=0|Math.floor(r/60),i=0|Math.floor(r%60),e=e<10?"0"+e:e,i=i<10?"0"+i:i,s.data=e+":"+i,s.$emit("remaining",s.data),r<=0&&(s.data="00:00",s.$emit("pay-expire",s.data),clearInterval(this.interval))}a(),this.interval=setInterval(a,1e3)}}}),r=n,o=(i("d1d5"),i("2877")),c=Object(o["a"])(r,s,a,!1,null,"47e89c95",null);e["a"]=c.exports},d1d5:function(t,e,i){"use strict";i("79ec")},de6f:function(t,e,i){"use strict";i("6ec6")}}]);