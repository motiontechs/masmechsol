//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Wow initiated
new WOW().init();

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});*/

//jQuery(document).ready(function () {
//    if ($(window).width() > 768) {
//        $('.navbar').superfish({
//            animation: { height: "show" },
//            speed: 250,
//            speedOut: 250,
//            delay: 0
//        });
//    }
//});
//MobileMenu
$(function(){
    if($(window).width() < 768 )
    {
        $('ul.dropdown-menu li a').prepend('<i class="fa fa-caret-right"></i>&nbsp;&nbsp;');
        $('#pageImage').attr('style','height:250px;');
        $('#pageImage img').attr('style','max-width:100%; height:250px;');
    }
});
/*jQuery(document).ready(function () {
    if ($(window).width() < 768) {
        //jQuery('.container').prepend('<a href="javascript:void(0)" class="menu_toggler"><i class="fa fa-align-justify"></i></a>');
        jQuery('.navbar ul li a').click(function () {
            //jQuery('.navbar').slideToggle(300);
        });

        jQuery(".navbar").before('<div class="clear"></div>');
    }
});*/

$(document).on('click.nav', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).removeClass('in').addClass('collapse');
    }
});