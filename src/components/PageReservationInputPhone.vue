<template>
	<input class="form-reservation__input" type="tel" placeholder="+7(___)-___-__-__" name="data-tel-input" data-tel-input v-model='value'>
</template>

<script>
import {computed, onMounted } from 'vue';

export default {
	name: 'InputPhone',
	props: ['phone'],
	emits: ['update:phone'],
	setup(props, {emit}) {
		const value = computed({
			get() {
				return props.phone
			},
			set(value) {
				emit('update:phone', value)
			}
		})
		
		onMounted(()=> {
			maskPhone();
		})

		function maskPhone() {
			let phoneInputs = document.querySelectorAll('input[data-tel-input]');

			let getInputNumbersValue = function (input) {
				return input.value.replace(/\D/g, "");
			}

			let onPhoneInput = function (e) {
				let input = e.target,
					inputNumbersValue = getInputNumbersValue(input),
					formattedInputValue = '',
					selectionStart = input.selectionStart;

				if (!inputNumbersValue) {
					return input.value = "";

				}
				// Редактирование в середине строки
				if (input.value.length != selectionStart) {
					if (e.data && /\D/g.test(e.data)) {
						input.value = inputNumbersValue;
					}
					return;
				}


				if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
					//Rus number
					if (inputNumbersValue[0] == 9) {
						inputNumbersValue = '7' + inputNumbersValue;
					}
					let firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
					formattedInputValue = firstSymbols + " ";
					if (inputNumbersValue > 1) {
						formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
					}
					if (inputNumbersValue.length >= 5) {
						formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
					}
					if (inputNumbersValue.length >= 8) {
						formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
					}
					if (inputNumbersValue.length >= 10) {
						formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
					}
				} else {
					// Not Rus number
					formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
				}
				input.value = formattedInputValue;
			}

			let onPhoneKeyDown = function (e) {
				let input = e.target;
				if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
					input.value = '';
				}
			}

			let onPhonePaste = function (e) {
				let pasted = e.clipboardData || window.clipboardData,
					input = e.target,
					inputNumbersValue = getInputNumbersValue(input);

				if (pasted) {
					let pastedText = pasted.getData('Text');
					if (/\D/g.test(pastedText)) {
						input.value = inputNumbersValue;
					}
				}
			}

			for (let i = 0; i < phoneInputs.length; i++) {
				let input = phoneInputs[i];
				input.addEventListener('input', onPhoneInput);
				input.addEventListener('keydown', onPhoneKeyDown);
				input.addEventListener('paste', onPhonePaste);

			}
		}
		
		return {
			value
		}
	},
}
</script>