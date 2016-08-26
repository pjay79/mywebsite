var main = function() {
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  // Header
  var loadingSequence = [
    // Site logo
    {e: $('main header h1') , p: 'transition.slideLeftBigIn', o: { duration : 400, delay : 300 }},
    {e: $('main header h1') , p: {scale : 1.3}, o: { duration : 200 }},
    {e: $('main header h1') , p: {scale : 1}, o: { duration : 200 }},
    // Main content
    {e: $('.main__content') , p: { opacity: 1, translateY: 200 }, o: { duration : 400, delay : 400, easing: 'ease-in-out', sequenceQueue : false }}
  ];
  $.Velocity.RunSequence(loadingSequence);
  // Main menu overlay
  $('.main__menu').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('.main__menu--overlay').addClass('open');
      $('nav').velocity({opacity: 1, translateY: "100%"}, { duration : 400, easing : "ease" });
    } else {
      $(this).removeClass('active');
      $('nav').velocity({opacity: 0, translateY: "-100%"}, { duration : 400, easing: "ease" });
      $('.main__menu--overlay').removeClass('open');
    }
  });
  // Main menu overlay - close on clicking link
  $('nav li a').click(function() {
    $('.main__menu').removeClass('active');
    $('nav li').velocity('transition.slideRightBigOut', { duration : 600, easing: "ease" });
    $('.main__menu--overlay').removeClass('open');
  });
  // Scroll arrow
  $('main img').velocity({ translateY: '10px' },{ duration: 800, loop: true });
  $('main img').click(function() {
    $('#about').velocity('scroll', { duration : 800 });
  });
  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }
  });
  // ScrollMagic scenes
  var controller = new $.ScrollMagic.Controller();
  var scene1 = new $.ScrollMagic.Scene({triggerElement: '#about'});
  scene1.setVelocity('article', {opacity: 1, translateY: -50}, { delay: 100, duration : 600, easing : 'ease-in-out' } );
  scene1.addTo(controller);
  var scene2 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  scene2.setVelocity('#quote blockquote', {opacity: 1, translateY: -50}, { duration : 600, easing : 'ease' } );
  scene2.addTo(controller);
  var scene3 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  scene3.setVelocity('#quote p', {opacity: 1, translateY: -50}, { duration : 600, easing : 'ease' } );
  scene3.addTo(controller);
  //scene.addIndicators(); // add indicators (requires plugin)
  // Social icons
  $('.social__icons img').mouseover(function(){
    $(this).velocity( { scale : 1.4, rotateZ : '360deg' }, { duration : 400, easing: 'ease-in-out' });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : 1.0, rotateZ : '-360deg' }, { duration : 300, easing: 'ease-in-out' });
    });
  });
};
$(document).ready(main);
