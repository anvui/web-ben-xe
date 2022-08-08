<template>
  <div class="container">
    <div class="pitch-deck-container">
      <template v-for="(item, i) in lang === 'vi' ? pitchDeckVi : pitchDeckEn">
        <div :key="i" class="img-item">
          <el-image :src="item">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline" />
            </div>
          </el-image>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pitchDeckVi: [
        'https://apikbus.anvui.vn/image/get/1ec43f97-fc94-44ae-824e-5209db6a39cd', // 1
        'https://apikbus.anvui.vn/image/get/8c74b2d9-d131-4d38-82d3-b809f223f4bf', // 2
        'https://apikbus.anvui.vn/image/get/a1a8aa8d-07e8-4851-8c20-01e1b8f908a7', // 3
        'https://apikbus.anvui.vn/image/get/12440d2c-1aa0-4814-9b9a-c85027bf732d', // 4
        'https://apikbus.anvui.vn/image/get/613999a0-bdf5-40aa-9415-69aeeee3a57c', // 5
        'https://apikbus.anvui.vn/image/get/054a70b8-8ef4-487d-94f4-3c2a71bebdc8', // 6
        'https://apikbus.anvui.vn/image/get/33e2ce98-3574-4ab8-8172-2937f3ba2f7c', // 7
        'https://apikbus.anvui.vn/image/get/19589ab5-f0c6-467b-a5fb-db1b71ad435a', // 8
        'https://apikbus.anvui.vn/image/get/e9d90bb0-702c-4c9f-a9ea-c06846bf2081', // 9
        'https://apikbus.anvui.vn/image/get/5350d833-1f42-4b10-b56f-c8af8c7c1749', // 10
        'https://apikbus.anvui.vn/image/get/abee935e-a824-4abf-aa2e-6463c5cd7887', // 11
        'https://apikbus.anvui.vn/image/get/6dd76819-42e5-4c04-b1dc-eb82098a3841', // 12
        'https://apikbus.anvui.vn/image/get/d69052b6-515c-4316-afe7-dcfeaaf149a3', // 13
        'https://apikbus.anvui.vn/image/get/3cf42af4-a60d-4a38-afed-e491d9343d9a', // 14
        'https://apikbus.anvui.vn/image/get/e627b57e-9627-47b9-9370-a42180a62e59', // 15
        'https://apikbus.anvui.vn/image/get/5d5f3736-6a6f-4268-96c3-93b35aff1b2a', // 16
        'https://apikbus.anvui.vn/image/get/af0a8d34-3864-4e33-b71d-211efe476d99', // 17
        'https://apikbus.anvui.vn/image/get/e0455a40-bf14-4621-9b67-3543e9676260' // 18
      ],
      pitchDeckEn: [
        'https://apikbus.anvui.vn/image/get/500d5798-e256-405e-8c23-2279f35e06a7', // 1
        'https://apikbus.anvui.vn/image/get/d878ef86-4531-4082-a978-443a4c680671', // 2
        'https://apikbus.anvui.vn/image/get/4555f799-f769-4b5f-9f67-d209e38af4db', // 3
        'https://apikbus.anvui.vn/image/get/dba78310-fb0b-4687-99f0-5d4ce5182d6f', // 4
        'https://apikbus.anvui.vn/image/get/65300b0b-d32c-485d-b3b6-2873b87b0d85', // 5
        'https://apikbus.anvui.vn/image/get/f16effe5-56bd-4bd2-9a65-68ced72b3fe8', // 6
        'https://apikbus.anvui.vn/image/get/1269edd2-ef0a-4886-bb45-54ca5b423f33', // 7
        'https://apikbus.anvui.vn/image/get/7556fa0e-aee1-4a18-a0f3-f4a7c4d06834', // 8
        'https://apikbus.anvui.vn/image/get/731e534a-4a36-407a-ba12-d1c387006599', // 9
        'https://apikbus.anvui.vn/image/get/ffefe850-a072-45a2-9f99-e3e078c1b9a9', // 10
        'https://apikbus.anvui.vn/image/get/64c77dd8-6bb5-497c-a858-ec68fb7e8098', // 11
        'https://apikbus.anvui.vn/image/get/243d8c11-daba-4ad3-a5c5-410e481e0cac', // 12
        'https://apikbus.anvui.vn/image/get/bf704f9d-5919-47b0-a1b3-635e84bf1bc8', // 13
        'https://apikbus.anvui.vn/image/get/922ef3b5-1afd-4933-88a8-00e4f3faa936', // 14
        'https://apikbus.anvui.vn/image/get/0f739225-50c2-4be7-a4bf-52b1d0db1f63', // 15
        'https://apikbus.anvui.vn/image/get/cd00fbc9-9283-40e4-9369-b92291aaf1ac', // 16
        'https://apikbus.anvui.vn/image/get/35a70922-e983-4959-964e-36adf27ec800' // 17
      ],
      lang: this.$i18n.locale
    }
  }
}
</script>
<style lang="scss">
.pitch-deck-container{
    margin-top: 48px;
    .img-item{
        margin-bottom: 8px;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
        &:last-of-type{
            margin-bottom: 0;
        }
        img{
            border-radius: 8px;
        }
    }
}
</style>
