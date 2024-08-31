import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { Iproductos } from '../../../interfaces/product.interface';
import { TotalComponent } from "../total/total.component";
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, RouterOutlet, TotalComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  products: Iproductos[] =[]
  constructor(public userService: UsersService, public router: Router){}
  ngOnInit(): void {
    this.userService.products.subscribe(products =>{
      this.products = products;
    })
  }
  productoComprado(){
    this.userService.verpedidos().subscribe(products=>{
      this.products = products
    })
    
  }
  guardar_pedido(){
    this.userService.registrarTodos().subscribe(pedidos =>{{
      console.log(pedidos)
      this.router.navigate(['/comprar'])
    }});
  }
  eliminarpro(indice: number){
    this.userService.borrar_produc(indice);
  }

}
