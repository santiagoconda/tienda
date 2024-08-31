import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavsRoutingModule } from './navs-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavsRoutingModule, RouterLink,FormsModule, RouterOutlet
  ]
})
export class NavsModule { }
