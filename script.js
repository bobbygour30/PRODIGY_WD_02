let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let timer = null;
let lapCounter = 1;

// Creating a div to display lap times dynamically
let lapsContainer = document.getElementById("laps-container");

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    lapCounter = 1;
    lapsContainer.innerHTML = ""; // Clear lap times when resetting
}

function watchLap() {
    if (timer !== null) {
        const lapTime = displayTime.innerHTML;
        const lapItem = document.createElement("div");
        lapItem.className = "lap-item";
        lapItem.innerText = "Lap " + lapCounter + ": " + lapTime;
        lapsContainer.appendChild(lapItem);
        lapCounter++;
    }
}

start.addEventListener("click", watchStart);
stop.addEventListener("click", watchStop);
reset.addEventListener("click", watchReset);
lapButton.addEventListener("click", watchLap);