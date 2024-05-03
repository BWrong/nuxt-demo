<template>
  <div>
    <slot />
    <!-- 路由切换遮罩 -->
    <div
      class="mask"
      :class="{ show: showMask }"
    >
      <img
        class="logo"
        src="~/assets/images/logo1.png"
        alt="致俄国际教育中心"
      >
      <img
        class="logo2"
        src="~/assets/images/logo2.png"
        alt="致俄国际教育中心"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { getSysconfig } from '~/api';

const headInfo = ref({});
const route = useRoute();
const store = useAppStore();
const isHome = computed(() => route.path === '/');
const showMask = computed(() => store.showMask);
useHead(headInfo);
async function fetch() {
  const systemInfo = await getSysconfig();
  store.setSystemInfo(systemInfo);
  headInfo.value = {
    title: systemInfo.seoTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: systemInfo.seoDescription
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: systemInfo.seoKeywords
      }
    ]
  };
}
</script>
<style lang="less" scoped>
.mask {
  height: 100vh;
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100vw;
  background-color: #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  opacity: 1;
  z-index: 0;
  .logo {
    width: 200px;
    height: auto;
    position: absolute;
  }
  .logo2 {
    width: 200px;
    height: auto;
    position: relative;
  }
  &.show {
    top: 0;
    opacity: 1;
    z-index: 999999;
    .logo {
      animation: flash 1.2s infinite ease-in-out;
    }
    .logo2 {
      animation: flash 2.4s infinite ease-in-out;
    }
  }
}
</style>
