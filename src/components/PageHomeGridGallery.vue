<template>
	<div class="exhibitions__content">
		<exhibition-cart-item class="cart1" :Exhibition="ExhibitionsList[0]">
			<template v-slot:image>
				<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="bg">
			</template>
		</exhibition-cart-item>
		<exhibition-cart-item class="cart2" :Exhibition="ExhibitionsList[1]">
			<template v-slot:image>
				<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/2.png" alt="bg">
			</template>
		</exhibition-cart-item>
		<exhibition-cart-item class="cart3" :Exhibition="ExhibitionsList[2]">
			<template v-slot:image>
				<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/3.jpg" alt="bg">
			</template>
		</exhibition-cart-item>
		<exhibition-cart-item class="cart4" :Exhibition="ExhibitionsList[3]">
			<template v-slot:image>
				<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/4.jpg" alt="bg">
			</template>
		</exhibition-cart-item>
		<exhibition-cart-item class="cart5" :Exhibition="ExhibitionsList[4]">
			<template v-slot:image>
				<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/5.jpg" alt="bg">
			</template>
		</exhibition-cart-item>
		<router-link :to="{name: 'Exhibitions'}" class="exhibitions__cart-more cart-more">
			<p class="cart-more__text">
				All exhibitions
			</p>
			<icon-big-arrow class="cart-more__link"/>
		</router-link>
	</div>
</template>

<script>
import ExhibitionCartItem from '@/components/ExhibitionCartItem.vue';
import IconBigArrow from '@/components/icons/IconBigArrow.vue';

export default {
	name: 'GridGallery',
	components : {
		ExhibitionCartItem,
		IconBigArrow,
	},
	props: {
		ExhibitionsList: {
			type: Array,
			require: true,
		}
	},
	setup() {
		
	},
}
</script>

<style lang='scss'>
@import '@/assets/scss/vars';
.exhibitions {
	padding: 128px 0 64px 0;

	@media (max-width: 860px) {
		padding: 64px 0;
	}

	&__title {
		font-family: $Zilla;
		font-weight: 400;
		font-size: 58px;
		line-height: calc(70 / 58 * 100%);
		color: $DarkWhite;

		margin-bottom: 66px;

		@media (max-width: 860px) {
			font-size: 26px;
			margin-bottom: 39px;
		}
	}

	&__content {
		margin-bottom: 128px;

		display: grid;
		grid-template-columns: minmax(0px, 634px) minmax(0px, 453px);
		grid-template-rows: repeat(8, 195px);

		grid-template-areas: "cart1 cart2"
			"cart1 cart2"
			"cart1 cart3"
			"cart4 cart3"
			"cart4 btn"
			"cart4 btn"
			"cart5 cart5"
			"cart5 cart5";
		row-gap: 23px;
		column-gap: 23px;

		@media (max-width: 860px) {

			grid-template-rows: repeat(8, 78px);
			row-gap: 16px;
			column-gap: 16px;
			margin-bottom: 0;
		}
	}

	.cart1 {
		grid-area: cart1;
	}

	.cart2 {
		grid-area: cart2;
	}

	.cart3 {
		grid-area: cart3;
	}

	.cart4 {
		grid-area: cart4;
	}

	.cart5 {
		grid-area: cart5;
	}

	&__cart {}

	&__cart-more {
		grid-area: btn;
	}

	&__btn-to-top {
		@media (max-width: 860px) {
			display: none;
		}
	}
}

.cart-more {
	background-color: #D8DFDE;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


	@media (max-width: 860px) {
		background-color: transparent;
	}

	&__text {
		margin-bottom: 42px;
		color: $DarkGreen;
		font-size: 20px;
		line-height: calc(21 / 20 * 100%);

		@media (max-width: 860px) {
			font-size: 12px;
			margin-bottom: 11px;
		}
	}

	&__link {
		svg {
			width: 128px;
			height: 128px;

			path {
				fill: $DarkGreen;
			}
		}

		@media (max-width: 860px) {
			svg {
				width: 59px;
				height: 60px;
			}
		}
	}

	&:hover {

		.cart-more__link {
			svg {
				path {
					fill: $LightGreen;
				}
			}
		}

		.cart-more__text {
			color: $LightGreen;
		}
	}
}
</style>