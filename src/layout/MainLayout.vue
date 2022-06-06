<template>
	<header-menu/>
    <slot></slot>
    <footer-menu/>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import FooterMenu from '@/components/FooterMenu.vue';

export default {
	name: 'MainLayout',
	components: { 
		HeaderMenu,
		FooterMenu,
	},
	setup() {
	},
}
</script>