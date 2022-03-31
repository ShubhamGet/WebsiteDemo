fas fa-bars=document.querySelector('.fas fa-bars')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navList')
img-slider=document.querySelector('.img-slider')

fas fa-bars.addEventListener('click', ()=>{
	navbar.classList.toggle('visibility-class');
	navList.classList.toggle('visibility-class');
	img-slider.classList.toggle('height-nav');

})