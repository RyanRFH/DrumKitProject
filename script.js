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

    //Triggers when a button is pressed, plays audio based on clicked targets 
    //element ID or on a key hit
    buttonPressedPlayAudio(event) {
        if (event.target.id === "buttonBoom" || event.key === "q") {
            this.boomSound.play();
        } else if (event.target.id === "buttonClap" || event.key === "w") {
            this.clapSound.play();
        } else if (event.target.id === "buttonHiHat" || event.key === "e") {
            this.HiHatSound.play();
        } else if (event.target.id === "buttonKick" || event.key === "r") {
            this.kickSound.play();
        } else if (event.target.id === "buttonOpenHat" || event.key === "t") {
            this.openhatSound.play();
        } else if (event.target.id === "buttonRide" || event.key === "u") {
            this.rideSound.play();
        } else if (event.target.id === "buttonSnare" || event.key === "i") {
            this.snareSound.play();
        } else if (event.target.id === "buttonTink" || event.key === "o") {
            this.tinkSound.play();
        } else if (event.target.id === "buttonTom" || event.key === "p") {
            this.tomSound.play();
        } else {
            console.log("Error - Audio Not Found");
        }

        //Applies button animation
        console.log(event);
        document.getElementById(event.target.id).style.border = "inset";

        //Checks if caps lock is enabled
        if (event.getModifierState("CapsLock")) {
            document.getElementById("capsLockWarning").style.display = "block";
        } else {
            document.getElementById("capsLockWarning").style.display = "none";
        }
    },

    //Previously used switch statement but if/else statement takes up less space
    // keyPressedPlayAudio(event) {
    //     switch (event.key) {
    //         case "q":
    //             this.boomSound.play();
    //             break;
    //         case "w":
    //             this.clapSound.play();
    //             break;
    //         case "e":
    //             this.HiHatSound.play();
    //             break;
    //         case "r":
    //             this.kickSound.play();
    //             break;
    //         case "t":
    //             this.openhatSound.play();
    //             break;
    //         case "u":
    //             this.rideSound.play();
    //             break;
    //         case "i":
    //             this.snareSound.play();
    //             break;
    //         case "o":
    //             this.tinkSound.play();
    //             break;
    //         case "p":
    //             this.tomSound.play();
    //             break;
    //         default:
    //             console.log("Error: Event Key Not Found");
    //     }
    // },

//     buttonPressedPlayAudio(event) {
//         switch (event.target.id) {
//             case "buttonBoom":
//                 this.boomSound.play();
//                 break;
//             case "buttonClap":
//                 this.clapSound.play();
//                 break;
//             case "buttonHiHat":
//                 this.HiHatSound.play();
//                 break;
//             case "buttonKick":
//                 this.kickSound.play();
//                 break;
//             case "buttonOpenHat":
//                 this.openhatSound.play();
//                 break;
//             case "buttonRide":
//                 this.rideSound.play();
//                 break;
//             case "buttonSnare":
//                 this.snareSound.play();
//                 break;
//             case "buttonTink":
//                 this.tinkSound.play();
//                 break;
//             case "buttonTom":
//                 this.tomSound.play();
//                 break;
//             default:
//                 console.log("Error: Button ID Not Found");
//         }
//     },
// };
};

//Checks for clicks on the page then calls a function and passes in the event
document.addEventListener("click", (event) => {
    audioPlayer.buttonPressedPlayAudio(event);
});

//Checks for key presses on the page then calls a function and passes in the event
document.addEventListener("keypress", (event) => {
    audioPlayer.buttonPressedPlayAudio(event);
});