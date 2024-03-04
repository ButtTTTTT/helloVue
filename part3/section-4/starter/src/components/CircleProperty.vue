<template>
  <label>
    <slot />
    <input
      type="number"
      :value="property"
      @input="emits('change-property', $event)"
    />
  </label>
</template>

<script setup>
// Options
// emits: ["change-property"],
// props: ["property"],

// Composition
const emits = defineEmits(["change-property"]);
const props = defineProps(["property"]);
</script>
