Myboard =board["","",""] ["","",""]  ["","",""]

let currentMarker = 'X'
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${0-0}')
  if(!document.getElementById('0-0').innerHTML){
    addMarker('0-0')
  }
}

const addMarker = (id) => {
  board[row][column] = currentMarker
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${top-right}`)
if(document.getElementById('0-0').innerHTML)
  changeMarker(0-0)

  const changeMarker = () => {
    if(currentMarker === "X"){
      currentMarker = "O"
    } else {
      currentMarker = "X"
    

}
const resetBoard = () => {
  for (i=0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
   
  }  
}
const handleClick =(element) =>{
    console.log('The element you clicked on has an id: ${bottom-left}')
    if(!document.getElementById(top-left).innerHTML){
        addMarker(top-left)
    }

    const addMarker = (id) => {
        console.log(`*** The current marker is:  ${currentMarker}. ***`)
        console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${top-left}`)
      if(document.getElementById('top-left').innerHTML)
        changeMarker('top-left')  
    }
}
  }
    const resetBoard = () => {
        for (i=0; i < squares.length; i++) {
          console.log(squares[i].id)
          squares[i].innerHTML = null
         
        } 
            }

            onst handleClick =(element) =>{
              console.log('The element you clicked on has an id: ${top-middle}')
              if(!document.getElementById(top-middle).innerHTML){
                  addMarker(top-middle)
              }
          
              const addMarker = (id) => {
                  console.log(`*** The current marker is:  ${currentMarker}. ***`)
                  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${top-left}`)
                if(document.getElementById('top-left').innerHTML)
                  changeMarker('top-left')  
              }
          }
            }
              const resetBoard = () => {
                  for (i=0; i < squares.length; i++) {
                    console.log(squares[i].id)
                    squares[i].innerHTML = null
                   
                  } 
                      } 
                      onst handleClick =(element) =>{
                        console.log('The element you clicked on has an id: ${top-middle}')
                        if(!document.getElementById(top-middle).innerHTML){
                            addMarker(top-middle)
                        }
                    
                        const addMarker = (id) => {
                            console.log(`*** The current marker is:  ${currentMarker}. ***`)
                            console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${'middle-left}`)
                          if(document.getElementById('middle-left').innerHTML)
                            changeMarker('middle-left')  
                        }
                    }
                      }
                        const resetBoard = () => {
                            for (i=0; i < squares.length; i++) {
                              console.log(squares[i].id)
                              squares[i].innerHTML = null
                             
                            } 
              } 
        }    
        const checkForWin = () => {
          if(horizontalWin() || verticalWin() || diagonalWin()) {
            window.alert(`Player ${currentMarker} won!`)
          } else {
            changeMarker()
          }
        }
     
        const horizontalWin = () => {
       
        if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"))
        
        const verticalWin = () => {
          // Your code here to check for vertical wins
          if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"))
        
        const diagonalWin = () => {
          // Your code here to check for diagonal wins
          if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"))