//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
// next to each @TODO you will find tasks that need to be finished

  // multi-dimensional array defines the board as 3-row 3-column 
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'


// start of function
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
// end of function

// start of function
// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // working! (fixed when name of id changed)
  // But now you might have another problem, you're onclick might not work with your addMarker function because you've changed class names.
  let element = document.getElementById(id)

  // These variables hold the first and third letters in the element's id.
  // (0,1,2), (0,1,2), (0,1,2)
  // parsing out index [0-0], [0-2], [0-2]
  // dash is charAt(1)
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))


  // So in the end your addMarker function will insert an "X" or "O" in the DOM for the user to see as well as in the multi-dimensional array, board for your JavaScript to easily access.
  board[row][column] = currentMarker
  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`);

  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"

  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 
  document.getElementById(id).innerHTML = currentMarker
  //  checkForWin.
  checkForWin();
}
//  end of function


// start of function
// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}
// end of function


// start of function
// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
  // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  

  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  const squares = document.getElementsByTagName("td")

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {
    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O" 
    squares[i].innerHTML = null;

    // Yes, this is a hack to reset checkForWin and not have to shim the function
  location.reload(); 
  
  }
}
// end of function


//  start of function
//  checkForWin.
const checkForWin = () => {

  // the code snippet you copy/pasted has a function called checkForWin which you'll notice calls changeMarker if none of the winning rules(see above), are met.
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}
// end of function

// "set of rules 
// == means "is-equal-to", || means "or" while && means "and"

// start of function
const horizontalWin = () => {

  // So inside addMarker you can replace the changeMarker call out for checkForWin because changeMarker will still be called if the other functions don't return true.
  //  if statements that will go inside horizontalWin, verticalWin, and diagonalWin using the exact code given to you in the rules and the code snippet? 
  // You'll have to expand upon these rules to make multiple if/if else/else statements for each to work

  
  if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") ||
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") ||
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")

  ) {
    return true;
  }
  else 
  {
    return false;
  }
  
}
// end of function

// start of function
const verticalWin = () => {
  if ((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") ||
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") ||
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  }
  else 
  {
    return false;
  }
}
// end of function 

// start of function
const diagonalWin = () => {
  if ((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") ||
    (board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") ||
    (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")
  ) {
    return true;
  }
  else 
  {
    return false;
  }
}
// end of function