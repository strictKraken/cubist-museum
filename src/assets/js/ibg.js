import $ from 'jquery';

function ibg() {
	$.each($('._ibg'), function () {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
export {ibg}