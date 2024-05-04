/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-05-03 21:16:51
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 21:21:32
 */
// 完善类型定义
export interface ContentDetail{
  title: string;
  [key:string]: any;
}

export type ContentList = ContentDetail[];

export interface Keyword {
  name: string;
  [key:string]: any;
}

