var main=function(){var i=function(){$(".main").css({width:$(window).width(),height:$(window).height()}),$(".supporting").css({width:$(window).width(),height:$(window).height()}),$(".feature").css({width:$(window).width(),height:$(window).height()}),$(".feature2").css({width:$(window).width(),height:$(window).height()}),$(".footer").css({width:$(window).width(),height:$(window).height()}),$(".social").css({width:$(window).width(),height:$(window).height()/3}),$(".copy").css({width:$(window).width(),height:$(window).height()/5})};i(),$(window).resize(function(){i()}),$(".main__menu").click(function(){$(this).toggleClass("active"),$(".main__menu--overlay").toggleClass("main__menu--overlay-open"),$("nav li").velocity("transition.slideDownIn",{stagger:250,drag:!0})}),$(document).keyup(function(i){27===i.keyCode&&$("main__menu--overlay").toggleClass("main__menu--overlay-open")}),$(".header h1").velocity("transition.slideLeftBigIn",{duration:800,delay:400});var t=[{e:$(".main__content"),p:{opacity:1,translateY:200},o:{duration:800,delay:400,easing:"spring"}}];$.Velocity.RunSequence(t),$(".main__arrow").velocity({translateY:"10px"},{duration:800,loop:!0}),$(".main__arrow").click(function(){$(".supporting").velocity("scroll",800)}),$(".supporting").scroll(function(){$(this).scrollTop()>50&&$(".supporting col-sm-12").velocity("fadeIn",{duration:800,delay:400})}),$(".social__icons img").mouseover(function(){$(this).velocity({scale:[1.4,[250,25]],rotateZ:"360deg"},{duration:400,easing:"ease-in-out"}),$(this).mouseleave(function(){$(this).velocity({scale:[1,[250,25]],rotateZ:"-360deg"},{duration:400,easing:"ease-in-out"})})})};$(document).ready(main);