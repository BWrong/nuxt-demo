<template>
  <div>
    <ul class="demo-list">
      <li>
        <a
          href="https://github.com/michalsnik/aos"
          target="_blank"
        >aos</a>动画
      </li>
      <div
        class="aos-box"
        data-aos="fade-up"
      >
        aos-box
      </div>
      <li>swiper</li>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        effect="creative"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }"
      >
        <SwiperSlide
          v-for="slide in 10"
          :key="slide"
        >
          <div class="swiper-slide-text">
            {{ slide }}
          </div>
        </SwiperSlide>
      </Swiper>
      <li>地址选择</li>
      <RegionSelects v-model="region" />
      <li>消息提示</li>
      <button @click="showToast">
        显示消息提示
      </button>
      <li>百度地图:暂时有问题</li>
      <ClientOnly>
        <div class="map-box">
          <BMap
            :ak="ak"
            :heading="64.5"
            :tilt="73"
            :center="{
              lng: 116.28019,
              lat: 40.049191
            }"
            :zoom="19"
            :min-zoom="3"
            :map-type="type"
            :enable-dragging="mapSetting.enableDragging"
            :enable-inertial-dragging="mapSetting.enableInertialDragging"
            :enable-scroll-wheel-zoom="mapSetting.enableScrollWheelZoom"
            :enable-continuous-zoom="mapSetting.enableContinuousZoom"
            :enable-double-click-zoom="mapSetting.enableDoubleClickZoom"
            :enable-keyboard="mapSetting.enableKeyboard"
            :enable-pinch-to-zoom="mapSetting.enablePinchToZoom"
            :enable-traffic="mapSetting.enableTraffic"
          />
        </div>
      </ClientOnly>
      <li>分页</li>
      <vue-awesome-paginate
        v-model="currentPage"
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="5"
      />
      <li>demo</li>
      <NuxtLink to="/demo">
        demo
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { RegionInputModel } from 'v-region';
import type { MapType, MapProps } from 'vue3-baidu-map-gl';
import { Message } from '~/plugins/message';
console.log(useAppConfig());
const ak = import.meta.env.VITE_BAIDU_MAP_AK;

// definePageMeta({
  // layout: false
  // middleware: 'test',
  // 路有验证
  // validate: async (route) => {
  // Check if the id is made up of digits
  // return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id);
  // }
// });
// 动态设置头部
useHead({ title: '首页' });
// 动态设置 SEO 信息
useSeoMeta({ description: '这是首页' });

useAnimation();
const region = ref<RegionInputModel>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
});

function showToast() {
  Message.info('1111');
}

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
const currentPage = ref(1);
</script>

<style scoped lang="less">
.demo-list {
  padding: 20px;
  li {
    margin-top: 20px;
  }
}

.aos-box {
  width: 100px;
  height: 100px;
  background-color: orange;
  position: relative;
}

.swiper-slide-text {
  height: 100px;
  background: #999;
}

.map-box {
  width: 1000px
}
</style>
