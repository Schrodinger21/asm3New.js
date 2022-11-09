"use strict";

const userArr = getFormStorage("userArr") ? getFormStorage("userArr") : [];

//hàm lấydữ liệu từ Local Storage
function getFormStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//Hàm lưu dữ liệu vào Local Storage
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
    userData.password
  );

  return user;
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
const todos = getFormStorage("todoArr") ? getFormStorage("todoArr") : [];

//Chuyển từng Object của todoArr thành class instance
const todoArr = todos.map((todo) => parseTask(todo));
// Hàm chuyển từ JS Object sang Class Instance:
function parseTask(Data) {
  const task = new Task(Data.task, Data.owner, Data.isDone);
  return task;
}
