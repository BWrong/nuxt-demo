<template>
  <div class="page404-container">
    <client-only>
      <vue-particles
        :click-effect="true"
        :hover-effect="true"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :lines-width="1"
        :move-speed="3"
        :particle-opacity="1"
        :particle-size="4"
        :particles-number="80"
        class="particles"
        click-mode="repulse"
        color="#B6D4FF"
        hover-mode="grab"
        lines-color="#B6D4FF"
        shape-type="circle"
      ></vue-particles>
    </client-only>
    <div class="info content-box">
      <div class="pic"></div>
      <h1>{{ error.statusCode }}</h1>
      <span v-if="error.statusCode === 404">抱歉，您访问的页面不存在</span>
      <span v-else>{{ error.message || '应用发生错误异常' }}</span>
      <nuxt-link to="/" class="back-btn">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'full',
  props: {
    error: {
      type: Object,
      default() {
        return {
          statusCode: 500,
          message: ''
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.page404-container {
  background: #eee;
  height: 100vh;
}
.info {
  width: 100%;
  padding-top: 5%;
  text-align: center;
  /* margin-top: 10%; */
}
.info .pic {
  width: 472px;
  height: 224px;
  margin: auto;
  // background-image: url(~assets/images/img_404.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.info h1 {
  font-size: 6rem;
  color: #1b3366;
}
.info span {
  display: block;
  font-size: 1.1rem;
  color: #1b3366;
  margin-bottom: 20px;
}
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}
.content-box {
  width: 100%;
  // margin: 5% auto 0;
  text-align: center;
  position: relative;
  z-index: 999;
  // padding: 200px 0;
}
.back-btn {
  border: 1px solid #263578;
  padding: 5px 10px;
  color: #263578;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.5s ease;
  border-radius: 3px;
  &:hover {
    background: #263578;
    color: #fff;
  }
}
</style>
