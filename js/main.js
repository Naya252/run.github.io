//изменения главной страницы при разрешении 769 px
let divF = document.getElementById("flex");
let divF2 = document.getElementById("flex2");
let leftP = document.getElementById("leftP");
slider = document.getElementById("slider");
let flex2 = document.getElementById("flex2");
let insert = document.getElementById("insert");

// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 769px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}
	
// media query change
function WidthChange(mq) {
	if (mq.matches) {
		divF.classList.add("flex-row");
        divF2.classList.add("flex-row");
        leftP.classList.remove("left");
        insert.insertBefore(flex2, slider);

	} else {
		divF.classList.remove("flex-row");
        divF2.classList.remove("flex-row");
        leftP.classList.add("left");
        insert.insertBefore(slider, flex2);
	}	
}