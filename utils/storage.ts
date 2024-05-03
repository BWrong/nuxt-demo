/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-04-07 10:30:49
 * @LastEditors: Bwrong
 * @LastEditTime: 2020-10-15 11:13:31
 */

const Storage = localStorage; // 配置使用的存储器
export const setStorage = (key: string, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  Storage.setItem(key, value);
};
export const getStorage = (key: string) => {
  const value = Storage.getItem(key) || '';
  return value.match(/(^\[[\s\S]*\]$|^\{[\s\S]*\}$)/) ? JSON.parse(value) : value;
};
export const removeStorage = (...keys) => keys.map((item) => Storage.removeItem(item));
export const clearStorage = () => Storage.clear();
export const keyStorage = (index: number) => Storage.key(index);
export default {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage,
  keyStorage
};
