<template>
  <div class="container">
    <div class="cancellation-policy-container">
      <h3 class="title">Chính sách huỷ/hoãn</h3>
      <div class="cancellation-policy-wrapper">
        <div id="cancellation-policy">
          <h4 class="title">CHÍNH SÁCH HUỶ/HOÃN BOOKING</h4>
          <div class="content-policy">
            <ul>
              <li>Trong trường hợp bạn đã đặt booking và thanh toán thành công nhưng không tham gia chuyến xe được, bạn vẫn có thể huỷ/hoãn booking. Bạn sẽ được hoàn tiền 100% nếu thông báo thành công việc huỷ/hoãn booking cho Kbus ít nhất 48 giờ trước giờ khởi hành của chuyến xe đã đặt.</li>
              <li>
                Hủy/hoãn chuyến thành công khi nào? được xác định khi khách hàng nhận được thông báo huỷ chuyến gửi qua email/Zalo của KBus. Thông báo huỷ chuyến sẽ được gửi tới zalo/email khách hàng trong vòng 30 phút sau khi nhận được yêu cầu.
              </li>
              <li>
                Hình thức thông báo huỷ/hoãn booking
              </li>
              <li>
                Huỷ/hoãn booking online trên app Kbus hoặc trang web https://kbus.vn/
              </li>
              <li>
                Huỷ/hoãn booking trực tiếp bằng cách liên hệ với  hotline ….
              </li>
            </ul>
          </div>
        </div>
        <div id="refund">
          <h4 class="title">CHÍNH SÁCH HOÀN TIỀN</h4>
          <div class="content-policy">
            <h6 class="title">1. Hoàn tiền khi hủy/hoãn booking</h6>
            <ul>
              <li>
                Hoàn tiền khi huỷ/hoãn booking
                Tiền hoàn sẽ được chuyển vào tài khoản KBus của khách hàng trong vòng…ngày. Khách hàng tự chọn phương thức nhận tiền thông qua tài khoản Payme (miễn phí giao dịch)  hoặc qua tài khoản ngân hàng (phí 3.300 VNĐ/giao dịch). Tiền sẽ về tài khoản ngân hàng của khách hàng trong vòng 5 - 7 ngày làm việc tuỳ chính sách của từng ngân hàng.
              </li>
              <li>
                Khách hàng tự chi trả phí giao dịch ngân hàng/Ví điện tử phát sinh trong quá trình hoàn tiền.
              </li>
              <li>
                Trong trường hợp khách hàng chưa nhận được khoản tiền hoàn lại vào tài khoản KBus sau …ngày, hoặc tiền nhận được không khớp với tiền đã trả, hãy liên hệ với hotline….. để khiếu nại.
              </li>
            </ul>
            <h6 class="title">2. Chính sách hoàn tiền khi rủ thêm được khách đi chung xe</h6>
            <ul>
              <li>
                Khi chuyến đi đã đủ số lượng hành khách tối thiểu để lăn bánh, nếu khách hàng rủ thêm được người đi chung chuyến xe thì KBus sẽ tính lại trung bình giá trên mỗi hành khách và hoàn lại khoản tiền được giảm giá do số lượng khách tăng lên. Tiền hoàn sẽ được gửi về tài khoản KBus của khách hàng sau khi hoàn thành chuyến đi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
$white: #FFFFFF;
$gray-80: #646D84;
$gray-100: #383F47;
$padding: 24px;
$radius: 8px;

.cancellation-policy-container{
    margin-top: 1.5rem;

    .title{
        font-size: 24px;
        line-height: 29px;
        font-weight: 500;
        letter-spacing: -0.41px;
        color: black;
    }

    .cancellation-policy-wrapper{
        margin-top: 1rem;
        background-color: $white;
        border-radius: $radius;
        padding: $padding;

        .title{
            line-height: 36px;
            font-weight: 400;
            color: $gray-100;
        }

        .content-policy{
            margin-top: 1rem;
            > ul{
                list-style: none;
                padding: 0;
                > li{
                    margin-bottom: 0.5rem;
                    &:last-of-type{
                        margin-bottom: 0;
                    }
                }
            }

            .title{
                font-size: 18px;
                line-height: 24px;
                font-weight: 700;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
                &:first-of-type{
                    margin-top: 0;
                }
            }
        }

        #refund{
            margin-top: 24px;
        }
    }
}
</style>
