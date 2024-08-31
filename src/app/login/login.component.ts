import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(public userService: UsersService, public router: Router){}
  login() {
    const user = { username: this.username, password: this.password};
    this.userService.login(user).subscribe(data => {
      this.userService.setToken(data.token)
     
      this.router.navigate(['/verproductos']);
    });
  }

}
