<template>
  <Navbar :toggleBookmark="toggleBookmark" :showBookmark="showBookmark" />
  <div v-show="!showBookmark">
    <van-tabs v-model:active="componentName">
      <van-tab title="头条" name="Hot"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
      <van-tab title="汽车" name="Car"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
    </van-tabs>
    <keep-alive>
      <component :is="tabs[componentName]"></component>
    </keep-alive>
  </div>
  <van-back-top />
  <Bookmark v-show="showBookmark" />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Hot from "./components/Hot.vue";
import Entertainment from "./components/Entertainment.vue";
import Car from "./components/Car.vue";
import Sport from "./components/Sport.vue";
import { useBookmark } from "@/hooks/useBookmark";
import { ref } from "vue";
const componentName = ref("Hot");
const tabs = { Hot, Entertainment, Car, Sport };
const { showBookmark, toggleBookmark } = useBookmark();
</script>