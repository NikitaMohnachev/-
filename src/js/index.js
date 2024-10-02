// Мобильная навигация
// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import select from './modules/select';
select();

import { easepick } from '@easepick/bundle';
const picker = new easepick.create({
	element: document.getElementById('datePicker'),
	css: [
	  'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
	],
  });

