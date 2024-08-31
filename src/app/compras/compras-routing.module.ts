import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {path: 'comprar', component: ComprarComponent},
  {path: 'detalle/comprar', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
