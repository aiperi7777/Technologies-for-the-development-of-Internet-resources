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

document.getElementById("btn-s").addEventListener("click", function(e) {
    start(1);
});
document.getElementById("btn-r").addEventListener("click", function(e) {
    start(2);
});
document.getElementById("btn-p").addEventListener("click", function(e) {
    start(3);
});

function start(user) {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let computer = Math.floor(Math.random() * 3) + 1;
    getRes(user, computer);
    render(user, "user1", color)
    render(computer, "comp1", color)
    document.getElementById("mess").innerHTML += `<div style="color:${color}" class="mess-1">${message}</div>`
}

function render(value, id, color) {
    switch (value) {
        case 1:
            document.getElementById(id).innerHTML += `<div><i style="color:${color}" class="fa-solid fa-hand-scissors"></i></div>`
            break;
        case 2:
            document.getElementById(id).innerHTML += `<div><i style="color:${color}" class="fa-solid fa-hand"></i></div>`
            break;
        case 3:
            document.getElementById(id).innerHTML += `<div><i style="color:${color}" class="fa-solid fa-hand-back-fist"></i></div>`
            break;
    }
}

function counter(count, total) {
    if (count > 3) total = Math.floor(count / 3)
    return total
}

function getRes(user, comp) {
    rools.forEach((i) => {
        if (i.item === comp) {
            switch (user) {
                case i.weaker:
                    userWinCount++;
                    totalWinUser = counter(userWinCount, totalWinUser)
                    document.getElementById("user-res").innerText = totalWinUser
                    message = "Пользователь победил";
                    break;
                case i.stronger:
                    compWinCount++;
                    totalWinComp = counter(compWinCount, totalWinComp)
                    document.getElementById("comp-res").innerText = totalWinComp
                    message = "Компьютер победил";
                    break;
                case i.item:
                    message = "Ничья";
                    break;
            }
        }
    });
}