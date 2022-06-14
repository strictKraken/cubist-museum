<template>
	<div class="form-reservation__ticket-pick">
		<div class="ticket-pick" id="btn-base">
			<div class="ticket-pick__text">
				<slot name="text"></slot>
			</div>
			<div class="ticket-pick__price">
				<slot name="price"></slot>	
			</div>

			<div class="ticket-pick__count">
				<button @click.prevent.stop="decTickets" class="ticket-pick__btn-left" btn-left>
					-
				</button>
				<label class="ticket-pick__number">
					<input class="ticket-pick__number-input" name="count-tickets-base"
						type="number" min="0" max="99" ticket-count v-model="countTickets">
					<p>{{countTickets}}</p>
				</label>
				<button @click.prevent.stop ="incTickets" class="ticket-pick__btn-right" btn-right>
					+
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue';
export default {
	name: 'SelectTickets',
	setup() {
		const maxValue = 99;
		let countTickets = ref(0); 
		const incTickets = () => {
			if(countTickets.value < maxValue) {
				countTickets.value++;
			}
		}
		const decTickets = () => {
			if(countTickets.value > 0)
			countTickets.value--;
		}
		return {
			countTickets,
			incTickets,
			decTickets,
		}
	},
}
</script>