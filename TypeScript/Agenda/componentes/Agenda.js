"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.personas = [];
    }
    Agenda.prototype.agregarPersona = function (persona) {
        this.personas.push(persona);
    };
    Agenda.prototype.eliminarPersona = function (persona) {
        var index = this.personas.indexOf(persona);
        if (index !== -1) {
            this.personas.splice(index, 1);
        }
    };
    Agenda.prototype.buscarPersona = function (dni) {
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
    return Agenda;
}());
exports.Agenda = Agenda;
