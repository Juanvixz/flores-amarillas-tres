window.addEventListener("load", () => {
    document.body.classList.remove("container");

    const audio = document.querySelector("#background-music");
    const musicButton = document.querySelector(".music-button");
    const musicLabel = document.querySelector(".music-button__label");
    const surpriseButton = document.querySelector(".surprise-button");
    const surpriseClose = document.querySelector(".surprise-close");
    const surpriseMessage = document.querySelector(".surprise-message");
    const petals = document.querySelector(".petals");

    for (let index = 0; index < 18; index += 1) {
        const petal = document.createElement("span");
        petal.className = "petal";
        petal.style.setProperty("--petal-left", `${(index * 17) % 100}%`);
        petal.style.setProperty("--petal-delay", `${(index % 9) * 0.8}s`);
        petal.style.setProperty("--petal-duration", `${7 + (index % 5)}s`);
        petals.appendChild(petal);
    }

    musicButton.addEventListener("click", async () => {
        if (audio.paused) {
            await audio.play();
            musicLabel.textContent = "Pausar";
            musicButton.setAttribute("aria-label", "Pausar música");
        } else {
            audio.pause();
            musicLabel.textContent = "Música";
            musicButton.setAttribute("aria-label", "Reproducir música");
        }
    });

    surpriseButton.addEventListener("click", () => {
        surpriseMessage.classList.add("surprise-message--visible");
        surpriseMessage.setAttribute("aria-hidden", "false");
        surpriseButton.setAttribute("aria-expanded", "true");
    });

    surpriseClose.addEventListener("click", () => {
        surpriseMessage.classList.remove("surprise-message--visible");
        surpriseMessage.setAttribute("aria-hidden", "true");
        surpriseButton.setAttribute("aria-expanded", "false");
    });
});