import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '@/pages/PageHome.vue';
import PageExhibitions from '@/pages/PageExhibitions.vue';
import PageItemExhibition from '@/pages/PageItemExhibition.vue';
import PageResrvation from '@/pages/PageReservation.vue';
import PageSuccessfullPaid from '@/pages/PageSuccessfullPaid.vue';

const routes = [
	{
		path: '/',
		redirect: {name: 'Home'}
	},
	{
		path: '/home',
		name: 'Home',
		component: PageHome,
	},
	{
		path: '/exhibitions',
		name: 'Exhibitions',
		component: PageExhibitions,
	},
	{
		path: '/exhibitions/:id',
		component: PageItemExhibition,
		props: true,
	},
	{
		path: '/exhibitions/:id/reservation',
		name: 'Reservation',
		component: PageResrvation,

	},
	{
		path: '/successfull',
		name: 'successfull',
		component: PageSuccessfullPaid,
	},
	{
		path: '/404',
		name: 'PageErore',
		component: () => import('@/pages/PageErrore.vue'),
	}
	
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0}
	}
})

export default router