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
    /*public buscarPersona(dni: string): Persona | undefined {
      return this.personas.find((persona) => persona.getDni() === dni);
    }*/
    Agenda.prototype.mostrarTodas = function () {
        console.log(this.personas);
    };
    return Agenda;
}());
exports.Agenda = Agenda;
