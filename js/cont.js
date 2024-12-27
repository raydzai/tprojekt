const video = new Request('../media/cont/background.webm');
fetch(video).then(response => {
    console.log('Video preloaded');
});