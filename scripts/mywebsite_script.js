var main = function() {
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
    {e: $('.header h1') , p: "transition.slideLeftBigIn", o: { duration : 600, delay : 300 }},
    {e: $('.header h1') , p: {scale : 1.3}, o: { duration : 200 }},
    {e: $('.header h1') , p: {scale : 1}, o: { duration : 200 }},
    // Main content
    {e: $('.main__content') , p: { opacity: 1, translateY: 200 }, o: { duration : 800, delay : 400, easing: "ease-in-out", sequenceQueue : false }}
  ];
  $.Velocity.RunSequence(loadingSequence);
  // Scroll arrow
  $('.main__arrow').velocity({ translateY: "10px" },{ duration: 800, loop: true });
  $('.main__arrow').click(function() {
    $('.supporting').velocity("scroll", 800);
  });
  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass("sticky");
    }
    else {
      $('.header').removeClass("sticky");
    }
  });
  // ScrollMagic scenes
  var controller = new $.ScrollMagic.Controller();
  var scene1 = new $.ScrollMagic.Scene({triggerElement: "#trigger_1"});
  scene1.setVelocity("#animate_1", { opacity : 1 }, { duration : 1000, delay : 200, easing : "ease-in-out" } );
  scene1.addTo(controller);
  var scene2 = new $.ScrollMagic.Scene({triggerElement: "#trigger_2"});
  scene2.setVelocity("#animate_2", { opacity : 1 }, { duration : 1000, delay : 200, easing : "ease-in-out" } );
  scene2.addTo(controller);
  var scene3 = new $.ScrollMagic.Scene({triggerElement: "#trigger_3"});
  scene3.setVelocity("#animate_3", { opacity : 1 }, { duration : 1000, delay : 200, easing : "ease-in-out" } );
  scene3.addTo(controller);
  var scene4 = new $.ScrollMagic.Scene({triggerElement: "#trigger_4", offset: -100});
  scene4.setVelocity("#animate_4", "transition.bounceIn", { duration : 1200, delay : 400, easing : "ease-in-out" } );
  //scene4.addIndicators(); // add indicators (requires plugin)
  scene4.addTo(controller);
  // Social icons
  $('.social__icons img').mouseover(function(){
    $(this).velocity( { scale : 1.4, rotateZ : "360deg" }, { duration : 400, easing: "ease-in-out" });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : 1.0, rotateZ : "-360deg" }, { duration : 300, easing: "ease-in-out" });
    });
  });
};

$(document).ready(main);
