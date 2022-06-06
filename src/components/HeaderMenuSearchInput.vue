<template>
	<div class="header__search search">
		<button class="search__btn-submit">
			<img class="search__img img-svg" src="@/img/icons/Search.svg" alt="Search icon">
		</button>

		<input class="search__input" type="text" placeholder="Search" v-model='searchData'>
		<button class="search__btn-clear">
			<img class="search__xross " src="@/img/icons/xross.svg" alt="xross">
		</button>
	</div>
</template>

<script>
import $ from 'jquery';
import { onMounted, onUpdated, watch, ref } from '@vue/runtime-core';

export default {
	name: 'SearchInput',
	setup() {

		let searchData = ref(null);
		onMounted(()=> {
			activeSearch();
		}) 
		onUpdated(() => {
			activeSearch();
		})
		watch(searchData, (newData) => {
			localStorage.searchData = newData
		});
			
		function activeSearch() {
			const search = $('.search');

			search.click(() => {
				if (!search.hasClass('active-search')) {
					search.children('input').val(localStorage.searchData);
				}
				search.addClass('active-search');
				search.children('input').attr('placeholder', 'What are you looking for?');
				showXross();
			});

			search.on('input', () => {
				showXross();
			});

			function showXross() {
				if (search.children('input').val().length != 0) {
					search.children('.search__btn-clear').css({ "opacity": "1", "position": "static", "display": "block" });
				} else {
					search.children('.search__btn-clear').css({ "opacity": "0", "position": "absolute", "display": "none" });
				}
			}

			//hidden search block
			$(document).mousedown((e) => {
				if (search.has('search').length === 0 && search.has(e.target).length === 0 && !$('.menu__body').hasClass('active')) {
					search.removeClass('active-search');
					search.children('input').attr('placeholder', 'Search');

					sessionStorage.setItem('searchText', search.children('input').val());
					search.children('input').val('');

					search.children('.search__btn-clear').css({ "opacity": "0", "position": "absolute" });
				}
			});

			search.children('.search__btn-clear').click(function clearInput() {
				search.children('input').val('');
				searchData.value = '';
				if (search.children('input').hasClass('active-search')) {
					//
				}
			})
		}
		return {
			activeSearch,
			searchData,
		}
	},
}
</script>