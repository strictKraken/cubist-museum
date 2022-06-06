<template>
    <div class="exhibitions__cart cart-exhibitions _ibg">
        <slot name='image'></slot>
        <div class="cart-exhibitions__info">
            <div class="cart-exhibitions__online">
                <span class="bg-red">
                    <slot name='online'></slot>
                </span>
            </div>
            <h4 class="cart-exhibitions__title">
                <slot name='title'></slot>
            </h4>
            <div class="cart-exhibitions__date">
                <p>
                    <slot name='date'></slot>
                </p>
            </div>
            <p class="cart-exhibitions__about">
                <slot name='about'></slot>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    
    setup() {
    },
}
</script>

<style lang='scss'>

</style>