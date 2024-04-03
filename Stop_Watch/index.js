
// msec = Miliseconds,
// sec = Seconds,
// min = Minutes,
// hr = Hours


let [msec, sec, min, hr] = [0, 0, 0, 0];
let display = document.getElementById("timeDisplay");

let int = null; //int=interval

// function working behind the start of stopwatch.
function stopwatch() {
    msec += 10;
    if (msec == 1000) {
        sec++;
        msec = 0;
        if(sec == 60){
            min++ ;
            sec = 0;
            if(min==60){
                hr++;
                min = 0;
            }
        }
    }

    let ms = msec < 10 ? "00" + msec:msec < 100 ? "0" + msec:msec;
    let s = sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;
    let h = hr < 10 ? "0" + hr : hr;
    display.innerHTML = `${h} : ${m} : ${s} .${ms}`;
}

// Start the timer
function start() {
    if(int != null) {
        clearInterval(int);
    }
    int = setInterval(stopwatch, 10);
}

// Pause the timer
function pause() {
    clearInterval(int);
    int = null;
}

// Reset the timer to zero
function  reset() {
    clearInterval(int);
    [msec, sec, min, hr] = [0, 0, 0, 0];
    display.innerHTML = "00 : 00 : 00 .000";
}