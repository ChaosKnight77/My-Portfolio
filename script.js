$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //footer buttons
    $('.fa-github').click(function() {
        location.href = "https://github.com/ChaosKnight77";
    })
    $('.fa-twitter').click(function() {
        location.href = "https://twitter.com/tojo_joseph96";
    })
    $('.fa-linkedin').click(function() {
        location.href = "https://www.linkedin.com/in/tojo-joseph-4690a41b3/";
    })
});