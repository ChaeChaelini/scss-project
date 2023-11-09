$(document).ready(function () {
	$('.close').click(function () {
		$('.popup').hide();
	});

	$('.card3container').slick({
		autoplay: false,
		centerMode: true,
		slidesToShow: 3,

	});
});
