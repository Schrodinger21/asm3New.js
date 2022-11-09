"use strict";
const loginName = document.getElementById("input-username");
const loginPassword = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

loginBtn.addEventListener("click", function () {
  const validate = validateData();
  if (validate) {
    let temp = 0;
    for (let i = 0; i < userArr.length; i++) {
      if (
        //check user và pass
        userArr[i].username === loginName.value &&
        userArr[i].password === loginPassword.value
      ) {
        saveToStorage("currentUser", userArr[i]);
        alert("Login Succesful!");

        temp++;
        //chuyến đến trang index.html nếu đăng nhập thành công
        window.location.href = "../index.html";
      }
    }
    if (temp === 0) {
      alert("User name hoặc password không đúng!");
    }
  }
});
//Hàm kiểm tra tính hợp lệ của username và password
function validateData() {
  let check = true;
  if (loginName.value === "") {
    check = false;
    alert("Please input User Name!");
  }
  if (loginPassword.value === "") {
    check = false;
    alert("Please input Password!");
  }
  return check;
}
