"use strict";
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputConfirmPassword = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

// Event click registerBtn.
registerBtn.addEventListener("click", function () {
  const user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value,
    inputConfirmPassword.value
  );

  // check validate.
  function validateData(user) {
    if (userArr) {
      for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].userName === user.userName) {
          alert("User name đã được sử dụng.");
          return false;
        }
      }
    }
    if (user.firstName.trim() === "") {
      alert("First name: không được để trống trường này!");
      return false;
    } else if (user.lastName.trim() === "") {
      alert("Last name: không được để trống trường này!");
      return false;
    } else if (user.userName.trim() === "") {
      alert("Please input Username");
      return false;
    } else if (user.password === "" || user.password.length <= 8) {
      alert("Vui lòng nhập Password và Password phải có nhiều hơn 8 kí tự!!!");
      return false;
    } else if (user.confirmPassword === "") {
      alert("Confirm password: Không được để trống trường này!");
      return false;
    } else if (user.password !== inputConfirmPassword.value) {
      alert(
        "Dữ liệu nhập vào không đúng: Password và Confirm password phải giống nhau."
      );
      return false;
    }
    return true;
  }
});
const validate = validateData(user);
if (validate) {
  userArr.push(user);
  saveToStorage("userArr", userArr);
  console.log(userArr);
  alert("Successful!!!");
  // Chuyển tới trang login.html khi đăng ký thành công.
  window.location.href = "../pages/login.html";
}
