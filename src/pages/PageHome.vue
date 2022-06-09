<template>
	<div>
		<section class="welcome">
			<div class="welcome__content">
				<transition name="fade-leftImg" appear>
					<div class="welcome__img-bg-left">					
						<img src="@/img/Content/main-page/1.jpg" alt="bg">
					</div>
				</transition>
				<div class="welcome__main-block">
					<transition name="fade-title" appear>
						<h2 class="welcome__title title-h2">
							Welcome to the online future
						</h2>
					</transition>
					<transition name="fade-subtitle" appear>
						<p class="welcome__text">
							Visit exhibitions in the comfort of your own home
						</p>
					</transition>
					<transition name="fade-btnWelcome" appear>
						<router-link :to="{name: 'Exhibitions' }" class="welcome__btn">
							<IconBigArrow class="welcome__btn"/>
						</router-link>
					</transition>
				</div>
				<transition @before-enter="onBeforeEnter" @enter="onEnter" name="fade-rightImg" appear>
					<div class="welcome__img-bg-right">				
						<div  class="welcome__img-item">
							<img src="@/img/Content/main-page/2.jpg" alt="bg">		
						</div>
						<div class="welcome__img-item">
							<img src="@/img/Content/main-page/3.jpg" alt="bg">
						</div>
						<div class="welcome__img-item">
							<img src="@/img/Content/main-page/4.jpg" alt="bg">
						</div>
						<div class="welcome__img-item">
							<img src="@/img/Content/main-page/5.jpg" alt="bg">
						</div>
						<div class="welcome__img-item">
							<img src="@/img/Content/main-page/6.jpg" alt="bg">
						</div>
						<div class="welcome__img-item">
							<img src="@/img/Content/main-page/7.jpg" alt="bg">
						</div> 
					</div>
				</transition>
			</div>
		</section>

		<section class="about">
			<div class="about__container container">
				<div class="about__content">
					<div class="about__box">
						<h3 class="about__title fade-paragraph">
						<span class="about__title-style">
							Cubist museum 1907 - the world's leading museum of art, cubism and performance
						</span>
					</h3>
					</div>
					
					<div class="about__box">
						<p class="about__sub-title fade-paragraph">
						Cubism is not art, it's a way of life
					</p>
					</div>
					
					<div class="about__box">
						<p class="about__text fade-paragraph">
						Cubism does not necessarily imply the use of simple geometric shapes. In painting, their use is due
						primarily to the artist's desire to separate the individual "shreds" of the object from each other.
					</p>
				</div>
					
				</div>
				<div class="about__info">
					<div class="about__info-item info">
						<div class="info__title">
							<img src="@/img/footer/icon-clock.svg" alt="icon clock">
							<h6 class="title-footer">Opening times</h6>
							<img class="info__arrow-icon img-svg" src="@/img/footer/icon-link.svg" alt="arrow">
						</div>
						<div class="info__text">
							<p> Tuesday to Sunday, 10:00 - 20:00</p>
							<p>Last entry, 19:30</p>
						</div>
					</div>
					<div class="about__info-item info">
						<div class="info__title">
							<img src="@/img/footer/icon-arrow.svg" alt="icon arrow">
							<h6 class="title-footer"> Admission is free <br>
								– book online</h6>
							<img class="info__arrow-icon img-svg" src="@/img/footer/icon-link.svg" alt="arrow">
						</div>
						<div class="info__text">
							<p> Don't forget your passport, <br>
								qr-code and ticket</p>
						</div>
					</div>
					<div class="about__info-item info">
						<div class="info__title">
							<img src="@/img/footer/icon-geo.svg" alt="icon geo">
							<h6 class="title-footer">Cubist museum</h6>
							<img class="info__arrow-icon img-svg" src="@/img/footer/icon-link.svg" alt="arrow">
						</div>
						<div class="info__text">
							<p> St. Petersburg, Nevsky, 54A</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="exhibitions">
			<div class="exhibitions__container container">
				<h3 class="exhibitions__title title-green ">
					<span class="bg-green">Exhibitions</span>
				</h3>
				<grid-gallery :ExhibitionsList='ExhibitionsList'/>
				<button-to-top/>
			</div>
		</section>
	</div>
</template>

<script>
	import ButtonToTop from '@/components/ButtonToTop.vue';
	import IconBigArrow from '@/components/icons/IconBigArrow.vue';
	import GridGallery from '@/components/PageHomeGridGallery.vue';

	import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
	import $ from 'jquery';
	import gsap from 'gsap';

	export default {
		components: {
			ButtonToTop,
			IconBigArrow,
			GridGallery,
		},
		name: 'PageHome',
		props: {
			ExhibitionsList: {
				type: Array,
				require: true,
			}
		},
		setup() {
			let $fadeInElements = null;
			onMounted(()=> {
				setFullScreen();
				window.addEventListener('resize', resizeHandler);

				$fadeInElements = $('.fade-paragraph');
				$(document).on('scroll',handleScroll)
			});
			onUnmounted(() => {
				window.removeEventListener('resize', resizeHandler)
				$(document).off('scroll',handleScroll);
			})
			onUpdated(() => {
				handleScroll()
			})
			const handleScroll = () => {
				$fadeInElements.each(function(index,value) {
					if(isElemVisible(value)) {
							$(value).css({
							opacity: '1',
							transform: 'translateX(0)'
						})
					}
				})
			}

			const isElemVisible = (el) => {
				let rect = el.getBoundingClientRect();
				let elemTop = rect.top + 200
				let elemBottom = rect.bottom;
				return elemTop < window.innerHeight && elemBottom >= 0
			}

			function resizeHandler() {
				setFullScreen();
			}

			function setFullScreen() {
				const $headerHeight = $('header').outerHeight();
				const $firstScreen = $('.welcome');
				$($firstScreen).height($(window).height() - $headerHeight);
			}

			function onBeforeEnter(el) {
				let $listImg =  $(el.children);
				for(let i = 0; i < $listImg.length ; i++) {
					if(i % 2 == 0) {
						$($listImg[i]).css({
						'transform': `translateY(-101%)`,
						})
					} else {
						$($listImg[i]).css({
						'transform': `translateY(100%)`,
						})
					}	
				}
			}
			
			function onEnter(el) {
				let $listImg = $(el.children);
				let duration = 0;

				$listImg.each(function(inedex,value) {
					gsap.to(value, {
						duration: 1,
						delay: duration,
						y: 0
					})
					duration += 0.1;
				})
				
			}

			return {
				onEnter,
				onBeforeEnter,
			}
		},
		
	}
</script>

<style lang='scss'>
	
	//Aanimation for block title on main screen
	.fade-title-enter-from, .fade-subtitle-enter-from, .fade-btnWelcome-enter-from {
		transform: translateY(100px);
		opacity: 0;
	}
	
	.fade-title-enter-to, .fade-subtitle-enter-to,  .fade-btnWelcome-enter-to{
		opacity: 1;
		transform: translateY(0px);
	}
	.fade-title-enter-active {
		transition: all 1s ease;
	}
	.fade-subtitle-enter-active {
		transition: all 1s ease 0.3s;
	}
	.fade-btnWelcome-enter-active {
		transition: all 1s ease 0.5s;
	}
	//animation for images on main screen
	//left
	.fade-leftImg-enter-from {
		& div:nth-child(n) {
			opacity: 0;
			transform: translateY(50%);
		}
		
		opacity: 0;
		transform: translateY(50%);
	}
	.fade-leftImg-enter-active {
		transition: all 1s ease;
	}

	//right
	.fade-rightImg-enter-from {
		opacity: 0;
	}

	//animation block about
	.fade-paragraph {
		transition: 0.5s all ease-out 0.2s;
		opacity: 0;
		transform: translateX(-50%);
	}			
	
</style>