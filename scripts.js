let currentMarker = 'X'
let count = 0;

const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  document.getElementById(id).innerHTML = currentMarker;
  changeMarker()
  checkWinner();
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
  count++;
  console.log(count)
}

const checkWinner = () => {
  let board = table_to_array();
  console.log(board)
  
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X")
  || (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
  || (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")){
    console.log("X wins!");
    document.getElementById("winner").innerHTML = "X wins!"
  }
  else if((board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") 
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
    console.log("O wins!");
    document.getElementById("winner").innerHTML = "O wins!"
  }
  else if(count == 9){
    console.log("Tie!")
    document.getElementById("winner").innerHTML = "Tie!"
  }
}

const table_to_array = () => {
  let tableRows = document.getElementsByTagName("TR");

  let tableArray = [];

  for (var i = 0; i < tableRows.length; i++) {
          let cell = tableRows[i].children;
          let cellValues = [];
          for (var j = 0; j < cell.length; j++) {
            cellValues.push(cell[j].innerHTML);
          }
          tableArray.push(cellValues);
  }
  return tableArray;
}

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
      
  let squares  = document.getElementsByTagName("TD"); 
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (let i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  

  count = 0;
  document.getElementById("winner").innerHTML = ""
}