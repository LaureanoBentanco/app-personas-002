import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private personasService: PersonasService, private router: Router){}
  personas: Persona[] = [];

  // tslint:disable-next-line: typedef
  ngOnInit(){
     // tslint:disable-next-line: one-variable-per-declaration

    this.personasService.obtenerPersonas().subscribe(

    /* observable no admite objetos de tipo Persona para que no de error se coloco en los paramatros de la funcion flecha de tipo Object */
    // tslint:disable-next-line: ban-types
    (personas: Object) => {
    this.personas = personas as Persona[];
    this.personasService.setPersonas(personas as Persona[]);
    }
    );

  }

  // tslint:disable-next-line: typedef
  agregar(): void{
    this.router.navigate(['personas/agregar']);
  }
}


