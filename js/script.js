'use strict';


const nums = document.querySelector('.btns__num');
const opers = document.querySelector('.btns__oper');
const numBtns = document.querySelectorAll('.num__btn');

function crtNumBtn(parent, sel, inText) {
    const div = document.createElement('div');
    div.classList.add('num__btn', sel);
    div.innerHTML = inText;
    parent.append(div);
}

function crtOperBtn(parent, inText) {
    const div = document.createElement('div');
    div.classList.add('oper__btn');
    div.innerHTML = inText;
    parent.append(div);
}

crtNumBtn(nums, 'num__btn', '7');
crtNumBtn(nums, 'num__btn', '8');
crtNumBtn(nums, 'num__btn', '9');
crtNumBtn(nums, 'num__btn', '4');
crtNumBtn(nums, 'num__btn', '5');
crtNumBtn(nums, 'num__btn', '6');
crtNumBtn(nums, 'num__btn', '1');
crtNumBtn(nums, 'num__btn', '2');
crtNumBtn(nums, 'num__btn', '3');
crtNumBtn(nums, 'DOT', '.');
crtNumBtn(nums, 'num__btn', '0');
crtNumBtn(nums, 'CLN', '<i class="fas fa-backspace"></i>');
crtOperBtn(opers, '<i class="fas fa-plus plus"></i>');
crtOperBtn(opers, '<i class="fas fa-minus minus"></i>');
crtOperBtn(opers, '<i class="fas fa-times multiply"></i>');
crtOperBtn(opers, '<i class="fas fa-divide divide"></i>');
crtOperBtn(opers, '<i class="fas fa-equals"></i>');