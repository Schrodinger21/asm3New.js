"use strict";
const loginName = document.getElementById("input-username");
const loginPassword = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

// Event click Login
loginBtn.addEventListener("click", function () {
  const validate = validateData();
  if (validate) {
    for (let i = 0; i < userArr.length; i++) {
      if (
        //check user và pass
        userArr[i].username === loginName.value &&
        userArr[i].password === loginPassword.value
      ) {
        // lưu thông tin người dùng đang hoạt động trên trang
        saveToStorage("currentUser", userArr[i]);
        alert("Login Succesful!");

        //chuyến đến trang index.html nếu đăng nhập thành công
        window.location.href = "../index.html";
      }
      if (
        userArr[i].username !== loginName.value &&
        userArr[i].password !== loginPassword.value
      ) {
        alert("User name hoặc password không đúng!");
      }
    }
  }
});
//Hàm kiểm tra tính hợp lệ của username và password

function validateData() {
  if (loginName.value === "") {
    alert("Please input User Name!");
    return false;
  } else if (loginPassword.value === "") {
    alert("Please input Password!");
    return false;
  }
  return true;
}
