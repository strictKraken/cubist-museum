<template>
	<aside class="reservation__aside aside-reservation">
		<div class="reservation__cart cart-exhibitions _ibg">

			<img class="cart-exhibitions__bg " src="@/img/Content/exhibitions/1.jpg" alt="">
			<div class="cart-exhibitions__info">
				<div class="cart-exhibitions__online">
					<span class="bg-red">Online</span>
				</div>
				<h4 class="cart-exhibitions__title">
					Exhibition of works by Bela Kadar
				</h4>
				<div class="cart-exhibitions__date">
					<p>
						15 Feb 2022 - 15 Jul 2022
					</p>
				</div>
				<p class="cart-exhibitions__about">
				</p>
			</div>
		</div>
		<div class="reservation__price-total  price-reservation">
			<h6 class="price-reservation__title">
				Total:
			</h6>
			<!--- ??????????????? -->
			<div class="price-reservation__items">
				<div class="price-reservation__item" id="ticket-base">
					<div class="price-reservation__name">
						Without lugot
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
				<div class="price-reservation__item" id="ticket-retirees">
					<div class="price-reservation__name">
						Retirees
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
				<div class="price-reservation__item" id="ticket-student">
					<div class="price-reservation__name">
						Students
					</div>
					<div class="price-reservation__price">

					</div>
					<div class="price-reservation__count">

					</div>
				</div>
			</div>
			<div class="price-reservation__total">
				0 ₽
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'AsideMenu',
	setup() {
		
	},
}
</script>