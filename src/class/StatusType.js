export default {
  serverIp: 'https://api.anvui.vn/anvui-driver/',
  reloadTimeOut: 100000000, // 1800000 = 30p,
  dateFormat: 'YYYY-MM-DD',
  Trip_Status: [
    {
      key: 0,
      label: 'Vừa tạo',
      description: 'NEW'
    },
    {
      key: 1,
      label: 'Có kế hoạch xuất bến',
      description: 'IN_THE_PLAN'
    },
    {
      key: 2,
      label: 'Đang trong chuyến đi',
      description: 'ON_THE_TRIP'
    },
    {
      key: 3,
      label: 'Đã hoàn thành chuyến',
      description: 'COMPLETED'
    },
    {
      key: 4,
      label: 'Đã hủy',
      description: 'CANCELED'
    },
    {
      key: 5,
      label: 'Đã đến nơi',
      description: 'ARRIVED'
    }
  ],
  TRIP_STATUS: {
    'NEW': 0, // chuyến mới
    'IN_THE_PLAN': 1, // có kế hoạch xuất bến
    'ON_THE_TRIP': 2, // đang trong chuyến đi
    'COMPLETED': 3, // đã hoàn thành
    'CANCELED': 4, // chuyến đã hủy
    'ARRIVED': 5 // đã đến nơi
  },
  KBUS_INVOICE_STATUS: { // status của vé điện tử
    'Hủy': 0, // hủy
    'Vừa tạo': 1, // vừa tạo
    'Đã xuất': 2 // đã xuất
  },
  TRIP_TYPE_ENUM: {
    'Thuê chuyến': 1,
    'Xe ghép': 0
  },
  PARTNER_STATUS: {
    0: 'Hủy',
    1: 'Vừa tạo',
    2: 'Từ chối sau đánh giá',
    3: 'Đã duyệt đánh giá',
    4: 'Từ chối đăng ký',
    10: 'Đã đăng ký'
  },
  VEHICLE_TYPE: {
    0: 'Giường nằm',
    1: 'Ghế ngồi',
    2: 'Ghế ngồi limousine',
    3: 'Giường nằm limousine',
    4: 'Phòng VIP (cabin)'
  },
  TICKET_STATUS_ENUM: {
    'Hủy': 0,
    // 'Đã giữ chỗ': 1,
    'Đã giữ chỗ': 2,
    'Đã thanh toán': 3,
    'Đã lên xe': 4,
    'Đã hoàn thành chuyến': 5,
    'Nhà xe giữ chỗ': 7
  },
  // COMPANY_STATUS_ENUM: {
  //   'Hủy': 0,
  //   'Vừa tạo': 1,
  //   'Đã từ chối sau đánh giá': 2,
  //   'Đã duyệt đánh giá': 3,
  //   'Từ chối đăng ký': 4,
  //   'Đã đăng ký': 10
  // },
  PARTNER_VEHICLE_EVALUATE: {
    // 1. Thông tin hạng mục và chất lượng tiêu chuẩn các xe đăng ký tham gia
    // 100: 'Nhãn hiệu phương tiện',
    // 101: 'Biển số xe',
    // 102: 'Năm sản xuất',
    // 103: 'Thời hạn đăng kiểm',
    104: 'Tất cả các giấy phép hoạt động của pháp nhân ký hợp đồng cho thuê',
    105: 'Tất cả các giấy phép hoạt động của phương tiện được cho thuê',
    106: 'Thông của chủ phương tiện tại vị trí phía sau ghế của lái xe',
    107: 'Điều hòa nhiệt độ, thùng đựng nước',
    108: 'Thùng chứa đồ uống',
    109: 'Dụng cụ y tế sơ cấp cứu, Túi thuốc dự phòng',
    110: 'Dụng cụ thoát hiểm',
    111: 'Rèm cửa chống nắng',
    112: 'Bảng hướng dẫn an toàn',
    113: 'Thùng đựng rác',
    114: 'Hệ thống âm thanh giải trí',
    115: 'Vị trí dành cho người cao tuổi khuyết tật theo quy định',
    116: 'Khăn lạnh, Wifi, Đồ ăn nhẹ, Chăn, Gối',
    117: 'Upload hình ảnh xe, 2 - 3 ảnh  ( <1 MB, tỷ lệ 3:4)',
    // 2. Giá thuê xe
    200: 'Giá thuê /km',
    201: 'Giá km tối thiểu',
    202: 'Số km tối thiểu',
    203: 'Phí nghỉ ngơi',
    204: 'Cầu đường/phụ phí'
  },
  USER_ROLE: [
    {
      key: 'PARTNER',
      label: 'Đối tác'
    },
    {
      key: 'DRIVER',
      label: 'Tài xế'
    },
    {
      key: 'ADMIN',
      label: 'Quản lý'
    }
  ],
  LIST_SERVICESUPPORTER: [
    // {
    //   key: 1,
    //   label: 'ONEPAY'
    // },
    // {
    //   key: 2,
    //   label: 'PAYOO'
    // },
    // {
    //   key: 3,
    //   label: 'VNPAY'
    // },
    // {
    //   key: 4,
    //   label: 'FPT_SMS'
    // },
    // {
    //   key: 5,
    //   label: 'VMG_SMS'
    // },
    // {
    //   key: 6,
    //   label: 'TRUE_MONEY'
    // },
    // {
    //   key: 7,
    //   label: 'MOMO'
    // },
    // {
    //   key: 8,
    //   label: 'INCOM'
    // },
    // {
    //   key: 9,
    //   label: 'MEGAPAY'
    // },
    // {
    //   key: 10,
    //   label: 'VIETTEL'
    // },
    // {
    //   key: 11,
    //   label: 'TRI_ANH'
    // },
    // {
    //   key: 12,
    //   label: 'ZALO_PAY'
    // },
    // {
    //   key: 13,
    //   label: 'VNPAY_QR'
    // },
    // {
    //   key: 14,
    //   label: 'ITS_SMS'
    // },
    {
      key: 15,
      label: 'FPT_INVOICE'
    },
    // {
    //   key: 16,
    //   label: 'VNPAY_SPOS'
    // },
    {
      key: 17,
      label: 'M_INVOICE'
    },
    // {
    //   key: 18,
    //   label: 'VIETTEL_PAY'
    // },
    // {
    //   key: 19,
    //   label: 'AIRPAY'
    // },
    // {
    //   key: 20,
    //   label: 'SOUTH_TELECOM'
    // },
    // {
    //   key: 21,
    //   label: 'LONG_CODE_SOUTH_TELECOM'
    // },
    {
      key: 23,
      label: 'MISA'
    },
    {
      key: 24,
      label: 'VNPT'
    },
    {
      key: 25,
      label: 'VISNAM'
    },
    {
      key: 26,
      label: 'HILO'
    },
    {
      key: 27,
      label: 'EASYINVOICE'
    }
  ]
}
