<template>
	<router-link :to="{ path: '/exhibitions/' + Exhibition.id , params: {Exhibition: Exhibition} }" class="exhibitions__cart cart-exhibitions _ibg fade-up" @mouseover="onHover" :Exhibition='Exhibition'>
		<slot name='image'></slot>
		<!-- <div class="cart-exhibitions__flex"></div> -->
		<div class="cart-exhibitions__info">
			<div class="cart-exhibitions__online">
				<span class="bg-red" v-if="Exhibition.typeOnline">
					Online
				</span>
			</div>
			<h4 class="cart-exhibitions__title">
				{{ Exhibition.name }}
			</h4>
			<div class="cart-exhibitions__date">
				<p>
					{{ Exhibition.date }}
				</p>
			</div>
			<transition name='fade-full-text'>
				<p v-if='shortAbout' class="cart-exhibitions__about">
					<span>{{ Exhibition.shortDescription }}</span>
				</p>
				<p v-else class='cart-exhibitions__about'>
					{{ Exhibition.fullDescription }}
				</p>
			</transition>
		</div>
	</router-link>
</template>

<script>
import {ibg} from '@/assets/js/ibg.js';
import { onMounted, onUnmounted, onUpdated,ref } from '@vue/runtime-core';
import $ from 'jquery';
export default {
	props: {
		Exhibition: {
			type: Object,
			require: true,
		}
	},
	setup() {
		let $fadeUpElements = null;
		let shortAbout = ref(true);
		onMounted(()=> {
			ibg();
			$fadeUpElements = $('.fade-up');
			$(window).on('scroll', handleScroll);
		});
		onUnmounted(() => {
			$(window).off('scroll', handleScroll);
		});
		onUpdated(() => {
			handleScroll();
		});
		const handleScroll = () => {
			$fadeUpElements.each(function(index,value) {
				if(isElemVisible(value)) {
					$(value).css({
						opacity: '1',
						transform: 'translateY(0)',
					})
				}
			});
		}
		const isElemVisible = (el) => {
			let rect = el.getBoundingClientRect();
			let elemTop = rect.top + 200 / 200
			let elemBottom = rect.bottom;
			return elemTop < window.innerHeight && elemBottom >= 0
		}

		const onHover = () => {
			
		}

		return {
			shortAbout,
			onHover
		}
	},
}
</script>

<style lang='scss'>
	.fade-up {
		transition: all 0.5s ease;
		opacity: 0;
		transform: translateY(100px);
	}
	.fade-full-text-enter-from {
		opacity: 0;
	}
	.fade-full-text-enter-active {
		transition: all 0.5s ease;
	}
</style>