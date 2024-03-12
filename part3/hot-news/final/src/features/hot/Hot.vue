<template>
  <Loading v-show="!hotNews.length" />
  <div v-show="hotNews.length">
    <NewList
      :news="hotNews"
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
import { getHotNews } from "@/services/apiHotNews";
import NewList from "@/features/NewList.vue";
import Loading from "@/ui/Loading.vue";

const hotNews = ref([]);
defineProps([
  "bookmarkNews",
  "addBookmarkNew",
  "deleteBookmarkNew",
  "hiddenNews",
  "addHiddenNew",
]);

onMounted(async () => {
  const hotNewsData = await getHotNews();
  hotNews.value = Object.values(hotNewsData)[0];
});
</script>
