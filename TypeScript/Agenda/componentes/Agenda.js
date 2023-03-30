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
        return this.personas.find(function (persona) { return persona.getDni() === dni; });
    };
    Agenda.prototype.mostrarTodas = function () {
        console.log(this.personas);
    };
    Agenda.prototype.editarPersona = function (dni, datosActualizados) {
        var persona = this.buscarPersona(dni);
        if (persona) {
            Object.assign(persona, datosActualizados);
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
