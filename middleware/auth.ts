/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-04-24 10:15:25
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 10:59:55
 */

import { getcookiesInServer } from '@/utils';
const tokenKey = 'front-token';
export default defineNuxtRouteMiddleware((to,from)=> {
  const isClient = import.meta.client;
  const isServer = import.meta.server;
  // const nuxtApp = useNuxtApp()
  let redirectURL = '/vip/login';
  let token, path;
  //在服务端
  if (isServer) {
    const cookies = getcookiesInServer(req);
    path = req.originalUrl;
    token = cookies[tokenKey] || '';
  }
  //在客户端判读是否需要登陆
  if (isClient) {
    token = $cookies.get(tokenKey) || '';
    path = route.path;
  }
  if (path) {
    redirectURL = '/vip/login?ref=' + encodeURIComponent(path);
  }
  console.log(token);
  //需要进行权限判断的页面开头
  if (!token) {
    navigateTo(redirectURL);
  }
})
