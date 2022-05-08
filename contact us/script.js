const redBtn = document.querySelector(".red");
const blueBtn = document.querySelector(".blue");
const whiteBtn = document.querySelector(".white");
const txtfield = document.querySelector(".subject-field");

const changBg = (color) => {
  txtfield.style.backgroundColor = color;
};

redBtn.addEventListener("click", () => {
  changBg("red");
});

blueBtn.addEventListener("click", () => {
  changBg("blue");
});

whiteBtn.addEventListener("click", () => {
  changBg("white");
});
