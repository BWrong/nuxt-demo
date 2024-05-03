// https://github.com/hilongjw/vue-lazyload/tree/next
import VueLazyLoad from 'vue-lazyload';
export default defineNuxtPlugin((app) => {
  app.vueApp.use(VueLazyLoad, {
    loading: require('~/assets/images/loading.jpg'),
    error: require('~/assets/images/error.jpg')
  });
});
