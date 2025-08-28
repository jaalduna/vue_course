const app = Vue.createApp({
  data() {
    return {
      aSelected: false,
      bSelected: false,
      cSelected: false,
    };
  },

  computed: {
    selectedAClass() {
      return this.aSelected ? "demo active" : "demo";
    },
  },
  methods: {
    divSelected(value) {
      console.log(value, "selected");
      if (value === "A") {
        this.aSelected = !this.aSelected;
      } else if (value === "B") {
        this.bSelected = !this.bSelected;
      } else if (value === "C") {
        this.cSelected = !this.cSelected;
      }
    },
  },
}).mount("#styling");
