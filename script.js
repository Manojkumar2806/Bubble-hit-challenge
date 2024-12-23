let bubbles = document.getElementById("bubbles");
let hitnumber = document.getElementById("HIT");
let timer = document.getElementById("Timer");
let scores = document.getElementById("score");
let highest_Score = document.getElementById("highest");



let num = 0;
let score = 0;
let highest = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
highest_Score.textContent = highest;

function newHIt() {
    num = Math.floor(Math.random() * 10);
    hitnumber.textContent = num;
}
newHIt();
let unique;
let c = 60;



function timing() {
    unique = setInterval(() => {
        c--;
        timer.textContent = c;
        if (c === 0) {
            clearInterval(unique);
            document.querySelector("#bubbles").innerHTML = `
                  <div class="result">
                       <h1>Game Over</h1>
                       <h4>Your score is <h2 style="color:skyblue; font-weight:bold; margin:20px">${score}</h2></h4>
                       <button class="btn btn-danger" id="restarts">Restart</button>
                  <div>
            `;
            document.querySelector("#restarts").addEventListener("click", RestartGame);
        }

    }, 1000);

}
timing();

function RestartGame() {
    score = 0;
    c = 60;
    scores.textContent = score;
    timer.textContent = c;
    timing();
    createBubbles();
}





function createBubbles() {
    let a = "";
    for (let i = 0; i <= 140; i++) {
        let random = Math.floor(Math.random() * 10);
        a += ` <button class="btn btn-secondary buttons">${random}</button> `;
    }
    document.querySelector("#bubbles").innerHTML = a;
}
createBubbles();

function increaseScore() {
    score += 10;
    scores.textContent = score;
}

function highestScore() {
    if (highest < score) {
        highest = score;
        localStorage.setItem("score", highest);
        highest_Score.textContent = highest;
    }
}

document.querySelector("#bubbles").addEventListener('click', (e) => {
    if (parseInt(e.target.textContent) === num) {
        increaseScore();
        newHIt();
        createBubbles();
        highestScore();
    }

})