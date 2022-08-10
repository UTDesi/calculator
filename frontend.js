function toggle_mode() {
    console.log("mode toggle button is pressed");
    var body = document.body;
    var calcBody = document.getElementById('calculator-body');
    var displayBtn = document.getElementById('display-btn');
    body.classList.toggle('body-dark-mode');
    calcBody.classList.toggle('calc-dark-mode');
    displayBtn.classList.toggle('dark-display-btn');
    imgsrc = document.getElementById("mode-btn-pic").src;
    const imglogo = document.querySelector(".theme-logo");
    if(imgsrc){
        if(imgsrc.indexOf("https://cdn-icons-png.flaticon.com/512/2550/2550398.png") === -1){
            document.getElementById("mode-btn-pic").src = "https://cdn-icons-png.flaticon.com/512/2550/2550398.png";
        } else {
            document.getElementById("mode-btn-pic").src = "https://cdn1.iconfinder.com/data/icons/interface-59/24/brightness-light-up-day-mode-512.png";
            imglogo.style.cssText = "margin-left: 1px";
        }
    }
    
}

const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', toggle_mode);