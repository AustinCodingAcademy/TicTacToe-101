

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]


let currentMarker = 'X'
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id); 
  }
}

const addMarker = (id) => {
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))
  board[row][column] = currentMarker
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  console.log(id);
  document.getElementById(id).innerHTML = currentMarker;
}
  const checkForWin = () => {
    if(horizontalWin() || verticalWin() || diagonalWin()) {
      window.alert(`Player ${currentMarker} won!`);
    } else {
      changeMarker();
    }
  }

  const horizontalWin = () => {
    if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
      // console.log('We have a winner!');
    } if ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
      // console.log('We have a winner!');
    } if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
      // console.log('We have a winner!');

  }
}

  const verticalWin = () => {
    if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")){
      // console.log('We have a winner!');
    }
    if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
      // console.log('We have a winner!');
    }
    if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      // console.log('We have a winner!');
    }
  }
  

  const diagonalWin = () => {
    if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      // console.log('We have a winner!');
    }
    if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
      // console.log('We have a winner!');
    }
  }











// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}










// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  console.log()
  const squares = document.getElementsByTagName("td");
  for (i=0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
}