$(document).ready(function(){
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  // Hover touch
  $('body').bind('touchstart', function(){});
  // Main content animation with velocity.js
  //var loadingSequence = [
    // Main content
    //{e: $('.main__content') , p: { opacity: 1, translateY: "25vh" }, o: { duration : 400, delay : 400, easing: 'ease-in-out', sequenceQueue : false }}
  //];
  //$.Velocity.RunSequence(loadingSequence);
  // Main content animation with gsap
    
  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }
  });
  // Main menu overlay
  $('.main__menu').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('.main__menu--overlay').addClass('open');
      $('nav').velocity({opacity: 1, translateY: "75vh"}, { duration : 400, easing : "ease" });
    } else {
      $(this).removeClass('active');
      $('nav').velocity({opacity: 0, translateY: "-75vh"}, { duration : 400, easing: "ease" });
      $('.main__menu--overlay').removeClass('open');
    }
  });
  // Main menu overlay - close on clicking link
  $('nav li a').click(function() {
    $('.main__menu').removeClass('active');
    $('header').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });
    $('nav').velocity({opacity: 0, translateY: "-75vh"}, { duration : 400, easing: "ease" });
    $('.main__menu--overlay').removeClass('open');
  });
  // Scroll arrow
  $('#scrolldown').velocity({ translateY: '5px' },{ duration: 800, loop: true });
  $('#scrolldown').click(function() {
    $('#about').velocity('scroll', { duration : 800 });
  });
  $('#scrollup').velocity({ translateY: '5px' },{ duration: 800, loop: true });
  $('#scrollup').click(function() {
    $('#home').velocity('scroll', { duration : 800 });
  });
  // ScrollMagic scenes
  var controller = new $.ScrollMagic.Controller();
  var scene1 = new $.ScrollMagic.Scene({triggerElement: '#portfolio'});
  scene1.setVelocity('figure', {opacity: 1, translateY: -50}, { delay: 100, duration : 600, easing : 'ease'} );
  scene1.addTo(controller);
  var scene2 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  scene2.setVelocity('#quote blockquote', {opacity: 1, translateY: -50}, { duration : 600, easing : 'ease' } );
  scene2.addTo(controller);
  var scene3 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  scene3.setVelocity('#quote p', {opacity: 1, translateY: -50}, { duration : 600, easing : 'ease' } );
  scene3.addTo(controller);
  //scene.addIndicators(); // add indicators (requires plugin)
  // Social icons
  $('.main__social img').mouseover(function(){
    $(this).velocity( { scale : 1.4, rotateZ : '360deg' }, { duration : 400, easing: 'ease-in-out' });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : 1.0, rotateZ : '-360deg' }, { duration : 200, easing: 'ease-in-out' });
    });
  });
  $('.contact__social img').mouseover(function(){
    $(this).velocity( { scale : 1.4, rotateZ : '360deg' }, { duration : 400, easing: 'ease-in-out' });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : 1.0, rotateZ : '-360deg' }, { duration : 200, easing: 'ease-in-out' });
    });
  });
  // Form submission
  $('form').submit(function() {
        $('#confirmation').css("opacity", 1);
        $('#confirmation').velocity({opacity: 0}, { delay : 800, duration : 400, easing: "ease" });
        event.preventDefault();
        var formData = $('form').serialize();
        $.ajax({
          type: 'POST',
          url: $('form').attr('action'),
          data: formData
        });
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        return false;
    });
});
//$(document).ready(main);
