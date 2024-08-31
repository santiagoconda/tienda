import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { AdminComponent } from "../../navs/admin/admin.component";

@Component({
  selector: 'app-detallepago',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, AdminComponent],

  templateUrl: './detallepago.component.html',
  styleUrl: './detallepago.component.css'
})
export class DetallepagoComponent {
  constructor (public userService: UsersService, public router: Router){}
  pagos: any ={}
  ngOnInit(): void {
    this.userService.verpagos().subscribe(
      (data : any)=>{
        this.pagos=data
      }
    )
  }
  eliminar_pagos(id: number){
    if(confirm('Deseas Eliminar el producto?')){
      this.userService.eliminar_pagos(id).subscribe({
        next:()=>{
          this.ngOnInit();
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
      alert('Se elimino el pedido conexito!!')
    }
  }
}
