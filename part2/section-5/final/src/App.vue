<template>
  <TogglePurple @ChangePurple="togglePurple" />

  <TextColor :textColor="textColor" @change-text-color="changeTextColor" />

  <CircleSize :size="size" @change-size="changeSize" />
  <CircleRotate :angle="angle" @change-angle="changeAngle" />

  <Circle
    :circleClass="circleClass"
    :textColor="textColor"
    :circleSize="circleSize"
    :circleAngle="circleAngle"
  />
</template>

<script>
import TogglePurple from "./components/TogglePurple.vue";
import CircleSize from "./components/CircleSize.vue";
import CircleRotate from "./components/CircleRotate.vue";
import TextColor from "./components/TextColor.vue";
import Circle from "./components/Circle.vue";

export default {
  data() {
    return {
      isPurple: false,
      textColor: "",
      size: 200,
      angle: 0,
    };
  },

  methods: {
    togglePurple(val) {
      console.log(`value from TogglePurple ${val}`)
      this.isPurple = !this.isPurple;
    },

    changeSize(event) {
      this.size = event.target.value;
    },

    changeAngle(event) {
      this.angle = event.target.value;
    },

    changeTextColor(event) {
      this.textColor = event.target.value;
    },
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

  components: { TogglePurple, CircleSize, CircleRotate, TextColor, Circle },
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
