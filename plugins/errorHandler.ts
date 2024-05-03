/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-03-17 22:07:21
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 22:14:33
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.error(error, instance, info);
  };
});
