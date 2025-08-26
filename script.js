// Letter Counter
function countLength() {
  var text = document.getElementById("textInput").value;
  var length = text.length;
  console.log(length);
  document.getElementById("lengthOutput").innerText = length;
}

// Click Counter
var count = 0;

function increase() {
  count++;
  document.getElementById("clickOutput").innerText = count;
}

function decrease() {
  if(count > 0) {
    count--;
    document.getElementById("clickOutput").innerText = count;
  }
}

// Swap Text
function swapText() {
  var first = document.getElementById("textOne");
  var second = document.getElementById("textTwo");

  var temp = first.value;
  first.value = second.value;
  second.value = temp;
}

// To-Do List 
var tasks = [];

function renderList() {
  var ul = document.getElementById("todoList");
  ul.innerHTML = "";
  for(var i=0; i<tasks.length; i++) {
    ul.innerHTML += '<li>' +
      '<span id="task-'+i+'">' + tasks[i] + '</span> ' +
      '<button onclick="editTask('+i+')">Edit</button>' +
      '<button onclick="deleteTask('+i+')">Delete</button>' +
      '</li>';
  }
}

function addTask() {
  var input = document.getElementById("todoInput");
  var task = input.value.trim();
  if(task === "") {
    alert("Please enter a task.");
    return;
  }
  tasks.push(task);
  renderList();
  input.value = "";
}

function clearTasks() {
  tasks = [];
  renderList();
}

function deleteTask(idx) {
  tasks.splice(idx, 1);
  renderList();
}

function editTask(idx) {
  var newTask = prompt("Edit your task:", tasks[idx]);
  if(newTask !== null && newTask.trim() !== "") {
    tasks[idx] = newTask.trim();
    renderList();
  }
}
