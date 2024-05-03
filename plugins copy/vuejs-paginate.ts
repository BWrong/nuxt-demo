// https://github.com/peshanghiwa/vue-awesome-paginate
// https://github.com/cloudeep/vuejs-paginate-next
import Paginate from 'vuejs-paginate-next';
export default defineNuxtPlugin((app) => {
  app.vueApp.use(Paginate);
});
