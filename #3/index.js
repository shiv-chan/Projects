const toggler = document.querySelector('.toggler');
const menuWrap = document.querySelector('.menu-wrap');

toggler.addEventListener('click', () => {
  if(toggler.checked){
    menuWrap.style.transform = 'translateY(100vh)';
  } else {
    menuWrap.style.transform = 'none';
  }
});


