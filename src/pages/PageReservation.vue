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
				<form-reseve/>
				<aside-menu/>
				<div class="reservation__price-total  price-reservation">
			<h6 class="price-reservation__title">
				Total:
			</h6>
			<!--- ??????????????? -->
			<div class="price-reservation__items">
				<div class="price-reservation__item" id="ticket-base">
					<div class="price-reservation__name">
						Without lugot
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
				<div class="price-reservation__item" id="ticket-retirees">
					<div class="price-reservation__name">
						Retirees
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
				<div class="price-reservation__item" id="ticket-student">
					<div class="price-reservation__name">
						Students
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
			</div>
			<div class="price-reservation__total">
				0 ₽
			</div>
		</div>
			</div>
		</div>
	</div>
	
</template>

<script>
import FormReseve from '@/components/PageReservationFormReserv.vue'
import AsideMenu from '@/components/PageReservationAsideMenu.vue'


export default {
	name: 'PageReservation',
	components: {
		FormReseve,
		AsideMenu,
	},
	setup() {
		
	},
}
</script>

<style lang="scss">
</style>