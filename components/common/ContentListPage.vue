<template>
  <div>
    <loading v-if="showLoading && pending" />
    <slot
      v-else
      :list="data.list"
      :page-scope-id="pageScopeId"
    />
    <slot
      v-if="showPage && pageTotal > 1"
      name="page"
      :page-now="pageNow"
      :page-total="pageTotal"
      :total-items="totals"
    >
      <vue-awesome-paginate
        v-model="pageNow"
        :items-per-page="pageSize"
        :total-items="totals"
        paginate-buttons-class="page-item"
        back-button-class="page-prev"
        next-button-class="page-next"
        prev-button-content="上一页"
        next-button-content="下一页"
        :on-click="changePage"
        pagination-container-class="pages"
        active-page-class="on"
        v-bind="pageConfig"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { getContentByTypePage } from '~/api';
import type { ContentDetail } from '~/api/types';

defineOptions({ name: 'ContentListPage' });
interface Props {
  contentTypeId?: string | number;
  contentTypeKey?: string;
  keywordIds?: string | number;
  keywordKeys?: string;
  keywordNames?: string;
  keywords?: string;
  showLoading?: boolean;
  filter?: (item: ContentDetail) => boolean;
  pageSize?: number;
  defaultPage?: number;
  showPage?: boolean;
  reverse?: boolean;
  pageConfig?: Record<string, any>;
}
const props = withDefaults(defineProps<Props>(), {
  contentTypeId: '',
  contentTypeKey: '',
  keywordIds: '',
  keywordKeys: '',
  keywordNames: '',
  keywords: '',
  showLoading: true,
  filter: () => true,
  pageSize: 10,
  defaultPage: 1,
  showPage: true,
  reverse: false,
  pageConfig: () => ({})
});
const pageNow = ref(props.defaultPage);

const { data, pending, refresh, status } = await useAsyncData('contentListPage' + props, () =>
  getContentByTypePage({
    pageNow: pageNow.value,
    pageSize: props.pageSize,
    contentTypeId: props.contentTypeId,
    contentTypeKey: props.contentTypeKey,
    keywordIds: props.keywordIds,
    keywordKeys: props.keywordKeys,
    keywordNames: props.keywordNames,
    keywords: props.keywords
  }), {
  transform: (res) => {
    const result = res?.list || {};
    const list = result.records || [];
    const filterList = list.filter(props.filter) as ContentDetail[];
    return {
      list: props.reverse ? filterList.reverse() : filterList,
      pageNow: result.current,
      pageTotal: result.pages,
      total: result.total,
      pageScopeId: res.pageScopeId
    };
  }
});
const pageTotal = computed(() => data.value?.pageTotal || 1);
const totals = computed(() => data.value?.total || 1);
const pageScopeId = computed(() => data.value?.pageScopeId || '');
const emits = defineEmits(['ready', 'change-page']);

watch(status, (val) => {
  val === 'success' && emits('ready', data.value);;
});
function changePage(page: number) {
  pageNow.value = page;
  refresh();
  emits('change-page', page);
}
</script>
