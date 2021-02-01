const menuBtn = document.querySelector('.menuBtn');
const hamburger = document.querySelector('.menuBtn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menuNav');
const menuNavItems = document.querySelectorAll('.menuNav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    for(let item of menuNavItems){
      item.classList.add('open');
    }
		showMenu = true;
	} else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    for(let item of menuNavItems){
      item.classList.remove('open');
    }
		showMenu = false;
	}
}
