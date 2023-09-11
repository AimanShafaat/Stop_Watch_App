
var hourVal = 0;
var minVal = 0;
var secVal = 0;
var msecVal = 0;

var intervalValue;

var hourHeading = document.getElementById('hour');

var minHeading = document.getElementById('min');

var secHeading = document.getElementById('sec');

var msecHeading = document.getElementById('msec');



function startTimer() {
    msecVal++
    msecHeading.innerHTML = msecVal;

    if (msecVal >= 100) {
        secVal++
        secHeading.innerHTML = secVal;
        msecVal = 0
    }
    else if (secVal >= 60) {
        minVal++
        minHeading.innerHTML = minVal;
        secVal = 0
    }
    else if (minVal >= 60) {
        hourVal++
        hourHeading.innerHTML = hourVal;
        minVal = 0
    }
}


function startBtn() {
    intervalValue = setInterval(startTimer, 10);
}

function pauseBtn() {
    clearInterval(intervalValue);
}

function resetBtn() {
    hourVal = 0;
    minVal = 0;
    secVal = 0;
    msecVal = 0;
    hourHeading.innerHTML = hourVal;
    minHeading.innerHTML = minVal;
    secHeading.innerHTML = secVal;
    msecHeading.innerHTML = msecVal;
    pauseBtn();
}