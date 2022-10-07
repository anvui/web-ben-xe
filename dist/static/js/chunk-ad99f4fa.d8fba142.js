(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad99f4fa"],{"14ac":function(e,t,i){},"3ec5":function(e,t,i){"use strict";i("14ac")},"4d66":function(e,t,i){},"63d9":function(e,t,i){},"779c":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.token?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingCalculatePrice,expression:"loadingCalculatePrice"}],staticClass:"create-trip-wrapper",style:{width:"CreateTrip"===e.$route.name?"80%":"100%"},attrs:{"element-loading-spinner":"el-icon-kbus-loading"}},[i("h4",{staticClass:"title"},[e._v("Đặt xe")]),i("div",{staticClass:"row no-gutters",staticStyle:{"margin-top":"40px",gap:"32px"}},[i("div",{staticClass:"col"},[i("div",{staticClass:"select-info"},[i("div",{staticClass:"info-item switch"},[i("span",{staticClass:"text-desc"},[e._v("Thuê nguyên chuyến")]),i("el-switch",{attrs:{"active-color":"#ED196B","inactive-color":"#ECEDF1"},model:{value:e.infoTrip.isOwned,callback:function(t){e.$set(e.infoTrip,"isOwned",t)},expression:"infoTrip.isOwned"}}),e.infoTrip.isOwned?i("span",{staticClass:"note-owned"},[e._v("Chuyến đi chắc chắn được khởi hành đúng với yêu cầu")]):i("span",{staticClass:"note-owned"},[e._v("Chuyến xe chỉ lăn bánh khi đủ lượng khách tối thiểu."),i("br"),e._v("Hãy chia sẻ để có thêm người đi cùng")])],1),i("div",{staticClass:"info-item"},[i("el-radio-group",{staticClass:"select-manual-route",model:{value:e.isSelectManualRoute,callback:function(t){e.isSelectManualRoute=t},expression:"isSelectManualRoute"}},[i("el-radio",{attrs:{label:1}},[e._v("Đi theo lộ trình riêng")]),i("el-radio",{attrs:{label:2}},[e._v("Đi theo lộ trình có sẵn")])],1)],1),2===e.isSelectManualRoute?i("div",{staticClass:"row no-gutters",staticStyle:{gap:"16px","margin-bottom":"16px"}},[i("div",{staticClass:"col-md"},[i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN NGÀY KHỞI HÀNH")]),i("el-date-picker",{staticClass:"w-100",attrs:{"picker-options":e.datePickerOptions,type:"date",format:"dd-MM-yyyy","value-format":"yyyy-MM-dd",placeholder:"Chọn ngày",clearable:!1},model:{value:e.infoTrip.date,callback:function(t){e.$set(e.infoTrip,"date",t)},expression:"infoTrip.date"}})],1)]),i("div",{staticClass:"col-md"},[i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN GIỜ KHỜI HÀNH")]),i("el-time-picker",{staticClass:"w-100",attrs:{format:"HH:mm","value-format":"HH:mm",placeholder:"Chọn giờ",clearable:!1},model:{value:e.infoTrip.time,callback:function(t){e.$set(e.infoTrip,"time",t)},expression:"infoTrip.time"}})],1)])]):e._e(),2===e.isSelectManualRoute?i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN TUYẾN")]),i("div",{directives:[{name:"show",rawName:"v-show",value:1===e.selectRouteType,expression:"selectRouteType === 1"}],attrs:{id:"available-route"}},[i("select-route",{ref:"SelectRoute",attrs:{placeholder:"Chọn tuyến"},model:{value:e.infoTrip.route,callback:function(t){e.$set(e.infoTrip,"route",t)},expression:"infoTrip.route"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.selectRouteType,expression:"selectRouteType === 2"}],attrs:{id:"manual-route"}},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-xs-12 col-md"},[i("select-point",{ref:"ProvinceUp",staticClass:"pr-3",attrs:{placeholder:"Chiều đi","prefix-icon":"icon-bus","icon-size":16},model:{value:e.selectPoint.pointUp,callback:function(t){e.$set(e.selectPoint,"pointUp",t)},expression:"selectPoint.pointUp"}})],1),i("div",{staticClass:"col-xs-12 col-md-auto",staticStyle:{width:"32px"}},[i("div",{staticClass:"seperate"},[i("div",{staticClass:"icon-swap"},[i("svg",{attrs:{width:"56",height:"56",viewBox:"0 0 56 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("g",{attrs:{filter:"url(#filter0_d_4298_8874)"}},[i("circle",{attrs:{cx:"28",cy:"26",r:"16",fill:"white"}})]),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.6667 22.3335C28.6667 21.3684 29.3682 20.6668 30.3333 20.6668C31.2985 20.6668 32 21.3683 32 22.3335V28.0968C31.0362 28.3836 30.3333 29.2765 30.3333 30.3335C30.3333 31.6222 31.378 32.6668 32.6667 32.6668C33.9553 32.6668 35 31.6222 35 30.3335C35 29.2765 34.2972 28.3836 33.3333 28.0968V22.3335C33.3333 20.632 32.0349 19.3335 30.3333 19.3335C28.6318 19.3335 27.3333 20.632 27.3333 22.3335V29.6668C27.3333 30.632 26.6318 31.3335 25.6667 31.3335C24.7015 31.3335 24 30.632 24 29.6668V21.6096L24.5286 22.1382C24.7889 22.3986 25.2111 22.3986 25.4714 22.1382C25.7318 21.8779 25.7318 21.4558 25.4714 21.1954L23.8048 19.5288C23.6842 19.4082 23.5174 19.3335 23.3333 19.3335C23.2429 19.3335 23.1567 19.3515 23.0781 19.3841C22.9995 19.4166 22.9258 19.4648 22.8619 19.5288L21.1953 21.1954C20.9349 21.4558 20.9349 21.8779 21.1953 22.1382C21.4556 22.3986 21.8777 22.3986 22.1381 22.1382L22.6667 21.6096V29.6668C22.6667 31.3684 23.9651 32.6668 25.6667 32.6668C27.3682 32.6668 28.6667 31.3684 28.6667 29.6668V22.3335ZM32.6667 29.3335C32.1144 29.3335 31.6667 29.7812 31.6667 30.3335C31.6667 30.8858 32.1144 31.3335 32.6667 31.3335C33.219 31.3335 33.6667 30.8858 33.6667 30.3335C33.6667 29.7812 33.219 29.3335 32.6667 29.3335Z",fill:"#383F47"}}),i("path",{attrs:{d:"M32.6665 29.3335C32.1142 29.3335 31.6665 29.7812 31.6665 30.3335C31.6665 30.8858 32.1142 31.3335 32.6665 31.3335C33.2188 31.3335 33.6665 30.8858 33.6665 30.3335C33.6665 29.7812 33.2188 29.3335 32.6665 29.3335Z",fill:"#FBD1E1"}}),i("defs",[i("filter",{attrs:{id:"filter0_d_4298_8874",x:"0",y:"0",width:"56",height:"56",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[i("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),i("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),i("feOffset",{attrs:{dy:"2"}}),i("feGaussianBlur",{attrs:{stdDeviation:"6"}}),i("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),i("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_4298_8874"}}),i("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_4298_8874",result:"shape"}})],1)])])])])]),i("div",{staticClass:"col-xs-12 col-md"},[i("select-point",{ref:"ProvinceDown",staticClass:"pl-3",attrs:{placeholder:"Chiều về","prefix-icon":"icon-local","icon-size":16},model:{value:e.selectPoint.pointDown,callback:function(t){e.$set(e.selectPoint,"pointDown",t)},expression:"selectPoint.pointDown"}})],1)])])]):e._e(),2===e.isSelectManualRoute&&e.infoTrip.route&&1===e.selectRouteType?i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN ĐIỂM LÊN, ĐIỂM XUỐNG")]),i("div",{staticClass:"list-point"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md-6"},[i("div",{attrs:{id:"point-up"}},[i("div",{staticClass:"w-100 text-center"},[i("label",{staticClass:"pb-1",class:{"label-active":"point-up"===e.pointActive},staticStyle:{margin:"0 auto"},on:{click:function(t){return e.getActivePoint("point-up")}}},[e._v("Điểm lên")])]),i("div",{staticClass:"select-place-address-wrapper",class:{disabled:"point-up"!==e.pointActive}},[i("div",{staticClass:"select-address"},[e.getRouteByRouteName?i("el-radio-group",{model:{value:e.infoTrip.pickUpAddress,callback:function(t){e.$set(e.infoTrip,"pickUpAddress",t)},expression:"infoTrip.pickUpAddress"}},[i("div",{staticClass:"w-100 list-address"},[e._l(e.getStartPoints,(function(t,s){return[i("el-radio",{key:s,attrs:{label:t.id}},[i("div",{staticClass:"w-100"},[i("span",{attrs:{id:"text-time-and-point"}},[e._v(" "+e._s(t.name)+" ")]),i("span",{attrs:{id:"text-detail-address"}},[e._v(" "+e._s(t.address)+" ")])])])]}))],2)]):i("div",{staticClass:"no-data"},[i("span",[e._v("Không tìm thấy dữ liệu")])])],1)])])]),i("div",{staticClass:"col-md-6"},[i("div",{attrs:{id:"point-down"}},[i("div",{staticClass:"w-100 text-center"},[i("label",{staticClass:"pb-1",class:{"label-active":"point-down"===e.pointActive},staticStyle:{margin:"0 auto"},on:{click:function(t){return e.getActivePoint("point-down")}}},[e._v("Điểm xuống")])]),i("div",{staticClass:"select-place-address-wrapper",class:{disabled:"point-down"!==e.pointActive}},[i("div",{staticClass:"select-address"},[e.getRouteByRouteName&&e.getRouteByRouteName.points?i("el-radio-group",{model:{value:e.infoTrip.pickDownAddress,callback:function(t){e.$set(e.infoTrip,"pickDownAddress",t)},expression:"infoTrip.pickDownAddress"}},[i("div",{staticClass:"w-100 list-address"},[e._l(e.getEndPoints,(function(t,s){return[i("el-radio",{key:s,attrs:{label:t.id}},[i("div",{staticClass:"w-100"},[i("span",{attrs:{id:"text-time-and-point"}},[e._v(" "+e._s(t.name)+" ")]),i("span",{attrs:{id:"text-detail-address"}},[e._v(" "+e._s(t.address)+" ")])])])]}))],2)]):i("div",{staticClass:"no-data"},[i("span",[e._v("Không tìm thấy dữ liệu")])])],1)])])])])])]):e._e(),1===e.isSelectManualRoute?i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("THÔNG TIN LỘ TRÌNH")]),i("div",{staticClass:"list-places"},[e._l(e.listPlaces,(function(t,s){return[i("div",{key:s,staticClass:"place-item"},[i("div",{staticClass:"col-auto icon-remove-place-wrapper"},[i("el-button",{staticClass:"btn-remove-place",attrs:{icon:"el-icon-close",circle:""},on:{click:function(t){return e.handleRemovePlace(s)}}})],1),i("div",{staticClass:"col-md"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md"},[i("el-date-picker",{attrs:{type:"date",placeholder:"Chọn ngày khởi hành",format:"dd-MM-yyyy","value-format":"yyyy-MM-dd","picker-options":e.datePickerOptions,clearable:!1},on:{change:function(t){return e.handleDateTimeChange(s)}},model:{value:t.runDate,callback:function(i){e.$set(t,"runDate",i)},expression:"place.runDate"}})],1),i("div",{staticClass:"col-md",staticStyle:{"padding-left":"16px"}},[i("el-time-picker",{attrs:{placeholder:"Chọn giờ khởi hành",format:"HH:mm","value-format":"HH:mm",clearable:!1},on:{change:function(t){return e.handleDateTimeChange(s)}},model:{value:t.runTime,callback:function(i){e.$set(t,"runTime",i)},expression:"place.runTime"}})],1),i("div",{staticClass:"col-12",staticStyle:{"margin-top":"8px"}},[i("select-place",{ref:"SelectPlace",refInFor:!0,model:{value:t.place,callback:function(i){e.$set(t,"place",i)},expression:"place.place"}})],1)])])])]}))],2),i("div",{staticClass:"add-place"},[i("el-button",{staticClass:"btn-add-place"},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M10.6663 8.5H5.33301C5.05967 8.5 4.83301 8.27333 4.83301 8C4.83301 7.72667 5.05967 7.5 5.33301 7.5H10.6663C10.9397 7.5 11.1663 7.72667 11.1663 8C11.1663 8.27333 10.9397 8.5 10.6663 8.5Z",fill:"#0091FE"}}),i("path",{attrs:{d:"M8 11.1668C7.72667 11.1668 7.5 10.9402 7.5 10.6668V5.3335C7.5 5.06016 7.72667 4.8335 8 4.8335C8.27333 4.8335 8.5 5.06016 8.5 5.3335V10.6668C8.5 10.9402 8.27333 11.1668 8 11.1668Z",fill:"#0091FE"}}),i("path",{attrs:{d:"M9.99967 15.1668H5.99967C2.37967 15.1668 0.833008 13.6202 0.833008 10.0002V6.00016C0.833008 2.38016 2.37967 0.833496 5.99967 0.833496H9.99967C13.6197 0.833496 15.1663 2.38016 15.1663 6.00016V10.0002C15.1663 13.6202 13.6197 15.1668 9.99967 15.1668ZM5.99967 1.8335C2.92634 1.8335 1.83301 2.92683 1.83301 6.00016V10.0002C1.83301 13.0735 2.92634 14.1668 5.99967 14.1668H9.99967C13.073 14.1668 14.1663 13.0735 14.1663 10.0002V6.00016C14.1663 2.92683 13.073 1.8335 9.99967 1.8335H5.99967Z",fill:"#0091FE"}})]),i("a",{staticClass:"text-add-place",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.handleAddPlace(t)}}},[e._v("Thêm lộ trình")])])],1)]):e._e(),i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN PHƯƠNG TIỆN")]),i("select-vehicle",{model:{value:e.infoTrip.vehicle,callback:function(t){e.$set(e.infoTrip,"vehicle",t)},expression:"infoTrip.vehicle"}})],1),e.infoTrip.vehicle?i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("CHỌN SỐ LƯỢNG HÀNH KHÁCH")]),i("div",{staticClass:"row no-gutters justify-content-between"},[i("div",{staticClass:"col-md-6"},[i("el-input-number",{attrs:{value:e.totalPassengers,step:1,min:1,max:e.infoTrip.vehicle.totalSeat,disabled:!e.infoTrip.vehicle},on:{change:e.handlePassengersChange}})],1),i("div",{staticClass:"col-md-6"},[e.infoTrip.isOwned&&e.totalPassengers<e.infoTrip.vehicle.totalSeat?i("div",[i("el-checkbox",{staticClass:"checkbox-share-trip",model:{value:e.infoTrip.isPublic,callback:function(t){e.$set(e.infoTrip,"isPublic",t)},expression:"infoTrip.isPublic"}},[e._v("Chia sẻ cho người khách đi cùng để chắc chắn chuyến đi sẽ được khởi hành")])],1):e._e()]),e.infoTrip.isOwned?e._e():i("div",{staticClass:"col-12 mt-2"},[i("label",{staticClass:"text-title"},[e._v("SỐ GHẾ TỐI THIỂU")]),i("label",{staticClass:"min-seat-note"},[e._v("Số ghế tối thiểu để chuyến đi chắc chắn được khởi hành đúng yêu cầu")]),i("el-input-number",{attrs:{step:1,min:1,max:e.infoTrip.vehicle.totalSeat},model:{value:e.infoTrip.minSeat,callback:function(t){e.$set(e.infoTrip,"minSeat",t)},expression:"infoTrip.minSeat"}})],1)]),i("div",{staticClass:"customer-info-wrapper",style:{"padding-top":e.totalPassengers>0?"0.5rem":""}},[i("div",{style:{"border-bottom":e.totalPassengers>0?"1px solid #ECEDF1":""},attrs:{id:"list-label"}},[i("div",{staticClass:"nav"},[e._l(e.listIndexTotalPassengers,(function(t){return[i("div",{key:t,staticClass:"nav-item"},[i("label",{staticClass:"pb-1",class:{"label-active":e.labelFormCustomerActive===t},on:{click:function(i){return e.handelFormCustomerActive(t)}}},[e._v("HK"+e._s(t))]),1!==t?i("i",{staticClass:"el-icon-circle-close pl-1 pt-1",on:{click:function(i){return e.removeFormCustomer(t)}}}):e._e()])]}))],2)]),i("div",{attrs:{id:"form-customer-info"}},[e._l(e.listIndexTotalPassengers,(function(t){return[i("form-customer-info",{key:t,ref:"FormCustomerInfo",refInFor:!0,attrs:{"label-form-customer-active":e.labelFormCustomerActive},model:{value:e.infoTrip.customerInfos,callback:function(t){e.$set(e.infoTrip,"customerInfos",t)},expression:"infoTrip.customerInfos"}})]}))],2)])]):e._e(),i("div",{staticClass:"info-item"},[i("label",{staticClass:"text-title"},[e._v("GHI CHÚ")]),i("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Nhập ghi chú của bạn"},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}})],1)]),e._m(0),i("div",{staticClass:"create-trip-btn"},[i("el-button",{staticClass:"btn-create-trip",on:{click:e.handleConfirmPay}},[e._v("Xác nhận thanh toán")])],1)]),i("el-dialog",{attrs:{width:"30%",visible:e.dialogConfirmPay,"custom-class":"dialog-confirm-pay","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogConfirmPay=t},open:e.handleOpen}},[i("div",{staticClass:"info-item"},[i("div",{staticClass:"time-countdown"},[i("span",[e._v("Thời gian thanh toán:")]),e.dialogConfirmPay?i("time-countdown",{ref:"TimeCountdown",attrs:{expire:e.timeExpire},on:{"pay-expire":e.payExpire}}):e._e()],1),i("div",{staticClass:"row no-gutters align-items-center"},[i("div",{staticClass:"col"},[i("span",[e._v("Chi phí tạm tính")])]),i("div",{staticClass:"col text-right"},[1===e.isSelectManualRoute&&e.priceManualCreate?i("span",{staticClass:"price-need-to-pay"},[e._v(e._s(e.numeral(e.priceManualCreate.totalMoneyPay).format(0,0))+"đ")]):2===e.isSelectManualRoute&&0!==e.priceAvailableCreate?i("span",{staticClass:"price-need-to-pay"},[e._v(e._s(e.numeral(e.priceAvailableCreate).format(0,0))+"đ")]):i("span",{staticClass:"price-need-to-pay"},[e._v(e._s(0)+"đ")])])]),i("div",{staticClass:"row no-gutters align-items-center"},[i("div",{staticClass:"col"},[1===e.isSelectManualRoute&&e.priceManualCreate?i("span",[e._v("Khoảng cách ("+e._s(e.$moment.utc(e.priceManualCreate.travelTime).format("H"))+"h "+e._s(e.$moment.utc(e.priceManualCreate.travelTime).format("mm"))+"p)")]):e._e(),2===e.isSelectManualRoute&&0!==e.priceAvailableCreate?i("span",[e._v("Khoảng cách ("+e._s(e.$moment.utc(e.getRouteByRouteName.finishTime).format("H"))+"h "+e._s(e.$moment.utc(e.getRouteByRouteName.finishTime).format("mm"))+"p)")]):e._e()]),i("div",{staticClass:"col text-right"},[1===e.isSelectManualRoute&&e.priceManualCreate?i("span",{staticClass:"price-need-to-pay"},[e._v("~ "+e._s(e.numeral(e.priceManualCreate.distance).format(0,0))+" km")]):2===e.isSelectManualRoute&&0!==e.priceAvailableCreate?i("span",{staticClass:"price-need-to-pay"},[e._v("~ "+e._s(e.numeral(e.getRouteByRouteName.distance).format(0,0))+" km")]):e._e()])]),0!==e.discountTicket?i("div",{staticClass:"row no-gutters align-items-center"},[i("div",{staticClass:"col"},[i("span",[e._v("Khuyến mãi VIP")])]),i("div",{staticClass:"col text-right"},[i("span",{staticClass:"price-need-to-pay"},[e._v(e._s("- "+e.numeral(e.discountTicket).format(0,0))+"đ")])])]):e._e(),i("div",{staticClass:"row no-gutters align-items-center"},[i("div",{staticClass:"col"},[i("span",[e._v("Còn lại")])]),i("div",{staticClass:"col text-right"},[i("span",{staticClass:"price-need-to-pay"},[e._v(e._s(e.numeral(e.remainPrice).format(0,0))+"đ")])])])]),i("div",{staticClass:"w-100 descriptions"},[i("span",[e._v("* Giá đã bao gồm VAT")])]),i("div",{staticClass:"form-invoice"},["OrderPage"===e.$route.name||"CreateTrip"===e.$route.name?i("el-checkbox",{model:{value:e.exportInvoice,callback:function(t){e.exportInvoice=t},expression:"exportInvoice"}},[e._v(" Lấy hoá đơn ")]):e._e(),e.exportInvoice?i("el-form",{ref:"invoice-info",attrs:{id:"form-invoice-info",model:e.invoiceInfo,rules:e.formInvoiceRules,"auto-complete":"on","label-position":"left"}},[i("el-form-item",{attrs:{prop:"companyName"}},[i("el-input",{ref:"companyName",staticClass:"form-input",attrs:{name:"companyName",type:"text"},model:{value:e.invoiceInfo.companyName,callback:function(t){e.$set(e.invoiceInfo,"companyName",t)},expression:"invoiceInfo.companyName"}}),i("label",{staticClass:"custom-placeholder"},[e._v("Tên công ty")])],1),i("el-form-item",{attrs:{prop:"address"}},[i("el-input",{ref:"address",staticClass:"form-input",attrs:{name:"address",type:"text"},model:{value:e.invoiceInfo.address,callback:function(t){e.$set(e.invoiceInfo,"address",t)},expression:"invoiceInfo.address"}}),i("label",{staticClass:"custom-placeholder"},[e._v("Địa chỉ")])],1),i("el-form-item",{attrs:{prop:"tax"}},[i("el-input",{ref:"tax",staticClass:"form-input",attrs:{name:"tax",type:"text"},model:{value:e.invoiceInfo.tax,callback:function(t){e.$set(e.invoiceInfo,"tax","string"===typeof t?t.trim():t)},expression:"invoiceInfo.tax"}}),i("label",{staticClass:"custom-placeholder"},[e._v("Mã số thuế")])],1),i("el-form-item",{attrs:{prop:"email"}},[i("el-input",{ref:"email",staticClass:"form-input",attrs:{name:"email",type:"email"},model:{value:e.invoiceInfo.email,callback:function(t){e.$set(e.invoiceInfo,"email","string"===typeof t?t.trim():t)},expression:"invoiceInfo.email"}}),i("label",{staticClass:"custom-placeholder"},[e._v("Email")])],1)],1):e._e()],1),i("div",{staticClass:"create-trip-btn"},[i("el-button",{staticClass:"btn-create-trip",class:e.isPayExpire?"disable":"",attrs:{loading:e.loadingCreateTrip},on:{click:e.handleCreateTrip}},[e._v("Thanh toán online")])],1)])],1)]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-3"},[i("span",{staticClass:"remind-to-customer"},[e._v(" Lưu ý: Hành khách cần có mặt trước tại các điểm đón ít nhất 10 phút ")])])}],n=i("5530"),o=(i("7db0"),i("d3b7"),i("4de4"),i("d81d"),i("a434"),i("4d63"),i("ac1f"),i("2c3e"),i("25f0"),i("00b4"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-autocomplete",{ref:"SelectPoint",staticClass:"w-100",attrs:{placeholder:e.placeholder,"fetch-suggestions":e.querySearch,"trigger-on-focus":!0,clearable:!1,"highlight-first-item":!1},on:{select:e.handleSelect,input:e.handleInput,focus:e.handleFocus},model:{value:e.searchRoute,callback:function(t){e.searchRoute=t},expression:"searchRoute"}},[i("span",{attrs:{slot:"prefix"},slot:"prefix"},[i("i",{staticClass:"el-icon-location el-input__icon"})])])}),r=[],l=i("1da1"),c=(i("caad"),i("2532"),i("96cf"),i("ed08")),u=i("2f62"),p={props:{value:{default:null,type:String},placeholder:{default:"",type:String}},data:function(){return{searchRoute:""}},computed:Object(n["a"])({},Object(u["b"])(["routes"])),watch:{value:function(e){this.searchRoute=e}},mounted:function(){this.getRoutes(),this.value&&(this.searchRoute=this.value)},methods:{getRoutes:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("route/getRoutes");case 2:case"end":return t.stop()}}),t)})))()},querySearch:function(e,t){var i=[];this.routes.forEach((function(e,t){i.push({value:e.routeName,label:e.id})}));var s=[];if(document.hasFocus())if(this.searchRoute!==this.value){var a=i.filter(this.createFilter(e));s=a}else s=i;t(s)},createFilter:function(e){return function(t){var i=Object(c["h"])(t.value.toLowerCase()),s=Object(c["h"])(e.toLowerCase());return i.includes(s)}},handleSelect:function(e){this.$emit("input",e.value)},handleInput:function(e){},handleFocus:function(e){e.target.select()}}},h=p,m=i("2877"),d=Object(m["a"])(h,o,r,!1,null,null,null),f=d.exports,v=i("6882"),C=i("1bba"),g=i("0ae8"),T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-autocomplete",{ref:"SelectPlace",staticClass:"autocomplete-place",attrs:{"popper-class":"list-place-wrap","trigger-on-focus":!1,"fetch-suggestions":e.remoteSearch,debounce:600,placeholder:"Chọn điểm đón/trả"},on:{select:e.handleChangeValue,focus:e.handleFocus},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return[i("span",[e._v(e._s(s.address))])]}}]),model:{value:e.querySearch,callback:function(t){e.querySearch=t},expression:"querySearch"}},[i("template",{slot:"prefix"},[i("span",{staticClass:"icon-input"},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z",fill:"#292D32"}}),i("path",{attrs:{d:"M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z",fill:"#292D32"}})])])])],2)},b=[],y={props:{value:{default:null,type:Object},placeholder:{default:"Chọn điểm đón/trả",type:String},clearable:{default:!1,type:Boolean}},data:function(){return{loading:!1,options:null,loadingBtnSearchMore:!1,querySearch:"",timeout:null}},computed:Object(n["a"])(Object(n["a"])({},Object(u["b"])(["token","listPlaces"])),{},{getPlace:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}),mounted:function(){this.value&&(this.querySearch=this.value.address)},methods:{handleChangeValue:function(e){var t=this;e.lat&&e.lng&&e.province&&e.district||this.$store.dispatch("place/getPlaceDetails",{input:e.placeId}).then((function(t){e.lat=t.lat,e.lng=t.lng,e.province=t.province,e.district=t.district})).catch((function(e){console.log(e),t.$message.error(e.message?e.message:"Không tìm thấy tọa độ")})),this.querySearch=e.address,this.getPlace=e},remoteSearch:function(e,t){var i=this;e&&(this.querySearch=e,this.loading=!0,this.$store.dispatch("place/getPlaces",{input:e}).then((function(e){i.loading=!1,i.options=e,clearTimeout(i.timeout),i.timeout=setTimeout((function(){t(i.options)}),300),i.options.length<=0&&i.searchMorePlace()})).catch((function(e){i.loading=!1,console.log(e)})))},searchMorePlace:function(){var e=this;this.loading=!0,this.$store.dispatch("place/getMorePlaces",{input:this.querySearch}).then((function(t){e.loading=!1,t.forEach((function(t){e.options.push(t)}))})).catch((function(t){e.loading=!1,console.log(t)}))},handleFocus:function(e){e.target.select()}}},P=y,x=(i("3ec5"),Object(m["a"])(P,T,b,!1,null,null,null)),I=x.exports,w=i("cca5"),$={components:{SelectRoute:f,SelectVehicle:v["a"],FormCustomerInfo:C["a"],SelectPoint:g["a"],SelectPlace:I,TimeCountdown:w["a"]},data:function(){return{infoTrip:{route:null,date:this.$moment().add(1,"days").format("YYYY-MM-DD"),time:"",vehicle:null,pickUpAddress:null,pickDownAddress:null,customerInfos:[],isOwned:!0,isPublic:!1,minSeat:0},pointActive:"point-up",totalPassengers:1,listIndexTotalPassengers:[1],labelFormCustomerActive:1,loadingCreateTrip:!1,dialogConfirmPay:!1,selectRouteType:1,selectPoint:{pointUp:"",pointDown:""},listPlaces:[{place:null,runTime:"00:00",runDate:this.$moment().add(1,"days").format("YYYY-MM-DD")}],loadingCalculatePrice:!1,note:"",priceManualCreate:null,isSelectManualRoute:1,currentDate:this.$moment().format("YYYYMMDD"),datePickerOptions:{disabledDate:function(e){var t=new Date;return t.setDate(t.getDate()-1),e<=t}},exportInvoice:!1,invoiceInfo:{companyName:"",address:"",tax:"",email:""},formInvoiceRules:{},timeExpire:0,isPayExpire:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(u["b"])(["routes","vehicles","dateAndPoint","respCreateTrip","validate","fillAllCustomer","firstCustomerInfo","token","provinces","userInfo","systemConfig"])),{},{getRouteByRouteName:function(){var e=this;if(this.infoTrip.route){var t=this.routes.find((function(t,i){return t.routeName===e.infoTrip.route}));return t}return null},findProvinceUp:function(){var e=this;return this.provinces.find((function(t,i){return t.provinceName===e.selectPoint.pointUp}))},findProvinceDown:function(){var e=this;return this.provinces.find((function(t,i){return t.provinceName===e.selectPoint.pointDown}))},getStartPoints:function(){var e=this;if(this.getRouteByRouteName&&this.getRouteByRouteName.points){var t=this.getRouteByRouteName.points.filter((function(t,i){return i!==e.getRouteByRouteName.points.length-1}));return t}return null},getEndPoints:function(){var e=this;if(this.getRouteByRouteName&&this.getRouteByRouteName.points){var t=this.getRouteByRouteName.points.filter((function(t,i){return 0!==i&&t.id!==e.infoTrip.pickUpAddress}));return t}return null},priceAvailableCreate:function(){var e=0,t=0;if(this.infoTrip.vehicle&&this.getRouteByRouteName?t=this.infoTrip.vehicle.minDistance?this.getRouteByRouteName.distance>this.infoTrip.vehicle.minDistance?this.getRouteByRouteName.distance:this.infoTrip.vehicle.minDistance:this.getRouteByRouteName.distance:e=0,2===this.isSelectManualRoute&&this.getRouteByRouteName&&this.infoTrip.vehicle){var i=t*this.infoTrip.vehicle.pricePerKm,s=this.infoTrip.minSeat;0===s&&(e=0),e=this.infoTrip.isOwned?parseInt(i*(1+this.getRouteByRouteName.profit)):parseInt(i*(1+this.getRouteByRouteName.profit)/s*this.totalPassengers)}return e},hasSelectedPlace:function(){var e=this.listPlaces.filter((function(e){return e.place}));return e},discountTicket:function(){var e=0;return this.userInfo.discountTicket?1===this.isSelectManualRoute&&this.priceManualCreate?e=this.priceManualCreate.totalMoneyPay*this.userInfo.discountTicket:2===this.isSelectManualRoute&&0!==this.priceAvailableCreate&&(e=this.priceAvailableCreate*this.userInfo.discountTicket):e=0,e},remainPrice:function(){var e=0;return 1===this.isSelectManualRoute&&this.priceManualCreate?e=this.priceManualCreate.totalMoneyPay-this.discountTicket:2===this.isSelectManualRoute&&0!==this.priceAvailableCreate&&(e=this.priceAvailableCreate-this.discountTicket),e},holderTime:function(){var e="";return e=this.infoTrip.isOwned?this.systemConfigData.tripHolderTime:this.systemConfigData.ticketHolderTime,e},systemConfigData:function(){var e=null;return this.systemConfig&&(e=JSON.parse(this.systemConfig.data)),e}}),watch:{listIndexTotalPassengers:function(e){this.totalPassengers=this.listIndexTotalPassengers.length},"infoTrip.pickUpAddress":function(e){e&&(this.pointActive="point-down")},"firstCustomerInfo.fullname":function(e){if(this.fillAllCustomer)for(var t=0;t<this.$refs.FormCustomerInfo.length;t++)this.$refs.FormCustomerInfo[t].customerInfo.fullname=e},"firstCustomerInfo.phoneNumber":function(e){if(this.fillAllCustomer)for(var t=0;t<this.$refs.FormCustomerInfo.length;t++)this.$refs.FormCustomerInfo[t].customerInfo.phoneNumber=e},"firstCustomerInfo.email":function(e){if(this.fillAllCustomer)for(var t=0;t<this.$refs.FormCustomerInfo.length;t++)this.$refs.FormCustomerInfo[t].customerInfo.email=e},"firstCustomerInfo.sex":function(e){if(this.fillAllCustomer)for(var t=0;t<this.$refs.FormCustomerInfo.length;t++)this.$refs.FormCustomerInfo[t].customerInfo.sex=e},"infoTrip.vehicle":function(e){this.infoTrip.minSeat=parseInt(60*e.totalSeat/100)}},mounted:function(){var e=this;if(this.$route.params.vehicle&&(this.infoTrip.vehicle=this.$route.params.vehicle),this.$route.params.bookFullTrip){this.infoTrip.vehicle=this.$route.params.bookFullTrip.vehicle,this.infoTrip.date=new Date(this.$route.params.bookFullTrip.startDate);var t=this.listPlaces.map((function(t){return{runDate:e.$moment(e.$route.params.bookFullTrip.startDate).format("YYYY-MM-DD"),runTime:"00:00",place:null}}));this.listPlaces=t}},methods:{getActivePoint:function(e){"point-up"===e&&(this.pointActive=e),"point-down"===e&&(this.infoTrip.pickUpAddress?this.pointActive=e:this.$message.error(this.$t("message.createTrip.selectPointUp")))},handlePassengersChange:function(e,t){var i,s=[];for(i=1;i<=e;i++)s.push(i);this.listIndexTotalPassengers=s,this.totalPassengers=this.listIndexTotalPassengers.length},handelFormCustomerActive:function(e){this.labelFormCustomerActive=e},removeFormCustomer:function(e){var t=this.listIndexTotalPassengers.indexOf(e);t>-1&&this.listIndexTotalPassengers.splice(t,1);var i=this.validate.filter((function(t){return t.index!==e}));this.$store.dispatch("trip/validateInfo",i)},changeRouteType:function(e){switch(e){case 1:this.selectPoint.pointUp="",this.selectPoint.pointDown="";break;case 2:this.infoTrip.route=null;break}},handleRemovePlace:function(e){this.listPlaces.splice(e,1)},handleAddPlace:function(){var e=this.listPlaces.length>0?this.listPlaces[this.listPlaces.length-1].runTime:this.$moment().add(1,"days").format("HH:mm"),t=this.listPlaces.length>0?this.listPlaces[this.listPlaces.length-1].runDate:this.$moment().add(1,"days").format("YYYY-MM-DD");this.listPlaces.push({place:null,runTime:e,runDate:t})},handleDateTimeChange:function(e){var t=this.listPlaces[0].runTime,i=this.listPlaces[0].runDate,s=this.listPlaces[e].runDate;if(0===e)for(var a=e+1;a<this.listPlaces.length;a++)this.listPlaces[a].runTime=t,this.listPlaces[a].runDate=i;for(var n=e+1;n<this.listPlaces.length;n++)this.listPlaces[n].runDate=s},validateInfoTrip:function(){return 1===this.isSelectManualRoute?this.infoTrip.vehicle?0===this.totalPassengers?(this.$message.error(this.$t("message.createTrip.selectNumberPassengers")),!1):this.validate.length>0?(this.$message.error(this.$t("message.createTrip.enterCorrectPassengerInfo")),!1):this.listPlaces.length<2?(this.$message.error(this.$t("message.createTrip.selectPlace")),!1):!(this.hasSelectedPlace.length<this.listPlaces.length)||(this.$message.error(this.$t("message.createTrip.enterFullPlace",{numberPlace:this.listPlaces.length})),!1):(this.$message.error(this.$t("message.createTrip.selectVehicle")),!1):1!==this.selectRouteType||this.infoTrip.route&&this.$refs.SelectRoute.searchRoute?2!==this.selectRouteType||this.pickUpAddress&&this.pickDownAddress?this.infoTrip.pickUpAddress?this.infoTrip.pickDownAddress?this.infoTrip.vehicle?0===this.totalPassengers?(this.$message.error(this.$t("message.createTrip.selectNumberPassengers")),!1):this.infoTrip.date?this.infoTrip.time?!(this.validate.length>0)||(this.$message.error(this.$t("message.createTrip.enterCorrectPassengerInfo")),!1):(this.$message.error(this.$t("message.createTrip.selectStartTime")),!1):(this.$message.error(this.$t("message.createTrip.selectStartDate")),!1):(this.$message.error(this.$t("message.createTrip.selectVehicle")),!1):(this.$message.error(this.$t("message.createTrip.selectPointDown")),!1):(this.$message.error(this.$t("message.createTrip.selectPointUp")),!1):(this.$message.error(this.$t("message.createTrip.selectPickUpandPickDown")),!1):(this.$message.error(this.$t("message.createTrip.selectRoute")),!1)},validateInvoiceInfo:function(){var e=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return this.exportInvoice&&!this.invoiceInfo.companyName?(this.$message.error(this.$t("message.createTrip.enterCompanyName")),!1):this.exportInvoice&&!this.invoiceInfo.address?(this.$message.error(this.$t("message.createTrip.enterAddress")),!1):this.exportInvoice&&!this.invoiceInfo.tax?(this.$message.error(this.$t("message.createTrip.enterTax")),!1):!!(!this.exportInvoice||this.invoiceInfo.email&&e.test(this.invoiceInfo.email))||(this.$message.error(this.$t("message.createTrip.enterEmail")),!1)},createAvailableTrip:function(){var e=this,t=[];if(this.$refs.FormCustomerInfo.forEach((function(e,i){if(0===e.validate.length&&e.customerInfo.fullname&&e.customerInfo.phoneNumber&&e.customerInfo.email&&e.customerInfo.sex){var s={fullName:e.customerInfo.fullname,phoneNumber:e.customerInfo.phoneNumber,email:e.customerInfo.email,sex:e.sexLabel[e.customerInfo.sex]};t.push(s)}})),this.infoTrip.customerInfos=t,this.infoTrip.customerInfos.length<this.totalPassengers)this.$message.error(this.$t("message.createTrip.enterFullCustomerInfo",{totalPassengers:this.totalPassengers}));else{var i=this.$moment(this.infoTrip.date).format("MM/DD/YYYY")+" "+this.infoTrip.time,s={routeId:this.getRouteByRouteName.id,pointUpId:this.infoTrip.pickUpAddress,pointDownId:this.infoTrip.pickDownAddress,vehicleId:this.infoTrip.vehicle.id,customerInfos:this.infoTrip.customerInfos,startTime:this.convertToIsoRunTime(i),isOwned:this.infoTrip.isOwned,isPublic:this.infoTrip.isPublic,note:this.note,minSeat:this.infoTrip.minSeat,exportInvoice:this.exportInvoice,invoiceInfo:this.exportInvoice?this.invoiceInfo:null};this.loadingCreateTrip=!0,setTimeout((function(){e.$store.dispatch("trip/createCustomerTrip",s).then((function(t){e.$store.dispatch("trip/getTripCode",{tripCode:e.respCreateTrip.customerTrip.tripCode}),e.loadingCreateTrip=!1,window.open(t.paymeUrlResponse.data.url,"_blank")})).catch((function(t){e.loadingCreateTrip=!1,console.log(t),e.$message.error(t.message?t.message:e.$t("message.common.undefinedError"))}))}),200)}},createManualTrip:function(){var e=this,t=[];if(this.$refs.FormCustomerInfo.forEach((function(e,i){if(0===e.validate.length&&e.customerInfo.fullname&&e.customerInfo.phoneNumber&&e.customerInfo.email&&e.customerInfo.sex){var s={fullName:e.customerInfo.fullname,phoneNumber:e.customerInfo.phoneNumber,email:e.customerInfo.email,sex:e.sexLabel[e.customerInfo.sex]};t.push(s)}})),this.infoTrip.customerInfos=t,this.infoTrip.customerInfos.length<this.totalPassengers)this.$message.error(this.$t("message.createTrip.enterFullCustomerInfo",{totalPassengers:this.totalPassengers}));else{var i=this.listPlaces.map((function(t){return Object(n["a"])(Object(n["a"])({},t.place),{},{runTime:new Date(e.$moment(t.runDate).format("MM/DD/YYYY")+" "+t.runTime).getTime()})})),s={vehicleId:this.infoTrip.vehicle.id,customerInfos:this.infoTrip.customerInfos,listPlace:i,isOwned:this.infoTrip.isOwned,isPublic:this.infoTrip.isPublic,note:this.note,runTime:this.convertToIsoRunTime(i[0].runTime),endTime:this.convertToIsoRunTime(i[i.length-1].runTime),numberTicket:this.totalPassengers,minSeat:this.infoTrip.minSeat,exportInvoice:this.exportInvoice,invoiceInfo:this.exportInvoice?this.invoiceInfo:null};this.loadingCreateTrip=!0,setTimeout((function(){e.$store.dispatch("trip/manualCreateCustomerTrip",s).then((function(t){e.loadingCreateTrip=!1,window.open(t.paymeUrlResponse.data.url,"_blank")})).catch((function(t){e.loadingCreateTrip=!1,console.log(t),e.$message.error(t.message?t.message:e.$t("message.common.undefinedError"))}))}),500)}},calculateManualPrice:function(){var e=this;if(this.validateInfoTrip()){var t=this.listPlaces.map((function(t){return Object(n["a"])(Object(n["a"])({},t.place),{},{runTime:new Date(e.$moment(t.runDate).format("MM/DD/YYYY")+" "+t.runTime).getTime()})})),i={vehicleId:this.infoTrip.vehicle.id,numberTicket:this.totalPassengers,listPlace:t,isOwned:this.infoTrip.isOwned,isPublic:this.infoTrip.isPublic,runTime:this.convertToIsoRunTime(t[0].runTime),endTime:this.convertToIsoRunTime(t[t.length-1].runTime),minSeat:this.infoTrip.minSeat};this.loadingCalculatePrice=!0,this.$store.dispatch("trip/priceManualCreate",i).then((function(t){e.loadingCalculatePrice=!1,e.priceManualCreate=t,e.dialogConfirmPay=!0})).catch((function(t){console.log(t),e.loadingCalculatePrice=!1,e.$message.error(t.message?t.message:e.$t("message.common.undefinedError"))}))}},handleConfirmPay:function(){1===this.isSelectManualRoute?this.calculateManualPrice():this.validateInfoTrip()&&(this.dialogConfirmPay=!0)},handleCreateTrip:function(){1===this.isSelectManualRoute?this.validateInvoiceInfo()&&this.createManualTrip():this.validateInvoiceInfo()&&this.createAvailableTrip()},convertToIsoRunTime:function(e){var t=new Date(e).toISOString();return t},payExpire:function(e){this.isPayExpire=!0},handleOpen:function(){this.isPayExpire&&(this.isPayExpire=!1),this.timeExpire=(new Date).getTime()+this.holderTime}}},_=$,k=(i("88da"),i("8985"),Object(m["a"])(_,s,a,!1,null,"fc7e5248",null));t["a"]=k.exports},"88da":function(e,t,i){"use strict";i("63d9")},8985:function(e,t,i){"use strict";i("4d66")}}]);