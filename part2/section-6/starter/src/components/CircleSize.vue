<template>
  <label>
    Circle Size
    <input
      type="number"
      :value="size"
      @input="this.$emit('change-size', $event)"
    />
  </label>
</template>

<script>
export default {
  emits: ["change-size"],
  props: ["size"],
};
</script>
