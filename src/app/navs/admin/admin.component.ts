import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { ProfileComponent } from "../../profile/profile.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, ProfileComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(public userService:UsersService, public router: Router){}
  verHome(){
    this.router.navigate(['/verproductos']);
  }

}
