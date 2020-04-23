$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$(`.slider__body`).slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		speed: 1300,
		easing:`ease`,
		infinite: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 631,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					speed: 800,
				}
			}
		]
	});
});


