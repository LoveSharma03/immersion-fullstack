function addTodo() {
  const input = document.getElementById('todo-input');
  const value = input.value.trim();
  if (value === '') return;
  const ul = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${value}</span>
    <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
  `;
  ul.appendChild(li);
  input.value = '';
  input.focus();
}

function deleteTodo(btn) {
  btn.parentElement.remove();
}

// Optional: Add "Enter" key support
document.getElementById('todo-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTodo();
});