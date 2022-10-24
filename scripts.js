//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
// next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
}


let markerCount = 0;
// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  markerCount++;
  if (winner !== "") {
    return;
  }
  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)

  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  document.getElementById(id).innerHTML = currentMarker;
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 

  changeMarker()

  checkWin();
}

let winner = "";

function checkWin() {

  let xoTable = document.getElementById("table");
  let tableText = "";
  for (let row of xoTable.rows) {
    for (let cell of row.cells) {
      let val = cell.innerText;
      if (val.length === 0) {
        val = "-";
      }
      tableText += val;
    }
    tableText += ",";
  }
  let rowArray = tableText.split(',');

  //Check Diagonals
  if (rowArray[1][1] === 'X') {

    if ((rowArray[0][0] === 'X' && rowArray[2][2] === 'X') || (rowArray[2][0] === 'X' && rowArray[0][2] === 'X')) {
      winner = "X";
    }
  }
  if (rowArray[1][1] === 'O') {

    if ((rowArray[0][0] === 'O' && rowArray[2][2] === 'O') || (rowArray[2][0] === 'O' && rowArray[0][2] === 'O')) {
      winner = "O";
    }
  }

  //Check Horizontals
  if (rowArray.includes("XXX")) {
    winner = "X";
  }
  if (rowArray.includes("OOO")) {
    winner = "O";
  }

  //Check Verticals
  for (let col = 0; col <= 2; col++) {
    let foundX = 0;
    let foundO = 0;
    for (let row = 0; row <= 2; row++) {
      if (rowArray[row][col] === 'X') {
        foundX++;
      }
      if (rowArray[row][col] === 'O') {
        foundO++;
      }
    }
    if (foundX === 3) {
      winner = "X";
    }
    if (foundO === 3) {
      winner = "O";
    }
  }

  //Check for and announce winner
  if (winner !== "") {
    console.log("winner:", winner);
    winnerElement.innerText = "Winner: " + winner;
  }
  else if (markerCount === 9) {
    winnerElement.innerText = "It's a tie!";
  }
}




let winnerElement = document.getElementById("winnerHeading");
winnerElement.style = "text-align: center; font-size: 3rem;";



// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}










// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {

  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
  // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  const squares = document.getElementsByTagName("td");
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }
  winnerElement.innerText = "";
  winner = "";
  markerCount = 0;
}