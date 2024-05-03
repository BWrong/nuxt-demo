<template>
  <div>
    <loading v-if="showLoading && loading"></loading>
    <slot v-else :content="detail" :next="next" :prev="prev"></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentDetail',
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    scopeId: {
      type: String,
      default: ''
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    autoRedirect: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      detail: {},
      prev: null,
      next: null,
      loading: false
    };
  },
  async fetch() {
    if (!this.id) return;
    this.loading = true;
    try {
      let res = await this.$api.contentGetById({
        id: this.id,
        pageScopeId: this.scopeId
      });
      this.detail = res?.content || {};
      this.prev = res?.last;
      this.next = res?.next;
      let { linkType, outterLink, innerLinkId, id, innerLinkType } = this.detail;
      let { scopeId } = this.$route;
      if (this.autoRedirect) {
        if (linkType === 2) {
          this.$nuxt.context.redirect(outterLink);
        } else if (linkType === 1) {
          this.$nuxt.context.redirect(`/news/${innerLinkId}?type=${innerLinkType}&scopeId=${scopeId}`);
        }
      }
      this.$emit('ready', {
        detail: this.detail,
        prev: this.prev,
        next: this.next
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
    }
  }
};
</script>
