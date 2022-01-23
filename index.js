let $container = document.querySelector('.container');
let $stopWatchField = document.querySelector('.stopwatch-field');
let $watch = document.createElement('div');
$stopWatchField.append($watch)

let [hours, minutes, seconds] = [0, 0, 0];
function createWatch() {
    console.log(seconds)
    let res = [hours, minutes, seconds]
    let interval = setInterval(() => {
        if(seconds < 59) {
            seconds++
        } else if(seconds >= 59 && minutes < 59) {
            minutes++
            seconds = 0
        } else if(minutes >= 59) {
            minutes = 0;
            hours++
            seconds = 0
        }
        console.log(seconds, minutes)
        $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
    }, 1000)

    return res
}

function showWatch() {
   let res = createWatch();

}
//
showWatch()
document.querySelector('.reset').addEventListener('click', _ => {
    [hours, minutes, seconds] = [0, 0, 0];
    $watch.innerHTML = hours + ':' + minutes + ':' + seconds;
})