const addForm = document.querySelector(".add");
const taskList = document.querySelector(".todos");

// add task
const generateTemp = (todo) => {
  const html = `
        <li
          class="list-group-item d-flex justify-content-between align-items center"
        >
          ${todo}
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

  taskList.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemp(todo);
    addForm.reset();
  }
});

// delete
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
