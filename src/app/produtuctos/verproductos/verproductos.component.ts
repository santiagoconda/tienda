import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { UserComponent } from "../../navs/user/user.component";
import { ProfileComponent } from "../../profile/profile.component";
import { Iproductos } from '../../../interfaces/product.interface';
import { DetalleComponent } from "../../compras/detalle/detalle.component";

@Component({
  selector: 'app-verproductos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule, RouterLink, UserComponent, ProfileComponent, DetalleComponent],
  templateUrl: './verproductos.component.html',
  styleUrl: './verproductos.component.css'
})
export class VerproductosComponent {
  productos: any=[];
  prod: Iproductos[] = [];
  filtros = {
    nombre: '',
    precio: ''
  };
  constructor(public userService: UsersService, public router: Router){}
  ngOnInit():void{
    this.verificarRol();
    this.getviewproductos();
    this.filtrar_productos();
    
  }
  public verificarRol(): void{
    this.userService.isAdmin().subscribe(isAdmin =>{
      if(isAdmin){
        this.router.navigate(['/detalleadmin']);
      }else{
        this.getviewproductos()
      }
    })

  }
  addCar(prod: Iproductos):void{
    this.userService.addnuevoProducto(prod)
  }
  getviewproductos(): void{
    this.userService.verproductos().subscribe(
      (data:any)=>{
        this.productos=data;
      }
    )
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }
  add(producto: any): void {
    const cantidad = 1;
    this.userService.registerCart(producto.id).subscribe(() => {
      alert('producto añadidio')
      this.router.navigateByUrl("comprar");
    });
  }
  loadProductos():void {
    this.userService.cartItem().subscribe(data => {
      this.productos = data

    })
  }
  onClick(product: Iproductos){
    this.userService.addnuevoProducto(product);
  }
  filtrar_productos(): void{
    this.userService.filtrar_productos(this.filtros).subscribe(
      data =>this.productos = data,
      error => console.error('error al filtrar', error)
    )
  }
  filtro():void{
    this.filtrar_productos();
  }

}
