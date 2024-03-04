<template>
  <select :value="textColor" @change="emits('change-text-color', $event)">
    <option value="">White</option>
    <option value="text-black">Black</option>
    <option value="text-orange">Orange</option>
  </select>
</template>

<script setup>
const props = defineProps(["textColor"]);
const emits = defineEmits(["change-text-color "]);
</script>
<style>
select {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
