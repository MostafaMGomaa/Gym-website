"use strict";
const btnLoginSubmit = document.querySelector(".login_submit");
const btnSingupSubmit = document.querySelector(".sign_up_submit");
const Loginform = document.querySelector(".login_form");
const Signupform = document.querySelector(".sign_up_form");
const linkCreateEmail = document.querySelector(".login_create_one");
const linkLogin = document.querySelector(".login_link");

const LoginPassword = document.querySelector(".login_password");
const signupPassword = document.querySelector(".sign_up_password");
const passwordStrenth = document.querySelector(".password_strength");
const passwordStrenthMsg = document.querySelector(".password_strength_msg");

const calcStrength = (pass, p, span) => {
  if (pass.value.length > 0) {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }

  if (pass.value.length < 4) {
    span.innerHTML = "week";
    pass.style.borderColor = "red";
    p.style.color = "red";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    span.innerHTML = "meduim";
    pass.style.borderColor = "yellow";
    p.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    span.innerHTML = "strong";
    pass.style.borderColor = "green";
    p.style.color = "green";
  }
};

// login form events
btnLoginSubmit.addEventListener("click", () => {
  alert("Successfully login");
});

// Password strength
LoginPassword.addEventListener("input", () => {
  calcStrength(LoginPassword, passwordStrenth, passwordStrenthMsg);
});
