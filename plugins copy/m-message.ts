// https://github.com/mengdu/m-message
import Message from 'vue-m-message';
import 'vue-m-message/dist/style.css';
export default defineNuxtPlugin((app) => {
  app.vueApp.use(Message);
});
