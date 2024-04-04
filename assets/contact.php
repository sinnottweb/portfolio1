<?php
    $destinatario = 'sinnottweb@gmail.com';
    $nombre = $_POST ['nombre'];
    $email = $_POST ['email'];
    $mensaje = $_POST ['mensaje'];

    $header = "Enviado desde la página de Matías Sinnott";
    $mensajeCompleto = $mensaje . "\nNOMBRE DE CLIENTE: " . $nombre . "\nEMAIL: " . $email;

    mail($destinatario, $mensajeCompleto, $header);
    echo "<script>setTimeout(\"location.href='index.html#contact'\", 1000)</script>";
    echo "<script>Alert ('Correo Enviado Exitosamente!')</script>";

?>