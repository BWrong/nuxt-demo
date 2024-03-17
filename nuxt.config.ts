import { resolve } from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $development: {},
  $production: {},
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  // imports: {
  //   autoImport: false
  // },
  // components: {
  //   dirs: []
  // },
  modules: [
    // https://nuxt.com/modules/eslint
    ['@nuxtjs/eslint-module', {}],
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [

      ]
    }
  },
  // 全局样式
  css: ['~/assets/styles/common.less'],
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
})
