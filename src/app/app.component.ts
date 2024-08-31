import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,RegisterComponent,ProfileComponent,HttpClientModule,
    RouterOutlet, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [provideHttpClient({ withFetch: true })]
})
export class AppComponent {
  title = 'tienda';
}
