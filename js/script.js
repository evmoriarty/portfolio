$(document).ready(function() {
	setTimeout(function(){
		document.body.className="";
	},1);

	/* Scroll Reveal */
	window.sr = ScrollReveal();
	let options = {
		duration: 1500,
		distance: '100px',
		scale: 1,
		viewFactor: 0.5			// 0.5 means 50% of the element has to be shown before it becomes visible
	}
	sr.reveal('header .text', { duration: 1500, distance: '100px', scale: 1 });
	sr.reveal('header .image', { duration: 1500, distance: '100px', scale: 1 });
	sr.reveal('#row-50 .landing-image', options);
	sr.reveal('#row-100', options);
	sr.reveal('.works-image-main', options);
	sr.reveal('.works-image-sub', options);
	sr.reveal('.works-image-more img', options);
	sr.reveal('.works-showcase, #row-50', {
						duration: 1500,
						delay: 100,
						distance: '100px',
						scale: 1,
						viewFactor: 0.5		// 0.5 means 50% of the element has to be shown before it becomes visible
					});

});

$('footer a, .site-link a').hover(
	function() {
		$(this).removeClass('hover-off');
		$(this).addClass('hover-on');
	}, function() {
		$(this).removeClass('hover-on');
		$(this).addClass('hover-off');
	}
);

// function openNav() {
// 	$('#sideNav').css('width', '200px');
// 	$('body').css('background-color', 'rgba(0,0,0,0.4)');
// 	$('#main-content img').css('opacity', '0.3');
// }

// function closeNav() {
// 	$('#sideNav').css('width', '0px');
// 	$('body').css('background-color', 'white');
// 	$('#main-content img').css('opacity', '1');
// }

$('#northlich').click(function() {
	location.href="./northlich.html";
});

$('#engelandmartin').click(function() {
	location.href="./engelandmartin.html";
});

$('#cyberatuc').click(function() {
	location.href="./cyberatuc.html";
});


/* Check the initial screen size */
$(document).ready(function() {
	/* Media Queries */
	let $window = $(window);
	let windowSize = $window.width();

	if (windowSize <= 756) {
		$('#cyberatuc').attr('src', './img/cyber@uc2.png');
	}

});
