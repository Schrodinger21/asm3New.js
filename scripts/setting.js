"use strict";

const btnSubmit = document.getElementById("btn-submit");
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");

btnSubmit.addEventListener("click", function () {
  currentUser.pageSize = parseInt(inputPageSize.value);
  currentUser.category = inputCategory.value;
  saveToStorage("currentUser", currentUser);
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === currentUser.username) {
      userArr[i] = currentUser;
      saveToStorage("userArr", userArr);
      alert("Setting Sucessful!");
      window.location.href = "../pages/news.html";
    }
  }
  inputPageSize.value = "";
  inputCategory.value = "General";
});
