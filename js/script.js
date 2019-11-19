$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: 'false',
    animation_speed: 'slow',
    animation_easing: 'linear'
  })

  var typed = new Typed(".typed", {
    strings: ["Web Developer.","Student.", "Problem Solver."],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });


});
