let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
if (!userScorePara) return;
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options [randomIndex]
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "grey"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innertText =userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice) {
        //drawGame
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "scissor";
        } else if(userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "rock";
        } else{
            //rock,paper
            userWin = compChoice === "paper" ;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice:Element) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        if (userChoice) playGame(userChoice);  
});    
});