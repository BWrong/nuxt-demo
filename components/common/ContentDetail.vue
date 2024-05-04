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

defineOptions({ name: 'ContentDetail' });
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

const { data, pending, status } = await useAsyncData('contentDetail' + props.id, () =>
  contentGetById({
    id: props.id,
    pageScopeId: props.scopeId
  })
);
detail.value = data.value?.content || {};
prev.value = data.value?.last;
next.value = data.value?.next;
const route = useRoute();
const emits = defineEmits(['ready']);
const { linkType, outterLink, innerLinkId, id, innerLinkType } = detail.value;
const { scopeId } = route.query;
if (props.autoRedirect) {
  if (linkType === 2) {
    navigateTo(outterLink, {
      external: true,
      open: { target: '_blank' }
    });
  } else if (linkType === 1) {
    navigateTo(`/news/${innerLinkId}?type=${innerLinkType}&scopeId=${scopeId}`);
  }
}
watch(status, (val) => {
  val === 'success' && emits('ready', {
    detail: detail.value,
    prev: prev.value,
    next: next.value
  });
});
</script>
