import { Persona } from './persona.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    // tslint:disable-next-line: typedef
    cargarPersonas(){
      return this.httpClient.get('https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos.json');
    }

    // tslint:disable-next-line: typedef
    guardarPersonas(personas: Persona[]){

    this.httpClient.put('https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos.json', personas).subscribe(
      response =>  console.log( ' resultado de Guardar Personas' + response),
      error => console.log('error al guardar Persona' + error)
    );

    }

    // tslint:disable-next-line: typedef
    modificarPersona(index: number, personas: Persona[]){

      let url: string;
      url = ' https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos' + index + '.json';

      this.httpClient.put (url, personas).subscribe(response => console.log('respuesta de Modificar Persona' + response),
                                                    error => console.log('error al modificar Persona' + error));
    }

    // tslint:disable-next-line: typedef
    eliminarPersona(index: number){
      let url: string;
      url = ' https://listadopersonas-4e9fa-default-rtdb.firebaseio.com/datos' + index + '.json';

      this.httpClient.delete (url).subscribe(respuesta => console.log('respuesta de borrar Persona' + respuesta),
                                             error => console.log('error al borrar Persona' + error));

    }
}
