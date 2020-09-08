var seconds = 00;
var minutes = 00;
var start = false;
var timer = setInterval(null,1000);

function Start() {
    start = true;
    seconds++;
    if (seconds >= 60) {
        seconds = 00;
        minutes++
    }
    document.getElementById("time").innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}

function Disable() {
    if (start === true) {
        document.getElementById('Start').disabled = true;
    } else if (start === false) {
        document.getElementById('Start').disabled = false;
    }
}


function Timer() {
    if (start === true) {
        timer = setInterval(Start,1000);
    }
}

function Stop() {
    clearInterval(timer);
    start = false;
}

function Reset() {
    seconds = 00;
    minutes = 00;
    clearInterval(timer);
    start = false;
    document.getElementById("time").innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}