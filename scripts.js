
//the board is an array of arrays
//all the elements are initially empty strings
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'O'


//function to tell what to do when box, <td>, is clicked
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  
  //grab the current element by its id, which was passed into this function as a parameter
  let element = document.getElementById(id)

 
  //take apart the id
  //change the first character of the id to an integer
  //and save that as the row
  const row = parseInt(element.id.charAt(0))
  //change the third character of the id, after the dash, to an integer
  //and save that as column
  const column = parseInt(element.id.charAt(2))
  
  //rewrite the board with the current row and column as the currentMarker
  board[row][column] = currentMarker
 
   //add the marker to the GUI 
   //set the innerHTML property of the element that was clicked to the "currentMarker"
    element.innerHTML = currentMarker

  // //run checkForWin function
    checkForWin()
 
  
}

const checkForWin = () => {
if(horizontalWin() || verticalWin() || diagonalWin()) {
  window.alert(`Player ${currentMarker} won!`)
}else {
  changeMarker()
}
}



const horizontalWin = () => {
  if((board[0][0] == currentMarker && board[0][1] == currentMarker && board[0][2] == currentMarker) 
    || (board[1][0] == currentMarker && board[1][1] == currentMarker && board[1][2] == currentMarker) 
    || (board[2][0] == currentMarker && board[2][1] == currentMarker && board[2][2] == currentMarker))
    {return true}
  }

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
    || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
    || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
    || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
    || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
    || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
    {return true}
  }


const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"))
  {return true}
}


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

  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  const squares = document.getElementsByTagName("TD");

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }
}


console.log (document.getElementsByTagName("h1"));





