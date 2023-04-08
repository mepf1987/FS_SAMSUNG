"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agenda_1 = require("./componentes/Agenda");
var pedirDatos_1 = require("./servicios/pedirDatos");
var readlineSync = require("readline-sync");
// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu() {
    console.log("Menu:");
    console.log("1. Agregar persona");
    console.log("2. Editar persona");
    console.log("3. Buscar persona");
    console.log("4. Cantidad de personas registradas");
    console.log("5. Salir");
    var opcion = readlineSync.questionInt("Ingrese una opcion: ");
    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        console.log("Opción inválida, por favor ingrese una opcion válida.");
        return null;
    }
    return opcion;
}
// Creamos una instancia de la agenda
var miAgenda = new Agenda_1.Agenda();
// Mostramos el menú y procesamos la opción del usuario
var opcion = mostrarMenu();
while (opcion !== 5) {
    switch (opcion) {
        case 1: // Agregar persona
            var nuevaPersona = (0, pedirDatos_1.pedirDatosPersona)();
            miAgenda.agregarPersona(nuevaPersona);
            console.log("Persona agregada correctamente:");
            /* console.log(nuevaPersona);*/
            break;
        //case 2: // Buscar persona
        case 3:
            var dni = (0, pedirDatos_1.pedirDNI)();
            var personaEncontrada = miAgenda.buscarPersona(dni);
            personaEncontrada !== null ?
                console.log("Persona encontrada:", personaEncontrada) :
                console.log("Persona NO encontrada");
            break;
        case 4:
            var numeroPersonas = miAgenda.contarPersonas();
            console.log("Hay registradas : ", numeroPersonas, " personas");
            break;
        default:
            console.log("Opcion invalida. Por favor, intente de nuevo.");
            break;
    }
    opcion = mostrarMenu();
}
