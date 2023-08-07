lazyload();

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	speed: 1000,
 	focusableElements: '.main-advertising-container__information',

	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
	},

	autoplay: {
		delay: 5000,
	},

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});

document.querySelectorAll('.main-works-steps-nav__item').forEach(function(tabsBtn){
	tabsBtn.addEventListener('click', function(e){
	  const path = e.currentTarget.dataset.path;

	  document.querySelectorAll('.main-works-steps-nav__item').forEach(function(btn){
  	  btn.classList.remove('tabs-nav__btn--active')});
	  e.currentTarget.classList.add('tabs-nav__btn--active');

	  document.querySelectorAll('.main-works-steps-block__tabs-item').forEach(function(tabsBtn){
		  tabsBtn.classList.remove('main-works-steps-block-tabs-item--active')});
		document.querySelector(`[data-target="${path}"]`).classList.add('main-works-steps-block-tabs-item--active');

    document.querySelectorAll('.main-works-steps-block__img').forEach(function(tabsBtn){
		  tabsBtn.classList.remove('main-works-steps-block-img--active')});
		document.querySelector(`[data-tabsimg="${path}"]`).classList.add('main-works-steps-block-img--active');
	});
});


//Выпадающий список
let burger = document.querySelector('.header__menu-link');
let menu = document.querySelector('.header__menu');
let nav = document.querySelector('.header-menu__nav');
let menuLinks = document.querySelectorAll('.header-menu-nav__item');

burger.addEventListener('click', () => {
	burger.classList.toggle('header__menu-link--active');
	menu.classList.toggle('header__menu--active');
	nav.classList.toggle('header-menu__nav--active');

	document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
	el.addEventListener('click',function () {
		burger.classList.remove('header__menu-link--active');
		menu.classList.remove('header__menu--active');
		nav.classList.remove('header-menu__nav--active');

		document.body.classList.remove('stop-scroll');
	});
});

//Поиск
let headerSearch = document.querySelector('.header__search');
let headerSearchLink = document.querySelector('.header-search__link');
let headerSearchClose = document.querySelector('.header-search__close');
let headerSearchText = document.querySelector('.header-search__text');


headerSearchLink.addEventListener('click', () => {
	console.log('Открыть');
	if(!headerSearchLink.classList.contains('header-search__link--active')){
		headerSearch.classList.toggle('header__search--active');
		headerSearchLink.classList.toggle('header-search__link--active');

		headerSearchClose.classList.toggle('header-search__close--active');
		headerSearchClose.classList.remove('header-search__close');

		headerSearchText.classList.toggle('header-search__text--active');
		headerSearchText.classList.remove('header-search__text');
	}

});

headerSearchClose.addEventListener('click', () => {
	console.log('Закрыть');
	headerSearch.classList.remove('header__search--active');
	headerSearchLink.classList.remove('header-search__link--active');

	headerSearchClose.classList.toggle('header-search__close');
	headerSearchClose.classList.remove('header-search__close--active');

	headerSearchText.classList.toggle('header-search__text');
	headerSearchText.classList.remove('header-search__text--active');
});
