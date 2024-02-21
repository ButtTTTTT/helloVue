<template>
  <label>
    Circle Rotate
    <input type="number" :value="angle" @change="changeAngle" />
  </label>
</template>

<script>
export default {
  props: ["angle",],
  emits: ["change-angle"],
  methods: {
    changeAngle(e) {
      this.$emit("change-angle", e)
    }
  }
};
</script>
