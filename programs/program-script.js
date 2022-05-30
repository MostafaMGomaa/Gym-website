const btnLogin = document.querySelector(".btnLogin");
const btnSignup = document.querySelector(".btnSignup");
const btnPrograms = document.querySelector(".programsBtn");
const divPrograms = document.querySelector(".programs");
const divTable = document.querySelector(".table");
const dropPrograms = document.querySelector(".dropPrograms");
const dropProgOne = document.querySelector(".dropProgOne");
const dropProgTwo = document.querySelector(".dropProgTwo");
const dropProgThree = document.querySelector(".dropProgThree");
const dropSessions = document.querySelector(".dropSessions");
const progOne = document.querySelector(".progOne");
const progTwo = document.querySelector(".progTwo");
const progThree = document.querySelector(".progThree");
const h1 = document.querySelector(".display-2");
const programs = document.querySelector(".programs");
const btnClose = document.querySelector(".btn-close");
const popup = document.querySelector(".popup");

// Check if wanted div hide or not then hide the other divs
const hide = (fdiv, sdiv) => {
  if (fdiv.classList.contains("hidden")) fdiv.classList.remove("hidden");
  sdiv.classList.add("hidden");
};

// Mark selected div
const mark = (fDiv, sDiv, tDiv) => {
  if (sDiv.classList.contains("marked") || tDiv.classList.contains("marked")) {
    sDiv.classList.remove("marked");
    tDiv.classList.remove("marked");
  }
  fDiv.classList.add("marked");
};

btnLogin.addEventListener("click", () => {
  location.href = "../login/login.html";
});

btnSignup.addEventListener("click", () => {
  location.href = "../registration/registration.html";
});

dropProgOne.addEventListener("click", () => {
  mark(progOne, progTwo, progThree);
});

dropProgTwo.addEventListener("click", () => {
  mark(progTwo, progThree, progOne);
});

dropProgThree.addEventListener("click", () => {
  mark(progThree, progTwo, progOne);
});

dropPrograms.addEventListener("click", () => {
  h1.innerHTML = "Memberships";
  hide(divPrograms, divTable);
  progOne.classList.remove("marked");
  progTwo.classList.remove("marked");
  progThree.classList.remove("marked");
});

dropSessions.addEventListener("click", () => {
  h1.innerHTML = "Sessions Table";
  hide(divTable, divPrograms);
});

if (btnClose) {
  btnClose.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
}
