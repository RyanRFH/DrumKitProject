const audioPlayer = {
    //Put audio files into a map() and use loop to search map

    boomSound: new Audio("./sounds/boom.wav"),
    clapSound: new Audio("./sounds/clap.wav"),
    HiHatSound: new Audio("./sounds/hihat.wav"),
    kickSound: new Audio("./sounds/kick.wav"),
    openhatSound: new Audio("./sounds/openhat.wav"),
    rideSound: new Audio("./sounds/ride.wav"),
    snareSound: new Audio("./sounds/snare.wav"),
    tinkSound: new Audio("./sounds/tink.wav"),
    tomSound: new Audio("./sounds/tom.wav"),

    playAudio: () => {
        let buttonWrapper = document.getElementById("buttonsWrapper");
        buttonWrapper.addEventListener("click", (event) => {
            switch (event.target.id) {
                case "boomSound":
                    console.log(boomSound);

                    // boomSound.play();
            }
            
        })
    },

};


audioPlayer.playAudio();
let boomAudio = new Audio("./sounds/boom.wav");
let boomButton = document.getElementById("boomSound");
console.log(boomButton);


boomButton.addEventListener("click", (event) => {
    boomAudio.play();
});


