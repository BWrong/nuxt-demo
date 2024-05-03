<template>
  <div class="img-upload">
    <slot
      name="priview"
      :url="value"
    >
      <div class="priview">
        <i
          v-if="value"
          class="del el-icon-delete"
          @click="handleDel"
        />
        <img
          v-if="value"
          :preview-src-list="[value]"
          class="avatar"
          :src="value"
        >
      </div>
    </slot>
    <el-upload
      v-loading="loading"
      class="upload-btn"
      name="file"
      :data="uploadData"
      :accept="accept"
      :before-upload="handleBeforeUpload"
      :on-error="handleUploadError"
      :on-success="handleUploadSuccess"
      :show-file-list="false"
      :action="uploadUrl"
    >
      <slot> 上传 </slot>
    </el-upload>
  </div>
</template>

<script>
import { checkFileSize, checkIsImage, checkIsVideo } from '@/utils';
const acceptMap = {
  img: 'image/*',
  video: 'video/*',
  file: '*'
};
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    maxSize: {
      type: Number,
      default: 2
    },
    type: {
      type: String,
      default: 'img'
    }
  },
  data() {
    return {
      loading: false,
      uploadUrl: '/api/upload',
      uploadData: { token: this.$cookies.get('front-token') }
    };
  },
  computed: {
    accept() {
      return acceptMap[this.type] || '*';
    }
  },
  methods: {
    handleBeforeUpload({ size, type }) {
      let message = '';
      message = checkFileSize(size, this.maxSize);
      message = this.type === 'img' && checkIsImage(type);
      message = this.type === 'video' && checkIsVideo(type);
      if (message) {
        return !this.$message.error(message);
      }
      this.loading = true;
      return true;
    },
    handleUploadError(err, file, fileList) {
      this.$message.error('上传失败，请重试');
      this.loading = false;
      console.log(err, file, fileList);
    },
    handleUploadSuccess(response) {
      this.loading = false;
      this.$emit('input', response.data.finalUrl);
    },
    handleDel() {
      this.$emit('input', '');
    }
  }
};
</script>

<style lang="less" scoped>
.img-upload {
}
.upload-btn {
  display: inline-block;
}
</style>
