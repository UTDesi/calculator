let op = 0;

let field1 = "";
let field2 = "";

const numButtons = document.querySelectorAll('.num-btn');
const oprButtons = document.querySelectorAll('.opr-btn');
const eqlBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot');
const negBtn = document.querySelector('#negate');
const clrBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
const display = document.querySelector('#display');

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(op == 0){
            field1.concat(button.innerHTML);
            display.innerHTML = field1;
        } else {
            field2.concat(button.innerHTML);
            display.innerHTML = field2;
        }
    });
});

oprButtons.forEach((button) => {
    button.addEventListener('click', () => {
        op = button.innerHTML;
    });
});