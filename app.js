let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["purple", "pink", "brown", "tomato"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started == true;

        levelup();
    }
});



function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}


function usersFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // Random button choice
    let randIdx = Math.floor(Math.random() * 4);
    let randColour = btns[randIdx];
    let randBtn = document.querySelector(`.${randColour}`);
    gameSeq.push(randColour);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("current level: ",level);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score ${level} Press any key to start!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    usersFlash(btn);

    userColour = btn.getAttribute("id");
    userSeq.push(userColour);
    // console.log(userColour) we used this to test whether it is working or not
    checkAns(userSeq.length - 1);
    // btnFalsh(btn); 

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
