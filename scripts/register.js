"use strict";
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputConfirmPassword = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

registerBtn.addEventListener("click", function () {
  const user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUserName.value,
    inputPassword.value,
    inputConfirmPassword.value
  );
  const validate = validateData(user);
  if (validate) {
    userArr.push(user);
    saveToStorage("userArr", userArr);
    console.log(userArr);
    alert("Successful!!!");
    window.location.href = "../pages/login.html";
  }
});
function validateData(user) {
  if (userArr) {
    for (let i = 0; i < userArr.length; i++) {
      if (userArr[i].username === user.username) {
        alert("User name must be unique!");
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
  } else if (user.username.trim() === "") {
    alert("Please input Username");
    return false;
  } else if (user.password === "" || user.password.length <= 8) {
    alert("Vui lòng nhập Password và Password phải có nhiều hơn 8 kí tự!!!");
    return false;
  } else if (user.confirmpassword === "") {
    alert("Confirm password: Không được để trống trường này!");
    return false;
  } else if (user.password !== inputConfirmPassword.value) {
    alert(
      "Dữ liệu nhập vào không đúng: Password và Confirm password phải giống nhau"
    );
    return false;
  }
}

// "use strict";

// const inputFirstname = document.getElementById("input-firstname");
// const inputLastname = document.getElementById("input-lastname");
// const inputUsername = document.getElementById("input-username");
// const inputPassword = document.getElementById("input-password");
// const inputPasswordConfirm = document.getElementById("input-password-confirm");
// const btnSubmit = document.getElementById("btn-submit");

// registerBtn.addEventListener("click", function () {
//   const user = new User(
//     inputFirstName.value,
//     inputLastName.value,
//     inputUserName.value,
//     inputPassword.value,
//     inputConfirmPassword.value
//   );
//   //Nếu account hợp lệ thì add vào local storage và thông báo
//   const validatetion = validate(user);
//   if (validatetion) {
//     userArr.push(user);
//     saveToStorage("userArr", userArr);
//     alert("Register Successful!");
//     //chuyển tới trang login.html khi đăng ký thành công
//     window.location.href = "../pages/login.html";
//   }
// });
// //check tính hợp lệ của accout được tạo
// function validate(user) {
//   let check = true;
//   if (user.firstname.trim() === "") {
//     check = false;
//     alert("please input for First Name !");
//   }
//   if (user.lastname.trim() === "") {
//     check = false;
//     alert("please input for Last Name !");
//   }
//   if (user.username.trim() === "") {
//     check = false;
//     alert("please input for User Name !");
//   }
//   if (user.password.trim() === "") {
//     check = false;
//     alert("please input for Password !");
//   }
//   if (user.confirmpassword.trim() === "") {
//     check = false;
//     alert("please input for Confirm Password!");
//   }
//   if (user.confirmpassword !== user.password) {
//     check = false;
//     alert("Is not the same as Password");
//   }
//   if (user.password.length <= 8) {
//     check = false;
//     alert("Password have longer 8 character!");
//   }
//   if (userArr) {
//     for (let i = 0; i < userArr.length; i++) {
//       if (userArr[i].username === user.username) {
//         check = false;
//         alert("User Name must be unique!");
//       }
//     }
//   }
//Cách kiểm tra username nhanh hơn
//if (user.every((item)=> item.username === user.username ? true : false )) {
// alert("User Name must be unique!");check = false; }

//   return check;
// }
