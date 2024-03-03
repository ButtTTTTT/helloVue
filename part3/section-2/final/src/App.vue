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

<script>
import TogglePurple from "./components/TogglePurple.vue";
import TextColor from "./components/TextColor.vue";
import Circle from "./components/Circle.vue";
import CircleProperty from "./components/CircleProperty.vue";
import { ref } from "vue";

export default {
  setup() {
    const isPurple = ref(false);
    const textColor = ref("");
    const size = ref(200);
    const angle = ref(0);

    const togglePurple = () => {
      isPurple.value = !isPurple.value;
    };

    const changeSize = (event) => {
      size.value = event.target.value;
    };

    const changeAngle = (event) => {
      angle.value = event.target.value;
    };

    const changeTextColor = (event) => {
      textColor.value = event.target.value;
    };

    return {
      isPurple,
      textColor,
      size,
      angle,
      togglePurple,
      changeSize,
      changeAngle,
      changeTextColor,
    };
  },

  computed: {
    circleClass() {
      return {
        purple: this.isPurple,
      };
    },
    circleSize() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        lineHeight: `${this.size}px`,
      };
    },
    circleAngle() {
      return {
        transform: `rotate(${this.angle}deg)`,
      };
    },
  },

  components: {
    TogglePurple,
    TextColor,
    Circle,
    CircleProperty,
  },
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
