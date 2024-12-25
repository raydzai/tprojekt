document.querySelector('audio').volume = 0.1;

        
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                startVelocity: 30,
                spread: 360,
                origin: { x: Math.random(), y: 0 },
                colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff']
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
                        colors: ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff']
                    });
                }, 500);
            }
        }());