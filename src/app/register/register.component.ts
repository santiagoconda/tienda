import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent { first_name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  is_staff: boolean = false;
  imagen: File | null = null;

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    if (!this.imagen) {
      console.error('Imagen es requerida');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', this.imagen);
    formData.append('first_name', this.first_name);
    formData.append('username', this.username);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('is_staff', String(this.is_staff));

    this.userService.register(formData).subscribe(
      (data: any) => {
        this.userService.setToken(data.token);
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Error al registrar', error);
      }
    );
    }
    onFile(event: any) {
      this.imagen = event.target.files[0] || null;
    }
  }
