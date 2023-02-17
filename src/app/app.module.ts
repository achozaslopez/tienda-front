import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TablaComponent } from './tabla/tabla.component';
import { ForminsertComponent } from './forminsert/forminsert.component';
import { SeparadorComponent } from './separador/separador.component';
import { FooterComponent } from './footer/footer.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { FormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { ProductosComponent } from './productos/productos.component';



const routes:Routes=[
  { path:'categoria',component:TablaComponent},
  //{ path:'productos',component:ProductosComponent}
  { path:'usuario', component:UserSignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    TablaComponent,
    ForminsertComponent,
    SeparadorComponent,
    FooterComponent,
    UserSigninComponent,
    UserSignupComponent,
    AgregarComponent,
    EditarComponent,
    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
