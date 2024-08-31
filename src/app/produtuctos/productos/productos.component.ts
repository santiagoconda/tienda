import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "../../navs/admin/admin.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, CommonModule, AdminComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  imagen: string = '';
  nombre: string ='';
  descripcion: string = '';
  cantidad : number = 0;
  precio: number =0;
  isAdmin=false;
  constructor(public userserService: UsersService, public router: Router){}
  ngOnInit(): void{
    this.userserService.isAdmin().subscribe(isAdmin =>{
      this.isAdmin = isAdmin;
    });
  }
  onFile(event:any){
    this.imagen = event.target.files[0];
  }
  registerProductos(): void{
    if (!this.isAdmin){
      alert('No tienes permisos para realizar esta acción');
      return;
    }
    const formData = new FormData ();
    formData.append('imagen', this.imagen);
    formData.append('nombre', this.nombre);
    formData.append('descripcion', this.descripcion);
    formData.append('cantidad', this.cantidad.toString());
    formData.append('precio', this.precio.toString());
    this.userserService.registerProductos(formData).subscribe(data =>{
      this.router.navigateByUrl("verproductos");
    }, error =>{
      console.error('error al registrar', error);
    });
    
  }

}




