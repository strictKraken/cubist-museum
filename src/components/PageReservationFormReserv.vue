<template>
	<form action="submit" class="reservation__form" method="get">
		<div class="reservation__steps steps-line">
			<div class="steps-line__progress">
				<div class="steps-line__progress-line"></div>
			</div>

			<div class="steps-line__step active-steps" :class="{ 'active-steps': currentStep >= 0 }">
				<div class="steps-line__step-style">
					<icon-triangle/>
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
					<icon-triangle/>
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
					<icon-triangle/>
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
				<label v-for="item in data.dateExhibition" :key="item.id" class="radio-btn-rectangle__lable">
					<input class="radio-btn-rectangle__input" type="radio" name="date-pick" v-model="dataInput.selectedDate" :value="item">
					<div class="radio-btn-rectangle__day">
						{{ item.index }}
					</div>
					<div class="radio-btn-rectangle__time">
						{{ item }}
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
					<label v-for="item in data.timeExhibition" :key="item.index" class="radio-btn-rectangle__lable">
						<input class="radio-btn-rectangle__input" type="radio" name="time-pick" v-model="dataInput.selectedTime" :value="item">
						<div class="radio-btn-rectangle__time">
							{{ item }}
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
				
				<select-tickets @onChange="handleChanges" :cTickets="dataInput.tickets.bases">
					<template v-slot:text>
						Without lugot	
					</template>
					<template v-slot:price>
						800 ₽
					</template>
				</select-tickets>
				<select-tickets @onChange="handleChanges2" :cTickets="dataInput.tickets.retirees">
					<template v-slot:text>
						Retirees	
					</template>
					<template v-slot:price>
						free
					</template>
				</select-tickets>
				<select-tickets @onChange="handleChanges3" :cTickets="dataInput.tickets.students">
					<template v-slot:text>
						Students	
					</template>
					<template v-slot:price>
						400 ₽
					</template>
				</select-tickets>
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
				maxlength="55" name="name-input" v-model='dataInput.name'>

			<h6 class="form-reservation__section-name">
				Phone number
			</h6>
			<p class="form-reservation__errore-input-text">
				Please state your phone number
			</p>
			<input class="form-reservation__input" type="tel" placeholder="+7(___)-___-__-__" name="data-tel-input" data-tel-input v-model='dataInput.phone'>
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
import {onMounted, ref} from 'vue';

import IconTriangle from "./icons/IconTriangle.vue";
import SelectTickets from './PageReservationSelectTickets.vue';

export default {
	name: 'FormReseve',
	emits: ['onChangesTickets'],
	props: {
		sourceInput : {
			type: Object,
			require: true,
		}
	},
	components: {
		IconTriangle,
		SelectTickets,
	},
	setup(props, {emit}) {
		
		const data = {
			dateExhibition: {
				1: '17.02.2022',
				2: '18.02.2022',
				3: '19.02.2022',
				4: '20.02.2022',
			},
			timeExhibition: {
				1: '10:00',
				2: '13:00',
				3: '16:00',
			}
		}
		//data user
		let dataInput = ref(props.sourceInput);

		const onChangesTickets = () => {
			emit('onChangesTickets',dataInput)
		}

		const handleChanges = item => {
			dataInput.value.tickets.bases = item.value
			emit('onChangesTickets',dataInput)
		}
		const handleChanges2 = item => {
			dataInput.value.tickets.retirees = item.value
			emit('onChangesTickets',dataInput)
		}
		const handleChanges3 = item => {
			dataInput.value.tickets.students = item.value
			emit('onChangesTickets',dataInput)
		}


		//Form
		let currentStep = ref(0);
		const firstStep = 0;
		const lastStep = 2;
		let progressLine; 
		
		onMounted(() => {
			progressLine = document.getElementsByClassName('steps-line__progress-line');
			onChangesTickets();
		})

		const btnPrev = () => {
			if(currentStep.value > firstStep) {
				currentStep.value--;
			}
			lineUpdate();
		}
		const btnNext = () => {
			if(currentStep.value < lastStep) {
				currentStep.value++;
			}
			lineUpdate();
			console.log(dataInput.value.tickets);
		}
		const lineUpdate = () => {
			currentStep.value === 0 ? progressLine[0].style.width = `${0}%` : progressLine[0].style.width = `${ 100 / (lastStep + 1 - currentStep.value)}%`;
		}
		
		// const validation = () => {
		// 	if(currentStep.value === 0) { 
		// 		let errors = [];
		// 		if(!choiceDate.value) {
		// 			errors.push('Choice the date please');
		// 		}
		// 		if(!choiceTime.value) {
		// 			errors.push('Choice the time please');
		// 		}
		// 		if(!errors.length) {
		// 			return true;
		// 		}
		// 	}
		// }

		return {
			currentStep,
			btnNext,
			btnPrev,
			data,
			dataInput,
			handleChanges,
			handleChanges2,
			handleChanges3,
			onChangesTickets,
		}
	},

}
</script>

