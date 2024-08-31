import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from "../navs/admin/admin.component";
import { UsersService } from '../users.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-adminprofile',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, AdminComponent,CommonModule ],
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.css'
})
export class AdminprofileComponent implements OnInit{
  usuarios: any = []; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  // router: any;
  constructor(public userService: UsersService, public router: Router) {}
  ngOnInit(): void {
    this.userService.lista_usuarios().subscribe(
      (data : any)=>{
        this.usuarios=data
      }
    )
    this.getUserList();
  }
  getUserList(): void {
    this.userService.lista_usuarios().subscribe(
      (data: any) => {
        this.usuarios = data;
      },
      (error: any) => {
        console.error('Error al obtener el perfil:', error);
        this.error = 'No se pudo obtener la información del perfil.';
        this.loading = false; 
      }
    );
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }
  editarUsuarioId(id: any){
    this.router.navigate(['editprofile', id])
  }
  eliminar_Usuarios(id: number){
    console.log(id)
    if(confirm('Deseas Eliminar el producto?')){
      this.userService.eliminar_usuarios(id).subscribe({
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
  nuevo_usuario(){
    this.router.navigate(['/register'])
  }
}
