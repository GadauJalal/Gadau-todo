const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const todoItem = todoInput.value.trim();
  if (todoItem !== '') {
    const todoListItem = document.createElement('li');
    todoListItem.textContent = todoItem;
    todoList.appendChild(todoListItem);
    todoInput.value = '';
  }
});

function name(params) {
  
}