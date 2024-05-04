<!-- 入口文件 -->
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig();
const store = useAppStore();
let userAgent = useRequestHeader('user-agent');
userAgent = userAgent?.toLowerCase() || '';
// 判断是否在微信打开
const isWechat = userAgent.indexOf('micromessenger') !== -1;
store.setIsWechat(isWechat);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
