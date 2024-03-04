<template>
  <van-card 
  v-for="currentNew of news"
  currency=""
  :price="currentNew.source"
  :desc="currentNew.digest"
  :title="currentNew.title"
  :thumb="currentNew.imgsrc" 
/>
</template>

<script setup>

const props = defineProps(["news"]);

</script>