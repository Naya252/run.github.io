// слайдер
let slider = {
    init: function (id) {
        this.sliderContainer = document.getElementById(id);
        this.sliderElem = document.createElement("ul");
        // <ul></ul>
        this.sliderElem.classList.add("slider");
        // <ul class="slider"></ul>
        this.sliderElem.classList.add("card");
        this.sliderElem.classList.add("border");
        this.sliderElem.classList.add("slider-parent");
        this.sliderContainer.appendChild(this.sliderElem);

        this.slides = []; // массив для li
        this.currentSlide = 0; // текущий слайд (индекс)
    },
    add: function (imgPath, alt) {
        let li = document.createElement("li");
        // <li></li>
        li.classList.add("li-slider");
        let image = document.createElement("img");
        // <img>
        image.classList.add("img-slider");
        image.setAttribute("src", imgPath);
        // <img src="">
        image.setAttribute("alt", alt);
        // <img src="" alt="">
        li.appendChild(image);

        let pSlider = document.createElement("p");
        
        pSlider.classList.add("p-slider");
        pSlider.innerText = 'Текст на слайдере';
        
        li.appendChild(pSlider);
        // <li><img src="" alt=""></li>
        this.sliderElem.appendChild(li);
        // <ul><li><img src="" alt=""></li></ul>

        this.slides.push(li);
    },
    run: function () {
        // отображение следующего слайда
        this.nextSlide();
        setInterval(this.nextSlide.bind(this), 4000);
    },
    nextSlide: function () {
        // логика переключения слайдов
        if (this.currentSlide || this.currentSlide === 0) {
            this.slides[this.currentSlide].classList.remove("active");
            this.currentSlide += 1;
        }

        this.currentSlide = this.currentSlide < this.slides.length ?
            this.currentSlide : 0;

        this.slides[this.currentSlide].classList.add("active");
    }
};

slider.init("slider");
slider.add("img/slider2.jpg");
slider.add("img/slider3.jpg");
slider.add("img/slider1.jpg");
slider.run();

let divF = document.getElementById("flex");
let divF2 = document.getElementById("flex2");
let left = document.getElementById("left");
let leftP = document.getElementById("leftP");
slider = document.getElementById("slider");
flex2 = document.getElementById("flex2");
insert = document.getElementById("insert");


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
        // left.classList.remove("left");
        leftP.classList.remove("left");
        insert.insertBefore(flex2, slider);

	} else {
		divF.classList.remove("flex-row");
        divF2.classList.remove("flex-row");
        // left.classList.add("left");
        leftP.classList.add("left");
        insert.insertBefore(slider, flex2);
	}	
}


// гамбургер меню
$(document).ready(function() {
    $(".gamburger3").click(function() {
    if($(".gamburger3").attr('datas') == 'off') {     
    $(".gamburger4").attr('style', 'visibility: visible; margin-right: 0px;');
    $(".gamburger3").attr('datas', 'on');
    $(".gamburger3").removeClass("fa-bars");
    $(".gamburger3").addClass("fa-times");

    }
    else {                                       
    $(".gamburger4").attr('style', 'visibility: hidden; margin-right: -1000px;');
    $(".gamburger3").attr('datas', 'off');
    $(".gamburger3").removeClass("fa-times");
    $(".gamburger3").addClass("fa-bars");

    }
    });
});




