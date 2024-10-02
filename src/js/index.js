// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
	// Your custom options
// });

// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import { easepick } from '@easepick/bundle';
const picker = new easepick.create({
	element: document.getElementById('datePicker'),
	css: [
	  'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
	],
  });

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__btn');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hiden');

	// Клик по кнопке. Открыть/закрыть select
	dropDownBtn.addEventListener('click', function () {
		dropDownList.classList.toggle('dropdown__list--visible');
	});


	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун.
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун.
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn)
		{
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

});

