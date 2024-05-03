/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-03-17 22:07:21
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-04-24 12:44:20
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // handle error, e.g. report to a service
    try {
      // const res = error.data;
      if (res) {
        // 由于nuxt的错误页面只能识别http的状态码，因此statusCode统一传500，表示服务器异常。
        // ctx.error({ statusCode: 500, message: res.resultInfo });
      } else {
        // ctx.error({ statusCode: 500, message: '服务器开小差了~' });
      }
    } catch {
      // ctx.error({ statusCode: 500, message: '服务器开小差了~' });
    }
  };

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // handle error, e.g. report to a service
  });
});
