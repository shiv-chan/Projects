const bg = document.querySelector('#bg'),
	moon = document.querySelector('#moon'),
	mountain = document.querySelector('#mountain'),
	road = document.querySelector('#road'),
	title = document.querySelector('#title');

window.addEventListener('scroll', function () {
	let value = window.scrollY || window.pageYOffset;

	bg.style.top = `${value * 0.5}px`;
	moon.style.left = `${-value * 0.5}px`;
	mountain.style.top = `${-value * 0.1}px`;
	road.style.top = `${value * 0.15}px`;
	title.style.top = `${value * 0.5}px`;
});
