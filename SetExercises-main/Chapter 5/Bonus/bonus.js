window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".board div");

    board.forEach((box, index) => {
        box.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});

function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
};