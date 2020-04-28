


/*


const getPosts = () => {
  return fetch('people.json')
    .then(res => res.json())
    .then(posts => console.log(posts))
}

//getPosts()

let post = {
  firstName: 'My Fetch Title',
  lastname: 'My Fetch body',
  id: 999
}

let newPost = post => {
  let options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  //return fetch('http://jsonplaceholder.typicode.com/posts', options)
  return fetch('people.json', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.error(`MyError: ${error}`))
}



newPost(post)

*/








let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let p = document.createElement('p')
let wh = "50px"
let xo = 'X'
let av = { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' }
let h1, h2, h3, v1, v2, v3, d1, d2

let createTable = () => {
  let tbl = document.createElement('table');

  let addCell = (tr, v) => {
    let td = document.createElement('td');
    td.id = v;
    tr.appendChild(td);
  };

  let addRow = (tbl, a) => {
    let tr = document.createElement('tr');
    a.forEach(e => {
      addCell(tr, e);
    });
    tbl.appendChild(tr);
  };

  a.forEach(e => {
    addRow(tbl, e);
  });
  tbl.border = 1
  tbl.cellPadding = 0
  tbl.cellSpacing = 0

  document.body.appendChild(tbl);
};


createTable();

let tbl = document.querySelector('table');
let td = tbl.getElementsByTagName('td');

let styleTable = (td) => {
  for (var cell of td) {
    cell.style.border = '1px solid black';
    cell.style.width = wh;
    cell.style.height = wh;
    cell.style.textAlign = 'center';
    cell.style.fontSize = '40px'
  };
};

styleTable(td);


let handleTdClick = (i) => {
  let cell = document.getElementById(i);
  if (cell.innerHTML == '') {
    cell.innerHTML = xo;
    av[i] = xo;
    xo == 'X' ? xo = 'O' : xo = 'X';
    checkForWinner();
  }
}

let addClickListener = (arr) => {
  for (var cell of arr) {
    cell.addEventListener('click', e => {
      handleTdClick(e.target.id);
    })
  }
}

let checkForWinner = () => {
  h1 = av[1] + av[2] + av[3]
  h2 = av[4] + av[5] + av[6]
  h3 = av[7] + av[8] + av[9]
  v1 = av[1] + av[4] + av[7]
  v2 = av[2] + av[5] + av[8]
  v3 = av[3] + av[6] + av[9]
  d1 = av[1] + av[5] + av[9]
  d2 = av[3] + av[5] + av[7]
  let hvd = [h1, h2, h3, v1, v2, v3, d1, d2]

  hvd.forEach(e => {
    if (e == "XXX" || e == "OOO") {
      p.innerHTML = 'Winner Winner Chicken Dinner!!!'
    }
  })
}

addClickListener(td);

let newGame = () => {
  p.innerHTML = '';
  for (let i in av) {
    av[i] = ''
  }

  for (let i in td) {
    td[i].innerHTML = ''
  }
}

let createPandBtn = () => {
  p.style.height = '25px'
  document.body.appendChild(p)
  let btn = document.createElement('button');
  btn.textContent = "Start New Game"
  btn.addEventListener('click', newGame);
  document.body.appendChild(btn)
}

createPandBtn()

