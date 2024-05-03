// https://github.com/TerryZ/v-region
import { RegionSelects } from 'v-region';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('v-region-selects', RegionSelects);
});
