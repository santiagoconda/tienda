import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from "../../profile/profile.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, ProfileComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
