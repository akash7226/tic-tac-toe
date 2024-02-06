let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turn0){
            box.innerText = "O";
            box.style.color = "#582f0e"
            turn0 = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#333d29"
            turn0 = true;
        }
        box.disabled = true ;
        checkwinner();
    });

});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinners = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes()
};

const checkwinner = () => {
    for (let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinners(pos1Val);
            }
        }
    }

};

newgamebtn.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)