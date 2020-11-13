import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jose Guadalupe',
    apellido: 'Cortes',
    correo: 'jose17y10@gmail.com',
    pais: ''
  }

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe( paises =>{
        this.paises = paises;

        this.paises.unshift({
          nombre: ' [Seleccione Pais]',
          codigo: ''
        })

        console.log(paises);
      });

  }

  guardar( forma: NgForm){
    console.log( forma );

    if ( forma.invalid ){
      Object.values(forma.controls).forEach( control =>{
        control.markAsTouched();
      });
    }

    console.log( forma.value );
  }

}
