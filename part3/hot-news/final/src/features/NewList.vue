<template>
  <van-card
    v-if="filteredNews.length"
    v-for="currentNew of filteredNews"
    :price="currentNew.source"
    :desc="currentNew.digest"
    :title="currentNew.title"
    :thumb="currentNew.imgsrc"
    currency=""
  >
    <template #footer>
      <Button
        color="#3E87F5"
        @click="
          isBookmarkNew(currentNew)
            ? deleteBookmarkNew(currentNew)
            : addBookmarkNew(currentNew)
        "
        >{{ isBookmarkNew(currentNew) ? "取消收藏" : "收藏" }}</Button
      >
      <Button
        v-if="!isBookmarkNew(currentNew)"
        @click="addHiddenNew(currentNew)"
        >隐藏</Button
      >
    </template>
  </van-card>

  <h1 v-else class="h1-text">暂无数据</h1>
</template>

<script setup>
import { computed } from "vue";

import Button from "@/ui/Button.vue";

const props = defineProps([
  "news",
  "bookmarkNews",
  "deleteBookmarkNew",
  "addBookmarkNew",
  "hiddenNews",
  "addHiddenNew",
]);
const isBookmarkNew = (currentNew) => {
  if (!props.bookmarkNews) {
    return false; // 设置默认结果
  }
  return props.bookmarkNews.some(
    (bookmarkNew) => bookmarkNew.title === currentNew.title
  );
};

const isHiddenNew = (currentNew) => {
  if (!props.hiddenNews) {
    return false; // 设置默认结果
  }
  return props.hiddenNews.some(
    (hiddenNew) => hiddenNew.title === currentNew.title
  );
};
const filteredNews = computed(() => {
  return props.news.filter((currentNew) => !isHiddenNew(currentNew));
});
</script>

<style scoped>
.h1-text {
  text-align: center;
}
</style>
