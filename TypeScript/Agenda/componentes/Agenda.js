"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var pedirDatos_1 = require("../servicios/pedirDatos");
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.personas = [];
    }
    Agenda.prototype.agregarPersona = function () {
        var nuevaPersona = (0, pedirDatos_1.pedirDatosPersona)();
        this.personas.push(nuevaPersona);
    };
    Agenda.prototype.eliminarPersona = function (persona) {
        var index = this.personas.indexOf(persona);
        if (index !== -1) {
            this.personas.splice(index, 1);
        }
    };
    Agenda.prototype.buscarPersona = function () {
        var dni = (0, pedirDatos_1.pedirDNI)();
        var personaEncontrada = null;
        this.personas.forEach(function (persona) {
            if (persona.getDni() === dni) {
                personaEncontrada = persona;
            }
        });
        return personaEncontrada;
    };
    Agenda.prototype.contarPersonas = function () {
        return this.personas.length;
    };
    Agenda.prototype.mostrarTodas = function () {
        console.log(this.personas);
    };
    Agenda.prototype.editarPersona = function (persona) {
        (0, pedirDatos_1.pedirDatosPersona)(persona);
    };
    return Agenda;
}());
exports.Agenda = Agenda;
