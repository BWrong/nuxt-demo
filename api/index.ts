/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2020-11-13 09:48:05
 * @LastEditors: Bwrong
 * @LastEditTime: 2021-11-08 15:22:43
 */

export default ({ get, post, $axios }: Record<string, any>) => ({
  // 新增咨询
  addConsult: (params) =>
    $axios.post('/public/addConsult', params, {
      headers: {
        'content-type': 'application/json'
      }
    }),
  // 咨询扩展字段
  consultExtensionFields: (params) => post('/public/consultExtensionFields', params),
  // *根据ID获取内容
  contentGetById: (params) => get('/public/contentGetById', params),
  // 获取所有可用类别
  contentTypeList: (params) => get('/public/contentTypeList', params),
  // *根据类别查询内容列表
  getContentByType: (params) => get('/public/getContentByType', params),
  // *根据类别分页查询内容列表
  getContentByTypePage: (params) => get('/public/getContentByTypePage', params),
  // 获取菜单
  getFrontMenu: (params) => get('/public/getFrontMenu', params),
  // 根据key获取模块字段
  getModuleSolutionFieldsByKey: (params) => get('/public/getModuleSolutionFieldsByKey', params),
  // 获取系统配置信息
  getSysconfig: (params) => get('/public/getSysconfig', params),
  // 获取关键字列表
  keywordList: (params) => get('/public/keywordList', params),
  // 获取所有模块方案
  moduleSolutionList: (params) => get('/public/moduleSolutionList', params),
  // 设置模块方案
  submitModuleSolution: (params) => post('/public/submitModuleSolution', params),
  // 获取短信验证码
  smsCode: (params) => get('/smsCode', params),
  // 会员手机号登录
  vipLoginByMobile: (params) => post('/vipLoginByMobile', params),
  // 会员公众平台登录
  vipLoginByMp: (params) => post('/vipLoginByMp', params),
  // 会员开发平台登录
  vipLoginByOpen: (params) => post('/vipLoginByOpen', params),
  // ***** 开放平台
  // 绑定跳转地址
  bindAddressOfOpen: (params) => get('/wechat/open/bindAddress', params, { is_auth: true }),
  // 微信回调地址
  bindCallbackOfOpen: (params) => get('/wechat/open/bindCallback', params, { is_auth: true }),
  // 获取绑定进度
  bindProgressOfOpen: (params) => get('/wechat/open/bindProgress', params, { is_auth: true }),
  // 获取进度编号
  getProgressIdOfOpen: (params) => get('/wechat/open/getProgressId', params, { is_auth: true }),
  // ***** 公众号平台
  // 绑定跳转地址
  // bindAddressOfMp: (params) => get('/wechat/mp/bindAddress', params, { is_auth: true }),
  // // 绑定跳转地址
  // bindAddressQrcodeOfMp: (params) => get('/wechat/mp/bindAddressQrcode', params, { is_auth: true }),
  // // 微信回调地址
  // bindCallbackOfMp: (params) => get('/wechat/mp/bindCallback', params, { is_auth: true }),
  // // 获取绑定进度
  // bindProgressOfMp: (params) => get('/wechat/mp/bindProgress', params, { is_auth: true }),
  // // 获取进度编号
  // getProgressIdOfMp: (params) => get('/wechat/mp/getProgressId', params, { is_auth: true }),
  // 获取会员资料
  getUserInfo: (params) => get('/getUserInfo', params, { is_auth: true }),
  // 注册绑定手机号
  vipBindMobile: (params) => get('/vipBindMobile', params),
  // 注册绑定开放平台账号
  vipBindOpenAccount: (params) => get('/vipBindOpenAccountByProgressId', params),
  // 参与任务
  joinTask: (params) => get('/joinTask', params, { is_auth: true }),
  // 我参与的任务
  mimeJoinTask: (params) => get('/mimeJoinTask', params, { is_auth: true }),
  // 资料维护
  postUserInfo: (params) =>
    $axios.post('/postUserInfo', params, {
      is_auth: true,
      headers: {
        'content-type': 'application/json'
      }
    }),
  // 提交任务进度
  submitTaskTask: (params) =>
    $axios.post('/submitTaskTask', params, {
      is_auth: true,
      headers: {
        'content-type': 'application/json'
      }
    }),
  // 字典-获取字段
  getDictAll: (params) => get('/setter/system/dict/listAll', params),

  uniqueByTableAndFieldName: (params) => get('/setter/elastic/table/uniqueByTableAndFieldName', params),
  // 发送邮件
  sendToAdminEmail: (params) =>
    $axios.post('/public/mail/sendToAdminEmail', params, {
      headers: {
        'content-type': 'application/json'
      }
    })
});
