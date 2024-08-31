import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from "../../navs/admin/admin.component";
import { UserComponent } from "../../navs/user/user.component";
import { ProfileComponent } from "../../profile/profile.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detproductos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminComponent, UserComponent, ProfileComponent,
    FormsModule,RouterLink
  ],
  templateUrl: './detproductos.component.html',
  styleUrl: './detproductos.component.css'
})
export class DetproductosComponent {
  productos: any=[];

  constructor(public userService: UsersService, public router: Router){}
  ngOnInit():void{
    this.verificarRol();
    this.getviewproductos();
    
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


}
