const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      _hidden: false,
      textColor: "",
    };
  },
  computed: {
    computedStyle() {
      if (this._hidden) {
        return "hidden";
      } else if (this.inputClass === "user1") {
        return "visible user1";
      } else if (this.inputClass === "user2") {
        return "visible user2";
      }
    },
  },
  methods: {
    toggleHide() {
      return (this._hidden = !this._hidden);
    },
  },
});

app.mount("#assignment");
