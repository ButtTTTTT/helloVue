<template>
  <label>
    <input type="checkbox" @change="emits('change-purple')" />
    Purple
  </label>
</template>

<script setup>
// emits: ["change-purple"],
const emits = defineEmits(["change-purple"]);
</script>
