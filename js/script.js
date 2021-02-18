'use strict';

//#region Получение элементов
// Дисплей
// const display = document.querySelectorAll('.dsp');
const display = document.querySelector('.dsp');
// Кнопки управления
const btnsNum = document.querySelectorAll('.btnNum');
const btnsOper = document.querySelectorAll('.buttons__operations');
const btnCln = document.querySelector('.btnCLN');
const btnDot = document.querySelector('.btnDot');
const btnPlus = document.querySelector('.operations__plus');
const btnMinus = document.querySelector('.operations__minus');
const btnMultiply = document.querySelector('.operations__multiply');
const btnDivide = document.querySelector('.operations__divide');
const btnResult = document.querySelector('.operations__result');
//#endregion

let numA = 0;
let numB = 0;
let mathResult = 0;

function clearDisplay() {
    display.innerText = '';
}

function numToDisplay(item) {
    display.innerText += item.innerText;
}

btnsNum.forEach(item => {
    clearDisplay();
    item.addEventListener('click', () => {
        numToDisplay(item);
    });
    btnDotOn();
});

function dot() {
    display.innerText += '.';
    btnDot.removeEventListener('click', dot);
}
function btnDotOn() {
    btnDot.addEventListener('click', dot); 
}

btnPlus.addEventListener('click', (event) => {
    if (event.target.classList.contains('plus')) {
        numA = Number(display.innerHTML);
        clearDisplay();
        event.target.classList.add('marker');
        btnDotOn();
    }
});

btnMinus.addEventListener('click', (event) => {
    if (event.target.classList.contains('minus')) {
        numA = Number(display.innerHTML);
        clearDisplay();
        event.target.classList.add('marker');
        btnDotOn();
    }
});

btnMultiply.addEventListener('click', (event) => {
    if (event.target.classList.contains('multiply')) {
        numA = Number(display.innerHTML);
        clearDisplay();
        event.target.classList.add('marker');
        btnDotOn();
    }
});

btnDivide.addEventListener('click', (event) => {
    if (event.target.classList.contains('divide')) {
        numA = Number(display.innerHTML);
        clearDisplay();
        event.target.classList.add('marker');
        btnDotOn();
    }
});

// btnsOper.forEach(item => {
//     item.addEventListener('click', (event) => {
//         numA = Number(display.innerHTML);
//         if (event.target.classList.contains('plus')) {
//             item.classList.add('marker');
//             clearDisplay();
//         }
//         if (event.target.classList.contains('minus')) {
//             item.classList.add('marker');
//             clearDisplay();
//         }
//         if (event.target.classList.contains('multiply')) {
//             item.classList.add('marker');
//             clearDisplay();
//         }
//         if (event.target.classList.contains('divide')) {
//             item.classList.add('marker');
//             clearDisplay();
//         }
//         btnDotOn();
//     });
// });

// Кнопка Очищения Дисплея
btnCln.addEventListener('click', clearDisplay);

function result() {
    const marker = document.querySelector('.marker');
    if (marker.classList.contains('plus')) {
        mathResult = numA + numB;
        marker.classList.remove('marker');
    }
    if (marker.classList.contains('minus')) {
        mathResult = numA - numB;
        marker.classList.remove('marker');
    }
    if (marker.classList.contains('multiply')) {
        mathResult = numA * numB;
        marker.classList.remove('marker');
    }
    if (marker.classList.contains('divide')) {
        mathResult = numA / numB;
        marker.classList.remove('marker');
    }
    clearDisplay();
    display.innerHTML = mathResult;
}

// Кнопка Просчета и выдачи результата
btnResult.addEventListener('click', () => {
    numB = Number(display.innerHTML);
    result();
});