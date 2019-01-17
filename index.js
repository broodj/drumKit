let numberOfDrumButtons = document.querySelectorAll('.drum').length;

//Audio sounds to be played
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tomOne = new Audio('sounds/tom-1.mp3');
var tomTwo = new Audio('sounds/tom-2.mp3');
var tomThree = new Audio('sounds/tom-3.mp3');
var tomFour = new Audio('sounds/tom-4.mp3');


//Add event listeners to all buttons
for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    //If the button pressed contains X class name, play relevant sound
    if (this.classList.contains('w')){
      crash.play();
    } else if (this.classList.contains('a')){
      kickBass.play();
    } else if (this.classList.contains('s')){
      snare.play();
    } else if (this.classList.contains('d')){
      tomOne.play();
    } else if (this.classList.contains('j')){
      tomTwo.play();
    } else if (this.classList.contains('k')){
      tomThree.play();
    } else if (this.classList.contains('l')){
      tomFour.play();
    }
  });
}
