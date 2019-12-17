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

// модальное окно
let btn = document.getElementById('btn');
let formNav = document.getElementById('form-nav');
let close = document.getElementById('close');

/* Открываем модальное окно */
btn.onclick = function () {
    btn.setAttribute("href", "#form-nav"); 
    document.body.style.overflow = "hidden";
};
/* Закрываем модальное окно */
close.onclick = function () {
    btn.removeAttribute("href"); 
    document.body.style.overflow = null;
};
    
// модальное окно гамбургер
let btn2 = document.getElementById('btn2');
let formNav2 = document.getElementById('form-nav2');
let close2 = document.getElementById('close2');

/* Открываем модальное окно */
btn2.onclick = function () {
    btn2.setAttribute("href", "#form-nav2"); 
    document.body.style.overflow = "hidden";
};
/* Закрываем модальное окно */
close2.onclick = function () {
    btn2.removeAttribute("href"); 
    document.body.style.overflow = null;
};







