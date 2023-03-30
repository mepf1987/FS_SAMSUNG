"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(nombreCalle, numero, codigoPostal, poblacion, provincia, piso, letra) {
        this.nombreCalle = nombreCalle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
        this.piso = piso;
        this.letra = letra;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
