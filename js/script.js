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
//Переключение в модальном окне
$(document).ready(function () {

    // <!-- Табы на JS -->
    $(".dws-form").on("click", ".tab", function () {
    //    Удаляем классы active
        $(".dws-form").find(".active").removeClass("active");

    //    Добавляем класс active
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
    $(".dws-form2").on("click", ".tab2", function () {
        //    Удаляем классы active
            $(".dws-form2").find(".active").removeClass("active");
    
        //    Добавляем класс active
            $(this).addClass("active");
            $(".tab-form2").eq($(this).index()).addClass("active");
        });
});

// формы регистрации и авторизации
let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let myInput2 = document.getElementById("password2");
let letter2 = document.getElementById("letter2");
let capital2 = document.getElementById("capital2");
let number2 = document.getElementById("number2");
let length2 = document.getElementById("length2");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
};
myInput2.onfocus = function () {
    document.getElementById("message2").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
};
myInput2.onblur = function () {
    document.getElementById("message2").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};
myInput2.onkeyup = function () {
    // Validate lowercase letters
    let lowerCaseLetters2 = /[a-z]/g;
    if (myInput2.value.match(lowerCaseLetters2)) {
        letter2.classList.remove("invalid");
        letter2.classList.add("valid");
    } else {
        letter2.classList.remove("valid");
        letter2.classList.add("invalid");
    }

    // Validate capital letters
    let upperCaseLetters2 = /[A-Z]/g;
    if (myInput2.value.match(upperCaseLetters2)) {
        capital2.classList.remove("invalid");
        capital2.classList.add("valid");
    } else {
        capital2.classList.remove("valid");
        capital2.classList.add("invalid");
    }

    // Validate numbers
    let numbers2 = /[0-9]/g;
    if (myInput2.value.match(numbers2)) {
        number2.classList.remove("invalid");
        number2.classList.add("valid");
    } else {
        number2.classList.remove("valid");
        number2.classList.add("invalid");
    }

    // Validate length
    if (myInput2.value.length >= 8) {
        length2.classList.remove("invalid");
        length2.classList.add("valid");
    } else {
        length2.classList.remove("valid");
        length2.classList.add("invalid");
    }
};


window.onload = function () {
    document.getElementById("password").onchange = validatePassword;
    document.getElementById("password_reg").onchange = validatePassword;
    document.getElementById("password2").onchange = validatePassword;
    document.getElementById("password_reg2").onchange = validatePassword;
};

function validatePassword() {
    let pass2 = document.getElementById("password_reg").value;
    let pass1 = document.getElementById("password").value;
    let pass22 = document.getElementById("password_reg2").value;
    let pass12 = document.getElementById("password2").value;
    if (pass1 != pass2)
        document.getElementById("password_reg").setCustomValidity("Пароли не совпадают");
    else
        document.getElementById("password_reg").setCustomValidity('');
    //empty string means no validation error
    if (pass12 != pass22)
        document.getElementById("password_reg2").setCustomValidity("Пароли не совпадают");
    else
        document.getElementById("password_reg2").setCustomValidity('');
}








