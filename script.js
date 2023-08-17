function getComputerChoice(){
    var choices = ["rock", "paper", "scissor"];
    rand_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return choices[rand_num-1];
}

function battleBegin(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() =="rock"){
       if(computerSelection == "rock")
       {
        return "Tie!";
       }
       else if(computerSelection == "paper")
       {
        return "You Lose! Paper Beat Rock";
       }
       else if (computerSelection=="scissor"){
        return "You Win! Rock Beat Scissors";
       }
    }
    
    else if (playerSelection.toLowerCase() =="paper"){
        if(computerSelection == "paper"){
            return "Tie!";
        }
        else if (computerSelection == "scissor"){
            return "You Lose! Scissor Beat Paper";
        }
        else if(computerSelection == "rock"){
            return "You Win! Paper Beat Rock";
        }
    }

    else if (playerSelection.toLowerCase() =="scissor"){
        if(computerSelection == "scissor"){
            return "Tie!";
        }
        else if (computerSelection == "rock"){
            return "You Lose! Rock Beat Scissor";
        }
        else if (computerSelection == "paper"){
            return "You Win! Scissor Beat Paper";
        }
    }

}

function game(){
    battleStart = true;
    playerscore = 0;
    computerScore = 0;
    while(battleStart){
        let playerSelection = prompt("What's your choice? ");
        computerSelection = getComputerChoice();
        console.log(battleBegin(playerSelection, computerSelection));

        if (playerSelection.toLowerCase() =="rock"){
            if(computerSelection == "paper")
            {
               computerScore +=1;
            }
            else if (computerSelection=="scissor"){
               playerscore +=1;
            }
         }
         
         else if (playerSelection.toLowerCase() =="paper"){

            if (computerSelection == "scissor"){
                 computerScore +=1;
             }
             else if(computerSelection == "rock"){
                 playerscore +=1;
             }
         }
     
         else if (playerSelection.toLowerCase() =="scissor"){
             if (computerSelection == "rock"){
                 computerScore +=1;
             }
             else if (computerSelection == "paper"){
                 playerscore +=1;
             }
         }

         if (playerscore >=5){
            console.log("Player Win!");
            battleStart = false;
         }
         else if(computerScore>=5){
            console.log("Computer Win!");
            battleStart = false;
         }

    }
}

game();