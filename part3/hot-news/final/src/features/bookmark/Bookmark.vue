<template>
  <NewList
    :news="bookmarkNews"
    :bookmarkNews="bookmarkNews"
    :deleteBookmarkNew="deleteBookmarkNew"
  />
</template>

<script setup>
import NewList from "@/features/NewList.vue";

defineProps(["bookmarkNews", "deleteBookmarkNew"]);
</script>
