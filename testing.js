let buttonElement = document.querySelector('button');

buttonElement.style.backgroundColor = 'blue';
buttonElement.style.height = '50px';
buttonElement.style.width = '150px';

let buttonText = document.createTextNode("This is a button text");

buttonElement.appendChild(buttonText);
buttonElement.style.color = 'white';
buttonElement.style.fontSize = '18px';

function addUserName() {
    let inputElement = document.querySelector('input')
    console.log('inputElement');

    let inputElement = inputElement.value;
    console.log('inputValue', inputValue)
    
    let headerOne = document.querySelector('h1')
    let headerOneText = document.querySelector(inputValue)
    headerOne.appendChild(headerOneText)
}