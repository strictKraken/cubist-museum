<template>
	<div>
		<section class="screen-exhibitions">
			<div class="screen-exhibitions__main big-screen">
				<img class="" src="@/img/Content/bg/1.jpg" alt="">
				<div class="screen-exhibitions__title">
					<transition name="fade-up-title" appear>
						<h2 class="full-page-title">Exhibitions</h2>
					</transition>
				</div>
			</div>
		</section>

		<!-- <calendar-carusel/> -->

		<div class="exhibitions-carts">
			<div class="exhibitions-cart__container container">
				<div class="exhibitions-carts__buttons">
					<button @click="filter='all'" class="exhibitions-carts__btn" data-filter="all">All exhibitions</button>
					<button @click="filter='online'" class="exhibitions-carts__btn" data-filter=".online">Online</button>
					<button @click="filter='offline'" class="exhibitions-carts__btn" data-filter=".offline">Offline</button>
				</div>

				<div class="exhibitions-carts__date">
					<p>
						Month, Date
					</p>
					<p>
						Day
					</p>
				</div>

				<div class="exhibitions-carts__content">
					<div class="exhibitions-carts__items mix online">
						<exhibition-cart-item v-for="item in filteredItems" :key="item.id" :Exhibition="item" :class="getClass(item.id)">
							<template v-slot:image>
								<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
							</template>
						</exhibition-cart-item>
					</div>				
				</div>
			</div>
		</div>

		<button-to-top class="exhibitions-btn"/>
	</div>
</template>

<script>
import ButtonToTop from '@/components/ButtonToTop.vue';
import ExhibitionCartItem from '@/components/ExhibitionCartItem.vue';
import {ref, computed} from 'vue';

// import CalendarCarusel from '@/components/ExhibitionsCalendarCarusel.vue';
export default {
	name: 'PageExhibitions',
	components: {
		ButtonToTop,
		ExhibitionCartItem,
		// CalendarCarusel,
	},
	props: {
		ExhibitionsList: {
			type: Array,
			require: true,
		}
	},
	setup(props) {
		let filter = ref('all'); 
		

		const filteredItems = computed(() => {
			return [...props.ExhibitionsList].filter((el) => {
				if(filter.value == 'all') return true;
				if(filter.value === 'online') {
					return el.typeOnline;
				}
				if(filter.value === 'offline') return !el.typeOnline
			})
		})

		let classesExhibitions = ref([
			'clart-1',
			'clart-2',
			'clart-3',
		])
				
		const getClass = (index) => {
			let classes = {
				'cart-1': true,
				'cart-2': false,
				'cart-3': false,
			}
			// console.log(index);
			if(!(index % 2 == 0)) {
				classes['cart-1'] = true;
			}
			else {
				classes['cart-1'] = false;
				classes['cart-2'] = true;
			}
			if(index % 6 == 0) {
				classes['cart-2'] = false;
				classes['cart-3'] = true;
			}
			
			return classes;
		}
		
		return {
			getClass,
			classesExhibitions,
			filter,
			filteredItems
		}
	},
}
</script>

<style lang="scss">
	.screen-exhibitions {
		overflow-y: hidden;
	}

	.fade-up-title-enter-active {
		transition: all 0.9s ease;
	}
	.fade-up-title-enter-from {
		transform: translateY(100%);
	}
</style>