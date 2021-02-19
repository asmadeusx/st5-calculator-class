'use strict';


const numDiv = document.querySelector('.buttons__num');
const test = document.createElement('num_btn');
class Button {
    constructor(innertext, selector) {
        this.innertext = innertext;
        this.selector = selector;
    }
}

const btn1 = new Button('1', 'num__btn');

document.numDiv.appendChild(test);