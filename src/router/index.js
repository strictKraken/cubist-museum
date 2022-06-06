import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '@/pages/PageHome.vue';
import PageExhibitions from '@/pages/PageExhibitions.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome,
	},
	{
		path: '/exhibitions',
		name: 'Exhibitions',
		component: PageExhibitions,
	},
	{
		path: '/404',
		name: 'PageErore',
		component: () => import('@/pages/PageErrore.vue'),
	},
	// {

	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	//component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router