let user1Render=document.getElementById("user1")
let user2Render=document.getElementsByClassName("user2")
let user3Render=document.getElementsByClassName("user3")
let comp1Render=document.getElementById("comp1")
let comp2Render=document.getElementById("comp2")
let comp3Render=document.getElementById("comp3")
let btnS=document.getElementById("btn-s");
let btnR=document.getElementById("btn-r");
let btnP=document.getElementById("btn-p");
let user;
let comp
let perem=0

function getParams(num,user){
 switch(num){
     case 1:
        start(".first-computer-choice",".first-users-choice",user,".first-result","comp1","user1")
        break;
     case 2:
        start(".second-computer-choice",".second-users-choice",user,".second-result","comp2","user2")
        break;
     case 3:
        start(".third-computer-choice",".third-users-choice",user,".third-result","comp3","user3")
        break;
    case 4:
        document.getElementsByClassName("total")[0].style.display="flex";
    default: 
 }
}
btnS.addEventListener('click',function(e){
    perem++
    user="ножницы";
    getParams(perem,user)
    
})

btnR.addEventListener('click',function(e){
    perem++
    user="камень";
    getParams(perem,user)
})
btnP.addEventListener('click',function(e){
    perem++
    user="бумага";
    getParams(perem,user)
})
    
    function start(classComp,classUser,user,res,classN,classM){

        console.log(user)
        console.log(classUser)
        console.log(classComp)
        document.querySelector(classUser).innerHTML = user;
        let computer = Math.floor(Math.random() * 3) + 1;
        let fUC=document.querySelectorAll(classUser)
        fUC.innerHTML = user;
    switch (computer) {
        case 1:
            document.querySelector(classComp).innerHTML = "ножницы";
            document.getElementById(classN).innerHTML+='<i class="fa-solid fa-hand-scissors"></i>'
            // comp1Render[0].style.display="block";
            document.getElementById(classN).style.display="block"
        break;
        case 2:
            document.querySelector(classComp).innerHTML = "бумага";
            document.getElementById(classN).innerHTML+='<i class="fa-solid fa-hand"></i>'
            document.getElementById(classN).style.display="block"
            // comp1Render[0].style.display="block";
            break;
        case 3:
            document.querySelector(classComp).innerHTML = "камень";
            document.getElementById(classN).innerHTML+='<i class="fa-solid fa-hand-back-fist"></i>'
            document.getElementById(classN).style.display="block"
            // comp1Render[0].style.display="block";
            break;
    }
    switch (user) {
        case 'ножницы':
            document.getElementById(classM).innerHTML+='<i class="fa-solid fa-hand-scissors"></i>'
            // comp1Render[0].style.display="block";
            document.getElementById(classM).style.display="block"
        break;
        case 'бумага':
            document.getElementById(classM).innerHTML+='<i class="fa-solid fa-hand"></i>'
            document.getElementById(classM).style.display="block"
            // comp1Render[0].style.display="block";
            break;
        case 'камень':
            document.getElementById(classM).innerHTML+='<i class="fa-solid fa-hand-back-fist"></i>'
            document.getElementById(classM).style.display="block"
            // comp1Render[0].style.display="block";
            break;
    }
    let comp=document.querySelector(classComp).innerHTML ;
    toCompare(user,comp,res)
}

function toCompare(user, computer,res) {
    if (user == computer) {
        document.querySelector(res).innerHTML = "ничья";
    } else if (user == "камень") {
        if (computer == "ножницы") {
            document.querySelector(res).innerHTML = "вы выиграли";
        } else {
            document.querySelector(res).innerHTML =
                "компьютер выиграл";
        }
    } else if (user === "бумага") {
        if (computer === "камень") {
            document.querySelector(res).innerHTML = "вы выиграли";
        } else {
            document.querySelector(res).innerHTML =
                "компьютер выиграл";
        }
    } else if (user === "ножницы") {
        if (computer === "бумага") {
            document.querySelector(res).innerHTML = "вы выиграли";
        } else {
            document.querySelector(res).innerHTML =
                "компьютер выиграл";
        }
    }
}


