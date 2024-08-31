import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { subscribe } from 'diagnostics_channel';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from "../../navs/user/user.component";

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, CommonModule, UserComponent],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit  {

  constructor(public userService: UsersService, public router: Router){}
  nombre: string ='';
  nuip: number = 0;
  cardNumber: number = 0;
  cardExpiration: number = 0;
  cardCVV: number = 0;

  ngOnInit(): void {

  }
  registerpago(): void{
    const formData = new FormData
    formData.append('nombre', this.nombre),
    formData.append('nuip', this.nuip.toString()),
    formData.append('cardNumber', this.cardNumber.toString()),
    formData.append('cardExpiration', this.cardExpiration.toString()),
    formData.append('cardCVV', this.cardCVV.toString()),
    this.userService.registerMetodoPago(formData).subscribe(data =>{
      this.router.navigateByUrl("/verproductos");
    }, error => {
      console.error('error al registrar',error)
    });
    alert('Se realizo su compra con exito!!')
  }

}
