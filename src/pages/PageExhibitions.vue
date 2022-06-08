<template>
	<div>
		<section class="screen-exhibitions">
			<div class="screen-exhibitions__main big-screen">
				<img class="" src="@/img/Content/bg/1.jpg" alt="">
				<div class="screen-exhibitions__title">
					<h2 class="full-page-title">Exhibitions</h2>
				</div>
			</div>
		</section>

		<calendar-carusel/>

		<div class="exhibitions-carts">
			<div class="exhibitions-cart__container container">
				<div class="exhibitions-carts__buttons">
					<button class="exhibitions-carts__btn" data-filter="all">All exhibitions</button>
					<button class="exhibitions-carts__btn" data-filter=".online">Online</button>
					<button class="exhibitions-carts__btn" data-filter=".offline">Offline</button>
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
						<exhibition-cart-item class="cart-1">
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
						<exhibition-cart-item class="cart-2">
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
						<exhibition-cart-item class="cart-3">
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
						<exhibition-cart-item class="cart-4">
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
						<exhibition-cart-item class="cart-5">
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
						<exhibition-cart-item class="cart-6">
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
						
					</div>
					<div class="exhibitions-carts__items mix offline">
						<div class="cart-1 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
						<div class="cart-2 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
						<div class="cart-3 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
						<div class="cart-4 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
						<div class="cart-5 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
						<div class="cart-6 cart-exhibitions _ibg">
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
									Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism,
									Futurism,
									Neo-Primitivism, Constructivism, and Metaphysical painting.
								</p>
							</div>
						</div>
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
import CalendarCarusel from '@/components/ExhibitionsCalendarCarusel.vue';
export default {
	name: 'PageExhibitions',
	components: {
		ButtonToTop,
		ExhibitionCartItem,
		CalendarCarusel,
	},
	setup() {
		
	},
}
</script>