import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConexionService } from 'src/conexion.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  listado: Categoria[] = [];
  constructor(private conexion:ConexionService){
    //const dato:Observable<any>= this.conexion['leerApi']('categorias');

  }
}
