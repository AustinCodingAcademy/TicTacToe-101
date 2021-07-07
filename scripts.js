let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentMarker = "X";

const handleClick = (element) => {
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));

  board[row][column] = currentMarker;
  document.getElementById(id).innerHTML = currentMarker;

  checkForWin();
};

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
};

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  const squares = document.getElementsByTagName("TD");
  for (i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};

const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`);
  } else {
    changeMarker();
  }
};

const horizontalWin = () => {
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  ) {
    return true;
  } else if (
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  ) {
    return true;
  } else if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const verticalWin = () => {
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  ) {
    return true;
  } else if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const diagonalWin = () => {
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else if (
    (board[2][0] == "X" && board[1][1] == "X" && board[2][0] == "X") ||
    (board[2][0] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};
