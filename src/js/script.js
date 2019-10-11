const btn = document.querySelectorAll('.btn');
let monitor = document.querySelector('.monitor');
let arr = [];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', f);
}

function f() {
    if (this.value === "=") {
        monitor.value = eval(arr.join(''));
    } else {
        arr.push(this.value);
        monitor.value = arr.join('');
    }
}