console.log('hello world');


const parallax = document.querySelectorAll('.ice-parallax');

window.onscroll = function() {
    parallax.forEach(function(el, i) {
    	const windowYOffset = window.pageYOffset;
    	// el.style.top = (-windowYOffset * .5) + "px";
    });
};
