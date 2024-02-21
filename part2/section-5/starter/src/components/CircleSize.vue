<template>
  <label>
    Circle Size
    <input type="number" :value="size" @input="changeSize" />
  </label>
</template>

<script>
export default {
  props: ["size", "changeSize"],
};
</script>
