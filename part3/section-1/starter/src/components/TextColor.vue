<template>
  <select :value="textColor" @change="this.$emit('change-text-color', $event)">
    <option value="">White</option>
    <option value="text-black">Black</option>
    <option value="text-orange">Orange</option>
  </select>
</template>

<script>
export default {
  props: ["textColor"],
  emits: ["change-text-color"],
};
</script>

<style>
select {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
