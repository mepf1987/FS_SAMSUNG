import { Direccion } from "../componentes/Direccion";
import { Mail, validarTipoEmail } from "../componentes/Mail";
import { Telefono, validarTipoTelefono, validarNumeroTelefono } from "../componentes/Telefono";
import { Persona } from "../componentes/Persona";
import * as readlineSync from 'readline-sync';

export function pedirDNI(persona?: Persona): string {

  let dni;
  while (dni == undefined) {
    persona != undefined ? console.log("DNI actual:" + persona.getDni()) : ""
    dni = readlineSync.question("Introduce el DNI:");
    dni == undefined ? (persona != undefined ? dni = persona.getDni() : "") : ""
  }
  return dni;
}

export function aniadirOEditarDireccion(persona?: Persona, accion?: string, indexMailEdit?: number, direccion?: Direccion): Direccion[] {

  let direcciones: Direccion[];
  let numDirecciones = 1;

  /*if (persona != undefined) {
    console.log("Las direcciones registradas son:")
    console.log(persona.getDirecciones());
  }*/

  if (accion === undefined) {
    persona != undefined ? accion = readlineSync.question("Acciones a realizar: S - Sobreescribir alguna existente, A - Aniadir a lista actual, E - Empezar nueva lista ") : direcciones = [];
  }
  persona != undefined && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];
  if (indexMailEdit === undefined) {
    numDirecciones = parseInt(readlineSync.question("Numero de direcciones que quieres aniadir o editar:"))
  }


  if (accion !== 'S') {
    while (direcciones.length === 0 || numDirecciones != 0) {

      let calle: string = aniadirOEditarTexto("Calle");
      let numero: number = aniadirOEditarNumericos("Numero");
      let codigoPostal: string = aniadirOEditarTexto("Codigo postal"); //LETRAS Y NUMEROS
      let poblacion: string = aniadirOEditarTexto("Poblacion");
      let provincia: string = aniadirOEditarTexto("Provincia");
      let piso: number | undefined = parseInt(readlineSync.question("Introduce el piso:"));
      if (piso != undefined && validarTextoDefinido(piso)) {
        piso = aniadirOEditarNumericos("Piso", piso, false)
      }
      let letra: string | undefined = readlineSync.question("Introduce la letra:");
      console.log(validarTextoDefinido(letra))
      if (letra != undefined && !validarTextoDefinido(letra)) {
        letra = aniadirOEditarTexto("Letra", letra, false)
      }
      letra != undefined ? aniadirOEditarTexto("Letra", letra) : "";

      let direccion = new Direccion(
        direcciones.length > 0 ? direcciones.length - 1 : 1,
        calle,
        numero,
        codigoPostal,
        poblacion,
        provincia,
        piso,
        letra
      );
      numDirecciones -= 1
      direcciones.push(direccion);
    }

  } else {

    if (direccion === undefined) {
      while (numDirecciones != 0) {
        let direccionEditar = parseInt(readlineSync.question("Indica el id de la direccion a editar:"));
        console.log("Se va a modificar la direccion con id:" + direcciones[direccionEditar].getId())

        direcciones[direccionEditar].setNombreCalle(aniadirOEditarTexto("Calle", direcciones[direccionEditar].getNombreCalle()));
        direcciones[direccionEditar].setNumero(aniadirOEditarNumericos("Numero", direcciones[direccionEditar].getNumero()));

        let codigoPostal: string | undefined;
        while (codigoPostal == undefined) {
          console.log("Codigo postal actual:" + direcciones[direccionEditar].getCodigoPostal())
          codigoPostal = readlineSync.question("Introduce el nuevo codigo postal:")
          codigoPostal == undefined ? (direcciones[direccionEditar].getCodigoPostal() != undefined ? codigoPostal = direcciones[direccionEditar].getCodigoPostal() : codigoPostal = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
        }

        direcciones[direccionEditar].setPoblacion(aniadirOEditarTexto("Poblacion", direcciones[direccionEditar].getPoblacion()));
        direcciones[direccionEditar].setProvincia(aniadirOEditarTexto("Provincia", direcciones[direccionEditar].getProvincia()));
        direcciones[direccionEditar].setPiso(aniadirOEditarNumericos("Piso", direcciones[direccionEditar].getPiso()));
        direcciones[direccionEditar].setLetra(aniadirOEditarTexto("Letra", direcciones[direccionEditar].getLetra()));


        let letra: string | undefined;
        //while(letra==undefined){
        console.log("Letra actual:" + direcciones[direccionEditar].getLetra())
        letra = readlineSync.question("Introduce el nuevo letra:")
        letra == undefined ? (direcciones[direccionEditar].getLetra() != undefined ? letra = direcciones[direccionEditar].getLetra() : letra = undefined) : direcciones[direccionEditar].setLetra(letra);
        //}

        numDirecciones -= 1
      }

    } else {

      if (persona !== undefined) {

        if (indexMailEdit === undefined) {

          indexMailEdit = parseInt(readlineSync.question("Introduce el index o posición del mail a editar:"));

        }

        let i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;

        direcciones[i] = direccion;

        persona.setDirecciones(direcciones);

      }
    }

  }

  return direcciones;

}

export function aniadirOEditarMail(isEdit: Boolean = false, indexMailEdit?: number, mail?: Mail, persona?: Persona): Mail[] {

  let mails: Mail[];
  let tipoMail;

  persona != undefined ? mails = persona.getMails() : mails = [];

  if (mail === undefined) {
    while (tipoMail === undefined) {
      tipoMail = readlineSync.question("Introduce el tipo de correo electronico (PERSONAL|EMPRESA):");
      tipoMail = validarTipoEmail(tipoMail);
    }

    mail = new Mail(
      tipoMail,
      readlineSync.question("Introduce el correo electronico:")
    );

  }

  if (isEdit && persona !== undefined) {
    if (indexMailEdit === undefined) {

      indexMailEdit = parseInt(readlineSync.question("Introduce el index o posición del mail a editar:"));

    }

    let i = indexMailEdit === 0 ? 0 : indexMailEdit - 1;

    mails[i].direccion = mail.direccion;
    mails[i].tipo = mail.tipo;

    persona.setMails(mails);

  } else {

    mails.push(mail);

  }

  return mails;

}

export function aniadirOEditarTelefono(isEdit: Boolean = false, indexTelefonoEdit?: number, telefono?: Telefono, persona?: Persona): Telefono[] {

  let telefonos: Telefono[] = [];
  let tipoTelefono, numeroTelefono;

  persona != undefined ? telefonos = persona.getTelefonos() : telefonos = [];

  if (telefono === undefined) {
    while (tipoTelefono === undefined) {
      tipoTelefono = readlineSync.question("Introduce el tipo de telefono (MOVIL|FIJO):");
      tipoTelefono = validarTipoTelefono(tipoTelefono);
    }

    while (numeroTelefono === undefined) {
      numeroTelefono = parseInt(readlineSync.question("Introduce el numero de telefono:"));
      //numeroTelefono=validarNumeroTelefono(numeroTelefono);
    }

    telefono = new Telefono(tipoTelefono, numeroTelefono);
  }


  if (isEdit && persona !== undefined) {
    if (indexTelefonoEdit === undefined) {

      indexTelefonoEdit = parseInt(readlineSync.question("Introduce el index o posición del telefono a editar:"));

    }
    let i = indexTelefonoEdit === 0 ? 0 : indexTelefonoEdit - 1;

    telefonos[i].numero = telefono.numero;
    telefonos[i].tipo = telefono.tipo;

    persona.setTelefonos(telefonos);

  } else {

    telefonos.push(telefono);

  }


  return telefonos;

}

function validarTextoDefinido(texto: any): Boolean {
  const regex = /^[a-zA-Z\s]+$/;
  let isValid = true;
  if (!regex.test(texto)) {
    isValid = false;

  }

  return isValid;
}

function aniadirOEditarTexto(atributo: string, value: string | undefined = undefined, isRequired: Boolean = true): string {

  while (value === undefined) {
    value != undefined ? console.log(atributo + " actual:" + value) : "";
    value = readlineSync.question("Introduce el " + atributo.toLocaleLowerCase() + " :");
    if (!validarTextoDefinido(value)) {
      value = undefined;
      if (isRequired) {
        console.log("Es un campo obligatorio y no puede ser númerico");
      } else {
        console.log("No puede ser númerico");

      }
    }
  }

  return value;
}

function aniadirOEditarNumericos(atributo: string, value: number | undefined = undefined, isRequired: Boolean = true): number {

  while (value === undefined) {
    value != undefined ? console.log(atributo + " actual:" + value) : "";
    value = parseInt(readlineSync.question("Introduce el " + atributo.toLocaleLowerCase() + " :"));
    if (validarTextoDefinido(value)) {
      value = undefined;
      if (isRequired) {
        console.log("Es un campo obligatorio y no puede ser texto");
      } else {
        console.log("No puede ser texto");

      }
    }
  }

  return value;
}

export function pedirDatosPersona(persona?: Persona): Persona {

  //Nombre
  let nombre: string = aniadirOEditarTexto("Nombre", persona?.getNombre());
  //Apellidos
  let apellidos: string = aniadirOEditarTexto("Apellidos", persona?.getApellidos());
  //Edad
  let edad: number = aniadirOEditarNumericos("Edad", persona?.getEdad());

  //DNI
  let dni: string | undefined = pedirDNI();

  //CUMPLEANIOS
  let cumpleanios: Date | undefined;
  while (cumpleanios == undefined) {
    persona != undefined ? console.log("Cumpleanios actual:" + persona.getCumpleanios()) : ""
    cumpleanios = new Date(readlineSync.question("Introduce la fecha de cumpleanios con el siguiente formato 'yyyy-mm-dd':"))
    cumpleanios == undefined ? (persona != undefined ? cumpleanios = persona.getCumpleanios() : "") : ""
  }

  //COLOR FAVORITO
  let colorFavorito: string = aniadirOEditarTexto("Color", persona?.getColorFavorito())

  //SEXO
  let sexo: string | undefined;
  while (sexo === undefined) {
    persona != undefined ? console.log("Sexo actual:" + persona.getSexo()) : ""
    sexo = readlineSync.question("Introduce el sexo (H:Hombre | M:Mujer):")
    sexo == undefined ? (persona != undefined ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
  }

  //DIRECCION
  let direcciones: Direccion[] = aniadirOEditarDireccion(persona);

  //MAIL 
  let mails: Mail[] = aniadirOEditarMail();

  //TELEFONO  
  let telefonos: Telefono[] = aniadirOEditarTelefono();

  //NOTAS
  let notas: string = readlineSync.question("Introduce las notas:");

  return new Persona(
    nombre,
    apellidos,
    dni,
    edad,
    cumpleanios,
    colorFavorito,
    sexo,
    direcciones,
    mails,
    telefonos,
    notas
  );
}