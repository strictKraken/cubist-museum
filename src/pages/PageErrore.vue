<template>
	<div class="errore-page">
		<div class="errore-page__bg ">
			<img src="@/img/Content/bg/4.jpg" alt="bg">
		</div>
		<div class="errore-page__container container">
			<div class="errore-page__code full-page-title">
				404
			</div>
			<div class="errore-page__title">
				<span class="bg-green">Sorry, page not found</span>
			</div>
			<div class="errore-page__text">
				We can't seem to find the page you're looking for
			</div>
			<div class="errore-page__help">
				<p>Here are some helpful links:</p>
				<ul class="errore-page__list">
					<li class="errore-page__list-item"><a href="" class="errore-page__link">Search</a></li>
					<li class="errore-page__list-item"><a href="" class="errore-page__link">Support Service</a></li>
					<li class="errore-page__list-item"><a href="" class="errore-page__link">Exhibitions and events</a></li>
				</ul>
			</div>
			<div class="errore-page__buttons">
				<button class="errore-page__btn-back white-button">Back</button>
				<button class="errore-page__btn-home green-button">Back home</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'PageErrore',
	setup() {
		
	},
}
</script>