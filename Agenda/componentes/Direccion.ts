export class Direccion {
    nombreCalle: string;
    numero: number;
    piso?: number;
    letra?: string;
    codigoPostal: string;
    poblacion: string;
    provincia: string;
  
    constructor(
      nombreCalle: string,
      numero: number,
      codigoPostal: string,
      poblacion: string,
      provincia: string,
      piso?: number,
      letra?: string
    ) {
      this.nombreCalle = nombreCalle;
      this.numero = numero;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
      this.piso = piso;
      this.letra = letra;
    }
  }