let btnS = document.getElementById("btn-s");
let btnR = document.getElementById("btn-r");
let btnP = document.getElementById("btn-p");
let display = document.getElementById("display");
// 1-scissors 2-paper 3-rock
let compWinCount = 0,
  userWinCount = 0,
  totalWinUser = 0,
  totalWinComp = 0;
let message = "";
let rools = [
  { item: 1, weaker: 3, stronger: 2 },
  { item: 2, weaker: 1, stronger: 3 },
  { item: 3, weaker: 2, stronger: 1 },
];

btnS.addEventListener("click", function (e) {
  start(1);
});
btnP.addEventListener("click", function (e) {
  start(2);
});
btnR.addEventListener("click", function (e) {
  start(3);
});

function start(user) {
  let computer = Math.floor(Math.random() * 3) + 1;
  getRes(user, computer);
  console.log(message, user, computer);
  console.log("c=", compWinCount);
  console.log("u", userWinCount);
}

function render(user, comp, role) {}
function counter(count, total) {
  if (count == 3) {
    total++;
    count = 0;
  }
}
function getRes(user, comp) {
  rools.forEach((i) => {
    if (i.item === comp) {
      switch (user) {
        case i.weaker:
          userWinCount++;
          counter( userWinCount,totalWinUser)
          message = "Пользователь победил";
          break;
        case i.stronger:
          compWinCount++;
          counter(compWinCount,totalWinComp)
          message = "Компьютер победил";
          break;
        case i.item:
          message = "Ничья";
          break;
      }
    }
  });
}

// function render(choise, role) {
//   let color = role === "user" ? "red" : "blue";
//   switch (choise) {
//     case 1:
//       let div = document.createElement("div");
//       // div.classList.add="bubble"
//       div.className =
//         role == "user" ? "bubble-bottom-left" : "bubble-bottom-right";
//       div.innerHTML += `<i class="fa-solid fa-hand-scissors" style="color:${color}"></i>`;
//       display.appendChild(div);
//       break;
//     case 2:
//       let div2 = document.createElement("div");
//       // div.classList.add="bubble"
//       div2.className =
//         role == "user"
//           ? "bubble bubble-bottom-left"
//           : "bubble bubble-bottom-right";
//       div2.innerHTML += `<i class="fa-solid fa-hand" style="color:${color}"></i>`;
//       display.appendChild(div2);
//       break;
//     case 3:
//       let div3 = document.createElement("div");
//       // div.classList.add="bubble"
//       (div3.className == role) == "user"
//         ? "bubble bubble-bottom-left"
//         : "bubble bubble-bottom-right";
//       div3.innerHTML += `<i class="fa-solid fa-hand-back-fist" style="color:${color}"></i>`;
//       display.appendChild(div3);
//       break;
//   }
// }
