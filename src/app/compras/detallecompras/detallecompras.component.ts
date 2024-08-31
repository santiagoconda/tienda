import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { AdminComponent } from "../../navs/admin/admin.component";

@Component({
  selector: 'app-detallecompras',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, CommonModule, AdminComponent],
  templateUrl: './detallecompras.component.html',
  styleUrl: './detallecompras.component.css'
})
export class DetallecomprasComponent implements OnInit {
  constructor (public userService: UsersService, public router: Router){}
  pedidos: any ={}
  ngOnInit(): void {
    this.userService.verpedidos().subscribe(
      (data : any)=>{
        this.pedidos=data
      }
    )
  }
  eliminar_pedidos(id: number){
    if(confirm('Deseas Eliminar el producto?')){
      this.userService.eliminar_pedidos(id).subscribe({
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
