<template>
  <label>
    <slot />
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
