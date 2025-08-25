//v-once
//v-on:click.
//v-on:keydown
//v-on:keydown.enter , or other specific keys as enter, tab, delete, esc, space, up, down, left, right
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      increment: 5,
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
    setName(event) {
      //to use event call setName without ()
      this.name = event.target.value;
    },
  },
});

app.mount("#events");
