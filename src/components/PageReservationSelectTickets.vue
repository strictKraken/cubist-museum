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
			<transition name="fade-box">
				<div v-if="isSelected" class="form-reservation__upload-file upload-file">
					<input class="upload-file__input" type="file" name="" id="file-input1"
						accept=".jpg, jpeg, .png, .pdf">
					<label class="upload-file__label" for="file-input1">
						<img class="img-svg upload-file__logo" src="@/img/icons/inputFile.svg"
							alt="upload-file">
						<div class="upload-file__content">
							<span class="upload-file__text">Please confirm your status</span>
							<span class="upload-file__info-text">Attach your selfies with the
								documents</span>
						</div>
					</label>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import {computed,onMounted,ref} from 'vue';
export default {
	name: 'SelectTickets',
	props: ['cTickets','checkStatus'],
	emits: ['update:cTickets'],
	setup(props, {emit}) {
		const maxValue = 99;
		const countTickets = computed({
			get() {
				return props.cTickets
				
			},
			set(countTickets) {
				emit('update:cTickets', checkingStatus(countTickets))
			}
		})
		onMounted(() => {
			checkingStatus(countTickets.value)
		})

		const isuploadFile = ref(props.checkStatus)

		let isSelected = ref(false);
		const incTickets = () => {
			if(countTickets.value < maxValue) {
				countTickets.value++;
			}
		}
		const decTickets = () => {
			if(countTickets.value > 0) {
				countTickets.value--;	
			}
		}

		const checkingStatus = (count) => {
			if(count > 0 && isuploadFile.value === true) {
				isSelected.value = true
			} else {
				isSelected.value = false
			}
			return count
		}

		return {
			countTickets,
			incTickets,
			decTickets,
			isuploadFile,
			isSelected,
			
		}
	},
}
</script>

<style lang="scss" scoped>
	// .fade-box-enter-active, .fade-box-leave-active {
	// 	transition: all 0.4s ease;
	// }
	// .fade-box-enter-from {
	// 	transform: translateY(-100%);
	// }
	// .fade-box-leave-to {
	// 	transform: translateY(-100%);
	// }
</style>