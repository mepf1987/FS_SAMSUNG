// script.js
window.onload = function() {

    if(document.getElementById('respuesta').textContent === "Registro completado con éxito"){

        var recuperarRegistros = document.getElementById("recuperarRegistros");

      
        var boton = document.createElement("input");
        
        // Configurar atributos y contenido del botón
        boton.innerHTML = "Consultar";
        boton.name = "Consultar";
        boton.setAttribute("type", "submit");
        boton.setAttribute("class","form-btn");
        
    
        // Agregar el boton
        recuperarRegistros.appendChild(boton);


    }

  };