$("#breakfast").click(function () {
    $("#lunch").removeClass("clickClass");
    $("#dinner").removeClass("clickClass");
    $("#all").removeClass("clickClass");
    $("#all").removeClass("firstcolor");
    $("#breakfast").addClass("clickClass");
    $(".all").fadeOut();
    $(".breakfast").fadeIn();
});
// ALL SECTION
$("#all").click(function () {
    $("#lunch").removeClass("clickClass");
    $("#breakfast").removeClass("clickClass");
    $("#dinner").removeClass("clickClass");
    $("#all").addClass("clickClass");
    $(".all").fadeIn(700);
});
// LUNCH
$("#lunch").click(function () {
    $("#lunch").removeClass("clickClass");
    $("#breakfast").removeClass("clickClass");
    $("#dinner").removeClass("clickClass");
    $("#all").removeClass("clickClass");
    $("#all").removeClass("firstcolor");
    $("#lunch").addClass("clickClass");
    $(".all").fadeOut(0003);
    $(".lunch").fadeIn(600);
});
// dinner
$("#dinner").click(function () {
    $("#breakfast").removeClass("clickClass");
    $("#all").removeClass("clickClass");
    $("#all").removeClass("firstcolor");
    $("#lunch").removeClass("clickClass");
    $("#dinner").addClass("clickClass");
    $(".all").fadeOut(0003);
    $(".dinner").fadeIn(660);
});