if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.body.style.cssText = `
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    `;
    document.body.innerHTML = `<h1 style="color: black; text-align: center;">Truy cập từ thiết bị di động không được phép.</h1>`;
}

function changeh1(s) {
    const h1 = document.querySelector(".starter h1");
    h1.classList.add("hidden");
    setTimeout(() => {
        h1.innerHTML = s;
        h1.classList.remove("hidden");
    }, 500);
}

function changep(s) {
    const p = document.querySelector(".starter p");
    p.classList.add("hidden");
    setTimeout(() => {
        p.innerHTML = s;
        p.classList.remove("hidden");
    }, 500);
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

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");
    const starter = document.querySelector(".starter");
    const container = document.querySelector(".container");
    const hx1 = document.querySelector(".container h1");
    const p1 = document.querySelector(".container p");
    const ic = document.querySelector(".container .icon");
    const navigation = document.querySelector(".navigation");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    const updateContent = (index) => {
        hx1.innerHTML = `mày ${typ[index]}`;
        p1.innerHTML = `...trong năm nay. ${quo[index]}`;
        ic.innerHTML = emo[index];
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;

        if (currentIndex === typ.length - 1) {
            nextButton.innerHTML = "✓";
            nextButton.classList.add("finish");
        } else {
            nextButton.innerHTML = "→";
            nextButton.classList.remove("finish");
        }
    };

    const transitionEffect = () => {
        container.classList.remove("show");
        container.classList.add("fade-out");
        setTimeout(() => {
            container.classList.remove("fade-out");
            container.classList.add("show");
        }, 500); // Delay to sync with fade-out
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
            container.classList.add("fade-out");
            setTimeout(() => {
                container.style.display = "none";
                navigation.style.display = "none";
            }, 500);
        }
    });

    // Initial animations and transitions
    setTimeout(() => {
        video.classList.add("show");
        starter.classList.add("show");
    }, 1000);

    setTimeout(() => {
        changeh1("Chà, nhanh nhỉ?");
        changep("Một năm đã trôi qua rồi đó, mà mặt mày vẫn như mặt l!!");
    }, 10000);

    setTimeout(() => {
        changeh1("Xem lại nhé?");
        changep("Xem lại mày với tao đã làm gì trong năm qua =)))))");
    }, 18000);

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
