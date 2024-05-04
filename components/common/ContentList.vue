<template>
  <div>
    <loading v-if="showLoading && pending" />
    <slot
      v-else
      :list="list"
    />
  </div>
</template>

<script setup lang="ts">
import { getContentByType } from '~/api';
import type { ContentDetail } from '~/api/types';
defineOptions({ name: 'ContentList' });
interface Props {
  contentTypeId?: string | number;
  contentTypeKey?: string;
  keywordIds?: string | number;
  keywordKeys?: string;
  keywordNames?: string;
  keywords?: string;
  showLoading?: boolean;
  filter?: (item: ContentDetail) => boolean;
}
const props = withDefaults(defineProps<Props>(), {
  contentTypeId: '',
  contentTypeKey: '',
  keywordIds: '',
  keywordKeys: '',
  keywordNames: '',
  keywords: '',
  showLoading: true,
  filter: () => true
});
const list = ref([] as ContentDetail[]);
const { data, pending, status } = await useAsyncData('contentList' + props, () =>
  getContentByType({
    ontentTypeId: props.contentTypeId,
    contentTypeKey: props.contentTypeKey,
    keywordIds: props.keywordIds,
    keywordKeys: props.keywordKeys,
    keywordNames: props.keywordNames,
    keywords: props.keywords
  }), {
    transform: (res) => {
      const list = res?.list || [];
      return list.filter(props.filter);
    }
  }
);
list.value = data.value || [];
const emits = defineEmits(['ready']);
watch(status, (val) => {
  val === 'success' && emits('ready', list.value);
});
</script>
