<template>
  <div>
    <ContentDetail
      id="211"
      v-slot="{ content: detail }"
      :auto-redirect="false"
    >
      {{ detail }}
    </ContentDetail>
    <!-- <content-list
      v-slot="{ list }"
      content-type-key="PAGE_russia_housekeeper"
      class="slick2"
      @ready="handleReady"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="item"
      >
        <div
          class="row-b6 row-b601"
          :style="{backgroundImage: `url(${item.faceUrl})`}"
        >
          <div class="wp">
            <div
              class="tit1 wow fadeInUp animated"
              data-wow-delay="0.1s"
            >
              <h1>OVERSEAS STUDY</h1>
              <h1>HOUSEKEEPER</h1>
            </div>
            <div class="info">
              <p
                class="wow fadeInUp animated"
                data-wow-delay="0.3s"
              >
                海外留学小管家
              </p>
              <div class="btn">
                <a href="">
                  <div
                    class="pic wow fadeInUp animated"
                    data-wow-delay="0.5s"
                  >
                    <img :src="getExtendFilds(item.moduleSolutionDatas,'icon')">
                  </div>
                  <div
                    class="tit2 wow fadeInUp animated"
                    data-wow-delay="0.7s"
                  >
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.titleEn }}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </content-list> -->
  </div>
</template>

<script setup lang="ts">
import { contentGetById } from '~/api';

function handleReady() {
  console.log('content-list is ready');

}
</script>

<style scoped>

</style>
