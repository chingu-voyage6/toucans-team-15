$(function () {

    // =====================================================
    //      NAVBAR
    // =====================================================   

    $(window).on('scroll load', function () {

        if ($(window).scrollTop() >= 100) {
            $('.navbar').addClass('active');
            $("#nav-img").attr("src", "img/nav-heart.png");
            $("#nav-img").addClass("nav-img");
        } else {
            if ($(window).width() > 992) {
                $('.navbar').removeClass('active');
                $("#nav-img").attr("src", "img/nav-logo3.png");
            }
            
        }
    });
    
    $('nav').hover(function () {
        if ($(window).scrollTop() < 101 & $(window).width() > 992) {
            $('.navbar').addClass('active');
            $("#nav-img").attr("src", "img/nav-dark-logo.png");
            $("#nav-img").removeClass("nav-img");
        }
    }, function() {
        if ($(window).scrollTop() < 101 & $(window).width() > 992) {
            $('.navbar').removeClass('active');
            $("#nav-img").attr("src", "img/nav-logo3.png");
            $("#nav-img").addClass("nav-img");
        }
    })

    $('.navbar-toggler').click(function() {
        if ($(window).width() <= 992) {
            $('.navbar').addClass('active');
        }
    })

    // =====================================================
    //      SCROLL SPY
    // =====================================================
    // $('body').scrollspy({
    //     target: '#navbarSupportedContent',
    //     offset: 80
    // });

});
