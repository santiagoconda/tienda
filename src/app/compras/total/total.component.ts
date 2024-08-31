import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { map } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit {
  total: number = 0;
  constructor( public userService: UsersService){}
  ngOnInit(): void {
    this.userService.products
    .pipe(map(products=>{
      return products.reduce((prev, product) => {
        const price = Number(product.precio); 
        return prev + price;
      }, 0);
    }))
    .subscribe(valor =>{
      this.total = valor
    })
  }

}
