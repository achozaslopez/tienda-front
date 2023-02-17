import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from '../../conexion.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  categoriaNueva: Categoria={id_categoria:0,cat_nombre:'',cat_descripcion:''};

  constructor(private conexionService:ConexionService,private router:Router){}

  agregar(){
    this.conexionService.postApi('categorias', this.categoriaNueva).subscribe(
      resp=>{console.log(resp);
      this.router.navigate(['/categoria']);
      },
      err=>console.log('Error al agregar una categoria')
    );
  }

}
