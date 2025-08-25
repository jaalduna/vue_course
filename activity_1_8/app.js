Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goal = this.enteredValue; // Assign the entered value to the goal property
      this.goals.push(this.goal);
      this.enteredValue = ""; // Clear the input field after adding the goal
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");
//
// function addGoal() {
//   const inputValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = inputValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = ""; // Clear the input field after adding the goal
// }
// buttonEl.addEventListener("click", addGoal);
