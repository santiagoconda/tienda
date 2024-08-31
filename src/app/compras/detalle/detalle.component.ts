import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  productos: any= {}
  constructor(public userService: UsersService, public router: Router){}
  ngOnInit():void{
    this.getviewproductos();
  }
  
  getviewproductos(): void{
    this.userService.verproductos().subscribe(
      (data:any)=>{
        this.productos=data;
      }
    )
  }
  imagenUrl(item: any): string {
    return `http://localhost:8000${item.imagen}`;
  }

}
