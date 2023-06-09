import { Direccion } from "../componentes/Direccion";
import { Mail } from "../componentes/Mail";
import { Telefono, validarTipoTelefono, validarNumeroTelefono} from "../componentes/Telefono";
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

export function aniadirOEditarDireccion(persona?: Persona): Direccion[]{

  let direcciones: Direccion[];
  let accion;
  let numDirecciones = 1;

  if (persona != undefined) {
    console.log("Las direcciones registradas son:")
    console.log(persona.getDirecciones());
  }

  persona != undefined ? accion = readlineSync.question("Acciones a realizar: S - Sobreescribir alguna existente, A - Aniadir a lista actual, E - Empezar nueva lista ") : direcciones = [];
  persona != undefined && accion !== 'E' ? direcciones = persona.getDirecciones() : direcciones = [];
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

      let calle : string | undefined ;
      while (calle == undefined) {
        console.log("Calle actual:" + direcciones[direccionEditar].getNombreCalle())
        calle = readlineSync.question("Introduce la nueva calle:")
        calle == undefined ? (direcciones[direccionEditar].getNombreCalle() != undefined ? calle = direcciones[direccionEditar].getNombreCalle() : calle = undefined) : direcciones[direccionEditar].setNombreCalle(calle);
      }

      let numero  : number | undefined;
      while (numero == undefined) {
        console.log("Numero actual:" + direcciones[direccionEditar].getNumero())
        numero = parseInt(readlineSync.question("Introduce el nuevo numero:"))
        numero == undefined ? (direcciones[direccionEditar].getNumero() != undefined? numero = direcciones[direccionEditar].getNumero() : numero = undefined) : direcciones[direccionEditar].setNumero(numero);
      }

      let codigoPostal  : string | undefined;
      while (codigoPostal == undefined) {
        console.log("Codigo postal actual:" + direcciones[direccionEditar].getCodigoPostal())
        codigoPostal = readlineSync.question("Introduce el nuevo codigo postal:")
        codigoPostal == undefined ? (direcciones[direccionEditar].getCodigoPostal() != undefined ? codigoPostal = direcciones[direccionEditar].getCodigoPostal() : codigoPostal = undefined) : direcciones[direccionEditar].setCodigoPostal(codigoPostal);
      }

      let poblacion  : string | undefined;
      while (poblacion == undefined) {
        console.log("Poblacion actual:" + direcciones[direccionEditar].getPoblacion())
        poblacion = readlineSync.question("Introduce el nuevo poblacion:")
        poblacion == undefined ? (direcciones[direccionEditar].getPoblacion() != undefined ? poblacion = direcciones[direccionEditar].getPoblacion() : poblacion = undefined) : direcciones[direccionEditar].setPoblacion(poblacion);
      }

      let provincia  : string | undefined;
      while (provincia == undefined) {
        console.log("Provincia actual:" + direcciones[direccionEditar].getProvincia())
        provincia = readlineSync.question("Introduce el nuevo provincia:")
        provincia == undefined ? (direcciones[direccionEditar].getProvincia() != undefined ? provincia = direcciones[direccionEditar].getProvincia() : provincia = undefined) : direcciones[direccionEditar].setProvincia(provincia);
      }

      let piso;
      //while(piso==undefined){
      console.log("Piso actual:" + direcciones[direccionEditar].getPiso())
      piso = parseInt(readlineSync.question("Introduce el nuevo piso:"))
      piso == undefined ? (direcciones[direccionEditar].getPiso() != undefined ? piso = direcciones[direccionEditar].getPiso() : piso = undefined) : direcciones[direccionEditar].setPiso(piso);
      //}

      let letra : string | undefined;
      //while(letra==undefined){
      console.log("Letra actual:" + direcciones[direccionEditar].getLetra())
      letra = readlineSync.question("Introduce el nuevo letra:")
      letra == undefined ? (direcciones[direccionEditar].getLetra() != undefined ? letra = direcciones[direccionEditar].getLetra() : letra = undefined) : direcciones[direccionEditar].setLetra(letra);
      //}

      numDirecciones -= 1
    }
    

  }

  return direcciones;

}

export function pedirDatosPersona(persona?: Persona): Persona {

  //Nombre
  let nombre  : string | undefined;
  while (nombre == undefined) {
    persona != undefined ? console.log("Nombre actual:" + persona.getNombre()) : ""
    nombre = readlineSync.question("Introduce el nombre:");
    nombre == undefined ? (persona != undefined ? nombre = persona.getNombre() : "") : ""
  }

  //Apellidos
  let apellidos : string | undefined;
  while (apellidos == undefined) {
    persona != undefined ? console.log("Apellidos actuales:" + persona.getApellidos()) : ""
    apellidos = readlineSync.question("Introduce los apellidos:");
    apellidos == undefined ? (persona != undefined ? apellidos = persona.getApellidos() : "") : ""
  }

  //Edad
  let edad : number | undefined;
  while (edad == undefined) {
    persona != undefined ? console.log("Edad actual:" + persona.getEdad()) : ""
    edad = parseInt(readlineSync.question("Introduce la edad:"));
    edad == undefined ? (persona != undefined ? edad = persona.getEdad() : "") : ""
  }

  //DNI
  let dni:string | undefined = pedirDNI();

  //CUMPLEANIOS
  let cumpleanios: Date | undefined;
  while (cumpleanios == undefined) {
    persona != undefined ? console.log("Cumpleanios actual:" + persona.getCumpleanios()) : ""
    cumpleanios = new Date(readlineSync.question("Introduce la fecha de cumpleanios con el siguiente formato 'yyyy-mm-dd':"))
    cumpleanios == undefined ? (persona != undefined ? cumpleanios = persona.getCumpleanios() : "") : ""
  }


  //COLOR FAVORITO
  let colorFavorito : string | undefined;
  while (colorFavorito == undefined) {
    persona != undefined ? console.log("ColorFavorito actual:" + persona.getColorFavorito()) : ""
    colorFavorito = readlineSync.question("Introduce el color favorito:")
    colorFavorito == undefined ? (persona != undefined ? colorFavorito = persona.getColorFavorito() : "") : ""
  }

  //SEXO
  let sexo : string | undefined;
  while (sexo === undefined) {
    persona != undefined ? console.log("Sexo actual:" + persona.getSexo()) : ""
    sexo = readlineSync.question("Introduce el sexo (H:Hombre | M:Mujer):")
    sexo == undefined ? (persona != undefined ? sexo = persona.getSexo() : "") : (sexo === "H" || sexo === "M") ? "" : sexo = undefined;
  }

  //DIRECCION
  let direcciones : Direccion[] = aniadirOEditarDireccion(persona);
  
  //MAIL 
  let mail : Mail = new Mail(
    readlineSync.question("Introduce el tipo de correo electronico:"),
    readlineSync.question("Introduce el correo electronico:")
  );

  //TELEFONO  

  let tipoTelefono, numeroTelefono ;

  while (tipoTelefono === undefined){
    tipoTelefono= readlineSync.question("Introduce el tipo de telefono (MOVIL|FIJO):");
    tipoTelefono= validarTipoTelefono(tipoTelefono);
  }
  while(numeroTelefono === undefined){
    numeroTelefono=parseInt(readlineSync.question("Introduce el numero de telefono:"));
    numeroTelefono=validarNumeroTelefono(numeroTelefono);
  }

  let telefono : Telefono  = new Telefono(tipoTelefono, numeroTelefono);


  //NOTAS
  let notas : string = readlineSync.question("Introduce las notas:");

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