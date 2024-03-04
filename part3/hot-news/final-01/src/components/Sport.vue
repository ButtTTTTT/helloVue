<template>
  <NewList :news="sportNews" />
</template>
<script setup>
import { onMounted, ref } from "vue";
import NewList from "@/components/NewList.vue";
import { getSportNews } from "@/services/apiSportNews";
const sportNews = ref([]);
onMounted(async () => {
  const sportNewsData = await getSportNews();
  sportNews.value = Object.values(sportNewsData)[0];
  console.log(sportNews);
});
</script>