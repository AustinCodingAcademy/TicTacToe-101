//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let board = [
  ["","",""],
  ["","",""],
  ["","",""]]
let currentMarker = 'X'
let turns = 0
let gameOver = false

const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  // console.log(`The element you clicked on has an id:  ${element.id}`)

  if((!document.getElementById(element.id).innerHTML) && (!gameOver)){
    addMarker(element.id)
  }
}


// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  // if(currentMarker === 'X'){
  //   document.getElementById.
  // }
  
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  board[row][column]= currentMarker
  document.getElementById(id).innerHTML = currentMarker
  
  checkForWin()
  turns ++
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
  
    
    const squares = document.getElementsByTagName("TD")
  
  for (i=0; i < squares.length; i++) {
    // console.log(squares[i].id)
    squares[i].innerHTML = null
  }  
  board = [
    ["","",""],
    ["","",""],
    ["","",""]]

  currentMarker = "X"
  gameOver = false
  turns = 0
}



const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    gameOver = true
    
    
    setTimeout(function() {window.alert(`Player ${currentMarker} won! Click Restart to play again!`)}, 100)
  } 
  
  else if(turns === 8){
    gameOver = true
    setTimeout(function() {window.alert('It is a tie! Click Restart to play again!')}, 100)
  }
  else {
    changeMarker()
   
  }
}

const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
        || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
      return true
    }

  else if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
      return true
  }

  else if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
      return true
  }

  else{
    return false
  }
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
        || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")){
      return true
    }

  else if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
      return true
  }

  else if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      return true
  }

  else{
    return false
  }

}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
        || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")){
      return true
    }

  else if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") 
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
      return true
  }

  else{
    return false
  }
}