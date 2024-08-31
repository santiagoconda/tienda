import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: any = {}; 
  loading: boolean = true; 
  error: string | null = null;
  is_staff: boolean = false 
  router: any;

  constructor(public userService: UsersService) {}
  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged(): void {
    this.userService.profile().subscribe(
      (user: any) => {
        this.user = user;
        this.is_staff = user.isstaff
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
}
