<template>
  <div>
    <loading v-if="showLoading && loading"></loading>
    <slot v-else :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentListFirst',
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
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: {},
      loading: false
    };
  },
  async fetch() {
    this.loading = true;
    try {
      let res = await this.$api.getContentByTypePage({
        pageNow: 1,
        pageSize: 1,
        contentTypeId: this.contentTypeId,
        contentTypeKey: this.contentTypeKey,
        keywordIds: this.keywordIds,
        keywordKeys: this.keywordKeys,
        keywordNames: this.keywordNames,
        keywords: this.keywords
      });
      let result = res?.list || {};
      let list = result.records || [];
      this.data = list[0] || {};
      this.$emit('ready', this.data);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    fetchData() {
      this.$fetch();
    }
  }
};
</script>
