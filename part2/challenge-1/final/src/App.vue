<template>
  <TogglePurple @change-purple="togglePurple" />

  <TextColor :textColor="textColor" @change-text-color="changeTextColor" />
<!-- 
  <CircleSize :size="size" @change-size="changeSize"> Circle Size </CircleSize>
  <CircleRotate :angle="angle" @change-angle="changeAngle">
    Circle Rotate
  </CircleRotate> -->
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
    togglePurple() {
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

  components: { TogglePurple, 
      TextColor, 
      Circle, 
      CircleProperty },
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
