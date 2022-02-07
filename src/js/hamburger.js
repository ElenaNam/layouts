const btnMenu = document.getElementById('btnMenu');
const menu = document.querySelector('.header__nav');
const page = document.querySelector('.page-wrapper');
const body = document.querySelector('body');

//клик по кнопке меню
btnMenu.addEventListener('click', ()=> {
	btnMenu.classList.toggle('close');
	menu.classList.toggle('show');

	if(menu.classList.contains('show')){
		const overlay = document.createElement('div');

		overlay.classList.add('overlay');
		page.appendChild(overlay);
		body.classList.add('no-scroll');

		overlay.addEventListener('click', () => {
			hideMenu();
		});
	} else {
		hideOverlay();
	}
})

//скрыть меню и оверлей
const hideMenu = () => {
	menu.classList.remove('show');
	btnMenu.classList.remove('close');
	hideOverlay();
}

//скрыть оверлей
const hideOverlay = () => {
	document.querySelector('.overlay').classList.add('hide');
	setTimeout(()=> {
		document.querySelector('.overlay').remove();
		body.classList.remove('no-scroll');
	}, 300)
}

//клик по элементам меню
menu.addEventListener('click', (e)=> {
	if (e.target && e.target.tagName == "A") hideMenu();
})
