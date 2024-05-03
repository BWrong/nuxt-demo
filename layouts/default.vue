<template>
  <div>
    111
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headInfo: {}
    };
  },
  async fetch() {
    let systemInfo = await this.$api.getSysconfig();
    this.$store.commit('setSystemInfo', systemInfo);
    this.headInfo = {
      title: systemInfo.seoTitle,
      meta: [
        { hid: 'description', name: 'description', content: systemInfo.seoDescription },
        { hid: 'keywords', name: 'keywords', content: systemInfo.seoKeywords }
      ]
    };
  },
  head() {
    return this.headInfo;
  },
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
    showMask() {
      return this.$store.state.showMask;
    }
  }
};
</script>
