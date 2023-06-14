
let currentMarker = 'X';
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`)

  if (!element.innerHTML) {
    addMarker(element.id);
  }

  checkForWin();

};


const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    setTimeout(() => {
      window.alert(`Player ${currentMarker} won!`);
    }, 100);
  } else {
    changeMarker();
  }
}

const horizontalWin = () => {
  if (
    (board[0][0] !== null && board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
    (board[1][0] !== null && board[1][0] === board[1][1] && board[1][0] === board[1][2]) ||
    (board[2][0] !== null && board[2][0] === board[2][1] && board[2][0] === board[2][2])
  ) {
    return true;
  }
  return false;
}

const verticalWin = () => {
  if (
    (board[0][0] !== null && board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
    (board[0][1] !== null && board[0][1] === board[1][1] && board[0][1] === board[2][1]) ||
    (board[0][2] !== null && board[0][2] === board[1][2] && board[0][2] === board[2][2])
  ) {
    return true;
  }
  return false;
}

const diagonalWin = () => {
  if (
    (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[2][0] !== null && board[2][0] === board[1][1] && board[2][0] === board[0][2])
  ) {
    return true;
  }
  return false;
}


const addMarker = (id) => {


  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`);


  const values = id.split('-');
  const row = parseInt(values[0]);
  const column = parseInt(values[1]);

  board[row][column] = currentMarker;
  console.log('board', board[row][column], board);
  document.getElementById(id).innerHTML = currentMarker;
};

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
};

const resetBoard = () => {
  const squares = document.getElementsByTagName("td");
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id);
    squares[i].innerHTML = '';
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
  }
};

