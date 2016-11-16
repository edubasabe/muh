<?php
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$EmailTo = "edu@tresdosunocorp.com";
$Subject = "Contacto desde muh panama";

// prepare email body text
$Body .= "Nombre: ";
$Body .= $nombre;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $correo;
$Body .= "\n";

$Body .= "Mensaje: ";
$Body .= $mensaje;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$correo);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
