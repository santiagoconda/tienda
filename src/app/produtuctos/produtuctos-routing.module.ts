import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DetalleadminComponent } from './detalleadmin/detalleadmin.component'
import { UpdateproductosComponent } from './updateproductos/updateproductos.component';
import { VerproductosComponent } from './verproductos/verproductos.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'detalleadmin', component: DetalleadminComponent},
  {path: 'actualizar/:id', component: UpdateproductosComponent},
  {path: 'verproductos', component: VerproductosComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutuctosRoutingModule { }
