// Tim rơi
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);

// Nút "Hong" chạy trốn
function moveNo() {
    const noBtn = document.getElementById("noBtn");
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
}

// Khi bấm đồng ý
function yesLove() {
    document.getElementById("music").play();
    document.getElementById("message").innerHTML =
        "Valentine này anh chúc cho bé của anh luôn luôn khỏe mạnh 💖<br><br>" +
        "Hơn thế phải hết sức nghe lời của anh nha chua 😚<br><br>" +
        "Quà của anh tuy không to nhưng mà anh mong em sẽ thích nó.<br>" +
        "Vì tất cả đều dành cho em.<br><br>" +
        "<b>Anh Yêu Em 💖</b>";
}
