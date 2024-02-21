<template>
  <label>
    <slot />
    <input
      type="number"
      :value="angle"
      @input="this.$emit('change-angle', $event)"
    />
  </label>
</template>

<script>
export default {
  emits: ["change-angle"],
  props: ["angle"],
};
</script>
