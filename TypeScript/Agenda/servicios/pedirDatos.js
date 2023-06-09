"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirDatosPersona = exports.aniadirOEditarDireccion = exports.pedirDNI = void 0;
var Direccion_1 = require("../componentes/Direccion");
var Mail_1 = require("../componentes/Mail");
var Telefono_1 = require("../componentes/Telefono");
var Persona_1 = require("../componentes/Persona");
var readlineSync = require("readline-sync");
function pedirDNI(persona) {
    var dni;
    while (dni == undefined) {
        persona != null ? console.log("DNI actual:" + persona.getDni()) : "";
        dni = readlineSync.question("Introduce el DNI:");
        dni == null ? (persona != null ? dni = persona.getDni() : "") : "";
    }
    return dni;
}
exports.pedirDNI = pedirDNI;
function aniadirOEditarDireccion(persona) {
    var direcciones;
    var accion;
    var numDirecciones = 0;
    if (persona != null) {
        console.log("Las direcciones registradas son:");
        console.log(persona.getDirecciones());
    }
    persona != null ? accion = readlineSync.question("Acciones a realizar: S - Sobreescribir alguna existente, A - Aniadir a lista actual, E - Empezar nueva lista ") : direcciones = [];
    persona != null && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];
    numDirecciones = parseInt(readlineSync.question("Numero de direcciones que quieres aniadir o editar:"));
    if (accion !== 'S') {
        while (direcciones.length === 0 || numDirecciones != 0) {
            var direccion = new Direccion_1.Direccion(direcciones.length - 1, readlineSync.question("Introduce la calle:"), parseInt(readlineSync.question("Introduce el numero:")), readlineSync.question("Introduce el codigo postal:"), readlineSync.question("Introduce la poblacion:"), readlineSync.question("Introduce la provincia:"), parseInt(readlineSync.question("Introduce el piso:")), readlineSync.question("Introduce la letra:"));
            numDirecciones -= 1;
            direcciones.push(direccion);
        }
    }
    else {
        while (numDirecciones != 0) {
            var direccionEditar = parseInt(readlineSync.question("Indica el id de la direccion a editar:"));
            console.log("Se va a modificar la direccion con id:" + direcciones[direccionEditar].getId());
            var calle = void 0;
            while (calle == undefined) {
                console.log("Calle actual:" + direcciones[direccionEditar].getNombreCalle());
                calle = readlineSync.question("Introduce la nueva calle:");
                calle == null ? (direcciones[direccionEditar].getNombreCalle() != null ? calle = direcciones[direccionEditar].getNombreCalle() : calle = undefined) : direcciones[direccionEditar].setNombreCalle(calle);
            }
            var numero = void 0;
            while (numero == undefined) {
                console.log("Numero actual:" + direcciones[direccionEditar].getNumero());
                numero = parseInt(readlineSync.question("Introduce el nuevo numero:"));
                numero == null ? (direcciones[direccionEditar].getNumero() != null ? calle = direcciones[direccionEditar].getNumero() : calle = undefined) : direcciones[direccionEditar].setNumero(numero);
            }
            var codigoPostal = void 0;
            while (codigoPostal == undefined) {
                console.log("Codigo postal actual:" + direcciones[direccionEditar].getCodigoPostal());
                codigoPostal = readlineSync.question("Introduce el nuevo codigo postal:");
                codigoPostal == null ? (direcciones[direccionEditar].getCodigoPostal() != null ? calle = direcciones[direccionEditar].getCodigoPostal() : calle = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
            }
            var poblacion = void 0;
            while (poblacion == undefined) {
                console.log("Poblacion actual:" + direcciones[direccionEditar].getPoblacion());
                poblacion = readlineSync.question("Introduce el nuevo poblacion:");
                poblacion == null ? (direcciones[direccionEditar].getPoblacion() != null ? calle = direcciones[direccionEditar].getPoblacion() : calle = undefined) : direcciones[direccionEditar].setPoblacion(codigoPostal);
            }
            var provincia = void 0;
            while (provincia == undefined) {
                console.log("Provincia actual:" + direcciones[direccionEditar].getProvincia());
                provincia = readlineSync.question("Introduce el nuevo provincia:");
                provincia == null ? (direcciones[direccionEditar].getProvincia() != null ? calle = direcciones[direccionEditar].getProvincia() : calle = undefined) : direcciones[direccionEditar].setProvincia(codigoPostal);
            }
            var piso = void 0;
            //while(piso==undefined){
            console.log("Piso actual:" + direcciones[direccionEditar].getPiso());
            piso = parseInt(readlineSync.question("Introduce el nuevo piso:"));
            piso == null ? (direcciones[direccionEditar].getPiso() != null ? calle = direcciones[direccionEditar].getPiso() : calle = undefined) : direcciones[direccionEditar].setPiso(piso);
            //}
            var letra = void 0;
            //while(letra==undefined){
            console.log("Letra actual:" + direcciones[direccionEditar].getLetra());
            letra = readlineSync.question("Introduce el nuevo letra:");
            letra == null ? (direcciones[direccionEditar].getLetra() != null ? calle = direcciones[direccionEditar].getLetra() : calle = undefined) : direcciones[direccionEditar].setLetra(letra);
            //}
            numDirecciones -= 1;
        }
    }
    return direcciones;
}
exports.aniadirOEditarDireccion = aniadirOEditarDireccion;
function pedirDatosPersona(persona) {
    //Nombre
    var nombre;
    while (nombre == undefined) {
        persona != null ? console.log("Nombre actual:" + persona.getNombre()) : "";
        nombre = readlineSync.question("Introduce el nombre:");
        nombre == null ? (persona != null ? nombre = persona.getNombre() : "") : "";
    }
    //Apellidos
    var apellidos;
    while (apellidos == undefined) {
        persona != null ? console.log("Apellidos actuales:" + persona.getApellidos()) : "";
        apellidos = readlineSync.question("Introduce los apellidos:");
        apellidos == null ? (persona != null ? apellidos = persona.getApellidos() : "") : "";
    }
    //Edad
    var edad;
    while (edad == undefined) {
        persona != null ? console.log("Edad actual:" + persona.getEdad()) : "";
        edad = parseInt(readlineSync.question("Introduce la edad:"));
        edad == null ? (persona != null ? edad = persona.getEdad() : "") : "";
    }
    //DNI
    var dni = pedirDNI();
    //CUMPLEANIOS
    var cumpleanios;
    while (cumpleanios == undefined) {
        persona != null ? console.log("Cumpleanios actual:" + persona.getCumpleanios()) : "";
        cumpleanios = new Date(readlineSync.question("Introduce la fecha de cumpleanios con el siguiente formato 'yyyy-mm-dd':"));
        cumpleanios == null ? (persona != null ? cumpleanios = persona.getCumpleanios() : "") : "";
    }
    //COLOR FAVORITO
    var colorFavorito;
    while (colorFavorito == undefined) {
        persona != null ? console.log("ColorFavorito actual:" + persona.getColorFavorito()) : "";
        colorFavorito = readlineSync.question("Introduce el color favorito:");
        colorFavorito == null ? (persona != null ? colorFavorito = persona.getColorFavorito() : "") : "";
    }
    //SEXO
    var sexo;
    while (sexo === undefined) {
        persona != null ? console.log("Sexo actual:" + persona.getSexo()) : "";
        sexo = readlineSync.question("Introduce el sexo (H:Hombre | M:Mujer):");
        sexo == null ? (persona != null ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
    }
    //DIRECCION
    var direcciones = aniadirOEditarDireccion(persona);
    //MAIL 
    var mail = new Mail_1.Mail(readlineSync.question("Introduce el tipo de correo electronico:"), readlineSync.question("Introduce el correo electronico:"));
    //TELEFONO  
    var tipoTelefono, numeroTelefono;
    while (tipoTelefono === undefined) {
        tipoTelefono = readlineSync.question("Introduce el tipo de telefono (MOVIL|FIJO):");
        tipoTelefono = (0, Telefono_1.validarTipoTelefono)(tipoTelefono);
    }
    while (numeroTelefono === undefined) {
        numeroTelefono = parseInt(readlineSync.question("Introduce el numero de telefono:"));
        numeroTelefono = (0, Telefono_1.validarNumeroTelefono)(numeroTelefono);
    }
    var telefono = new Telefono_1.Telefono(tipoTelefono, numeroTelefono);
    //NOTAS
    var notas = readlineSync.question("Introduce las notas:");
    return new Persona_1.Persona(nombre, dni, apellidos, edad, cumpleanios, colorFavorito, sexo, direcciones, [mail], [telefono], notas);
}
exports.pedirDatosPersona = pedirDatosPersona;
