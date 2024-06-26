const textArea = document.querySelector(".textarea");
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");
button.addEventListener("click", addTodoListItem);
function addTodoListItem(){
    
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("itemAll");
    const item =document.createElement('p');
    item.classList.add('item');
    if (textArea.value == "") return;
    item.innerHTML = textArea.value;
    toDoDiv.appendChild(item);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = "Delete";
    toDoDiv.appendChild(deleteButton);
    todoList.appendChild (toDoDiv);
    textArea.value = '';

}
todoList.addEventListener("click",deleteItem);
function deleteItem(e){
    const item = e.target;

    if(item.classList[0]=== 'deleteButton'){
        const parent =item.parentElement;
        parent.remove();
    }
} 