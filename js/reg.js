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