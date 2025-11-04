let display = document.getElementById('display');


let numberButton = document.getElementsByClassName('number-button');
console.log(numberButton);
let operatorButton = document.getElementsByClassName('operator-btn');
console.log(operatorButton);
let specialFunction = document.getElementsByClassName('special-function');


specialFunction[0].addEventListener('click', function clearScreen() {
    display.textContent = '';
}
);
specialFunction[1].addEventListener('click', function clear() {
    display.textContent -= '';
}
);
numberButton[0].addEventListener('click', function () {
    display.textContent += '7';
}
);
numberButton[1].addEventListener('click', function () {
    display.textContent += '8';
}
);
numberButton[2].addEventListener('click', function () {
    display.textContent += '9';
}
);
numberButton[3].addEventListener('click', function () {
    display.textContent += '4';
}
);
numberButton[4].addEventListener('click', function () {
    display.textContent += '5';
}
);
numberButton[5].addEventListener('click', function () {
    display.textContent += '6';
}
);
numberButton[6].addEventListener('click', function () {
    display.textContent += '1';
}
);
numberButton[7].addEventListener('click', function () {
    display.textContent += '2';
}
);
numberButton[8].addEventListener('click', function () {
    display.textContent += '3';
}
);
numberButton[9].addEventListener('click', function () {
    display.textContent += '0';
}
);
operatorButton[0].addEventListener('click', function () {
    display.textContent += '*';
}
);
operatorButton[1].addEventListener('click', function () {
    display.textContent += '/';
}
);
operatorButton[2].addEventListener('click', function () {
    display.textContent += '-';
}
);
operatorButton[3].addEventListener('click', function () {
    display.textContent += '+';
}
);
operatorButton[4].addEventListener('click', function () {
    display.textContent += '%';
}
);
operatorButton[5].addEventListener('click', function () {
    display.textContent += '.';
}
);
operatorButton[6].addEventListener('click', function calculate() {
        try {
            // evaluate the expression shown on the screen
            let result = eval(display.textContent);
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    }
)
