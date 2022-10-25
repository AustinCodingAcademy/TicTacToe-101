let playBoard = [
  ["", "", ""], // <-- Row 1, index 0
  ["", "", ""], // <-- Row 2, index 1
  ["", "", ""] // <-- Row 3, index 2
];
console.log(playBoard);

let currentMarker = 'X' 

// Verifies box is not already in use
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

// Places the "currentMarker" inside the HTML element that was clicked
const addMarker = (id) => {
  console.log(`"${currentMarker}"  placed in square:  ${id}`)
  let element = document.getElementById(id)
  element.innerHTML = currentMarker;
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))
  playBoard[row][column] = currentMarker;
  console.log(playBoard);
  checkForWin();
}

// Changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// Resets Board
const resetBoard = () => {
  const squares = document.getElementsByTagName("TD");
  for (i=0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
}
// Checks board after every interaction for win-state
const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
}}

//Win-states
const horizontalWin = () => {
  if((playBoard[0][0] == "X" && playBoard[0][1] == "X" && playBoard[0][2] == "X") 
  || (playBoard[0][0] == "O" && playBoard[0][1] == "O" && playBoard[0][2] == "O")
  || (playBoard[1][0] == "X" && playBoard[1][1] == "X" && playBoard[1][2] == "X") 
  || (playBoard[1][0] == "O" && playBoard[1][1] == "O" && playBoard[1][2] == "O")
  || (playBoard[2][0] == "X" && playBoard[2][1] == "X" && playBoard[2][2] == "X") 
  || (playBoard[2][0] == "O" && playBoard[2][1] == "O" && playBoard[2][2] == "O")
  ) { return(true)}
  else {return(false)}
}

 const verticalWin = () => {
  if((playBoard[0][0] == "X" && playBoard[1][0] == "X" && playBoard[2][0] == "X") 
  || (playBoard[0][0] == "O" && playBoard[1][0] == "O" && playBoard[2][0] == "O")
  || (playBoard[0][1] == "X" && playBoard[1][1] == "X" && playBoard[2][1] == "X") 
  || (playBoard[0][1] == "O" && playBoard[1][1] == "O" && playBoard[2][1] == "O")
  || (playBoard[0][2] == "X" && playBoard[1][2] == "X" && playBoard[2][2] == "X") 
  || (playBoard[0][2] == "O" && playBoard[1][2] == "O" && playBoard[2][2] == "O")
  ) { return(true)}
  else {return(false)}
}

const diagonalWin = () => {
  if((playBoard[0][0] == "X" && playBoard[1][1] == "X" && playBoard[2][2] == "X") 
  || (playBoard[0][0] == "O" && playBoard[1][1] == "O" && playBoard[2][2] == "O")
  || (playBoard[2][0] == "X" && playBoard[1][1] == "X" && playBoard[0][2] == "X") 
  || (playBoard[2][0] == "O" && playBoard[1][1] == "O" && playBoard[0][2] == "O")
  ) { return(true)}
  else {return(false)}
}




// Alternate logic test: FAIL: each loop itteration creates a win state

// const horizontalWin = () => {
//   for (i=0; i<=2; i++){
//     if ((playBoard[0][i] === 'X') || (playBoard[0][i] === 'O')
//     || (playBoard[1][i] === 'X') || (playBoard[1][i] === 'O')
//     || (playBoard[2][i] === 'X') || (playBoard[2][i] === 'O')
//     ) { return(true)}
//      else {return(false)}
//   }}


// const verticalWin = () => {
//   for (i=0; i<=2; i++){
//     if ((playBoard[i][0] === 'X') || (playBoard[i][0] === 'O')
//     || (playBoard[i][1] === 'X') || (playBoard[i][1] === 'O')
//     || (playBoard[i][2] === 'X') || (playBoard[i][2] === 'O')
//     ) { return(true)}
//     else {return(false)}
// }}

// let a = 3

// const diagonalWin = () => {
//   for (i=0; i<=2; i++){
//     a--;
//     if ((playBoard[i][i] === 'X') || (playBoard[i][i] === 'O')
//     || (playBoard[i][a] === 'X') || (playBoard[i][a] === 'O')
//     ) { return(true)}
//     else {return(false)}
// }}
