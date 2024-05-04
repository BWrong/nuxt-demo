import { resolve } from 'node:path';
const { VITE_APP_TITLE, VITE_BAIDU_MAP_AK, VITE_API_ROOT, VITE_API_HOST, VITE_DOMAIN_HOST } = import.meta.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // 环境变量
  // $development: {},
  // $production: {},
  // 配置，可以使用环境变量覆盖，可使用useRuntimeConfig在应用中获取
  runtimeConfig: {
    // 仅在服务端可用
    // apiSecret: '123',
    // 可在服务端和客户端使用
    public: {
      API_HOST: VITE_API_ROOT,
      API_ROOT: VITE_API_HOST,
      DOMAIN_HOST: VITE_DOMAIN_HOST
    }
  },
  imports: {
    // 自动导入
    autoImport: true
  },
  // 自动注册组件
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  // 控制路由渲染模式
  routeRules: {},
  modules: [
    // https://github.com/Joepocalyptic/nuxt-particles
    'nuxt-particles',
    '@nuxt/eslint',
    '@unocss/nuxt', // TODO
    // ['cookie-universal-nuxt', { parseJSON: false }]
    '@pinia/nuxt',
    // https://nuxt.com/modules/swiper
    'nuxt-swiper'
  ],
  swiper: {},
  // https://nuxt.com/docs/guide/directory-structure/plugins
  plugins: [],
  nitro: {
    // 用于客户端代理
    devProxy: {
      [VITE_API_ROOT]: {
        target: VITE_API_HOST, // 这里是接口地址
        changeOrigin: true
      }
    },
    // 该配置用于服务端请求转发
    // routeRules: {
    //   '/api/**': {
    //     proxy: `${VITE_API_HOST}/api/**`
    //   }
    // }
  },
  typescript: {
    // typeCheck: true, // 生成时进行类型检查
    strict: false // 开启严格模式
  },
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
      title: VITE_APP_TITLE,
      charset: 'utf-8',
      // viewport: 'width=device-width, initial-scale=1.0,  minimum-scale=1.0, viewport-fit=cover,user-scalable=no',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' },
        { name: 'renderer', content: 'webkit' },
        // { hid: 'description', name: 'description', content: '' },
        { name: 'referrer', content: 'no-referrer' }, // 解决外链图片不显示问题
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          src: `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${VITE_BAIDU_MAP_AK}`,
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  // 全局样式
  css: ['@unocss/reset/tailwind-compat.css', 'animate.css', '~/assets/styles/common.less'],
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
