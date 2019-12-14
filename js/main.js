/*Social Icon
==================================================*/
$(window).scroll(function () {
    var navTop = $(window).scrollTop();
    $('.model-0').css("top", navTop + 50);
});


/*back-to-top
==================================================*/
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
}


/*Preloader
==================================================*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});



/*jQuery to collapse the navbar on scroll
==================================================*/
$(window).on('scroll', function () {

    // If the height of the document less the height of the document is the same as the
    // distance the window has scrolled from the top...
    if ($(document).height() - $(window).height() === $(window).scrollTop()) {

        // Adjust the scrollUp image so that it's a few pixels above the footer
        $('#scrollUp').css('bottom', '80px');

    } else {
        // Otherwise, leave set it to its default value.
        $('#scrollUp').css('bottom', '30px');
    }
});

$('.single-page-nav').singlePageNav({
    offset: $('.single-page-nav').outerHeight()
    , speed: 2000
    , filter: ':not(.external)'
    , updateHash: true
});

$('.navbar-toggle').click(function () {
    $('.single-page-nav').toggleClass('show');
});

$('.single-page-nav a').click(function () {
    $('.single-page-nav').removeClass('show');
});



/*Revolution slider
==================================================*/
jQuery(document).ready(function () {
    jQuery('.banner').revolution({
        delay: 9000
        , startwidth: 1170
        , startheight: 700
        , hideThumbs: 10
    });
});



/*WoW Animation
==================================================*/
new WOW().init();



/*Contact form JS
==================================================*/
$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this)
                , $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            } else if (e.type == 'blur') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } else if (e.type == 'focus') {
                if ($this.val() !== '') {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});