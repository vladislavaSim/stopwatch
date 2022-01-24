let $stopWatchField = document.querySelector('.stopwatch-field');
let $watch = document.createElement('div');
$watch.classList.add('watch')
let $startStopBtn = document.querySelector('.start-stop')
let $resultsHolder = document.querySelector('.results-holder')
$stopWatchField.append($watch)
let [hours, minutes, seconds] = [0, 0, 0];

function createWatch() {
    $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
}
createWatch();

let interval;
function startWatch() {
    interval = setInterval(() => {
        if (seconds < 59) {
            seconds++
        } else if (seconds >= 59 && minutes < 59) {
            minutes++
            seconds = 0
        } else if (minutes >= 59) {
            minutes = 0;
            hours++
            seconds = 0
        }
        $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
    }, 1000)
}

let ticking = true;

document.querySelector('.start-stop').addEventListener('click', _ => {
        if(ticking) {
            $startStopBtn.innerHTML = 'pause'
            startWatch()
            ticking = false
        } else {
            let $res = document.createElement('div');
            $res.innerHTML = hours + ':' + minutes + ':' + seconds;
            $resultsHolder.append($res)
            $startStopBtn.innerHTML = 'start'
            clearInterval(interval)
            ticking = true
        }
        $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
})

document.querySelector('.reset').addEventListener('click', _ => {
    $startStopBtn.innerHTML = 'start'
    clearInterval(interval)
    ticking = true
    hours, minutes, seconds = 0;
    console.log(hours, seconds)
    $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
    $resultsHolder.innerHTML = ''
})