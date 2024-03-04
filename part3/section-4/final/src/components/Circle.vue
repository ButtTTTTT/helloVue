<template>
  <div
    class="circle"
    :class="[circleClass, textColor]"
    :style="[circleSize, circleAngle]"
  >
    Hi!
  </div>
</template>

<script setup>
// props: ["circleClass", "textColor", "circleSize", "circleAngle"],

const props = defineProps([
  "circleClass",
  "textColor",
  "circleSize",
  "circleAngle",
]);
</script>

<style>
.circle {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #45d619;
  text-align: center;
  color: #fff;
  line-height: 150px;
  font-size: 32px;
  font-weight: bold;
}

.purple {
  background-color: #767dea;
}
.text-black {
  color: #424242;
}
.text-orange {
  color: #ffc26f;
}
</style>
