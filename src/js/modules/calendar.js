
function calendar() {

	let position = 0;
	let widthItem = document.querySelector('.calendar__item').offsetWidth;
	let AnimationStart = 0;
	
	
	Date.prototype.daysInMonth = function (month = this.getFullYear()) {
		return 33 - new Date(this.getFullYear(), month, 33).getDate();
	}
	
	let calendarList = document.querySelector('.calendar__list');
	const listMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	const DateToday = new Date().getDate();
	const MonthToday = new Date().getMonth();
	
	let prevNumberDate = DateToday;
	let MonthChoiced = MonthToday;
	
	
	
	document.addEventListener("DOMContentLoaded", () => {
		for (let i = 0; i < 28; i++) {
			createItemList(1);
		}
		calendarList.children[Math.round(calendarList.children.length / 2) - 1].classList.add('active-calendar-line');
		AtributeNumbers();
		initDateList();
	});
	
	//event click for change date
	calendarList.addEventListener('click', function (event) {
	
		if (AnimationStart) return;
		let butttonCalendar = event.target.closest('.calendar__item');
	
		if (butttonCalendar && !event.target.closest('.active-calendar-line')) {
			changeDate(butttonCalendar);
		}
	});
	
	
	
	//choice another date in a list
	function changeDate(btn) {
		// let numberDate = parseInt(btn.textContent);
		//Change active dates
		const currentActive = document.querySelector('.active-calendar-line');
		currentActive.classList.remove('active-calendar-line');
		btn.classList.add('active-calendar-line');
	
		Animation(btn, calendarList.children, AnimationRestore, initDateList);
	}
	
	function Animation(btn, AnimationItems, callback, callback2) {
		AnimationStart = 1;
		if (btn.id > 14) {
			position -= widthItem * (btn.id - 14);
			for (let i = 0; i < AnimationItems.length; i++) {
				AnimationItems[i].classList.add('slide-item-to-right');
				AnimationItems[i].style.setProperty('--slide', position + 'px');
			}
	
		}
		else if (btn.id < 14) {
			position += widthItem * (14 - btn.id);
			for (let i = 0; i < AnimationItems.length; i++) {
				AnimationItems[i].classList.add('slide-item-to-right');
				AnimationItems[i].style.setProperty('--slide', position + 'px');
			}
		}
	
		calendarList.addEventListener('animationend', function listener() {
	
			if (btn.id > 14) {
	
				for (let i = 0; i < AnimationItems.length; i++) {
					AnimationItems[i].classList.remove('animation');
					AnimationItems[i].classList.remove('slide-item-to-right');
				}
				for (let i = 0; i < btn.id - 14; i++) {
					deleteItemList(1);
					createItemList(1);
				}
			}
			else if (btn.id < 14) {
	
				for (let i = 0; i < AnimationItems.length; i++) {
					AnimationItems[i].classList.remove('animation');
					AnimationItems[i].classList.remove('slide-item-to-right');
				}
				for (let i = 0; i < 14 - btn.id; i++) {
					deleteItemList(0);
					createItemList(0);
				}
			}
			let btnTMP = btn.id;
			AtributeNumbers();
	
			calendarList.removeEventListener('animationend', listener);
			AnimationStart = 0;
			//------------------------------------------//
			let numberDate = parseInt(btn.textContent);
	
			if (numberDate < prevNumberDate && btnTMP > 14) {
				MonthChoiced += 1;
				callback2(numberDate, MonthChoiced);
	
			}
			else if (numberDate > prevNumberDate && btnTMP < 14) {
				MonthChoiced -= 1;
				callback2(numberDate, MonthChoiced);
	
			}
			else {
	
				callback2(numberDate);
			}
			prevNumberDate = numberDate;
		});
	
		callback(AnimationItems);
	
		position = 0;
	
	
	}
	
	function AnimationRestore(AnimationItems) {
		//console.log('animation restore');
		for (let i = 0; i < AnimationItems.length; i++) { AnimationItems[i].classList.add('animation'); }
	
	}
	
	
	//Initial date list on a page
	function initDateList(startDate = new Date().getDate(), leftMonth = MonthChoiced) {
		//months
		const Months = document.querySelectorAll('.calendar__month');
		Months[0].textContent = listMonths[leftMonth];
		Months[1].textContent = listMonths[leftMonth + 1];
		const maxDaysNow = new Date().daysInMonth(leftMonth);
		const maxDaysPrev = new Date().daysInMonth(leftMonth - 1);
		//dates
		let calendarDate = document.querySelectorAll('.calendar__date');
		let i = startDate - 13;
	
		if (i <= 0) {
			//поменять
			i += maxDaysPrev;
			//console.log(i);
			for (let j = 14; j < 14 + 27; j++) {
				calendarDate[j].textContent = i;
				if (i >= maxDaysPrev) i = 0;
				i++;
			}
		}
		else {
			for (let j = 14; j < 14 + 27; j++) {
				calendarDate[j].textContent = i;
				if (i >= maxDaysNow) i = 0;
				i++;
			}
		}
	
	
	}
	
	function AtributeNumbers() {
	
		let iter = -13;
		const listItems = calendarList.children;
		for (let i = 0; i < listItems.length; i++) {
			listItems[i].setAttribute('id', iter);
			iter++;
		}
	
	}
	
	function createItemList(whereToCreate = 1) {
		if (whereToCreate) {
			let cloneItem = calendarList.children[calendarList.children.length - 1].cloneNode(true);
			calendarList.append(cloneItem);
		}
		else {
			//console.log('1');
			let cloneItem = calendarList.children[0].cloneNode(true);
			calendarList.prepend(cloneItem);
		}
	}
	
	function deleteItemList(flag = 1) {
	
		if (flag) {
			calendarList.removeChild(calendarList.children[0]);
		}
		else {
			calendarList.removeChild(calendarList.lastElementChild);
		}
	}

}
