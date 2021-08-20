const burgerNav = document.querySelector('.header__burger-nav');
const burgerIcon = document.querySelector('.icon-burger');
const burgerIconClose = document.querySelector('.icon-burger-close');
let burgerToggled = false;

function burgerClick() {
	[burgerNav, burgerIcon, burgerIconClose].forEach(el => {
		el.classList.toggle('display-none');
	});
	var body = document.body;
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	if(burgerToggled === true) {
		body.style.position = '';
		body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	} else if(burgerToggled === false) {
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}`;
	}
	burgerToggled = !burgerToggled;
	console.log(burgerToggled);
}