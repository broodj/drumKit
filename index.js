//Audio sounds to be played
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tomOne = new Audio('sounds/tom-1.mp3');
var tomTwo = new Audio('sounds/tom-2.mp3');
var tomThree = new Audio('sounds/tom-3.mp3');
var tomFour = new Audio('sounds/tom-4.mp3');

var drums = document.querySelectorAll('.drum');
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

//add event listeners to all drum buttons for mouseclicks
function drumsInTheDeep(){
  for (i = 0; i < numberOfDrumButtons; i++ ){
    drums[i].addEventListener('click', drumClicked);
  }
}

//initiate click event listeners
drumsInTheDeep();

//initiate and create keyboard event listeners
document.addEventListener('keyup', function (event) {
  switch(event.keyCode) {
      case 87:
          // w key pressed
          crash.play();
          break;
      case 65:
          // a key pressed
          kickBass.play();
          break;
      case 83:
          // s key pressed
          snare.play();
          break;
      case 68:
          // d key pressed
          tomOne.play();
          break;
      case 74:
          // j key pressed
          tomTwo.play();
          break;
      case 75:
          //k key pressed
          tomThree.play();
          break;
      case 76:
          //l key pressed
          tomFour.play();
          break;
  }
});

//When drum button is clicked, relevant sound plays
function drumClicked(){
  var classList = this.classList;

  switch (true){
    case classList.contains('w'):
      crash.play();
      break;

    case classList.contains('a'):
      kickBass.play();
      break;

    case classList.contains('s'):
      snare.play();
      break;

    case classList.contains('d'):
      tomOne.play();
      break;

    case classList.contains('j'):
      tomTwo.play();
      break;

    case classList.contains('k'):
      tomThree.play();
      break;

    case classList.contains('l'):
      tomFour.play();
      break;

    default:
      alert('Incorrect drum click, try again');
  }
}
