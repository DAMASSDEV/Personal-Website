// DETECTIONG BUTTON PRESS
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("../Assets/sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio("../Assets/sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio("../Assets/sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio("../Assets/sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        let tom5 = new Audio("../Assets/sounds/snare.mp3");
        tom5.play();
        break;

      case "k":
        let crash = new Audio("../Assets/sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        let kick = new Audio("../Assets/sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
}

// DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function (event) {
  let key = event.key;
  switch (key) {
    case "w":
      new Audio("../Assets/sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("../Assets/sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("../Assets/sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("../Assets/sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("../Assets/sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("../Assets/sounds/crash.mp3").play();
      break;

    case "l":
      new Audio("../Assets/sounds/kick-bass.mp3").play();
      break;

    default:
      console.log(key);
      break;
  }
});
