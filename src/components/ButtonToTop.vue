<template>
    <div>
        <button @click.prevent.stop="scrollToTop" class="exhibitions__btn-to-top btn-to-top">
            <div class="btn-to-top__link" href="#">
                <img class="img-svg" src="@/img/icons/arrow-top.svg" alt="btn-return">
            </div>
            <p class="btn-to-top__text">
                Back to the top
            </p>
        </button>
    </div>
</template>

<script>
import $ from 'jquery';
export default {

    name: 'ButtonToTop',
    setup() {
        
        function scrollToTop() {
            const timeAnimation = 550;
            $('html,body').animate({
                scrollTop: '0'
            }, timeAnimation);
            window.scrollTo(0,0);
        }

        return {
            scrollToTop,
        }
    },
}
</script>