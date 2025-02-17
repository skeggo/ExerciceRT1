

const todoNameInput    = document.getElementById('todoName');
const todoContentInput = document.getElementById('todoContent');
const addTodoBtn       = document.getElementById('addTodoBtn');
const todoList         = document.getElementById('todoList');


function addTodo(name, content) {
  const li = document.createElement('li');
  li.textContent = `${name} : ${content}`;
  todoList.appendChild(li);
}


addTodoBtn.addEventListener('click', function() {
  const nameValue    = todoNameInput.value.trim();
  const contentValue = todoContentInput.value.trim();

  if (nameValue !== '' && contentValue !== '') {
    addTodo(nameValue, contentValue);
    todoNameInput.value = '';
    todoContentInput.value = '';
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});
