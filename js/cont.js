const video = new Request('../media/cont/background.webm');
const au = new Request('../media/cont/thucgiac.mp3');
var audio =  document.getElementById('background-audio');
audio.volume = 0.4;
fetch(video).then(response => {
    console.log('Video preloaded');
});


const duration = 3 * 1000;
const end = Date.now() + duration;

(function frame() {
    confetti({
        particleCount: 3,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'],
        zIndex: 3 
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    } else {
        setInterval(() => {
            confetti({
                particleCount: 5,
                startVelocity: 20,
                spread: 360,
                origin: { x: Math.random(), y: 0 },
                colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'],
                zIndex: 1 
            });
        }, 500);
    }
}());

setTimeout(() => {
    document.querySelector('.next-page').classList.add('show');
}, 5000);

document.querySelector('.next-page').addEventListener('click', function(event) {
    event.preventDefault();
    const bgSound = document.querySelector('#background-sound'); 
    let fadeInterval;
    const fadeDuration = 3000; 
    const fadeStep = 0.01; 
    const stepTime = fadeDuration * fadeStep; 

    if (bgSound) {
        let volume = bgSound.volume;
        fadeInterval = setInterval(() => {
            if (volume > fadeStep) {
                volume -= fadeStep; 
                bgSound.volume = Math.max(volume, 0); 
            } else {
                clearInterval(fadeInterval); 
                bgSound.pause(); 
            }
        }, stepTime);
    }

    document.querySelectorAll('.container, #background, #confetti-container').forEach(element => {
        element.classList.add('disappear');
    });

    
    setTimeout(() => {
        window.location.href = this.href; 
    }, 1000); 
});