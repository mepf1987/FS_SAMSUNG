"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agenda_1 = require("./componentes/Agenda");
var Direccion_1 = require("./componentes/Direccion");
var Persona_1 = require("./componentes/Persona");
var Mail_1 = require("./componentes/Mail");
var Telefono_1 = require("./componentes/Telefono");
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
// Función para escoger el parametro a editar
function escogerParametroAEditar() {
    console.log("¿Que parametro deseas editar?");
    console.log("1. Email");
    console.log("2. Telefono");
    console.log("3. Dirección");
    //console.log("4. Otro");
    console.log("5. Salir");
    var opcion = readlineSync.questionInt("Ingrese una opcion: ");
    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
        console.log("Opción inválida, por favor ingrese una opcion válida.");
        return undefined;
    }
    return opcion;
}
function mostrarPersonas() {
    miAgenda.mostrarTodas();
}
function preCargaPersonas() {
    // DATOS PERSONA 1
    var direccion1Persona1 = new Direccion_1.Direccion(1, "Dr.Corbal", 10, "36207", "Vigo", "Pontevedra");
    var mail1Persona1 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "anaP93@mail.com");
    var telefono1Persona1 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 666777666);
    var persona1 = new Persona_1.Persona("Ana", "Pardo", "95287790D", 30, new Date("1993-06-07"), "Verde", "M", [direccion1Persona1], [mail1Persona1], [telefono1Persona1], "Esta es la persona 1");
    miAgenda.agregarPersona(persona1);
    // DATOS PERSONA 2
    var direccion1Persona2 = new Direccion_1.Direccion(2, "Calle Alarcon", 35, "33204", "Gijon", "Asturias");
    var mail1Persona2 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "milaPNavas@mail.com");
    var mail2Persona2 = new Mail_1.Mail(Mail_1.EmailType.EMPRESA, "PNavas@mail.com");
    var telefono1Persona2 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 677677677);
    var persona2 = new Persona_1.Persona("Milagros", "Prado Navas", "12407125M", 51, new Date("1972-03-17"), "Rosa", "M", [direccion1Persona2], [mail1Persona2, mail2Persona2], [telefono1Persona2], "Esta es la persona 2");
    miAgenda.agregarPersona(persona2);
    // DATOS PERSONA 3
    var direccion1Persona3 = new Direccion_1.Direccion(3, "Calle Alcalde Jesus Prieto", 5, "28907", "Getafe", "Madrid");
    var mail1Persona3 = new Mail_1.Mail(Mail_1.EmailType.PERSONAL, "lulo@mail.com");
    var telefono1Persona3 = new Telefono_1.Telefono(Telefono_1.PhoneType.MOVIL, 613654632);
    var persona3 = new Persona_1.Persona("Luis", "Lopez", "81754026C", 40, new Date("1983-03-17"), "Amarillo", "H", [direccion1Persona3], [mail1Persona3], [telefono1Persona3], "Esta es la persona 3");
    miAgenda.agregarPersona(persona3);
}
function editarDatosPersonas() {
    // 
}
// Creamos una instancia de la agenda
var miAgenda = new Agenda_1.Agenda();
// Pre-cargar 3 personas
preCargaPersonas();
console.log("*** Personas precargadas ***");
mostrarPersonas();
editarDatosPersonas();
console.log("*** Personas editadas ***");
mostrarPersonas();
var verMenu = readlineSync.question("Desea ver el menu de opciones (S|N):");
if (verMenu === 'S') {
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
                var paramToEdit = escogerParametroAEditar();
                paramToEdit !== undefined ? miAgenda.editarPersona(paramToEdit) : console.log("Persona NO encontrada");
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
}
