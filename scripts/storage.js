"use strict";
// function getFromStorage(key) {
//   return JSON.parse(localStorage.getItem(key));
// }
// // Save data
// function saveToStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// // Lấy data userArr từ Localstorage
// const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// // convert class Instance
// const userArr = users.map((user) => parseUser(user));

// // Lấy data user active
// let userActive = getFromStorage("usderActive")
//   ? parseUser(getFromStorage("userActive"))
//   : null;

// // lấy data todoArr từ localstorage
// const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];

// // convert class instance
// const todoArr = todo.map((todo) => parseTask(todo));

// // Hàm chuyển đổi data
// function parseUser(userData) {
//   const user = new User(
//     userData.firstname,
//     userData.lastname,
//     userData.username,
//     userData.password
//   );

//   return user;
// }

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
