(function() {

// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";
// @codekit-prepend "../bower_components/gsap/src/minified/TweenMax.min.js";
// @codekit-prepend "../bower_components/velocity/velocity.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js";
// @codekit-prepend "../bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";

// Force scroll to top on refresh + force cache reload
$(window).on('beforeunload', function(){
$(window).scrollTop(0);
$(window).location.reload(true);
});
// Set 100% viewport width/height to div's
var fullscreen = function(){
  $('main').css({width: $(window).width(), height: $(window).height()});
};
fullscreen();
// Run the function again in case of window resize
$(window).on('resize', function() {
  fullscreen();
});
// Hover touch
$('body').bind('touchstart', function(){});
// Sticky header
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('sticky');
  }
  else {
    $('header').removeClass('sticky');
  }
});
// Preloader spinner
TweenMax.to($('.preloader__wrapper img'), 2, {rotationY: 360, repeat: -1, yoyo: true, ease: Power4.easeInOut});
// Main content animation with gsap
$(window).on('load', function() {
$('.preloader__wrapper').fadeOut('slow');
var main__animation = new TimelineMax({paused:true, delay: 0.25});
main__animation.set($('.main__content'), {visibility: "visible"})
               .from($('.main__content h1'), 0.25, {autoAlpha: 0, x: "-=100px", ease: Power2.easeOut})
               .from($('.main__content p:first-of-type'), 0.5, {autoAlpha: 0, ease: Power2.easeOut})
               .from($('.main__content p:last-child'), 0.5, {autoAlpha: 0, ease: Power2.easeOut});
main__animation.play();
});
// Hamburger menu bars
var spanTop = $('.top');
var spanMiddle = $('.middle');
var spanBottom = $('.bottom');
// Hamburger menu bars animation with gsap
var menu = new TimelineMax();
    menu.to(spanMiddle, 0.5, {scale:0, ease: Power2.easeOut})
        .to(spanTop, 0.5, {y: 0, ease: Power2.easeOut}, 0)
        .to(spanTop, 1, {rotation: 135, ease: Bounce.easeOut}, 1)
        .to(spanBottom, 0.5, {y: 0, ease: Power2.easeOut}, 0)
        .to(spanBottom, 1, {rotation: -135, ease: Bounce.easeOut}, 1);
// Overlay animation with gsap
var overlay = new TimelineMax();
    overlay.to($('.main__menu--overlay'), 0.25, { autoAlpha:1 })
           .staggerFrom($('nav ul li a'), 0.25, { autoAlpha:0, scale: 1.5, cycle: {x: [-25, 25]}, ease: Expo.easeOut}, 0.25, 0.75);
// Add hamburger and overlay animation to one timeline
var menuOverlay = new TimelineMax({paused: true});
    menuOverlay.add(menu, 0)
               .add(overlay, 0);
// Toggle overlay menu
$('.main__menu').on('click', function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    menuOverlay.timeScale(1).play();
  } else {
    $(this).removeClass('active');
    menuOverlay.timeScale(2).reverse();
  }
});
// Main menu overlay - close on clicking link
$('nav li a').on('click', function() {
  $('.main__menu').removeClass('active');
  menuOverlay.timeScale(6).reverse();
});
/* Main menu overlay - open/close hamburger
$('.main__menu').on('click', function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    overlay.timeScale(1).play();
  } else {
    $(this).removeClass('active');
    overlay.timeScale(5).reverse();
  }
});
// Main menu overlay - close on clicking link
$('nav li a').on('click', function() {
  $('.main__menu').removeClass('active');
  overlay.timeScale(5).reverse();
}); */
// Scroll arrow
TweenMax.to($('#scrolldown'), 1.5, {y: 10, repeat: -1, yoyo: true, ease: Power4.easeInOut});
  $('#scrolldown').on('click', function() {
    $('#about').velocity('scroll', {duration : 800});
});
TweenMax.to($('#scrollup'), 1.5, {y: -10, repeat: -1, yoyo: true, ease: Power4.easeInOut});
  $('#scrollup').on('click', function() {
  $('#home').velocity('scroll', { duration : 800 });
});
// ScrollMagic scenes
var controller = new $.ScrollMagic.Controller();
var scene = new $.ScrollMagic.Scene({triggerElement: "#about"});
var about__animation = new TimelineMax();
about__animation.from($('.about-me h3'), 1.5, {autoAlpha: 0, y: "+=50px", ease: Expo.easeOut}, 0.35)
                .from($('.about-skills h3'), 1.5, {autoAlpha: 0, y: "+=50px", ease: Expo.easeOut}, 0.35)
                .from($('.about-skills img'), 2.5, {autoAlpha: 0, scale: 0, y: "+=100px", ease: Expo.easeOut}, 0)
                .staggerFrom($('.about-me p'), 1.5, {autoAlpha: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0)
                .staggerFrom($('.about-skills p'), 1.5, {autoAlpha: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0);
scene.setTween(about__animation);
scene.addTo(controller);
var scene1 = new $.ScrollMagic.Scene({triggerElement: '#portfolio'});
var portfolio__animation = new TimelineMax();
portfolio__animation.from($('#portfolio h3'), 2.5, {autoAlpha: 0, y: "+=50px", ease: Expo.easeOut}, 0.35)
                    .staggerFrom($('#portfolio figure'), 1.5, {autoAlpha: 0, scale: 1.4, y: "+=100px", ease: Expo.easeOut}, 0.5, 0);
scene1.setTween(portfolio__animation);
scene1.addTo(controller);
var scene2 = new $.ScrollMagic.Scene({triggerElement: '#quote'});
var quote__animation = new TimelineMax();
quote__animation.from($('blockquote'), 1, {margin: "0, -5%", ease: Expo.easeOut})
                .staggerFrom($('#quote p:first-of-type'), 1, {autoAlpha: 0, y: "+=100px", ease: Expo.easeOut}, 0.35, 0);
scene2.setTween(quote__animation);
scene2.addTo(controller);
var scene3 = new $.ScrollMagic.Scene({triggerElement: '#contact'});
var contact__animation = new TimelineMax();
contact__animation.from($('.contact__info h3'), 1.5, {autoAlpha: 0, y: "+=50px", ease: Expo.easeOut})
                  .from($('.contact__info img'), 1.5, {autoAlpha: 0, scale: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                  .from($('.contact__info a'), 1.5, {autoAlpha: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                  .from($('.contact__info p'), 1.5, {autoAlpha: 0, y: "+=200px", ease: Expo.easeOut}, 0)
                  .from($('.contact__form h3'), 1.5, {autoAlpha: 0, y: "+=50px", ease: Expo.easeOut}, 0)
                  .staggerFrom($('.contact__form div'), 1.5, {autoAlpha: 0, y: "+=200px", ease: Expo.easeOut}, 0.25, 0);
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
$('form').on('submit', function() {
      var message__confirmation = new TimelineMax();
          message__confirmation.to($('#confirmation'), 0.5, {autoAlpha: 1, ease: Expo.easeOut})
                               .to($('#confirmation'), 0.5, {autoAlpha: 0, ease: Expo.easeOut}, +0.5);
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

}());
