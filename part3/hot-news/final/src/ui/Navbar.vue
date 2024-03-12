<template>
  <van-nav-bar
    title="热点新闻"
    :left-text="leftText"
    right-text="刷新"
    @click-right="refresh"
    @click-left="toggleBookmark"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["toggleBookmark", "showBookmark"]);
const leftText = computed(() => {
  return props.showBookmark ? "返回" : "收藏";
});

const refresh = () => {
  window.location.reload();
};
</script>
