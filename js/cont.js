const video = new Request('../media/cont/background.webm');
var audio =  document.getElementById('background-audio');
audio.volume = 0.4;
fetch(video).then(response => {
    console.log('Video preloaded');
});