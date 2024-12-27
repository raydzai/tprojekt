const video = new Request('../media/cont/background.webm');
const au = new Request('../media/cont/thucgiac.mp3');
var audio =  document.getElementById('background-audio');
audio.volume = 0.4;
fetch(video).then(response => {
    console.log('Video preloaded');
});