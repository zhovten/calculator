const btn = document.querySelectorAll('.btn');
let monitor = document.querySelector('.monitor');
let arr = [];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', click);
}

function click() {
    if (this.value === "C") {
        monitor.value = 0;
        arr = [];
    } else {
        if (this.value === "=") {
            monitor.value = eval(arr.join(''));
            arr = [monitor.value];
        } else {
            arr.push(this.value);
            monitor.value = arr.join('');
        }
    }
}