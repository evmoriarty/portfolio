// TODO: Is any of this stuff needed?
let onBlogPage = false;

$(document).ready(function() {
	var currentURL = $(location).attr("href");

	if (~currentURL.indexOf('blog')) {
		// Toggles the navbar from dark to light
		$('.navbar').toggleClass('navbar-dark navbar-light');
		onBlogPage = true;
	}

	$(".navbar-toggler").click(function() {
		// Toggle the navbar background when opened (mainly on mobile)
		if (!onBlogPage) {
			$(".navbar").toggleClass("navbar-border-dark");
		} else {
			$(".navbar").toggleClass("bg-light");
			$(".navbar").toggleClass("border");
		}
	});
});