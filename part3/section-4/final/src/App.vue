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
import {useTextColor} from "@/hooks/useTextColor";
import {useAngle} from "@/hooks/useAngle";
import {useTogglePurple} from "@/hooks/useTogglePurple";
import {useSize} from "@/hooks/useSize";
import { ref, computed } from "vue";
const {textColor,changeTextColor} = useTextColor();
const {isPurple,togglePurple} = useTogglePurple();
const {size,circleSize,changeSize} = useSize();
const {angle,circleAngle,changeAngle} = useAngle();
const circleClass = computed(() => {
        return {
          purple: isPurple.value,
        };
      });
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
