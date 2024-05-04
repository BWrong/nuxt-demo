<template>
  <div>
    <div>detail</div>
    <ContentDetail
      id="1738"
      v-slot="{ content: detail,next,prev }"
      :auto-redirect="false"
    >
      detail:{{ detail }},
      next:{{ next }},
      prev:{{ prev }}
    </ContentDetail>
    <div>list</div>
    <!-- <ContentList
      v-slot="{ list }"
      content-type-id="48"
      @ready="handleReady"
    >
      <div>{{ list }}</div>
    </ContentList> -->
    <ContentListPage
      v-slot="{ list }"
      content-type-id="48"
      @ready="handleReady"
    >
      <div>{{ list }}</div>
    </ContentListPage>
  </div>
</template>

<script setup lang="ts">
function handleReady(e) {
  console.log(e);

}
</script>

<style scoped>

</style>
