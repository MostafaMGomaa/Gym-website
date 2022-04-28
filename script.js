const btnLogin = document.querySelector(".btnLogin");

btnLogin.addEventListener("click", () => {
  location.href = "login.html";

  // onclick="location.href='page2.html'"
});

// btn_login.onclick = document.location = "/login/login.html";
btn_login.onclick = function () {
  console.log("Hello");
  location.href = "/login/login.html";
};
