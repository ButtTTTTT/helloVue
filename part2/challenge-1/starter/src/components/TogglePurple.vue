<template>
  <label>
    <input type="checkbox" @change="this.$emit('change-purple')" />
    Purple
  </label>
</template>

<script>
export default {
  emits: ["change-purple"],
};
</script>
