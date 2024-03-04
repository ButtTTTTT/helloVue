<template>
  <TogglePurple @change-purple="togglePurple" />
  <TextColor :textColor="textColor" @change-text-color="changeTextColor" />
  <CircleProperty :property="size" @change-property="changeSize">
    Circle Size
  </CircleProperty>
  <CircleProperty :property="angle" @change-property="changeAngle">
    Circle Rotate
  </CircleProperty>
 <Circle
    :circleClass="circleClass"
    :textColor="textColor"
    :circleSize="circleSize"
    :circleAngle="circleAngle"
  />
</template>
<script setup>
import TogglePurple from "./components/TogglePurple.vue";
import TextColor from "./components/TextColor.vue";
import Circle from "./components/Circle.vue";
import CircleProperty from "./components/CircleProperty.vue";
import { ref, computed } from "vue";

// Text
const textColor = ref("");
const changeTextColor = (event) => {
  textColor.value = event.target.value;
};
// Toggle purple
const isPurple = ref(false);
const togglePurple = () => {
  isPurple.value = !isPurple.value;
};

const circleClass = computed(() => {
  return {
    purple: isPurple.value,
  };
});

// Size
const size = ref(200);
const circleSize = computed(() => {
  return {
    height: `${size.value}px`,
    width: `${size.value}px`,
    lineHeight: `${size.value}px`,
  };
});
const changeSize = (event) => {
  size.value = event.target.value;
};
// Angle
const angle = ref(0);
const circleAngle = computed(() => {
  return {
    transform: `rotate(${angle.value}deg)`,
  };
});

const changeAngle = (event) => {
  angle.value = event.target.value;
};
</script>

<style>
body {
  font-size: 20px;
  font-family: sans-serif;
}
label {
  margin-bottom: 20px;
  font-size: 20px;
  display: block;
}

input[type="number"] {
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>