import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { TablaComponent } from './tabla/tabla.component';
import { ProductosComponent } from './productos/productos.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path:'', redirectTo:'categoria', pathMatch:'full'},

  {path:'categoria', component:TablaComponent},
  {path:'editar',component:EditarComponent},
  {path:'agregar',component:AgregarComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
