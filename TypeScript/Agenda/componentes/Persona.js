"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    /*private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    private notas: string;*/
    function Persona(nombre /*, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string*/) {
        this.nombre = nombre;
        /* this.apellidos = apellidos;
         this.edad = edad;
         this.dni = dni;
         this.cumpleanos = cumpleanos;
         this.colorFavorito = colorFavorito;
         this.sexo = sexo;
         this.direcciones = direcciones;
         this.mails = mails;
         this.telefonos = telefonos;
         this.notas = notas;*/
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Persona;
}());
exports.Persona = Persona;
