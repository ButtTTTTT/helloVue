const app = {
  data() {
    return {
      isPurple: false,
      textColor: "",
      size: 0,
      angle: 0,
    };
  },
  computed: {
    circleClass() {
      return {
        purple: this.isPurple,
      };
    },
    fontSize(){
      return `font-size: ${this.size}px`;
    },
    angled(){
      return {
        transform: `rotate(${this.angle}deg)`
      } 
    }
  },
};
Vue.createApp(app).mount("#app");
