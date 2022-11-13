"use strict";

class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
    pageSize,
    category
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.pageSize = pageSize;
    this.category = category;
  }
}

class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
