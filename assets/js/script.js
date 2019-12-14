$(document).ready(function () {
	$('#hamburger-icon').click(function () {
		$(this).toggleClass('active');

		var hamburgerClass = $(this).attr("class");

		if (hamburgerClass.search("close-menu") == -1) {
			$('.overlay').toggleClass('open');
			$('body').css('overflow-y', 'hidden');
			$(this).toggleClass('close-menu');
			$(this).toggleClass('open-menu');
		} else {
			$('.overlay').toggleClass('open');
			$('body').css('overflow-y', 'auto');
			$(this).toggleClass('close-menu');
			$(this).toggleClass('open-menu');
		}
	});
});

$('footer a, .site-link a, .hover-off').hover(
	function() {
		$(this).removeClass('hover-off');
		$(this).addClass('hover-on');
	}, function() {
		$(this).removeClass('hover-on');
		$(this).addClass('hover-off');
	}
);

$('#northlich').click(function() {
	location.href="./northlich.html";
});

$('#engelandmartin').click(function() {
	location.href="/engelandmartin.html";
});

$('#cyberatuc').click(function() {
	location.href="./cyberatuc.html";
});
