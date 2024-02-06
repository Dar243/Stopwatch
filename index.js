// let countdownInterval;
// let countdownTime = 0;

// let stopwatchInterval;
// let stopwatchTime = 0;

// function startCountdown() {
//     countdownInterval = setInterval(updateCountdown, 1000);
// }

// function stopCountdown() {
//     clearInterval(countdownInterval);
// }

// function resetCountdown() {
//     clearInterval(countdownInterval);
//     countdownTime = 0;
//     updateCountdown();
// }

// function updateCountdown() {
//     const display = document.getElementById('countdown-display');
//     const hours = Math.floor(countdownTime / 3600);
//     const minutes = Math.floor((countdownTime % 3600) / 60);
//     const seconds = countdownTime % 60;
//     display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
//     countdownTime++;
// }

// function startStopwatch() {
//     stopwatchInterval = setInterval(updateStopwatch, 1000);
// }

// function stopStopwatch() {
//     clearInterval(stopwatchInterval);
// }

// function resetStopwatch() {
//     clearInterval(stopwatchInterval);
//     stopwatchTime = 0;
//     updateStopwatch();
// }

// function updateStopwatch() {
//     const display = document.getElementById('stopwatch-display');
//     const hours = Math.floor(stopwatchTime / 3600);
//     const minutes = Math.floor((stopwatchTime % 3600) / 60);
//     const seconds = stopwatchTime % 60;
//     display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
//     stopwatchTime++;
// }

// function formatTime(value) {
//     return value < 10 ? `0${value}` : value;
// }