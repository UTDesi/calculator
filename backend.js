let op = "0";

let field1 = '';
let field2 = '';

const numButtons = document.querySelectorAll('.num-btn'); //
const oprButtons = document.querySelectorAll('.opr-btn'); //
const eqlBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot'); //
const negBtn = document.querySelector('#negate'); //
const clrBtn = document.querySelector('#clear'); //
const delBtn = document.querySelector('#delete');
let display = document.querySelector('#display-btn'); //

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (op == "0") {
            field1 = field1.concat(button.innerHTML);
            display.innerHTML = field1;
        } else {
            field2 = field2.concat(button.innerHTML);
            display.innerHTML = field2;
        }
    });
});

oprButtons.forEach((button) => {
    button.addEventListener('click', () => {
        op = button.innerHTML;
    });
});

dotBtn.addEventListener('click', () => {
    if (op == "0" && !field1.includes(".")) {
        field1 = field1.concat(dotBtn.innerHTML);
        display.innerHTML = field1;
    } else if (op != "0" && !field2.includes(".")) {
        field2 = field2.concat(dotBtn.innerHTML);
        display.innerHTML = field2;
    }
});

clrBtn.addEventListener('click', () => {
    field1 = '';
    field2 = '';
    op = "0";
    display.innerHTML = field1;
});


negBtn.addEventListener('click', () => {
    if (op == "0") {
        field1 = eval(-1 * field1);
        field1 = "" + field1;
        display.innerHTML = field1;
    } else {
        field2 = eval(-1 * field2);
        field2 = "" + field2;
        display.innerHTML = field2;
    }
});

delBtn.addEventListener('click', () => {
    if(op == "0"){
        field1 = field1.slice(0,-1);
        display.innerHTML = field1;
    } else {
        field2 = field2.slice(0,-1);
        display.innerHTML = field2;
    }
});

eqlBtn.addEventListener('click', () => {
    if(op == "x"){
        op = "*";
    }
    let result = eval(field1 + op + field2);
    field1 = result;
    display.innerHTML = field1;
})