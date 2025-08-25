const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const inputValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = inputValue;
  listEl.appendChild(listItemEl);
  inputEl.value = ""; // Clear the input field after adding the goal
}
buttonEl.addEventListener("click", addGoal);
