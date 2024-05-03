<template>
  <div>
    <loading v-if="showLoading && loading" />
    <slot
      v-else
      :list="list"
      :page-scope-id="pageScopeId"
    />
    <client-only>
      <slot
        v-if="showPage && pageTotal > 1"
        name="page"
        :page-now="pageNow"
        :page-total="pageTotal"
      >
        <paginate
          :value="pageNow"
          :page-count="pageTotal"
          page-class="page-item"
          prev-class="page-prev"
          next-class="page-next"
          prev-text="上一页"
          next-text="下一页"
          :click-handler="changePage"
          container-class="pages"
          active-class="on"
          v-bind="pageConfig"
        />
      </slot>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ContentListPage',
  props: {
    contentTypeId: {
      type: [String, Number],
      default: ''
    },
    contentTypeKey: {
      type: String,
      default: ''
    },
    keywordIds: {
      type: [String, Number],
      default: ''
    },
    keywordKeys: {
      type: String,
      default: ''
    },
    keywordNames: {
      type: String,
      default: ''
    },
    keywords: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean,
      default: false
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
    filter: {
      type: Function,
      default: () => true
    },
    pageConfig: {
      type: Object,
      default: () => {}
    },
    showPage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: [],
      pageTotal: 1,
      pageNow: this.defaultPage,
      loading: false,
      pageScopeId: ''
    };
  },
  async fetch() {
    this.loading = true;
    try {
      const res = await this.$api.getContentByTypePage({
        pageNow: this.pageNow,
        pageSize: this.pageSize,
        contentTypeId: this.contentTypeId,
        contentTypeKey: this.contentTypeKey,
        keywordIds: this.keywordIds,
        keywordKeys: this.keywordKeys,
        keywordNames: this.keywordNames,
        keywords: this.keywords
      });
      const result = res?.list || {};
      const list = result.records || [];
      this.pageNow = result.current;
      this.pageTotal = result.pages;
      this.list = list.filter(this.filter);
      this.pageScopeId = res.pageScopeId;
      this.$emit('ready', {
        pageNow: this.pageNow,
        pageSize: this.pageSize,
        pageTotal: this.pageTotal,
        list: this.reverse ? this.list.reverse() : this.list,
        pageScopeId: this.pageScopeId
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    fetchData(page) {
      if (page > 0) {
        this.pageNow = page;
      }
      console.log('changed-content: ', page);
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
<style lang="less">
@color: #89141e;
.pages {
  text-align: center;
  margin: 35px 0 46px;
}
// .pages ul{display:inline-block}
.pages li {
  margin: 0 8px;
  display: inline-block;
}
.pages li a {
  display: block;
  min-width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background-color: transparent;
  border: 1px solid @color;
  color: @color;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  padding: 0 10px;
}
.pages a:hover,
.pages li.on a {
  color: #fff;
  background-color: @color;
  border: 1px solid @color;
}
</style>
