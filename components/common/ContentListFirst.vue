<template>
  <div>
    <loading v-if="showLoading && pending" />
    <slot
      v-else
      :data="data"
    />
  </div>
</template>

<script setup lang="ts">
import { getContentByTypePage } from '~/api';
import type { ContentDetail } from '~/api/types';

defineOptions({ name: 'ContentListFirst' });
interface Props {
  contentTypeId: string | number;
  contentTypeKey: string;
  keywordIds: string | number;
  keywordKeys: string;
  keywordNames: string;
  keywords: string;
  showLoading: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  contentTypeId: '',
  contentTypeKey: '',
  keywordIds: '',
  keywordKeys: '',
  keywordNames: '',
  keywords: '',
  showLoading: false
});
const detail = ref({} as ContentDetail);
const { data, pending, status } = await useAsyncData('contentList' + props, () =>
  getContentByTypePage({
    pageNow: 1,
    pageSize: 1,
    contentTypeId: props.contentTypeId,
    contentTypeKey: props.contentTypeKey,
    keywordIds: props.keywordIds,
    keywordKeys: props.keywordKeys,
    keywordNames: props.keywordNames,
    keywords: props.keywords
  }), {
  transform: (res) => {
    const result = res?.list || {};
    return result.records || [];
  }
});
detail.value = data[0] || {};
const emits = defineEmits(['ready']);
watch(status, (val) => {
  val === 'success' && emits('ready', detail.value);
});
</script>
