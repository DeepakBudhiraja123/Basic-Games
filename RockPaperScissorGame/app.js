let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const userDiv = document.querySelector(".user");
const compDiv = document.querySelector(".comp");
const result = document.querySelector(".result");
const reset = document.querySelector(".Reset");

reset.addEventListener("click", ()=> {
    user = 0;
    comp = 0;
    result.innerText = "";
    result.style.backgroundColor = "white";
    userDiv.innerText = "0";
    compDiv.innerText = "0";
})
const GenCompChoice = () =>{
    let arr = ["rock", "paper", "scissor"];
    let index = Math.floor((Math.random()*3));
    return arr[index];
}
const drawGame = (userID) => {
    result.innerText = `It was a Draw. You chose : ${userID} and Computer chose : ${userID}`;
    result.style.backgroundColor = "rgb(39, 124, 236)";
}

const playGame = (userID)=> {
    const compChoice = GenCompChoice();
    if(userID == compChoice){
        drawGame(userID);
    }

    else{
        let userWin = true;
        if((userID === "rock" && compChoice === "paper") || (userID === "paper" && compChoice === "scissor")
        || (userID === "scissor" && compChoice === "rock")){
            userWin = false;
        }

        if(userWin){
            result.innerText = `You Won. ${userID} beats computer ${compChoice}`;
            result.style.backgroundColor = "green";
            user++;
        }
        else{
            result.innerText = `You Lost. ${compChoice} beats your ${userID}`;
            result.style.backgroundColor = "red";
            comp++;
        }

        userDiv.innerHTML = user;
        compDiv.innerHTML = comp;
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userID = choice.getAttribute("id");
        playGame(userID);
    });
});