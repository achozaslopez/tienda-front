import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  [x: string]: any;

  url ='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  leerRegistros():Observable<any>{
    return this.http.get(this.url);
  }

  leerUno(cat_nombre:string):Observable<any>{
    return this.http.get(this.url+'/'+cat_nombre);
  }

  guardar(dato:Dato):Observable<any>{
    return this.http.post(this.url,dato);
  }

  editar(cat_nombre:string, dato:Dato):Observable<any>{
    return this.http.put(this.url+'/'+cat_nombre, dato);
  }

  borrar(cat_nombre:string):Observable<any>{
    return this.http.delete(this.url+'/'+cat_nombre);
  }

}

export interface Dato{
  id_categoria:number;
  cat_nombre:string;
  cat_descripcion:string;

}
