
let currentMarker = 'X'
const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}
const addMarker = (id) => {
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
if(document.getElementById(element.id).innerHTML)
  changeMarker(element.id)

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
    if(!document.getElementById(bottom-left).innerHTML){
        addMarker(bottom.left)
    }

    const addMarker = (id) => {
        console.log(`*** The current marker is:  ${currentMarker}. ***`)
        console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
      if(document.getElementById(bottom-left).innerHTML)
        changeMarker(bottom.left)  
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
       
