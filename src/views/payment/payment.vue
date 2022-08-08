<template>
  <div class="payment-page-wrapper w-100">
    <step-book-ticket />
    <div class="payment-wrapper">
      <div class="container">
        <div class="body">
          <booked-tickets />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StepBookTicket from '@/components/StepBookTicket/index.vue'
import BookedTickets from '@/components/Payment/BookedTicketsByTicketCode.vue'

export default {
  components: {
    StepBookTicket,
    BookedTickets
  },

  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
$main: #ED196B;
$white: #ffffff;
$dark-gray: #383F47;

.payment-wrapper{

  label{
    margin-bottom: 0;
    display: block;
    width: fit-content;
  }

  .body {
    margin-top: 1rem;
    background-color: $white;
    font-family: "SFProText";
    font-style: normal;
    letter-spacing: -0.41px;

    .title {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: $dark-gray;
    }
  }
}
</style>
