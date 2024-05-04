// https://github.com/peshanghiwa/vue-awesome-paginate
import 'vue-awesome-paginate/dist/style.css';
import VueAwesomePaginate from 'vue-awesome-paginate';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomePaginate);
});
