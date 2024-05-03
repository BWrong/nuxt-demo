<template>
  <div>
    <div>demo</div>
    <ul>
      <li>百度地图</li>
      <!-- <ClientOnly>
    <BMap
      :ak="ak"
      :heading="64.5"
      :tilt="73"
      :center="{
        lng: 116.28019,
        lat: 40.049191
      }"
      :zoom="19"
      :minZoom="3"
      :mapType="type"
      :enableDragging="mapSetting.enableDragging"
      :enableInertialDragging="mapSetting.enableInertialDragging"
      :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
      :enableContinuousZoom="mapSetting.enableContinuousZoom"
      :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
      :enableKeyboard="mapSetting.enableKeyboard"
      :enablePinchToZoom="mapSetting.enablePinchToZoom"
      :enableTraffic="mapSetting.enableTraffic"
    />
  </ClientOnly> -->
      <li>粒子动画</li>
      <!-- <vue-particles></vue-particles> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { MapType, MapProps } from 'vue3-baidu-map-gl';
console.log(useAppConfig());
console.log(import.meta.env);
const ak = import.meta.env.VITE_BAIDU_MAP_AK;

definePageMeta({
  // layout: false
  middleware: 'test'
  // 路有验证
  // validate: async (route) => {
  // Check if the id is made up of digits
  // return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id);
  // }
});
// 动态设置头部
useHead({
  title: '首页'
});
// 动态设置 SEO 信息
useSeoMeta({
  description: '这是首页'
});
const type = ref<MapType>('BMAP_NORMAL_MAP');
const mapSetting = ref<MapProps>({
  enableDragging: true,
  enableInertialDragging: true,
  enableScrollWheelZoom: false,
  enableContinuousZoom: true,
  enableResizeOnCenter: true,
  enableDoubleClickZoom: false,
  enableKeyboard: true,
  enablePinchToZoom: true,
  enableAutoResize: true,
  enableTraffic: false
});
</script>

<style scoped></style>
