// script.js
window.onload = function() {

    if(document.getElementById('respuesta').textContent === "Registro completado con éxito"){

        var consultar = document.getElementById("consultar");

        consultar.style.display="block";
        consultar.style.margin="0 auto";

    }

  };

  function showUsuariosRegistrados(){

    var usuariosRegistrados = document.getElementById("usuariosRegistrados");
    usuariosRegistrados.style.margin="0 auto",
    usuariosRegistrados.style.display="block";
    
    var crearRegistros = document.getElementById("crearRegistros");
    crearRegistros.style.display="none";





  }