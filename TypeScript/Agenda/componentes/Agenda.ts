import { Persona } from "./Persona";
import { pedirDatosPersona, pedirDNI } from "../servicios/pedirDatos";

export class Agenda {
  private personas: Persona[];

  constructor() {
    this.personas = [];
  }

  public agregarPersona(nuevaPersona : Persona|undefined = undefined) {
    if(nuevaPersona  === undefined){
      nuevaPersona = pedirDatosPersona();
    }
    this.personas.push(nuevaPersona);
  }

  public eliminarPersona(persona: Persona) {
    const index = this.personas.indexOf(persona);
    if (index !== -1) {
      this.personas.splice(index, 1);
    }
  }
 
  public buscarPersona( dni :string|undefined = undefined) {

    (dni === undefined)?dni = pedirDNI() :"";
    let personaEncontrada: Persona | undefined = undefined;
    this.personas.forEach((persona) => {
      if (persona.getDni() === dni) {
        personaEncontrada = persona;
      }
    });
    
    return personaEncontrada;
  }

  public contarPersonas() {
    return this.personas.length;
  }

  public mostrarTodas() {
    console.log(JSON.stringify(this.personas));
  }

  public editarPersona( paramToEdit:number , dni :string|undefined = undefined ) {
    let personaAEditar: Persona|undefined= this.buscarPersona(dni);

    if(personaAEditar  === undefined){
      console.log(JSON.stringify(personaAEditar));
      if(paramToEdit===1){

      }
    }
    

  }

}
