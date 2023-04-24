var btnOpt = document.querySelectorAll('.sign');
var screen = document.querySelector('.create');
var numbers = document.querySelectorAll('.numbers');
var clear = document.querySelector('.clear');
var procent = document.querySelector('.percent');
var plusMinus = document.querySelector('.plusMinus');
var optState = false;
var opt = '';
var final = 0;


numbers.forEach(numbers => {
    numbers.addEventListener('click', showNumber);

    function showNumber() {
        if (screen.textContent == '0' || optState) {
            screen.textContent = '';
        }
        screen.textContent += this.textContent;
        optState = false
    }
});

btnOpt.forEach(operator => {
    operator.addEventListener('click', calculator);

    function calculator() {
        optState = true;
        var newOpt = this.textContent

        switch (opt) {
            case '+':
                screen.textContent = final + Number(screen.textContent);
                break;
            case '-':
                screen.textContent = final - Number(screen.textContent);
                break;
            case 'x':
                screen.textContent = final * Number(screen.textContent);
                break;
            case '/':
                screen.textContent = final / Number(screen.textContent);
                break;
        }

        final = Number(screen.textContent);
        opt = newOpt;
    }
});

clear.addEventListener('click', function () {
    screen.textContent = '0';
});

procent.addEventListener('click', function () {
    screen.textContent = screen.textContent / 100;
});

plusMinus.addEventListener('click', function () {
    if (Math.sign(screen.textContent) == '-1') {
        screen.textContent = Math.abs(screen.textContent);
    } else {
        screen.textContent = -screen.textContent;
    }
});