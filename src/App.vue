<template>
	<div class="wrapper">
		<div class="main">
			<main-layout>
					<router-view v-slot="{ Component, route}">
						<transition name="route" mode="out-in">
							<component :is="Component" :key="route.path"></component>
						</transition>
					</router-view>
			</main-layout>
		</div>
	</div>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue';

export default {
	components: {
		MainLayout,
	},
	setup() {
		return {
		}
	}
}
</script>

<style lang="scss">
	@import "@/assets/scss/style";
	
	// route transtiions
	.route-enter-from, .route-leave-to{
		opacity: 0;
	}
	.route-enter-active, .route-leave-active {
		transition: opacity 0.5s ease;
	}
	.route-enter-to, .route-leave-from {
		//opacity: 1;
	}
</style>
