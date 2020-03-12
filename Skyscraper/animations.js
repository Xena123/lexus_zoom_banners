var fadeOutSpeed = 500;
var fadeInSpeed = 500;
var frameDuration = 4000;

// Frame 1
function startAnimation() {
  $('#text-1,#logo,#centre-name').animate({ 
    opacity: 1
  },fadeInSpeed, function(){
    setTimeout(frame2,frameDuration);
  });
  $( "#bg-img" ).addClass('zoomIn');
}

//Frame 2
function frame2(){
  $('#text-1').animate({ 
    opacity: 0
  },fadeOutSpeed, function(){
    setTimeout(frame3,fadeOutSpeed);
  });
}

//Frame 3
function frame3(){
  $('#text-2,#smallPrint').animate({ 
    opacity: 1
  },fadeInSpeed, function(){
    setTimeout(frame4,frameDuration);
  });
}

//Frame 4
function frame4(){
  $('#text-2,#smallPrint').animate({ 
    opacity: 0
  },fadeOutSpeed, function(){
    setTimeout(frame5,fadeOutSpeed);
  });
}

// Frame 5
function frame5(){
  $('#text-3').animate({ 
    opacity: 1
  },fadeInSpeed, function(){
    setTimeout(frame6,frameDuration);
  });
}

// Frame 6
function frame6(){
  $('#text-3').animate({ 
    opacity: 0
  },fadeOutSpeed, function(){
    setTimeout(frame7,fadeOutSpeed);
  });
}

// Frame 9
function frame7(){
  $('#text-4, #text-4--cta').animate({ 
    opacity: 1
  },fadeInSpeed);
}
