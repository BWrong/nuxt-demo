/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-04-24 10:14:18
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 16:48:21
 */
// https://yue1123.github.io/vue3-baidu-map-gl/
import Vue3BaiduMapGL, { BMap, BZoom } from 'vue3-baidu-map-gl';
// const ak = import.meta.env.VITE_BAIDU_MAP_AK;
export default defineNuxtPlugin((app) => {
  // 完整引入
  // app.vueApp.use(Vue3BaiduMapGL, {
  //   ak
  // });
  // 按需引入
  app.vueApp.component('BMap', BMap);
  app.vueApp.component('BZoom', BZoom);
});
