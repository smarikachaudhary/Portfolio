$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
var typed = new Typed(".typing", {
    strings: ["Learner", "Developer", "Programmer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Learner", "Developer", "Programmer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});s