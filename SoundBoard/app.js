const sounds = ["DirilisMusic1","DirilisMusic2","DirilisMusic3","DirilisMusic4"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.classList.add('btn');
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
        stopSong();
        document.getElementById(sound).play();
    });
});

const stopSong = () => {
    sounds.forEach((sound) => {
        const currentSong = document.getElementById(sound);
        currentSong.pause();
        currentSong.currentTime = 0;
    });
}