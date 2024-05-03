/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-04-24 12:44:57
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-04-24 12:47:58
 */
import { fomartTime } from '~/utils';
export const getExtendFilds = (val: any, key: string) => {
  if (!val) return '';
  return val[key] || '';
};
export const intercept = (src: string, length: number): string => (src.length < length ? src : `${src.slice(0, length)}...`);

export const split = (val: string, reg: RegExp, num: number) => val.split(reg)[num] || '';

export const upperCase = (val: string) => (val ? val.toUpperCase() : '');
export const lowerCase = (val: string) => (val ? val.toLowerCase() : '');
