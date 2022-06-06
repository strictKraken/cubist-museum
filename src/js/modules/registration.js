import tickets from './count-tickets.js';
import inputFileStatus from './file-upload.js';
import * as checkingForm from './validate-form.js';

export function stepForm() {
	const btnNext = $('.reservation__btn-next');
	const btnPrev = $('.reservation__btn-prev');
	const steps = $('.reservation__form-step');
	const form = $('.reservation__form');
	const stepNumbers = $('.steps-line__step');
	const progress = $('.steps-line__progress-line');

	let formStep = 0;
	form.submit((e) => {
		e.preventDefault();
	});

	btnPrev.click(() => {
		$(stepNumbers[formStep]).removeClass('active-steps');
		formStep--;
		updateFormStep();
	})

	btnNext.click(() => {
		if (checkingForm.validateForm(formStep)) {
			formStep++;
			$(stepNumbers[formStep]).addClass('active-steps');
			
			updateFormStep();
		}
		//Submit form
		if (formStep === steps.length) {
			$('.reservation__form').submit();
		}
	})

	function updateFormStep() {
		steps.removeClass('form-reservation__form-active');
		$(steps[formStep]).addClass('form-reservation__form-active');

		if (formStep === 0) {
			btnPrev.hide();
		} else {
			btnPrev.css({
				"display": "flex",
			})
		}

		if (formStep === steps.length - 1) {
			btnNext.html('Buy');
		} else {
			btnNext.html('Next');
		}
		let precent = 100 / (steps.length - formStep);
		if (formStep == 0) precent = 0;

		progress.css({
			"width": precent + '%',
		})
	}
	
	
}