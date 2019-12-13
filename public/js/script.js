import slider from './slider.js';

slider.init("slider");
slider.add("img/slider2.jpg");
slider.add("img/slider3.jpg");
slider.add("img/slider1.jpg");
slider.run();

var divF = document.getElementById("flex");
// divF.classList.add("flex-row");

var divF2 = document.getElementById("flex2");
// divF2.classList.add("flex-row");

// media query event handler
if (matchMedia) {
	const mq = window.matchMedia("(max-width: 768px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}
	
	// media query change
function WidthChange(mq) {
	if (mq.matches) {
		// divF.classList.add("flex-row");
		// divF2.classList.add("flex-row");

		divF.classList.remove("flex-row");
		divF2.classList.remove("flex-row");

	} else {
		// divF.classList.remove("flex-row");
		// divF2.classList.remove("flex-row");

		divF.classList.add("flex-row");
		divF2.classList.add("flex-row");

	}
	
}
  



