let op = "0";

let field1 = " ";
let field2 = " ";

const numButtons = document.querySelectorAll('.num-btn');
const oprButtons = document.querySelectorAll('.opr-btn');
const eqlBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot');
const negBtn = document.querySelector('.neg-btn');
const clrBtn = document.querySelector('#clear');
const delBtn = document.querySelector('#delete');
let display = document.querySelector('#display');

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(op == "0"){
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
    if(op == "0" && !field1.includes(".")){
        field1 = field1.concat(dotBtn.innerHTML);
        display.innerHTML = field1;
    } else if(op != "0" && !field2.includes(".")) {
        field2 = field2.concat(dotBtn.innerHTML);
        display.innerHTML = field2;
    }
});

clrBtn.addEventListener('click', () => {
    field1 = " ";
    field2 = " ";
    op = "0";
    display.innerHTML = "0";
});

negBtn.addEventListener('click', () => {
    if(op == "0"){
        field1 = " " + (0 - parseFloat(field1)).toString();
        display.innerHTML = field1;
    } else {
        field2 = " " + (0 - parseFloat(field2)).toString();
        display.innerHTML = field2;
    }
})