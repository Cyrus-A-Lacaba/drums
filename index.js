$(document).ready(function(){
  var buttonx = $(".drum");

  for (let i=0; i < buttonx.length; i++) {
    $(buttonx[i]).mousedown(function() {
      makeSomeNoise(buttonx[i].contentText);
      addAnimation(buttonx[i].contentText);
    });

    $(buttonx[i]).mouseup(function(){
      addAnimation(buttonx[i].contentText);
    });
  }

  $(document).keydown(function(e) {
    makeSomeNoise(e.key);
    addAnimation(e.key);
  });

  $(document).keyup(function(e) {addAnimation(e.key);});

  function makeSomeNoise(key){

    switch (key.toLowerCase()) {
      case "w":
          playSound("tom-1");
          break;
      case "a":
          playSound("tom-2");
          break;
      case "s":
          playSound("tom-3");
          break;
      case "d":
          playSound("tom-4");
          break;
      case "j":
          playSound("snare","wav");
          break;
      case "k":
          playSound("golden-crash","wav");
          break;
      case "l":
          playSound("kick-bass");
          break;
      case "i":
          playSound("open-hat","wav");
          break;
    }
  }

  function playSound(whatSound, fileExt = "mp3") {
    var audio = new Audio("sounds/" + whatSound + "." + fileExt);
    audio.STOP;
    audio.play();
  }

  function addAnimation(key){
    document.querySelector("." + key.toLowerCase()).classList.toggle("pressed");
  }

});
