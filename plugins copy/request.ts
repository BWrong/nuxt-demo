/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-11-13 09:51:34
 * @LastEditors: Bwrong
 * @LastEditTime: 2021-06-21 00:45:49
 */

import Qs from 'qs';
import api from '@/api';

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
export default function ({ $axios, redirect, $cookies }, inject) {
  $axios.defaults.timeout = 10000;
  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // 请求拦截器
  $axios.onRequest((config) => {
    if (config.is_auth) {
      if (config.params) {
        config.params = { ...config.params, token: $cookies.get('front-token') };
      }
      if (config.data) {
        config.data = { ...config.data, token: $cookies.get('front-token') };
      }
    }
    return config;
  });
  $axios.onRequestError((err) => Promise.reject(err));
  // 响应拦截器
  $axios.onResponse(({ config, data }) => {
    if (data.code === 200 || data.code === 0) {
      return Promise.resolve(data.data);
    } else {
      if (data.code === 302) {
        console.error('登录失效，请重新登录');
        redirect('/vip/login');
        return Promise.reject(data.msg);
      }
      console.warn('responseMsg:', data.msg);
      return Promise.reject(data.msg);
    }
  });
  $axios.onResponseError((error) => {
    if (error.response) {
      const tips = error.response.data.msg || HTTP_CODE[error.response.status];
      console.log(tips);
      return Promise.reject(error);
    } else {
      return Promise.reject(new Error('请求超时, 请刷新重试'));
    }
  });
  // 错误
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });
  const get = (url: string, params = {}, config = {}) => $axios({ method: 'get', url, params, ...config });
  // 如果后台支持json格式这不需要进行Qs.stringify
  const post = (url: string, data = {}, config = {}) => $axios({ method: 'post', url, data: Qs.stringify({ ...data }, { allowDots: true }), ...config });
  const put = (url: string, data = {}, config = {}) => $axios({ method: 'put', url, data, ...config });
  const patch = (url, data = {}, config = {}) => $axios({ method: 'put', url, data, ...config });
  const del = (url: string, data = {}, config = {}) => $axios({ method: 'delete', url, data, ...config });
  // 注入api
  inject('api', api({ get, post, put, patch, del, $axios }));
}
