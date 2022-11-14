"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const logoutBtn = document.getElementById("btn-logout");
const message = document.getElementById("welcome-message");

homeDisplay();
function homeDisplay() {
  if (currentUser) {
    // ẩn nút login
    loginModal.style.display = "none";
    // hiển thị lời chào
    mainContent.style.display = "block";
    message.textContent = `welcome ${currentUser.firstName}`;
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}
//Hàm logout
logoutBtn.addEventListener("click", function () {
  if (confirm("Are you sure to Logout?")) {
    currentUser = null;
    saveToStorage("currentUser", currentUser);
    homeDisplay();
  }
});
