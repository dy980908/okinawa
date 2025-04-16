let lastSparkleTime = 0;

document.addEventListener("mousemove", function (e) {
  const now = Date.now();

  if (now - lastSparkleTime > 100) {  // ✨ 100ms 이상 지나야 생성
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    document.getElementById("sparkle-container").appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);

    lastSparkleTime = now;
  }
});