$('.btn-to-top').click(() => {
	const timeForAniation = 550;

	console.log('scroll to top');
	$("html,body").animate({
		scrollTop: "0"
	}, timeForAniation)
	$(document).scrollTop(0);
});