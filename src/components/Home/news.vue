<template>
  <div v-if="getCommunityNews.length > 0" class="list-news-wrapper">
    <div class="container">
      <h2 class="title">{{ $t('news.title') }}</h2>
      <div v-loading="loading" element-loading-spinner="el-icon-kbus-loading" class="news-content">
        <hooper :settings="hooperSettings">
          <template v-for="(news, n) in getCommunityNews">
            <slide :key="n">
              <div class="item" @click="viewNews(news)">
                <img
                  :src="news.thumbnail"
                  alt="news thumbnail"
                >
                <label
                  class="title-news"
                >{{ news.title }}</label>
                <!-- <label class="content-news" v-html="news.content" /> -->
                <!-- <label :id="`codex-editor-news-${n + 1}`" class="content-news" /> -->
                <span class="date-created">{{ $moment(news.createdAt).format('DD/MM/YYYY') }}</span>
              </div>
            </slide>
          </template>
          <hooper-navigation slot="hooper-addons" />
          <hooper-pagination slot="hooper-addons" />
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
import { mapGetters } from 'vuex'
import { NEWS_TYPE } from '@/utils/enum'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import ImageTool from '@editorjs/image'

export default {
  components: { Hooper, Slide, HooperNavigation, HooperPagination },
  data() {
    return {
      loading: false,
      getCommunityNews: [],
      hooperSettings: {
        infiniteScroll: false,
        trimWhiteSpace: false,
        wheelControl: false,
        breakpoints: {
          1200: {
            itemsToShow: 3
          },
          768: {
            itemsToShow: 2
          },
          0: {
            itemsToShow: 1
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['listNews'])
  },
  async mounted() {
    const data = await this.getListNews()
    // console.log(data)
    data.forEach((element, e) => {
      // if (element.id > 7) {
      // console.log(element, element.content)
      // const content = JSON.parse(element.content)
      // this.myEditor(content, e)
      // }
    })
  },
  methods: {
    getListNews() {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('news/getListNews').then(response => {
          // console.log(response)
          const data = response.filter((item) => item.type === NEWS_TYPE.COMMUNITY)
          this.getCommunityNews = data
          // const content = JSON.parse(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    myEditor: function(content, index) {
      window.editor = new EditorJS({
        holder: `codex-editor-news-${index + 1}`,
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
    },
    viewNews(news) {
      this.$router.push({ path: `${this.$i18n.locale}/news/article/${news.slugs[0]}` })
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$gray-100: #383F47;
$gray-70: #9399A9;

.list-news-wrapper{
  margin-top: 80px;

  .hooper{
    height: auto;
  }

  .title{
    margin-bottom: 40px;
  }

  .news-content{
    line-height: 24px;
    .item{
      margin: 0 0.5rem;

      label{
        display: block;

        &:last-child{
            margin-bottom: 0;
        }
      }

      img{
        width: 100%;
        max-width: 352px;
        height: 196px;
        cursor: pointer;
      }

      .title-news{
        max-width: fit-content;
        padding-top: 8px;
        font-size: 18px;
        line-height: 1.5em;
        color: $main;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 3.5em;
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .content-news{
        margin-top: 8px;
        font-size: 14px;
        line-height: 1.5em;
        color: $gray-100;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-height: calc(1.5em * 3);

        p, h1, h2, h3, h4, h5, h6{
          font-size: 14px;
          font-weight: 200;
        }
        .cdx-block{
          padding: unset;
        }
        .ce-paragraph{
          line-height: 1.5em;
        }
      }

      .date-created{
        margin-top: 8px;
        font-size: 12px;
        line-height: 22px;
        color: $gray-70;
      }
    }
  }
}
</style>
