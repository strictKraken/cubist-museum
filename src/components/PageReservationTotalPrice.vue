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

                </div>
                <div class="price-reservation__count">
                    {{ dataTotalPrice.bases }}
                </div>
            </div>
            <div v-if="dataTotalPrice.retirees > 0" class="price-reservation__item" id="ticket-retirees">
                <div class="price-reservation__name">
                    Retirees
                </div>
                <div class="price-reservation__price">

                </div>
                <div class="price-reservation__count">
                    {{ dataTotalPrice.retirees }}
                </div>
            </div>
            <div v-if="dataTotalPrice.students > 0" class="price-reservation__item" id="ticket-student">
                <div class="price-reservation__name">
                    Students
                </div>
                <div class="price-reservation__price">
                    
                </div>
                <div class="price-reservation__count">
                    {{ dataTotalPrice.students }}
                </div>
            </div>
			</div>
			<div class="price-reservation__total">
				0 ₽
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
        // let dataTotalPrice = ref({
        //     base: 0,
        //     retriees: 0,
        //     students: 0,
        // })
        //let dataTotalPrice = ref(props.propTotalPrice);
        // let dataTotalPrice = computed(() => {
        //     return ref(props.propTotalPrice);
        // })
        let dataTotalPrice = ref(props.propTotalPrice);
        console.log(dataTotalPrice.value.value)
        return {
            dataTotalPrice,
        }
    },
}
</script>