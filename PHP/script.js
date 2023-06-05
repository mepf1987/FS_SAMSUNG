// Obtener el valor de respuesta desde PHP
var respuesta = "<?php echo isset($respuesta) ? $respuesta : ''; ?>";
console.log(respuesta)
// Mostrar la respuesta en el elemento <p>
var respuestaElement = document.getElementById("respuesta");
respuestaElement.innerHTML = respuesta;