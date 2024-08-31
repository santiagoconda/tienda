import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { UserComponent } from "../../navs/user/user.component";
import { AdminComponent } from "../../navs/admin/admin.component";

@Component({
  selector: 'app-detalleadmin',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, CommonModule, UserComponent, AdminComponent],
  templateUrl: './detalleadmin.component.html',
  styleUrl: './detalleadmin.component.css'
})
export class DetalleadminComponent implements OnInit{
  productos: any=[];
  productoId: number= 0

  constructor(public userService: UsersService, public router: Router, public activerouter: ActivatedRoute){}
  ngOnInit():void{
      this.userService.verproductos().subscribe(
        (data:any)=>{
          this.productos=data;
        }
      )
  }
  editarProducto(id: any){
    this.router.navigate(['actualizar', id])
  }
  nuevoProducto(){
    this.router.navigate(['productos'])
  }

  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }
  eliminar(id: number){
    if(confirm('Deseas Eliminar el producto?')){
      this.userService.delete(id).subscribe({
        next:()=>{
          this.ngOnInit();
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
      alert('Producto eliminado')
    }
  }
}
