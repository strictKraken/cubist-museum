$('.price-reservation__item').hide();
countTicket();

function countTicket() {
	const btnPlus = $('.ticket-pick__btn-right');
	const btnMinus = $('.ticket-pick__btn-left');

	btnPlus.click(function (e) {
		e.preventDefault();
		let textCount = $(this).parents('.ticket-pick__count').find('.ticket-pick__number');
		let count = parseInt(textCount.text());
		if (count < 99) {
			textCount.find('p').text(++count);
			$(this).parents('.ticket-pick__count').find('input').val(count);
			uploadFile(this, count);
			resultAside(this, count);			
		}
	});
	btnMinus.click(function (e) {
		e.preventDefault();
		let textCount = $(this).parents('.ticket-pick__count').find('.ticket-pick__number');
		let count = parseInt(textCount.text());
		if (count != 0) {
			textCount.find('p').text(--count);
			$(this).parents('.ticket-pick__count').find('input').val(count);
			uploadFile(this, count);
			resultAside(this, count);
		}
	});
}

function uploadFile(target, flag) {
	const inputFile = $(target).parents('.form-reservation__ticket-pick').find('.upload-file');
	if (flag === 0) {
		inputFile.hide();
	} else {
		inputFile.show();
	}
}

function resultAside(target, count) {
	let price = count * parseInt($(target).parents('.ticket-pick').find('.ticket-pick__price').text());
	let items = $('.price-reservation__price');
	let total = 0;
	if (count > 0) {
		switch ($(target).parents('.ticket-pick').attr('id')) {
			case 'btn-base':
				$('#ticket-base').show();
				$('#ticket-base').find('.price-reservation__price').text(price + ' ₽');
				$('#ticket-base').find('.price-reservation__count').text('x' + count);
				break;
			case 'btn-retirees':
				$('#ticket-retirees').show().find('.price-reservation__price').text('free');
				$('#ticket-retirees').show().find('.price-reservation__count').text('x' + count);
				break;
			case 'btn-student':
				$('#ticket-student').show();
				$('#ticket-student').find('.price-reservation__price').text(price + ' ₽');
				$('#ticket-student').find('.price-reservation__count').text('x' + count);
				break;
			default: break;
		}
	} else {
		switch ($(target).parents('.ticket-pick').attr('id')) {
			case 'btn-base':
				$('#ticket-base').find('.price-reservation__price').text(0);
				$('#ticket-base').hide();
				break;
			case 'btn-retirees':
				$('#ticket-retirees').hide();
				break;
			case 'btn-student':
				$('#ticket-student').find('.price-reservation__price').text(0);
				$('#ticket-student').hide();
				break;
			default: break;
		}
	}

	$.each(items, function (indexInArray, valueOfElement) {
		if ($.isNumeric(parseInt($(valueOfElement).text()))) {
			total += parseInt($(valueOfElement).text());
		}
	});
	$('.price-reservation__total').text(total + ' ₽');
}