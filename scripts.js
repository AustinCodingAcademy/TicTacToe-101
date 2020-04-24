
let currentMarker = 'X'
let a = {};
let n = 1

while (n <= 9) {
  a[n] = "";
  n++
}

const handleClick = (element) => {
  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id)
  }
}

const addMarker = (id) => {
  document.getElementById(id).innerHTML = currentMarker;
  a[id] = currentMarker
  changeMarker()
}


let changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }

  CheckForWinner();
}

const resetBoard = () => {
  let squares = document.getElementsByTagName('TD')
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
  resetArray()
}


let h1, h2, h3, v1, v2, v3, d1, d2

let CheckForWinner = () => {
  h1 = a[1] + a[2] + a[3]
  h2 = a[4] + a[5] + a[6]
  h3 = a[7] + a[8] + a[9]

  v1 = a[1] + a[4] + a[7]
  v2 = a[2] + a[5] + a[8]
  v3 = a[3] + a[6] + a[9]

  d1 = a[1] + a[5] + a[9]
  d2 = a[3] + a[5] + a[7]

  hvd = [h1, h2, h3, v1, v2, v3, d1, d2]

  hvd.forEach(e => {
    if (e == "XXX" || e == "OOO") {
      console.log('winner')
      setTimeout(() => {
        alert('Winner Winner Chicken Dinner!!!!')
      }, 100);
    }
  })
}


let resetArray = () => {
  h1 = '', h2 = '', h3 = '', v1 = '', v2 = '', v3 = '', d1 = '', d2 = ''
  for (let indexVal in a) {
    a[indexVal] = "";
  };

}






