let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restartButton");
let button = document.querySelector("button");
let player1Score = document.querySelector(".player1Score");
let player2Score = document.querySelector(".player2Score");
let drawScore = document.querySelector(".draw");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player1 = {
  symbole: "x",
  played: [],
  score: 0,
};
let player2 = {
  symbole: "o",
  played: [],
  score: 0,
};
let draw = {
  score: 0,
};
let useBox = [];
let turn = true;
for (let i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", () => {
    if (isEmpty(i)) {
      if (turn) {
        boxes[i].textContent = player1.symbole;
        player1.played.push(i);
        useBox.push(i);
        checkWin(player1);
        player1Score.textContent = "Player 1 score : " + player1.score;
        turn = false;
      } else {
        boxes[i].textContent = player2.symbole;
        player2.played.push(i);
        useBox.push(i);
        checkWin(player2);
        player2Score.textContent = "Player 2 score : " + player2.score;
        turn = true;
      }
    } else {
      alert("choose an empty box");
    }
  });
}

const checkWin = (player) => {
  winConditions.some((combo) => {
    if (combo.every((index) => player.played.includes(index))) {
      setTimeout(() => {
        alert("you won");
        ResetGame();
      }, 100);
      player.score += 1;
    }
  });
};

const isEmpty = (i) => {
  if (useBox.includes(i)) {
    return false;
  }
  return true;
};

const ResetGame = () => {
  player1.played = [];
  player2.played = [];
  useBox = [];
  boxes.forEach((box) => {
    box.textContent = "";
  });
};
button.addEventListener("click", () => {
  ResetGame();
});

const checkDraw = () => {
  if (useBox.length == 9) {
    setTimeout(() => {
      alert("draw");
      ResetGame();
    }, 100);
    draw.score += 1;
    drawScore.textContent = "Draw : " + draw.score;
  }
};
