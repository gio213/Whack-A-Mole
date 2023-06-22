// console.log("WARNING! In exactly five seconds something will explode");

// setTimeout(theExplosion, 5000);
// function theExplosion() {
//   console.log("BOOM!");
// }
// setTimeout(theExplosion, 5000);
// theExplosion();

// const button = document.createElement("button");
// button.textContent = "WARNING";
// button.addEventListener("click", () => {
//   setTimeout(theExplosion, 5000);
// });

// document.body.appendChild(button);

// let times = 0;
// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;

//   const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//   setTimeout(heyYou, nextCall);
// }

// heyYou();

// let interval;
// let times = 0;

// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// buttonThreeSeconds = document.createElement("button");
// buttonThreeSeconds.textContent = "say hey every 3 seconds";
// buttonThreeSeconds.addEventListener("click", () => {
//   interval = setInterval(heyYou, 3000);
// });

// buttonStop = document.createElement("button");
// buttonStop.textContent = "Stop saying hey";
// buttonStop.addEventListener("click", () => {
//   // We must first check if there is an interval
//   if (interval != undefined) {
//     clearInterval(interval);
//   }
// });

// document.body.appendChild(buttonThreeSeconds);
// document.body.appendChild(buttonStop);

// const word = "prout";

// word.split("").forEach((letter, index) => {
//   setTimeout(() => {
//     console.log(letter);
//   }, index * 1000);
//   if (setInterval) {
//     clearInterval();
//   }
// });
const circles = document.querySelectorAll(".circle");
const timeDiv = document.querySelector(".timeDiv p");
const startButton = document.querySelector(".startBtn");
const scoreTxt = document.querySelector(".scoreDiv h1");
const knoCksound = new Audio("./assets/mixkit-air-whistle-punch-2048.wav");
const select = document.querySelector("select");

scoreTxt.textContent = `Score:`;
timeDiv.textContent = "60";
let level_1 = 60;
let level_2 = 30;
const leves = [
  {
    name: "level 1",
    time: 60,
    score: 0,
  },
  {
    name: "level 2",
    time: 30,
    score: 0,
  },
  {
    name: "level 3",
    time: 15,
    score: 0,
  },
];

score = 0;
let level;
select.addEventListener("change", (e) => {
  level = e.target.value;
  console.log(level);
});

const createGame = (level) => {
  let intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * circles.length);
    circles[randomIndex].classList.toggle("red");
    level_1--;
    if (level_1 === 0) {
      console.log("game over");
      clearInterval(intervalId);
    }
    console.log(level_1);
    timeDiv.textContent = level_1;
  }, 1000);
};

startButton.addEventListener("click", () => {
  createGame();
});

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    if (e.target.classList.contains("red")) {
      score++;
      scoreTxt.textContent = `Score: ${score}`;
      e.target.classList.remove("red");
      knoCksound.play();
    }
  });
});
