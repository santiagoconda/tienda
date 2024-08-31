import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Iproductos } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public Cartproductos: Iproductos[] =[];
  private _products: BehaviorSubject<Iproductos[]> = new BehaviorSubject<Iproductos[]>([]);
  

  constructor(private http: HttpClient, private cookies: CookieService) {}
  get  products(){
    return this._products.asObservable();
  }
  addnuevoProducto(product: Iproductos){
    this.Cartproductos.push(product);
    this._products.next(this.Cartproductos);
  }
  borrar_produc(index: number){
    this.Cartproductos.splice(index, 1);
    this._products.next(this.Cartproductos);
  }
  verpedidos(): Observable<any>{
    return this.http.get("http://127.0.0.1:8000/lista/pedidos/")
  }
  
  registrar_pedidos(product: Iproductos):Observable<Iproductos>{
    return this.http.post<Iproductos>("http://127.0.0.1:8000/pedidos/",product)
  }
  registrarTodos(): Observable<Iproductos[]>{
    return this.http.post<Iproductos[]>("http://127.0.0.1:8000/pedidos/", this.Cartproductos)
    
  }
  register(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/register/", user);
  }
  registerProductos(data: FormData):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/producto/", data);
  }
  registerMetodoPago(data: FormData): Observable<any>{
    return this.http.post("http://127.0.0.1:8000/metodopago/", data);
  }
  login(user: any): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/login/", user);
  }
  setToken(token:string){
    this.cookies.set("token", token);
  }
  getToken(){
    return this.cookies.get("token")
  }
  profile(){
    const headers = new HttpHeaders().set('Authorization', `Token ${this.getToken()}`);
    return this.http.get("http://127.0.0.1:8000/profile/", {headers});
  }
  verpagos():Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/lista/pagos/")
  }
  verproductos(p0?: number): Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/lista/productos/")
  }
  
  is_taff(){
    return localStorage.getItem('is_staff') === 'true'; 
  }
  getUserProfile(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/profile/")
  }
  isAdmin(): Observable<boolean>{
    return this.getUserProfile().pipe(
      map(user => user.is_staff),
    )
  }
  update(id: number, form: any): Observable<any>{
    return this.http.put<Response>(`http://127.0.0.1:8000/productos/${id}/`, form)
  }
  delete(id: number):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/productos/${id}/eliminar/`)
  }
  eliminar_usuarios(id: number):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/eliminar/usuario/${id}/`)
  }
  eliminar_pagos(id: number):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/eliminar/pagos/${id}/`)
  }
  eliminar_pedidos(id: number):Observable<any>{
    return this.http.delete(`http://127.0.0.1:8000/eliminar/pedidos/${id}/`)
  }
  obtenerProducto(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/productos/${id}/ `);
  }
  cartItem():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/lista/cart/")
  }
  registerCart(productoId: number, ):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/cart/",{producto: productoId})
  }
  lista_usuarios(){
    return this.http.get<any>("http://127.0.0.1:8000/usuarios/") 
  }
  editar_usuarios(id: number, form: any):Observable<any>{
    return this.http.put<Response>(`http://127.0.0.1:8000/actualizar/usuarios/${id}/`, form)
  }
  filtrar_productos(filtros: {[key: string]: string}): Observable<any>{
    let params = new HttpParams();
    for (const key in filtros){
      if (filtros.hasOwnProperty(key)){
        params = params.set(key, filtros[key]);
      }
    }
    return this.http.get("http://127.0.0.1:8000/filtrar/", {params})
  }
}
