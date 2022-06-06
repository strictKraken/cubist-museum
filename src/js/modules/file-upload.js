inputFiileStatus();
function inputFiileStatus() {
	$('.upload-file__input').change(function (e) {
		//e.preventDefault();
		let fileName = e.target.files[0].name;
		$(e.target).parents('.upload-file').find('.upload-file__content').text(fileName);
	});
}