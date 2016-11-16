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
         $('#subModal').modal('show');
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
        navText: ['<svg width="17" height="31"><path d=" M 15 1 L 1 15 L 15 30" stroke="#FFFFFF" stroke-width="2" fill="none" /></svg>  ',
        '<svg width="17" height="31"><path d=" M 1 1 L 15 15 L 1 30" stroke="#FFFFFF" stroke-width="2" fill="none" /></svg>'],
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



// ----------------------
// Formulario de Contacto
// ----------------------

$("#contactForm").validator().on('submit', function (event) {
  if (event.isDefaultPrevented()) {
      // handle the invalid form...
      console.log('Error en el formulario');
  } else {
      // everything looks good!
      event.preventDefault();
      submitForm();
  }
});

function submitForm(){
    // Initiate Variables With Form Content
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var mensaje = $("#mensaje").val();

    $.ajax({
        type: "POST",
        url: "process.php",
        data: "nombre=" + nombre + "&correo=" + correo + "&mensaje=" + mensaje,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "h3 text-center tada animated text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}






// function enviarMensaje(){
// var nombre = document.getElementById('nombre').value;
// var correo = document.getElementById('correo').value;
// var mensaje = document.getElementById('mensaje').value;
//
// var dataen = 'nombre='+nombre +'&correo='+correo+'&mensaje='+mensaje;
//
// $.ajax({
//   type:'post',
//   url:'send.php',
//   data:dataen,
//   success:function(resp){
//     $('#respa').html(resp);
//   }
// });
// return false;
// }
