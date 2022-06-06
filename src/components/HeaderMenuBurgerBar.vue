<template>
    <div class="header__burger burger" @click="burgerClick" :class='{ active: isActive }'>
        <span class="burger__line"></span>
    </div>
</template>

<script>
import {ref} from 'vue';
import $ from 'jquery';

export default {
    
    name: 'BurgerBar',
    setup() {
        let isActive = ref(false);
        function burgerClick() {
            isActive.value = !isActive.value;
            $('.menu__body').toggleClass('active');
        }
        return {
            burgerClick,
            isActive,
        }
    },
//     $(document).ready(function () {
// 	$('.burger').click(function () {
// 		$('.menu__body,.header__burger').toggleClass('active');
// 		$('.search').toggleClass('active-search');
// 		$('body,html').toggleClass('lock');
// 	});
// });
}
</script>

<style></style>