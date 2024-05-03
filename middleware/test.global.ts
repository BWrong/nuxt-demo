/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-04-27 18:17:13
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-04-27 18:18:28
 */
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全局中间件');
});
