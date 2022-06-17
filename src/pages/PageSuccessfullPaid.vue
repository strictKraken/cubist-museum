<template>
	<div class="">
		<section class="successful">
			<img class="successful__img-bg" src="@/img/Content/bg/3.jpg" alt="bg">
			<div class="susscessful__conainer container">
				<div class="successful__info">
					<h2 class="successful__title ">
						<span class="bg-green">Your order has been successfully paid</span>
						</h2>
					<h4 class="successful__little-title">We wish you an enjoyable viewing experience</h4>

					<div class="successful__inner">
						<p class="successful__text">
							You will receive a link to enter the tour where you indicated within 15 minutes. We recommend that you enter early so that you don't miss anything important :)
						</p>
						<h4 class="successful__little-title">
							<img class="img-svg" src="@/img/icons/sad-face.svg" alt="sad-icon">
							If you do not receive a link to the tour, follow the steps below:
						</h4>
						<div class="successful__solve-problem">
							<p class="successful__text">Check your email, it may have gone to "Spam".</p>
							<p class="successful__text">
								Send us an email <a href="mailto:info@Mcubist.com">info@Mcubist.com</a>
							</p>
							<p class="successful__text">
								Call the phone number of <a href="phoneto:78121234567">+7(812)-123-45-67 </a>
							</p>
							<p class="successful__text">All necessary ways of contact are additionally indicated at the bottom of the site</p>
						</div>
						<router-link :to="{name: 'Home'}" class="successful__btn green-button" name="back-to-home">Back home</router-link>
					</div>
				</div>
			</div>
		</section>
	
		<div class="successful__recommend">
			<div class="container">
			<h2 class="successful__title">
				<span class="bg-green">Recommend</span>
				</h2>
			</div>
			<div class="successful__slider slider">
				<!-- <div class="slider__item" v-for="item in 4" :key="item.id">
					<exhibition-cart-item :Exhibition="ExhibitionsList" class="cart-1 cart-exhibitions">
						<template v-slot:image>
							<img class="cart-exhibitions__bg" src="@/img/Content/exhibitions/1.jpg" alt="">
						</template>
					</exhibition-cart-item>
				</div> -->
				<div class="slider__item">
					<div class="cart-1 cart-exhibitions" style="pointer-events: none">
						<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
						<div class="cart-exhibitions__info">
							<div class="cart-exhibitions__online">
								<span class="bg-red">online</span>
							</div>
							<h4 class="cart-exhibitions__title">
								Exhibition of works by Bela Kadar
							</h4>
							<div class="cart-exhibitions__date">
								<p>
									15 Feb 2022 - 15 Jul 2022
								</p>
							</div>
							<p class="cart-exhibitions__about">
								
							</p>
						</div>
					</div>
				</div>
				<div class="slider__item">
					<div class="cart-1 cart-exhibitions " style="pointer-events: none">
						<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
						<div class="cart-exhibitions__info">
							<div class="cart-exhibitions__online">
								<span class="bg-red">online</span>
							</div>
							<h4 class="cart-exhibitions__title">
								Exhibition of works by Bela Kadar
							</h4>
							<div class="cart-exhibitions__date">
								<p>
									15 Feb 2022 - 15 Jul 2022
								</p>
							</div>
							<p class="cart-exhibitions__about">
								
							</p>
						</div>
					</div>
				</div>
				<div class="slider__item">
					<div class="cart-1 cart-exhibitions " style="pointer-events: none">
						<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
						<div class="cart-exhibitions__info">
							<div class="cart-exhibitions__online">
								<span class="bg-red">online</span>
							</div>
							<h4 class="cart-exhibitions__title">
								Exhibition of works by Bela Kadar
							</h4>
							<div class="cart-exhibitions__date">
								<p>
									15 Feb 2022 - 15 Jul 2022
								</p>
							</div>
							<p class="cart-exhibitions__about">
								
							</p>
						</div>
					</div>
				</div>	
				<div class="slider__item" >
					<div class="cart-1 cart-exhibitions" style="pointer-events: none">
						<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
						<div class="cart-exhibitions__info">
							<div class="cart-exhibitions__online">
								<span class="bg-red">online</span>
							</div>
							<h4 class="cart-exhibitions__title">
								Exhibition of works by Bela Kadar
							</h4>
							<div class="cart-exhibitions__date">
								<p>
									15 Feb 2022 - 15 Jul 2022
								</p>
							</div>
							<p class="cart-exhibitions__about">
								
							</p>
						</div>
					</div>
				</div>		
			</div>
			<div class="slider__btns">
				<button class="slider__prev-btn"></button>
				<button class="slider__next-btn"></button>	
			</div>
					
		</div> 
	</div>
</template>

<script>
import $ from "jquery";
import { onMounted, ref } from "vue";
import "slick-carousel"

// import ExhibitionCartItem from "@/components/ExhibitionCartItem.vue";

export default {
	name: 'PageSuccessfullPaid',
	components: {
		// ExhibitionCartItem,
	},
	setup() {
		onMounted(() => {
			letGoSlick();	
		})
		const ExhibitionsList = ref(
				{
					id: 1,
					name: 'Exhibition of works by Bela Kadar',
					typeOnline: true,
					date: '15 Feb 2022 - 15 Jul 2023',
					shortDescription: 'Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting. Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.',
					fullDescription: 'Béla Kádár (1877-1956) is a Hungarian master, specialising in painting and drawing. Kadar incorporated themes of Hungarian folklore and peasant life into his art. His painting style reflected many of the artistic movements of the early part of the 20th century including expressionism, constructivism and cubo-futurism. Amongst his early interests was mural painting. Like many of the artists of his day he was drawn to Paris and Berlin, and by 1910 he had visited both cities twice. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka. During the group exhibition at Walden´s gallery with other artist´s of Der Sturm, Kadar met Katherine Dreier whose Societe Anonyme was instrumental in bringing the work of the European avant-garde to New York. With her help two major exhibitions of his work were planned for the Brooklyn Museum of Art, the second of which in September 1928 Kadar travelled from Europe to attend. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka.',
				}
		)
		// 
		// document.addEventListener('DOMContentLoaded', function() {
		// 	const $slider = $('.slider');
		// 	$($slider).slick({
		// 		dots: true,
		// 		slidesToShow: 3,
		// 		slidesToScroll: 3,
		// 		prevArrow:$('.slider__prev-btn'),
		// 		nextArrow:$('.slider__next-btn'),
		// 	})
		// })
		function letGoSlick() {	
			const $slider = $('.slider');
			$($slider).slick({
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				centerMode: true,
				prevArrow:$('.slider__prev-btn'),
				nextArrow:$('.slider__next-btn'),
			})
		}
		
		return {
			ExhibitionsList,
		}
		
	},
}
</script>

<style lang="scss" scoped>
	.successful {
			position: relative;
			&__img-bg {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
	}
	
	.cart-exhibitions__bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
	.cart-exhibitions {
		position: relative;
		height: 100%;
	}
</style>