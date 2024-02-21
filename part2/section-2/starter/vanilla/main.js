/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

const app = {
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

Vue.createApp(app).mount("#app");
