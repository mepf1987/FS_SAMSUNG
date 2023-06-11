"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var pedirDatos_1 = require("../servicios/pedirDatos");
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.personas = [];
    }
    Agenda.prototype.agregarPersona = function (nuevaPersona) {
        if (nuevaPersona === void 0) { nuevaPersona = undefined; }
        if (nuevaPersona === undefined) {
            nuevaPersona = (0, pedirDatos_1.pedirDatosPersona)();
        }
        this.personas.push(nuevaPersona);
    };
    Agenda.prototype.eliminarPersona = function (persona) {
        var index = this.personas.indexOf(persona);
        if (index !== -1) {
            this.personas.splice(index, 1);
        }
    };
    Agenda.prototype.buscarPersona = function (dni) {
        if (dni === void 0) { dni = undefined; }
        if (dni === undefined) {
            dni = (0, pedirDatos_1.pedirDNI)();
        }
        var personaEncontrada = undefined;
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
        console.log(JSON.stringify(this.personas));
    };
    Agenda.prototype.editarPersona = function (persona, editarCompleta) {
        if (editarCompleta === void 0) { editarCompleta = false; }
        var personaAEditar = persona;
        if (personaAEditar === undefined) {
            personaAEditar = this.buscarPersona();
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
