let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#Comp-score");

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});


let playgame = (userchoice ) =>{
    console.log("User Choice = ",userchoice);
    //Genrate Computer Choice
   const compchoice = genCompChoice();
   console.log("Computer Choice = ",compchoice);

   if(userchoice===compchoice){
    drawgame();
   }else{
    let userWin = true;
      if(userchoice==='rock'){
        userWin= compchoice === "paper"? false:true;
      }else if(userchoice==='paper'){
          userWin = compchoice ==="scissors"?false:true;
      }else{
        userWin = compchoice ==="rock"?false:true;
      }
      showWinner(userWin,userchoice,compchoice);
   }                      
};

let genCompChoice = () =>{
    const options =["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

let drawgame=()=>{
  console.log("Game is Draw");
  msg.innerText ="Game iS Draw.Play Again";
  msg.style.backgroundColor="#081b31";
};

let showWinner=(userWin,userchoice,compchoice )=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText =`You Won.Your Choice ${userchoice} Beats CompChoice ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText =`You Lost.Comp Choice ${compchoice} Beats Your Choice ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}