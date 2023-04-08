"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    /* private cumpleanos: Date;
     private colorFavorito: string;
     private sexo: string;
     private direcciones: Direccion[];
     private mails: Mail[];
     private telefonos: Telefono[];
     private notas: string;*/
    function Persona(nombre, dni /*, apellidos: string, edad: number, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string*/) {
        this.nombre = nombre;
        this.dni = dni;
        /* this.apellidos = apellidos;
         this.edad = edad;
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
    /* public getApellidos(): string {
       return this.apellidos;
     }
   
     public setApellidos(apellidos: string): void {
       this.apellidos = apellidos;
     }
   
     public getEdad(): number {
       return this.edad;
     }
   
     public setEdad(edad: number): void {
       this.edad = edad;
     }*/
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    return Persona;
}());
exports.Persona = Persona;
