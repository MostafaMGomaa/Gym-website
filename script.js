const btnLogin = document.querySelector(".btnLogin");
const btnSignup = document.querySelector(".btnSignup");

btnLogin.addEventListener("click", () => {
  location.href = "login/login.html";
});
btnSignup.addEventListener("click", () => {
  location.href = "registration/registration.html";
});

// btn_login.onclick = function () {
//   console.log("Hello");
//   location.href = "/login/login.html";
// };
