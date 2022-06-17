<template>
	<aside class="reservation__aside aside-reservation">
		<div class="reservation__cart cart-exhibitions _ibg">
			<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
			<div class="cart-exhibitions__info">
				<div class="cart-exhibitions__online">
					<span class="bg-red">Online</span>
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
		<!-- <exhibition-cart-item :Exhibition="Exhibition"/> -->
	</aside>
</template>

<script>
// import ExhibitionCartItem from './ExhibitionCartItem.vue'
import {ibg} from '@/assets/js/ibg.js';
import { onMounted } from '@vue/runtime-core';
export default {
	name: 'AsideMenu',
	components: {
		// ExhibitionCartItem,
	},
	setup() {
		onMounted(()=> {
			ibg();
		})
		const Exhibition= {
			id: 1,
			name: 'Exhibition of works by Bela Kadar',
			typeOnline: true,
			date: '15 Feb 2022 - 15 Jul 2023',
			shortDescription: 'Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting. Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.',
			fullDescription: 'Béla Kádár (1877-1956) is a Hungarian master, specialising in painting and drawing. Kadar incorporated themes of Hungarian folklore and peasant life into his art. His painting style reflected many of the artistic movements of the early part of the 20th century including expressionism, constructivism and cubo-futurism. Amongst his early interests was mural painting. Like many of the artists of his day he was drawn to Paris and Berlin, and by 1910 he had visited both cities twice. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka. During the group exhibition at Walden´s gallery with other artist´s of Der Sturm, Kadar met Katherine Dreier whose Societe Anonyme was instrumental in bringing the work of the European avant-garde to New York. With her help two major exhibitions of his work were planned for the Brooklyn Museum of Art, the second of which in September 1928 Kadar travelled from Europe to attend. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka.',
		}
		return {
			Exhibition,
		}
	},
}
</script>

<style lang="scss" scoped>
	// 
	@media (max-width: 1000px) {
		.reservation__cart  {
			min-height: 100%;
		}
	}
	@media (min-width: 1000px) {
		.reservation__cart  {
			min-height: 400px;
			max-height: 400px;
			max-width: 90%;
		}	
	}
	
</style>