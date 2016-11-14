// ----------------------------------------
// jQuery to collapse the navbar on scroll
// ----------------------------------------
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// ----------------------------------
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ----------------------------------
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// ---------------
// Ventana modal
// ---------------
$(document).on('ready', function() {
    setTimeout(function() {
        // $('#subModal').modal('show');
    }, 2000);
});


// ----------------
// Owl Carousel
// ----------------

//-- Altura del Viewport
var altoSlide = $(window).height();

// $('.home-slide').css({
//     'max-height': altoSlide + 'px!important',
//     'height': altoSlide + 'px'
// });

$(document).ready(function() {
    $('#slider-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        navText: ['<', '>'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
// -- Insertar Nav en el Stage
$(document).on('ready', function() {
$('.owl-nav').insertBefore('.owl-controls');
});
// ----------------
