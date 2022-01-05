const tasks = [];
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#submit");
const list = document.querySelector("#todos");

const handleClickAdd = () => {
  if (!input.value) return alert("Напишите задачу!");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  li.textContent = input.value;
  btn.textContent = 'X'
  li.appendChild(btn);
  list.appendChild(li);
  input.value = '';
  tasks.push(li);
  const index = tasks.length - 1;

  btn.onclick = () => handleClickRemove(index)
};

addBtn.onclick = handleClickAdd;

const handleClickRemove = (index) => {
  tasks[index].remove();
};