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
					fullDescription: '',
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
