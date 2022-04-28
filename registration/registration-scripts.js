const btnSingupSubmit = document.querySelector(".sign_up_submit");
const Signupform = document.querySelector(".sign_up_form");
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

// signup form events
btnSingupSubmit.addEventListener("click", () => {
  alert("Successfully signin");
});

signupPassword.addEventListener("input", () => {
  calcStrength(signupPassword, passwordStrenth, passwordStrenthMsg);
});
