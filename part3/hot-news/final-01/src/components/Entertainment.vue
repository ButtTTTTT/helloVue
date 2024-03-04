<template>
  <NewList :news="entertainmentNews" />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getEntertainmentNews } from "@/services/entertainmentNews";
import NewList from "@/components/NewList.vue";
const entertainmentNews = ref([]);
onMounted(async () => {
  const entertainmentNewsData = await getEntertainmentNews();
  entertainmentNews.value = Object.values(entertainmentNewsData)[0];
  console.log(entertainmentNews.value);
});
</script>