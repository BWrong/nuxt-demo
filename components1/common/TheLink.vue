<template>
  <a :href="isHref ? url : 'javascript:;'" :target="isHref ? '_blank' : '_self'" @click="handleLink">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    isHref() {
      return !!this.url?.match(/^https?:\/\/.*/i);
    }
  },
  methods: {
    handleLink() {
      if (!this.isHref) {
        this.$router.push(this.url);
      }
    }
  }
};
</script>
