const clock = document.querySelector(".clock");
const fw_bold = document.querySelector(".fw-bold");

const audio = new Audio();
audio.src = "audio/click.mp3";

const showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  // now time e.g 6 pm we wanna show like this
  // 06 05 30

  // hours 12 base
  hours %= 12;
  // add 0 if h < 12 else add it
  hours = hours < 12 ? "0" + hours : hours;
  minutes = minutes < 12 ? "0" + minutes : minutes;
  seconds = seconds < 12 ? "0" + seconds : seconds;

  let time = hours + " " + " " + " " + minutes + " " + seconds + " " + ampm;
  clock.innerHTML = time;
  setTimeout(showTime, 1000);
};

showTime();
function play() {
  audio.play();
}

fw_bold.addEventListener("click", () => {
  audio.play();
});

window.onload = function () {
  document.getElementById("my_audio").play();
};
