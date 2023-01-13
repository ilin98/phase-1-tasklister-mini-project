document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    handleToDo(e.target.querySelector('#new-task-description').value)
    form.reset()
  })
});

function handleToDo(todo) {
  li = document.createElement('li');
  btn = document.createElement('button');
  btn.addEventListener("click", handleDelete)
  li.textContent = `${todo} `;
  btn.textContent = 'x'
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove();
}
