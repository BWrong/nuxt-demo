<template>
  <div>
    <loading v-if="showLoading && loading"/>
    <slot v-else :list="list"/>
  </div>
</template>

<script>
export default {
  name: 'ContentList',
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
      default: true
    },
    filter: {
      type: Function,
      default: () => true
    }
  },
  data() {
    return {
      list: [],
      loading: false
    };
  },
  async fetch() {
    this.loading = true;
    try {
      const res = await this.$api.getContentByType({
        contentTypeId: this.contentTypeId,
        contentTypeKey: this.contentTypeKey,
        keywordIds: this.keywordIds,
        keywordKeys: this.keywordKeys,
        keywordNames: this.keywordNames,
        keywords: this.keywords
      });
      const list = res?.list || [];
      this.list = list.filter(this.filter);
      this.$emit('ready', this.list);
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
