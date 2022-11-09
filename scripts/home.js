"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const logoutBtn = document.getElementById("btn-logout");
const message = document.getElementById("welcome-message");
homeDisplay();
function homeDisplay() {
  if (currentUser) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";
    message.textContent = `welcome ${currentUser.firstName}`;
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}
//Hàm log out
logoutBtn.addEventListener("click", function () {
  const logout = confirm("Are you sure to Logout?");
  if (logout) {
    // localStorage.removeItem("currentUser");
    currentUser = null;
    saveToStorage("currentUser", currentUser);
    homeDisplay();
    console.log("đã logout");
  }
});
