const playBtn = document.querySelector('.play');
const videoBox = document.querySelector('.trailer');
const closeBtn = document.querySelector('.close-btn');
const currentVideo = document.querySelector('video');
playBtn.addEventListener('click', toggleVideo);
closeBtn.addEventListener('click', toggleVideo);

function toggleVideo() {
    videoBox.classList.toggle('active');
    currentVideo.currentTime = 0;
    currentVideo.pause();
}