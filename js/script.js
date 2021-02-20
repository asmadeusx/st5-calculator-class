'use strict';

//#region Создание верстки
const nums = document.querySelector('.btns__num');
const opers = document.querySelector('.btns__oper');
const numBtns = document.querySelectorAll('.num__btn');
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
    '<i class="fas fa-backspace"></i>'
];

function createElement(element, selector, parent, inHTML) {
    const elem = document.createElement(element);
    elem.classList.add(selector);
    elem.innerHTML = inHTML;
    parent.append(elem);
}

function crtNumBtn(parent, sel, inText) {
    const div = document.createElement('div');
    div.classList.add('num__btn', sel);
    div.innerHTML = inText;
    parent.append(div);
}

function crtOperBtn(parent, inText, operSelectors) {
    const div = document.createElement('div');
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
const calcNumBtns = document.querySelector('.num__btn');
const calcOperPlus = document.querySelector('.plus');
const calcOperMinus = document.querySelector('.minus');
const calcOperMultiply = document.querySelector('.multiply');
const calcOperDivide = document.querySelector('.divide');
const calcOperResult = document.querySelector('.result');
const calcNums = document.querySelector('.btns__num').children;
const calcOpers = document.querySelector('.btns__oper').children;


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
//#endregion