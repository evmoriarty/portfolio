$(document).ready(function() {
	setTimeout(function(){
		document.body.className="";
	},500);
});

$('footer a').hover(
	function() {
		$(this).removeClass('hover-off');
		$(this).addClass('hover-on');
	}, function() {
		$(this).removeClass('hover-on');
		$(this).addClass('hover-off');
	}
);

function openNav() {
	$('#sideNav').css('width', '250px');
	$('body').css('background-color', 'rgba(0,0,0,0.4)');
	$('#main-content img').css('opacity', '0.3');
}

function closeNav() {
	$('#sideNav').css('width', '0px');
	$('body').css('background-color', 'white');
	$('#main-content img').css('opacity', '1');
}