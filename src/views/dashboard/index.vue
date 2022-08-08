<template>
  <el-row :gutter="30" style="padding-bottom:50px">
    <el-col :span="6">
      <div class="dashboard-left-side">
        <div class="notify-container">
          <div class="title-container">
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 16.6667V10.8334C19 7.25169 17.0867 4.25335 13.75 3.46002V2.66669C13.75 1.69835 12.9567 0.916687 11.9883 0.916687C11.02 0.916687 10.25 1.69835 10.25 2.66669V3.46002C6.90168 4.25335 5.00001 7.24002 5.00001 10.8334V16.6667L3.48335 18.1717C2.74835 18.9067 3.26168 20.1667 4.30001 20.1667H19.665C20.7033 20.1667 21.2283 18.9067 20.4933 18.1717L19 16.6667ZM11.9883 23.6667C13.2717 23.6667 14.3217 22.6167 14.3217 21.3334H9.65501C9.65501 21.9522 9.90085 22.5457 10.3384 22.9833C10.776 23.4209 11.3695 23.6667 11.9883 23.6667ZM5.89835 3.51835C6.38835 3.07502 6.40001 2.31669 5.93335 1.85002C5.71884 1.63658 5.4298 1.51484 5.12723 1.51048C4.82466 1.50613 4.53224 1.61951 4.31168 1.82669C2.27586 3.68316 0.930768 6.17591 0.496681 8.89669C0.391681 9.60835 0.940014 10.25 1.66335 10.25C2.22335 10.25 2.71335 9.84169 2.80668 9.28169C3.1505 7.06444 4.24125 5.03111 5.89835 3.51835ZM19.7 1.82669C19.2333 1.39502 18.51 1.40669 18.0667 1.85002C17.6 2.31669 17.6233 3.06335 18.1017 3.50669C19.7117 4.98835 20.8433 7.00669 21.1933 9.27002C21.275 9.83002 21.765 10.2384 22.3367 10.2384C23.0483 10.2384 23.6083 9.59669 23.4917 8.88502C23.0483 6.12002 21.6833 3.65835 19.7 1.82669Z"
                  fill="#F39B13"
                />
              </svg>
            </div>
            <p class="title">Thông báo</p>
          </div>
          <div class="item-container">
            <div v-for="item of listNotify" :key="item.id" class="item">
              <div class="upper">
                <div class="icon">
                  <notify-icon :icon-type="item.type" />
                </div>
                <p class="name">{{ item.title }}</p>
              </div>
              <div class="lower">
                <p class="content" @click="openNotify(item.detailLink)">
                  {{ item.content }}
                </p>
              </div>
              <p class="time">{{ item.creationDate }}</p>
            </div>
          </div>
        </div>
        <div class="dashboard-ads">
          <a
            href="https://anvui.vn/tin-tuc/mo-cong-ban-ve-xe-tet-khong-thu-phi-hoa-hong-giup-nha-xe-vuot-qua-kho-khan-tang-doanh-thu-172.html"
            target="_blank"
          >
            <img
              src="https://lh3.googleusercontent.com/pc2ruSHWtH-ReueGhUNiOP6r9ZEIm_UImftWE0bRnM-8Duya9E6dvuPwhmAQkoezjWLGNWVAp4unh60euPHlZSxNSk4TC_IwqKFN"
              alt="An Vui 2021"
            >
          </a>
        </div>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="dashboard-right-side">
        <!-- Bao cao doanh thu -->
        <div class="">
          <el-card>
            <div slot="header">
              <div class="dashboard-card-header">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.9375 21.9375L21.0625 21.9375C21.5465 21.9375 21.9375 21.5465 21.9375 21.0625L21.9375 0.9375C21.9375 0.453516 21.5465 0.0625 21.0625 0.0625001L0.937498 0.0625018C0.453514 0.0625019 0.0624981 0.453518 0.0624982 0.937502L0.0624999 21.0625C0.0625 21.5465 0.453516 21.9375 0.9375 21.9375ZM14.9375 4.65625C14.9375 4.53594 15.0359 4.4375 15.1562 4.4375L17.3437 4.4375C17.4641 4.4375 17.5625 4.53594 17.5625 4.65625L17.5625 17.3438C17.5625 17.4641 17.4641 17.5625 17.3437 17.5625L15.1562 17.5625C15.0359 17.5625 14.9375 17.4641 14.9375 17.3438L14.9375 4.65625ZM9.6875 12.3125C9.6875 12.1922 9.78594 12.0938 9.90625 12.0938L12.0937 12.0938C12.2141 12.0938 12.3125 12.1922 12.3125 12.3125L12.3125 17.3438C12.3125 17.4641 12.2141 17.5625 12.0937 17.5625L9.90625 17.5625C9.78594 17.5625 9.6875 17.4641 9.6875 17.3438L9.6875 12.3125ZM4.4375 10.3438C4.4375 10.2234 4.53594 10.125 4.65625 10.125L6.84375 10.125C6.96406 10.125 7.0625 10.2234 7.0625 10.3438L7.0625 17.3438C7.0625 17.4641 6.96406 17.5625 6.84375 17.5625L4.65625 17.5625C4.53594 17.5625 4.4375 17.4641 4.4375 17.3438L4.4375 10.3438Z"
                    fill="#F39B13"
                  />
                </svg>
                <span class="dashboard-card-header-title">Báo cáo doanh thu</span>
                <!-- <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="Pick a day"
                  class="dashboard-card-header-action" /> -->
              </div>
            </div>
            <div />
          </el-card>
        </div>
        <!-- Danh sach sinh nhat -->
        <div class="">
          <el-card>
            <div slot="header">
              <div class="dashboard-card-header">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33337 6.00002V10.6655H10.8334V6.00002H13.1667V10.6655H16.6667V6.00002H19V10.6655L20.1667 10.6667C21.0595 10.6666 21.9185 11.0077 22.568 11.6202C23.2175 12.2326 23.6085 13.0701 23.6609 13.9614L23.6667 14.1667V15.3334C23.6667 16.5164 23.2269 17.5967 22.5012 18.4192L22.5 23.5C22.5 23.8094 22.3771 24.1062 22.1583 24.325C21.9395 24.5438 21.6428 24.6667 21.3334 24.6667H2.66671C2.35729 24.6667 2.06054 24.5438 1.84175 24.325C1.62296 24.1062 1.50004 23.8094 1.50004 23.5V18.4134C0.873154 17.6991 0.477736 16.8114 0.366041 15.8677L0.340374 15.5725L0.333374 15.3334V14.1667C0.333324 13.2739 0.67442 12.4149 1.28687 11.7654C1.89932 11.1158 2.73683 10.7249 3.62804 10.6725L3.83337 10.6667L5.00004 10.6655V6.00002H7.33337ZM20.1667 13H3.83337C3.54762 13.0001 3.27181 13.105 3.05827 13.2949C2.84473 13.4847 2.70831 13.7464 2.67487 14.0302L2.66671 14.1667V15.2995L2.67021 15.471C2.70532 16.0651 2.96609 16.6233 3.39918 17.0314C3.83227 17.4396 4.40494 17.6668 5.00004 17.6667C5.55882 17.6677 6.09938 17.468 6.52334 17.104C6.94729 16.74 7.22646 16.2359 7.31004 15.6834L7.32754 15.5049L7.33337 15.2995C7.37537 13.8435 9.46488 13.791 9.65388 15.1432L9.66554 15.2995L9.67021 15.471C9.70284 16.0636 9.96007 16.6215 10.3895 17.0312C10.819 17.4408 11.3884 17.6714 11.9819 17.676C12.5754 17.6806 13.1483 17.4589 13.5841 17.056C14.0198 16.653 14.2857 16.0992 14.3275 15.5072L14.3415 15.1782C14.4862 13.8295 16.5139 13.8295 16.6585 15.1782L16.6725 15.5072C16.7143 16.096 16.9776 16.6471 17.4095 17.0495C17.8414 17.4519 18.4097 17.6756 19 17.6756C19.5903 17.6756 20.1587 17.4519 20.5906 17.0495C21.0225 16.6471 21.2858 16.096 21.3275 15.5072L21.3334 15.3334V14.1667C21.3333 13.8809 21.2284 13.6051 21.0385 13.3916C20.8487 13.178 20.587 13.0416 20.3032 13.0082L20.1667 13ZM6.16671 0.166687C7.70671 1.18285 8.10687 2.60269 7.85721 3.53602C7.73715 3.98437 7.44391 4.36666 7.04199 4.5988C6.64007 4.83094 6.16239 4.89391 5.71404 4.77385C5.26569 4.6538 4.8834 4.36056 4.65126 3.95863C4.41912 3.55671 4.35615 3.07904 4.47621 2.63069C4.82504 1.33569 6.16671 1.91669 6.16671 0.166687ZM12 0.166687C13.54 1.18285 13.9402 2.60269 13.6905 3.53602C13.5705 3.98437 13.2772 4.36666 12.8753 4.5988C12.4734 4.83094 11.9957 4.89391 11.5474 4.77385C11.099 4.6538 10.7167 4.36056 10.4846 3.95863C10.2525 3.55671 10.1895 3.07904 10.3095 2.63069C10.6584 1.33569 12 1.91669 12 0.166687ZM17.8334 0.166687C19.3734 1.18285 19.7735 2.60269 19.5239 3.53602C19.4038 3.98437 19.1106 4.36666 18.7087 4.5988C18.3067 4.83094 17.8291 4.89391 17.3807 4.77385C16.9324 4.6538 16.5501 4.36056 16.3179 3.95863C16.0858 3.55671 16.0228 3.07904 16.1429 2.63069C16.4917 1.33569 17.8334 1.91669 17.8334 0.166687Z" fill="#F39B13" />
                </svg>
                <span class="dashboard-card-header-title">Danh sách sinh nhật</span>
              </div>
            </div>
            <div>
              <el-table
                :data="birthdayList"
                style="width: 100%"
              >
                <el-table-column
                  prop="name"
                  label="Họ tên"
                  width="180"
                />
                <el-table-column
                  prop="date"
                  label="Sinh nhật"
                  width="180"
                />
                <el-table-column
                  prop="phone"
                  label="Điện thoại"
                />
                <el-table-column
                  prop="email"
                  label="Email"
                />
              </el-table>
            </div>
          </el-card>
        </div>
        <!-- Nhan vien sap het han bang lai -->
        <div class="">
          <el-card>
            <div slot="header">
              <div class="dashboard-card-header">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 12.7031C10.5 12.2812 10.4707 11.8887 10.4121 11.5254C10.3535 11.1621 10.2578 10.8105 10.125 10.4707C9.99219 10.1309 9.79297 9.86328 9.52734 9.66797C9.26172 9.47266 8.94531 9.375 8.57812 9.375C8.07812 9.875 7.46875 10.125 6.75 10.125C6.03125 10.125 5.42187 9.875 4.92187 9.375C4.55469 9.375 4.23828 9.47266 3.97266 9.66797C3.70703 9.86328 3.50781 10.1309 3.375 10.4707C3.24219 10.8105 3.14648 11.1621 3.08789 11.5254C3.0293 11.8887 3 12.2812 3 12.7031C3 13.1328 3.12305 13.498 3.36914 13.7988C3.61523 14.0996 3.91016 14.25 4.25391 14.25H9.24609C9.58984 14.25 9.88476 14.0996 10.1309 13.7988C10.377 13.498 10.5 13.1328 10.5 12.7031ZM9 7.5C9 6.875 8.78125 6.34375 8.34375 5.90625C7.90625 5.46875 7.375 5.25 6.75 5.25C6.125 5.25 5.59375 5.46875 5.15625 5.90625C4.71875 6.34375 4.5 6.875 4.5 7.5C4.5 8.125 4.71875 8.65625 5.15625 9.09375C5.59375 9.53125 6.125 9.75 6.75 9.75C7.375 9.75 7.90625 9.53125 8.34375 9.09375C8.78125 8.65625 9 8.125 9 7.5ZM21 13.125V12.375C21 12.2656 20.9648 12.1758 20.8945 12.1055C20.8242 12.0352 20.7344 12 20.625 12H12.375C12.2656 12 12.1758 12.0352 12.1055 12.1055C12.0352 12.1758 12 12.2656 12 12.375V13.125C12 13.2344 12.0352 13.3242 12.1055 13.3945C12.1758 13.4648 12.2656 13.5 12.375 13.5H20.625C20.7344 13.5 20.8242 13.4648 20.8945 13.3945C20.9648 13.3242 21 13.2344 21 13.125ZM16.5 10.125V9.375C16.5 9.26562 16.4648 9.17578 16.3945 9.10547C16.3242 9.03516 16.2344 9 16.125 9H12.375C12.2656 9 12.1758 9.03516 12.1055 9.10547C12.0352 9.17578 12 9.26562 12 9.375V10.125C12 10.2344 12.0352 10.3242 12.1055 10.3945C12.1758 10.4648 12.2656 10.5 12.375 10.5H16.125C16.2344 10.5 16.3242 10.4648 16.3945 10.3945C16.4648 10.3242 16.5 10.2344 16.5 10.125ZM21 10.125V9.375C21 9.26562 20.9648 9.17578 20.8945 9.10547C20.8242 9.03516 20.7344 9 20.625 9H18.375C18.2656 9 18.1758 9.03516 18.1055 9.10547C18.0352 9.17578 18 9.26562 18 9.375V10.125C18 10.2344 18.0352 10.3242 18.1055 10.3945C18.1758 10.4648 18.2656 10.5 18.375 10.5H20.625C20.7344 10.5 20.8242 10.4648 20.8945 10.3945C20.9648 10.3242 21 10.2344 21 10.125ZM21 7.125V6.375C21 6.26562 20.9648 6.17578 20.8945 6.10547C20.8242 6.03516 20.7344 6 20.625 6H12.375C12.2656 6 12.1758 6.03516 12.1055 6.10547C12.0352 6.17578 12 6.26562 12 6.375V7.125C12 7.23438 12.0352 7.32422 12.1055 7.39453C12.1758 7.46484 12.2656 7.5 12.375 7.5H20.625C20.7344 7.5 20.8242 7.46484 20.8945 7.39453C20.9648 7.32422 21 7.23438 21 7.125ZM1.5 3H22.5V1.875C22.5 1.76562 22.4648 1.67578 22.3945 1.60547C22.3242 1.53516 22.2344 1.5 22.125 1.5H1.875C1.76562 1.5 1.67578 1.53516 1.60547 1.60547C1.53516 1.67578 1.5 1.76562 1.5 1.875V3ZM24 1.875V16.125C24 16.6406 23.8164 17.082 23.4492 17.4492C23.082 17.8164 22.6406 18 22.125 18H1.875C1.35937 18 0.917969 17.8164 0.550781 17.4492C0.183594 17.082 0 16.6406 0 16.125V1.875C0 1.35938 0.183594 0.917969 0.550781 0.550781C0.917969 0.183594 1.35937 0 1.875 0H22.125C22.6406 0 23.082 0.183594 23.4492 0.550781C23.8164 0.917969 24 1.35938 24 1.875Z" fill="#F39B13" />
                </svg>
                <span class="dashboard-card-header-title">Nhân viên sắp hết hạn bằng lái</span>
              </div>
            </div>
            <div>
              <el-table
                :data="birthdayList"
                style="width: 100%"
              >
                <el-table-column
                  prop="name"
                  label="Họ tên"
                  width="180"
                />
                <el-table-column
                  prop="licenseType"
                  label="Loại bằng"
                  width="180"
                />
                <el-table-column
                  prop="phone"
                  label="Điện thoại"
                />
                <el-table-column
                  prop="date"
                  label="Ngày hết hạn"
                />
                <el-table-column
                  prop="dayLeft"
                  label="Ngày còn lại"
                />
              </el-table>
            </div>
          </el-card>
        </div>
        <!-- Xe sap het han dang kiem -->
        <div class="">
          <el-card>
            <div slot="header">
              <div class="dashboard-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 5.02454C22.5035 4.85421 22.4919 3.31537 20.9834 1.83371C19.4982 0.375374 18.0002 0.333374 17.8334 0.333374H6.16204C5.88321 0.333374 4.42021 0.406874 3.00271 1.85237C1.54204 3.34104 1.50004 4.83554 1.50004 5.00004V8.50004H0.333374V12H1.50004V19C1.50004 19.8564 1.97371 20.6019 2.66671 21.0079V22.5C2.66671 22.8095 2.78962 23.1062 3.00842 23.325C3.22721 23.5438 3.52396 23.6667 3.83337 23.6667H5.00004C5.30946 23.6667 5.60621 23.5438 5.825 23.325C6.04379 23.1062 6.16671 22.8095 6.16671 22.5V21.3334H17.8334V22.5C17.8334 22.8095 17.9563 23.1062 18.1751 23.325C18.3939 23.5438 18.6906 23.6667 19 23.6667H20.1667C20.4761 23.6667 20.7729 23.5438 20.9917 23.325C21.2105 23.1062 21.3334 22.8095 21.3334 22.5V21.0102C21.6873 20.8072 21.9815 20.5145 22.1864 20.1616C22.3912 19.8087 22.4994 19.4081 22.5 19V12H23.6667V8.50004H22.5V5.02454ZM8.50004 2.66671H15.5V5.00004H8.50004V2.66671ZM5.58337 19C5.11909 18.9999 4.67388 18.8153 4.3457 18.4869C4.01751 18.1585 3.83322 17.7132 3.83337 17.2489C3.83353 16.7846 4.01811 16.3394 4.34652 16.0112C4.67493 15.683 5.12026 15.4987 5.58454 15.4989C6.04882 15.499 6.49403 15.6836 6.82222 16.012C7.15041 16.3404 7.3347 16.7858 7.33454 17.25C7.33439 17.7143 7.1498 18.1595 6.82139 18.4877C6.49299 18.8159 6.04766 19.0002 5.58337 19ZM10.8334 13.1667H3.83337V7.33337H10.8334V13.1667ZM18.4167 19C17.9524 18.9999 17.5072 18.8153 17.179 18.4869C16.8508 18.1585 16.6666 17.7132 16.6667 17.2489C16.6669 16.7846 16.8514 16.3394 17.1799 16.0112C17.5083 15.683 17.9536 15.4987 18.4179 15.4989C18.8822 15.499 19.3274 15.6836 19.6556 16.012C19.9837 16.3404 20.168 16.7858 20.1679 17.25C20.1677 17.7143 19.9831 18.1595 19.6547 18.4877C19.3263 18.8159 18.881 19.0002 18.4167 19ZM20.1667 13.1667H13.1667V7.33337H20.1667V13.1667Z" fill="#F39B13" />
                </svg>
                <span class="dashboard-card-header-title">Xe sắp hết hạn đăng kiểm</span>
                <!-- <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="Pick a day"
                  class="dashboard-card-header-action" /> -->
              </div>
            </div>
            <div>
              <el-table
                :data="birthdayList"
                style="width: 100%"
              >
                <el-table-column
                  prop="vehicleName"
                  label="Biển số xe"
                  width="180"
                />
                <el-table-column
                  prop="date"
                  label="Ngày hết hạn"
                  width="180"
                />
                <el-table-column
                  prop="dayLeft"
                  label="Ngày còn lại"
                />
              </el-table>
            </div>
          </el-card>
        </div>
        <!-- Tin tuc -->
        <div class="">
          <el-card>
            <div slot="header">
              <div class="dashboard-card-header">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H2C0.89 0 0 0.89 0 2V16C0 17.11 0.89 18 2 18H18C19.11 18 20 17.11 20 16V2C20 0.89 19.11 0 18 0ZM3 4H8V10H3V4ZM17 14H3V12H17V14ZM17 10H10V8H17V10ZM17 6H10V4H17V6Z" fill="#F39B13" />
                </svg>
                <span class="dashboard-card-header-title">Tin tức</span>
              </div>
            </div>
            <div class="dashboard-news">
              <div class="dashboard-news-container">
                <h3 class="dashboard-news-title">Tin tức từ An Vui</h3>
                <div class="dashboard-news-important">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="Image">
                  <a href="">VINACAPITAL VENTURES ĐẦU TƯ CHO AN VUI</a>
                  <p>{{ fakeNewsContent }}</p>
                </div>
                <div class="dashboard-news-list">
                  <div v-for="item of 3" :key="item" class="news-item">
                    <img src="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg" alt="Image">
                    <div class="news-item-content">
                      <p class="news-item-title">{{ fakeNewTitle }}</p>
                      <p class="news-item-description">{{ fakeNewsContent }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="dashboard-news-container">
                <h3 class="dashboard-news-title">Tin tức từ Nhà xe</h3>
                <div class="dashboard-news-important">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="Image">
                  <a href="">{{ fakeNewTitle }}</a>
                  <p>{{ fakeNewTitle }}</p>
                </div>
                <div class="dashboard-news-list">
                  <div v-for="item of 3" :key="item" class="news-item">
                    <img src="https://analyticsindiamag.com/wp-content/uploads/2018/12/image.jpg" alt="Image">
                    <div class="news-item-content">
                      <p class="news-item-title">{{ fakeNewTitle }}</p>
                      <p class="news-item-description">{{ fakeNewsContent }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import NotifyIcon from '@/components/NotifyIcon'

export default {
  name: 'Dashboard',
  components: { NotifyIcon },
  data() {
    return {
      listNotify: this.getListNotify(),
      value1: null,
      birthdayList: this.getListBirthday(),
      fakeNewsContent: 'Đây là kênh Youtube cá nhân của mình nơi mình sống thật với bản thân, tất nhiên kênh này sẽ không thể làm hài lòng được tất cả mọi người, anh em nào cảm thấy không xem được thì làm ơn xin bỏ qua nhé. Thanks',
      fakeNewTitle: 'Mình là Bomman đến từ 500Bros Studio, Nhớ BẬT CHUÔNG để nhận được thông báo mỗi khi mình ra video mới nhé!!!!'
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    getListNotify() {
      const list = [
        {
          companyIds: null,
          content:
            'em đã cho team tech triển khai như nội dung em đã nói hôm họp chưa?. là hàng ngày mỗi tech tự kéo số task vào cột progess để làm tương ứng lượng thời gian kh làm của mỗi task, làm xong kéo test ngay để bộ phận test test. cuối ngày ko xong kéo lại, để đảm task trong cột progess là task đang làm trong ngày. như vậy cái biểu đồ burn down nó mới sát cũng như việc test nó ko bị dồn.',
          creationDate: 20210127,
          creatorId: 'ADM1109778852414622',
          detailLink:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          endDate: 20210206,
          id: '1',
          imageURL:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          modifiedDate: 1611736156915,
          startDate: 20210127,
          title: 'Thông báo duy trì số dư tài khoản',
          type: 1
        },
        {
          companyIds: null,
          content:
            'Nhà xe cần duy trì số dư tài khoản để đảm bảo các dịch vụ SMS, Email, kích hoạt App được duy trị, không phát sinh lỗi.',
          creationDate: 20210127,
          creatorId: 'ADM1109778852414622',
          detailLink:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          endDate: 20210206,
          id: '2',
          imageURL:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          modifiedDate: 1611736156915,
          startDate: 20210127,
          title: 'Thông báo duy trì số dư tài khoản',
          type: 2
        },
        {
          companyIds: null,
          content:
            'Nhà xe cần duy trì số dư tài khoản để đảm bảo các dịch vụ SMS, Email, kích hoạt App được duy trị, không phát sinh lỗi.',
          creationDate: 20210127,
          creatorId: 'ADM1109778852414622',
          detailLink:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          endDate: 20210206,
          id: '3',
          imageURL:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          modifiedDate: 1611736156915,
          startDate: 20210127,
          title: 'Thông báo duy trì số dư tài khoản',
          type: 3
        },
        {
          companyIds: null,
          content:
            'Nhà xe cần duy trì số dư tài khoản để đảm bảo các dịch vụ SMS, Email, kích hoạt App được duy trị, không phát sinh lỗi.',
          creationDate: 20210127,
          creatorId: 'ADM1109778852414622',
          detailLink:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          endDate: 20210206,
          id: '4',
          imageURL:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          modifiedDate: 1611736156915,
          startDate: 20210127,
          title: 'Thông báo duy trì số dư tài khoản',
          type: 2
        },
        {
          companyIds: null,
          content:
            'Nhà xe cần duy trì số dư tài khoản để đảm bảo các dịch vụ SMS, Email, kích hoạt App được duy trị, không phát sinh lỗi.',
          creationDate: 20210127,
          creatorId: 'ADM1109778852414622',
          detailLink:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          endDate: 20210206,
          id: '5',
          imageURL:
            'https://drive.google.com/file/d/1-DqEVHmSEUtvN-M9XOPIGdf1jU2Thdd2/view',
          modifiedDate: 1611736156915,
          startDate: 20210127,
          title: 'Thông báo duy trì số dư tài khoản',
          type: 1
        }
      ]
      return list
    },
    getListBirthday() {
      const list = []
      for (let i = 0; i < 6; i++) {
        list.push({
          name: `Nguyễn Văn A ${i}`,
          date: `${i}-01-2021`,
          phone: '012345678',
          email: `abc${i}@gmail.com`,
          licenseType: 'A',
          dayLeft: i,
          vehicleName: '12A-12345'
        })
      }
      return list
    },
    openNotify() {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-left-side {
    display: grid;
    grid-gap: 20px;
  }
  &-right-side {
    display: grid;
    grid-gap: 20px;
  }
  &-ads {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  &-card-header {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7px;
    }
    &-title {
      color: #232731;
      font-weight: 500;
      font-size: 18px;;
    }
    &-action {
      float: right;
      padding: 3px 0px;
    }
  }
  &-news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    &-container {
      display: grid;
      grid-gap: 10px;
    }
    &-title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 18px;
      color: #232731;
    }
    &-important {
      display: grid;
      grid-gap: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #CFD3DB;
      img {
        width: 100%;
        height: auto;
        min-height: 300px;
        border-radius: 12px;
      }
      a {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        color: #232731;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        /* autoprefixer: off */
      }
      a:hover {
        color: #084388;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        color: #646D84;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        /* autoprefixer: off */
      }
    }
    &-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      .news-item {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-gap: 5px;
        img {
          width: 100%;
          height: auto;
          min-height: 70px;
          border-radius: 12px;
        }
        // &-content {}
        &-title {
          font-weight: bolder;
          font-size: 14px;
          color: #383F47;
          margin-bottom: 7px;
          cursor: pointer;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          /* autoprefixer: off */
        }
        &-title:hover {
          color: #084388;
        }
        &-description {
          font-size: 14px;
          color: #646D84;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          /* autoprefixer: off */
        }
      }
    }
  }
}
.notify-container {
  overflow: hidden;
  border: 1px solid #cfd3db;
  border-radius: 12px;
  .title-container {
    border-bottom: 1px solid #cfd3db;
    border-radius: 12px;
    background: #f1f3f5;
    padding: 15px;
    display: grid;
    grid-template-columns: 15% 85%;
    .icon {
      margin: 0;
    }
    .title {
      font-weight: 500;
      font-size: 16px;
      color: #232731;
    }
  }
  .item-container {
    .item {
      background: white;
      border-bottom: 1px solid #cfd3db;
      display: grid;
      grid-gap: 3px;
      padding: 8px;
      .upper {
        display: grid;
        grid-template-columns: 10% 90%;
        align-items: baseline;
        // .icon {}
        .name {
          font-size: 14px;
          font-weight: 500;
          color: #084388;
        }
      }
      .lower {
        .content {
          cursor: pointer;
          font-weight: 500;
          font-size: 12px;
          color: #232731;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          /* autoprefixer: off */
          line-height: 20px;
        }
        .content:hover {
          text-decoration: underline;
        }
      }
      .time {
        font-weight: 500;
        font-size: 12px;
        color: #5c9cfe;
      }
    }
    .item:last-child {
      border-bottom: 0;
    }
  }
}
</style>
