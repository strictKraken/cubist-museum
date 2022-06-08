<template>
	<header class="header">
		<div class="header__container container">
			<div class="header__logo">
				<img class="img-svg" src="@/img/logo-white-2.svg" alt="logo">
			</div>

			<nav class="header__menu menu">
				<div class="menu__body">
					<burger-bar/>
					<search-input/>
					<ul class="menu__list">
						<li class="menu__item" @click="clickLink"><router-link class="menu__link" :to="{name: 'Home'}">Home</router-link></li>
						<li class="menu__item" @click="clickLink"><router-link class="menu__link" :to="{name: 'Exhibitions'}">Exhibitions and events </router-link></li>
						<li class="menu__item" @click="clickLink"><router-link class="menu__link" to="/404">Tickets</router-link></li>
						<li class="menu__item" @click="clickLink"><router-link class="menu__link" to="/404">Collection</router-link></li>
						<li class="menu__item" @click="clickLink"><router-link class="menu__link" to="/404">About</router-link></li>
					</ul>
				</div>
			</nav>
			<burger-bar/>

		</div>
	</header>   
</template>

<script>
	import BurgerBar from './HeaderMenuBurgerBar.vue';
	import SearchInput from './HeaderMenuSearchInput.vue';

	import $ from 'jquery';

	export default {
		name: 'NavigationBar',
		components: {
			BurgerBar,
			SearchInput,
		},
		setup() {
			const clickLink = () =>{
				$('.menu__body,.header__burger').removeClass('active');
				$('.search').removeClass('active-search');
				$('body,html').removeClass('lock');
			}
			return {
				clickLink,
			}
		},
	}
</script>

<style lang='scss'>

</style>