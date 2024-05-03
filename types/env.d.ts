/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-04-24 11:10:24
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-04-27 16:53:49
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// 环境变量
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_API_ROOT: string;
  VITE_DOMAIN_HOST: string;
  VITE_BAIDU_MAP_AK: string;
  VITE_API_HOST: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'vuejs-paginate-next' {

}
