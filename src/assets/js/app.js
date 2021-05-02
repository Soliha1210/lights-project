

if (document.querySelector('.slider_right--img.splide')){
	new Splide( '.slider_right--img.splide', {
		type   : 'fade',
		rewind:true,
	} ).mount();
}


let btn=document.querySelector('.menu_btn')
btn.addEventListener('click', function(){
	this.classList.toggle('active')
	document.querySelector('.header_top .menu').classList.toggle('show')
})



document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 71,
		height      : 541,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
    direction: 'ttb',

    perPage    : 5,

		breakpoints : {
			'600': {
				fixedWidth: '33.3%',
				direction: 'ltr',
				pagination:false,

				perPage    : 3,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
		height:378,
		fixedWidth:383,
		breakpoints: {
			'600': {
				height:228
			}
		}
	} ); 
	primarySlider.sync( secondarySlider ).mount();
} );

let plus=document.querySelector('.plus')
let minus=document.querySelector('.minus')
let num=document.querySelector('.num')

plus.addEventListener('click',function(){
	num.textContent=parseInt(num.textContent)+1
});
minus.addEventListener('click',function(){
	if(num.textContent>0){
		num.textContent=parseInt(num.textContent)-1
	}
})