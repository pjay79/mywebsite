var fullscreen=function(){$("main").css({width:$(window).width(),height:$(window).height()})};fullscreen(),$(window).resize(function(){fullscreen()}),$("body").bind("touchstart",function(){}),$(window).on("load",function(){var e=new TimelineMax({paused:!0,delay:.5});e.set($(".main__content"),{visibility:"visible"}).from($(".main__content h2"),.5,{autoAlpha:0,y:"-=100px",ease:Bounce.easeOut}).from($(".main__content h1"),.25,{autoAlpha:0,ease:Power2.easeOut}).from($(".main__content p:first-of-type"),.5,{autoAlpha:0,scale:1.2,ease:Back.easeOut}).from($(".main__content p:last-child"),.5,{autoAlpha:0,ease:Back.easeOut}),e.play()}),$(window).scroll(function(){$(this).scrollTop()>50?$("header").addClass("sticky"):$("header").removeClass("sticky")});var overlay=new TimelineMax({paused:!0});overlay.to($(".main__menu--overlay"),.25,{autoAlpha:1}).staggerFrom($("nav ul li a"),.25,{autoAlpha:0,scale:1.5,cycle:{x:[-25,25]},ease:Expo.easeOut},.25),$(".main__menu").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),overlay.timeScale(5).reverse()):($(this).addClass("active"),overlay.timeScale(1).play())}),$("nav li a").click(function(){$(".main__menu").removeClass("active"),overlay.timeScale(5).reverse()}),TweenMax.to($("#scrolldown"),1.5,{y:10,repeat:-1,yoyo:!0,ease:Power4.easeInOut}),$("#scrolldown").click(function(){$("#about").velocity("scroll",{duration:800})}),TweenMax.to($("#scrollup"),1.5,{y:-10,repeat:-1,yoyo:!0,ease:Power4.easeInOut}),$("#scrollup").click(function(){$("#home").velocity("scroll",{duration:800})});var controller=new $.ScrollMagic.Controller,scene=new $.ScrollMagic.Scene({triggerElement:"#about"}),about__animation=new TimelineMax;about__animation.from($(".about-me h3"),1.5,{opacity:0,width:0,ease:Expo.easeOut},.35).from($(".about-skills h3"),1.5,{opacity:0,width:0,ease:Expo.easeOut},.35).from($(".about-skills img"),2.5,{opacity:0,scale:0,y:"+=100px",ease:Expo.easeOut},0).staggerFrom($(".about-me p"),1.5,{opacity:0,y:"+=100px",ease:Expo.easeOut},.35,0).staggerFrom($(".about-skills p"),1.5,{opacity:0,y:"+=100px",ease:Expo.easeOut},.35,0),scene.setTween(about__animation),scene.addTo(controller);var scene1=new $.ScrollMagic.Scene({triggerElement:"#portfolio"}),portfolio__animation=new TimelineMax;portfolio__animation.from($("#portfolio h3"),2.5,{opacity:0,width:0,ease:Expo.easeOut},.35).staggerFrom($("#portfolio figure"),1.5,{opacity:0,scale:1.4,y:"+=100px",ease:Expo.easeOut},.5,0),scene1.setTween(portfolio__animation),scene1.addTo(controller);var scene2=new $.ScrollMagic.Scene({triggerElement:"#quote"}),quote__animation=new TimelineMax;quote__animation.from($("blockquote"),1,{margin:"0, -5%",ease:Expo.easeOut}).staggerFrom($("#quote p:first-of-type"),1,{opacity:0,y:"+=100px",ease:Expo.easeOut},.35,0),scene2.setTween(quote__animation),scene2.addTo(controller);var scene3=new $.ScrollMagic.Scene({triggerElement:"#contact"}),contact__animation=new TimelineMax;contact__animation.from($(".contact__info h3"),1.5,{opacity:0,width:0,ease:Expo.easeOut}).from($(".contact__info img"),1.5,{opacity:0,scale:0,y:"+=200px",ease:Expo.easeOut},0).from($(".contact__info a"),1.5,{opacity:0,y:"+=200px",ease:Expo.easeOut},0).from($(".contact__info p"),1.5,{opacity:0,y:"+=200px",ease:Expo.easeOut},0).from($(".contact__form h3"),1.5,{opacity:0,width:0,ease:Expo.easeOut},0).staggerFrom($(".contact__form div"),1.5,{opacity:0,y:"+=200px",ease:Expo.easeOut},.25,0),scene3.setTween(contact__animation),scene3.addTo(controller);var icons1=$(".main__social img");icons1.hover(function(){TweenMax.to($(this),1,{scale:1.3,rotation:360,ease:Expo.easeOut})},function(){TweenMax.to($(this),1,{scale:1,rotation:-360,ease:Bounce.easeOut})});var icons2=$(".contact__social img");icons2.hover(function(){TweenLite.to($(this),1,{scale:1.3,rotation:360,ease:Expo.easeOut})},function(){TweenLite.to($(this),1,{scale:1,rotation:-360,ease:Bounce.easeOut})}),$("form").submit(function(){var e=new TimelineMax;e.to($("#confirmation"),.5,{opacity:1,ease:Expo.easeOut}).to($("#confirmation"),.5,{autoAlpha:0,ease:Expo.easeOut},.5),event.preventDefault();var a=$("form").serialize();return $.ajax({type:"POST",url:$("form").attr("action"),data:a}),$("#name").val(""),$("#email").val(""),$("#message").val(""),!1}),TweenMax.to($(".copyright p img"),.2,{scale:1.2,repeat:-1,repeatDelay:.2,yoyo:!0,ease:Power3.easeOut});