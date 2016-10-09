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
  // Main content animation with gsap
  var main__animation = new TimelineMax();
  main__animation.from($('.main__content h2'), 0.5, {opacity: 0, ease: Power1.easeIn, delay: 1})
                 .from($('.main__content h1'), 0.5, {opacity: 0, scale: 1.5, ease: Power1.easeIn})
                 .from($('.main__content p:first-of-type'), 0.5, {opacity: 0, ease: Power1.easeIn})
                 .from($('.main__content p:last-child'), 0.5, {opacity: 0, ease: Power1.easeIn});
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
  var scene = new $.ScrollMagic.Scene({triggerElement: "#about"});
  var about__animation = new TimelineMax();
  about__animation.staggerFrom($('.about-me p'), 1.5, {opacity: 0, y: "+=100px", ease: Power2.easeInOut}, 0.35)
                  .staggerFrom($('.about-skills p'), 1.5, {opacity: 0, y: "+=100px", ease: Power2.easeInOut}, 0.35, 0);
	scene.setTween(about__animation);
	scene.addTo(controller);
  var scene1 = new $.ScrollMagic.Scene({triggerElement: '#portfolio'});
  var portfolio__animation = TweenMax.staggerFrom($('#portfolio figure'), 1.5, {opacity: 0, scale: 1.2, y: "+=200px", ease: Expo.easeOut}, 0.5);
  scene1.setTween(portfolio__animation);
  scene1.addTo(controller);
  var scene2 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  var quote__animation = new TimelineMax();
  quote__animation.staggerFrom($('blockquote'), 1.5, {opacity: 0, ease: Expo.easeOut}, 0.5)
                  .staggerFrom($('#quote p'), 1.5, {opacity: 0, y: "+=200px", ease: Back.easeOut}, 0.5, 0);
  scene2.setTween(quote__animation);
  scene2.addTo(controller);
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
