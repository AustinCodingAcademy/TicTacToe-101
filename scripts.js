//This is just for me so I can keep my rows and columns straight ;)
/*let board = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
]
*/

// Define the board as a 3-row, 3-column empty multi-dimensional array. Used on line 62
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

/* The variable will change from X to O based on what player turn it is. We need to hold this value so we can 
   place an X or O on the board when a cell is clicked. We initialize the variable to 'X' so X goes first for
   each new game.
*/
let currentMarker = 'X'


const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  /* this conditional statement prevents an X being changed to an O or an O being changed to an X by
     checking to see if the square clicked has anything in it. 
	 It doesn't have a return statement, so if not (the ! signifies 'not', the function calls the addMarker function and continues. 
	 */
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id);
  }
} // end of handleClick function



/* The "addMarker" function places the "currentMarker" inside the HTML element that was clicked and calls the "checkForWin" function. 
   The "changeMarker" function is moved to be called from the "checkForWin" function so you don't change the marker until you see if
   a player has won.
*/
const addMarker = (id) => {

  // DONE @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)

  // Set
  document.getElementById(id).innerHTML = currentMarker;

  /* Next, we define 2 variables that parse out the ids on the table cells so we know which cell (row-column) was clicked.
	We're turning each character (string) into a number using the built-in parseInt function and finding the value by the index of the character.
		row = the character at the first index of the id
		column = the character at the third index of the id
	Remember the index starts at 0, so
		indexes for id='2-1' (and all ids in your table cells
						^^^
		are             012
	We don't care about the dash (-) between the numbers that's at id.charAt(1)
  */
  const row = parseInt(id.charAt(0));	// element.id throws an Uncaught Reference error: element is not defined
  const column = parseInt(id.charAt(2));
 
  // Now we assign the board array of the correct row-column to the current marker.
  board[row][column] = currentMarker;
  
  // And call the checkForWin function  
  checkForWin();

  //changeMarker()	Not needed here because it's now called in checkForWin()
  
} // end of addMarker function

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()  // Here's where we moved changeMarker to call if no one wins the game
  }
}

// The "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// The "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
    const squares = document.getElementsByTagName("TD")
    
    // loops over the HTML Collection of TDs and clears out the Xs and Os
    for (i=0; i < squares.length; i++) {

      // will log out the id of each square as it loops over them.
      console.log(squares[i].id)

      // sets the innerHTML to null to replace the "X" or "O"
      squares[i].innerHTML = null
    }  

    // Yes, this is a hack to reset checkForWin and not have to shim the function
  location.reload(); 
  

}

const horizontalWin = () => {
  if ((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"))
  {
    return true;
  } 
  else if ((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"))
  {
    return true;
  } 
  else if ((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

const verticalWin = () => {
  if ((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"))
  {
    return true;
  } 
  else if ((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"))
  {
    return true;
  } 
  else if ((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if ((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"))
  {
    return true;
  }
  else if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))
  {
    return true;
  }
  else
  {
    return false;
  }
}