var main = function() {
  // Set 100% viewport width/height to main background image
  var fullscreen = function(){
    $('.main').css({width: $(window).width(), height: $(window).height()});
  };
  fullscreen();
  // Run the function again in case of window resize
  $(window).resize(function() {
    fullscreen();
  });
  // Menu Overlay toggle
  $('.menu').click(function(){
    $(this).toggleClass('active');
    $('.menu__overlay').toggleClass('menu__overlay--open');
	});
  // Menu Overlay toggle with 'esc' key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $('.menu__overlay').toggleClass('menu__overlay--open');
    }
  });
};

$(document).ready(main);
