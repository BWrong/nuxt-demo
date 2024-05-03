<template>
  <div>
    <loading v-if="showLoading && pending" />
    <slot
      v-else
      :content="detail"
      :next="next"
      :prev="prev"
    />
  </div>
</template>

<script setup lang="ts">
import { contentGetById } from '~/api';
import type { ContentDetail } from '~/api/types';

// async fetch() {
  //   if (!this.id) return;
  //   this.loading = true;
  //   try {
  //     const res = await this.$api.contentGetById({
  //       id: this.id,
  //       pageScopeId: this.scopeId
  //     });
  //     this.detail = res?.content || {};
  //     this.prev = res?.last;
  //     this.next = res?.next;
  //     const { linkType, outterLink, innerLinkId, id, innerLinkType } = this.detail;
  //     const { scopeId } = this.$route;
  //     if (this.autoRedirect) {
  //       if (linkType === 2) {
  //         this.$nuxt.context.redirect(outterLink);
  //       } else if (linkType === 1) {
  //         this.$nuxt.context.redirect(`/news/${innerLinkId}?type=${innerLinkType}&scopeId=${scopeId}`);
  //       }
  //     }
  //     this.$emit('ready', {
  //       detail: this.detail,
  //       prev: this.prev,
  //       next: this.next
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.loading = false;
  //   }
defineOptions({ name: 'ContentDetail', });
interface Props {
  id: string | number;
  scopeId?: string;
  showLoading?: boolean;
  autoRedirect?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  id: '',
  scopeId: '',
  showLoading: true,
  autoRedirect: true
});
const detail = ref({} as ContentDetail);
const prev = ref<ContentDetail | null>(null);
const next = ref<ContentDetail | null>(null);

const { data, pending } = await useAsyncData('contentDetail' + props.id, () => contentGetById({
  id: props.id,
  pageScopeId: props.scopeId
}));
console.log(data.value, 111111);
</script>
