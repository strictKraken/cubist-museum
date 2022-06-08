import * as flsFunctions from "./modules/function.js";
import imgToSvg from "../assets/js/imgToSvg.js";
import activeSearh from "./modules/acitve-search.js";
import burger from "../assets/js/burger.js";
import activeSpoiler from "../assets/js/active-spoiler.js";
import * as ibg from "./modules/ibg.js";
import scrollToTop from "./modules/scrollToTop.js";
import * as calendar from "./modules/calendar.js";
import mixitup from 'mixitup';
import * as reg from "./modules/registration.js";
import clonePerson from "./modules/add-new-person.js";

import showInputMaipForm from "./modules/show-mail-input.js";

import * as slider from './modules/slick.js';
import "slick-carousel";


const title = ($('title'));
const pages = {
	main: 'main',
	exhibitions: 'Exhibition',
	reservation: 'reservation',
	success: 'successful payment',
}

if (title.text() === pages.reservation) {
	reg.stepForm();
}

if (title.text() === pages.exhibitions) {
	let mixer = mixitup('.exhibitions-cart__container', {
		load: {
			filter: 'all',
		}
	})
}

if(title.text() === pages.success) {
	slider.letGoSlick();
}

ibg.ibg();
flsFunctions.isWebp();

