import { Direccion } from "../componentes/Direccion";
import { Mail } from "../componentes/Mail";
import { Telefono } from "../componentes/Telefono";
import { Persona } from "../componentes/Persona";
import * as readlineSync from 'readline-sync';


export function pedirDNI(): string {
  const dni = readlineSync.question("Introduce el DNI:");
  return dni;
}

export function pedirDatosPersona(): Persona {
    const nombre =readlineSync.question("Introduce el nombre:");
    /*const apellidos = prompt("Introduce los apellidos:");
    const edad = parseInt(prompt("Introduce la edad:"));*/
    const dni = pedirDNI();
   /* const cumpleanos = prompt("Introduce la fecha de cumpleaños:");
    const colorFavorito = prompt("Introduce el color favorito:");
    const sexo = prompt("Introduce el sexo:");*/
    /*const direccion = new Direccion(
      prompt("Introduce la calle:"),
      parseInt(prompt("Introduce el número:")),
      parseInt(prompt("Introduce el piso:")),
      prompt("Introduce la letra:"),
      prompt("Introduce el código postal:"),
      prompt("Introduce la población:"),
      prompt("Introduce la provincia:")
    );*/
    /*const telefono = new Telefono(
      prompt("Introduce el tipo de teléfono:"),
      prompt("Introduce el número de teléfono:")
    );*/
    /*const mail = new Mail(prompt("Introduce el correo electrónico:"));
    const notas = prompt("Introduce las notas:");*/
  
    return new Persona(
      nombre,
      dni/*,
      apellidos,
      edad,
      cumpleanos,
      colorFavorito,
      sexo,
      direccion,
      [telefono],
      [mail],
      notas*/
    );
  }