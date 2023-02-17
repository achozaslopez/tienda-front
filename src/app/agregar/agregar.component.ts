import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dato, ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  implements OnInit{

  datoNuevo: Dato={id_categoria:0,cat_nombre:'',cat_descripcion:''};

  constructor(private conexionService:ConexionService,private router:Router){}

  ngOnInit(): void {
    
  }

  agregar(){
    this.conexionService.guardar(this.datoNuevo).subscribe(
      resp=>{console.log(resp);
      this.router.navigate(['/categoria']);
      },
      err=>console.log('Error al agregar una categoria')
    );
  }

}
