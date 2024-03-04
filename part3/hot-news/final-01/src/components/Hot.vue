<template>
<NewList :news="hotNews" />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getHotNews } from "@/services/apiHotNews";
import NewList from '@/components/NewList.vue';
const hotNews = ref([]);
onMounted(async () => {
  const hotNewsData = await getHotNews();
  hotNews.value = Object.values(hotNewsData)[0];
  console.log(hotNews);
});
</script>