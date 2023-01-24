let currentMarker = 'X'

let board = [
  ["", "", ""], // <-- Row 1, index 0
  ["", "", ""], // <-- Row 2, index 1
  ["", "", ""] // <-- Row 3, index 2
]



const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`)

  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
}

const addMarker = (id) => {
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)

  document.getElementById(id).innerHTML = currentMarker

  const row = parseInt(id.charAt(0));

  const column = parseInt(id.charAt(2));

  board[row][column] = currentMarker
  checkForWin()
}

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }

}

const resetBoard = () => {
  const squares = document.getElementsByTagName("TD")

  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
  location.reload();
}

const horizontalwin = () => {

  if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X")
    || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")) {
    return true;
  }


  else if ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
    || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")) {
    return true;
  }

  else if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
    || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")) {
    return true;
  }

  else {
    return false;
  }
}

const verticalwin = () => {
  if ((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X")
    || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")) {
    return true;
  }

  else if ((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")) {
    return true;
  }

  else if ((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")) {
    return true;
  }
  else {
    return false;
  }

}

const diagonalwin = () => {
  if ((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")
    || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")) {
    return true;
  }
  else if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
    || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")) {
    return true;
  }
  else {
    return false;
  }


}

const checkForWin = () => {
  if (horizontalwin() || verticalwin() || diagonalwin()) {
    window.alert("Player " + currentMarker + " won!")
  } else {
    changeMarker()
  }
}