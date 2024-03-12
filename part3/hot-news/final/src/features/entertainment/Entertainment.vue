<template>
  <Loading v-show="!entertainmentNews.length" />
  <div v-show="entertainmentNews.length">
    <NewList
      :news="entertainmentNews"
      :bookmarkNews="bookmarkNews"
      :deleteBookmarkNew="deleteBookmarkNew"
      :addBookmarkNew="addBookmarkNew"
      :hiddenNews="hiddenNews"
      :addHiddenNew="addHiddenNew"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getEntertainmentNews } from "@/services/apiEntertainmentNews";
import NewList from "@/features/NewList.vue";
import Loading from "@/ui/Loading.vue";

const entertainmentNews = ref([]);
defineProps([
  "bookmarkNews",
  "addBookmarkNew",
  "deleteBookmarkNew",
  "hiddenNews",
  "addHiddenNew",
]);

onMounted(async () => {
  const entertainmentNewsData = await getEntertainmentNews();
  entertainmentNews.value = Object.values(entertainmentNewsData)[0];
});
</script>
