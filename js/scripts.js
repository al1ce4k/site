const music = document.getElementById('background-music');
const muteButton = document.querySelector('.mute-button');
const icon = muteButton.querySelector('i');
const volumeSlider = document.getElementById('volume-slider');

let isPlaying = false;

// Function to toggle mute/unmute and play/pause
function toggleMusic() {
    if (!isPlaying) {
        music.volume = volumeSlider.value; // Set initial volume from slider value
        music.play();
        isPlaying = true;
        music.muted = false;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-music');
    } else if (music.muted) {
        music.muted = false;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-music');
    } else {
        music.muted = true;
        icon.classList.remove('fa-music');
        icon.classList.add('fa-volume-mute');
    }
}

// Function to adjust the volume based on slider input
function adjustVolume(value) {
    music.volume = value;
}

// Initialize volume slider to match the initial volume of the audio
volumeSlider.value = music.volume = 0.2; // Set the slider and audio volume to 20%

// Add event listener to update volume dynamically
volumeSlider.addEventListener('input', function() {
    adjustVolume(this.value);
});
