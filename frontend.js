function toggle_mode() {
    console.log("mode toggle button is pressed");
    var body = document.body;
    var calcBody = document.getElementById('calculator-body');
    var displayBtn = document.getElementById('display-btn');
    var toggleImg = document.querySelector('.mode-btn-pic');
    body.classList.toggle('body-dark-mode');
    calcBody.classList.toggle('calc-dark-mode');
    displayBtn.classList.toggle('dark-display-btn');
    toggleImg.classList.toggle('image_toggle');
}

const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', toggle_mode);