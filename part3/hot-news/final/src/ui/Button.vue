<template>
  <van-button size="small" :color="color">
    <slot />
  </van-button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "",
  },
});
</script>
