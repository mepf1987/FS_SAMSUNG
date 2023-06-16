import { Agenda } from "./componentes/Agenda";
import { Direccion } from "./componentes/Direccion";
import { Persona} from './componentes/Persona';
import { Mail, EmailType} from './componentes/Mail';
import { Telefono , PhoneType} from './componentes/Telefono';

import * as readlineSync from 'readline-sync';

// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu(): number | null {
    console.log("Menu:");
    console.log("1. Agregar persona");
    console.log("2. Buscar persona");
    console.log("3. Editar persona");
    console.log("4. Cantidad de personas registradas");
    console.log("5. Salir");
  
    const opcion = readlineSync.questionInt("Ingrese una opcion: ");
  
    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
      console.log("Opción inválida, por favor ingrese una opcion válida.");
      return null;
    }
  
    return opcion;
  }

// Función para escoger el parametro a editar
function escogerParametroAEditar(): number | undefined {
  console.log("¿Que parametro deseas editar?");
  console.log("1. Agregar persona");
  console.log("2. Buscar persona");
  console.log("3. Editar persona");
  console.log("4. Cantidad de personas registradas");
  console.log("5. Salir");

  const opcion = readlineSync.questionInt("Ingrese una opcion: ");

  if (isNaN(opcion) || opcion < 1 || opcion > 5) {
    console.log("Opción inválida, por favor ingrese una opcion válida.");
    return undefined;
  }

  return opcion;
}

  function mostrarPersonas(){
    miAgenda.mostrarTodas();
  }

  function preCargaPersonas() {
    
    // DATOS PERSONA 1
    let direccion1Persona1: Direccion = new Direccion(1,"Dr.Corbal",10,"36207","Vigo","Pontevedra");
    let mail1Persona1: Mail = new Mail( EmailType.PERSONAL, "anaP93@mail.com");
    let telefono1Persona1: Telefono = new Telefono(PhoneType.MOVIL, 666777666);

    let persona1: Persona= new Persona( "Ana","Pardo","95287790D",30, new Date("1993-06-07"), "Verde", "M",[direccion1Persona1],[mail1Persona1],[telefono1Persona1],"Esta es la persona 1");
    miAgenda.agregarPersona(persona1);

    // DATOS PERSONA 2
    let direccion1Persona2: Direccion = new Direccion(2,"Calle Alarcon",35,"33204","Gijon","Asturias");
    let mail1Persona2: Mail = new Mail( EmailType.PERSONAL, "milaPNavas@mail.com");
    let mail2Persona2: Mail = new Mail( EmailType.EMPRESA, "PNavas@mail.com");
    let telefono1Persona2: Telefono = new Telefono(PhoneType.MOVIL, 677677677);

    let persona2: Persona= new Persona( "Milagros","Prado Navas","12407125M",51, new Date("1972-03-17"), "Rosa", "M",[direccion1Persona2],[mail1Persona2, mail2Persona2],[telefono1Persona2],"Esta es la persona 2");
    miAgenda.agregarPersona(persona2);

    // DATOS PERSONA 3
    let direccion1Persona3: Direccion = new Direccion(3,"Calle Alcalde Jesus Prieto",5,"28907","Getafe","Madrid");
    let mail1Persona3: Mail = new Mail( EmailType.PERSONAL, "lulo@mail.com");
    let telefono1Persona3: Telefono = new Telefono(PhoneType.MOVIL, 613654632);

    let persona3: Persona= new Persona( "Luis","Lopez","81754026C",40, new Date("1983-03-17"), "Amarillo", "H",[direccion1Persona3],[mail1Persona3],[telefono1Persona3],"Esta es la persona 3");
    miAgenda.agregarPersona(persona3);


  }

  function editarDatosPersonas() {
    
  // 


  }
  
  // Creamos una instancia de la agenda
  const miAgenda = new Agenda();

  // Pre-cargar 3 personas
  preCargaPersonas();
  console.log("*** Personas precargadas ***");
  mostrarPersonas();
  editarDatosPersonas();
  console.log("*** Personas editadas ***");
  mostrarPersonas();

  let verMenu :string = readlineSync.question("Desea ver el menu de opciones (S|N):");

  if(verMenu === 'S'){
      // Mostramos el menú y procesamos la opción del usuario
      let opcion = mostrarMenu();

      while (opcion !== 5) {
        switch (opcion) {
          case 1: // Agregar persona
            miAgenda.agregarPersona();
            console.log("Persona agregada correctamente:");
            break;
          case 2: // Buscar persona
            var personaEncontrada = miAgenda.buscarPersona();
            personaEncontrada!==null? console.log("Persona encontrada:", personaEncontrada):console.log("Persona NO encontrada"); 
            break;
          case 3: // Editar persona
            var personaEncontrada = miAgenda.buscarPersona();
            let paramToEdit=escogerParametroAEditar();
            personaEncontrada!==undefined && paramToEdit!== undefined ?miAgenda.editarPersona(paramToEdit,personaEncontrada):console.log("Persona NO encontrada");
            break;
          case 4: 
            var numeroPersonas= miAgenda.contarPersonas();
            console.log("Hay registradas : ", numeroPersonas , " personas");
            break;  
          default:
            console.log("Opcion invalida. Por favor, intente de nuevo.");
            break;
        }
        opcion = mostrarMenu();
        }
  }