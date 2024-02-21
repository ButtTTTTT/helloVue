<template>
  <label> <input type="checkbox" v-model="isPurple" /> Purple </label>

  <select v-model="textColor">
    <option value="">White</option>
    <option value="text-black">Black</option>
    <option value="text-orange">Orange</option>
  </select>

  <label>
    Circle Size
    <input type="number" v-model="size" />
  </label>

  <label>
    Circle Rotate
    <input type="number" v-model="angle" />
  </label>
  <div
    class="circle"
    :class="[circleClass, textColor]"
    :style="[circleSize, circleAngle]"
  >
    Hi!
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPurple: false,
      textColor: "",
      size: 200,
      angle: 0,
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
