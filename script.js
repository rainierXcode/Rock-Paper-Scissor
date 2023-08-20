function getComputerChoice() {
    var choices = ["rock", "paper", "scissor"];
    rand_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return choices[rand_num - 1];
}

function battleBegin(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
            return "Tie!";
        }
        else if (computerSelection == "paper") {
            return "You Lose! Paper Beat Rock";
        }
        else if (computerSelection == "scissor") {
            return "You Win! Rock Beat Scissors";
        }
    }

    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper") {
            return "Tie!";
        }
        else if (computerSelection == "scissor") {
            return "You Lose! Scissor Beat Paper";
        }
        else if (computerSelection == "rock") {
            return "You Win! Paper Beat Rock";
        }
    }

    else if (playerSelection.toLowerCase() == "scissor") {
        if (computerSelection == "scissor") {
            return "Tie!";
        }
        else if (computerSelection == "rock") {
            return "You Lose! Rock Beat Scissor";
        }
        else if (computerSelection == "paper") {
            return "You Win! Scissor Beat Paper";
        }
    }

}

function start() {
    const startButton = document.querySelector('#start-button');
    const buttonUnclickable = document.querySelector('.button-unclickable');
    startButton.addEventListener('click', () => {
        startButton.remove();

        const buttonsUnclickable = document.querySelectorAll('.button-unclickable');
        buttonsUnclickable.forEach(button => {
            button.classList.remove('button-unclickable');
        });


        const score = document.createElement('div');
        score.className = 'score';

        const pScore = document.createElement('div');
        pScore.id = 'pscore';
        const cScore = document.createElement('div');
        cScore.id = 'cscore';
        const twoDot = document.createElement('div');
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        twoDot.textContent = ':';
        score.appendChild(pScore);
        score.appendChild(twoDot);
        score.appendChild(cScore);
        parentContainer.appendChild(score);

        const remark = document.createElement('div');
        remark.id = 'remark';
        parentContainer.appendChild(remark);


    });

}

const buttons = document.querySelectorAll('.button');
const parentContainer = document.querySelector('.container');
playerScore = 0;
computerScore = 0;

function startAgain() {
    const startButton = document.createElement('div');
    startButton.id = 'start-button';
    const btn = document.createElement('button');
    btn.textContent = "Start";
    startButton.appendChild(btn);
    parentContainer.appendChild(startButton);

    start();
}

function playerChooseButton(){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
    
            const playerSelection = button.id;
            buttons.forEach(btn => btn.classList.remove('button-clicked'));
            button.classList.add('button-clicked');
    
            setTimeout(() => {
                button.classList.remove('button-clicked');
            }, 500);
    
            const computerSelection = getComputerChoice();
    
            console.log(battleBegin(playerSelection, computerSelection));
    
            const remark = document.querySelector('#remark');
            remark.textContent = battleBegin(playerSelection, computerSelection);
    
            if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    computerScore += 1;
                }
                else if (computerSelection === "scissor") {
                    playerScore += 1;
                }
            }
    
            else if (playerSelection === "paper") {
    
                if (computerSelection === "scissor") {
                    computerScore += 1;
                }
                else if (computerSelection === "rock") {
                    playerScore += 1;
                }
            }
    
            else if (playerSelection === "scissor") {
                if (computerSelection === "rock") {
                    computerScore += 1;
                }
                else if (computerSelection === "paper") {
                    playerScore += 1;
                }
            }
    
            console.log(playerScore + " " + computerScore);
            const pScore = document.querySelector('#pscore');
            const cScore = document.querySelector('#cscore');
            pScore.textContent = playerScore;
            cScore.textContent = computerScore;
            const setUnclick = document.querySelectorAll('.button');
            const rmScore = document.querySelector('.score');
    
            if (playerScore === 5) {
                setUnclick.forEach(button => {
                    button.classList.add('button-unclickable');
                });
                console.log("Player Win!");
                remark.textContent = 'WIN!'
                setTimeout(() => {
                    playerScore = 0;
                    computerScore = 0;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                    remark.remove();
                    rmScore.remove();
                    startAgain();
                }, 3000);
            }
            else if (computerScore === 5) {
                setUnclick.forEach(button => {
                    button.classList.add('button-unclickable');
                });
                console.log("Computer Win!");
                remark.textContent = 'LOSE!';
                setTimeout(() => {
                    playerScore = 0;
                    computerScore = 0;
                    pScore.textContent = playerScore;
                    cScore.textContent = computerScore;
                    remark.remove()
                    rmScore.remove();
                    startAgain();
                }, 3000);
            }
    
        });
    });
    }
    

start();
playerChooseButton();
