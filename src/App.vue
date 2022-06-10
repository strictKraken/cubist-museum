<template>
	<main-layout>
			<router-view v-slot="{ Component, route}" >
				<transition name="route" mode="out-in">
					<component :is="Component" :key="route.path" :ExhibitionsList='ExhibitionsList'></component>
				</transition>
			</router-view>
	</main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue';
import {ref} from 'vue';

export default {
	components: {
		MainLayout,
	},
	setup() {
		let ExhibitionsList = ref([
				{
					id: 1,
					name: 'Exhibition of works by Bela Kadar',
					typeOnline: true,
					date: '15 Feb 2022 - 15 Jul 2023',
					shortDescription: 'Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting. Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.Béla Kádár (1877–1956) was a Hungarian painter influenced by Der Blaue Reiter, Cubism, Futurism, Neo-Primitivism, Constructivism, and Metaphysical painting.',
					fullDescription: 'Béla Kádár (1877-1956) is a Hungarian master, specialising in painting and drawing. Kadar incorporated themes of Hungarian folklore and peasant life into his art. His painting style reflected many of the artistic movements of the early part of the 20th century including expressionism, constructivism and cubo-futurism. Amongst his early interests was mural painting. Like many of the artists of his day he was drawn to Paris and Berlin, and by 1910 he had visited both cities twice. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka. During the group exhibition at Walden´s gallery with other artist´s of Der Sturm, Kadar met Katherine Dreier whose Societe Anonyme was instrumental in bringing the work of the European avant-garde to New York. With her help two major exhibitions of his work were planned for the Brooklyn Museum of Art, the second of which in September 1928 Kadar travelled from Europe to attend. In 1923, Kadar showed his paintings in Berlin at the invitation of Herwath Walden. Walden was an important figure in the German avant-garde, being the publisher of the journal Der Sturm which featured the works of Franz Marc, Paul Klee, Wassily Kandinsky, Marc Chagall and Oskar Kokoschka.',
				},
				{
					id: 2,
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				},
				{
					id: 3,
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				},
				{
					id: 4,
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				},
				{
					id: 5,
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				},
				{
					id: 6,
					name: 'Exhibition of works by Alice Bailly',
					typeOnline: false,
					date: '17 Feb 2022 - 17 May 2022',
					shortDescription: 'Alice Bailly (25 February 1872 – 1 January 1938) was a Swiss avant-garde painter.',
					fullDescription: '',
				}
		]);
		return {
			ExhibitionsList,
		}
	}
}
</script>

<style lang="scss">
	@import "@/assets/scss/style";
	route transtiions
	.route-enter-from, .route-leave-to{
		opacity: 0;
	}
	.route-enter-active, .route-leave-active {
		transition: opacity 0.5s ease;
	}
	.route-enter-to, .route-leave-from {
		opacity: 1;
	}
</style>
