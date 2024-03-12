<template>
  <Navbar :toggleBookmark="toggleBookmark" :showBookmark="showBookmark" />

  <div v-show="!showBookmark">
    <van-tabs v-model:active="componentName">
      <van-tab title="头条" name="Hot"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
      <van-tab title="汽车" name="Car"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
    </van-tabs>

    <KeepAlive>
      <component
        :is="tabs[componentName]"
        :bookmarkNews="bookmarkNews"
        :addBookmarkNew="addBookmarkNew"
        :deleteBookmarkNew="deleteBookmarkNew"
        :hiddenNews="hiddenNews"
        :addHiddenNew="addHiddenNew"
      ></component>
    </KeepAlive>
  </div>

  <van-back-top />

  <div v-show="showBookmark">
    <Bookmark
      :bookmarkNews="bookmarkNews"
      :deleteBookmarkNew="deleteBookmarkNew"
    />
  </div>
</template>

<script setup>
import Navbar from "./ui/Navbar.vue";
import Hot from "./features/hot/Hot.vue";
import Entertainment from "./features/entertainment/Entertainment.vue";
import Car from "./features/car/Car.vue";
import Sport from "./features/sport/Sport.vue";
import Bookmark from "./features/bookmark/Bookmark.vue";

import { useBookmark, useToggleBookmark } from "@/hooks/useBookmark";
import { ref } from "vue";
import { useHidden } from "./hooks/useHidden";

const componentName = ref("Hot");
const tabs = { Hot, Entertainment, Car, Sport };

const { showBookmark, toggleBookmark } = useToggleBookmark();
const { bookmarkNews, addBookmarkNew, deleteBookmarkNew } = useBookmark();
const { hiddenNews, addHiddenNew } = useHidden();
</script>
