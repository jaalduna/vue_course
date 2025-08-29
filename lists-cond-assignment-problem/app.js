const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      showTasks: true,
    };
  },
  computed: {
    hideButtonContent() {
      if (this.showTasks) {
        return "Hide Tasks";
      } else {
        return "Show Tasks";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleShow() {
      this.showTasks = !this.showTasks;
    },
  },
}).mount("#assignment");
