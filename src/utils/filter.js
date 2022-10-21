// import ListProvince from '@/class/Province'
import StatusType from '@/class/StatusType'

export default {
  filters: {
    phoneNumber: function(str) {
      if (typeof str === 'undefined' || !str || str.toString().length < 7) {
        return str
      }
      var str1 = str.substr(-3, 3)
      var str2 = str.substr(-6, 3)
      var str3 = str.substring(0, str.length - 6)
      return str3 + ' ' + str2 + ' ' + str1
    },
    number: function(num) {
      if (isNaN(num) || num === null) {
        return '-Không xác định-'
      }
      return parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    customDate: function(miliseconds = 0, formatString = '#hhhh#:#mm# #DD#-#MM#-#YYYY#', is = false) {
      let inputValue = miliseconds
      if (isNaN(miliseconds)) {
        return '-Không xác định-'
      }
      if (is) { // nếu true thì miliseconds là múi giờ +0 , nếu múi giờ + 0 thì thay đổi miliseconds
        inputValue -= -new Date(miliseconds).getTimezoneOffset() * 60000
      }
      var dateFm = new Date(inputValue)
      var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th
      YY = ((YYYY = dateFm.getFullYear()) + '').slice(-2)
      MM = (M = dateFm.getMonth() + 1) < 10 ? ('0' + M) : M
      MMM = (MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][M - 1]).substring(0, 3)
      DD = (D = dateFm.getDate()) < 10 ? ('0' + D) : D
      DDD = (DDDD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateFm.getDay()]).substring(0, 3)
      th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th'
      formatString = formatString.replace('#YYYY#', YYYY).replace('#YY#', YY).replace('#MMMM#', MMMM).replace('#MMM#', MMM).replace('#MM#', MM).replace('#M#', M).replace('#DDDD#', DDDD).replace('#DDD#', DDD).replace('#DD#', DD).replace('#D#', D).replace('#th#', th)
      h = (hhh = dateFm.getHours())
      if (h === 0) h = 24
      if (h > 12) h -= 12
      hh = h < 10 ? ('0' + h) : h
      hhhh = hhh < 10 ? ('0' + hhh) : hhh
      AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase()
      mm = (m = dateFm.getMinutes()) < 10 ? ('0' + m) : m
      ss = (s = dateFm.getSeconds()) < 10 ? ('0' + s) : s
      return formatString.replace('#hhhh#', hhhh).replace('#hhh#', hhh).replace('#hh#', hh).replace('#h#', h).replace('#mm#', mm).replace('#m#', m).replace('#ss#', ss).replace('#s#', s).replace('#ampm#', ampm).replace('#AMPM#', AMPM)
    },
    customDateFromDate: function(date = null, formatString = '#hhhh#:#mm# #DD#-#MM#-#YYYY#', is = true) {
      if (!date) {
        return '-Không xác định-'
      }
      let miliseconds = Date.parse(date)
      if (is) { // nếu true thì miliseconds là múi giờ +0 , nếu múi giờ + 0 thì thay đổi miliseconds
        miliseconds -= -new Date(miliseconds).getTimezoneOffset() * 60000
      }
      var dateFm = new Date(miliseconds)
      var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th
      YY = ((YYYY = dateFm.getFullYear()) + '').slice(-2)
      MM = (M = dateFm.getMonth() + 1) < 10 ? ('0' + M) : M
      MMM = (MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][M - 1]).substring(0, 3)
      DD = (D = dateFm.getDate()) < 10 ? ('0' + D) : D
      DDD = (DDDD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateFm.getDay()]).substring(0, 3)
      th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th'
      formatString = formatString.replace('#YYYY#', YYYY).replace('#YY#', YY).replace('#MMMM#', MMMM).replace('#MMM#', MMM).replace('#MM#', MM).replace('#M#', M).replace('#DDDD#', DDDD).replace('#DDD#', DDD).replace('#DD#', DD).replace('#D#', D).replace('#th#', th)
      h = (hhh = dateFm.getHours())
      if (h === 0) h = 24
      if (h > 12) h -= 12
      hh = h < 10 ? ('0' + h) : h
      hhhh = hhh < 10 ? ('0' + hhh) : hhh
      AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase()
      mm = (m = dateFm.getMinutes()) < 10 ? ('0' + m) : m
      ss = (s = dateFm.getSeconds()) < 10 ? ('0' + s) : s
      return formatString.replace('#hhhh#', hhhh).replace('#hhh#', hhh).replace('#hh#', hh).replace('#h#', h).replace('#mm#', mm).replace('#m#', m).replace('#ss#', ss).replace('#s#', s).replace('#ampm#', ampm).replace('#AMPM#', AMPM)
    },
    checkDeviceType: function() {
      const ua = navigator.userAgent
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet'
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return 'mobile'
      }
      return 'desktop'
    },
    userLevel: function(number) {
      const list = [
        {
          key: 0,
          label: 'Tài khoản hệ thống'
        },
        {
          key: 1,
          label: 'Tài khoản Cục'
        },
        {
          key: 2,
          label: 'Tài khoản Sở'
        },
        {
          key: 3,
          label: 'Tài khoản nhân viên Sở'
        }
      ]
      return list.find(x => x.key === number) ? list.find(x => x.key === number).label : 'Không xác định'
    },
    dateStrToFormatDate: function(date) {
      date = date.toString()
      var str1 = date.substr(0, 4)
      var str2 = date.substr(4, 2)
      var str3 = date.substr(6, 2)
      date = str3 + '/' + str2 + '/' + str1
      return date
    },
    dateStrToMs: function(date) {
      date = date.toString()
      var str1 = date.substr(0, 4)
      var str2 = date.substr(4, 2)
      var str3 = date.substr(6, 2)
      date = str2 + '/' + str3 + '/' + str1
      var ms = new Date(date).getTime() // cộng timezone việt nam
      return ms
    },
    removeVietnameseTones: function(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      str = str.replace(/đ/g, 'd')
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
      str = str.replace(/Đ/g, 'D')
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g, ' ')
      str = str.trim()
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
      return str
    },
    arrJoin(arr, format = ', ') {
      if (!arr) {
        return ''
      }
      return arr.join(format)
    },
    tripStatus(number = null) {
      const list = StatusType.Trip_Status
      return !isNaN(number) && list.find(x => x.key === number)
        ? list.find(x => x.key === number).label
        : 'Không xác định'
    },
    serviceSupporter(number = null) {
      const list = StatusType.LIST_SERVICESUPPORTER
      return !isNaN(number) && list.find(x => x.key === number)
        ? list.find(x => x.key === number).label
        : 'Không xác định'
    },
    partnerStatus(number = null) {
      const list = StatusType.PARTNER_STATUS
      return list[number] ? list[number] : 'Không xác định'
    },
    ticketStatus(number = null) { // func cũ
      const list = StatusType.TICKET_STATUS_ENUM
      // console.log(Object.keys(list))
      const statusName = Object.keys(list).find(x => list[x] === number)
      return statusName
    },
    statusByTicket(ticket = null) {
      const list = StatusType.TICKET_STATUS_ENUM
      // console.log(Object.keys(list))
      let statusName = Object.keys(list).find(x => list[x] === ticket.ticketStatus)
      if (ticket.ticketStatus === 2 && ticket.overTime && ticket.overTime < new Date().getTime()) {
        statusName = 'Hết hạn giữ chỗ'
      }
      return statusName
    },
    invoiceStatus(number = null) {
      const list = StatusType.KBUS_INVOICE_STATUS
      console.log(Object.keys(list))
      const statusName = Object.keys(list).find(x => list[x] === number)
      return statusName
    },
    tripType(value = null) {
      try {
        if (!value) {
          return 'Xe ghép'
        }
        if (typeof value === 'string') {
          return value ? 'Thuê chuyến' : 'Xe ghép'
        }
        if (typeof value === 'object') {
          return value.tripCode ? 'Thuê chuyến' : 'Xe ghép'
        }
      } catch (error) {
        console.log(error)
        return '-Không xác định-'
      }
    },
    // tripType(number = null) {
    //   const list = StatusType.TRIP_TYPE_ENUM
    //   const statusName = Object.keys(list).find(x => list[x] === number)
    //   return statusName
    // },
    UserRole(input = null) {
      const list = StatusType.USER_ROLE
      return input && list.find(x => x.key === input)
        ? list.find(x => x.key === input).label
        : 'Không xác định'
    },
    gender(input) {
      const list = {
        'MALE': 'Nam',
        'FEMALE': 'Nữ'
      }
      return list[input] ? list[input] : '-Không xác định-'
    },
    tripOrderTransportStatus(input) {
      const list = {
        1: 'Chấp thuận',
        2: 'Từ chối'
      }
      return list[input] ? list[input] : 'Chưa duyệt'
    },
    vehicleType(input) {
      const list = StatusType.VEHICLE_TYPE
      return list[input] ? list[input] : '-Không xác định-'
    },
    sum: function(arr) {
      return arr ? arr.reduce((a, b) => a + b, 0) : 0
    },
    percentage: function(input) {
      return input && typeof parseFloat(input) === 'number' ? `${input * 100}%` : 'Không xác định'
    }
    // jobTitle(number = null) {
    //   const list = StatusType.jobTitle
    //   return !isNaN(number) && list.find(x => x.key === number)
    //     ? list.find(x => x.key === number).label
    //     : 'Không xác định'
    // },
  },
  create: function(Vue) {
    Object.keys(this.filters).forEach(function(filter, k) {
      Vue.filter(filter, this.filters[filter])
    }.bind(this))
  }
}
