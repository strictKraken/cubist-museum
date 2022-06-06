<template>
	<div class="">
		<section class="welcome">
			<div class="welcome__content">
				<div class="welcome__img-bg-left">
					<img src="@/img/Content/main-page/1.jpg" alt="bg">
				</div>
				<div class="welcome__main-block">
					<h2 class="welcome__title title-h2">
						Welcome to the online future
					</h2>
					<p class="welcome__text">
						Visit exhibitions in the comfort of your own home
					</p>
					<a class="welcome__btn">
						<img src="@/img/icons/big-arrow.svg" alt="" class="img-svg">
					</a>
				</div>
				<div class="welcome__img-bg-right ">
					<div class="welcome__img-item">
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
					<exhibition-cart-item class="cart1">
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
					
					<div class="cart2 exhibitions__cart cart-exhibitions _ibg">
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
								Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
								Neo-Primitivism, Constructivism, and Metaphysical painting.
							</p>
						</div>
					</div>
					<div class="cart3 exhibitions__cart cart-exhibitions _ibg">
						<!-- <img class="cart-exhibitions__bg " src="@img/Content/exhibitions/1.jpg" alt=""> -->
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
								Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
								Neo-Primitivism, Constructivism, and Metaphysical painting.
							</p>
						</div>
					</div>
					<div class="cart4 exhibitions__cart cart-exhibitions _ibg">
						<!-- <img class="cart-exhibitions__bg " src="@img/Content/exhibitions/1.jpg" alt=""> -->
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
								Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
								Neo-Primitivism, Constructivism, and Metaphysical painting.
							</p>
						</div>
					</div>
					<div class="cart5 exhibitions__cart cart-exhibitions _ibg">
						<!-- <img class="cart-exhibitions__bg " src="@img/Content/exhibitions/1.jpg" alt=""> -->
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
								Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism,
								Neo-Primitivism, Constructivism, and Metaphysical painting.
							</p>
						</div>
					</div>
					<a class="exhibitions__cart-more cart-more">
						<p class="cart-more__text">
							All exhibitions
						</p>
						<div class="cart-more__link" href="#">
							<!-- <img class="img-svg" src="@img/icons/big-arrow.svg" alt="btn-more"> -->
						</div>
					</a>
				</div>

				<button class="exhibitions__btn-to-top btn-to-top">
					<div class="btn-to-top__link" href="#">
						<img class="img-svg" src="@/img/icons/arrow-top.svg" alt="btn-return">
					</div>
					<p class="btn-to-top__text">
						Back to the top
					</p>
				</button>
			</div>
		</section>
	</div>
</template>

<script>
	
	import ExhibitionCartItem from '@/components/ExhibitionCartItem.vue';
	import {ibg} from '@/assets/js/ibg.js';

	export default {
		components: {
			ExhibitionCartItem,
		},
		name: 'PageHome',
		setup() {
			ibg();
		},
		
	}
</script>

<style lang='scss'>

</style>