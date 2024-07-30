let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn =document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
let movecounter =0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
];

const resetGame=()=>{
  turn0=true;
  enableboxes();
  msgcontainer.classList.add("hide");
};
const disableboxes = () =>{
   for(let box of boxes){
    box.disabled = true;
   }
};
const enableboxes = () =>{
   for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
   }
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

     if(turn0){
        box.innerText ="O";
        box.classList.add("O");
        turn0=false;
     }else{
        box.innerText ="X";
        box.classList.add("X");
        turn0=true;
     }
     box.disabled = true;
     checkWinner();
    });
});

const showWinner =(winner)=>{
     msg.innerText = `Congrates, Winner is ${winner}`;
     msg.classList.add("winner");
     msgcontainer.classList.remove("hide");
     disableboxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!=""&& pos3Val!=""){
            if(pos1Val=== pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }

    }
    checkdraw();
};

const checkdraw = ()=>{
    movecounter++;
     if(movecounter===9){
            msg.innerText="It,s a Draw!";
            msg.classList.add("draw-message");    
            msgcontainer.classList.remove('hide');
            disableboxes();
        }
     };


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)