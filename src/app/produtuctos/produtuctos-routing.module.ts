import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { NgIf } from '@angular/common';
import { DetproductosComponent } from './detproductos/detproductos.component';
import { DetalleadminComponent } from './detalleadmin/detalleadmin.component'
import { UpdateproductosComponent } from './updateproductos/updateproductos.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'verproductos', component: DetproductosComponent},
  {path: 'detalleadmin', component: DetalleadminComponent},
  {path: 'actualizar/:id', component: UpdateproductosComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutuctosRoutingModule { }
