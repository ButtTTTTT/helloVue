// {
//   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
// }
const app = {
  data() {
    return {
      perspective: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    fun_reset() {
      this.perspective = 0;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
  },
  computed: {
    //一个计算属性的getter
    boxStyle() {
      return {
        transform: `perspective(${this.perspective}px)rotateX(${this.rotateX}deg)rotateY(${this.rotateY}deg)rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
};
Vue.createApp(app).mount("#app");
