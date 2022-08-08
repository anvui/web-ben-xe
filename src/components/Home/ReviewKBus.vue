<template>
  <div v-if="getBlogs.length > 0" class="blog-review">
    <div class="container">
      <h2 class="title">{{ $t('review.title') }}</h2>
      <div class="blog-item">
        <hooper :settings="hooperSettings">
          <template v-for="(blog, b) in getBlogs">
            <slide :key="b">
              <div class="blog-item-wrapper" @click="$router.push({ path: `${$i18n.locale}/news/article/${blog.slugs[0]}` })">
                <div>
                  <img :src="images[b]" alt="blog image" width="1024" height="683">
                </div>
                <div class="title-blog">{{ blog.title }}</div>
                <!-- <div class="content-blog" v-html="blog.content" /> -->
                <!-- <div :id="`codex-editor-blog-${b + 1}`" class="content-blog" /> -->
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
      },
      loading: false,
      getBlogs: [],
      images: [
        'https://apikbus.anvui.vn/image/get/0081046f-86f8-4f65-9c96-daf6f627d53c',
        'https://apikbus.anvui.vn/image/get/275e85a2-e1a2-4412-aa7e-c5589b2b0fb1',
        'https://apikbus.anvui.vn/image/get/5fefbf3d-1850-4e6d-9971-f3824d9c9fef',
        'https://apikbus.anvui.vn/image/get/739a339e-4442-4f80-bf37-11c3822ce282',
        'https://apikbus.anvui.vn/image/get/774c3468-8bea-4e37-a785-5330f07093ba'
      ]
    }
  },
  computed: {
    ...mapGetters(['listNews'])
  },
  async mounted() {
    const data = await this.getListBlogs()
    // console.log(data)
    data.forEach((element, e) => {
      // if (element.id > 7) {
      // const content = JSON.parse(element.content)
      // console.log(content)
      // this.myEditor(content, e + 1)
      // }
    })
  },
  methods: {
    getListBlogs() {
      // this.loading = true
      // this.$store.dispatch('news/getListNews').then(resp => {
      //   this.loading = false
      //   this.getBlogs = this.listNews.filter((item) => item.type === NEWS_TYPE.BLOG)
      // }).catch(err => {
      //   this.loading = false
      //   console.log(err)
      //   this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
      // })
      return new Promise((resolve, reject) => {
        this.$store.dispatch('news/getListNews').then(response => {
          // console.log(response)
          const data = response.filter((item) => item.type === NEWS_TYPE.BLOG)
          this.getBlogs = data
          // const content = JSON.parse(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    myEditor: function(content, index) {
      // console.log(content, index)
      window.editor = new EditorJS({
        holder: `codex-editor-blog-${index}`,
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
$gray-100: #383F47;
$gray-80: #646D84;

.blog-review{
  background: transparent;
  padding-top: 80px;

  .hooper{
    height: auto;
  }

  .title{
    margin-bottom: 40px;
  }

  .blog-item{
    .blog-item-wrapper{
      margin: 0 8px;
      cursor: pointer;
      line-height: 24px;

      img{
        width: 100%;
        max-height: 196px;
      }

      .title-blog{
        margin-top: 16px;
        font-size: 18px;
        line-height: 1.5em;
        color: $gray-100;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: calc(1.5em * 2);
      }

      .content-blog{
        margin-top: 8px;
        font-size: 14px;
        line-height: 1.5em;
        color: $gray-80;
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
          padding: 0;
        }
        .ce-paragraph{
          line-height: 1.5em;
        }
        .ce-header{
          padding: 0;
          line-height: 1.5em;
        }
        .cdx-list__item{
          padding: 0 0 0 3px;
        }
      }
    }
  }
}
</style>
