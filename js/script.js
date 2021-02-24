'use strict';

//#region Создание верстки
// Получаем головной элемент
const app = document.querySelector('.app');

const headerText = `Простейший Калькулятор`;
const footerText = `Все права на использующиеся здесь элементы принадлежат их авторам<br />
                    Создано в учебных целях с помощью HTML, CSS(SASS) и JS<br />
                    Автор : Asmadeus<br />
                    2021 г.`;
const iconArr = [
    '<i class="fas fa-plus"></i>', // 0 - Плюс
    '<i class="fas fa-minus"></i>', // 1 - Минус
    '<i class="fas fa-times"></i>', // 2 - Умножение
    '<i class="fas fa-divide"></i>', // 3 - Деление
    '<i class="fas fa-equals"></i>', // 4 - Равно
];
const operSelectors = [
    'plus', // 0 - Плюс
    'minus', // 1 - Минус
    'multiply', // 2 - Умножение
    'divide', // 3 - Деление
    'result' // 4 - Равно
];
const btnArr = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '.',
    '0',
    '<i class="fas fa-trash"></i>'
];

function createElement(element, selector, parent, inHTML) {
    const elem = document.createElement(element);
    elem.classList.add(selector);
    elem.innerHTML = inHTML;
    parent.append(elem);
}

function crtNumBtn(parent, sel, inText) {
    const div = document.createElement('button');
    div.classList.add('num__btn', sel);
    div.innerHTML = inText;
    parent.append(div);
}

function crtOperBtn(parent, inText, operSelectors) {
    const div = document.createElement('button');
    div.classList.add('oper__btn', operSelectors);
    div.innerHTML = inText;
    parent.append(div);
}
// Создаем Заголовок
createElement('header', 'header', app, headerText);
// Создаем "Корпус Калькулятора"
createElement('div', 'calc', app, '');
// Создаем Дисплей на Корпусе
createElement('div', 'calc__display', app.children[1], '');
// Создаем Кнопочный блок на Корпусе
createElement('div', 'calc__buttons', app.children[1], '');
// Создаем циклом Кнопки в цифровом блоке
createElement('div', 'btns__num', app.children[1].children[1], '');
for (let i = 0; i < 12; i++) {
    const div = app.children[1].children[1].children[0];
    crtNumBtn(div, 'num__btn', btnArr[i]);
}
// Создаем циклом Кнопки Управления
createElement('div', 'btns__oper', app.children[1].children[1], '');
for (let i = 0; i < 5; i++) {
    const div = app.children[1].children[1].children[1];
    crtOperBtn(div, iconArr[i], operSelectors[i]);
}
// Создаем Подвал
createElement('footer', 'footer', app, footerText);
//#endregion

//#region Обработчики и функционал

//#region Получение элементов со страницы
// Кнопки Мат. Операций
const calcOperMinus = document.querySelector('.minus');
const calcOperMultiply = document.querySelector('.multiply');
const calcOperDivide = document.querySelector('.divide');
const calcOperResult = document.querySelector('.result');
// Список всех кнопок в виде псевдомассвиа
const calcNums = document.querySelectorAll('.num__btn');
const calcOpers = document.querySelectorAll('.oper__btn');
// Дисплей
const display = document.querySelector('.calc__display');
// Добавления селектора CLN кнопке очищения
//#endregion

calcNums[11].classList.add('CLN');

function cleanDisplay() {
    display.innerHTML = '';
}
function numToDisplay(item) {
    display.innerHTML += item.innerHTML;
}
function strip(number) {
    return (parseFloat(number).toPrecision(4));
}
function calculate() {
    const [first, symbol, last] = display.innerHTML.split(/([+-/*])/gm);
    let mathResult;
    if (symbol == '+') {
        mathResult = Number(first) + Number(last);
    }
    if (symbol == '-') {
        mathResult = Number(first) - Number(last);
    }
    if (symbol == '*') {
        mathResult = Number(first) * Number(last);
    }
    if (symbol == '/') {
        if (last == '0') {
            mathResult = 'Делить на 0 нельзя!';
        } else if (Number(first) % Number(last) != 0) {
            mathResult = strip(Number(first) / Number(last));
        } else {
            mathResult = Number(first) / Number(last);
        }
    }
    display.innerHTML = mathResult;
}

function addELtoNums() {
    calcNums.forEach(item => {
        if (!item.classList.contains('CLN')) {
            item.addEventListener('click', () => {
                numToDisplay(item);
            });
        }
    });
    calcNums[11].addEventListener('click', cleanDisplay);
}
function addELtoOpers() {
    calcOpers.forEach(item => {
        if (!item.classList.contains('Result')) {
            item.addEventListener('click', () => {
                if (item.classList.contains('plus')) {
                    display.innerHTML += '+';
                }
                if (item.classList.contains('minus')) {
                    display.innerHTML += '-';
                }
                if (item.classList.contains('multiply')) {
                    display.innerHTML += '*';
                }
                if (item.classList.contains('divide')) {
                    display.innerHTML += '/';
                }
            });
        }
    });
    calcOpers[4].addEventListener('click', calculate);
}

function removeELtoNums() {
    calcNums.forEach(item => {
        if (!item.classList.contains('CLN')) {
            item.removeEventListener('click', () => {
                numToDisplay(item);
            });
        }
    });
}
function removeELtoOpers() {
    calcOpers.forEach(item => {
        if (!item.classList.contains('Result')) {
            item.removeEventListener('click', () => {
                if (item.classList.contains('plus')) {
                    display.innerHTML += '+';
                }
                if (item.classList.contains('minus')) {
                    display.innerHTML += '-';
                }
                if (item.classList.contains('multiply')) {
                    display.innerHTML += '*';
                }
                if (item.classList.contains('divide')) {
                    display.innerHTML += '/';
                }
            });
        }
    });
    calcOpers[4].removeEventListener('click', calculate);
}

// console.log(calcNumBtns);
// console.log(calcOperPlus);
// console.log(calcOperMinus);
// console.log(calcOperMultiply);
// console.log(calcOperDivide);
// console.log(calcOperResult);
console.log('-----------------------');
console.log(calcOpers);
console.log('-----------------------');
console.log(calcNums);

addELtoNums();
addELtoOpers();
//#endregion