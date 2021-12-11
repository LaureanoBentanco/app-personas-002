
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(private personaService: PersonasService, private router: Router, private route: ActivatedRoute){}


  // tslint:disable-next-line: typedef
  ngOnInit(){
    // tslint:disable-next-line: no-string-literal
    this.index = this.route.snapshot.params['id'];
    // tslint:disable-next-line: no-string-literal
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1){

      const  persona: Persona =  this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }


  // tslint:disable-next-line: typedef
  onGuardarPersona(){
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index, persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }

    this.router.navigate(['personas']);
  }

  // tslint:disable-next-line: typedef
  eliminarPersona(){
    if (this.index != null){
      this.personaService.eliminarPersona(this.index);
      this.router.navigate(['personas']);
      }
    }
  }





