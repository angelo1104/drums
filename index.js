function handleClick() {
    var innerText = this.innerText;
    playSound(innerText);
    buttonPressed(innerText);
}

drum = document.querySelectorAll(".drum");

for (i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", handleClick);
}

addEventListener("keypress", function() {
    playSound(event.key);
    buttonPressed(event.key);
});

function playSound(character) {
    if (character === "w") {
        var snare = new Audio("sounds/crash.mp3");
        snare.play();
        console.log("butter");
    } else if (character === "a") {
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    } else if (character === "g") {
        var snare = new Audio("sounds/tom-1.mp3");
        snare.play();
    } else if (character === "d") {
        var snare = new Audio("sounds/kick-bass.mp3");
        snare.play();
    } else if ((character = "j")) {
        var snare = new Audio("sounds/tom-2.mp3");
        snare.play();
    } else if (character == "k") {
        var snare = new Audio("sounds/tom-3.mp3");
        snare.play();
    } else if (character === "l") {
        var snare = new Audio("sounds/tom-4.mp3");
        snare.play();
    }
}

function buttonPressed(eventkey) {
    activeButton = document.querySelector("." + eventkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}