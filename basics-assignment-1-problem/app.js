const app = Vue.createApp({
  data() {
    return {
      name: "Joaquín Aldunate V.",
      age: "39",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  },
  methods: {
    randNumber() {
      return Math.floor(Math.random() * 6) + 1;
    },
    agePlusFive() {
      return Number(this.age) + 5;
    },
  },
});

app.mount("#assignment");
