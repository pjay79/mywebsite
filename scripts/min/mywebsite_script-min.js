$(document).ready(function(){var e=function(){$("main").css({width:$(window).width(),height:$(window).height()})};e(),$(window).resize(function(){e()}),$("body").bind("touchstart",function(){});var a=new TimelineMax;a.from($(".main__content h2"),.5,{opacity:0,ease:Power1.easeIn,delay:1}).from($(".main__content h1"),.5,{opacity:0,scale:1.5,ease:Power1.easeIn}).from($(".main__content p:first-of-type"),.5,{opacity:0,ease:Power1.easeIn}).from($(".main__content p:last-child"),.5,{opacity:0,ease:Power1.easeIn}),$(window).scroll(function(){$(this).scrollTop()>50?$("header").addClass("sticky"):$("header").removeClass("sticky")}),$(".main__menu").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$("nav").velocity({opacity:0,translateY:"-75vh"},{duration:400,easing:"ease"}),$(".main__menu--overlay").removeClass("open")):($(this).addClass("active"),$(".main__menu--overlay").addClass("open"),$("nav").velocity({opacity:1,translateY:"75vh"},{duration:400,easing:"ease"}))}),$("nav li a").click(function(){$(".main__menu").removeClass("active"),$("header").css({"box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"}),$("nav").velocity({opacity:0,translateY:"-75vh"},{duration:400,easing:"ease"}),$(".main__menu--overlay").removeClass("open")}),$("#scrolldown").velocity({translateY:"5px"},{duration:800,loop:!0}),$("#scrolldown").click(function(){$("#about").velocity("scroll",{duration:800})}),$("#scrollup").velocity({translateY:"5px"},{duration:800,loop:!0}),$("#scrollup").click(function(){$("#home").velocity("scroll",{duration:800})});var o=new $.ScrollMagic.Controller,t=new $.ScrollMagic.Scene({triggerElement:"#about"}),i=new TimelineMax;i.staggerFrom($(".about-me p"),1.5,{opacity:0,y:"+=100px",ease:Power2.easeInOut},.35).staggerFrom($(".about-skills p"),1.5,{opacity:0,y:"+=100px",ease:Power2.easeInOut},.35,0),t.setTween(i),t.addTo(o);var n=new $.ScrollMagic.Scene({triggerElement:"#portfolio"}),s=TweenMax.staggerFrom($("#portfolio figure"),1.5,{opacity:0,scale:1.2,y:"+=200px",ease:Expo.easeOut},.5);n.setTween(s),n.addTo(o);var c=new $.ScrollMagic.Scene({triggerElement:"#quote"}),r=new TimelineMax;r.staggerFrom($("blockquote"),1.5,{opacity:0,ease:Expo.easeOut},.5).staggerFrom($("#quote p"),1.5,{opacity:0,y:"+=200px",ease:Back.easeOut},.5,0),c.setTween(r),c.addTo(o),$(".main__social img").mouseover(function(){$(this).velocity({scale:1.4,rotateZ:"360deg"},{duration:400,easing:"ease-in-out"}),$(this).mouseleave(function(){$(this).velocity({scale:1,rotateZ:"-360deg"},{duration:200,easing:"ease-in-out"})})}),$(".contact__social img").mouseover(function(){$(this).velocity({scale:1.4,rotateZ:"360deg"},{duration:400,easing:"ease-in-out"}),$(this).mouseleave(function(){$(this).velocity({scale:1,rotateZ:"-360deg"},{duration:200,easing:"ease-in-out"})})}),$("form").submit(function(){$("#confirmation").css("opacity",1),$("#confirmation").velocity({opacity:0},{delay:800,duration:400,easing:"ease"}),event.preventDefault();var e=$("form").serialize();return $.ajax({type:"POST",url:$("form").attr("action"),data:e}),$("#name").val(""),$("#email").val(""),$("#message").val(""),!1})});