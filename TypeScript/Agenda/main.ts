import { Agenda } from "./componentes/Agenda";
import { pedirDatosPersona } from "./servicios/pedirDatos";
import * as readlineSync from 'readline-sync';

// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu(): number | null {
    console.log("Menu:");
    console.log("1. Agregar persona");
    console.log("2. Editar persona");
    console.log("3. Buscar persona");
    console.log("4. Salir");
  
    const opcion = readlineSync.questionInt("Ingrese una opción: ");
  
    if (isNaN(opcion) || opcion < 1 || opcion > 4) {
      console.log("Opción inválida, por favor ingrese una opción válida.");
      return null;
    }
  
    return opcion;
  }
  
  // Creamos una instancia de la agenda
  const miAgenda = new Agenda();
  
  // Mostramos el menú y procesamos la opción del usuario
  let opcion = mostrarMenu();
  while (opcion !== 4) {
    switch (opcion) {
      case 1: // Agregar persona
        const nuevaPersona = pedirDatosPersona();
        miAgenda.agregarPersona(nuevaPersona);
        console.log("Persona agregada correctamente:");
       /* console.log(nuevaPersona);*/
        opcion = mostrarMenu();
        break;
      //case 2: // Buscar persona
      //case 3: // Editar persona
        
      default:
        console.log("Opción inválida. Por favor, intente de nuevo.");
        break;
    }
    
  }