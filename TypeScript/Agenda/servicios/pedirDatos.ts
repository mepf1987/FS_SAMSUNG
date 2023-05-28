import { Direccion } from "../componentes/Direccion";
import { Mail } from "../componentes/Mail";
import { Telefono } from "../componentes/Telefono";
import { Persona } from "../componentes/Persona";
import * as readlineSync from 'readline-sync';

export function pedirDNI(persona?: Persona): string {

  let dni;
  while (dni == undefined) {
    persona != null ? console.log("DNI actual:" + persona.getDni()) : ""
    dni = readlineSync.question("Introduce el DNI:");
    dni == null ? (persona != null ? dni = persona.getDni() : "") : ""
  }
  return dni;
}

export function aniadirOEditarDireccion(persona?: Persona): Direccion[]{

  let direcciones: Direccion[];
  let accion;
  let numDirecciones = 0;

  if (persona != null) {
    console.log("Las direcciones registradas son:")
    console.log(persona.getDirecciones());
  }

  persona != null ? accion = readlineSync.question("Acciones a realizar: S - Sobreescribir alguna existente, A - Aniadir a lista actual, E - Empezar nueva lista ") : direcciones = [];
  persona != null && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];
  numDirecciones = parseInt(readlineSync.question("Numero de direcciones que quieres aniadir o editar:"))
  

  if (accion !== 'S') {
    while (direcciones.length === 0 || numDirecciones != 0) {

      let direccion = new Direccion(
        direcciones.length - 1,
        readlineSync.question("Introduce la calle:"),
        parseInt(readlineSync.question("Introduce el numero:")),
        readlineSync.question("Introduce el codigo postal:"),
        readlineSync.question("Introduce la poblacion:"),
        readlineSync.question("Introduce la provincia:"),
        parseInt(readlineSync.question("Introduce el piso:")),
        readlineSync.question("Introduce la letra:")
      );
      numDirecciones -= 1
      direcciones.push(direccion);
    }

  } else {

    while (numDirecciones != 0) {
      let direccionEditar=parseInt(readlineSync.question("Indica el id de la direccion a editar:"));
      console.log("Se va a modificar la direccion con id:" + direcciones[direccionEditar].getId())

      let calle;
      while (calle == undefined) {
        console.log("Calle actual:" + direcciones[direccionEditar].getNombreCalle())
        calle = readlineSync.question("Introduce la nueva calle:")
        calle == null ? (direcciones[direccionEditar].getNombreCalle() != null ? calle = direcciones[direccionEditar].getNombreCalle() : calle = undefined) : direcciones[direccionEditar].setNombreCalle(calle);
      }

      let numero;
      while (numero == undefined) {
        console.log("Numero actual:" + direcciones[direccionEditar].getNumero())
        numero = parseInt(readlineSync.question("Introduce el nuevo numero:"))
        numero == null ? (direcciones[direccionEditar].getNumero() != null ? calle = direcciones[direccionEditar].getNumero() : calle = undefined) : direcciones[direccionEditar].setNumero(numero);
      }

      let codigoPostal;
      while (codigoPostal == undefined) {
        console.log("Codigo postal actual:" + direcciones[direccionEditar].getCodigoPostal())
        codigoPostal = readlineSync.question("Introduce el nuevo codigo postal:")
        codigoPostal == null ? (direcciones[direccionEditar].getCodigoPostal() != null ? calle = direcciones[direccionEditar].getCodigoPostal() : calle = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
      }

      let poblacion;
      while (poblacion == undefined) {
        console.log("Poblacion actual:" + direcciones[direccionEditar].getPoblacion())
        poblacion = readlineSync.question("Introduce el nuevo poblacion:")
        poblacion == null ? (direcciones[direccionEditar].getPoblacion() != null ? calle = direcciones[direccionEditar].getPoblacion() : calle = undefined) : direcciones[direccionEditar].setPoblacion(codigoPostal);
      }

      let provincia;
      while (provincia == undefined) {
        console.log("Provincia actual:" + direcciones[direccionEditar].getProvincia())
        provincia = readlineSync.question("Introduce el nuevo provincia:")
        provincia == null ? (direcciones[direccionEditar].getProvincia() != null ? calle = direcciones[direccionEditar].getProvincia() : calle = undefined) : direcciones[direccionEditar].setProvincia(codigoPostal);
      }

      let piso;
      //while(piso==undefined){
      console.log("Piso actual:" + direcciones[direccionEditar].getPiso())
      piso = parseInt(readlineSync.question("Introduce el nuevo piso:"))
      piso == null ? (direcciones[direccionEditar].getPiso() != null ? calle = direcciones[direccionEditar].getPiso() : calle = undefined) : direcciones[direccionEditar].setPiso(piso);
      //}

      let letra;
      //while(letra==undefined){
      console.log("Letra actual:" + direcciones[direccionEditar].getLetra())
      letra = readlineSync.question("Introduce el nuevo letra:")
      letra == null ? (direcciones[direccionEditar].getLetra() != null ? calle = direcciones[direccionEditar].getLetra() : calle = undefined) : direcciones[direccionEditar].setLetra(letra);
      //}

      numDirecciones -= 1
    }
    

  }

  return direcciones;

}

export function pedirDatosPersona(persona?: Persona): Persona {

  //Nombre
  let nombre;
  while (nombre == undefined) {
    persona != null ? console.log("Nombre actual:" + persona.getNombre()) : ""
    nombre = readlineSync.question("Introduce el nombre:");
    nombre == null ? (persona != null ? nombre = persona.getNombre() : "") : ""
  }

  //Apellidos
  let apellidos;
  while (apellidos == undefined) {
    persona != null ? console.log("Apellidos actuales:" + persona.getApellidos()) : ""
    apellidos = readlineSync.question("Introduce los apellidos:");
    apellidos == null ? (persona != null ? apellidos = persona.getApellidos() : "") : ""
  }

  //Edad
  let edad;
  while (edad == undefined) {
    persona != null ? console.log("Edad actual:" + persona.getEdad()) : ""
    edad = parseInt(readlineSync.question("Introduce la edad:"));
    edad == null ? (persona != null ? edad = persona.getEdad() : "") : ""
  }

  //DNI
  let dni = pedirDNI();

  //CUMPLEANIOS
  let cumpleanios;
  while (cumpleanios == undefined) {
    persona != null ? console.log("Cumpleanios actual:" + persona.getCumpleanios()) : ""
    cumpleanios = new Date(readlineSync.question("Introduce la fecha de cumpleanios con el siguiente formato 'yyyy-mm-dd':"))
    cumpleanios == null ? (persona != null ? cumpleanios = persona.getCumpleanios() : "") : ""
  }


  //COLOR FAVORITO
  let colorFavorito;
  while (colorFavorito == undefined) {
    persona != null ? console.log("ColorFavorito actual:" + persona.getColorFavorito()) : ""
    colorFavorito = readlineSync.question("Introduce el color favorito:")
    colorFavorito == null ? (persona != null ? colorFavorito = persona.getColorFavorito() : "") : ""
  }

  //SEXO
  let sexo;
  while (sexo == undefined) {
    persona != null ? console.log("Sexo actual:" + persona.getSexo()) : ""
    sexo = readlineSync.question("Introduce el sexo (H:Hombre | M:Mujer):")
    sexo == null ? (persona != null ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
  }

  //DIRECCION
  let direcciones = aniadirOEditarDireccion(persona);
  
  //MAIL 
  let mail = new Mail(
    readlineSync.question("Introduce el tipo de correo electronico:"),
    readlineSync.question("Introduce el correo electronico:")
  );

  //TELEFONO  
  let telefono = new Telefono(
    readlineSync.question("Introduce el tipo de telefono:"),
    parseInt(readlineSync.question("Introduce el numero de telefono:"))
  );

  //NOTAS
  let notas = readlineSync.question("Introduce las notas:");

  return new Persona(
    nombre,
    dni,
    apellidos,
    edad,
    cumpleanios,
    colorFavorito,
    sexo,
    direcciones,
    [mail],
    [telefono],
    notas
  );
}