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
  var main__animation = new TimelineMax({paused:true});
  main__animation.set($('.main__content'), {visibility: "visible"})
                 .from($('.main__content h2'), 0.5, {opacity: 0, y: "-=100px", ease: Bounce.easeOut, delay: 0.5})
                 .from($('.main__content h1'), 0.5, {opacity: 0, scale: 1.5, ease: Power1.easeIn})
                 .from($('.main__content p:first-of-type'), 0.5, {opacity: 0, scale: 1.2, ease: Back.easeOut})
                 .from($('.main__content p:last-child'), 0.5, {opacity: 0, ease: Power1.easeIn});
  main__animation.play();
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
  var overlay = new TimelineMax({paused:true});
  overlay.to($('.main__menu--overlay'), 0.25, { autoAlpha:1 })
         .fromTo($('nav'), 0.5, { autoAlpha:0, top: "-50%", left: "50%", x: "-50%", y:"-50%"}, { autoAlpha:1, top: "50%", left: "50%", x: "-50%", y:"-50%", ease: Power4.easeOut});
  $('.main__menu').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      overlay.play();
    } else {
      $(this).removeClass('active');
      overlay.reverse();
    }
  });
  // Main menu overlay - close on clicking link
  $('nav li a').click(function() {
    $('.main__menu').removeClass('active');
    $('header').css({
                'box-shadow': 'none',
                '-moz-box-shadow' : 'none',
                '-webkit-box-shadow' : 'none' });
    overlay.reverse();
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
  about__animation.from($('.about-me h3'), 1.5, {opacity: 0, width: 0, ease: Expo.easeOut}, 0.35)
                  .from($('.about-skills h3'), 1.5, {opacity: 0, width: 0, ease: Expo.easeOut}, 0.35)
                  .from($('.about-skills img'), 2.5, {opacity: 0, scale: 0, y: "+=100px", ease: Expo.easeOut}, 0)
                  .staggerFrom($('.about-me p'), 1.5, {opacity: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0)
                  .staggerFrom($('.about-skills p'), 1.5, {opacity: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0);
	scene.setTween(about__animation);
	scene.addTo(controller);
  var scene1 = new $.ScrollMagic.Scene({triggerElement: '#portfolio'});
  var portfolio__animation = new TimelineMax();
  portfolio__animation.from($('#portfolio h3'), 1.5, {opacity: 0, width: 0, ease: Expo.easeOut}, 0.35)
                      .staggerFrom($('#portfolio figure'), 1.5, {opacity: 0, scale: 1.4, y: "+=100px", ease: Expo.easeOut}, 0.5, 0);
  scene1.setTween(portfolio__animation);
  scene1.addTo(controller);
  var scene2 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
  var quote__animation = new TimelineMax();
  quote__animation.from($('blockquote'), 1, {margin: "0, -5%", ease: Expo.easeOut})
                  .staggerFrom($('#quote p:first-of-type'), 1, {opacity: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0);
  scene2.setTween(quote__animation);
  scene2.addTo(controller);
  var scene3 = new $.ScrollMagic.Scene({triggerElement: '#contact'});
  var contact__animation = new TimelineMax();
  contact__animation.from($('.contact__info h3'), 1.5, {opacity: 0, width: 0, ease: Expo.easeOut})
                    .from($('.contact__info img'), 1.5, {opacity: 0, scale: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                    .from($('.contact__info a'), 1.5, {opacity: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                    .from($('.contact__info p'), 1.5, {opacity: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                    .from($('.contact__form h3'), 1.5, {opacity: 0, width: 0, ease: Expo.easeOut}, 0)
                    .staggerFrom($('.contact__form div'), 1.5, {opacity: 0, y: "+=200px", ease: Expo.easeOut}, 0.25, 0);
  scene3.setTween(contact__animation);
  scene3.addTo(controller);
  //scene.addIndicators(); // add indicators (requires plugin)
  // Social icons
  var icons1 = $('.main__social img');
  icons1.hover(
     function() {
        TweenMax.to($(this), 1, {scale:1.3, rotation: 360, ease: Expo.easeOut});
     },
     function() {
        TweenMax.to($(this), 1, {scale:1, rotation: -360, ease: Bounce.easeOut});
     }
  );
  var icons2 = $('.contact__social img');
  icons2.hover(
     function() {
        TweenLite.to($(this), 1, {scale:1.3, rotation: 360, ease: Expo.easeOut});
     },
     function() {
        TweenLite.to($(this), 1, {scale:1, rotation: -360, ease: Bounce.easeOut});
     }
  );
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
    // Beating heart
    TweenMax.to($('.copyright p img'), 0.2, {scale: 1.2, repeat: -1, repeatDelay: 0.2, yoyo: true, ease: Power3.easeOut });
});
