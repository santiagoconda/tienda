import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', loadChildren: () => import('./produtuctos/produtuctos.module').then(m => m.ProdutuctosModule)},
    {path: '', loadChildren:() => import('./navs/navs.module').then(m => m.NavsModule)},
    {path: '', loadChildren:() => import('./compras/compras.module').then(m => m.ComprasModule)},
    // {path: '', redirectTo: '/productos', pathMatch: 'full' },
    
    
]