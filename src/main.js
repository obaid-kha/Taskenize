import "./index.css";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("[data-user-input]");
const taskEl = document.getElementById(".form-control");

//state
const state = [];

function renderTasks(){
    state.forEach((task) => {
        const label = document.createElement("label");
        label.classList.addEventListener("label", "cursor-pointer");
        label.innerHTML = `
        <span class="label-text">${task.text}</span>
        <input type="checkbox" class="checkbox checkbox-primary" />
        `;
        taskList.appendChild(label);
      });
    }

//on form submit (new task)
formEl.addEventListener("submit", function (event) {
  event.preventDefault(); //avoid refresh

  if(!inputEl.value) return; // dont run on empty

  state.push({
    id: crypto.randomUUID(),
    text: inputEl.value,
    isCompleted: false,
  });

  renderTasks();
  inputEl.value = "";// clear the input value
});
