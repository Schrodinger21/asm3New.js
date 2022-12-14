"use strict";

const submitBtn = document.getElementById("btn-submit");
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");

// Event click submit
submitBtn.addEventListener("click", function () {
  // Cập nhật lại currentUser
  currentUser.pageSize = parseInt(inputPageSize.value);
  currentUser.category = inputCategory.value;
  saveToStorage("currentUser", currentUser);
  // cập nhật lại mảng userArr
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === currentUser.username) {
      userArr[i] = currentUser;
      saveToStorage("userArr", userArr);
      alert("Setting Sucessful!");
      // chuyển về trang news
      window.location.href = "../pages/news.html";
    }
  }
  // Reset lại form nhập
  inputPageSize.value = "";
  inputCategory.value = "General";
});
