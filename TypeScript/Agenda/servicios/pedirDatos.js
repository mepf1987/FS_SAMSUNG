"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirDatosPersona = exports.aniadirOEditarTelefono = exports.aniadirOEditarMail = exports.aniadirOEditarDireccion = exports.pedirDNI = void 0;
var Direccion_1 = require("../componentes/Direccion");
var Mail_1 = require("../componentes/Mail");
var Telefono_1 = require("../componentes/Telefono");
var Persona_1 = require("../componentes/Persona");
var readlineSync = require("readline-sync");
function pedirDNI(persona) {
    var dni;
    while (dni == undefined) {
        persona != undefined ? console.log("DNI actual:" + persona.getDni()) : "";
        dni = readlineSync.question("Introduce el DNI:");
        dni == undefined ? (persona != undefined ? dni = persona.getDni() : "") : "";
    }
    return dni;
}
exports.pedirDNI = pedirDNI;
function aniadirOEditarDireccion(persona, accion, indexMailEdit, direccion) {
    var direcciones;
    var numDirecciones = 1;
    /*if (persona != undefined) {
      console.log("Las direcciones registradas son:")
      console.log(persona.getDirecciones());
    }*/
    if (accion === undefined) {
        persona != undefined ? accion = readlineSync.question("Acciones a realizar: S - Sobreescribir alguna existente, A - Aniadir a lista actual, E - Empezar nueva lista ") : direcciones = [];
    }
    persona != undefined && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];
    if (indexMailEdit === undefined) {
        numDirecciones = parseInt(readlineSync.question("Numero de direcciones que quieres aniadir o editar:"));
    }
    if (accion !== 'S') {
        while (direcciones.length === 0 || numDirecciones != 0) {
            var calle = aniadirOEditarTexto("Calle");
            var numero = aniadirOEditarNumericos("Numero");
            var codigoPostal = aniadirOEditarTexto("Codigo postal"); //LETRAS Y NUMEROS
            var poblacion = aniadirOEditarTexto("Poblacion");
            var provincia = aniadirOEditarTexto("Provincia");
            var piso = parseInt(readlineSync.question("Introduce el piso:"));
            if (piso != undefined && validarTextoDefinido(piso)) {
                piso = aniadirOEditarNumericos("Piso", piso, false);
            }
            var letra = readlineSync.question("Introduce la letra:");
            console.log(validarTextoDefinido(letra));
            if (letra != undefined && !validarTextoDefinido(letra)) {
                letra = aniadirOEditarTexto("Letra", letra, false);
            }
            letra != undefined ? aniadirOEditarTexto("Letra", letra) : "";
            var direccion_1 = new Direccion_1.Direccion(direcciones.length > 0 ? direcciones.length - 1 : 1, calle, numero, codigoPostal, poblacion, provincia, piso, letra);
            numDirecciones -= 1;
            direcciones.push(direccion_1);
        }
    }
    else {
        if (direccion === undefined) {
            while (numDirecciones != 0) {
                var direccionEditar = parseInt(readlineSync.question("Indica el id de la direccion a editar:"));
                console.log("Se va a modificar la direccion con id:" + direcciones[direccionEditar].getId());
                direcciones[direccionEditar].setNombreCalle(aniadirOEditarTexto("Calle", direcciones[direccionEditar].getNombreCalle()));
                direcciones[direccionEditar].setNumero(aniadirOEditarNumericos("Numero", direcciones[direccionEditar].getNumero()));
                var codigoPostal = void 0;
                while (codigoPostal == undefined) {
                    console.log("Codigo postal actual:" + direcciones[direccionEditar].getCodigoPostal());
                    codigoPostal = readlineSync.question("Introduce el nuevo codigo postal:");
                    codigoPostal == undefined ? (direcciones[direccionEditar].getCodigoPostal() != undefined ? codigoPostal = direcciones[direccionEditar].getCodigoPostal() : codigoPostal = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
                }
                direcciones[direccionEditar].setPoblacion(aniadirOEditarTexto("Poblacion", direcciones[direccionEditar].getPoblacion()));
                direcciones[direccionEditar].setProvincia(aniadirOEditarTexto("Provincia", direcciones[direccionEditar].getProvincia()));
                direcciones[direccionEditar].setPiso(aniadirOEditarNumericos("Piso", direcciones[direccionEditar].getPiso()));
                direcciones[direccionEditar].setLetra(aniadirOEditarTexto("Letra", direcciones[direccionEditar].getLetra()));
                var letra = void 0;
                //while(letra==undefined){
                console.log("Letra actual:" + direcciones[direccionEditar].getLetra());
                letra = readlineSync.question("Introduce el nuevo letra:");
                letra == undefined ? (direcciones[direccionEditar].getLetra() != undefined ? letra = direcciones[direccionEditar].getLetra() : letra = undefined) : direcciones[direccionEditar].setLetra(letra);
                //}
                numDirecciones -= 1;
            }
        }
        else {
            if (persona !== undefined) {
                if (indexMailEdit === undefined) {
                    indexMailEdit = parseInt(readlineSync.question("Introduce el index o posición del mail a editar:"));
                }
                var i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;
                direcciones[i] = direccion;
                persona.setDirecciones(direcciones);
            }
        }
    }
    return direcciones;
}
exports.aniadirOEditarDireccion = aniadirOEditarDireccion;
function aniadirOEditarMail(isEdit, indexMailEdit, mail, persona) {
    if (isEdit === void 0) { isEdit = false; }
    var mails;
    var tipoMail;
    persona != undefined ? mails = persona.getMails() : mails = [];
    if (mail === undefined) {
        while (tipoMail === undefined) {
            tipoMail = readlineSync.question("Introduce el tipo de correo electronico (PERSONAL|EMPRESA):");
            tipoMail = (0, Mail_1.validarTipoEmail)(tipoMail);
        }
        mail = new Mail_1.Mail(tipoMail, readlineSync.question("Introduce el correo electronico:"));
    }
    if (isEdit && persona !== undefined) {
        if (indexMailEdit === undefined) {
            indexMailEdit = parseInt(readlineSync.question("Introduce el index o posición del mail a editar:"));
        }
        var i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;
        mails[i].direccion = mail.direccion;
        mails[i].tipo = mail.tipo;
        persona.setMails(mails);
    }
    else {
        mails.push(mail);
    }
    return mails;
}
exports.aniadirOEditarMail = aniadirOEditarMail;
function aniadirOEditarTelefono(isEdit, indexTelefonoEdit, telefono, persona) {
    if (isEdit === void 0) { isEdit = false; }
    var telefonos = [];
    var tipoTelefono, numeroTelefono;
    persona != undefined ? telefonos = persona.getTelefonos() : telefonos = [];
    if (telefono === undefined) {
        while (tipoTelefono === undefined) {
            tipoTelefono = readlineSync.question("Introduce el tipo de telefono (MOVIL|FIJO):");
            tipoTelefono = (0, Telefono_1.validarTipoTelefono)(tipoTelefono);
        }
        while (numeroTelefono === undefined) {
            numeroTelefono = parseInt(readlineSync.question("Introduce el numero de telefono:"));
            //numeroTelefono=validarNumeroTelefono(numeroTelefono);
        }
        telefono = new Telefono_1.Telefono(tipoTelefono, numeroTelefono);
    }
    if (isEdit && persona !== undefined) {
        if (indexTelefonoEdit === undefined) {
            indexTelefonoEdit = parseInt(readlineSync.question("Introduce el index o posición del telefono a editar:"));
        }
        var i = indexTelefonoEdit === 0 ? 0 : indexTelefonoEdit - 1;
        telefonos[i].numero = telefono.numero;
        telefonos[i].tipo = telefono.tipo;
        persona.setTelefonos(telefonos);
    }
    else {
        telefonos.push(telefono);
    }
    return telefonos;
}
exports.aniadirOEditarTelefono = aniadirOEditarTelefono;
function validarTextoDefinido(texto) {
    var regex = /^[a-zA-Z\s]+$/;
    var isValid = true;
    if (!regex.test(texto)) {
        isValid = false;
    }
    return isValid;
}
function aniadirOEditarTexto(atributo, value, isRequired) {
    if (value === void 0) { value = undefined; }
    if (isRequired === void 0) { isRequired = true; }
    while (value === undefined) {
        value != undefined ? console.log(atributo + " actual:" + value) : "";
        value = readlineSync.question("Introduce el " + atributo.toLocaleLowerCase() + " :");
        if (!validarTextoDefinido(value)) {
            value = undefined;
            if (isRequired) {
                console.log("Es un campo obligatorio y no puede ser númerico");
            }
            else {
                console.log("No puede ser númerico");
            }
        }
    }
    return value;
}
function aniadirOEditarNumericos(atributo, value, isRequired) {
    if (value === void 0) { value = undefined; }
    if (isRequired === void 0) { isRequired = true; }
    while (value === undefined) {
        value != undefined ? console.log(atributo + " actual:" + value) : "";
        value = parseInt(readlineSync.question("Introduce el " + atributo.toLocaleLowerCase() + " :"));
        if (validarTextoDefinido(value)) {
            value = undefined;
            if (isRequired) {
                console.log("Es un campo obligatorio y no puede ser texto");
            }
            else {
                console.log("No puede ser texto");
            }
        }
    }
    return value;
}
function pedirDatosPersona(persona) {
    //Nombre
    var nombre = aniadirOEditarTexto("Nombre", persona === null || persona === void 0 ? void 0 : persona.getNombre());
    //Apellidos
    var apellidos = aniadirOEditarTexto("Apellidos", persona === null || persona === void 0 ? void 0 : persona.getApellidos());
    //Edad
    var edad = aniadirOEditarNumericos("Edad", persona === null || persona === void 0 ? void 0 : persona.getEdad());
    //DNI
    var dni = pedirDNI();
    //CUMPLEANIOS
    var cumpleanios;
    while (cumpleanios == undefined) {
        persona != undefined ? console.log("Cumpleanios actual:" + persona.getCumpleanios()) : "";
        cumpleanios = new Date(readlineSync.question("Introduce la fecha de cumpleanios con el siguiente formato 'yyyy-mm-dd':"));
        cumpleanios == undefined ? (persona != undefined ? cumpleanios = persona.getCumpleanios() : "") : "";
    }
    //COLOR FAVORITO
    var colorFavorito = aniadirOEditarTexto("Color", persona === null || persona === void 0 ? void 0 : persona.getColorFavorito());
    //SEXO
    var sexo;
    while (sexo === undefined) {
        persona != undefined ? console.log("Sexo actual:" + persona.getSexo()) : "";
        sexo = readlineSync.question("Introduce el sexo (H:Hombre | M:Mujer):");
        sexo == undefined ? (persona != undefined ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
    }
    //DIRECCION
    var direcciones = aniadirOEditarDireccion(persona);
    //MAIL 
    var mails = aniadirOEditarMail();
    //TELEFONO  
    var telefonos = aniadirOEditarTelefono();
    //NOTAS
    var notas = readlineSync.question("Introduce las notas:");
    return new Persona_1.Persona(nombre, apellidos, dni, edad, cumpleanios, colorFavorito, sexo, direcciones, mails, telefonos, notas);
}
exports.pedirDatosPersona = pedirDatosPersona;
