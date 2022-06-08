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
							<icon-big-arrow class="welcome__btn"/>
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
					<h3 class="about__title">
						<span class="about__title-style">
							Cubist museum 1907 - the world's leading museum of art, cubism and performance
						</span>
					</h3>
					<p class="about__sub-title">
						Cubism is not art, it's a way of life
					</p>
					<p class="about__text">
						Cubism does not necessarily imply the use of simple geometric shapes. In painting, their use is due
						primarily to the artist's desire to separate the individual "shreds" of the object from each other.
					</p>
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
				<div class="exhibitions__content">
					<exhibition-cart-item class="cart1" v-model="ExhibitionsList">
						<template v-slot:image>
							<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
						</template>
						<template v-slot:online>
							Online
						</template>
						<template v-slot:title>
							{{ ExhibitionsList[0].name }}
						</template>
						
						<template v-slot:date>
							{{ ExhibitionsList[0].date }}
						</template>
						<template v-slot:about>
							{{ ExhibitionsList[0].shortDescription }}
						</template>
					</exhibition-cart-item>


					<exhibition-cart-item class="cart2">
						<template v-slot:image>
							<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
						</template>
						<template v-slot:online>
							Online
						</template>
						<template v-slot:title>
								Exhibition of works by Bela Kadar
						</template>
						
						<template v-slot:date>
							15 Feb 2022 - 15 Jul 2023
						</template>
						<template v-slot:about>
							Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
							Neo-Primitivism, Constructivism, and Metaphysical painting.
						</template>
					</exhibition-cart-item>
					<exhibition-cart-item class="cart3">
						<template v-slot:image>
							<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
						</template>
						<template v-slot:online>
							Online
						</template>
						<template v-slot:title>
								Exhibition of works by Bela Kadar
						</template>
						
						<template v-slot:date>
							15 Feb 2022 - 15 Jul 2023
						</template>
						<template v-slot:about>
							Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
							Neo-Primitivism, Constructivism, and Metaphysical painting.
						</template>
					</exhibition-cart-item>
					<exhibition-cart-item class="cart4">
						<template v-slot:image>
							<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
						</template>
						<template v-slot:online>
							Online
						</template>
						<template v-slot:title>
								Exhibition of works by Bela Kadar
						</template>
						
						<template v-slot:date>
							15 Feb 2022 - 15 Jul 2023
						</template>
						<template v-slot:about>
							Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
							Neo-Primitivism, Constructivism, and Metaphysical painting.
						</template>
					</exhibition-cart-item>
					<exhibition-cart-item class="cart5">
						<template v-slot:image>
							<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
						</template>
						<template v-slot:online>
							Online
						</template>
						<template v-slot:title>
								Exhibition of works by Bela Kadar
						</template>
						
						<template v-slot:date>
							15 Feb 2022 - 15 Jul 2023
						</template>
						<template v-slot:about>
							Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
							Neo-Primitivism, Constructivism, and Metaphysical painting.
						</template>
					</exhibition-cart-item>
					<router-link :to="{name: 'Exhibitions'}" class="exhibitions__cart-more cart-more">
						<p class="cart-more__text">
							All exhibitions
						</p>
						<icon-big-arrow class="cart-more__link"/>
					</router-link>
				</div>
				<button-to-top/>
			</div>
		</section>
	</div>
</template>

<script>
	
	import ExhibitionCartItem from '@/components/ExhibitionCartItem.vue';
	import ButtonToTop from '@/components/ButtonToTop.vue';
	import IconBigArrow from '@/components/icons/IconBigArrow.vue';

	import { onMounted, onUnmounted } from '@vue/runtime-core';
	import $ from 'jquery';
	import gsap from 'gsap';

	export default {
		components: {
			ExhibitionCartItem,
			ButtonToTop,
			IconBigArrow,
		},
		name: 'PageHome',
		setup() {
			onMounted(()=> {
				setFullScreen();
				window.addEventListener('resize', resizeHandler)
			});
			onUnmounted(() => {
				window.removeEventListener('resize', resizeHandler)
			})

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

			let ExhibitionsList = [
				{
					name: 'Exhibition of works by Bela Kadar',
					typeOnline: true,
					date: '15 Feb 2022 - 15 Jul 2023',
					shortDescription: 'Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.',
					fullDescription: 'Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting. Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.',
					
				},
				{
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				}
			]

			return {
				ExhibitionsList,
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
	.fade-rightImg-enter-to {
	}
	.fade-rightImg-enter-active {
		// transition: all 1s ease 0.5s;
	}
</style>