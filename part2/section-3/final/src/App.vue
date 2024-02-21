<template>
  <!-- 
    props 父组件
   -->
  <TogglePurple :togglePurple="togglePurple" />
   <TextColor :textColor="textColor"  :changeTextColor="changeTextColor" />
  <CircleSize :size="size" :changeSize="changeSize" />
  <CircleRotate :angle="angle" :changeAngle="changeAngle" />
  <Circle :circleClass="circleClass" :textColor="textColor" :circleSize="circleSize" :circleAngle="circleAngle"/>
</template>

<script>
import TogglePurple from './components/TogglePurple.vue';
import CircleSize from './components/CircleSize.vue';
import CircleRotate from './components/CircleRotate.vue';
import TextColor from './components/TextColor.vue';
import Circle from './components/Circle.vue';
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
  components: {
    TogglePurple,
    CircleSize, CircleRotate, TextColor,Circle
}
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

select {
  font-size: 20px;
  margin-bottom: 20px;
}

input[type="number"] {
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
}

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
