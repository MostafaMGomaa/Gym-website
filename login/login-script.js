"use strict";
const btnLoginSubmit = document.querySelector(".login_submit");
const btnSingupSubmit = document.querySelector(".sign_up_submit");

const Loginform = document.querySelector(".login_form");
const Signupform = document.querySelector(".sign_up_form");
const linkCreateEmail = document.querySelector(".login_create_one");

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

btnLoginSubmit.addEventListener("click", () => {
  alert("Thank you for subscribing");
});

linkCreateEmail.addEventListener("click", showSignup);
