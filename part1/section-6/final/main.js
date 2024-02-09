// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]
const app = {
  data() {
    return {
      frontArr: [],
      curTodo: "",
    };
  },
  methods: {
    fun_addFrontArr() {
      if (!this.curTodo.trim().length) {
        alert("The input is empty!");
        return;
      }
      this.frontArr.push(this.curTodo);
      this.curTodo = ''
    },
    deleteFrontArrEle(index) {
      this.frontArr.splice(index, 1);
    },
  },
};
Vue.createApp(app).mount("#app");
