import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionService } from 'src/conexion.service';
import { Categoria } from './interface/categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inciense';

  listado: Categoria[]=[];
  constructor(private conexion: ConexionService){
  const dato: Observable<any>=this.conexion.leerApi('categorias');
  console.log("entro en el listado");
  dato.subscribe(
    (resp:any)=>{
      let stat:number=resp.status;
      if(stat==200){
        this.listado=resp.data as Categoria[];
        console.log(this.listado);
       };
       })
      }
  }

