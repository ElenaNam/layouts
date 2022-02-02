const btnMenu = document.getElementById('btnMenu');
const menu = document.querySelector('.header__nav');
const page = document.querySelector('.page-wrapper');


btnMenu.addEventListener('click', ()=> {
	btnMenu.classList.toggle('close');
	menu.classList.toggle('show');

	if(menu.classList.contains('show')){
		const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		page.appendChild(overlay)
	} else {
		document.querySelector('.overlay').remove()
	}
})

//TODO:дописать оверлей, плавность появления, запретить прокрутку, при клике на оверлей закрывать меню
