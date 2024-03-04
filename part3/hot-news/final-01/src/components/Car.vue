<template>
  <Loading  v-show="!carNews.length" />
  <NewList :news="carNews" v-show="carNews.length" />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getCarNews } from "@/services/apiSportNews";
import NewList from "@/components/NewList.vue";
import Loading from '@/components/Loading.vue';
const carNews = ref([]);
onMounted(async () => {
  const carNewsData = await getCarNews();
  carNews.value = carNewsData.list;
  console.log(carNews);
});
</script>