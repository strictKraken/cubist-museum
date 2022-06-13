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