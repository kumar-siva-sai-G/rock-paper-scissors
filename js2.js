let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const genComputerChoice=()=>
{
    const options=["rock","paper","scissor"];
    let rdmIdx=Math.floor(Math.random()*3);
    return options[rdmIdx];
}
const playGame=(userChoice)=>
{   console.log("user choice : ",userChoice);
    const compChoice=genComputerChoice();
    console.log("Computer choice : ",compChoice);
    result="User"
    userScorePara=document.querySelector("#you1");
    compScorePara=document.querySelector("#comp1");
    if (userChoice === compChoice) {
        result = "draw";
    } else if (userChoice === "rock" && compChoice === "scissor" || userChoice === "scissor" && compChoice === "paper" || userChoice === "paper" && compChoice === "rock") {
        result = "User";
    } else {
        result = "Comp";
    }
    msg=document.querySelector("#res");
    if(result==="User")
    {
        msg.innerHTML=`You Win!  ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
        userscore++;
        userScorePara.innerText=userscore;
    }
   else  if(result==="Comp")
        {
            msg.innerHTML=`Computer Wins!  ${compChoice} beats ${userChoice}`
            msg.style.backgroundColor="red";
            computerscore++;
            compScorePara.innerText=computerscore;
        }
    else
        {
            msg.innerHTML="Draw Match!"
            msg.style.backgroundColor="yellow";
        }
    
}
choices.forEach((choice)=>{
    const choiceId=choice.getAttribute("id")
    let optionhere="rock";
     if(choiceId==="2") optionhere="paper"
     if(choiceId==="3") optionhere="scissor"
    choice.addEventListener("click",()=>
    {
     playGame(optionhere);
    });
});