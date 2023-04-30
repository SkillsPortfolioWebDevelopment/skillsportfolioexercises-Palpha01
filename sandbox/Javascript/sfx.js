const sounds = ["AAAAA", "critical", "boom", "scream", "shutdown", "hoodini", "discord", "homer", "HEY!", "Miserum", "Oshitemairu", "Horfdu a mig", "Ad mortem inimicus", "INCREDIBILIS", "Jinjyo ni shoubo", "Dunmahglass", "EG RIG YKKUR PITA", "Daubeny!", "URAAAA!!!"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
    })
}