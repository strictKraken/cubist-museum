$(document).ready(activeSpoiler);
function activeSpoiler() {
	if ($(window).width() <= '768') {
		$('.links-footer__title').click(function (event) {
			$(this).toggleClass('active-arrow').next().slideToggle(200);
		});
		$('.btn-info').click(function (event) {
			$(this).toggleClass('active-arrow').next().slideToggle(200);
		});
	}
}

