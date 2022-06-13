<template>
	<form action="submit" class="reservation__form" method="get">
		<div class="reservation__steps steps-line">
			<div class="steps-line__progress">
				<div class="steps-line__progress-line"></div>
			</div>

			<div class="steps-line__step active-steps" :class="{ 'active-steps': currentStep >= 0 }">
				<div class="steps-line__step-style">
					<img class="img-svg" src="@/img/icons/rectangle-white.svg" alt="">
					<div class="steps-line__number">
						1
					</div>
				</div>
				<div class="steps-line__text">
					Tickets
				</div>
			</div>
			<div class="steps-line__step" :class="{ 'active-steps': (currentStep >= 1) }">
				<div class="steps-line__step-style">
					<img class="img-svg" src="@/img/icons/rectangle-white.svg" alt="">
					<div class="steps-line__number">
						2
					</div>
				</div>
				<div class="steps-line__text">
					Personal info
				</div>
			</div>
			<div class="steps-line__step" :class="{ 'active-steps': currentStep >= 2 }">
				<div class="steps-line__step-style">
					<img class="img-svg" src="@/img/icons/rectangle-white.svg" alt="">
					<div class="steps-line__number">
						3
					</div>
				</div>
				<div class="steps-line__text">
					Payment
				</div>
			</div>
		</div>

		<div class="reservation__free-sits">
			Number of available seats 21/50
		</div>

		<div v-if="currentStep === 0" class="reservation__form-step form-reservation">
			<h6 class="form-reservation__section-name">
				Select the date
				<span class="form-reservation__errore-head errore-head">
					<img src="@/img/icons/error.svg" alt="error">
					Please select a date
				</span>
			</h6>
			<div class="form-reservation__date-pick">

				<label class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick">
					<div class="radio-btn-rectangle__day">
						Today
					</div>
					<div class="radio-btn-rectangle__time">
						17.02.2022
					</div>
					<div class="radio-btn-rectangle__border"></div>
				</label>

				<label class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick">
					<div class="radio-btn-rectangle__day">
						Today
					</div>
					<div class="radio-btn-rectangle__time">
						17.02.2022
					</div>
					<div class="radio-btn-rectangle__border"></div>
				</label>

				<label class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick">
					<div class="radio-btn-rectangle__day">
						Today
					</div>
					<div class="radio-btn-rectangle__time">
						17.02.2022
					</div>
					<div class="radio-btn-rectangle__border"></div>
				</label>
				<label class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick">
					<div class="radio-btn-rectangle__day">
						Today
					</div>
					<div class="radio-btn-rectangle__time">
						17.02.2022
					</div>
					<div class="radio-btn-rectangle__border"></div>
				</label>

				<label class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick">
					<div class="radio-btn-rectangle__day">
						Today
					</div>
					<div class="radio-btn-rectangle__time">
						17.02.2022
					</div>
					<div class="radio-btn-rectangle__border"></div>
				</label>


			</div>
			<div class="form-reservation__ticket-block">
				<h6 class="form-reservation__section-name">
					Select the time
					<span class="form-reservation__errore-head errore-head">
						<img src="@/img/icons/error.svg" alt="errore">
						Please select a time
					</span>
				</h6>
				<div class="form-reservation__time-pick">
					<label class="radio-btn-rectangle__lable">
						<input class="radio-btn-rectangle__input" type="radio" name="time-pick">
						<div class="radio-btn-rectangle__time">
							10:00
						</div>
						<div class="radio-btn-rectangle__border"></div>
					</label>
					<label class="radio-btn-rectangle__lable">
						<input class="radio-btn-rectangle__input" type="radio" name="time-pick">
						<div class="radio-btn-rectangle__time">
							13:00
						</div>
						<div class="radio-btn-rectangle__border"></div>
					</label>
					<label class="radio-btn-rectangle__lable">
						<input class="radio-btn-rectangle__input" type="radio" name="time-pick">
						<div class="radio-btn-rectangle__time">
							16:00
						</div>
						<div class="radio-btn-rectangle__border"></div>
					</label>
				</div>
				<h6 class="form-reservation__section-name">
					Select tickets
					<span class="form-reservation__errore-head errore-head">
						<img src="@/img/icons/error.svg" alt="error">
						Please select a ticket
					</span>
				</h6>
				<div class="form-reservation__ticket-pick">
					<div class="ticket-pick" id="btn-base">
						<div class="ticket-pick__text">
							Without lugot
						</div>
						<div class="ticket-pick__price">800 ₽</div>

						<div class="ticket-pick__count">
							<button class="ticket-pick__btn-left" btn-left>
								-
							</button>
							<label class="ticket-pick__number">
								<input class="ticket-pick__number-input" name="count-tickets-base"
									type="number" value="0" min="0" max="99" ticket-count>
								<p>0</p>
							</label>
							<button class="ticket-pick__btn-right" btn-right>
								+
							</button>
						</div>
					</div>
				</div>

				<div class="form-reservation__ticket-pick ">
					<div class="ticket-pick" id="btn-retirees">
						<div class="ticket-pick__text">
							Retirees
						</div>
						<div class="ticket-pick__price">free</div>

						<div class="ticket-pick__count">
							<button class="ticket-pick__btn-left" id='btn-left'>
								-
							</button>
							<label class="ticket-pick__number">
								<input class="ticket-pick__number-input" name="count-tickets-retiress"
									type="number" value="0" min="0" max="99" ticket-count>
								<p>0</p>
							</label>
							<button class="ticket-pick__btn-right" id="btn-right">
								+
							</button>
						</div>
					</div>
					<div class="form-reservation__upload-file upload-file">
						<input class="upload-file__input" type="file" name="" id="file-input1"
							accept=".jpg, jpeg, .png, .pdf">
						<label class="upload-file__label" for="file-input1">
							<img class="img-svg upload-file__logo" src="@/img/icons/inputFile.svg"
								alt="upload-file">
							<div class="upload-file__content">
								<span class="upload-file__text">Please confirm your status</span>
								<span class="upload-file__info-text">Attach your selfies with the
									documents</span>
							</div>
						</label>
					</div>
				</div>

				<div class="form-reservation__ticket-pick">
					<div class="ticket-pick" id="btn-student">
						<div class="ticket-pick__text">
							Students
						</div>
						<div class="ticket-pick__price">400 ₽</div>

						<div class="ticket-pick__count">
							<button class="ticket-pick__btn-left" id='btn-left'>
								-
							</button>
							<label class="ticket-pick__number">
								<input class="ticket-pick__number-input" name="count-tickets-student"
									type="number" value="0" min="0" max="99" ticket-count>
								<p>0</p>
							</label>
							<button class="ticket-pick__btn-right" id="btn-right">
								+
							</button>
						</div>
					</div>
					<div class="form-reservation__upload-file upload-file">
						<input class="upload-file__input" type="file" name="" id="file-input2"
							accept=".jpg, jpeg, .png, .pdf">
						<label class="upload-file__label" for="file-input2">
							<img class="img-svg upload-file__logo" src="@/img/icons/inputFile.svg"
								alt="upload-file">
							<div class="upload-file__content">
								<span class="upload-file__text">Please confirm your status</span>
								<span class="upload-file__info-text">Attach your selfies with the
									documents</span>
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>

		<div v-else-if="currentStep === 1" class="reservation__form-step form-reservation">
			<h6 class="form-reservation__section-name">
				Name
			</h6>
			<p class="form-reservation__errore-input-text">
				Please state your Name
			</p>
			<input class="form-reservation__input" type="text" placeholder="What is your name?"
				maxlength="55" name="name-input" value="">

			<h6 class="form-reservation__section-name">
				Phone number
			</h6>
			<p class="form-reservation__errore-input-text">
				Please state your phone number
			</p>
			<input class="form-reservation__input" type="tel" placeholder="+7(___)-___-__-__" name="data-tel-input" data-tel-input>
			<h6 class="form-reservation__section-name">
				Choose to receive a tour invitation links
				<div class="form-reservation__help" id="help">
					<img class="" src="@/img/icons/qustion_sign.svg" alt="help">
				</div>
			</h6>
			<p class="form-reservation__errore-input-text">
				Please choose to receive a tour link
			</p>
			<div class="form-reservation__contacts-link">
				<label class="form-reservation__contacts-item">
					<input type="checkbox" class="form-reservation__checkbox">
					<img class="img-svg" src="@/img/icons/whatsapp.svg" alt="">
					<div class="form-reservation__contacts-text">
						WhatsApp
					</div>
					<div class="form-reservation__checkbox-fake"></div>
				</label>
			</div>
			<div class="form-reservation__contacts-link">
				<label class="form-reservation__contacts-item">
					<input type="checkbox" class="form-reservation__checkbox">
					<img class="img-svg" src="@/img/icons/telegram.svg" alt="">
					<div class="form-reservation__contacts-text">
						Telegram
					</div>
					<div class="form-reservation__checkbox-fake"></div>
				</label>
			</div>
			<div class="form-reservation__contacts-link">
				<label class="form-reservation__contacts-item" id="checkbox-mail">
					<input type="checkbox" class="form-reservation__checkbox">
					<img class="img-svg" src="@/img/icons/google.svg" alt="">
					<div class="form-reservation__contacts-text">
						Email
					</div>
					<div class="form-reservation__checkbox-fake"></div>
				</label>
				<input class="form-reservation__input form-reservation__contacts-mail" type="email"
					name="" id="mail" placeholder="Email address">
			</div>
			<div class="form-reservation__contacts-link">
				<label class="form-reservation__contacts-item">
					<input type="checkbox" class="form-reservation__checkbox">
					<img class="img-svg" src="@/img/icons/messages.svg" alt="">
					<div class="form-reservation__contacts-text">
						SMS
					</div>
					<div class="form-reservation__checkbox-fake"></div>
				</label>
			</div>
			<div class="form-reservation__add-new">
				<div class="form-reservation__section-name">
					Add a person
				</div>
				<button class="form-reservation__add-btn" id="add-new-person">
					<img class="img-svg" src="@/img/icons/plus-person.svg" alt="">
				</button>
			</div>
		</div>
		
		<div v-else-if="currentStep === 2" class="reservation__form-step form-reservation">
				<h6 class="form-reservation__section-name">
					Select payment
					<span class="form-reservation__errore-head errore-head">
						<img src="@/img/icons/error.svg" alt="error">
						Please choose a payment
					</span>
				</h6>								
				
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/paypal.svg" alt="PayPal">
				<p class="form-reservation__payment-name">
					PayPal
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/google.svg" alt="Google Pay">
				<p class="form-reservation__payment-name">
					Google Pay
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>

			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/tinkoff.svg" alt="Tinkoff Pay">

				<p class="form-reservation__payment-name">
					Tinkoff Pay
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/qiwi.svg" alt="QIWI Wallet">
				<p class="form-reservation__payment-name">
					QIWI Wallet
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/webmoney.svg" alt="Web Money">
				<p class="form-reservation__payment-name">
					Web Money
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/sberbank.svg" alt="Sberbank Online">
				<p class="form-reservation__payment-name">
					Sberbank Online
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
			<label class="form-reservation__payment">
				<input type="radio" name="payment">
				<img class="img-svg" src="@/img/icons/payment/mastercard.svg" alt="Bankcard">
				<p class="form-reservation__payment-name">
					Bankcard
				</p>
				<div class="form-reservation__radio-fake"></div>
			</label>
		</div>

		<div class="reservation__navigation">
			<button v-if="currentStep > 0" @click.prevent="btnPrev" class="reservation__btn-prev white-button">Back</button>
			<button @click.prevent="btnNext" class="reservation__btn-next green-button">Next</button>
		</div>
	</form>    
</template>

<script>
import $ from "jquery";
import {ref} from 'vue';

export default {
	name: 'FormReseve',
	setup() {
		let currentStep = ref(0);
		
		const $stepNumbes = $('.steps-line__step');
		const btnPrev = () => {
			$($stepNumbes[currentStep]).removeClass('active-steps');
			currentStep.value--;
			//
			updateFrom()
		}
		const btnNext = () => {
			currentStep.value++;
		}
		
		const updateFrom = () => {
			
		}

		return {
			currentStep,
			btnNext,
			btnPrev,
		}
	},

}
</script>

