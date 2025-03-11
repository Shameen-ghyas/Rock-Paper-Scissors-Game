let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}
const msg = document.querySelector("#msg");
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, choiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win.");
        msg.innerText = `you win! your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.");
        msg.innerText = `You lost. ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (choiceId) => {
    console.log("user choice =",choiceId);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);
    if (choiceId === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (choiceId==="rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false: true;
        }
    showWinner(userWin,choiceId,compChoice);
        }
    }
    

choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})