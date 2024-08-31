import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
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
  verproductos(): Observable<any>{
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
  update(id: number, formData: any): Observable<any>{
    return this.http.put("http://127.0.0.1:8000/productos/${id}", formData)
  }
  delete(id: number): Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/productos/#{id}/eliminar")
  }
  obtenerProducto(id: number): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/productos/${id}");
  }
  cartItem():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/lista/cart/")
  }
  registerCart(productoId: number, ):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/cart/",{producto: productoId})
  }
 
}
