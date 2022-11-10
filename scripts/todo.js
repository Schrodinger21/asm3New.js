"use strict";

const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

displayTodoList();
addBtn.addEventListener("click", function () {
  //Nếu inputtask = rỗng thì không nhập được
  if (inputTask.value != "") {
    const todo = new Task(inputTask.value, currentUser.username, false);
    todoArr.push(todo);
    saveToStorage("todoArr", todoArr);
    inputTask.value = "";
    displayTodoList();
  }
});
//hàm hiển thị bảng Todo List
function displayTodoList() {
  let html = "";
  for (let i = 0; i < todoArr.length; i++) {
    //kiểm tra các task có được tạo bởi currentUser không
    if (todoArr[i].owner === currentUser.username) {
      html += `
      <li data-task=${todoArr[i].task} class=${
        todoArr[i].isDone === true ? "checked" : ""
      }>
      ${todoArr[i].task} <span class="close">x</span></li>
        `;
    }
    todoList.innerHTML = html;

    checkTask();
    deleteTask();
  }
}
//hàm check task
function checkTask() {
  document.querySelectorAll("#todo-list li").forEach(function (li) {
    li.addEventListener("click", function (e) {
      if (e.target !== li.children[0]) {
        li.classList.toggle("checked");
        for (let i = 0; i < todoArr.length; i++) {
          //kiểm tra các task được tạo bởi currentUser
          if (todoArr[i].owner === currentUser.username) {
            //chọn lại đúng task đã click
            if (todoArr[i].task === li.textContent.split("x")[0].trim()) {
              todoArr[i].isDone = li.classList.contains("checked")
                ? true
                : false;
            }
            saveToStorage("todoArr", todoArr);
          }
        }
      }
    });
  });
}
// hàm xóa task
function deleteTask() {
  document.querySelectorAll("#todo-list .close").forEach(function (close) {
    close.addEventListener("click", function () {
      for (let i = 0; i < todoArr.length; i++) {
        if (todoArr[i].owner === currentUser.username) {
          if (
            // kiểm tra lại task đã click vào
            todoArr[i].task ===
            close.parentElement.textContent.split("x")[0].trim()
          ) {
            console.log("delete success");
            todoArr.splice(i, 1);
            displayTodoList();
          }
          saveToStorage("todoArr", todoArr);
        }
      }
    });
  });
}
