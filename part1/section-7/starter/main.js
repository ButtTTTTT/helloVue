// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]

const app = {
  data() {
    return {
      todoArr: [
        "Vue",
        "React",
        "Nuxt",
        "NextJS",
        "Node",
        "NestJS",
        "React Native",
        "Electron",
        "Rust",
      ],
      curTodo: "",
    };
  },

  methods: {
    addTodo() {
      if (!this.curTodo.trim().length) {
        alert("The input is empty");
        return;
      }

      this.todoArr.push(this.curTodo);
      this.curTodo = "";
    },

    removeTodo(removeTodo) {
      this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
    },
  },
};

Vue.createApp(app).mount("#app");
