var main = function() {
  // Initiate ScrollMagic
  //var scene = new $.ScrollMagic.Scene({
  //triggerElement: '.supporting', // starting scene, when reaching this element
  //duration: 400 // pin the element for a total of 400px
  //}).setPin('.supporting col-sm-12'); // the element we want to pin
  // Add Scene to ScrollMagic Controller
  //controller.addScene(scene);
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('.main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  // Menu Overlay toggle
  $('.main__menu').click(function(){
    $(this).toggleClass('active');
    $('.main__menu--overlay').toggleClass('main__menu--overlay-open');
    $('nav li').velocity("transition.slideDownIn", { stagger: 250, drag : true });
	});
  // Menu Overlay toggle with 'esc' key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $('main__menu--overlay').toggleClass('main__menu--overlay-open');
    }
  });
  var loadingSequence = [
    // Site logo
    {e: $('.header h1') , p: "transition.slideLeftBigIn", o: { duration : 800, delay : 400 }},
    // Main content
    {e: $('.main__content') , p: { opacity: 1, translateY: 200 }, o: { duration : 800, delay : 400, easing: "ease-in-out", sequenceQueue : false }}
  ];
  $.Velocity.RunSequence(loadingSequence);
  // Scroll arrow
  $('.main__arrow').velocity({ translateY: "10px" },{ duration: 800, loop: true });
  $('.main__arrow').click(function() {
    $('.supporting').velocity("scroll", 800);
  });
  // Fade div's in on scroll
  $('.supporting').scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.supporting col-sm-12').velocity("fadeIn", { duration: 800, delay : 400 });
    }
  });
  // Social icons
  $('.social__icons img').mouseover(function(){
    $(this).velocity( { scale : 1.4, rotateZ : "360deg" }, { duration : 400, easing: "ease-in-out" });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : 1.0, rotateZ : "-360deg" }, { duration : 300, easing: "ease-in-out" });
    });
  });
};

$(document).ready(main);
