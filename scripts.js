let currentMarker = 'X';

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const handleClick = (element) => {
  if (!element.innerHTML) {
    addMarker(element);
    changeMarker();
  }
};

const addMarker = (element) => {
  const row = parseInt(element.id.charAt(0));
  const column = parseInt(element.id.charAt(2));
  board[row][column] = currentMarker;
  element.innerHTML = currentMarker;
  checkForWin();
}

const changeMarker = () => {
  if(currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
}

const resetBoard = () => {
  const squares = document.getElementsByTagName('td');
  for (let square of squares) {
    square.innerHTML = "";
  }
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`);
  }
}

const horizontalWin = () => {
  for (let row = 0; row < 3; row++) {
    if (board[row].every(cell => cell === currentMarker)) {
      return true;
    }
  }
  return false;
};

const verticalWin = () => {
  for (let col = 0; col < 3; col++) {
    if (board[0][col] === currentMarker && board[1][col] === currentMarker && board[2][col] === currentMarker) {
      return true;
    }
  }
  return false;
};

const diagonalWin = () => {
  if ((board[0][0] === currentMarker && board[1][1] === currentMarker && board[2][2] === currentMarker) ||
      (board[0][2] === currentMarker && board[1][1] === currentMarker && board[2][0] === currentMarker)) {
    return true;
  }
  return false;
};
