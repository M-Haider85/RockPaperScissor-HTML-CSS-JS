var userScore = 0;
var compScore = 0;
var choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#msg");
var userScorePara = document.querySelector("#user-score");
var compScorePara = document.querySelector("#comp-score");
var genCompChoice = function () {
    var options = ["rock", "paper", "scissor"];
    var randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
var drawGame = function () {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "grey";
};
var showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innertText = userScore;
        msg.innerText = "You Win! Your ".concat(userChoice, " beats ").concat(compChoice, ".");
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lost. ".concat(compChoice, " beats your ").concat(userChoice, ".");
        msg.style.backgroundColor = "red";
    }
};
var playGame = function (userChoice) {
    //generate computer choice
    var compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //drawGame
        drawGame();
    }
    else {
        var userWin = true;
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
