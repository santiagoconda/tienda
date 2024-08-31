import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router, Route, RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { AdminComponent } from "../../navs/admin/admin.component";


@Component({
  selector: 'app-updateproductos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, AdminComponent, RouterOutlet],
  templateUrl: './updateproductos.component.html',
  styleUrl: './updateproductos.component.css'
})
export class UpdateproductosComponent implements OnInit {
  data: any ={};
  route: any;
  imagen : string= '';
  activRouter: any;
  constructor(public userService: UsersService, public router: Router, activRouter: ActivatedRoute) {}
  ngOnInit(): void {
    let productosId = this.activRouter.snapshot.paramMap.get('id')
    console.log(productosId)
  }

  onSubmit(): void{
    this.userService.update(this.data.id, this.data).subscribe(() =>{
      this.router.navigateByUrl("productos");
    });
  }
  onFile(event:any){
    this.imagen = event.target.files[0];
  }
  
}
