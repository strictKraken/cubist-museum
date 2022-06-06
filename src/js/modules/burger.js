$(document).ready(function () {
	$('.burger').click(function () {
		$('.menu__body,.header__burger').toggleClass('active');
		$('.search').toggleClass('active-search');
		$('body,html').toggleClass('lock');
	});
});