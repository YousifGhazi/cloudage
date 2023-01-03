// ======== main-title =======
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 500) {
      if (
        document.querySelector(`#${section.id} .container h2.main-title`)
      ) {
        let mainTitle = document.querySelector(
          `#${section.id} .container h2.main-title`
        );
        mainTitle.classList.add("ac");
      }
    }
  });
});

// ======== header =======

let mega = document.querySelector(".mega");
let megaMenu = document.querySelector(".mega-menu");

mega.addEventListener("mouseenter", () => megaMenu.classList.add("ac"));

mega.addEventListener("mouseleave", () => megaMenu.classList.remove("ac"));

mega.addEventListener("click", () => megaMenu.classList.toggle("ac"));

// ======== services =======

let number = document.querySelectorAll(".number > p");
let servicesCards = document.querySelectorAll(".services-cards .card");
let counter = 1;

for (let i = 0; i < servicesCards.length; i++) {
  number[i].innerText = counterCheck(counter);
  counter++;
}

function counterCheck(counter) {
  return counter <= 9 ? `0${counter}` : `${counter}`;
}
// ======== our-skills =======

let ourSkills = document.querySelector("#our-skills");
let progressBars = document.querySelectorAll(".progress > span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkills.offsetTop - 350) {
    progressBars.forEach((bar) => {
      bar.style.width = bar.dataset.prog;
    });
  }
});

// ======== events =======

let days = document.querySelector(".days > span");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let eventTime = new Date("Mar 31,2023 23:59:59").getTime();

function updateTime() {
  let now = new Date().getTime();
  let dateDiff = eventTime - now;

  let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hour = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  days.innerText = day;
  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
}

setInterval(updateTime, 1000);

// ======== Stats =======
let stats = document.querySelector("#stats");
let statsValue = document.querySelectorAll(
  "#stats .container .card .value"
);
let used = false;

function startCount(el) {
  let value = el.dataset.val;
  let count = setInterval(() => {
    el.innerText++;
    if (el.innerText === value) {
      clearInterval(count);
    }
  }, 2000 / value);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 300) {
    if (!used) {
      statsValue.forEach((el) => startCount(el));
      used = true;
    }
  }
});
