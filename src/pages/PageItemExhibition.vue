<template>
	<div class="">
		<div class="page-exhibition__main">
			<img class="page-exhibition__main-bg" alt="" src="@/img/Content/exhibitions/1-big.jpg">
		</div>
		<div class="page-exhibition__about">
		<div class="page-exhibition__сontainer container">
			<section class="page-exhibition__descriptions">
				<div class="online">
					<!-- <span v-if="ExhibitionData.typeOnline" class="bg-red">Online</span> -->
				</div>
				<h3 class="page-exhibition__title">
					<!-- {{ Exhibition.name }} -->
					Title
				</h3>
				<div class="page-exhibition__date">
					<!-- {{ ExhibitionData.date }} -->
					Date
				</div>
				<div class="page-exhibition__text">
					<p>
						<!-- {{ ExhibitionData.fullDescription }} -->
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse vero praesentium doloribus libero dignissimos expedita doloremque amet voluptate optio at rerum iure asperiores harum accusamus illo, maiores maxime. Aspernatur!
					</p>
				</div>
				<div class="page-exhibition__share">
					<p>Share</p>
					<div class="page-exhibition__links">
						<img src="@/img/Social/facebook.svg" alt="facebook logo">
						<img src="@/img/Social/inst.svg" alt="instagram logo">
						<img src="@/img/Social/twitter.svg" alt="twitter logo">
						<img src="@/img/Social/pinterest.svg" alt="pinterest logo">
						<img src="@/img/Social/arrow.svg" alt="linked logo">
					</div>
				</div>
			</section>
			<aside class="page-exhibition__aside aside-menu">
				<div class="aside-menu__items">
					<div class="aside-menu__item">
						<div class="aside-menu__title">
							<img src="@/img/aside/ticket.svg" alt="logo ticket">
							<h5>
								Tickets
							</h5>
						</div>
						<div class="aside-menu__text">
							<p>Without lugot <span class="price-base">800</span> ₽</p>
							<p>Retirees free</p>
							<p>Students <span class="price-student">400</span> ₽ </p>
						</div>
					</div>
					<div class="aside-menu__item">
						<div class="aside-menu__title">
							<img src="@/img/aside/timmer.svg" alt="logo ticket">
							<h5>
								The duration
							</h5>
						</div>
						<div class="aside-menu__text">
							<p><span class="time-duration">2,5</span> hours</p>

						</div>
					</div>
					<div class="aside-menu__item">
						<div class="aside-menu__title">
							<img src="@/img/aside/timmer.svg" alt="logo ticket">
							<h5>
								Timetable
							</h5>
						</div>
						<div class="aside-menu__text">
							<p class='date-enter'>Tuesday to Sunday</p>
							<p class='time'>
								10:00
							</p>
							<p>13:00
							</p>
							<p>16:00 </p>
						</div>
					</div>
					<div class="aside-menu__item">
						<div class="aside-menu__title">
							<img src="@/img/aside/geo.svg" alt="logo ticket">
							<h5>
								Location
							</h5>
						</div>
						<div class="aside-menu__text">
							<p class='location'>A unique room on the site for participants </p>
						</div>
					</div>
				</div>

				<div class="aside-menu__FAQ">
					<a class="aside-menu__link-FAQ" href="#">
						FAQ
					</a>
				</div>

				<router-link :to="{name: 'Reservation' }" class="aside-menu__button green-button">Reserve</router-link>
			</aside>

		</div>
		<div class="page-exhibition__reviews">
			<div class="page-exhibition__container container">
				<div class="page-exhibition__title-reviews">
					<span class="bg-green">Reviews</span>
				</div>
				<div class="page-exhibition__content reviews">
					<div v-for="item in data" :key="item.index"  class="reviews__item">
						<div class="reviews__icons">
							<img v-for="item_x in item.rating" :key="item_x.index" class="img-svg" src="@/img/icons/star.svg" alt="">
						</div>
						<div class="reviews__text">
							{{ item.text }}
						</div>
						<div class="reviews__author">
							- {{ item.name }}
						</div>
					</div>
				</div>
			</div>
		</div>
		<button-to-top class="page-exhibition__btn" />
	</div>
	</div>
</template>

<script>
import ButtonToTop from '@/components/ButtonToTop.vue';

import { onMounted } from '@vue/runtime-core'

export default {
	name: 'PageItemExhibition',
	components: {
		ButtonToTop
	},
	props: {
		Exhibition: {
			type: Object,
			require: true,
		}
	},
	setup() {
		const data = [
			{
				name: 'Masha E.',
				text: 'The exhibition is really interesting. I advise you to go and enjoy the art.',
				rating: 5,
			},
			{
				name: 'Anna Y.',
				text: 'I loved it. I like cubism in general. Cool tour, will be visiting more exhibitions online.',
				rating: 5,
			},
			{
				name: 'Nikita B.',
				text: 'The best thing they came up with was online exhibitions. Especially during mass quarantine.',
				rating: 5,
			}
		];
		
		onMounted(()=> {
		})

		return {
			data,
		}
	},
}
</script>

<style lang="scss">

</style>