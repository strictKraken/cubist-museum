<template>
	<div class="">
		<div class="reservation__bg-main big-screen">
				<img src="@/img/Content/bg/2.jpg" alt="">
				<div class="reservation__title">
					<transition name="fade-up-title" appear>
						<h2 class="full-page-title">RESERVATION</h2>
					</transition>
				</div>
			</div>
		<div class="reservation__container container">
			<div class="reservation__content">
				<form-reseve @on-changes-tickets="handleTickets" :sourceInput="dataInput"/>
				<aside-menu/>
				<div class="reservation__price-total  price-reservation">
			
			<total-price :propTotalPrice="dataInput.tickets"/>
		</div>
			</div>
		</div>
	</div>
</template>

<script>
import FormReseve from '@/components/PageReservationFormReserv.vue'
import AsideMenu from '@/components/PageReservationAsideMenu.vue'
import TotalPrice from '@/components/PageReservationTotalPrice.vue'


import {ref} from 'vue';
export default {
	name: 'PageReservation',
	components: {
		FormReseve,
		AsideMenu,
		TotalPrice,
	},
	setup() {
		let dataInput = ref({
			selectedDate: null,
			selectedTime: null,
			tickets: {
				bases: 0,
				retirees: 0,
				students: 0,
			},
			name: '',
			phone: '',
			selectedSocial: {
				whatsApp: false,
				telegram: false,
				email: false,
				sms: false,
			},
			selectedPayment: null,
		});


		const handleTickets = item => {
			dataInput = ref(item);
		}
		
		return {
			handleTickets,
			dataInput,
		}
	},
}
</script>

<style lang="scss">
</style>