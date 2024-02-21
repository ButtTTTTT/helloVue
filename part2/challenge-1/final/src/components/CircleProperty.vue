<template>
    <label>
      <slot />
      <input
        type="number"
        :value="property"
        @input="this.$emit('change-property', $event)"
      />
    </label>
  </template>
  
  <script>
  export default {
    emits: ["change-property"],
    props: ["property"],
  };
  </script>
  