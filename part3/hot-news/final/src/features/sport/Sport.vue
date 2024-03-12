<template>
  <Loading v-show="!sportNews.length" />
  <div v-show="sportNews.length">
    <NewList
      :news="sportNews"
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
import { getSportNews } from "@/services/apiSportNews";
import NewList from "@/features/NewList.vue";
import Loading from "@/ui/Loading.vue";

const sportNews = ref([]);
defineProps([
  "bookmarkNews",
  "addBookmarkNew",
  "deleteBookmarkNew",
  "hiddenNews",
  "addHiddenNew",
]);

onMounted(async () => {
  const sportNewsData = await getSportNews();
  sportNews.value = Object.values(sportNewsData)[0];
});
</script>
