function main() {
    const optionText = document.getElementById("optionText");
    hideBtn();
    setTimeout(() => {
        optionText.textContent = 'CHOOSE AN OPTION';
        openOptionBtn();
    }, 3000);
    battleBegin();
}

function hideBtn() {
    const playAgainBtn = document.getElementById('playAgain');
    playAgainBtn.classList.add('hideBtn');

    const iconBtn = document.querySelector('.option');
    iconBtn.classList.add('hideBtn');
}

function openOptionBtn() {
    const iconBtn = document.querySelector('.option');
    iconBtn.classList.remove('hideBtn');
}

function getComputerChoice() {
    var choices = ["rock", "paper", "scissor"];
    rand_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return choices[rand_num - 1];
}



function battleBegin() {
    let playerScore =0;
    let compScore = 0;
    const optionBtn = document.querySelectorAll(".iconBtn");
    const pScore = document.getElementById("playerScore");
    const cScore = document.getElementById('compScore');
    const remark = document.getElementById("remark");
    const pImg = document.getElementById("playerImg");
    const cImg = document.getElementById("compImg");
    pScore.textContent = 0;
    cScore.textContent = 0;


    optionBtn.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const compChoice = getComputerChoice();
            if (playerChoice === "rock") {
                pImg.src = "images/1.png";
                pImg.alt = "rock";
                if (compChoice === "paper") {
                    cImg.src = "images/2.png";
                    cImg.alt = "paper";
                    compScore += 1;
                    remark.style.visibility = "hidden";
                }
                else if (compChoice === "scissor") {
                    playerScore += 1;
                    remark.style.visibility = "hidden";
                    cImg.src = "images/3.png";
                    cImg.alt = "scissor";
                }
                else {
                    cImg.src = "images/1.png";
                    cImg.alt = "rock";
                    remark.style.visibility = "visible";
                    remark.textContent = "TIE"
                }
            }

            else if (playerChoice === "paper") {
                pImg.src = "images/2.png";
                pImg.alt = "paper";
                if (compChoice === "scissor") {
                    cImg.src = "images/3.png";
                    cImg.alt = "scissor";
                    compScore += 1;
                    remark.style.visibility = "hidden";
                }
                else if (compChoice === "rock") {
                    cImg.src = "images/1.png";
                    cImg.alt = "rock";
                    playerScore += 1;
                    remark.style.visibility = "hidden";
                }
                else {
                    cImg.src = "images/2.png";
                    cImg.alt = "paper";
                    remark.style.visibility = "visible";
                    remark.textContent = "TIE"
                }
            }

            else if (playerChoice === "scissor") {
                pImg.src = "images/3.png";
                pImg.alt = "scissor";
                if (compChoice === "rock") {
                    cImg.src = "images/1.png";
                    cImg.alt = "rock";
                    compScore += 1;
                    remark.style.visibility = "hidden";
                }
                else if (compChoice === "paper") {
                    cImg.src = "images/2.png";
                    cImg.alt = "paper";
                    playerScore += 1;
                    remark.style.visibility = "hidden";
                }
                else {
                    cImg.src = "images/3.png";
                    cImg.alt = "scissor";
                    remark.style.visibility = "visible";
                    remark.textContent = "TIE"
                }
            }
            pScore.textContent = playerScore;
            cScore.textContent = compScore;
            if (playerScore == 5) {
                playerScore = 0;
                compScore = 0;
                const iconBtn = document.querySelector('.option');
                iconBtn.classList.add('hideBtn');
                startAgain("p");
            }
            if (compScore == 5) {
                playerScore = 0;
                compScore = 0;
                const iconBtn = document.querySelector('.option');
                iconBtn.classList.add('hideBtn');
                startAgain("c");
            }
        
        }); 
    });
}

function startAgain(who) {
    const playAgainBtn = document.getElementById("playAgain");
    playAgainBtn.classList.remove('hideBtn');


    const remark = document.getElementById("remark");
    remark.style.visibility = "visible";
    if (who === "p") remark.textContent = "WIN";
    else remark.textContent = "LOSE";

    const optionText = document.getElementById("optionText");
    optionText.textContent = "";

    playAgainBtn.addEventListener('click', () => {
        remark.style.visibility = "hidden";
        const optionText = document.getElementById("optionText");
        optionText.textContent = "ROCK,PAPER,SCISSOR...GO!";

        const playAgainBtn = document.getElementById('playAgain');
        playAgainBtn.classList.add('hideBtn');


        setTimeout(() => {
            optionText.textContent = 'CHOOSE AN OPTION';
            openOptionBtn();
        }, 3000);
        const pScore = document.getElementById("playerScore");
        const cScore = document.getElementById('compScore');
        pScore.textContent = "0";
        cScore.textContent = "0";

        const pImg = document.getElementById("playerImg");
        const cImg = document.getElementById("compImg");
        
        pImg.src = "images/1.png";
        pImg.alt = "rock";
        cImg.src = "images/1.png";
        cImg.alt = "rock";



    })

}


main();