<template>
  <div class="form-share-link">
    <el-dialog
      :visible="value"
      width="50%"
      @close="handleClose"
    >
      <div class="w-100">
        <div class="col-12 text-center title">{{ $t('formShareLink.title') }}</div>
        <div class="form-group">
          <div class="form-field">
            <input v-model="dataForm.title" type="text" class="form-input">
            <label class="desc popup-text">{{ $t('formShareLink.field.title') }}</label>
          </div>
          <div class="form-field">
            <input v-model="dataForm.description" type="text" class="form-input">
            <label class="desc popup-text">{{ $t('formShareLink.field.description') }}</label>
          </div>
        </div>
        <div class="btn-wrapper">
          <el-button class="btn-signup" :loading="loadingGetLink" @click.stop="handleGetLink()">
            <span>{{ $t('formShareLink.btnGetLink') }}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z" fill="white" />
              <path d="M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z" fill="white" />
            </svg>
          </el-button>
        </div>
      </div>
      <div v-if="linkShare" class="share">
        <span class="description">{{ $t('formShareLink.inviteFriend.title') }}</span>
        <div class="list-icon">
          <el-button title="Copy to clipboard" @click.prevent="shareTrip('url')">
            <img src="@/assets/images/icon-copy.png" alt="copy to clipboard">
          </el-button>
          <el-button href="" title="Share to facebook" @click.prevent="shareTrip('fb')">
            <img src="@/assets/images/icon-facebook.png" alt="share to fb">
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { copyToClipboard } from '@/utils/index'
import { mapGetters } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trip: {
      type: Object,
      default: null
    }
    // getPointManual: {
    //   type: String,
    //   default: null
    // }
  },
  data() {
    return {
      dataForm: {
        title: this.$t('formShareLink.field.dataTitle') || '',
        description: ''
      },
      loadingGetLink: false
    }
  },
  computed: {
    ...mapGetters(['linkShare', 'userInfo']),
    getPathUrl() {
      return window.location.origin
    },
    getPointManual() {
      if (this.trip.pointManual) {
        const pointManual = JSON.parse(this.trip.pointManual)
        if (pointManual[0].name && !pointManual[pointManual.length - 1].name) {
          return pointManual[0].name
        } else if (pointManual[pointManual.length - 1].name && !pointManual[0].name) {
          return pointManual[pointManual.length - 1].name
        } else if (pointManual[0].name && pointManual[pointManual.length - 1].name) {
          return pointManual[0].name + ' - ' + pointManual[pointManual.length - 1].name
        } else {
          return ''
        }
      } else {
        return null
      }
    }
  },
  watch: {
    'value': function(val) {
      if (val) {
        this.$store.dispatch('component/resetLink')
      }
    },
    'trip': function(val) {
      // if (!this.value) {
      let route = null
      if (this.trip.route) {
        route = this.trip.route.routeName
      } else if (this.getPointManual) {
        route = this.getPointManual
      }
      this.dataForm.description = route + ', ' + this.$moment.utc(this.trip.runTime).format('DD/MM/YYYY HH:mm')
      // }
    }
  },
  mounted() {
    if (this.trip.route) {
      this.dataForm.description = this.trip.route.routeName + ', ' + this.$moment.utc(this.trip.runTime).format('DD/MM/YYYY HH:mm')
    } else if (this.getPointManual) {
      this.dataForm.description = this.getPointManual + ', ' + this.$moment.utc(this.trip.runTime).format('DD/MM/YYYY HH:mm')
    }
  },
  methods: {
    handleGetLink() {
      this.loadingGetLink = true
      let imageUrl = null
      if (this.trip.route && this.trip.route.images.length > 0) {
        imageUrl = this.trip.route.images[0]
      } else if (!this.trip.route && this.userInfo) {
        imageUrl = this.userInfo.avatar
      } else {
        imageUrl = 'https://kbus.vn/static/img/logo-kbus.db912338.png'
      }
      setTimeout(() => {
        this.$store.dispatch('component/generateLink', {
          title: this.dataForm.title,
          description: this.dataForm.description,
          imageUrl: imageUrl,
          referralUser: this.userInfo && this.userInfo.userName ? this.userInfo.userName : '',
          tripId: this.trip.id
        }).then(resp => {
          this.loadingGetLink = false
        }).catch(err => {
          this.loadingGetLink = false
          console.log(err)
          this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
        })
      }, 500)
    },
    shareTrip(platform) {
      switch (platform) {
        case 'url':
          copyToClipboard(this.linkShare.shortLink)
          break
        case 'fb':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.linkShare.shortLink}`, '_blank')
      }
    },
    handleClose() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss">
$deep-sea: #2D225E;
$gray-40: #ECEDF1;
$bg: #ffffff;
$light_gray: #B0B5C1;
$cursor: #383f47;
$main: #ED196B;

.el-dialog__wrapper{
  .share{
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    font-family: 'SFProText';

    .list-icon{
      display: flex;
      gap: 16px;

      .el-button{
        border: 1px solid $gray-40;
        padding: 12px;
        border-radius: 8px;
        background: transparent;
        text-decoration: none;

        img{
          width: 100%;
          max-width: 24px;
          height: auto;
        }

        span{
          margin-left: 4px;
          font-size: 14px;
          line-height: 22px;
          font-weight: 500;
          color: $deep-sea;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray: #889aa4;
$gray: #383F47;
$light_gray: #B0B5C1;
$main: #ED196B;

.form-share-link{
  .title{
    margin-bottom: 40px;
  }

  .form-field{
    margin-top: 31px;
    position: relative;

    .form-input{
      background: #FFFFFF;
      border: 2px solid #B0B5C1;
      border-radius: 8px;
      width: 100%;
      height: 56px;
      padding: 0 24px;
      outline: none;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #383F47;

      &:focus{
        border-color: #ED196B;
        & + .desc{
          color: #ED196B;
        }
      }
    }

    .desc{
      font-family: "Roboto", sans-serif;
      position: absolute;
      top: -11px;
      left: 15px;
      user-select: none;
      pointer-events: none;
      padding: 0 10px;
      display: inline-block;
      background: #FFFFFF;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
    }
  }

  .btn-wrapper{
    width: fit-content;
    margin: 0 auto;

    .btn-signup{
        margin-top: 1rem;
        padding: 16px 24px;
        background: #ED196B;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: 28px;
        border: none;

        &:hover{
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
        }

        span{
            color: #FFFFFF;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            margin-right: 0.5rem;
        }
    }
  }
}
</style>
