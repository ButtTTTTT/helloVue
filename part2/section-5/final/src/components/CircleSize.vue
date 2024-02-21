<template>
  <label>
    Circle Size
    <input type="number" :value="size" @change="changeSize" />
  </label>
</template>

<script>
export default {
  props: ["size"],
  emits: ["change-size"],
  methods: {
    changeSize(e) {
      this.$emit("change-size", e)
    }
  }
};
</script>
