// ----------------------
// Formulario de Contacto
// ----------------------

$('#ajax-contact').validator().on('submit', function(e) {


  if ( e.preventDefault() ) {
      // handle the invalid form...

  } else {
    // everything looks good!
    enviar_datos_ajax();
  }
});

function enviar_datos_ajax() {
  var name = document.getElementById('nombre').value;
  var mail = document.getElementById('email').value;

  var gracias = 'muestra este ticket para reclamar tu trío de choripanes <br><br> ¡TE ESPERAMOS!';
  var urlProcesar = 'procesar.php';

var expr = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
var error = $('.error');
var mailError = $('.error mail-error');


//
// function validarFormulario() {
//   if (name === '') {
//     error.fadeIn();
//     return false;
//   }
//   else {
//   error.fadeOut();
//   if (mail === '') {
//     mailError.fadeIn();
//     return false;
//   }
//    return true;
//
//  }


  $.ajax({
    type: 'post',
    url: urlProcesar,
    data: {
      nombre: name, email: mail
    },
    success: function(datos) {
      $('#mostrar-datos').html(datos);
      $('#ajax-contact').hide();
      $('.modal-body').html('<p class="text-center">' + name + ', ' + gracias + '</p>' );
      $('.title-subscribe').html('¡Gracias!');
      // alert('Se envio de verdad');
    },
    error: function(mensajeError) {
      $('#mostrar-datos').html(mensajeError);
      console.log('Error en el formulario');
    }

  });


} // enviar datos ajax


// $("#contactForm").validator().on('submit', function (event) {
//   if (event.isDefaultPrevented()) {
//       // handle the invalid form...
//       console.log('Error en el formulario');
//   } else {
//       // everything looks good!
//       event.preventDefault();
//       submitForm();
//   }
// });
//
// function submitForm(){
//     // Initiate Variables With Form Content
//     var nombre = $("#nombre").val();
//     var correo = $("#correo").val();
//     var mensaje = $("#mensaje").val();
//
//     $.ajax({
//         type: "POST",
//         url: "process.php",
//         data: "nombre=" + nombre + "&correo=" + correo + "&mensaje=" + mensaje,
//         success : function(text){
//             if (text == "success"){
//                 formSuccess();
//             }
//         }
//     });
// }
// function formSuccess(){
//     $( "#msgSubmit" ).removeClass( "hidden" );
// }
//
// function submitMSG(valid, msg){
//         var msgClasses;
//     if(valid){
//         msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }






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
