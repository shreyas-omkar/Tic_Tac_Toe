let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.getElementById("resetBtn");

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let defTurn = "X";
let count = 0;

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false; // Re-enable the boxes on reset
        defTurn = "X";
        count = 0; // Reset the move counter
    });
});

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    console.log(`${i} was clicked`);

    if (defTurn === "X") {
        box.innerText = "X";
        defTurn = "O";
    } else {
        box.innerText = "O";
        defTurn = "X";
    }
    box.disabled = true; // Disable box after click
    count++;
    checkWinner();
  });
});

let winner = ""

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pVal1 = boxes[pattern[0]].innerText;
        let pVal2 = boxes[pattern[1]].innerText;
        let pVal3 = boxes[pattern[2]].innerText;

        if (pVal1 !== "" && pVal2 !== "" && pVal3 !== "") {
            if (pVal1 === pVal2 && pVal2 === pVal3) {
                winner = pVal1;
                boxes.forEach(box => box.disabled = true); // Disable all boxes after a win
                return;
            }
        }

        
    }
};