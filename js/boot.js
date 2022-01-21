
$(function () {
	'use strict';
	 $(".footer h1").fitText(1.6 , {
	 	minFontSize : "24px",
	 	maxFontSize : "47px"
	 })

	});

let servicesBtn = document.querySelector(".services div.btn");
	servicesBtn.onclick = function () {
		document.location.href="services.html";
	}
	


/* our-client */ 
$('.slick-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

let clientBtn = document.querySelector(".our-client div.btn");
	clientBtn.onclick = function () {
		document.location.href="client.html";
	}

/* slider */ 
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
