import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConexionService } from 'src/conexion.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-forminsert',
  templateUrl: './forminsert.component.html',
  styleUrls: ['./forminsert.component.css']
})
export class ForminsertComponent implements OnInit{

  id=1;
  id_categoria:number;
  cat_nombre:string;
  cat_definicion:string;

  constructor(private conexionService:ConexionService){}

  ngOnInit(): void {
    
  }

  getCategoria(){}

  addCategoria(categoria:Categoria){
    
  }

}
