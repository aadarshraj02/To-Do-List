const textArea = document.querySelector(".textarea");
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");
button.addEventListener("click", addTodoListItem);
function addTodoListItem(){
    
    const toDoDiv = document.createElement("div");
    const item =document.createElement('p');
    item.innerHTML = textArea.value;
    toDoDiv.appendChild(item);
}