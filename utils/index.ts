/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-04-07 10:30:49
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 11:29:46
 */

import dayjs from 'dayjs';
import { SEX } from '@/enums';
/**
 * 获取对象中的字段
 * @param val
 * @param key
 * @returns
 */
export const getExtendFilds = <T extends object>(val: T, key: keyof T) => {
  if (!val) return '';
  return val[key] || '';
};
/**
 * 截取字符串
 * @param src
 * @param length
 * @returns
 */
export const intercept = (src: string, length: number): string => (src.length < length ? src : `${src.slice(0, length)}...`);
/**
 * 字符串分割
 * @param val
 * @param reg
 * @param num
 * @returns
 */
export const split = (val: string, reg: RegExp, num: number) => val.split(reg)[num] || '';

/**
 * 首字母大写
 * @param val
 * @returns
 */
export const upperCase = (val: string) => (val ? val.toUpperCase() : '');
/**
 * 首字母小写
 * @param val
 * @returns
 */
export const lowerCase = (val: string) => (val ? val.toLowerCase() : '');
/**
 * 格式化时间
 * @param {*} value
 * @param {*} type
 */
export function fomartTime(time, type = 'YYYY-MM-DD HH:mm:ss') {
  return time ? dayjs(time).format(type) : '';
}
// 性别
export function sexFormat(value) {
  return SEX[value] || '未知';
}
// 判断手机号合法性
export function isPoneAvailable(pone) {
  const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (!myreg.test(pone)) {
    return false;
  } else {
    return true;
  }
}
// 合法姓名判断
export function userRealName(userName) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  if (!reg.test(userName)) {
    return false;
  } else {
    return true;
  }
}
/**
 * 获取URL中的参数名及参数值的集合
 * @param {[string]} url [当该参数不为空的时候，则解析该url中的参数集合]
 * @return {[string]}       [参数集合]
 */
export function getQuery(url: string) {
  if (url.includes('?')) return {};
  const query = {};
  const str = url.split('?')[1];
  const strs = str.split('&');
  for (let i = 0; i < strs.length; i++) {
    query[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
  }
  return query;
}
/**
 * 获取屏幕宽度
 */
export function getWidth() {
  return window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
/**
 * 获取屏幕高度
 */
export function getHeight() {
  return window.outerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
/**
 * 获取滚动高度
 */
export function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
}
/**
 * 判断当前设备
 */
export function isMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}
// 是否在微信
export function isWechat() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') != -1;
}
// 函数防抖
export function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay);
  };
}
// 函数节流
export function throttle(fn, cycle) {
  let start = Date.now();
  let now;
  let timer;
  return function () {
    now = Date.now();
    clearTimeout(timer);
    if (now - start >= cycle) {
      fn.apply(this, arguments);
      start = now;
    } else {
      timer = setTimeout(function () {
        fn.apply(this, arguments);
      }, cycle);
    }
  };
}
//获取服务端cookie
export function getcookiesInServer(req): any {
  const service_cookie = {};
  req &&
    req.headers.cookie &&
    req.headers.cookie.split(';').forEach(function (val) {
      const parts = val.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
  return service_cookie;
}
/**
 * 检查上传文件大小
 * @param size
 * @param limit
 */
export function checkFileSize(size, limit) {
  return size > 1024 * 1024 * limit ? `上传文件大小不能超过${limit}MB` : '';
}
/**
 * 检查上传文件是否是图片
 * @param mime
 * @param types
 */
export function checkIsImage(mime, types = ['image/gif', 'image/x-png', 'image/png', 'image/pjpeg', 'image/jpeg', 'image/bmp'], msg = '上传文件格式不正确') {
  return types.includes(mime) ? '' : msg;
}
/**
 * 检查上传文件是否是视频
 * @param mime
 * @param types
 */
export function checkIsVideo(mime, types = ['video/mp4'], msg = '上传文件格式不正确') {
  return types.includes(mime) ? '' : msg;
}
/**
 * 开启全屏
 * @param el
 */
export function openFullScreen(el) {
  if (el.requestFullScreen) {
    el.requestFullScreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  }
}
/**
 * 将数组转换成对象
 * @param arraryData
 * @param key
 * @param value
 * @returns
 */
export function arrayToObj(arraryData, key, value) {
  return arraryData.reduce((temp, item) => ((temp[item[key]] = value ? item[value] : item), temp), {});
}
