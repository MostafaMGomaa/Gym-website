"use strict";
const btnLoginSubmit = document.querySelector(".login_submit");
const btnSingupSubmit = document.querySelector(".sign_up_submit");
const Loginform = document.querySelector(".login_form");
const Signupform = document.querySelector(".sign_up_form");
const linkCreateEmail = document.querySelector(".login_create_one");
const linkLogin = document.querySelector(".login_link");

const showForm = (formName, hiddenForm) => {
  const form1 = document.querySelector(`.${formName}`);
  const form2 = document.querySelector(`.${hiddenForm}`);

  // Check if form is acually hidden or not
  if (form1.classList.contains("hidden")) {
    form1.classList.remove("hidden");
    form2.classList.add("hidden");
  } else {
    form2.classList.remove("hidden");
    form1.classList.add("hidden");
  }
};

function showSignup() {
  showForm("sign_up_form", "login_form");
}
function showLogin() {
  showForm("login_form", "sign_up_form");
}

// login form events
btnLoginSubmit.addEventListener("click", () => {
  alert("Successfully login");
});

linkCreateEmail.addEventListener("click", showSignup);

// signup form events
btnSingupSubmit.addEventListener("click", () => {
  alert("Successfully signin");
});

linkLogin.addEventListener("click", showLogin);
