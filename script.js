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
function addTask() {
  var input = document.getElementById("todoInput");
  var task = input.value.trim();

  if(task === "") {
    alert("Please enter a task.");
    return;
  }

  var ul = document.getElementById("todoList");
  var li = document.createElement("li");
  li.textContent = task;
  ul.appendChild(li);

  input.value = "";
}
