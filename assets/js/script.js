// TODO: Is any of this stuff needed?
let onBlogPage = false;

$(document).ready(function() {
	var currentURL = $(location).attr("href");

	console.log(currentURL);

	if (~currentURL.indexOf('blog')) {
		console.log("On blog page");
		// Toggles the navbar from dark to light
		$('.navbar').toggleClass('navbar-dark navbar-light');
		onBlogPage = true;
	}

	$(".navbar-toggler").click(function() {
		if ( !$(".navbar-toggler").hasClass("collapsed") ) {

			if (!onBlogPage) {
				$(".navbar").addClass("navbar-border-dark");
			} else {
				$(".navbar").addClass("bg-light");
				$(".navbar").addClass("border");
			}

		} else {
			if (!onBlogPage) {
				$(".navbar").removeClass("navbar-border-dark");
			} else {
				$(".navbar").removeClass("bg-light");
				$(".navbar").removeClass("border");
			}
		}

	});
});