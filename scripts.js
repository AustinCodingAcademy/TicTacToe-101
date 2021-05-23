let currentMarker = "X"
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}



// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  console.log(id);
  let element = document.getElementById(id)
  const row = parseInt(element.id.charAt(0))
  const column = parseInt(element.id.charAt(2))
 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  board[row][column] = currentMarker;
  console.log(board);
  console.log(row);
  console.log(column);
 
  document.getElementById(id).innerHTML = currentMarker;
  //changeMarker();
  checkForWin();
  
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
    
  } else {
    currentMarker = "X"
    checkForWin();
  }
  
}


// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  
    const squares = document.getElementsByTagName("TD");
  
  for (i=0; i < squares.length; i++) {

    console.log(squares[i].id)

    squares[i].innerHTML = null

  }  
  currentMarker = 'X';
}


const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}




const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
   alert(currentMarker + " wins");
  }
  else if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
    alert(currentMarker + " wins");}
  else if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
    alert(currentMarker + " wins");

  }
  
};

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"))
  alert(currentMarker + " wins");
  else if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") 
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"))
  alert(currentMarker + " wins");
  else if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") 
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"))
  alert(currentMarker + " wins");{
}}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")){
    alert(currentMarker + " wins");}
  else if((board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X") 
  || (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")){
    alert(currentMarker + " wins");;
  }
}









