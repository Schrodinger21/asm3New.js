"use strict";

const userArr = getFormStorage("userArr") ? getFormStorage("userArr") : [];
const todos = getFormStorage("todoArr") ? getFormStorage("todoArr") : [];

//lấydữ liệu từ Local Storage
function getFormStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//Lưu dữ liệu vào Local Storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//Xác định user đang đăng nhập
let currentUser = getFormStorage("currentUser")
  ? parseUser(getFormStorage("currentUser"))
  : null;

// Hàm chuyển từ JS Object sang Class Instance:
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastnName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );

  return user;
}

//Chuyển từng Object của todoArr thành class instance
const todoArr = todos.map((todo) => parseTask(todo));
// Hàm chuyển từ JS Object sang Class Instance:
function parseTask(Data) {
  const task = new Task(Data.task, Data.owner, Data.isDone);
  return task;
}
