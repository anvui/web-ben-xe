<template>
  <div class="navbar-container">
    <div class="logo" @click="goPath('dashboard')">
      <company-logo :logo-url="logoLink" />
    </div>
    <div class="menu-container">
      <div v-for="(item, index) of ListMenu" :key="index" class="menu-item">
        <el-dropdown class="av-menu-slot" @command="handleCommand">
          <div class="av-menu-label">
            <span :class="{ active : item.active }">{{ item.label }}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(i, order) of item.subMenu"
              :key="order"
              :disabled="i.disabled"
              :divided="i.divided"
              :command="i"
            >
              <span class="av-menu-slot-order">{{ `${index+1}.${i.key}` }}</span>
              <span>{{ i.label }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="right-menu">
      <el-dropdown class="notify-container">
        <i class="el-icon-message-solid notify-icon" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="notify-container">
        <i class="el-icon-search notify-icon" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="balance-amount">
        <span>Số dư ví: {{ BalanceAmount }}đ</span>
      </div>
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github2</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyLogo from '@/components/CompanyLogo'
// import goPath from '@/utils/function-help'

export default {
  components: { CompanyLogo },
  data() {
    return {
      ListMenu: this.renderMenu(),
      BalanceAmount: '2.000.000',
      logoLink: 'https://lh3.googleusercontent.com/-BpLdJpXJc-IKfkkUHwTVifYenC8JJ5344fYSTSbwAFY9nlciqmt6wSSpd_Ez00HkUs0e2t4EpXsDGJ-l62pyTNB22-Vq3yjnX0HujE'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleCommand(command) {
      // goPath(command);
      this.goPath(command.path)
    },
    goPath(path) {
      this.$router.push(path)
    },
    renderMenu() {
      const list = [
        {
          key: 1,
          label: 'Hành khách',
          active: true,
          subMenu: [
            {
              key: 1,
              label: 'Vé hành khách 2.0',
              path: 'ticket',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Tra cứu thông tin vé',
              path: 'dashboard',
              disabled: false,
              divided: true
            },
            {
              key: 3,
              label: 'Tra cứu vé theo cổng thanh toán',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 4,
              label: 'Báo cáo công nợ đại lý',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 5,
              label: 'Thống kê chuyến theo tài xế',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 6,
              label: 'Báo cáo theo nhân viên',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 7,
              label: 'Báo cáo theo tài xế',
              path: 'dashboard',
              disabled: false,
              divided: false
            }
          ]
        },
        {
          key: 2,
          label: 'Hàng hóa',
          active: false,
          subMenu: [
            {
              key: 1,
              label: 'Vé hàng hóa',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Yêu cầu nhận hàng',
              path: 'dashboard',
              disabled: false,
              divided: true
            },
            {
              key: 3,
              label: 'Điều phối yêu cầu nhận hàng',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 4,
              label: 'Danh sách đơn hàng',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 7,
              label: 'Điều phối hàng hóa',
              path: 'dashboard',
              disabled: false,
              divided: false
            }
          ]
        },
        {
          key: 3,
          label: 'Điều hành',
          active: false,
          subMenu: [
            {
              key: 1,
              label: 'Phân tài trung chuyển khách',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Điều phối giao vé',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 3,
              label: 'Sắp xếp tuyến',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 4,
              label: 'Báo cáo theo tài xế',
              path: 'dashboard',
              disabled: false,
              divided: true
            }
          ]
        },
        {
          key: 4,
          label: 'Quản lý',
          active: false,
          subMenu: [
            {
              key: 1,
              label: 'Thu chi',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Thu chi chuyến',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 3,
              label: 'Báo cáo sổ quỹ tiền mặt',
              path: 'dashboard',
              disabled: false,
              divided: false
            }
          ]
        },
        {
          key: 5,
          label: 'Khai báo',
          active: false,
          subMenu: [
            {
              key: 1,
              label: 'Khai báo nhóm quyền',
              path: 'permission',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Khai báo nhân viên',
              path: 'employee',
              disabled: false,
              divided: false
            },
            {
              key: 2,
              label: 'Khai báo điểm dừng',
              path: 'dashboard',
              disabled: false,
              divided: true
            }
          ]
        },
        {
          key: 6,
          label: 'Hệ thống',
          active: false,
          subMenu: [
            {
              key: 1,
              label: 'Thông tin hệ thống',
              path: 'dashboard',
              disabled: false,
              divided: false
            },
            {
              key: 1,
              label: 'Cấu hình hệ thống',
              path: 'dashboard',
              disabled: false,
              divided: false
            }
          ]
        }
      ]
      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &-container {
    background: #FFFFFF;
    height: 50px;
    position: relative;
    overflow: hidden;
    display: flex;
    .logo {
      flex-grow: 1;
      height: 50px;
      padding: 5px 10px 5px 0px;
      cursor: pointer;
    }
    .menu-container {
      flex-grow: 6;
      display: flex;
      .menu-item {
        width: 100px;
        height: 49px;
        // border: 1px solid red;
        text-align: center;
        padding: 5px 4px;
        .av-menu {
          &-slot {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            transition: all 0.3s;
          }
          &-slot:hover {
            background: #ECEDF1;
          }
          &-label {
            padding: 10px;
            color: #646D84;
            outline: none;
            .active {
              color: #084388 !important;
            }
            .active::after {
              content: "";
              position: absolute;
              bottom: -6px;
              left: 12%;
              width: 70px;
              border: 1px solid #084388;
              border-radius: 10px;
            }
          }
        }
      }
    }
    .right-menu {
      flex-grow: 3;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &:focus {
        outline: none;
      }
      .notify-icon {
        font-size: 20px;
        width: 50px;
        text-align: center;
        line-height: 40px;
      }
      .balance-amount {
        padding: 0px 10px;
        font-weight: normal;
      }

      .avatar-container {
        margin-right: 20px;

        .avatar-wrapper {
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 16px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
.av-menu-slot-order {
  width: 20px;
  margin-right: 10px;
}
// .navbar {
//   height: 50px;
//   overflow: hidden;
//   position: relative;
//   background: #fff;
//   box-shadow: 0 1px 4px rgba(0,21,41,.08);

//   .hamburger-container {
//     line-height: 46px;
//     height: 100%;
//     float: left;
//     cursor: pointer;
//     transition: background .3s;
//     -webkit-tap-highlight-color:transparent;

//     &:hover {
//       background: rgba(0, 0, 0, .025)
//     }
//   }

//   .breadcrumb-container {
//     float: left;
//   }

//   .right-menu {
//     float: right;
//     height: 100%;
//     line-height: 50px;

//     &:focus {
//       outline: none;
//     }

//     .right-menu-item {
//       display: inline-block;
//       padding: 0 8px;
//       height: 100%;
//       font-size: 18px;
//       color: #5a5e66;
//       vertical-align: text-bottom;

//       &.hover-effect {
//         cursor: pointer;
//         transition: background .3s;

//         &:hover {
//           background: rgba(0, 0, 0, .025)
//         }
//       }
//     }

//     .avatar-container {
//       margin-right: 30px;

//       .avatar-wrapper {
//         margin-top: 5px;
//         position: relative;

//         .user-avatar {
//           cursor: pointer;
//           width: 40px;
//           height: 40px;
//           border-radius: 10px;
//         }

//         .el-icon-caret-bottom {
//           cursor: pointer;
//           position: absolute;
//           right: -20px;
//           top: 25px;
//           font-size: 12px;
//         }
//       }
//     }
//   }
// }
</style>
