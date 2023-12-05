function addTask() {
  let taskInput = document.getElementById("input");
  let ul = document.getElementById("ul");

  let taskText = taskInput.value;

  let li = document.createElement("p");
  li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;

  ul.appendChild(li);
  taskInput.value = "";
}

function editTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector("span").innerText;
  const newText = prompt("Edit task:", taskText);

  if (newText !== null) {
    li.querySelector("span").innerText = newText;
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}
