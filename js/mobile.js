//изменения главной страницы при разрешении 769 px
let h1 = document.getElementById("h1");

// media query event handler
if (matchMedia) {
    const mqR = window.matchMedia("(max-width: 415px)");
    mqR.addListener(WidthChange);
    WidthChange(mqR);
}
	
// media query change
function WidthChange(mqR) {
	if (mqR.matches) {
        h1.style.display = "none";
	} else {
		h1.style.display = null;
	}	
}