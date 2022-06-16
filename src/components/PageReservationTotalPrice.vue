<template>
    <div class="">
        <h6 class="price-reservation__title">
            Total:
		</h6>
        <div class="price-reservation__items">
            <div v-if="dataTotalPrice.bases > 0" class="price-reservation__item" id="ticket-base">
                <div class="price-reservation__name">
                    Without lugot
                </div>
                <div class="price-reservation__price">
                    {{ prices.base * dataTotalPrice.bases }} ₽
                </div>
                <div class="price-reservation__count">
                    x{{ dataTotalPrice.bases }}
                </div>
            </div>
            <div v-if="dataTotalPrice.retirees > 0" class="price-reservation__item" id="ticket-retirees">
                <div class="price-reservation__name">
                    Retirees
                </div>
                <div class="price-reservation__price">
                    {{ prices.retiree * dataTotalPrice.retirees }} ₽ 
                </div>
                <div class="price-reservation__count">
                    x{{ dataTotalPrice.retirees }}
                </div>
            </div>
            <div v-if="dataTotalPrice.students > 0" class="price-reservation__item" id="ticket-student">
                <div class="price-reservation__name">
                    Students
                </div>
                <div class="price-reservation__price">
                    {{ prices.student * dataTotalPrice.students }} ₽
                </div>
                <div class="price-reservation__count">
                    x{{ dataTotalPrice.students }}
                </div>
            </div>
			</div>
			<div class="price-reservation__total">
				{{ prices.student * dataTotalPrice.students + prices.retiree * dataTotalPrice.retirees + prices.base * dataTotalPrice.bases }} ₽
			</div>
    </div>
</template>

<script>
import { ref} from 'vue';
export default {
    name: 'TotalPrice',
    props:{
        propTotalPrice: {
            type: Object,
            require: true,
        }
    },
    setup(props) {
        let dataTotalPrice = ref(props.propTotalPrice);
        const prices = {
            base: 800,
            retiree: 0,
            student: 400,
        }

        return {
            dataTotalPrice,
            prices
        }
    },
}
</script>