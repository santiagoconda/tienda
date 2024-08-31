import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-ediprofile',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './ediprofile.component.html',
  styleUrl: './ediprofile.component.css'
})
export class EdiprofileComponent implements OnInit {
  data: any = {}; 
  imagen: File | null = null; 
  editarUsuario: FormGroup;

  constructor(
    public userService: UsersService,
    public router: Router,
    public activerouter: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.editarUsuario = this.fb.group({
      first_name: [''],
      username: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    const productosId = this.activerouter.snapshot.paramMap.get('id');
    if (productosId) {
      this.userService.lista_usuarios().subscribe(data => {
        this.data = data.find((user: { id: number; }) => user.id === +productosId);
        // this.data = data[0]
        this.editarUsuario.patchValue({
          first_name: this.data.first_name,
          username: this.data.username,
          email: this.data.email,
          password: this.data.password,
        });
        console.log(this.editarUsuario);
      });
    }
  }

  onSubmit(): void {
    const usuarioId = this.activerouter.snapshot.paramMap.get('id');
    if (usuarioId) {
      const formData = new FormData();
      formData.append('first_name', this.editarUsuario.get('first_name')?.value);
      formData.append('username', this.editarUsuario.get('username')?.value);
      formData.append('email', this.editarUsuario.get('email')?.value);
      formData.append('password', this.editarUsuario.get('password')?.value);
      if (this.imagen) {
        formData.append('imagen', this.imagen);
      }
      this.userService.editar_usuarios(+usuarioId, formData).subscribe(() => {
        console.log('actualizado');
        this.router.navigate(['/detalleadmin'])
      });
      alert('producto Actualizado')
    }
  }

  onFile(event: any): void {
    this.imagen = event.target.files[0]
  }
  
}
