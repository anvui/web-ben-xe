<template>
  <div>
    <div class="container">
      <div v-loading="loading" class="news-wrapper">
        <!-- <h3 class="title">{{ newsBySlug ? newsBySlug.news[0].title : '' }}</h3> -->
        <div class="content">
          <!-- <div v-if="newsBySlug && newsBySlug.news[0].id < 8" v-html="newsBySlug && newsBySlug.news.length > 0 ? newsBySlug.news[0].content : ''" /> -->
          <!-- <div id="codex-editor"></div> -->
          <div class="ck-content" v-html="newsBySlug && newsBySlug.news.length > 0 ? newsBySlug.news[0].content : ''" />
        </div>
      </div>
    </div>
    <!-- <menu-footer /> -->
  </div>
</template>
<script>
// import MenuFooter from '@/components/Footer/index.vue'
import { mapGetters } from 'vuex'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import ImageTool from '@editorjs/image'

export default {
  components: {
    // MenuFooter
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'newsBySlug'
    ])
  },
  async mounted() {
    await this.viewNews()
    // this.myEditor(content)
  },
  methods: {
    viewNews() {
      // this.loading = true
      // this.$store.dispatch('news/viewNewsBySlug', this.$route.params.slug).then(resp => {
      //   this.loading = false
      // }).catch(err => {
      //   this.loading = false
      //   console.log(err)
      //   this.$message.error(err.message)
      // })
      return new Promise((resolve, reject) => {
        this.$store.dispatch('news/viewNewsBySlug', this.$route.params.slug).then(response => {
          // console.log(response)
          // const data = response.news[0].content
          // const content = JSON.parse(data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    myEditor: function(content) {
      window.editor = new EditorJS({
        holder: 'codex-editor',
        autofocus: true,
        /**
         * This Tool will be used as default
         */
        initialBlock: 'paragraph',
        readOnly: true,
        data: content,
        tools: {
          header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H'
          },
          list: {
            class: List
          },
          paragraph: {
            class: Paragraph,
            config: {
              placeholder: '.'
            }
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: process.env.VUE_APP_BASE_API + 'image/upload', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by Url
              }
            }
          }
        },
        onReady: function() {
          console.log('ready')
        },
        onChange: function() {
          console.log('change')
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/ck.scss';
.news-wrapper{
  margin-block: 3rem;
  font-family: 'SFProText';
  letter-spacing: -0.41px;
  min-height: 50vh;
  max-width: 960px;
  margin-inline: auto;

  p{
    margin-block: 1rem;

    &:last-child{
      margin-bottom: 0;
    }
  }

  .title{
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 600;
  }

  .content{
    div{
      font-size: 18px;
      line-height: 30px;
      font-weight: 200;
      font-family: 'SFProText';

      ul > li{
        font-size: 1em;
      }

      h1, h2, h3, h4, h5, h6{
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        margin-bottom: 8px;
      }

      img{
        width: 100%;
        max-width: 100%;
        height: auto;
        margin-bottom: 16px;
      }
    }

    .ce-block__content{
      max-width: unset;
    }
  }
}
</style>
