<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $cantidad = $_POST["cantidad"];
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];

  // Aquí puedes escribir el código para procesar la donación, como guardarla en una base de datos o enviar un correo electrónico de confirmación

  // Por ejemplo, guardar los detalles de la donación en una base de datos o archivo
  $archivo = "donaciones.txt";
  $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nCantidad: $" . $cantidad . "\n\n";
  file_put_contents($archivo, $contenido, FILE_APPEND | LOCK_EX);

  // Redireccionar a una página de agradecimiento o mostrar un mensaje de éxito
  header("Location: gracias.php");
  exit;
}
?>
