//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Look for the @TODOs, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = 'X'

// the function that's called when a box is clicked, here "element" will be the same as "this" is in the HTML
const handleClick = (element) => {

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
    changeMarker()
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked.
const addMarker = (id) => {
  
  document.getElementById(id).innerHTML = currentMarker // comment out this line @CLAYTON
  console.log(`We'll place a mark on square: ${id}`)
  // @TODO-1 Set the innerHTML property of the element that was clicked to the "currentMarker"
  
  // You will need the following pieces:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
}

// This function changes "X" to "O" in the "currentMarker" variable
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const resetBoard = () => {
  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {
    console.log(squares[i])
    squares[i].innerHTML = null
  }  
}








// We'll use all of the following later in this course

// let board = [
//   ['','',''],
//   ['','',''],
//   ['','','']
// ];

// ********* We'll use this function later
// passes the element's id attribute from HTML to be used
const updateBoard = (id) => {
  // parses the id string into a number then captures the first and last part the newly create number as row & column
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2)) 

  console.log(`you clicked the sq at ${row} and ${column}`)
  console.log(board)

  // @TODO, Your code here: use the above information to change the board variable(array of arrays)
  // HINT: in your browser open up the dev tools -> console
}

// ********* We'll use this function later
const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    // **BONUS** you could make the dismissal of this alert window reset the board...
    window.alert(`Player ${currentMarker} won!`)
  } else {
    // if no win, change the marker from X to O, or O to X for the next player.
    changeMarker()
  }
}

// ********* We'll use this function later
const horizontalWin = () => {
  // @TODO, Your code here: to check for horizontal wins
}

// ********* We'll use this function later
const verticalWin = () => {
  // @TODO, Your code here: to check for vertical wins
}

// ********* We'll use this function later
const diagonalWin = () => {
  // @TODO, Your code here: to check for diagonal wins
}

// ********* We'll use this function later
const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  currentMarker = currentMarker === "X" ? "O" : "X"
}
