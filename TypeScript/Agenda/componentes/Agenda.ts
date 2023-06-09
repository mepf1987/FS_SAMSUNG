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
    if(dni === undefined){
      dni =  pedirDNI()
    }
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
    console.log(this.personas);
  }

  public editarPersona(persona: Persona) {
    let personaAEditar: Persona|undefined = persona;
    if(personaAEditar  === undefined){
      personaAEditar= this.buscarPersona();
    }
  }

}
