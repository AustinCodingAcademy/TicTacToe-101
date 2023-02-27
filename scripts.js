// Go to the top your scripts.js file and create an array called board with three arrays inside of it. 
// Each of these inner arrays should have three places held with empty quotes: "", separated by commas, ,.

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let winner;

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!winner && !document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // Log the current marker
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // Get the square that was clicked
  const clickedSquare = document.getElementById(id);

  // Determine what row/column the square was on based on its id
  const row = parseInt(clickedSquare.id.charAt(0));
  const column = parseInt(clickedSquare.id.charAt(2));

  // Mark it in the data structure for the board
  board[row][column] = currentMarker;

  // Mark it in the html for the board
  clickedSquare.innerHTML = currentMarker;
  
  // Log the current state of the board
  console.log(board);

  checkForWin();
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
  
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
    
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  let squares = document.getElementsByTagName("td");

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentMarker = 'X';
  winner = null;

  console.log(board);
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    winner = currentMarker;
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
      || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
      || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
      || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
      || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
      || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
    ){
      return true;
    }

    return false;
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
    || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
    || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
    || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ){
    return true;
  }

  return false;
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
    || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
    || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
    || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true;
  }

  return false;
}