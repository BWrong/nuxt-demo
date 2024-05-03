<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: Object as () => NuxtError
});
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#B6D4FF"
    },
    links: {
      color: "#B6D4FF",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 80
    }
  }
}
</script>

<template>
  <div class="page404-container">
    <NuxtParticles id="tsparticles" :options="options" class="particles" />
    <div class="info content-box">
      <div class="pic" />
      <h1>{{ error.statusCode }}</h1>
      <span v-if="error.statusCode === 404">抱歉，您访问的页面不存在</span>
      <span v-else>{{ error.message || '应用发生错误异常' }}</span>
      <NuxtLink to="/" class="back-btn">返回首页</NuxtLink></div>
  </div>
</template>
<style lang="less" scoped>
.page404-container {
  background: #eee;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-box {
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 999;
}
.info h1 {
  font-size: 6rem;
  color: #1b3366;
}

.info span {
  display: block;
  font-size: 1.1rem;
  color: #1b3366;
  margin-bottom: 20px;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
}



.back-btn {
  border: 1px solid #263578;
  padding: 5px 10px;
  color: #263578;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.5s ease;
  border-radius: 3px;

  &:hover {
    background: #263578;
    color: #fff;
  }
}
</style>
