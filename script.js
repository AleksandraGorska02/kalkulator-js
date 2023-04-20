const mainNumber = document.querySelector('.mainNumber');
const firstNumber = document.querySelector('.firstNumber p');
const sign = document.querySelector('.sign');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn = document.querySelector('.btnHistory');
let result = '';


 

function display () {
    if(this.textContent === '.' && mainNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && mainNumber.innerHTML === '') return mainNumber.innerHTML = '0.'

    mainNumber.innerHTML += this.textContent;
}


function operate () {
    if(mainNumber.innerHTML === '' && this.textContent ==='-'){
        mainNumber.innerHTML = '-';
        return;
    }
     else if (mainNumber.innerHTML === '') {
        return;
     }
     if(sign.innerHTML !== '') {
         showResult();
     }
     firstNumber.innerHTML = mainNumber.innerHTML;
     sign.innerHTML = this.textContent;
     mainNumber.innerHTML ='';
}


function showResult () {
    if(firstNumber.innerHTML === '' || mainNumber.innerHTML === '') return;

    let a = Number(mainNumber.innerHTML);
    let b = Number(firstNumber.innerHTML);
    let operator = sign.innerHTML;


    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
        case '2^':
        result = b ** a;
        break;
    }

   
    mainNumber.innerHTML = result;
    firstNumber.innerHTML = '';
    sign.innerHTML = '';

}

function clearScreen () {
    result = '';
    mainNumber.innerHTML = '';
    firstNumber.innerHTML = '';
    sign.innerHTML = '';

}


operatorsButtons.forEach((button) => button.addEventListener('click', operate))
 equalsButton.addEventListener('click', showResult);
 clearButton.addEventListener('click', clearScreen);
 numbersButtons.forEach((button) => {
     button.addEventListener('click', display)
 })
 
 


