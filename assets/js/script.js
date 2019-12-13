$('footer a, .site-link a, .hover-off').hover(
	function() {
		$(this).removeClass('hover-off');
		$(this).addClass('hover-on');
	}, function() {
		$(this).removeClass('hover-on');
		$(this).addClass('hover-off');
	}
);

function openNav() {
	$('#sideNav').css('width', '100%');
	$('.sidenav-links').css('opacity', '1');
	$('body').css('background-color', 'rgba(0,0,0,0.6)');
	$('#main-content img').css('opacity', '0.3');
}

function closeNav() {
	$('#sideNav').css('width', '0px');
	$('.sidenav-links').css('opacity', '0');
	$('body').css('background-color', 'white');
	$('#main-content img').css('opacity', '1');
}

$('#northlich').click(function() {
	location.href="./northlich.html";
});

$('#engelandmartin').click(function() {
	location.href="/engelandmartin.html";
});

$('#cyberatuc').click(function() {
	location.href="./cyberatuc.html";
});
