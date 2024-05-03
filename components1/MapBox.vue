<template>
  <baidu-map class="map" :ak="ak" scroll-wheel-zoom :center="positions" :zoom="14">
    <!-- <bm-marker :position="positions" :offset="{ width: 0, height: -100 }" :icon="icon"> </bm-marker>
    <bm-marker  :position="positions" :offset="{ width: 0, height: 0 }" :icon="icon2"> </bm-marker> -->
  </baidu-map>
</template>

<script>
import { getWidth } from '@/utils';
export default {
  props: {
    ak: {
      type: String,
      default: ''
    },
    positions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // icon: {
      //   url: require('~/assets/images/icon/location.svg'),
      //   size: {
      //     width: 407,
      //     height: 158
      //   }
      // },
      // icon2: {
      //   url: require('~/assets/images/icon/vector_red.png'),
      //   size: {
      //     width: 30,
      //     height: 45
      //   }
      // }
    };
  },
  computed: {
    positionsStr() {
      return `${this.positions.lng},${this.positions.lat}`;
    }
  },
  mounted() {
    if (getWidth() < 768) {
      this.icon.size = {
        width: 300,
        height: 116
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
.map ::v-deep .anchorBL {
  display: none;
}
.map img {
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
}
</style>
