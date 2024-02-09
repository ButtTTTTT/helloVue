// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]

const app = {
  data() {
    return {
      todoArr: [
        { item: "Vue", isComplete: false, completeStatus: "Uncomplete" },
        { item: "React", isComplete: false, completeStatus: "Uncomplete" },
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
      this.todoArr.push({
        item: this.curTodo,
        isComplete: false,
        completeStatus: "Uncomplete",
      });
    },

    removeTodo(removeTodo) {
      this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
    },
    completeTodo(todo) {
      if (!todo.isComplete) {
        todo.isComplete = true;
        todo.completeStatus = "Completed";
      } else {
        todo.isComplete = false;
        todo.completeStatus = "UnComplete";
      }
    },
  },
};

Vue.createApp(app).mount("#app");
