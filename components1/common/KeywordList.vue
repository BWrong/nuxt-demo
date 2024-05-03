<template>
  <div>
    <loading v-if="showLoading && loading"></loading>
    <slot v-else :list="list"></slot>
    <client-only>
      <slot v-if="pageTotal > 1" name="page" :page-now="pageNow" :page-total="pageTotal">
        <paginate :value="pageNow" :page-count="pageTotal" prev-text="上一页" next-text="下一页" :click-handler="changePage" container-class="pages" active-class="on" v-bind="pageConfig"></paginate>
      </slot>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'KeywordList',
  props: {
    contentTypeId: {
      type: [String, Number],
      default: ''
    },
    contentTypeKey: {
      type: String,
      default: ''
    },
    keyName: {
      type: String,
      default: ''
    },
    pageSize: {
      type: Number,
      default: 10
    },
    defaultPage: {
      type: Number,
      default: 1
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Function,
      default: () => true
    },
    pageConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      list: [],
      pageTotal: 1,
      pageNow: this.defaultPage,
      loading: false
    };
  },
  async fetch() {
    this.loading = true;
    try {
      let res = await this.$api.keywordList({
        pageNow: this.pageNow,
        pageSize: this.pageSize,
        contentTypeId: this.contentTypeId,
        contentTypeKey: this.contentTypeKey,
        key: this.keyName
      });
      let list = res.records || [];
      this.pageNow = res.current;
      this.pageTotal = res.pages;
      this.list = list.filter(this.filter);
      this.$emit('ready', {
        pageNow: this.pageNow,
        pageTotal: this.pageTotal,
        pageSize: this.pageSize,
        list: this.reverse ? this.list.reverse() : this.list
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    fetchData() {
      this.$fetch();
    },
    changePage(page) {
      this.pageNow = page;
      this.$fetch();
      this.$emit('change-page', page);
    }
  }
};
</script>
