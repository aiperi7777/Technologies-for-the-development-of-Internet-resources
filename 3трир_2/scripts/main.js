let btnS = document.getElementById("btn-s"); // 1-scissors 2-paper 3-rock
let btnR = document.getElementById("btn-r");
let btnP = document.getElementById("btn-p");
let display = document.getElementById("display");
let mess = document.getElementById("mess")
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

btnS.addEventListener("click", function(e) {
    start(1);
});
btnP.addEventListener("click", function(e) {
    start(2);
});
btnR.addEventListener("click", function(e) {
    start(3);
});

function start(user) {
    let computer = Math.floor(Math.random() * 3) + 1;
    getRes(user, computer);
    render(user, "user1")
    render(computer, "comp1")
    mess.innerHTML += `<div style="color:black" class="mess-1">${message}</div>`
}

function render(value, id) {
    switch (value) {
        case 1:
            document.getElementById(id).innerHTML += `<div><i class="fa-solid fa-hand-scissors"></i></div>`
            break;
        case 2:
            document.getElementById(id).innerHTML += `<div><i class="fa-solid fa-hand"></i></div>`
            break;
            q
        case 3:
            document.getElementById(id).innerHTML += `<div><i class="fa-solid fa-hand-back-fist"></i></div>`
            break;
    }
}

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
                    counter(userWinCount, totalWinUser)
                    message = "Пользователь победил";
                    break;
                case i.stronger:
                    compWinCount++;
                    counter(compWinCount, totalWinComp)
                    message = "Компьютер победил";
                    break;
                case i.item:
                    message = "Ничья";
                    break;
            }
        }
    });
}