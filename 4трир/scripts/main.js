let min = prompt("установите время,чтобы начать тестирование");
let ans1 = document.querySelectorAll("#flexRadioDefault1");
let ans2 = document.querySelectorAll("#ans2");
let ans3 = document.getElementById("3ans");
let ans4 = document.querySelectorAll("#flexRadioDefault4");
let ans5 = document.querySelectorAll("#flexRadioDefault5");
let ans6 = document.getElementById("6ans");
let ans7 = document.querySelectorAll("#flexRadioDefault7");
let ans8 = document.getElementById("8ans");
let ans9 = document.getElementById("9ans");
let ans10 = document.getElementById("10ans");
let mytbody = document.getElementById("mytbody");
let total = document.getElementById("total");
let table = document.getElementById("mytable");
let answers = [
    "Постоянная Хабла",
    "Линия вокруг которой вращается небесная сфера называется ось мираМежзвездный пространство-заполнен пылью и газом",
    "Рябь на ткани пространства-времени",
    "Модель Лямбда-CDM",
    "Белый карлик",
    "Жорж Леметр",
    "Галактика Андромеда",
    "1998",
    "стрелец  а",
    "Горизонт событий",
];
let results = [];
let initialTime = Date.now();
let formatted;
const intervalId = setInterval(checkTime, 100);


function checkTime() {
    let timeDifference = Date.now() - initialTime;
    formatted = convertTime(timeDifference);
    document.getElementById("timer-res").innerHTML = formatted;
    if (formatted == `${min}:0`) {
        clearInterval(intervalId);
        getResults();
        return;
    } else {
        document.getElementById("time").innerHTML = formatted;
    }
}

function convertTime(miliseconds) {
    let totalSeconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    return minutes + ":" + seconds;
}

function getResults() {
    clearInterval(intervalId);
    results.push(convertData(getValueFromRadio(ans1)[0]));
    results.push(convertData(getValueFromRadio(ans2).join("")));
    results.push(convertData(ans3.options[ans3.selectedIndex].value));
    results.push(convertData(getValueFromRadio(ans4)[0]));
    results.push(convertData(getValueFromRadio(ans5)[0]));
    results.push(convertData(ans6.options[ans6.selectedIndex].value));
    results.push(convertData(getValueFromRadio(ans7)[0]));
    results.push(convertData(ans8.value.toLowerCase()));
    results.push(convertData(ans9.value.toLowerCase()));
    results.push(convertData(ans10.options[ans10.selectedIndex].value));

    answers.forEach((it, i) => {
        total.style.display = "none";
        table.style.display = "block";
        console.log(it, i, results[i]);
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = i + 1;
        let td2 = document.createElement("td");
        td2.innerHTML = it;
        let td3 = document.createElement("td");
        td3.innerHTML = results[i];
        let td4 = document.createElement("td");
        td4.innerHTML = results[i] == it ? "Верно" : "Не верно";
        td4.style.backgroundColor =
            results[i] == it ? "rgba(0, 255, 13, 0.267)" : "rgba(255, 0, 0, 0.267)";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        mytbody.appendChild(tr);
    });
}

function getValueFromRadio(id) {
    let answerRadio = Array.prototype.slice.call(id);
    let first = Array.prototype.slice
        .call(answerRadio)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    return first;
}

function convertData(data) {
    if (
        typeof data === "undefined" ||
        data == "Выберите один ответ" ||
        data == ""
    ) {
        return "Не заполнены поля!!!";
    }
    return data;
}