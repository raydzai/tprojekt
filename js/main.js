if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.body.style.backgroundColor = "white";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.innerHTML = "<h1 style='color: black; text-align: center;'>Truy cập từ thiết bị di động không được phép.</h1>";
}


document.querySelector('audio').volume = 0.4;

const duration = 3 * 1000;
const end = Date.now() + duration;

(function frame() {
    confetti({
        particleCount: 3,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'],
        zIndex: 3 // Đặt z-index của confetti thấp hơn video nền
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
                zIndex: 1 // Đặt z-index của confetti thấp hơn video nền
            });
        }, 500);
    }
}());

setTimeout(() => {
    document.querySelector('.next-page').classList.add('show');
}, 5000);

document.querySelector('.next-page').addEventListener('click', function(event) {
    event.preventDefault();
    const bgSound = document.querySelector('#background-sound'); // Đối tượng âm thanh
    let fadeInterval;
    const fadeDuration = 3000; // Thời gian giảm âm thanh (ms)
    const fadeStep = 0.01; // Mỗi lần giảm âm lượng bao nhiêu
    const stepTime = fadeDuration * fadeStep; // Thời gian mỗi bước

    if (bgSound) {
        let volume = bgSound.volume;
        fadeInterval = setInterval(() => {
            if (volume > fadeStep) {
                volume -= fadeStep; // Giảm âm lượng
                bgSound.volume = Math.max(volume, 0); // Đảm bảo không xuống dưới 0
            } else {
                clearInterval(fadeInterval); // Dừng giảm âm lượng khi đạt 0
                bgSound.pause(); // Tạm dừng âm thanh
            }
        }, stepTime);
    }

    document.querySelectorAll('.container, #background-video, #confetti-container').forEach(element => {
        element.classList.add('disappear');
    });

    // Tăng thời gian chuyển trang để khớp với thời gian fade-out âm thanh
    setTimeout(() => {
        window.location.href = this.href; // Chuyển trang
    }, 1000); // Fade âm thanh + thời gian hiệu ứng
});
