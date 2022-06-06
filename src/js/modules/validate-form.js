import maskPhone from "./mask-phone.js";

export function validateForm(stepNumber) {
	let flag = 0;
	switch (stepNumber) {
		case 0:
			flag = step_1();
			break;
		case 1:
			flag = step_2();
			break;
		case 2:
			flag = step_3();
			break;
		default:
			break;
	}
	return flag;
}
// Checked form list №1
function step_1() {
	let correct = 1;
	let $checkedDate = $('input[name=date-pick]:checked').val();
	let $checkedTime = $('input[name=time-pick]:checked').val();

	const errores = $('.errore-head');
	correct = step_1_tickets();
	if ($checkedTime === undefined) {
		$(errores[1]).show();
		correct = 0;
		
	} else {
		$(errores[1]).hide();
	}
	if ($checkedDate === undefined) {
		$(errores[0]).show();
		correct = 0;
		
	} else {
		$(errores[0]).hide();
	}
	//checking uploaded files
	if($('input[name=count-tickets-retiress][ticket-count]').val() > 0 && $('#file-input1')[0].files.length == 0) {
		$('input[name=count-tickets-retiress]').parents('.form-reservation__ticket-pick').find('.upload-file__label').addClass('ticket-pick__number-file-errore');	
		correct = 0;
	} else {

	}
	
	if($('input[name=count-tickets-student][ticket-count]').val() > 0 && $('#file-input2')[0].files.length == 0) {
		$('input[name=count-tickets-student]').parents('.form-reservation__ticket-pick').find('.upload-file__label').addClass('ticket-pick__number-file-errore');
		console.log($('input[name=count-tickets-student]').parents('.form-reservation__ticket-pick').find('.upload-file__label'));
		correct = 0;
	} else {

	}

	return correct;
}
function step_1_tickets() {
	let correct = 1;
	const arrTickets = $('input[ticket-count]');
	for(let i = 0; i < arrTickets.length; i++) {
		if($(arrTickets[i]).val() > 0 ) {
			let errores = $('.errore-head');
			$('.ticket-pick__number').removeClass('ticket-pick__number-error');
			$(errores[2]).hide();
			return 1;
		} else correct = 0;
	}
	if(!correct) {
		$('.ticket-pick__number').addClass('ticket-pick__number-error');
		let errores = $('.errore-head');
		$(errores[2]).show();
		correct = 0;
	}
	return correct;
}
// Checked form list №2
function step_2() {
	let correct = 1;
	let checkedName = $('input[name=name-input]').val();
	let checkedPhone = $('input[name=data-tel-input]').val();
	let checkedLink = $('.form-reservation__checkbox:checked').val();
	let $erroreText = $('input[name=data-tel-input]').parents('.reservation__form-step').find('.form-reservation__errore-input-text');
	//checked Name
	if (!checkedName) {
		$('input[name=name-input]').addClass('form-reservation__errore-input');
		$($erroreText[0]).show();
		correct = 0 ;
	} else {
		$('input[name=name-input]').removeClass('form-reservation__errore-input');
		$($erroreText[0]).hide();
	}
	//checked Phone
	
	if(!checkedPhone || checkedPhone.length <= 16) {
		$('input[name=data-tel-input]').addClass('form-reservation__errore-input');
		$($erroreText[1]).show();
		correct = 0 ;
	} else {
		$('input[name=data-tel-input]').removeClass('form-reservation__errore-input');
		$($erroreText[1]).hide();
	}
	//checked links 
	if(checkedLink === undefined) {
		correct = 0 ;
		$($erroreText[2]).show();
	} else {	
		
		$($erroreText[2]).hide();					
	}
	return correct;
}
// Checked form list №3
function step_3() {
	let checkedPayment = $('input[name=payment]:checked').val();
	let $erroreText = $('.form-reservation__section-name > .errore-head')
	
	if ((checkedPayment === undefined)) {
		$erroreText.show();
		return false;
	} else {
		$erroreText.hide();
		return true;
	}

}