/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-11-13 09:51:34
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 22:18:19
 */

import Qs from 'qs';
// HTTP状态码
const HTTP_CODE = {
  400: '请求参数错误',
  401: '未授权, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  409: '请求发生冲突',
  410: '请求的资源已删除',
  413: '请求体过大，服务器无法处理',
  414: '请求url过长',
  415: '不支持的媒体类型',
  429: '请求次数超过限制',
  500: '服务器端内部错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网络错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
};
const API_ROOT = import.meta.env.VITE_API_HOST;
export const request = async <Req>(url: string, options: any) => {
  return await $fetch<Req>(url, {
    // onRequest({ request, options }) {
    //   options.timeout = 10000;
    //   options.baseURL = API_ROOT;
    //   if (options.method === 'POST') {
    //     options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    //   }
    //   // @ts-expect-error 忽略自定义属性类型报错问题
    //   if (options.is_auth) {
    //     const token = useCookie('front-token');
    //     if (options.params) {
    //       options.params = {
    //         ...options.params,
    //         token
    //       };
    //     }
    //     if (options.body) {
    //       options.body = {
    //         ...(options.body as object),
    //         token
    //       };
    //     }
    //   }
    //   console.log('请求参数', options);

    // },
    // onRequestError(error) {
    //   console.log('请求错误');
    //   return Promise.reject(error);
    // },
    // async onResponse({ response }) {
    //   console.log(response);

    //   console.log('响应成功');

    //   const data = await response.json();
    //   if (data.code === 200 || data.code === 0) {
    //     return Promise.resolve(data.data);
    //   } else {
    //     if (data.code === 302) {
    //       console.error('登录失效，请重新登录');
    //       navigateTo('/vip/login');
    //       return Promise.reject(data.msg);
    //     }
    //     console.warn('responseMsg:', data.msg);
    //     return Promise.reject(data.msg);
    //   }
    // },
    // async onResponseError(error) {

    //   console.log('响应失败');
    //   if (error.response) {
    //     const data = await error.response.json();
    //     const tips = data.msg || HTTP_CODE[error.response.status];
    //     console.log(tips);
    //     return Promise.reject(error);
    //   } else {
    //     return Promise.reject(new Error('请求超时, 请刷新重试'));
    //   }
    // },
    // ...options
  });
};

export const get = <Req=any, Res=any>(url: string, params = {}, config = {}) =>
  request<Req>(url, {
    method: 'GET',
    params,
    ...config
  }) as Promise<Res>;
// 如果后台支持json格式这不需要进行Qs.stringify
export const post = <Req=any, Res=any>(url: string, data = {}, config = {}) =>
  request(url, {
    method: 'POST',
    body: Qs.stringify({ ...data }, { allowDots: true }),
    ...config
  }) as Promise<Res>;
export const put = <Req=any, Res=any>(url: string, data = {}, config = {}) =>
  request(url, {
    method: 'PUT',
    body: data,
    ...config
  }) as Promise<Res>;
export const patch = <Req=any, Res=any>(url: string, data = {}, config = {}) =>
  request(url, {
    method: 'PATCH',
    body: data,
    ...config
  }) as Promise<Res>;
export const del = <Req=any, Res=any>(url: string, data = {}, config = {}) =>
  request(url, {
    method: 'DELETE',
    body: data,
    ...config
  }) as Promise<Res>;
