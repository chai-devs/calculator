let screen = document.getElementById('screen')
let btn = document.querySelectorAll('.btn')
// let ss =document.getElementsByClassName(".ss")


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        

        if (btntext == 'x') {
            btntext = '*'
        }
        if (btntext == '÷') {
            btntext = '/'
        }
        if (btntext == '-') {
            btntext = '-'
        }
        if (btntext == '+') {
            btntext = '+'
        }
        if(btntext == 'x^2'){
            value =square();
        }
        screen.value += btntext;
    }
)}



function sin() {
    screen.value = Math.sin(screen.value * Math.PI / 180)
}
function cos() {
    screen.value = Math.cos(screen.value * Math.PI / 180)
}
function tan() {
    screen.value = Math.tan(screen.value * Math.PI / 180)
}
function pow() {
    screen.value = Math.pow(screen.value,2)
}
function poww() {
    screen.value = Math.pow(screen.value, 3)
}

function powww() {
    screen.value = Math.pow(screen.value,screen.value)
}


function sqrt() {
    screen.value = Math.sqrt(screen.value, 2)
}
function log() {
    screen.value = Math.log(screen.value)
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1
    num = screen.value
    for (i = 1; i <= num; i++) {
        f = f * i
    }
    i = i - 1

    screen.value = f
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}




function s_off() {
    screen.value = " ";
    screen.style.color = '#ecf0f3'
}


function s_on() {
    screen.value = "";
    // screen.style.color=disabled;

    screen.style.removeProperty("color")

}