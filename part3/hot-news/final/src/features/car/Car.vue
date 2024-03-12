<template>
  <Loading v-show="!carNews.length" />
  <div v-show="carNews.length">
    <NewList
      :news="carNews"
      :bookmarkNews="bookmarkNews"
      :addBookmarkNew="addBookmarkNew"
      :deleteBookmarkNew="deleteBookmarkNew"
      :hiddenNews="hiddenNews"
      :addHiddenNew="addHiddenNew"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCarNews } from "@/services/apiCarNews";
import NewList from "@/features/NewList.vue";
import Loading from "@/ui/Loading.vue";

const carNews = ref([]);
defineProps([
  "bookmarkNews",
  "addBookmarkNew",
  "deleteBookmarkNew",
  "hiddenNews",
  "addHiddenNew",
]);

onMounted(async () => {
  const carNewsData = await getCarNews();
  carNews.value = carNewsData.list;
});
</script>
