var main = function() {
  // Set 100% viewport width/height to div's
  var fullscreen = function(){
    $('.main').css({width: $(window).width(), height: $(window).height()});
    $('.supporting').css({width: $(window).width(), height: $(window).height()});
    $('.feature').css({width: $(window).width(), height: $(window).height()});
    $('.feature2').css({width: $(window).width(), height: $(window).height()});
    $('.footer').css({width: $(window).width(), height: $(window).height()});
    $('.social').css({width: $(window).width(), height: $(window).height()/3});
    $('.copy').css({width: $(window).width(), height: $(window).height()/5});
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
    $('nav li').velocity("transition.slideDownIn", { stagger: 250, drag:true });
	});
  // Menu Overlay toggle with 'esc' key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $('main__menu--overlay').toggleClass('main__menu--overlay-open');
    }
  });
  // Site logo
  $('.header h1').velocity("transition.slideLeftBigIn", { duration: 800, delay : 400 });
  // Main content
  var loadingSequence = [
    {e: $('.main__content') , p: { opacity: 1, translateY: 200 }, o: { duration : 800, delay : 400, easing: "spring" }}
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
    $(this).velocity( { scale : [ 1.4, [250, 25] ], rotateZ : "360deg" }, { duration : 400, easing: "ease-in-out" });
    $(this).mouseleave(function(){
      $(this).velocity( { scale : [ 1.0, [250, 25] ], rotateZ : "-360deg" }, { duration : 400, easing: "ease-in-out" });
    });
  });
};

$(document).ready(main);
