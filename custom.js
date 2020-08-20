//validations.js file attached to logo.html

$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop()>5) {
			$(".navbar").addClass("navbar-scroll");
		}
		else{ 
			$(".navbar").removeClass("navbar-scroll");
		}

		if($(this).scrollTop()>5){
			$(".navbar .navbar-brand img").attr("src","./imgs/logo.png");
		}
		else{
			$(".navbar .navbar-brand img").attr("src","./imgs/logo-alt.png");	
		}
		if($(this).scrollTop()>5){
			$(".navbar-scroll>li>a").css("color","#fff");						
			$(".navbar-collapse").css("background","#fff");
			$(".container-fluid").css("background" , "transparent");	

		}
		else{	
			$(".navbar-collapse").css("background","");
		}
	})
	$('.navbar-toggle').click(function(){
		$('.navbar').addClass('open');
	})
	$(document).on('click','.main-nav li',function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	$('.owl-carousel').owlCarousel({
	    autoplay:false,
	    dots:false,
	    nav:true,
	    loop:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	})
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	})
})