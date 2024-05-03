<template>
  <div class="icon-wrap">
    <svg class="icon-svg" aria-hidden="true" :style="{ width: size, height: size }">
      <use :xlink:href="'#' + type"></use>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1em'
    }
  }
};
</script>
<style scoped>
.icon-wrap {
  display: inline-block;
}
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
</style>
