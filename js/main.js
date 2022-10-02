jQuery(function ($) {

    $(function () {
        $('#main-slider.carousel').carousel({
            interval: 5000,
            pause: false
        });
    });

    //smooth scroll
    $('.navbar-nav > li').click(function (event) {
        event.preventDefault();
        var target = $(this).find('>a').prop('hash');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    //scrollspy
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });


});