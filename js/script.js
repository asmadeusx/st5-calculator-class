'use strict';

//#region Создание верстки
// Получаем головной элемент
const app = document.querySelector('.app');

const headerText = `Простейший Калькулятор<br />
                    <h5>для двух чисел</h5>`;
const footerText = `Создано в учебных целях с помощью<br />
                    HTML, SCSS(SASS) и JavaScript
                    <br />
                    <br />
                    Asmadeus, 2021 г.`;
const iconArr = [
    '<i class="fas fa-divide"></i>', // 0 - Деление
    '<i class="fas fa-times"></i>', // 1 - Умножение
    '<i class="fas fa-minus"></i>', // 2 - Минус
    '<i class="fas fa-plus"></i>', // 3 - Плюс
    '<i class="fas fa-equals"></i>', // 4 - Равно
];
const operSelectors = [
    'divide', // 0 - Плюс
    'multiply', // 1 - Минус
    'minus', // 2 - Умножение
    'plus', // 3 - Деление
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
// Карта APP
// app.children[0] - header
// app.children[1] - calc
// app.children[1].children[0] - calc__main
// app.children[1].children[0].children[0] - main__display
// app.children[1].children[0].children[0].children[0] - display__display
// app.children[1].children[0].children[0].children[1] - display__historyBtn
// app.children[1].children[0].children[1] - main__btns
// app.children[1].children[0].children[1].children[0] - btns__num
// app.children[1].children[0].children[1].children[1] - btns__oper
// app.children[1].children[1] - calc__history
// app.children[1].children[1].children[0] - history__display
// app.children[2] - footer

// Создаем Заголовок
createElement('header', 'header', app, headerText);

// Создаем "Корпус Калькулятора"
createElement('div', 'calc', app, '');

// Создаем Левую часть
createElement('div', 'calc__main', app.children[1], '');
// Создаем Правую часть
// createElement('div', 'calc__history', app.children[1], '');

// Создаем Блок Дисплея на Корпусе
createElement('div', 'main__display', app.children[1].children[0], '');
// Создаем Дисплей в блоке Дисплея
createElement('div', 'display__display', app.children[1].children[0].children[0], '');
// Создаем Кнопку истории в блоке Дисплея
createElement('button', 'display__historyBtn', app.children[1].children[0].children[0], '<i class="fas fa-chevron-right"></i>');
// Создаем Кнопочный блок на Корпусе
createElement('div', 'main__btns', app.children[1].children[0], '');
// Создаем циклом Кнопки в цифровом блоке
createElement('div', 'btns__num', app.children[1].children[0].children[1], '');
for (let i = 0; i < 12; i++) {
    const div = app.children[1].children[0].children[1].children[0];
    crtNumBtn(div, 'num__btn', btnArr[i]);
}
// Создаем циклом Кнопки Управления
createElement('div', 'btns__oper', app.children[1].children[0].children[1], '');
for (let i = 0; i < 5; i++) {
    const div = app.children[1].children[0].children[1].children[1];
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
const display = document.querySelector('.display__display');
// Кнопка Истории
const historyBtn = document.querySelector('.display__historyBtn');


// Добавления селектора CLN кнопке очищения.
calcNums[11].classList.add('CLN');
// Добавления селектора CLN кнопке очищения.
calcNums[11].classList.add('CLN');

//#endregion
historyBtn.addEventListener('click', () => {
    if (app.children[1].children[1]) {
        app.children[1].children[1].remove();
        historyBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    } else {
        createElement('div', 'calc__history', app.children[1], '');
        createElement('div', 'history__display', app.children[1].children[1], '');
        historyBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }
});

function cleanDisplay() {
    display.innerHTML = '';
}

function numToDisplay(item) {
    display.innerHTML += item.innerHTML;
}

function numAfterDOT(number) {
    return (parseFloat(number).toFixed(2));
}

function historyWrite(a, b, c, d) {
    if (app.children[1].children[1]) {
        const historyDisplay = document.querySelector('.history__display');
        const historyParagraph = document.createElement('p');
        historyDisplay.append(historyParagraph);
        historyParagraph.innerHTML = `${a} ${c} ${b} = ${d}`;
    }
}

function calculate() {
    const calcArr = display.innerHTML.split(/(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/gm);
    let mathResult;
    calcArr[1] = parseFloat(calcArr[1]);
    calcArr[3] = parseFloat(calcArr[3]);

    if (calcArr[2] == '/') {
        if (calcArr[3] == 0) {
            mathResult = `Делить на 0 нельзя!`;
        } else {
            mathResult = calcArr[1] / calcArr[3];
        }
        historyWrite(calcArr[1], calcArr[3], '/', mathResult);
    }
    if (calcArr[2] == '*') {
        mathResult = calcArr[1] * calcArr[3];
        historyWrite(calcArr[1], calcArr[3], '*', mathResult);
    }
    if (calcArr[2] == '-') {
        mathResult = calcArr[1] - calcArr[3];
        historyWrite(calcArr[1], calcArr[3], '-', mathResult);
    }
    if (calcArr[2] == '+') {
        mathResult = calcArr[1] + calcArr[3];
        historyWrite(calcArr[1], calcArr[3], '+', mathResult);
    }
    if (typeof display.innerHTML == 'string') {
        display.innerHTML = mathResult;
    } else {
        display.innerHTML = numAfterDOT(mathResult);
    }
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

addELtoNums();
addELtoOpers();
//#endregion