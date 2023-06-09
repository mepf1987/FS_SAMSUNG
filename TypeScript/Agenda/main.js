"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agenda_1 = require("./componentes/Agenda");
var readlineSync = require("readline-sync");
// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu() {
    console.log("Menu:");
    console.log("1. Agregar persona");
    console.log("2. Buscar persona");
    console.log("3. Editar persona");
    console.log("4. Cantidad de personas registradas");
    console.log("5. Salir");
    var opcion = readlineSync.questionInt("Ingrese una opcion: ");
    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        console.log("Opción inválida, por favor ingrese una opcion válida.");
        return null;
    }
    return opcion;
}
function preCargaPersonas() {
}
function editarDatosPersonas() {
}
// Creamos una instancia de la agenda
var miAgenda = new Agenda_1.Agenda();
// Pre-cargar 3 personas
preCargaPersonas();
editarDatosPersonas();
// Mostramos el menú y procesamos la opción del usuario
var opcion = mostrarMenu();
while (opcion !== 5) {
    switch (opcion) {
        case 1: // Agregar persona
            miAgenda.agregarPersona();
            console.log("Persona agregada correctamente:");
            break;
        case 2: // Buscar persona
            var personaEncontrada = miAgenda.buscarPersona();
            personaEncontrada !== null ? console.log("Persona encontrada:", personaEncontrada) : console.log("Persona NO encontrada");
            break;
        case 3: // Editar persona
            var personaEncontrada = miAgenda.buscarPersona();
            personaEncontrada !== undefined ? miAgenda.editarPersona(personaEncontrada) : console.log("Persona NO encontrada");
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
