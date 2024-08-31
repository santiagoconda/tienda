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
export class RegisterComponent {
  username: string ='';
  email: string = '';
  password: string ='';
  is_staff: boolean = false;

  constructor (public userService: UsersService, public router: Router){}
  register() {
    const user = {username: this.username, password: this.password, email: this.email, is_staff: this.is_staff};
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl("login");
    }),
    (error: any)=>{
      console.error('error al registrar', error)
    }
    }
}
