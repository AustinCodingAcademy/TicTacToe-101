//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
let gamearr = [["","",""],
                ["","",""],
                ["","",""]]

const elementname="winner_message"

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
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

  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  document.getElementById(id).innerHTML = currentMarker;

  if (id == "top-left" ){
    gamearr[0][0] = currentMarker
    
  }
  if (id == 'top-middle' ){
    gamearr[0][1] = currentMarker
  }
  if (id == 'top-right' ){
    gamearr[0][2] = currentMarker
  }
  if (id == 'mid-left' ){
    gamearr[1][0] = currentMarker
  }
  if (id == 'mid-middle' ){
    gamearr[1][1] = currentMarker
  }
  if (id == 'mid-right' ){
    gamearr[1][2] = currentMarker
  }
  if (id == 'bottom-left' ){
    gamearr[2][0] = currentMarker
  }
  if (id == 'bottom-middle' ){
    gamearr[2][1] = currentMarker
  }
  if (id == 'bottom-right' ){
    gamearr[2][2] = currentMarker
  }
  checkwin()
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"
  
  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML 

  changeMarker()
}


const checkwin = () => {

  /*Horizontal*/
  if((gamearr[0][0] == "X" && gamearr[0][1] == "X" && gamearr[0][2] == "X") || (gamearr[0][0] == "O" && gamearr[0][1] == "O" && gamearr[0][2] == "O")){
   youwin()
  }

  if((gamearr[1][0] == "X" && gamearr[1][1] == "X" && gamearr[1][2] == "X") || (gamearr[1][0] == "O" && gamearr[1][1] == "O" && gamearr[1][2] == "O")){
    youwin()
   }

   if((gamearr[2][0] == "X" && gamearr[2][1] == "X" && gamearr[2][2] == "X") || (gamearr[2][0] == "O" && gamearr[2][1] == "O" && gamearr[2][2] == "O")){
    youwin()
   }

   /*Vertical*/

   if((gamearr[0][0] == "X" && gamearr[1][0] == "X" && gamearr[2][0] == "X") || (gamearr[0][0] == "O" && gamearr[1][0] == "O" && gamearr[2][0] == "O")){
    youwin()
   }
 
   if((gamearr[0][1] == "X" && gamearr[1][1] == "X" && gamearr[2][1] == "X") || (gamearr[0][1] == "O" && gamearr[1][1] == "O" && gamearr[2][1] == "O")){
     youwin()
    }
 
    if((gamearr[0][2] == "X" && gamearr[1][2] == "X" && gamearr[2][2] == "X") || (gamearr[0][2] == "O" && gamearr[1][2] == "O" && gamearr[2][2] == "O")){
     youwin()
    }

 /*diagional*/

 if((gamearr[0][0] == "X" && gamearr[1][1] == "X" && gamearr[2][2] == "X") || (gamearr[0][0] == "O" && gamearr[1][1] == "O" && gamearr[2][2] == "O")){
  youwin()
 }

 if((gamearr[0][2] == "X" && gamearr[1][1] == "X" && gamearr[2][0] == "X") || (gamearr[0][2] == "O" && gamearr[1][1] == "O" && gamearr[2][0] == "O")){
   youwin()
  }
}

const youwin = () =>{
//*document.getElementById("winner_message").style.opacity = 1;*//

if (currentMarker=="X"){
document.getElementById("winner_message").style.display = "block"
document.getElementById("winner_message").innerHTML = 'Player ' +currentMarker +" won "}

if (currentMarker=="O"){
  document.getElementById("winner_message2").style.display = "block"
  document.getElementById("winner_message2").innerHTML = 'Player ' +currentMarker +" won "}

console.log ("you win")
console.log(gamearr)
//*document.getElementById("winner_message").style.height = "470px";*//
   
    
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
  var i,squares;
  squares = document.getElementsByTagName("td");
 


  // =
  // document
  // const
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  

  cleararray()
  
}
const cleararray = () => {
  const newarr = [["","",""],
  ["","",""],
  ["","",""]]  
gamearr = newarr

document.getElementById("winner_message").style.display = "none";
document.getElementById("winner_message2").style.display = "none";
}