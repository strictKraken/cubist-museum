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
				<button @click.prevent.stop="decTickets(); onChange()" class="ticket-pick__btn-left" btn-left>
					-
				</button>
				<label class="ticket-pick__number">
					<input class="ticket-pick__number-input" name="count-tickets-base"
						type="number" min="0" max="99" ticket-count v-model="countTickets">
					<p>{{countTickets}}</p>
				</label>
				<button @click.prevent.stop ="incTickets(); onChange()" class="ticket-pick__btn-right" btn-right>
					+
				</button>
			</div>
		</div>
	</div>
</template>

<script>
// import { emit } from 'process';
import {ref} from 'vue';
export default {
	name: 'SelectTickets',
	props: ['cTickets'],
	emits: ['onChange'],
	setup(props, {emit}) {
		const maxValue = 99;
		let countTickets = ref(props.cTickets); 
		const incTickets = () => {
			if(countTickets.value < maxValue) {
				countTickets.value++;
			}
		}
		const decTickets = () => {
			if(countTickets.value > 0)
			countTickets.value--;
		}

		const onChange = () => {
			emit('onChange', countTickets);
		}
		return {
			countTickets,
			incTickets,
			decTickets,
			onChange,
		}
	},
}
</script>