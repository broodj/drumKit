//Audio sounds to be played
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tomOne = new Audio('sounds/tom-1.mp3');
var tomTwo = new Audio('sounds/tom-2.mp3');
var tomThree = new Audio('sounds/tom-3.mp3');
var tomFour = new Audio('sounds/tom-4.mp3');

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

//add mouse event listeners
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    //find the button pressed
    var buttonInnerHTML = this.innerHTML;
    //run the playSound function on the identified button
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//add keyboard event listeners
document.addEventListener('keypress', function(event){
  //play sound of key pressed
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key){
  switch (key) {

    case "w":
      tomOne.play();
      break;

    case "a":
      tomTwo.play();
      break;

    case "s":
      tomThree.play();
      break;

    case "d":
      tomFour.play();
      break;

    case "j":
      crash.play();
      break;

    case "k":
      kickBass.play();
      break;

    case "l":
      snare.play();
      break;

    default:
      alert('Use WASD JKL keys to play the drums');
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.' + currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 100);

}
