if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.body.style.backgroundColor = "white";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.innerHTML = "<h1 style='color: black; text-align: center;'>Truy cập từ thiết bị di động không được phép.</h1>";
}

const au = new Request('../media/hoahdsf.mp3');
au.volume = 0.4;

fetch(au).then(response => {
    console.log('Audio preloaded');
});

window.addEventListener("load", () => { // WORK
    const h1 = document.querySelector(".starter h1");
    const p = document.querySelector(".starter p");

    function changeElementContent(element, content) {
        element.classList.add("hidden");
        setTimeout(() => {
            element.innerHTML = content;
            element.classList.remove("hidden");
        }, 500);
    }

    function changeh1(s) {
        changeElementContent(h1, s);
    }

    function changep(s) {
        changeElementContent(p, s);
    }

    const typ = [
        "cảm thấy vui 170 lần", 
        "huhu <br>145 lần", 
        "hihi 168 lần", 
        "thấy shock 117 lần", 
        "thấy \"gớm\" cái gì đó 61 lần", 
        "complain về đời sống <br>37 lần", 
        "chửi tao 681 lần", 
        "gửi 😍 cho tao 202 cái", 
        "nói ghét tao 67 lần", 
        "nói xin chào 111 lần", 
        "nói tạm biệt 86 lần", 
        "đi ngủ <br>42 lần"
    ];

    const quo = [
        'Mày xứng đáng nhận danh hiệu Chim cu hay cười =)))). Mong bạn tuổi mới cười nhiều hơn. bAi.', 
        'Mày xứng đáng với danh hiệu Chúa tể nước mắt :)). Khóc gì khóc lắm, tuổi mới bớt khóc dùm.', 
        'Mày xứng đáng được trao tặng giải thưởng Bóng cười của năm :))). Mong bạn tuổi mới cười nhiều hơn.',
        'Mày xứng đáng nhận danh hiệu Shocker =))). Mong bạn tuổi mới ít shock hơn.',
        'Mày xứng đáng nhận danh hiệu Chúa tể của sự macoi =))). Mong bạn tuổi mới ít thấy gớm và phán xét người ta hơn.',
        'Mày xứng đáng được phong danh hiệu Thanh niên hay phàn nàn =))). Mong bạn tuổi mới ít phàn nàn dùm, nghe meejttttttttttt cccc',
        'Mày xứng đáng nhận đ với danh hiệu nào hết. Mong bạn tuổi mới ít chửi tao hơn. 😍',
        'Mày xứng đáng nhận danh hiệu 😍. Mong bạn tuổi mới bớt gửi 😍 dùm, phiền nhé!',
        'Mày xứng đáng được vinh danh với tư cách Tự đạp cớt mình, chung một giuộc mà hay ghét nhau v??',
        "Phong phong cái củ c. Mong bạn tuổi mới xinh trào hơn nhé, bai",
        "Tạm biệt chứ đừng vĩnh biệt. Xin cảm ơn bạn đã đồng hành!",
        "Mất dạy vc, đang nhắn là đi ngủ, cccccccccccccccc (à quên t cũng hay d hihi)"
    ];
      
    const emo = ['😊', '😭', '😂', '😱', '🤢', '😤', '😡', '😍', '😡', '😎', '🤯', '😴'];

    const video = document.querySelector("#background-video");
    const starter = document.querySelector(".starter");
    const container = document.querySelector(".container");
    const hx1 = document.querySelector(".container h1");
    const p1 = document.querySelector(".container p");
    const ic = document.querySelector(".container .icon");
    const navigation = document.querySelector(".navigation");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Các đoạn code xử lý tiếp tục từ đây
    setTimeout(() => {
        video.classList.add("show");
        console.log("show video");
    }, 1000);
    
    setTimeout(() => {
        starter.classList.add("show");
    }, 2000);

    setTimeout(() => {
        changeh1("Chà, nhanh nhỉ?"); 
        changep("Một năm đã trôi qua rồi đó, mà mặt mày vẫn như mặt l!!")
    }, 10000);

    setTimeout(() => {
        changeh1("Xem lại nhé?");
        changep("Xem lại mày với tao đã làm gì trong năm qua =)))))");
    }, 18000);

    setTimeout(() => {
        starter.classList.add("fade-out");
    }, 25000);  

    setTimeout(() => {
        changeh1("Năm qua, mày đã...")
        changep("đã... ??")
        starter.classList.remove("fade-out");
        starter.classList.add("show");
    }, 27000);

    setTimeout(() => {
        starter.classList.add("fade-out");
    }, 30000);  
    
    setTimeout(() => {
        container.classList.add("show");
        setTimeout(() => {
            navigation.classList.remove("hidden");
        }, 1000);
    }, 31000);
    
    
    let currentIndex = 0;

    const updateContent = (index) => {
        hx1.innerHTML = `mày ${typ[index]}`;
        p1.innerHTML = `...trong năm nay. ${quo[index]}`;
        ic.innerHTML = emo[index];
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
    };

    const showContainer = () => {
        container.classList.remove("fade-out");
        container.classList.add("show");
    };

    const transitionEffect = () => {
        container.classList.remove("show");
        container.classList.add("fade-out");
        setTimeout(() => {
            showContainer();
        }, 500);
    };

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            transitionEffect();
            setTimeout(() => updateContent(currentIndex), 500);
            updateButtons();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < typ.length - 1) {
            currentIndex++;
            transitionEffect();
            setTimeout(() => updateContent(currentIndex), 500);
            updateButtons();
        } else if (currentIndex === typ.length - 1) {
            container.style.opacity = 0;
            container.classList.add("fade-out");
            navigation.classList.add("fade-out");

            setTimeout(() => {
                changeh1("À quên...");
                changep("Bạn còn có một tin nhắn nữa! <br> Tin nhắn từ raydzaihjhjhjhjhj");
                starter.classList.remove("fade-out");
                starter.classList.add("show");
            }, 500);

            setTimeout(() => {
                starter.classList.add("fade-out");
            }, 5000);
        
            setTimeout(() => {
                const sn = document.querySelector(".sn");
                sn.classList.add("show")
            }, 6000);
        }
    });

    setTimeout(() => {
        video.classList.add("show");
    }, 1000);

    setTimeout(() => {
        starter.classList.add("show");
    }, 2000);

    setTimeout(() => {
        starter.classList.add("fade-out");
    }, 25000);

    setTimeout(() => {
        container.classList.add("show");
        navigation.classList.remove("hidden");
        updateContent(currentIndex);
        updateButtons();
    }, 31000);
});

const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio');
const timeDisplay = document.getElementById('time-display');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTime() {
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration || 0);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        // Dừng nhạc nền nếu đang phát
        const backgroundAudio = document.querySelector('audio');
        if (!backgroundAudio.paused) {
            backgroundAudio.pause();  // Dừng nhạc nền
            backgroundAudio.currentTime = 0;  // Đưa nhạc nền về đầu
        }

        audio.play();  // Phát nhạc mới
        playBtn.textContent = '▶️ Đang phát:';
        playBtn.classList.add('playing');
    } else {
        audio.pause();  // Tạm dừng nhạc
        playBtn.textContent = '⏹ Đã ngưng';
        playBtn.classList.remove('playing');
    }
});


audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('loadedmetadata', updateTime);