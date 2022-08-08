<template>
  <div class="container">
    <div class="complaints-policy">
      <h3 class="title">Chính sách khiếu nại</h3>
      <div class="complaints-policy-wrapper">
        <div class="contents-policy">
          <div id="policy">
            <h4 class="title">Chính sách và quy trình khiếu nại</h4>
            <div class="content">
              <span>Khi có bất kỳ khiếu nại nào xảy ra trong quá trình sử dụng KBus, quý khách hãy nhanh chóng thông báo cho KBus để được hỗ trợ kịp thời. KBus cam kết luôn hỗ trợ khách hàng giải quyết khiếu nại trong thời gian nhanh nhất có thể. Mọi khiếu nại, tranh chấp phát sinh được khuyến khích giải quyết thông qua đàm phán, thương lượng.</span>
            </div>
          </div>
          <div id="process">
            <h4 class="title">Quy trình khiếu nại</h4>
            <div class="content">
              <div class="row no-gutters">
                <div class="col-auto step">
                  <el-button class="btn-step">Bước 1</el-button>
                </div>
                <div class="col-md step-by-step-content">
                  <span>
                    Gọi điện tới số hotline 1900 1911<br>
                    Gửi email tới địa chỉ hotro@kbus.vn<br>
                    KBus khuyến khích khách hàng liên hệ khiếu nại ngay khi phát hiện ra sự cố và không quá 24 giờ sau khi hoàn thành chuyến đi.
                  </span>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-auto step">
                  <el-button class="btn-step">Bước 2</el-button>
                </div>
                <div class="col-md step-by-step-content">
                  <span>
                    Bộ phận CSKH tiếp nhận khiếu nại, liên hệ làm rõ yêu cầu khách hàng trong thời gian nhanh nhất có thể. Tuỳ theo mức độ và tính chất của khiếu nại, KBus sẽ đưa ra cách giải quyết cụ thể. Thời gian giải quyết khiếu nại tối đa là 24 giờ làm việc kể từ khi tiếp nhận khiếu nại. Trường hợp cần thêm thời gian xử lý, KBus sẽ liên hệ trực tiếp với khách hàng để thông báo.
                  </span>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-auto step">
                  <el-button class="btn-step">Bước 3</el-button>
                </div>
                <div class="col-md step-by-step-content">
                  <span>
                    KBus có thể yêu cầu khách hàng gửi thêm thông tin, hình ảnh, bằng chứng liên quan đến giao dịch để làm rõ sự việc và có hướng giải quyết hợp lý.
                  </span>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-auto step">
                  <el-button class="btn-step">Bước 4</el-button>
                </div>
                <div class="col-md step-by-step-content">
                  <span>
                    Trong trường hợp KBus đã nỗ lực giải quyết khiếu nại nhưng sự việc nằm ngoài khả năng và thẩm quyền của KBus, KBus có thể yêu cầu khách hàng đưa sự việc ra cơ quan nhà nước có thẩm quyền để giải quyết.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="description">
            <span>
              KBus luôn tôn trọng và nghiêm túc thực hiện các quy định của pháp luật về bảo vệ quyền lợi của Khách hàng. Mọi hành vi không trung thực của đối tác vận tải đều bị lên án và chịu trách nhiệm trước các cơ quan nhà nước có thẩm quyền.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
$white: #FFFFFF;
$padding: 24px;
$main: #ED196B;
$gray-100: #383F47;

.complaints-policy{
  margin-top: 1.5rem;

  .title{
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.41px;
    color: black;
  }

  .complaints-policy-wrapper{
    margin-top: 1rem;
    padding: $padding;
    background-color: $white;
    border-radius: 8px;

    .title{
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      color: $gray-100;
    }

    .content{
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: $gray-100;
    }

    #policy{
      > .title{
        margin-bottom: 1.5rem;
      }
    }

    #process{
      margin-top: 1.5rem;
      >.title{
        margin-bottom: 1rem;
      }

      .content{
        > .row{
          margin-bottom: 40px;

          .btn-step{
            padding: 8px;
            border-radius: 8px;
            background-color: $main;
            color: $white;
            border: none;
            cursor: default;
          }
          .step-by-step-content{
            padding-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
