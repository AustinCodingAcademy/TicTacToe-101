let board = [
  ["0-0", "0-1", "0-2"], 
  ["1-0", "1-1", "1-2"], 
  ["2-0", "2-1", "2-2"] 
]

let currentMarker = 'X'

const row = parseInt(element.id.charAt(0))
const column = parseInt(element.id.charAt(2))

board[row][column] = currentMarker
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

const addMarker = (id) => {

 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)

  document.getElementById(id).innerHTML = currentMarker;
  // changeMarker()
  checkForWin()
}

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
}

const resetBoard = () => {

  const squares = document.getElementsByTagName("TD");
  
  for (i=0; i < squares.length; i++) {
    
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

function horizontalWin() {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")) {
return true

} else if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
|| (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
  return true 

} else if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
|| (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
  return true 

} else {
  return false 
}
}

function verticalWin() {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")) {
return true

} else if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
|| (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
  return true 

} else if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
|| (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
  return true 

} else {
  return false 
}

}

function diagonalWin() {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")) {
return true

} else if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
|| (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
  return true 

} else {
  return false 
}
}