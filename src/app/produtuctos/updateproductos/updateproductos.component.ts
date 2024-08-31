import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router,RouterOutlet } from '@angular/router';
import { UsersService } from '../../users.service';
import { AdminComponent } from "../../navs/admin/admin.component";
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-updateproductos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, AdminComponent, RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './updateproductos.component.html',
  styleUrl: './updateproductos.component.css'
})
export class UpdateproductosComponent implements OnInit {
  data: any = {}; 
  imagen: File | null = null; 
  editarPro: FormGroup;

  constructor(
    public userService: UsersService,
    public router: Router,
    public activerouter: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.editarPro = this.fb.group({
      nombre: [''],
      descripcion: [''],
      cantidad: [''],
      precio: [''],
    });
  }

  ngOnInit(): void {
    const productosId = this.activerouter.snapshot.paramMap.get('id');
    if (productosId) {
      this.userService.verproductos().subscribe(data => {
        this.data = data[0]
        this.editarPro.patchValue({
          nombre: this.data.nombre,
          descripcion: this.data.descripcion,
          cantidad: this.data.cantidad,
          precio: this.data.precio,
        });
        console.log(this.editarPro);
      });
    }
  }

  onSubmit(): void {
    const productoId = this.activerouter.snapshot.paramMap.get('id');
    if (productoId) {
      const formData = new FormData();
      formData.append('nombre', this.editarPro.get('nombre')?.value);
      formData.append('descripcion', this.editarPro.get('descripcion')?.value);
      formData.append('cantidad', this.editarPro.get('cantidad')?.value);
      formData.append('precio', this.editarPro.get('precio')?.value);
      if (this.imagen) {
        formData.append('imagen', this.imagen);
      }
      this.userService.update(+productoId, formData).subscribe(() => {
        console.log('actualizado');
        this.router.navigate(['/detalleadmin'])
      });
    }
  }

  onFile(event: any): void {
    this.imagen = event.target.files[0]
  }
}