let numberOfDrumButtons = document.querySelectorAll('.drum').length;

//Audio sounds to be played
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tomOne = new Audio('sounds/tom-1.mp3');
var tomTwo = new Audio('sounds/tom-2.mp3');
var tomThree = new Audio('sounds/tom-3.mp3');
var tomFour = new Audio('sounds/tom-4.mp3');

function drumsInTheDeep(){
  var drums = document.querySelectorAll('.drum');

  for (i = 0; i < numberOfDrumButtons; i++ ){
    drums[i].addEventListener('click', drumClicked);
  }
}

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


drumsInTheDeep();
