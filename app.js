const addForm = document.querySelector(".add");
const taskList = document.querySelector(".todos");

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
  generateTemp(todo);
  addForm.add.value = "";
});
