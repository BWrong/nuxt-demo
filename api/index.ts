/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-11-13 09:48:05
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-04 17:21:43
 */
import { get, post } from './request';
import type { ContentDetail } from './types';

// 新增咨询
export const addConsult = (params) => post('/public/addConsult', params, { headers: { 'content-type': 'application/json' } });
// 咨询扩展字段
export const consultExtensionFields = (params) => post('/public/consultExtensionFields', params);
// *根据ID获取内容
export const contentGetById = (params) => {
  return get<ContentDetail>('/public/contentGetById', params);
};
// 获取所有可用类别
export const contentTypeList = (params) => get('/public/contentTypeList', params);
// *根据类别查询内容列表
export const getContentByType = (params) => get('/public/getContentByType', params);
// *根据类别分页查询内容列表
export const getContentByTypePage = (params) => get('/public/getContentByTypePage', params);
// 获取菜单
export const getFrontMenu = (params) => get('/public/getFrontMenu', params);
// 根据key获取模块字段
export const getModuleSolutionFieldsByKey = (params) => get('/public/getModuleSolutionFieldsByKey', params);
// 获取系统配置信息
export const getSysconfig = (params?) => get('/public/getSysconfig', params);
// 获取关键字列表
export const keywordList = (params) => get('/public/keywordList', params);
// 获取所有模块方案
export const moduleSolutionList = (params) => get('/public/moduleSolutionList', params);
// 设置模块方案
export const submitModuleSolution = (params) => post('/public/submitModuleSolution', params);
// 获取短信验证码
export const smsCode = (params) => get('/smsCode', params);
// 会员手机号登录
export const vipLoginByMobile = (params) => post('/vipLoginByMobile', params);
// 会员公众平台登录
export const vipLoginByMp = (params) => post('/vipLoginByMp', params);
// 会员开发平台登录
export const vipLoginByOpen = (params) => post('/vipLoginByOpen', params);
// ***** 开放平台
export const // 绑定跳转地址
  bindAddressOfOpen = (params) => get('/wechat/open/bindAddress', params, { is_auth: true });
// 微信回调地址
export const bindCallbackOfOpen = (params) => get('/wechat/open/bindCallback', params, { is_auth: true });
// 获取绑定进度
export const bindProgressOfOpen = (params) => get('/wechat/open/bindProgress', params, { is_auth: true });
// 获取进度编号
export const getProgressIdOfOpen = (params) => get('/wechat/open/getProgressId', params, { is_auth: true });
// ***** 公众号平台
// 绑定跳转地址
// export const bindAddressOfMp = (params) => get('/wechat/mp/bindAddress', params, { is_auth: true })
// // 绑定跳转地址
// export const bindAddressQrcodeOfMp = (params) => get('/wechat/mp/bindAddressQrcode', params, { is_auth: true })
// // 微信回调地址
// export const bindCallbackOfMp = (params) => get('/wechat/mp/bindCallback', params, { is_auth: true })
// // 获取绑定进度
// export const bindProgressOfMp = (params) => get('/wechat/mp/bindProgress', params, { is_auth: true })
// // 获取进度编号
// export const getProgressIdOfMp = (params) => get('/wechat/mp/getProgressId', params, { is_auth: true })
// 获取会员资料
export const getUserInfo = (params) => get('/getUserInfo', params, { is_auth: true });
// 注册绑定手机号
export const vipBindMobile = (params) => get('/vipBindMobile', params);
// 注册绑定开放平台账号
export const vipBindOpenAccount = (params) => get('/vipBindOpenAccountByProgressId', params);
// 参与任务
export const joinTask = (params) => get('/joinTask', params, { is_auth: true });
// 我参与的任务
export const mimeJoinTask = (params) => get('/mimeJoinTask', params, { is_auth: true });
// 资料维护
export const postUserInfo = (params) =>
  post('/postUserInfo', params, {
    is_auth: true,
    headers: { 'content-type': 'application/json' }
  });
// 提交任务进度
export const submitTaskTask = (params) =>
  post('/submitTaskTask', params, {
    is_auth: true,
    headers: { 'content-type': 'application/json' }
  });
// 字典-获取字段
export const getDictAll = (params) => get('/setter/system/dict/listAll', params);

export const uniqueByTableAndFieldName = (params) => get('/setter/elastic/table/uniqueByTableAndFieldName', params);
// 发送邮件
export const sendToAdminEmail = (params) => post('/public/mail/sendToAdminEmail', params, { headers: { 'content-type': 'application/json' } });
