export const TICKET_STATUS = {
  CANCELED: 0, // hủy
  NEW: 1, // vừa tạo
  BOOKED: 2, // đã giữ
  BOUGHT: 3, // đã thanh toán
  ON_THE_TRIP: 4, // đã lên xe
  COMPLETED: 5 // đã hoàn thành
}

export const TICKET_STATUS_LABEL = {
  0: 'Đã hủy', // hủy
  1: 'Vừa tạo', // vừa tạo
  2: 'Chờ thanh toán', // đã giữ
  3: 'Đã thanh toán', // đã thanh toán
  4: 'Đã lên xe', // đã lên xe
  5: 'Đã hoàn thành' // đã hoàn thành
}

export const COMMENT_TYPE = {
  TRIP: 1, // chuyen
  ROUTE: 2, // tuyen
  VEHICLE: 3, // xe
  COMPANY: 4, // cong ty doi tac
  KBUS: 5 // kbus noi chung
}

export const COMMENT_TYPE_LABEL = {
  1: 'Chuyến',
  2: 'Tuyến',
  3: 'Xe',
  4: 'Công ty đối tác',
  5: 'KBus'
}

export const NEWS_TYPE = {
  BLOG: 1,
  COMMUNITY: 2
}

export const APP_TYPE = {
  APP_IOS_FOR_CUSTOMER: 1,
  APP_ANDROID_FOR_CUSTOMER: 2,
  APP_IOS_FOR_DRIVER: 3,
  APP_ANDROID_FOR_DRIVER: 4
}
