// learnings:
// watchers help on observing tipically one variable. It is triggered when it change, provides current value and previous value current, previous
// computed helps when you want to compute a value based on other values. It is cached and only re-evaluated when one of its dependencies change.
// v-on: can be replaced with @ and v-bind can be replaced with :
const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(value) {
      console.log("Watcher");
      const that = this;
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
  computed: {
    computedResult() {
      if (this.result < 37) {
        return "Not there yet!";
      } else if (this.result === 37) {
        return this.result;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add1() {
      this.result = this.result + 1;
    },
    add5() {
      this.result = this.result + 5;
    },
  },
});

app.mount("#assignment");
