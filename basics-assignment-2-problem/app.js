const app = Vue.createApp({
  data() {
    return {
      userData: "",
      userData2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button clicked!");
    },
    userInput(event) {
      this.userData = event.target.value;
    },
    userInput2(event) {
      this.userData2 = event.target.value;
    },
  },
});

app.mount("#assignment");
