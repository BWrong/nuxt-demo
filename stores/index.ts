/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-03-17 22:04:36
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-05-03 14:17:04
 */
export const useAppStore = defineStore('appStore', {
  state: () => ({
    systemInfo: {},
    isShowCalculator: false,
    menu: [],
    designer: '',
    token: '',
    showMask: false,
    isWechat: false
  }),
  actions: {
    setSystemInfo(val) {
      this.systemInfo = val;
    },
    toogleShowCalculator(val = false) {
      this.isShowCalculator = val;
    },
    setDesigner(val) {
      this.designer = val;
    },
    setMenu(val = []) {
      this.menu = val;
    },
    setToken(val) {
      this.token = val;
    },
    setMask(val = false) {
      this.showMask = val;
    },
    setIsWechat(val = false) {
      this.isWechat = val;
    },
    // TODO
    async nuxtServerInit() {
      // this.setToken($cookies.get('front-token'));
      // let userAgent = req?.headers['user-agent'] || '';
      // userAgent = userAgent.toLowerCase();
      // const isWechat = userAgent.indexOf('micromessenger') != -1;
      // commit('setIsWechat', isWechat);
      // console.log(req.headers.cookie)
      // if (req.headers.cookie) {
      //   let parsedResult = {};
      //   req.headers.cookie.split(';').forEach(cookie => {
      //     const currentCookie = cookie.split('=');
      //     parsedResult[currentCookie[0].trim()] = (currentCookie[1] || '').trim();
      //   });
      //   const userInfo = {
      //     name: parsedResult.name,
      //     token: parsedResult.token
      //   };
      //   commit('user/setUserInfo',userInfo);
      // }
    }
  }
});
