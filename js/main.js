if(/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)){document.body.style="background-color:white;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;",document.body.innerHTML="<h1 style='color: black; text-align: center;'>Truy cập từ thiết bị di động không được phép.</h1>"}document.querySelector("audio").volume=0.4;const duration=3e3,end=Date.now()+duration;(function frame(){confetti({particleCount:3,startVelocity:30,spread:360,origin:{x:Math.random(),y:0},colors:["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"],zIndex:3}),Date.now()<end?requestAnimationFrame(frame):setInterval(()=>{confetti({particleCount:5,startVelocity:20,spread:360,origin:{x:Math.random(),y:0},colors:["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"],zIndex:1})},500)})();setTimeout(()=>{document.querySelector(".next-page").classList.add("show")},5e3),document.querySelector(".next-page").addEventListener("click",function(e){e.preventDefault();const t=document.querySelector("#background-sound");let n,o=3e3,c=.01,r=o*c;t&&(n=setInterval(()=>{t.volume>c?(t.volume=Math.max(t.volume-c,0)):(clearInterval(n),t.pause())},r)),document.querySelectorAll(".container,#background-video,#confetti-container").forEach(e=>{e.classList.add("disappear")}),setTimeout(()=>{window.location.href=this.href},1e3)});
