if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    document.body.style.backgroundColor = "white";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.innerHTML = "<h1 style='color: black; text-align: center;'>Truy cập từ thiết bị di động không được phép.</h1>";
}
