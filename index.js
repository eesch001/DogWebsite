





   function myPlay(){
       var audio = new Audio("sound/Squeaky-toy-sound-effect.mp3");
       audio.play();

  var activebutton = document.querySelector(".buttonsoundsqueak");

    activebutton.classList.add("pressed");

    setTimeout(function(){
      activebutton.classList.remove("pressed");
    }, 150);

}
