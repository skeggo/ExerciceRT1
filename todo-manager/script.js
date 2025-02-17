const todoNameInput = document.getElementById('todoName');
const todoContentInput = document.getElementById('todoContent');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');


function addTodo(name, content) {
  if (!name || !content) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  
  const li = document.createElement('li');
  li.innerHTML = `<span><strong>${name}:</strong> ${content}</span>`;

  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Supprimer";
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function () {
    li.remove();
  };

  
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  
  todoNameInput.value = '';
  todoContentInput.value = '';
}


addTodoBtn.addEventListener('click', function () {
  addTodo(todoNameInput.value.trim(), todoContentInput.value.trim());
});
