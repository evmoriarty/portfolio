$(document).ready(function () {
	// Executes when HTML-Document is loaded and DOM is ready

	$(".navbar-toggler").click(function() {
		if ( !$(".navbar-toggler").hasClass("collapsed") ) {
			$(".navbar").addClass("navbar-border-dark");
			// $(".navbar").css({ "background-color": "#212121", "border-color": "rgba(255, 255, 255, 0.1)!important"});
		} else {
			$(".navbar").removeClass("navbar-border-dark");
			// $(".navbar").css({"background-color": "", "border-color": ""});
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
