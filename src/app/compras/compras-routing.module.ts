import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { TotalComponent } from './total/total.component';
import { DetallecomprasComponent } from './detallecompras/detallecompras.component';
import { DetallepagoComponent } from './detallepago/detallepago.component';
const routes: Routes = [
  {path: 'comprar', component: ComprarComponent},
  {path: 'detalle/comprar', component: DetalleComponent},
  {path: 'total', component: TotalComponent},
  {path: 'detalle', component: DetallecomprasComponent},
  {path: 'detalle/pago', component: DetallepagoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
