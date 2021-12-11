import { Injectable } from '@angular/core';
import { DataServices } from './dataServices';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];


  constructor(private dataServices: DataServices){}

    // tslint:disable-next-line: typedef
    setPersonas(personas: Persona[]){
      this.personas = personas;
  }

  // tslint:disable-next-line: typedef
  encontrarPersona(index: number){
    const persona: Persona = this.personas[index];
    return persona;
  }
  // tslint:disable-next-line: typedef
  agregarPersona(personas: Persona) {
    if (this.personas == null){
      this.personas = [];
    }
    this.personas.push(personas);
    this.dataServices.guardarPersonas(this.personas);

  }


  // tslint:disable-next-line: typedef
  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }
  // tslint:disable-next-line: typedef
  modificarPersona(index: number, persona: Persona){
    const  persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, this.personas);
  }
  // tslint:disable-next-line: typedef
  eliminarPersona(index: number){
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    this.modificarPersonas();
  }

  // tslint:disable-next-line: typedef
  modificarPersonas(){
    if (this.personas != null){
      this.dataServices.guardarPersonas(this.personas);
    }

  }


}
