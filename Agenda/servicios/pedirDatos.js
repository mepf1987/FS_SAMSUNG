"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirDatosPersona = void 0;
var Direccion_1 = require("../componentes/Direccion");
var Mail_1 = require("../componentes/Mail");
var Telefono_1 = require("../componentes/Telefono");
var Persona_1 = require("../componentes/Persona");
//import { prompt } from "prompt-sync";
function pedirDatosPersona() {
    var nombre = prompt("Introduce el nombre:");
    var apellidos = prompt("Introduce los apellidos:");
    var edad = parseInt(prompt("Introduce la edad:"));
    var dni = prompt("Introduce el DNI:");
    var cumpleanos = prompt("Introduce la fecha de cumpleaños:");
    var colorFavorito = prompt("Introduce el color favorito:");
    var sexo = prompt("Introduce el sexo:");
    var direccion = new Direccion_1.Direccion(prompt("Introduce la calle:"), parseInt(prompt("Introduce el número:")), parseInt(prompt("Introduce el piso:")), prompt("Introduce la letra:"), prompt("Introduce el código postal:"), prompt("Introduce la población:"), prompt("Introduce la provincia:"));
    var telefono = new Telefono_1.Telefono(prompt("Introduce el tipo de teléfono:"), prompt("Introduce el número de teléfono:"));
    var mail = new Mail_1.Mail(prompt("Introduce el correo electrónico:"));
    var notas = prompt("Introduce las notas:");
    return new Persona_1.Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direccion, [telefono], [mail], notas);
}
exports.pedirDatosPersona = pedirDatosPersona;
