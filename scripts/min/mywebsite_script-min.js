var main=function(){var e=function(){$("main").css({width:$(window).width(),height:$(window).height()}),$("section").css({width:$(window).width(),height:$(window).height()})};e(),$(window).resize(function(){e()});var i=[{e:$("main header h1"),p:"transition.slideLeftBigIn",o:{duration:400,delay:300}},{e:$("main header h1"),p:{scale:1.3},o:{duration:200}},{e:$("main header h1"),p:{scale:1},o:{duration:200}},{e:$(".main__content"),p:{opacity:1,translateY:200},o:{duration:400,delay:400,easing:"ease-in-out",sequenceQueue:!1}}];$.Velocity.RunSequence(i),$(".main__menu").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$("nav li").velocity("stop").velocity("transition.slideRightBigOut",{duration:600,easing:"ease"}),$(".main__menu--overlay").removeClass("open")):($(this).addClass("active"),$(".main__menu--overlay").addClass("open"),$("nav li").velocity("stop").velocity("transition.slideLeftBigIn",{duration:300,easing:"ease"}))}),$("main img").velocity({translateY:"10px"},{duration:800,loop:!0}),$("main img").click(function(){$("section").velocity("scroll",{duration:800})}),$(window).scroll(function(){$(this).scrollTop()>50?$("header").addClass("sticky"):$("header").removeClass("sticky")});var n=new $.ScrollMagic.Controller,a=new $.ScrollMagic.Scene({triggerElement:"section"});a.setVelocity("article",{opacity:1},{duration:1e3,easing:"ease-in-out"}),a.addTo(n),$(".social__icons img").mouseover(function(){$(this).velocity({scale:1.4,rotateZ:"360deg"},{duration:400,easing:"ease-in-out"}),$(this).mouseleave(function(){$(this).velocity({scale:1,rotateZ:"-360deg"},{duration:300,easing:"ease-in-out"})})})};$(document).ready(main);