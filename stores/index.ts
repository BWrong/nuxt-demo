// TODO
export const state = () => ({
  systemInfo: {},
  isShowCalculator: false,
  menu: [],
  designer: '',
  token: '',
  showMask: false,
  isWechat: false
});
export const mutations = {
  setSystemInfo(state, val) {
    state.systemInfo = val;
  },
  toogleShowCalculator(state, val = false) {
    state.isShowCalculator = val;
  },
  setDesigner(state, val) {
    state.designer = val;
  },
  setMenu(state, val = []) {
    state.menu = val;
  },
  setToken(state, val) {
    state.token = val;
  },
  setMask(state, val = false) {
    state.showMask = val;
  },
  setIsWechat(state, val = false) {
    state.isWechat = val;
  }
};
export const actions = {
  // 将服务端数据传递到客户端，仅在根模块使用
  async nuxtServerInit({ commit }, { req, app, $cookies }) {
    commit('setToken', $cookies.get('front-token'));
    let userAgent = req?.headers['user-agent'] || '';
    userAgent = userAgent.toLowerCase();
    const isWechat = userAgent.indexOf('micromessenger') != -1;
    commit('setIsWechat', isWechat);
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
};
