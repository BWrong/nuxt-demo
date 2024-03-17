/*
 * @Author: Bwrong
 * @Github: https://github.com/BWrong
 * @Date: 2024-03-17 22:04:36
 * @LastEditors: Bwrong
 * @LastEditTime: 2024-03-17 22:04:37
 */
export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      const infos = await $fetch('https://api.nuxt.com/modules/pinia');

      this.name = infos.name;
      this.description = infos.description;
    }
  }
});
