const btn = document.querySelectorAll('.btn');
let display = document.querySelector('.disp');
let arrArgument = [];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', f);
}

function f() {
    if (this.value === "=") {
        display.value = eval(arrArgument.join(''));
    } else {
        arrArgument.push(this.value);
        display.value = arrArgument.join('');
    }
}