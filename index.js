const text = document.getElementById("text");
const addNote = document.getElementById("add-note");
const saveTaskButton = document.getElementById("save-todo");
const saveInd = document.getElementById("saveindex");
const noteList = document.getElementById("noteList");

let todoArray = [];

addNote.addEventListener("click", (e) => {
  if (text.value == "") {
    alert("Please enter the valid value");
    return;
  }
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "Add List";
  todoArray.forEach((list, index) => {
    htmlCode += `<tr>
    <td>${list}</td>
    <td><button onclick='edit(${index})'><i class="fa-regular fa-pen-to-square"></i></button>
    <td><button onclick='deleteTodo(${index})'><i class="fa-sharp fa-solid fa-trash"></i></button>
</tr>`;
  });
  noteList.innerHTML = htmlCode;
}

function deleteTodo(index) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}

function edit(index) {
  console.log(saveInd.value);
  saveInd.value = index;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  text.value = todoArray[index];
  addNote.style.display = "none";
  saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  console.log(id);
  let id = saveInd.value;
  todoArray[id] = text.value;
  // addNote.style.display = "block";
  //  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

window.onload = () => {
  displayTodo();
};
