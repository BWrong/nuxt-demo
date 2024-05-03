<template>
  <a :href="isHref ? url : 'javascript:;'" :target="isHref ? '_blank' : '_self'" @click="handleLink">
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  url: string;
}
const props = withDefaults(defineProps<Props>(), {
  url: ''
});
const isHref = computed(() => {
  return !!props.url?.match(/^https?:\/\/.*/i);
});
function handleLink() {
  if (!isHref.value) {
    navigateTo(props.url);
  }
}
</script>
