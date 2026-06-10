let userScore = 0;
let computerScore = 0;
let user_score = document.querySelector("#user_score");
let computer_score = document.querySelector("#computer_score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawGame = () => {
    msg.innerText = "Game was draw 🤝 Play again";
    console.log("Game was draw 🤝");
     msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
       msg.innerText = `You win 🎉. Your ${userChoice} beats ${compChoice} :)`;
       console.log("you win");
       userScore++;
       user_score.innerText = userScore;
       msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = `You lose 😢. ${compChoice} beats your ${userChoice} :(`;
        computerScore++;
        computer_score.innerText = computerScore;
        console.log("you lose");
         msg.style.backgroundColor = "red";
    }
}
const computerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const playGame = (userChoice) => {
    console.log("UserChoice =",userChoice);
   let compChoice = computerChoice();
    console.log("computerChoice =",compChoice);
   if(userChoice === compChoice) {
     drawGame();
   } 
   else {
    let userWin = true;
    if(userChoice === "Rock") {
        userWin = compChoice === "Paper" ? false : true;
    }
    else if(userChoice === "Paper") {
        userWin = compChoice === "Scissors" ? false : true;
    }
    else {
        userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
}
choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
   
   })
});
