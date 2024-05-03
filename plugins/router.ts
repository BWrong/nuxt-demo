export default defineNuxtPlugin((nuxtApp) => {
  const store = useAppStore();
  nuxtApp.hooks.beforeEach(() => {
    store.setMask(true);
  });
  nuxtApp.hooks.afterEach(() => {
    setTimeout(() => {
      store.setMask(false);
    }, 550);
  });
});
