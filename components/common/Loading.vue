<template>
  <div class="b-loading-wrp">
    <div class="b-loading">
      <span class="b-dot-spin"><i /><i /><i /><i /></span>
      <div class="b-load-text">
        加载中...
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.b-loading-wrp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
  height: 100%;
  .b-loading {
    // padding: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .b-load-text {
    line-height: 60px;
  }
  .b-dot-spin {
    animation: antRotate 1.2s infinite linear;
    transform: rotate(45deg);
    position: relative;
    display: inline-block;
    font-size: 32px;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
  }
  .b-dot-spin i {
    width: 14px;
    height: 14px;
    position: absolute;
    display: block;
    background-color: @primary-color;
    border-radius: 100%;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    opacity: 0.3;
    animation: antSpinMove 1s infinite linear alternate;
    &:nth-child(1) {
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      right: 0;
      bottom: 0;
      -webkit-animation-delay: 0.8s;
      animation-delay: 0.8s;
    }
    &:nth-child(4) {
      bottom: 0;
      left: 0;
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
    }
  }
}
@keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}
@-webkit-keyframes antRotate {
  to {
    -webkit-transform: rotate(405deg);
    transform: rotate(405deg);
  }
}
@keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
@-webkit-keyframes antSpinMove {
  to {
    opacity: 1;
  }
}
</style>
