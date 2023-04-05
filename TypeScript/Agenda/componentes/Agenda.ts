import { Persona } from "./Persona";

export class Agenda {
  private personas: Persona[];

  constructor() {
    this.personas = [];
  }

  public agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }

  public eliminarPersona(persona: Persona) {
    const index = this.personas.indexOf(persona);
    if (index !== -1) {
      this.personas.splice(index, 1);
    }
  }

  /*public buscarPersona(dni: string): Persona | undefined {
    return this.personas.find((persona) => persona.getDni() === dni);
  }*/

  public mostrarTodas() {
    console.log(this.personas);
  }

  /*public editarPersona(dni: string, datosActualizados: Partial<Persona>) {
    const persona = this.buscarPersona(dni);
    if (persona) {
      Object.assign(persona, datosActualizados);
    }
  }*/
}