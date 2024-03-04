<template>
  <label>
    <input type="checkbox" @change="this.$emit('change-purple')" />
    Purple
  </label>
</template>

<script setup>
const  emits = defineEmits(["change-purple"]);
</script>
