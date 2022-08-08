<template>
  <div class="container mt-4">
    <div class="booked-history-wrapper">
      <div class="row no-gutters" style="justify-content: space-between">
        <div class="col-auto">
          <h4 class="title">{{ $t('history.title') }}</h4>
        </div>
        <!-- <div class="col ticket-status-label">
          <div class="col description-of-ticket">
            <div class="ticket-canceled"></div>
            <span>Đã hủy</span>
          </div>
          <div class="col description-of-ticket">
            <div class="ticket-canceled"></div>
            <span>Đã hủy</span>
          </div>
          <div class="col description-of-ticket">
            <div class="ticket-canceled"></div>
            <span>Đã hủy</span>
          </div>
          <div class="col description-of-ticket">
            <div class="ticket-canceled"></div>
            <span>Đã hủy</span>
          </div>
          <div class="col description-of-ticket">
            <div class="ticket-canceled"></div>
            <span>Đã hủy</span>
          </div>
        </div> -->
        <div class="col text-right">
          <el-button type="primary" plain size="small" @click="getTickets()">{{ $t('history.btnRefresh') }}</el-button>
        </div>
      </div>
      <el-tabs v-model="tabActive" type="border-card" style="margin-top: 1rem" @tab-click="handleClickTab">
        <template v-for="(item, i) in listTabs">
          <el-tab-pane :key="i" :label="item">
            <div v-loading="loading" element-loading-spinner="el-icon-kbus-loading" class="list-ticket-wrapper">
              <div class="row no-gutters">
                <div id="left" class="col-md-6">
                  <template v-for="(ticket, t) in uniqueTicketsByTicketCode">
                    <list-booked-ticket
                      v-if="i.toString() === tabActive"
                      ref="ListTicketsBooked"
                      :key="t"
                      :ticket="ticket"
                      :select-ticket="selectedTicket"
                      @getTicketSelect="getTicketSelect"
                    />
                  </template>
                </div>
                <div id="right" v-loading="loadingTicket" element-loading-spinner="el-icon-kbus-loading" class="col-md-6" :style="{ 'display': screenSize < 768 ? 'none' : 'block' }">
                  <div>
                    <template v-for="(ticket, t) in uniqueTicketsByTicketCode">
                      <ticket-detail
                        v-if="i.toString() === tabActive && selectedTicket === ticket.ticketCode"
                        :key="t"
                        :selected-ticket="selectedTicket"
                      />
                    </template>
                  </div>
                  <div v-if="!loading && !selectedTicket && uniqueTicketsByTicketCode.length > 0" class="no-data text-center">
                    <img src="https://img.icons8.com/material-two-tone/96/000000/no-data-availible.png">
                    <div>{{ $t('history.noData') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <el-dialog
      :visible.sync="dialogActive"
      width="98%"
    >
      <div id="right" v-loading="loadingTicket" class="col-md-6">
        <div>
          <template v-for="(ticket, t) in uniqueTicketsByTicketCode">
            <ticket-detail
              v-if="selectedTicket === ticket.ticketCode"
              :key="t"
              :selected-ticket="selectedTicket"
            />
          </template>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ListBookedTicket from '@/components/History/ListBookedTicket.vue'
import TicketDetail from '@/components/History/TicketDetail.vue'
import { mapGetters } from 'vuex'
import { TICKET_STATUS } from '@/utils/enum'

export default {
  components: {
    ListBookedTicket,
    TicketDetail
  },
  data() {
    return {
      loading: false,
      // listTickets: [],
      // mapUniqueTicketsByTicketCode: [],
      selectedTicket: '',
      loadingTicket: false,
      listTicketsByTicketCode: [],
      dialogActive: false,
      screenSize: window.innerWidth || 0,
      listTabs: this.$t('history.tabs'),
      tabActive: '0'
    }
  },
  computed: {
    ...mapGetters([
      'listTicketsBooked',
      'uniqueTicketsByTicketCode'
    ])
  },
  watch: {
    'screenSize': function(val) {
      if (val > 767) {
        this.dialogActive = false
      } else {
        if (this.selectedTicket) {
          this.dialogActive = true
        }
      }
    },
    'selectedTicket': function(val) {
      if (this.screenSize < 768 && val) {
        this.dialogActive = true
      }
    },
    'dialogActive': function(val) {
      if (!val) {
        this.selectedTicket = ''
      }
    },
    'tabActive': function(val) {
      this.getTickets()
    }
  },
  created() {
    window.addEventListener('resize', this.handleDialogWhenScreenResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleDialogWhenScreenResize)
  },
  mounted() {
    this.getTickets()
  },
  methods: {
    getTickets() {
      let ticketStatuses = []
      switch (this.tabActive) {
        case '0':
          ticketStatuses = [TICKET_STATUS.NEW, TICKET_STATUS.BOOKED]
          break
        case '1':
          ticketStatuses = [TICKET_STATUS.BOUGHT, TICKET_STATUS.ON_THE_TRIP]
          break
        case '2':
          ticketStatuses = [TICKET_STATUS.COMPLETED]
          break
        case '3':
          ticketStatuses = [TICKET_STATUS.CANCELED]
          break
        default:
          ticketStatuses = [TICKET_STATUS.NEW, TICKET_STATUS.BOOKED]
          break
      }
      this.loading = true
      this.$store.dispatch('ticket/ticketsBooked', { ticketCode: null, ticketStatuses: ticketStatuses }).then(resp => {
        // this.listTickets = resp
        // const data = resp.filter((item, index, self) => (
        //   index === self.findIndex(map => map.ticketCode === item.ticketCode)
        // ))
        // this.mapUniqueTicketsByTicketCode = data
        this.loading = false
      }).catch(err => {
        this.loading = false
        console.log(err)
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
      })
    },
    getTicketSelect(value) {
      this.selectedTicket = value
    },
    handleDialogWhenScreenResize(event) {
      this.screenSize = event.target.screen.width
    },
    handleClickTab(tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
$white: #ffffff;
$main: #ED196B;
$pink: #FBD1E1;
$yellow: #F39B13;
$green: #50C694;
$deep-sea: #2D225E;
$gray-40: #ECEDF1;
$gray-80: #646D84;
$gray-70: #9399A9;
$red-100: #FF4868;
$blue-100: #0091FE;

.booked-history-wrapper{
  .list-ticket-wrapper{
    min-height: 30vh;
    padding: 16px 0;
    background: $white;
    border-radius: 4px;
    font-family: 'SFProText', sans-serif;
    letter-spacing: -0.41px;

    #left{
      border-right: 1px solid $gray-40;
      max-height: 70vh;
      overflow-y: auto;
      padding: 0 16px;
    }

    #right{
      position: relative;
      padding: 0 16px;

      .no-data{
        opacity: 0.4;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  // .ticket-status-label{
  //   margin-left: 16px;
  //   display: flex;
  //   gap: 8px;
  //   .description-of-ticket{
  //     display: flex;
  //     gap: 8px;
  //     align-items: center;
  //     .ticket-canceled{
  //       width: 12px;
  //       height: 12px;
  //       border: 1px solid $red-100;
  //       // border-radius: 8px;
  //     }
  //     .ticket-unpaid{
  //       border-color: $yellow;
  //     }
  //     .ticket-paid{
  //       border-color: $main;
  //     }
  //     .ticket-departed{
  //       border-color: $blue-100;
  //     }
  //     .ticket-completed{
  //       border-color: $green;
  //     }
  //   }
  // }
}
</style>
