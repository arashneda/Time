const HourEl = document.querySelector(".Hour");
const MinutesEl = document.querySelector(".Minutes");
const SecondEl = document.querySelector(".Second");
const mounthEl = document.querySelector(".mounth");
const dayNumEl = document.querySelector(".day");

setInterval(updateTime, 1000);

function updateTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  //
  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  HourEl.innerHTML = h;
  MinutesEl.innerHTML = m;
  SecondEl.innerHTML = s;
  mounthEl.innerText =
    d.getDate() +
    " " +
    d.toLocaleString("en", {
      month: "long",
    });

  dayNumEl.innerText = d.toLocaleString("en", {
    weekday: "long",
  });
}
