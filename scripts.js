
let currentMarker = 'X'

const handleClick = (element) => {
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
}

const addMarker = (id) => {
  document.getElementById(id).innerHTML = currentMarker;
  changeMarker()
}

const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

const resetBoard = () => {
  let squares = document.getElementsByTagName('TD')
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
}