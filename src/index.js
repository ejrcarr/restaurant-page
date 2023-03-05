import './style.css';
import main from './main-page.js';
import menu from './menu-page.js';
import contact from './contact-page.js';
const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menu-button');
const mainButton = document.getElementById('main-button');
const contactButton = document.getElementById('contact-button');

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navbar.classList.add('nav-active');
	} else {
		navbar.classList.remove('nav-active');
	}
}

const ContentController = (() => {
	const content = document.getElementById('content');
	let _currentPage = 'main';
	let loading = true;
	const _resetContent = () => {
		content.innerHTML = '';
	};

	const _scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const loadMain = () => {
		_scrollToTop();
		if (!loading && _currentPage == 'main') {
			return;
		}
		loading = false;
		_currentPage = 'main';
		_resetContent();
		content.appendChild(main());
	};
	const loadMenu = () => {
		_scrollToTop();
		if (_currentPage == 'menu') {
			return;
		}
		_currentPage = 'menu';
		_resetContent();
		content.appendChild(menu());
	};
	const loadContact = () => {
		_scrollToTop();
		if (_currentPage == 'contact') {
			return;
		}
		_currentPage = 'contact';
		_resetContent();
		content.appendChild(contact());
	};
	return { loadMain, loadMenu, loadContact };
})();

menuButton.addEventListener('click', ContentController.loadMenu);
mainButton.addEventListener('click', ContentController.loadMain);
contactButton.addEventListener('click', ContentController.loadContact);

ContentController.loadMain();
