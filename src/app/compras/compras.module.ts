import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FormsModule,
    RouterOutlet
  ]
})
export class ComprasModule { }
