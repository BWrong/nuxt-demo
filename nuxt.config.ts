import { resolve } from 'node:path';
const appTitle = import.meta.env.VITE_APP_TITLE
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 环境变量
  $development: {},
  $production: {},
  // 配置，可以使用环境变量覆盖，可使用useRuntimeConfig在应用中获取
  runtimeConfig: {
    // 仅在服务端可用
    apiSecret: '123',
    // 可在客户端使用
    public: {
      apiBase: '/api'
    }
  },
  imports: {
    // 自动导入
    autoImport: true
  },
  // 自动注册组件
  // components: {
  //   dirs: []
  // },
  // 控制路由渲染模式
  routeRules: {},
  modules: [
    // https://nuxt.com/modules/eslint
    // ['@nuxtjs/eslint-module', {}],
    '@unocss/nuxt',
    '@pinia/nuxt',
    // TODO
    // ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  // https://nuxt.com/docs/guide/directory-structure/plugins
  plugins: [
    // '@/plugins/router', // 路由守卫
    // '~/plugins/element-ui',
    // {
    //   src: '~/plugins/request'
    //   // mode: 'client'
    // },
    // {
    //   src: '@/plugins/vue-awesome-swiper',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/city-picker',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/baidu-map',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/m-message',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/vuejs-paginate',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/vue-particles',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/jquery',
    //   mode: 'client'
    // },
    // {
    //   src: '@/plugins/filters'
    // },
    // {
    //   src: "~/plugins/lazy-load",
    //   ssr: false
    // }，
    // '~/plugins/err-handler'
  ],
  router: {
    // TODO
    // linkActiveClass: 'on',
    // linkExactActiveClass: 'exact-on',
  },
  app: {
    // 页面过渡动画
    pageTransition: { name: 'page', mode: 'out-in' },
    // 布局过渡动画
    layoutTransition: {
      name: 'layout',
      // name: 'slide',
      mode: 'out-in' // default
    },
    head: {
      title: appTitle,
      charset: 'utf-8',
      // viewport: 'width=device-width, initial-scale=1.0,  minimum-scale=1.0, viewport-fit=cover,user-scalable=no',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
        { name: 'renderer', content: 'webkit' },
        // { hid: 'description', name: 'description', content: '' },
        { name: 'referrer', content: 'no-referrer' }, // 解决外链图片不显示问题
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  // 全局样式
  css: [
    // 'animate.css',
    '~/assets/styles/common.less'
  ],
  postcss: {
    plugins: {
      // 'postcss-nested': {},
      // "postcss-custom-media": {}
    }
  },
  vue: {
    propsDestructure: true // 开启props语法糖
  },
  vite: {
    css: {
      // transformer:'lightningcss',
      devSourcemap: true, // 开启css sourcemap
      // css预处理器配置
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            // ...themeToken,
            hack: `true;@import "${resolve(__dirname, './assets/styles/_variable.less')}"`
          }
        }
      }
    }
  }
});
