const letsatsi = document.getElementById("days");
const hora = document.getElementById("hours");
const mitsutsu = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let fonti = 0;
let increament = 1;

const timer = setInterval(() => {
  letsatsi.innerHTML = new Date().getDate();
  hora.innerHTML = new Date().getHours();
  mitsutsu.innerHTML = new Date().getMinutes();
  seconds.innerText = new Date().getSeconds();

  const secs = new Date().getSeconds();
  const mins = new Date().getMinutes();
  const hous = new Date().getHours();

  const percent = (secs / 60) * 100;
  fonti += increament;
  seconds.style.fontSize = fonti + "%";

  const masec = (hous / 24) * 100;

  const minPerc = (mins / 60) * 100;
  mitsutsu.style.fontSize = fonti + "%";

  if (secs === 59) {
    mitsutsu.style.fontSize = "0rem";
  } else {
    mitsutsu.style.fontSize = "5rem";
  }

  if (fonti === 1 || fonti === 0) {
    increament *= -1;
  }

  if (increament === 1) {
    seconds.style.fontSize = "5rem";
  } else {
    seconds.style.fontSize = "0";
  }

  console.log(seconds);
}, 1000);
