const audioPlayer = {
    boomSound: new Audio("./sounds/boom.wav"),
    clapSound: new Audio("./sounds/clap.wav"),
    HiHatSound: new Audio("./sounds/hihat.wav"),
    kickSound: new Audio("./sounds/kick.wav"),
    openhatSound: new Audio("./sounds/openhat.wav"),
    rideSound: new Audio("./sounds/ride.wav"),
    snareSound: new Audio("./sounds/snare.wav"),
    tinkSound: new Audio("./sounds/tink.wav"),
    tomSound: new Audio("./sounds/tom.wav"),

    keyPressedPlayAudio(event) {
        switch (event.key) {
            case "q":
                this.boomSound.play();
                break;
            case "w":
                this.clapSound.play();
                break;
            case "e":
                this.HiHatSound.play();
                break;
            case "r":
                this.kickSound.play();
                break;
            case "t":
                this.openhatSound.play();
                break;
            case "u":
                this.rideSound.play();
                break;
            case "i":
                this.snareSound.play();
                break;
            case "o":
                this.tinkSound.play();
                break;
            case "p":
                this.tomSound.play();
                break;
            default:
                console.log("Error: Event Key Not Found");
        }
    },

    buttonPressedPlayAudio(event) {
        console.log(event);
        switch (event.target.id) {
            case "buttonBoom":
                // console.log(this.boomSound);
                this.boomSound.play();
                break;
            case "buttonClap":
                this.clapSound.play();
                break;
            case "buttonHiHat":
                this.HiHatSound.play();
                break;
            case "buttonKick":
                this.kickSound.play();
                break;
            case "buttonOpenHat":
                this.openhatSound.play();
                break;
            case "buttonRide":
                this.rideSound.play();
                break;
            case "buttonSnare":
                this.snareSound.play();
                break;
            case "buttonTink":
                this.tinkSound.play();
                break;
            case "buttonTom":
                this.tomSound.play();
                break;
            default:
                console.log("Error: Button ID Not Found");
        }
    },
};

let buttonWrapper = document.getElementById("buttonsWrapper");
buttonWrapper.addEventListener("click", (event) => {
    audioPlayer.buttonPressedPlayAudio(event);
});

document.addEventListener("keypress", (event) => {
    audioPlayer.keyPressedPlayAudio(event);
});