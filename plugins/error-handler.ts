/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-03-17 22:07:21
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-03-17 22:07:22
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // handle error, e.g. report to a service
  };

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // handle error, e.g. report to a service
  });
});
