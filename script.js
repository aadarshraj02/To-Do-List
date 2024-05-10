const textArea = document.querySelector(".textarea");
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");
button.addEventListener("click", addTodoListItem);
function addTodoListItem(){
    
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemAll");
    const item =document.createElement('p');
    item.innerHTML = textArea.value;
    toDoDiv.appendChild(item);
    todoList.appendChild (toDoDiv)
}