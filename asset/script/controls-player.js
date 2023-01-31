const playerBox = document.getElementById('player-media');
const audio = document.getElementById('audio-1');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const duration = document.getElementById('duration');
const played = document.getElementById('played');

playerBox.dataset.state = "paused";

playButton.addEventListener('click', function () {
    if (playerBox.dataset.state === "paused") {
        audio.play();
        playerBox.dataset.state = 'playing';
    }
});

pauseButton.addEventListener('click', function () {
    if (playerBox.dataset.state === 'playing') {
        audio.pause();
        playerBox.dataset.state = 'paused';
    }
});

audio.addEventListener('loadedmetadata', function (event) {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', function (event) {
    played.textContent = formatTime(audio.currentTime);
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time) % 60;

    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}


